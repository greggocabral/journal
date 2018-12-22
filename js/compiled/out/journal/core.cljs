(ns journal.core
  (:require [rum.core :as rum :refer [defcs]]
            [rao.rum :as rao]
            [journal.timer :as timer]))

(defcs app <
  (rao/wire {:journal 60 :timer 300}
            (fn step [state [action {:keys [value]}]]
              state)
            (fn effect! [state [action {:keys [value]} {:keys [rao/d!]}]]
              nil))
  [{:keys [rao/state rao/d!]} state]
  [:div
   (timer/render-timer)
   [:div
    [:h2 "Question 1"]
    [:div
     [:label {} "1."]
     [:textarea {:rows "1" :cols "60"}]]
    [:div
     [:label {} "2."]
     [:textarea {:rows "1" :cols "60"}]]
    [:div
     [:label {} "3."]
     [:textarea {:rows "1" :cols "60"}]]]
   [:div
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :increment {:value 1}))}
             "+1"]
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :increment {:value 5}))}
             "+5"]]])

(rum/mount (app)
           (. js/document (getElementById "app")))
