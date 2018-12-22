// Compiled by ClojureScript 1.10.238 {}
goog.provide('journal.timer');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('rao.rum');
journal.timer.default_time = (300);
journal.timer.render_timer = rum.core.build_defcs.call(null,(function (p__29404,state){
var map__29405 = p__29404;
var map__29405__$1 = ((((!((map__29405 == null)))?(((((map__29405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29405):map__29405);
var state__$1 = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword("rao","state","rao/state",-1988571155));
var d_BANG_ = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword("rao","d!","rao/d!",567770581));
return React.createElement("div",null,(function (){var attrs29407 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(state__$1);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs29407))?sablono.interpreter.attributes.call(null,attrs29407):null),((cljs.core.map_QMARK_.call(null,attrs29407))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29407)], null)));
})(),React.createElement("button",({"type": "button", "onClick": ((function (map__29405,map__29405__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY);
});})(map__29405,map__29405__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"Start"),React.createElement("button",({"type": "button", "onClick": ((function (map__29405,map__29405__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),cljs.core.PersistentArrayMap.EMPTY);
});})(map__29405,map__29405__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"Reset"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rao.rum.wire.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),journal.timer.default_time,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(function journal$timer$step(state,p__29408){
var vec__29409 = p__29408;
var action = cljs.core.nth.call(null,vec__29409,(0),null);
var map__29412 = cljs.core.nth.call(null,vec__29409,(1),null);
var map__29412__$1 = ((((!((map__29412 == null)))?(((((map__29412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29412):map__29412);
var value = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__29414 = action;
var G__29414__$1 = (((G__29414 instanceof cljs.core.Keyword))?G__29414.fqn:null);
switch (G__29414__$1) {
case "started":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309),new cljs.core.Keyword(null,"running","running",1554969103));

break;
case "reseted":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"count","count",2139924085),journal.timer.default_time);

break;
case "tick":
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec);

break;
default:
return state;

}
}),(function journal$timer$effect_BANG_(p__29415,p__29416){
var map__29417 = p__29415;
var map__29417__$1 = ((((!((map__29417 == null)))?(((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var timer_state = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309));
var vec__29418 = p__29416;
var action = cljs.core.nth.call(null,vec__29418,(0),null);
var map__29421 = cljs.core.nth.call(null,vec__29418,(1),null);
var map__29421__$1 = ((((!((map__29421 == null)))?(((((map__29421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29421):map__29421);
var value = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__29422 = cljs.core.nth.call(null,vec__29418,(2),null);
var map__29422__$1 = ((((!((map__29422 == null)))?(((((map__29422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29422):map__29422);
var d_BANG_ = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword("rao","d!","rao/d!",567770581));
if(((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"start","start",-355208981))) && (!(cljs.core._EQ_.call(null,timer_state,new cljs.core.Keyword(null,"running","running",1554969103)))))){
journal.timer.interval = window.setInterval(((function (map__29417,map__29417__$1,timer_state,vec__29418,action,map__29421,map__29421__$1,value,map__29422,map__29422__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.PersistentArrayMap.EMPTY);
});})(map__29417,map__29417__$1,timer_state,vec__29418,action,map__29421,map__29421__$1,value,map__29422,map__29422__$1,d_BANG_))
,(1000));

return d_BANG_.call(null,new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"reset","reset",-800929946))) && (cljs.core._EQ_.call(null,timer_state,new cljs.core.Keyword(null,"running","running",1554969103))))){
window.clearInterval(journal.timer.interval);

return d_BANG_.call(null,new cljs.core.Keyword(null,"reseted","reseted",262365525),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;

}
}
}))], null),"render-timer");

//# sourceMappingURL=timer.js.map?rel=1545399456619
