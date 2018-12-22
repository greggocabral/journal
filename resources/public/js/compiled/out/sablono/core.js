// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23602__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23599 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23600 = cljs.core.seq.call(null,vec__23599);
var first__23601 = cljs.core.first.call(null,seq__23600);
var seq__23600__$1 = cljs.core.next.call(null,seq__23600);
var tag = first__23601;
var body = seq__23600__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23603__i = 0, G__23603__a = new Array(arguments.length -  0);
while (G__23603__i < G__23603__a.length) {G__23603__a[G__23603__i] = arguments[G__23603__i + 0]; ++G__23603__i;}
  args = new cljs.core.IndexedSeq(G__23603__a,0,null);
} 
return G__23602__delegate.call(this,args);};
G__23602.cljs$lang$maxFixedArity = 0;
G__23602.cljs$lang$applyTo = (function (arglist__23604){
var args = cljs.core.seq(arglist__23604);
return G__23602__delegate(args);
});
G__23602.cljs$core$IFn$_invoke$arity$variadic = G__23602__delegate;
return G__23602;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__23605(s__23606){
return (new cljs.core.LazySeq(null,(function (){
var s__23606__$1 = s__23606;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23606__$1);
if(temp__5457__auto__){
var s__23606__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23606__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23606__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23608 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23607 = (0);
while(true){
if((i__23607 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__23607);
cljs.core.chunk_append.call(null,b__23608,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23609 = (i__23607 + (1));
i__23607 = G__23609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23608),sablono$core$update_arglists_$_iter__23605.call(null,cljs.core.chunk_rest.call(null,s__23606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23608),null);
}
} else {
var args = cljs.core.first.call(null,s__23606__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23605.call(null,cljs.core.rest.call(null,s__23606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23615 = arguments.length;
var i__4500__auto___23616 = (0);
while(true){
if((i__4500__auto___23616 < len__4499__auto___23615)){
args__4502__auto__.push((arguments[i__4500__auto___23616]));

var G__23617 = (i__4500__auto___23616 + (1));
i__4500__auto___23616 = G__23617;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__23611(s__23612){
return (new cljs.core.LazySeq(null,(function (){
var s__23612__$1 = s__23612;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23612__$1);
if(temp__5457__auto__){
var s__23612__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23612__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23612__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23614 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23613 = (0);
while(true){
if((i__23613 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__23613);
cljs.core.chunk_append.call(null,b__23614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23618 = (i__23613 + (1));
i__23613 = G__23618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23614),sablono$core$iter__23611.call(null,cljs.core.chunk_rest.call(null,s__23612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23614),null);
}
} else {
var style = cljs.core.first.call(null,s__23612__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23611.call(null,cljs.core.rest.call(null,s__23612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23610));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23619 = (function sablono$core$link_to23619(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23622 = arguments.length;
var i__4500__auto___23623 = (0);
while(true){
if((i__4500__auto___23623 < len__4499__auto___23622)){
args__4502__auto__.push((arguments[i__4500__auto___23623]));

var G__23624 = (i__4500__auto___23623 + (1));
i__4500__auto___23623 = G__23624;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23619.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to23619.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23619.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23619.cljs$lang$applyTo = (function (seq23620){
var G__23621 = cljs.core.first.call(null,seq23620);
var seq23620__$1 = cljs.core.next.call(null,seq23620);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23621,seq23620__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23619);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23625 = (function sablono$core$mail_to23625(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23632 = arguments.length;
var i__4500__auto___23633 = (0);
while(true){
if((i__4500__auto___23633 < len__4499__auto___23632)){
args__4502__auto__.push((arguments[i__4500__auto___23633]));

var G__23634 = (i__4500__auto___23633 + (1));
i__4500__auto___23633 = G__23634;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23625.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to23625.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23628){
var vec__23629 = p__23628;
var content = cljs.core.nth.call(null,vec__23629,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23625.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23625.cljs$lang$applyTo = (function (seq23626){
var G__23627 = cljs.core.first.call(null,seq23626);
var seq23626__$1 = cljs.core.next.call(null,seq23626);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23627,seq23626__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23625);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23635 = (function sablono$core$unordered_list23635(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list23635_$_iter__23636(s__23637){
return (new cljs.core.LazySeq(null,(function (){
var s__23637__$1 = s__23637;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23637__$1);
if(temp__5457__auto__){
var s__23637__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23637__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23637__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23639 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23638 = (0);
while(true){
if((i__23638 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23638);
cljs.core.chunk_append.call(null,b__23639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23640 = (i__23638 + (1));
i__23638 = G__23640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23639),sablono$core$unordered_list23635_$_iter__23636.call(null,cljs.core.chunk_rest.call(null,s__23637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23639),null);
}
} else {
var x = cljs.core.first.call(null,s__23637__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23635_$_iter__23636.call(null,cljs.core.rest.call(null,s__23637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23635);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23641 = (function sablono$core$ordered_list23641(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list23641_$_iter__23642(s__23643){
return (new cljs.core.LazySeq(null,(function (){
var s__23643__$1 = s__23643;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23643__$1);
if(temp__5457__auto__){
var s__23643__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23643__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23643__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23645 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23644 = (0);
while(true){
if((i__23644 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23644);
cljs.core.chunk_append.call(null,b__23645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23646 = (i__23644 + (1));
i__23644 = G__23646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23645),sablono$core$ordered_list23641_$_iter__23642.call(null,cljs.core.chunk_rest.call(null,s__23643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23645),null);
}
} else {
var x = cljs.core.first.call(null,s__23643__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23641_$_iter__23642.call(null,cljs.core.rest.call(null,s__23643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23641);
/**
 * Create an image element.
 */
sablono.core.image23647 = (function sablono$core$image23647(var_args){
var G__23649 = arguments.length;
switch (G__23649) {
case 1:
return sablono.core.image23647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23647.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23647.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23647.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23647);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23651_SHARP_,p2__23652_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23651_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23652_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23653_SHARP_,p2__23654_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23653_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23654_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23656 = arguments.length;
switch (G__23656) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23658 = (function sablono$core$color_field23658(var_args){
var G__23660 = arguments.length;
switch (G__23660) {
case 1:
return sablono.core.color_field23658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23658.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23589__auto__);
});

sablono.core.color_field23658.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.color_field23658.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23658);

/**
 * Creates a date input field.
 */
sablono.core.date_field23661 = (function sablono$core$date_field23661(var_args){
var G__23663 = arguments.length;
switch (G__23663) {
case 1:
return sablono.core.date_field23661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23661.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23589__auto__);
});

sablono.core.date_field23661.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.date_field23661.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23661);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23664 = (function sablono$core$datetime_field23664(var_args){
var G__23666 = arguments.length;
switch (G__23666) {
case 1:
return sablono.core.datetime_field23664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23664.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23589__auto__);
});

sablono.core.datetime_field23664.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.datetime_field23664.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23664);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23667 = (function sablono$core$datetime_local_field23667(var_args){
var G__23669 = arguments.length;
switch (G__23669) {
case 1:
return sablono.core.datetime_local_field23667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23667.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23589__auto__);
});

sablono.core.datetime_local_field23667.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.datetime_local_field23667.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23667);

/**
 * Creates a email input field.
 */
sablono.core.email_field23670 = (function sablono$core$email_field23670(var_args){
var G__23672 = arguments.length;
switch (G__23672) {
case 1:
return sablono.core.email_field23670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23670.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23589__auto__);
});

sablono.core.email_field23670.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.email_field23670.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23670);

/**
 * Creates a file input field.
 */
sablono.core.file_field23673 = (function sablono$core$file_field23673(var_args){
var G__23675 = arguments.length;
switch (G__23675) {
case 1:
return sablono.core.file_field23673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23673.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23589__auto__);
});

sablono.core.file_field23673.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.file_field23673.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23673);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23676 = (function sablono$core$hidden_field23676(var_args){
var G__23678 = arguments.length;
switch (G__23678) {
case 1:
return sablono.core.hidden_field23676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23676.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23589__auto__);
});

sablono.core.hidden_field23676.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.hidden_field23676.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23676);

/**
 * Creates a month input field.
 */
sablono.core.month_field23679 = (function sablono$core$month_field23679(var_args){
var G__23681 = arguments.length;
switch (G__23681) {
case 1:
return sablono.core.month_field23679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23679.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23589__auto__);
});

sablono.core.month_field23679.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.month_field23679.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23679);

/**
 * Creates a number input field.
 */
sablono.core.number_field23682 = (function sablono$core$number_field23682(var_args){
var G__23684 = arguments.length;
switch (G__23684) {
case 1:
return sablono.core.number_field23682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23682.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23589__auto__);
});

sablono.core.number_field23682.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.number_field23682.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23682);

/**
 * Creates a password input field.
 */
sablono.core.password_field23685 = (function sablono$core$password_field23685(var_args){
var G__23687 = arguments.length;
switch (G__23687) {
case 1:
return sablono.core.password_field23685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23685.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23589__auto__);
});

sablono.core.password_field23685.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.password_field23685.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23685);

/**
 * Creates a range input field.
 */
sablono.core.range_field23688 = (function sablono$core$range_field23688(var_args){
var G__23690 = arguments.length;
switch (G__23690) {
case 1:
return sablono.core.range_field23688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23688.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23589__auto__);
});

sablono.core.range_field23688.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.range_field23688.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23688);

/**
 * Creates a search input field.
 */
sablono.core.search_field23691 = (function sablono$core$search_field23691(var_args){
var G__23693 = arguments.length;
switch (G__23693) {
case 1:
return sablono.core.search_field23691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23691.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23589__auto__);
});

sablono.core.search_field23691.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.search_field23691.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23691);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23694 = (function sablono$core$tel_field23694(var_args){
var G__23696 = arguments.length;
switch (G__23696) {
case 1:
return sablono.core.tel_field23694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23694.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23589__auto__);
});

sablono.core.tel_field23694.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.tel_field23694.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23694);

/**
 * Creates a text input field.
 */
sablono.core.text_field23697 = (function sablono$core$text_field23697(var_args){
var G__23699 = arguments.length;
switch (G__23699) {
case 1:
return sablono.core.text_field23697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23697.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23589__auto__);
});

sablono.core.text_field23697.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.text_field23697.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23697);

/**
 * Creates a time input field.
 */
sablono.core.time_field23700 = (function sablono$core$time_field23700(var_args){
var G__23702 = arguments.length;
switch (G__23702) {
case 1:
return sablono.core.time_field23700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23700.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23589__auto__);
});

sablono.core.time_field23700.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.time_field23700.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23700);

/**
 * Creates a url input field.
 */
sablono.core.url_field23703 = (function sablono$core$url_field23703(var_args){
var G__23705 = arguments.length;
switch (G__23705) {
case 1:
return sablono.core.url_field23703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23703.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23589__auto__);
});

sablono.core.url_field23703.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.url_field23703.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23703);

/**
 * Creates a week input field.
 */
sablono.core.week_field23706 = (function sablono$core$week_field23706(var_args){
var G__23708 = arguments.length;
switch (G__23708) {
case 1:
return sablono.core.week_field23706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23706.cljs$core$IFn$_invoke$arity$1 = (function (name__23589__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23589__auto__);
});

sablono.core.week_field23706.cljs$core$IFn$_invoke$arity$2 = (function (name__23589__auto__,value__23590__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23589__auto__,value__23590__auto__);
});

sablono.core.week_field23706.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23706);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23726 = (function sablono$core$check_box23726(var_args){
var G__23728 = arguments.length;
switch (G__23728) {
case 1:
return sablono.core.check_box23726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23726.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23726.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23726.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23726.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23726.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23726);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23730 = (function sablono$core$radio_button23730(var_args){
var G__23732 = arguments.length;
switch (G__23732) {
case 1:
return sablono.core.radio_button23730.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23730.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23730.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23730.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23730.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23730.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23730.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23730);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23734 = (function sablono$core$select_options23734(coll){
var iter__4292__auto__ = (function sablono$core$select_options23734_$_iter__23735(s__23736){
return (new cljs.core.LazySeq(null,(function (){
var s__23736__$1 = s__23736;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23736__$1);
if(temp__5457__auto__){
var s__23736__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23736__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23736__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23738 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23737 = (0);
while(true){
if((i__23737 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23737);
cljs.core.chunk_append.call(null,b__23738,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23739 = x;
var text = cljs.core.nth.call(null,vec__23739,(0),null);
var val = cljs.core.nth.call(null,vec__23739,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23739,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23734.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23745 = (i__23737 + (1));
i__23737 = G__23745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23738),sablono$core$select_options23734_$_iter__23735.call(null,cljs.core.chunk_rest.call(null,s__23736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23738),null);
}
} else {
var x = cljs.core.first.call(null,s__23736__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23742 = x;
var text = cljs.core.nth.call(null,vec__23742,(0),null);
var val = cljs.core.nth.call(null,vec__23742,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23742,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23734.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23734_$_iter__23735.call(null,cljs.core.rest.call(null,s__23736__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23734);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23746 = (function sablono$core$drop_down23746(var_args){
var G__23748 = arguments.length;
switch (G__23748) {
case 2:
return sablono.core.drop_down23746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23746.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23746.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23746.call(null,name,options,null);
});

sablono.core.drop_down23746.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23746.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23746);
/**
 * Creates a text area element.
 */
sablono.core.text_area23750 = (function sablono$core$text_area23750(var_args){
var G__23752 = arguments.length;
switch (G__23752) {
case 1:
return sablono.core.text_area23750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23750.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23750.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23750.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23750);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23754 = (function sablono$core$label23754(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23754);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23755 = (function sablono$core$submit_button23755(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23755);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23756 = (function sablono$core$reset_button23756(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23756);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23757 = (function sablono$core$form_to23757(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23764 = arguments.length;
var i__4500__auto___23765 = (0);
while(true){
if((i__4500__auto___23765 < len__4499__auto___23764)){
args__4502__auto__.push((arguments[i__4500__auto___23765]));

var G__23766 = (i__4500__auto___23765 + (1));
i__4500__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23757.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to23757.cljs$core$IFn$_invoke$arity$variadic = (function (p__23760,body){
var vec__23761 = p__23760;
var method = cljs.core.nth.call(null,vec__23761,(0),null);
var action = cljs.core.nth.call(null,vec__23761,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23757.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23757.cljs$lang$applyTo = (function (seq23758){
var G__23759 = cljs.core.first.call(null,seq23758);
var seq23758__$1 = cljs.core.next.call(null,seq23758);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23759,seq23758__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23757);

//# sourceMappingURL=core.js.map?rel=1545274383690
