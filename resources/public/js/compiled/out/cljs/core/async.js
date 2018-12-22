// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29059 = arguments.length;
switch (G__29059) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29060 = (function (f,blockable,meta29061){
this.f = f;
this.blockable = blockable;
this.meta29061 = meta29061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29062,meta29061__$1){
var self__ = this;
var _29062__$1 = this;
return (new cljs.core.async.t_cljs$core$async29060(self__.f,self__.blockable,meta29061__$1));
});

cljs.core.async.t_cljs$core$async29060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29062){
var self__ = this;
var _29062__$1 = this;
return self__.meta29061;
});

cljs.core.async.t_cljs$core$async29060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29061","meta29061",-200740559,null)], null);
});

cljs.core.async.t_cljs$core$async29060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29060";

cljs.core.async.t_cljs$core$async29060.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29060");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29060.
 */
cljs.core.async.__GT_t_cljs$core$async29060 = (function cljs$core$async$__GT_t_cljs$core$async29060(f__$1,blockable__$1,meta29061){
return (new cljs.core.async.t_cljs$core$async29060(f__$1,blockable__$1,meta29061));
});

}

return (new cljs.core.async.t_cljs$core$async29060(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29066 = arguments.length;
switch (G__29066) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29069 = arguments.length;
switch (G__29069) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29072 = arguments.length;
switch (G__29072) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29074 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29074);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29074,ret){
return (function (){
return fn1.call(null,val_29074);
});})(val_29074,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29076 = arguments.length;
switch (G__29076) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___29078 = n;
var x_29079 = (0);
while(true){
if((x_29079 < n__4376__auto___29078)){
(a[x_29079] = (0));

var G__29080 = (x_29079 + (1));
x_29079 = G__29080;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29081 = (i + (1));
i = G__29081;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29082 = (function (flag,meta29083){
this.flag = flag;
this.meta29083 = meta29083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29084,meta29083__$1){
var self__ = this;
var _29084__$1 = this;
return (new cljs.core.async.t_cljs$core$async29082(self__.flag,meta29083__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29084){
var self__ = this;
var _29084__$1 = this;
return self__.meta29083;
});})(flag))
;

cljs.core.async.t_cljs$core$async29082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29082.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29083","meta29083",1379230648,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29082";

cljs.core.async.t_cljs$core$async29082.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29082");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29082.
 */
cljs.core.async.__GT_t_cljs$core$async29082 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29082(flag__$1,meta29083){
return (new cljs.core.async.t_cljs$core$async29082(flag__$1,meta29083));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29082(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29085 = (function (flag,cb,meta29086){
this.flag = flag;
this.cb = cb;
this.meta29086 = meta29086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29087,meta29086__$1){
var self__ = this;
var _29087__$1 = this;
return (new cljs.core.async.t_cljs$core$async29085(self__.flag,self__.cb,meta29086__$1));
});

cljs.core.async.t_cljs$core$async29085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29087){
var self__ = this;
var _29087__$1 = this;
return self__.meta29086;
});

cljs.core.async.t_cljs$core$async29085.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29086","meta29086",73227622,null)], null);
});

cljs.core.async.t_cljs$core$async29085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29085";

cljs.core.async.t_cljs$core$async29085.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29085");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29085.
 */
cljs.core.async.__GT_t_cljs$core$async29085 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29085(flag__$1,cb__$1,meta29086){
return (new cljs.core.async.t_cljs$core$async29085(flag__$1,cb__$1,meta29086));
});

}

