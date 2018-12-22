// Compiled by ClojureScript 1.10.238 {}
goog.provide('rao.rum');
goog.require('cljs.core');
goog.require('rum.core');
/**
 * Creates a dispatch, `d!`, to update the component with. Whenever `d!` is called it will:
 * 
 * 1. update that rao/local state with `step` and
 * 2. call `effect!` to do any side-effects
 * 
 * 0. when the component is started, it adds an atom rao/local from the value of `initial-state`.
 * 
 *   `initial-state` can be:
 *   - a map with the initial state to the component.
 *   - a function, it will be called with the :rum/args to the component and expected to return the initial state.
 */
rao.rum.wire = (function rao$rum$wire(var_args){
var G__24348 = arguments.length;
switch (G__24348) {
case 2:
return rao.rum.wire.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rao.rum.wire.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rao.rum.wire.cljs$core$IFn$_invoke$arity$2 = (function (initial_state,step){
return rao.rum.wire.call(null,initial_state,step,null);
});

rao.rum.wire.cljs$core$IFn$_invoke$arity$3 = (function (initial_state,step,effect_BANG_){
if(((cljs.core.map_QMARK_.call(null,initial_state)) || (cljs.core.ifn_QMARK_.call(null,initial_state)))){
} else {
throw (new Error("Assert failed: (or (map? initial-state) (ifn? initial-state))"));
}

if(cljs.core.ifn_QMARK_.call(null,step)){
} else {
throw (new Error("Assert failed: (ifn? step)"));
}

if((((effect_BANG_ == null)) || (cljs.core.ifn_QMARK_.call(null,effect_BANG_)))){
} else {
throw (new Error("Assert failed: (or (nil? effect!) (ifn? effect!))"));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),((cljs.core.map_QMARK_.call(null,initial_state))?(function rao$rum$init(rum_state,_){
return cljs.core.assoc.call(null,rum_state,new cljs.core.Keyword("rao","local","rao/local",-1497916196),cljs.core.atom.call(null,initial_state));
}):((cljs.core.ifn_QMARK_.call(null,initial_state))?(function rao$rum$init(p__24349,_){
var map__24350 = p__24349;
var map__24350__$1 = ((((!((map__24350 == null)))?(((((map__24350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24350):map__24350);
var rum_state = map__24350__$1;
var args = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
return cljs.core.assoc.call(null,rum_state,new cljs.core.Keyword("rao","local","rao/local",-1497916196),cljs.core.atom.call(null,cljs.core.apply.call(null,initial_state,args)));
}):(function(){throw cljs.core.ex_info.call(null,"init-state needs to be either a map or a function",cljs.core.PersistentArrayMap.EMPTY)})()
)),new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (p__24352){
var map__24353 = p__24352;
var map__24353__$1 = ((((!((map__24353 == null)))?(((((map__24353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24353):map__24353);
var rum_state = map__24353__$1;
var local = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword("rao","local","rao/local",-1497916196));
var react_component = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248));
cljs.core.add_watch.call(null,local,new cljs.core.Keyword("rao","local","rao/local",-1497916196),((function (map__24353,map__24353__$1,rum_state,local,react_component){
return (function (_,___$1,old_value,new_value){
if(cljs.core._EQ_.call(null,old_value,new_value)){
return null;
} else {
return rum.core.request_render.call(null,react_component);
}
});})(map__24353,map__24353__$1,rum_state,local,react_component))
);

var parent_d_BANG_ = new cljs.core.Keyword("rao","d!","rao/d!",567770581).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(rum_state)));
return cljs.core.assoc.call(null,rum_state,new cljs.core.Keyword("rao","state","rao/state",-1988571155),cljs.core.deref.call(null,local),new cljs.core.Keyword("rao","d!","rao/d!",567770581),((function (parent_d_BANG_,map__24353,map__24353__$1,rum_state,local,react_component){
return (function rao$rum$d_BANG_(action,data){
var state_SINGLEQUOTE_ = cljs.core.swap_BANG_.call(null,local,step,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,data], null));
if(cljs.core.truth_(effect_BANG_)){
effect_BANG_.call(null,state_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rao","d!","rao/d!",567770581),rao$rum$d_BANG_], null)], null));
} else {
}

if(cljs.core.truth_(parent_d_BANG_)){
return parent_d_BANG_.call(null,action,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rao","d!","rao/d!",567770581),parent_d_BANG_], null));
} else {
return null;
}
});})(parent_d_BANG_,map__24353,map__24353__$1,rum_state,local,react_component))
);
}),new cljs.core.Keyword(null,"before-render","before-render",71256781),(function (p__24355){
var map__24356 = p__24355;
var map__24356__$1 = ((((!((map__24356 == null)))?(((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var rum_state = map__24356__$1;
var local = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword("rao","local","rao/local",-1497916196));
return cljs.core.assoc.call(null,rum_state,new cljs.core.Keyword("rao","state","rao/state",-1988571155),cljs.core.deref.call(null,local));
})], null);
});

rao.rum.wire.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=rum.js.map?rel=1545274384107
