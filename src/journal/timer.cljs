(ns journal.timer
  (:require [rum.core :as rum :refer [defcs]]
            [rao.rum :as rao]))

(def default-time
  300)

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
  [:div
   [:h1 (:count state)]
   [:div
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :start {}))}
             "Start"]
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :reset {}))}
             "Reset"]]])
