(ns counter.core
  (:require [rum.core :as rum]
            [rao.rum :as rao]))

(rum/defcs app <
  (rao/wire {:counter 0}
            (fn step [state [action {:keys [value]}]]
              (case action
                :reset (assoc-in state [:counter] 0)
                :increment (update state :counter #(+ (:counter state) value))
                :decrement (update state :counter #(- (:counter state) value))
                state))
            (fn effect! [state [action {:keys [value]} {:keys [rao/d!]}]]
              (case action
                :reset (js/alert "Reseting!")
                :increment (when (< 5 value) (js/alert (str "Incrementing " value "!")))
                :decrement (when (< 5 value) (js/alert (str "Decrementing " value "!")))
                nil)))
  [{:keys [rao/state rao/d!]} state]
  [:div
   [:div
    [:h1 {} (str "Counter: " (:counter state))]]
   [:div
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :decrement {:value 5}))}
             "-5"]
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :decrement {:value 1}))}
             "-1"]
    [:button {:type  "button"
              :class "custom-button"
              :on-click (fn [_]
                          (d! :reset {}))}
             "Reset"]
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
