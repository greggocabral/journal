(ns journal.core
  (:require [rum.core :as rum :refer [defc defcs]]
            [rao.rum :as rao]
            [goog.string :as gstr]
            [goog.string.format]
            [goog.dom :as dom]
            [cljs.reader :as reader]
            [journal.timer :as timer]
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

(def empty-state
  {:sections [{:id 1 :text "Morning"}
              {:id 2 :text "Night"}]
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
    (gstr/format "%s-%s-%s" year month day)))

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

;;get all date strings

;;get data from datestring
(defn get-form-data [date-string]
  (get-item date-string))

(defn load-form-data [state date-string]
  (if-let [stored-data (get-item date-string)]
    stored-data
    state))

;;get previous date set-running

;;get next date string

;; ===========================================================================
;; UI Components
(defc render-answers [state question-id]
  (let [question-answers (filter #(= question-id (:question-id %)) (:answers state))
        starting-id (apply min (map :id question-answers))]
    (for [{:keys [id text]} question-answers]
      [:div {:key id}
       [:label (str (inc (- id starting-id)))]
       [:textarea.input {:rows "1" :cols "60" :name id :placeholder text}]])))

(defc render-questions [state section-id]
  (let [section-questions (filter #(= section-id (:section-id %)) (:questions state))]
    (for [{:keys [id text]} section-questions]
      [:div {:key id}
       [:h2 {} text]
       [:div
        (render-answers state id)]])))

(defc render-sections [state]
  (for [{:keys [id text]} (:sections state)]
    [:div.section {:key id}
     [:hr]
     [:h1 {} text]
     [:div
      (render-questions state id)]]))

;; ===========================================================================
;; UI Layout

(defcs app <
  (rao/wire empty-state
            (fn step [state [action {:keys [value]}]]
              (case action
                :load (load-form-data state value)
                state))
            (fn effect! [state [action {:keys [value]} {:keys [rao/d!]}]]
              (case action
                :save (store-form-data! state)
                nil)))
  {:will-mount (fn [{:keys [rao/d!] :as rum-state}]
                 (d! :load {:value (get-today-string)})
                 rum-state)}
  [{:keys [rao/state rao/d!]} state]
  [:div.container.is-fluid
   [:nav.columns.level.is-mobile
    [:p.column.is-half.level-item.has-text-centered
      [:h1.title "Journal"]]
    [:p.column.is-half.level-item.has-text-centered
      (timer/render-timer)]]
   [:div.columns
    [:div.column.has-text-centered
     [:h2.subtitle (get-today-string)]]]
   [:div.columns
    [:div.column
     [:form {:id "main-form" :name "main-form"}
      (render-sections state)]]]
   [:div.columns
    [:div.column
     [:div.section
      [:button {:type  "button"
                :class "custom-button"
                :on-click (fn [_]
                            (d! :save {}))}
               "Save"]]]]])

(rum/mount (app)
           (. js/document (getElementById "app")))
