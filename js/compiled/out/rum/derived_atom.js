// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__21749 = arguments.length;
switch (G__21749) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21750 = opts;
var map__21750__$1 = ((((!((map__21750 == null)))?(((((map__21750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21750):map__21750);
var ref = cljs.core.get.call(null,map__21750__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21750__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21752 = cljs.core.count.call(null,refs);
switch (G__21752) {
case (1):
var vec__21753 = refs;
var a = cljs.core.nth.call(null,vec__21753,(0),null);
return ((function (vec__21753,a,G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21753,a,G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21756 = refs;
var a = cljs.core.nth.call(null,vec__21756,(0),null);
var b = cljs.core.nth.call(null,vec__21756,(1),null);
return ((function (vec__21756,a,b,G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21756,a,b,G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21759 = refs;
var a = cljs.core.nth.call(null,vec__21759,(0),null);
var b = cljs.core.nth.call(null,vec__21759,(1),null);
var c = cljs.core.nth.call(null,vec__21759,(2),null);
return ((function (vec__21759,a,b,c,G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21759,a,b,c,G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21752,map__21750,map__21750__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21762 = ref;
cljs.core.reset_BANG_.call(null,G__21762,recalc.call(null));

return G__21762;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21750,map__21750__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21750,map__21750__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21750,map__21750__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21750,map__21750__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21763_21769 = cljs.core.seq.call(null,refs);
var chunk__21764_21770 = null;
var count__21765_21771 = (0);
var i__21766_21772 = (0);
while(true){
if((i__21766_21772 < count__21765_21771)){
var ref_21773__$1 = cljs.core._nth.call(null,chunk__21764_21770,i__21766_21772);
cljs.core.add_watch.call(null,ref_21773__$1,key,watch);


var G__21774 = seq__21763_21769;
var G__21775 = chunk__21764_21770;
var G__21776 = count__21765_21771;
var G__21777 = (i__21766_21772 + (1));
seq__21763_21769 = G__21774;
chunk__21764_21770 = G__21775;
count__21765_21771 = G__21776;
i__21766_21772 = G__21777;
continue;
} else {
var temp__5457__auto___21778 = cljs.core.seq.call(null,seq__21763_21769);
if(temp__5457__auto___21778){
var seq__21763_21779__$1 = temp__5457__auto___21778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21763_21779__$1)){
var c__4319__auto___21780 = cljs.core.chunk_first.call(null,seq__21763_21779__$1);
var G__21781 = cljs.core.chunk_rest.call(null,seq__21763_21779__$1);
var G__21782 = c__4319__auto___21780;
var G__21783 = cljs.core.count.call(null,c__4319__auto___21780);
var G__21784 = (0);
seq__21763_21769 = G__21781;
chunk__21764_21770 = G__21782;
count__21765_21771 = G__21783;
i__21766_21772 = G__21784;
continue;
} else {
var ref_21785__$1 = cljs.core.first.call(null,seq__21763_21779__$1);
cljs.core.add_watch.call(null,ref_21785__$1,key,watch);


var G__21786 = cljs.core.next.call(null,seq__21763_21779__$1);
var G__21787 = null;
var G__21788 = (0);
var G__21789 = (0);
seq__21763_21769 = G__21786;
chunk__21764_21770 = G__21787;
count__21765_21771 = G__21788;
i__21766_21772 = G__21789;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1545274382475
