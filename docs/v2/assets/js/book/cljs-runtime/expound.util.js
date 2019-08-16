goog.provide('expound.util');
goog.require('cljs.core');
expound.util.assert_message = "Internal Expound assertion failed. Please report this bug at https://github.com/bhb/expound/issues";
expound.util.nan_QMARK_ = (function expound$util$nan_QMARK_(x){
var and__4120__auto__ = typeof x === 'number';
if(and__4120__auto__){
return isNaN(x);
} else {
return and__4120__auto__;
}
});

//# sourceMappingURL=expound.util.js.map
