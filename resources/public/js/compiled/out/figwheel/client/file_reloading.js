// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31108_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31108_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31109 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31110 = null;
var count__31111 = (0);
var i__31112 = (0);
while(true){
if((i__31112 < count__31111)){
var n = cljs.core._nth.call(null,chunk__31110,i__31112);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31113 = seq__31109;
var G__31114 = chunk__31110;
var G__31115 = count__31111;
var G__31116 = (i__31112 + (1));
seq__31109 = G__31113;
chunk__31110 = G__31114;
count__31111 = G__31115;
i__31112 = G__31116;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31109);
if(temp__5457__auto__){
var seq__31109__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31109__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31109__$1);
var G__31117 = cljs.core.chunk_rest.call(null,seq__31109__$1);
var G__31118 = c__4319__auto__;
var G__31119 = cljs.core.count.call(null,c__4319__auto__);
var G__31120 = (0);
seq__31109 = G__31117;
chunk__31110 = G__31118;
count__31111 = G__31119;
i__31112 = G__31120;
continue;
} else {
var n = cljs.core.first.call(null,seq__31109__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31121 = cljs.core.next.call(null,seq__31109__$1);
var G__31122 = null;
var G__31123 = (0);
var G__31124 = (0);
seq__31109 = G__31121;
chunk__31110 = G__31122;
count__31111 = G__31123;
i__31112 = G__31124;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31125){
var vec__31126 = p__31125;
var _ = cljs.core.nth.call(null,vec__31126,(0),null);
var v = cljs.core.nth.call(null,vec__31126,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__31129){
var vec__31130 = p__31129;
var k = cljs.core.nth.call(null,vec__31130,(0),null);
var v = cljs.core.nth.call(null,vec__31130,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31142_31150 = cljs.core.seq.call(null,deps);
var chunk__31143_31151 = null;
var count__31144_31152 = (0);
var i__31145_31153 = (0);
while(true){
if((i__31145_31153 < count__31144_31152)){
var dep_31154 = cljs.core._nth.call(null,chunk__31143_31151,i__31145_31153);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31154;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31154));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31154,(depth + (1)),state);
} else {
}


var G__31155 = seq__31142_31150;
var G__31156 = chunk__31143_31151;
var G__31157 = count__31144_31152;
var G__31158 = (i__31145_31153 + (1));
seq__31142_31150 = G__31155;
chunk__31143_31151 = G__31156;
count__31144_31152 = G__31157;
i__31145_31153 = G__31158;
continue;
} else {
var temp__5457__auto___31159 = cljs.core.seq.call(null,seq__31142_31150);
if(temp__5457__auto___31159){
var seq__31142_31160__$1 = temp__5457__auto___31159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31142_31160__$1)){
var c__4319__auto___31161 = cljs.core.chunk_first.call(null,seq__31142_31160__$1);
var G__31162 = cljs.core.chunk_rest.call(null,seq__31142_31160__$1);
var G__31163 = c__4319__auto___31161;
var G__31164 = cljs.core.count.call(null,c__4319__auto___31161);
var G__31165 = (0);
seq__31142_31150 = G__31162;
chunk__31143_31151 = G__31163;
count__31144_31152 = G__31164;
i__31145_31153 = G__31165;
continue;
} else {
var dep_31166 = cljs.core.first.call(null,seq__31142_31160__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31166;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31166));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31166,(depth + (1)),state);
} else {
}


var G__31167 = cljs.core.next.call(null,seq__31142_31160__$1);
var G__31168 = null;
var G__31169 = (0);
var G__31170 = (0);
seq__31142_31150 = G__31167;
chunk__31143_31151 = G__31168;
count__31144_31152 = G__31169;
i__31145_31153 = G__31170;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31146){
var vec__31147 = p__31146;
var seq__31148 = cljs.core.seq.call(null,vec__31147);
var first__31149 = cljs.core.first.call(null,seq__31148);
var seq__31148__$1 = cljs.core.next.call(null,seq__31148);
var x = first__31149;
var xs = seq__31148__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31147,seq__31148,first__31149,seq__31148__$1,x,xs,get_deps__$1){
return (function (p1__31133_SHARP_){
return clojure.set.difference.call(null,p1__31133_SHARP_,x);
});})(vec__31147,seq__31148,first__31149,seq__31148__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31171 = cljs.core.seq.call(null,provides);
var chunk__31172 = null;
var count__31173 = (0);
var i__31174 = (0);
while(true){
if((i__31174 < count__31173)){
var prov = cljs.core._nth.call(null,chunk__31172,i__31174);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31175_31183 = cljs.core.seq.call(null,requires);
var chunk__31176_31184 = null;
var count__31177_31185 = (0);
var i__31178_31186 = (0);
while(true){
if((i__31178_31186 < count__31177_31185)){
var req_31187 = cljs.core._nth.call(null,chunk__31176_31184,i__31178_31186);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31187,prov);


var G__31188 = seq__31175_31183;
var G__31189 = chunk__31176_31184;
var G__31190 = count__31177_31185;
var G__31191 = (i__31178_31186 + (1));
seq__31175_31183 = G__31188;
chunk__31176_31184 = G__31189;
count__31177_31185 = G__31190;
i__31178_31186 = G__31191;
continue;
} else {
var temp__5457__auto___31192 = cljs.core.seq.call(null,seq__31175_31183);
if(temp__5457__auto___31192){
var seq__31175_31193__$1 = temp__5457__auto___31192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31175_31193__$1)){
var c__4319__auto___31194 = cljs.core.chunk_first.call(null,seq__31175_31193__$1);
var G__31195 = cljs.core.chunk_rest.call(null,seq__31175_31193__$1);
var G__31196 = c__4319__auto___31194;
var G__31197 = cljs.core.count.call(null,c__4319__auto___31194);
var G__31198 = (0);
seq__31175_31183 = G__31195;
chunk__31176_31184 = G__31196;
count__31177_31185 = G__31197;
i__31178_31186 = G__31198;
continue;
} else {
var req_31199 = cljs.core.first.call(null,seq__31175_31193__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31199,prov);


var G__31200 = cljs.core.next.call(null,seq__31175_31193__$1);
var G__31201 = null;
var G__31202 = (0);
var G__31203 = (0);
seq__31175_31183 = G__31200;
chunk__31176_31184 = G__31201;
count__31177_31185 = G__31202;
i__31178_31186 = G__31203;
continue;
}
} else {
}
}
break;
}


