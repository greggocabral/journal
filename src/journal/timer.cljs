(ns journal.timer
  (:require [rum.core :as rum :refer [defcs]]
            [rao.rum :as rao]
            [goog.string :as gstring]))

(def default-time
  300)

(defn seconds->time [seconds]
  (let [mins (.floor js/Math (/ seconds 60))
        secs (- seconds (* mins 60))]
    (gstring/format "%02d:%02d" mins secs)))

(defcs render-timer <
  (rao/wire {:count default-time :timer-state :stopped}
            (fn step [state [action {:keys [value]}]]
              (case action
                :set-running (assoc state :timer-state :running)
                :set-stopped (assoc state :timer-state :stopped :count default-time)
                :tick (update state :count dec)
                state))
            (fn effect! [{:keys [timer-state]} [action {:keys [value]} {:keys [rao/d!]}]]
              (cond
                (and (= action :start) (not (= timer-state :running)))
                (do
                  (def interval (.setInterval js/window (fn [_] (d! :tick {})) 1000))
                  (d! :set-running {}))

                (and (= action :reset) (not (= timer-state :stopped)))
                (do
                  (.clearInterval js/window interval)
                  (d! :set-stopped {}))

                :else
                nil)))
  [{:keys [rao/state rao/d!]} state]
  [:div.card
    [:div.card-content
     [:p.title
      [:h1.title (seconds->time (:count state))]]]
    [:footer.card-footer
     [:p.card-footer-item
      [:button.button.is-white {:type  "button"
                                 :on-click (fn [_]
                                             (d! :start {}))}
       "Start journaling"]]
     [:p.card-footer-item
      [:button.button.is-white {:type  "button"
                                 :on-click (fn [_]
                                             (d! :reset {}))}
       "Reset"]]]])
