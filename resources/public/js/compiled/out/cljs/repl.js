// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32571){
var map__32572 = p__32571;
var map__32572__$1 = ((((!((map__32572 == null)))?(((((map__32572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32572):map__32572);
var m = map__32572__$1;
var n = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32574_32596 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32575_32597 = null;
var count__32576_32598 = (0);
var i__32577_32599 = (0);
while(true){
if((i__32577_32599 < count__32576_32598)){
var f_32600 = cljs.core._nth.call(null,chunk__32575_32597,i__32577_32599);
cljs.core.println.call(null,"  ",f_32600);


var G__32601 = seq__32574_32596;
var G__32602 = chunk__32575_32597;
var G__32603 = count__32576_32598;
var G__32604 = (i__32577_32599 + (1));
seq__32574_32596 = G__32601;
chunk__32575_32597 = G__32602;
count__32576_32598 = G__32603;
i__32577_32599 = G__32604;
continue;
} else {
var temp__5457__auto___32605 = cljs.core.seq.call(null,seq__32574_32596);
if(temp__5457__auto___32605){
var seq__32574_32606__$1 = temp__5457__auto___32605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32574_32606__$1)){
var c__4319__auto___32607 = cljs.core.chunk_first.call(null,seq__32574_32606__$1);
var G__32608 = cljs.core.chunk_rest.call(null,seq__32574_32606__$1);
var G__32609 = c__4319__auto___32607;
var G__32610 = cljs.core.count.call(null,c__4319__auto___32607);
var G__32611 = (0);
seq__32574_32596 = G__32608;
chunk__32575_32597 = G__32609;
count__32576_32598 = G__32610;
i__32577_32599 = G__32611;
continue;
} else {
var f_32612 = cljs.core.first.call(null,seq__32574_32606__$1);
cljs.core.println.call(null,"  ",f_32612);


var G__32613 = cljs.core.next.call(null,seq__32574_32606__$1);
var G__32614 = null;
var G__32615 = (0);
var G__32616 = (0);
seq__32574_32596 = G__32613;
chunk__32575_32597 = G__32614;
count__32576_32598 = G__32615;
i__32577_32599 = G__32616;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32617 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32617);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32617)))?cljs.core.second.call(null,arglists_32617):arglists_32617));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32578_32618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32579_32619 = null;
var count__32580_32620 = (0);
var i__32581_32621 = (0);
while(true){
if((i__32581_32621 < count__32580_32620)){
var vec__32582_32622 = cljs.core._nth.call(null,chunk__32579_32619,i__32581_32621);
var name_32623 = cljs.core.nth.call(null,vec__32582_32622,(0),null);
var map__32585_32624 = cljs.core.nth.call(null,vec__32582_32622,(1),null);
var map__32585_32625__$1 = ((((!((map__32585_32624 == null)))?(((((map__32585_32624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32585_32624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32585_32624):map__32585_32624);
var doc_32626 = cljs.core.get.call(null,map__32585_32625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32627 = cljs.core.get.call(null,map__32585_32625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32623);

cljs.core.println.call(null," ",arglists_32627);

if(cljs.core.truth_(doc_32626)){
cljs.core.println.call(null," ",doc_32626);
} else {
}


var G__32628 = seq__32578_32618;
var G__32629 = chunk__32579_32619;
var G__32630 = count__32580_32620;
var G__32631 = (i__32581_32621 + (1));
seq__32578_32618 = G__32628;
chunk__32579_32619 = G__32629;
count__32580_32620 = G__32630;
i__32581_32621 = G__32631;
continue;
} else {
var temp__5457__auto___32632 = cljs.core.seq.call(null,seq__32578_32618);
if(temp__5457__auto___32632){
var seq__32578_32633__$1 = temp__5457__auto___32632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32578_32633__$1)){
var c__4319__auto___32634 = cljs.core.chunk_first.call(null,seq__32578_32633__$1);
var G__32635 = cljs.core.chunk_rest.call(null,seq__32578_32633__$1);
var G__32636 = c__4319__auto___32634;
var G__32637 = cljs.core.count.call(null,c__4319__auto___32634);
var G__32638 = (0);
seq__32578_32618 = G__32635;
chunk__32579_32619 = G__32636;
count__32580_32620 = G__32637;
i__32581_32621 = G__32638;
continue;
} else {
var vec__32587_32639 = cljs.core.first.call(null,seq__32578_32633__$1);
var name_32640 = cljs.core.nth.call(null,vec__32587_32639,(0),null);
var map__32590_32641 = cljs.core.nth.call(null,vec__32587_32639,(1),null);
var map__32590_32642__$1 = ((((!((map__32590_32641 == null)))?(((((map__32590_32641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32590_32641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32590_32641):map__32590_32641);
var doc_32643 = cljs.core.get.call(null,map__32590_32642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32644 = cljs.core.get.call(null,map__32590_32642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32640);

cljs.core.println.call(null," ",arglists_32644);

if(cljs.core.truth_(doc_32643)){
cljs.core.println.call(null," ",doc_32643);
} else {
}


var G__32645 = cljs.core.next.call(null,seq__32578_32633__$1);
var G__32646 = null;
var G__32647 = (0);
var G__32648 = (0);
seq__32578_32618 = G__32645;
chunk__32579_32619 = G__32646;
count__32580_32620 = G__32647;
i__32581_32621 = G__32648;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__32592 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32593 = null;
var count__32594 = (0);
var i__32595 = (0);
while(true){
if((i__32595 < count__32594)){
var role = cljs.core._nth.call(null,chunk__32593,i__32595);
var temp__5457__auto___32649__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32649__$1)){
var spec_32650 = temp__5457__auto___32649__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32650));
} else {
}


var G__32651 = seq__32592;
var G__32652 = chunk__32593;
var G__32653 = count__32594;
var G__32654 = (i__32595 + (1));
seq__32592 = G__32651;
chunk__32593 = G__32652;
count__32594 = G__32653;
i__32595 = G__32654;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32592);
if(temp__5457__auto____$1){
var seq__32592__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32592__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32592__$1);
var G__32655 = cljs.core.chunk_rest.call(null,seq__32592__$1);
var G__32656 = c__4319__auto__;
var G__32657 = cljs.core.count.call(null,c__4319__auto__);
var G__32658 = (0);
seq__32592 = G__32655;
chunk__32593 = G__32656;
count__32594 = G__32657;
i__32595 = G__32658;
continue;
} else {
var role = cljs.core.first.call(null,seq__32592__$1);
var temp__5457__auto___32659__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32659__$2)){
var spec_32660 = temp__5457__auto___32659__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32660));
} else {
}


var G__32661 = cljs.core.next.call(null,seq__32592__$1);
var G__32662 = null;
var G__32663 = (0);
var G__32664 = (0);
seq__32592 = G__32661;
chunk__32593 = G__32662;
count__32594 = G__32663;
i__32595 = G__32664;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545274393415
