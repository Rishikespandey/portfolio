(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function E_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Zf={exports:{}},Co={};var _0;function dS(){if(_0)return Co;_0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var v0;function hS(){return v0||(v0=1,Zf.exports=dS()),Zf.exports}var it=hS(),Kf={exports:{}},re={};var x0;function pS(){if(x0)return re;x0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(O,Y,vt){this.props=O,this.context=Y,this.refs=M,this.updater=vt||b}S.prototype.isReactComponent={},S.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function C(){}C.prototype=S.prototype;function P(O,Y,vt){this.props=O,this.context=Y,this.refs=M,this.updater=vt||b}var L=P.prototype=new C;L.constructor=P,w(L,S.prototype),L.isPureReactComponent=!0;var k=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(O,Y,vt){var Rt=vt.ref;return{$$typeof:o,type:O,key:Y,ref:Rt!==void 0?Rt:null,props:vt}}function mt(O,Y){return D(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(vt){return Y[vt]})}var at=/\/+/g;function ct(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,Y,vt,Rt,It){var et=typeof O;(et==="undefined"||et==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(et){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case o:case e:xt=!0;break;case v:return xt=O._init,N(xt(O._payload),Y,vt,Rt,It)}}if(xt)return It=It(O),xt=Rt===""?"."+ct(O,0):Rt,k(It)?(vt="",xt!=null&&(vt=xt.replace(at,"$&/")+"/"),N(It,Y,vt,"",function(Kt){return Kt})):It!=null&&(H(It)&&(It=mt(It,vt+(It.key==null||O&&O.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+xt)),Y.push(It)),1;xt=0;var Tt=Rt===""?".":Rt+":";if(k(O))for(var kt=0;kt<O.length;kt++)Rt=O[kt],et=Tt+ct(Rt,kt),xt+=N(Rt,Y,vt,et,It);else if(kt=E(O),typeof kt=="function")for(O=kt.call(O),kt=0;!(Rt=O.next()).done;)Rt=Rt.value,et=Tt+ct(Rt,kt++),xt+=N(Rt,Y,vt,et,It);else if(et==="object"){if(typeof O.then=="function")return N(J(O),Y,vt,Rt,It);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return xt}function F(O,Y,vt){if(O==null)return O;var Rt=[],It=0;return N(O,Rt,"","",function(et){return Y.call(vt,et,It++)}),Rt}function lt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(vt){(O._status===0||O._status===-1)&&(O._status=1,O._result=vt)},function(vt){(O._status===0||O._status===-1)&&(O._status=2,O._result=vt)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var ht=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},bt={map:F,forEach:function(O,Y,vt){F(O,function(){Y.apply(this,arguments)},vt)},count:function(O){var Y=0;return F(O,function(){Y++}),Y},toArray:function(O){return F(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=x,re.Children=bt,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,Y,vt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=w({},O.props),It=O.key;if(Y!=null)for(et in Y.key!==void 0&&(It=""+Y.key),Y)!T.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(Rt[et]=Y[et]);var et=arguments.length-2;if(et===1)Rt.children=vt;else if(1<et){for(var xt=Array(et),Tt=0;Tt<et;Tt++)xt[Tt]=arguments[Tt+2];Rt.children=xt}return D(O.type,It,Rt)},re.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},re.createElement=function(O,Y,vt){var Rt,It={},et=null;if(Y!=null)for(Rt in Y.key!==void 0&&(et=""+Y.key),Y)T.call(Y,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(It[Rt]=Y[Rt]);var xt=arguments.length-2;if(xt===1)It.children=vt;else if(1<xt){for(var Tt=Array(xt),kt=0;kt<xt;kt++)Tt[kt]=arguments[kt+2];It.children=Tt}if(O&&O.defaultProps)for(Rt in xt=O.defaultProps,xt)It[Rt]===void 0&&(It[Rt]=xt[Rt]);return D(O,et,It)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:p,render:O}},re.isValidElement=H,re.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:lt}},re.memo=function(O,Y){return{$$typeof:h,type:O,compare:Y===void 0?null:Y}},re.startTransition=function(O){var Y=z.T,vt={};z.T=vt;try{var Rt=O(),It=z.S;It!==null&&It(vt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(B,ht)}catch(et){ht(et)}finally{Y!==null&&vt.types!==null&&(Y.types=vt.types),z.T=Y}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(O){return z.H.use(O)},re.useActionState=function(O,Y,vt){return z.H.useActionState(O,Y,vt)},re.useCallback=function(O,Y){return z.H.useCallback(O,Y)},re.useContext=function(O){return z.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,Y){return z.H.useDeferredValue(O,Y)},re.useEffect=function(O,Y){return z.H.useEffect(O,Y)},re.useEffectEvent=function(O){return z.H.useEffectEvent(O)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(O,Y,vt){return z.H.useImperativeHandle(O,Y,vt)},re.useInsertionEffect=function(O,Y){return z.H.useInsertionEffect(O,Y)},re.useLayoutEffect=function(O,Y){return z.H.useLayoutEffect(O,Y)},re.useMemo=function(O,Y){return z.H.useMemo(O,Y)},re.useOptimistic=function(O,Y){return z.H.useOptimistic(O,Y)},re.useReducer=function(O,Y,vt){return z.H.useReducer(O,Y,vt)},re.useRef=function(O){return z.H.useRef(O)},re.useState=function(O){return z.H.useState(O)},re.useSyncExternalStore=function(O,Y,vt){return z.H.useSyncExternalStore(O,Y,vt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.4",re}var S0;function Ch(){return S0||(S0=1,Kf.exports=pS()),Kf.exports}var Vn=Ch();const b_=E_(Vn);var Qf={exports:{}},wo={},Jf={exports:{}},$f={};var M0;function mS(){return M0||(M0=1,(function(o){function e(N,F){var lt=N.length;N.push(F);t:for(;0<lt;){var ht=lt-1>>>1,bt=N[ht];if(0<l(bt,F))N[ht]=F,N[lt]=bt,lt=ht;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var F=N[0],lt=N.pop();if(lt!==F){N[0]=lt;t:for(var ht=0,bt=N.length,O=bt>>>1;ht<O;){var Y=2*(ht+1)-1,vt=N[Y],Rt=Y+1,It=N[Rt];if(0>l(vt,lt))Rt<bt&&0>l(It,vt)?(N[ht]=It,N[Rt]=lt,ht=Rt):(N[ht]=vt,N[Y]=lt,ht=Y);else if(Rt<bt&&0>l(It,lt))N[ht]=It,N[Rt]=lt,ht=Rt;else break t}}return F}function l(N,F){var lt=N.sortIndex-F.sortIndex;return lt!==0?lt:N.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,x=null,_=3,E=!1,b=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var F=i(h);F!==null;){if(F.callback===null)s(h);else if(F.startTime<=N)s(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(h)}}function k(N){if(w=!1,L(N),!b)if(i(m)!==null)b=!0,B||(B=!0,$());else{var F=i(h);F!==null&&J(k,F.startTime-N)}}var B=!1,z=-1,T=5,D=-1;function mt(){return M?!0:!(o.unstable_now()-D<T)}function H(){if(M=!1,B){var N=o.unstable_now();D=N;var F=!0;try{t:{b=!1,w&&(w=!1,C(z),z=-1),E=!0;var lt=_;try{e:{for(L(N),x=i(m);x!==null&&!(x.expirationTime>N&&mt());){var ht=x.callback;if(typeof ht=="function"){x.callback=null,_=x.priorityLevel;var bt=ht(x.expirationTime<=N);if(N=o.unstable_now(),typeof bt=="function"){x.callback=bt,L(N),F=!0;break e}x===i(m)&&s(m),L(N)}else s(m);x=i(m)}if(x!==null)F=!0;else{var O=i(h);O!==null&&J(k,O.startTime-N),F=!1}}break t}finally{x=null,_=lt,E=!1}F=void 0}}finally{F?$():B=!1}}}var $;if(typeof P=="function")$=function(){P(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ct=at.port2;at.port1.onmessage=H,$=function(){ct.postMessage(null)}}else $=function(){S(H,0)};function J(N,F){z=S(function(){N(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(N){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var lt=_;_=F;try{return N()}finally{_=lt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var lt=_;_=N;try{return F()}finally{_=lt}},o.unstable_scheduleCallback=function(N,F,lt){var ht=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?ht+lt:ht):lt=ht,N){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=lt+bt,N={id:v++,callback:F,priorityLevel:N,startTime:lt,expirationTime:bt,sortIndex:-1},lt>ht?(N.sortIndex=lt,e(h,N),i(m)===null&&N===i(h)&&(w?(C(z),z=-1):w=!0,J(k,lt-ht))):(N.sortIndex=bt,e(m,N),b||E||(b=!0,B||(B=!0,$()))),N},o.unstable_shouldYield=mt,o.unstable_wrapCallback=function(N){var F=_;return function(){var lt=_;_=F;try{return N.apply(this,arguments)}finally{_=lt}}}})($f)),$f}var y0;function gS(){return y0||(y0=1,Jf.exports=mS()),Jf.exports}var td={exports:{}},bn={};var E0;function _S(){if(E0)return bn;E0=1;var o=Ch();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,v)},bn.flushSync=function(m){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=v,s.d.f()}},bn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},bn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},bn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},bn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,h){return m(h)},bn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},bn.useFormStatus=function(){return d.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var b0;function vS(){if(b0)return td.exports;b0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=_S(),td.exports}var T0;function xS(){if(T0)return wo;T0=1;var o=gS(),e=Ch(),i=vS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,A=c.child;A;){if(A===a){g=!0,a=c,r=f;break}if(A===r){g=!0,r=c,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,r=c;break}if(A===r){g=!0,r=f,a=c;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var J=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},ht=[],bt=-1;function O(t){return{current:t}}function Y(t){0>bt||(t.current=ht[bt],ht[bt]=null,bt--)}function vt(t,n){bt++,ht[bt]=t.current,t.current=n}var Rt=O(null),It=O(null),et=O(null),xt=O(null);function Tt(t,n){switch(vt(et,n),vt(It,t),vt(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hg(n),t=Gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Rt),vt(Rt,t)}function kt(){Y(Rt),Y(It),Y(et)}function Kt(t){t.memoizedState!==null&&vt(xt,t);var n=Rt.current,a=Gg(n,t.type);n!==a&&(vt(It,t),vt(Rt,a))}function $t(t){It.current===t&&(Y(Rt),Y(It)),xt.current===t&&(Y(xt),bo._currentValue=lt)}var Ke,_e;function pe(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+_e}var we=!1;function oe(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var nt=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){nt=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var I=g.split(`
`),Q=A.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===Q.length)for(r=I.length-1,c=Q.length-1;1<=r&&0<=c&&I[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==Q[c]){var dt=`
`+I[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Ze(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Ze(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Zt=o.log,te=o.unstable_setDisableYieldValue,Et=null,Mt=null;function Ot(t){if(typeof Zt=="function"&&te(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Et,t)}catch{}}var Lt=Math.clz32?Math.clz32:W,Pt=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Pt(t)/ce|0)|0}var Ct=256,At=262144,Ft=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=yt(r):(g&=A,g!==0?c=yt(g):a||(a=A&~t,a!==0&&(c=yt(a))))):(A=r&~f,A!==0?c=yt(A):g!==0?c=yt(g):a||(a=r&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Lt(a),_t=1<<dt;A[dt]=0,I[dt]=-1;var nt=Q[dt];if(nt!==null)for(Q[dt]=null,dt=0;dt<nt.length;dt++){var ot=nt[dt];ot!==null&&(ot.lane&=-536870913)}a&=~_t}r!==0&&zr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function zr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Lt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ns(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Lt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function qo(t,n){var a=n&-n;return a=(a&42)!==0?1:Ls(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Os(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ci(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:u0(t.type))}function Ps(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var mi=Math.random().toString(36).slice(2),an="__reactFiber$"+mi,dn="__reactProps$"+mi,Vi="__reactContainer$"+mi,Ma="__reactEvents$"+mi,Yo="__reactListeners$"+mi,jo="__reactHandles$"+mi,Zo="__reactResources$"+mi,ns="__reactMarker$"+mi;function Br(t){delete t[an],delete t[dn],delete t[Ma],delete t[Yo],delete t[jo]}function ya(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=jg(t);t!==null;){if(a=t[an])return a;t=jg(t)}return n}t=a,a=t.parentNode}return null}function Ea(t){if(t=t[an]||t[Vi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[Zo];return n||(n=t[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[ns]=!0}var rt=new Set,tt={};function Z(t,n){Dt(t,n),Dt(t+"Capture",n)}function Dt(t,n){for(tt[t]=n,t=0;t<n.length;t++)rt.add(n[t])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Wt={};function jt(t){return We.call(Wt,t)?!0:We.call(Ut,t)?!1:zt.test(t)?Wt[t]=!0:(Ut[t]=!0,!1)}function ee(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function se(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Te(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function hn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=qe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function ie(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,a,r,c,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?gi(t,g,ue(n)):a!=null?gi(t,g,ue(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function Wn(t,n,a,r,c,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Te(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Te(t)}function gi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ne(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function sn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Te(t)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _i(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ki(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&_i(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&_i(t,f,n[f])}function Fs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return cv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Wc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Is=null,zs=null;function Bh(t){var n=Ea(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Dn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&hn(r)}break t;case"textarea":Ne(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qn(t,!!a.multiple,n,!1)}}}var Yc=!1;function Hh(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var r=t(n);return r}finally{if(Yc=!1,(Is!==null||zs!==null)&&(Il(),Is&&(n=Is,t=zs,zs=Is=null,Bh(n),t)))for(n=0;n<t.length;n++)Bh(t[n])}}function Hr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(Wi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{jc=!1}var ba=null,Zc=null,Qo=null;function Gh(){if(Qo)return Qo;var t,n=Zc,a=n.length,r,c="value"in ba?ba.value:ba.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Qo=c.slice(t,1<r?1-r:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Vh(){return!1}function Pn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Vh,this.isPropagationStopped=Vh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Pn(as),Vr=x({},as,{view:0,detail:0}),uv=Pn(Vr),Kc,Qc,kr,el=x({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(Kc=t.screenX-kr.screenX,Qc=t.screenY-kr.screenY):Qc=Kc=0,kr=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),kh=Pn(el),fv=x({},el,{dataTransfer:0}),dv=Pn(fv),hv=x({},Vr,{relatedTarget:0}),Jc=Pn(hv),pv=x({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),mv=Pn(pv),gv=x({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_v=Pn(gv),vv=x({},as,{data:0}),Xh=Pn(vv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Mv[t])?!!n[t]:!1}function $c(){return yv}var Ev=x({},Vr,{key:function(t){if(t.key){var n=xv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=Pn(Ev),Tv=x({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=Pn(Tv),Av=x({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Rv=Pn(Av),Cv=x({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=Pn(Cv),Dv=x({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=Pn(Dv),Nv=x({},as,{newState:0,oldState:0}),Lv=Pn(Nv),Ov=[9,13,27,32],tu=Wi&&"CompositionEvent"in window,Xr=null;Wi&&"documentMode"in document&&(Xr=document.documentMode);var Pv=Wi&&"TextEvent"in window&&!Xr,qh=Wi&&(!tu||Xr&&8<Xr&&11>=Xr),Yh=" ",jh=!1;function Zh(t,n){switch(t){case"keyup":return Ov.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function Fv(t,n){switch(t){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(jh=!0,Yh);case"textInput":return t=n.data,t===Yh&&jh?null:t;default:return null}}function Iv(t,n){if(Bs)return t==="compositionend"||!tu&&Zh(t,n)?(t=Gh(),Qo=Zc=ba=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qh&&n.locale!=="ko"?null:n.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zv[t.type]:n==="textarea"}function Jh(t,n,a,r){Is?zs?zs.push(r):zs=[r]:Is=r,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Wr=null,qr=null;function Bv(t){Og(t,0)}function nl(t){var n=is(t);if(hn(n))return t}function $h(t,n){if(t==="change")return n}var tp=!1;if(Wi){var eu;if(Wi){var nu="oninput"in document;if(!nu){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),nu=typeof ep.oninput=="function"}eu=nu}else eu=!1;tp=eu&&(!document.documentMode||9<document.documentMode)}function np(){Wr&&(Wr.detachEvent("onpropertychange",ip),qr=Wr=null)}function ip(t){if(t.propertyName==="value"&&nl(qr)){var n=[];Jh(n,qr,t,qc(t)),Hh(Bv,n)}}function Hv(t,n,a){t==="focusin"?(np(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",ip)):t==="focusout"&&np()}function Gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(qr)}function Vv(t,n){if(t==="click")return nl(n)}function kv(t,n){if(t==="input"||t==="change")return nl(n)}function Xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Xv;function Yr(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!We.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,n){var a=ap(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ap(a)}}function rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Wv=Wi&&"documentMode"in document&&11>=document.documentMode,Hs=null,au=null,jr=null,su=!1;function lp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Hs==null||Hs!==Vt(r)||(r=Hs,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Yr(jr,r)||(jr=r,r=Xl(au,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Hs)))}function ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},ru={},cp={};Wi&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function rs(t){if(ru[t])return ru[t];if(!Gs[t])return t;var n=Gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cp)return ru[t]=n[a];return t}var up=rs("animationend"),fp=rs("animationiteration"),dp=rs("animationstart"),qv=rs("transitionrun"),Yv=rs("transitionstart"),jv=rs("transitioncancel"),hp=rs("transitionend"),pp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function vi(t,n){pp.set(t,n),Z(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Vs=0,lu=0;function al(){for(var t=Vs,n=lu=Vs=0;n<t;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&mp(a,c,f)}}function sl(t,n,a,r){ni[Vs++]=t,ni[Vs++]=n,ni[Vs++]=a,ni[Vs++]=r,lu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function cu(t,n,a,r){return sl(t,n,a,r),rl(t)}function os(t,n){return sl(t,null,null,n),rl(t)}function mp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Lt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function rl(t){if(50<_o)throw _o=0,xf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ks={};function Zv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new Zv(t,n,a,r)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")uu(t)&&(g=1);else if(typeof t=="string")g=tS(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=jn(31,a,n,c),t.elementType=D,t.lanes=f,t;case w:return ls(a.children,c,f,n);case M:g=8,c|=24;break;case S:return t=jn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case k:return t=jn(13,a,n,c),t.elementType=k,t.lanes=f,t;case B:return t=jn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case C:g=9;break t;case L:g=11;break t;case z:g=14;break t;case T:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ls(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function fu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function _p(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},vp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Xs=[],Ws=0,ll=null,Zr=0,ai=[],si=0,Ta=null,wi=1,Di="";function Yi(t,n){Xs[Ws++]=Zr,Xs[Ws++]=ll,ll=t,Zr=n}function xp(t,n,a){ai[si++]=wi,ai[si++]=Di,ai[si++]=Ta,Ta=t;var r=wi;t=Di;var c=32-Lt(r)-1;r&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,wi=1<<32-Lt(n)+c|a<<c|r,Di=f+t}else wi=1<<f|a<<c|r,Di=t}function hu(t){t.return!==null&&(Yi(t,1),xp(t,1,0))}function pu(t){for(;t===ll;)ll=Xs[--Ws],Xs[Ws]=null,Zr=Xs[--Ws],Xs[Ws]=null;for(;t===Ta;)Ta=ai[--si],ai[si]=null,Di=ai[--si],ai[si]=null,wi=ai[--si],ai[si]=null}function Sp(t,n){ai[si++]=wi,ai[si++]=Di,ai[si++]=Ta,wi=n.id,Di=n.overflow,Ta=t}var xn=null,ke=null,Se=!1,Aa=null,ri=!1,mu=Error(s(519));function Ra(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(ii(n,t)),mu}function Mp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[an]=t,n[dn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)ge(xo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Wn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||zg(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ra(t,!0)}function yp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:xn=xn.return}}function qs(t){if(t!==xn)return!1;if(!Se)return yp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Of(t.type,t.memoizedProps)),a=!a),a&&ke&&Ra(t),yp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Yg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Yg(t)}else n===27?(n=ke,Ga(t.type)?(t=Bf,Bf=null,ke=t):ke=n):ke=xn?li(t.stateNode.nextSibling):null;return!0}function cs(){ke=xn=null,Se=!1}function gu(){var t=Aa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Aa=null),t}function Kr(t){Aa===null?Aa=[t]:Aa.push(t)}var _u=O(null),us=null,ji=null;function Ca(t,n,a){vt(_u,n._currentValue),n._currentValue=a}function Zi(t){t._currentValue=_u.current,Y(_u)}function vu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function xu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),vu(f.return,a,t),r||(g=null);break t}f=A.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),vu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ys(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=c.type;Yn(c.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(c===xt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&xu(n,t,a,r),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){us=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Ep(us,t)}function ul(t,n){return us===null&&fs(t),Ep(t,n)}function Ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(s(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var Kv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Qv=o.unstable_scheduleCallback,Jv=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new Kv,data:new Map,refCount:0}}function Qr(t){t.refCount--,t.refCount===0&&Qv(Jv,function(){t.controller.abort()})}var Jr=null,Mu=0,js=0,Zs=null;function $v(t,n){if(Jr===null){var a=Jr=[];Mu=0,js=Tf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Mu++,n.then(bp,bp),n}function bp(){if(--Mu===0&&Jr!==null){Zs!==null&&(Zs.status="fulfilled");var t=Jr;Jr=null,js=0,Zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function tx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Tp=N.S;N.S=function(t,n){lg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$v(t,n),Tp!==null&&Tp(t,n)};var ds=O(null);function yu(){var t=ds.current;return t!==null?t:Ve.pooledCache}function fl(t,n){n===null?vt(ds,ds.current):vt(ds,n.pool)}function Ap(){var t=yu();return t===null?null:{parent:on._currentValue,pool:t}}var Ks=Error(s(460)),Eu=Error(s(474)),dl=Error(s(542)),hl={then:function(){}};function Rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t}throw ps=n,Ks}}function hs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Ks):a}}var ps=null;function wp(){if(ps===null)throw Error(s(459));var t=ps;return ps=null,t}function Dp(t){if(t===Ks||t===dl)throw Error(s(483))}var Qs=null,$r=0;function pl(t){var n=$r;return $r+=1,Qs===null&&(Qs=[]),Cp(Qs,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Up(t){function n(j,V){if(t){var K=j.deletions;K===null?(j.deletions=[V],j.flags|=16):K.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=qi(j,V),j.index=0,j.sibling=null,j}function f(j,V,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<V?(j.flags|=67108866,V):K):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,K,gt){return V===null||V.tag!==6?(V=fu(K,j.mode,gt),V.return=j,V):(V=c(V,K),V.return=j,V)}function I(j,V,K,gt){var Qt=K.type;return Qt===w?dt(j,V,K.props.children,gt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&hs(Qt)===V.type)?(V=c(V,K.props),to(V,K),V.return=j,V):(V=ol(K.type,K.key,K.props,null,j.mode,gt),to(V,K),V.return=j,V)}function Q(j,V,K,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=du(K,j.mode,gt),V.return=j,V):(V=c(V,K.children||[]),V.return=j,V)}function dt(j,V,K,gt,Qt){return V===null||V.tag!==7?(V=ls(K,j.mode,gt,Qt),V.return=j,V):(V=c(V,K),V.return=j,V)}function _t(j,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=fu(""+V,j.mode,K),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return K=ol(V.type,V.key,V.props,null,j.mode,K),to(K,V),K.return=j,K;case b:return V=du(V,j.mode,K),V.return=j,V;case T:return V=hs(V),_t(j,V,K)}if(J(V)||$(V))return V=ls(V,j.mode,K,null),V.return=j,V;if(typeof V.then=="function")return _t(j,pl(V),K);if(V.$$typeof===P)return _t(j,ul(j,V),K);ml(j,V)}return null}function nt(j,V,K,gt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:A(j,V,""+K,gt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?I(j,V,K,gt):null;case b:return K.key===Qt?Q(j,V,K,gt):null;case T:return K=hs(K),nt(j,V,K,gt)}if(J(K)||$(K))return Qt!==null?null:dt(j,V,K,gt,null);if(typeof K.then=="function")return nt(j,V,pl(K),gt);if(K.$$typeof===P)return nt(j,V,ul(j,K),gt);ml(j,K)}return null}function ot(j,V,K,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(K)||null,A(V,j,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return j=j.get(gt.key===null?K:gt.key)||null,I(V,j,gt,Qt);case b:return j=j.get(gt.key===null?K:gt.key)||null,Q(V,j,gt,Qt);case T:return gt=hs(gt),ot(j,V,K,gt,Qt)}if(J(gt)||$(gt))return j=j.get(K)||null,dt(V,j,gt,Qt,null);if(typeof gt.then=="function")return ot(j,V,K,pl(gt),Qt);if(gt.$$typeof===P)return ot(j,V,K,ul(V,gt),Qt);ml(V,gt)}return null}function Gt(j,V,K,gt){for(var Qt=null,Ae=null,Yt=V,fe=V=0,xe=null;Yt!==null&&fe<K.length;fe++){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=nt(j,Yt,K[fe],gt);if(Re===null){Yt===null&&(Yt=xe);break}t&&Yt&&Re.alternate===null&&n(j,Yt),V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(fe===K.length)return a(j,Yt),Se&&Yi(j,fe),Qt;if(Yt===null){for(;fe<K.length;fe++)Yt=_t(j,K[fe],gt),Yt!==null&&(V=f(Yt,V,fe),Ae===null?Qt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&Yi(j,fe),Qt}for(Yt=r(Yt);fe<K.length;fe++)xe=ot(Yt,j,fe,K[fe],gt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?fe:xe.key),V=f(xe,V,fe),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return t&&Yt.forEach(function(qa){return n(j,qa)}),Se&&Yi(j,fe),Qt}function Jt(j,V,K,gt){if(K==null)throw Error(s(151));for(var Qt=null,Ae=null,Yt=V,fe=V=0,xe=null,Re=K.next();Yt!==null&&!Re.done;fe++,Re=K.next()){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var qa=nt(j,Yt,Re.value,gt);if(qa===null){Yt===null&&(Yt=xe);break}t&&Yt&&qa.alternate===null&&n(j,Yt),V=f(qa,V,fe),Ae===null?Qt=qa:Ae.sibling=qa,Ae=qa,Yt=xe}if(Re.done)return a(j,Yt),Se&&Yi(j,fe),Qt;if(Yt===null){for(;!Re.done;fe++,Re=K.next())Re=_t(j,Re.value,gt),Re!==null&&(V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&Yi(j,fe),Qt}for(Yt=r(Yt);!Re.done;fe++,Re=K.next())Re=ot(Yt,j,fe,Re.value,gt),Re!==null&&(t&&Re.alternate!==null&&Yt.delete(Re.key===null?fe:Re.key),V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&Yt.forEach(function(fS){return n(j,fS)}),Se&&Yi(j,fe),Qt}function He(j,V,K,gt){if(typeof K=="object"&&K!==null&&K.type===w&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===w){if(V.tag===7){a(j,V.sibling),gt=c(V,K.props.children),gt.return=j,j=gt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&hs(Qt)===V.type){a(j,V.sibling),gt=c(V,K.props),to(gt,K),gt.return=j,j=gt;break t}a(j,V);break}else n(j,V);V=V.sibling}K.type===w?(gt=ls(K.props.children,j.mode,gt,K.key),gt.return=j,j=gt):(gt=ol(K.type,K.key,K.props,null,j.mode,gt),to(gt,K),gt.return=j,j=gt)}return g(j);case b:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(j,V.sibling),gt=c(V,K.children||[]),gt.return=j,j=gt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}gt=du(K,j.mode,gt),gt.return=j,j=gt}return g(j);case T:return K=hs(K),He(j,V,K,gt)}if(J(K))return Gt(j,V,K,gt);if($(K)){if(Qt=$(K),typeof Qt!="function")throw Error(s(150));return K=Qt.call(K),Jt(j,V,K,gt)}if(typeof K.then=="function")return He(j,V,pl(K),gt);if(K.$$typeof===P)return He(j,V,ul(j,K),gt);ml(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(j,V.sibling),gt=c(V,K),gt.return=j,j=gt):(a(j,V),gt=fu(K,j.mode,gt),gt.return=j,j=gt),g(j)):a(j,V)}return function(j,V,K,gt){try{$r=0;var Qt=He(j,V,K,gt);return Qs=null,Qt}catch(Yt){if(Yt===Ks||Yt===dl)throw Yt;var Ae=jn(29,Yt,null,j.mode);return Ae.lanes=gt,Ae.return=j,Ae}}}var ms=Up(!0),Np=Up(!1),wa=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=rl(t),mp(t,null,a),n}return sl(t,r,n,a),rl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}function Au(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ru=!1;function no(){if(Ru){var t=Zs;if(t!==null)throw t}}function io(t,n,a,r){Ru=!1;var c=t.updateQueue;wa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==g&&(A===null?dt.firstBaseUpdate=Q:A.next=Q,dt.lastBaseUpdate=I))}if(f!==null){var _t=c.baseState;g=0,dt=Q=I=null,A=f;do{var nt=A.lane&-536870913,ot=nt!==A.lane;if(ot?(ve&nt)===nt:(r&nt)===nt){nt!==0&&nt===js&&(Ru=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=t,Jt=A;nt=n;var He=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){_t=Gt.call(He,_t,nt);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,nt=typeof Gt=="function"?Gt.call(He,_t,nt):Gt,nt==null)break t;_t=x({},_t,nt);break t;case 2:wa=!0}}nt=A.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(Q=dt=ot,I=_t):dt=dt.next=ot,g|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);dt===null&&(I=_t),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Fa|=g,t.lanes=g,t.memoizedState=_t}}function Lp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Op(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lp(a[t],n)}var Js=O(null),gl=O(0);function Pp(t,n){t=aa,vt(gl,t),vt(Js,n),aa=t|n.baseLanes}function Cu(){vt(gl,aa),vt(Js,Js.current)}function wu(){aa=gl.current,Y(Js),Y(gl)}var Zn=O(null),oi=null;function Na(t){var n=t.alternate;vt($e,$e.current&1),vt(Zn,t),oi===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(oi=t)}function Du(t){vt($e,$e.current),vt(Zn,t),oi===null&&(oi=t)}function Fp(t){t.tag===22?(vt($e,$e.current),vt(Zn,t),oi===null&&(oi=t)):La()}function La(){vt($e,$e.current),vt(Zn,Zn.current)}function Kn(t){Y(Zn),oi===t&&(oi=null),Y($e)}var $e=O(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,le=null,ze=null,ln=null,vl=!1,$s=!1,gs=!1,xl=0,ao=0,tr=null,ex=0;function Qe(){throw Error(s(321))}function Uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Nu(t,n,a,r,c,f){return Ki=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?xm:Yu,gs=!1,f=a(r,c),gs=!1,$s&&(f=zp(n,a,r,c)),Ip(t),f}function Ip(t){N.H=oo;var n=ze!==null&&ze.next!==null;if(Ki=0,ln=ze=le=null,vl=!1,ao=0,tr=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&cl(t)&&(cn=!0))}function zp(t,n,a,r){le=t;var c=0;do{if($s&&(tr=null),ao=0,$s=!1,25<=c)throw Error(s(301));if(c+=1,ln=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Sm,f=n(a,r)}while($s);return f}function nx(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(le.flags|=1024),n}function Lu(){var t=xl!==0;return xl=0,t}function Ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pu(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}Ki=0,ln=ze=le=null,$s=!1,ao=xl=0,tr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=t:ln=ln.next=t,ln}function tn(){if(ze===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,ze=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?le.memoizedState=ln=t:ln=ln.next=t}return ln}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ao;return ao+=1,tr===null&&(tr=[]),t=Cp(tr,t,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?xm:Yu),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===P)return Sn(t)}throw Error(s(438,String(t)))}function Fu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=mt;return n.index++,a}function Qi(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=tn();return Iu(n,ze,t)}function Iu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=g=null,I=null,Q=n,dt=!1;do{var _t=Q.lane&-536870913;if(_t!==Q.lane?(ve&_t)===_t:(Ki&_t)===_t){var nt=Q.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),_t===js&&(dt=!0);else if((Ki&nt)===nt){Q=Q.next,nt===js&&(dt=!0);continue}else _t={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=_t,g=f):I=I.next=_t,le.lanes|=nt,Fa|=nt;_t=Q.action,gs&&a(f,_t),f=Q.hasEagerState?Q.eagerState:a(f,_t)}else nt={lane:_t,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=nt,g=f):I=I.next=nt,le.lanes|=_t,Fa|=_t;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=A,!Yn(f,t.memoizedState)&&(cn=!0,dt&&(a=Zs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function zu(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Bp(t,n,a){var r=le,c=tn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Yn((ze||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Gu(Vp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},Gp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(Ki&127)!==0||Hp(r,n,a)}return a}function Hp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Sl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gp(t,n,a,r){n.value=a,n.getSnapshot=r,kp(n)&&Xp(t)}function Vp(t,n,a){return a(function(){kp(n)&&Xp(t)})}function kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Xp(t){var n=os(t,2);n!==null&&Hn(n,t,2)}function Bu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),gs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},n}function Wp(t,n,a,r){return t.baseState=a,Iu(t,ze,typeof r=="function"?r:Qi)}function ix(t,n,a,r,c){if(Tl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var A=a(c,r),I=N.S;I!==null&&I(g,A),Yp(t,n,A)}catch(Q){Hu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(c,r),Yp(t,n,f)}catch(Q){Hu(t,n,Q)}}function Yp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){jp(t,n,r)},function(r){return Hu(t,n,r)}):jp(t,n,a)}function jp(t,n,a){n.status="fulfilled",n.value=a,Zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,qp(t,a)))}function Hu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==r)}t.action=null}function Zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Kp(t,n){return n}function Qp(t,n){if(Se){var a=Ve.formState;if(a!==null){t:{var r=le;if(Se){if(ke){e:{for(var c=ke,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=li(c.nextSibling),r=c.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=r,a=gm.bind(null,le,r),r.dispatch=a,r=Bu(!1),f=qu.bind(null,le,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=ix.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Jp(t){var n=tn();return $p(n,ze,t)}function $p(t,n,a){if(n=Iu(t,n,Kp)[0],t=yl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(g){throw g===Ks?dl:g}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,er(9,{destroy:void 0},ax.bind(null,c,a),null)),[r,f,t]}function ax(t,n){t.action=n}function tm(t){var n=tn(),a=ze;if(a!==null)return $p(n,a,t);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function er(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Sl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function em(){return tn().memoizedState}function El(t,n,a,r){var c=Nn();le.flags|=t,c.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function bl(t,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;ze!==null&&r!==null&&Uu(r,ze.memoizedState.deps)?c.memoizedState=er(n,f,a,r):(le.flags|=t,c.memoizedState=er(1|n,f,a,r))}function nm(t,n){El(8390656,8,t,n)}function Gu(t,n){bl(2048,8,t,n)}function sx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Sl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function im(t){var n=tn().memoizedState;return sx({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function am(t,n){return bl(4,2,t,n)}function sm(t,n){return bl(4,4,t,n)}function rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function om(t,n,a){a=a!=null?a.concat([t]):null,bl(4,4,rm.bind(null,n,t),a)}function Vu(){}function lm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Uu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function cm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Uu(n,r[1]))return r[0];if(r=t(),gs){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function ku(t,n,a){return a===void 0||(Ki&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ug(),le.lanes|=t,Fa|=t,a)}function um(t,n,a,r){return Yn(a,n)?a:Js.current!==null?(t=ku(t,a,r),Yn(t,n)||(cn=!0),t):(Ki&42)===0||(Ki&1073741824)!==0&&(ve&261930)===0?(cn=!0,t.memoizedState=a):(t=ug(),le.lanes|=t,Fa|=t,n)}function fm(t,n,a,r,c){var f=F.p;F.p=f!==0&&8>f?f:8;var g=N.T,A={};N.T=A,qu(t,!1,n,a);try{var I=c(),Q=N.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=tx(I,r);ro(t,n,dt,$n(t))}else ro(t,n,r,$n(t))}catch(_t){ro(t,n,{then:function(){},status:"rejected",reason:_t},$n())}finally{F.p=f,g!==null&&A.types!==null&&(g.types=A.types),N.T=g}}function rx(){}function Xu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=dm(t).queue;fm(t,c,n,lt,a===null?rx:function(){return hm(t),a(r)})}function dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hm(t){var n=dm(t);n.next===null&&(n=t.alternate.memoizedState),ro(t,n.next.queue,{},$n())}function Wu(){return Sn(bo)}function pm(){return tn().memoizedState}function mm(){return tn().memoizedState}function ox(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Da(a);var r=Ua(n,t,a);r!==null&&(Hn(r,n,a),eo(r,n,a)),n={cache:Su()},t.payload=n;return}n=n.return}}function lx(t,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(t)?_m(n,a):(a=cu(t,n,a,r),a!==null&&(Hn(a,t,r),vm(a,n,r)))}function gm(t,n,a){var r=$n();ro(t,n,a,r)}function ro(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(t))_m(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(c.hasEagerState=!0,c.eagerState=A,Yn(A,g))return sl(t,n,c,0),Ve===null&&al(),!1}catch{}if(a=cu(t,n,c,r),a!==null)return Hn(a,t,r),vm(a,n,r),!0}return!1}function qu(t,n,a,r){if(r={lane:2,revertLane:Tf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(t)){if(n)throw Error(s(479))}else n=cu(t,a,r,2),n!==null&&Hn(n,t,2)}function Tl(t){var n=t.alternate;return t===le||n!==null&&n===le}function _m(t,n){$s=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}var oo={readContext:Sn,use:Ml,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};oo.useEffectEvent=Qe;var xm={readContext:Sn,use:Ml,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(gs){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(gs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=lx.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bu(t);var n=t.queue,a=gm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(t,n){var a=Nn();return ku(a,t,n)},useTransition:function(){var t=Bu(!1);return t=fm.bind(null,le,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Nn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ve&127)!==0||Hp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,nm(Vp.bind(null,r,f,t),[t]),r.flags|=2048,er(9,{destroy:void 0},Gp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=Ve.identifierPrefix;if(Se){var a=Di,r=wi;a=(r&~(1<<32-Lt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ex++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return Nn().memoizedState=ox.bind(null,le)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:Sn,use:Ml,useCallback:lm,useContext:Sn,useEffect:Gu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:yl,useRef:em,useState:function(){return yl(Qi)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=tn();return um(a,ze.memoizedState,t,n)},useTransition:function(){var t=yl(Qi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Bp,useId:pm,useHostTransitionStatus:Wu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=tn();return Wp(a,ze,t,n)},useMemoCache:Fu,useCacheRefresh:mm};Yu.useEffectEvent=im;var Sm={readContext:Sn,use:Ml,useCallback:lm,useContext:Sn,useEffect:Gu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:zu,useRef:em,useState:function(){return zu(Qi)},useDebugValue:Vu,useDeferredValue:function(t,n){var a=tn();return ze===null?ku(a,t,n):um(a,ze.memoizedState,t,n)},useTransition:function(){var t=zu(Qi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Bp,useId:pm,useHostTransitionStatus:Wu,useFormState:tm,useActionState:tm,useOptimistic:function(t,n){var a=tn();return ze!==null?Wp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:mm};Sm.useEffectEvent=im;function ju(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Da(r);c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,r),n!==null&&(Hn(n,t,r),eo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Da(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,r),n!==null&&(Hn(n,t,r),eo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(t,r,a),n!==null&&(Hn(n,t,a),eo(n,t,a))}};function Mm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(c,f):!0}function ym(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Zu.enqueueReplaceState(n,n.state,null)}function _s(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Em(t){il(t)}function bm(t){console.error(t)}function Tm(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Am(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function Rm(t){return t=Da(t),t.tag=3,t}function Cm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Am(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Am(n,a,r),typeof c!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function cx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?zl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),yf(t,r,c)),!1;case 22:return a.flags|=65536,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),yf(t,r,c)),!1}throw Error(s(435,a.tag))}return yf(t,r,c),zl(),!1}if(Se)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==mu&&(t=Error(s(422),{cause:r}),Kr(ii(t,a)))):(r!==mu&&(n=Error(s(423),{cause:r}),Kr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ii(r,a),c=Ku(t.stateNode,r,c),Au(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ii(f,a),go===null?go=[f]:go.push(f),Je!==4&&(Je=2),n===null)return!0;r=ii(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ku(a.stateNode,r,t),Au(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rm(c),Cm(c,t,a,r),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(s(461)),cn=!1;function Mn(t,n,a,r){n.child=t===null?Np(n,null,a,r):ms(n,t.child,a,r)}function wm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return fs(n),r=Nu(t,n,a,g,f,c),A=Lu(),t!==null&&!cn?(Ou(t,n,c),Ji(t,n,c)):(Se&&A&&hu(n),n.flags|=1,Mn(t,n,r,c),n.child)}function Dm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(t,n,f,r,c)):(t=ol(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!rf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(g,r)&&t.ref===n.ref)return Ji(t,n,c)}return n.flags|=1,t=qi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Um(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Yr(f,r)&&t.ref===n.ref)if(cn=!1,n.pendingProps=r=f,rf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Ji(t,n,c)}return Ju(t,n,a,r,c)}function Nm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Lm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Pp(n,f):Cu(),Fp(n);else return r=n.lanes=536870912,Lm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fl(n,f.cachePool),Pp(n,f),La(),n.memoizedState=null):(t!==null&&fl(n,null),Cu(),La());return Mn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lm(t,n,a,r,c){var f=yu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),Cu(),Fp(n),t!==null&&Ys(t,n,r,!0),n.childLanes=c,null}function Rl(t,n){return n=wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Om(t,n,a){return ms(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function ux(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Rl(n,r),n.lanes=536870912,lo(null,t);if(Du(n),(t=ke)?(t=qg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=_p(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Rl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Du(n),c)if(n.flags&256)n.flags&=-257,n=Om(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Ys(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(r=Ve,r!==null&&(g=qo(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,os(t,g),Hn(r,t,g),Qu;zl(),n=Om(t,n,a)}else t=f.treeContext,ke=li(g.nextSibling),xn=n,Se=!0,Aa=null,ri=!1,t!==null&&Sp(n,t),n=Rl(n,r),n.flags|=4096;return n}return t=qi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ju(t,n,a,r,c){return fs(n),a=Nu(t,n,a,r,void 0,c),r=Lu(),t!==null&&!cn?(Ou(t,n,c),Ji(t,n,c)):(Se&&r&&hu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Pm(t,n,a,r,c,f){return fs(n),n.updateQueue=null,a=zp(n,r,a,c),Ip(t),r=Lu(),t!==null&&!cn?(Ou(t,n,f),Ji(t,n,f)):(Se&&r&&hu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Fm(t,n,a,r,c){if(fs(n),n.stateNode===null){var f=ks,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},bu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):ks,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ju(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Zu.enqueueReplaceState(f,f.state,null),io(n,r,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,I=_s(a,A);f.props=I;var Q=f.context,dt=a.contextType;g=ks,typeof dt=="object"&&dt!==null&&(g=Sn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Q!==g)&&ym(n,f,r,g),wa=!1;var nt=n.memoizedState;f.state=nt,io(n,r,f,c),no(),Q=n.memoizedState,A||nt!==Q||wa?(typeof _t=="function"&&(ju(n,a,_t,r),Q=n.memoizedState),(I=wa||Mm(n,a,I,r,nt,Q,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Tu(t,n),g=n.memoizedProps,dt=_s(a,g),f.props=dt,_t=n.pendingProps,nt=f.context,Q=a.contextType,I=ks,typeof Q=="object"&&Q!==null&&(I=Sn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||nt!==I)&&ym(n,f,r,I),wa=!1,nt=n.memoizedState,f.state=nt,io(n,r,f,c),no();var ot=n.memoizedState;g!==_t||nt!==ot||wa||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof A=="function"&&(ju(n,a,A,r),ot=n.memoizedState),(dt=wa||Mm(n,a,dt,r,nt,ot,I)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=I,r=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Cl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ms(n,t.child,null,c),n.child=ms(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ji(t,n,c),t}function Im(t,n,a,r){return cs(),n.flags|=256,Mn(t,n,a,r),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(t){return{baseLanes:t,cachePool:Ap()}}function ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function zm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Na(n):La(),(t=ke)?(t=qg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=_p(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw Ra(n);return zf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(La(),c=n.mode,A=wl({mode:"hidden",children:A},c),r=ls(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=tf(a),r.childLanes=ef(t,g,a),n.memoizedState=$u,lo(null,r)):(Na(n),nf(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=af(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),A=r.fallback,c=n.mode,r=wl({mode:"visible",children:r.children},c),A=ls(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ms(n,t.child,null,a),r=n.child,r.memoizedState=tf(a),r.childLanes=ef(t,g,a),n.memoizedState=$u,n=lo(null,r));else if(Na(n),zf(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var Q=g.dgst;g=Q,r=Error(s(419)),r.stack="",r.digest=g,Kr({value:r,source:null,stack:null}),n=af(t,n,a)}else if(cn||Ys(t,n,a,!1),g=(a&t.childLanes)!==0,cn||g){if(g=Ve,g!==null&&(r=qo(g,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,os(t,r),Hn(g,t,r),Qu;If(A)||zl(),n=af(t,n,a)}else If(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,ke=li(A.nextSibling),xn=n,Se=!0,Aa=null,ri=!1,t!==null&&Sp(n,t),n=nf(n,r.children),n.flags|=4096);return n}return c?(La(),A=r.fallback,c=n.mode,I=t.child,Q=I.sibling,r=qi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,Q!==null?A=qi(Q,A):(A=ls(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,lo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=tf(a):(c=A.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Ap(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=ef(t,g,a),n.memoizedState=$u,lo(t.child,r)):(Na(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function nf(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function af(t,n,a){return ms(n,t.child,null,a),t=nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),vu(t.return,n,a)}function sf(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Hm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=$e.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,vt($e,g),Mn(t,n,r,a),r=Se?Zr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,a,n);else if(t.tag===19)Bm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}sf(n,!0,a,null,f,r);break;case"together":sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function fx(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Ca(n,on,t.memoizedState.cache),cs();break;case 27:case 5:Kt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(Na(n),t=Ji(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Hm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt($e,$e.current),r)break;return null;case 22:return n.lanes=0,Nm(t,n,a,n.pendingProps);case 24:Ca(n,on,t.memoizedState.cache)}return Ji(t,n,a)}function Gm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!rf(t,a)&&(n.flags&128)===0)return cn=!1,fx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Se&&(n.flags&1048576)!==0&&xp(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=hs(n.elementType),n.type=t,typeof t=="function")uu(t)?(r=_s(t,r),n.tag=1,n=Fm(null,n,t,r,a)):(n.tag=0,n=Ju(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===L){n.tag=11,n=wm(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=Dm(null,n,t,r,a);break t}}throw n=ct(t)||t,Error(s(306,n,""))}}return n;case 0:return Ju(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=_s(r,n.pendingProps),Fm(t,n,r,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(t,n),io(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ca(n,on,r),r!==f.cache&&xu(n,[on],a,!0),no(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Im(t,n,r,a);break t}else if(r!==c){c=ii(Error(s(424)),n),Kr(c),n=Im(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ke=li(t.firstChild),xn=n,Se=!0,Aa=null,ri=!0,a=Np(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),r===c){n=Ji(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Wl(et.current).createElement(a),r[an]=n,r[dn]=t,yn(r,a,t),X(r),n.stateNode=r):n.memoizedState=Jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Se&&(r=n.stateNode=Zg(n.type,n.pendingProps,et.current),xn=n,ri=!0,c=ke,Ga(n.type)?(Bf=c,ke=li(r.firstChild)):ke=c),Mn(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=ke)&&(r=Gx(r,n.type,n.pendingProps,ri),r!==null?(n.stateNode=r,xn=n,ke=li(r.firstChild),ri=!1,c=!0):c=!1),c||Ra(n)),Kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Of(c,f)?r=null:g!==null&&Of(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,nx,null,null,a),bo._currentValue=c),Cl(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=Vx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,xn=n,ke=null,t=!0):t=!1),t||Ra(n)),null;case 13:return zm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ms(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return wm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),Mn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,fs(n),c=Sn(c),r=r(c),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return Dm(t,n,n.type,n.pendingProps,a);case 15:return Um(t,n,n.type,n.pendingProps,a);case 19:return Hm(t,n,a);case 31:return ux(t,n,a);case 22:return Nm(t,n,a,n.pendingProps);case 24:return fs(n),r=Sn(on),t===null?(c=yu(),c===null&&(c=Ve,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},bu(n),Ca(n,on,c)):((t.lanes&a)!==0&&(Tu(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ca(n,on,r)):(r=f.cache,Ca(n,on,r),r!==c.cache&&xu(n,[on],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $i(t){t.flags|=4}function of(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(pg())t.flags|=8192;else throw ps=hl,Eu}else t.flags&=-16777217}function Vm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i0(n))if(pg())t.flags|=8192;else throw ps=hl,Eu}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,sr|=n)}function co(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function dx(t,n,a){var r=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Zi(on),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qs(n)?$i(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?($i(n),f!==null?(Xe(n),Vm(n,f)):(Xe(n),of(n,c,null,r,a))):f?f!==t.memoizedState?($i(n),Xe(n),Vm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&$i(n),Xe(n),of(n,c,t,r,a)),null;case 27:if($t(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&$i(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=Rt.current,qs(n)?Mp(n):(t=Zg(c,r,a),n.stateNode=t,$i(n))}return Xe(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&$i(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=Rt.current,qs(n))Mp(n);else{var g=Wl(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[an]=n,f[dn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&$i(n)}}return Xe(n),of(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&$i(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=et.current,qs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||Ra(n,!0)}else t=Wl(t).createTextNode(r),t[an]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=qs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[an]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=qs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Xe(n),null);case 4:return kt(),t===null&&wf(n.stateNode.containerInfo),Xe(n),null;case 10:return Zi(n.type),Xe(n),null;case 19:if(Y($e),r=n.memoizedState,r===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)co(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,co(r,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)gp(a,t),a=a.sibling;return vt($e,$e.current&1|2),Se&&Yi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&y()>Pl&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304)}else{if(!c)if(t=_l(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Xe(n),null}else 2*y()-r.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=y(),t.sibling=null,a=$e.current,vt($e,c?a&1|2:a&1),Se&&Yi(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return Kn(n),wu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Y(ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(on),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hx(t,n){switch(pu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zi(on),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y($e),null;case 4:return kt(),null;case 10:return Zi(n.type),null;case 22:case 23:return Kn(n),wu(),t!==null&&Y(ds),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zi(on),null;case 25:return null;default:return null}}function km(t,n){switch(pu(n),n.tag){case 3:Zi(on),kt();break;case 26:case 27:case 5:$t(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y($e);break;case 10:Zi(n.type);break;case 22:case 23:Kn(n),wu(),t!==null&&Y(ds);break;case 24:Zi(on)}}function uo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(A){Pe(n,n.return,A)}}function Oa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,c=n;var I=a,Q=A;try{Q()}catch(dt){Pe(c,I,dt)}}}r=r.next}while(r!==f)}}catch(dt){Pe(n,n.return,dt)}}function Xm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Op(n,a)}catch(r){Pe(t,t.return,r)}}}function Wm(t,n,a){a.props=_s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Pe(t,n,r)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Pe(t,n,c)}}function Ui(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function qm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function lf(t,n,a){try{var r=t.stateNode;Px(r,t.type,a,n),r[dn]=n}catch(c){Pe(t,t.return,c)}}function Ym(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ym(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(uf(t,n,a),t=t.sibling;t!==null;)uf(t,n,a),t=t.sibling}function Ul(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function jm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,r,a),n[an]=t,n[dn]=a}catch(f){Pe(t,t.return,f)}}var ta=!1,un=!1,ff=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function px(t,n){if(t=t.containerInfo,Nf=Jl,t=op(t),iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,I=-1,Q=0,dt=0,_t=t,nt=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(A=g+c),_t!==f||r!==0&&_t.nodeType!==3||(I=g+r),_t.nodeType===3&&(g+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)nt=_t,_t=ot;for(;;){if(_t===t)break e;if(nt===a&&++Q===c&&(A=g),nt===f&&++dt===r&&(I=g),(ot=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=ot}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:t,selectionRange:a},Jl=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=_s(a.type,c);t=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Pe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Km(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:na(t,a),r&4&&uo(5,a);break;case 1:if(na(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Pe(a,a.return,g)}else{var c=_s(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Pe(a,a.return,g)}}r&64&&Xm(a),r&512&&fo(a,a.return);break;case 3:if(na(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(t,n)}catch(g){Pe(a,a.return,g)}}break;case 27:n===null&&r&4&&jm(a);case 26:case 5:na(t,a),n===null&&r&4&&qm(a),r&512&&fo(a,a.return);break;case 12:na(t,a);break;case 31:na(t,a),r&4&&$m(t,a);break;case 13:na(t,a),r&4&&tg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ex.bind(null,a),kx(t,a))));break;case 22:if(r=a.memoizedState!==null||ta,!r){n=n!==null&&n.memoizedState!==null||un,c=ta;var f=un;ta=r,(un=n)&&!f?ia(t,a,(a.subtreeFlags&8772)!==0):na(t,a),ta=c,un=f}break;case 30:break;default:na(t,a)}}function Qm(t){var n=t.alternate;n!==null&&(t.alternate=null,Qm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Br(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function ea(t,n,a){for(a=a.child;a!==null;)Jm(t,n,a),a=a.sibling}function Jm(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:un||Ui(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ui(a,n);var r=je,c=Fn;Ga(a.type)&&(je=a.stateNode,Fn=!1),ea(t,n,a),Mo(a.stateNode),je=r,Fn=c;break;case 5:un||Ui(a,n);case 6:if(r=je,c=Fn,je=null,ea(t,n,a),je=r,Fn=c,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,Xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hr(t)):Xg(je,a.stateNode));break;case 4:r=je,c=Fn,je=a.stateNode.containerInfo,Fn=!0,ea(t,n,a),je=r,Fn=c;break;case 0:case 11:case 14:case 15:Oa(2,a,n),un||Oa(4,a,n),ea(t,n,a);break;case 1:un||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Wm(a,n,r)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,ea(t,n,a),un=r;break;default:ea(t,n,a)}}function $m(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hr(t)}catch(a){Pe(n,n.return,a)}}}function tg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hr(t)}catch(a){Pe(n,n.return,a)}}function mx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Zm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Zm),n;default:throw Error(s(435,t.tag))}}function Nl(t,n){var a=mx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=bx.bind(null,t,r);r.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){je=A.stateNode,Fn=!1;break t}break;case 5:je=A.stateNode,Fn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(je===null)throw Error(s(160));Jm(f,g,c),je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)eg(n,t),n=n.sibling}var xi=null;function eg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),zn(t),r&4&&(Oa(3,t,t.return),uo(3,t),Oa(5,t,t.return));break;case 1:In(n,t),zn(t),r&512&&(un||a===null||Ui(a,a.return)),r&64&&ta&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=xi;if(In(n,t),zn(t),r&512&&(un||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ns]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,r,a),f[an]=t,X(f),r=f;break t;case"link":var g=e0("link","href",c).get(r+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=e0("meta","content",c).get(r+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=t,X(f),r=f}t.stateNode=r}else n0(c,t.type,t.stateNode);else t.stateNode=t0(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?n0(c,t.type,t.stateNode):t0(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),zn(t),r&512&&(un||a===null||Ui(a,a.return)),a!==null&&r&4&&lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),zn(t),r&512&&(un||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{Un(c,"")}catch(Gt){Pe(t,t.return,Gt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,lf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(ff=!0);break;case 6:if(In(n,t),zn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Gt){Pe(t,t.return,Gt)}}break;case 3:if(jl=null,c=xi,xi=ql(n.containerInfo),In(n,t),xi=c,zn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(Gt){Pe(t,t.return,Gt)}ff&&(ff=!1,ng(t));break;case 4:r=xi,xi=ql(t.stateNode.containerInfo),In(n,t),zn(t),xi=r;break;case 12:In(n,t),zn(t);break;case 31:In(n,t),zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Nl(t,r)));break;case 13:In(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=y()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Nl(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=ta,dt=un;if(ta=Q||c,un=dt||I,In(n,t),un=dt,ta=Q,zn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ta||un||vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=I.stateNode;var _t=I.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){Pe(I,I.return,Gt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Gt){Pe(I,I.return,Gt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;c?Wg(ot,!0):Wg(I.stateNode,!1)}catch(Gt){Pe(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Nl(t,a))));break;case 19:In(n,t),zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Nl(t,r)));break;case 30:break;case 21:break;default:In(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Ym(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(t);Ul(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Un(g,""),a.flags&=-33);var A=cf(t);Ul(t,A,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=cf(t);uf(t,Q,I);break;default:throw Error(s(161))}}catch(dt){Pe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Km(t,n.alternate,n),n=n.sibling}function vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vs(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wm(n,n.return,a),vs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}t=t.sibling}}function ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ia(c,f,a),uo(4,f);break;case 1:if(ia(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pe(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Lp(I[c],A)}catch(Q){Pe(r,r.return,Q)}}a&&g&64&&Xm(f),fo(f,f.return);break;case 27:jm(f);case 26:case 5:ia(c,f,a),a&&r===null&&g&4&&qm(f),fo(f,f.return);break;case 12:ia(c,f,a);break;case 31:ia(c,f,a),a&&g&4&&$m(c,f);break;case 13:ia(c,f,a),a&&g&4&&tg(c,f);break;case 22:f.memoizedState===null&&ia(c,f,a),fo(f,f.return);break;case 30:break;default:ia(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qr(a))}function hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,a,r),n=n.sibling}function ig(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),c&2048&&uo(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t)));break;case 12:if(c&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Pe(n,n.return,I)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):ho(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,nr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(g,n);break;case 24:Si(t,n,a,r),c&2048&&hf(n.alternate,n);break;default:Si(t,n,a,r)}}function nr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,I=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:nr(f,g,A,I,c),uo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?nr(f,g,A,I,c):ho(f,g):(dt._visibility|=2,nr(f,g,A,I,c)),c&&Q&2048&&df(g.alternate,g);break;case 24:nr(f,g,A,I,c),c&&Q&2048&&hf(g.alternate,g);break;default:nr(f,g,A,I,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:ho(a,r),c&2048&&df(r.alternate,r);break;case 24:ho(a,r),c&2048&&hf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function ir(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)ag(t,n,a),t=t.sibling}function ag(t,n,a){switch(t.tag){case 26:ir(t,n,a),t.flags&po&&t.memoizedState!==null&&eS(a,xi,t.memoizedState,t.memoizedProps);break;case 5:ir(t,n,a);break;case 3:case 4:var r=xi;xi=ql(t.stateNode.containerInfo),ir(t,n,a),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,ir(t,n,a),po=r):ir(t,n,a));break;default:ir(t,n,a)}}function sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,og(r,t)}sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rg(t),t=t.sibling}function rg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):mo(t);break;default:mo(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,og(r,t)}sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function og(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=t;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Qm(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var gx={getCacheForType:function(t){var n=Sn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(on).controller.signal}},_x=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,me=null,ve=0,Oe=0,Qn=null,Pa=!1,ar=!1,pf=!1,aa=0,Je=0,Fa=0,xs=0,mf=0,Jn=0,sr=0,go=null,Bn=null,gf=!1,Ol=0,lg=0,Pl=1/0,Fl=null,Ia=null,pn=0,za=null,rr=null,sa=0,_f=0,vf=null,cg=null,_o=0,xf=null;function $n(){return(De&2)!==0&&ve!==0?ve&-ve:N.T!==null?Tf():Ci()}function ug(){if(Jn===0)if((ve&536870912)===0||Se){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Hn(t,n,a){(t===Ve&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(or(t,0),Ba(t,ve,Jn,!1)),Cn(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(xs|=a),Je===4&&Ba(t,ve,Jn,!1)),Ni(t))}function fg(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=r?Sx(t,n):Mf(t,n,!0),f=r;do{if(c===0){ar&&!r&&Ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!vx(a)){c=Mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;c=go;var I=A.current.memoizedState.isDehydrated;if(I&&(or(A,g).flags|=256),g=Mf(A,g,!1),g!==2){if(pf&&!I){A.errorRecoveryDisabledLanes|=f,xs|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){or(t,0),Ba(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ba(r,n,Jn,!Pa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ol+300-y(),10<c)){if(Ba(r,n,Jn,!Pa),ut(r,0,!0)!==0)break t;sa=n,r.timeoutHandle=Vg(dg.bind(null,r,a,Bn,Fl,gf,n,Jn,xs,sr,Pa,f,"Throttled",-0,0),c);break t}dg(r,a,Bn,Fl,gf,n,Jn,xs,sr,Pa,f,null,-0,0)}}break}while(!0);Ni(t)}function dg(t,n,a,r,c,f,g,A,I,Q,dt,_t,nt,ot){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ag(n,f,_t);var Gt=(f&62914560)===f?Ol-y():(f&4194048)===f?lg-y():0;if(Gt=nS(_t,Gt),Gt!==null){sa=f,t.cancelPendingCommit=Gt(Sg.bind(null,t,n,f,a,r,c,g,A,I,dt,_t,null,nt,ot)),Ba(t,f,g,!Q);return}}Sg(t,n,f,a,r,c,g,A,I)}function vx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,a,r){n&=~mf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&zr(t,a,n)}function Il(){return(De&6)===0?(vo(0),!1):!0}function Sf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,ji=us=null,Pu(t),Qs=null,$r=0,t=me;for(;t!==null;)km(t.alternate,t),t=t.return;me=null}}function or(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Sf(),Ve=t,me=a=qi(t.current,null),ve=n,Oe=0,Qn=null,Pa=!1,ar=Bt(t,n),pf=!1,sr=Jn=mf=xs=Fa=Je=0,Bn=go=null,gf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Lt(r),f=1<<c;n|=t[c],r&=~f}return aa=n,al(),a}function hg(t,n){le=null,N.H=oo,n===Ks||n===dl?(n=wp(),Oe=3):n===Eu?(n=wp(),Oe=4):Oe=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&(Je=1,Al(t,ii(n,t.current)))}function pg(){var t=Zn.current;return t===null?!0:(ve&4194048)===ve?oi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===oi:!1}function mg(){var t=N.H;return N.H=oo,t===null?oo:t}function gg(){var t=N.A;return N.A=gx,t}function zl(){Je=4,Pa||(ve&4194048)!==ve&&Zn.current!==null||(ar=!0),(Fa&134217727)===0&&(xs&134217727)===0||Ve===null||Ba(Ve,ve,Jn,!1)}function Mf(t,n,a){var r=De;De|=2;var c=mg(),f=gg();(Ve!==t||ve!==n)&&(Fl=null,or(t,n)),n=!1;var g=Je;t:do try{if(Oe!==0&&me!==null){var A=me,I=Qn;switch(Oe){case 8:Sf(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Oe;if(Oe=0,Qn=null,lr(t,A,I,Q),a&&ar){g=0;break t}break;default:Q=Oe,Oe=0,Qn=null,lr(t,A,I,Q)}}xx(),g=Je;break}catch(dt){hg(t,dt)}while(!0);return n&&t.shellSuspendCounter++,ji=us=null,De=r,N.H=c,N.A=f,me===null&&(Ve=null,ve=0,al()),g}function xx(){for(;me!==null;)_g(me)}function Sx(t,n){var a=De;De|=2;var r=mg(),c=gg();Ve!==t||ve!==n?(Fl=null,Pl=y()+500,or(t,n)):ar=Bt(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=Qn;e:switch(Oe){case 1:Oe=0,Qn=null,lr(t,n,f,1);break;case 2:case 9:if(Rp(f)){Oe=0,Qn=null,vg(n);break}n=function(){Oe!==2&&Oe!==9||Ve!==t||(Oe=7),Ni(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Rp(f)?(Oe=0,Qn=null,vg(n)):(Oe=0,Qn=null,lr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?i0(g):A.stateNode.complete){Oe=0,Qn=null;var I=A.sibling;if(I!==null)me=I;else{var Q=A.return;Q!==null?(me=Q,Bl(Q)):me=null}break e}}Oe=0,Qn=null,lr(t,n,f,5);break;case 6:Oe=0,Qn=null,lr(t,n,f,6);break;case 8:Sf(),Je=6;break t;default:throw Error(s(462))}}Mx();break}catch(dt){hg(t,dt)}while(!0);return ji=us=null,N.H=r,N.A=c,De=a,me!==null?0:(Ve=null,ve=0,al(),Je)}function Mx(){for(;me!==null&&!qt();)_g(me)}function _g(t){var n=Gm(t.alternate,t,aa);t.memoizedProps=t.pendingProps,n===null?Bl(t):me=n}function vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Pm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Pm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Pu(n);default:km(a,n),n=me=gp(n,aa),n=Gm(a,n,aa)}t.memoizedProps=t.pendingProps,n===null?Bl(t):me=n}function lr(t,n,a,r){ji=us=null,Pu(n),Qs=null,$r=0;var c=n.return;try{if(cx(t,c,n,a,ve)){Je=1,Al(t,ii(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,Al(t,ii(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:ar||(ve&536870912)!==0?t=!1:(Pa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),xg(n,t)):Bl(n)}function Bl(t){var n=t;do{if((n.flags&32768)!==0){xg(n,Pa);return}t=n.return;var a=dx(n.alternate,n,aa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function xg(t,n){do{var a=hx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function Sg(t,n,a,r,c,f,g,A,I){t.cancelPendingCommit=null;do Hl();while(pn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=lu,pi(t,a,f,g,A,I),t===Ve&&(me=Ve=null,ve=0),rr=n,za=t,sa=a,_f=f,vf=c,cg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Tx(ft,function(){return Tg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=F.p,F.p=2,g=De,De|=4;try{px(t,n,a)}finally{De=g,F.p=c,N.T=r}}pn=1,Mg(),yg(),Eg()}}function Mg(){if(pn===1){pn=0;var t=za,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=F.p;F.p=2;var c=De;De|=4;try{eg(n,t);var f=Lf,g=op(t.containerInfo),A=f.focusedElem,I=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&rp(A.ownerDocument.documentElement,A)){if(I!==null&&iu(A)){var Q=I.start,dt=I.end;if(dt===void 0&&(dt=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(dt,A.value.length);else{var _t=A.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Gt=A.textContent.length,Jt=Math.min(I.start,Gt),He=I.end===void 0?Jt:Math.min(I.end,Gt);!ot.extend&&Jt>He&&(g=He,He=Jt,Jt=g);var j=sp(A,Jt),V=sp(A,He);if(j&&V&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var K=_t.createRange();K.setStart(j.node,j.offset),ot.removeAllRanges(),Jt>He?(ot.addRange(K),ot.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),ot.addRange(K))}}}}for(_t=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var gt=_t[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Jl=!!Nf,Lf=Nf=null}finally{De=c,F.p=r,N.T=a}}t.current=n,pn=2}}function yg(){if(pn===2){pn=0;var t=za,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=F.p;F.p=2;var c=De;De|=4;try{Km(t,n.alternate,n)}finally{De=c,F.p=r,N.T=a}}pn=3}}function Eg(){if(pn===4||pn===3){pn=0,U();var t=za,n=rr,a=sa,r=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,rr=za=null,bg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ia=null),Os(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=F.p,F.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var A=r[g];f(A.value,{componentStack:A.stack})}}finally{N.T=n,F.p=c}}(sa&3)!==0&&Hl(),Ni(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===xf?_o++:(_o=0,xf=t):_o=0,vo(0)}}function bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qr(n)))}function Hl(){return Mg(),yg(),Eg(),Tg()}function Tg(){if(pn!==5)return!1;var t=za,n=_f;_f=0;var a=Os(sa),r=N.T,c=F.p;try{F.p=32>a?32:a,N.T=null,a=vf,vf=null;var f=za,g=sa;if(pn=0,rr=za=null,sa=0,(De&6)!==0)throw Error(s(331));var A=De;if(De|=4,rg(f.current),ig(f,f.current,g,a),De=A,vo(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{F.p=c,N.T=r,bg(t,n)}}function Ag(t,n,a){n=ii(a,n),n=Ku(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Cn(t,2),Ni(t))}function Pe(t,n,a){if(t.tag===3)Ag(t,t,a);else for(;n!==null;){if(n.tag===3){Ag(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){t=ii(a,t),a=Rm(2),r=Ua(n,a,2),r!==null&&(Cm(a,r,n,t),Cn(r,2),Ni(r));break}}n=n.return}}function yf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(pf=!0,c.add(a),t=yx.bind(null,t,n,a),n.then(t,t))}function yx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>y()-Ol?(De&2)===0&&or(t,0):mf|=a,sr===ve&&(sr=0)),Ni(t)}function Rg(t,n){n===0&&(n=Le()),t=os(t,n),t!==null&&(Cn(t,n),Ni(t))}function Ex(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Rg(t,a)}function bx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Rg(t,a)}function Tx(t,n){return ye(t,n)}var Gl=null,cr=null,Ef=!1,Vl=!1,bf=!1,Ha=0;function Ni(t){t!==cr&&t.next===null&&(cr===null?Gl=cr=t:cr=cr.next=t),Vl=!0,Ef||(Ef=!0,Rx())}function vo(t,n){if(!bf&&Vl){bf=!0;do for(var a=!1,r=Gl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Lt(42|t)+1)-1,f&=c&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ug(r,f))}else f=ve,f=ut(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,Ug(r,f));r=r.next}while(a);bf=!1}}function Ax(){Cg()}function Cg(){Vl=Ef=!1;var t=0;Ha!==0&&Ix()&&(t=Ha);for(var n=y(),a=null,r=Gl;r!==null;){var c=r.next,f=wg(r,n);f===0?(r.next=null,a===null?Gl=c:a.next=c,c===null&&(cr=a)):(a=r,(t!==0||(f&3)!==0)&&(Vl=!0)),r=c}pn!==0&&pn!==5||vo(t),Ha!==0&&(Ha=0)}function wg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Lt(f),A=1<<g,I=c[g];I===-1?((A&a)===0||(A&r)!==0)&&(c[g]=ne(A,n)):I<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=ve,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ue(r),Os(a)){case 2:case 8:a=St;break;case 32:a=ft;break;case 268435456:a=wt;break;default:a=ft}return r=Dg.bind(null,t),a=ye(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ue(r),t.callbackPriority=2,t.callbackNode=null,2}function Dg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var r=ve;return r=ut(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(fg(t,r,n),wg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Dg.bind(null,t):null)}function Ug(t,n){if(Hl())return null;fg(t,n,!0)}function Rx(){Bx(function(){(De&6)!==0?ye(pt,Ax):Cg()})}function Tf(){if(Ha===0){var t=js;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ha=t}return Ha}function Ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Cx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ng((c[dn]||null).action),g=r.submitter;g&&(n=(n=g[dn]||null)?Ng(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new tl("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var I=g?Lg(c,g):new FormData(c);Xu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=g?Lg(c,g):new FormData(c),Xu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],wx=Rf.toLowerCase(),Dx=Rf[0].toUpperCase()+Rf.slice(1);vi(wx,"on"+Dx)}vi(up,"onAnimationEnd"),vi(fp,"onAnimationIteration"),vi(dp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(qv,"onTransitionRun"),vi(Yv,"onTransitionStart"),vi(jv,"onTransitionCancel"),vi(hp,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(dt){il(dt)}c.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(A=r[g],I=A.instance,Q=A.currentTarget,A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(dt){il(dt)}c.currentTarget=null,f=I}}}}function ge(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var r=t+"__bubble";a.has(r)||(Pg(n,t,2,!1),a.add(r))}function Cf(t,n,a){var r=0;n&&(r|=4),Pg(a,t,r,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[kl]){t[kl]=!0,rt.forEach(function(a){a!=="selectionchange"&&(Ux.has(a)||Cf(a,!1,t),Cf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,Cf("selectionchange",!1,n))}}function Pg(t,n,a,r){switch(u0(n)){case 2:var c=sS;break;case 8:c=rS;break;default:c=Xf}a=c.bind(null,n,a,t),c=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Df(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===c)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;A!==null;){if(g=ya(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue t}A=A.parentNode}}r=r.return}Hh(function(){var Q=f,dt=qc(a),_t=[];t:{var nt=pp.get(t);if(nt!==void 0){var ot=tl,Gt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ot=bv;break;case"focusin":Gt="focus",ot=Jc;break;case"focusout":Gt="blur",ot=Jc;break;case"beforeblur":case"afterblur":ot=Jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Rv;break;case up:case fp:case dp:ot=mv;break;case hp:ot=wv;break;case"scroll":case"scrollend":ot=uv;break;case"wheel":ot=Uv;break;case"copy":case"cut":case"paste":ot=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Wh;break;case"toggle":case"beforetoggle":ot=Lv}var Jt=(n&4)!==0,He=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=Q,K;V!==null;){var gt=V;if(K=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||K===null||j===null||(gt=Hr(V,j),gt!=null&&Jt.push(So(V,gt,K))),He)break;V=V.return}0<Jt.length&&(nt=new ot(nt,Gt,null,a,dt),_t.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Wc&&(Gt=a.relatedTarget||a.fromElement)&&(ya(Gt)||Gt[Vi]))break t;if((ot||nt)&&(nt=dt.window===dt?dt:(nt=dt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=Q,Gt=Gt?ya(Gt):null,Gt!==null&&(He=u(Gt),Jt=Gt.tag,Gt!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(ot=null,Gt=Q),ot!==Gt)){if(Jt=kh,gt="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Wh,gt="onPointerLeave",j="onPointerEnter",V="pointer"),He=ot==null?nt:is(ot),K=Gt==null?nt:is(Gt),nt=new Jt(gt,V+"leave",ot,a,dt),nt.target=He,nt.relatedTarget=K,gt=null,ya(dt)===Q&&(Jt=new Jt(j,V+"enter",Gt,a,dt),Jt.target=K,Jt.relatedTarget=He,gt=Jt),He=gt,ot&&Gt)e:{for(Jt=Nx,j=ot,V=Gt,K=0,gt=j;gt;gt=Jt(gt))K++;gt=0;for(var Qt=V;Qt;Qt=Jt(Qt))gt++;for(;0<K-gt;)j=Jt(j),K--;for(;0<gt-K;)V=Jt(V),gt--;for(;K--;){if(j===V||V!==null&&j===V.alternate){Jt=j;break e}j=Jt(j),V=Jt(V)}Jt=null}else Jt=null;ot!==null&&Fg(_t,nt,ot,Jt,!1),Gt!==null&&He!==null&&Fg(_t,He,Gt,Jt,!0)}}t:{if(nt=Q?is(Q):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ae=$h;else if(Qh(nt))if(tp)Ae=kv;else{Ae=Gv;var Yt=Hv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?Q&&Fs(Q.elementType)&&(Ae=$h):Ae=Vv;if(Ae&&(Ae=Ae(t,Q))){Jh(_t,Ae,a,dt);break t}Yt&&Yt(t,nt,Q),t==="focusout"&&Q&&nt.type==="number"&&Q.memoizedProps.value!=null&&gi(nt,"number",nt.value)}switch(Yt=Q?is(Q):window,t){case"focusin":(Qh(Yt)||Yt.contentEditable==="true")&&(Hs=Yt,au=Q,jr=null);break;case"focusout":jr=au=Hs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,lp(_t,a,dt);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":lp(_t,a,dt)}var fe;if(tu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Bs?Zh(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(qh&&a.locale!=="ko"&&(Bs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Bs&&(fe=Gh()):(ba=dt,Zc="value"in ba?ba.value:ba.textContent,Bs=!0)),Yt=Xl(Q,xe),0<Yt.length&&(xe=new Xh(xe,t,null,a,dt),_t.push({event:xe,listeners:Yt}),fe?xe.data=fe:(fe=Kh(a),fe!==null&&(xe.data=fe)))),(fe=Pv?Fv(t,a):Iv(t,a))&&(xe=Xl(Q,"onBeforeInput"),0<xe.length&&(Yt=new Xh("onBeforeInput","beforeinput",null,a,dt),_t.push({event:Yt,listeners:xe}),Yt.data=fe)),Cx(_t,t,Q,a,dt)}Og(_t,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hr(t,a),c!=null&&r.unshift(So(t,c,f)),c=Hr(t,n),c!=null&&r.push(So(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Nx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fg(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var A=a,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,c?(Q=Hr(a,f),Q!=null&&g.unshift(So(a,Q,I))):c||(Q=Hr(a,f),Q!=null&&g.push(So(a,Q,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Lx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(Lx,`
`).replace(Ox,"")}function zg(t,n){return n=Ig(n),Ig(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Un(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Un(t,""+r);break;case"className":se(t,"class",r);break;case"tabIndex":se(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":se(t,a,r);break;case"style":ki(t,r,f);break;case"data":if(n!=="object"){se(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ko(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ko(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lv.get(a)||a,ee(t,a,r))}}function Uf(t,n,a,r,c,f){switch(a){case"style":ki(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Un(t,r):(typeof r=="number"||typeof r=="bigint")&&Un(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,g,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=g=c=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":g=dt;break;case"checked":I=dt;break;case"defaultChecked":Q=dt;break;case"value":f=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Be(t,n,r,dt,a,null)}}Wn(t,f,A,I,Q,g,c,!1);return;case"select":ge("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:Be(t,n,c,A,a,null)}n=f,a=g,t.multiple=!!r,n!=null?qn(t,!!r,n,!1):a!=null&&qn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Be(t,n,g,A,a,null)}sn(t,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,I,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<xo.length;r++)ge(xo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,Q,r,a,null)}return;default:if(Fs(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Uf(t,n,dt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Be(t,n,A,r,a,null))}function Px(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,A=null,I=null,Q=null,dt=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=_t;default:r.hasOwnProperty(ot)||Be(t,n,ot,null,r,_t)}}for(var nt in r){var ot=r[nt];if(_t=a[nt],r.hasOwnProperty(nt)&&(ot!=null||_t!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":Q=ot;break;case"defaultChecked":dt=ot;break;case"value":g=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==_t&&Be(t,n,nt,ot,r,_t)}}Dn(t,g,A,I,Q,dt,f,c);return;case"select":ot=g=A=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==I&&Be(t,n,c,f,r,I)}n=A,a=g,r=ot,nt!=null?qn(t,!!a,nt,!1):!!r!=!!a&&(n!=null?qn(t,!!a,n,!0):qn(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(t,n,A,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,g,c,r,f)}Ne(t,nt,ot);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Be(t,n,Gt,null,r,nt));for(I in r)nt=r[I],ot=a[I],r.hasOwnProperty(I)&&nt!==ot&&(nt!=null||ot!=null)&&(I==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Be(t,n,I,nt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!r.hasOwnProperty(Jt)&&Be(t,n,Jt,null,r,nt);for(Q in r)if(nt=r[Q],ot=a[Q],r.hasOwnProperty(Q)&&nt!==ot&&(nt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Be(t,n,Q,nt,r,ot)}return;default:if(Fs(n)){for(var He in a)nt=a[He],a.hasOwnProperty(He)&&nt!==void 0&&!r.hasOwnProperty(He)&&Uf(t,n,He,void 0,r,nt);for(dt in r)nt=r[dt],ot=a[dt],!r.hasOwnProperty(dt)||nt===ot||nt===void 0&&ot===void 0||Uf(t,n,dt,nt,r,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!r.hasOwnProperty(j)&&Be(t,n,j,null,r,nt);for(_t in r)nt=r[_t],ot=a[_t],!r.hasOwnProperty(_t)||nt===ot||nt==null&&ot==null||Be(t,n,_t,nt,r,ot)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,A=c.duration;if(f&&A&&Bg(g)){for(g=0,A=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>A)break;var dt=I.transferSize,_t=I.initiatorType;dt&&Bg(_t)&&(I=I.responseEnd,g+=dt*(I<A?1:(A-Q)/(I-Q)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Lf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Of(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Ix(){var t=window.event;return t&&t.type==="popstate"?t===Pf?!1:(Pf=t,!0):(Pf=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(Hx)}:Vg;function Hx(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function Xg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),hr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[ns]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);hr(n)}function Wg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Br(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Gx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ns])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Vx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function qg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function If(t){return t.data==="$?"||t.data==="$~"}function zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Bf=null;function Yg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Zg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Br(t)}var ci=new Map,Kg=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=F.d;F.d={f:Xx,r:Wx,D:qx,C:Yx,L:jx,m:Zx,X:Qx,S:Kx,M:Jx};function Xx(){var t=ra.f(),n=Il();return t||n}function Wx(t){var n=Ea(t);n!==null&&n.tag===5&&n.type==="form"?hm(n):ra.r(t)}var ur=typeof document>"u"?null:document;function Qg(t,n,a){var r=ur;if(r&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Kg.has(c)||(Kg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),yn(n,"link",t),X(n),r.head.appendChild(n)))}}function qx(t){ra.D(t),Qg("dns-prefetch",t,null)}function Yx(t,n){ra.C(t,n),Qg("preconnect",t,n)}function jx(t,n,a){ra.L(t,n,a);var r=ur;if(r&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=fr(t);break;case"script":f=dr(t)}ci.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(yo(f))||n==="script"&&r.querySelector(Eo(f))||(n=r.createElement("link"),yn(n,"link",t),X(n),r.head.appendChild(n)))}}function Zx(t,n){ra.m(t,n);var a=ur;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(t)}if(!ci.has(f)&&(t=x({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}r=a.createElement("link"),yn(r,"link",t),X(r),a.head.appendChild(r)}}}function Kx(t,n,a){ra.S(t,n,a);var r=ur;if(r&&t){var c=R(r).hoistableStyles,f=fr(t);n=n||"default";var g=c.get(f);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(yo(f)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Hf(t,a);var I=g=r.createElement("link");X(I),yn(I,"link",t),I._p=new Promise(function(Q,dt){I.onload=Q,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Yl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},c.set(f,g)}}}function Qx(t,n){ra.X(t,n);var a=ur;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(t=x({src:t,async:!0},n),(n=ci.get(c))&&Gf(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Jx(t,n){ra.M(t,n);var a=ur;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(Eo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Gf(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Jg(t,n,a,r){var c=(c=et.current)?ql(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=R(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fr(a.href);var f=R(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(yo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||$x(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=R(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function fr(t){return'href="'+ie(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function $g(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function $x(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),yn(n,"link",a),X(n),t.head.appendChild(n))}function dr(t){return'[src="'+ie(t)+'"]'}function Eo(t){return"script[async]"+t}function t0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,X(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),X(r),yn(r,"style",c),Yl(r,a.precedence,t),n.instance=r;case"stylesheet":c=fr(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,X(f),f;r=$g(a),(c=ci.get(c))&&Hf(r,c),f=(t.ownerDocument||t).createElement("link"),X(f);var g=f;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),yn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=dr(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,X(c),c):(r=a,(c=ci.get(f))&&(r=x({},a),Gf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),X(c),yn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,t));return n.instance}function Yl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function e0(t,n,a){if(jl===null){var r=new Map,c=jl=new Map;c.set(a,r)}else c=jl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ns]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(f):r.set(g,[f])}}return r}function n0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=fr(r.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,r=$g(r),(c=ci.get(c))&&Hf(r,c),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),yn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function nS(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Vf===0&&(Vf=62500*Fx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Vf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(iS,t),Kl=null,Zl.call(t))}function iS(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var r=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function aS(t,n,a,r,c,f,g,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function a0(t,n,a,r,c,f,g,A,I,Q,dt,_t){return t=new aS(t,n,a,g,I,Q,dt,_t,A),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},bu(f),t}function s0(t){return t?(t=ks,t):ks}function r0(t,n,a,r,c,f){c=s0(c),r.context===null?r.context=c:r.pendingContext=c,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(t,r,n),a!==null&&(Hn(a,t,n),eo(a,t,n))}function o0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){o0(t,n),(t=t.alternate)&&o0(t,n)}function l0(t){if(t.tag===13||t.tag===31){var n=os(t,67108864);n!==null&&Hn(n,t,67108864),kf(t,67108864)}}function c0(t){if(t.tag===13||t.tag===31){var n=$n();n=Ls(n);var a=os(t,n);a!==null&&Hn(a,t,n),kf(t,n)}}var Jl=!0;function sS(t,n,a,r){var c=N.T;N.T=null;var f=F.p;try{F.p=2,Xf(t,n,a,r)}finally{F.p=f,N.T=c}}function rS(t,n,a,r){var c=N.T;N.T=null;var f=F.p;try{F.p=8,Xf(t,n,a,r)}finally{F.p=f,N.T=c}}function Xf(t,n,a,r){if(Jl){var c=Wf(r);if(c===null)Df(t,n,r,$l,a),f0(t,r);else if(lS(c,t,n,a,r))r.stopPropagation();else if(f0(t,r),n&4&&-1<oS.indexOf(t)){for(;c!==null;){var f=Ea(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-Lt(g);A.entanglements[1]|=I,g&=~I}Ni(f),(De&6)===0&&(Pl=y()+500,vo(0))}}break;case 31:case 13:A=os(f,2),A!==null&&Hn(A,f,2),Il(),kf(f,2)}if(f=Wf(r),f===null&&Df(t,n,r,$l,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Df(t,n,r,null,a)}}function Wf(t){return t=qc(t),qf(t)}var $l=null;function qf(t){if($l=null,t=ya(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function u0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case St:return 8;case ft:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Yf=!1,Va=null,ka=null,Xa=null,To=new Map,Ao=new Map,Wa=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ea(n),n!==null&&l0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function lS(t,n,a,r,c){switch(n){case"focusin":return Va=Ro(Va,t,n,a,r,c),!0;case"dragenter":return ka=Ro(ka,t,n,a,r,c),!0;case"mouseover":return Xa=Ro(Xa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,r,c)),!0}return!1}function d0(t){var n=ya(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ps(t.priority,function(){c0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ps(t.priority,function(){c0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Wc=r,a.target.dispatchEvent(r),Wc=null}else return n=Ea(a),n!==null&&l0(n),t.blockedOn=a,!1;n.shift()}return!0}function h0(t,n,a){tc(t)&&a.delete(n)}function cS(){Yf=!1,Va!==null&&tc(Va)&&(Va=null),ka!==null&&tc(ka)&&(ka=null),Xa!==null&&tc(Xa)&&(Xa=null),To.forEach(h0),Ao.forEach(h0)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cS)))}var nc=null;function p0(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(qf(r||a)===null)continue;break}var f=Ea(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function hr(t){function n(I){return ec(I,t)}Va!==null&&ec(Va,t),ka!==null&&ec(ka,t),Xa!==null&&ec(Xa,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)d0(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[dn]||null;if(typeof f=="function")g||p0(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[dn]||null)A=g.formAction;else if(qf(c)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),p0(a)}}}function m0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function jf(t){this._internalRoot=t}ic.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();r0(a,r,t,n,null,null)},ic.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r0(t.current,2,null,t,null,null),Il(),n[Vi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ci();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&d0(t)}};var g0=e.version;if(g0!=="19.2.4")throw Error(s(527,g0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var uS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Et=ac.inject(uS),Mt=ac}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Em,f=bm,g=Tm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=a0(t,1,!1,null,null,a,r,null,c,f,g,m0),t[Vi]=n.current,wf(t),new jf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Em,g=bm,A=Tm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=a0(t,1,!0,n,a??null,r,c,I,f,g,A,m0),n.context=s0(null),a=n.current,r=$n(),r=Ls(r),c=Da(r),c.callback=null,Ua(a,c,r),a=r,n.current.lanes=a,Cn(n,a),Ni(n),t[Vi]=n.current,wf(t),new ic(n)},wo.version="19.2.4",wo}var A0;function SS(){if(A0)return Qf.exports;A0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=xS(),Qf.exports}var MS=SS();const yS=E_(MS),ES=()=>{const[o,e]=Vn.useState(!1),[i,s]=Vn.useState(!1),[l,u]=Vn.useState("home");Vn.useEffect(()=>{const m=()=>{e(window.scrollY>50);const h=document.querySelectorAll("section");let v="";h.forEach(x=>{const _=x.offsetTop,E=x.clientHeight;window.scrollY>=_-E/3&&(v=x.getAttribute("id"))}),v&&u(v)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const d=()=>s(!i),p=()=>s(!1);return it.jsx("nav",{id:"navbar",className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${o?"py-4 px-[10%] bg-[#0f0f11]/70 backdrop-blur-xl border-b border-white/10":"py-6 px-[10%]"}`,children:it.jsxs("div",{className:"flex justify-between items-center",children:[it.jsxs("a",{href:"#home",className:"text-2xl font-extrabold tracking-tight",children:["Rishikesh",it.jsx("span",{className:"text-orangeDark",children:"."})]}),it.jsxs("ul",{className:`flex list-none gap-8 max-md:fixed max-md:top-[70px] max-md:flex-col max-md:bg-[#0f0f11]/90 max-md:w-full max-md:text-center max-md:transition-all max-md:duration-300 max-md:py-5 max-md:backdrop-blur-xl ${i?"max-md:right-0":"max-md:-right-full"}`,children:[["home","about","skills","projects","contact"].map(m=>it.jsx("li",{className:"max-md:my-2",children:it.jsxs("a",{href:`#${m}`,className:`relative py-1 text-[0.95rem] font-medium transition-colors duration-200 capitalize group ${l===m?"text-white":"text-gray-400 hover:text-white"}`,onClick:p,children:[m,it.jsx("span",{className:`absolute left-0 bottom-0 h-[2px] rounded-sm bg-gradient-to-br from-orangeDark to-orangeLight transition-all duration-300 ${l===m?"w-full":"w-0 group-hover:w-full"}`})]})},m)),it.jsx("li",{className:"max-md:my-2",children:it.jsxs("a",{href:"/assets/Rishikesh_Pandey_CV.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full font-semibold text-[0.85rem] transition-all duration-300 bg-orangeDark/10 text-orangeDark border border-orangeDark/30 hover:bg-gradient-to-br hover:from-orangeDark hover:to-orangeLight hover:text-white hover:border-transparent active:scale-95 shadow-[0_4px_10px_rgba(255,107,0,0.3)]",onClick:p,children:["CV ",it.jsx("i",{className:"uil uil-arrow-down"})]})})]}),it.jsx("div",{className:"hidden max-md:block text-2xl cursor-pointer text-white",onClick:d,children:it.jsx("i",{className:i?"uil uil-times":"uil uil-bars"})})]})})},bS=()=>{const o=["FullStack Developer","Problem Solver","DSA Enthusiast"],[e,i]=Vn.useState(""),[s,l]=Vn.useState(0),[u,d]=Vn.useState(!1),[p,m]=Vn.useState(100);return Vn.useEffect(()=>{let h;return h=setTimeout(()=>{const x=o[s];u?(i(x.substring(0,e.length-1)),m(50)):(i(x.substring(0,e.length+1)),m(100)),!u&&e===x?(m(2e3),d(!0)):u&&e===""&&(d(!1),l(_=>(_+1)%o.length),m(500))},p),()=>clearTimeout(h)},[e,u,s,p,o]),it.jsxs("section",{id:"home",className:"flex flex-col justify-center min-h-screen items-center text-center pt-[120px] px-[10%] relative",children:[it.jsxs("div",{className:"z-10",children:[it.jsx("span",{className:"inline-block py-1.5 px-4 bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-full text-[#ff6b00] text-[0.9rem] font-semibold mb-8 tracking-[1px] uppercase animate-[fadeInUp_0.6s_ease-out]",children:"Welcome to my universe"}),it.jsxs("h1",{className:"text-[clamp(3rem,6vw,5rem)] tracking-tight mb-4 font-bold leading-tight animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:["Hi, I'm ",it.jsx("br",{}),it.jsx("span",{className:"bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] bg-clip-text text-transparent",children:"Rishikesh Pandey"})]}),it.jsxs("h2",{className:"text-[clamp(1.2rem,3vw,2rem)] text-gray-400 font-normal h-[48px] mb-12 animate-[fadeInUp_0.6s_ease-out_0.2s_both]",children:[it.jsx("span",{className:"typing",children:e}),it.jsx("span",{className:"text-[#ff6b00] animate-pulse",children:"|"})]}),it.jsxs("div",{className:"flex gap-6 justify-center animate-[fadeInUp_0.6s_ease-out_0.3s_both]",children:[it.jsx("a",{href:"#projects",className:"inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold text-[0.95rem] transition-all duration-300 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] text-white shadow-[0_4px_15px_rgba(255,107,0,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,107,0,0.5)] hover:brightness-110 active:scale-95",children:"View Projects"}),it.jsxs("a",{href:"/assets/Rishikesh_Pandey_CV.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full font-semibold text-[0.95rem] transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10 text-white hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,107,0,0.3)] active:scale-95 group overflow-hidden relative",children:[it.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"}),it.jsx("span",{children:"Download CV"})," ",it.jsx("i",{className:"uil uil-arrow-down"})]})]})]}),it.jsx("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200 animate-[fadeIn_0.8s_ease-out_1s_both]",children:it.jsxs("a",{href:"#about",className:"flex flex-col items-center",children:[it.jsx("div",{className:"w-6 h-9 border-2 border-gray-400 rounded-full relative cursor-pointer active:scale-90 flex justify-center pt-[6px]",children:it.jsx("div",{className:"w-1 h-1.5 bg-gray-400 rounded-sm animate-[bounce_2s_infinite]"})}),it.jsx("p",{className:"text-[0.8rem] uppercase tracking-[1px] mt-2 text-gray-400",children:"Scroll Down"})]})})]})},TS="/assets/profile-BrWS4pIU.jpg",AS=()=>it.jsxs("section",{id:"about",className:"py-24 px-[10%] relative z-10",children:[it.jsxs("div",{className:"mb-16 text-center animate-[fadeInUp_0.8s_ease-out]",children:[it.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold mb-4 tracking-tight",children:"About Me"}),it.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full"})]}),it.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center",children:[it.jsxs("div",{className:"relative flex justify-center animate-[fadeInLeft_0.8s_ease-out]",children:[it.jsx("div",{className:"relative rounded-2xl p-[2px] bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] w-full max-w-[400px]",children:it.jsx("img",{src:TS,alt:"Rishikesh Pandey",className:"w-full h-auto rounded-[calc(1rem-2px)] aspect-[4/5] object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"})}),it.jsxs("div",{className:"absolute top-[10%] -left-[5%] md:-left-[10%] bg-white/5 backdrop-blur-md border border-white/10 py-3 px-5 rounded-xl flex items-center gap-3 font-semibold text-sm shadow-xl animate-[float_6s_ease-in-out_infinite]",children:[it.jsx("i",{className:"uil uil-react text-[#ff6b00] text-xl"})," ",it.jsx("span",{className:"text-white",children:"Frontend"})]}),it.jsxs("div",{className:"absolute bottom-[15%] -right-[5%] md:-right-[10%] bg-white/5 backdrop-blur-md border border-white/10 py-3 px-5 rounded-xl flex items-center gap-3 font-semibold text-sm shadow-xl animate-[float_6s_ease-in-out_infinite_2s]",children:[it.jsx("i",{className:"uil uil-server text-[#ff6b00] text-xl"})," ",it.jsx("span",{className:"text-white",children:"Backend"})]})]}),it.jsxs("div",{className:"bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl animate-[fadeInRight_0.8s_ease-out]",children:[it.jsxs("p",{className:"text-lg mb-8 text-gray-300 leading-relaxed",children:["I am an MCA student and an aspiring"," ",it.jsx("strong",{className:"text-white",children:"Software Engineer / FullStack Developer"})," with strong fundamentals in Java and Data Structures & Algorithms. I am a quick learner and always eager to explore new technologies and improve my skills through real-world projects."]}),it.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10",children:[it.jsxs("div",{children:[it.jsxs("h3",{className:"text-base text-white mb-2 flex items-center gap-2 font-bold",children:[it.jsx("i",{className:"uil uil-heart-medical text-[#ff6b00] text-lg"})," Health Monitoring"]}),it.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"IoT system tracking real-time vitals using ESP32 & Node.js."})]}),it.jsxs("div",{children:[it.jsxs("h3",{className:"text-base text-white mb-2 flex items-center gap-2 font-bold",children:[it.jsx("i",{className:"uil uil-arrow text-[#ff6b00] text-lg"})," Web Development"]}),it.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Built Chat Apps, UI Clones, and Full-Stack scalable solutions."})]})]}),it.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-2 text-[#ff6b00] font-bold hover:text-[#ff8c00] transition-colors group",children:["Let's work together ",it.jsx("i",{className:"uil uil-arrow-right transition-transform duration-300 group-hover:translate-x-2 text-xl"})]})]})]})]}),RS=()=>{const o=[{name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",isImg:!0},{name:"DSA",icon:"uil uil-brackets-curly",isImg:!1},{name:"HTML5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",isImg:!0},{name:"CSS3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",isImg:!0},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",isImg:!0},{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",isImg:!0},{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",isImg:!0},{name:"Express.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",isImg:!0,filterWhite:!0},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",isImg:!0},{name:"Cloud Computing",icon:"uil uil-cloud",isImg:!1}];return it.jsxs("section",{id:"skills",className:"py-24 px-[10%] relative z-10 w-full overflow-hidden",children:[it.jsxs("div",{className:"mb-16 text-center animate-[fadeInUp_0.8s_ease-out]",children:[it.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold mb-4 tracking-tight",children:"My Skills"}),it.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full"})]}),it.jsx("div",{className:"flex flex-wrap justify-center items-center gap-4 max-w-[900px] mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_both]",children:o.map((e,i)=>it.jsxs("div",{className:"group py-3 px-6 bg-[#0f0f11]/60 backdrop-blur-md border border-white/10 rounded-full font-medium flex items-center gap-3 transition-all duration-300 cursor-default hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(255,107,0,0.25)] text-gray-300 hover:text-white",children:[e.isImg?it.jsx("img",{src:e.icon,alt:e.name,className:`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${e.filterWhite?"invert":""}`}):it.jsx("i",{className:`${e.icon} flex items-center justify-center text-xl transition-colors duration-300 group-hover:text-[#ff6b00]`}),it.jsx("span",{className:"tracking-wide",children:e.name})]},i))})]})},CS="/assets/health-Fq0vLVai.png",wS="/assets/chat-DfbMaZze.png",DS="/assets/emoji-DV9pbADu.png",US=()=>{const o=(l,u)=>{if(!u.current)return;const d=u.current,p=d.getBoundingClientRect(),m=l.clientX-p.left,h=l.clientY-p.top,v=p.width/2,x=p.height/2,_=(h-x)/x*-10,E=(m-v)/v*10;d.style.transform=`perspective(1000px) scale(1.02) rotateX(${_}deg) rotateY(${E}deg)`},e=l=>{if(!l.current)return;const u=l.current;u.style.transform="perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)",u.style.transition="transform 0.5s ease"},i=l=>{if(!l.current)return;const u=l.current;u.style.transition="none"},s=[{title:"🏥 Health Monitoring System",desc:"IoT-based application collecting real-time patient health data using hardware sensors and displaying it on a web dashboard.",tags:["IoT","Node.js","MongoDB","ESP32"],img:CS,live:"#",repo:"https://github.com/Rishikespandey"},{title:"💬 Real-Time Chat App",desc:"A real-time chat application built using WebSocket technology (Socket.io) for instant and multi-user communication.",tags:["JavaScript","Socket.io","Express.js"],img:wS,live:"#",repo:"https://github.com/Rishikespandey"},{title:"😊 Emoji Picker Component",desc:"A reusable, lightweight emoji picker UI component featuring global search, categorized filtering, and text cursor insertion.",tags:["Vanilla JS","CSS3","HTML5"],img:DS,live:"#",repo:"https://github.com/Rishikespandey"}];return it.jsxs("section",{id:"projects",className:"py-24 px-[10%] relative z-10",children:[it.jsxs("div",{className:"mb-16 text-center animate-[fadeInUp_0.8s_ease-out]",children:[it.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold mb-4 tracking-tight",children:"Featured Projects"}),it.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full"})]}),it.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000",children:s.map((l,u)=>{const d=b_.useRef(null);return it.jsxs("div",{className:"group relative bg-[#1a1a1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl animate-[fadeInUp_0.8s_ease-out_both] transform-style-3d will-change-transform",style:{animationDelay:`${u*.1}s`},ref:d,onMouseMove:p=>o(p,d),onMouseLeave:()=>e(d),onMouseEnter:()=>i(d),children:[it.jsxs("div",{className:"relative w-full aspect-video overflow-hidden",children:[it.jsx("img",{src:l.img,alt:l.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),it.jsx("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center backdrop-blur-[2px]",children:it.jsxs("div",{className:"flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300",children:[it.jsx("a",{href:l.live,className:"w-12 h-12 rounded-full bg-white/10 text-white flex justify-center items-center text-xl hover:bg-[#ff6b00] hover:scale-110 transition-all duration-300",title:"Live Demo",children:it.jsx("i",{className:"uil uil-external-link-alt"})}),it.jsx("a",{href:l.repo,className:"w-12 h-12 rounded-full bg-white/10 text-white flex justify-center items-center text-xl hover:bg-[#ff6b00] hover:scale-110 transition-all duration-300",title:"Source Code",children:it.jsx("i",{className:"uil uil-github"})})]})})]}),it.jsxs("div",{className:"p-6",children:[it.jsx("h3",{className:"text-xl text-white font-bold mb-3 group-hover:text-[#ff6b00] transition-colors duration-300",children:l.title}),it.jsx("p",{className:"text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed",children:l.desc}),it.jsx("div",{className:"flex flex-wrap gap-2",children:l.tags.map((p,m)=>it.jsx("span",{className:"px-3 py-1 bg-white/5 text-[#ff6b00] text-xs font-semibold rounded-full border border-[#ff6b00]/20",children:p},m))})]})]},u)})})]})},NS=()=>{const[o,e]=Vn.useState({name:"",email:"",message:""}),[i,s]=Vn.useState("idle"),l=d=>{e({...o,[d.target.id]:d.target.value})},u=d=>{d.preventDefault(),o.name&&o.email&&o.message&&(s("loading"),setTimeout(()=>{s("success"),e({name:"",email:"",message:""}),setTimeout(()=>s("idle"),4e3)},1500))};return it.jsxs("section",{id:"contact",className:"py-24 px-[10%] relative z-10",children:[it.jsxs("div",{className:"mb-16 text-center animate-[fadeInUp_0.8s_ease-out]",children:[it.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold mb-4 tracking-tight",children:"Get In Touch"}),it.jsx("div",{className:"w-16 h-1.5 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] mx-auto rounded-full mb-6"}),it.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto text-lg",children:"I'm currently looking for new opportunities. My inbox is always open!"})]}),it.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12",children:[it.jsxs("div",{className:"bg-[#1a1a1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl animate-[fadeInLeft_0.8s_ease-out]",children:[it.jsx("h3",{className:"text-2xl text-white font-bold mb-8",children:"Contact Information"}),it.jsxs("div",{className:"flex items-center gap-5 mb-8",children:[it.jsx("div",{className:"w-14 h-14 flex justify-center items-center bg-[#ff6b00]/10 text-[#ff6b00] text-2xl rounded-xl border border-[#ff6b00]/20",children:it.jsx("i",{className:"uil uil-envelope-alt"})}),it.jsxs("div",{children:[it.jsx("h4",{className:"text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold",children:"Email"}),it.jsx("a",{href:"mailto:sonupandey5705@gmail.com",className:"text-white text-base hover:text-[#ff6b00] transition-colors",children:"sonupandey5705@gmail.com"})]})]}),it.jsxs("div",{className:"flex items-center gap-5 mb-8",children:[it.jsx("div",{className:"w-14 h-14 flex justify-center items-center bg-[#ff6b00]/10 text-[#ff6b00] text-2xl rounded-xl border border-[#ff6b00]/20",children:it.jsx("i",{className:"uil uil-phone"})}),it.jsxs("div",{children:[it.jsx("h4",{className:"text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold",children:"Phone"}),it.jsx("a",{href:"tel:+917972574076",className:"text-white text-base hover:text-[#ff6b00] transition-colors",children:"+91 7972574076"})]})]}),it.jsxs("div",{className:"flex gap-4 mt-8 pt-8 border-t border-white/10",children:[it.jsx("a",{href:"https://github.com/Rishikespandey",target:"_blank",rel:"noopener noreferrer",className:"w-[45px] h-[45px] flex justify-center items-center bg-white/5 text-white rounded-full hover:bg-[#ff6b00] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,107,0,0.3)] transition-all duration-300 text-xl",children:it.jsx("i",{className:"uil uil-github"})}),it.jsx("a",{href:"https://www.linkedin.com/in/rishikesh-pandey-9b442b2b3",target:"_blank",rel:"noopener noreferrer",className:"w-[45px] h-[45px] flex justify-center items-center bg-white/5 text-white rounded-full hover:bg-[#ff6b00] hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,107,0,0.3)] transition-all duration-300 text-xl",children:it.jsx("i",{className:"uil uil-linkedin"})})]})]}),it.jsxs("div",{className:"bg-[#1a1a1d]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl animate-[fadeInRight_0.8s_ease-out] relative",children:[i!=="success"&&it.jsxs("form",{id:"portfolio-form",onSubmit:u,noValidate:!0,children:[it.jsxs("div",{className:"relative mb-8",children:[it.jsx("input",{type:"text",id:"name",required:!0,placeholder:" ",value:o.name,onChange:l,className:"peer w-full bg-[#0f0f11]/80 border border-white/10 rounded-xl p-4 text-white text-base outline-none transition-all duration-300 focus:border-[#ff6b00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] focus:bg-[#0f0f11]"}),it.jsx("label",{htmlFor:"name",className:"absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#1a1a1d] peer-focus:px-2 peer-valid:-top-3 peer-valid:left-3 peer-valid:text-xs peer-valid:bg-[#1a1a1d] peer-valid:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#1a1a1d] peer-[:not(:placeholder-shown)]:px-2",children:"Your Name"})]}),it.jsxs("div",{className:"relative mb-8",children:[it.jsx("input",{type:"email",id:"email",required:!0,placeholder:" ",value:o.email,onChange:l,className:"peer w-full bg-[#0f0f11]/80 border border-white/10 rounded-xl p-4 text-white text-base outline-none transition-all duration-300 focus:border-[#ff6b00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] focus:bg-[#0f0f11]"}),it.jsx("label",{htmlFor:"email",className:"absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#1a1a1d] peer-focus:px-2 peer-valid:-top-3 peer-valid:left-3 peer-valid:text-xs peer-valid:bg-[#1a1a1d] peer-valid:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#1a1a1d] peer-[:not(:placeholder-shown)]:px-2",children:"Your Email"})]}),it.jsxs("div",{className:"relative mb-8",children:[it.jsx("textarea",{id:"message",rows:"5",required:!0,placeholder:" ",value:o.message,onChange:l,className:"peer w-full bg-[#0f0f11]/80 border border-white/10 rounded-xl p-4 text-white text-base outline-none transition-all duration-300 focus:border-[#ff6b00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] focus:bg-[#0f0f11] resize-y"}),it.jsx("label",{htmlFor:"message",className:"absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#ff6b00] peer-focus:bg-[#1a1a1d] peer-focus:px-2 peer-valid:-top-3 peer-valid:left-3 peer-valid:text-xs peer-valid:bg-[#1a1a1d] peer-valid:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#1a1a1d] peer-[:not(:placeholder-shown)]:px-2",children:"Your Message"})]}),it.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:shadow-[0_8px_20px_rgba(255,107,0,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm",disabled:i==="loading",children:[it.jsx("span",{children:i==="loading"?"Sending...":"Send Message"}),it.jsx("i",{className:i==="loading"?"uil uil-spinner uil-spin text-xl":"uil uil-message text-xl"})]})]}),it.jsxs("div",{className:`absolute inset-0 flex flex-col justify-center items-center bg-[#1a1a1d]/95 backdrop-blur-xl rounded-2xl opacity-0 pointer-events-none transition-all duration-500 z-10 ${i==="success"?"opacity-100 pointer-events-auto":""}`,id:"success-message",children:[it.jsx("i",{className:"uil uil-check-circle text-[5rem] text-[#ff6b00] mb-4"}),it.jsx("p",{className:"text-2xl text-white font-bold tracking-wide",children:"Message sent successfully!"})]})]})]})]})},LS=()=>it.jsx("footer",{className:"text-center p-6 border-t border-white/10 bg-[#0f0f11]/80 backdrop-blur-md relative z-10 w-full",children:it.jsxs("p",{className:"text-sm text-gray-400",children:["Built by ",it.jsx("span",{className:"text-[#ff6b00] font-semibold",children:"Rishikesh Pandey"})," © ",it.jsx("span",{id:"year",className:"text-[#ff6b00] font-semibold",children:new Date().getFullYear()})]})});const wh="183",OS=0,R0=1,PS=2,Dc=1,FS=2,Io=3,es=0,kn=1,da=2,pa=0,Cr=1,Od=2,C0=3,w0=4,IS=5,Rs=100,zS=101,BS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,Pd=204,Fd=205,qS=206,YS=207,jS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,tM=214,Id=0,zd=1,Bd=2,Dr=3,Hd=4,Gd=5,Vd=6,kd=7,T_=0,eM=1,nM=2,zi=0,A_=1,R_=2,C_=3,w_=4,D_=5,U_=6,N_=7,L_=300,Us=301,Ur=302,ed=303,nd=304,Hc=306,Xd=1e3,ha=1001,Wd=1002,En=1003,iM=1004,sc=1005,Rn=1006,id=1007,ws=1008,hi=1009,O_=1010,P_=1011,Bo=1012,Dh=1013,Hi=1014,Fi=1015,_a=1016,Uh=1017,Nh=1018,Ho=1020,F_=35902,I_=35899,z_=1021,B_=1022,Ti=1023,va=1026,Ds=1027,H_=1028,Lh=1029,Nr=1030,Oh=1031,Ph=1033,Uc=33776,Nc=33777,Lc=33778,Oc=33779,qd=35840,Yd=35841,jd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37488,th=37489,eh=37490,nh=37491,ih=37808,ah=37809,sh=37810,rh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,Sh=36283,Mh=36284,yh=36285,Eh=36286,aM=3200,sM=0,rM=1,$a="",fi="srgb",Lr="srgb-linear",Fc="linear",Fe="srgb",pr=7680,D0=519,oM=512,lM=513,cM=514,Fh=515,uM=516,fM=517,Ih=518,dM=519,U0=35044,N0="300 es",Ii=2e3,Ic=2001;function hM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function pM(){const o=zc("canvas");return o.style.display="block",o}const L0={};function O0(...o){const e="THREE."+o.shift();console.log(e,...o)}function G_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ae(...o){o=G_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ce(...o){o=G_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Bc(...o){const e=o.join(" ");e in L0||(L0[e]=!0,ae(...o))}function mM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const gM={[Id]:zd,[Bd]:Vd,[Hd]:kd,[Dr]:Gd,[zd]:Id,[Vd]:Bd,[kd]:Hd,[Gd]:Dr};class Pr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,bh=180/Math.PI;function Vo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function _M(o,e){return(o%e+e)%e}function sd(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,i=0){Ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,p){let m=s[l+0],h=s[l+1],v=s[l+2],x=s[l+3],_=u[d+0],E=u[d+1],b=u[d+2],w=u[d+3];if(x!==w||m!==_||h!==E||v!==b){let M=m*_+h*E+v*b+x*w;M<0&&(_=-_,E=-E,b=-b,w=-w,M=-M);let S=1-p;if(M<.9995){const C=Math.acos(M),P=Math.sin(C);S=Math.sin(S*C)/P,p=Math.sin(p*C)/P,m=m*S+_*p,h=h*S+E*p,v=v*S+b*p,x=x*S+w*p}else{m=m*S+_*p,h=h*S+E*p,v=v*S+b*p,x=x*S+w*p;const C=1/Math.sqrt(m*m+h*h+v*v+x*x);m*=C,h*=C,v*=C,x*=C}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],x=u[d],_=u[d+1],E=u[d+2],b=u[d+3];return e[i]=p*b+v*x+m*E-h*_,e[i+1]=m*b+v*_+h*x-p*E,e[i+2]=h*b+v*E+p*_-m*x,e[i+3]=v*b-p*x-m*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),x=p(u/2),_=m(s/2),E=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=_*v*x+h*E*b,this._y=h*E*x-_*v*b,this._z=h*v*b+_*E*x,this._w=h*v*x-_*E*b;break;case"YXZ":this._x=_*v*x+h*E*b,this._y=h*E*x-_*v*b,this._z=h*v*b-_*E*x,this._w=h*v*x+_*E*b;break;case"ZXY":this._x=_*v*x-h*E*b,this._y=h*E*x+_*v*b,this._z=h*v*b+_*E*x,this._w=h*v*x-_*E*b;break;case"ZYX":this._x=_*v*x-h*E*b,this._y=h*E*x+_*v*b,this._z=h*v*b-_*E*x,this._w=h*v*x+_*E*b;break;case"YZX":this._x=_*v*x+h*E*b,this._y=h*E*x+_*v*b,this._z=h*v*b-_*E*x,this._w=h*v*x-_*E*b;break;case"XZY":this._x=_*v*x-h*E*b,this._y=h*E*x-_*v*b,this._z=h*v*b+_*E*x,this._w=h*v*x+_*E*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],x=i[10],_=s+p+x;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-h)*E,this._z=(d-l)*E}else if(s>p&&s>x){const E=2*Math.sqrt(1+s-p-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+h)/E}else if(p>x){const E=2*Math.sqrt(1+p-s-x);this._w=(u-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-s-p);this._w=(d-l)/E,this._x=(u+h)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+d*p+l*h-u*m,this._y=l*v+d*m+u*p-s*h,this._z=u*v+d*h+s*m-l*p,this._w=d*v-s*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,s=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(P0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(P0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),v=2*(p*i-u*l),x=2*(u*s-d*i);return this.x=i+m*h+d*x-p*v,this.y=s+m*v+p*h-u*x,this.z=l+m*x+u*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new st,P0=new Fr;class de{constructor(e,i,s,l,u,d,p,m,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h)}set(e,i,s,l,u,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],v=s[4],x=s[7],_=s[2],E=s[5],b=s[8],w=l[0],M=l[3],S=l[6],C=l[1],P=l[4],L=l[7],k=l[2],B=l[5],z=l[8];return u[0]=d*w+p*C+m*k,u[3]=d*M+p*P+m*B,u[6]=d*S+p*L+m*z,u[1]=h*w+v*C+x*k,u[4]=h*M+v*P+x*B,u[7]=h*S+v*L+x*z,u[2]=_*w+E*C+b*k,u[5]=_*M+E*P+b*B,u[8]=_*S+E*L+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*d*v-i*p*h-s*u*v+s*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=v*d-p*h,_=p*m-v*u,E=h*u-d*m,b=i*x+s*_+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(l*h-v*s)*w,e[2]=(p*s-l*d)*w,e[3]=_*w,e[4]=(v*i-l*m)*w,e[5]=(l*u-p*i)*w,e[6]=E*w,e[7]=(s*m-h*i)*w,e[8]=(d*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(od.makeScale(e,i)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,i){return this.premultiply(od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new de,F0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vM(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Fe&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Bc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Bc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:e,whitePoint:s,transfer:Fc,toXYZ:F0,fromXYZ:I0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:F0,fromXYZ:I0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const be=vM();function ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class xM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{mr===void 0&&(mr=zc("canvas")),mr.width=e.width,mr.height=e.height;const l=mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ma(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ma(i[s]/255)*255):i[s]=ma(i[s]);return{data:i,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SM=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(ld(l[d].image)):u.push(ld(l[d]))}else u=ld(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let MM=0;const cd=new st;class On extends Pr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ha,l=ha,u=Rn,d=ws,p=Ti,m=hi,h=On.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Vo(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case ha:e.x=e.x<0?0:1;break;case Wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case ha:e.y=e.y<0?0:1;break;case Wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=L_;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,h=m[0],v=m[4],x=m[8],_=m[1],E=m[5],b=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+w)<.1&&Math.abs(b+M)<.1&&Math.abs(h+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,L=(E+1)/2,k=(S+1)/2,B=(v+_)/4,z=(x+w)/4,T=(b+M)/4;return P>L&&P>k?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=B/s,u=z/s):L>k?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=B/l,u=T/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=z/u,l=T/u),this.set(s,l,u,i),this}let C=Math.sqrt((M-b)*(M-b)+(x-w)*(x-w)+(_-v)*(_-v));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(x-w)/C,this.z=(_-v)/C,this.w=Math.acos((h+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Pr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new On(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends yM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class V_ extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e,i,s,l,u,d,p,m,h,v,x,_,E,b,w,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h,v,x,_,E,b,w,M)}set(e,i,s,l,u,d,p,m,h,v,x,_,E,b,w,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=v,S[10]=x,S[14]=_,S[3]=E,S[7]=b,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/gr.setFromMatrixColumn(e,0).length(),u=1/gr.setFromMatrixColumn(e,1).length(),d=1/gr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const _=d*v,E=d*x,b=p*v,w=p*x;i[0]=m*v,i[4]=-m*x,i[8]=h,i[1]=E+b*h,i[5]=_-w*h,i[9]=-p*m,i[2]=w-_*h,i[6]=b+E*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*v,E=m*x,b=h*v,w=h*x;i[0]=_+w*p,i[4]=b*p-E,i[8]=d*h,i[1]=d*x,i[5]=d*v,i[9]=-p,i[2]=E*p-b,i[6]=w+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*v,E=m*x,b=h*v,w=h*x;i[0]=_-w*p,i[4]=-d*x,i[8]=b+E*p,i[1]=E+b*p,i[5]=d*v,i[9]=w-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*v,E=d*x,b=p*v,w=p*x;i[0]=m*v,i[4]=b*h-E,i[8]=_*h+w,i[1]=m*x,i[5]=w*h+_,i[9]=E*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,E=d*h,b=p*m,w=p*h;i[0]=m*v,i[4]=w-_*x,i[8]=b*x+E,i[1]=x,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=E*x+b,i[10]=_-w*x}else if(e.order==="XZY"){const _=d*m,E=d*h,b=p*m,w=p*h;i[0]=m*v,i[4]=-x,i[8]=h*v,i[1]=_*x+w,i[5]=d*v,i[9]=E*x-b,i[2]=b*x-E,i[6]=p*v,i[10]=w*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bM,e,TM)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ya.crossVectors(s,ti),Ya.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ya.crossVectors(s,ti)),Ya.normalize(),rc.crossVectors(ti,Ya),l[0]=Ya.x,l[4]=rc.x,l[8]=ti.x,l[1]=Ya.y,l[5]=rc.y,l[9]=ti.y,l[2]=Ya.z,l[6]=rc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],v=s[1],x=s[5],_=s[9],E=s[13],b=s[2],w=s[6],M=s[10],S=s[14],C=s[3],P=s[7],L=s[11],k=s[15],B=l[0],z=l[4],T=l[8],D=l[12],mt=l[1],H=l[5],$=l[9],at=l[13],ct=l[2],J=l[6],N=l[10],F=l[14],lt=l[3],ht=l[7],bt=l[11],O=l[15];return u[0]=d*B+p*mt+m*ct+h*lt,u[4]=d*z+p*H+m*J+h*ht,u[8]=d*T+p*$+m*N+h*bt,u[12]=d*D+p*at+m*F+h*O,u[1]=v*B+x*mt+_*ct+E*lt,u[5]=v*z+x*H+_*J+E*ht,u[9]=v*T+x*$+_*N+E*bt,u[13]=v*D+x*at+_*F+E*O,u[2]=b*B+w*mt+M*ct+S*lt,u[6]=b*z+w*H+M*J+S*ht,u[10]=b*T+w*$+M*N+S*bt,u[14]=b*D+w*at+M*F+S*O,u[3]=C*B+P*mt+L*ct+k*lt,u[7]=C*z+P*H+L*J+k*ht,u[11]=C*T+P*$+L*N+k*bt,u[15]=C*D+P*at+L*F+k*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],x=e[6],_=e[10],E=e[14],b=e[3],w=e[7],M=e[11],S=e[15],C=m*E-h*_,P=p*E-h*x,L=p*_-m*x,k=d*E-h*v,B=d*_-m*v,z=d*x-p*v;return i*(w*C-M*P+S*L)-s*(b*C-M*k+S*B)+l*(b*P-w*k+S*z)-u*(b*L-w*B+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=e[9],_=e[10],E=e[11],b=e[12],w=e[13],M=e[14],S=e[15],C=i*p-s*d,P=i*m-l*d,L=i*h-u*d,k=s*m-l*p,B=s*h-u*p,z=l*h-u*m,T=v*w-x*b,D=v*M-_*b,mt=v*S-E*b,H=x*M-_*w,$=x*S-E*w,at=_*S-E*M,ct=C*at-P*$+L*H+k*mt-B*D+z*T;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ct;return e[0]=(p*at-m*$+h*H)*J,e[1]=(l*$-s*at-u*H)*J,e[2]=(w*z-M*B+S*k)*J,e[3]=(_*B-x*z-E*k)*J,e[4]=(m*mt-d*at-h*D)*J,e[5]=(i*at-l*mt+u*D)*J,e[6]=(M*L-b*z-S*P)*J,e[7]=(v*z-_*L+E*P)*J,e[8]=(d*$-p*mt+h*T)*J,e[9]=(s*mt-i*$-u*T)*J,e[10]=(b*B-w*L+S*C)*J,e[11]=(x*L-v*B-E*C)*J,e[12]=(p*D-d*H-m*T)*J,e[13]=(i*H-s*D+l*T)*J,e[14]=(w*P-b*k-M*C)*J,e[15]=(v*k-x*P+_*C)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,p=e.y,m=e.z,h=u*d,v=u*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*d,0,h*m-l*p,v*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,v=d+d,x=p+p,_=u*h,E=u*v,b=u*x,w=d*v,M=d*x,S=p*x,C=m*h,P=m*v,L=m*x,k=s.x,B=s.y,z=s.z;return l[0]=(1-(w+S))*k,l[1]=(E+L)*k,l[2]=(b-P)*k,l[3]=0,l[4]=(E-L)*B,l[5]=(1-(_+S))*B,l[6]=(M+C)*B,l[7]=0,l[8]=(b+P)*z,l[9]=(M-C)*z,l[10]=(1-(_+w))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let d=gr.set(l[0],l[1],l[2]).length();const p=gr.set(l[4],l[5],l[6]).length(),m=gr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Mi.copy(this);const h=1/d,v=1/p,x=1/m;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=v,Mi.elements[5]*=v,Mi.elements[6]*=v,Mi.elements[8]*=x,Mi.elements[9]*=x,Mi.elements[10]*=x,i.setFromRotationMatrix(Mi),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,d,p=Ii,m=!1){const h=this.elements,v=2*u/(i-e),x=2*u/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let b,w;if(m)b=u/(d-u),w=d*u/(d-u);else if(p===Ii)b=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(p===Ic)b=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,u,d,p=Ii,m=!1){const h=this.elements,v=2/(i-e),x=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let b,w;if(m)b=1/(d-u),w=d/(d-u);else if(p===Ii)b=-2/(d-u),w=-(d+u)/(d-u);else if(p===Ic)b=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const gr=new st,Mi=new nn,bM=new st(0,0,0),TM=new st(1,1,1),Ya=new st,rc=new st,ti=new st,z0=new nn,B0=new Fr;class xa{constructor(e=0,i=0,s=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],x=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return B0.setFromEuler(this),this.setFromQuaternion(B0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AM=0;const H0=new st,_r=new Fr,oa=new nn,oc=new st,Uo=new st,RM=new st,CM=new Fr,G0=new st(1,0,0),V0=new st(0,1,0),k0=new st(0,0,1),X0={type:"added"},wM={type:"removed"},vr={type:"childadded",child:null},ud={type:"childremoved",child:null};class Xn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new st,i=new xa,s=new Fr,l=new st(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new de}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,i){return H0.copy(e).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?oc.copy(e):oc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Uo,oc,this.up):oa.lookAt(oc,Uo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(oa),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),vr.child=e,this.dispatchEvent(vr),vr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wM),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,RM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const x=m[h];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),x=d(e.shapes),_=d(e.skeletons),E=d(e.animations),b=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new st(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(h,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=v.position.distanceTo(x.position),E=.02,b=.005;h.inputState.pinching&&_>E+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new lc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},cc={h:0,s:0,l:0};function dd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=be.workingColorSpace){if(e=_M(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=dd(d,u,e+1/3),this.g=dd(d,u,e),this.b=dd(d,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function s(u){u!==void 0&&parseFloat(u)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ae("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=X_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return be.workingToColorSpace(An.copy(this),e),Math.round(Me(An.r*255,0,255))*65536+Math.round(Me(An.g*255,0,255))*256+Math.round(Me(An.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(An.copy(this),i);const s=An.r,l=An.g,u=An.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=v<=.5?x/(d+p):x/(2-d-p),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=fi){be.workingToColorSpace(An.copy(this),e);const i=An.r,s=An.g,l=An.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(cc);const s=sd(ja.h,cc.h,i),l=sd(ja.s,cc.s,i),u=sd(ja.l,cc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ie;Ie.NAMES=X_;class UM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new st,la=new st,hd=new st,ca=new st,xr=new st,Sr=new st,W0=new st,pd=new st,md=new st,gd=new st,_d=new en,vd=new en,xd=new en;class bi{constructor(e=new st,i=new st,s=new st){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),la.subVectors(s,i),hd.subVectors(e,i);const d=yi.dot(yi),p=yi.dot(la),m=yi.dot(hd),h=la.dot(la),v=la.dot(hd),x=d*h-p*p;if(x===0)return u.set(0,0,0),null;const _=1/x,E=(h*m-p*v)*_,b=(d*v-p*m)*_;return u.set(1-E-b,b,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,s,l,u,d,p,m){return this.getBarycoord(e,i,s,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ca.x),m.addScaledVector(d,ca.y),m.addScaledVector(p,ca.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return _d.setScalar(0),vd.setScalar(0),xd.setScalar(0),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,s),xd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(_d,u.x),d.addScaledVector(vd,u.y),d.addScaledVector(xd,u.z),d}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),la.subVectors(e,i),yi.cross(la).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),yi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,p;xr.subVectors(l,s),Sr.subVectors(u,s),pd.subVectors(e,s);const m=xr.dot(pd),h=Sr.dot(pd);if(m<=0&&h<=0)return i.copy(s);md.subVectors(e,l);const v=xr.dot(md),x=Sr.dot(md);if(v>=0&&x<=v)return i.copy(l);const _=m*x-v*h;if(_<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(xr,d);gd.subVectors(e,u);const E=xr.dot(gd),b=Sr.dot(gd);if(b>=0&&E<=b)return i.copy(u);const w=E*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Sr,p);const M=v*b-E*x;if(M<=0&&x-v>=0&&E-b>=0)return W0.subVectors(u,l),p=(x-v)/(x-v+(E-b)),i.copy(l).addScaledVector(W0,p);const S=1/(M+w+_);return d=w*S,p=_*S,i.copy(s).addScaledVector(xr,d).addScaledVector(Sr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ko{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ei):Ei.fromBufferAttribute(u,d),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),fc.subVectors(this.max,No),Mr.subVectors(e.a,No),yr.subVectors(e.b,No),Er.subVectors(e.c,No),Za.subVectors(yr,Mr),Ka.subVectors(Er,yr),Ss.subVectors(Mr,Er);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Ss.z,Ss.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Ss.z,0,-Ss.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Ss.y,Ss.x,0];return!Sd(i,Mr,yr,Er,fc)||(i=[1,0,0,0,1,0,0,0,1],!Sd(i,Mr,yr,Er,fc))?!1:(dc.crossVectors(Za,Ka),i=[dc.x,dc.y,dc.z],Sd(i,Mr,yr,Er,fc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new st,new st,new st,new st,new st,new st,new st,new st],Ei=new st,uc=new ko,Mr=new st,yr=new st,Er=new st,Za=new st,Ka=new st,Ss=new st,No=new st,fc=new st,dc=new st,Ms=new st;function Sd(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){Ms.fromArray(o,u);const p=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=e.dot(Ms),h=i.dot(Ms),v=s.dot(Ms);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const fn=new st,hc=new Ge;let NM=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=U0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(e),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U0&&(e.usage=this.usage),e}}class W_ extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class q_ extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ga extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}const LM=new ko,Lo=new st,Md=new st;class Gc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):LM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Md)),this.expandByPoint(Lo.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let OM=0;const ui=new nn,yd=new Xn,br=new st,ei=new ko,Oo=new ko,vn=new st;class Ri extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hM(e)?q_:W_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ga(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Oo.setFromBufferAttribute(p),this.morphTargetsRelative?(vn.addVectors(ei.min,Oo.min),ei.expandByPoint(vn),vn.addVectors(ei.max,Oo.max),ei.expandByPoint(vn)):(ei.expandByPoint(Oo.min),ei.expandByPoint(Oo.max))}ei.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)vn.fromBufferAttribute(p,h),m&&(br.fromBufferAttribute(e,h),vn.add(br)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new st,m[T]=new st;const h=new st,v=new st,x=new st,_=new Ge,E=new Ge,b=new Ge,w=new st,M=new st;function S(T,D,mt){h.fromBufferAttribute(s,T),v.fromBufferAttribute(s,D),x.fromBufferAttribute(s,mt),_.fromBufferAttribute(u,T),E.fromBufferAttribute(u,D),b.fromBufferAttribute(u,mt),v.sub(h),x.sub(h),E.sub(_),b.sub(_);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(H),M.copy(x).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(w),p[D].add(w),p[mt].add(w),m[T].add(M),m[D].add(M),m[mt].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,D=C.length;T<D;++T){const mt=C[T],H=mt.start,$=mt.count;for(let at=H,ct=H+$;at<ct;at+=3)S(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const P=new st,L=new st,k=new st,B=new st;function z(T){k.fromBufferAttribute(l,T),B.copy(k);const D=p[T];P.copy(D),P.sub(k.multiplyScalar(k.dot(D))).normalize(),L.crossVectors(B,D);const H=L.dot(m[T])<0?-1:1;d.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,D=C.length;T<D;++T){const mt=C[T],H=mt.start,$=mt.count;for(let at=H,ct=H+$;at<ct;at+=3)z(e.getX(at+0)),z(e.getX(at+1)),z(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new st,u=new st,d=new st,p=new st,m=new st,h=new st,v=new st,x=new st;if(e)for(let _=0,E=e.count;_<E;_+=3){const b=e.getX(_+0),w=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,M),p.add(v),m.add(v),h.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,x=p.normalized,_=new h.constructor(m.length*v);let E=0,b=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let S=0;S<v;S++)_[b++]=h[E++]}return new Ai(_,v,x)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let v=0,x=h.length;v<x;v++){const _=h[v],E=e(_,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let x=0,_=h.length;x<_;x++){const E=h[x];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const u=e.morphAttributes;for(const h in u){const v=[],x=u[h];for(let _=0,E=x.length;_<E;_++)v.push(x[_].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let PM=0;class Xo extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Cr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Fd,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Pd&&(s.blendSrc=this.blendSrc),this.blendDst!==Fd&&(s.blendDst=this.blendDst),this.blendEquation!==Rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fa=new st,Ed=new st,pc=new st,Qa=new st,bd=new st,mc=new st,Td=new st;class Y_{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ed.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(Ed);const u=e.distanceTo(i)*.5,d=-this.direction.dot(pc),p=Qa.dot(this.direction),m=-Qa.dot(pc),h=Qa.lengthSq(),v=Math.abs(1-d*d);let x,_,E,b;if(v>0)if(x=d*m-p,_=d*p-m,b=u*v,x>=0)if(_>=-b)if(_<=b){const w=1/v;x*=w,_*=w,E=x*(x+d*_+2*p)+_*(d*x+_+2*m)+h}else _=u,x=Math.max(0,-(d*_+p)),E=-x*x+_*(_+2*m)+h;else _=-u,x=Math.max(0,-(d*_+p)),E=-x*x+_*(_+2*m)+h;else _<=-b?(x=Math.max(0,-(-d*u+p)),_=x>0?-u:Math.min(Math.max(-u,-m),u),E=-x*x+_*(_+2*m)+h):_<=b?(x=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+h):(x=Math.max(0,-(d*u+p)),_=x>0?u:Math.min(Math.max(-u,-m),u),E=-x*x+_*(_+2*m)+h);else _=d>0?-u:u,x=Math.max(0,-(d*_+p)),E=-x*x+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ed).addScaledVector(pc,_),E}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),v>=0?(u=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,s,l,u){bd.subVectors(i,e),mc.subVectors(s,e),Td.crossVectors(bd,mc);let d=this.direction.dot(Td),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Qa.subVectors(this.origin,e);const m=p*this.direction.dot(mc.crossVectors(Qa,mc));if(m<0)return null;const h=p*this.direction.dot(bd.cross(Qa));if(h<0||m+h>d)return null;const v=-p*Qa.dot(Td);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j_ extends Xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const q0=new nn,ys=new Y_,gc=new Gc,Y0=new st,_c=new st,vc=new st,xc=new st,Ad=new st,Sc=new st,j0=new st,Mc=new st;class Sa extends Xn{constructor(e=new Ri,i=new j_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Sc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const v=p[m],x=u[m];v!==0&&(Ad.fromBufferAttribute(x,e),d?Sc.addScaledVector(Ad,v):Sc.addScaledVector(Ad.sub(i),v))}i.add(Sc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(u),ys.copy(e.ray).recast(e.near),!(gc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(gc,Y0)===null||ys.origin.distanceToSquared(Y0)>(e.far-e.near)**2))&&(q0.copy(u).invert(),ys.copy(e.ray).applyMatrix4(q0),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,_=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=_.length;b<w;b++){const M=_[b],S=d[M.materialIndex],C=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let L=C,k=P;L<k;L+=3){const B=p.getX(L),z=p.getX(L+1),T=p.getX(L+2);l=yc(this,S,e,s,h,v,x,B,z,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let M=b,S=w;M<S;M+=3){const C=p.getX(M),P=p.getX(M+1),L=p.getX(M+2);l=yc(this,d,e,s,h,v,x,C,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=_.length;b<w;b++){const M=_[b],S=d[M.materialIndex],C=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let L=C,k=P;L<k;L+=3){const B=L,z=L+1,T=L+2;l=yc(this,S,e,s,h,v,x,B,z,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=b,S=w;M<S;M+=3){const C=M,P=M+1,L=M+2;l=yc(this,d,e,s,h,v,x,C,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function FM(o,e,i,s,l,u,d,p){let m;if(e.side===kn?m=s.intersectTriangle(d,u,l,!0,p):m=s.intersectTriangle(l,u,d,e.side===es,p),m===null)return null;Mc.copy(p),Mc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Mc);return h<i.near||h>i.far?null:{distance:h,point:Mc.clone(),object:o}}function yc(o,e,i,s,l,u,d,p,m,h){o.getVertexPosition(p,_c),o.getVertexPosition(m,vc),o.getVertexPosition(h,xc);const v=FM(o,e,i,s,_c,vc,xc,j0);if(v){const x=new st;bi.getBarycoord(j0,_c,vc,xc,x),l&&(v.uv=bi.getInterpolatedAttribute(l,p,m,h,x,new Ge)),u&&(v.uv1=bi.getInterpolatedAttribute(u,p,m,h,x,new Ge)),d&&(v.normal=bi.getInterpolatedAttribute(d,p,m,h,x,new st),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new st,materialIndex:0};bi.getNormal(_c,vc,xc,_.normal),v.face=_,v.barycoord=x}return v}class IM extends On{constructor(e=null,i=1,s=1,l,u,d,p,m,h=En,v=En,x,_){super(null,d,p,m,h,v,l,u,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rd=new st,zM=new st,BM=new de;class As{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Rd.subVectors(s,i).cross(zM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Rd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||BM.getNormalMatrix(e),l=this.coplanarPoint(Rd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Gc,HM=new Ge(.5,.5),Ec=new st;class Z_{constructor(e=new As,i=new As,s=new As,l=new As,u=new As,d=new As){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ii,s=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],v=u[4],x=u[5],_=u[6],E=u[7],b=u[8],w=u[9],M=u[10],S=u[11],C=u[12],P=u[13],L=u[14],k=u[15];if(l[0].setComponents(h-d,E-v,S-b,k-C).normalize(),l[1].setComponents(h+d,E+v,S+b,k+C).normalize(),l[2].setComponents(h+p,E+x,S+w,k+P).normalize(),l[3].setComponents(h-p,E-x,S-w,k-P).normalize(),s)l[4].setComponents(m,_,M,L).normalize(),l[5].setComponents(h-m,E-_,S-M,k-L).normalize();else if(l[4].setComponents(h-m,E-_,S-M,k-L).normalize(),i===Ii)l[5].setComponents(h+m,E+_,S+M,k+L).normalize();else if(i===Ic)l[5].setComponents(m,_,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const i=HM.distanceTo(e.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?e.max.x:e.min.x,Ec.y=l.normal.y>0?e.max.y:e.min.y,Ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K_ extends Xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z0=new nn,Th=new Y_,bc=new Gc,Tc=new st;class GM extends Xn{constructor(e=new Ri,i=new K_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,e.ray.intersectsSphere(bc)===!1)return;Z0.copy(l).invert(),Th.copy(e.ray).applyMatrix4(Z0);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,x=s.attributes.position;if(h!==null){const _=Math.max(0,d.start),E=Math.min(h.count,d.start+d.count);for(let b=_,w=E;b<w;b++){const M=h.getX(b);Tc.fromBufferAttribute(x,M),K0(Tc,M,m,l,e,i,this)}}else{const _=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let b=_,w=E;b<w;b++)Tc.fromBufferAttribute(x,b),K0(Tc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function K0(o,e,i,s,l,u,d){const p=Th.distanceSqToPoint(o);if(p<i){const m=new st;Th.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;u.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Q_ extends On{constructor(e=[],i=Us,s,l,u,d,p,m,h,v){super(e,i,s,l,u,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Go extends On{constructor(e,i,s=Hi,l,u,d,p=En,m=En,h,v=va,x=1){if(v!==va&&v!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,u,d,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class VM extends Go{constructor(e,i=Hi,s=Us,l,u,d=En,p=En,m,h=va){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,s,l,u,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wo extends Ri{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],v=[],x=[];let _=0,E=0;b("z","y","x",-1,-1,s,i,e,d,u,0),b("z","y","x",1,-1,s,i,-e,d,u,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ga(h,3)),this.setAttribute("normal",new ga(v,3)),this.setAttribute("uv",new ga(x,2));function b(w,M,S,C,P,L,k,B,z,T,D){const mt=L/z,H=k/T,$=L/2,at=k/2,ct=B/2,J=z+1,N=T+1;let F=0,lt=0;const ht=new st;for(let bt=0;bt<N;bt++){const O=bt*H-at;for(let Y=0;Y<J;Y++){const vt=Y*mt-$;ht[w]=vt*C,ht[M]=O*P,ht[S]=ct,h.push(ht.x,ht.y,ht.z),ht[w]=0,ht[M]=0,ht[S]=B>0?1:-1,v.push(ht.x,ht.y,ht.z),x.push(Y/z),x.push(1-bt/T),F+=1}}for(let bt=0;bt<T;bt++)for(let O=0;O<z;O++){const Y=_+O+J*bt,vt=_+O+J*(bt+1),Rt=_+(O+1)+J*(bt+1),It=_+(O+1)+J*bt;m.push(Y,vt,It),m.push(vt,Rt,It),lt+=6}p.addGroup(E,lt,D),E+=lt,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vc extends Ri{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,x=e/p,_=i/m,E=[],b=[],w=[],M=[];for(let S=0;S<v;S++){const C=S*_-d;for(let P=0;P<h;P++){const L=P*x-u;b.push(L,-C,0),w.push(0,0,1),M.push(P/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<p;C++){const P=C+h*S,L=C+h*(S+1),k=C+1+h*(S+1),B=C+1+h*S;E.push(P,L,B),E.push(L,k,B)}this.setIndex(E),this.setAttribute("position",new ga(b,3)),this.setAttribute("normal",new ga(w,3)),this.setAttribute("uv",new ga(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Or(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)e[l]=s[l]}return e}function kM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function $_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const XM={clone:Or,merge:Ln};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=qM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=kM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class YM extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM extends Xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZM extends Xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ac=new st,Rc=new Fr,Li=new st;class tv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ac,Rc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Rc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Ac,Rc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Rc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new st,Q0=new Ge,J0=new Ge;class di extends tv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,Q0,J0),i.subVectors(J0,Q0)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ad*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ev extends tv{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Tr=-90,Ar=1;class KM extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Tr,Ar,e,i);l.layers=this.layers,this.add(l);const u=new di(Tr,Ar,e,i);u.layers=this.layers,this.add(u);const d=new di(Tr,Ar,e,i);d.layers=this.layers,this.add(d);const p=new di(Tr,Ar,e,i);p.layers=this.layers,this.add(p);const m=new di(Tr,Ar,e,i);m.layers=this.layers,this.add(m);const h=new di(Tr,Ar,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,_,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class QM extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class JM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ae("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function $0(o,e,i,s){const l=$M(s);switch(i){case z_:return o*e;case H_:return o*e/l.components*l.byteLength;case Lh:return o*e/l.components*l.byteLength;case Nr:return o*e*2/l.components*l.byteLength;case Oh:return o*e*2/l.components*l.byteLength;case B_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Ph:return o*e*4/l.components*l.byteLength;case Uc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yd:case Zd:return Math.max(o,16)*Math.max(e,8)/4;case qd:case jd:return Math.max(o,8)*Math.max(e,8)/2;case Kd:case Qd:case $d:case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jd:case eh:case nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case yh:case Eh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $M(o){switch(o){case hi:case O_:return{byteLength:1,components:1};case Bo:case P_:case _a:return{byteLength:2,components:1};case Uh:case Nh:return{byteLength:2,components:4};case Hi:case Dh:case Fi:return{byteLength:4,components:1};case F_:case I_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function nv(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ty(o){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,x=h.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,h,v),p.onUploadCallback();let E;if(h instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=o.SHORT;else if(h instanceof Uint32Array)E=o.UNSIGNED_INT;else if(h instanceof Int32Array)E=o.INT;else if(h instanceof Int8Array)E=o.BYTE;else if(h instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const v=m.array,x=m.updateRanges;if(o.bindBuffer(h,p),x.length===0)o.bufferSubData(h,0,v);else{x.sort((E,b)=>E.start-b.start);let _=0;for(let E=1;E<x.length;E++){const b=x[_],w=x[E];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,x[_]=w)}x.length=_+1;for(let E=0,b=x.length;E<b;E++){const w=x[E];o.bufferSubData(h,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,py=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,my=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,by=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ty=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ay=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$y=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ob=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:ey,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ay,alphatest_fragment:sy,alphatest_pars_fragment:ry,aomap_fragment:oy,aomap_pars_fragment:ly,batching_pars_vertex:cy,batching_vertex:uy,begin_vertex:fy,beginnormal_vertex:dy,bsdfs:hy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:vy,clipping_planes_vertex:xy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:yy,color_vertex:Ey,common:by,cube_uv_reflection_fragment:Ty,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Ry,displacementmap_vertex:Cy,emissivemap_fragment:wy,emissivemap_pars_fragment:Dy,colorspace_fragment:Uy,colorspace_pars_fragment:Ny,envmap_fragment:Ly,envmap_common_pars_fragment:Oy,envmap_pars_fragment:Py,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:Yy,envmap_vertex:Iy,fog_vertex:zy,fog_pars_vertex:By,fog_fragment:Hy,fog_pars_fragment:Gy,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:ky,lights_lambert_fragment:Xy,lights_lambert_pars_fragment:Wy,lights_pars_begin:qy,lights_toon_fragment:jy,lights_toon_pars_fragment:Zy,lights_phong_fragment:Ky,lights_phong_pars_fragment:Qy,lights_physical_fragment:Jy,lights_physical_pars_fragment:$y,lights_fragment_begin:tE,lights_fragment_maps:eE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:rE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:dE,morphinstance_vertex:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:SE,normal_pars_vertex:ME,normal_vertex:yE,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:bE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:CE,packing:wE,premultiplied_alpha_fragment:DE,project_vertex:UE,dithering_fragment:NE,dithering_pars_fragment:LE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:IE,shadowmap_vertex:zE,shadowmask_pars_fragment:BE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:kE,specularmap_fragment:XE,specularmap_pars_fragment:WE,tonemapping_fragment:qE,tonemapping_pars_fragment:YE,transmission_fragment:jE,transmission_pars_fragment:ZE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:tb,background_frag:eb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:ab,cube_frag:sb,depth_vert:rb,depth_frag:ob,distance_vert:lb,distance_frag:cb,equirect_vert:ub,equirect_frag:fb,linedashed_vert:db,linedashed_frag:hb,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:xb,meshnormal_vert:Sb,meshnormal_frag:Mb,meshphong_vert:yb,meshphong_frag:Eb,meshphysical_vert:bb,meshphysical_frag:Tb,meshtoon_vert:Ab,meshtoon_frag:Rb,points_vert:Cb,points_frag:wb,shadow_vert:Db,shadow_frag:Ub,sprite_vert:Nb,sprite_frag:Lb},Nt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Pi={basic:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ln([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ln([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ln([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ln([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ln([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ln([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ln([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ln([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Ln([Nt.common,Nt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Ln([Nt.lights,Nt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Pi.physical={uniforms:Ln([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Cc={r:0,b:0,g:0},bs=new xa,Ob=new nn;function Pb(o,e,i,s,l,u){const d=new Ie(0);let p=l===!0?0:1,m,h,v=null,x=0,_=null;function E(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const L=C.backgroundBlurriness>0;P=e.get(P,L)}return P}function b(C){let P=!1;const L=E(C);L===null?M(d,p):L&&L.isColor&&(M(L,1),P=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,P){const L=E(P);L&&(L.isCubeTexture||L.mapping===Hc)?(h===void 0&&(h=new Sa(new Wo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Or(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(bs)),h.material.toneMapped=be.getTransfer(L.colorSpace)!==Fe,(v!==L||x!==L.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,v=L,x=L.version,_=o.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Sa(new Vc(2,2),new Gi({name:"BackgroundMaterial",uniforms:Or(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=be.getTransfer(L.colorSpace)!==Fe,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||x!==L.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=L,x=L.version,_=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,P){C.getRGB(Cc,$_(o)),i.buffers.color.setClear(Cc.r,Cc.g,Cc.b,P,u)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,P=1){d.set(C),p=P,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(d,p)},render:b,addToRenderList:w,dispose:S}}function Fb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,d=!1;function p(H,$,at,ct,J){let N=!1;const F=x(H,ct,at,$);u!==F&&(u=F,h(u.object)),N=E(H,ct,at,J),N&&b(H,ct,at,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,L(H,$,at,ct),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function x(H,$,at,ct){const J=ct.wireframe===!0;let N=s[$.id];N===void 0&&(N={},s[$.id]=N);const F=H.isInstancedMesh===!0?H.id:0;let lt=N[F];lt===void 0&&(lt={},N[F]=lt);let ht=lt[at.id];ht===void 0&&(ht={},lt[at.id]=ht);let bt=ht[J];return bt===void 0&&(bt=_(m()),ht[J]=bt),bt}function _(H){const $=[],at=[],ct=[];for(let J=0;J<i;J++)$[J]=0,at[J]=0,ct[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:at,attributeDivisors:ct,object:H,attributes:{},index:null}}function E(H,$,at,ct){const J=u.attributes,N=$.attributes;let F=0;const lt=at.getAttributes();for(const ht in lt)if(lt[ht].location>=0){const O=J[ht];let Y=N[ht];if(Y===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;F++}return u.attributesNum!==F||u.index!==ct}function b(H,$,at,ct){const J={},N=$.attributes;let F=0;const lt=at.getAttributes();for(const ht in lt)if(lt[ht].location>=0){let O=N[ht];O===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),J[ht]=Y,F++}u.attributes=J,u.attributesNum=F,u.index=ct}function w(){const H=u.newAttributes;for(let $=0,at=H.length;$<at;$++)H[$]=0}function M(H){S(H,0)}function S(H,$){const at=u.newAttributes,ct=u.enabledAttributes,J=u.attributeDivisors;at[H]=1,ct[H]===0&&(o.enableVertexAttribArray(H),ct[H]=1),J[H]!==$&&(o.vertexAttribDivisor(H,$),J[H]=$)}function C(){const H=u.newAttributes,$=u.enabledAttributes;for(let at=0,ct=$.length;at<ct;at++)$[at]!==H[at]&&(o.disableVertexAttribArray(at),$[at]=0)}function P(H,$,at,ct,J,N,F){F===!0?o.vertexAttribIPointer(H,$,at,J,N):o.vertexAttribPointer(H,$,at,ct,J,N)}function L(H,$,at,ct){w();const J=ct.attributes,N=at.getAttributes(),F=$.defaultAttributeValues;for(const lt in N){const ht=N[lt];if(ht.location>=0){let bt=J[lt];if(bt===void 0&&(lt==="instanceMatrix"&&H.instanceMatrix&&(bt=H.instanceMatrix),lt==="instanceColor"&&H.instanceColor&&(bt=H.instanceColor)),bt!==void 0){const O=bt.normalized,Y=bt.itemSize,vt=e.get(bt);if(vt===void 0)continue;const Rt=vt.buffer,It=vt.type,et=vt.bytesPerElement,xt=It===o.INT||It===o.UNSIGNED_INT||bt.gpuType===Dh;if(bt.isInterleavedBufferAttribute){const Tt=bt.data,kt=Tt.stride,Kt=bt.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<ht.locationSize;$t++)S(ht.location+$t,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<ht.locationSize;$t++)M(ht.location+$t);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let $t=0;$t<ht.locationSize;$t++)P(ht.location+$t,Y/ht.locationSize,It,O,kt*et,(Kt+Y/ht.locationSize*$t)*et,xt)}else{if(bt.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)S(ht.location+Tt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)M(ht.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<ht.locationSize;Tt++)P(ht.location+Tt,Y/ht.locationSize,It,O,Y*et,Y/ht.locationSize*Tt*et,xt)}}else if(F!==void 0){const O=F[lt];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(ht.location,O);break;case 3:o.vertexAttrib3fv(ht.location,O);break;case 4:o.vertexAttrib4fv(ht.location,O);break;default:o.vertexAttrib1fv(ht.location,O)}}}}C()}function k(){D();for(const H in s){const $=s[H];for(const at in $){const ct=$[at];for(const J in ct){const N=ct[J];for(const F in N)v(N[F].object),delete N[F];delete ct[J]}}delete s[H]}}function B(H){if(s[H.id]===void 0)return;const $=s[H.id];for(const at in $){const ct=$[at];for(const J in ct){const N=ct[J];for(const F in N)v(N[F].object),delete N[F];delete ct[J]}}delete s[H.id]}function z(H){for(const $ in s){const at=s[$];for(const ct in at){const J=at[ct];if(J[H.id]===void 0)continue;const N=J[H.id];for(const F in N)v(N[F].object),delete N[F];delete J[H.id]}}}function T(H){for(const $ in s){const at=s[$],ct=H.isInstancedMesh===!0?H.id:0,J=at[ct];if(J!==void 0){for(const N in J){const F=J[N];for(const lt in F)v(F[lt].object),delete F[lt];delete J[N]}delete at[ct],Object.keys(at).length===0&&delete s[$]}}}function D(){mt(),d=!0,u!==l&&(u=l,h(u.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:mt,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function Ib(o,e,i){let s;function l(h){s=h}function u(h,v){o.drawArrays(s,h,v),i.update(v,s,1)}function d(h,v,x){x!==0&&(o.drawArraysInstanced(s,h,v,x),i.update(v,s,x))}function p(h,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=v[b];i.update(E,s,1)}function m(h,v,x,_){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<h.length;b++)d(h[b],v[b],_[b]);else{E.multiDrawArraysInstancedWEBGL(s,h,0,v,0,_,0,x);let b=0;for(let w=0;w<x;w++)b+=v[w]*_[w];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function zb(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ti&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==hi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Fi&&!T)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(ae("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:L,maxSamples:k,samples:B}}function Bb(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new As,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const E=x.length!==0||_||s!==0||l;return l=_,s=x.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,_){i=v(x,_,0)},this.setState=function(x,_,E){const b=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=o.get(x);if(!l||b===null||b.length===0||u&&!M)u?v(null):h();else{const C=u?0:s,P=C*4;let L=S.clippingState||null;m.value=L,L=v(b,_,P,E);for(let k=0;k!==P;++k)L[k]=i[k];S.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,_,E,b){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const S=E+w*4,C=_.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,L=E;P!==w;++P,L+=4)d.copy(x[P]).applyMatrix4(C,p),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const ts=4,t_=[.125,.215,.35,.446,.526,.582],Cs=20,Hb=256,Po=new ev,e_=new Ie;let Cd=null,wd=0,Dd=0,Ud=!1;const Gb=new st;class n_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=Gb}=u;Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,wd,Dd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:_a,format:Ti,colorSpace:Lr,depthBuffer:!1},l=i_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vb(u)),this._blurMaterial=Xb(u,e,i),this._ggxMaterial=kb(u,e,i)}return l}_compileMaterial(e){const i=new Sa(new Ri,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,s,l,u){const m=new di(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,E=x.toneMapping;x.getClearColor(e_),x.toneMapping=zi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sa(new Wo,new j_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,S=!0):(M.color.copy(e_),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):L===1?(m.up.set(0,0,h[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const k=this._cubeSize;Rr(l,L*k,P>2?k:0,k,k),x.setRenderTarget(l),S&&x.render(w,m),x.render(e,m)}x.toneMapping=E,x.autoClear=_,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Us||e.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Rr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Po)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),_=0+h*1.25,E=x*_,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-ts?s-b+ts:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=b-i,Rr(u,M,S,3*w,2*w),l.setRenderTarget(u),l.render(p,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Rr(e,M,S,3*w,2*w),l.setRenderTarget(e),l.render(p,Po)}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=h;const _=h.uniforms,E=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Cs-1),w=u/b,M=isFinite(u)?1+Math.floor(v*w):Cs;M>Cs&&ae(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cs}`);const S=[];let C=0;for(let z=0;z<Cs;++z){const T=z/w,D=Math.exp(-T*T/2);S.push(D),z===0?C+=D:z<M&&(C+=2*D)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=S,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=b,_.mipInt.value=P-s;const L=this._sizeLods[l],k=3*L*(l>P-ts?l-P+ts:0),B=4*(this._cubeSize-L);Rr(i,k,B,3*L,2*L),m.setRenderTarget(i),m.render(x,Po)}}function Vb(o){const e=[],i=[],s=[];let l=o;const u=o-ts+1+t_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-ts?m=t_[d-o+ts-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,x=1+h,_=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,b=6,w=3,M=2,S=1,C=new Float32Array(w*b*E),P=new Float32Array(M*b*E),L=new Float32Array(S*b*E);for(let B=0;B<E;B++){const z=B%3*2/3-1,T=B>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(D,w*b*B),P.set(_,M*b*B);const mt=[B,B,B,B,B,B];L.set(mt,S*b*B)}const k=new Ri;k.setAttribute("position",new Ai(C,w)),k.setAttribute("uv",new Ai(P,M)),k.setAttribute("faceIndex",new Ai(L,S)),s.push(new Sa(k,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function i_(o,e,i){const s=new Bi(o,e,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function kb(o,e,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Xb(o,e,i){const s=new Float32Array(Cs),l=new st(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function a_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function s_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class iv extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Q_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wo(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:pa});u.uniforms.tEquirect.value=i;const d=new Sa(l,u),p=i.minFilter;return i.minFilter===ws&&(i.minFilter=Rn),new KM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}function Wb(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?d(_):u(_)}function u(_){if(_&&_.isTexture){const E=_.mapping;if(E===ed||E===nd)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new iv(b.height);return w.fromEquirectangularTexture(o,_),e.set(_,w),_.addEventListener("dispose",h),p(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,b=E===ed||E===nd,w=E===Us||E===Ur;if(b||w){let M=i.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new n_(o)),M=b?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const C=_.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new n_(o)),M=b?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",v),M.texture):null}}}return _}function p(_,E){return E===ed?_.mapping=Us:E===nd&&(_.mapping=Ur),_}function m(_){let E=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&E++;return E===b}function h(_){const E=_.target;E.removeEventListener("dispose",h);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function v(_){const E=_.target;E.removeEventListener("dispose",v);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function qb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bc("WebGLRenderer: "+s+" extension not supported."),l}}}function Yb(o,e,i,s){const l={},u=new WeakMap;function d(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",d),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function h(x){const _=[],E=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(E!==null){const C=E.array;w=E.version;for(let P=0,L=C.length;P<L;P+=3){const k=C[P+0],B=C[P+1],z=C[P+2];_.push(k,B,B,z,z,k)}}else{const C=b.array;w=b.version;for(let P=0,L=C.length/3-1;P<L;P+=3){const k=P+0,B=P+1,z=P+2;_.push(k,B,B,z,z,k)}}const M=new(b.count>=65535?q_:W_)(_,1);M.version=w;const S=u.get(x);S&&e.remove(S),u.set(x,M)}function v(x){const _=u.get(x);if(_){const E=x.index;E!==null&&_.version<E.version&&h(x)}else h(x);return u.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function jb(o,e,i){let s;function l(_){s=_}let u,d;function p(_){u=_.type,d=_.bytesPerElement}function m(_,E){o.drawElements(s,E,u,_*d),i.update(E,s,1)}function h(_,E,b){b!==0&&(o.drawElementsInstanced(s,E,u,_*d,b),i.update(E,s,b))}function v(_,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,_,0,b);let M=0;for(let S=0;S<b;S++)M+=E[S];i.update(M,s,1)}function x(_,E,b,w){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<_.length;S++)h(_[S]/d,E[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,_,0,w,0,b);let S=0;for(let C=0;C<b;C++)S+=E[C]*w[C];i.update(S,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function Zb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ce("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Kb(o,e,i){const s=new WeakMap,l=new en;function u(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let mt=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",mt)};var E=mt;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let L=0;b===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let k=p.attributes.position.count*L,B=1;k>e.maxTextureSize&&(B=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*B*4*x),T=new V_(z,k,B,x);T.type=Fi,T.needsUpdate=!0;const D=L*4;for(let H=0;H<x;H++){const $=S[H],at=C[H],ct=P[H],J=k*B*4*H;for(let N=0;N<$.count;N++){const F=N*D;b===!0&&(l.fromBufferAttribute($,N),z[J+F+0]=l.x,z[J+F+1]=l.y,z[J+F+2]=l.z,z[J+F+3]=0),w===!0&&(l.fromBufferAttribute(at,N),z[J+F+4]=l.x,z[J+F+5]=l.y,z[J+F+6]=l.z,z[J+F+7]=0),M===!0&&(l.fromBufferAttribute(ct,N),z[J+F+8]=l.x,z[J+F+9]=l.y,z[J+F+10]=l.z,z[J+F+11]=ct.itemSize===4?l.w:1)}}_={count:x,texture:T,size:new Ge(k,B)},s.set(p,_),p.addEventListener("dispose",mt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function Qb(o,e,i,s,l){let u=new WeakMap;function d(h){const v=l.render.frame,x=h.geometry,_=e.get(h,x);if(u.get(_)!==v&&(e.update(_),u.set(_,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==v&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),u.set(h,v))),h.isSkinnedMesh){const E=h.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return _}function p(){u=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const Jb={[A_]:"LINEAR_TONE_MAPPING",[R_]:"REINHARD_TONE_MAPPING",[C_]:"CINEON_TONE_MAPPING",[w_]:"ACES_FILMIC_TONE_MAPPING",[U_]:"AGX_TONE_MAPPING",[N_]:"NEUTRAL_TONE_MAPPING",[D_]:"CUSTOM_TONE_MAPPING"};function $b(o,e,i,s,l){const u=new Bi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Bi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),p=new Ri;p.setAttribute("position",new ga([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ga([0,2,0,0,2,0],2));const m=new YM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Sa(p,m),v=new ev(-1,1,1,-1,0,1);let x=null,_=null,E=!1,b,w=null,M=[],S=!1;this.setSize=function(C,P){u.setSize(C,P),d.setSize(C,P);for(let L=0;L<M.length;L++){const k=M[L];k.setSize&&k.setSize(C,P)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const P=u.width,L=u.height;for(let k=0;k<M.length;k++){const B=M[k];B.setSize&&B.setSize(P,L)}},this.begin=function(C,P){if(E||C.toneMapping===zi&&M.length===0)return!1;if(w=P,P!==null){const L=P.width,k=P.height;(u.width!==L||u.height!==k)&&this.setSize(L,k)}return S===!1&&C.setRenderTarget(u),b=C.toneMapping,C.toneMapping=zi,!0},this.hasRenderPass=function(){return S},this.end=function(C,P){C.toneMapping=b,E=!0;let L=u,k=d;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(C,k,L,P),z.needsSwap!==!1)){const T=L;L=k,k=T}}if(x!==C.outputColorSpace||_!==C.toneMapping){x=C.outputColorSpace,_=C.toneMapping,m.defines={},be.getTransfer(x)===Fe&&(m.defines.SRGB_TRANSFER="");const B=Jb[_];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(w),C.render(h,v),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const av=new On,Ah=new Go(1,1),sv=new V_,rv=new EM,ov=new Q_,r_=[],o_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function Ir(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=r_[l];if(u===void 0&&(u=new Float32Array(l),r_[l]=u),e!==0){s.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(u,p)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Xc(o,e){let i=o_[e];i===void 0&&(i=new Int32Array(e),o_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function tT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function nT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function aT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;u_.set(s),o.uniformMatrix2fv(this.addr,!1,u_),gn(i,s)}}function sT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;c_.set(s),o.uniformMatrix3fv(this.addr,!1,c_),gn(i,s)}}function rT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;l_.set(s),o.uniformMatrix4fv(this.addr,!1,l_),gn(i,s)}}function oT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function fT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function mT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ah.compareFunction=i.isReversedDepthBuffer()?Ih:Fh,u=Ah):u=av,i.setTexture2D(e||u,l)}function gT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||rv,l)}function _T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ov,l)}function vT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||sv,l)}function xT(o){switch(o){case 5126:return tT;case 35664:return eT;case 35665:return nT;case 35666:return iT;case 35674:return aT;case 35675:return sT;case 35676:return rT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return dT;case 36295:return hT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}function ST(o,e){o.uniform1fv(this.addr,e)}function MT(o,e){const i=Ir(e,this.size,2);o.uniform2fv(this.addr,i)}function yT(o,e){const i=Ir(e,this.size,3);o.uniform3fv(this.addr,i)}function ET(o,e){const i=Ir(e,this.size,4);o.uniform4fv(this.addr,i)}function bT(o,e){const i=Ir(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function TT(o,e){const i=Ir(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function AT(o,e){const i=Ir(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function RT(o,e){o.uniform1iv(this.addr,e)}function CT(o,e){o.uniform2iv(this.addr,e)}function wT(o,e){o.uniform3iv(this.addr,e)}function DT(o,e){o.uniform4iv(this.addr,e)}function UT(o,e){o.uniform1uiv(this.addr,e)}function NT(o,e){o.uniform2uiv(this.addr,e)}function LT(o,e){o.uniform3uiv(this.addr,e)}function OT(o,e){o.uniform4uiv(this.addr,e)}function PT(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ah:d=av;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function FT(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||rv,u[d])}function IT(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||ov,u[d])}function zT(o,e,i){const s=this.cache,l=e.length,u=Xc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||sv,u[d])}function BT(o){switch(o){case 5126:return ST;case 35664:return MT;case 35665:return yT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return NT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return zT}}class HT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xT(i.type)}}class GT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BT(i.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function f_(o,e){o.seq.push(e),o.map[e.id]=e}function kT(o,e,i){const s=o.name,l=s.length;for(Nd.lastIndex=0;;){const u=Nd.exec(s),d=Nd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){f_(i,h===void 0?new HT(p,o,e):new GT(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new VT(p),f_(i,x)),i=x}}}class Pc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);kT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function d_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const XT=37297;let WT=0;function qT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const h_=new de;function YT(o){be._getMatrix(h_,be.workingColorSpace,o);const e=`mat3( ${h_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function p_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+qT(o.getShaderSource(e),p)}else return u}function jT(o,e){const i=YT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ZT={[A_]:"Linear",[R_]:"Reinhard",[C_]:"Cineon",[w_]:"ACESFilmic",[U_]:"AgX",[N_]:"Neutral",[D_]:"Custom"};function KT(o,e){const i=ZT[e];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new st;function QT(){be.getLuminanceCoefficients(wc);const o=wc.x.toFixed(4),e=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function $T(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function t1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function zo(o){return o!==""}function m_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(e1,i1)}const n1=new Map;function i1(o,e){let i=he[e];if(i===void 0){const s=n1.get(e);if(s!==void 0)i=he[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Rh(i)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function __(o){return o.replace(a1,s1)}function s1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function v_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r1={[Dc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function o1(o){return r1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l1={[Us]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function c1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":l1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const u1={[Ur]:"ENVMAP_MODE_REFRACTION"};function f1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":u1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d1={[T_]:"ENVMAP_BLENDING_MULTIPLY",[eM]:"ENVMAP_BLENDING_MIX",[nM]:"ENVMAP_BLENDING_ADD"};function h1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":d1[o.combine]||"ENVMAP_BLENDING_NONE"}function p1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function m1(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=o1(i),h=c1(i),v=f1(i),x=h1(i),_=p1(i),E=JT(i),b=$T(u),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(zo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(zo).join(`
`),S.length>0&&(S+=`
`)):(M=[v_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),S=[v_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zi?"#define TONE_MAPPING":"",i.toneMapping!==zi?he.tonemapping_pars_fragment:"",i.toneMapping!==zi?KT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,jT("linearToOutputTexel",i.outputColorSpace),QT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),d=Rh(d),d=m_(d,i),d=g_(d,i),p=Rh(p),p=m_(p,i),p=g_(p,i),d=__(d),p=__(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=C+M+d,L=C+S+p,k=d_(l,l.VERTEX_SHADER,P),B=d_(l,l.FRAGMENT_SHADER,L);l.attachShader(w,k),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(w)||"",at=l.getShaderInfoLog(k)||"",ct=l.getShaderInfoLog(B)||"",J=$.trim(),N=at.trim(),F=ct.trim();let lt=!0,ht=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,k,B);else{const bt=p_(l,k,"vertex"),O=p_(l,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+bt+`
`+O)}else J!==""?ae("WebGLProgram: Program Info Log:",J):(N===""||F==="")&&(ht=!1);ht&&(H.diagnostics={runnable:lt,programLog:J,vertexShader:{log:N,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(k),l.deleteShader(B),T=new Pc(l,w),D=t1(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(w,XT)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=B,this}let g1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new v1(e),i.set(e,s)),s}}class v1{constructor(e){this.id=g1++,this.code=e,this.usedTimes=0}}function x1(o,e,i,s,l,u){const d=new k_,p=new _1,m=new Set,h=[],v=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,D,mt,H,$){const at=H.fog,ct=$.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=e.get(T.envMap||J,N),lt=F&&F.mapping===Hc?F.image.height:null,ht=E[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&ae("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const bt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,O=bt!==void 0?bt.length:0;let Y=0;ct.morphAttributes.position!==void 0&&(Y=1),ct.morphAttributes.normal!==void 0&&(Y=2),ct.morphAttributes.color!==void 0&&(Y=3);let vt,Rt,It,et;if(ht){const Ee=Pi[ht];vt=Ee.vertexShader,Rt=Ee.fragmentShader}else vt=T.vertexShader,Rt=T.fragmentShader,p.update(T),It=p.getVertexShaderID(T),et=p.getFragmentShaderID(T);const xt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),kt=$.isInstancedMesh===!0,Kt=$.isBatchedMesh===!0,$t=!!T.map,Ke=!!T.matcap,_e=!!F,pe=!!T.aoMap,we=!!T.lightMap,oe=!!T.bumpMap,Ze=!!T.normalMap,G=!!T.displacementMap,We=!!T.emissiveMap,ye=!!T.metalnessMap,Ue=!!T.roughnessMap,qt=T.anisotropy>0,U=T.clearcoat>0,y=T.dispersion>0,q=T.iridescence>0,pt=T.sheen>0,St=T.transmission>0,ft=qt&&!!T.anisotropyMap,Xt=U&&!!T.clearcoatMap,wt=U&&!!T.clearcoatNormalMap,Zt=U&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,Et=q&&!!T.iridescenceThicknessMap,Mt=pt&&!!T.sheenColorMap,Ot=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Pt=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=St&&!!T.transmissionMap,Ct=St&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,yt=T.alphaTest>0,ut=!!T.alphaHash,Bt=!!T.extensions;let ne=zi;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Le={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:vt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&$._colorsTexture!==null,instancing:kt,instancingColor:kt&&$.instanceColor!==null,instancingMorph:kt&&$.morphTexture!==null,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Lr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Ke,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:lt,aoMap:pe,lightMap:we,bumpMap:oe,normalMap:Ze,displacementMap:G,emissiveMap:We,normalMapObjectSpace:Ze&&T.normalMapType===rM,normalMapTangentSpace:Ze&&T.normalMapType===sM,metalnessMap:ye,roughnessMap:Ue,anisotropy:qt,anisotropyMap:ft,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:y,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:Mt,sheenRoughnessMap:Ot,specularMap:Lt,specularColorMap:Pt,specularIntensityMap:ce,transmission:St,transmissionMap:W,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===Cr&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:yt,alphaHash:ut,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:we&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Ze&&b(T.normalMap.channel),displacementMapUv:G&&b(T.displacementMap.channel),emissiveMapUv:We&&b(T.emissiveMap.channel),metalnessMapUv:ye&&b(T.metalnessMap.channel),roughnessMapUv:Ue&&b(T.roughnessMap.channel),anisotropyMapUv:ft&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Pt&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:Ft&&b(T.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ze||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ct.attributes.uv&&($t||Ft),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ct.attributes.normal===void 0&&Ze===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:$.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&mt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===Fe,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===Fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===da,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Le.vertexUv1s=m.has(1),Le.vertexUv2s=m.has(2),Le.vertexUv3s=m.has(3),m.clear(),Le}function M(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const mt in T.defines)D.push(mt),D.push(T.defines[mt]);return T.isRawShaderMaterial===!1&&(S(D,T),C(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),T.push(d.mask)}function P(T){const D=E[T.type];let mt;if(D){const H=Pi[D];mt=XM.clone(H.uniforms)}else mt=T.uniforms;return mt}function L(T,D){let mt=v.get(D);return mt!==void 0?++mt.usedTimes:(mt=new m1(o,D,T,l),h.push(mt),v.set(D,mt)),mt}function k(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function B(T){p.remove(T)}function z(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:P,acquireProgram:L,releaseProgram:k,releaseShaderCache:B,programs:h,dispose:z}}function S1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function M1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function x_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function S_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,b,w,M,S){let C=o[e];return C===void 0?(C={id:_.id,object:_,geometry:E,material:b,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:S},o[e]=C):(C.id=_.id,C.object=_,C.geometry=E,C.material=b,C.materialVariant=d(_),C.groupOrder=w,C.renderOrder=_.renderOrder,C.z=M,C.group=S),e++,C}function m(_,E,b,w,M,S){const C=p(_,E,b,w,M,S);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function h(_,E,b,w,M,S){const C=p(_,E,b,w,M,S);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function v(_,E){i.length>1&&i.sort(_||M1),s.length>1&&s.sort(E||x_),l.length>1&&l.sort(E||x_)}function x(){for(let _=e,E=o.length;_<E;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:h,finish:x,sort:v}}function y1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new S_,o.set(s,[d])):l>=u.length?(d=new S_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function E1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Ie};break;case"SpotLight":i={position:new st,direction:new st,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function b1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let T1=0;function A1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function R1(o){const e=new E1,i=b1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new st);const l=new st,u=new nn,d=new nn;function p(h){let v=0,x=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,b=0,w=0,M=0,S=0,C=0,P=0,L=0,k=0,B=0,z=0;h.sort(A1);for(let D=0,mt=h.length;D<mt;D++){const H=h[D],$=H.color,at=H.intensity,ct=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Nr?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=$.r*at,x+=$.g*at,_+=$.b*at;else if(H.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(H.sh.coefficients[N],at);z++}else if(H.isDirectionalLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,lt=i.get(H);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,s.directionalShadow[E]=lt,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=H.shadow.matrix,C++}s.directional[E]=N,E++}else if(H.isSpotLight){const N=e.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy($).multiplyScalar(at),N.distance=ct,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,s.spot[w]=N;const F=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,F.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[w]=F.matrix,H.castShadow){const lt=i.get(H);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,s.spotShadow[w]=lt,s.spotShadowMap[w]=J,L++}w++}else if(H.isRectAreaLight){const N=e.get(H);N.color.copy($).multiplyScalar(at),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=N,M++}else if(H.isPointLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const F=H.shadow,lt=i.get(H);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,lt.shadowCameraNear=F.camera.near,lt.shadowCameraFar=F.camera.far,s.pointShadow[b]=lt,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=H.shadow.matrix,P++}s.point[b]=N,b++}else if(H.isHemisphereLight){const N=e.get(H);N.skyColor.copy(H.color).multiplyScalar(at),N.groundColor.copy(H.groundColor).multiplyScalar(at),s.hemi[S]=N,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==P||T.numSpotShadows!==L||T.numSpotMaps!==k||T.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+k-B,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,T.directionalLength=E,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=P,T.numSpotShadows=L,T.numSpotMaps=k,T.numLightProbes=z,s.version=T1++)}function m(h,v){let x=0,_=0,E=0,b=0,w=0;const M=v.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const P=h[S];if(P.isDirectionalLight){const L=s.directional[x];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(P.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),d.identity(),u.copy(P.matrixWorld),u.premultiply(M),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),b++}else if(P.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const L=s.hemi[w];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function M_(o){const e=new R1(o),i=[],s=[];function l(v){h.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function d(v){s.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function C1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new M_(o),e.set(l,[p])):u>=d.length?(p=new M_(o),d.push(p)):p=d[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U1=[new st(1,0,0),new st(-1,0,0),new st(0,1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1)],N1=[new st(0,-1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1),new st(0,-1,0),new st(0,-1,0)],y_=new nn,Fo=new st,Ld=new st;function L1(o,e,i){let s=new Z_;const l=new Ge,u=new Ge,d=new en,p=new jM,m=new ZM,h={},v=i.maxTextureSize,x={[es]:kn,[kn]:es,[da]:da},_=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:w1,fragmentShader:D1}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const b=new Ri;b.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Sa(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let S=this.type;this.render=function(B,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===FS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dc);const D=o.getRenderTarget(),mt=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(pa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const at=S!==this.type;at&&z.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(J=>J.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,J=B.length;ct<J;ct++){const N=B[ct],F=N.shadow;if(F===void 0){ae("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const lt=F.getFrameExtents();l.multiply(lt),u.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/lt.x),l.x=u.x*lt.x,F.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/lt.y),l.y=u.y*lt.y,F.mapSize.y=u.y));const ht=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ht,F.map===null||at===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Io){if(N.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Bi(l.x,l.y,{format:Nr,type:_a,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Go(l.x,l.y,Fi),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=va,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En}else N.isPointLight?(F.map=new iv(l.x),F.map.depthTexture=new VM(l.x,Hi)):(F.map=new Bi(l.x,l.y),F.map.depthTexture=new Go(l.x,l.y,Hi)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=va,this.type===Dc?(F.map.depthTexture.compareFunction=ht?Ih:Fh,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En);F.camera.updateProjectionMatrix()}const bt=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<bt;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const Y=F.getViewport(O);d.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),$.viewport(d)}if(N.isPointLight){const Y=F.camera,vt=F.matrix,Rt=N.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),Fo.setFromMatrixPosition(N.matrixWorld),Y.position.copy(Fo),Ld.copy(Y.position),Ld.add(U1[O]),Y.up.copy(N1[O]),Y.lookAt(Ld),Y.updateMatrixWorld(),vt.makeTranslation(-Fo.x,-Fo.y,-Fo.z),y_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(y_,Y.coordinateSystem,Y.reversedDepth)}else F.updateMatrices(N);s=F.getFrustum(),L(z,T,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===Io&&C(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(D,mt,H)};function C(B,z){const T=e.update(w);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Bi(l.x,l.y,{format:Nr,type:_a})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,T,_,w,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,T,E,w,null)}function P(B,z,T,D){let mt=null;const H=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)mt=H;else if(mt=T.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const $=mt.uuid,at=z.uuid;let ct=h[$];ct===void 0&&(ct={},h[$]=ct);let J=ct[at];J===void 0&&(J=mt.clone(),ct[at]=J,z.addEventListener("dispose",k)),mt=J}if(mt.visible=z.visible,mt.wireframe=z.wireframe,D===Io?mt.side=z.shadowSide!==null?z.shadowSide:z.side:mt.side=z.shadowSide!==null?z.shadowSide:x[z.side],mt.alphaMap=z.alphaMap,mt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,mt.map=z.map,mt.clipShadows=z.clipShadows,mt.clippingPlanes=z.clippingPlanes,mt.clipIntersection=z.clipIntersection,mt.displacementMap=z.displacementMap,mt.displacementScale=z.displacementScale,mt.displacementBias=z.displacementBias,mt.wireframeLinewidth=z.wireframeLinewidth,mt.linewidth=z.linewidth,T.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const $=o.properties.get(mt);$.light=T}return mt}function L(B,z,T,D,mt){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&mt===Io)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const at=e.update(B),ct=B.material;if(Array.isArray(ct)){const J=at.groups;for(let N=0,F=J.length;N<F;N++){const lt=J[N],ht=ct[lt.materialIndex];if(ht&&ht.visible){const bt=P(B,ht,D,mt);B.onBeforeShadow(o,B,z,T,at,bt,lt),o.renderBufferDirect(T,null,at,bt,B,lt),B.onAfterShadow(o,B,z,T,at,bt,lt)}}}else if(ct.visible){const J=P(B,ct,D,mt);B.onBeforeShadow(o,B,z,T,at,J,null),o.renderBufferDirect(T,null,at,J,B,null),B.onAfterShadow(o,B,z,T,at,J,null)}}const $=B.children;for(let at=0,ct=$.length;at<ct;at++)L($[at],z,T,D,mt)}function k(B){B.target.removeEventListener("dispose",k);for(const T in h){const D=h[T],mt=B.target.uuid;mt in D&&(D[mt].dispose(),delete D[mt])}}}function O1(o,e){function i(){let W=!1;const Ct=new en;let At=null;const Ft=new en(0,0,0,0);return{setMask:function(yt){At!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){W=yt},setClear:function(yt,ut,Bt,ne,Le){Le===!0&&(yt*=ne,ut*=ne,Bt*=ne),Ct.set(yt,ut,Bt,ne),Ft.equals(Ct)===!1&&(o.clearColor(yt,ut,Bt,ne),Ft.copy(Ct))},reset:function(){W=!1,At=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Ct=!1,At=null,Ft=null,yt=null;return{setReversed:function(ut){if(Ct!==ut){const Bt=e.get("EXT_clip_control");ut?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ut;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Ct},setTest:function(ut){ut?xt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ut){At!==ut&&!W&&(o.depthMask(ut),At=ut)},setFunc:function(ut){if(Ct&&(ut=gM[ut]),Ft!==ut){switch(ut){case Id:o.depthFunc(o.NEVER);break;case zd:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Hd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=ut}},setLocked:function(ut){W=ut},setClear:function(ut){yt!==ut&&(yt=ut,Ct&&(ut=1-ut),o.clearDepth(ut))},reset:function(){W=!1,At=null,Ft=null,yt=null,Ct=!1}}}function l(){let W=!1,Ct=null,At=null,Ft=null,yt=null,ut=null,Bt=null,ne=null,Le=null;return{setTest:function(Ee){W||(Ee?xt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Ct!==Ee&&!W&&(o.stencilMask(Ee),Ct=Ee)},setFunc:function(Ee,Cn,pi){(At!==Ee||Ft!==Cn||yt!==pi)&&(o.stencilFunc(Ee,Cn,pi),At=Ee,Ft=Cn,yt=pi)},setOp:function(Ee,Cn,pi){(ut!==Ee||Bt!==Cn||ne!==pi)&&(o.stencilOp(Ee,Cn,pi),ut=Ee,Bt=Cn,ne=pi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Le!==Ee&&(o.clearStencil(Ee),Le=Ee)},reset:function(){W=!1,Ct=null,At=null,Ft=null,yt=null,ut=null,Bt=null,ne=null,Le=null}}}const u=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},x={},_=new WeakMap,E=[],b=null,w=!1,M=null,S=null,C=null,P=null,L=null,k=null,B=null,z=new Ie(0,0,0),T=0,D=!1,mt=null,H=null,$=null,at=null,ct=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(lt)[1]),N=F>=1):lt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),N=F>=2);let ht=null,bt={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),vt=new en().fromArray(O),Rt=new en().fromArray(Y);function It(W,Ct,At,Ft){const yt=new Uint8Array(4),ut=o.createTexture();o.bindTexture(W,ut),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<At;Bt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Ct+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return ut}const et={};et[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),xt(o.DEPTH_TEST),d.setFunc(Dr),oe(!1),Ze(R0),xt(o.CULL_FACE),pe(pa);function xt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Tt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function kt(W,Ct){return x[W]!==Ct?(o.bindFramebuffer(W,Ct),x[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(W,Ct){let At=E,Ft=!1;if(W){At=_.get(Ct),At===void 0&&(At=[],_.set(Ct,At));const yt=W.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ut=0,Bt=yt.length;ut<Bt;ut++)At[ut]=o.COLOR_ATTACHMENT0+ut;At.length=yt.length,Ft=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(At)}function $t(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Ke={[Rs]:o.FUNC_ADD,[zS]:o.FUNC_SUBTRACT,[BS]:o.FUNC_REVERSE_SUBTRACT};Ke[HS]=o.MIN,Ke[GS]=o.MAX;const _e={[VS]:o.ZERO,[kS]:o.ONE,[XS]:o.SRC_COLOR,[Pd]:o.SRC_ALPHA,[KS]:o.SRC_ALPHA_SATURATE,[jS]:o.DST_COLOR,[qS]:o.DST_ALPHA,[WS]:o.ONE_MINUS_SRC_COLOR,[Fd]:o.ONE_MINUS_SRC_ALPHA,[ZS]:o.ONE_MINUS_DST_COLOR,[YS]:o.ONE_MINUS_DST_ALPHA,[QS]:o.CONSTANT_COLOR,[JS]:o.ONE_MINUS_CONSTANT_COLOR,[$S]:o.CONSTANT_ALPHA,[tM]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Ct,At,Ft,yt,ut,Bt,ne,Le,Ee){if(W===pa){w===!0&&(Tt(o.BLEND),w=!1);return}if(w===!1&&(xt(o.BLEND),w=!0),W!==IS){if(W!==M||Ee!==D){if((S!==Rs||L!==Rs)&&(o.blendEquation(o.FUNC_ADD),S=Rs,L=Rs),Ee)switch(W){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Od:o.blendFunc(o.ONE,o.ONE);break;case C0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case w0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Od:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case C0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}C=null,P=null,k=null,B=null,z.set(0,0,0),T=0,M=W,D=Ee}return}yt=yt||Ct,ut=ut||At,Bt=Bt||Ft,(Ct!==S||yt!==L)&&(o.blendEquationSeparate(Ke[Ct],Ke[yt]),S=Ct,L=yt),(At!==C||Ft!==P||ut!==k||Bt!==B)&&(o.blendFuncSeparate(_e[At],_e[Ft],_e[ut],_e[Bt]),C=At,P=Ft,k=ut,B=Bt),(ne.equals(z)===!1||Le!==T)&&(o.blendColor(ne.r,ne.g,ne.b,Le),z.copy(ne),T=Le),M=W,D=!1}function we(W,Ct){W.side===da?Tt(o.CULL_FACE):xt(o.CULL_FACE);let At=W.side===kn;Ct&&(At=!At),oe(At),W.blending===Cr&&W.transparent===!1?pe(pa):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const Ft=W.stencilWrite;p.setTest(Ft),Ft&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){mt!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),mt=W)}function Ze(W){W!==OS?(xt(o.CULL_FACE),W!==H&&(W===R0?o.cullFace(o.BACK):W===PS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),H=W}function G(W){W!==$&&(N&&o.lineWidth(W),$=W)}function We(W,Ct,At){W?(xt(o.POLYGON_OFFSET_FILL),(at!==Ct||ct!==At)&&(at=Ct,ct=At,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,At))):Tt(o.POLYGON_OFFSET_FILL)}function ye(W){W?xt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=o.TEXTURE0+J-1),ht!==W&&(o.activeTexture(W),ht=W)}function qt(W,Ct,At){At===void 0&&(ht===null?At=o.TEXTURE0+J-1:At=ht);let Ft=bt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},bt[At]=Ft),(Ft.type!==W||Ft.texture!==Ct)&&(ht!==At&&(o.activeTexture(At),ht=At),o.bindTexture(W,Ct||et[W]),Ft.type=W,Ft.texture=Ct)}function U(){const W=bt[ht];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function St(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function wt(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Et(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Mt(W){vt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function Ot(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Lt(W,Ct){let At=h.get(Ct);At===void 0&&(At=new WeakMap,h.set(Ct,At));let Ft=At.get(W);Ft===void 0&&(Ft=o.getUniformBlockIndex(Ct,W.name),At.set(W,Ft))}function Pt(W,Ct){const Ft=h.get(Ct).get(W);m.get(Ct)!==Ft&&(o.uniformBlockBinding(Ct,Ft,W.__bindingPointIndex),m.set(Ct,Ft))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ht=null,bt={},x={},_=new WeakMap,E=[],b=null,w=!1,M=null,S=null,C=null,P=null,L=null,k=null,B=null,z=new Ie(0,0,0),T=0,D=!1,mt=null,H=null,$=null,at=null,ct=null,vt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:xt,disable:Tt,bindFramebuffer:kt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:we,setFlipSided:oe,setCullFace:Ze,setLineWidth:G,setPolygonOffset:We,setScissorTest:ye,activeTexture:Ue,bindTexture:qt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:te,texImage3D:Et,updateUBOMapping:Lt,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Xt,scissor:Mt,viewport:Ot,reset:ce}}function P1(o,e,i,s,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,v=new WeakMap;let x;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,y){return E?new OffscreenCanvas(U,y):zc("canvas")}function w(U,y,q){let pt=1;const St=qt(U);if((St.width>q||St.height>q)&&(pt=q/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(pt*St.width),Xt=Math.floor(pt*St.height);x===void 0&&(x=b(ft,Xt));const wt=y?b(ft,Xt):x;return wt.width=ft,wt.height=Xt,wt.getContext("2d").drawImage(U,0,0,ft,Xt),ae("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Xt+")."),wt}else return"data"in U&&ae("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,y,q,pt,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=y;if(y===o.RED&&(q===o.FLOAT&&(ft=o.R32F),q===o.HALF_FLOAT&&(ft=o.R16F),q===o.UNSIGNED_BYTE&&(ft=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ft=o.R8UI),q===o.UNSIGNED_SHORT&&(ft=o.R16UI),q===o.UNSIGNED_INT&&(ft=o.R32UI),q===o.BYTE&&(ft=o.R8I),q===o.SHORT&&(ft=o.R16I),q===o.INT&&(ft=o.R32I)),y===o.RG&&(q===o.FLOAT&&(ft=o.RG32F),q===o.HALF_FLOAT&&(ft=o.RG16F),q===o.UNSIGNED_BYTE&&(ft=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ft=o.RG8UI),q===o.UNSIGNED_SHORT&&(ft=o.RG16UI),q===o.UNSIGNED_INT&&(ft=o.RG32UI),q===o.BYTE&&(ft=o.RG8I),q===o.SHORT&&(ft=o.RG16I),q===o.INT&&(ft=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),q===o.UNSIGNED_INT&&(ft=o.RGB32UI),q===o.BYTE&&(ft=o.RGB8I),q===o.SHORT&&(ft=o.RGB16I),q===o.INT&&(ft=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),q===o.UNSIGNED_INT&&(ft=o.RGBA32UI),q===o.BYTE&&(ft=o.RGBA8I),q===o.SHORT&&(ft=o.RGBA16I),q===o.INT&&(ft=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),y===o.RGBA){const Xt=St?Fc:be.getTransfer(pt);q===o.FLOAT&&(ft=o.RGBA32F),q===o.HALF_FLOAT&&(ft=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ft=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function L(U,y){let q;return U?y===null||y===Hi||y===Ho?q=o.DEPTH24_STENCIL8:y===Fi?q=o.DEPTH32F_STENCIL8:y===Bo&&(q=o.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===Ho?q=o.DEPTH_COMPONENT24:y===Fi?q=o.DEPTH_COMPONENT32F:y===Bo&&(q=o.DEPTH_COMPONENT16),q}function k(U,y){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function B(U){const y=U.target;y.removeEventListener("dispose",B),T(y),y.isVideoTexture&&v.delete(y)}function z(U){const y=U.target;y.removeEventListener("dispose",z),mt(y)}function T(U){const y=s.get(U);if(y.__webglInit===void 0)return;const q=U.source,pt=_.get(q);if(pt){const St=pt[y.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(U),Object.keys(pt).length===0&&_.delete(q)}s.remove(U)}function D(U){const y=s.get(U);o.deleteTexture(y.__webglTexture);const q=U.source,pt=_.get(q);delete pt[y.__cacheKey],d.memory.textures--}function mt(U){const y=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(y.__webglFramebuffer[pt]))for(let St=0;St<y.__webglFramebuffer[pt].length;St++)o.deleteFramebuffer(y.__webglFramebuffer[pt][St]);else o.deleteFramebuffer(y.__webglFramebuffer[pt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[pt])}else{if(Array.isArray(y.__webglFramebuffer))for(let pt=0;pt<y.__webglFramebuffer.length;pt++)o.deleteFramebuffer(y.__webglFramebuffer[pt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pt=0;pt<y.__webglColorRenderbuffer.length;pt++)y.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[pt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=U.textures;for(let pt=0,St=q.length;pt<St;pt++){const ft=s.get(q[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),d.memory.textures--),s.remove(q[pt])}s.remove(U)}let H=0;function $(){H=0}function at(){const U=H;return U>=l.maxTextures&&ae("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function ct(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function J(U,y){const q=s.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const pt=U.image;if(pt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,U,y);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function N(U,y){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,y);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function F(U,y){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function lt(U,y){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){xt(q,U,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const ht={[Xd]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[Wd]:o.MIRRORED_REPEAT},bt={[En]:o.NEAREST,[iM]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[id]:o.LINEAR_MIPMAP_NEAREST,[ws]:o.LINEAR_MIPMAP_LINEAR},O={[oM]:o.NEVER,[dM]:o.ALWAYS,[lM]:o.LESS,[Fh]:o.LEQUAL,[cM]:o.EQUAL,[Ih]:o.GEQUAL,[uM]:o.GREATER,[fM]:o.NOTEQUAL};function Y(U,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===id||y.magFilter===sc||y.magFilter===ws||y.minFilter===Rn||y.minFilter===id||y.minFilter===sc||y.minFilter===ws)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ht[y.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ht[y.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ht[y.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,bt[y.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,bt[y.minFilter]),y.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==sc&&y.minFilter!==ws||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function vt(U,y){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",B));const pt=y.source;let St=_.get(pt);St===void 0&&(St={},_.set(pt,St));const ft=ct(y);if(ft!==U.__cacheKey){St[ft]===void 0&&(St[ft]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),St[ft].usedTimes++;const Xt=St[U.__cacheKey];Xt!==void 0&&(St[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(y)),U.__cacheKey=ft,U.__webglTexture=St[ft].texture}return q}function Rt(U,y,q){return Math.floor(Math.floor(U/q)/y)}function It(U,y,q,pt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,pt,y.data);else{ft.sort((Et,Mt)=>Et.start-Mt.start);let Xt=0;for(let Et=1;Et<ft.length;Et++){const Mt=ft[Xt],Ot=ft[Et],Lt=Mt.start+Mt.count,Pt=Rt(Ot.start,y.width,4),ce=Rt(Mt.start,y.width,4);Ot.start<=Lt+1&&Pt===ce&&Rt(Ot.start+Ot.count-1,y.width,4)===Pt?Mt.count=Math.max(Mt.count,Ot.start+Ot.count-Mt.start):(++Xt,ft[Xt]=Ot)}ft.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Et=0,Mt=ft.length;Et<Mt;Et++){const Ot=ft[Et],Lt=Math.floor(Ot.start/4),Pt=Math.ceil(Ot.count/4),ce=Lt%y.width,W=Math.floor(Lt/y.width),Ct=Pt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Ct,At,q,pt,y.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function et(U,y,q){let pt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pt=o.TEXTURE_3D);const St=vt(U,y),ft=y.source;i.bindTexture(pt,U.__webglTexture,o.TEXTURE0+q);const Xt=s.get(ft);if(ft.version!==Xt.__version||St===!0){i.activeTexture(o.TEXTURE0+q);const wt=be.getPrimaries(be.workingColorSpace),Zt=y.colorSpace===$a?null:be.getPrimaries(y.colorSpace),te=y.colorSpace===$a||wt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Et=w(y.image,!1,l.maxTextureSize);Et=Ue(y,Et);const Mt=u.convert(y.format,y.colorSpace),Ot=u.convert(y.type);let Lt=P(y.internalFormat,Mt,Ot,y.colorSpace,y.isVideoTexture);Y(pt,y);let Pt;const ce=y.mipmaps,W=y.isVideoTexture!==!0,Ct=Xt.__version===void 0||St===!0,At=ft.dataReady,Ft=k(y,Et);if(y.isDepthTexture)Lt=L(y.format===Ds,y.type),Ct&&(W?i.texStorage2D(o.TEXTURE_2D,1,Lt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Lt,Et.width,Et.height,0,Mt,Ot,null));else if(y.isDataTexture)if(ce.length>0){W&&Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Lt,ce[0].width,ce[0].height);for(let yt=0,ut=ce.length;yt<ut;yt++)Pt=ce[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,Lt,Pt.width,Pt.height,0,Mt,Ot,Pt.data);y.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Lt,Et.width,Et.height),At&&It(y,Et,Mt,Ot)):i.texImage2D(o.TEXTURE_2D,0,Lt,Et.width,Et.height,0,Mt,Ot,Et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Lt,ce[0].width,ce[0].height,Et.depth);for(let yt=0,ut=ce.length;yt<ut;yt++)if(Pt=ce[yt],y.format!==Ti)if(Mt!==null)if(W){if(At)if(y.layerUpdates.size>0){const Bt=$0(Pt.width,Pt.height,y.format,y.type);for(const ne of y.layerUpdates){const Le=Pt.data.subarray(ne*Bt/Pt.data.BYTES_PER_ELEMENT,(ne+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,Pt.width,Pt.height,1,Mt,Le)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,Et.depth,Mt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Lt,Pt.width,Pt.height,Et.depth,0,Pt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,Et.depth,Mt,Ot,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Lt,Pt.width,Pt.height,Et.depth,0,Mt,Ot,Pt.data)}else{W&&Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Lt,ce[0].width,ce[0].height);for(let yt=0,ut=ce.length;yt<ut;yt++)Pt=ce[yt],y.format!==Ti?Mt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Mt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Lt,Pt.width,Pt.height,0,Pt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,Lt,Pt.width,Pt.height,0,Mt,Ot,Pt.data)}else if(y.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Lt,Et.width,Et.height,Et.depth),At)if(y.layerUpdates.size>0){const yt=$0(Et.width,Et.height,y.format,y.type);for(const ut of y.layerUpdates){const Bt=Et.data.subarray(ut*yt/Et.data.BYTES_PER_ELEMENT,(ut+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ut,Et.width,Et.height,1,Mt,Ot,Bt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Mt,Ot,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,Et.width,Et.height,Et.depth,0,Mt,Ot,Et.data);else if(y.isData3DTexture)W?(Ct&&i.texStorage3D(o.TEXTURE_3D,Ft,Lt,Et.width,Et.height,Et.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Mt,Ot,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,Et.width,Et.height,Et.depth,0,Mt,Ot,Et.data);else if(y.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(o.TEXTURE_2D,Ft,Lt,Et.width,Et.height);else{let yt=Et.width,ut=Et.height;for(let Bt=0;Bt<Ft;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Lt,yt,ut,0,Mt,Ot,null),yt>>=1,ut>>=1}}else if(ce.length>0){if(W&&Ct){const yt=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Ft,Lt,yt.width,yt.height)}for(let yt=0,ut=ce.length;yt<ut;yt++)Pt=ce[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Mt,Ot,Pt):i.texImage2D(o.TEXTURE_2D,yt,Lt,Mt,Ot,Pt);y.generateMipmaps=!1}else if(W){if(Ct){const yt=qt(Et);i.texStorage2D(o.TEXTURE_2D,Ft,Lt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Ot,Et)}else i.texImage2D(o.TEXTURE_2D,0,Lt,Mt,Ot,Et);M(y)&&S(pt),Xt.__version=ft.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function xt(U,y,q){if(y.image.length!==6)return;const pt=vt(U,y),St=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+q);const ft=s.get(St);if(St.version!==ft.__version||pt===!0){i.activeTexture(o.TEXTURE0+q);const Xt=be.getPrimaries(be.workingColorSpace),wt=y.colorSpace===$a?null:be.getPrimaries(y.colorSpace),Zt=y.colorSpace===$a||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let ut=0;ut<6;ut++)!te&&!Et?Mt[ut]=w(y.image[ut],!0,l.maxCubemapSize):Mt[ut]=Et?y.image[ut].image:y.image[ut],Mt[ut]=Ue(y,Mt[ut]);const Ot=Mt[0],Lt=u.convert(y.format,y.colorSpace),Pt=u.convert(y.type),ce=P(y.internalFormat,Lt,Pt,y.colorSpace),W=y.isVideoTexture!==!0,Ct=ft.__version===void 0||pt===!0,At=St.dataReady;let Ft=k(y,Ot);Y(o.TEXTURE_CUBE_MAP,y);let yt;if(te){W&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ce,Ot.width,Ot.height);for(let ut=0;ut<6;ut++){yt=Mt[ut].mipmaps;for(let Bt=0;Bt<yt.length;Bt++){const ne=yt[Bt];y.format!==Ti?Lt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,0,0,ne.width,ne.height,Lt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,ce,ne.width,ne.height,0,ne.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,0,0,ne.width,ne.height,Lt,Pt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt,ce,ne.width,ne.height,0,Lt,Pt,ne.data)}}}else{if(yt=y.mipmaps,W&&Ct){yt.length>0&&Ft++;const ut=qt(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ce,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Et){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Mt[ut].width,Mt[ut].height,Lt,Pt,Mt[ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,Mt[ut].width,Mt[ut].height,0,Lt,Pt,Mt[ut].data);for(let Bt=0;Bt<yt.length;Bt++){const Le=yt[Bt].image[ut].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,0,0,Le.width,Le.height,Lt,Pt,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,ce,Le.width,Le.height,0,Lt,Pt,Le.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt,Pt,Mt[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,Lt,Pt,Mt[ut]);for(let Bt=0;Bt<yt.length;Bt++){const ne=yt[Bt];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,0,0,Lt,Pt,ne.image[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Bt+1,ce,Lt,Pt,ne.image[ut])}}}M(y)&&S(o.TEXTURE_CUBE_MAP),ft.__version=St.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Tt(U,y,q,pt,St,ft){const Xt=u.convert(q.format,q.colorSpace),wt=u.convert(q.type),Zt=P(q.internalFormat,Xt,wt,q.colorSpace),te=s.get(y),Et=s.get(q);if(Et.__renderTarget=y,!te.__hasExternalTextures){const Mt=Math.max(1,y.width>>ft),Ot=Math.max(1,y.height>>ft);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ft,Zt,Mt,Ot,y.depth,0,Xt,wt,null):i.texImage2D(St,ft,Zt,Mt,Ot,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,St,Et.__webglTexture,0,G(y)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,St,Et.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(U,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),y.depthBuffer){const pt=y.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ft=L(y.stencilBuffer,St),Xt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ft,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ft,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ft,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const pt=y.textures;for(let St=0;St<pt.length;St++){const ft=pt[St],Xt=u.convert(ft.format,ft.colorSpace),wt=u.convert(ft.type),Zt=P(ft.internalFormat,Xt,wt,ft.colorSpace);We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Zt,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Zt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(U,y,q){const pt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(y.depthTexture);if(St.__renderTarget=y,(!St.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y.depthTexture);const te=u.convert(y.depthTexture.format),Et=u.convert(y.depthTexture.type);let Mt;y.depthTexture.format===va?Mt=o.DEPTH_COMPONENT24:y.depthTexture.format===Ds&&(Mt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Mt,y.width,y.height,0,te,Et,null)}}else J(y.depthTexture,0);const ft=St.__webglTexture,Xt=G(y),wt=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Zt=y.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===va)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,ft,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,ft,0);else if(y.depthTexture.format===Ds)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,ft,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,ft,0);else throw new Error("Unknown depthTexture format")}function $t(U){const y=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pt){const St=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),y.__depthDisposeCallback=St}y.__boundDepthTexture=pt}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Kt(y.__webglFramebuffer[pt],U,pt);else{const pt=U.texture.mipmaps;pt&&pt.length>0?Kt(y.__webglFramebuffer[0],U,0):Kt(y.__webglFramebuffer,U,0)}else if(q){y.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[pt]),y.__webglDepthbuffer[pt]===void 0)y.__webglDepthbuffer[pt]=o.createRenderbuffer(),kt(y.__webglDepthbuffer[pt],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=y.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),kt(y.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,y,q){const pt=s.get(U);y!==void 0&&Tt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&$t(U)}function _e(U){const y=U.texture,q=s.get(U),pt=s.get(y);U.addEventListener("dispose",z);const St=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Xt=St.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=y.version,d.memory.textures++),ft){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<y.mipmaps.length;Zt++)q.__webglFramebuffer[wt][Zt]=o.createFramebuffer()}else q.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<y.mipmaps.length;wt++)q.__webglFramebuffer[wt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=s.get(St[wt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&We(U)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Zt=St[wt];q.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const te=u.convert(Zt.format,Zt.colorSpace),Et=u.convert(Zt.type),Mt=P(Zt.internalFormat,te,Et,Zt.colorSpace,U.isXRRenderTarget===!0),Ot=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Mt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y);for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[wt][Zt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Tt(q.__webglFramebuffer[wt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(y)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=St[wt],Et=s.get(te);let Mt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Mt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,Et.__webglTexture),Y(Mt,te),Tt(q.__webglFramebuffer,U,te,o.COLOR_ATTACHMENT0+wt,Mt,0),M(te)&&S(Mt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,pt.__webglTexture),Y(wt,y),y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Zt],U,y,o.COLOR_ATTACHMENT0,wt,Zt);else Tt(q.__webglFramebuffer,U,y,o.COLOR_ATTACHMENT0,wt,0);M(y)&&S(wt),i.unbindTexture()}U.depthBuffer&&$t(U)}function pe(U){const y=U.textures;for(let q=0,pt=y.length;q<pt;q++){const St=y[q];if(M(St)){const ft=C(U),Xt=s.get(St).__webglTexture;i.bindTexture(ft,Xt),S(ft),i.unbindTexture()}}}const we=[],oe=[];function Ze(U){if(U.samples>0){if(We(U)===!1){const y=U.textures,q=U.width,pt=U.height;let St=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),wt=y.length>1;if(wt)for(let te=0;te<y.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<y.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Et=s.get(y[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,q,pt,0,0,q,pt,St,o.NEAREST),m===!0&&(we.length=0,oe.length=0,we.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ft),oe.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<y.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Et=s.get(y[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function We(U){const y=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(U){const y=d.render.frame;v.get(U)!==y&&(v.set(U,y),U.update())}function Ue(U,y){const q=U.colorSpace,pt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Lr&&q!==$a&&(be.getTransfer(q)===Fe?(pt!==Ti||St!==hi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),y}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=at,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=lt,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function F1(o,e){function i(s,l=$a){let u;const d=be.getTransfer(l);if(s===hi)return o.UNSIGNED_BYTE;if(s===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Nh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===F_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===I_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===O_)return o.BYTE;if(s===P_)return o.SHORT;if(s===Bo)return o.UNSIGNED_SHORT;if(s===Dh)return o.INT;if(s===Hi)return o.UNSIGNED_INT;if(s===Fi)return o.FLOAT;if(s===_a)return o.HALF_FLOAT;if(s===z_)return o.ALPHA;if(s===B_)return o.RGB;if(s===Ti)return o.RGBA;if(s===va)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===H_)return o.RED;if(s===Lh)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Oh)return o.RG_INTEGER;if(s===Ph)return o.RGBA_INTEGER;if(s===Uc||s===Nc||s===Lc||s===Oc)if(d===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===Yd||s===jd||s===Zd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===th||s===eh||s===nh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Kd||s===Qd)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Jd)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===$d)return u.COMPRESSED_R11_EAC;if(s===th)return u.COMPRESSED_SIGNED_R11_EAC;if(s===eh)return u.COMPRESSED_RG11_EAC;if(s===nh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ih)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ah)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_h||s===vh||s===xh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===_h)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===Mh||s===yh||s===Eh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Mh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const I1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new J_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Gi({vertexShader:I1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Sa(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H1 extends Pr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,v=null,x=null,_=null,E=null,b=null;const w=typeof XRWebGLBinding<"u",M=new B1,S={},C=i.getContextAttributes();let P=null,L=null;const k=[],B=[],z=new Ge;let T=null;const D=new di;D.viewport=new en;const mt=new di;mt.viewport=new en;const H=[D,mt],$=new QM;let at=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let xt=k[et];return xt===void 0&&(xt=new fd,k[et]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(et){let xt=k[et];return xt===void 0&&(xt=new fd,k[et]=xt),xt.getGripSpace()},this.getHand=function(et){let xt=k[et];return xt===void 0&&(xt=new fd,k[et]=xt),xt.getHandSpace()};function J(et){const xt=B.indexOf(et.inputSource);if(xt===-1)return;const Tt=k[xt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,h||d),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",F);for(let et=0;et<k.length;et++){const xt=B[et];xt!==null&&(B[et]=null,k[et].disconnect(xt))}at=null,ct=null,M.reset();for(const et in S)delete S[et];e.setRenderTarget(P),E=null,_=null,x=null,l=null,L=null,It.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",N),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,Kt=null;C.depth&&(Kt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=C.stencil?Ds:va,kt=C.stencil?Ho:Hi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};x=this.getBinding(),_=x.createProjectionLayer($t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Bi(_.textureWidth,_.textureHeight,{format:Ti,type:hi,depthTexture:new Go(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(et){for(let xt=0;xt<et.removed.length;xt++){const Tt=et.removed[xt],kt=B.indexOf(Tt);kt>=0&&(B[kt]=null,k[kt].disconnect(Tt))}for(let xt=0;xt<et.added.length;xt++){const Tt=et.added[xt];let kt=B.indexOf(Tt);if(kt===-1){for(let $t=0;$t<k.length;$t++)if($t>=B.length){B.push(Tt),kt=$t;break}else if(B[$t]===null){B[$t]=Tt,kt=$t;break}if(kt===-1)break}const Kt=k[kt];Kt&&Kt.connect(Tt)}}const lt=new st,ht=new st;function bt(et,xt,Tt){lt.setFromMatrixPosition(xt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const kt=lt.distanceTo(ht),Kt=xt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Ke=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],we=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ze=($t[8]+1)/$t[0],G=Ke*oe,We=Ke*Ze,ye=kt/(-oe+Ze),Ue=ye*-oe;if(xt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ue),et.translateZ(ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Kt[10]===-1)et.projectionMatrix.copy(xt.projectionMatrix),et.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const qt=Ke+ye,U=_e+ye,y=G-Ue,q=We+(kt-Ue),pt=pe*_e/U*qt,St=we*_e/U*qt;et.projectionMatrix.makePerspective(y,q,pt,St,qt,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function O(et,xt){xt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(xt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let xt=et.near,Tt=et.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),$.near=mt.near=D.near=xt,$.far=mt.far=D.far=Tt,(at!==$.near||ct!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),at=$.near,ct=$.far),$.layers.mask=et.layers.mask|6,D.layers.mask=$.layers.mask&-5,mt.layers.mask=$.layers.mask&-3;const kt=et.parent,Kt=$.cameras;O($,kt);for(let $t=0;$t<Kt.length;$t++)O(Kt[$t],kt);Kt.length===2?bt($,D,mt):$.projectionMatrix.copy(D.projectionMatrix),Y(et,$,kt)};function Y(et,xt,Tt){Tt===null?et.matrix.copy(xt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(xt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(xt.projectionMatrix),et.projectionMatrixInverse.copy(xt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=bh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(et){m=et,_!==null&&(_.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(et){return S[et]};let vt=null;function Rt(et,xt){if(v=xt.getViewerPose(h||d),b=xt,v!==null){const Tt=v.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let kt=!1;Tt.length!==$.cameras.length&&($.cameras.length=0,kt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let we=null;if(E!==null)we=E.getViewport(pe);else{const Ze=x.getViewSubImage(_,pe);we=Ze.viewport,_e===0&&(e.setRenderTargetTextures(L,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(L))}let oe=H[_e];oe===void 0&&(oe=new di,oe.layers.enable(_e),oe.viewport=new en,H[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(we.x,we.y,we.width,we.height),_e===0&&($.matrix.copy(oe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),kt===!0&&$.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const _e=x.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(Kt&&Kt.includes("camera-access")&&w){e.state.unbindTexture(),x=s.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let we=S[pe];we||(we=new J_,S[pe]=we);const oe=x.getCameraImage(pe);we.sourceTexture=oe}}}}for(let Tt=0;Tt<k.length;Tt++){const kt=B[Tt],Kt=k[Tt];kt!==null&&Kt!==void 0&&Kt.update(kt,xt,h||d)}vt&&vt(et,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),b=null}const It=new nv;It.setAnimationLoop(Rt),this.setAnimationLoop=function(et){vt=et},this.dispose=function(){}}}const Ts=new xa,G1=new nn;function V1(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,$_(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,P,L){S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),x(M,S)):S.isMeshPhongMaterial?(u(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),_(M,S),S.isMeshPhysicalMaterial&&E(M,S,L)):S.isMeshMatcapMaterial?(u(M,S),b(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),w(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,C,P):S.isSpriteMaterial?h(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===kn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===kn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=e.get(S),P=C.envMap,L=C.envMapRotation;P&&(M.envMap.value=P,Ts.copy(L),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),M.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Ts)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function k1(o,e,i,s){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const L=P.program;s.uniformBlockBinding(C,L)}function h(C,P){let L=l[C.id];L===void 0&&(b(C),L=v(C),l[C.id]=L,C.addEventListener("dispose",M));const k=P.program;s.updateUBOMapping(C,k);const B=e.render.frame;u[C.id]!==B&&(_(C),u[C.id]=B)}function v(C){const P=x();C.__bindingPointIndex=P;const L=o.createBuffer(),k=C.__size,B=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,k,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function x(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const P=l[C.id],L=C.uniforms,k=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,z=L.length;B<z;B++){const T=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,mt=T.length;D<mt;D++){const H=T[D];if(E(H,B,D,k)===!0){const $=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let J=0;J<at.length;J++){const N=at[J],F=w(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,$+ct,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,ct),ct+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(C,P,L,k){const B=C.value,z=P+"_"+L;if(k[z]===void 0)return typeof B=="number"||typeof B=="boolean"?k[z]=B:k[z]=B.clone(),!0;{const T=k[z];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return k[z]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(C){const P=C.uniforms;let L=0;const k=16;for(let z=0,T=P.length;z<T;z++){const D=Array.isArray(P[z])?P[z]:[P[z]];for(let mt=0,H=D.length;mt<H;mt++){const $=D[mt],at=Array.isArray($.value)?$.value:[$.value];for(let ct=0,J=at.length;ct<J;ct++){const N=at[ct],F=w(N),lt=L%k,ht=lt%F.boundary,bt=lt+ht;L+=ht,bt!==0&&k-bt<F.storage&&(L+=k-bt),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=F.storage}}}const B=L%k;return B>0&&(L+=k-B),C.__size=L,C.__cache={},this}function w(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",C),P}function M(C){const P=C.target;P.removeEventListener("dispose",M);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function S(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},u={}}return{bind:m,update:h,dispose:S}}const X1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function W1(){return Oi===null&&(Oi=new IM(X1,16,16,Nr,_a),Oi.name="DFG_LUT",Oi.minFilter=Rn,Oi.magFilter=Rn,Oi.wrapS=ha,Oi.wrapT=ha,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class q1{constructor(e={}){const{canvas:i=pM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:E=hi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const w=E,M=new Set([Ph,Oh,Lh]),S=new Set([hi,Hi,Bo,Ho,Uh,Nh]),C=new Uint32Array(4),P=new Int32Array(4);let L=null,k=null;const B=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let mt=!1;this._outputColorSpace=fi;let H=0,$=0,at=null,ct=-1,J=null;const N=new en,F=new en;let lt=null;const ht=new Ie(0);let bt=0,O=i.width,Y=i.height,vt=1,Rt=null,It=null;const et=new en(0,0,O,Y),xt=new en(0,0,O,Y);let Tt=!1;const kt=new Z_;let Kt=!1,$t=!1;const Ke=new nn,_e=new st,pe=new en,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return at===null?vt:1}let G=s;function We(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Le,!1),G===null){const X="webgl2";if(G=We(X,R),G===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let ye,Ue,qt,U,y,q,pt,St,ft,Xt,wt,Zt,te,Et,Mt,Ot,Lt,Pt,ce,W,Ct,At,Ft;function yt(){ye=new qb(G),ye.init(),Ct=new F1(G,ye),Ue=new zb(G,ye,e,Ct),qt=new O1(G,ye),Ue.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),U=new Zb(G),y=new S1,q=new P1(G,ye,qt,y,Ue,Ct,U),pt=new Wb(D),St=new ty(G),At=new Fb(G,St),ft=new Yb(G,St,U,At),Xt=new Qb(G,ft,St,At,U),Pt=new Kb(G,Ue,q),Mt=new Bb(y),wt=new x1(D,pt,ye,Ue,At,Mt),Zt=new V1(D,y),te=new y1,Et=new C1(ye),Lt=new Pb(D,pt,qt,Xt,b,m),Ot=new L1(D,Xt,Ue),Ft=new k1(G,U,Ue,qt),ce=new Ib(G,ye,U),W=new jb(G,ye,U),U.programs=wt.programs,D.capabilities=Ue,D.extensions=ye,D.properties=y,D.renderLists=te,D.shadowMap=Ot,D.state=qt,D.info=U}yt(),w!==hi&&(T=new $b(w,i.width,i.height,l,u));const ut=new H1(D,G);this.xr=ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,X,rt=!0){if(ut.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=X,i.width=Math.floor(R*vt),i.height=Math.floor(X*vt),rt===!0&&(i.style.width=R+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(O*vt,Y*vt).floor()},this.setDrawingBufferSize=function(R,X,rt){O=R,Y=X,vt=rt,i.width=Math.floor(R*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,X,rt,tt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,X,rt,tt),qt.viewport(N.copy(et).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,X,rt,tt){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,X,rt,tt),qt.scissor(F.copy(xt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){qt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,rt=!0){let tt=0;if(R){let Z=!1;if(at!==null){const Dt=at.texture.format;Z=M.has(Dt)}if(Z){const Dt=at.texture.type,zt=S.has(Dt),Ut=Lt.getClearColor(),Wt=Lt.getClearAlpha(),jt=Ut.r,ee=Ut.g,se=Ut.b;zt?(C[0]=jt,C[1]=ee,C[2]=se,C[3]=Wt,G.clearBufferuiv(G.COLOR,0,C)):(P[0]=jt,P[1]=ee,P[2]=se,P[3]=Wt,G.clearBufferiv(G.COLOR,0,P))}else tt|=G.COLOR_BUFFER_BIT}X&&(tt|=G.DEPTH_BUFFER_BIT),rt&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),Lt.dispose(),te.dispose(),Et.dispose(),y.dispose(),pt.dispose(),Xt.dispose(),At.dispose(),Ft.dispose(),wt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ls),ut.removeEventListener("sessionend",Os),Ci.stop()};function Bt(R){R.preventDefault(),O0("WebGLRenderer: Context Lost."),mt=!0}function ne(){O0("WebGLRenderer: Context Restored."),mt=!1;const R=U.autoReset,X=Ot.enabled,rt=Ot.autoUpdate,tt=Ot.needsUpdate,Z=Ot.type;yt(),U.autoReset=R,Ot.enabled=X,Ot.autoUpdate=rt,Ot.needsUpdate=tt,Ot.type=Z}function Le(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const X=R.target;X.removeEventListener("dispose",Ee),Cn(X)}function Cn(R){pi(R),y.remove(R)}function pi(R){const X=y.get(R).programs;X!==void 0&&(X.forEach(function(rt){wt.releaseProgram(rt)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,rt,tt,Z,Dt){X===null&&(X=we);const zt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ut=Zo(R,X,rt,tt,Z);qt.setMaterial(tt,zt);let Wt=rt.index,jt=1;if(tt.wireframe===!0){if(Wt=ft.getWireframeAttribute(rt),Wt===void 0)return;jt=2}const ee=rt.drawRange,se=rt.attributes.position;let Ht=ee.start*jt,ue=(ee.start+ee.count)*jt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*jt),ue=Math.min(ue,(Dt.start+Dt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,Wt.count)):se!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,se.count));const qe=ue-Ht;if(qe<0||qe===1/0)return;At.setup(Z,tt,Ut,rt,Wt);let Ye,Te=ce;if(Wt!==null&&(Ye=St.get(Wt),Te=W,Te.setIndex(Ye)),Z.isMesh)tt.wireframe===!0?(qt.setLineWidth(tt.wireframeLinewidth*Ze()),Te.setMode(G.LINES)):Te.setMode(G.TRIANGLES);else if(Z.isLine){let hn=tt.linewidth;hn===void 0&&(hn=1),qt.setLineWidth(hn*Ze()),Z.isLineSegments?Te.setMode(G.LINES):Z.isLineLoop?Te.setMode(G.LINE_LOOP):Te.setMode(G.LINE_STRIP)}else Z.isPoints?Te.setMode(G.POINTS):Z.isSprite&&Te.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Bc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Te.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const hn=Z._multiDrawStarts,Vt=Z._multiDrawCounts,wn=Z._multiDrawCount,ie=Wt?St.get(Wt).bytesPerElement:1,Dn=y.get(tt).currentProgram.getUniforms();for(let Wn=0;Wn<wn;Wn++)Dn.setValue(G,"_gl_DrawID",Wn),Te.render(hn[Wn]/ie,Vt[Wn])}else if(Z.isInstancedMesh)Te.renderInstances(Ht,qe,Z.count);else if(rt.isInstancedBufferGeometry){const hn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vt=Math.min(rt.instanceCount,hn);Te.renderInstances(Ht,qe,Vt)}else Te.render(Ht,qe)};function zr(R,X,rt){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Ma(R,X,rt),R.side=es,R.needsUpdate=!0,Ma(R,X,rt),R.side=da):Ma(R,X,rt)}this.compile=function(R,X,rt=null){rt===null&&(rt=R),k=Et.get(rt),k.init(X),z.push(k),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(k.pushLight(Z),Z.castShadow&&k.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(k.pushLight(Z),Z.castShadow&&k.pushShadow(Z))}),k.setupLights();const tt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Ut=Dt[zt];zr(Ut,rt,Z),tt.add(Ut)}else zr(Dt,rt,Z),tt.add(Dt)}),k=z.pop(),tt},this.compileAsync=function(R,X,rt=null){const tt=this.compile(R,X,rt);return new Promise(Z=>{function Dt(){if(tt.forEach(function(zt){y.get(zt).currentProgram.isReady()&&tt.delete(zt)}),tt.size===0){Z(R);return}setTimeout(Dt,10)}ye.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ns=null;function qo(R){Ns&&Ns(R)}function Ls(){Ci.stop()}function Os(){Ci.start()}const Ci=new nv;Ci.setAnimationLoop(qo),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){Ns=R,ut.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},ut.addEventListener("sessionstart",Ls),ut.addEventListener("sessionend",Os),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const rt=ut.enabled===!0&&ut.isPresenting===!0,tt=T!==null&&(at===null||rt)&&T.begin(D,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,at),k=Et.get(R,z.length),k.init(X),z.push(k),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),kt.setFromProjectionMatrix(Ke,Ii,X.reversedDepth),$t=this.localClippingEnabled,Kt=Mt.init(this.clippingPlanes,$t),L=te.get(R,B.length),L.init(),B.push(L),ut.enabled===!0&&ut.isPresenting===!0){const zt=D.xr.getDepthSensingMesh();zt!==null&&Ps(zt,X,-1/0,D.sortObjects)}Ps(R,X,0,D.sortObjects),L.finish(),D.sortObjects===!0&&L.sort(Rt,It),oe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,oe&&Lt.addToRenderList(L,R),this.info.render.frame++,Kt===!0&&Mt.beginShadows();const Z=k.state.shadowsArray;if(Ot.render(Z,R,X),Kt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&T.hasRenderPass())===!1){const zt=L.opaque,Ut=L.transmissive;if(k.setupLights(),X.isArrayCamera){const Wt=X.cameras;if(Ut.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const se=Wt[jt];an(zt,Ut,R,se)}oe&&Lt.render(R);for(let jt=0,ee=Wt.length;jt<ee;jt++){const se=Wt[jt];mi(L,R,se,se.viewport)}}else Ut.length>0&&an(zt,Ut,R,X),oe&&Lt.render(R),mi(L,R,X)}at!==null&&$===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),tt&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,X),At.resetDefaultState(),ct=-1,J=null,z.pop(),z.length>0?(k=z[z.length-1],Kt===!0&&Mt.setGlobalState(D.clippingPlanes,k.state.camera)):k=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function Ps(R,X,rt,tt){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)k.pushLight(R),R.castShadow&&k.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){tt&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const zt=Xt.update(R),Ut=R.material;Ut.visible&&L.push(R,zt,Ut,rt,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const zt=Xt.update(R),Ut=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),pe.copy(zt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ut)){const Wt=zt.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const se=Wt[jt],Ht=Ut[se.materialIndex];Ht&&Ht.visible&&L.push(R,zt,Ht,rt,pe.z,se)}}else Ut.visible&&L.push(R,zt,Ut,rt,pe.z,null)}}const Dt=R.children;for(let zt=0,Ut=Dt.length;zt<Ut;zt++)Ps(Dt[zt],X,rt,tt)}function mi(R,X,rt,tt){const{opaque:Z,transmissive:Dt,transparent:zt}=R;k.setupLightsView(rt),Kt===!0&&Mt.setGlobalState(D.clippingPlanes,rt),tt&&qt.viewport(N.copy(tt)),Z.length>0&&dn(Z,X,rt),Dt.length>0&&dn(Dt,X,rt),zt.length>0&&dn(zt,X,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function an(R,X,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[tt.id]===void 0){const Ht=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[tt.id]=new Bi(1,1,{generateMipmaps:!0,type:Ht?_a:hi,minFilter:ws,samples:Math.max(4,Ue.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=k.state.transmissionRenderTarget[tt.id],zt=tt.viewport||N;Dt.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget(),Wt=D.getActiveCubeFace(),jt=D.getActiveMipmapLevel();D.setRenderTarget(Dt),D.getClearColor(ht),bt=D.getClearAlpha(),bt<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Lt.render(rt);const ee=D.toneMapping;D.toneMapping=zi;const se=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),k.setupLightsView(tt),Kt===!0&&Mt.setGlobalState(D.clippingPlanes,tt),dn(R,rt,tt),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,qe=X.length;ue<qe;ue++){const Ye=X[ue],{object:Te,geometry:hn,material:Vt,group:wn}=Ye;if(Vt.side===da&&Te.layers.test(tt.layers)){const ie=Vt.side;Vt.side=kn,Vt.needsUpdate=!0,Vi(Te,rt,tt,hn,Vt,wn),Vt.side=ie,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}D.setRenderTarget(Ut,Wt,jt),D.setClearColor(ht,bt),se!==void 0&&(tt.viewport=se),D.toneMapping=ee}function dn(R,X,rt){const tt=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Dt=R.length;Z<Dt;Z++){const zt=R[Z],{object:Ut,geometry:Wt,group:jt}=zt;let ee=zt.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),Ut.layers.test(rt.layers)&&Vi(Ut,X,rt,Wt,ee,jt)}}function Vi(R,X,rt,tt,Z,Dt){R.onBeforeRender(D,X,rt,tt,Z,Dt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,X,rt,tt,R,Dt),Z.transparent===!0&&Z.side===da&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,D.renderBufferDirect(rt,X,tt,Z,R,Dt),Z.side=es,Z.needsUpdate=!0,D.renderBufferDirect(rt,X,tt,Z,R,Dt),Z.side=da):D.renderBufferDirect(rt,X,tt,Z,R,Dt),R.onAfterRender(D,X,rt,tt,Z,Dt)}function Ma(R,X,rt){X.isScene!==!0&&(X=we);const tt=y.get(R),Z=k.state.lights,Dt=k.state.shadowsArray,zt=Z.state.version,Ut=wt.getParameters(R,Z.state,Dt,X,rt),Wt=wt.getProgramCacheKey(Ut);let jt=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,tt.fog=X.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=pt.get(R.envMap||tt.environment,ee),tt.envMapRotation=tt.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Ee),jt=new Map,tt.programs=jt);let se=jt.get(Wt);if(se!==void 0){if(tt.currentProgram===se&&tt.lightsStateVersion===zt)return jo(R,Ut),se}else Ut.uniforms=wt.getUniforms(R),R.onBeforeCompile(Ut,D),se=wt.acquireProgram(Ut,Wt),jt.set(Wt,se),tt.uniforms=Ut.uniforms;const Ht=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Mt.uniform),jo(R,Ut),tt.needsLights=Br(R),tt.lightsStateVersion=zt,tt.needsLights&&(Ht.ambientLightColor.value=Z.state.ambient,Ht.lightProbe.value=Z.state.probe,Ht.directionalLights.value=Z.state.directional,Ht.directionalLightShadows.value=Z.state.directionalShadow,Ht.spotLights.value=Z.state.spot,Ht.spotLightShadows.value=Z.state.spotShadow,Ht.rectAreaLights.value=Z.state.rectArea,Ht.ltc_1.value=Z.state.rectAreaLTC1,Ht.ltc_2.value=Z.state.rectAreaLTC2,Ht.pointLights.value=Z.state.point,Ht.pointLightShadows.value=Z.state.pointShadow,Ht.hemisphereLights.value=Z.state.hemi,Ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Z.state.spotLightMatrix,Ht.spotLightMap.value=Z.state.spotLightMap,Ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=se,tt.uniformsList=null,se}function Yo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Pc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function jo(R,X){const rt=y.get(R);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function Zo(R,X,rt,tt,Z){X.isScene!==!0&&(X=we),q.resetTextureUnits();const Dt=X.fog,zt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?X.environment:null,Ut=at===null?D.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Lr,Wt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,jt=pt.get(tt.envMap||zt,Wt),ee=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ht=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,qe=!!rt.morphAttributes.color;let Ye=zi;tt.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const Te=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,hn=Te!==void 0?Te.length:0,Vt=y.get(tt),wn=k.state.lights;if(Kt===!0&&($t===!0||R!==J)){const rn=R===J&&tt.id===ct;Mt.setState(tt,R,rn)}let ie=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==wn.state.version||Vt.outputColorSpace!==Ut||Z.isBatchedMesh&&Vt.batching===!1||!Z.isBatchedMesh&&Vt.batching===!0||Z.isBatchedMesh&&Vt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Vt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Vt.instancing===!1||!Z.isInstancedMesh&&Vt.instancing===!0||Z.isSkinnedMesh&&Vt.skinning===!1||!Z.isSkinnedMesh&&Vt.skinning===!0||Z.isInstancedMesh&&Vt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Vt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Vt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Vt.instancingMorph===!1&&Z.morphTexture!==null||Vt.envMap!==jt||tt.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Mt.numPlanes||Vt.numIntersection!==Mt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==se||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==qe||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==hn)&&(ie=!0):(ie=!0,Vt.__version=tt.version);let Dn=Vt.currentProgram;ie===!0&&(Dn=Ma(tt,X,Z));let Wn=!1,gi=!1,qn=!1;const Ne=Dn.getUniforms(),sn=Vt.uniforms;if(qt.useProgram(Dn.program)&&(Wn=!0,gi=!0,qn=!0),tt.id!==ct&&(ct=tt.id,gi=!0),Wn||J!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(G,"projectionMatrix",R.projectionMatrix),Ne.setValue(G,"viewMatrix",R.matrixWorldInverse);const _i=Ne.map.cameraPosition;_i!==void 0&&_i.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Ne.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ne.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,gi=!0,qn=!0)}if(Vt.needsLights&&(wn.state.directionalShadowMap.length>0&&Ne.setValue(G,"directionalShadowMap",wn.state.directionalShadowMap,q),wn.state.spotShadowMap.length>0&&Ne.setValue(G,"spotShadowMap",wn.state.spotShadowMap,q),wn.state.pointShadowMap.length>0&&Ne.setValue(G,"pointShadowMap",wn.state.pointShadowMap,q)),Z.isSkinnedMesh){Ne.setOptional(G,Z,"bindMatrix"),Ne.setOptional(G,Z,"bindMatrixInverse");const rn=Z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ne.setValue(G,"boneTexture",rn.boneTexture,q))}Z.isBatchedMesh&&(Ne.setOptional(G,Z,"batchingTexture"),Ne.setValue(G,"batchingTexture",Z._matricesTexture,q),Ne.setOptional(G,Z,"batchingIdTexture"),Ne.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Ne.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Pt.update(Z,rt,Dn),(gi||Vt.receiveShadow!==Z.receiveShadow)&&(Vt.receiveShadow=Z.receiveShadow,Ne.setValue(G,"receiveShadow",Z.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&X.environment!==null&&(sn.envMapIntensity.value=X.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=W1()),gi&&(Ne.setValue(G,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&ns(sn,qn),Dt&&tt.fog===!0&&Zt.refreshFogUniforms(sn,Dt),Zt.refreshMaterialUniforms(sn,tt,vt,Y,k.state.transmissionRenderTarget[R.id]),Pc.upload(G,Yo(Vt),sn,q)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Pc.upload(G,Yo(Vt),sn,q),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ne.setValue(G,"center",Z.center),Ne.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(G,"normalMatrix",Z.normalMatrix),Ne.setValue(G,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const rn=tt.uniformsGroups;for(let _i=0,ki=rn.length;_i<ki;_i++){const Fs=rn[_i];Ft.update(Fs,Dn),Ft.bind(Fs,Dn)}}return Dn}function ns(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Br(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,X,rt){const tt=y.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=X,y.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const rt=y.get(R);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const ya=G.createFramebuffer();this.setRenderTarget=function(R,X=0,rt=0){at=R,H=X,$=rt;let tt=null,Z=!1,Dt=!1;if(R){const Ut=y.get(R);if(Ut.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Ut.__webglFramebuffer),N.copy(R.viewport),F.copy(R.scissor),lt=R.scissorTest,qt.viewport(N),qt.scissor(F),qt.setScissorTest(lt),ct=-1;return}else if(Ut.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ut.__hasExternalTextures)q.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Ut.__boundDepthTexture!==ee){if(ee!==null&&y.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const jt=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?tt=jt[X][rt]:tt=jt[X],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?tt=y.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?tt=jt[rt]:tt=jt,N.copy(R.viewport),F.copy(R.scissor),lt=R.scissorTest}else N.copy(et).multiplyScalar(vt).floor(),F.copy(xt).multiplyScalar(vt).floor(),lt=Tt;if(rt!==0&&(tt=ya),qt.bindFramebuffer(G.FRAMEBUFFER,tt)&&qt.drawBuffers(R,tt),qt.viewport(N),qt.scissor(F),qt.setScissorTest(lt),Z){const Ut=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,rt)}else if(Dt){const Ut=X;for(let Wt=0;Wt<R.textures.length;Wt++){const jt=y.get(R.textures[Wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,rt,Ut)}}else if(R!==null&&rt!==0){const Ut=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ut.__webglTexture,rt)}ct=-1},this.readRenderTargetPixels=function(R,X,rt,tt,Z,Dt,zt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);try{const jt=R.textures[Ut],ee=jt.format,se=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ut),!Ue.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(se)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-tt&&rt>=0&&rt<=R.height-Z&&G.readPixels(X,rt,tt,Z,Ct.convert(ee),Ct.convert(se),Dt)}finally{const jt=at!==null?y.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,X,rt,tt,Z,Dt,zt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt)if(X>=0&&X<=R.width-tt&&rt>=0&&rt<=R.height-Z){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);const jt=R.textures[Ut],ee=jt.format,se=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ut),!Ue.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(X,rt,tt,Z,Ct.convert(ee),Ct.convert(se),0);const ue=at!==null?y.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,ue);const qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await mM(G,qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(Ht),G.deleteSync(qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,rt=0){const tt=Math.pow(2,-rt),Z=Math.floor(R.image.width*tt),Dt=Math.floor(R.image.height*tt),zt=X!==null?X.x:0,Ut=X!==null?X.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,zt,Ut,Z,Dt),qt.unbindTexture()};const Ea=G.createFramebuffer(),is=G.createFramebuffer();this.copyTextureToTexture=function(R,X,rt=null,tt=null,Z=0,Dt=0){let zt,Ut,Wt,jt,ee,se,Ht,ue,qe;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(rt!==null)zt=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Wt=rt.isBox3?rt.max.z-rt.min.z:1,jt=rt.min.x,ee=rt.min.y,se=rt.isBox3?rt.min.z:0;else{const sn=Math.pow(2,-Z);zt=Math.floor(Ye.width*sn),Ut=Math.floor(Ye.height*sn),R.isDataArrayTexture?Wt=Ye.depth:R.isData3DTexture?Wt=Math.floor(Ye.depth*sn):Wt=1,jt=0,ee=0,se=0}tt!==null?(Ht=tt.x,ue=tt.y,qe=tt.z):(Ht=0,ue=0,qe=0);const Te=Ct.convert(X.format),hn=Ct.convert(X.type);let Vt;X.isData3DTexture?(q.setTexture3D(X,0),Vt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Vt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Vt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const wn=G.getParameter(G.UNPACK_ROW_LENGTH),ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Dn=G.getParameter(G.UNPACK_SKIP_PIXELS),Wn=G.getParameter(G.UNPACK_SKIP_ROWS),gi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,se);const qn=R.isDataArrayTexture||R.isData3DTexture,Ne=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const sn=y.get(R),Un=y.get(X),rn=y.get(sn.__renderTarget),_i=y.get(Un.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let ki=0;ki<Wt;ki++)qn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(R).__webglTexture,Z,se+ki),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(X).__webglTexture,Dt,qe+ki)),G.blitFramebuffer(jt,ee,zt,Ut,Ht,ue,zt,Ut,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||y.has(R)){const sn=y.get(R),Un=y.get(X);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Ea),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,is);for(let rn=0;rn<Wt;rn++)qn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,Z,se+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,Z),Ne?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,Dt,qe+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,Dt),Z!==0?G.blitFramebuffer(jt,ee,zt,Ut,Ht,ue,zt,Ut,G.COLOR_BUFFER_BIT,G.NEAREST):Ne?G.copyTexSubImage3D(Vt,Dt,Ht,ue,qe+rn,jt,ee,zt,Ut):G.copyTexSubImage2D(Vt,Dt,Ht,ue,jt,ee,zt,Ut);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Vt,Dt,Ht,ue,qe,zt,Ut,Wt,Te,hn,Ye.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,Dt,Ht,ue,qe,zt,Ut,Wt,Te,Ye.data):G.texSubImage3D(Vt,Dt,Ht,ue,qe,zt,Ut,Wt,Te,hn,Ye):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,zt,Ut,Te,hn,Ye.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,Ye.width,Ye.height,Te,Ye.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,zt,Ut,Te,hn,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,wn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Dn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,gi),Dt===0&&X.generateMipmaps&&G.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){H=0,$=0,at=null,qt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const Y1=()=>{const o=Vn.useRef(null);return Vn.useEffect(()=>{let e;const i=new UM,s=new di(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=5;const l=new q1({alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current&&o.current.appendChild(l.domElement);const u=new Ri,d=700,p=new Float32Array(d*3);for(let C=0;C<d*3;C++)p[C]=(Math.random()-.5)*15;u.setAttribute("position",new Ai(p,3));const m=new K_({size:.015,color:16739072,transparent:!0,opacity:.8,blending:Od}),h=new GM(u,m);i.add(h);let v=0,x=0,_=0,E=0;const b=C=>{v=C.clientX-window.innerWidth/2,x=C.clientY-window.innerHeight/2},w=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",b),window.addEventListener("resize",w);const M=new JM,S=()=>{e=requestAnimationFrame(S);const C=M.getElapsedTime();h.rotation.y=C*.05,h.rotation.x=C*.02,_=v*.001,E=x*.001,h.rotation.y+=.05*(_-h.rotation.y),h.rotation.x+=.05*(E-h.rotation.x),l.render(i,s)};return S(),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("resize",w),cancelAnimationFrame(e),o.current&&l.domElement&&o.current.removeChild(l.domElement),u.dispose(),m.dispose(),l.dispose()}},[]),it.jsx("div",{ref:o,className:"fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"})};function j1(){return it.jsxs(it.Fragment,{children:[it.jsx(Y1,{}),it.jsx("div",{className:"glow-bg"}),it.jsx(ES,{}),it.jsxs("main",{children:[it.jsx(bS,{}),it.jsx(AS,{}),it.jsx(RS,{}),it.jsx(US,{}),it.jsx(NS,{})]}),it.jsx(LS,{}),it.jsx("a",{href:"#home",className:"scroll-up",id:"scroll-up",children:it.jsx("i",{className:"uil uil-arrow-up"})})]})}yS.createRoot(document.getElementById("root")).render(it.jsx(b_.StrictMode,{children:it.jsx(j1,{})}));
