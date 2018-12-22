// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e32859){if((e32859 instanceof Error)){
var e = e32859;
return "Error: Unable to stringify";
} else {
throw e32859;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32862 = arguments.length;
switch (G__32862) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32860_SHARP_){
if(typeof p1__32860_SHARP_ === 'string'){
return p1__32860_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32860_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32865 = arguments.length;
var i__4500__auto___32866 = (0);
while(true){
if((i__4500__auto___32866 < len__4499__auto___32865)){
args__4502__auto__.push((arguments[i__4500__auto___32866]));

var G__32867 = (i__4500__auto___32866 + (1));
i__4500__auto___32866 = G__32867;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32864){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32864));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32869 = arguments.length;
var i__4500__auto___32870 = (0);
while(true){
if((i__4500__auto___32870 < len__4499__auto___32869)){
args__4502__auto__.push((arguments[i__4500__auto___32870]));

var G__32871 = (i__4500__auto___32870 + (1));
i__4500__auto___32870 = G__32871;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32868){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32868));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32872){
var map__32873 = p__32872;
var map__32873__$1 = ((((!((map__32873 == null)))?(((((map__32873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);
var message = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28999__auto___32952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___32952,ch){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___32952,ch){
return (function (state_32924){
var state_val_32925 = (state_32924[(1)]);
if((state_val_32925 === (7))){
var inst_32920 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32926_32953 = state_32924__$1;
(statearr_32926_32953[(2)] = inst_32920);

(statearr_32926_32953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (1))){
var state_32924__$1 = state_32924;
var statearr_32927_32954 = state_32924__$1;
(statearr_32927_32954[(2)] = null);

(statearr_32927_32954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (4))){
var inst_32877 = (state_32924[(7)]);
var inst_32877__$1 = (state_32924[(2)]);
var state_32924__$1 = (function (){var statearr_32928 = state_32924;
(statearr_32928[(7)] = inst_32877__$1);

return statearr_32928;
})();
if(cljs.core.truth_(inst_32877__$1)){
var statearr_32929_32955 = state_32924__$1;
(statearr_32929_32955[(1)] = (5));

} else {
var statearr_32930_32956 = state_32924__$1;
(statearr_32930_32956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (15))){
var inst_32884 = (state_32924[(8)]);
var inst_32899 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32884);
var inst_32900 = cljs.core.first.call(null,inst_32899);
var inst_32901 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32900);
var inst_32902 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32901)].join('');
var inst_32903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32902);
var state_32924__$1 = state_32924;
var statearr_32931_32957 = state_32924__$1;
(statearr_32931_32957[(2)] = inst_32903);

(statearr_32931_32957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (13))){
var inst_32908 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32932_32958 = state_32924__$1;
(statearr_32932_32958[(2)] = inst_32908);

(statearr_32932_32958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (6))){
var state_32924__$1 = state_32924;
var statearr_32933_32959 = state_32924__$1;
(statearr_32933_32959[(2)] = null);

(statearr_32933_32959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (17))){
var inst_32906 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32934_32960 = state_32924__$1;
(statearr_32934_32960[(2)] = inst_32906);

(statearr_32934_32960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (3))){
var inst_32922 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32924__$1,inst_32922);
} else {
if((state_val_32925 === (12))){
var inst_32883 = (state_32924[(9)]);
var inst_32897 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32883,opts);
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32897)){
var statearr_32935_32961 = state_32924__$1;
(statearr_32935_32961[(1)] = (15));

} else {
var statearr_32936_32962 = state_32924__$1;
(statearr_32936_32962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (2))){
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32924__$1,(4),ch);
} else {
if((state_val_32925 === (11))){
var inst_32884 = (state_32924[(8)]);
var inst_32889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32890 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32884);
var inst_32891 = cljs.core.async.timeout.call(null,(1000));
var inst_32892 = [inst_32890,inst_32891];
var inst_32893 = (new cljs.core.PersistentVector(null,2,(5),inst_32889,inst_32892,null));
var state_32924__$1 = state_32924;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32924__$1,(14),inst_32893);
} else {
if((state_val_32925 === (9))){
var inst_32884 = (state_32924[(8)]);
var inst_32910 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32911 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32884);
var inst_32912 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32911);
var inst_32913 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32912)].join('');
var inst_32914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32913);
var state_32924__$1 = (function (){var statearr_32937 = state_32924;
(statearr_32937[(10)] = inst_32910);

return statearr_32937;
})();
var statearr_32938_32963 = state_32924__$1;
(statearr_32938_32963[(2)] = inst_32914);

