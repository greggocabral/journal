// Compiled by ClojureScript 1.10.238 {}
goog.provide('journal.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('rao.rum');
goog.require('journal.timer');
journal.core.app = rum.core.build_defcs.call(null,(function (p__29458,state){
var map__29459 = p__29458;
var map__29459__$1 = ((((!((map__29459 == null)))?(((((map__29459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29459):map__29459);
var state__$1 = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword("rao","state","rao/state",-1988571155));
var d_BANG_ = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword("rao","d!","rao/d!",567770581));
var attrs29453 = journal.timer.render_timer.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29453))?sablono.interpreter.attributes.call(null,attrs29453):null),((cljs.core.map_QMARK_.call(null,attrs29453))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",null,React.createElement("h2",null,"Question 1"),React.createElement("div",null,React.createElement("label",null,"1."),sablono.interpreter.create_element.call(null,"textarea",({"rows": "1", "cols": "60"}))),React.createElement("div",null,React.createElement("label",null,"2."),sablono.interpreter.create_element.call(null,"textarea",({"rows": "1", "cols": "60"}))),React.createElement("div",null,React.createElement("label",null,"3."),sablono.interpreter.create_element.call(null,"textarea",({"rows": "1", "cols": "60"})))),React.createElement("div",null,React.createElement("button",({"type": "button", "onClick": ((function (attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null));
});})(attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"+1"),React.createElement("button",({"type": "button", "onClick": ((function (attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null));
});})(attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"+5"))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29453),React.createElement("div",null,React.createElement("h2",null,"Question 1"),React.createElement("div",null,React.createElement("label",null,"1."),sablono.interpreter.create_element.call(null,"textarea",({"rows": "1", "cols": "60"}))),React.createElement("div",null,React.createElement("label",null,"2."),sablono.interpreter.create_element.call(null,"textarea",({"rows": "1", "cols": "60"}))),React.createElement("div",null,React.createElement("label",null,"3."),sablono.interpreter.create_element.call(null,"textarea",({"rows": "1", "cols": "60"})))),React.createElement("div",null,React.createElement("button",({"type": "button", "onClick": ((function (attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null));
});})(attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"+1"),React.createElement("button",({"type": "button", "onClick": ((function (attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null));
});})(attrs29453,map__29459,map__29459__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"+5"))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rao.rum.wire.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"journal","journal",1585898830),(60),new cljs.core.Keyword(null,"timer","timer",-1266967739),(300)], null),(function journal$core$step(state,p__29461){
var vec__29462 = p__29461;
var action = cljs.core.nth.call(null,vec__29462,(0),null);
var map__29465 = cljs.core.nth.call(null,vec__29462,(1),null);
var map__29465__$1 = ((((!((map__29465 == null)))?(((((map__29465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29465):map__29465);
var value = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"value","value",305978217));
return state;
}),(function journal$core$effect_BANG_(state,p__29467){
var vec__29468 = p__29467;
var action = cljs.core.nth.call(null,vec__29468,(0),null);
var map__29471 = cljs.core.nth.call(null,vec__29468,(1),null);
var map__29471__$1 = ((((!((map__29471 == null)))?(((((map__29471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29471):map__29471);
var value = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__29472 = cljs.core.nth.call(null,vec__29468,(2),null);
var map__29472__$1 = ((((!((map__29472 == null)))?(((((map__29472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29472):map__29472);
var d_BANG_ = cljs.core.get.call(null,map__29472__$1,new cljs.core.Keyword("rao","d!","rao/d!",567770581));
return null;
}))], null),"app");
rum.core.mount.call(null,journal.core.app.call(null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1545399469368
