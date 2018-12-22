// Compiled by ClojureScript 1.10.238 {}
goog.provide('timer.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('rao.rum');
timer.core.default_time = (300);
timer.core.render_timer = rum.core.build_defcs.call(null,(function (p__31309,state){
var map__31310 = p__31309;
var map__31310__$1 = ((((!((map__31310 == null)))?(((((map__31310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31310):map__31310);
var state__$1 = cljs.core.get.call(null,map__31310__$1,new cljs.core.Keyword("rao","state","rao/state",-1988571155));
var d_BANG_ = cljs.core.get.call(null,map__31310__$1,new cljs.core.Keyword("rao","d!","rao/d!",567770581));
return React.createElement("div",null,(function (){var attrs31312 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(state__$1);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs31312))?sablono.interpreter.attributes.call(null,attrs31312):null),((cljs.core.map_QMARK_.call(null,attrs31312))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31312)], null)));
})(),React.createElement("button",({"type": "button", "onClick": ((function (map__31310,map__31310__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY);
});})(map__31310,map__31310__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"Start"),React.createElement("button",({"type": "button", "onClick": ((function (map__31310,map__31310__$1,state__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),cljs.core.PersistentArrayMap.EMPTY);
});})(map__31310,map__31310__$1,state__$1,d_BANG_))
, "className": "custom-button"}),"Reset"));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rao.rum.wire.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),timer.core.default_time,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(function timer$core$step(state,p__31313){
var vec__31314 = p__31313;
var action = cljs.core.nth.call(null,vec__31314,(0),null);
var map__31317 = cljs.core.nth.call(null,vec__31314,(1),null);
var map__31317__$1 = ((((!((map__31317 == null)))?(((((map__31317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);
var value = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__31319 = action;
var G__31319__$1 = (((G__31319 instanceof cljs.core.Keyword))?G__31319.fqn:null);
switch (G__31319__$1) {
case "started":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309),new cljs.core.Keyword(null,"running","running",1554969103));

break;
case "reseted":
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"count","count",2139924085),timer.core.default_time);

break;
case "tick":
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec);

break;
default:
return state;

}
}),(function timer$core$effect_BANG_(p__31320,p__31321){
var map__31322 = p__31320;
var map__31322__$1 = ((((!((map__31322 == null)))?(((((map__31322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31322):map__31322);
var timer_state = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"timer-state","timer-state",-538336309));
var vec__31323 = p__31321;
var action = cljs.core.nth.call(null,vec__31323,(0),null);
var map__31326 = cljs.core.nth.call(null,vec__31323,(1),null);
var map__31326__$1 = ((((!((map__31326 == null)))?(((((map__31326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31326):map__31326);
var value = cljs.core.get.call(null,map__31326__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__31327 = cljs.core.nth.call(null,vec__31323,(2),null);
var map__31327__$1 = ((((!((map__31327 == null)))?(((((map__31327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31327):map__31327);
var d_BANG_ = cljs.core.get.call(null,map__31327__$1,new cljs.core.Keyword("rao","d!","rao/d!",567770581));
if(((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"start","start",-355208981))) && (!(cljs.core._EQ_.call(null,timer_state,new cljs.core.Keyword(null,"running","running",1554969103)))))){
timer.core.interval = window.setInterval(((function (map__31322,map__31322__$1,timer_state,vec__31323,action,map__31326,map__31326__$1,value,map__31327,map__31327__$1,d_BANG_){
return (function (_){
return d_BANG_.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.PersistentArrayMap.EMPTY);
});})(map__31322,map__31322__$1,timer_state,vec__31323,action,map__31326,map__31326__$1,value,map__31327,map__31327__$1,d_BANG_))
,(1000));

return d_BANG_.call(null,new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"reset","reset",-800929946))) && (cljs.core._EQ_.call(null,timer_state,new cljs.core.Keyword(null,"running","running",1554969103))))){
window.clearInterval(timer.core.interval);

return d_BANG_.call(null,new cljs.core.Keyword(null,"reseted","reseted",262365525),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;

}
}
}))], null),"render-timer");

//# sourceMappingURL=core.js.map?rel=1545391015462