(statearr_32938_32963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (5))){
var inst_32877 = (state_32924[(7)]);
var inst_32879 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32880 = (new cljs.core.PersistentArrayMap(null,2,inst_32879,null));
var inst_32881 = (new cljs.core.PersistentHashSet(null,inst_32880,null));
var inst_32882 = figwheel.client.focus_msgs.call(null,inst_32881,inst_32877);
var inst_32883 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32882);
var inst_32884 = cljs.core.first.call(null,inst_32882);
var inst_32885 = figwheel.client.autoload_QMARK_.call(null);
var state_32924__$1 = (function (){var statearr_32939 = state_32924;
(statearr_32939[(9)] = inst_32883);

(statearr_32939[(8)] = inst_32884);

return statearr_32939;
})();
if(cljs.core.truth_(inst_32885)){
var statearr_32940_32964 = state_32924__$1;
(statearr_32940_32964[(1)] = (8));

} else {
var statearr_32941_32965 = state_32924__$1;
(statearr_32941_32965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (14))){
var inst_32895 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32942_32966 = state_32924__$1;
(statearr_32942_32966[(2)] = inst_32895);

(statearr_32942_32966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (16))){
var state_32924__$1 = state_32924;
var statearr_32943_32967 = state_32924__$1;
(statearr_32943_32967[(2)] = null);

(statearr_32943_32967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (10))){
var inst_32916 = (state_32924[(2)]);
var state_32924__$1 = (function (){var statearr_32944 = state_32924;
(statearr_32944[(11)] = inst_32916);

return statearr_32944;
})();
var statearr_32945_32968 = state_32924__$1;
(statearr_32945_32968[(2)] = null);

(statearr_32945_32968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (8))){
var inst_32883 = (state_32924[(9)]);
var inst_32887 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32883,opts);
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32887)){
var statearr_32946_32969 = state_32924__$1;
(statearr_32946_32969[(1)] = (11));

} else {
var statearr_32947_32970 = state_32924__$1;
(statearr_32947_32970[(1)] = (12));

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
});})(c__28999__auto___32952,ch))
;
return ((function (switch__25629__auto__,c__28999__auto___32952,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25630__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25630__auto____0 = (function (){
var statearr_32948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32948[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25630__auto__);

(statearr_32948[(1)] = (1));

return statearr_32948;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25630__auto____1 = (function (state_32924){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_32924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e32949){if((e32949 instanceof Object)){
var ex__25633__auto__ = e32949;
var statearr_32950_32971 = state_32924;
(statearr_32950_32971[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32972 = state_32924;
state_32924 = G__32972;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25630__auto__ = function(state_32924){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25630__auto____1.call(this,state_32924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25630__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25630__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___32952,ch))
})();
var state__29001__auto__ = (function (){var statearr_32951 = f__29000__auto__.call(null);
(statearr_32951[(6)] = c__28999__auto___32952);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___32952,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32973_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32973_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32977 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32977){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32976 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32975,_STAR_print_fn_STAR_32976,sb,base_path_32977){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_32975,_STAR_print_fn_STAR_32976,sb,base_path_32977))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32976;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32975;
}}catch (e32974){if((e32974 instanceof Error)){
var e = e32974;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32977], null));
} else {
var e = e32974;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32977))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32978){
var map__32979 = p__32978;
var map__32979__$1 = ((((!((map__32979 == null)))?(((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var opts = map__32979__$1;
var build_id = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32979,map__32979__$1,opts,build_id){
return (function (p__32981){
var vec__32982 = p__32981;
var seq__32983 = cljs.core.seq.call(null,vec__32982);
var first__32984 = cljs.core.first.call(null,seq__32983);
var seq__32983__$1 = cljs.core.next.call(null,seq__32983);
var map__32985 = first__32984;
var map__32985__$1 = ((((!((map__32985 == null)))?(((((map__32985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32985):map__32985);
var msg = map__32985__$1;
var msg_name = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32983__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32982,seq__32983,first__32984,seq__32983__$1,map__32985,map__32985__$1,msg,msg_name,_,map__32979,map__32979__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32982,seq__32983,first__32984,seq__32983__$1,map__32985,map__32985__$1,msg,msg_name,_,map__32979,map__32979__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32979,map__32979__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32987){
var vec__32988 = p__32987;
var seq__32989 = cljs.core.seq.call(null,vec__32988);
var first__32990 = cljs.core.first.call(null,seq__32989);
var seq__32989__$1 = cljs.core.next.call(null,seq__32989);
var map__32991 = first__32990;
var map__32991__$1 = ((((!((map__32991 == null)))?(((((map__32991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32991):map__32991);
var msg = map__32991__$1;
var msg_name = cljs.core.get.call(null,map__32991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32989__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32993){
var map__32994 = p__32993;
var map__32994__$1 = ((((!((map__32994 == null)))?(((((map__32994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32994):map__32994);
var on_compile_warning = cljs.core.get.call(null,map__32994__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32994__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32994,map__32994__$1,on_compile_warning,on_compile_fail){
return (function (p__32996){
var vec__32997 = p__32996;
var seq__32998 = cljs.core.seq.call(null,vec__32997);
var first__32999 = cljs.core.first.call(null,seq__32998);
var seq__32998__$1 = cljs.core.next.call(null,seq__32998);
var map__33000 = first__32999;
var map__33000__$1 = ((((!((map__33000 == null)))?(((((map__33000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33000):map__33000);
var msg = map__33000__$1;
var msg_name = cljs.core.get.call(null,map__33000__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32998__$1;
var pred__33002 = cljs.core._EQ_;
var expr__33003 = msg_name;
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33003))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33002.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33003))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32994,map__32994__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__,msg_hist,msg_names,msg){
return (function (state_33092){
var state_val_33093 = (state_33092[(1)]);
if((state_val_33093 === (7))){
var inst_33012 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33012)){
var statearr_33094_33141 = state_33092__$1;
(statearr_33094_33141[(1)] = (8));

} else {
var statearr_33095_33142 = state_33092__$1;
(statearr_33095_33142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (20))){
var inst_33086 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33096_33143 = state_33092__$1;
(statearr_33096_33143[(2)] = inst_33086);

(statearr_33096_33143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (27))){
var inst_33082 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33097_33144 = state_33092__$1;
(statearr_33097_33144[(2)] = inst_33082);

(statearr_33097_33144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (1))){
var inst_33005 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33005)){
var statearr_33098_33145 = state_33092__$1;
(statearr_33098_33145[(1)] = (2));

} else {
var statearr_33099_33146 = state_33092__$1;
(statearr_33099_33146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (24))){
var inst_33084 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33100_33147 = state_33092__$1;
(statearr_33100_33147[(2)] = inst_33084);

(statearr_33100_33147[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (4))){
var inst_33090 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33092__$1,inst_33090);
} else {
if((state_val_33093 === (15))){
var inst_33088 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33101_33148 = state_33092__$1;
(statearr_33101_33148[(2)] = inst_33088);

(statearr_33101_33148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (21))){
var inst_33041 = (state_33092[(2)]);
var inst_33042 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33043 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33042);
var state_33092__$1 = (function (){var statearr_33102 = state_33092;
(statearr_33102[(7)] = inst_33041);

return statearr_33102;
})();
var statearr_33103_33149 = state_33092__$1;
(statearr_33103_33149[(2)] = inst_33043);

(statearr_33103_33149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (31))){
var inst_33071 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33071)){
var statearr_33104_33150 = state_33092__$1;
(statearr_33104_33150[(1)] = (34));

} else {
var statearr_33105_33151 = state_33092__$1;
(statearr_33105_33151[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (32))){
var inst_33080 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33106_33152 = state_33092__$1;
(statearr_33106_33152[(2)] = inst_33080);

(statearr_33106_33152[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (33))){
var inst_33067 = (state_33092[(2)]);
var inst_33068 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33069 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33068);
var state_33092__$1 = (function (){var statearr_33107 = state_33092;
(statearr_33107[(8)] = inst_33067);

return statearr_33107;
})();
var statearr_33108_33153 = state_33092__$1;
(statearr_33108_33153[(2)] = inst_33069);

(statearr_33108_33153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (13))){
var inst_33026 = figwheel.client.heads_up.clear.call(null);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(16),inst_33026);
} else {
if((state_val_33093 === (22))){
var inst_33047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33048 = figwheel.client.heads_up.append_warning_message.call(null,inst_33047);
var state_33092__$1 = state_33092;
var statearr_33109_33154 = state_33092__$1;
(statearr_33109_33154[(2)] = inst_33048);

(statearr_33109_33154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (36))){
var inst_33078 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33110_33155 = state_33092__$1;
(statearr_33110_33155[(2)] = inst_33078);

(statearr_33110_33155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (29))){
var inst_33058 = (state_33092[(2)]);
var inst_33059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33060 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33059);
var state_33092__$1 = (function (){var statearr_33111 = state_33092;
(statearr_33111[(9)] = inst_33058);

return statearr_33111;
})();
var statearr_33112_33156 = state_33092__$1;
(statearr_33112_33156[(2)] = inst_33060);

(statearr_33112_33156[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (6))){
var inst_33007 = (state_33092[(10)]);
var state_33092__$1 = state_33092;
var statearr_33113_33157 = state_33092__$1;
(statearr_33113_33157[(2)] = inst_33007);

(statearr_33113_33157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (28))){
var inst_33054 = (state_33092[(2)]);
var inst_33055 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33056 = figwheel.client.heads_up.display_warning.call(null,inst_33055);
var state_33092__$1 = (function (){var statearr_33114 = state_33092;
(statearr_33114[(11)] = inst_33054);

return statearr_33114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(29),inst_33056);
} else {
if((state_val_33093 === (25))){
var inst_33052 = figwheel.client.heads_up.clear.call(null);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(28),inst_33052);
} else {
if((state_val_33093 === (34))){
var inst_33073 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(37),inst_33073);
} else {
if((state_val_33093 === (17))){
var inst_33032 = (state_33092[(2)]);
var inst_33033 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33034 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33033);
var state_33092__$1 = (function (){var statearr_33115 = state_33092;
(statearr_33115[(12)] = inst_33032);

return statearr_33115;
})();
var statearr_33116_33158 = state_33092__$1;
(statearr_33116_33158[(2)] = inst_33034);

(statearr_33116_33158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (3))){
var inst_33024 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33024)){
var statearr_33117_33159 = state_33092__$1;
(statearr_33117_33159[(1)] = (13));

} else {
var statearr_33118_33160 = state_33092__$1;
(statearr_33118_33160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (12))){
var inst_33020 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33119_33161 = state_33092__$1;
(statearr_33119_33161[(2)] = inst_33020);

(statearr_33119_33161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (2))){
var inst_33007 = (state_33092[(10)]);
var inst_33007__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33092__$1 = (function (){var statearr_33120 = state_33092;
(statearr_33120[(10)] = inst_33007__$1);

return statearr_33120;
})();
if(cljs.core.truth_(inst_33007__$1)){
var statearr_33121_33162 = state_33092__$1;
(statearr_33121_33162[(1)] = (5));

} else {
var statearr_33122_33163 = state_33092__$1;
(statearr_33122_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (23))){
var inst_33050 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33050)){
var statearr_33123_33164 = state_33092__$1;
(statearr_33123_33164[(1)] = (25));

} else {
var statearr_33124_33165 = state_33092__$1;
(statearr_33124_33165[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (35))){
var state_33092__$1 = state_33092;
var statearr_33125_33166 = state_33092__$1;
(statearr_33125_33166[(2)] = null);

(statearr_33125_33166[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (19))){
var inst_33045 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33045)){
var statearr_33126_33167 = state_33092__$1;
(statearr_33126_33167[(1)] = (22));

} else {
var statearr_33127_33168 = state_33092__$1;
(statearr_33127_33168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (11))){
var inst_33016 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33128_33169 = state_33092__$1;
(statearr_33128_33169[(2)] = inst_33016);

(statearr_33128_33169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (9))){
var inst_33018 = figwheel.client.heads_up.clear.call(null);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(12),inst_33018);
} else {
if((state_val_33093 === (5))){
var inst_33009 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33092__$1 = state_33092;
var statearr_33129_33170 = state_33092__$1;
(statearr_33129_33170[(2)] = inst_33009);

(statearr_33129_33170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (14))){
var inst_33036 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33036)){
var statearr_33130_33171 = state_33092__$1;
(statearr_33130_33171[(1)] = (18));

} else {
var statearr_33131_33172 = state_33092__$1;
(statearr_33131_33172[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (26))){
var inst_33062 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33062)){
var statearr_33132_33173 = state_33092__$1;
(statearr_33132_33173[(1)] = (30));

} else {
var statearr_33133_33174 = state_33092__$1;
(statearr_33133_33174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (16))){
var inst_33028 = (state_33092[(2)]);
var inst_33029 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33030 = figwheel.client.heads_up.display_exception.call(null,inst_33029);
var state_33092__$1 = (function (){var statearr_33134 = state_33092;
(statearr_33134[(13)] = inst_33028);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(17),inst_33030);
} else {
if((state_val_33093 === (30))){
var inst_33064 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33065 = figwheel.client.heads_up.display_warning.call(null,inst_33064);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(33),inst_33065);
} else {
if((state_val_33093 === (10))){
var inst_33022 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33135_33175 = state_33092__$1;
(statearr_33135_33175[(2)] = inst_33022);

(statearr_33135_33175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (18))){
var inst_33038 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33039 = figwheel.client.heads_up.display_exception.call(null,inst_33038);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(21),inst_33039);
} else {
if((state_val_33093 === (37))){
var inst_33075 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33136_33176 = state_33092__$1;
(statearr_33136_33176[(2)] = inst_33075);

(statearr_33136_33176[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (8))){
var inst_33014 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(11),inst_33014);
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
});})(c__28999__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25629__auto__,c__28999__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto____0 = (function (){
var statearr_33137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33137[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto__);

(statearr_33137[(1)] = (1));

return statearr_33137;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto____1 = (function (state_33092){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_33092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e33138){if((e33138 instanceof Object)){
var ex__25633__auto__ = e33138;
var statearr_33139_33177 = state_33092;
(statearr_33139_33177[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_33092;
state_33092 = G__33178;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto__ = function(state_33092){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto____1.call(this,state_33092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__,msg_hist,msg_names,msg))
})();
var state__29001__auto__ = (function (){var statearr_33140 = f__29000__auto__.call(null);
(statearr_33140[(6)] = c__28999__auto__);

return statearr_33140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__,msg_hist,msg_names,msg))
);

return c__28999__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28999__auto___33207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___33207,ch){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___33207,ch){
return (function (state_33193){
var state_val_33194 = (state_33193[(1)]);
if((state_val_33194 === (1))){
var state_33193__$1 = state_33193;
var statearr_33195_33208 = state_33193__$1;
(statearr_33195_33208[(2)] = null);

(statearr_33195_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (2))){
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33193__$1,(4),ch);
} else {
if((state_val_33194 === (3))){
var inst_33191 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33193__$1,inst_33191);
} else {
if((state_val_33194 === (4))){
var inst_33181 = (state_33193[(7)]);
var inst_33181__$1 = (state_33193[(2)]);
var state_33193__$1 = (function (){var statearr_33196 = state_33193;
(statearr_33196[(7)] = inst_33181__$1);

return statearr_33196;
})();
if(cljs.core.truth_(inst_33181__$1)){
var statearr_33197_33209 = state_33193__$1;
(statearr_33197_33209[(1)] = (5));

} else {
var statearr_33198_33210 = state_33193__$1;
(statearr_33198_33210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (5))){
var inst_33181 = (state_33193[(7)]);
var inst_33183 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33181);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33193__$1,(8),inst_33183);
} else {
if((state_val_33194 === (6))){
var state_33193__$1 = state_33193;
var statearr_33199_33211 = state_33193__$1;
(statearr_33199_33211[(2)] = null);

(statearr_33199_33211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (7))){
var inst_33189 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33200_33212 = state_33193__$1;
(statearr_33200_33212[(2)] = inst_33189);

(statearr_33200_33212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (8))){
var inst_33185 = (state_33193[(2)]);
var state_33193__$1 = (function (){var statearr_33201 = state_33193;
(statearr_33201[(8)] = inst_33185);

return statearr_33201;
})();
var statearr_33202_33213 = state_33193__$1;
(statearr_33202_33213[(2)] = null);

(statearr_33202_33213[(1)] = (2));


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
});})(c__28999__auto___33207,ch))
;
return ((function (switch__25629__auto__,c__28999__auto___33207,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25630__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25630__auto____0 = (function (){
var statearr_33203 = [null,null,null,null,null,null,null,null,null];
(statearr_33203[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25630__auto__);

(statearr_33203[(1)] = (1));

return statearr_33203;
});
var figwheel$client$heads_up_plugin_$_state_machine__25630__auto____1 = (function (state_33193){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_33193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e33204){if((e33204 instanceof Object)){
var ex__25633__auto__ = e33204;
var statearr_33205_33214 = state_33193;
(statearr_33205_33214[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33215 = state_33193;
state_33193 = G__33215;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25630__auto__ = function(state_33193){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25630__auto____1.call(this,state_33193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25630__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25630__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___33207,ch))
})();
var state__29001__auto__ = (function (){var statearr_33206 = f__29000__auto__.call(null);
(statearr_33206[(6)] = c__28999__auto___33207);

return statearr_33206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___33207,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__){
return (function (state_33221){
var state_val_33222 = (state_33221[(1)]);
if((state_val_33222 === (1))){
var inst_33216 = cljs.core.async.timeout.call(null,(3000));
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33221__$1,(2),inst_33216);
} else {
if((state_val_33222 === (2))){
var inst_33218 = (state_33221[(2)]);
var inst_33219 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33221__$1 = (function (){var statearr_33223 = state_33221;
(statearr_33223[(7)] = inst_33218);

return statearr_33223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33221__$1,inst_33219);
} else {
return null;
}
}
});})(c__28999__auto__))
;
return ((function (switch__25629__auto__,c__28999__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25630__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25630__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25630__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25630__auto____1 = (function (state_33221){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_33221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e33225){if((e33225 instanceof Object)){
var ex__25633__auto__ = e33225;
var statearr_33226_33228 = state_33221;
(statearr_33226_33228[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_33221;
state_33221 = G__33229;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25630__auto__ = function(state_33221){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25630__auto____1.call(this,state_33221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25630__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25630__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__))
})();
var state__29001__auto__ = (function (){var statearr_33227 = f__29000__auto__.call(null);
(statearr_33227[(6)] = c__28999__auto__);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__))
);

return c__28999__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__,figwheel_version,temp__5457__auto__){
return (function (state_33236){
var state_val_33237 = (state_33236[(1)]);
if((state_val_33237 === (1))){
var inst_33230 = cljs.core.async.timeout.call(null,(2000));
var state_33236__$1 = state_33236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33236__$1,(2),inst_33230);
} else {
if((state_val_33237 === (2))){
var inst_33232 = (state_33236[(2)]);
var inst_33233 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33234 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33233);
var state_33236__$1 = (function (){var statearr_33238 = state_33236;
(statearr_33238[(7)] = inst_33232);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33236__$1,inst_33234);
} else {
return null;
}
}
});})(c__28999__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25629__auto__,c__28999__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto____0 = (function (){
var statearr_33239 = [null,null,null,null,null,null,null,null];
(statearr_33239[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto__);

(statearr_33239[(1)] = (1));

return statearr_33239;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto____1 = (function (state_33236){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_33236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e33240){if((e33240 instanceof Object)){
var ex__25633__auto__ = e33240;
var statearr_33241_33243 = state_33236;
(statearr_33241_33243[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33244 = state_33236;
state_33236 = G__33244;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto__ = function(state_33236){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto____1.call(this,state_33236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29001__auto__ = (function (){var statearr_33242 = f__29000__auto__.call(null);
(statearr_33242[(6)] = c__28999__auto__);

return statearr_33242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__,figwheel_version,temp__5457__auto__))
);

return c__28999__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33245){
var map__33246 = p__33245;
var map__33246__$1 = ((((!((map__33246 == null)))?(((((map__33246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33246):map__33246);
var file = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33248 = "";
var G__33248__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33248),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33248);
var G__33248__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33248__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33248__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33248__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33248__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33249){
var map__33250 = p__33249;
var map__33250__$1 = ((((!((map__33250 == null)))?(((((map__33250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33250):map__33250);
var ed = map__33250__$1;
var formatted_exception = cljs.core.get.call(null,map__33250__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33250__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33250__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33252_33256 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33253_33257 = null;
var count__33254_33258 = (0);
var i__33255_33259 = (0);
while(true){
if((i__33255_33259 < count__33254_33258)){
var msg_33260 = cljs.core._nth.call(null,chunk__33253_33257,i__33255_33259);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33260);


var G__33261 = seq__33252_33256;
var G__33262 = chunk__33253_33257;
var G__33263 = count__33254_33258;
var G__33264 = (i__33255_33259 + (1));
seq__33252_33256 = G__33261;
chunk__33253_33257 = G__33262;
count__33254_33258 = G__33263;
i__33255_33259 = G__33264;
continue;
} else {
var temp__5457__auto___33265 = cljs.core.seq.call(null,seq__33252_33256);
if(temp__5457__auto___33265){
var seq__33252_33266__$1 = temp__5457__auto___33265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33252_33266__$1)){
var c__4319__auto___33267 = cljs.core.chunk_first.call(null,seq__33252_33266__$1);
var G__33268 = cljs.core.chunk_rest.call(null,seq__33252_33266__$1);
var G__33269 = c__4319__auto___33267;
var G__33270 = cljs.core.count.call(null,c__4319__auto___33267);
var G__33271 = (0);
seq__33252_33256 = G__33268;
chunk__33253_33257 = G__33269;
count__33254_33258 = G__33270;
i__33255_33259 = G__33271;
continue;
} else {
var msg_33272 = cljs.core.first.call(null,seq__33252_33266__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33272);


var G__33273 = cljs.core.next.call(null,seq__33252_33266__$1);
var G__33274 = null;
var G__33275 = (0);
var G__33276 = (0);
seq__33252_33256 = G__33273;
chunk__33253_33257 = G__33274;
count__33254_33258 = G__33275;
i__33255_33259 = G__33276;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33277){
var map__33278 = p__33277;
var map__33278__$1 = ((((!((map__33278 == null)))?(((((map__33278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33278):map__33278);
var w = map__33278__$1;
var message = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33280 = cljs.core.seq.call(null,plugins);
var chunk__33281 = null;
var count__33282 = (0);
var i__33283 = (0);
while(true){
if((i__33283 < count__33282)){
var vec__33284 = cljs.core._nth.call(null,chunk__33281,i__33283);
var k = cljs.core.nth.call(null,vec__33284,(0),null);
var plugin = cljs.core.nth.call(null,vec__33284,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33290 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33280,chunk__33281,count__33282,i__33283,pl_33290,vec__33284,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33290.call(null,msg_hist);
});})(seq__33280,chunk__33281,count__33282,i__33283,pl_33290,vec__33284,k,plugin))
);
} else {
}


var G__33291 = seq__33280;
var G__33292 = chunk__33281;
var G__33293 = count__33282;
var G__33294 = (i__33283 + (1));
seq__33280 = G__33291;
chunk__33281 = G__33292;
count__33282 = G__33293;
i__33283 = G__33294;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33280);
if(temp__5457__auto__){
var seq__33280__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33280__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33280__$1);
var G__33295 = cljs.core.chunk_rest.call(null,seq__33280__$1);
var G__33296 = c__4319__auto__;
var G__33297 = cljs.core.count.call(null,c__4319__auto__);
var G__33298 = (0);
seq__33280 = G__33295;
chunk__33281 = G__33296;
count__33282 = G__33297;
i__33283 = G__33298;
continue;
} else {
var vec__33287 = cljs.core.first.call(null,seq__33280__$1);
var k = cljs.core.nth.call(null,vec__33287,(0),null);
var plugin = cljs.core.nth.call(null,vec__33287,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33299 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33280,chunk__33281,count__33282,i__33283,pl_33299,vec__33287,k,plugin,seq__33280__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33299.call(null,msg_hist);
});})(seq__33280,chunk__33281,count__33282,i__33283,pl_33299,vec__33287,k,plugin,seq__33280__$1,temp__5457__auto__))
);
} else {
}


var G__33300 = cljs.core.next.call(null,seq__33280__$1);
var G__33301 = null;
var G__33302 = (0);
var G__33303 = (0);
seq__33280 = G__33300;
chunk__33281 = G__33301;
count__33282 = G__33302;
i__33283 = G__33303;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33305 = arguments.length;
switch (G__33305) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33306_33311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33307_33312 = null;
var count__33308_33313 = (0);
var i__33309_33314 = (0);
while(true){
if((i__33309_33314 < count__33308_33313)){
var msg_33315 = cljs.core._nth.call(null,chunk__33307_33312,i__33309_33314);
figwheel.client.socket.handle_incoming_message.call(null,msg_33315);


var G__33316 = seq__33306_33311;
var G__33317 = chunk__33307_33312;
var G__33318 = count__33308_33313;
var G__33319 = (i__33309_33314 + (1));
seq__33306_33311 = G__33316;
chunk__33307_33312 = G__33317;
count__33308_33313 = G__33318;
i__33309_33314 = G__33319;
continue;
} else {
var temp__5457__auto___33320 = cljs.core.seq.call(null,seq__33306_33311);
if(temp__5457__auto___33320){
var seq__33306_33321__$1 = temp__5457__auto___33320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33306_33321__$1)){
var c__4319__auto___33322 = cljs.core.chunk_first.call(null,seq__33306_33321__$1);
var G__33323 = cljs.core.chunk_rest.call(null,seq__33306_33321__$1);
var G__33324 = c__4319__auto___33322;
var G__33325 = cljs.core.count.call(null,c__4319__auto___33322);
var G__33326 = (0);
seq__33306_33311 = G__33323;
chunk__33307_33312 = G__33324;
count__33308_33313 = G__33325;
i__33309_33314 = G__33326;
continue;
} else {
var msg_33327 = cljs.core.first.call(null,seq__33306_33321__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33327);


var G__33328 = cljs.core.next.call(null,seq__33306_33321__$1);
var G__33329 = null;
var G__33330 = (0);
var G__33331 = (0);
seq__33306_33311 = G__33328;
chunk__33307_33312 = G__33329;
count__33308_33313 = G__33330;
i__33309_33314 = G__33331;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33336 = arguments.length;
var i__4500__auto___33337 = (0);
while(true){
if((i__4500__auto___33337 < len__4499__auto___33336)){
args__4502__auto__.push((arguments[i__4500__auto___33337]));

var G__33338 = (i__4500__auto___33337 + (1));
i__4500__auto___33337 = G__33338;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33333){
var map__33334 = p__33333;
var map__33334__$1 = ((((!((map__33334 == null)))?(((((map__33334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33334):map__33334);
var opts = map__33334__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33332){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33332));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33339){if((e33339 instanceof Error)){
var e = e33339;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33339;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33340){
var map__33341 = p__33340;
var map__33341__$1 = ((((!((map__33341 == null)))?(((((map__33341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33341):map__33341);
var msg_name = cljs.core.get.call(null,map__33341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545274393981