var G__31204 = seq__31171;
var G__31205 = chunk__31172;
var G__31206 = count__31173;
var G__31207 = (i__31174 + (1));
seq__31171 = G__31204;
chunk__31172 = G__31205;
count__31173 = G__31206;
i__31174 = G__31207;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31171);
if(temp__5457__auto__){
var seq__31171__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31171__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31171__$1);
var G__31208 = cljs.core.chunk_rest.call(null,seq__31171__$1);
var G__31209 = c__4319__auto__;
var G__31210 = cljs.core.count.call(null,c__4319__auto__);
var G__31211 = (0);
seq__31171 = G__31208;
chunk__31172 = G__31209;
count__31173 = G__31210;
i__31174 = G__31211;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31171__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31179_31212 = cljs.core.seq.call(null,requires);
var chunk__31180_31213 = null;
var count__31181_31214 = (0);
var i__31182_31215 = (0);
while(true){
if((i__31182_31215 < count__31181_31214)){
var req_31216 = cljs.core._nth.call(null,chunk__31180_31213,i__31182_31215);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31216,prov);


var G__31217 = seq__31179_31212;
var G__31218 = chunk__31180_31213;
var G__31219 = count__31181_31214;
var G__31220 = (i__31182_31215 + (1));
seq__31179_31212 = G__31217;
chunk__31180_31213 = G__31218;
count__31181_31214 = G__31219;
i__31182_31215 = G__31220;
continue;
} else {
var temp__5457__auto___31221__$1 = cljs.core.seq.call(null,seq__31179_31212);
if(temp__5457__auto___31221__$1){
var seq__31179_31222__$1 = temp__5457__auto___31221__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31179_31222__$1)){
var c__4319__auto___31223 = cljs.core.chunk_first.call(null,seq__31179_31222__$1);
var G__31224 = cljs.core.chunk_rest.call(null,seq__31179_31222__$1);
var G__31225 = c__4319__auto___31223;
var G__31226 = cljs.core.count.call(null,c__4319__auto___31223);
var G__31227 = (0);
seq__31179_31212 = G__31224;
chunk__31180_31213 = G__31225;
count__31181_31214 = G__31226;
i__31182_31215 = G__31227;
continue;
} else {
var req_31228 = cljs.core.first.call(null,seq__31179_31222__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31228,prov);


var G__31229 = cljs.core.next.call(null,seq__31179_31222__$1);
var G__31230 = null;
var G__31231 = (0);
var G__31232 = (0);
seq__31179_31212 = G__31229;
chunk__31180_31213 = G__31230;
count__31181_31214 = G__31231;
i__31182_31215 = G__31232;
continue;
}
} else {
}
}
break;
}