return (new cljs.core.async.t_cljs$core$async29085(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29088_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29088_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29089_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29089_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29090 = (i + (1));
i = G__29090;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29096 = arguments.length;
var i__4500__auto___29097 = (0);
while(true){
if((i__4500__auto___29097 < len__4499__auto___29096)){
args__4502__auto__.push((arguments[i__4500__auto___29097]));

var G__29098 = (i__4500__auto___29097 + (1));
i__4500__auto___29097 = G__29098;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29093){
var map__29094 = p__29093;
var map__29094__$1 = ((((!((map__29094 == null)))?(((((map__29094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29094):map__29094);
var opts = map__29094__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29091){
var G__29092 = cljs.core.first.call(null,seq29091);
var seq29091__$1 = cljs.core.next.call(null,seq29091);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29092,seq29091__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29100 = arguments.length;
switch (G__29100) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28999__auto___29146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___29146){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___29146){
return (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (7))){
var inst_29120 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29126_29147 = state_29124__$1;
(statearr_29126_29147[(2)] = inst_29120);

(statearr_29126_29147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (1))){
var state_29124__$1 = state_29124;
var statearr_29127_29148 = state_29124__$1;
(statearr_29127_29148[(2)] = null);

(statearr_29127_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (4))){
var inst_29103 = (state_29124[(7)]);
var inst_29103__$1 = (state_29124[(2)]);
var inst_29104 = (inst_29103__$1 == null);
var state_29124__$1 = (function (){var statearr_29128 = state_29124;
(statearr_29128[(7)] = inst_29103__$1);

return statearr_29128;
})();
if(cljs.core.truth_(inst_29104)){
var statearr_29129_29149 = state_29124__$1;
(statearr_29129_29149[(1)] = (5));

} else {
var statearr_29130_29150 = state_29124__$1;
(statearr_29130_29150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (13))){
var state_29124__$1 = state_29124;
var statearr_29131_29151 = state_29124__$1;
(statearr_29131_29151[(2)] = null);

(statearr_29131_29151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (6))){
var inst_29103 = (state_29124[(7)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29124__$1,(11),to,inst_29103);
} else {
if((state_val_29125 === (3))){
var inst_29122 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29124__$1,inst_29122);
} else {
if((state_val_29125 === (12))){
var state_29124__$1 = state_29124;
var statearr_29132_29152 = state_29124__$1;
(statearr_29132_29152[(2)] = null);

(statearr_29132_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (2))){
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29124__$1,(4),from);
} else {
if((state_val_29125 === (11))){
var inst_29113 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29113)){
var statearr_29133_29153 = state_29124__$1;
(statearr_29133_29153[(1)] = (12));

} else {
var statearr_29134_29154 = state_29124__$1;
(statearr_29134_29154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (9))){
var state_29124__$1 = state_29124;
var statearr_29135_29155 = state_29124__$1;
(statearr_29135_29155[(2)] = null);

(statearr_29135_29155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (5))){
var state_29124__$1 = state_29124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29136_29156 = state_29124__$1;
(statearr_29136_29156[(1)] = (8));

} else {
var statearr_29137_29157 = state_29124__$1;
(statearr_29137_29157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (14))){
var inst_29118 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29138_29158 = state_29124__$1;
(statearr_29138_29158[(2)] = inst_29118);

(statearr_29138_29158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (10))){
var inst_29110 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29139_29159 = state_29124__$1;
(statearr_29139_29159[(2)] = inst_29110);

(statearr_29139_29159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (8))){
var inst_29107 = cljs.core.async.close_BANG_.call(null,to);
var state_29124__$1 = state_29124;
var statearr_29140_29160 = state_29124__$1;
(statearr_29140_29160[(2)] = inst_29107);

(statearr_29140_29160[(1)] = (10));


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
});})(c__28999__auto___29146))
;
return ((function (switch__25629__auto__,c__28999__auto___29146){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_29124){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29142){if((e29142 instanceof Object)){
var ex__25633__auto__ = e29142;
var statearr_29143_29161 = state_29124;
(statearr_29143_29161[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29162 = state_29124;
state_29124 = G__29162;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___29146))
})();
var state__29001__auto__ = (function (){var statearr_29144 = f__29000__auto__.call(null);
(statearr_29144[(6)] = c__28999__auto___29146);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___29146))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29163){
var vec__29164 = p__29163;
var v = cljs.core.nth.call(null,vec__29164,(0),null);
var p = cljs.core.nth.call(null,vec__29164,(1),null);
var job = vec__29164;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28999__auto___29335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___29335,res,vec__29164,v,p,job,jobs,results){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___29335,res,vec__29164,v,p,job,jobs,results){
return (function (state_29171){
var state_val_29172 = (state_29171[(1)]);
if((state_val_29172 === (1))){
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(2),res,v);
} else {
if((state_val_29172 === (2))){
var inst_29168 = (state_29171[(2)]);
var inst_29169 = cljs.core.async.close_BANG_.call(null,res);
var state_29171__$1 = (function (){var statearr_29173 = state_29171;
(statearr_29173[(7)] = inst_29168);

return statearr_29173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29171__$1,inst_29169);
} else {
return null;
}
}
});})(c__28999__auto___29335,res,vec__29164,v,p,job,jobs,results))
;
return ((function (switch__25629__auto__,c__28999__auto___29335,res,vec__29164,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0 = (function (){
var statearr_29174 = [null,null,null,null,null,null,null,null];
(statearr_29174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__);

(statearr_29174[(1)] = (1));

return statearr_29174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1 = (function (state_29171){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29175){if((e29175 instanceof Object)){
var ex__25633__auto__ = e29175;
var statearr_29176_29336 = state_29171;
(statearr_29176_29336[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29337 = state_29171;
state_29171 = G__29337;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___29335,res,vec__29164,v,p,job,jobs,results))
})();
var state__29001__auto__ = (function (){var statearr_29177 = f__29000__auto__.call(null);
(statearr_29177[(6)] = c__28999__auto___29335);

return statearr_29177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___29335,res,vec__29164,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29178){
var vec__29179 = p__29178;
var v = cljs.core.nth.call(null,vec__29179,(0),null);
var p = cljs.core.nth.call(null,vec__29179,(1),null);
var job = vec__29179;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___29338 = n;
var __29339 = (0);
while(true){
if((__29339 < n__4376__auto___29338)){
var G__29182_29340 = type;
var G__29182_29341__$1 = (((G__29182_29340 instanceof cljs.core.Keyword))?G__29182_29340.fqn:null);
switch (G__29182_29341__$1) {
case "compute":
var c__28999__auto___29343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29339,c__28999__auto___29343,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (__29339,c__28999__auto___29343,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async){
return (function (state_29195){
var state_val_29196 = (state_29195[(1)]);
if((state_val_29196 === (1))){
var state_29195__$1 = state_29195;
var statearr_29197_29344 = state_29195__$1;
(statearr_29197_29344[(2)] = null);

(statearr_29197_29344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (2))){
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29195__$1,(4),jobs);
} else {
if((state_val_29196 === (3))){
var inst_29193 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29195__$1,inst_29193);
} else {
if((state_val_29196 === (4))){
var inst_29185 = (state_29195[(2)]);
var inst_29186 = process.call(null,inst_29185);
var state_29195__$1 = state_29195;
if(cljs.core.truth_(inst_29186)){
var statearr_29198_29345 = state_29195__$1;
(statearr_29198_29345[(1)] = (5));

} else {
var statearr_29199_29346 = state_29195__$1;
(statearr_29199_29346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (5))){
var state_29195__$1 = state_29195;
var statearr_29200_29347 = state_29195__$1;
(statearr_29200_29347[(2)] = null);

(statearr_29200_29347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (6))){
var state_29195__$1 = state_29195;
var statearr_29201_29348 = state_29195__$1;
(statearr_29201_29348[(2)] = null);

(statearr_29201_29348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (7))){
var inst_29191 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29202_29349 = state_29195__$1;
(statearr_29202_29349[(2)] = inst_29191);

(statearr_29202_29349[(1)] = (3));


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
});})(__29339,c__28999__auto___29343,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async))
;
return ((function (__29339,switch__25629__auto__,c__28999__auto___29343,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0 = (function (){
var statearr_29203 = [null,null,null,null,null,null,null];
(statearr_29203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__);

(statearr_29203[(1)] = (1));

return statearr_29203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1 = (function (state_29195){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29204){if((e29204 instanceof Object)){
var ex__25633__auto__ = e29204;
var statearr_29205_29350 = state_29195;
(statearr_29205_29350[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29351 = state_29195;
state_29195 = G__29351;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = function(state_29195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1.call(this,state_29195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__;
})()
;})(__29339,switch__25629__auto__,c__28999__auto___29343,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async))
})();
var state__29001__auto__ = (function (){var statearr_29206 = f__29000__auto__.call(null);
(statearr_29206[(6)] = c__28999__auto___29343);

return statearr_29206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(__29339,c__28999__auto___29343,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async))
);


break;
case "async":
var c__28999__auto___29352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29339,c__28999__auto___29352,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (__29339,c__28999__auto___29352,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (1))){
var state_29219__$1 = state_29219;
var statearr_29221_29353 = state_29219__$1;
(statearr_29221_29353[(2)] = null);

(statearr_29221_29353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (2))){
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(4),jobs);
} else {
if((state_val_29220 === (3))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
if((state_val_29220 === (4))){
var inst_29209 = (state_29219[(2)]);
var inst_29210 = async.call(null,inst_29209);
var state_29219__$1 = state_29219;
if(cljs.core.truth_(inst_29210)){
var statearr_29222_29354 = state_29219__$1;
(statearr_29222_29354[(1)] = (5));

} else {
var statearr_29223_29355 = state_29219__$1;
(statearr_29223_29355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var state_29219__$1 = state_29219;
var statearr_29224_29356 = state_29219__$1;
(statearr_29224_29356[(2)] = null);

(statearr_29224_29356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (6))){
var state_29219__$1 = state_29219;
var statearr_29225_29357 = state_29219__$1;
(statearr_29225_29357[(2)] = null);

(statearr_29225_29357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (7))){
var inst_29215 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29226_29358 = state_29219__$1;
(statearr_29226_29358[(2)] = inst_29215);

(statearr_29226_29358[(1)] = (3));


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
});})(__29339,c__28999__auto___29352,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async))
;
return ((function (__29339,switch__25629__auto__,c__28999__auto___29352,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0 = (function (){
var statearr_29227 = [null,null,null,null,null,null,null];
(statearr_29227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1 = (function (state_29219){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object)){
var ex__25633__auto__ = e29228;
var statearr_29229_29359 = state_29219;
(statearr_29229_29359[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29360 = state_29219;
state_29219 = G__29360;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__;
})()
;})(__29339,switch__25629__auto__,c__28999__auto___29352,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async))
})();
var state__29001__auto__ = (function (){var statearr_29230 = f__29000__auto__.call(null);
(statearr_29230[(6)] = c__28999__auto___29352);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(__29339,c__28999__auto___29352,G__29182_29340,G__29182_29341__$1,n__4376__auto___29338,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29182_29341__$1)].join('')));

}

var G__29361 = (__29339 + (1));
__29339 = G__29361;
continue;
} else {
}
break;
}

var c__28999__auto___29362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___29362,jobs,results,process,async){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___29362,jobs,results,process,async){
return (function (state_29252){
var state_val_29253 = (state_29252[(1)]);
if((state_val_29253 === (1))){
var state_29252__$1 = state_29252;
var statearr_29254_29363 = state_29252__$1;
(statearr_29254_29363[(2)] = null);

(statearr_29254_29363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29253 === (2))){
var state_29252__$1 = state_29252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29252__$1,(4),from);
} else {
if((state_val_29253 === (3))){
var inst_29250 = (state_29252[(2)]);
var state_29252__$1 = state_29252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29252__$1,inst_29250);
} else {
if((state_val_29253 === (4))){
var inst_29233 = (state_29252[(7)]);
var inst_29233__$1 = (state_29252[(2)]);
var inst_29234 = (inst_29233__$1 == null);
var state_29252__$1 = (function (){var statearr_29255 = state_29252;
(statearr_29255[(7)] = inst_29233__$1);

return statearr_29255;
})();
if(cljs.core.truth_(inst_29234)){
var statearr_29256_29364 = state_29252__$1;
(statearr_29256_29364[(1)] = (5));

} else {
var statearr_29257_29365 = state_29252__$1;
(statearr_29257_29365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29253 === (5))){
var inst_29236 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29252__$1 = state_29252;
var statearr_29258_29366 = state_29252__$1;
(statearr_29258_29366[(2)] = inst_29236);

(statearr_29258_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29253 === (6))){
var inst_29233 = (state_29252[(7)]);
var inst_29238 = (state_29252[(8)]);
var inst_29238__$1 = cljs.core.async.chan.call(null,(1));
var inst_29239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29240 = [inst_29233,inst_29238__$1];
var inst_29241 = (new cljs.core.PersistentVector(null,2,(5),inst_29239,inst_29240,null));
var state_29252__$1 = (function (){var statearr_29259 = state_29252;
(statearr_29259[(8)] = inst_29238__$1);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29252__$1,(8),jobs,inst_29241);
} else {
if((state_val_29253 === (7))){
var inst_29248 = (state_29252[(2)]);
var state_29252__$1 = state_29252;
var statearr_29260_29367 = state_29252__$1;
(statearr_29260_29367[(2)] = inst_29248);

(statearr_29260_29367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29253 === (8))){
var inst_29238 = (state_29252[(8)]);
var inst_29243 = (state_29252[(2)]);
var state_29252__$1 = (function (){var statearr_29261 = state_29252;
(statearr_29261[(9)] = inst_29243);

return statearr_29261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29252__$1,(9),results,inst_29238);
} else {
if((state_val_29253 === (9))){
var inst_29245 = (state_29252[(2)]);
var state_29252__$1 = (function (){var statearr_29262 = state_29252;
(statearr_29262[(10)] = inst_29245);

return statearr_29262;
})();
var statearr_29263_29368 = state_29252__$1;
(statearr_29263_29368[(2)] = null);

(statearr_29263_29368[(1)] = (2));


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
});})(c__28999__auto___29362,jobs,results,process,async))
;
return ((function (switch__25629__auto__,c__28999__auto___29362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0 = (function (){
var statearr_29264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__);

(statearr_29264[(1)] = (1));

return statearr_29264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1 = (function (state_29252){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29265){if((e29265 instanceof Object)){
var ex__25633__auto__ = e29265;
var statearr_29266_29369 = state_29252;
(statearr_29266_29369[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29370 = state_29252;
state_29252 = G__29370;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = function(state_29252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1.call(this,state_29252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___29362,jobs,results,process,async))
})();
var state__29001__auto__ = (function (){var statearr_29267 = f__29000__auto__.call(null);
(statearr_29267[(6)] = c__28999__auto___29362);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___29362,jobs,results,process,async))
);


var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__,jobs,results,process,async){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__,jobs,results,process,async){
return (function (state_29305){
var state_val_29306 = (state_29305[(1)]);
if((state_val_29306 === (7))){
var inst_29301 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29307_29371 = state_29305__$1;
(statearr_29307_29371[(2)] = inst_29301);

(statearr_29307_29371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (20))){
var state_29305__$1 = state_29305;
var statearr_29308_29372 = state_29305__$1;
(statearr_29308_29372[(2)] = null);

(statearr_29308_29372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (1))){
var state_29305__$1 = state_29305;
var statearr_29309_29373 = state_29305__$1;
(statearr_29309_29373[(2)] = null);

(statearr_29309_29373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (4))){
var inst_29270 = (state_29305[(7)]);
var inst_29270__$1 = (state_29305[(2)]);
var inst_29271 = (inst_29270__$1 == null);
var state_29305__$1 = (function (){var statearr_29310 = state_29305;
(statearr_29310[(7)] = inst_29270__$1);

return statearr_29310;
})();
if(cljs.core.truth_(inst_29271)){
var statearr_29311_29374 = state_29305__$1;
(statearr_29311_29374[(1)] = (5));

} else {
var statearr_29312_29375 = state_29305__$1;
(statearr_29312_29375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (15))){
var inst_29283 = (state_29305[(8)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29305__$1,(18),to,inst_29283);
} else {
if((state_val_29306 === (21))){
var inst_29296 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29313_29376 = state_29305__$1;
(statearr_29313_29376[(2)] = inst_29296);

(statearr_29313_29376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (13))){
var inst_29298 = (state_29305[(2)]);
var state_29305__$1 = (function (){var statearr_29314 = state_29305;
(statearr_29314[(9)] = inst_29298);

return statearr_29314;
})();
var statearr_29315_29377 = state_29305__$1;
(statearr_29315_29377[(2)] = null);

(statearr_29315_29377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (6))){
var inst_29270 = (state_29305[(7)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(11),inst_29270);
} else {
if((state_val_29306 === (17))){
var inst_29291 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
if(cljs.core.truth_(inst_29291)){
var statearr_29316_29378 = state_29305__$1;
(statearr_29316_29378[(1)] = (19));

} else {
var statearr_29317_29379 = state_29305__$1;
(statearr_29317_29379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (3))){
var inst_29303 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29305__$1,inst_29303);
} else {
if((state_val_29306 === (12))){
var inst_29280 = (state_29305[(10)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(14),inst_29280);
} else {
if((state_val_29306 === (2))){
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(4),results);
} else {
if((state_val_29306 === (19))){
var state_29305__$1 = state_29305;
var statearr_29318_29380 = state_29305__$1;
(statearr_29318_29380[(2)] = null);

(statearr_29318_29380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (11))){
var inst_29280 = (state_29305[(2)]);
var state_29305__$1 = (function (){var statearr_29319 = state_29305;
(statearr_29319[(10)] = inst_29280);

return statearr_29319;
})();
var statearr_29320_29381 = state_29305__$1;
(statearr_29320_29381[(2)] = null);

(statearr_29320_29381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (9))){
var state_29305__$1 = state_29305;
var statearr_29321_29382 = state_29305__$1;
(statearr_29321_29382[(2)] = null);

(statearr_29321_29382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (5))){
var state_29305__$1 = state_29305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29322_29383 = state_29305__$1;
(statearr_29322_29383[(1)] = (8));

} else {
var statearr_29323_29384 = state_29305__$1;
(statearr_29323_29384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (14))){
var inst_29283 = (state_29305[(8)]);
var inst_29285 = (state_29305[(11)]);
var inst_29283__$1 = (state_29305[(2)]);
var inst_29284 = (inst_29283__$1 == null);
var inst_29285__$1 = cljs.core.not.call(null,inst_29284);
var state_29305__$1 = (function (){var statearr_29324 = state_29305;
(statearr_29324[(8)] = inst_29283__$1);

(statearr_29324[(11)] = inst_29285__$1);

return statearr_29324;
})();
if(inst_29285__$1){
var statearr_29325_29385 = state_29305__$1;
(statearr_29325_29385[(1)] = (15));

} else {
var statearr_29326_29386 = state_29305__$1;
(statearr_29326_29386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (16))){
var inst_29285 = (state_29305[(11)]);
var state_29305__$1 = state_29305;
var statearr_29327_29387 = state_29305__$1;
(statearr_29327_29387[(2)] = inst_29285);

(statearr_29327_29387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (10))){
var inst_29277 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29328_29388 = state_29305__$1;
(statearr_29328_29388[(2)] = inst_29277);

(statearr_29328_29388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (18))){
var inst_29288 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29329_29389 = state_29305__$1;
(statearr_29329_29389[(2)] = inst_29288);

(statearr_29329_29389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (8))){
var inst_29274 = cljs.core.async.close_BANG_.call(null,to);
var state_29305__$1 = state_29305;
var statearr_29330_29390 = state_29305__$1;
(statearr_29330_29390[(2)] = inst_29274);

(statearr_29330_29390[(1)] = (10));


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
});})(c__28999__auto__,jobs,results,process,async))
;
return ((function (switch__25629__auto__,c__28999__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0 = (function (){
var statearr_29331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__);

(statearr_29331[(1)] = (1));

return statearr_29331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1 = (function (state_29305){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29332){if((e29332 instanceof Object)){
var ex__25633__auto__ = e29332;
var statearr_29333_29391 = state_29305;
(statearr_29333_29391[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29392 = state_29305;
state_29305 = G__29392;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__ = function(state_29305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1.call(this,state_29305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__,jobs,results,process,async))
})();
var state__29001__auto__ = (function (){var statearr_29334 = f__29000__auto__.call(null);
(statearr_29334[(6)] = c__28999__auto__);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__,jobs,results,process,async))
);

return c__28999__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29394 = arguments.length;
switch (G__29394) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29397 = arguments.length;
switch (G__29397) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29400 = arguments.length;
switch (G__29400) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28999__auto___29449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___29449,tc,fc){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___29449,tc,fc){
return (function (state_29426){
var state_val_29427 = (state_29426[(1)]);
if((state_val_29427 === (7))){
var inst_29422 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29428_29450 = state_29426__$1;
(statearr_29428_29450[(2)] = inst_29422);

(statearr_29428_29450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (1))){
var state_29426__$1 = state_29426;
var statearr_29429_29451 = state_29426__$1;
(statearr_29429_29451[(2)] = null);

(statearr_29429_29451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (4))){
var inst_29403 = (state_29426[(7)]);
var inst_29403__$1 = (state_29426[(2)]);
var inst_29404 = (inst_29403__$1 == null);
var state_29426__$1 = (function (){var statearr_29430 = state_29426;
(statearr_29430[(7)] = inst_29403__$1);

return statearr_29430;
})();
if(cljs.core.truth_(inst_29404)){
var statearr_29431_29452 = state_29426__$1;
(statearr_29431_29452[(1)] = (5));

} else {
var statearr_29432_29453 = state_29426__$1;
(statearr_29432_29453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (13))){
var state_29426__$1 = state_29426;
var statearr_29433_29454 = state_29426__$1;
(statearr_29433_29454[(2)] = null);

(statearr_29433_29454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (6))){
var inst_29403 = (state_29426[(7)]);
var inst_29409 = p.call(null,inst_29403);
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29409)){
var statearr_29434_29455 = state_29426__$1;
(statearr_29434_29455[(1)] = (9));

} else {
var statearr_29435_29456 = state_29426__$1;
(statearr_29435_29456[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (3))){
var inst_29424 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29426__$1,inst_29424);
} else {
if((state_val_29427 === (12))){
var state_29426__$1 = state_29426;
var statearr_29436_29457 = state_29426__$1;
(statearr_29436_29457[(2)] = null);

(statearr_29436_29457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (2))){
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29426__$1,(4),ch);
} else {
if((state_val_29427 === (11))){
var inst_29403 = (state_29426[(7)]);
var inst_29413 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29426__$1,(8),inst_29413,inst_29403);
} else {
if((state_val_29427 === (9))){
var state_29426__$1 = state_29426;
var statearr_29437_29458 = state_29426__$1;
(statearr_29437_29458[(2)] = tc);

(statearr_29437_29458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (5))){
var inst_29406 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29407 = cljs.core.async.close_BANG_.call(null,fc);
var state_29426__$1 = (function (){var statearr_29438 = state_29426;
(statearr_29438[(8)] = inst_29406);

return statearr_29438;
})();
var statearr_29439_29459 = state_29426__$1;
(statearr_29439_29459[(2)] = inst_29407);

(statearr_29439_29459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (14))){
var inst_29420 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29440_29460 = state_29426__$1;
(statearr_29440_29460[(2)] = inst_29420);

(statearr_29440_29460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (10))){
var state_29426__$1 = state_29426;
var statearr_29441_29461 = state_29426__$1;
(statearr_29441_29461[(2)] = fc);

(statearr_29441_29461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (8))){
var inst_29415 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29415)){
var statearr_29442_29462 = state_29426__$1;
(statearr_29442_29462[(1)] = (12));

} else {
var statearr_29443_29463 = state_29426__$1;
(statearr_29443_29463[(1)] = (13));

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
});})(c__28999__auto___29449,tc,fc))
;
return ((function (switch__25629__auto__,c__28999__auto___29449,tc,fc){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_29444 = [null,null,null,null,null,null,null,null,null];
(statearr_29444[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_29444[(1)] = (1));

return statearr_29444;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_29426){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29445){if((e29445 instanceof Object)){
var ex__25633__auto__ = e29445;
var statearr_29446_29464 = state_29426;
(statearr_29446_29464[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29465 = state_29426;
state_29426 = G__29465;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_29426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_29426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___29449,tc,fc))
})();
var state__29001__auto__ = (function (){var statearr_29447 = f__29000__auto__.call(null);
(statearr_29447[(6)] = c__28999__auto___29449);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___29449,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__){
return (function (state_29486){
var state_val_29487 = (state_29486[(1)]);
if((state_val_29487 === (7))){
var inst_29482 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29488_29506 = state_29486__$1;
(statearr_29488_29506[(2)] = inst_29482);

(statearr_29488_29506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (1))){
var inst_29466 = init;
var state_29486__$1 = (function (){var statearr_29489 = state_29486;
(statearr_29489[(7)] = inst_29466);

return statearr_29489;
})();
var statearr_29490_29507 = state_29486__$1;
(statearr_29490_29507[(2)] = null);

(statearr_29490_29507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (4))){
var inst_29469 = (state_29486[(8)]);
var inst_29469__$1 = (state_29486[(2)]);
var inst_29470 = (inst_29469__$1 == null);
var state_29486__$1 = (function (){var statearr_29491 = state_29486;
(statearr_29491[(8)] = inst_29469__$1);

return statearr_29491;
})();
if(cljs.core.truth_(inst_29470)){
var statearr_29492_29508 = state_29486__$1;
(statearr_29492_29508[(1)] = (5));

} else {
var statearr_29493_29509 = state_29486__$1;
(statearr_29493_29509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (6))){
var inst_29469 = (state_29486[(8)]);
var inst_29473 = (state_29486[(9)]);
var inst_29466 = (state_29486[(7)]);
var inst_29473__$1 = f.call(null,inst_29466,inst_29469);
var inst_29474 = cljs.core.reduced_QMARK_.call(null,inst_29473__$1);
var state_29486__$1 = (function (){var statearr_29494 = state_29486;
(statearr_29494[(9)] = inst_29473__$1);

return statearr_29494;
})();
if(inst_29474){
var statearr_29495_29510 = state_29486__$1;
(statearr_29495_29510[(1)] = (8));

} else {
var statearr_29496_29511 = state_29486__$1;
(statearr_29496_29511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (3))){
var inst_29484 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29486__$1,inst_29484);
} else {
if((state_val_29487 === (2))){
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29486__$1,(4),ch);
} else {
if((state_val_29487 === (9))){
var inst_29473 = (state_29486[(9)]);
var inst_29466 = inst_29473;
var state_29486__$1 = (function (){var statearr_29497 = state_29486;
(statearr_29497[(7)] = inst_29466);

return statearr_29497;
})();
var statearr_29498_29512 = state_29486__$1;
(statearr_29498_29512[(2)] = null);

(statearr_29498_29512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (5))){
var inst_29466 = (state_29486[(7)]);
var state_29486__$1 = state_29486;
var statearr_29499_29513 = state_29486__$1;
(statearr_29499_29513[(2)] = inst_29466);

(statearr_29499_29513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (10))){
var inst_29480 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29500_29514 = state_29486__$1;
(statearr_29500_29514[(2)] = inst_29480);

(statearr_29500_29514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (8))){
var inst_29473 = (state_29486[(9)]);
var inst_29476 = cljs.core.deref.call(null,inst_29473);
var state_29486__$1 = state_29486;
var statearr_29501_29515 = state_29486__$1;
(statearr_29501_29515[(2)] = inst_29476);

(statearr_29501_29515[(1)] = (10));


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
});})(c__28999__auto__))
;
return ((function (switch__25629__auto__,c__28999__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25630__auto____0 = (function (){
var statearr_29502 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29502[(0)] = cljs$core$async$reduce_$_state_machine__25630__auto__);

(statearr_29502[(1)] = (1));

return statearr_29502;
});
var cljs$core$async$reduce_$_state_machine__25630__auto____1 = (function (state_29486){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29503){if((e29503 instanceof Object)){
var ex__25633__auto__ = e29503;
var statearr_29504_29516 = state_29486;
(statearr_29504_29516[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29517 = state_29486;
state_29486 = G__29517;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25630__auto__ = function(state_29486){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25630__auto____1.call(this,state_29486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25630__auto____0;
cljs$core$async$reduce_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25630__auto____1;
return cljs$core$async$reduce_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__))
})();
var state__29001__auto__ = (function (){var statearr_29505 = f__29000__auto__.call(null);
(statearr_29505[(6)] = c__28999__auto__);

return statearr_29505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__))
);

return c__28999__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__,f__$1){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__,f__$1){
return (function (state_29523){
var state_val_29524 = (state_29523[(1)]);
if((state_val_29524 === (1))){
var inst_29518 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29523__$1,(2),inst_29518);
} else {
if((state_val_29524 === (2))){
var inst_29520 = (state_29523[(2)]);
var inst_29521 = f__$1.call(null,inst_29520);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29523__$1,inst_29521);
} else {
return null;
}
}
});})(c__28999__auto__,f__$1))
;
return ((function (switch__25629__auto__,c__28999__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25630__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25630__auto____0 = (function (){
var statearr_29525 = [null,null,null,null,null,null,null];
(statearr_29525[(0)] = cljs$core$async$transduce_$_state_machine__25630__auto__);

(statearr_29525[(1)] = (1));

return statearr_29525;
});
var cljs$core$async$transduce_$_state_machine__25630__auto____1 = (function (state_29523){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29526){if((e29526 instanceof Object)){
var ex__25633__auto__ = e29526;
var statearr_29527_29529 = state_29523;
(statearr_29527_29529[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29530 = state_29523;
state_29523 = G__29530;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25630__auto__ = function(state_29523){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25630__auto____1.call(this,state_29523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25630__auto____0;
cljs$core$async$transduce_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25630__auto____1;
return cljs$core$async$transduce_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__,f__$1))
})();
var state__29001__auto__ = (function (){var statearr_29528 = f__29000__auto__.call(null);
(statearr_29528[(6)] = c__28999__auto__);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__,f__$1))
);

return c__28999__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29532 = arguments.length;
switch (G__29532) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__){
return (function (state_29557){
var state_val_29558 = (state_29557[(1)]);
if((state_val_29558 === (7))){
var inst_29539 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29559_29580 = state_29557__$1;
(statearr_29559_29580[(2)] = inst_29539);

(statearr_29559_29580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (1))){
var inst_29533 = cljs.core.seq.call(null,coll);
var inst_29534 = inst_29533;
var state_29557__$1 = (function (){var statearr_29560 = state_29557;
(statearr_29560[(7)] = inst_29534);

return statearr_29560;
})();
var statearr_29561_29581 = state_29557__$1;
(statearr_29561_29581[(2)] = null);

(statearr_29561_29581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (4))){
var inst_29534 = (state_29557[(7)]);
var inst_29537 = cljs.core.first.call(null,inst_29534);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29557__$1,(7),ch,inst_29537);
} else {
if((state_val_29558 === (13))){
var inst_29551 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29562_29582 = state_29557__$1;
(statearr_29562_29582[(2)] = inst_29551);

(statearr_29562_29582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (6))){
var inst_29542 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29542)){
var statearr_29563_29583 = state_29557__$1;
(statearr_29563_29583[(1)] = (8));

} else {
var statearr_29564_29584 = state_29557__$1;
(statearr_29564_29584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (3))){
var inst_29555 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29557__$1,inst_29555);
} else {
if((state_val_29558 === (12))){
var state_29557__$1 = state_29557;
var statearr_29565_29585 = state_29557__$1;
(statearr_29565_29585[(2)] = null);

(statearr_29565_29585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (2))){
var inst_29534 = (state_29557[(7)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29534)){
var statearr_29566_29586 = state_29557__$1;
(statearr_29566_29586[(1)] = (4));

} else {
var statearr_29567_29587 = state_29557__$1;
(statearr_29567_29587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (11))){
var inst_29548 = cljs.core.async.close_BANG_.call(null,ch);
var state_29557__$1 = state_29557;
var statearr_29568_29588 = state_29557__$1;
(statearr_29568_29588[(2)] = inst_29548);

(statearr_29568_29588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (9))){
var state_29557__$1 = state_29557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29569_29589 = state_29557__$1;
(statearr_29569_29589[(1)] = (11));

} else {
var statearr_29570_29590 = state_29557__$1;
(statearr_29570_29590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (5))){
var inst_29534 = (state_29557[(7)]);
var state_29557__$1 = state_29557;
var statearr_29571_29591 = state_29557__$1;
(statearr_29571_29591[(2)] = inst_29534);

(statearr_29571_29591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (10))){
var inst_29553 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29572_29592 = state_29557__$1;
(statearr_29572_29592[(2)] = inst_29553);

(statearr_29572_29592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (8))){
var inst_29534 = (state_29557[(7)]);
var inst_29544 = cljs.core.next.call(null,inst_29534);
var inst_29534__$1 = inst_29544;
var state_29557__$1 = (function (){var statearr_29573 = state_29557;
(statearr_29573[(7)] = inst_29534__$1);

return statearr_29573;
})();
var statearr_29574_29593 = state_29557__$1;
(statearr_29574_29593[(2)] = null);

(statearr_29574_29593[(1)] = (2));


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
});})(c__28999__auto__))
;
return ((function (switch__25629__auto__,c__28999__auto__){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_29575 = [null,null,null,null,null,null,null,null];
(statearr_29575[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_29575[(1)] = (1));

return statearr_29575;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_29557){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29576){if((e29576 instanceof Object)){
var ex__25633__auto__ = e29576;
var statearr_29577_29594 = state_29557;
(statearr_29577_29594[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_29557;
state_29557 = G__29595;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_29557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_29557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__))
})();
var state__29001__auto__ = (function (){var statearr_29578 = f__29000__auto__.call(null);
(statearr_29578[(6)] = c__28999__auto__);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__))
);

return c__28999__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29596 = (function (ch,cs,meta29597){
this.ch = ch;
this.cs = cs;
this.meta29597 = meta29597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29598,meta29597__$1){
var self__ = this;
var _29598__$1 = this;
return (new cljs.core.async.t_cljs$core$async29596(self__.ch,self__.cs,meta29597__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29598){
var self__ = this;
var _29598__$1 = this;
return self__.meta29597;
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29597","meta29597",-1273211023,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29596";

cljs.core.async.t_cljs$core$async29596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29596");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29596.
 */
cljs.core.async.__GT_t_cljs$core$async29596 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29596(ch__$1,cs__$1,meta29597){
return (new cljs.core.async.t_cljs$core$async29596(ch__$1,cs__$1,meta29597));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29596(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28999__auto___29818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___29818,cs,m,dchan,dctr,done){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___29818,cs,m,dchan,dctr,done){
return (function (state_29733){
var state_val_29734 = (state_29733[(1)]);
if((state_val_29734 === (7))){
var inst_29729 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29735_29819 = state_29733__$1;
(statearr_29735_29819[(2)] = inst_29729);

(statearr_29735_29819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (20))){
var inst_29632 = (state_29733[(7)]);
var inst_29644 = cljs.core.first.call(null,inst_29632);
var inst_29645 = cljs.core.nth.call(null,inst_29644,(0),null);
var inst_29646 = cljs.core.nth.call(null,inst_29644,(1),null);
var state_29733__$1 = (function (){var statearr_29736 = state_29733;
(statearr_29736[(8)] = inst_29645);

return statearr_29736;
})();
if(cljs.core.truth_(inst_29646)){
var statearr_29737_29820 = state_29733__$1;
(statearr_29737_29820[(1)] = (22));

} else {
var statearr_29738_29821 = state_29733__$1;
(statearr_29738_29821[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (27))){
var inst_29676 = (state_29733[(9)]);
var inst_29674 = (state_29733[(10)]);
var inst_29681 = (state_29733[(11)]);
var inst_29601 = (state_29733[(12)]);
var inst_29681__$1 = cljs.core._nth.call(null,inst_29674,inst_29676);
var inst_29682 = cljs.core.async.put_BANG_.call(null,inst_29681__$1,inst_29601,done);
var state_29733__$1 = (function (){var statearr_29739 = state_29733;
(statearr_29739[(11)] = inst_29681__$1);

return statearr_29739;
})();
if(cljs.core.truth_(inst_29682)){
var statearr_29740_29822 = state_29733__$1;
(statearr_29740_29822[(1)] = (30));

} else {
var statearr_29741_29823 = state_29733__$1;
(statearr_29741_29823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (1))){
var state_29733__$1 = state_29733;
var statearr_29742_29824 = state_29733__$1;
(statearr_29742_29824[(2)] = null);

(statearr_29742_29824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (24))){
var inst_29632 = (state_29733[(7)]);
var inst_29651 = (state_29733[(2)]);
var inst_29652 = cljs.core.next.call(null,inst_29632);
var inst_29610 = inst_29652;
var inst_29611 = null;
var inst_29612 = (0);
var inst_29613 = (0);
var state_29733__$1 = (function (){var statearr_29743 = state_29733;
(statearr_29743[(13)] = inst_29613);

(statearr_29743[(14)] = inst_29612);

(statearr_29743[(15)] = inst_29611);

(statearr_29743[(16)] = inst_29651);

(statearr_29743[(17)] = inst_29610);

return statearr_29743;
})();
var statearr_29744_29825 = state_29733__$1;
(statearr_29744_29825[(2)] = null);

(statearr_29744_29825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (39))){
var state_29733__$1 = state_29733;
var statearr_29748_29826 = state_29733__$1;
(statearr_29748_29826[(2)] = null);

(statearr_29748_29826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (4))){
var inst_29601 = (state_29733[(12)]);
var inst_29601__$1 = (state_29733[(2)]);
var inst_29602 = (inst_29601__$1 == null);
var state_29733__$1 = (function (){var statearr_29749 = state_29733;
(statearr_29749[(12)] = inst_29601__$1);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29602)){
var statearr_29750_29827 = state_29733__$1;
(statearr_29750_29827[(1)] = (5));

} else {
var statearr_29751_29828 = state_29733__$1;
(statearr_29751_29828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (15))){
var inst_29613 = (state_29733[(13)]);
var inst_29612 = (state_29733[(14)]);
var inst_29611 = (state_29733[(15)]);
var inst_29610 = (state_29733[(17)]);
var inst_29628 = (state_29733[(2)]);
var inst_29629 = (inst_29613 + (1));
var tmp29745 = inst_29612;
var tmp29746 = inst_29611;
var tmp29747 = inst_29610;
var inst_29610__$1 = tmp29747;
var inst_29611__$1 = tmp29746;
var inst_29612__$1 = tmp29745;
var inst_29613__$1 = inst_29629;
var state_29733__$1 = (function (){var statearr_29752 = state_29733;
(statearr_29752[(13)] = inst_29613__$1);

(statearr_29752[(14)] = inst_29612__$1);

(statearr_29752[(15)] = inst_29611__$1);

(statearr_29752[(18)] = inst_29628);

(statearr_29752[(17)] = inst_29610__$1);

return statearr_29752;
})();
var statearr_29753_29829 = state_29733__$1;
(statearr_29753_29829[(2)] = null);

(statearr_29753_29829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (21))){
var inst_29655 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29757_29830 = state_29733__$1;
(statearr_29757_29830[(2)] = inst_29655);

(statearr_29757_29830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (31))){
var inst_29681 = (state_29733[(11)]);
var inst_29685 = done.call(null,null);
var inst_29686 = cljs.core.async.untap_STAR_.call(null,m,inst_29681);
var state_29733__$1 = (function (){var statearr_29758 = state_29733;
(statearr_29758[(19)] = inst_29685);

return statearr_29758;
})();
var statearr_29759_29831 = state_29733__$1;
(statearr_29759_29831[(2)] = inst_29686);

(statearr_29759_29831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (32))){
var inst_29676 = (state_29733[(9)]);
var inst_29675 = (state_29733[(20)]);
var inst_29674 = (state_29733[(10)]);
var inst_29673 = (state_29733[(21)]);
var inst_29688 = (state_29733[(2)]);
var inst_29689 = (inst_29676 + (1));
var tmp29754 = inst_29675;
var tmp29755 = inst_29674;
var tmp29756 = inst_29673;
var inst_29673__$1 = tmp29756;
var inst_29674__$1 = tmp29755;
var inst_29675__$1 = tmp29754;
var inst_29676__$1 = inst_29689;
var state_29733__$1 = (function (){var statearr_29760 = state_29733;
(statearr_29760[(9)] = inst_29676__$1);

(statearr_29760[(20)] = inst_29675__$1);

(statearr_29760[(10)] = inst_29674__$1);

(statearr_29760[(22)] = inst_29688);

(statearr_29760[(21)] = inst_29673__$1);

return statearr_29760;
})();
var statearr_29761_29832 = state_29733__$1;
(statearr_29761_29832[(2)] = null);

(statearr_29761_29832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (40))){
var inst_29701 = (state_29733[(23)]);
var inst_29705 = done.call(null,null);
var inst_29706 = cljs.core.async.untap_STAR_.call(null,m,inst_29701);
var state_29733__$1 = (function (){var statearr_29762 = state_29733;
(statearr_29762[(24)] = inst_29705);

return statearr_29762;
})();
var statearr_29763_29833 = state_29733__$1;
(statearr_29763_29833[(2)] = inst_29706);

(statearr_29763_29833[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (33))){
var inst_29692 = (state_29733[(25)]);
var inst_29694 = cljs.core.chunked_seq_QMARK_.call(null,inst_29692);
var state_29733__$1 = state_29733;
if(inst_29694){
var statearr_29764_29834 = state_29733__$1;
(statearr_29764_29834[(1)] = (36));

} else {
var statearr_29765_29835 = state_29733__$1;
(statearr_29765_29835[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (13))){
var inst_29622 = (state_29733[(26)]);
var inst_29625 = cljs.core.async.close_BANG_.call(null,inst_29622);
var state_29733__$1 = state_29733;
var statearr_29766_29836 = state_29733__$1;
(statearr_29766_29836[(2)] = inst_29625);

(statearr_29766_29836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (22))){
var inst_29645 = (state_29733[(8)]);
var inst_29648 = cljs.core.async.close_BANG_.call(null,inst_29645);
var state_29733__$1 = state_29733;
var statearr_29767_29837 = state_29733__$1;
(statearr_29767_29837[(2)] = inst_29648);

(statearr_29767_29837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (36))){
var inst_29692 = (state_29733[(25)]);
var inst_29696 = cljs.core.chunk_first.call(null,inst_29692);
var inst_29697 = cljs.core.chunk_rest.call(null,inst_29692);
var inst_29698 = cljs.core.count.call(null,inst_29696);
var inst_29673 = inst_29697;
var inst_29674 = inst_29696;
var inst_29675 = inst_29698;
var inst_29676 = (0);
var state_29733__$1 = (function (){var statearr_29768 = state_29733;
(statearr_29768[(9)] = inst_29676);

(statearr_29768[(20)] = inst_29675);

(statearr_29768[(10)] = inst_29674);

(statearr_29768[(21)] = inst_29673);

return statearr_29768;
})();
var statearr_29769_29838 = state_29733__$1;
(statearr_29769_29838[(2)] = null);

(statearr_29769_29838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (41))){
var inst_29692 = (state_29733[(25)]);
var inst_29708 = (state_29733[(2)]);
var inst_29709 = cljs.core.next.call(null,inst_29692);
var inst_29673 = inst_29709;
var inst_29674 = null;
var inst_29675 = (0);
var inst_29676 = (0);
var state_29733__$1 = (function (){var statearr_29770 = state_29733;
(statearr_29770[(9)] = inst_29676);

(statearr_29770[(27)] = inst_29708);

(statearr_29770[(20)] = inst_29675);

(statearr_29770[(10)] = inst_29674);

(statearr_29770[(21)] = inst_29673);

return statearr_29770;
})();
var statearr_29771_29839 = state_29733__$1;
(statearr_29771_29839[(2)] = null);

(statearr_29771_29839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (43))){
var state_29733__$1 = state_29733;
var statearr_29772_29840 = state_29733__$1;
(statearr_29772_29840[(2)] = null);

(statearr_29772_29840[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (29))){
var inst_29717 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29773_29841 = state_29733__$1;
(statearr_29773_29841[(2)] = inst_29717);

(statearr_29773_29841[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (44))){
var inst_29726 = (state_29733[(2)]);
var state_29733__$1 = (function (){var statearr_29774 = state_29733;
(statearr_29774[(28)] = inst_29726);

return statearr_29774;
})();
var statearr_29775_29842 = state_29733__$1;
(statearr_29775_29842[(2)] = null);

(statearr_29775_29842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (6))){
var inst_29665 = (state_29733[(29)]);
var inst_29664 = cljs.core.deref.call(null,cs);
var inst_29665__$1 = cljs.core.keys.call(null,inst_29664);
var inst_29666 = cljs.core.count.call(null,inst_29665__$1);
var inst_29667 = cljs.core.reset_BANG_.call(null,dctr,inst_29666);
var inst_29672 = cljs.core.seq.call(null,inst_29665__$1);
var inst_29673 = inst_29672;
var inst_29674 = null;
var inst_29675 = (0);
var inst_29676 = (0);
var state_29733__$1 = (function (){var statearr_29776 = state_29733;
(statearr_29776[(9)] = inst_29676);

(statearr_29776[(20)] = inst_29675);

(statearr_29776[(10)] = inst_29674);

(statearr_29776[(29)] = inst_29665__$1);

(statearr_29776[(30)] = inst_29667);

(statearr_29776[(21)] = inst_29673);

return statearr_29776;
})();
var statearr_29777_29843 = state_29733__$1;
(statearr_29777_29843[(2)] = null);

(statearr_29777_29843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (28))){
var inst_29692 = (state_29733[(25)]);
var inst_29673 = (state_29733[(21)]);
var inst_29692__$1 = cljs.core.seq.call(null,inst_29673);
var state_29733__$1 = (function (){var statearr_29778 = state_29733;
(statearr_29778[(25)] = inst_29692__$1);

return statearr_29778;
})();
if(inst_29692__$1){
var statearr_29779_29844 = state_29733__$1;
(statearr_29779_29844[(1)] = (33));

} else {
var statearr_29780_29845 = state_29733__$1;
(statearr_29780_29845[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (25))){
var inst_29676 = (state_29733[(9)]);
var inst_29675 = (state_29733[(20)]);
var inst_29678 = (inst_29676 < inst_29675);
var inst_29679 = inst_29678;
var state_29733__$1 = state_29733;
if(cljs.core.truth_(inst_29679)){
var statearr_29781_29846 = state_29733__$1;
(statearr_29781_29846[(1)] = (27));

} else {
var statearr_29782_29847 = state_29733__$1;
(statearr_29782_29847[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (34))){
var state_29733__$1 = state_29733;
var statearr_29783_29848 = state_29733__$1;
(statearr_29783_29848[(2)] = null);

(statearr_29783_29848[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (17))){
var state_29733__$1 = state_29733;
var statearr_29784_29849 = state_29733__$1;
(statearr_29784_29849[(2)] = null);

(statearr_29784_29849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (3))){
var inst_29731 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29733__$1,inst_29731);
} else {
if((state_val_29734 === (12))){
var inst_29660 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29785_29850 = state_29733__$1;
(statearr_29785_29850[(2)] = inst_29660);

(statearr_29785_29850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (2))){
var state_29733__$1 = state_29733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29733__$1,(4),ch);
} else {
if((state_val_29734 === (23))){
var state_29733__$1 = state_29733;
var statearr_29786_29851 = state_29733__$1;
(statearr_29786_29851[(2)] = null);

(statearr_29786_29851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (35))){
var inst_29715 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29787_29852 = state_29733__$1;
(statearr_29787_29852[(2)] = inst_29715);

(statearr_29787_29852[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (19))){
var inst_29632 = (state_29733[(7)]);
var inst_29636 = cljs.core.chunk_first.call(null,inst_29632);
var inst_29637 = cljs.core.chunk_rest.call(null,inst_29632);
var inst_29638 = cljs.core.count.call(null,inst_29636);
var inst_29610 = inst_29637;
var inst_29611 = inst_29636;
var inst_29612 = inst_29638;
var inst_29613 = (0);
var state_29733__$1 = (function (){var statearr_29788 = state_29733;
(statearr_29788[(13)] = inst_29613);

(statearr_29788[(14)] = inst_29612);

(statearr_29788[(15)] = inst_29611);

(statearr_29788[(17)] = inst_29610);

return statearr_29788;
})();
var statearr_29789_29853 = state_29733__$1;
(statearr_29789_29853[(2)] = null);

(statearr_29789_29853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (11))){
var inst_29632 = (state_29733[(7)]);
var inst_29610 = (state_29733[(17)]);
var inst_29632__$1 = cljs.core.seq.call(null,inst_29610);
var state_29733__$1 = (function (){var statearr_29790 = state_29733;
(statearr_29790[(7)] = inst_29632__$1);

return statearr_29790;
})();
if(inst_29632__$1){
var statearr_29791_29854 = state_29733__$1;
(statearr_29791_29854[(1)] = (16));

} else {
var statearr_29792_29855 = state_29733__$1;
(statearr_29792_29855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (9))){
var inst_29662 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29793_29856 = state_29733__$1;
(statearr_29793_29856[(2)] = inst_29662);

(statearr_29793_29856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (5))){
var inst_29608 = cljs.core.deref.call(null,cs);
var inst_29609 = cljs.core.seq.call(null,inst_29608);
var inst_29610 = inst_29609;
var inst_29611 = null;
var inst_29612 = (0);
var inst_29613 = (0);
var state_29733__$1 = (function (){var statearr_29794 = state_29733;
(statearr_29794[(13)] = inst_29613);

(statearr_29794[(14)] = inst_29612);

(statearr_29794[(15)] = inst_29611);

(statearr_29794[(17)] = inst_29610);

return statearr_29794;
})();
var statearr_29795_29857 = state_29733__$1;
(statearr_29795_29857[(2)] = null);

(statearr_29795_29857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (14))){
var state_29733__$1 = state_29733;
var statearr_29796_29858 = state_29733__$1;
(statearr_29796_29858[(2)] = null);

(statearr_29796_29858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (45))){
var inst_29723 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29797_29859 = state_29733__$1;
(statearr_29797_29859[(2)] = inst_29723);

(statearr_29797_29859[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (26))){
var inst_29665 = (state_29733[(29)]);
var inst_29719 = (state_29733[(2)]);
var inst_29720 = cljs.core.seq.call(null,inst_29665);
var state_29733__$1 = (function (){var statearr_29798 = state_29733;
(statearr_29798[(31)] = inst_29719);

return statearr_29798;
})();
if(inst_29720){
var statearr_29799_29860 = state_29733__$1;
(statearr_29799_29860[(1)] = (42));

} else {
var statearr_29800_29861 = state_29733__$1;
(statearr_29800_29861[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (16))){
var inst_29632 = (state_29733[(7)]);
var inst_29634 = cljs.core.chunked_seq_QMARK_.call(null,inst_29632);
var state_29733__$1 = state_29733;
if(inst_29634){
var statearr_29801_29862 = state_29733__$1;
(statearr_29801_29862[(1)] = (19));

} else {
var statearr_29802_29863 = state_29733__$1;
(statearr_29802_29863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (38))){
var inst_29712 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29803_29864 = state_29733__$1;
(statearr_29803_29864[(2)] = inst_29712);

(statearr_29803_29864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (30))){
var state_29733__$1 = state_29733;
var statearr_29804_29865 = state_29733__$1;
(statearr_29804_29865[(2)] = null);

(statearr_29804_29865[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (10))){
var inst_29613 = (state_29733[(13)]);
var inst_29611 = (state_29733[(15)]);
var inst_29621 = cljs.core._nth.call(null,inst_29611,inst_29613);
var inst_29622 = cljs.core.nth.call(null,inst_29621,(0),null);
var inst_29623 = cljs.core.nth.call(null,inst_29621,(1),null);
var state_29733__$1 = (function (){var statearr_29805 = state_29733;
(statearr_29805[(26)] = inst_29622);

return statearr_29805;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29806_29866 = state_29733__$1;
(statearr_29806_29866[(1)] = (13));

} else {
var statearr_29807_29867 = state_29733__$1;
(statearr_29807_29867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (18))){
var inst_29658 = (state_29733[(2)]);
var state_29733__$1 = state_29733;
var statearr_29808_29868 = state_29733__$1;
(statearr_29808_29868[(2)] = inst_29658);

(statearr_29808_29868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (42))){
var state_29733__$1 = state_29733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29733__$1,(45),dchan);
} else {
if((state_val_29734 === (37))){
var inst_29692 = (state_29733[(25)]);
var inst_29701 = (state_29733[(23)]);
var inst_29601 = (state_29733[(12)]);
var inst_29701__$1 = cljs.core.first.call(null,inst_29692);
var inst_29702 = cljs.core.async.put_BANG_.call(null,inst_29701__$1,inst_29601,done);
var state_29733__$1 = (function (){var statearr_29809 = state_29733;
(statearr_29809[(23)] = inst_29701__$1);

return statearr_29809;
})();
if(cljs.core.truth_(inst_29702)){
var statearr_29810_29869 = state_29733__$1;
(statearr_29810_29869[(1)] = (39));

} else {
var statearr_29811_29870 = state_29733__$1;
(statearr_29811_29870[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29734 === (8))){
var inst_29613 = (state_29733[(13)]);
var inst_29612 = (state_29733[(14)]);
var inst_29615 = (inst_29613 < inst_29612);
var inst_29616 = inst_29615;
var state_29733__$1 = state_29733;
if(cljs.core.truth_(inst_29616)){
var statearr_29812_29871 = state_29733__$1;
(statearr_29812_29871[(1)] = (10));

} else {
var statearr_29813_29872 = state_29733__$1;
(statearr_29813_29872[(1)] = (11));

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
});})(c__28999__auto___29818,cs,m,dchan,dctr,done))
;
return ((function (switch__25629__auto__,c__28999__auto___29818,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25630__auto__ = null;
var cljs$core$async$mult_$_state_machine__25630__auto____0 = (function (){
var statearr_29814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29814[(0)] = cljs$core$async$mult_$_state_machine__25630__auto__);

(statearr_29814[(1)] = (1));

return statearr_29814;
});
var cljs$core$async$mult_$_state_machine__25630__auto____1 = (function (state_29733){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__25633__auto__ = e29815;
var statearr_29816_29873 = state_29733;
(statearr_29816_29873[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29874 = state_29733;
state_29733 = G__29874;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25630__auto__ = function(state_29733){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25630__auto____1.call(this,state_29733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25630__auto____0;
cljs$core$async$mult_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25630__auto____1;
return cljs$core$async$mult_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___29818,cs,m,dchan,dctr,done))
})();
var state__29001__auto__ = (function (){var statearr_29817 = f__29000__auto__.call(null);
(statearr_29817[(6)] = c__28999__auto___29818);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___29818,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29876 = arguments.length;
switch (G__29876) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29888 = arguments.length;
var i__4500__auto___29889 = (0);
while(true){
if((i__4500__auto___29889 < len__4499__auto___29888)){
args__4502__auto__.push((arguments[i__4500__auto___29889]));

var G__29890 = (i__4500__auto___29889 + (1));
i__4500__auto___29889 = G__29890;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29882){
var map__29883 = p__29882;
var map__29883__$1 = ((((!((map__29883 == null)))?(((((map__29883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29883):map__29883);
var opts = map__29883__$1;
var statearr_29885_29891 = state;
(statearr_29885_29891[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__29883,map__29883__$1,opts){
return (function (val){
var statearr_29886_29892 = state;
(statearr_29886_29892[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29883,map__29883__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29887_29893 = state;
(statearr_29887_29893[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29878){
var G__29879 = cljs.core.first.call(null,seq29878);
var seq29878__$1 = cljs.core.next.call(null,seq29878);
var G__29880 = cljs.core.first.call(null,seq29878__$1);
var seq29878__$2 = cljs.core.next.call(null,seq29878__$1);
var G__29881 = cljs.core.first.call(null,seq29878__$2);
var seq29878__$3 = cljs.core.next.call(null,seq29878__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29879,G__29880,G__29881,seq29878__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29894 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29895){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29895 = meta29895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29896,meta29895__$1){
var self__ = this;
var _29896__$1 = this;
return (new cljs.core.async.t_cljs$core$async29894(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29895__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29896){
var self__ = this;
var _29896__$1 = this;
return self__.meta29895;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29895","meta29895",-1845779336,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29894";

cljs.core.async.t_cljs$core$async29894.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29894");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29894.
 */
cljs.core.async.__GT_t_cljs$core$async29894 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29894(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29895){
return (new cljs.core.async.t_cljs$core$async29894(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29895));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29894(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28999__auto___30058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29998){
var state_val_29999 = (state_29998[(1)]);
if((state_val_29999 === (7))){
var inst_29913 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30000_30059 = state_29998__$1;
(statearr_30000_30059[(2)] = inst_29913);

(statearr_30000_30059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (20))){
var inst_29925 = (state_29998[(7)]);
var state_29998__$1 = state_29998;
var statearr_30001_30060 = state_29998__$1;
(statearr_30001_30060[(2)] = inst_29925);

(statearr_30001_30060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (27))){
var state_29998__$1 = state_29998;
var statearr_30002_30061 = state_29998__$1;
(statearr_30002_30061[(2)] = null);

(statearr_30002_30061[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (1))){
var inst_29900 = (state_29998[(8)]);
var inst_29900__$1 = calc_state.call(null);
var inst_29902 = (inst_29900__$1 == null);
var inst_29903 = cljs.core.not.call(null,inst_29902);
var state_29998__$1 = (function (){var statearr_30003 = state_29998;
(statearr_30003[(8)] = inst_29900__$1);

return statearr_30003;
})();
if(inst_29903){
var statearr_30004_30062 = state_29998__$1;
(statearr_30004_30062[(1)] = (2));

} else {
var statearr_30005_30063 = state_29998__$1;
(statearr_30005_30063[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (24))){
var inst_29972 = (state_29998[(9)]);
var inst_29949 = (state_29998[(10)]);
var inst_29958 = (state_29998[(11)]);
var inst_29972__$1 = inst_29949.call(null,inst_29958);
var state_29998__$1 = (function (){var statearr_30006 = state_29998;
(statearr_30006[(9)] = inst_29972__$1);

return statearr_30006;
})();
if(cljs.core.truth_(inst_29972__$1)){
var statearr_30007_30064 = state_29998__$1;
(statearr_30007_30064[(1)] = (29));

} else {
var statearr_30008_30065 = state_29998__$1;
(statearr_30008_30065[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (4))){
var inst_29916 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29916)){
var statearr_30009_30066 = state_29998__$1;
(statearr_30009_30066[(1)] = (8));

} else {
var statearr_30010_30067 = state_29998__$1;
(statearr_30010_30067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (15))){
var inst_29943 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29943)){
var statearr_30011_30068 = state_29998__$1;
(statearr_30011_30068[(1)] = (19));

} else {
var statearr_30012_30069 = state_29998__$1;
(statearr_30012_30069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (21))){
var inst_29948 = (state_29998[(12)]);
var inst_29948__$1 = (state_29998[(2)]);
var inst_29949 = cljs.core.get.call(null,inst_29948__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29950 = cljs.core.get.call(null,inst_29948__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29951 = cljs.core.get.call(null,inst_29948__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29998__$1 = (function (){var statearr_30013 = state_29998;
(statearr_30013[(12)] = inst_29948__$1);

(statearr_30013[(13)] = inst_29950);

(statearr_30013[(10)] = inst_29949);

return statearr_30013;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29998__$1,(22),inst_29951);
} else {
if((state_val_29999 === (31))){
var inst_29980 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29980)){
var statearr_30014_30070 = state_29998__$1;
(statearr_30014_30070[(1)] = (32));

} else {
var statearr_30015_30071 = state_29998__$1;
(statearr_30015_30071[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (32))){
var inst_29957 = (state_29998[(14)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29998__$1,(35),out,inst_29957);
} else {
if((state_val_29999 === (33))){
var inst_29948 = (state_29998[(12)]);
var inst_29925 = inst_29948;
var state_29998__$1 = (function (){var statearr_30016 = state_29998;
(statearr_30016[(7)] = inst_29925);

return statearr_30016;
})();
var statearr_30017_30072 = state_29998__$1;
(statearr_30017_30072[(2)] = null);

(statearr_30017_30072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (13))){
var inst_29925 = (state_29998[(7)]);
var inst_29932 = inst_29925.cljs$lang$protocol_mask$partition0$;
var inst_29933 = (inst_29932 & (64));
var inst_29934 = inst_29925.cljs$core$ISeq$;
var inst_29935 = (cljs.core.PROTOCOL_SENTINEL === inst_29934);
var inst_29936 = ((inst_29933) || (inst_29935));
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29936)){
var statearr_30018_30073 = state_29998__$1;
(statearr_30018_30073[(1)] = (16));

} else {
var statearr_30019_30074 = state_29998__$1;
(statearr_30019_30074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (22))){
var inst_29958 = (state_29998[(11)]);
var inst_29957 = (state_29998[(14)]);
var inst_29956 = (state_29998[(2)]);
var inst_29957__$1 = cljs.core.nth.call(null,inst_29956,(0),null);
var inst_29958__$1 = cljs.core.nth.call(null,inst_29956,(1),null);
var inst_29959 = (inst_29957__$1 == null);
var inst_29960 = cljs.core._EQ_.call(null,inst_29958__$1,change);
var inst_29961 = ((inst_29959) || (inst_29960));
var state_29998__$1 = (function (){var statearr_30020 = state_29998;
(statearr_30020[(11)] = inst_29958__$1);

(statearr_30020[(14)] = inst_29957__$1);

return statearr_30020;
})();
if(cljs.core.truth_(inst_29961)){
var statearr_30021_30075 = state_29998__$1;
(statearr_30021_30075[(1)] = (23));

} else {
var statearr_30022_30076 = state_29998__$1;
(statearr_30022_30076[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (36))){
var inst_29948 = (state_29998[(12)]);
var inst_29925 = inst_29948;
var state_29998__$1 = (function (){var statearr_30023 = state_29998;
(statearr_30023[(7)] = inst_29925);

return statearr_30023;
})();
var statearr_30024_30077 = state_29998__$1;
(statearr_30024_30077[(2)] = null);

(statearr_30024_30077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (29))){
var inst_29972 = (state_29998[(9)]);
var state_29998__$1 = state_29998;
var statearr_30025_30078 = state_29998__$1;
(statearr_30025_30078[(2)] = inst_29972);

(statearr_30025_30078[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (6))){
var state_29998__$1 = state_29998;
var statearr_30026_30079 = state_29998__$1;
(statearr_30026_30079[(2)] = false);

(statearr_30026_30079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (28))){
var inst_29968 = (state_29998[(2)]);
var inst_29969 = calc_state.call(null);
var inst_29925 = inst_29969;
var state_29998__$1 = (function (){var statearr_30027 = state_29998;
(statearr_30027[(15)] = inst_29968);

(statearr_30027[(7)] = inst_29925);

return statearr_30027;
})();
var statearr_30028_30080 = state_29998__$1;
(statearr_30028_30080[(2)] = null);

(statearr_30028_30080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (25))){
var inst_29994 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30029_30081 = state_29998__$1;
(statearr_30029_30081[(2)] = inst_29994);

(statearr_30029_30081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (34))){
var inst_29992 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30030_30082 = state_29998__$1;
(statearr_30030_30082[(2)] = inst_29992);

(statearr_30030_30082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (17))){
var state_29998__$1 = state_29998;
var statearr_30031_30083 = state_29998__$1;
(statearr_30031_30083[(2)] = false);

(statearr_30031_30083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (3))){
var state_29998__$1 = state_29998;
var statearr_30032_30084 = state_29998__$1;
(statearr_30032_30084[(2)] = false);

(statearr_30032_30084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (12))){
var inst_29996 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29998__$1,inst_29996);
} else {
if((state_val_29999 === (2))){
var inst_29900 = (state_29998[(8)]);
var inst_29905 = inst_29900.cljs$lang$protocol_mask$partition0$;
var inst_29906 = (inst_29905 & (64));
var inst_29907 = inst_29900.cljs$core$ISeq$;
var inst_29908 = (cljs.core.PROTOCOL_SENTINEL === inst_29907);
var inst_29909 = ((inst_29906) || (inst_29908));
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29909)){
var statearr_30033_30085 = state_29998__$1;
(statearr_30033_30085[(1)] = (5));

} else {
var statearr_30034_30086 = state_29998__$1;
(statearr_30034_30086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (23))){
var inst_29957 = (state_29998[(14)]);
var inst_29963 = (inst_29957 == null);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29963)){
var statearr_30035_30087 = state_29998__$1;
(statearr_30035_30087[(1)] = (26));

} else {
var statearr_30036_30088 = state_29998__$1;
(statearr_30036_30088[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (35))){
var inst_29983 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
if(cljs.core.truth_(inst_29983)){
var statearr_30037_30089 = state_29998__$1;
(statearr_30037_30089[(1)] = (36));

} else {
var statearr_30038_30090 = state_29998__$1;
(statearr_30038_30090[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (19))){
var inst_29925 = (state_29998[(7)]);
var inst_29945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29925);
var state_29998__$1 = state_29998;
var statearr_30039_30091 = state_29998__$1;
(statearr_30039_30091[(2)] = inst_29945);

(statearr_30039_30091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (11))){
var inst_29925 = (state_29998[(7)]);
var inst_29929 = (inst_29925 == null);
var inst_29930 = cljs.core.not.call(null,inst_29929);
var state_29998__$1 = state_29998;
if(inst_29930){
var statearr_30040_30092 = state_29998__$1;
(statearr_30040_30092[(1)] = (13));

} else {
var statearr_30041_30093 = state_29998__$1;
(statearr_30041_30093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (9))){
var inst_29900 = (state_29998[(8)]);
var state_29998__$1 = state_29998;
var statearr_30042_30094 = state_29998__$1;
(statearr_30042_30094[(2)] = inst_29900);

(statearr_30042_30094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (5))){
var state_29998__$1 = state_29998;
var statearr_30043_30095 = state_29998__$1;
(statearr_30043_30095[(2)] = true);

(statearr_30043_30095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (14))){
var state_29998__$1 = state_29998;
var statearr_30044_30096 = state_29998__$1;
(statearr_30044_30096[(2)] = false);

(statearr_30044_30096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (26))){
var inst_29958 = (state_29998[(11)]);
var inst_29965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29958);
var state_29998__$1 = state_29998;
var statearr_30045_30097 = state_29998__$1;
(statearr_30045_30097[(2)] = inst_29965);

(statearr_30045_30097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (16))){
var state_29998__$1 = state_29998;
var statearr_30046_30098 = state_29998__$1;
(statearr_30046_30098[(2)] = true);

(statearr_30046_30098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (38))){
var inst_29988 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30047_30099 = state_29998__$1;
(statearr_30047_30099[(2)] = inst_29988);

(statearr_30047_30099[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (30))){
var inst_29950 = (state_29998[(13)]);
var inst_29949 = (state_29998[(10)]);
var inst_29958 = (state_29998[(11)]);
var inst_29975 = cljs.core.empty_QMARK_.call(null,inst_29949);
var inst_29976 = inst_29950.call(null,inst_29958);
var inst_29977 = cljs.core.not.call(null,inst_29976);
var inst_29978 = ((inst_29975) && (inst_29977));
var state_29998__$1 = state_29998;
var statearr_30048_30100 = state_29998__$1;
(statearr_30048_30100[(2)] = inst_29978);

(statearr_30048_30100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (10))){
var inst_29900 = (state_29998[(8)]);
var inst_29921 = (state_29998[(2)]);
var inst_29922 = cljs.core.get.call(null,inst_29921,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29923 = cljs.core.get.call(null,inst_29921,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29924 = cljs.core.get.call(null,inst_29921,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29925 = inst_29900;
var state_29998__$1 = (function (){var statearr_30049 = state_29998;
(statearr_30049[(16)] = inst_29922);

(statearr_30049[(17)] = inst_29923);

(statearr_30049[(18)] = inst_29924);

(statearr_30049[(7)] = inst_29925);

return statearr_30049;
})();
var statearr_30050_30101 = state_29998__$1;
(statearr_30050_30101[(2)] = null);

(statearr_30050_30101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (18))){
var inst_29940 = (state_29998[(2)]);
var state_29998__$1 = state_29998;
var statearr_30051_30102 = state_29998__$1;
(statearr_30051_30102[(2)] = inst_29940);

(statearr_30051_30102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (37))){
var state_29998__$1 = state_29998;
var statearr_30052_30103 = state_29998__$1;
(statearr_30052_30103[(2)] = null);

(statearr_30052_30103[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29999 === (8))){
var inst_29900 = (state_29998[(8)]);
var inst_29918 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29900);
var state_29998__$1 = state_29998;
var statearr_30053_30104 = state_29998__$1;
(statearr_30053_30104[(2)] = inst_29918);

(statearr_30053_30104[(1)] = (10));


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
});})(c__28999__auto___30058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25629__auto__,c__28999__auto___30058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25630__auto__ = null;
var cljs$core$async$mix_$_state_machine__25630__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$mix_$_state_machine__25630__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$mix_$_state_machine__25630__auto____1 = (function (state_29998){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_29998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30055){if((e30055 instanceof Object)){
var ex__25633__auto__ = e30055;
var statearr_30056_30105 = state_29998;
(statearr_30056_30105[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30106 = state_29998;
state_29998 = G__30106;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25630__auto__ = function(state_29998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25630__auto____1.call(this,state_29998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25630__auto____0;
cljs$core$async$mix_$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25630__auto____1;
return cljs$core$async$mix_$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29001__auto__ = (function (){var statearr_30057 = f__29000__auto__.call(null);
(statearr_30057[(6)] = c__28999__auto___30058);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30108 = arguments.length;
switch (G__30108) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30112 = arguments.length;
switch (G__30112) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__30110_SHARP_){
if(cljs.core.truth_(p1__30110_SHARP_.call(null,topic))){
return p1__30110_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30110_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30113 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30114){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30114 = meta30114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30115,meta30114__$1){
var self__ = this;
var _30115__$1 = this;
return (new cljs.core.async.t_cljs$core$async30113(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30114__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30115){
var self__ = this;
var _30115__$1 = this;
return self__.meta30114;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30114","meta30114",1472942630,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30113";

cljs.core.async.t_cljs$core$async30113.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30113");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30113.
 */
cljs.core.async.__GT_t_cljs$core$async30113 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30114){
return (new cljs.core.async.t_cljs$core$async30113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30114));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30113(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28999__auto___30233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30233,mults,ensure_mult,p){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30233,mults,ensure_mult,p){
return (function (state_30187){
var state_val_30188 = (state_30187[(1)]);
if((state_val_30188 === (7))){
var inst_30183 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
var statearr_30189_30234 = state_30187__$1;
(statearr_30189_30234[(2)] = inst_30183);

(statearr_30189_30234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (20))){
var state_30187__$1 = state_30187;
var statearr_30190_30235 = state_30187__$1;
(statearr_30190_30235[(2)] = null);

(statearr_30190_30235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (1))){
var state_30187__$1 = state_30187;
var statearr_30191_30236 = state_30187__$1;
(statearr_30191_30236[(2)] = null);

(statearr_30191_30236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (24))){
var inst_30166 = (state_30187[(7)]);
var inst_30175 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30166);
var state_30187__$1 = state_30187;
var statearr_30192_30237 = state_30187__$1;
(statearr_30192_30237[(2)] = inst_30175);

(statearr_30192_30237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (4))){
var inst_30118 = (state_30187[(8)]);
var inst_30118__$1 = (state_30187[(2)]);
var inst_30119 = (inst_30118__$1 == null);
var state_30187__$1 = (function (){var statearr_30193 = state_30187;
(statearr_30193[(8)] = inst_30118__$1);

return statearr_30193;
})();
if(cljs.core.truth_(inst_30119)){
var statearr_30194_30238 = state_30187__$1;
(statearr_30194_30238[(1)] = (5));

} else {
var statearr_30195_30239 = state_30187__$1;
(statearr_30195_30239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (15))){
var inst_30160 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
var statearr_30196_30240 = state_30187__$1;
(statearr_30196_30240[(2)] = inst_30160);

(statearr_30196_30240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (21))){
var inst_30180 = (state_30187[(2)]);
var state_30187__$1 = (function (){var statearr_30197 = state_30187;
(statearr_30197[(9)] = inst_30180);

return statearr_30197;
})();
var statearr_30198_30241 = state_30187__$1;
(statearr_30198_30241[(2)] = null);

(statearr_30198_30241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (13))){
var inst_30142 = (state_30187[(10)]);
var inst_30144 = cljs.core.chunked_seq_QMARK_.call(null,inst_30142);
var state_30187__$1 = state_30187;
if(inst_30144){
var statearr_30199_30242 = state_30187__$1;
(statearr_30199_30242[(1)] = (16));

} else {
var statearr_30200_30243 = state_30187__$1;
(statearr_30200_30243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (22))){
var inst_30172 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
if(cljs.core.truth_(inst_30172)){
var statearr_30201_30244 = state_30187__$1;
(statearr_30201_30244[(1)] = (23));

} else {
var statearr_30202_30245 = state_30187__$1;
(statearr_30202_30245[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (6))){
var inst_30168 = (state_30187[(11)]);
var inst_30166 = (state_30187[(7)]);
var inst_30118 = (state_30187[(8)]);
var inst_30166__$1 = topic_fn.call(null,inst_30118);
var inst_30167 = cljs.core.deref.call(null,mults);
var inst_30168__$1 = cljs.core.get.call(null,inst_30167,inst_30166__$1);
var state_30187__$1 = (function (){var statearr_30203 = state_30187;
(statearr_30203[(11)] = inst_30168__$1);

(statearr_30203[(7)] = inst_30166__$1);

return statearr_30203;
})();
if(cljs.core.truth_(inst_30168__$1)){
var statearr_30204_30246 = state_30187__$1;
(statearr_30204_30246[(1)] = (19));

} else {
var statearr_30205_30247 = state_30187__$1;
(statearr_30205_30247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (25))){
var inst_30177 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
var statearr_30206_30248 = state_30187__$1;
(statearr_30206_30248[(2)] = inst_30177);

(statearr_30206_30248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (17))){
var inst_30142 = (state_30187[(10)]);
var inst_30151 = cljs.core.first.call(null,inst_30142);
var inst_30152 = cljs.core.async.muxch_STAR_.call(null,inst_30151);
var inst_30153 = cljs.core.async.close_BANG_.call(null,inst_30152);
var inst_30154 = cljs.core.next.call(null,inst_30142);
var inst_30128 = inst_30154;
var inst_30129 = null;
var inst_30130 = (0);
var inst_30131 = (0);
var state_30187__$1 = (function (){var statearr_30207 = state_30187;
(statearr_30207[(12)] = inst_30130);

(statearr_30207[(13)] = inst_30129);

(statearr_30207[(14)] = inst_30128);

(statearr_30207[(15)] = inst_30131);

(statearr_30207[(16)] = inst_30153);

return statearr_30207;
})();
var statearr_30208_30249 = state_30187__$1;
(statearr_30208_30249[(2)] = null);

(statearr_30208_30249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (3))){
var inst_30185 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30187__$1,inst_30185);
} else {
if((state_val_30188 === (12))){
var inst_30162 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
var statearr_30209_30250 = state_30187__$1;
(statearr_30209_30250[(2)] = inst_30162);

(statearr_30209_30250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (2))){
var state_30187__$1 = state_30187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30187__$1,(4),ch);
} else {
if((state_val_30188 === (23))){
var state_30187__$1 = state_30187;
var statearr_30210_30251 = state_30187__$1;
(statearr_30210_30251[(2)] = null);

(statearr_30210_30251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (19))){
var inst_30168 = (state_30187[(11)]);
var inst_30118 = (state_30187[(8)]);
var inst_30170 = cljs.core.async.muxch_STAR_.call(null,inst_30168);
var state_30187__$1 = state_30187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30187__$1,(22),inst_30170,inst_30118);
} else {
if((state_val_30188 === (11))){
var inst_30142 = (state_30187[(10)]);
var inst_30128 = (state_30187[(14)]);
var inst_30142__$1 = cljs.core.seq.call(null,inst_30128);
var state_30187__$1 = (function (){var statearr_30211 = state_30187;
(statearr_30211[(10)] = inst_30142__$1);

return statearr_30211;
})();
if(inst_30142__$1){
var statearr_30212_30252 = state_30187__$1;
(statearr_30212_30252[(1)] = (13));

} else {
var statearr_30213_30253 = state_30187__$1;
(statearr_30213_30253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (9))){
var inst_30164 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
var statearr_30214_30254 = state_30187__$1;
(statearr_30214_30254[(2)] = inst_30164);

(statearr_30214_30254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (5))){
var inst_30125 = cljs.core.deref.call(null,mults);
var inst_30126 = cljs.core.vals.call(null,inst_30125);
var inst_30127 = cljs.core.seq.call(null,inst_30126);
var inst_30128 = inst_30127;
var inst_30129 = null;
var inst_30130 = (0);
var inst_30131 = (0);
var state_30187__$1 = (function (){var statearr_30215 = state_30187;
(statearr_30215[(12)] = inst_30130);

(statearr_30215[(13)] = inst_30129);

(statearr_30215[(14)] = inst_30128);

(statearr_30215[(15)] = inst_30131);

return statearr_30215;
})();
var statearr_30216_30255 = state_30187__$1;
(statearr_30216_30255[(2)] = null);

(statearr_30216_30255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (14))){
var state_30187__$1 = state_30187;
var statearr_30220_30256 = state_30187__$1;
(statearr_30220_30256[(2)] = null);

(statearr_30220_30256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (16))){
var inst_30142 = (state_30187[(10)]);
var inst_30146 = cljs.core.chunk_first.call(null,inst_30142);
var inst_30147 = cljs.core.chunk_rest.call(null,inst_30142);
var inst_30148 = cljs.core.count.call(null,inst_30146);
var inst_30128 = inst_30147;
var inst_30129 = inst_30146;
var inst_30130 = inst_30148;
var inst_30131 = (0);
var state_30187__$1 = (function (){var statearr_30221 = state_30187;
(statearr_30221[(12)] = inst_30130);

(statearr_30221[(13)] = inst_30129);

(statearr_30221[(14)] = inst_30128);

(statearr_30221[(15)] = inst_30131);

return statearr_30221;
})();
var statearr_30222_30257 = state_30187__$1;
(statearr_30222_30257[(2)] = null);

(statearr_30222_30257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (10))){
var inst_30130 = (state_30187[(12)]);
var inst_30129 = (state_30187[(13)]);
var inst_30128 = (state_30187[(14)]);
var inst_30131 = (state_30187[(15)]);
var inst_30136 = cljs.core._nth.call(null,inst_30129,inst_30131);
var inst_30137 = cljs.core.async.muxch_STAR_.call(null,inst_30136);
var inst_30138 = cljs.core.async.close_BANG_.call(null,inst_30137);
var inst_30139 = (inst_30131 + (1));
var tmp30217 = inst_30130;
var tmp30218 = inst_30129;
var tmp30219 = inst_30128;
var inst_30128__$1 = tmp30219;
var inst_30129__$1 = tmp30218;
var inst_30130__$1 = tmp30217;
var inst_30131__$1 = inst_30139;
var state_30187__$1 = (function (){var statearr_30223 = state_30187;
(statearr_30223[(17)] = inst_30138);

(statearr_30223[(12)] = inst_30130__$1);

(statearr_30223[(13)] = inst_30129__$1);

(statearr_30223[(14)] = inst_30128__$1);

(statearr_30223[(15)] = inst_30131__$1);

return statearr_30223;
})();
var statearr_30224_30258 = state_30187__$1;
(statearr_30224_30258[(2)] = null);

(statearr_30224_30258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (18))){
var inst_30157 = (state_30187[(2)]);
var state_30187__$1 = state_30187;
var statearr_30225_30259 = state_30187__$1;
(statearr_30225_30259[(2)] = inst_30157);

(statearr_30225_30259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30188 === (8))){
var inst_30130 = (state_30187[(12)]);
var inst_30131 = (state_30187[(15)]);
var inst_30133 = (inst_30131 < inst_30130);
var inst_30134 = inst_30133;
var state_30187__$1 = state_30187;
if(cljs.core.truth_(inst_30134)){
var statearr_30226_30260 = state_30187__$1;
(statearr_30226_30260[(1)] = (10));

} else {
var statearr_30227_30261 = state_30187__$1;
(statearr_30227_30261[(1)] = (11));

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
});})(c__28999__auto___30233,mults,ensure_mult,p))
;
return ((function (switch__25629__auto__,c__28999__auto___30233,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30228[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30228[(1)] = (1));

return statearr_30228;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30187){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30229){if((e30229 instanceof Object)){
var ex__25633__auto__ = e30229;
var statearr_30230_30262 = state_30187;
(statearr_30230_30262[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30263 = state_30187;
state_30187 = G__30263;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30233,mults,ensure_mult,p))
})();
var state__29001__auto__ = (function (){var statearr_30231 = f__29000__auto__.call(null);
(statearr_30231[(6)] = c__28999__auto___30233);

return statearr_30231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30233,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30265 = arguments.length;
switch (G__30265) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30268 = arguments.length;
switch (G__30268) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30271 = arguments.length;
switch (G__30271) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28999__auto___30338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30310){
var state_val_30311 = (state_30310[(1)]);
if((state_val_30311 === (7))){
var state_30310__$1 = state_30310;
var statearr_30312_30339 = state_30310__$1;
(statearr_30312_30339[(2)] = null);

(statearr_30312_30339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (1))){
var state_30310__$1 = state_30310;
var statearr_30313_30340 = state_30310__$1;
(statearr_30313_30340[(2)] = null);

(statearr_30313_30340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (4))){
var inst_30274 = (state_30310[(7)]);
var inst_30276 = (inst_30274 < cnt);
var state_30310__$1 = state_30310;
if(cljs.core.truth_(inst_30276)){
var statearr_30314_30341 = state_30310__$1;
(statearr_30314_30341[(1)] = (6));

} else {
var statearr_30315_30342 = state_30310__$1;
(statearr_30315_30342[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (15))){
var inst_30306 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30316_30343 = state_30310__$1;
(statearr_30316_30343[(2)] = inst_30306);

(statearr_30316_30343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (13))){
var inst_30299 = cljs.core.async.close_BANG_.call(null,out);
var state_30310__$1 = state_30310;
var statearr_30317_30344 = state_30310__$1;
(statearr_30317_30344[(2)] = inst_30299);

(statearr_30317_30344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (6))){
var state_30310__$1 = state_30310;
var statearr_30318_30345 = state_30310__$1;
(statearr_30318_30345[(2)] = null);

(statearr_30318_30345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (3))){
var inst_30308 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30310__$1,inst_30308);
} else {
if((state_val_30311 === (12))){
var inst_30296 = (state_30310[(8)]);
var inst_30296__$1 = (state_30310[(2)]);
var inst_30297 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30296__$1);
var state_30310__$1 = (function (){var statearr_30319 = state_30310;
(statearr_30319[(8)] = inst_30296__$1);

return statearr_30319;
})();
if(cljs.core.truth_(inst_30297)){
var statearr_30320_30346 = state_30310__$1;
(statearr_30320_30346[(1)] = (13));

} else {
var statearr_30321_30347 = state_30310__$1;
(statearr_30321_30347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (2))){
var inst_30273 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30274 = (0);
var state_30310__$1 = (function (){var statearr_30322 = state_30310;
(statearr_30322[(9)] = inst_30273);

(statearr_30322[(7)] = inst_30274);

return statearr_30322;
})();
var statearr_30323_30348 = state_30310__$1;
(statearr_30323_30348[(2)] = null);

(statearr_30323_30348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (11))){
var inst_30274 = (state_30310[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30310,(10),Object,null,(9));
var inst_30283 = chs__$1.call(null,inst_30274);
var inst_30284 = done.call(null,inst_30274);
var inst_30285 = cljs.core.async.take_BANG_.call(null,inst_30283,inst_30284);
var state_30310__$1 = state_30310;
var statearr_30324_30349 = state_30310__$1;
(statearr_30324_30349[(2)] = inst_30285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30310__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (9))){
var inst_30274 = (state_30310[(7)]);
var inst_30287 = (state_30310[(2)]);
var inst_30288 = (inst_30274 + (1));
var inst_30274__$1 = inst_30288;
var state_30310__$1 = (function (){var statearr_30325 = state_30310;
(statearr_30325[(10)] = inst_30287);

(statearr_30325[(7)] = inst_30274__$1);

return statearr_30325;
})();
var statearr_30326_30350 = state_30310__$1;
(statearr_30326_30350[(2)] = null);

(statearr_30326_30350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (5))){
var inst_30294 = (state_30310[(2)]);
var state_30310__$1 = (function (){var statearr_30327 = state_30310;
(statearr_30327[(11)] = inst_30294);

return statearr_30327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30310__$1,(12),dchan);
} else {
if((state_val_30311 === (14))){
var inst_30296 = (state_30310[(8)]);
var inst_30301 = cljs.core.apply.call(null,f,inst_30296);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30310__$1,(16),out,inst_30301);
} else {
if((state_val_30311 === (16))){
var inst_30303 = (state_30310[(2)]);
var state_30310__$1 = (function (){var statearr_30328 = state_30310;
(statearr_30328[(12)] = inst_30303);

return statearr_30328;
})();
var statearr_30329_30351 = state_30310__$1;
(statearr_30329_30351[(2)] = null);

(statearr_30329_30351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (10))){
var inst_30278 = (state_30310[(2)]);
var inst_30279 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30310__$1 = (function (){var statearr_30330 = state_30310;
(statearr_30330[(13)] = inst_30278);

return statearr_30330;
})();
var statearr_30331_30352 = state_30310__$1;
(statearr_30331_30352[(2)] = inst_30279);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30310__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (8))){
var inst_30292 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30332_30353 = state_30310__$1;
(statearr_30332_30353[(2)] = inst_30292);

(statearr_30332_30353[(1)] = (5));


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
});})(c__28999__auto___30338,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25629__auto__,c__28999__auto___30338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30333[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30333[(1)] = (1));

return statearr_30333;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30310){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30334){if((e30334 instanceof Object)){
var ex__25633__auto__ = e30334;
var statearr_30335_30354 = state_30310;
(statearr_30335_30354[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30355 = state_30310;
state_30310 = G__30355;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30338,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29001__auto__ = (function (){var statearr_30336 = f__29000__auto__.call(null);
(statearr_30336[(6)] = c__28999__auto___30338);

return statearr_30336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30338,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30358 = arguments.length;
switch (G__30358) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28999__auto___30412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30412,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30412,out){
return (function (state_30390){
var state_val_30391 = (state_30390[(1)]);
if((state_val_30391 === (7))){
var inst_30370 = (state_30390[(7)]);
var inst_30369 = (state_30390[(8)]);
var inst_30369__$1 = (state_30390[(2)]);
var inst_30370__$1 = cljs.core.nth.call(null,inst_30369__$1,(0),null);
var inst_30371 = cljs.core.nth.call(null,inst_30369__$1,(1),null);
var inst_30372 = (inst_30370__$1 == null);
var state_30390__$1 = (function (){var statearr_30392 = state_30390;
(statearr_30392[(7)] = inst_30370__$1);

(statearr_30392[(8)] = inst_30369__$1);

(statearr_30392[(9)] = inst_30371);

return statearr_30392;
})();
if(cljs.core.truth_(inst_30372)){
var statearr_30393_30413 = state_30390__$1;
(statearr_30393_30413[(1)] = (8));

} else {
var statearr_30394_30414 = state_30390__$1;
(statearr_30394_30414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (1))){
var inst_30359 = cljs.core.vec.call(null,chs);
var inst_30360 = inst_30359;
var state_30390__$1 = (function (){var statearr_30395 = state_30390;
(statearr_30395[(10)] = inst_30360);

return statearr_30395;
})();
var statearr_30396_30415 = state_30390__$1;
(statearr_30396_30415[(2)] = null);

(statearr_30396_30415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (4))){
var inst_30360 = (state_30390[(10)]);
var state_30390__$1 = state_30390;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30390__$1,(7),inst_30360);
} else {
if((state_val_30391 === (6))){
var inst_30386 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30397_30416 = state_30390__$1;
(statearr_30397_30416[(2)] = inst_30386);

(statearr_30397_30416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (3))){
var inst_30388 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30390__$1,inst_30388);
} else {
if((state_val_30391 === (2))){
var inst_30360 = (state_30390[(10)]);
var inst_30362 = cljs.core.count.call(null,inst_30360);
var inst_30363 = (inst_30362 > (0));
var state_30390__$1 = state_30390;
if(cljs.core.truth_(inst_30363)){
var statearr_30399_30417 = state_30390__$1;
(statearr_30399_30417[(1)] = (4));

} else {
var statearr_30400_30418 = state_30390__$1;
(statearr_30400_30418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (11))){
var inst_30360 = (state_30390[(10)]);
var inst_30379 = (state_30390[(2)]);
var tmp30398 = inst_30360;
var inst_30360__$1 = tmp30398;
var state_30390__$1 = (function (){var statearr_30401 = state_30390;
(statearr_30401[(11)] = inst_30379);

(statearr_30401[(10)] = inst_30360__$1);

return statearr_30401;
})();
var statearr_30402_30419 = state_30390__$1;
(statearr_30402_30419[(2)] = null);

(statearr_30402_30419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (9))){
var inst_30370 = (state_30390[(7)]);
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30390__$1,(11),out,inst_30370);
} else {
if((state_val_30391 === (5))){
var inst_30384 = cljs.core.async.close_BANG_.call(null,out);
var state_30390__$1 = state_30390;
var statearr_30403_30420 = state_30390__$1;
(statearr_30403_30420[(2)] = inst_30384);

(statearr_30403_30420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (10))){
var inst_30382 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30404_30421 = state_30390__$1;
(statearr_30404_30421[(2)] = inst_30382);

(statearr_30404_30421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (8))){
var inst_30370 = (state_30390[(7)]);
var inst_30369 = (state_30390[(8)]);
var inst_30371 = (state_30390[(9)]);
var inst_30360 = (state_30390[(10)]);
var inst_30374 = (function (){var cs = inst_30360;
var vec__30365 = inst_30369;
var v = inst_30370;
var c = inst_30371;
return ((function (cs,vec__30365,v,c,inst_30370,inst_30369,inst_30371,inst_30360,state_val_30391,c__28999__auto___30412,out){
return (function (p1__30356_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30356_SHARP_);
});
;})(cs,vec__30365,v,c,inst_30370,inst_30369,inst_30371,inst_30360,state_val_30391,c__28999__auto___30412,out))
})();
var inst_30375 = cljs.core.filterv.call(null,inst_30374,inst_30360);
var inst_30360__$1 = inst_30375;
var state_30390__$1 = (function (){var statearr_30405 = state_30390;
(statearr_30405[(10)] = inst_30360__$1);

return statearr_30405;
})();
var statearr_30406_30422 = state_30390__$1;
(statearr_30406_30422[(2)] = null);

(statearr_30406_30422[(1)] = (2));


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
});})(c__28999__auto___30412,out))
;
return ((function (switch__25629__auto__,c__28999__auto___30412,out){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30390){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__25633__auto__ = e30408;
var statearr_30409_30423 = state_30390;
(statearr_30409_30423[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30424 = state_30390;
state_30390 = G__30424;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30412,out))
})();
var state__29001__auto__ = (function (){var statearr_30410 = f__29000__auto__.call(null);
(statearr_30410[(6)] = c__28999__auto___30412);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30412,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30426 = arguments.length;
switch (G__30426) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28999__auto___30471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30471,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30471,out){
return (function (state_30450){
var state_val_30451 = (state_30450[(1)]);
if((state_val_30451 === (7))){
var inst_30432 = (state_30450[(7)]);
var inst_30432__$1 = (state_30450[(2)]);
var inst_30433 = (inst_30432__$1 == null);
var inst_30434 = cljs.core.not.call(null,inst_30433);
var state_30450__$1 = (function (){var statearr_30452 = state_30450;
(statearr_30452[(7)] = inst_30432__$1);

return statearr_30452;
})();
if(inst_30434){
var statearr_30453_30472 = state_30450__$1;
(statearr_30453_30472[(1)] = (8));

} else {
var statearr_30454_30473 = state_30450__$1;
(statearr_30454_30473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (1))){
var inst_30427 = (0);
var state_30450__$1 = (function (){var statearr_30455 = state_30450;
(statearr_30455[(8)] = inst_30427);

return statearr_30455;
})();
var statearr_30456_30474 = state_30450__$1;
(statearr_30456_30474[(2)] = null);

(statearr_30456_30474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (4))){
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30450__$1,(7),ch);
} else {
if((state_val_30451 === (6))){
var inst_30445 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30457_30475 = state_30450__$1;
(statearr_30457_30475[(2)] = inst_30445);

(statearr_30457_30475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (3))){
var inst_30447 = (state_30450[(2)]);
var inst_30448 = cljs.core.async.close_BANG_.call(null,out);
var state_30450__$1 = (function (){var statearr_30458 = state_30450;
(statearr_30458[(9)] = inst_30447);

return statearr_30458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30450__$1,inst_30448);
} else {
if((state_val_30451 === (2))){
var inst_30427 = (state_30450[(8)]);
var inst_30429 = (inst_30427 < n);
var state_30450__$1 = state_30450;
if(cljs.core.truth_(inst_30429)){
var statearr_30459_30476 = state_30450__$1;
(statearr_30459_30476[(1)] = (4));

} else {
var statearr_30460_30477 = state_30450__$1;
(statearr_30460_30477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (11))){
var inst_30427 = (state_30450[(8)]);
var inst_30437 = (state_30450[(2)]);
var inst_30438 = (inst_30427 + (1));
var inst_30427__$1 = inst_30438;
var state_30450__$1 = (function (){var statearr_30461 = state_30450;
(statearr_30461[(8)] = inst_30427__$1);

(statearr_30461[(10)] = inst_30437);

return statearr_30461;
})();
var statearr_30462_30478 = state_30450__$1;
(statearr_30462_30478[(2)] = null);

(statearr_30462_30478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (9))){
var state_30450__$1 = state_30450;
var statearr_30463_30479 = state_30450__$1;
(statearr_30463_30479[(2)] = null);

(statearr_30463_30479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (5))){
var state_30450__$1 = state_30450;
var statearr_30464_30480 = state_30450__$1;
(statearr_30464_30480[(2)] = null);

(statearr_30464_30480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (10))){
var inst_30442 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30465_30481 = state_30450__$1;
(statearr_30465_30481[(2)] = inst_30442);

(statearr_30465_30481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (8))){
var inst_30432 = (state_30450[(7)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30450__$1,(11),out,inst_30432);
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
});})(c__28999__auto___30471,out))
;
return ((function (switch__25629__auto__,c__28999__auto___30471,out){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30466[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30466[(1)] = (1));

return statearr_30466;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30450){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30467){if((e30467 instanceof Object)){
var ex__25633__auto__ = e30467;
var statearr_30468_30482 = state_30450;
(statearr_30468_30482[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30483 = state_30450;
state_30450 = G__30483;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30471,out))
})();
var state__29001__auto__ = (function (){var statearr_30469 = f__29000__auto__.call(null);
(statearr_30469[(6)] = c__28999__auto___30471);

return statearr_30469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30471,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30485 = (function (f,ch,meta30486){
this.f = f;
this.ch = ch;
this.meta30486 = meta30486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30487,meta30486__$1){
var self__ = this;
var _30487__$1 = this;
return (new cljs.core.async.t_cljs$core$async30485(self__.f,self__.ch,meta30486__$1));
});

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30487){
var self__ = this;
var _30487__$1 = this;
return self__.meta30486;
});

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30488 = (function (f,ch,meta30486,_,fn1,meta30489){
this.f = f;
this.ch = ch;
this.meta30486 = meta30486;
this._ = _;
this.fn1 = fn1;
this.meta30489 = meta30489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30490,meta30489__$1){
var self__ = this;
var _30490__$1 = this;
return (new cljs.core.async.t_cljs$core$async30488(self__.f,self__.ch,self__.meta30486,self__._,self__.fn1,meta30489__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30490){
var self__ = this;
var _30490__$1 = this;
return self__.meta30489;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30484_SHARP_){
return f1.call(null,(((p1__30484_SHARP_ == null))?null:self__.f.call(null,p1__30484_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30488.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30486","meta30486",396928117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30485","cljs.core.async/t_cljs$core$async30485",227200194,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30489","meta30489",1849996540,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30488";

cljs.core.async.t_cljs$core$async30488.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30488");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30488.
 */
cljs.core.async.__GT_t_cljs$core$async30488 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30488(f__$1,ch__$1,meta30486__$1,___$2,fn1__$1,meta30489){
return (new cljs.core.async.t_cljs$core$async30488(f__$1,ch__$1,meta30486__$1,___$2,fn1__$1,meta30489));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30488(self__.f,self__.ch,self__.meta30486,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30486","meta30486",396928117,null)], null);
});

cljs.core.async.t_cljs$core$async30485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30485";

cljs.core.async.t_cljs$core$async30485.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30485");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30485.
 */
cljs.core.async.__GT_t_cljs$core$async30485 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30485(f__$1,ch__$1,meta30486){
return (new cljs.core.async.t_cljs$core$async30485(f__$1,ch__$1,meta30486));
});

}

return (new cljs.core.async.t_cljs$core$async30485(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30491 = (function (f,ch,meta30492){
this.f = f;
this.ch = ch;
this.meta30492 = meta30492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30493,meta30492__$1){
var self__ = this;
var _30493__$1 = this;
return (new cljs.core.async.t_cljs$core$async30491(self__.f,self__.ch,meta30492__$1));
});

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30493){
var self__ = this;
var _30493__$1 = this;
return self__.meta30492;
});

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30492","meta30492",-750744378,null)], null);
});

cljs.core.async.t_cljs$core$async30491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30491";

cljs.core.async.t_cljs$core$async30491.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30491");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30491.
 */
cljs.core.async.__GT_t_cljs$core$async30491 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30491(f__$1,ch__$1,meta30492){
return (new cljs.core.async.t_cljs$core$async30491(f__$1,ch__$1,meta30492));
});

}

return (new cljs.core.async.t_cljs$core$async30491(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30494 = (function (p,ch,meta30495){
this.p = p;
this.ch = ch;
this.meta30495 = meta30495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30496,meta30495__$1){
var self__ = this;
var _30496__$1 = this;
return (new cljs.core.async.t_cljs$core$async30494(self__.p,self__.ch,meta30495__$1));
});

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30496){
var self__ = this;
var _30496__$1 = this;
return self__.meta30495;
});

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30495","meta30495",775597679,null)], null);
});

cljs.core.async.t_cljs$core$async30494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30494";

cljs.core.async.t_cljs$core$async30494.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30494");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30494.
 */
cljs.core.async.__GT_t_cljs$core$async30494 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30494(p__$1,ch__$1,meta30495){
return (new cljs.core.async.t_cljs$core$async30494(p__$1,ch__$1,meta30495));
});

}

return (new cljs.core.async.t_cljs$core$async30494(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30498 = arguments.length;
switch (G__30498) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28999__auto___30538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30538,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30538,out){
return (function (state_30519){
var state_val_30520 = (state_30519[(1)]);
if((state_val_30520 === (7))){
var inst_30515 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30521_30539 = state_30519__$1;
(statearr_30521_30539[(2)] = inst_30515);

(statearr_30521_30539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (1))){
var state_30519__$1 = state_30519;
var statearr_30522_30540 = state_30519__$1;
(statearr_30522_30540[(2)] = null);

(statearr_30522_30540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (4))){
var inst_30501 = (state_30519[(7)]);
var inst_30501__$1 = (state_30519[(2)]);
var inst_30502 = (inst_30501__$1 == null);
var state_30519__$1 = (function (){var statearr_30523 = state_30519;
(statearr_30523[(7)] = inst_30501__$1);

return statearr_30523;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30524_30541 = state_30519__$1;
(statearr_30524_30541[(1)] = (5));

} else {
var statearr_30525_30542 = state_30519__$1;
(statearr_30525_30542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (6))){
var inst_30501 = (state_30519[(7)]);
var inst_30506 = p.call(null,inst_30501);
var state_30519__$1 = state_30519;
if(cljs.core.truth_(inst_30506)){
var statearr_30526_30543 = state_30519__$1;
(statearr_30526_30543[(1)] = (8));

} else {
var statearr_30527_30544 = state_30519__$1;
(statearr_30527_30544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (3))){
var inst_30517 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30519__$1,inst_30517);
} else {
if((state_val_30520 === (2))){
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30519__$1,(4),ch);
} else {
if((state_val_30520 === (11))){
var inst_30509 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30528_30545 = state_30519__$1;
(statearr_30528_30545[(2)] = inst_30509);

(statearr_30528_30545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (9))){
var state_30519__$1 = state_30519;
var statearr_30529_30546 = state_30519__$1;
(statearr_30529_30546[(2)] = null);

(statearr_30529_30546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (5))){
var inst_30504 = cljs.core.async.close_BANG_.call(null,out);
var state_30519__$1 = state_30519;
var statearr_30530_30547 = state_30519__$1;
(statearr_30530_30547[(2)] = inst_30504);

(statearr_30530_30547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (10))){
var inst_30512 = (state_30519[(2)]);
var state_30519__$1 = (function (){var statearr_30531 = state_30519;
(statearr_30531[(8)] = inst_30512);

return statearr_30531;
})();
var statearr_30532_30548 = state_30519__$1;
(statearr_30532_30548[(2)] = null);

(statearr_30532_30548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (8))){
var inst_30501 = (state_30519[(7)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30519__$1,(11),out,inst_30501);
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
});})(c__28999__auto___30538,out))
;
return ((function (switch__25629__auto__,c__28999__auto___30538,out){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30533 = [null,null,null,null,null,null,null,null,null];
(statearr_30533[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30533[(1)] = (1));

return statearr_30533;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30519){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30534){if((e30534 instanceof Object)){
var ex__25633__auto__ = e30534;
var statearr_30535_30549 = state_30519;
(statearr_30535_30549[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30550 = state_30519;
state_30519 = G__30550;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30538,out))
})();
var state__29001__auto__ = (function (){var statearr_30536 = f__29000__auto__.call(null);
(statearr_30536[(6)] = c__28999__auto___30538);

return statearr_30536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30538,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30552 = arguments.length;
switch (G__30552) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto__){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto__){
return (function (state_30615){
var state_val_30616 = (state_30615[(1)]);
if((state_val_30616 === (7))){
var inst_30611 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30617_30655 = state_30615__$1;
(statearr_30617_30655[(2)] = inst_30611);

(statearr_30617_30655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (20))){
var inst_30581 = (state_30615[(7)]);
var inst_30592 = (state_30615[(2)]);
var inst_30593 = cljs.core.next.call(null,inst_30581);
var inst_30567 = inst_30593;
var inst_30568 = null;
var inst_30569 = (0);
var inst_30570 = (0);
var state_30615__$1 = (function (){var statearr_30618 = state_30615;
(statearr_30618[(8)] = inst_30567);

(statearr_30618[(9)] = inst_30592);

(statearr_30618[(10)] = inst_30569);

(statearr_30618[(11)] = inst_30570);

(statearr_30618[(12)] = inst_30568);

return statearr_30618;
})();
var statearr_30619_30656 = state_30615__$1;
(statearr_30619_30656[(2)] = null);

(statearr_30619_30656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (1))){
var state_30615__$1 = state_30615;
var statearr_30620_30657 = state_30615__$1;
(statearr_30620_30657[(2)] = null);

(statearr_30620_30657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (4))){
var inst_30556 = (state_30615[(13)]);
var inst_30556__$1 = (state_30615[(2)]);
var inst_30557 = (inst_30556__$1 == null);
var state_30615__$1 = (function (){var statearr_30621 = state_30615;
(statearr_30621[(13)] = inst_30556__$1);

return statearr_30621;
})();
if(cljs.core.truth_(inst_30557)){
var statearr_30622_30658 = state_30615__$1;
(statearr_30622_30658[(1)] = (5));

} else {
var statearr_30623_30659 = state_30615__$1;
(statearr_30623_30659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (15))){
var state_30615__$1 = state_30615;
var statearr_30627_30660 = state_30615__$1;
(statearr_30627_30660[(2)] = null);

(statearr_30627_30660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (21))){
var state_30615__$1 = state_30615;
var statearr_30628_30661 = state_30615__$1;
(statearr_30628_30661[(2)] = null);

(statearr_30628_30661[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (13))){
var inst_30567 = (state_30615[(8)]);
var inst_30569 = (state_30615[(10)]);
var inst_30570 = (state_30615[(11)]);
var inst_30568 = (state_30615[(12)]);
var inst_30577 = (state_30615[(2)]);
var inst_30578 = (inst_30570 + (1));
var tmp30624 = inst_30567;
var tmp30625 = inst_30569;
var tmp30626 = inst_30568;
var inst_30567__$1 = tmp30624;
var inst_30568__$1 = tmp30626;
var inst_30569__$1 = tmp30625;
var inst_30570__$1 = inst_30578;
var state_30615__$1 = (function (){var statearr_30629 = state_30615;
(statearr_30629[(8)] = inst_30567__$1);

(statearr_30629[(14)] = inst_30577);

(statearr_30629[(10)] = inst_30569__$1);

(statearr_30629[(11)] = inst_30570__$1);

(statearr_30629[(12)] = inst_30568__$1);

return statearr_30629;
})();
var statearr_30630_30662 = state_30615__$1;
(statearr_30630_30662[(2)] = null);

(statearr_30630_30662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (22))){
var state_30615__$1 = state_30615;
var statearr_30631_30663 = state_30615__$1;
(statearr_30631_30663[(2)] = null);

(statearr_30631_30663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (6))){
var inst_30556 = (state_30615[(13)]);
var inst_30565 = f.call(null,inst_30556);
var inst_30566 = cljs.core.seq.call(null,inst_30565);
var inst_30567 = inst_30566;
var inst_30568 = null;
var inst_30569 = (0);
var inst_30570 = (0);
var state_30615__$1 = (function (){var statearr_30632 = state_30615;
(statearr_30632[(8)] = inst_30567);

(statearr_30632[(10)] = inst_30569);

(statearr_30632[(11)] = inst_30570);

(statearr_30632[(12)] = inst_30568);

return statearr_30632;
})();
var statearr_30633_30664 = state_30615__$1;
(statearr_30633_30664[(2)] = null);

(statearr_30633_30664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (17))){
var inst_30581 = (state_30615[(7)]);
var inst_30585 = cljs.core.chunk_first.call(null,inst_30581);
var inst_30586 = cljs.core.chunk_rest.call(null,inst_30581);
var inst_30587 = cljs.core.count.call(null,inst_30585);
var inst_30567 = inst_30586;
var inst_30568 = inst_30585;
var inst_30569 = inst_30587;
var inst_30570 = (0);
var state_30615__$1 = (function (){var statearr_30634 = state_30615;
(statearr_30634[(8)] = inst_30567);

(statearr_30634[(10)] = inst_30569);

(statearr_30634[(11)] = inst_30570);

(statearr_30634[(12)] = inst_30568);

return statearr_30634;
})();
var statearr_30635_30665 = state_30615__$1;
(statearr_30635_30665[(2)] = null);

(statearr_30635_30665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (3))){
var inst_30613 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30615__$1,inst_30613);
} else {
if((state_val_30616 === (12))){
var inst_30601 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30636_30666 = state_30615__$1;
(statearr_30636_30666[(2)] = inst_30601);

(statearr_30636_30666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (2))){
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30615__$1,(4),in$);
} else {
if((state_val_30616 === (23))){
var inst_30609 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30637_30667 = state_30615__$1;
(statearr_30637_30667[(2)] = inst_30609);

(statearr_30637_30667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (19))){
var inst_30596 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30638_30668 = state_30615__$1;
(statearr_30638_30668[(2)] = inst_30596);

(statearr_30638_30668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (11))){
var inst_30567 = (state_30615[(8)]);
var inst_30581 = (state_30615[(7)]);
var inst_30581__$1 = cljs.core.seq.call(null,inst_30567);
var state_30615__$1 = (function (){var statearr_30639 = state_30615;
(statearr_30639[(7)] = inst_30581__$1);

return statearr_30639;
})();
if(inst_30581__$1){
var statearr_30640_30669 = state_30615__$1;
(statearr_30640_30669[(1)] = (14));

} else {
var statearr_30641_30670 = state_30615__$1;
(statearr_30641_30670[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (9))){
var inst_30603 = (state_30615[(2)]);
var inst_30604 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30615__$1 = (function (){var statearr_30642 = state_30615;
(statearr_30642[(15)] = inst_30603);

return statearr_30642;
})();
if(cljs.core.truth_(inst_30604)){
var statearr_30643_30671 = state_30615__$1;
(statearr_30643_30671[(1)] = (21));

} else {
var statearr_30644_30672 = state_30615__$1;
(statearr_30644_30672[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (5))){
var inst_30559 = cljs.core.async.close_BANG_.call(null,out);
var state_30615__$1 = state_30615;
var statearr_30645_30673 = state_30615__$1;
(statearr_30645_30673[(2)] = inst_30559);

(statearr_30645_30673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (14))){
var inst_30581 = (state_30615[(7)]);
var inst_30583 = cljs.core.chunked_seq_QMARK_.call(null,inst_30581);
var state_30615__$1 = state_30615;
if(inst_30583){
var statearr_30646_30674 = state_30615__$1;
(statearr_30646_30674[(1)] = (17));

} else {
var statearr_30647_30675 = state_30615__$1;
(statearr_30647_30675[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (16))){
var inst_30599 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30648_30676 = state_30615__$1;
(statearr_30648_30676[(2)] = inst_30599);

(statearr_30648_30676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (10))){
var inst_30570 = (state_30615[(11)]);
var inst_30568 = (state_30615[(12)]);
var inst_30575 = cljs.core._nth.call(null,inst_30568,inst_30570);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30615__$1,(13),out,inst_30575);
} else {
if((state_val_30616 === (18))){
var inst_30581 = (state_30615[(7)]);
var inst_30590 = cljs.core.first.call(null,inst_30581);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30615__$1,(20),out,inst_30590);
} else {
if((state_val_30616 === (8))){
var inst_30569 = (state_30615[(10)]);
var inst_30570 = (state_30615[(11)]);
var inst_30572 = (inst_30570 < inst_30569);
var inst_30573 = inst_30572;
var state_30615__$1 = state_30615;
if(cljs.core.truth_(inst_30573)){
var statearr_30649_30677 = state_30615__$1;
(statearr_30649_30677[(1)] = (10));

} else {
var statearr_30650_30678 = state_30615__$1;
(statearr_30650_30678[(1)] = (11));

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
});})(c__28999__auto__))
;
return ((function (switch__25629__auto__,c__28999__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25630__auto____0 = (function (){
var statearr_30651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30651[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25630__auto__);

(statearr_30651[(1)] = (1));

return statearr_30651;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25630__auto____1 = (function (state_30615){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30652){if((e30652 instanceof Object)){
var ex__25633__auto__ = e30652;
var statearr_30653_30679 = state_30615;
(statearr_30653_30679[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30680 = state_30615;
state_30615 = G__30680;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25630__auto__ = function(state_30615){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25630__auto____1.call(this,state_30615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto__))
})();
var state__29001__auto__ = (function (){var statearr_30654 = f__29000__auto__.call(null);
(statearr_30654[(6)] = c__28999__auto__);

return statearr_30654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto__))
);

return c__28999__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30682 = arguments.length;
switch (G__30682) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30685 = arguments.length;
switch (G__30685) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30688 = arguments.length;
switch (G__30688) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28999__auto___30735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30735,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30735,out){
return (function (state_30712){
var state_val_30713 = (state_30712[(1)]);
if((state_val_30713 === (7))){
var inst_30707 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30714_30736 = state_30712__$1;
(statearr_30714_30736[(2)] = inst_30707);

(statearr_30714_30736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (1))){
var inst_30689 = null;
var state_30712__$1 = (function (){var statearr_30715 = state_30712;
(statearr_30715[(7)] = inst_30689);

return statearr_30715;
})();
var statearr_30716_30737 = state_30712__$1;
(statearr_30716_30737[(2)] = null);

(statearr_30716_30737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (4))){
var inst_30692 = (state_30712[(8)]);
var inst_30692__$1 = (state_30712[(2)]);
var inst_30693 = (inst_30692__$1 == null);
var inst_30694 = cljs.core.not.call(null,inst_30693);
var state_30712__$1 = (function (){var statearr_30717 = state_30712;
(statearr_30717[(8)] = inst_30692__$1);

return statearr_30717;
})();
if(inst_30694){
var statearr_30718_30738 = state_30712__$1;
(statearr_30718_30738[(1)] = (5));

} else {
var statearr_30719_30739 = state_30712__$1;
(statearr_30719_30739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (6))){
var state_30712__$1 = state_30712;
var statearr_30720_30740 = state_30712__$1;
(statearr_30720_30740[(2)] = null);

(statearr_30720_30740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (3))){
var inst_30709 = (state_30712[(2)]);
var inst_30710 = cljs.core.async.close_BANG_.call(null,out);
var state_30712__$1 = (function (){var statearr_30721 = state_30712;
(statearr_30721[(9)] = inst_30709);

return statearr_30721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30712__$1,inst_30710);
} else {
if((state_val_30713 === (2))){
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30712__$1,(4),ch);
} else {
if((state_val_30713 === (11))){
var inst_30692 = (state_30712[(8)]);
var inst_30701 = (state_30712[(2)]);
var inst_30689 = inst_30692;
var state_30712__$1 = (function (){var statearr_30722 = state_30712;
(statearr_30722[(7)] = inst_30689);

(statearr_30722[(10)] = inst_30701);

return statearr_30722;
})();
var statearr_30723_30741 = state_30712__$1;
(statearr_30723_30741[(2)] = null);

(statearr_30723_30741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (9))){
var inst_30692 = (state_30712[(8)]);
var state_30712__$1 = state_30712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30712__$1,(11),out,inst_30692);
} else {
if((state_val_30713 === (5))){
var inst_30692 = (state_30712[(8)]);
var inst_30689 = (state_30712[(7)]);
var inst_30696 = cljs.core._EQ_.call(null,inst_30692,inst_30689);
var state_30712__$1 = state_30712;
if(inst_30696){
var statearr_30725_30742 = state_30712__$1;
(statearr_30725_30742[(1)] = (8));

} else {
var statearr_30726_30743 = state_30712__$1;
(statearr_30726_30743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (10))){
var inst_30704 = (state_30712[(2)]);
var state_30712__$1 = state_30712;
var statearr_30727_30744 = state_30712__$1;
(statearr_30727_30744[(2)] = inst_30704);

(statearr_30727_30744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30713 === (8))){
var inst_30689 = (state_30712[(7)]);
var tmp30724 = inst_30689;
var inst_30689__$1 = tmp30724;
var state_30712__$1 = (function (){var statearr_30728 = state_30712;
(statearr_30728[(7)] = inst_30689__$1);

return statearr_30728;
})();
var statearr_30729_30745 = state_30712__$1;
(statearr_30729_30745[(2)] = null);

(statearr_30729_30745[(1)] = (2));


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
});})(c__28999__auto___30735,out))
;
return ((function (switch__25629__auto__,c__28999__auto___30735,out){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30730[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30730[(1)] = (1));

return statearr_30730;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30712){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30731){if((e30731 instanceof Object)){
var ex__25633__auto__ = e30731;
var statearr_30732_30746 = state_30712;
(statearr_30732_30746[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30747 = state_30712;
state_30712 = G__30747;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30735,out))
})();
var state__29001__auto__ = (function (){var statearr_30733 = f__29000__auto__.call(null);
(statearr_30733[(6)] = c__28999__auto___30735);

return statearr_30733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30749 = arguments.length;
switch (G__30749) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28999__auto___30815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30815,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30815,out){
return (function (state_30787){
var state_val_30788 = (state_30787[(1)]);
if((state_val_30788 === (7))){
var inst_30783 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30789_30816 = state_30787__$1;
(statearr_30789_30816[(2)] = inst_30783);

(statearr_30789_30816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (1))){
var inst_30750 = (new Array(n));
var inst_30751 = inst_30750;
var inst_30752 = (0);
var state_30787__$1 = (function (){var statearr_30790 = state_30787;
(statearr_30790[(7)] = inst_30752);

(statearr_30790[(8)] = inst_30751);

return statearr_30790;
})();
var statearr_30791_30817 = state_30787__$1;
(statearr_30791_30817[(2)] = null);

(statearr_30791_30817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (4))){
var inst_30755 = (state_30787[(9)]);
var inst_30755__$1 = (state_30787[(2)]);
var inst_30756 = (inst_30755__$1 == null);
var inst_30757 = cljs.core.not.call(null,inst_30756);
var state_30787__$1 = (function (){var statearr_30792 = state_30787;
(statearr_30792[(9)] = inst_30755__$1);

return statearr_30792;
})();
if(inst_30757){
var statearr_30793_30818 = state_30787__$1;
(statearr_30793_30818[(1)] = (5));

} else {
var statearr_30794_30819 = state_30787__$1;
(statearr_30794_30819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (15))){
var inst_30777 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30795_30820 = state_30787__$1;
(statearr_30795_30820[(2)] = inst_30777);

(statearr_30795_30820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (13))){
var state_30787__$1 = state_30787;
var statearr_30796_30821 = state_30787__$1;
(statearr_30796_30821[(2)] = null);

(statearr_30796_30821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (6))){
var inst_30752 = (state_30787[(7)]);
var inst_30773 = (inst_30752 > (0));
var state_30787__$1 = state_30787;
if(cljs.core.truth_(inst_30773)){
var statearr_30797_30822 = state_30787__$1;
(statearr_30797_30822[(1)] = (12));

} else {
var statearr_30798_30823 = state_30787__$1;
(statearr_30798_30823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (3))){
var inst_30785 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30787__$1,inst_30785);
} else {
if((state_val_30788 === (12))){
var inst_30751 = (state_30787[(8)]);
var inst_30775 = cljs.core.vec.call(null,inst_30751);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30787__$1,(15),out,inst_30775);
} else {
if((state_val_30788 === (2))){
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30787__$1,(4),ch);
} else {
if((state_val_30788 === (11))){
var inst_30767 = (state_30787[(2)]);
var inst_30768 = (new Array(n));
var inst_30751 = inst_30768;
var inst_30752 = (0);
var state_30787__$1 = (function (){var statearr_30799 = state_30787;
(statearr_30799[(7)] = inst_30752);

(statearr_30799[(10)] = inst_30767);

(statearr_30799[(8)] = inst_30751);

return statearr_30799;
})();
var statearr_30800_30824 = state_30787__$1;
(statearr_30800_30824[(2)] = null);

(statearr_30800_30824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (9))){
var inst_30751 = (state_30787[(8)]);
var inst_30765 = cljs.core.vec.call(null,inst_30751);
var state_30787__$1 = state_30787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30787__$1,(11),out,inst_30765);
} else {
if((state_val_30788 === (5))){
var inst_30752 = (state_30787[(7)]);
var inst_30755 = (state_30787[(9)]);
var inst_30760 = (state_30787[(11)]);
var inst_30751 = (state_30787[(8)]);
var inst_30759 = (inst_30751[inst_30752] = inst_30755);
var inst_30760__$1 = (inst_30752 + (1));
var inst_30761 = (inst_30760__$1 < n);
var state_30787__$1 = (function (){var statearr_30801 = state_30787;
(statearr_30801[(11)] = inst_30760__$1);

(statearr_30801[(12)] = inst_30759);

return statearr_30801;
})();
if(cljs.core.truth_(inst_30761)){
var statearr_30802_30825 = state_30787__$1;
(statearr_30802_30825[(1)] = (8));

} else {
var statearr_30803_30826 = state_30787__$1;
(statearr_30803_30826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (14))){
var inst_30780 = (state_30787[(2)]);
var inst_30781 = cljs.core.async.close_BANG_.call(null,out);
var state_30787__$1 = (function (){var statearr_30805 = state_30787;
(statearr_30805[(13)] = inst_30780);

return statearr_30805;
})();
var statearr_30806_30827 = state_30787__$1;
(statearr_30806_30827[(2)] = inst_30781);

(statearr_30806_30827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (10))){
var inst_30771 = (state_30787[(2)]);
var state_30787__$1 = state_30787;
var statearr_30807_30828 = state_30787__$1;
(statearr_30807_30828[(2)] = inst_30771);

(statearr_30807_30828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30788 === (8))){
var inst_30760 = (state_30787[(11)]);
var inst_30751 = (state_30787[(8)]);
var tmp30804 = inst_30751;
var inst_30751__$1 = tmp30804;
var inst_30752 = inst_30760;
var state_30787__$1 = (function (){var statearr_30808 = state_30787;
(statearr_30808[(7)] = inst_30752);

(statearr_30808[(8)] = inst_30751__$1);

return statearr_30808;
})();
var statearr_30809_30829 = state_30787__$1;
(statearr_30809_30829[(2)] = null);

(statearr_30809_30829[(1)] = (2));


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
});})(c__28999__auto___30815,out))
;
return ((function (switch__25629__auto__,c__28999__auto___30815,out){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30810[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30810[(1)] = (1));

return statearr_30810;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30787){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30811){if((e30811 instanceof Object)){
var ex__25633__auto__ = e30811;
var statearr_30812_30830 = state_30787;
(statearr_30812_30830[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30831 = state_30787;
state_30787 = G__30831;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30815,out))
})();
var state__29001__auto__ = (function (){var statearr_30813 = f__29000__auto__.call(null);
(statearr_30813[(6)] = c__28999__auto___30815);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30815,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30833 = arguments.length;
switch (G__30833) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28999__auto___30903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28999__auto___30903,out){
return (function (){
var f__29000__auto__ = (function (){var switch__25629__auto__ = ((function (c__28999__auto___30903,out){
return (function (state_30875){
var state_val_30876 = (state_30875[(1)]);
if((state_val_30876 === (7))){
var inst_30871 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30877_30904 = state_30875__$1;
(statearr_30877_30904[(2)] = inst_30871);

(statearr_30877_30904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (1))){
var inst_30834 = [];
var inst_30835 = inst_30834;
var inst_30836 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30875__$1 = (function (){var statearr_30878 = state_30875;
(statearr_30878[(7)] = inst_30836);

(statearr_30878[(8)] = inst_30835);

return statearr_30878;
})();
var statearr_30879_30905 = state_30875__$1;
(statearr_30879_30905[(2)] = null);

(statearr_30879_30905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (4))){
var inst_30839 = (state_30875[(9)]);
var inst_30839__$1 = (state_30875[(2)]);
var inst_30840 = (inst_30839__$1 == null);
var inst_30841 = cljs.core.not.call(null,inst_30840);
var state_30875__$1 = (function (){var statearr_30880 = state_30875;
(statearr_30880[(9)] = inst_30839__$1);

return statearr_30880;
})();
if(inst_30841){
var statearr_30881_30906 = state_30875__$1;
(statearr_30881_30906[(1)] = (5));

} else {
var statearr_30882_30907 = state_30875__$1;
(statearr_30882_30907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (15))){
var inst_30865 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30883_30908 = state_30875__$1;
(statearr_30883_30908[(2)] = inst_30865);

(statearr_30883_30908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (13))){
var state_30875__$1 = state_30875;
var statearr_30884_30909 = state_30875__$1;
(statearr_30884_30909[(2)] = null);

(statearr_30884_30909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (6))){
var inst_30835 = (state_30875[(8)]);
var inst_30860 = inst_30835.length;
var inst_30861 = (inst_30860 > (0));
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30861)){
var statearr_30885_30910 = state_30875__$1;
(statearr_30885_30910[(1)] = (12));

} else {
var statearr_30886_30911 = state_30875__$1;
(statearr_30886_30911[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (3))){
var inst_30873 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30875__$1,inst_30873);
} else {
if((state_val_30876 === (12))){
var inst_30835 = (state_30875[(8)]);
var inst_30863 = cljs.core.vec.call(null,inst_30835);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30875__$1,(15),out,inst_30863);
} else {
if((state_val_30876 === (2))){
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(4),ch);
} else {
if((state_val_30876 === (11))){
var inst_30839 = (state_30875[(9)]);
var inst_30843 = (state_30875[(10)]);
var inst_30853 = (state_30875[(2)]);
var inst_30854 = [];
var inst_30855 = inst_30854.push(inst_30839);
var inst_30835 = inst_30854;
var inst_30836 = inst_30843;
var state_30875__$1 = (function (){var statearr_30887 = state_30875;
(statearr_30887[(7)] = inst_30836);

(statearr_30887[(8)] = inst_30835);

(statearr_30887[(11)] = inst_30855);

(statearr_30887[(12)] = inst_30853);

return statearr_30887;
})();
var statearr_30888_30912 = state_30875__$1;
(statearr_30888_30912[(2)] = null);

(statearr_30888_30912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (9))){
var inst_30835 = (state_30875[(8)]);
var inst_30851 = cljs.core.vec.call(null,inst_30835);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30875__$1,(11),out,inst_30851);
} else {
if((state_val_30876 === (5))){
var inst_30836 = (state_30875[(7)]);
var inst_30839 = (state_30875[(9)]);
var inst_30843 = (state_30875[(10)]);
var inst_30843__$1 = f.call(null,inst_30839);
var inst_30844 = cljs.core._EQ_.call(null,inst_30843__$1,inst_30836);
var inst_30845 = cljs.core.keyword_identical_QMARK_.call(null,inst_30836,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30846 = ((inst_30844) || (inst_30845));
var state_30875__$1 = (function (){var statearr_30889 = state_30875;
(statearr_30889[(10)] = inst_30843__$1);

return statearr_30889;
})();
if(cljs.core.truth_(inst_30846)){
var statearr_30890_30913 = state_30875__$1;
(statearr_30890_30913[(1)] = (8));

} else {
var statearr_30891_30914 = state_30875__$1;
(statearr_30891_30914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (14))){
var inst_30868 = (state_30875[(2)]);
var inst_30869 = cljs.core.async.close_BANG_.call(null,out);
var state_30875__$1 = (function (){var statearr_30893 = state_30875;
(statearr_30893[(13)] = inst_30868);

return statearr_30893;
})();
var statearr_30894_30915 = state_30875__$1;
(statearr_30894_30915[(2)] = inst_30869);

(statearr_30894_30915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (10))){
var inst_30858 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30895_30916 = state_30875__$1;
(statearr_30895_30916[(2)] = inst_30858);

(statearr_30895_30916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (8))){
var inst_30835 = (state_30875[(8)]);
var inst_30839 = (state_30875[(9)]);
var inst_30843 = (state_30875[(10)]);
var inst_30848 = inst_30835.push(inst_30839);
var tmp30892 = inst_30835;
var inst_30835__$1 = tmp30892;
var inst_30836 = inst_30843;
var state_30875__$1 = (function (){var statearr_30896 = state_30875;
(statearr_30896[(7)] = inst_30836);

(statearr_30896[(8)] = inst_30835__$1);

(statearr_30896[(14)] = inst_30848);

return statearr_30896;
})();
var statearr_30897_30917 = state_30875__$1;
(statearr_30897_30917[(2)] = null);

(statearr_30897_30917[(1)] = (2));


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
});})(c__28999__auto___30903,out))
;
return ((function (switch__25629__auto__,c__28999__auto___30903,out){
return (function() {
var cljs$core$async$state_machine__25630__auto__ = null;
var cljs$core$async$state_machine__25630__auto____0 = (function (){
var statearr_30898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30898[(0)] = cljs$core$async$state_machine__25630__auto__);

(statearr_30898[(1)] = (1));

return statearr_30898;
});
var cljs$core$async$state_machine__25630__auto____1 = (function (state_30875){
while(true){
var ret_value__25631__auto__ = (function (){try{while(true){
var result__25632__auto__ = switch__25629__auto__.call(null,state_30875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25632__auto__;
}
break;
}
}catch (e30899){if((e30899 instanceof Object)){
var ex__25633__auto__ = e30899;
var statearr_30900_30918 = state_30875;
(statearr_30900_30918[(5)] = ex__25633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30919 = state_30875;
state_30875 = G__30919;
continue;
} else {
return ret_value__25631__auto__;
}
break;
}
});
cljs$core$async$state_machine__25630__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25630__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25630__auto____0;
cljs$core$async$state_machine__25630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25630__auto____1;
return cljs$core$async$state_machine__25630__auto__;
})()
;})(switch__25629__auto__,c__28999__auto___30903,out))
})();
var state__29001__auto__ = (function (){var statearr_30901 = f__29000__auto__.call(null);
(statearr_30901[(6)] = c__28999__auto___30903);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29001__auto__);
});})(c__28999__auto___30903,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545274391132
