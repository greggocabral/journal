(ns journal.core
  (:require [rum.core :as rum :refer [defc defcs]]
            [rao.rum :as rao]
            [goog.dom :as dom]
            [goog.string.format :as format]
            [cljs.reader :as reader]
            [cognitect.transit :as transit]))

;; ===========================================================================
;; General Utils

(defn maybe-str->int [s]
  (try
    (js/parseInt s)
    (catch js/Error t
      nil)))

(defn get-item-value [item]
  (case (.-type item)
    "checkbox" (.-checked item)
    ;;expand with other type specification when needed
    (.-value item)))

(defn form->map [form]
  (let [elements (.-elements form)
        items (->> (.-length elements)
                   maybe-str->int
                   range
                   (map #(.item elements %)))
        keys (map #(keyword (.-name %)) items)
        values (map #(get-item-value %) items)]
    (zipmap keys values)))

(defn set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (let [w (transit/writer :json)]
    (.setItem (.-localStorage js/window) key (transit/write w val))))

(defn get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (let [r (transit/reader :json)]
    (transit/read r (.getItem (.-localStorage js/window) key))))

(defn get-section-ids [state]
  (->> (:questions state)
       (map :section-id)
       set
       vec))

(defn get-question-ids [state]
  (->> (:questions state)
       (map :section-id)
       set
       vec))

;; ===========================================================================
;; Config

(def default-time 300)

(def empty-state
  {:active-modal :none
   :timer {:count default-time :state :stopped}
   :sections [{:id 1 :text "Early morning"}
              {:id 2 :text "Late night"}]
   :questions [{:id 1 :section-id 1 :text "What is making me happy today?"}
               {:id 2 :section-id 1 :text "Things that I could solve today and would make me feel great"}
               {:id 3 :section-id 1 :text "Daily affirmations. I am..."}
               {:id 4 :section-id 2 :text "Amazing things that happened today..."}
               {:id 5 :section-id 2 :text "How could I have made today even better?"}]
   :answers [{:id 1 :question-id 1 :text ""}
             {:id 2 :question-id 1 :text ""}
             {:id 3 :question-id 1 :text ""}
             {:id 4 :question-id 2 :text ""}
             {:id 5 :question-id 2 :text ""}
             {:id 6 :question-id 2 :text ""}
             {:id 7 :question-id 3 :text ""}
             {:id 8 :question-id 3 :text ""}
             {:id 9 :question-id 3 :text ""}
             {:id 10 :question-id 4 :text ""}
             {:id 11 :question-id 4 :text ""}
             {:id 12 :question-id 4 :text ""}
             {:id 13 :question-id 5 :text ""}
             {:id 14 :question-id 5 :text ""}
             {:id 15 :question-id 5 :text ""}]})

;; ===========================================================================
;; Events

(defn get-today-string []
  (let [date (js/Date.)
        year (.getFullYear date)
        month (inc (.getMonth date))
        day (.getDate date)]
    (goog.string.format "%s-%s-%s" year month day)))

(defn form-data->answers [state form-data]
  (map (fn [answer]
         (let [text (get form-data (keyword (str (:id answer))))]
           (merge answer {:text text})))
       (:answers state)))

(defn store-form-data! [state]
  (let [form-data (form->map (dom/getElement "main-form"))
        answers (form-data->answers state form-data)
        date-string (get-today-string)]
   (set-item! date-string {:sections (:sections state)
                           :questions (:questions state)
                           :answers answers})))

(defn load-form-data [state date-string]
  (if-let [stored-data (get-item date-string)]
    (merge state stored-data)
    state))

;; ===========================================================================
;; Timer

(defn seconds->time [seconds]
  (let [mins (.floor js/Math (/ seconds 60))
        secs (- seconds (* mins 60))]
    (goog.string.format "%02d:%02d" mins secs)))

;; ===========================================================================
;; UI Components

(defc render-answers [state question-id]
  (let [question-answers (filter #(= question-id (:question-id %)) (:answers state))
        starting-id (apply min (map :id question-answers))]
    (for [{:keys [id text]} question-answers]
      [:div.control.has-icons-left.margin {:key id}
       [:input.input {:name id :placeholder text}]
       [:span.icon.is-small.is-left (str (inc (- id starting-id)))]])))

(defc render-questions [state section-id]
  (let [section-questions (filter #(= section-id (:section-id %)) (:questions state))]
    (for [{:keys [id text]} section-questions]
      [:div.section.is-small {:key id}
       [:h2.subtitle {} text]
       [:div
        (render-answers state id)]])))

(defc render-sections [state]
  (for [{:keys [id text]} (:sections state)]
    [:div.section.is-medium {:key id}
     [:h1.title.has-text-centered {} text]
     [:div
      (render-questions state id)]]))

;; ===========================================================================
;; UI Layout

(defcs app <
  (rao/wire empty-state
            (fn step [state [action {:keys [value]}]]
              (case action
                :load (load-form-data state value)
                :modal/start (assoc state :active-modal :start)
                :modal/close (assoc state :active-modal :none)
                :timer/set-running (assoc-in state [:timer :state] :running)
                :timer/set-stopped (-> state
                                      (assoc-in [:timer :state] :stopped)
                                      (assoc-in [:timer :count] default-time))
                :timer/tick (update-in state [:timer :count] dec)
                state))
            (fn effect! [state [action {:keys [value]} {:keys [rao/d!]}]]
              (cond
                (= action :save)
                (store-form-data! state)

                (and (= action :timer/start) (not (= (:state (:timer state)) :running)))
                (do
                  (def interval (.setInterval js/window (fn [_] (d! :timer/tick {})) 1000))
                  (d! :timer/set-running {}))

                (and (= action :timer/reset) (not (= (:state (:timer state)) :stopped)))
                (do
                  (.clearInterval js/window interval)
                  (d! :timer/set-stopped {}))

                :else
                nil)))
  {:will-mount (fn [{:keys [rao/d!] :as rum-state}]
                 (d! :load {:value (get-today-string)})
                 rum-state)}
  [{:keys [rao/state rao/d!]} state]
  [:div.container.is-fluid
;; Header
   [:div.section
    [:div.columns.level.is-mobile
     [:div.column.is-half.level-item.has-text-centered
       [:h1.title "Journal"]]
     [:div.column.is-half.level-item.has-text-centered
       [:h2.subtitle (get-today-string)]]]]
;; Timer
   [:div
    [:div.column.has-text-centered
     [:div.card
       [:div.card-content
        [:div.title
         [:h1.title (seconds->time (:count (:timer state)))]]]
       [:footer.card-footer
        [:div.card-footer-item
         [:button.button.is-white {:type  "button"
                                   :on-click (fn [_]
                                               (d! :modal/start {}))}
          "Start journaling"]]
        [:p.card-footer-item
         [:button.button.is-white {:type  "button"
                                    :on-click (fn [_]
                                                (d! :timer/reset {}))}
          "Reset"]]]]]]
;; Morning section
   [:div.columns
    [:div.column
     [:form {:id "main-form" :name "main-form"}
      [:div {:key 1}
       [:h1.title.has-text-centered {} (:text (first (:sections state)))]
       [:div
        (render-questions state 1)]]]]
    [:div.column
     [:div
      [:button.button.is-large.is-fullwidth.is-white
       {:type  "button"
        :on-click (fn [_]
                    (d! :save {}))}
       "Save entry"]]]
;; Night section
    [:div.column
     [:form {:id "main-form" :name "main-form"}
      [:div.section.is-medium {:key 2}
       [:h1.title.has-text-centered {} (:text (second (:sections state)))]
       [:div
        (render-questions state 2)]]]]
    [:div.column
     [:div
      [:button.button.is-large.is-fullwidth.is-white
       {:type  "button"
        :on-click (fn [_]
                    (d! :save {}))}
       "Save entry"]]]]
;; Modal
   (case (:active-modal state)
     :start  [:div.modal.is-active
               [:div.modal-background]
               [:div.modal-card
                [:header.modal-card-head
                 [:p.modal-card-title "Start Journaling Session"]
                 [:button.delete {:on-click (fn [_]
                                              (d! :modal/close {}))}]]
                [:section.modal-card-body "Turn on flight mode. Then start journaling out your day."]
                [:footer.modal-card-foot
                 [:button.button {:on-click (fn [_]
                                              (do
                                                (d! :modal/close {})
                                                (d! :timer/start {})))}
                  "Start"]
                 [:button.button "Cancel"]]]]
     nil)])


(rum/mount (app)
           (. js/document (getElementById "app")))