var G__31233 = cljs.core.next.call(null,seq__31171__$1);
var G__31234 = null;
var G__31235 = (0);
var G__31236 = (0);
seq__31171 = G__31233;
chunk__31172 = G__31234;
count__31173 = G__31235;
i__31174 = G__31236;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31237_31241 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31238_31242 = null;
var count__31239_31243 = (0);
var i__31240_31244 = (0);
while(true){
if((i__31240_31244 < count__31239_31243)){
var ns_31245 = cljs.core._nth.call(null,chunk__31238_31242,i__31240_31244);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31245);


var G__31246 = seq__31237_31241;
var G__31247 = chunk__31238_31242;
var G__31248 = count__31239_31243;
var G__31249 = (i__31240_31244 + (1));
seq__31237_31241 = G__31246;
chunk__31238_31242 = G__31247;
count__31239_31243 = G__31248;
i__31240_31244 = G__31249;
continue;
} else {
var temp__5457__auto___31250 = cljs.core.seq.call(null,seq__31237_31241);
if(temp__5457__auto___31250){
var seq__31237_31251__$1 = temp__5457__auto___31250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31237_31251__$1)){
var c__4319__auto___31252 = cljs.core.chunk_first.call(null,seq__31237_31251__$1);
var G__31253 = cljs.core.chunk_rest.call(null,seq__31237_31251__$1);
var G__31254 = c__4319__auto___31252;
var G__31255 = cljs.core.count.call(null,c__4319__auto___31252);
var G__31256 = (0);
seq__31237_31241 = G__31253;
chunk__31238_31242 = G__31254;
count__31239_31243 = G__31255;
i__31240_31244 = G__31256;
continue;
} else {
var ns_31257 = cljs.core.first.call(null,seq__31237_31251__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31257);


var G__31258 = cljs.core.next.call(null,seq__31237_31251__$1);
var G__31259 = null;
var G__31260 = (0);
var G__31261 = (0);
seq__31237_31241 = G__31258;
chunk__31238_31242 = G__31259;
count__31239_31243 = G__31260;
i__31240_31244 = G__31261;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31262__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31263__i = 0, G__31263__a = new Array(arguments.length -  0);
while (G__31263__i < G__31263__a.length) {G__31263__a[G__31263__i] = arguments[G__31263__i + 0]; ++G__31263__i;}
  args = new cljs.core.IndexedSeq(G__31263__a,0,null);
} 
return G__31262__delegate.call(this,args);};
G__31262.cljs$lang$maxFixedArity = 0;
G__31262.cljs$lang$applyTo = (function (arglist__31264){
var args = cljs.core.seq(arglist__31264);
return G__31262__delegate(args);
});
G__31262.cljs$core$IFn$_invoke$arity$variadic = G__31262__delegate;
return G__31262;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__31265_SHARP_,p2__31266_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31265_SHARP_)].join('')),p2__31266_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__31267_SHARP_,p2__31268_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31267_SHARP_)].join(''),p2__31268_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31269 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31269.addCallback(((function (G__31269){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31269))
);

G__31269.addErrback(((function (G__31269){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31269))
);

return G__31269;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31270){if((e31270 instanceof Error)){
var e = e31270;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31270;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31271){if((e31271 instanceof Error)){
var e = e31271;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31271;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31272 = cljs.core._EQ_;
var expr__31273 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31272.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31273))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31272.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31273))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31272.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31273))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31272,expr__31273){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31272,expr__31273))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31275,callback){
var map__31276 = p__31275;
var map__31276__$1 = ((((!((map__31276 == null)))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);
var file_msg = map__31276__$1;
var request_url = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31276,map__31276__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31276,map__31276__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__){
return (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (7))){
var inst_31310 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31316_31342 = state_31314__$1;
(statearr_31316_31342[(2)] = inst_31310);

(statearr_31316_31342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (1))){
var state_31314__$1 = state_31314;
var statearr_31317_31343 = state_31314__$1;
(statearr_31317_31343[(2)] = null);

(statearr_31317_31343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (4))){
var inst_31280 = (state_31314[(7)]);
var inst_31280__$1 = (state_31314[(2)]);
var state_31314__$1 = (function (){var statearr_31318 = state_31314;
(statearr_31318[(7)] = inst_31280__$1);

return statearr_31318;
})();
if(cljs.core.truth_(inst_31280__$1)){
var statearr_31319_31344 = state_31314__$1;
(statearr_31319_31344[(1)] = (5));

} else {
var statearr_31320_31345 = state_31314__$1;
(statearr_31320_31345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (15))){
var inst_31295 = (state_31314[(8)]);
var inst_31293 = (state_31314[(9)]);
var inst_31297 = inst_31295.call(null,inst_31293);
var state_31314__$1 = state_31314;
var statearr_31321_31346 = state_31314__$1;
(statearr_31321_31346[(2)] = inst_31297);

(statearr_31321_31346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (13))){
var inst_31304 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31322_31347 = state_31314__$1;
(statearr_31322_31347[(2)] = inst_31304);

(statearr_31322_31347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (6))){
var state_31314__$1 = state_31314;
var statearr_31323_31348 = state_31314__$1;
(statearr_31323_31348[(2)] = null);

(statearr_31323_31348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (17))){
var inst_31301 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31324_31349 = state_31314__$1;
(statearr_31324_31349[(2)] = inst_31301);

(statearr_31324_31349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (3))){
var inst_31312 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31314__$1,inst_31312);
} else {
if((state_val_31315 === (12))){
var state_31314__$1 = state_31314;
var statearr_31325_31350 = state_31314__$1;
(statearr_31325_31350[(2)] = null);

(statearr_31325_31350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (2))){
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31315 === (11))){
var inst_31285 = (state_31314[(10)]);
var inst_31291 = figwheel.client.file_reloading.blocking_load.call(null,inst_31285);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(14),inst_31291);
} else {
if((state_val_31315 === (9))){
var inst_31285 = (state_31314[(10)]);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31285)){
var statearr_31326_31351 = state_31314__$1;
(statearr_31326_31351[(1)] = (11));

} else {
var statearr_31327_31352 = state_31314__$1;
(statearr_31327_31352[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (5))){
var inst_31280 = (state_31314[(7)]);
var inst_31286 = (state_31314[(11)]);
var inst_31285 = cljs.core.nth.call(null,inst_31280,(0),null);
var inst_31286__$1 = cljs.core.nth.call(null,inst_31280,(1),null);
var state_31314__$1 = (function (){var statearr_31328 = state_31314;
(statearr_31328[(10)] = inst_31285);

(statearr_31328[(11)] = inst_31286__$1);

return statearr_31328;
})();
if(cljs.core.truth_(inst_31286__$1)){
var statearr_31329_31353 = state_31314__$1;
(statearr_31329_31353[(1)] = (8));

} else {
var statearr_31330_31354 = state_31314__$1;
(statearr_31330_31354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (14))){
var inst_31285 = (state_31314[(10)]);
var inst_31295 = (state_31314[(8)]);
var inst_31293 = (state_31314[(2)]);
var inst_31294 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31295__$1 = cljs.core.get.call(null,inst_31294,inst_31285);
var state_31314__$1 = (function (){var statearr_31331 = state_31314;
(statearr_31331[(8)] = inst_31295__$1);

(statearr_31331[(9)] = inst_31293);

return statearr_31331;
})();
if(cljs.core.truth_(inst_31295__$1)){
var statearr_31332_31355 = state_31314__$1;
(statearr_31332_31355[(1)] = (15));

} else {
var statearr_31333_31356 = state_31314__$1;
(statearr_31333_31356[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (16))){
var inst_31293 = (state_31314[(9)]);
var inst_31299 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31293);
var state_31314__$1 = state_31314;
var statearr_31334_31357 = state_31314__$1;
(statearr_31334_31357[(2)] = inst_31299);

(statearr_31334_31357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (10))){
var inst_31306 = (state_31314[(2)]);
var state_31314__$1 = (function (){var statearr_31335 = state_31314;
(statearr_31335[(12)] = inst_31306);

return statearr_31335;
})();
var statearr_31336_31358 = state_31314__$1;
(statearr_31336_31358[(2)] = null);

(statearr_31336_31358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (8))){
var inst_31286 = (state_31314[(11)]);
var inst_31288 = eval(inst_31286);
var state_31314__$1 = state_31314;
var statearr_31337_31359 = state_31314__$1;
(statearr_31337_31359[(2)] = inst_31288);

(statearr_31337_31359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28999__auto__))
;
return ((function (switch__25629__auto__,c__28999__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25630__auto__ = null;
var figwheel$client$file_reloading$state_machine__25630__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = figwheel$client$file_reloading$state_machine__25630__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var figwheel$client$file_reloading$state_machine__25630__auto____1 = (function (state_31314){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_31314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object)){
var ex__25633__auto__ = e31339;
var statearr_31340_31360 = state_31314;
(statearr_31340_31360[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31361 = state_31314;
state_31314 = G__31361;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25630__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25630__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25630__auto____0;
figwheel$client$file_reloading$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25630__auto____1;
return figwheel$client$file_reloading$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__))
})();
var state__29001__auto__ = (function (){var statearr_31341 = f__29000__auto__.call(null);
(statearr_31341[(6)] = c__28999__auto__);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__))
);

return c__28999__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31363 = arguments.length;
switch (G__31363) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31365,callback){
var map__31366 = p__31365;
var map__31366__$1 = ((((!((map__31366 == null)))?(((((map__31366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31366):map__31366);
var file_msg = map__31366__$1;
var namespace = cljs.core.get.call(null,map__31366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31366,map__31366__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31366,map__31366__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31368){
var map__31369 = p__31368;
var map__31369__$1 = ((((!((map__31369 == null)))?(((((map__31369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31369):map__31369);
var file_msg = map__31369__$1;
var namespace = cljs.core.get.call(null,map__31369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31371){
var map__31372 = p__31371;
var map__31372__$1 = ((((!((map__31372 == null)))?(((((map__31372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372):map__31372);
var file_msg = map__31372__$1;
var namespace = cljs.core.get.call(null,map__31372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31374,callback){
var map__31375 = p__31374;
var map__31375__$1 = ((((!((map__31375 == null)))?(((((map__31375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31375):map__31375);
var file_msg = map__31375__$1;
var request_url = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28999__auto___31425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___31425,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___31425,out){
return (function (state_31410){
var state_val_31411 = (state_31410[(1)]);
if((state_val_31411 === (1))){
var inst_31384 = cljs.core.seq.call(null,files);
var inst_31385 = cljs.core.first.call(null,inst_31384);
var inst_31386 = cljs.core.next.call(null,inst_31384);
var inst_31387 = files;
var state_31410__$1 = (function (){var statearr_31412 = state_31410;
(statearr_31412[(7)] = inst_31387);

(statearr_31412[(8)] = inst_31386);

(statearr_31412[(9)] = inst_31385);

return statearr_31412;
})();
var statearr_31413_31426 = state_31410__$1;
(statearr_31413_31426[(2)] = null);

(statearr_31413_31426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (2))){
var inst_31387 = (state_31410[(7)]);
var inst_31393 = (state_31410[(10)]);
var inst_31392 = cljs.core.seq.call(null,inst_31387);
var inst_31393__$1 = cljs.core.first.call(null,inst_31392);
var inst_31394 = cljs.core.next.call(null,inst_31392);
var inst_31395 = (inst_31393__$1 == null);
var inst_31396 = cljs.core.not.call(null,inst_31395);
var state_31410__$1 = (function (){var statearr_31414 = state_31410;
(statearr_31414[(11)] = inst_31394);

(statearr_31414[(10)] = inst_31393__$1);

return statearr_31414;
})();
if(inst_31396){
var statearr_31415_31427 = state_31410__$1;
(statearr_31415_31427[(1)] = (4));

} else {
var statearr_31416_31428 = state_31410__$1;
(statearr_31416_31428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (3))){
var inst_31408 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31410__$1,inst_31408);
} else {
if((state_val_31411 === (4))){
var inst_31393 = (state_31410[(10)]);
var inst_31398 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31393);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31410__$1,(7),inst_31398);
} else {
if((state_val_31411 === (5))){
var inst_31404 = cljs.core.async.close_BANG_.call(null,out);
var state_31410__$1 = state_31410;
var statearr_31417_31429 = state_31410__$1;
(statearr_31417_31429[(2)] = inst_31404);

(statearr_31417_31429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (6))){
var inst_31406 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31418_31430 = state_31410__$1;
(statearr_31418_31430[(2)] = inst_31406);

(statearr_31418_31430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (7))){
var inst_31394 = (state_31410[(11)]);
var inst_31400 = (state_31410[(2)]);
var inst_31401 = cljs.core.async.put_BANG_.call(null,out,inst_31400);
var inst_31387 = inst_31394;
var state_31410__$1 = (function (){var statearr_31419 = state_31410;
(statearr_31419[(7)] = inst_31387);

(statearr_31419[(12)] = inst_31401);

return statearr_31419;
})();
var statearr_31420_31431 = state_31410__$1;
(statearr_31420_31431[(2)] = null);

(statearr_31420_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28999__auto___31425,out))
;
return ((function (switch__25629__auto__,c__28999__auto___31425,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto____0 = (function (){
var statearr_31421 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31421[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto__);

(statearr_31421[(1)] = (1));

return statearr_31421;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto____1 = (function (state_31410){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_31410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e31422){if((e31422 instanceof Object)){
var ex__25633__auto__ = e31422;
var statearr_31423_31432 = state_31410;
(statearr_31423_31432[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31433 = state_31410;
state_31410 = G__31433;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto__ = function(state_31410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto____1.call(this,state_31410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___31425,out))
})();
var state__29001__auto__ = (function (){var statearr_31424 = f__29000__auto__.call(null);
(statearr_31424[(6)] = c__28999__auto___31425);

return statearr_31424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___31425,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31434,opts){
var map__31435 = p__31434;
var map__31435__$1 = ((((!((map__31435 == null)))?(((((map__31435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31435):map__31435);
var eval_body = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31437){var e = e31437;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31438_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31438_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31439){
var vec__31440 = p__31439;
var k = cljs.core.nth.call(null,vec__31440,(0),null);
var v = cljs.core.nth.call(null,vec__31440,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31443){
var vec__31444 = p__31443;
var k = cljs.core.nth.call(null,vec__31444,(0),null);
var v = cljs.core.nth.call(null,vec__31444,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31450,p__31451){
var map__31452 = p__31450;
var map__31452__$1 = ((((!((map__31452 == null)))?(((((map__31452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31452):map__31452);
var opts = map__31452__$1;
var before_jsload = cljs.core.get.call(null,map__31452__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31452__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31452__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31453 = p__31451;
var map__31453__$1 = ((((!((map__31453 == null)))?(((((map__31453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31453):map__31453);
var msg = map__31453__$1;
var files = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31607){
var state_val_31608 = (state_31607[(1)]);
if((state_val_31608 === (7))){
var inst_31469 = (state_31607[(7)]);
var inst_31468 = (state_31607[(8)]);
var inst_31467 = (state_31607[(9)]);
var inst_31470 = (state_31607[(10)]);
var inst_31475 = cljs.core._nth.call(null,inst_31468,inst_31470);
var inst_31476 = figwheel.client.file_reloading.eval_body.call(null,inst_31475,opts);
var inst_31477 = (inst_31470 + (1));
var tmp31609 = inst_31469;
var tmp31610 = inst_31468;
var tmp31611 = inst_31467;
var inst_31467__$1 = tmp31611;
var inst_31468__$1 = tmp31610;
var inst_31469__$1 = tmp31609;
var inst_31470__$1 = inst_31477;
var state_31607__$1 = (function (){var statearr_31612 = state_31607;
(statearr_31612[(11)] = inst_31476);

(statearr_31612[(7)] = inst_31469__$1);

(statearr_31612[(8)] = inst_31468__$1);

(statearr_31612[(9)] = inst_31467__$1);

(statearr_31612[(10)] = inst_31470__$1);

return statearr_31612;
})();
var statearr_31613_31696 = state_31607__$1;
(statearr_31613_31696[(2)] = null);

(statearr_31613_31696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (20))){
var inst_31510 = (state_31607[(12)]);
var inst_31518 = figwheel.client.file_reloading.sort_files.call(null,inst_31510);
var state_31607__$1 = state_31607;
var statearr_31614_31697 = state_31607__$1;
(statearr_31614_31697[(2)] = inst_31518);

(statearr_31614_31697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (27))){
var state_31607__$1 = state_31607;
var statearr_31615_31698 = state_31607__$1;
(statearr_31615_31698[(2)] = null);

(statearr_31615_31698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (1))){
var inst_31459 = (state_31607[(13)]);
var inst_31456 = before_jsload.call(null,files);
var inst_31457 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31458 = (function (){return ((function (inst_31459,inst_31456,inst_31457,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31447_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31447_SHARP_);
});
;})(inst_31459,inst_31456,inst_31457,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31459__$1 = cljs.core.filter.call(null,inst_31458,files);
var inst_31460 = cljs.core.not_empty.call(null,inst_31459__$1);
var state_31607__$1 = (function (){var statearr_31616 = state_31607;
(statearr_31616[(14)] = inst_31456);

(statearr_31616[(13)] = inst_31459__$1);

(statearr_31616[(15)] = inst_31457);

return statearr_31616;
})();
if(cljs.core.truth_(inst_31460)){
var statearr_31617_31699 = state_31607__$1;
(statearr_31617_31699[(1)] = (2));

} else {
var statearr_31618_31700 = state_31607__$1;
(statearr_31618_31700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (24))){
var state_31607__$1 = state_31607;
var statearr_31619_31701 = state_31607__$1;
(statearr_31619_31701[(2)] = null);

(statearr_31619_31701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (39))){
var inst_31560 = (state_31607[(16)]);
var state_31607__$1 = state_31607;
var statearr_31620_31702 = state_31607__$1;
(statearr_31620_31702[(2)] = inst_31560);

(statearr_31620_31702[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (46))){
var inst_31602 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31621_31703 = state_31607__$1;
(statearr_31621_31703[(2)] = inst_31602);

(statearr_31621_31703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (4))){
var inst_31504 = (state_31607[(2)]);
var inst_31505 = cljs.core.List.EMPTY;
var inst_31506 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31505);
var inst_31507 = (function (){return ((function (inst_31504,inst_31505,inst_31506,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31448_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31448_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31448_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31448_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_31504,inst_31505,inst_31506,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31508 = cljs.core.filter.call(null,inst_31507,files);
var inst_31509 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31510 = cljs.core.concat.call(null,inst_31508,inst_31509);
var state_31607__$1 = (function (){var statearr_31622 = state_31607;
(statearr_31622[(12)] = inst_31510);

(statearr_31622[(17)] = inst_31506);

(statearr_31622[(18)] = inst_31504);

return statearr_31622;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31623_31704 = state_31607__$1;
(statearr_31623_31704[(1)] = (16));

} else {
var statearr_31624_31705 = state_31607__$1;
(statearr_31624_31705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (15))){
var inst_31494 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31625_31706 = state_31607__$1;
(statearr_31625_31706[(2)] = inst_31494);

(statearr_31625_31706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (21))){
var inst_31520 = (state_31607[(19)]);
var inst_31520__$1 = (state_31607[(2)]);
var inst_31521 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31520__$1);
var state_31607__$1 = (function (){var statearr_31626 = state_31607;
(statearr_31626[(19)] = inst_31520__$1);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31607__$1,(22),inst_31521);
} else {
if((state_val_31608 === (31))){
var inst_31605 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31607__$1,inst_31605);
} else {
if((state_val_31608 === (32))){
var inst_31560 = (state_31607[(16)]);
var inst_31565 = inst_31560.cljs$lang$protocol_mask$partition0$;
var inst_31566 = (inst_31565 & (64));
var inst_31567 = inst_31560.cljs$core$ISeq$;
var inst_31568 = (cljs.core.PROTOCOL_SENTINEL === inst_31567);
var inst_31569 = ((inst_31566) || (inst_31568));
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31569)){
var statearr_31627_31707 = state_31607__$1;
(statearr_31627_31707[(1)] = (35));

} else {
var statearr_31628_31708 = state_31607__$1;
(statearr_31628_31708[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (40))){
var inst_31582 = (state_31607[(20)]);
var inst_31581 = (state_31607[(2)]);
var inst_31582__$1 = cljs.core.get.call(null,inst_31581,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31583 = cljs.core.get.call(null,inst_31581,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31584 = cljs.core.not_empty.call(null,inst_31582__$1);
var state_31607__$1 = (function (){var statearr_31629 = state_31607;
(statearr_31629[(20)] = inst_31582__$1);

(statearr_31629[(21)] = inst_31583);

return statearr_31629;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31630_31709 = state_31607__$1;
(statearr_31630_31709[(1)] = (41));

} else {
var statearr_31631_31710 = state_31607__$1;
(statearr_31631_31710[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (33))){
var state_31607__$1 = state_31607;
var statearr_31632_31711 = state_31607__$1;
(statearr_31632_31711[(2)] = false);

(statearr_31632_31711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (13))){
var inst_31480 = (state_31607[(22)]);
var inst_31484 = cljs.core.chunk_first.call(null,inst_31480);
var inst_31485 = cljs.core.chunk_rest.call(null,inst_31480);
var inst_31486 = cljs.core.count.call(null,inst_31484);
var inst_31467 = inst_31485;
var inst_31468 = inst_31484;
var inst_31469 = inst_31486;
var inst_31470 = (0);
var state_31607__$1 = (function (){var statearr_31633 = state_31607;
(statearr_31633[(7)] = inst_31469);

(statearr_31633[(8)] = inst_31468);

(statearr_31633[(9)] = inst_31467);

(statearr_31633[(10)] = inst_31470);

return statearr_31633;
})();
var statearr_31634_31712 = state_31607__$1;
(statearr_31634_31712[(2)] = null);

(statearr_31634_31712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (22))){
var inst_31528 = (state_31607[(23)]);
var inst_31523 = (state_31607[(24)]);
var inst_31524 = (state_31607[(25)]);
var inst_31520 = (state_31607[(19)]);
var inst_31523__$1 = (state_31607[(2)]);
var inst_31524__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31523__$1);
var inst_31525 = (function (){var all_files = inst_31520;
var res_SINGLEQUOTE_ = inst_31523__$1;
var res = inst_31524__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31528,inst_31523,inst_31524,inst_31520,inst_31523__$1,inst_31524__$1,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31449_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31449_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31528,inst_31523,inst_31524,inst_31520,inst_31523__$1,inst_31524__$1,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31526 = cljs.core.filter.call(null,inst_31525,inst_31523__$1);
var inst_31527 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31528__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31527);
var inst_31529 = cljs.core.not_empty.call(null,inst_31528__$1);
var state_31607__$1 = (function (){var statearr_31635 = state_31607;
(statearr_31635[(23)] = inst_31528__$1);

(statearr_31635[(24)] = inst_31523__$1);

(statearr_31635[(25)] = inst_31524__$1);

(statearr_31635[(26)] = inst_31526);

return statearr_31635;
})();
if(cljs.core.truth_(inst_31529)){
var statearr_31636_31713 = state_31607__$1;
(statearr_31636_31713[(1)] = (23));

} else {
var statearr_31637_31714 = state_31607__$1;
(statearr_31637_31714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (36))){
var state_31607__$1 = state_31607;
var statearr_31638_31715 = state_31607__$1;
(statearr_31638_31715[(2)] = false);

(statearr_31638_31715[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (41))){
var inst_31582 = (state_31607[(20)]);
var inst_31586 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31587 = cljs.core.map.call(null,inst_31586,inst_31582);
var inst_31588 = cljs.core.pr_str.call(null,inst_31587);
var inst_31589 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31588)].join('');
var inst_31590 = figwheel.client.utils.log.call(null,inst_31589);
var state_31607__$1 = state_31607;
var statearr_31639_31716 = state_31607__$1;
(statearr_31639_31716[(2)] = inst_31590);

(statearr_31639_31716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (43))){
var inst_31583 = (state_31607[(21)]);
var inst_31593 = (state_31607[(2)]);
var inst_31594 = cljs.core.not_empty.call(null,inst_31583);
var state_31607__$1 = (function (){var statearr_31640 = state_31607;
(statearr_31640[(27)] = inst_31593);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31594)){
var statearr_31641_31717 = state_31607__$1;
(statearr_31641_31717[(1)] = (44));

} else {
var statearr_31642_31718 = state_31607__$1;
(statearr_31642_31718[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (29))){
var inst_31528 = (state_31607[(23)]);
var inst_31523 = (state_31607[(24)]);
var inst_31524 = (state_31607[(25)]);
var inst_31520 = (state_31607[(19)]);
var inst_31526 = (state_31607[(26)]);
var inst_31560 = (state_31607[(16)]);
var inst_31556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31559 = (function (){var all_files = inst_31520;
var res_SINGLEQUOTE_ = inst_31523;
var res = inst_31524;
var files_not_loaded = inst_31526;
var dependencies_that_loaded = inst_31528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31560,inst_31556,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31558){
var map__31643 = p__31558;
var map__31643__$1 = ((((!((map__31643 == null)))?(((((map__31643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31643):map__31643);
var namespace = cljs.core.get.call(null,map__31643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31560,inst_31556,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31560__$1 = cljs.core.group_by.call(null,inst_31559,inst_31526);
var inst_31562 = (inst_31560__$1 == null);
var inst_31563 = cljs.core.not.call(null,inst_31562);
var state_31607__$1 = (function (){var statearr_31645 = state_31607;
(statearr_31645[(28)] = inst_31556);

(statearr_31645[(16)] = inst_31560__$1);

return statearr_31645;
})();
if(inst_31563){
var statearr_31646_31719 = state_31607__$1;
(statearr_31646_31719[(1)] = (32));

} else {
var statearr_31647_31720 = state_31607__$1;
(statearr_31647_31720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (44))){
var inst_31583 = (state_31607[(21)]);
var inst_31596 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31583);
var inst_31597 = cljs.core.pr_str.call(null,inst_31596);
var inst_31598 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31597)].join('');
var inst_31599 = figwheel.client.utils.log.call(null,inst_31598);
var state_31607__$1 = state_31607;
var statearr_31648_31721 = state_31607__$1;
(statearr_31648_31721[(2)] = inst_31599);

(statearr_31648_31721[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (6))){
var inst_31501 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31649_31722 = state_31607__$1;
(statearr_31649_31722[(2)] = inst_31501);

(statearr_31649_31722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (28))){
var inst_31526 = (state_31607[(26)]);
var inst_31553 = (state_31607[(2)]);
var inst_31554 = cljs.core.not_empty.call(null,inst_31526);
var state_31607__$1 = (function (){var statearr_31650 = state_31607;
(statearr_31650[(29)] = inst_31553);

return statearr_31650;
})();
if(cljs.core.truth_(inst_31554)){
var statearr_31651_31723 = state_31607__$1;
(statearr_31651_31723[(1)] = (29));

} else {
var statearr_31652_31724 = state_31607__$1;
(statearr_31652_31724[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (25))){
var inst_31524 = (state_31607[(25)]);
var inst_31540 = (state_31607[(2)]);
var inst_31541 = cljs.core.not_empty.call(null,inst_31524);
var state_31607__$1 = (function (){var statearr_31653 = state_31607;
(statearr_31653[(30)] = inst_31540);

return statearr_31653;
})();
if(cljs.core.truth_(inst_31541)){
var statearr_31654_31725 = state_31607__$1;
(statearr_31654_31725[(1)] = (26));

} else {
var statearr_31655_31726 = state_31607__$1;
(statearr_31655_31726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (34))){
var inst_31576 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31576)){
var statearr_31656_31727 = state_31607__$1;
(statearr_31656_31727[(1)] = (38));

} else {
var statearr_31657_31728 = state_31607__$1;
(statearr_31657_31728[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (17))){
var state_31607__$1 = state_31607;
var statearr_31658_31729 = state_31607__$1;
(statearr_31658_31729[(2)] = recompile_dependents);

(statearr_31658_31729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (3))){
var state_31607__$1 = state_31607;
var statearr_31659_31730 = state_31607__$1;
(statearr_31659_31730[(2)] = null);

(statearr_31659_31730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (12))){
var inst_31497 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31660_31731 = state_31607__$1;
(statearr_31660_31731[(2)] = inst_31497);

(statearr_31660_31731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (2))){
var inst_31459 = (state_31607[(13)]);
var inst_31466 = cljs.core.seq.call(null,inst_31459);
var inst_31467 = inst_31466;
var inst_31468 = null;
var inst_31469 = (0);
var inst_31470 = (0);
var state_31607__$1 = (function (){var statearr_31661 = state_31607;
(statearr_31661[(7)] = inst_31469);

(statearr_31661[(8)] = inst_31468);

(statearr_31661[(9)] = inst_31467);

(statearr_31661[(10)] = inst_31470);

return statearr_31661;
})();
var statearr_31662_31732 = state_31607__$1;
(statearr_31662_31732[(2)] = null);

(statearr_31662_31732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (23))){
var inst_31528 = (state_31607[(23)]);
var inst_31523 = (state_31607[(24)]);
var inst_31524 = (state_31607[(25)]);
var inst_31520 = (state_31607[(19)]);
var inst_31526 = (state_31607[(26)]);
var inst_31531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31533 = (function (){var all_files = inst_31520;
var res_SINGLEQUOTE_ = inst_31523;
var res = inst_31524;
var files_not_loaded = inst_31526;
var dependencies_that_loaded = inst_31528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31531,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31532){
var map__31663 = p__31532;
var map__31663__$1 = ((((!((map__31663 == null)))?(((((map__31663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31663):map__31663);
var request_url = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31531,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31534 = cljs.core.reverse.call(null,inst_31528);
var inst_31535 = cljs.core.map.call(null,inst_31533,inst_31534);
var inst_31536 = cljs.core.pr_str.call(null,inst_31535);
var inst_31537 = figwheel.client.utils.log.call(null,inst_31536);
var state_31607__$1 = (function (){var statearr_31665 = state_31607;
(statearr_31665[(31)] = inst_31531);

return statearr_31665;
})();
var statearr_31666_31733 = state_31607__$1;
(statearr_31666_31733[(2)] = inst_31537);

(statearr_31666_31733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (35))){
var state_31607__$1 = state_31607;
var statearr_31667_31734 = state_31607__$1;
(statearr_31667_31734[(2)] = true);

(statearr_31667_31734[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (19))){
var inst_31510 = (state_31607[(12)]);
var inst_31516 = figwheel.client.file_reloading.expand_files.call(null,inst_31510);
var state_31607__$1 = state_31607;
var statearr_31668_31735 = state_31607__$1;
(statearr_31668_31735[(2)] = inst_31516);

(statearr_31668_31735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (11))){
var state_31607__$1 = state_31607;
var statearr_31669_31736 = state_31607__$1;
(statearr_31669_31736[(2)] = null);

(statearr_31669_31736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (9))){
var inst_31499 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31670_31737 = state_31607__$1;
(statearr_31670_31737[(2)] = inst_31499);

(statearr_31670_31737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (5))){
var inst_31469 = (state_31607[(7)]);
var inst_31470 = (state_31607[(10)]);
var inst_31472 = (inst_31470 < inst_31469);
var inst_31473 = inst_31472;
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31473)){
var statearr_31671_31738 = state_31607__$1;
(statearr_31671_31738[(1)] = (7));

} else {
var statearr_31672_31739 = state_31607__$1;
(statearr_31672_31739[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (14))){
var inst_31480 = (state_31607[(22)]);
var inst_31489 = cljs.core.first.call(null,inst_31480);
var inst_31490 = figwheel.client.file_reloading.eval_body.call(null,inst_31489,opts);
var inst_31491 = cljs.core.next.call(null,inst_31480);
var inst_31467 = inst_31491;
var inst_31468 = null;
var inst_31469 = (0);
var inst_31470 = (0);
var state_31607__$1 = (function (){var statearr_31673 = state_31607;
(statearr_31673[(7)] = inst_31469);

(statearr_31673[(8)] = inst_31468);

(statearr_31673[(32)] = inst_31490);

(statearr_31673[(9)] = inst_31467);

(statearr_31673[(10)] = inst_31470);

return statearr_31673;
})();
var statearr_31674_31740 = state_31607__$1;
(statearr_31674_31740[(2)] = null);

(statearr_31674_31740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (45))){
var state_31607__$1 = state_31607;
var statearr_31675_31741 = state_31607__$1;
(statearr_31675_31741[(2)] = null);

(statearr_31675_31741[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (26))){
var inst_31528 = (state_31607[(23)]);
var inst_31523 = (state_31607[(24)]);
var inst_31524 = (state_31607[(25)]);
var inst_31520 = (state_31607[(19)]);
var inst_31526 = (state_31607[(26)]);
var inst_31543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31545 = (function (){var all_files = inst_31520;
var res_SINGLEQUOTE_ = inst_31523;
var res = inst_31524;
var files_not_loaded = inst_31526;
var dependencies_that_loaded = inst_31528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31543,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31544){
var map__31676 = p__31544;
var map__31676__$1 = ((((!((map__31676 == null)))?(((((map__31676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31676):map__31676);
var namespace = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31543,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31546 = cljs.core.map.call(null,inst_31545,inst_31524);
var inst_31547 = cljs.core.pr_str.call(null,inst_31546);
var inst_31548 = figwheel.client.utils.log.call(null,inst_31547);
var inst_31549 = (function (){var all_files = inst_31520;
var res_SINGLEQUOTE_ = inst_31523;
var res = inst_31524;
var files_not_loaded = inst_31526;
var dependencies_that_loaded = inst_31528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31543,inst_31545,inst_31546,inst_31547,inst_31548,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31528,inst_31523,inst_31524,inst_31520,inst_31526,inst_31543,inst_31545,inst_31546,inst_31547,inst_31548,state_val_31608,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31550 = setTimeout(inst_31549,(10));
var state_31607__$1 = (function (){var statearr_31678 = state_31607;
(statearr_31678[(33)] = inst_31543);

(statearr_31678[(34)] = inst_31548);

return statearr_31678;
})();
var statearr_31679_31742 = state_31607__$1;
(statearr_31679_31742[(2)] = inst_31550);

(statearr_31679_31742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (16))){
var state_31607__$1 = state_31607;
var statearr_31680_31743 = state_31607__$1;
(statearr_31680_31743[(2)] = reload_dependents);

(statearr_31680_31743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (38))){
var inst_31560 = (state_31607[(16)]);
var inst_31578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31560);
var state_31607__$1 = state_31607;
var statearr_31681_31744 = state_31607__$1;
(statearr_31681_31744[(2)] = inst_31578);

(statearr_31681_31744[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (30))){
var state_31607__$1 = state_31607;
var statearr_31682_31745 = state_31607__$1;
(statearr_31682_31745[(2)] = null);

(statearr_31682_31745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (10))){
var inst_31480 = (state_31607[(22)]);
var inst_31482 = cljs.core.chunked_seq_QMARK_.call(null,inst_31480);
var state_31607__$1 = state_31607;
if(inst_31482){
var statearr_31683_31746 = state_31607__$1;
(statearr_31683_31746[(1)] = (13));

} else {
var statearr_31684_31747 = state_31607__$1;
(statearr_31684_31747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (18))){
var inst_31514 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31514)){
var statearr_31685_31748 = state_31607__$1;
(statearr_31685_31748[(1)] = (19));

} else {
var statearr_31686_31749 = state_31607__$1;
(statearr_31686_31749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (42))){
var state_31607__$1 = state_31607;
var statearr_31687_31750 = state_31607__$1;
(statearr_31687_31750[(2)] = null);

(statearr_31687_31750[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (37))){
var inst_31573 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31688_31751 = state_31607__$1;
(statearr_31688_31751[(2)] = inst_31573);

(statearr_31688_31751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (8))){
var inst_31480 = (state_31607[(22)]);
var inst_31467 = (state_31607[(9)]);
var inst_31480__$1 = cljs.core.seq.call(null,inst_31467);
var state_31607__$1 = (function (){var statearr_31689 = state_31607;
(statearr_31689[(22)] = inst_31480__$1);

return statearr_31689;
})();
if(inst_31480__$1){
var statearr_31690_31752 = state_31607__$1;
(statearr_31690_31752[(1)] = (10));

} else {
var statearr_31691_31753 = state_31607__$1;
(statearr_31691_31753[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25629__auto__,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto____0 = (function (){
var statearr_31692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31692[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto__);

(statearr_31692[(1)] = (1));

return statearr_31692;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto____1 = (function (state_31607){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_31607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e31693){if((e31693 instanceof Object)){
var ex__25633__auto__ = e31693;
var statearr_31694_31754 = state_31607;
(statearr_31694_31754[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31755 = state_31607;
state_31607 = G__31755;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto__ = function(state_31607){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto____1.call(this,state_31607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29001__auto__ = (function (){var statearr_31695 = f__29000__auto__.call(null);
(statearr_31695[(6)] = c__28999__auto__);

return statearr_31695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__,map__31452,map__31452__$1,opts,before_jsload,on_jsload,reload_dependents,map__31453,map__31453__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28999__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31758,link){
var map__31759 = p__31758;
var map__31759__$1 = ((((!((map__31759 == null)))?(((((map__31759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31759):map__31759);
var file = cljs.core.get.call(null,map__31759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__31759,map__31759__$1,file){
return (function (p1__31756_SHARP_,p2__31757_SHARP_){
if(cljs.core._EQ_.call(null,p1__31756_SHARP_,p2__31757_SHARP_)){
return p1__31756_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__31759,map__31759__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31762){
var map__31763 = p__31762;
var map__31763__$1 = ((((!((map__31763 == null)))?(((((map__31763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31763):map__31763);
var match_length = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31761_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31761_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31765_SHARP_,p2__31766_SHARP_){
return cljs.core.assoc.call(null,p1__31765_SHARP_,cljs.core.get.call(null,p2__31766_SHARP_,key),p2__31766_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31767 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31767);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31767);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31768,p__31769){
var map__31770 = p__31768;
var map__31770__$1 = ((((!((map__31770 == null)))?(((((map__31770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31770):map__31770);
var on_cssload = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31771 = p__31769;
var map__31771__$1 = ((((!((map__31771 == null)))?(((((map__31771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31771):map__31771);
var files_msg = map__31771__$1;
var files = cljs.core.get.call(null,map__31771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545274391862
