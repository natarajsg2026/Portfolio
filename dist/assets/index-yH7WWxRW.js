(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Nm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gc={exports:{}},bo={},_c={exports:{}},ht={};var wp;function q_(){if(wp)return ht;wp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(b){return b===null||typeof b!="object"?null:(b=g&&b[g]||b["@@iterator"],typeof b=="function"?b:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(b,te,Oe){this.props=b,this.context=te,this.refs=A,this.updater=Oe||y}S.prototype.isReactComponent={},S.prototype.setState=function(b,te){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,te,"setState")},S.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function _(){}_.prototype=S.prototype;function k(b,te,Oe){this.props=b,this.context=te,this.refs=A,this.updater=Oe||y}var I=k.prototype=new _;I.constructor=k,T(I,S.prototype),I.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(b,te,Oe){var Fe,Q={},pe=null,de=null;if(te!=null)for(Fe in te.ref!==void 0&&(de=te.ref),te.key!==void 0&&(pe=""+te.key),te)O.call(te,Fe)&&!F.hasOwnProperty(Fe)&&(Q[Fe]=te[Fe]);var Ee=arguments.length-2;if(Ee===1)Q.children=Oe;else if(1<Ee){for(var Re=Array(Ee),Ge=0;Ge<Ee;Ge++)Re[Ge]=arguments[Ge+2];Q.children=Re}if(b&&b.defaultProps)for(Fe in Ee=b.defaultProps,Ee)Q[Fe]===void 0&&(Q[Fe]=Ee[Fe]);return{$$typeof:s,type:b,key:pe,ref:de,props:Q,_owner:z.current}}function R(b,te){return{$$typeof:s,type:b.type,key:te,ref:b.ref,props:b.props,_owner:b._owner}}function C(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function U(b){var te={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Oe){return te[Oe]})}var J=/\/+/g;function Z(b,te){return typeof b=="object"&&b!==null&&b.key!=null?U(""+b.key):te.toString(36)}function re(b,te,Oe,Fe,Q){var pe=typeof b;(pe==="undefined"||pe==="boolean")&&(b=null);var de=!1;if(b===null)de=!0;else switch(pe){case"string":case"number":de=!0;break;case"object":switch(b.$$typeof){case s:case e:de=!0}}if(de)return de=b,Q=Q(de),b=Fe===""?"."+Z(de,0):Fe,P(Q)?(Oe="",b!=null&&(Oe=b.replace(J,"$&/")+"/"),re(Q,te,Oe,"",function(Ge){return Ge})):Q!=null&&(C(Q)&&(Q=R(Q,Oe+(!Q.key||de&&de.key===Q.key?"":(""+Q.key).replace(J,"$&/")+"/")+b)),te.push(Q)),1;if(de=0,Fe=Fe===""?".":Fe+":",P(b))for(var Ee=0;Ee<b.length;Ee++){pe=b[Ee];var Re=Fe+Z(pe,Ee);de+=re(pe,te,Oe,Re,Q)}else if(Re=x(b),typeof Re=="function")for(b=Re.call(b),Ee=0;!(pe=b.next()).done;)pe=pe.value,Re=Fe+Z(pe,Ee++),de+=re(pe,te,Oe,Re,Q);else if(pe==="object")throw te=String(b),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return de}function ue(b,te,Oe){if(b==null)return b;var Fe=[],Q=0;return re(b,Fe,"","",function(pe){return te.call(Oe,pe,Q++)}),Fe}function oe(b){if(b._status===-1){var te=b._result;te=te(),te.then(function(Oe){(b._status===0||b._status===-1)&&(b._status=1,b._result=Oe)},function(Oe){(b._status===0||b._status===-1)&&(b._status=2,b._result=Oe)}),b._status===-1&&(b._status=0,b._result=te)}if(b._status===1)return b._result.default;throw b._result}var ce={current:null},H={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ue,forEach:function(b,te,Oe){ue(b,function(){te.apply(this,arguments)},Oe)},count:function(b){var te=0;return ue(b,function(){te++}),te},toArray:function(b){return ue(b,function(te){return te})||[]},only:function(b){if(!C(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ht.Component=S,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=k,ht.StrictMode=r,ht.Suspense=m,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ht.act=se,ht.cloneElement=function(b,te,Oe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Fe=T({},b.props),Q=b.key,pe=b.ref,de=b._owner;if(te!=null){if(te.ref!==void 0&&(pe=te.ref,de=z.current),te.key!==void 0&&(Q=""+te.key),b.type&&b.type.defaultProps)var Ee=b.type.defaultProps;for(Re in te)O.call(te,Re)&&!F.hasOwnProperty(Re)&&(Fe[Re]=te[Re]===void 0&&Ee!==void 0?Ee[Re]:te[Re])}var Re=arguments.length-2;if(Re===1)Fe.children=Oe;else if(1<Re){Ee=Array(Re);for(var Ge=0;Ge<Re;Ge++)Ee[Ge]=arguments[Ge+2];Fe.children=Ee}return{$$typeof:s,type:b.type,key:Q,ref:pe,props:Fe,_owner:de}},ht.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:u,_context:b},b.Consumer=b},ht.createElement=X,ht.createFactory=function(b){var te=X.bind(null,b);return te.type=b,te},ht.createRef=function(){return{current:null}},ht.forwardRef=function(b){return{$$typeof:d,render:b}},ht.isValidElement=C,ht.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:oe}},ht.memo=function(b,te){return{$$typeof:p,type:b,compare:te===void 0?null:te}},ht.startTransition=function(b){var te=H.transition;H.transition={};try{b()}finally{H.transition=te}},ht.unstable_act=se,ht.useCallback=function(b,te){return ce.current.useCallback(b,te)},ht.useContext=function(b){return ce.current.useContext(b)},ht.useDebugValue=function(){},ht.useDeferredValue=function(b){return ce.current.useDeferredValue(b)},ht.useEffect=function(b,te){return ce.current.useEffect(b,te)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(b,te,Oe){return ce.current.useImperativeHandle(b,te,Oe)},ht.useInsertionEffect=function(b,te){return ce.current.useInsertionEffect(b,te)},ht.useLayoutEffect=function(b,te){return ce.current.useLayoutEffect(b,te)},ht.useMemo=function(b,te){return ce.current.useMemo(b,te)},ht.useReducer=function(b,te,Oe){return ce.current.useReducer(b,te,Oe)},ht.useRef=function(b){return ce.current.useRef(b)},ht.useState=function(b){return ce.current.useState(b)},ht.useSyncExternalStore=function(b,te,Oe){return ce.current.useSyncExternalStore(b,te,Oe)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var Ap;function Hf(){return Ap||(Ap=1,_c.exports=q_()),_c.exports}var Rp;function $_(){if(Rp)return bo;Rp=1;var s=Hf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,m,p){var v,g={},x=null,y=null;p!==void 0&&(x=""+p),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(y=m.ref);for(v in m)r.call(m,v)&&!u.hasOwnProperty(v)&&(g[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)g[v]===void 0&&(g[v]=m[v]);return{$$typeof:e,type:d,key:x,ref:y,props:g,_owner:a.current}}return bo.Fragment=n,bo.jsx=f,bo.jsxs=f,bo}var Cp;function K_(){return Cp||(Cp=1,gc.exports=$_()),gc.exports}var Le=K_(),pr=Hf();const Z_=Nm(pr);var nl={},vc={exports:{}},Un={},xc={exports:{}},Sc={};var Pp;function Q_(){return Pp||(Pp=1,(function(s){function e(H,le){var se=H.length;H.push(le);e:for(;0<se;){var b=se-1>>>1,te=H[b];if(0<a(te,le))H[b]=le,H[se]=te,se=b;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],se=H.pop();if(se!==le){H[0]=se;e:for(var b=0,te=H.length,Oe=te>>>1;b<Oe;){var Fe=2*(b+1)-1,Q=H[Fe],pe=Fe+1,de=H[pe];if(0>a(Q,se))pe<te&&0>a(de,Q)?(H[b]=de,H[pe]=se,b=pe):(H[b]=Q,H[Fe]=se,b=Fe);else if(pe<te&&0>a(de,se))H[b]=de,H[pe]=se,b=pe;else break e}}return le}function a(H,le){var se=H.sortIndex-le.sortIndex;return se!==0?se:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,y=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var le=n(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=H)r(p),le.sortIndex=le.expirationTime,e(m,le);else break;le=n(p)}}function P(H){if(A=!1,I(H),!T)if(n(m)!==null)T=!0,oe(O);else{var le=n(p);le!==null&&ce(P,le.startTime-H)}}function O(H,le){T=!1,A&&(A=!1,_(X),X=-1),y=!0;var se=x;try{for(I(le),g=n(m);g!==null&&(!(g.expirationTime>le)||H&&!U());){var b=g.callback;if(typeof b=="function"){g.callback=null,x=g.priorityLevel;var te=b(g.expirationTime<=le);le=s.unstable_now(),typeof te=="function"?g.callback=te:g===n(m)&&r(m),I(le)}else r(m);g=n(m)}if(g!==null)var Oe=!0;else{var Fe=n(p);Fe!==null&&ce(P,Fe.startTime-le),Oe=!1}return Oe}finally{g=null,x=se,y=!1}}var z=!1,F=null,X=-1,R=5,C=-1;function U(){return!(s.unstable_now()-C<R)}function J(){if(F!==null){var H=s.unstable_now();C=H;var le=!0;try{le=F(!0,H)}finally{le?Z():(z=!1,F=null)}}else z=!1}var Z;if(typeof k=="function")Z=function(){k(J)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ue=re.port2;re.port1.onmessage=J,Z=function(){ue.postMessage(null)}}else Z=function(){S(J,0)};function oe(H){F=H,z||(z=!0,Z())}function ce(H,le){X=S(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,oe(O))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return H()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=x;x=H;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(H,le,se){var b=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?b+se:b):se=b,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=se+te,H={id:v++,callback:le,priorityLevel:H,startTime:se,expirationTime:te,sortIndex:-1},se>b?(H.sortIndex=se,e(p,H),n(m)===null&&H===n(p)&&(A?(_(X),X=-1):A=!0,ce(P,se-b))):(H.sortIndex=te,e(m,H),T||y||(T=!0,oe(O))),H},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(H){var le=x;return function(){var se=x;x=le;try{return H.apply(this,arguments)}finally{x=se}}}})(Sc)),Sc}var bp;function J_(){return bp||(bp=1,xc.exports=Q_()),xc.exports}var Lp;function e0(){if(Lp)return Un;Lp=1;var s=Hf(),e=J_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return m.call(g,t)?!0:m.call(v,t)?!1:p.test(t)?g[t]=!0:(v[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function k(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,k);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,k);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,k);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,o,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),U=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,b;function te(t){if(b===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+t}var Oe=!1;function Fe(t,i){if(!t||Oe)return"";Oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var B=`
`+c[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=D);break}}}finally{Oe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?te(t):""}function Q(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=Fe(t.type,!1),t;case 11:return t=Fe(t.type.render,!1),t;case 1:return t=Fe(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case R:return"Profiler";case X:return"StrictMode";case Z:return"Suspense";case re:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}function de(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ee(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function yt(t){t._valueTracker||(t._valueTracker=Ge(t))}function at(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Re(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function N(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _t(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Qe(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ee(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function Ke(t,i){vt(t,i);var o=Ee(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ke(t,i.type,o):i.hasOwnProperty("defaultValue")&&ke(t,i.type,Ee(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function It(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ke(t,i,o){(i!=="number"||N(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ut=Array.isArray;function kt(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ee(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Bt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ut(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ee(o)}}function E(t,i){var o=Ee(i.value),l=Ee(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function $(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ae,qe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function we(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(t){$e.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ze[i]=ze[t]})});function Me(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(t)&&ze[t]?(""+i).trim():i+"px"}function De(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Me(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var it=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Se=null,Ae=null,Ue=null;function xe(t){if(t=mo(t)){if(typeof Se!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_a(i),Se(t.stateNode,t.type,i))}}function he(t){Ae?Ue?Ue.push(t):Ue=[t]:Ae=t}function We(){if(Ae){var t=Ae,i=Ue;if(Ue=Ae=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function lt(t,i){return t(i)}function Ct(){}var xt=!1;function Wn(t,i,o){if(xt)return t(i,o);xt=!0;try{return lt(t,i,o)}finally{xt=!1,(Ae!==null||Ue!==null)&&(Ct(),We())}}function cn(t,i){var o=t.stateNode;if(o===null)return null;var l=_a(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Kr=!1;if(d)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Kr=!1}function Zs(t,i,o,l,c,h,M,D,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ge){this.onError(ge)}}var Vi=!1,Sr=null,Mi=!1,Zr=null,Qr={onError:function(t){Vi=!0,Sr=t}};function Ko(t,i,o,l,c,h,M,D,B){Vi=!1,Sr=null,Zs.apply(Qr,arguments)}function Zo(t,i,o,l,c,h,M,D,B){if(Ko.apply(this,arguments),Vi){if(Vi){var ee=Sr;Vi=!1,Sr=null}else throw Error(n(198));Mi||(Mi=!0,Zr=ee)}}function Ei(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Jo(t){if(Ei(t)!==t)throw Error(n(188))}function Bl(t){var i=t.alternate;if(!i){if(i=Ei(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Jo(c),t;if(h===l)return Jo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ea(t){return t=Bl(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var w=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,G=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,nt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ze=null,st=null;function Rt(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Ze,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Je,Nt=Math.log,Pt=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Nt(t)/Pt|0)|0}var bt=64,pt=4194304;function Zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=Zt(D):(h&=M,h!==0&&(l=Zt(h)))}else M=o&~c,M!==0?l=Zt(M):h!==0&&(l=Zt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-St(i),c=1<<o,l|=t[o],i&=~c;return l}function yn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-St(h),D=1<<M,B=c[M];B===-1?((D&o)===0||(D&l)!==0)&&(c[M]=yn(D,i)):B<=i&&(t.expiredLanes|=D),h&=~D}}function Ft(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mn(){var t=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),t}function fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Yt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-St(i),t[i]=o}function dn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-St(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Mr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-St(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var mt=0;function id(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rd,zl,sd,od,ad,Hl=!1,na=[],Gi=null,Wi=null,Xi=null,Qs=new Map,Js=new Map,ji=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=mo(i),i!==null&&zl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function _g(t,i,o,l,c){switch(i){case"focusin":return Gi=eo(Gi,t,i,o,l,c),!0;case"dragenter":return Wi=eo(Wi,t,i,o,l,c),!0;case"mouseover":return Xi=eo(Xi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Qs.set(h,eo(Qs.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Js.set(h,eo(Js.get(h)||null,t,i,o,l,c)),!0}return!1}function ud(t){var i=Er(t.target);if(i!==null){var o=Ei(i);if(o!==null){if(i=o.tag,i===13){if(i=Qo(o),i!==null){t.blockedOn=i,ad(t.priority,function(){sd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ia(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Gl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);ct=l,o.target.dispatchEvent(l),ct=null}else return i=mo(o),i!==null&&zl(i),t.blockedOn=o,!1;i.shift()}return!0}function cd(t,i,o){ia(t)&&o.delete(i)}function vg(){Hl=!1,Gi!==null&&ia(Gi)&&(Gi=null),Wi!==null&&ia(Wi)&&(Wi=null),Xi!==null&&ia(Xi)&&(Xi=null),Qs.forEach(cd),Js.forEach(cd)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vg)))}function no(t){function i(c){return to(c,t)}if(0<na.length){to(na[0],t);for(var o=1;o<na.length;o++){var l=na[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&to(Gi,t),Wi!==null&&to(Wi,t),Xi!==null&&to(Xi,t),Qs.forEach(i),Js.forEach(i),o=0;o<ji.length;o++)l=ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(o=ji[0],o.blockedOn===null);)ud(o),o.blockedOn===null&&ji.shift()}var Jr=P.ReactCurrentBatchConfig,ra=!0;function xg(t,i,o,l){var c=mt,h=Jr.transition;Jr.transition=null;try{mt=1,Vl(t,i,o,l)}finally{mt=c,Jr.transition=h}}function Sg(t,i,o,l){var c=mt,h=Jr.transition;Jr.transition=null;try{mt=4,Vl(t,i,o,l)}finally{mt=c,Jr.transition=h}}function Vl(t,i,o,l){if(ra){var c=Gl(t,i,o,l);if(c===null)ou(t,i,l,sa,o),ld(t,l);else if(_g(c,t,i,o,l))l.stopPropagation();else if(ld(t,l),i&4&&-1<gg.indexOf(t)){for(;c!==null;){var h=mo(c);if(h!==null&&rd(h),h=Gl(t,i,o,l),h===null&&ou(t,i,l,sa,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else ou(t,i,l,null,o)}}var sa=null;function Gl(t,i,o,l){if(sa=null,t=V(l),t=Er(t),t!==null)if(i=Ei(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return sa=t,null}function fd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Pe:return 1;case He:return 4;case Ie:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Yi=null,Wl=null,oa=null;function dd(){if(oa)return oa;var t,i=Wl,o=i.length,l,c="value"in Yi?Yi.value:Yi.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return oa=c.slice(t,1<l?1-l:void 0)}function aa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function hd(){return!1}function Fn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?la:hd,this.isPropagationStopped=hd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Fn(es),io=se({},es,{view:0,detail:0}),yg=Fn(io),jl,Yl,ro,ua=se({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(jl=t.screenX-ro.screenX,Yl=t.screenY-ro.screenY):Yl=jl=0,ro=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),pd=Fn(ua),Mg=se({},ua,{dataTransfer:0}),Eg=Fn(Mg),Tg=se({},io,{relatedTarget:0}),ql=Fn(Tg),wg=se({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=Fn(wg),Rg=se({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cg=Fn(Rg),Pg=se({},es,{data:0}),md=Fn(Pg),bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ug(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Dg[t])?!!i[t]:!1}function $l(){return Ug}var Ig=se({},io,{key:function(t){if(t.key){var i=bg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=aa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(t){return t.type==="keypress"?aa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?aa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ng=Fn(Ig),Fg=se({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=Fn(Fg),Og=se({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),kg=Fn(Og),Bg=se({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=Fn(Bg),Hg=se({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=Fn(Hg),Gg=[9,13,27,32],Kl=d&&"CompositionEvent"in window,so=null;d&&"documentMode"in document&&(so=document.documentMode);var Wg=d&&"TextEvent"in window&&!so,_d=d&&(!Kl||so&&8<so&&11>=so),vd=" ",xd=!1;function Sd(t,i){switch(t){case"keyup":return Gg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Xg(t,i){switch(t){case"compositionend":return yd(i);case"keypress":return i.which!==32?null:(xd=!0,vd);case"textInput":return t=i.data,t===vd&&xd?null:t;default:return null}}function jg(t,i){if(ts)return t==="compositionend"||!Kl&&Sd(t,i)?(t=dd(),oa=Wl=Yi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _d&&i.locale!=="ko"?null:i.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yg[t.type]:i==="textarea"}function Ed(t,i,o,l){he(l),i=pa(i,"onChange"),0<i.length&&(o=new Xl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var oo=null,ao=null;function qg(t){Hd(t,0)}function ca(t){var i=os(t);if(at(i))return t}function $g(t,i){if(t==="change")return i}var Td=!1;if(d){var Zl;if(d){var Ql="oninput"in document;if(!Ql){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),Ql=typeof wd.oninput=="function"}Zl=Ql}else Zl=!1;Td=Zl&&(!document.documentMode||9<document.documentMode)}function Ad(){oo&&(oo.detachEvent("onpropertychange",Rd),ao=oo=null)}function Rd(t){if(t.propertyName==="value"&&ca(ao)){var i=[];Ed(i,ao,t,V(t)),Wn(qg,i)}}function Kg(t,i,o){t==="focusin"?(Ad(),oo=i,ao=o,oo.attachEvent("onpropertychange",Rd)):t==="focusout"&&Ad()}function Zg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ca(ao)}function Qg(t,i){if(t==="click")return ca(i)}function Jg(t,i){if(t==="input"||t==="change")return ca(i)}function e_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:e_;function lo(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!m.call(i,c)||!ei(t[c],i[c]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pd(t,i){var o=Cd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Cd(o)}}function bd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?bd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ld(){for(var t=window,i=N();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=N(t.document)}return i}function Jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function t_(t){var i=Ld(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&bd(o.ownerDocument.documentElement,o)){if(l!==null&&Jl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Pd(o,h);var M=Pd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n_=d&&"documentMode"in document&&11>=document.documentMode,ns=null,eu=null,uo=null,tu=!1;function Dd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tu||ns==null||ns!==N(l)||(l=ns,"selectionStart"in l&&Jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&lo(uo,l)||(uo=l,l=pa(eu,"onSelect"),0<l.length&&(i=new Xl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ns)))}function fa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var is={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},nu={},Ud={};d&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function da(t){if(nu[t])return nu[t];if(!is[t])return t;var i=is[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ud)return nu[t]=i[o];return t}var Id=da("animationend"),Nd=da("animationiteration"),Fd=da("animationstart"),Od=da("transitionend"),kd=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){kd.set(t,i),u(i,[t])}for(var iu=0;iu<Bd.length;iu++){var ru=Bd[iu],i_=ru.toLowerCase(),r_=ru[0].toUpperCase()+ru.slice(1);qi(i_,"on"+r_)}qi(Id,"onAnimationEnd"),qi(Nd,"onAnimationIteration"),qi(Fd,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Od,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s_=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function zd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Zo(l,i,void 0,t),t.currentTarget=null}function Hd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],B=D.instance,ee=D.currentTarget;if(D=D.listener,B!==h&&c.isPropagationStopped())break e;zd(c,D,ee),h=B}else for(M=0;M<l.length;M++){if(D=l[M],B=D.instance,ee=D.currentTarget,D=D.listener,B!==h&&c.isPropagationStopped())break e;zd(c,D,ee),h=B}}}if(Mi)throw t=Zr,Mi=!1,Zr=null,t}function zt(t,i){var o=i[du];o===void 0&&(o=i[du]=new Set);var l=t+"__bubble";o.has(l)||(Vd(i,t,2,!1),o.add(l))}function su(t,i,o){var l=0;i&&(l|=4),Vd(o,t,l,i)}var ha="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[ha]){t[ha]=!0,r.forEach(function(o){o!=="selectionchange"&&(s_.has(o)||su(o,!1,t),su(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ha]||(i[ha]=!0,su("selectionchange",!1,i))}}function Vd(t,i,o,l){switch(fd(i)){case 1:var c=xg;break;case 4:c=Sg;break;default:c=Vl}o=c.bind(null,i,o,t),c=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function ou(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Er(D),M===null)return;if(B=M.tag,B===5||B===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Wn(function(){var ee=h,ge=V(o),ve=[];e:{var me=kd.get(t);if(me!==void 0){var Ne=Xl,Ve=t;switch(t){case"keypress":if(aa(o)===0)break e;case"keydown":case"keyup":Ne=Ng;break;case"focusin":Ve="focus",Ne=ql;break;case"focusout":Ve="blur",Ne=ql;break;case"beforeblur":case"afterblur":Ne=ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=kg;break;case Id:case Nd:case Fd:Ne=Ag;break;case Od:Ne=zg;break;case"scroll":Ne=yg;break;case"wheel":Ne=Vg;break;case"copy":case"cut":case"paste":Ne=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=gd}var Xe=(i&4)!==0,qt=!Xe&&t==="scroll",Y=Xe?me!==null?me+"Capture":null:me;Xe=[];for(var W=ee,K;W!==null;){K=W;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=cn(W,Y),Te!=null&&Xe.push(ho(W,Te,K)))),qt)break;W=W.return}0<Xe.length&&(me=new Ne(me,Ve,null,o,ge),ve.push({event:me,listeners:Xe}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",me&&o!==ct&&(Ve=o.relatedTarget||o.fromElement)&&(Er(Ve)||Ve[Ti]))break e;if((Ne||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ne?(Ve=o.relatedTarget||o.toElement,Ne=ee,Ve=Ve?Er(Ve):null,Ve!==null&&(qt=Ei(Ve),Ve!==qt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ne=null,Ve=ee),Ne!==Ve)){if(Xe=pd,Te="onMouseLeave",Y="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=gd,Te="onPointerLeave",Y="onPointerEnter",W="pointer"),qt=Ne==null?me:os(Ne),K=Ve==null?me:os(Ve),me=new Xe(Te,W+"leave",Ne,o,ge),me.target=qt,me.relatedTarget=K,Te=null,Er(ge)===ee&&(Xe=new Xe(Y,W+"enter",Ve,o,ge),Xe.target=K,Xe.relatedTarget=qt,Te=Xe),qt=Te,Ne&&Ve)t:{for(Xe=Ne,Y=Ve,W=0,K=Xe;K;K=rs(K))W++;for(K=0,Te=Y;Te;Te=rs(Te))K++;for(;0<W-K;)Xe=rs(Xe),W--;for(;0<K-W;)Y=rs(Y),K--;for(;W--;){if(Xe===Y||Y!==null&&Xe===Y.alternate)break t;Xe=rs(Xe),Y=rs(Y)}Xe=null}else Xe=null;Ne!==null&&Gd(ve,me,Ne,Xe,!1),Ve!==null&&qt!==null&&Gd(ve,qt,Ve,Xe,!0)}}e:{if(me=ee?os(ee):window,Ne=me.nodeName&&me.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&me.type==="file")var Ye=$g;else if(Md(me))if(Td)Ye=Jg;else{Ye=Zg;var et=Kg}else(Ne=me.nodeName)&&Ne.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=Qg);if(Ye&&(Ye=Ye(t,ee))){Ed(ve,Ye,o,ge);break e}et&&et(t,me,ee),t==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&ke(me,"number",me.value)}switch(et=ee?os(ee):window,t){case"focusin":(Md(et)||et.contentEditable==="true")&&(ns=et,eu=ee,uo=null);break;case"focusout":uo=eu=ns=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Dd(ve,o,ge);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":Dd(ve,o,ge)}var tt;if(Kl)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ts?Sd(t,o)&&(ot="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(_d&&o.locale!=="ko"&&(ts||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ts&&(tt=dd()):(Yi=ge,Wl="value"in Yi?Yi.value:Yi.textContent,ts=!0)),et=pa(ee,ot),0<et.length&&(ot=new md(ot,t,null,o,ge),ve.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=yd(o),tt!==null&&(ot.data=tt)))),(tt=Wg?Xg(t,o):jg(t,o))&&(ee=pa(ee,"onBeforeInput"),0<ee.length&&(ge=new md("onBeforeInput","beforeinput",null,o,ge),ve.push({event:ge,listeners:ee}),ge.data=tt))}Hd(ve,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function pa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=cn(t,o),h!=null&&l.unshift(ho(t,h,c)),h=cn(t,i),h!=null&&l.push(ho(t,h,c))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,B=D.alternate,ee=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&ee!==null&&(D=ee,c?(B=cn(o,h),B!=null&&M.unshift(ho(o,B,D))):c||(B=cn(o,h),B!=null&&M.push(ho(o,B,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var o_=/\r\n?/g,a_=/\u0000|\uFFFD/g;function Wd(t){return(typeof t=="string"?t:""+t).replace(o_,`
`).replace(a_,"")}function ma(t,i,o){if(i=Wd(i),Wd(t)!==i&&o)throw Error(n(425))}function ga(){}var au=null,lu=null;function uu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,u_=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(t){return Xd.resolve(null).then(t).catch(c_)}:cu;function c_(t){setTimeout(function(){throw t})}function fu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),no(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);no(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),di="__reactFiber$"+ss,po="__reactProps$"+ss,Ti="__reactContainer$"+ss,du="__reactEvents$"+ss,f_="__reactListeners$"+ss,d_="__reactHandles$"+ss;function Er(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=jd(t);t!==null;){if(o=t[di])return o;t=jd(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[di]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _a(t){return t[po]||null}var hu=[],as=-1;function Ki(t){return{current:t}}function Ht(t){0>as||(t.current=hu[as],hu[as]=null,as--)}function Ot(t,i){as++,hu[as]=t.current,t.current=i}var Zi={},hn=Ki(Zi),Cn=Ki(!1),Tr=Zi;function ls(t,i){var o=t.type.contextTypes;if(!o)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Pn(t){return t=t.childContextTypes,t!=null}function va(){Ht(Cn),Ht(hn)}function Yd(t,i,o){if(hn.current!==Zi)throw Error(n(168));Ot(hn,i),Ot(Cn,o)}function qd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,de(t)||"Unknown",c));return se({},o,l)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Tr=hn.current,Ot(hn,t),Ot(Cn,Cn.current),!0}function $d(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=qd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Ht(Cn),Ht(hn),Ot(hn,t)):Ht(Cn),Ot(Cn,o)}var wi=null,Sa=!1,pu=!1;function Kd(t){wi===null?wi=[t]:wi.push(t)}function h_(t){Sa=!0,Kd(t)}function Qi(){if(!pu&&wi!==null){pu=!0;var t=0,i=mt;try{var o=wi;for(mt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,Sa=!1}catch(c){throw wi!==null&&(wi=wi.slice(t+1)),w(Pe,Qi),c}finally{mt=i,pu=!1}}return null}var us=[],cs=0,ya=null,Ma=0,Xn=[],jn=0,wr=null,Ai=1,Ri="";function Ar(t,i){us[cs++]=Ma,us[cs++]=ya,ya=t,Ma=i}function Zd(t,i,o){Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=wr,wr=t;var l=Ai;t=Ri;var c=32-St(l)-1;l&=~(1<<c),o+=1;var h=32-St(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ai=1<<32-St(i)+c|o<<c|l,Ri=h+t}else Ai=1<<h|o<<c|l,Ri=t}function mu(t){t.return!==null&&(Ar(t,1),Zd(t,1,0))}function gu(t){for(;t===ya;)ya=us[--cs],us[cs]=null,Ma=us[--cs],us[cs]=null;for(;t===wr;)wr=Xn[--jn],Xn[jn]=null,Ri=Xn[--jn],Xn[jn]=null,Ai=Xn[--jn],Xn[jn]=null}var On=null,kn=null,Vt=!1,ti=null;function Qd(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Jd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,On=t,kn=null,!0):!1;default:return!1}}function _u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(Vt){var i=kn;if(i){var o=i;if(!Jd(t,i)){if(_u(t))throw Error(n(418));i=$i(o.nextSibling);var l=On;i&&Jd(t,i)?Qd(l,o):(t.flags=t.flags&-4097|2,Vt=!1,On=t)}}else{if(_u(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,On=t}}}function eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Ea(t){if(t!==On)return!1;if(!Vt)return eh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uu(t.type,t.memoizedProps)),i&&(i=kn)){if(_u(t))throw th(),Error(n(418));for(;i;)Qd(t,i),i=$i(i.nextSibling)}if(eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=$i(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?$i(t.stateNode.nextSibling):null;return!0}function th(){for(var t=kn;t;)t=$i(t.nextSibling)}function fs(){kn=On=null,Vt=!1}function xu(t){ti===null?ti=[t]:ti.push(t)}var p_=P.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ta(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function nh(t){var i=t._init;return i(t._payload)}function ih(t){function i(Y,W){if(t){var K=Y.deletions;K===null?(Y.deletions=[W],Y.flags|=16):K.push(W)}}function o(Y,W){if(!t)return null;for(;W!==null;)i(Y,W),W=W.sibling;return null}function l(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function c(Y,W){return Y=or(Y,W),Y.index=0,Y.sibling=null,Y}function h(Y,W,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<W?(Y.flags|=2,W):K):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,W,K,Te){return W===null||W.tag!==6?(W=cc(K,Y.mode,Te),W.return=Y,W):(W=c(W,K),W.return=Y,W)}function B(Y,W,K,Te){var Ye=K.type;return Ye===F?ge(Y,W,K.props.children,Te,K.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&nh(Ye)===W.type)?(Te=c(W,K.props),Te.ref=go(Y,W,K),Te.return=Y,Te):(Te=qa(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=go(Y,W,K),Te.return=Y,Te)}function ee(Y,W,K,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=fc(K,Y.mode,Te),W.return=Y,W):(W=c(W,K.children||[]),W.return=Y,W)}function ge(Y,W,K,Te,Ye){return W===null||W.tag!==7?(W=Ir(K,Y.mode,Te,Ye),W.return=Y,W):(W=c(W,K),W.return=Y,W)}function ve(Y,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=cc(""+W,Y.mode,K),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case O:return K=qa(W.type,W.key,W.props,null,Y.mode,K),K.ref=go(Y,null,W),K.return=Y,K;case z:return W=fc(W,Y.mode,K),W.return=Y,W;case oe:var Te=W._init;return ve(Y,Te(W._payload),K)}if(ut(W)||le(W))return W=Ir(W,Y.mode,K,null),W.return=Y,W;Ta(Y,W)}return null}function me(Y,W,K,Te){var Ye=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:D(Y,W,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return K.key===Ye?B(Y,W,K,Te):null;case z:return K.key===Ye?ee(Y,W,K,Te):null;case oe:return Ye=K._init,me(Y,W,Ye(K._payload),Te)}if(ut(K)||le(K))return Ye!==null?null:ge(Y,W,K,Te,null);Ta(Y,K)}return null}function Ne(Y,W,K,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,D(W,Y,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return Y=Y.get(Te.key===null?K:Te.key)||null,B(W,Y,Te,Ye);case z:return Y=Y.get(Te.key===null?K:Te.key)||null,ee(W,Y,Te,Ye);case oe:var et=Te._init;return Ne(Y,W,K,et(Te._payload),Ye)}if(ut(Te)||le(Te))return Y=Y.get(K)||null,ge(W,Y,Te,Ye,null);Ta(W,Te)}return null}function Ve(Y,W,K,Te){for(var Ye=null,et=null,tt=W,ot=W=0,sn=null;tt!==null&&ot<K.length;ot++){tt.index>ot?(sn=tt,tt=null):sn=tt.sibling;var Tt=me(Y,tt,K[ot],Te);if(Tt===null){tt===null&&(tt=sn);break}t&&tt&&Tt.alternate===null&&i(Y,tt),W=h(Tt,W,ot),et===null?Ye=Tt:et.sibling=Tt,et=Tt,tt=sn}if(ot===K.length)return o(Y,tt),Vt&&Ar(Y,ot),Ye;if(tt===null){for(;ot<K.length;ot++)tt=ve(Y,K[ot],Te),tt!==null&&(W=h(tt,W,ot),et===null?Ye=tt:et.sibling=tt,et=tt);return Vt&&Ar(Y,ot),Ye}for(tt=l(Y,tt);ot<K.length;ot++)sn=Ne(tt,Y,ot,K[ot],Te),sn!==null&&(t&&sn.alternate!==null&&tt.delete(sn.key===null?ot:sn.key),W=h(sn,W,ot),et===null?Ye=sn:et.sibling=sn,et=sn);return t&&tt.forEach(function(ar){return i(Y,ar)}),Vt&&Ar(Y,ot),Ye}function Xe(Y,W,K,Te){var Ye=le(K);if(typeof Ye!="function")throw Error(n(150));if(K=Ye.call(K),K==null)throw Error(n(151));for(var et=Ye=null,tt=W,ot=W=0,sn=null,Tt=K.next();tt!==null&&!Tt.done;ot++,Tt=K.next()){tt.index>ot?(sn=tt,tt=null):sn=tt.sibling;var ar=me(Y,tt,Tt.value,Te);if(ar===null){tt===null&&(tt=sn);break}t&&tt&&ar.alternate===null&&i(Y,tt),W=h(ar,W,ot),et===null?Ye=ar:et.sibling=ar,et=ar,tt=sn}if(Tt.done)return o(Y,tt),Vt&&Ar(Y,ot),Ye;if(tt===null){for(;!Tt.done;ot++,Tt=K.next())Tt=ve(Y,Tt.value,Te),Tt!==null&&(W=h(Tt,W,ot),et===null?Ye=Tt:et.sibling=Tt,et=Tt);return Vt&&Ar(Y,ot),Ye}for(tt=l(Y,tt);!Tt.done;ot++,Tt=K.next())Tt=Ne(tt,Y,ot,Tt.value,Te),Tt!==null&&(t&&Tt.alternate!==null&&tt.delete(Tt.key===null?ot:Tt.key),W=h(Tt,W,ot),et===null?Ye=Tt:et.sibling=Tt,et=Tt);return t&&tt.forEach(function(Y_){return i(Y,Y_)}),Vt&&Ar(Y,ot),Ye}function qt(Y,W,K,Te){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case O:e:{for(var Ye=K.key,et=W;et!==null;){if(et.key===Ye){if(Ye=K.type,Ye===F){if(et.tag===7){o(Y,et.sibling),W=c(et,K.props.children),W.return=Y,Y=W;break e}}else if(et.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&nh(Ye)===et.type){o(Y,et.sibling),W=c(et,K.props),W.ref=go(Y,et,K),W.return=Y,Y=W;break e}o(Y,et);break}else i(Y,et);et=et.sibling}K.type===F?(W=Ir(K.props.children,Y.mode,Te,K.key),W.return=Y,Y=W):(Te=qa(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=go(Y,W,K),Te.return=Y,Y=Te)}return M(Y);case z:e:{for(et=K.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){o(Y,W.sibling),W=c(W,K.children||[]),W.return=Y,Y=W;break e}else{o(Y,W);break}else i(Y,W);W=W.sibling}W=fc(K,Y.mode,Te),W.return=Y,Y=W}return M(Y);case oe:return et=K._init,qt(Y,W,et(K._payload),Te)}if(ut(K))return Ve(Y,W,K,Te);if(le(K))return Xe(Y,W,K,Te);Ta(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(o(Y,W.sibling),W=c(W,K),W.return=Y,Y=W):(o(Y,W),W=cc(K,Y.mode,Te),W.return=Y,Y=W),M(Y)):o(Y,W)}return qt}var ds=ih(!0),rh=ih(!1),wa=Ki(null),Aa=null,hs=null,Su=null;function yu(){Su=hs=Aa=null}function Mu(t){var i=wa.current;Ht(wa),t._currentValue=i}function Eu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ps(t,i){Aa=t,Su=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(Aa===null)throw Error(n(308));hs=t,Aa.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Rr=null;function Tu(t){Rr===null?Rr=[t]:Rr.push(t)}function sh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Tu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ci(t,l)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ji=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ci(t,o)}return c=l.interleaved,c===null?(i.next=i,Tu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ci(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Mr(t,o)}}function ah(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ca(t,i,o,l){var c=t.updateQueue;Ji=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var B=D,ee=B.next;B.next=null,M===null?h=ee:M.next=ee,M=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==M&&(D===null?ge.firstBaseUpdate=ee:D.next=ee,ge.lastBaseUpdate=B))}if(h!==null){var ve=c.baseState;M=0,ge=ee=B=null,D=h;do{var me=D.lane,Ne=D.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=t,Xe=D;switch(me=i,Ne=o,Xe.tag){case 1:if(Ve=Xe.payload,typeof Ve=="function"){ve=Ve.call(Ne,ve,me);break e}ve=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Xe.payload,me=typeof Ve=="function"?Ve.call(Ne,ve,me):Ve,me==null)break e;ve=se({},ve,me);break e;case 2:Ji=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else Ne={eventTime:Ne,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(ee=ge=Ne,B=ve):ge=ge.next=Ne,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(ge===null&&(B=ve),c.baseState=B,c.firstBaseUpdate=ee,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);br|=M,t.lanes=M,t.memoizedState=ve}}function lh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var _o={},hi=Ki(_o),vo=Ki(_o),xo=Ki(_o);function Cr(t){if(t===_o)throw Error(n(174));return t}function Au(t,i){switch(Ot(xo,i),Ot(vo,t),Ot(hi,_o),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=_e(i,t)}Ht(hi),Ot(hi,i)}function ms(){Ht(hi),Ht(vo),Ht(xo)}function uh(t){Cr(xo.current);var i=Cr(hi.current),o=_e(i,t.type);i!==o&&(Ot(vo,t),Ot(hi,o))}function Ru(t){vo.current===t&&(Ht(hi),Ht(vo))}var Gt=Ki(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cu=[];function Pu(){for(var t=0;t<Cu.length;t++)Cu[t]._workInProgressVersionPrimary=null;Cu.length=0}var ba=P.ReactCurrentDispatcher,bu=P.ReactCurrentBatchConfig,Pr=0,Wt=null,Qt=null,nn=null,La=!1,So=!1,yo=0,m_=0;function pn(){throw Error(n(321))}function Lu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ei(t[o],i[o]))return!1;return!0}function Du(t,i,o,l,c,h){if(Pr=h,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ba.current=t===null||t.memoizedState===null?x_:S_,t=o(l,c),So){h=0;do{if(So=!1,yo=0,25<=h)throw Error(n(301));h+=1,nn=Qt=null,i.updateQueue=null,ba.current=y_,t=o(l,c)}while(So)}if(ba.current=Ia,i=Qt!==null&&Qt.next!==null,Pr=0,nn=Qt=Wt=null,La=!1,i)throw Error(n(300));return t}function Uu(){var t=yo!==0;return yo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Wt.memoizedState=nn=t:nn=nn.next=t,nn}function qn(){if(Qt===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=nn===null?Wt.memoizedState:nn.next;if(i!==null)nn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Wt.memoizedState=nn=t:nn=nn.next=t}return nn}function Mo(t,i){return typeof i=="function"?i(t):i}function Iu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Qt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,B=null,ee=h;do{var ge=ee.lane;if((Pr&ge)===ge)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var ve={lane:ge,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(D=B=ve,M=l):B=B.next=ve,Wt.lanes|=ge,br|=ge}ee=ee.next}while(ee!==null&&ee!==h);B===null?M=l:B.next=D,ei(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Wt.lanes|=h,br|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Nu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);ei(h,i.memoizedState)||(bn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function ch(){}function fh(t,i){var o=Wt,l=qn(),c=i(),h=!ei(l.memoizedState,c);if(h&&(l.memoizedState=c,bn=!0),l=l.queue,Fu(ph.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Eo(9,hh.bind(null,o,l,c,i),void 0,null),rn===null)throw Error(n(349));(Pr&30)!==0||dh(o,i,c)}return c}function dh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function hh(t,i,o,l){i.value=o,i.getSnapshot=l,mh(i)&&gh(t)}function ph(t,i,o){return o(function(){mh(i)&&gh(t)})}function mh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ei(t,o)}catch{return!0}}function gh(t){var i=Ci(t,1);i!==null&&si(i,t,1,-1)}function _h(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=v_.bind(null,Wt,t),[i.memoizedState,t]}function Eo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function vh(){return qn().memoizedState}function Da(t,i,o,l){var c=pi();Wt.flags|=t,c.memoizedState=Eo(1|i,o,void 0,l===void 0?null:l)}function Ua(t,i,o,l){var c=qn();l=l===void 0?null:l;var h=void 0;if(Qt!==null){var M=Qt.memoizedState;if(h=M.destroy,l!==null&&Lu(l,M.deps)){c.memoizedState=Eo(i,o,h,l);return}}Wt.flags|=t,c.memoizedState=Eo(1|i,o,h,l)}function xh(t,i){return Da(8390656,8,t,i)}function Fu(t,i){return Ua(2048,8,t,i)}function Sh(t,i){return Ua(4,2,t,i)}function yh(t,i){return Ua(4,4,t,i)}function Mh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Eh(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4,4,Mh.bind(null,i,t),o)}function Ou(){}function Th(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Lu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function wh(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Lu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Ah(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=o):(ei(o,i)||(o=Mn(),Wt.lanes|=o,br|=o,t.baseState=!0),i)}function g_(t,i){var o=mt;mt=o!==0&&4>o?o:4,t(!0);var l=bu.transition;bu.transition={};try{t(!1),i()}finally{mt=o,bu.transition=l}}function Rh(){return qn().memoizedState}function __(t,i,o){var l=rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ch(t))Ph(i,o);else if(o=sh(t,i,o,l),o!==null){var c=Tn();si(o,t,l,c),bh(o,i,l)}}function v_(t,i,o){var l=rr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Ph(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,ei(D,M)){var B=i.interleaved;B===null?(c.next=c,Tu(i)):(c.next=B.next,B.next=c),i.interleaved=c;return}}catch{}o=sh(t,i,c,l),o!==null&&(c=Tn(),si(o,t,l,c),bh(o,i,l))}}function Ch(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Ph(t,i){So=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function bh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Mr(t,o)}}var Ia={readContext:Yn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},x_={readContext:Yn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:xh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Da(4194308,4,Mh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Da(4194308,4,t,i)},useInsertionEffect:function(t,i){return Da(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=__.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:_h,useDebugValue:Ou,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=_h(!1),i=t[0];return t=g_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Wt,c=pi();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),rn===null)throw Error(n(349));(Pr&30)!==0||dh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,xh(ph.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,hh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=pi(),i=rn.identifierPrefix;if(Vt){var o=Ri,l=Ai;o=(l&~(1<<32-St(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=m_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},S_={readContext:Yn,useCallback:Th,useContext:Yn,useEffect:Fu,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:yh,useMemo:wh,useReducer:Iu,useRef:vh,useState:function(){return Iu(Mo)},useDebugValue:Ou,useDeferredValue:function(t){var i=qn();return Ah(i,Qt.memoizedState,t)},useTransition:function(){var t=Iu(Mo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:fh,useId:Rh,unstable_isNewReconciler:!1},y_={readContext:Yn,useCallback:Th,useContext:Yn,useEffect:Fu,useImperativeHandle:Eh,useInsertionEffect:Sh,useLayoutEffect:yh,useMemo:wh,useReducer:Nu,useRef:vh,useState:function(){return Nu(Mo)},useDebugValue:Ou,useDeferredValue:function(t){var i=qn();return Qt===null?i.memoizedState=t:Ah(i,Qt.memoizedState,t)},useTransition:function(){var t=Nu(Mo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:fh,useId:Rh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function ku(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Na={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Tn(),c=rr(t),h=Pi(l,c);h.payload=i,o!=null&&(h.callback=o),i=er(t,h,c),i!==null&&(si(i,t,c,l),Ra(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Tn(),c=rr(t),h=Pi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=er(t,h,c),i!==null&&(si(i,t,c,l),Ra(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),l=rr(t),c=Pi(o,l);c.tag=2,i!=null&&(c.callback=i),i=er(t,c,l),i!==null&&(si(i,t,l,o),Ra(i,t,l))}};function Lh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!lo(o,l)||!lo(c,h):!0}function Dh(t,i,o){var l=!1,c=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=Yn(h):(c=Pn(i)?Tr:hn.current,l=i.contextTypes,h=(l=l!=null)?ls(t,c):Zi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Na,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Uh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Na.enqueueReplaceState(i,i.state,null)}function Bu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},wu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Yn(h):(h=Pn(i)?Tr:hn.current,c.context=ls(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ku(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Na.enqueueReplaceState(c,c.state,null),Ca(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var o="",l=i;do o+=Q(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function zu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Hu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var M_=typeof WeakMap=="function"?WeakMap:Map;function Ih(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Va||(Va=!0,nc=l),Hu(t,i)},o}function Nh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Hu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Hu(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Fh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new M_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=F_.bind(null,t,i,o),i.then(t,t))}function Oh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function kh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,er(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var E_=P.ReactCurrentOwner,bn=!1;function En(t,i,o,l){i.child=t===null?rh(i,null,o,l):ds(i,t.child,o,l)}function Bh(t,i,o,l,c){o=o.render;var h=i.ref;return ps(i,c),l=Du(t,i,o,l,h,c),o=Uu(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,bi(t,i,c)):(Vt&&o&&mu(i),i.flags|=1,En(t,i,l,c),i.child)}function zh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!uc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Hh(t,i,h,l,c)):(t=qa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(M,l)&&t.ref===i.ref)return bi(t,i,c)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function Hh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,bi(t,i,c)}return Vu(t,i,o,l,c)}function Vh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(vs,Bn),Bn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(vs,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Ot(vs,Bn),Bn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Ot(vs,Bn),Bn|=l;return En(t,i,c,o),i.child}function Gh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Vu(t,i,o,l,c){var h=Pn(o)?Tr:hn.current;return h=ls(i,h),ps(i,c),o=Du(t,i,o,l,h,c),l=Uu(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,bi(t,i,c)):(Vt&&l&&mu(i),i.flags|=1,En(t,i,o,c),i.child)}function Wh(t,i,o,l,c){if(Pn(o)){var h=!0;xa(i)}else h=!1;if(ps(i,c),i.stateNode===null)Oa(t,i),Dh(i,o,l),Bu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var B=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Yn(ee):(ee=Pn(o)?Tr:hn.current,ee=ls(i,ee));var ge=o.getDerivedStateFromProps,ve=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||B!==ee)&&Uh(i,M,l,ee),Ji=!1;var me=i.memoizedState;M.state=me,Ca(i,l,M,c),B=i.memoizedState,D!==l||me!==B||Cn.current||Ji?(typeof ge=="function"&&(ku(i,o,ge,l),B=i.memoizedState),(D=Ji||Lh(i,o,D,l,me,B,ee))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=ee,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,oh(t,i),D=i.memoizedProps,ee=i.type===i.elementType?D:ni(i.type,D),M.props=ee,ve=i.pendingProps,me=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Yn(B):(B=Pn(o)?Tr:hn.current,B=ls(i,B));var Ne=o.getDerivedStateFromProps;(ge=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ve||me!==B)&&Uh(i,M,l,B),Ji=!1,me=i.memoizedState,M.state=me,Ca(i,l,M,c);var Ve=i.memoizedState;D!==ve||me!==Ve||Cn.current||Ji?(typeof Ne=="function"&&(ku(i,o,Ne,l),Ve=i.memoizedState),(ee=Ji||Lh(i,o,ee,l,me,Ve,B)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ve,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ve,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),M.props=l,M.state=Ve,M.context=B,l=ee):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Gu(t,i,o,l,h,c)}function Gu(t,i,o,l,c,h){Gh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&$d(i,o,!1),bi(t,i,h);l=i.stateNode,E_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ds(i,t.child,null,h),i.child=ds(i,null,D,h)):En(t,i,D,h),i.memoizedState=l.state,c&&$d(i,o,!0),i.child}function Xh(t){var i=t.stateNode;i.pendingContext?Yd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Yd(t,i.context,!1),Au(t,i.containerInfo)}function jh(t,i,o,l,c){return fs(),xu(c),i.flags|=256,En(t,i,o,l),i.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,i,o){var l=i.pendingProps,c=Gt.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ot(Gt,c&1),t===null)return vu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=$a(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Xu(o),i.memoizedState=Wu,t):ju(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return T_(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=or(c,B),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=or(D,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Xu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Wu,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ju(t,i){return i=$a({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Fa(t,i,o,l){return l!==null&&xu(l),ds(i,t.child,null,o),t=ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function T_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=zu(Error(n(422))),Fa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=$a({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,M),i.child.memoizedState=Xu(M),i.memoizedState=Wu,h);if((i.mode&1)===0)return Fa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=zu(h,l,void 0),Fa(t,i,M,l)}if(D=(M&t.childLanes)!==0,bn||D){if(l=rn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ci(t,c),si(l,t,c,-1))}return lc(),l=zu(Error(n(421))),Fa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=O_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,kn=$i(c.nextSibling),On=i,Vt=!0,ti=null,t!==null&&(Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=wr,Ai=t.id,Ri=t.overflow,wr=i),i=ju(i,l.children),i.flags|=4096,i)}function qh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Eu(t.return,i,o)}function Yu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function $h(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(En(t,i,l.children,o),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,o,i);else if(t.tag===19)qh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Yu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Pa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Yu(i,!0,o,null,h);break;case"together":Yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=or(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=or(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function w_(t,i,o){switch(i.tag){case 3:Xh(i),fs();break;case 5:uh(i);break;case 1:Pn(i.type)&&xa(i);break;case 4:Au(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ot(wa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Gt,Gt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Yh(t,i,o):(Ot(Gt,Gt.current&1),t=bi(t,i,o),t!==null?t.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return $h(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ot(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,Vh(t,i,o)}return bi(t,i,o)}var Kh,qu,Zh,Qh;Kh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},qu=function(){},Zh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(hi.current);var h=null;switch(o){case"input":c=_t(t,c),l=_t(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=Bt(t,c),l=Bt(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ga)}je(o,l);var M;o=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var D=c[ee];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var B=l[ee];if(D=c?.[ee],l.hasOwnProperty(ee)&&B!==D&&(B!=null||D!=null))if(ee==="style")if(D){for(M in D)!D.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&D[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(h||(h=[]),h.push(ee,o)),o=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(h=h||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&zt("scroll",t),h||D===B||(h=[])):(h=h||[]).push(ee,B))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Qh=function(t,i,o,l){o!==l&&(i.flags|=4)};function To(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function A_(t,i,o){var l=i.pendingProps;switch(gu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Pn(i.type)&&va(),mn(i),null;case 3:return l=i.stateNode,ms(),Ht(Cn),Ht(hn),Pu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ea(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(sc(ti),ti=null))),qu(t,i),mn(i),null;case 5:Ru(i);var c=Cr(xo.current);if(o=i.type,t!==null&&i.stateNode!=null)Zh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Cr(hi.current),Ea(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[di]=i,l[po]=h,t=(i.mode&1)!==0,o){case"dialog":zt("cancel",l),zt("close",l);break;case"iframe":case"object":case"embed":zt("load",l);break;case"video":case"audio":for(c=0;c<co.length;c++)zt(co[c],l);break;case"source":zt("error",l);break;case"img":case"image":case"link":zt("error",l),zt("load",l);break;case"details":zt("toggle",l);break;case"input":Qe(l,h),zt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},zt("invalid",l);break;case"textarea":L(l,h),zt("invalid",l)}je(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ma(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ma(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&zt("scroll",l)}switch(o){case"input":yt(l),It(l,h,!0);break;case"textarea":yt(l),$(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ga)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[po]=l,Kh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ce(o,l),o){case"dialog":zt("cancel",t),zt("close",t),c=l;break;case"iframe":case"object":case"embed":zt("load",t),c=l;break;case"video":case"audio":for(c=0;c<co.length;c++)zt(co[c],t);c=l;break;case"source":zt("error",t),c=l;break;case"img":case"image":case"link":zt("error",t),zt("load",t),c=l;break;case"details":zt("toggle",t),c=l;break;case"input":Qe(t,l),c=_t(t,l),zt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),zt("invalid",t);break;case"textarea":L(t,l),c=Bt(t,l),zt("invalid",t);break;default:c=l}je(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var B=D[h];h==="style"?De(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&qe(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&we(t,B):typeof B=="number"&&we(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&zt("scroll",t):B!=null&&I(t,h,B,M))}switch(o){case"input":yt(t),It(t,l,!1);break;case"textarea":yt(t),$(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ee(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?kt(t,!!l.multiple,h,!1):l.defaultValue!=null&&kt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ga)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)Qh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(xo.current),Cr(hi.current),Ea(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(h=l.nodeValue!==o)&&(t=On,t!==null))switch(t.tag){case 3:ma(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return mn(i),null;case 13:if(Ht(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)th(),fs(),i.flags|=98560,h=!1;else if(h=Ea(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),h=!1}else ti!==null&&(sc(ti),ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?Jt===0&&(Jt=3):lc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return ms(),qu(t,i),t===null&&fo(i.stateNode.containerInfo),mn(i),null;case 10:return Mu(i.type._context),mn(i),null;case 17:return Pn(i.type)&&va(),mn(i),null;case 19:if(Ht(Gt),h=i.memoizedState,h===null)return mn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)To(h,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Pa(t),M!==null){for(i.flags|=128,To(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ot(Gt,Gt.current&1|2),i.child}t=t.sibling}h.tail!==null&&G()>xs&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304)}else{if(!l)if(t=Pa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Vt)return mn(i),null}else 2*G()-h.renderingStartTime>xs&&o!==1073741824&&(i.flags|=128,l=!0,To(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=G(),i.sibling=null,o=Gt.current,Ot(Gt,l?o&1|2:o&1),i):(mn(i),null);case 22:case 23:return ac(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function R_(t,i){switch(gu(i),i.tag){case 1:return Pn(i.type)&&va(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Ht(Cn),Ht(hn),Pu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ru(i),null;case 13:if(Ht(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(Gt),null;case 4:return ms(),null;case 10:return Mu(i.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var ka=!1,gn=!1,C_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Xt(t,i,l)}else o.current=null}function $u(t,i,o){try{o()}catch(l){Xt(t,i,l)}}var Jh=!1;function P_(t,i){if(au=ra,t=Ld(),Jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,B=-1,ee=0,ge=0,ve=t,me=null;t:for(;;){for(var Ne;ve!==o||c!==0&&ve.nodeType!==3||(D=M+c),ve!==h||l!==0&&ve.nodeType!==3||(B=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ne=ve.firstChild)!==null;)me=ve,ve=Ne;for(;;){if(ve===t)break t;if(me===o&&++ee===c&&(D=M),me===h&&++ge===l&&(B=M),(Ne=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Ne}o=D===-1||B===-1?null:{start:D,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(lu={focusedElem:t,selectionRange:o},ra=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Xe=Ve.memoizedProps,qt=Ve.memoizedState,Y=i.stateNode,W=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:ni(i.type,Xe),qt);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Xt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return Ve=Jh,Jh=!1,Ve}function wo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&$u(i,o,h)}c=c.next}while(c!==l)}}function Ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Ku(t){var i=t.ref;if(i!==null){var o=t.stateNode;t.tag,t=o,typeof i=="function"?i(t):i.current=t}}function ep(t){var i=t.alternate;i!==null&&(t.alternate=null,ep(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[po],delete i[du],delete i[f_],delete i[d_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tp(t){return t.tag===5||t.tag===3||t.tag===4}function np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ga));else if(l!==4&&(t=t.child,t!==null))for(Zu(t,i,o),t=t.sibling;t!==null;)Zu(t,i,o),t=t.sibling}function Qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,o),t=t.sibling;t!==null;)Qu(t,i,o),t=t.sibling}var an=null,ii=!1;function tr(t,i,o){for(o=o.child;o!==null;)ip(t,i,o),o=o.sibling}function ip(t,i,o){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Ze,o)}catch{}switch(o.tag){case 5:gn||_s(o,i);case 6:var l=an,c=ii;an=null,tr(t,i,o),an=l,ii=c,an!==null&&(ii?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ii?(t=an,o=o.stateNode,t.nodeType===8?fu(t.parentNode,o):t.nodeType===1&&fu(t,o),no(t)):fu(an,o.stateNode));break;case 4:l=an,c=ii,an=o.stateNode.containerInfo,ii=!0,tr(t,i,o),an=l,ii=c;break;case 0:case 11:case 14:case 15:if(!gn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&$u(o,i,M),c=c.next}while(c!==l)}tr(t,i,o);break;case 1:if(!gn&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Xt(o,i,D)}tr(t,i,o);break;case 21:tr(t,i,o);break;case 22:o.mode&1?(gn=(l=gn)||o.memoizedState!==null,tr(t,i,o),gn=l):tr(t,i,o);break;default:tr(t,i,o)}}function rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new C_),i.forEach(function(l){var c=k_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ri(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:an=D.stateNode,ii=!1;break e;case 3:an=D.stateNode.containerInfo,ii=!0;break e;case 4:an=D.stateNode.containerInfo,ii=!0;break e}D=D.return}if(an===null)throw Error(n(160));ip(h,M,c),an=null,ii=!1;var B=c.alternate;B!==null&&(B.return=null),c.return=null}catch(ee){Xt(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sp(i,t),i=i.sibling}function sp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),mi(t),l&4){try{wo(3,t,t.return),Ba(3,t)}catch(Xe){Xt(t,t.return,Xe)}try{wo(5,t,t.return)}catch(Xe){Xt(t,t.return,Xe)}}break;case 1:ri(i,t),mi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(ri(i,t),mi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var c=t.stateNode;try{we(c,"")}catch(Xe){Xt(t,t.return,Xe)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&vt(c,h),Ce(D,M);var ee=Ce(D,h);for(M=0;M<B.length;M+=2){var ge=B[M],ve=B[M+1];ge==="style"?De(c,ve):ge==="dangerouslySetInnerHTML"?qe(c,ve):ge==="children"?we(c,ve):I(c,ge,ve,ee)}switch(D){case"input":Ke(c,h);break;case"textarea":E(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?kt(c,!!h.multiple,Ne,!1):me!==!!h.multiple&&(h.defaultValue!=null?kt(c,!!h.multiple,h.defaultValue,!0):kt(c,!!h.multiple,h.multiple?[]:"",!1))}c[po]=h}catch(Xe){Xt(t,t.return,Xe)}}break;case 6:if(ri(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Xe){Xt(t,t.return,Xe)}}break;case 3:if(ri(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(Xe){Xt(t,t.return,Xe)}break;case 4:ri(i,t),mi(t);break;case 13:ri(i,t),mi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(tc=G())),l&4&&rp(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(gn=(ee=gn)||ge,ri(i,t),gn=ee):ri(i,t),mi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ge&&(t.mode&1)!==0)for(Be=t,ge=t.child;ge!==null;){for(ve=Be=ge;Be!==null;){switch(me=Be,Ne=me.child,me.tag){case 0:case 11:case 14:case 15:wo(4,me,me.return);break;case 1:_s(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Xe){Xt(l,o,Xe)}}break;case 5:_s(me,me.return);break;case 22:if(me.memoizedState!==null){lp(ve);continue}}Ne!==null?(Ne.return=me,Be=Ne):lp(ve)}ge=ge.sibling}e:for(ge=null,ve=t;;){if(ve.tag===5){if(ge===null){ge=ve;try{c=ve.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ve.stateNode,B=ve.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Me("display",M))}catch(Xe){Xt(t,t.return,Xe)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=ee?"":ve.memoizedProps}catch(Xe){Xt(t,t.return,Xe)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ri(i,t),mi(t),l&4&&rp(t);break;case 21:break;default:ri(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(tp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(we(c,""),l.flags&=-33);var h=np(t);Qu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=np(t);Zu(t,D,M);break;default:throw Error(n(161))}}catch(B){Xt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function b_(t,i,o){Be=t,op(t)}function op(t,i,o){for(var l=(t.mode&1)!==0;Be!==null;){var c=Be,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||ka;if(!M){var D=c.alternate,B=D!==null&&D.memoizedState!==null||gn;D=ka;var ee=gn;if(ka=M,(gn=B)&&!ee)for(Be=c;Be!==null;)M=Be,B=M.child,M.tag===22&&M.memoizedState!==null?up(c):B!==null?(B.return=M,Be=B):up(c);for(;h!==null;)Be=h,op(h),h=h.sibling;Be=c,ka=D,gn=ee}ap(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Be=h):ap(t)}}function ap(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&lh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}lh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ge=ee.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&no(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&Ku(i)}catch(me){Xt(i,i.return,me)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function lp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function up(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ba(4,i)}catch(B){Xt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(B){Xt(i,c,B)}}var h=i.return;try{Ku(i)}catch(B){Xt(i,h,B)}break;case 5:var M=i.return;try{Ku(i)}catch(B){Xt(i,M,B)}}}catch(B){Xt(i,i.return,B)}if(i===t){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var L_=Math.ceil,za=P.ReactCurrentDispatcher,Ju=P.ReactCurrentOwner,$n=P.ReactCurrentBatchConfig,Mt=0,rn=null,$t=null,ln=0,Bn=0,vs=Ki(0),Jt=0,Ao=null,br=0,Ha=0,ec=0,Ro=null,Ln=null,tc=0,xs=1/0,Li=null,Va=!1,nc=null,nr=null,Ga=!1,ir=null,Wa=0,Co=0,ic=null,Xa=-1,ja=0;function Tn(){return(Mt&6)!==0?G():Xa!==-1?Xa:Xa=G()}function rr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&ln!==0?ln&-ln:p_.transition!==null?(ja===0&&(ja=Mn()),ja):(t=mt,t!==0||(t=window.event,t=t===void 0?16:fd(t.type)),t)}function si(t,i,o,l){if(50<Co)throw Co=0,ic=null,Error(n(185));Yt(t,o,l),((Mt&2)===0||t!==rn)&&(t===rn&&((Mt&2)===0&&(Ha|=o),Jt===4&&sr(t,ln)),Dn(t,l),o===1&&Mt===0&&(i.mode&1)===0&&(xs=G()+500,Sa&&Qi()))}function Dn(t,i){var o=t.callbackNode;yr(t,i);var l=Jn(t,t===rn?ln:0);if(l===0)o!==null&&j(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&j(o),i===1)t.tag===0?h_(fp.bind(null,t)):Kd(fp.bind(null,t)),u_(function(){(Mt&6)===0&&Qi()}),o=null;else{switch(id(l)){case 1:o=Pe;break;case 4:o=He;break;case 16:o=Ie;break;case 536870912:o=rt;break;default:o=Ie}o=xp(o,cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function cp(t,i){if(Xa=-1,ja=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=Jn(t,t===rn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ya(t,l);else{i=l;var c=Mt;Mt|=2;var h=hp();(rn!==t||ln!==i)&&(Li=null,xs=G()+500,Dr(t,i));do try{I_();break}catch(D){dp(t,D)}while(!0);yu(),za.current=h,Mt=c,$t!==null?i=0:(rn=null,ln=0,i=Jt)}if(i!==0){if(i===2&&(c=Ft(t),c!==0&&(l=c,i=rc(t,c))),i===1)throw o=Ao,Dr(t,0),sr(t,l),Dn(t,G()),o;if(i===6)sr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!D_(c)&&(i=Ya(t,l),i===2&&(h=Ft(t),h!==0&&(l=h,i=rc(t,h))),i===1))throw o=Ao,Dr(t,0),sr(t,l),Dn(t,G()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Ln,Li);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=tc+500-G(),10<i)){if(Jn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Tn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=cu(Ur.bind(null,t,Ln,Li),i);break}Ur(t,Ln,Li);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-St(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=G()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*L_(l/1960))-l,10<l){t.timeoutHandle=cu(Ur.bind(null,t,Ln,Li),l);break}Ur(t,Ln,Li);break;case 5:Ur(t,Ln,Li);break;default:throw Error(n(329))}}}return Dn(t,G()),t.callbackNode===o?cp.bind(null,t):null}function rc(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&sc(i)),t}function sc(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function D_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!ei(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~ec,i&=~Ha,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-St(i),l=1<<o;t[o]=-1,i&=~l}}function fp(t){if((Mt&6)!==0)throw Error(n(327));Ss();var i=Jn(t,0);if((i&1)===0)return Dn(t,G()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var l=Ft(t);l!==0&&(i=l,o=rc(t,l))}if(o===1)throw o=Ao,Dr(t,0),sr(t,i),Dn(t,G()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Ln,Li),Dn(t,G()),null}function oc(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(xs=G()+500,Sa&&Qi())}}function Lr(t){ir!==null&&ir.tag===0&&(Mt&6)===0&&Ss();var i=Mt;Mt|=1;var o=$n.transition,l=mt;try{if($n.transition=null,mt=1,t)return t()}finally{mt=l,$n.transition=o,Mt=i,(Mt&6)===0&&Qi()}}function ac(){Bn=vs.current,Ht(vs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,l_(o)),$t!==null)for(o=$t.return;o!==null;){var l=o;switch(gu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&va();break;case 3:ms(),Ht(Cn),Ht(hn),Pu();break;case 5:Ru(l);break;case 4:ms();break;case 13:Ht(Gt);break;case 19:Ht(Gt);break;case 10:Mu(l.type._context);break;case 22:case 23:ac()}o=o.return}if(rn=t,$t=t=or(t.current,null),ln=Bn=i,Jt=0,Ao=null,ec=Ha=br=0,Ln=Ro=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Rr=null}return t}function dp(t,i){do{var o=$t;try{if(yu(),ba.current=Ia,La){for(var l=Wt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}La=!1}if(Pr=0,nn=Qt=Wt=null,So=!1,yo=0,Ju.current=null,o===null||o.return===null){Jt=1,Ao=i,$t=null;break}e:{var h=t,M=o.return,D=o,B=i;if(i=ln,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,ge=D,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ne=Oh(M);if(Ne!==null){Ne.flags&=-257,kh(Ne,M,D,h,i),Ne.mode&1&&Fh(h,ee,i),i=Ne,B=ee;var Ve=i.updateQueue;if(Ve===null){var Xe=new Set;Xe.add(B),i.updateQueue=Xe}else Ve.add(B);break e}else{if((i&1)===0){Fh(h,ee,i),lc();break e}B=Error(n(426))}}else if(Vt&&D.mode&1){var qt=Oh(M);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),kh(qt,M,D,h,i),xu(gs(B,D));break e}}h=B=gs(B,D),Jt!==4&&(Jt=2),Ro===null?Ro=[h]:Ro.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Ih(h,B,i);ah(h,Y);break e;case 1:D=B;var W=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(nr===null||!nr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Nh(h,D,i);ah(h,Te);break e}}h=h.return}while(h!==null)}mp(o)}catch(Ye){i=Ye,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function hp(){var t=za.current;return za.current=Ia,t===null?Ia:t}function lc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||(br&268435455)===0&&(Ha&268435455)===0||sr(rn,ln)}function Ya(t,i){var o=Mt;Mt|=2;var l=hp();(rn!==t||ln!==i)&&(Li=null,Dr(t,i));do try{U_();break}catch(c){dp(t,c)}while(!0);if(yu(),Mt=o,za.current=l,$t!==null)throw Error(n(261));return rn=null,ln=0,Jt}function U_(){for(;$t!==null;)pp($t)}function I_(){for(;$t!==null&&!ne();)pp($t)}function pp(t){var i=vp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?mp(t):$t=i,Ju.current=null}function mp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=A_(o,i,Bn),o!==null){$t=o;return}}else{if(o=R_(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Jt===0&&(Jt=5)}function Ur(t,i,o){var l=mt,c=$n.transition;try{$n.transition=null,mt=1,N_(t,i,o,l)}finally{$n.transition=c,mt=l}return null}function N_(t,i,o,l){do Ss();while(ir!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(dn(t,h),t===rn&&($t=rn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ga||(Ga=!0,xp(Ie,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=$n.transition,$n.transition=null;var M=mt;mt=1;var D=Mt;Mt|=4,Ju.current=null,P_(t,o),sp(o,t),t_(lu),ra=!!au,lu=au=null,t.current=o,b_(o),ie(),Mt=D,mt=M,$n.transition=h}else t.current=o;if(Ga&&(Ga=!1,ir=t,Wa=c),h=t.pendingLanes,h===0&&(nr=null),Rt(o.stateNode),Dn(t,G()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Va)throw Va=!1,t=nc,nc=null,t;return(Wa&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===ic?Co++:(Co=0,ic=t):Co=0,Qi(),null}function Ss(){if(ir!==null){var t=id(Wa),i=$n.transition,o=mt;try{if($n.transition=null,mt=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,Wa=0,(Mt&6)!==0)throw Error(n(331));var c=Mt;for(Mt|=4,Be=t.current;Be!==null;){var h=Be,M=h.child;if((Be.flags&16)!==0){var D=h.deletions;if(D!==null){for(var B=0;B<D.length;B++){var ee=D[B];for(Be=ee;Be!==null;){var ge=Be;switch(ge.tag){case 0:case 11:case 15:wo(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,Be=ve;else for(;Be!==null;){ge=Be;var me=ge.sibling,Ne=ge.return;if(ep(ge),ge===ee){Be=null;break}if(me!==null){me.return=Ne,Be=me;break}Be=Ne}}}var Ve=h.alternate;if(Ve!==null){var Xe=Ve.child;if(Xe!==null){Ve.child=null;do{var qt=Xe.sibling;Xe.sibling=null,Xe=qt}while(Xe!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Be=M;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:wo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Be=Y;break e}Be=h.return}}var W=t.current;for(Be=W;Be!==null;){M=Be;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Be=K;else e:for(M=W;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ba(9,D)}}catch(Ye){Xt(D,D.return,Ye)}if(D===M){Be=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Be=Te;break e}Be=D.return}}if(Mt=c,Qi(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Ze,t)}catch{}l=!0}return l}finally{mt=o,$n.transition=i}}return!1}function gp(t,i,o){i=gs(o,i),i=Ih(t,i,1),t=er(t,i,1),i=Tn(),t!==null&&(Yt(t,1,i),Dn(t,i))}function Xt(t,i,o){if(t.tag===3)gp(t,t,o);else for(;i!==null;){if(i.tag===3){gp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=gs(o,t),t=Nh(i,t,1),i=er(i,t,1),t=Tn(),i!==null&&(Yt(i,1,t),Dn(i,t));break}}i=i.return}}function F_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,rn===t&&(ln&o)===o&&(Jt===4||Jt===3&&(ln&130023424)===ln&&500>G()-tc?Dr(t,0):ec|=o),Dn(t,i)}function _p(t,i){i===0&&((t.mode&1)===0?i=1:(i=pt,pt<<=1,(pt&130023424)===0&&(pt=4194304)));var o=Tn();t=Ci(t,i),t!==null&&(Yt(t,i,o),Dn(t,o))}function O_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),_p(t,o)}function k_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),_p(t,o)}var vp;vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)bn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return bn=!1,w_(t,i,o);bn=(t.flags&131072)!==0}else bn=!1,Vt&&(i.flags&1048576)!==0&&Zd(i,Ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oa(t,i),t=i.pendingProps;var c=ls(i,hn.current);ps(i,o),c=Du(null,i,l,t,c,o);var h=Uu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(l)?(h=!0,xa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,wu(i),c.updater=Na,i.stateNode=c,c._reactInternals=i,Bu(i,l,t,o),i=Gu(null,i,l,!0,h,o)):(i.tag=0,Vt&&h&&mu(i),En(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Oa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=z_(l),t=ni(l,t),c){case 0:i=Vu(null,i,l,t,o);break e;case 1:i=Wh(null,i,l,t,o);break e;case 11:i=Bh(null,i,l,t,o);break e;case 14:i=zh(null,i,l,ni(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Vu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Wh(t,i,l,c,o);case 3:e:{if(Xh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,oh(t,i),Ca(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=gs(Error(n(423)),i),i=jh(t,i,l,o,c);break e}else if(l!==c){c=gs(Error(n(424)),i),i=jh(t,i,l,o,c);break e}else for(kn=$i(i.stateNode.containerInfo.firstChild),On=i,Vt=!0,ti=null,o=rh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===c){i=bi(t,i,o);break e}En(t,i,l,o)}i=i.child}return i;case 5:return uh(i),t===null&&vu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,uu(l,c)?M=null:h!==null&&uu(l,h)&&(i.flags|=32),Gh(t,i),En(t,i,M,o),i.child;case 6:return t===null&&vu(i),null;case 13:return Yh(t,i,o);case 4:return Au(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):En(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Bh(t,i,l,c,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Ot(wa,l._currentValue),l._currentValue=M,h!==null)if(ei(h.value,M)){if(h.children===c.children&&!Cn.current){i=bi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Pi(-1,o&-o),B.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var ge=ee.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),ee.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Eu(h.return,o,i),D.lanes|=o;break}B=B.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Eu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}En(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ps(i,o),c=Yn(c),l=l(c),i.flags|=1,En(t,i,l,o),i.child;case 14:return l=i.type,c=ni(l,i.pendingProps),c=ni(l.type,c),zh(t,i,l,c,o);case 15:return Hh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Oa(t,i),i.tag=1,Pn(l)?(t=!0,xa(i)):t=!1,ps(i,o),Dh(i,l,c),Bu(i,l,c,o),Gu(null,i,l,!0,t,o);case 19:return $h(t,i,o);case 22:return Vh(t,i,o)}throw Error(n(156,i.tag))};function xp(t,i){return w(t,i)}function B_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,l){return new B_(t,i,o,l)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function z_(t){if(typeof t=="function")return uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===ue)return 14}return 2}function or(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qa(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")uc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Ir(o.children,c,h,i);case X:M=8,c|=8;break;case R:return t=Kn(12,o,i,c|2),t.elementType=R,t.lanes=h,t;case Z:return t=Kn(13,o,i,c),t.elementType=Z,t.lanes=h,t;case re:return t=Kn(19,o,i,c),t.elementType=re,t.lanes=h,t;case ce:return $a(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case U:M=9;break e;case J:M=11;break e;case ue:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Kn(7,t,l,i),t.lanes=o,t}function $a(t,i,o,l){return t=Kn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function cc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function fc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function H_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function dc(t,i,o,l,c,h,M,D,B){return t=new H_(t,i,o,D,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Kn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(h),t}function V_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Sp(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return qd(t,o,i)}return i}function yp(t,i,o,l,c,h,M,D,B){return t=dc(o,l,!0,t,c,h,M,D,B),t.context=Sp(null),o=t.current,l=Tn(),c=rr(o),h=Pi(l,c),h.callback=i??null,er(o,h,c),t.current.lanes=c,Yt(t,c,l),Dn(t,l),t}function Ka(t,i,o,l){var c=i.current,h=Tn(),M=rr(c);return o=Sp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(c,i,M),t!==null&&(si(t,c,M,h),Ra(t,c,M)),M}function Za(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Mp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function hc(t,i){Mp(t,i),(t=t.alternate)&&Mp(t,i)}function G_(){return null}var Ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function pc(t){this._internalRoot=t}Qa.prototype.render=pc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ka(t,i,null,null)},Qa.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){Ka(null,t,null,null)}),i[Ti]=null}};function Qa(t){this._internalRoot=t}Qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=od();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ji.length&&i!==0&&i<ji[o].priority;o++);ji.splice(o,0,t),o===0&&ud(t)}};function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function W_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=Za(M);h.call(ee)}}var M=yp(i,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=M,t[Ti]=M.current,fo(t.nodeType===8?t.parentNode:t),Lr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var ee=Za(B);D.call(ee)}}var B=dc(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=B,t[Ti]=B.current,fo(t.nodeType===8?t.parentNode:t),Lr(function(){Ka(i,B,o,l)}),B}function el(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var B=Za(M);D.call(B)}}Ka(i,M,t,c)}else M=W_(o,i,t,c,l);return Za(M)}rd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Zt(i.pendingLanes);o!==0&&(Mr(i,o|1),Dn(i,G()),(Mt&6)===0&&(xs=G()+500,Qi()))}break;case 13:Lr(function(){var l=Ci(t,1);if(l!==null){var c=Tn();si(l,t,1,c)}}),hc(t,1)}},zl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=Tn();si(i,t,134217728,o)}hc(t,134217728)}},sd=function(t){if(t.tag===13){var i=rr(t),o=Ci(t,i);if(o!==null){var l=Tn();si(o,t,i,l)}hc(t,i)}},od=function(){return mt},ad=function(t,i){var o=mt;try{return mt=t,i()}finally{mt=o}},Se=function(t,i,o){switch(i){case"input":if(Ke(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=_a(l);if(!c)throw Error(n(90));at(l),Ke(l,c)}}}break;case"textarea":E(t,o);break;case"select":i=o.value,i!=null&&kt(t,!!o.multiple,i,!1)}},lt=oc,Ct=Lr;var X_={usingClientEntryPoint:!1,Events:[mo,os,_a,he,We,oc]},Po={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j_={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ea(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Ze=tl.inject(j_),st=tl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(i))throw Error(n(200));return V_(t,i,null,o)},Un.createRoot=function(t,i){if(!mc(t))throw Error(n(299));var o=!1,l="",c=Ep;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=dc(t,1,!1,null,null,o,!1,l,c),t[Ti]=i.current,fo(t.nodeType===8?t.parentNode:t),new pc(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ea(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return Lr(t)},Un.hydrate=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!mc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=Ep;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=yp(i,null,t,1,o??null,c,!1,h,M),t[Ti]=i.current,fo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Qa(i)},Un.render=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Un.unstable_batchedUpdates=oc,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,l)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Dp;function t0(){if(Dp)return vc.exports;Dp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vc.exports=e0(),vc.exports}var Up;function n0(){if(Up)return nl;Up=1;var s=t0();return nl.createRoot=s.createRoot,nl.hydrateRoot=s.hydrateRoot,nl}var i0=n0();const r0=Nm(i0);const Vf="179",s0=0,Ip=1,o0=2,Fm=1,Om=2,Oi=3,vr=0,In=1,ki=2,gr=0,Bs=1,Np=2,Fp=3,Op=4,a0=5,Gr=100,l0=101,u0=102,c0=103,f0=104,d0=200,h0=201,p0=202,m0=203,ef=204,tf=205,g0=206,_0=207,v0=208,x0=209,S0=210,y0=211,M0=212,E0=213,T0=214,nf=0,rf=1,sf=2,Vs=3,of=4,af=5,lf=6,uf=7,km=0,w0=1,A0=2,_r=0,R0=1,C0=2,P0=3,Bm=4,b0=5,L0=6,D0=7,zm=300,Gs=301,Ws=302,cf=303,ff=304,Ol=306,df=1e3,jr=1001,hf=1002,fi=1003,U0=1004,il=1005,_i=1006,yc=1007,Yr=1008,Si=1009,Hm=1010,Vm=1011,Ho=1012,Gf=1013,qr=1014,Bi=1015,jo=1016,Wf=1017,Xf=1018,Vo=1020,Gm=35902,Wm=1021,Xm=1022,ci=1023,Go=1026,Wo=1027,jm=1028,jf=1029,Ym=1030,Yf=1031,qf=1033,Cl=33776,Pl=33777,bl=33778,Ll=33779,pf=35840,mf=35841,gf=35842,_f=35843,vf=36196,xf=37492,Sf=37496,yf=37808,Mf=37809,Ef=37810,Tf=37811,wf=37812,Af=37813,Rf=37814,Cf=37815,Pf=37816,bf=37817,Lf=37818,Df=37819,Uf=37820,If=37821,Dl=36492,Nf=36494,Ff=36495,qm=36283,Of=36284,kf=36285,Bf=36286,I0=3200,N0=3201,$m=0,F0=1,mr="",Qn="srgb",Xs="srgb-linear",Il="linear",Lt="srgb",ys=7680,kp=519,O0=512,k0=513,B0=514,Km=515,z0=516,H0=517,V0=518,G0=519,Bp=35044,zp="300 es",vi=2e3,Nl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hp=1234567;const Bo=Math.PI/180,Xo=180/Math.PI;function qs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function $f(s,e){return(s%e+e)%e}function W0(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function X0(s,e,n){return s!==e?(n-s)/(e-s):0}function zo(s,e,n){return(1-n)*s+n*e}function j0(s,e,n,r){return zo(s,e,1-Math.exp(-n*r))}function Y0(s,e=1){return e-Math.abs($f(s,e*2)-e)}function q0(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function $0(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function K0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Z0(s,e){return s+Math.random()*(e-s)}function Q0(s){return s*(.5-Math.random())}function J0(s){s!==void 0&&(Hp=s);let e=Hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ev(s){return s*Bo}function tv(s){return s*Xo}function nv(s){return(s&s-1)===0&&s!==0}function iv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sv(s,e,n,r,a){const u=Math.cos,f=Math.sin,d=u(n/2),m=f(n/2),p=u((e+r)/2),v=f((e+r)/2),g=u((e-r)/2),x=f((e-r)/2),y=u((r-e)/2),T=f((r-e)/2);switch(a){case"XYX":s.set(d*v,m*g,m*x,d*p);break;case"YZY":s.set(m*x,d*v,m*g,d*p);break;case"ZXZ":s.set(m*g,m*x,d*v,d*p);break;case"XZX":s.set(d*v,m*T,m*y,d*p);break;case"YXY":s.set(m*y,d*v,m*T,d*p);break;case"ZYZ":s.set(m*T,m*y,d*v,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Fs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mc={DEG2RAD:Bo,RAD2DEG:Xo,generateUUID:qs,clamp:gt,euclideanModulo:$f,mapLinear:W0,inverseLerp:X0,lerp:zo,damp:j0,pingpong:Y0,smoothstep:q0,smootherstep:$0,randInt:K0,randFloat:Z0,randFloatSpread:Q0,seededRandom:J0,degToRad:ev,radToDeg:tv,isPowerOfTwo:nv,ceilPowerOfTwo:iv,floorPowerOfTwo:rv,setQuaternionFromProperEuler:sv,normalize:wn,denormalize:Fs};class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let m=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];const x=u[f+0],y=u[f+1],T=u[f+2],A=u[f+3];if(d===0){e[n+0]=m,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=A;return}if(g!==A||m!==x||p!==y||v!==T){let S=1-d;const _=m*x+p*y+v*T+g*A,k=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const O=Math.sqrt(I),z=Math.atan2(O,_*k);S=Math.sin(S*z)/O,d=Math.sin(d*z)/O}const P=d*k;if(m=m*S+x*P,p=p*S+y*P,v=v*S+T*P,g=g*S+A*P,S===1-d){const O=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=O,p*=O,v*=O,g*=O}}e[n]=m,e[n+1]=p,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],m=r[a+1],p=r[a+2],v=r[a+3],g=u[f],x=u[f+1],y=u[f+2],T=u[f+3];return e[n]=d*T+v*g+m*y-p*x,e[n+1]=m*T+v*x+p*g-d*y,e[n+2]=p*T+v*y+d*x-m*g,e[n+3]=v*T-d*g-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(a/2),g=d(u/2),x=m(r/2),y=m(a/2),T=m(u/2);switch(f){case"XYZ":this._x=x*v*g+p*y*T,this._y=p*y*g-x*v*T,this._z=p*v*T+x*y*g,this._w=p*v*g-x*y*T;break;case"YXZ":this._x=x*v*g+p*y*T,this._y=p*y*g-x*v*T,this._z=p*v*T-x*y*g,this._w=p*v*g+x*y*T;break;case"ZXY":this._x=x*v*g-p*y*T,this._y=p*y*g+x*v*T,this._z=p*v*T+x*y*g,this._w=p*v*g-x*y*T;break;case"ZYX":this._x=x*v*g-p*y*T,this._y=p*y*g+x*v*T,this._z=p*v*T-x*y*g,this._w=p*v*g+x*y*T;break;case"YZX":this._x=x*v*g+p*y*T,this._y=p*y*g+x*v*T,this._z=p*v*T-x*y*g,this._w=p*v*g-x*y*T;break;case"XZY":this._x=x*v*g-p*y*T,this._y=p*y*g-x*v*T,this._z=p*v*T+x*y*g,this._w=p*v*g+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],m=n[9],p=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(f-a)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(v-m)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(u-p)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(f-a)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+f*d+a*p-u*m,this._y=a*v+f*m+u*d-r*p,this._z=u*v+f*p+r*m-a*d,this._w=f*v-r*d-a*m-u*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-n)*v)/p,x=Math.sin(n*v)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=u*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*a-d*r),v=2*(d*n-u*a),g=2*(u*r-f*n);return this.x=n+m*p+f*g-d*v,this.y=r+m*v+d*p-u*g,this.z=a+m*g+u*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,m=n.z;return this.x=a*m-u*d,this.y=u*f-r*m,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new q,Vp=new Yo;class ft{constructor(e,n,r,a,u,f,d,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,m,p)}set(e,n,r,a,u,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],y=r[5],T=r[8],A=a[0],S=a[3],_=a[6],k=a[1],I=a[4],P=a[7],O=a[2],z=a[5],F=a[8];return u[0]=f*A+d*k+m*O,u[3]=f*S+d*I+m*z,u[6]=f*_+d*P+m*F,u[1]=p*A+v*k+g*O,u[4]=p*S+v*I+g*z,u[7]=p*_+v*P+g*F,u[2]=x*A+y*k+T*O,u[5]=x*S+y*I+T*z,u[8]=x*_+y*P+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return n*f*v-n*d*p-r*u*v+r*d*m+a*u*p-a*f*m}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*u,y=p*u-f*m,T=n*g+r*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(a*p-v*r)*A,e[2]=(d*r-a*f)*A,e[3]=x*A,e[4]=(v*n-a*m)*A,e[5]=(a*u-d*n)*A,e[6]=y*A,e[7]=(r*m-p*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-a*p,a*m,-a*(-p*f+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new ft;function Zm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ov(){const s=Fl("canvas");return s.style.display="block",s}const Gp={};function zs(s){s in Gp||(Gp[s]=!0,console.warn(s))}function av(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Wp=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Lt&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Lt&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b))),a},workingToColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},colorSpaceToWorking:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?Il:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,u){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,u)},toWorkingColorSpace:function(a,u){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:Il,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const wt=lv();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class uv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ms===void 0&&(Ms=Fl("canvas")),Ms.width=e.width,Ms.height=e.height;const a=Ms.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ms}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=zi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cv=0;class Kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(wc(a[f].image)):u.push(wc(a[f]))}else u=wc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fv=0;const Ac=new q;class Rn extends Ys{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=jr,a=jr,u=_i,f=Yr,d=ci,m=Si,p=Rn.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=qs(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=zm;Rn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,r=0,a=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],y=m[5],T=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(T+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(p+1)/2,P=(y+1)/2,O=(_+1)/2,z=(v+x)/4,F=(g+A)/4,X=(T+S)/4;return I>P&&I>O?I<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(I),a=z/r,u=F/r):P>O?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=z/a,u=X/a):O<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(O),r=F/u,a=X/u),this.set(r,a,u,n),this}let k=Math.sqrt((S-T)*(S-T)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(k)<.001&&(k=1),this.x=(S-T)/k,this.y=(g-A)/k,this.z=(x-v)/k,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dv extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const a={width:e,height:n,depth:r.depth},u=new Rn(a);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Kf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends dv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Qm extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hv extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,oi):oi.fromBufferAttribute(u,f),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),sl.subVectors(this.max,Lo),Es.subVectors(e.a,Lo),Ts.subVectors(e.b,Lo),ws.subVectors(e.c,Lo),lr.subVectors(Ts,Es),ur.subVectors(ws,Ts),Nr.subVectors(Es,ws);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Nr.z,Nr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Nr.z,0,-Nr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Nr.y,Nr.x,0];return!Rc(n,Es,Ts,ws,sl)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Es,Ts,ws,sl))?!1:(ol.crossVectors(lr,ur),n=[ol.x,ol.y,ol.z],Rc(n,Es,Ts,ws,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new q,new q,new q,new q,new q,new q,new q,new q],oi=new q,rl=new qo,Es=new q,Ts=new q,ws=new q,lr=new q,ur=new q,Nr=new q,Lo=new q,sl=new q,ol=new q,Fr=new q;function Rc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),m=e.dot(Fr),p=n.dot(Fr),v=r.dot(Fr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const pv=new qo,Do=new q,Cc=new q;class Zf{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):pv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Do,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Cc)),this.expandByPoint(Do.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new q,Pc=new q,al=new q,cr=new q,bc=new q,ll=new q,Lc=new q;class mv{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Pc.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Pc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(al),d=cr.dot(this.direction),m=-cr.dot(al),p=cr.lengthSq(),v=Math.abs(1-f*f);let g,x,y,T;if(v>0)if(g=f*m-d,x=f*d-m,T=u*v,g>=0)if(x>=-T)if(x<=T){const A=1/v;g*=A,x*=A,y=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Pc).addScaledVector(al,x),y}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||d>a)||((d>r||r!==r)&&(r=d),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,u){bc.subVectors(n,e),ll.subVectors(r,e),Lc.crossVectors(bc,ll);let f=this.direction.dot(Lc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=d*this.direction.dot(ll.crossVectors(cr,ll));if(m<0)return null;const p=d*this.direction.dot(bc.cross(cr));if(p<0||m+p>f)return null;const v=-d*cr.dot(Lc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,u,f,d,m,p,v,g,x,y,T,A,S){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,m,p,v,g,x,y,T,A,S)}set(e,n,r,a,u,f,d,m,p,v,g,x,y,T,A,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=y,_[7]=T,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(a),p=Math.sin(a),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*g,T=d*v,A=d*g;n[0]=m*v,n[4]=-m*g,n[8]=p,n[1]=y+T*p,n[5]=x-A*p,n[9]=-d*m,n[2]=A-x*p,n[6]=T+y*p,n[10]=f*m}else if(e.order==="YXZ"){const x=m*v,y=m*g,T=p*v,A=p*g;n[0]=x+A*d,n[4]=T*d-y,n[8]=f*p,n[1]=f*g,n[5]=f*v,n[9]=-d,n[2]=y*d-T,n[6]=A+x*d,n[10]=f*m}else if(e.order==="ZXY"){const x=m*v,y=m*g,T=p*v,A=p*g;n[0]=x-A*d,n[4]=-f*g,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*v,n[9]=A-x*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(e.order==="ZYX"){const x=f*v,y=f*g,T=d*v,A=d*g;n[0]=m*v,n[4]=T*p-y,n[8]=x*p+A,n[1]=m*g,n[5]=A*p+x,n[9]=y*p-T,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,y=f*p,T=d*m,A=d*p;n[0]=m*v,n[4]=A-x*g,n[8]=T*g+y,n[1]=g,n[5]=f*v,n[9]=-d*v,n[2]=-p*v,n[6]=y*g+T,n[10]=x-A*g}else if(e.order==="XZY"){const x=f*m,y=f*p,T=d*m,A=d*p;n[0]=m*v,n[4]=-g,n[8]=p*v,n[1]=x*g+A,n[5]=f*v,n[9]=y*g-T,n[2]=T*g-y,n[6]=d*v,n[10]=A*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gv,e,_v)}lookAt(e,n,r){const a=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),fr.crossVectors(r,zn),fr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),fr.crossVectors(r,zn)),fr.normalize(),ul.crossVectors(zn,fr),a[0]=fr.x,a[4]=ul.x,a[8]=zn.x,a[1]=fr.y,a[5]=ul.y,a[9]=zn.y,a[2]=fr.z,a[6]=ul.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],y=r[13],T=r[2],A=r[6],S=r[10],_=r[14],k=r[3],I=r[7],P=r[11],O=r[15],z=a[0],F=a[4],X=a[8],R=a[12],C=a[1],U=a[5],J=a[9],Z=a[13],re=a[2],ue=a[6],oe=a[10],ce=a[14],H=a[3],le=a[7],se=a[11],b=a[15];return u[0]=f*z+d*C+m*re+p*H,u[4]=f*F+d*U+m*ue+p*le,u[8]=f*X+d*J+m*oe+p*se,u[12]=f*R+d*Z+m*ce+p*b,u[1]=v*z+g*C+x*re+y*H,u[5]=v*F+g*U+x*ue+y*le,u[9]=v*X+g*J+x*oe+y*se,u[13]=v*R+g*Z+x*ce+y*b,u[2]=T*z+A*C+S*re+_*H,u[6]=T*F+A*U+S*ue+_*le,u[10]=T*X+A*J+S*oe+_*se,u[14]=T*R+A*Z+S*ce+_*b,u[3]=k*z+I*C+P*re+O*H,u[7]=k*F+I*U+P*ue+O*le,u[11]=k*X+I*J+P*oe+O*se,u[15]=k*R+I*Z+P*ce+O*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],y=e[14],T=e[3],A=e[7],S=e[11],_=e[15];return T*(+u*m*g-a*p*g-u*d*x+r*p*x+a*d*y-r*m*y)+A*(+n*m*y-n*p*x+u*f*x-a*f*y+a*p*v-u*m*v)+S*(+n*p*g-n*d*y-u*f*g+r*f*y+u*d*v-r*p*v)+_*(-a*d*v-n*m*g+n*d*x+a*f*g-r*f*x+r*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],y=e[11],T=e[12],A=e[13],S=e[14],_=e[15],k=g*S*p-A*x*p+A*m*y-d*S*y-g*m*_+d*x*_,I=T*x*p-v*S*p-T*m*y+f*S*y+v*m*_-f*x*_,P=v*A*p-T*g*p+T*d*y-f*A*y-v*d*_+f*g*_,O=T*g*m-v*A*m-T*d*x+f*A*x+v*d*S-f*g*S,z=n*k+r*I+a*P+u*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=k*F,e[1]=(A*x*u-g*S*u-A*a*y+r*S*y+g*a*_-r*x*_)*F,e[2]=(d*S*u-A*m*u+A*a*p-r*S*p-d*a*_+r*m*_)*F,e[3]=(g*m*u-d*x*u-g*a*p+r*x*p+d*a*y-r*m*y)*F,e[4]=I*F,e[5]=(v*S*u-T*x*u+T*a*y-n*S*y-v*a*_+n*x*_)*F,e[6]=(T*m*u-f*S*u-T*a*p+n*S*p+f*a*_-n*m*_)*F,e[7]=(f*x*u-v*m*u+v*a*p-n*x*p-f*a*y+n*m*y)*F,e[8]=P*F,e[9]=(T*g*u-v*A*u-T*r*y+n*A*y+v*r*_-n*g*_)*F,e[10]=(f*A*u-T*d*u+T*r*p-n*A*p-f*r*_+n*d*_)*F,e[11]=(v*d*u-f*g*u-v*r*p+n*g*p+f*r*y-n*d*y)*F,e[12]=O*F,e[13]=(v*A*a-T*g*a+T*r*x-n*A*x-v*r*S+n*g*S)*F,e[14]=(T*d*a-f*A*a-T*r*m+n*A*m+f*r*S-n*d*S)*F,e[15]=(f*g*a-v*d*a+v*r*m-n*g*m-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,m=e.z,p=u*f,v=u*d;return this.set(p*f+r,p*d-a*m,p*m+a*d,0,p*d+a*m,v*d+r,v*m-a*f,0,p*m-a*d,v*m+a*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,m=n._w,p=u+u,v=f+f,g=d+d,x=u*p,y=u*v,T=u*g,A=f*v,S=f*g,_=d*g,k=m*p,I=m*v,P=m*g,O=r.x,z=r.y,F=r.z;return a[0]=(1-(A+_))*O,a[1]=(y+P)*O,a[2]=(T-I)*O,a[3]=0,a[4]=(y-P)*z,a[5]=(1-(x+_))*z,a[6]=(S+k)*z,a[7]=0,a[8]=(T+I)*F,a[9]=(S-k)*F,a[10]=(1-(x+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=As.set(a[0],a[1],a[2]).length();const f=As.set(a[4],a[5],a[6]).length(),d=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const p=1/u,v=1/f,g=1/d;return ai.elements[0]*=p,ai.elements[1]*=p,ai.elements[2]*=p,ai.elements[4]*=v,ai.elements[5]*=v,ai.elements[6]*=v,ai.elements[8]*=g,ai.elements[9]*=g,ai.elements[10]*=g,n.setFromRotationMatrix(ai),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=vi,m=!1){const p=this.elements,v=2*u/(n-e),g=2*u/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let T,A;if(m)T=u/(f-u),A=f*u/(f-u);else if(d===vi)T=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===Nl)T=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=vi,m=!1){const p=this.elements,v=2/(n-e),g=2/(r-a),x=-(n+e)/(n-e),y=-(r+a)/(r-a);let T,A;if(m)T=1/(f-u),A=f/(f-u);else if(d===vi)T=-2/(f-u),A=-(f+u)/(f-u);else if(d===Nl)T=-1/(f-u),A=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new q,ai=new jt,gv=new q(0,0,0),_v=new q(1,1,1),fr=new q,ul=new q,zn=new q,jp=new jt,Yp=new Yo;class yi{constructor(e=0,n=0,r=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],m=a[1],p=a[5],v=a[9],g=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vv=0;const qp=new q,Rs=new Yo,Ii=new jt,cl=new q,Uo=new q,xv=new q,Sv=new Yo,$p=new q(1,0,0),Kp=new q(0,1,0),Zp=new q(0,0,1),Qp={type:"added"},yv={type:"removed"},Cs={type:"childadded",child:null},Dc={type:"childremoved",child:null};class Sn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new q,n=new yi,r=new Yo,a=new q(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return qp.copy(e).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Uo,cl,this.up):Ii.lookAt(cl,Uo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yv),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];a.animations.push(u(e.animations,m))}}if(n){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new q(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new q,Ni=new q,Uc=new q,Fi=new q,Ps=new q,bs=new q,Jp=new q,Ic=new q,Nc=new q,Fc=new q,Oc=new Ut,kc=new Ut,Bc=new Ut;class ui{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){li.subVectors(a,n),Ni.subVectors(r,n),Uc.subVectors(e,n);const f=li.dot(li),d=li.dot(Ni),m=li.dot(Uc),p=Ni.dot(Ni),v=Ni.dot(Uc),g=f*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,y=(p*m-d*v)*x,T=(f*v-d*m)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,f,d,m){return this.getBarycoord(e,n,r,a,Fi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Fi.x),m.addScaledVector(f,Fi.y),m.addScaledVector(d,Fi.z),m)}static getInterpolatedAttribute(e,n,r,a,u,f){return Oc.setScalar(0),kc.setScalar(0),Bc.setScalar(0),Oc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,r),Bc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Oc,u.x),f.addScaledVector(kc,u.y),f.addScaledVector(Bc,u.z),f}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ni.subVectors(e,n),li.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ps.subVectors(a,r),bs.subVectors(u,r),Ic.subVectors(e,r);const m=Ps.dot(Ic),p=bs.dot(Ic);if(m<=0&&p<=0)return n.copy(r);Nc.subVectors(e,a);const v=Ps.dot(Nc),g=bs.dot(Nc);if(v>=0&&g<=v)return n.copy(a);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(Ps,f);Fc.subVectors(e,u);const y=Ps.dot(Fc),T=bs.dot(Fc);if(T>=0&&y<=T)return n.copy(u);const A=y*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),n.copy(r).addScaledVector(bs,d);const S=v*T-y*g;if(S<=0&&g-v>=0&&y-T>=0)return Jp.subVectors(u,a),d=(g-v)/(g-v+(y-T)),n.copy(a).addScaledVector(Jp,d);const _=1/(S+A+x);return f=A*_,d=x*_,n.copy(r).addScaledVector(Ps,f).addScaledVector(bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function zc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=wt.workingColorSpace){if(e=$f(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=zc(f,u,e+1/3),this.g=zc(f,u,e),this.b=zc(f,u,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,n=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=eg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return wt.workingToColorSpace(vn.copy(this),e),Math.round(gt(vn.r*255,0,255))*65536+Math.round(gt(vn.g*255,0,255))*256+Math.round(gt(vn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(vn.copy(this),n);const r=vn.r,a=vn.g,u=vn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case r:m=(a-u)/g+(a<u?6:0);break;case a:m=(u-r)/g+2;break;case u:m=(r-a)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Qn){wt.workingToColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,a=vn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(fl);const r=zo(dr.h,fl.h,n),a=zo(dr.s,fl.s,n),u=zo(dr.l,fl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new At;At.NAMES=eg;let Mv=0;class $o extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Bs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ef&&(r.blendSrc=this.blendSrc),this.blendDst!==tf&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tg extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new q,dl=new Et;let Ev=0;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ev++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Bp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=wn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),a=wn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),a=wn(a,this.array),u=wn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bp&&(e.usage=this.usage),e}}class ng extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ig extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Gn extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Tv=0;const Zn=new jt,Hc=new Sn,Ls=new q,Hn=new qo,Io=new qo,on=new q;class Hi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Hn.setFromBufferAttribute(u),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(on.addVectors(Hn.min,Io.min),Hn.expandByPoint(on),on.addVectors(Hn.max,Io.max),Hn.expandByPoint(on)):(Hn.expandByPoint(Io.min),Hn.expandByPoint(Io.max))}Hn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)on.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(on));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)on.fromBufferAttribute(d,p),m&&(Ls.fromBufferAttribute(e,p),on.add(Ls)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new q,m[X]=new q;const p=new q,v=new q,g=new q,x=new Et,y=new Et,T=new Et,A=new q,S=new q;function _(X,R,C){p.fromBufferAttribute(r,X),v.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,R),T.fromBufferAttribute(u,C),v.sub(p),g.sub(p),y.sub(x),T.sub(x);const U=1/(y.x*T.y-T.x*y.y);isFinite(U)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(U),S.copy(g).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(U),d[X].add(A),d[R].add(A),d[C].add(A),m[X].add(S),m[R].add(S),m[C].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let X=0,R=k.length;X<R;++X){const C=k[X],U=C.start,J=C.count;for(let Z=U,re=U+J;Z<re;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const I=new q,P=new q,O=new q,z=new q;function F(X){O.fromBufferAttribute(a,X),z.copy(O);const R=d[X];I.copy(R),I.sub(O.multiplyScalar(O.dot(R))).normalize(),P.crossVectors(z,R);const U=P.dot(m[X])<0?-1:1;f.setXYZW(X,I.x,I.y,I.z,U)}for(let X=0,R=k.length;X<R;++X){const C=k[X],U=C.start,J=C.count;for(let Z=U,re=U+J;Z<re;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new q,u=new q,f=new q,d=new q,m=new q,p=new q,v=new q,g=new q;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(v),m.add(v),p.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let y=0,T=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*v;for(let _=0;_<v;_++)x[T++]=p[y++]}return new xi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,r=this.index.array,a=this.attributes;for(const d in a){const m=a[d],p=e(m,r);n.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],y=e(x,r);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const a={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];v.push(y.toJSON(e.data))}v.length>0&&(a[m]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(n))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let x=0,y=g.length;x<y;x++)v.push(g[x].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new jt,Or=new mv,hl=new Zf,tm=new q,pl=new q,ml=new q,gl=new q,Vc=new q,_l=new q,nm=new q,vl=new q;class Dt extends Sn{constructor(e=new Hi,n=new tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){_l.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(Vc.fromBufferAttribute(g,e),f?_l.addScaledVector(Vc,v):_l.addScaledVector(Vc.sub(n),v))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(hl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(hl,tm)===null||Or.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(u).invert(),Or.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=f[S.materialIndex],k=Math.max(S.start,y.start),I=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let P=k,O=I;P<O;P+=3){const z=d.getX(P),F=d.getX(P+1),X=d.getX(P+2);a=xl(this,_,e,r,p,v,g,z,F,X),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=T,_=A;S<_;S+=3){const k=d.getX(S),I=d.getX(S+1),P=d.getX(S+2);a=xl(this,f,e,r,p,v,g,k,I,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=f[S.materialIndex],k=Math.max(S.start,y.start),I=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let P=k,O=I;P<O;P+=3){const z=P,F=P+1,X=P+2;a=xl(this,_,e,r,p,v,g,z,F,X),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=T,_=A;S<_;S+=3){const k=S,I=S+1,P=S+2;a=xl(this,f,e,r,p,v,g,k,I,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function wv(s,e,n,r,a,u,f,d){let m;if(e.side===In?m=r.intersectTriangle(f,u,a,!0,d):m=r.intersectTriangle(a,u,f,e.side===vr,d),m===null)return null;vl.copy(d),vl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(vl);return p<n.near||p>n.far?null:{distance:p,point:vl.clone(),object:s}}function xl(s,e,n,r,a,u,f,d,m,p){s.getVertexPosition(d,pl),s.getVertexPosition(m,ml),s.getVertexPosition(p,gl);const v=wv(s,e,n,r,pl,ml,gl,nm);if(v){const g=new q;ui.getBarycoord(nm,pl,ml,gl,g),a&&(v.uv=ui.getInterpolatedAttribute(a,d,m,p,g,new Et)),u&&(v.uv1=ui.getInterpolatedAttribute(u,d,m,p,g,new Et)),f&&(v.normal=ui.getInterpolatedAttribute(f,d,m,p,g,new q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new q,materialIndex:0};ui.getNormal(pl,ml,gl,x.normal),v.face=x,v.barycoord=g}return v}class xn extends Hi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(g,2));function T(A,S,_,k,I,P,O,z,F,X,R){const C=P/F,U=O/X,J=P/2,Z=O/2,re=z/2,ue=F+1,oe=X+1;let ce=0,H=0;const le=new q;for(let se=0;se<oe;se++){const b=se*U-Z;for(let te=0;te<ue;te++){const Oe=te*C-J;le[A]=Oe*k,le[S]=b*I,le[_]=re,p.push(le.x,le.y,le.z),le[A]=0,le[S]=0,le[_]=z>0?1:-1,v.push(le.x,le.y,le.z),g.push(te/F),g.push(1-se/X),ce+=1}}for(let se=0;se<X;se++)for(let b=0;b<F;b++){const te=x+b+ue*se,Oe=x+b+ue*(se+1),Fe=x+(b+1)+ue*(se+1),Q=x+(b+1)+ue*se;m.push(te,Oe,Q),m.push(Oe,Fe,Q),H+=6}d.addGroup(y,H,R),y+=H,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function Av(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Rv={clone:js,merge:An};var Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class sg extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new q,im=new Et,rm=new Et;class Vn extends sg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*a/m,n-=f.offsetY*r/p,a*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Us=1;class bv extends Sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vn(Ds,Us,e,n);a.layers=this.layers,this.add(a);const u=new Vn(Ds,Us,e,n);u.layers=this.layers,this.add(u);const f=new Vn(Ds,Us,e,n);f.layers=this.layers,this.add(f);const d=new Vn(Ds,Us,e,n);d.layers=this.layers,this.add(d);const m=new Vn(Ds,Us,e,n);m.layers=this.layers,this.add(m);const p=new Vn(Ds,Us,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,m]=n;for(const p of n)this.remove(p);if(e===vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,m),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(g,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class og extends Rn{constructor(e=[],n=Gs,r,a,u,f,d,m,p,v){super(e,n,r,a,u,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lv extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new og(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new xn(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:gr});u.uniforms.tEquirect.value=n;const f=new Dt(a,u),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=_i),new bv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class Os extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&x>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return d!==null&&(d.visible=a!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Os;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Qf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=n}clone(){return new Qf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uv extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wc=new q,Iv=new q,Nv=new ft;class Hr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Wc.subVectors(r,n).cross(Iv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Nv.getNormalMatrix(e),a=this.coplanarPoint(Wc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Zf,Fv=new Et(.5,.5),Sl=new q;class Jf{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,f=new Hr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=vi,r=!1){const a=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],v=u[4],g=u[5],x=u[6],y=u[7],T=u[8],A=u[9],S=u[10],_=u[11],k=u[12],I=u[13],P=u[14],O=u[15];if(a[0].setComponents(p-f,y-v,_-T,O-k).normalize(),a[1].setComponents(p+f,y+v,_+T,O+k).normalize(),a[2].setComponents(p+d,y+g,_+A,O+I).normalize(),a[3].setComponents(p-d,y-g,_-A,O-I).normalize(),r)a[4].setComponents(m,x,S,P).normalize(),a[5].setComponents(p-m,y-x,_-S,O-P).normalize();else if(a[4].setComponents(p-m,y-x,_-S,O-P).normalize(),n===vi)a[5].setComponents(p+m,y+x,_+S,O+P).normalize();else if(n===Nl)a[5].setComponents(m,x,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=Fv.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ov extends Rn{constructor(e,n,r,a,u,f,d,m,p){super(e,n,r,a,u,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ag extends Rn{constructor(e,n,r=qr,a,u,f,d=fi,m=fi,p,v=Go,g=1){if(v!==Go&&v!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,a,u,f,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wr extends Hi{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:m};const p=this;a=Math.floor(a),u=Math.floor(u);const v=[],g=[],x=[],y=[];let T=0;const A=[],S=r/2;let _=0;k(),f===!1&&(e>0&&I(!0),n>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(y,2));function k(){const P=new q,O=new q;let z=0;const F=(n-e)/r;for(let X=0;X<=u;X++){const R=[],C=X/u,U=C*(n-e)+e;for(let J=0;J<=a;J++){const Z=J/a,re=Z*m+d,ue=Math.sin(re),oe=Math.cos(re);O.x=U*ue,O.y=-C*r+S,O.z=U*oe,g.push(O.x,O.y,O.z),P.set(ue,F,oe).normalize(),x.push(P.x,P.y,P.z),y.push(Z,1-C),R.push(T++)}A.push(R)}for(let X=0;X<a;X++)for(let R=0;R<u;R++){const C=A[R][X],U=A[R+1][X],J=A[R+1][X+1],Z=A[R][X+1];(e>0||R!==0)&&(v.push(C,U,Z),z+=3),(n>0||R!==u-1)&&(v.push(U,J,Z),z+=3)}p.addGroup(_,z,0),_+=z}function I(P){const O=T,z=new Et,F=new q;let X=0;const R=P===!0?e:n,C=P===!0?1:-1;for(let J=1;J<=a;J++)g.push(0,S*C,0),x.push(0,C,0),y.push(.5,.5),T++;const U=T;for(let J=0;J<=a;J++){const re=J/a*m+d,ue=Math.cos(re),oe=Math.sin(re);F.x=R*oe,F.y=S*C,F.z=R*ue,g.push(F.x,F.y,F.z),x.push(0,C,0),z.x=ue*.5+.5,z.y=oe*.5*C+.5,y.push(z.x,z.y),T++}for(let J=0;J<a;J++){const Z=O+J,re=U+J;P===!0?v.push(re,re+1,Z):v.push(re+1,re,Z),X+=3}p.addGroup(_,X,P===!0?1:2),_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends Hi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),m=Math.floor(a),p=d+1,v=m+1,g=e/d,x=n/m,y=[],T=[],A=[],S=[];for(let _=0;_<v;_++){const k=_*x-f;for(let I=0;I<p;I++){const P=I*g-u;T.push(P,-k,0),A.push(0,0,1),S.push(I/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let k=0;k<d;k++){const I=k+p*_,P=k+p*(_+1),O=k+1+p*(_+1),z=k+1+p*_;y.push(I,P,z),y.push(P,O,z)}this.setIndex(y),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(A,3)),this.setAttribute("uv",new Gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class ed extends Hi{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const f=[],d=[],m=[],p=[],v=new q,g=new q,x=new q;for(let y=0;y<=r;y++)for(let T=0;T<=a;T++){const A=T/a*u,S=y/r*Math.PI*2;g.x=(e+n*Math.cos(S))*Math.cos(A),g.y=(e+n*Math.cos(S))*Math.sin(A),g.z=n*Math.sin(S),d.push(g.x,g.y,g.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),x.subVectors(g,v).normalize(),m.push(x.x,x.y,x.z),p.push(T/a),p.push(y/r)}for(let y=1;y<=r;y++)for(let T=1;T<=a;T++){const A=(a+1)*y+T-1,S=(a+1)*(y-1)+T-1,_=(a+1)*(y-1)+T,k=(a+1)*y+T;f.push(A,S,k),f.push(S,_,k)}this.setIndex(f),this.setAttribute("position",new Gn(d,3)),this.setAttribute("normal",new Gn(m,3)),this.setAttribute("uv",new Gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class un extends $o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kv extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bv extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class td extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xc=new jt,sm=new q,om=new q;class lg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const am=new jt,No=new q,jc=new q;class zv extends lg{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),r.position.copy(No),jc.copy(r.position),jc.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(jc),r.updateMatrixWorld(),a.makeTranslation(-No.x,-No.y,-No.z),am.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(am,r.coordinateSystem,r.reversedDepth)}}class Hv extends td{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new zv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ug extends sg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,m=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Vv extends lg{constructor(){super(new ug(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends td{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Vv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gv extends td{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wv extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function lm(s,e,n,r){const a=Xv(r);switch(n){case Wm:return s*e;case jm:return s*e/a.components*a.byteLength;case jf:return s*e/a.components*a.byteLength;case Ym:return s*e*2/a.components*a.byteLength;case Yf:return s*e*2/a.components*a.byteLength;case Xm:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case qf:return s*e*4/a.components*a.byteLength;case Cl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:case _f:return Math.max(s,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(s,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Nf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qm:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xv(s){switch(s){case Si:case Hm:return{byteLength:1,components:1};case Ho:case Vm:case jo:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case qr:case Gf:case Bi:return{byteLength:4,components:1};case Gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);function cg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function jv(s){const e=new WeakMap;function n(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<g.length;y++){const T=g[x],A=g[y];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,g[x]=A)}g.length=x+1;for(let y=0,T=g.length;y<T;y++){const A=g[y];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:a,remove:u,update:f}}var Yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qv=`#ifdef USE_ALPHAHASH
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
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jv=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,ax=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gx=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
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
#endif`,Bx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jx=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nS=`#if defined( USE_POINTS_UV )
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
#endif`,iS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mS=`#ifdef USE_NORMALMAP
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
#endif`,gS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ES=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,US=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,FS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,ey=`#define DISTANCE
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
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ay=`uniform vec3 diffuse;
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
}`,ly=`#define LAMBERT
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
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cy=`#define MATCAP
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
}`,fy=`#define MATCAP
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
}`,dy=`#define NORMAL
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
}`,hy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,py=`#define PHONG
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
}`,my=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gy=`#define STANDARD
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
}`,_y=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vy=`#define TOON
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
}`,xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sy=`uniform float size;
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
}`,yy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,Ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ty=`uniform float rotation;
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
}`,wy=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Yv,alphahash_pars_fragment:qv,alphamap_fragment:$v,alphamap_pars_fragment:Kv,alphatest_fragment:Zv,alphatest_pars_fragment:Qv,aomap_fragment:Jv,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:lx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:cx,clipping_planes_vertex:fx,color_fragment:dx,color_pars_fragment:hx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:Sx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:wx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:Bx,envmap_vertex:Px,fog_vertex:bx,fog_pars_vertex:Lx,fog_fragment:Dx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Nx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Ox,lights_pars_begin:kx,lights_toon_fragment:zx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:jx,lights_fragment_maps:Yx,lights_fragment_end:qx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Qx,map_fragment:Jx,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphinstance_vertex:sS,morphcolor_vertex:oS,morphnormal_vertex:aS,morphtarget_pars_vertex:lS,morphtarget_vertex:uS,normal_fragment_begin:cS,normal_fragment_maps:fS,normal_pars_fragment:dS,normal_pars_vertex:hS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:vS,iridescence_pars_fragment:xS,opaque_fragment:SS,packing:yS,premultiplied_alpha_fragment:MS,project_vertex:ES,dithering_fragment:TS,dithering_pars_fragment:wS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:RS,shadowmap_pars_fragment:CS,shadowmap_pars_vertex:PS,shadowmap_vertex:bS,shadowmask_pars_fragment:LS,skinbase_vertex:DS,skinning_pars_vertex:US,skinning_vertex:IS,skinnormal_vertex:NS,specularmap_fragment:FS,specularmap_pars_fragment:OS,tonemapping_fragment:kS,tonemapping_pars_fragment:BS,transmission_fragment:zS,transmission_pars_fragment:HS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:WS,worldpos_vertex:XS,background_vert:jS,background_frag:YS,backgroundCube_vert:qS,backgroundCube_frag:$S,cube_vert:KS,cube_frag:ZS,depth_vert:QS,depth_frag:JS,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:uy,meshmatcap_vert:cy,meshmatcap_frag:fy,meshnormal_vert:dy,meshnormal_frag:hy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:_y,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:Sy,points_frag:yy,shadow_vert:My,shadow_frag:Ey,sprite_vert:Ty,sprite_frag:wy},be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},gi={basic:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new At(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:An([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:An([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new At(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:An([be.points,be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:An([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:An([be.common,be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:An([be.sprite,be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:An([be.common,be.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:An([be.lights,be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};gi.physical={uniforms:An([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ml={r:0,b:0,g:0},Br=new yi,Ay=new jt;function Ry(s,e,n,r,a,u,f){const d=new At(0);let m=u===!0?0:1,p,v,g=null,x=0,y=null;function T(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function A(I){let P=!1;const O=T(I);O===null?_(d,m):O&&O.isColor&&(_(O,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(I,P){const O=T(P);O&&(O.isCubeTexture||O.mapping===Ol)?(v===void 0&&(v=new Dt(new xn(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:js(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Br.copy(P.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(Br)),v.material.toneMapped=wt.getTransfer(O.colorSpace)!==Lt,(g!==O||x!==O.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,g=O,x=O.version,y=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Dt(new $s(2,2),new xr({name:"BackgroundMaterial",uniforms:js(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=wt.getTransfer(O.colorSpace)!==Lt,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||x!==O.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=O,x=O.version,y=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function _(I,P){I.getRGB(Ml,rg(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,P,f)}function k(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,P=1){d.set(I),m=P,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,_(d,m)},render:A,addToRenderList:S,dispose:k}}function Cy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(C,U,J,Z,re){let ue=!1;const oe=g(Z,J,U);u!==oe&&(u=oe,p(u.object)),ue=y(C,Z,J,re),ue&&T(C,Z,J,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,P(C,U,J,Z),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function g(C,U,J){const Z=J.wireframe===!0;let re=r[C.id];re===void 0&&(re={},r[C.id]=re);let ue=re[U.id];ue===void 0&&(ue={},re[U.id]=ue);let oe=ue[Z];return oe===void 0&&(oe=x(m()),ue[Z]=oe),oe}function x(C){const U=[],J=[],Z=[];for(let re=0;re<n;re++)U[re]=0,J[re]=0,Z[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:J,attributeDivisors:Z,object:C,attributes:{},index:null}}function y(C,U,J,Z){const re=u.attributes,ue=U.attributes;let oe=0;const ce=J.getAttributes();for(const H in ce)if(ce[H].location>=0){const se=re[H];let b=ue[H];if(b===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(b=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(b=C.instanceColor)),se===void 0||se.attribute!==b||b&&se.data!==b.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Z}function T(C,U,J,Z){const re={},ue=U.attributes;let oe=0;const ce=J.getAttributes();for(const H in ce)if(ce[H].location>=0){let se=ue[H];se===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const b={};b.attribute=se,se&&se.data&&(b.data=se.data),re[H]=b,oe++}u.attributes=re,u.attributesNum=oe,u.index=Z}function A(){const C=u.newAttributes;for(let U=0,J=C.length;U<J;U++)C[U]=0}function S(C){_(C,0)}function _(C,U){const J=u.newAttributes,Z=u.enabledAttributes,re=u.attributeDivisors;J[C]=1,Z[C]===0&&(s.enableVertexAttribArray(C),Z[C]=1),re[C]!==U&&(s.vertexAttribDivisor(C,U),re[C]=U)}function k(){const C=u.newAttributes,U=u.enabledAttributes;for(let J=0,Z=U.length;J<Z;J++)U[J]!==C[J]&&(s.disableVertexAttribArray(J),U[J]=0)}function I(C,U,J,Z,re,ue,oe){oe===!0?s.vertexAttribIPointer(C,U,J,re,ue):s.vertexAttribPointer(C,U,J,Z,re,ue)}function P(C,U,J,Z){A();const re=Z.attributes,ue=J.getAttributes(),oe=U.defaultAttributeValues;for(const ce in ue){const H=ue[ce];if(H.location>=0){let le=re[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,b=le.itemSize,te=e.get(le);if(te===void 0)continue;const Oe=te.buffer,Fe=te.type,Q=te.bytesPerElement,pe=Fe===s.INT||Fe===s.UNSIGNED_INT||le.gpuType===Gf;if(le.isInterleavedBufferAttribute){const de=le.data,Ee=de.stride,Re=le.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)_(H.location+Ge,de.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)S(H.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Ge=0;Ge<H.locationSize;Ge++)I(H.location+Ge,b/H.locationSize,Fe,se,Ee*Q,(Re+b/H.locationSize*Ge)*Q,pe)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)_(H.location+de,le.meshPerAttribute);C.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<H.locationSize;de++)S(H.location+de);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let de=0;de<H.locationSize;de++)I(H.location+de,b/H.locationSize,Fe,se,b*Q,b/H.locationSize*de*Q,pe)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}k()}function O(){X();for(const C in r){const U=r[C];for(const J in U){const Z=U[J];for(const re in Z)v(Z[re].object),delete Z[re];delete U[J]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const U=r[C.id];for(const J in U){const Z=U[J];for(const re in Z)v(Z[re].object),delete Z[re];delete U[J]}delete r[C.id]}function F(C){for(const U in r){const J=r[U];if(J[C.id]===void 0)continue;const Z=J[C.id];for(const re in Z)v(Z[re].object),delete Z[re];delete J[C.id]}}function X(){R(),f=!0,u!==a&&(u=a,p(u.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:R,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:k}}function Py(s,e,n){let r;function a(p){r=p}function u(p,v){s.drawArrays(r,p,v),n.update(v,r,1)}function f(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),n.update(v,r,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let y=0;for(let T=0;T<g;T++)y+=v[T];n.update(y,r,1)}function m(p,v,g,x){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)f(p[T],v[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let T=0;for(let A=0;A<g;A++)T+=v[A]*x[A];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function by(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!X)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),k=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:k,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:O,maxSamples:z}}function Ly(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Hr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||a;return a=x,r=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,y){const T=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!a||T===null||T.length===0||u&&!S)u?v(null):p();else{const k=u?0:r,I=k*4;let P=_.clippingState||null;m.value=P,P=v(T,x,I,y);for(let O=0;O!==I;++O)P[O]=n[O];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=k}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,y,T){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,T!==!0||S===null){const _=y+A*4,k=x.matrixWorldInverse;d.getNormalMatrix(k),(S===null||S.length<_)&&(S=new Float32Array(_));for(let I=0,P=y;I!==A;++I,P+=4)f.copy(g[I]).applyMatrix4(k,d),f.normal.toArray(S,P),S[P+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function Dy(s){let e=new WeakMap;function n(f,d){return d===cf?f.mapping=Gs:d===ff&&(f.mapping=Ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===cf||d===ff)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Lv(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),n(p.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ks=4,um=[.125,.215,.35,.446,.526,.582],Xr=20,Yc=new ug,cm=new At;let qc=null,$c=0,Kc=0,Zc=!1;const Vr=(1+Math.sqrt(5))/2,Is=1/Vr,fm=[new q(-Vr,Is,0),new q(Vr,Is,0),new q(-Is,0,Vr),new q(Is,0,Vr),new q(0,Vr,-Is),new q(0,Vr,Is),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],Uy=new q;class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=Uy}=u;qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:jo,format:ci,colorSpace:Xs,depthBuffer:!1},a=hm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(u)),this._blurMaterial=Ny(u,e,n)}return a}_compileMaterial(e){const n=new Dt(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,r,a,u){const m=new Vn(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(cm),g.toneMapping=_r,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null));const A=new tg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),S=new Dt(new xn,A);let _=!1;const k=e.background;k?k.isColor&&(A.color.copy(k),e.background=null,_=!0):(A.color.copy(cm),_=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[I],u.y,u.z)):P===1?(m.up.set(0,0,p[I]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[I],u.z)):(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[I]));const O=this._cubeSize;El(a,P*O,I>2?O:0,O,O),g.setRenderTarget(a),_&&g.render(S,m),g.render(e,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=k}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Dt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;El(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,Yc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=fm[(a-u-1)%fm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Dt(this._lodPlanes[a],p),x=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Xr-1),A=u/T,S=isFinite(u)?1+Math.floor(v*A):Xr;S>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Xr}`);const _=[];let k=0;for(let F=0;F<Xr;++F){const X=F/A,R=Math.exp(-X*X/2);_.push(R),F===0?k+=R:F<S&&(k+=2*R)}for(let F=0;F<_.length;F++)_[F]=_[F]/k;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:I}=this;x.dTheta.value=T,x.mipInt.value=I-r;const P=this._sizeLods[a],O=3*P*(a>I-ks?a-I+ks:0),z=4*(this._cubeSize-P);El(n,O,z,3*P,2*P),m.setRenderTarget(n),m.render(g,Yc)}}function Iy(s){const e=[],n=[],r=[];let a=s;const u=s-ks+1+um.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let m=1/d;f>s-ks?m=um[f-s+ks-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,T=6,A=3,S=2,_=1,k=new Float32Array(A*T*y),I=new Float32Array(S*T*y),P=new Float32Array(_*T*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,X=z>2?0:-1,R=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];k.set(R,A*T*z),I.set(x,S*T*z);const C=[z,z,z,z,z,z];P.set(C,_*T*z)}const O=new Hi;O.setAttribute("position",new xi(k,A)),O.setAttribute("uv",new xi(I,S)),O.setAttribute("faceIndex",new xi(P,_)),e.push(O),a>ks&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function hm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Ny(s,e,n){const r=new Float32Array(Xr),a=new q(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:nd(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function pm(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function mm(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}function Fy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===cf||m===ff,v=m===Gs||m===Ws;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new dm(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new dm(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Oy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&zs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function ky(s,e,n,r){const a={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,T=g.attributes.position;let A=0;if(y!==null){const k=y.array;A=y.version;for(let I=0,P=k.length;I<P;I+=3){const O=k[I+0],z=k[I+1],F=k[I+2];x.push(O,z,z,F,F,O)}}else if(T!==void 0){const k=T.array;A=T.version;for(let I=0,P=k.length/3-1;I<P;I+=3){const O=I+0,z=I+1,F=I+2;x.push(O,z,z,F,F,O)}}else return;const S=new(Zm(x)?ig:ng)(x,1);S.version=A;const _=u.get(g);_&&e.remove(_),u.set(g,S)}function v(g){const x=u.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function By(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,y){s.drawElements(r,y,u,x*f),n.update(y,r,1)}function p(x,y,T){T!==0&&(s.drawElementsInstanced(r,y,u,x*f,T),n.update(y,r,T))}function v(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let S=0;for(let _=0;_<T;_++)S+=y[_];n.update(S,r,1)}function g(x,y,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,A,0,T);let _=0;for(let k=0;k<T;k++)_+=y[k]*A[k];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function zy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Hy(s,e,n){const r=new WeakMap,a=new Ut;function u(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let C=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],k=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),S===!0&&(P=3);let O=d.attributes.position.count*P,z=1;O>e.maxTextureSize&&(z=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const F=new Float32Array(O*z*4*g),X=new Qm(F,O,z,g);X.type=Bi,X.needsUpdate=!0;const R=P*4;for(let U=0;U<g;U++){const J=_[U],Z=k[U],re=I[U],ue=O*z*4*U;for(let oe=0;oe<J.count;oe++){const ce=oe*R;T===!0&&(a.fromBufferAttribute(J,oe),F[ue+ce+0]=a.x,F[ue+ce+1]=a.y,F[ue+ce+2]=a.z,F[ue+ce+3]=0),A===!0&&(a.fromBufferAttribute(Z,oe),F[ue+ce+4]=a.x,F[ue+ce+5]=a.y,F[ue+ce+6]=a.z,F[ue+ce+7]=0),S===!0&&(a.fromBufferAttribute(re,oe),F[ue+ce+8]=a.x,F[ue+ce+9]=a.y,F[ue+ce+10]=a.z,F[ue+ce+11]=re.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new Et(O,z)},r.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function Vy(s,e,n,r){let a=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),a.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),a.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function f(){a=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:f}}const fg=new Rn,gm=new ag(1,1),dg=new Qm,hg=new hv,pg=new og,_m=[],vm=[],xm=new Float32Array(16),Sm=new Float32Array(9),ym=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=_m[a];if(u===void 0&&(u=new Float32Array(a),_m[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Gy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function Xy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function Yy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;ym.set(r),s.uniformMatrix2fv(this.addr,!1,ym),tn(n,r)}}function qy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Sm.set(r),s.uniformMatrix3fv(this.addr,!1,Sm),tn(n,r)}}function $y(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;xm.set(r),s.uniformMatrix4fv(this.addr,!1,xm),tn(n,r)}}function Ky(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function Qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function Jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function eM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function rM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(gm.compareFunction=Km,u=gm):u=fg,n.setTexture2D(e||u,a)}function sM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||hg,a)}function oM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||pg,a)}function aM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||dg,a)}function lM(s){switch(s){case 5126:return Gy;case 35664:return Wy;case 35665:return Xy;case 35666:return jy;case 35674:return Yy;case 35675:return qy;case 35676:return $y;case 5124:case 35670:return Ky;case 35667:case 35671:return Zy;case 35668:case 35672:return Qy;case 35669:case 35673:return Jy;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function uM(s,e){s.uniform1fv(this.addr,e)}function cM(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function fM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function dM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function hM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function pM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function mM(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function gM(s,e){s.uniform1iv(this.addr,e)}function _M(s,e){s.uniform2iv(this.addr,e)}function vM(s,e){s.uniform3iv(this.addr,e)}function xM(s,e){s.uniform4iv(this.addr,e)}function SM(s,e){s.uniform1uiv(this.addr,e)}function yM(s,e){s.uniform2uiv(this.addr,e)}function MM(s,e){s.uniform3uiv(this.addr,e)}function EM(s,e){s.uniform4uiv(this.addr,e)}function TM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);en(r,u)||(s.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||fg,u[f])}function wM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);en(r,u)||(s.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||hg,u[f])}function AM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);en(r,u)||(s.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||pg,u[f])}function RM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);en(r,u)||(s.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||dg,u[f])}function CM(s){switch(s){case 5126:return uM;case 35664:return cM;case 35665:return fM;case 35666:return dM;case 35674:return hM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return SM;case 36294:return yM;case 36295:return MM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return RM}}class PM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=lM(n.type)}}class bM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CM(n.type)}}class LM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function DM(s,e,n){const r=s.name,a=r.length;for(Qc.lastIndex=0;;){const u=Qc.exec(r),f=Qc.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===a){Mm(n,p===void 0?new PM(d,s,e):new bM(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new LM(d),Mm(n,g)),n=g}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);DM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const UM=37297;let IM=0;function NM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Tm=new ft;function FM(s){wt._getMatrix(Tm,wt.workingColorSpace,s);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+NM(s.getShaderSource(e),d)}else return u}function OM(s,e){const n=FM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kM(s,e){let n;switch(e){case R0:n="Linear";break;case C0:n="Reinhard";break;case P0:n="Cineon";break;case Bm:n="ACESFilmic";break;case L0:n="AgX";break;case D0:n="Neutral";break;case b0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new q;function BM(){wt.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function HM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function VM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function ko(s){return s!==""}function Am(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(s){return s.replace(GM,XM)}const WM=new Map;function XM(s,e){let n=dt[e];if(n===void 0){const r=WM.get(e);if(r!==void 0)n=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zf(n)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(s){return s.replace(jM,YM)}function YM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Pm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Om?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ws&&(e="ENVMAP_MODE_REFRACTION"),e}function ZM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case km:e="ENVMAP_BLENDING_MULTIPLY";break;case w0:e="ENVMAP_BLENDING_MIX";break;case A0:e="ENVMAP_BLENDING_ADD";break}return e}function QM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function JM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=qM(n),p=$M(n),v=KM(n),g=ZM(n),x=QM(n),y=zM(n),T=HM(u),A=a.createProgram();let S,_,k=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ko).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(S=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?dt.tonemapping_pars_fragment:"",n.toneMapping!==_r?kM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,OM("linearToOutputTexel",n.outputColorSpace),BM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),f=zf(f),f=Am(f,n),f=Rm(f,n),d=zf(d),d=Am(d,n),d=Rm(d,n),f=Cm(f),d=Cm(d),n.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=k+S+f,P=k+_+d,O=Em(a,a.VERTEX_SHADER,I),z=Em(a,a.FRAGMENT_SHADER,P);a.attachShader(A,O),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(U){if(s.debug.checkShaderErrors){const J=a.getProgramInfoLog(A)||"",Z=a.getShaderInfoLog(O)||"",re=a.getShaderInfoLog(z)||"",ue=J.trim(),oe=Z.trim(),ce=re.trim();let H=!0,le=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,O,z);else{const se=wm(a,O,"vertex"),b=wm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ue+`
`+se+`
`+b)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(oe===""||ce==="")&&(le=!1);le&&(U.diagnostics={runnable:H,programLog:ue,vertexShader:{log:oe,prefix:S},fragmentShader:{log:ce,prefix:_}})}a.deleteShader(O),a.deleteShader(z),X=new Ul(a,A),R=VM(a,A)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(A,UM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=z,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new nE(e),n.set(e,r)),r}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(s,e,n,r,a,u,f){const d=new Jm,m=new tE,p=new Set,v=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return p.add(R),R===0?"uv":`uv${R}`}function S(R,C,U,J,Z){const re=J.fog,ue=Z.geometry,oe=R.isMeshStandardMaterial?J.environment:null,ce=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),H=ce&&ce.mapping===Ol?ce.image.height:null,le=T[R.type];R.precision!==null&&(y=a.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,b=se!==void 0?se.length:0;let te=0;ue.morphAttributes.position!==void 0&&(te=1),ue.morphAttributes.normal!==void 0&&(te=2),ue.morphAttributes.color!==void 0&&(te=3);let Oe,Fe,Q,pe;if(le){const xt=gi[le];Oe=xt.vertexShader,Fe=xt.fragmentShader}else Oe=R.vertexShader,Fe=R.fragmentShader,m.update(R),Q=m.getVertexShaderID(R),pe=m.getFragmentShaderID(R);const de=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Re=Z.isInstancedMesh===!0,Ge=Z.isBatchedMesh===!0,yt=!!R.map,at=!!R.matcap,N=!!ce,_t=!!R.aoMap,Qe=!!R.lightMap,vt=!!R.bumpMap,Ke=!!R.normalMap,It=!!R.displacementMap,ke=!!R.emissiveMap,ut=!!R.metalnessMap,kt=!!R.roughnessMap,Bt=R.anisotropy>0,L=R.clearcoat>0,E=R.dispersion>0,$=R.iridescence>0,fe=R.sheen>0,_e=R.transmission>0,ae=Bt&&!!R.anisotropyMap,qe=L&&!!R.clearcoatMap,we=L&&!!R.clearcoatNormalMap,ze=L&&!!R.clearcoatRoughnessMap,$e=$&&!!R.iridescenceMap,Me=$&&!!R.iridescenceThicknessMap,De=fe&&!!R.sheenColorMap,it=fe&&!!R.sheenRoughnessMap,je=!!R.specularMap,Ce=!!R.specularColorMap,ct=!!R.specularIntensityMap,V=_e&&!!R.transmissionMap,Se=_e&&!!R.thicknessMap,Ae=!!R.gradientMap,Ue=!!R.alphaMap,xe=R.alphaTest>0,he=!!R.alphaHash,We=!!R.extensions;let lt=_r;R.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Ct={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:Oe,fragmentShader:Fe,defines:R.defines,customVertexShaderID:Q,customFragmentShaderID:pe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&Z._colorsTexture!==null,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,instancingMorph:Re&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Xs,alphaToCoverage:!!R.alphaToCoverage,map:yt,matcap:at,envMap:N,envMapMode:N&&ce.mapping,envMapCubeUVHeight:H,aoMap:_t,lightMap:Qe,bumpMap:vt,normalMap:Ke,displacementMap:x&&It,emissiveMap:ke,normalMapObjectSpace:Ke&&R.normalMapType===F0,normalMapTangentSpace:Ke&&R.normalMapType===$m,metalnessMap:ut,roughnessMap:kt,anisotropy:Bt,anisotropyMap:ae,clearcoat:L,clearcoatMap:qe,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:E,iridescence:$,iridescenceMap:$e,iridescenceThicknessMap:Me,sheen:fe,sheenColorMap:De,sheenRoughnessMap:it,specularMap:je,specularColorMap:Ce,specularIntensityMap:ct,transmission:_e,transmissionMap:V,thicknessMap:Se,gradientMap:Ae,opaque:R.transparent===!1&&R.blending===Bs&&R.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:he,combine:R.combine,mapUv:yt&&A(R.map.channel),aoMapUv:_t&&A(R.aoMap.channel),lightMapUv:Qe&&A(R.lightMap.channel),bumpMapUv:vt&&A(R.bumpMap.channel),normalMapUv:Ke&&A(R.normalMap.channel),displacementMapUv:It&&A(R.displacementMap.channel),emissiveMapUv:ke&&A(R.emissiveMap.channel),metalnessMapUv:ut&&A(R.metalnessMap.channel),roughnessMapUv:kt&&A(R.roughnessMap.channel),anisotropyMapUv:ae&&A(R.anisotropyMap.channel),clearcoatMapUv:qe&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:De&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:it&&A(R.sheenRoughnessMap.channel),specularMapUv:je&&A(R.specularMap.channel),specularColorMapUv:Ce&&A(R.specularColorMap.channel),specularIntensityMapUv:ct&&A(R.specularIntensityMap.channel),transmissionMapUv:V&&A(R.transmissionMap.channel),thicknessMapUv:Se&&A(R.thicknessMap.channel),alphaMapUv:Ue&&A(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Ke||Bt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&(yt||Ue),fog:!!re,useFog:R.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ee,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:yt&&R.map.isVideoTexture===!0&&wt.getTransfer(R.map.colorSpace)===Lt,decodeVideoTextureEmissive:ke&&R.emissiveMap.isVideoTexture===!0&&wt.getTransfer(R.emissiveMap.colorSpace)===Lt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ki,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:We&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&R.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function _(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const U in R.defines)C.push(U),C.push(R.defines[U]);return R.isRawShaderMaterial===!1&&(k(C,R),I(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function k(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function I(R,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),R.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),R.push(d.mask)}function P(R){const C=T[R.type];let U;if(C){const J=gi[C];U=Rv.clone(J.uniforms)}else U=R.uniforms;return U}function O(R,C){let U;for(let J=0,Z=v.length;J<Z;J++){const re=v[J];if(re.cacheKey===C){U=re,++U.usedTimes;break}}return U===void 0&&(U=new JM(s,C,R,u),v.push(U)),U}function z(R){if(--R.usedTimes===0){const C=v.indexOf(R);v[C]=v[v.length-1],v.pop(),R.destroy()}}function F(R){m.remove(R)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:O,releaseProgram:z,releaseShaderCache:F,programs:v,dispose:X}}function rE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function sE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(g,x,y,T,A,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:y,groupOrder:T,renderOrder:g.renderOrder,z:A,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=y,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=A,_.group=S),e++,_}function d(g,x,y,T,A,S){const _=f(g,x,y,T,A,S);y.transmission>0?r.push(_):y.transparent===!0?a.push(_):n.push(_)}function m(g,x,y,T,A,S){const _=f(g,x,y,T,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?a.unshift(_):n.unshift(_)}function p(g,x){n.length>1&&n.sort(g||sE),r.length>1&&r.sort(x||bm),a.length>1&&a.sort(x||bm)}function v(){for(let g=e,x=s.length;g<x;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:m,finish:v,sort:p}}function oE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Lm,s.set(r,[f])):a>=u.length?(f=new Lm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function aE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new At};break;case"SpotLight":n={position:new q,direction:new q,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let uE=0;function cE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fE(s){const e=new aE,n=lE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,u=new jt,f=new jt;function d(p){let v=0,g=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let y=0,T=0,A=0,S=0,_=0,k=0,I=0,P=0,O=0,z=0,F=0;p.sort(cE);for(let R=0,C=p.length;R<C;R++){const U=p[R],J=U.color,Z=U.intensity,re=U.distance,ue=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)v+=J.r*Z,g+=J.g*Z,x+=J.b*Z;else if(U.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(U.sh.coefficients[oe],Z);F++}else if(U.isDirectionalLight){const oe=e.get(U);if(oe.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ce=U.shadow,H=n.get(U);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=U.shadow.matrix,k++}r.directional[y]=oe,y++}else if(U.isSpotLight){const oe=e.get(U);oe.position.setFromMatrixPosition(U.matrixWorld),oe.color.copy(J).multiplyScalar(Z),oe.distance=re,oe.coneCos=Math.cos(U.angle),oe.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),oe.decay=U.decay,r.spot[A]=oe;const ce=U.shadow;if(U.map&&(r.spotLightMap[O]=U.map,O++,ce.updateMatrices(U),U.castShadow&&z++),r.spotLightMatrix[A]=ce.matrix,U.castShadow){const H=n.get(U);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=ue,P++}A++}else if(U.isRectAreaLight){const oe=e.get(U);oe.color.copy(J).multiplyScalar(Z),oe.halfWidth.set(U.width*.5,0,0),oe.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=oe,S++}else if(U.isPointLight){const oe=e.get(U);if(oe.color.copy(U.color).multiplyScalar(U.intensity),oe.distance=U.distance,oe.decay=U.decay,U.castShadow){const ce=U.shadow,H=n.get(U);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=ue,r.pointShadowMatrix[T]=U.shadow.matrix,I++}r.point[T]=oe,T++}else if(U.isHemisphereLight){const oe=e.get(U);oe.skyColor.copy(U.color).multiplyScalar(Z),oe.groundColor.copy(U.groundColor).multiplyScalar(Z),r.hemi[_]=oe,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==k||X.numPointShadows!==I||X.numSpotShadows!==P||X.numSpotMaps!==O||X.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=k,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+O-z,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,X.directionalLength=y,X.pointLength=T,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=k,X.numPointShadows=I,X.numSpotShadows=P,X.numSpotMaps=O,X.numLightProbes=F,r.version=uE++)}function m(p,v){let g=0,x=0,y=0,T=0,A=0;const S=v.matrixWorldInverse;for(let _=0,k=p.length;_<k;_++){const I=p[_];if(I.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),g++}else if(I.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(S),f.identity(),u.copy(I.matrixWorld),u.premultiply(S),f.extractRotation(u),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),T++}else if(I.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(S),x++}else if(I.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function Dm(s){const e=new fE(s),n=[],r=[];function a(v){p.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function m(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function dE(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Dm(s),e.set(a,[d])):u>=f.length?(d=new Dm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mE(s,e,n){let r=new Jf;const a=new Et,u=new Et,f=new Ut,d=new kv({depthPacking:N0}),m=new Bv,p={},v=n.maxTextureSize,g={[vr]:In,[In]:vr,[ki]:ki},x=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:hE,fragmentShader:pE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new Hi;T.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Dt(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let _=this.type;this.render=function(z,F,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),J=s.state;J.setBlending(gr),J.buffers.depth.getReversed()?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=_!==Oi&&this.type===Oi,re=_===Oi&&this.type!==Oi;for(let ue=0,oe=z.length;ue<oe;ue++){const ce=z[ue],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const le=H.getFrameExtents();if(a.multiply(le),u.copy(H.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/le.x),a.x=u.x*le.x,H.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/le.y),a.y=u.y*le.y,H.mapSize.y=u.y)),H.map===null||Z===!0||re===!0){const b=this.type!==Oi?{minFilter:fi,magFilter:fi}:{};H.map!==null&&H.map.dispose(),H.map=new $r(a.x,a.y,b),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let b=0;b<se;b++){const te=H.getViewport(b);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),J.viewport(f),H.updateMatrices(ce,b),r=H.getFrustum(),P(F,X,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&k(H,X),H.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(R,C,U)};function k(z,F){const X=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,X,x,A,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,X,y,A,null)}function I(z,F,X,R){let C=null;const U=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(U!==void 0)C=U;else if(C=X.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=C.uuid,Z=F.uuid;let re=p[J];re===void 0&&(re={},p[J]=re);let ue=re[Z];ue===void 0&&(ue=C.clone(),re[Z]=ue,F.addEventListener("dispose",O)),C=ue}if(C.visible=F.visible,C.wireframe=F.wireframe,R===Oi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=s.properties.get(C);J.light=X}return C}function P(z,F,X,R,C){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Oi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const Z=e.update(z),re=z.material;if(Array.isArray(re)){const ue=Z.groups;for(let oe=0,ce=ue.length;oe<ce;oe++){const H=ue[oe],le=re[H.materialIndex];if(le&&le.visible){const se=I(z,le,R,C);z.onBeforeShadow(s,z,F,X,Z,se,H),s.renderBufferDirect(X,null,Z,se,z,H),z.onAfterShadow(s,z,F,X,Z,se,H)}}}else if(re.visible){const ue=I(z,re,R,C);z.onBeforeShadow(s,z,F,X,Z,ue,null),s.renderBufferDirect(X,null,Z,ue,z,null),z.onAfterShadow(s,z,F,X,Z,ue,null)}}const J=z.children;for(let Z=0,re=J.length;Z<re;Z++)P(J[Z],F,X,R,C)}function O(z){z.target.removeEventListener("dispose",O);for(const X in p){const R=p[X],C=z.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const gE={[nf]:rf,[sf]:lf,[of]:uf,[Vs]:af,[rf]:nf,[lf]:sf,[uf]:of,[af]:Vs};function _E(s,e){function n(){let V=!1;const Se=new Ut;let Ae=null;const Ue=new Ut(0,0,0,0);return{setMask:function(xe){Ae!==xe&&!V&&(s.colorMask(xe,xe,xe,xe),Ae=xe)},setLocked:function(xe){V=xe},setClear:function(xe,he,We,lt,Ct){Ct===!0&&(xe*=lt,he*=lt,We*=lt),Se.set(xe,he,We,lt),Ue.equals(Se)===!1&&(s.clearColor(xe,he,We,lt),Ue.copy(Se))},reset:function(){V=!1,Ae=null,Ue.set(-1,0,0,0)}}}function r(){let V=!1,Se=!1,Ae=null,Ue=null,xe=null;return{setReversed:function(he){if(Se!==he){const We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Se=he;const lt=xe;xe=null,this.setClear(lt)}},getReversed:function(){return Se},setTest:function(he){he?de(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(he){Ae!==he&&!V&&(s.depthMask(he),Ae=he)},setFunc:function(he){if(Se&&(he=gE[he]),Ue!==he){switch(he){case nf:s.depthFunc(s.NEVER);break;case rf:s.depthFunc(s.ALWAYS);break;case sf:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case of:s.depthFunc(s.EQUAL);break;case af:s.depthFunc(s.GEQUAL);break;case lf:s.depthFunc(s.GREATER);break;case uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=he}},setLocked:function(he){V=he},setClear:function(he){xe!==he&&(Se&&(he=1-he),s.clearDepth(he),xe=he)},reset:function(){V=!1,Ae=null,Ue=null,xe=null,Se=!1}}}function a(){let V=!1,Se=null,Ae=null,Ue=null,xe=null,he=null,We=null,lt=null,Ct=null;return{setTest:function(xt){V||(xt?de(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(xt){Se!==xt&&!V&&(s.stencilMask(xt),Se=xt)},setFunc:function(xt,Wn,cn){(Ae!==xt||Ue!==Wn||xe!==cn)&&(s.stencilFunc(xt,Wn,cn),Ae=xt,Ue=Wn,xe=cn)},setOp:function(xt,Wn,cn){(he!==xt||We!==Wn||lt!==cn)&&(s.stencilOp(xt,Wn,cn),he=xt,We=Wn,lt=cn)},setLocked:function(xt){V=xt},setClear:function(xt){Ct!==xt&&(s.clearStencil(xt),Ct=xt)},reset:function(){V=!1,Se=null,Ae=null,Ue=null,xe=null,he=null,We=null,lt=null,Ct=null}}}const u=new n,f=new r,d=new a,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,y=[],T=null,A=!1,S=null,_=null,k=null,I=null,P=null,O=null,z=null,F=new At(0,0,0),X=0,R=!1,C=null,U=null,J=null,Z=null,re=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=ce>=2);let le=null,se={};const b=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),Oe=new Ut().fromArray(b),Fe=new Ut().fromArray(te);function Q(V,Se,Ae,Ue){const xe=new Uint8Array(4),he=s.createTexture();s.bindTexture(V,he),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Ae;We++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Se+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return he}const pe={};pe[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),de(s.DEPTH_TEST),f.setFunc(Vs),vt(!1),Ke(Ip),de(s.CULL_FACE),_t(gr);function de(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Ee(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Re(V,Se){return g[V]!==Se?(s.bindFramebuffer(V,Se),g[V]=Se,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Se),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ge(V,Se){let Ae=y,Ue=!1;if(V){Ae=x.get(Se),Ae===void 0&&(Ae=[],x.set(Se,Ae));const xe=V.textures;if(Ae.length!==xe.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let he=0,We=xe.length;he<We;he++)Ae[he]=s.COLOR_ATTACHMENT0+he;Ae.length=xe.length,Ue=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Ae)}function yt(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const at={[Gr]:s.FUNC_ADD,[l0]:s.FUNC_SUBTRACT,[u0]:s.FUNC_REVERSE_SUBTRACT};at[c0]=s.MIN,at[f0]=s.MAX;const N={[d0]:s.ZERO,[h0]:s.ONE,[p0]:s.SRC_COLOR,[ef]:s.SRC_ALPHA,[S0]:s.SRC_ALPHA_SATURATE,[v0]:s.DST_COLOR,[g0]:s.DST_ALPHA,[m0]:s.ONE_MINUS_SRC_COLOR,[tf]:s.ONE_MINUS_SRC_ALPHA,[x0]:s.ONE_MINUS_DST_COLOR,[_0]:s.ONE_MINUS_DST_ALPHA,[y0]:s.CONSTANT_COLOR,[M0]:s.ONE_MINUS_CONSTANT_COLOR,[E0]:s.CONSTANT_ALPHA,[T0]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(V,Se,Ae,Ue,xe,he,We,lt,Ct,xt){if(V===gr){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(de(s.BLEND),A=!0),V!==a0){if(V!==S||xt!==R){if((_!==Gr||P!==Gr)&&(s.blendEquation(s.FUNC_ADD),_=Gr,P=Gr),xt)switch(V){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Np:s.blendFunc(s.ONE,s.ONE);break;case Fp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Op:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Np:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Op:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}k=null,I=null,O=null,z=null,F.set(0,0,0),X=0,S=V,R=xt}return}xe=xe||Se,he=he||Ae,We=We||Ue,(Se!==_||xe!==P)&&(s.blendEquationSeparate(at[Se],at[xe]),_=Se,P=xe),(Ae!==k||Ue!==I||he!==O||We!==z)&&(s.blendFuncSeparate(N[Ae],N[Ue],N[he],N[We]),k=Ae,I=Ue,O=he,z=We),(lt.equals(F)===!1||Ct!==X)&&(s.blendColor(lt.r,lt.g,lt.b,Ct),F.copy(lt),X=Ct),S=V,R=!1}function Qe(V,Se){V.side===ki?Ee(s.CULL_FACE):de(s.CULL_FACE);let Ae=V.side===In;Se&&(Ae=!Ae),vt(Ae),V.blending===Bs&&V.transparent===!1?_t(gr):_t(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const Ue=V.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ke(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function Ke(V){V!==s0?(de(s.CULL_FACE),V!==U&&(V===Ip?s.cullFace(s.BACK):V===o0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),U=V}function It(V){V!==J&&(oe&&s.lineWidth(V),J=V)}function ke(V,Se,Ae){V?(de(s.POLYGON_OFFSET_FILL),(Z!==Se||re!==Ae)&&(s.polygonOffset(Se,Ae),Z=Se,re=Ae)):Ee(s.POLYGON_OFFSET_FILL)}function ut(V){V?de(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function kt(V){V===void 0&&(V=s.TEXTURE0+ue-1),le!==V&&(s.activeTexture(V),le=V)}function Bt(V,Se,Ae){Ae===void 0&&(le===null?Ae=s.TEXTURE0+ue-1:Ae=le);let Ue=se[Ae];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[Ae]=Ue),(Ue.type!==V||Ue.texture!==Se)&&(le!==Ae&&(s.activeTexture(Ae),le=Ae),s.bindTexture(V,Se||pe[V]),Ue.type=V,Ue.texture=Se)}function L(){const V=se[le];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(V){Oe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function it(V){Fe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Fe.copy(V))}function je(V,Se){let Ae=p.get(Se);Ae===void 0&&(Ae=new WeakMap,p.set(Se,Ae));let Ue=Ae.get(V);Ue===void 0&&(Ue=s.getUniformBlockIndex(Se,V.name),Ae.set(V,Ue))}function Ce(V,Se){const Ue=p.get(Se).get(V);m.get(Se)!==Ue&&(s.uniformBlockBinding(Se,Ue,V.__bindingPointIndex),m.set(Se,Ue))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},g={},x=new WeakMap,y=[],T=null,A=!1,S=null,_=null,k=null,I=null,P=null,O=null,z=null,F=new At(0,0,0),X=0,R=!1,C=null,U=null,J=null,Z=null,re=null,Oe.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:de,disable:Ee,bindFramebuffer:Re,drawBuffers:Ge,useProgram:yt,setBlending:_t,setMaterial:Qe,setFlipSided:vt,setCullFace:Ke,setLineWidth:It,setPolygonOffset:ke,setScissorTest:ut,activeTexture:kt,bindTexture:Bt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:$e,texImage3D:Me,updateUBOMapping:je,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:ze,texSubImage2D:fe,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:qe,scissor:De,viewport:it,reset:ct}}function vE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,v=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return y?new OffscreenCanvas(L,E):Fl("canvas")}function A(L,E,$){let fe=1;const _e=Bt(L);if((_e.width>$||_e.height>$)&&(fe=$/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(fe*_e.width),qe=Math.floor(fe*_e.height);g===void 0&&(g=T(ae,qe));const we=E?T(ae,qe):g;return we.width=ae,we.height=qe,we.getContext("2d").drawImage(L,0,0,ae,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ae+"x"+qe+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function k(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,E,$,fe,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=E;if(E===s.RED&&($===s.FLOAT&&(ae=s.R32F),$===s.HALF_FLOAT&&(ae=s.R16F),$===s.UNSIGNED_BYTE&&(ae=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.R8UI),$===s.UNSIGNED_SHORT&&(ae=s.R16UI),$===s.UNSIGNED_INT&&(ae=s.R32UI),$===s.BYTE&&(ae=s.R8I),$===s.SHORT&&(ae=s.R16I),$===s.INT&&(ae=s.R32I)),E===s.RG&&($===s.FLOAT&&(ae=s.RG32F),$===s.HALF_FLOAT&&(ae=s.RG16F),$===s.UNSIGNED_BYTE&&(ae=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.RG8UI),$===s.UNSIGNED_SHORT&&(ae=s.RG16UI),$===s.UNSIGNED_INT&&(ae=s.RG32UI),$===s.BYTE&&(ae=s.RG8I),$===s.SHORT&&(ae=s.RG16I),$===s.INT&&(ae=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),$===s.UNSIGNED_INT&&(ae=s.RGB32UI),$===s.BYTE&&(ae=s.RGB8I),$===s.SHORT&&(ae=s.RGB16I),$===s.INT&&(ae=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),$===s.UNSIGNED_INT&&(ae=s.RGBA32UI),$===s.BYTE&&(ae=s.RGBA8I),$===s.SHORT&&(ae=s.RGBA16I),$===s.INT&&(ae=s.RGBA32I)),E===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),E===s.RGBA){const qe=_e?Il:wt.getTransfer(fe);$===s.FLOAT&&(ae=s.RGBA32F),$===s.HALF_FLOAT&&(ae=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ae=qe===Lt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function P(L,E){let $;return L?E===null||E===qr||E===Vo?$=s.DEPTH24_STENCIL8:E===Bi?$=s.DEPTH32F_STENCIL8:E===Ho&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===Vo?$=s.DEPTH_COMPONENT24:E===Bi?$=s.DEPTH_COMPONENT32F:E===Ho&&($=s.DEPTH_COMPONENT16),$}function O(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==fi&&L.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&v.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),C(E)}function X(L){const E=r.get(L);if(E.__webglInit===void 0)return;const $=L.source,fe=x.get($);if(fe){const _e=fe[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(L),Object.keys(fe).length===0&&x.delete($)}r.remove(L)}function R(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const $=L.source,fe=x.get($);delete fe[E.__cacheKey],f.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let _e=0;_e<E.__webglFramebuffer[fe].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[fe][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let fe=0,_e=$.length;fe<_e;fe++){const ae=r.get($[fe]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),f.memory.textures--),r.remove($[fe])}r.remove(L)}let U=0;function J(){U=0}function Z(){const L=U;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),U+=1,L}function re(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ue(L,E){const $=r.get(L);if(L.isVideoTexture&&ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function oe(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){pe($,L,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ce(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){pe($,L,E);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function H(L,E){const $=r.get(L);if(L.version>0&&$.__version!==L.version){de($,L,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const le={[df]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[hf]:s.MIRRORED_REPEAT},se={[fi]:s.NEAREST,[U0]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[yc]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},b={[O0]:s.NEVER,[G0]:s.ALWAYS,[k0]:s.LESS,[Km]:s.LEQUAL,[B0]:s.EQUAL,[V0]:s.GEQUAL,[z0]:s.GREATER,[H0]:s.NOTEQUAL};function te(L,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===yc||E.magFilter===il||E.magFilter===Yr||E.minFilter===_i||E.minFilter===yc||E.minFilter===il||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,b[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fi||E.minFilter!==il&&E.minFilter!==Yr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const fe=E.source;let _e=x.get(fe);_e===void 0&&(_e={},x.set(fe,_e));const ae=re(E);if(ae!==L.__cacheKey){_e[ae]===void 0&&(_e[ae]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),_e[ae].usedTimes++;const qe=_e[L.__cacheKey];qe!==void 0&&(_e[L.__cacheKey].usedTimes--,qe.usedTimes===0&&R(E)),L.__cacheKey=ae,L.__webglTexture=_e[ae].texture}return $}function Fe(L,E,$){return Math.floor(Math.floor(L/$)/E)}function Q(L,E,$,fe){const ae=L.updateRanges;if(ae.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,fe,E.data);else{ae.sort((Me,De)=>Me.start-De.start);let qe=0;for(let Me=1;Me<ae.length;Me++){const De=ae[qe],it=ae[Me],je=De.start+De.count,Ce=Fe(it.start,E.width,4),ct=Fe(De.start,E.width,4);it.start<=je+1&&Ce===ct&&Fe(it.start+it.count-1,E.width,4)===Ce?De.count=Math.max(De.count,it.start+it.count-De.start):(++qe,ae[qe]=it)}ae.length=qe+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Me=0,De=ae.length;Me<De;Me++){const it=ae[Me],je=Math.floor(it.start/4),Ce=Math.ceil(it.count/4),ct=je%E.width,V=Math.floor(je/E.width),Se=Ce,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,ct,V,Se,Ae,$,fe,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function pe(L,E,$){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const _e=Oe(L,E),ae=E.source;n.bindTexture(fe,L.__webglTexture,s.TEXTURE0+$);const qe=r.get(ae);if(ae.version!==qe.__version||_e===!0){n.activeTexture(s.TEXTURE0+$);const we=wt.getPrimaries(wt.workingColorSpace),ze=E.colorSpace===mr?null:wt.getPrimaries(E.colorSpace),$e=E.colorSpace===mr||we===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Me=A(E.image,!1,a.maxTextureSize);Me=kt(E,Me);const De=u.convert(E.format,E.colorSpace),it=u.convert(E.type);let je=I(E.internalFormat,De,it,E.colorSpace,E.isVideoTexture);te(fe,E);let Ce;const ct=E.mipmaps,V=E.isVideoTexture!==!0,Se=qe.__version===void 0||_e===!0,Ae=ae.dataReady,Ue=O(E,Me);if(E.isDepthTexture)je=P(E.format===Wo,E.type),Se&&(V?n.texStorage2D(s.TEXTURE_2D,1,je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,je,Me.width,Me.height,0,De,it,null));else if(E.isDataTexture)if(ct.length>0){V&&Se&&n.texStorage2D(s.TEXTURE_2D,Ue,je,ct[0].width,ct[0].height);for(let xe=0,he=ct.length;xe<he;xe++)Ce=ct[xe],V?Ae&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,De,it,Ce.data):n.texImage2D(s.TEXTURE_2D,xe,je,Ce.width,Ce.height,0,De,it,Ce.data);E.generateMipmaps=!1}else V?(Se&&n.texStorage2D(s.TEXTURE_2D,Ue,je,Me.width,Me.height),Ae&&Q(E,Me,De,it)):n.texImage2D(s.TEXTURE_2D,0,je,Me.width,Me.height,0,De,it,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Se&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,je,ct[0].width,ct[0].height,Me.depth);for(let xe=0,he=ct.length;xe<he;xe++)if(Ce=ct[xe],E.format!==ci)if(De!==null)if(V){if(Ae)if(E.layerUpdates.size>0){const We=lm(Ce.width,Ce.height,E.format,E.type);for(const lt of E.layerUpdates){const Ct=Ce.data.subarray(lt*We/Ce.data.BYTES_PER_ELEMENT,(lt+1)*We/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,lt,Ce.width,Ce.height,1,De,Ct)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,Me.depth,De,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,je,Ce.width,Ce.height,Me.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,Me.depth,De,it,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,je,Ce.width,Ce.height,Me.depth,0,De,it,Ce.data)}else{V&&Se&&n.texStorage2D(s.TEXTURE_2D,Ue,je,ct[0].width,ct[0].height);for(let xe=0,he=ct.length;xe<he;xe++)Ce=ct[xe],E.format!==ci?De!==null?V?Ae&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,De,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,De,it,Ce.data):n.texImage2D(s.TEXTURE_2D,xe,je,Ce.width,Ce.height,0,De,it,Ce.data)}else if(E.isDataArrayTexture)if(V){if(Se&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,je,Me.width,Me.height,Me.depth),Ae)if(E.layerUpdates.size>0){const xe=lm(Me.width,Me.height,E.format,E.type);for(const he of E.layerUpdates){const We=Me.data.subarray(he*xe/Me.data.BYTES_PER_ELEMENT,(he+1)*xe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,De,it,We)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,it,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Me.width,Me.height,Me.depth,0,De,it,Me.data);else if(E.isData3DTexture)V?(Se&&n.texStorage3D(s.TEXTURE_3D,Ue,je,Me.width,Me.height,Me.depth),Ae&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,it,Me.data)):n.texImage3D(s.TEXTURE_3D,0,je,Me.width,Me.height,Me.depth,0,De,it,Me.data);else if(E.isFramebufferTexture){if(Se)if(V)n.texStorage2D(s.TEXTURE_2D,Ue,je,Me.width,Me.height);else{let xe=Me.width,he=Me.height;for(let We=0;We<Ue;We++)n.texImage2D(s.TEXTURE_2D,We,je,xe,he,0,De,it,null),xe>>=1,he>>=1}}else if(ct.length>0){if(V&&Se){const xe=Bt(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ue,je,xe.width,xe.height)}for(let xe=0,he=ct.length;xe<he;xe++)Ce=ct[xe],V?Ae&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,De,it,Ce):n.texImage2D(s.TEXTURE_2D,xe,je,De,it,Ce);E.generateMipmaps=!1}else if(V){if(Se){const xe=Bt(Me);n.texStorage2D(s.TEXTURE_2D,Ue,je,xe.width,xe.height)}Ae&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,it,Me)}else n.texImage2D(s.TEXTURE_2D,0,je,De,it,Me);S(E)&&_(fe),qe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function de(L,E,$){if(E.image.length!==6)return;const fe=Oe(L,E),_e=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const ae=r.get(_e);if(_e.version!==ae.__version||fe===!0){n.activeTexture(s.TEXTURE0+$);const qe=wt.getPrimaries(wt.workingColorSpace),we=E.colorSpace===mr?null:wt.getPrimaries(E.colorSpace),ze=E.colorSpace===mr||qe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!$e&&!Me?De[he]=A(E.image[he],!0,a.maxCubemapSize):De[he]=Me?E.image[he].image:E.image[he],De[he]=kt(E,De[he]);const it=De[0],je=u.convert(E.format,E.colorSpace),Ce=u.convert(E.type),ct=I(E.internalFormat,je,Ce,E.colorSpace),V=E.isVideoTexture!==!0,Se=ae.__version===void 0||fe===!0,Ae=_e.dataReady;let Ue=O(E,it);te(s.TEXTURE_CUBE_MAP,E);let xe;if($e){V&&Se&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ct,it.width,it.height);for(let he=0;he<6;he++){xe=De[he].mipmaps;for(let We=0;We<xe.length;We++){const lt=xe[We];E.format!==ci?je!==null?V?Ae&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,lt.width,lt.height,je,lt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,ct,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,lt.width,lt.height,je,Ce,lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,ct,lt.width,lt.height,0,je,Ce,lt.data)}}}else{if(xe=E.mipmaps,V&&Se){xe.length>0&&Ue++;const he=Bt(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ct,he.width,he.height)}for(let he=0;he<6;he++)if(Me){V?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,je,Ce,De[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,De[he].width,De[he].height,0,je,Ce,De[he].data);for(let We=0;We<xe.length;We++){const Ct=xe[We].image[he].image;V?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Ct.width,Ct.height,je,Ce,Ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,ct,Ct.width,Ct.height,0,je,Ce,Ct.data)}}else{V?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,Ce,De[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,je,Ce,De[he]);for(let We=0;We<xe.length;We++){const lt=xe[We];V?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,je,Ce,lt.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,ct,je,Ce,lt.image[he])}}}S(E)&&_(s.TEXTURE_CUBE_MAP),ae.__version=_e.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ee(L,E,$,fe,_e,ae){const qe=u.convert($.format,$.colorSpace),we=u.convert($.type),ze=I($.internalFormat,qe,we,$.colorSpace),$e=r.get(E),Me=r.get($);if(Me.__renderTarget=E,!$e.__hasExternalTextures){const De=Math.max(1,E.width>>ae),it=Math.max(1,E.height>>ae);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ae,ze,De,it,E.depth,0,qe,we,null):n.texImage2D(_e,ae,ze,De,it,0,qe,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ke(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,_e,Me.__webglTexture,0,It(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,_e,Me.__webglTexture,ae),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(L,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const fe=E.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ae=P(E.stencilBuffer,_e),qe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=It(E);ke(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ae,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,L)}else{const fe=E.textures;for(let _e=0;_e<fe.length;_e++){const ae=fe[_e],qe=u.convert(ae.format,ae.colorSpace),we=u.convert(ae.type),ze=I(ae.internalFormat,qe,we,ae.colorSpace),$e=It(E);$&&ke(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ze,E.width,E.height):ke(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,ze,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ze,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(E.depthTexture);fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue(E.depthTexture,0);const _e=fe.__webglTexture,ae=It(E);if(E.depthTexture.format===Go)ke(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Wo)ke(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function yt(L){const E=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=fe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const fe=L.texture.mipmaps;fe&&fe.length>0?Ge(E.__webglFramebuffer[0],L):Ge(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),Re(E.__webglDepthbuffer[fe],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ae)}}else{const fe=L.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Re(E.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ae)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function at(L,E,$){const fe=r.get(L);E!==void 0&&Ee(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&yt(L)}function N(L){const E=L.texture,$=r.get(L),fe=r.get(E);L.addEventListener("dispose",F);const _e=L.textures,ae=L.isWebGLCubeRenderTarget===!0,qe=_e.length>1;if(qe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,f.memory.textures++),ae){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let ze=0;ze<E.mipmaps.length;ze++)$.__webglFramebuffer[we][ze]=s.createFramebuffer()}else $.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)$.__webglFramebuffer[we]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(qe)for(let we=0,ze=_e.length;we<ze;we++){const $e=r.get(_e[we]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ke(L)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const ze=_e[we];$.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const $e=u.convert(ze.format,ze.colorSpace),Me=u.convert(ze.type),De=I(ze.internalFormat,$e,Me,ze.colorSpace,L.isXRRenderTarget===!0),it=It(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,De,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Re($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),te(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Ee($.__webglFramebuffer[we][ze],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else Ee($.__webglFramebuffer[we],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let we=0,ze=_e.length;we<ze;we++){const $e=_e[we],Me=r.get($e);let De=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(De,Me.__webglTexture),te(De,$e),Ee($.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+we,De,0),S($e)&&_(De)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,fe.__webglTexture),te(we,E),E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Ee($.__webglFramebuffer[ze],L,E,s.COLOR_ATTACHMENT0,we,ze);else Ee($.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,we,0);S(E)&&_(we),n.unbindTexture()}L.depthBuffer&&yt(L)}function _t(L){const E=L.textures;for(let $=0,fe=E.length;$<fe;$++){const _e=E[$];if(S(_e)){const ae=k(L),qe=r.get(_e).__webglTexture;n.bindTexture(ae,qe),_(ae),n.unbindTexture()}}}const Qe=[],vt=[];function Ke(L){if(L.samples>0){if(ke(L)===!1){const E=L.textures,$=L.width,fe=L.height;let _e=s.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(L),we=E.length>1;if(we)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const ze=L.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[$e]);const Me=r.get(E[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,$,fe,0,0,$,fe,_e,s.NEAREST),m===!0&&(Qe.length=0,vt.length=0,Qe.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qe.push(ae),vt.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,qe.__webglColorRenderbuffer[$e]);const Me=r.get(E[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Me,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function It(L){return Math.min(a.maxSamples,L.samples)}function ke(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(L){const E=f.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function kt(L,E){const $=L.colorSpace,fe=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Xs&&$!==mr&&(wt.getTransfer($)===Lt?(fe!==ci||_e!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=ue,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=at,this.setupRenderTarget=N,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ke}function xE(s,e){function n(r,a=mr){let u;const f=wt.getTransfer(a);if(r===Si)return s.UNSIGNED_BYTE;if(r===Wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hm)return s.BYTE;if(r===Vm)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===Gf)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===jo)return s.HALF_FLOAT;if(r===Wm)return s.ALPHA;if(r===Xm)return s.RGB;if(r===ci)return s.RGBA;if(r===Go)return s.DEPTH_COMPONENT;if(r===Wo)return s.DEPTH_STENCIL;if(r===jm)return s.RED;if(r===jf)return s.RED_INTEGER;if(r===Ym)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===Cl||r===Pl||r===bl||r===Ll)if(f===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pf||r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===pf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===xf||r===Sf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===vf||r===xf)return f===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Sf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===yf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Af)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Df)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===If)return f===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===Nf||r===Ff)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dl)return f===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ff)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qm||r===Of||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class mg extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
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

}`;class ME{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new mg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:SE,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dt(new $s(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends Ys{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,y=null,T=null;const A=new ME,S={},_=n.getContextAttributes();let k=null,I=null;const P=[],O=[],z=new Et;let F=null;const X=new Vn;X.viewport=new Ut;const R=new Vn;R.viewport=new Ut;const C=[X,R],U=new Wv;let J=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=P[Q];return pe===void 0&&(pe=new Gc,P[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=P[Q];return pe===void 0&&(pe=new Gc,P[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=P[Q];return pe===void 0&&(pe=new Gc,P[Q]=pe),pe.getHandSpace()};function re(Q){const pe=O.indexOf(Q.inputSource);if(pe===-1)return;const de=P[pe];de!==void 0&&(de.update(Q.inputSource,Q.frame,p||f),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<P.length;Q++){const pe=O[Q];pe!==null&&(O[Q]=null,P[Q].disconnect(pe))}J=null,Z=null,A.reset();for(const Q in S)delete S[Q];e.setRenderTarget(k),y=null,x=null,g=null,a=null,I=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(k=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",oe),_.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(a,n)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ee=null,Re=null;_.depth&&(Re=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=_.stencil?Wo:Go,Ee=_.stencil?Vo:qr);const Ge={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:u};x=g.createProjectionLayer(Ge),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new $r(x.textureWidth,x.textureHeight,{format:ci,type:Si,depthTexture:new ag(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,de),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new $r(y.framebufferWidth,y.framebufferHeight,{format:ci,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await a.requestReferenceSpace(d),Fe.setContext(a),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function oe(Q){for(let pe=0;pe<Q.removed.length;pe++){const de=Q.removed[pe],Ee=O.indexOf(de);Ee>=0&&(O[Ee]=null,P[Ee].disconnect(de))}for(let pe=0;pe<Q.added.length;pe++){const de=Q.added[pe];let Ee=O.indexOf(de);if(Ee===-1){for(let Ge=0;Ge<P.length;Ge++)if(Ge>=O.length){O.push(de),Ee=Ge;break}else if(O[Ge]===null){O[Ge]=de,Ee=Ge;break}if(Ee===-1)break}const Re=P[Ee];Re&&Re.connect(de)}}const ce=new q,H=new q;function le(Q,pe,de){ce.setFromMatrixPosition(pe.matrixWorld),H.setFromMatrixPosition(de.matrixWorld);const Ee=ce.distanceTo(H),Re=pe.projectionMatrix.elements,Ge=de.projectionMatrix.elements,yt=Re[14]/(Re[10]-1),at=Re[14]/(Re[10]+1),N=(Re[9]+1)/Re[5],_t=(Re[9]-1)/Re[5],Qe=(Re[8]-1)/Re[0],vt=(Ge[8]+1)/Ge[0],Ke=yt*Qe,It=yt*vt,ke=Ee/(-Qe+vt),ut=ke*-Qe;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ut),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const kt=yt+ke,Bt=at+ke,L=Ke-ut,E=It+(Ee-ut),$=N*at/Bt*kt,fe=_t*at/Bt*kt;Q.projectionMatrix.makePerspective(L,E,$,fe,kt,Bt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let pe=Q.near,de=Q.far;A.texture!==null&&(A.depthNear>0&&(pe=A.depthNear),A.depthFar>0&&(de=A.depthFar)),U.near=R.near=X.near=pe,U.far=R.far=X.far=de,(J!==U.near||Z!==U.far)&&(a.updateRenderState({depthNear:U.near,depthFar:U.far}),J=U.near,Z=U.far),U.layers.mask=Q.layers.mask|6,X.layers.mask=U.layers.mask&3,R.layers.mask=U.layers.mask&5;const Ee=Q.parent,Re=U.cameras;se(U,Ee);for(let Ge=0;Ge<Re.length;Ge++)se(Re[Ge],Ee);Re.length===2?le(U,X,R):U.projectionMatrix.copy(X.projectionMatrix),b(Q,U,Ee)};function b(Q,pe,de){de===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(U)},this.getCameraTexture=function(Q){return S[Q]};let te=null;function Oe(Q,pe){if(v=pe.getViewerPose(p||f),T=pe,v!==null){const de=v.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Ee=!1;de.length!==U.cameras.length&&(U.cameras.length=0,Ee=!0);for(let at=0;at<de.length;at++){const N=de[at];let _t=null;if(y!==null)_t=y.getViewport(N);else{const vt=g.getViewSubImage(x,N);_t=vt.viewport,at===0&&(e.setRenderTargetTextures(I,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(I))}let Qe=C[at];Qe===void 0&&(Qe=new Vn,Qe.layers.enable(at),Qe.viewport=new Ut,C[at]=Qe),Qe.matrix.fromArray(N.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(N.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(_t.x,_t.y,_t.width,_t.height),at===0&&(U.matrix.copy(Qe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ee===!0&&U.cameras.push(Qe)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const at=g.getDepthInformation(de[0]);at&&at.isValid&&at.texture&&A.init(at,a.renderState)}if(Re&&Re.includes("camera-access")&&(e.state.unbindTexture(),g))for(let at=0;at<de.length;at++){const N=de[at].camera;if(N){let _t=S[N];_t||(_t=new mg,S[N]=_t);const Qe=g.getCameraImage(N);_t.sourceTexture=Qe}}}for(let de=0;de<P.length;de++){const Ee=O[de],Re=P[de];Ee!==null&&Re!==void 0&&Re.update(Ee,pe,p||f)}te&&te(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const Fe=new cg;Fe.setAnimationLoop(Oe),this.setAnimationLoop=function(Q){te=Q},this.dispose=function(){}}}const zr=new yi,TE=new jt;function wE(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,rg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,k,I,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),g(S,_)):_.isMeshPhongMaterial?(u(S,_),v(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,P)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,k,I):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===In&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===In&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const k=e.get(_),I=k.envMap,P=k.envMapRotation;I&&(S.envMap.value=I,zr.copy(P),zr.x*=-1,zr.y*=-1,zr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),S.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(zr)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,k,I){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*k,S.scale.value=I*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,k){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=k.texture,S.transmissionSamplerSize.value.set(k.width,k.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const k=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(k.matrixWorld),S.nearDistance.value=k.shadow.camera.near,S.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function AE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(k,I){const P=I.program;r.uniformBlockBinding(k,P)}function p(k,I){let P=a[k.id];P===void 0&&(T(k),P=v(k),a[k.id]=P,k.addEventListener("dispose",S));const O=I.program;r.updateUBOMapping(k,O);const z=e.render.frame;u[k.id]!==z&&(x(k),u[k.id]=z)}function v(k){const I=g();k.__bindingPointIndex=I;const P=s.createBuffer(),O=k.__size,z=k.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,O,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function g(){for(let k=0;k<d;k++)if(f.indexOf(k)===-1)return f.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(k){const I=a[k.id],P=k.uniforms,O=k.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let z=0,F=P.length;z<F;z++){const X=Array.isArray(P[z])?P[z]:[P[z]];for(let R=0,C=X.length;R<C;R++){const U=X[R];if(y(U,z,R,O)===!0){const J=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value];let re=0;for(let ue=0;ue<Z.length;ue++){const oe=Z[ue],ce=A(oe);typeof oe=="number"||typeof oe=="boolean"?(U.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,J+re,U.__data)):oe.isMatrix3?(U.__data[0]=oe.elements[0],U.__data[1]=oe.elements[1],U.__data[2]=oe.elements[2],U.__data[3]=0,U.__data[4]=oe.elements[3],U.__data[5]=oe.elements[4],U.__data[6]=oe.elements[5],U.__data[7]=0,U.__data[8]=oe.elements[6],U.__data[9]=oe.elements[7],U.__data[10]=oe.elements[8],U.__data[11]=0):(oe.toArray(U.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(k,I,P,O){const z=k.value,F=I+"_"+P;if(O[F]===void 0)return typeof z=="number"||typeof z=="boolean"?O[F]=z:O[F]=z.clone(),!0;{const X=O[F];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return O[F]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(k){const I=k.uniforms;let P=0;const O=16;for(let F=0,X=I.length;F<X;F++){const R=Array.isArray(I[F])?I[F]:[I[F]];for(let C=0,U=R.length;C<U;C++){const J=R[C],Z=Array.isArray(J.value)?J.value:[J.value];for(let re=0,ue=Z.length;re<ue;re++){const oe=Z[re],ce=A(oe),H=P%O,le=H%ce.boundary,se=H+le;P+=le,se!==0&&O-se<ce.storage&&(P+=O-se),J.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=ce.storage}}}const z=P%O;return z>0&&(P+=O-z),k.__size=P,k.__cache={},this}function A(k){const I={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(I.boundary=4,I.storage=4):k.isVector2?(I.boundary=8,I.storage=8):k.isVector3||k.isColor?(I.boundary=16,I.storage=12):k.isVector4?(I.boundary=16,I.storage=16):k.isMatrix3?(I.boundary=48,I.storage=48):k.isMatrix4?(I.boundary=64,I.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),I}function S(k){const I=k.target;I.removeEventListener("dispose",S);const P=f.indexOf(I.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete u[I.id]}function _(){for(const k in a)s.deleteBuffer(a[k]);f=[],a={},u={}}return{bind:m,update:p,dispose:_}}class RE{constructor(e={}){const{canvas:n=ov(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const k=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let O=!1;this._outputColorSpace=Qn;let z=0,F=0,X=null,R=-1,C=null;const U=new Ut,J=new Ut;let Z=null;const re=new At(0);let ue=0,oe=n.width,ce=n.height,H=1,le=null,se=null;const b=new Ut(0,0,oe,ce),te=new Ut(0,0,oe,ce);let Oe=!1;const Fe=new Jf;let Q=!1,pe=!1;const de=new jt,Ee=new q,Re=new Ut,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function at(){return X===null?H:1}let N=r;function _t(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",xe,!1),N===null){const j="webgl2";if(N=_t(j,w),N===null)throw _t(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Qe,vt,Ke,It,ke,ut,kt,Bt,L,E,$,fe,_e,ae,qe,we,ze,$e,Me,De,it,je,Ce,ct;function V(){Qe=new Oy(N),Qe.init(),je=new xE(N,Qe),vt=new by(N,Qe,e,je),Ke=new _E(N,Qe),vt.reversedDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),It=new zy(N),ke=new rE,ut=new vE(N,Qe,Ke,ke,vt,je,It),kt=new Dy(P),Bt=new Fy(P),L=new jv(N),Ce=new Cy(N,L),E=new ky(N,L,It,Ce),$=new Vy(N,E,L,It),Me=new Hy(N,vt,ut),we=new Ly(ke),fe=new iE(P,kt,Bt,Qe,vt,Ce,we),_e=new wE(P,ke),ae=new oE,qe=new dE(Qe),$e=new Ry(P,kt,Bt,Ke,$,y,m),ze=new mE(P,$,vt),ct=new AE(N,It,vt,Ke),De=new Py(N,Qe,It),it=new By(N,Qe,It),It.programs=fe.programs,P.capabilities=vt,P.extensions=Qe,P.properties=ke,P.renderLists=ae,P.shadowMap=ze,P.state=Ke,P.info=It}V();const Se=new EE(P,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(oe,ce,!1))},this.getSize=function(w){return w.set(oe,ce)},this.setSize=function(w,j,ne=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,ce=j,n.width=Math.floor(w*H),n.height=Math.floor(j*H),ne===!0&&(n.style.width=w+"px",n.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(oe*H,ce*H).floor()},this.setDrawingBufferSize=function(w,j,ne){oe=w,ce=j,H=ne,n.width=Math.floor(w*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(b)},this.setViewport=function(w,j,ne,ie){w.isVector4?b.set(w.x,w.y,w.z,w.w):b.set(w,j,ne,ie),Ke.viewport(U.copy(b).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,j,ne,ie){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,j,ne,ie),Ke.scissor(J.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){Ke.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ne=!0){let ie=0;if(w){let G=!1;if(X!==null){const ye=X.texture.format;G=ye===qf||ye===Yf||ye===jf}if(G){const ye=X.texture.type,Pe=ye===Si||ye===qr||ye===Ho||ye===Vo||ye===Wf||ye===Xf,He=$e.getClearColor(),Ie=$e.getClearAlpha(),nt=He.r,rt=He.g,Ze=He.b;Pe?(T[0]=nt,T[1]=rt,T[2]=Ze,T[3]=Ie,N.clearBufferuiv(N.COLOR,0,T)):(A[0]=nt,A[1]=rt,A[2]=Ze,A[3]=Ie,N.clearBufferiv(N.COLOR,0,A))}else ie|=N.COLOR_BUFFER_BIT}j&&(ie|=N.DEPTH_BUFFER_BIT),ne&&(ie|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),$e.dispose(),ae.dispose(),qe.dispose(),ke.dispose(),kt.dispose(),Bt.dispose(),$.dispose(),Ce.dispose(),ct.dispose(),fe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",cn),Se.removeEventListener("sessionend",Kr),Nn.stop()};function Ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=It.autoReset,j=ze.enabled,ne=ze.autoUpdate,ie=ze.needsUpdate,G=ze.type;V(),It.autoReset=w,ze.enabled=j,ze.autoUpdate=ne,ze.needsUpdate=ie,ze.type=G}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const j=w.target;j.removeEventListener("dispose",he),We(j)}function We(w){lt(w),ke.remove(w)}function lt(w){const j=ke.get(w).programs;j!==void 0&&(j.forEach(function(ne){fe.releaseProgram(ne)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ne,ie,G,ye){j===null&&(j=Ge);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,He=Ei(w,j,ne,ie,G);Ke.setMaterial(ie,Pe);let Ie=ne.index,nt=1;if(ie.wireframe===!0){if(Ie=E.getWireframeAttribute(ne),Ie===void 0)return;nt=2}const rt=ne.drawRange,Ze=ne.attributes.position;let st=rt.start*nt,Rt=(rt.start+rt.count)*nt;ye!==null&&(st=Math.max(st,ye.start*nt),Rt=Math.min(Rt,(ye.start+ye.count)*nt)),Ie!==null?(st=Math.max(st,0),Rt=Math.min(Rt,Ie.count)):Ze!=null&&(st=Math.max(st,0),Rt=Math.min(Rt,Ze.count));const St=Rt-st;if(St<0||St===1/0)return;Ce.setup(G,ie,He,ne,Ie);let Nt,Pt=De;if(Ie!==null&&(Nt=L.get(Ie),Pt=it,Pt.setIndex(Nt)),G.isMesh)ie.wireframe===!0?(Ke.setLineWidth(ie.wireframeLinewidth*at()),Pt.setMode(N.LINES)):Pt.setMode(N.TRIANGLES);else if(G.isLine){let Je=ie.linewidth;Je===void 0&&(Je=1),Ke.setLineWidth(Je*at()),G.isLineSegments?Pt.setMode(N.LINES):G.isLineLoop?Pt.setMode(N.LINE_LOOP):Pt.setMode(N.LINE_STRIP)}else G.isPoints?Pt.setMode(N.POINTS):G.isSprite&&Pt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Je=G._multiDrawStarts,bt=G._multiDrawCounts,pt=G._multiDrawCount,Zt=Ie?L.get(Ie).bytesPerElement:1,Jn=ke.get(ie).currentProgram.getUniforms();for(let yn=0;yn<pt;yn++)Jn.setValue(N,"_gl_DrawID",yn),Pt.render(Je[yn]/Zt,bt[yn])}else if(G.isInstancedMesh)Pt.renderInstances(st,St,G.count);else if(ne.isInstancedBufferGeometry){const Je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,bt=Math.min(ne.instanceCount,Je);Pt.renderInstances(st,St,bt)}else Pt.render(st,St)};function Ct(w,j,ne){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,Qr(w,j,ne),w.side=vr,w.needsUpdate=!0,Qr(w,j,ne),w.side=ki):Qr(w,j,ne)}this.compile=function(w,j,ne=null){ne===null&&(ne=w),_=qe.get(ne),_.init(j),I.push(_),ne.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),w!==ne&&w.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const ie=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const He=ye[Pe];Ct(He,ne,G),ie.add(He)}else Ct(ye,ne,G),ie.add(ye)}),_=I.pop(),ie},this.compileAsync=function(w,j,ne=null){const ie=this.compile(w,j,ne);return new Promise(G=>{function ye(){if(ie.forEach(function(Pe){ke.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){G(w);return}setTimeout(ye,10)}Qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let xt=null;function Wn(w){xt&&xt(w)}function cn(){Nn.stop()}function Kr(){Nn.start()}const Nn=new cg;Nn.setAnimationLoop(Wn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(w){xt=w,Se.setAnimationLoop(w),w===null?Nn.stop():Nn.start()},Se.addEventListener("sessionstart",cn),Se.addEventListener("sessionend",Kr),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(j),j=Se.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,j,X),_=qe.get(w,I.length),_.init(j),I.push(_),de.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Fe.setFromProjectionMatrix(de,vi,j.reversedDepth),pe=this.localClippingEnabled,Q=we.init(this.clippingPlanes,pe),S=ae.get(w,k.length),S.init(),k.push(S),Se.enabled===!0&&Se.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Zs(ye,j,-1/0,P.sortObjects)}Zs(w,j,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(le,se),yt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,yt&&$e.addToRenderList(S,w),this.info.render.frame++,Q===!0&&we.beginShadows();const ne=_.state.shadowsArray;ze.render(ne,w,j),Q===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,G=S.transmissive;if(_.setupLights(),j.isArrayCamera){const ye=j.cameras;if(G.length>0)for(let Pe=0,He=ye.length;Pe<He;Pe++){const Ie=ye[Pe];Sr(ie,G,w,Ie)}yt&&$e.render(w);for(let Pe=0,He=ye.length;Pe<He;Pe++){const Ie=ye[Pe];Vi(S,w,Ie,Ie.viewport)}}else G.length>0&&Sr(ie,G,w,j),yt&&$e.render(w),Vi(S,w,j);X!==null&&F===0&&(ut.updateMultisampleRenderTarget(X),ut.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(P,w,j),Ce.resetDefaultState(),R=-1,C=null,I.pop(),I.length>0?(_=I[I.length-1],Q===!0&&we.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,k.pop(),k.length>0?S=k[k.length-1]:S=null};function Zs(w,j,ne,ie){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Fe.intersectsSprite(w)){ie&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const Pe=$.update(w),He=w.material;He.visible&&S.push(w,Pe,He,ne,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Fe.intersectsObject(w))){const Pe=$.update(w),He=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Re.copy(Pe.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(He)){const Ie=Pe.groups;for(let nt=0,rt=Ie.length;nt<rt;nt++){const Ze=Ie[nt],st=He[Ze.materialIndex];st&&st.visible&&S.push(w,Pe,st,ne,Re.z,Ze)}}else He.visible&&S.push(w,Pe,He,ne,Re.z,null)}}const ye=w.children;for(let Pe=0,He=ye.length;Pe<He;Pe++)Zs(ye[Pe],j,ne,ie)}function Vi(w,j,ne,ie){const G=w.opaque,ye=w.transmissive,Pe=w.transparent;_.setupLightsView(ne),Q===!0&&we.setGlobalState(P.clippingPlanes,ne),ie&&Ke.viewport(U.copy(ie)),G.length>0&&Mi(G,j,ne),ye.length>0&&Mi(ye,j,ne),Pe.length>0&&Mi(Pe,j,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Sr(w,j,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new $r(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?jo:Si,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ye=_.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||U;ye.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);const He=P.getRenderTarget(),Ie=P.getActiveCubeFace(),nt=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(re),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),yt&&$e.render(ne);const rt=P.toneMapping;P.toneMapping=_r;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),Q===!0&&we.setGlobalState(P.clippingPlanes,ie),Mi(w,ne,ie),ut.updateMultisampleRenderTarget(ye),ut.updateRenderTargetMipmap(ye),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Rt=0,St=j.length;Rt<St;Rt++){const Nt=j[Rt],Pt=Nt.object,Je=Nt.geometry,bt=Nt.material,pt=Nt.group;if(bt.side===ki&&Pt.layers.test(ie.layers)){const Zt=bt.side;bt.side=In,bt.needsUpdate=!0,Zr(Pt,ne,ie,Je,bt,pt),bt.side=Zt,bt.needsUpdate=!0,st=!0}}st===!0&&(ut.updateMultisampleRenderTarget(ye),ut.updateRenderTargetMipmap(ye))}P.setRenderTarget(He,Ie,nt),P.setClearColor(re,ue),Ze!==void 0&&(ie.viewport=Ze),P.toneMapping=rt}function Mi(w,j,ne){const ie=j.isScene===!0?j.overrideMaterial:null;for(let G=0,ye=w.length;G<ye;G++){const Pe=w[G],He=Pe.object,Ie=Pe.geometry,nt=Pe.group;let rt=Pe.material;rt.allowOverride===!0&&ie!==null&&(rt=ie),He.layers.test(ne.layers)&&Zr(He,j,ne,Ie,rt,nt)}}function Zr(w,j,ne,ie,G,ye){w.onBeforeRender(P,j,ne,ie,G,ye),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(P,j,ne,ie,w,ye),G.transparent===!0&&G.side===ki&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,P.renderBufferDirect(ne,j,ie,G,w,ye),G.side=vr,G.needsUpdate=!0,P.renderBufferDirect(ne,j,ie,G,w,ye),G.side=ki):P.renderBufferDirect(ne,j,ie,G,w,ye),w.onAfterRender(P,j,ne,ie,G,ye)}function Qr(w,j,ne){j.isScene!==!0&&(j=Ge);const ie=ke.get(w),G=_.state.lights,ye=_.state.shadowsArray,Pe=G.state.version,He=fe.getParameters(w,G.state,ye,j,ne),Ie=fe.getProgramCacheKey(He);let nt=ie.programs;ie.environment=w.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(w.isMeshStandardMaterial?Bt:kt).get(w.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",he),nt=new Map,ie.programs=nt);let rt=nt.get(Ie);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===Pe)return Zo(w,He),rt}else He.uniforms=fe.getUniforms(w),w.onBeforeCompile(He,P),rt=fe.acquireProgram(He,Ie),nt.set(Ie,rt),ie.uniforms=He.uniforms;const Ze=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Zo(w,He),ie.needsLights=Jo(w),ie.lightsStateVersion=Pe,ie.needsLights&&(Ze.ambientLightColor.value=G.state.ambient,Ze.lightProbe.value=G.state.probe,Ze.directionalLights.value=G.state.directional,Ze.directionalLightShadows.value=G.state.directionalShadow,Ze.spotLights.value=G.state.spot,Ze.spotLightShadows.value=G.state.spotShadow,Ze.rectAreaLights.value=G.state.rectArea,Ze.ltc_1.value=G.state.rectAreaLTC1,Ze.ltc_2.value=G.state.rectAreaLTC2,Ze.pointLights.value=G.state.point,Ze.pointLightShadows.value=G.state.pointShadow,Ze.hemisphereLights.value=G.state.hemi,Ze.directionalShadowMap.value=G.state.directionalShadowMap,Ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ze.spotShadowMap.value=G.state.spotShadowMap,Ze.spotLightMatrix.value=G.state.spotLightMatrix,Ze.spotLightMap.value=G.state.spotLightMap,Ze.pointShadowMap.value=G.state.pointShadowMap,Ze.pointShadowMatrix.value=G.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function Ko(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Ul.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Zo(w,j){const ne=ke.get(w);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Ei(w,j,ne,ie,G){j.isScene!==!0&&(j=Ge),ut.resetTextureUnits();const ye=j.fog,Pe=ie.isMeshStandardMaterial?j.environment:null,He=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Xs,Ie=(ie.isMeshStandardMaterial?Bt:kt).get(ie.envMap||Pe),nt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!ne.morphAttributes.position,st=!!ne.morphAttributes.normal,Rt=!!ne.morphAttributes.color;let St=_r;ie.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(St=P.toneMapping);const Nt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Pt=Nt!==void 0?Nt.length:0,Je=ke.get(ie),bt=_.state.lights;if(Q===!0&&(pe===!0||w!==C)){const Yt=w===C&&ie.id===R;we.setState(ie,w,Yt)}let pt=!1;ie.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==bt.state.version||Je.outputColorSpace!==He||G.isBatchedMesh&&Je.batching===!1||!G.isBatchedMesh&&Je.batching===!0||G.isBatchedMesh&&Je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Je.instancing===!1||!G.isInstancedMesh&&Je.instancing===!0||G.isSkinnedMesh&&Je.skinning===!1||!G.isSkinnedMesh&&Je.skinning===!0||G.isInstancedMesh&&Je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Je.instancingMorph===!1&&G.morphTexture!==null||Je.envMap!==Ie||ie.fog===!0&&Je.fog!==ye||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==rt||Je.morphTargets!==Ze||Je.morphNormals!==st||Je.morphColors!==Rt||Je.toneMapping!==St||Je.morphTargetsCount!==Pt)&&(pt=!0):(pt=!0,Je.__version=ie.version);let Zt=Je.currentProgram;pt===!0&&(Zt=Qr(ie,j,G));let Jn=!1,yn=!1,yr=!1;const Ft=Zt.getUniforms(),Mn=Je.uniforms;if(Ke.useProgram(Zt.program)&&(Jn=!0,yn=!0,yr=!0),ie.id!==R&&(R=ie.id,yn=!0),Jn||C!==w){Ke.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ft.setValue(N,"projectionMatrix",w.projectionMatrix),Ft.setValue(N,"viewMatrix",w.matrixWorldInverse);const dn=Ft.map.cameraPosition;dn!==void 0&&dn.setValue(N,Ee.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,yn=!0,yr=!0)}if(G.isSkinnedMesh){Ft.setOptional(N,G,"bindMatrix"),Ft.setOptional(N,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ft.setValue(N,"boneTexture",Yt.boneTexture,ut))}G.isBatchedMesh&&(Ft.setOptional(N,G,"batchingTexture"),Ft.setValue(N,"batchingTexture",G._matricesTexture,ut),Ft.setOptional(N,G,"batchingIdTexture"),Ft.setValue(N,"batchingIdTexture",G._indirectTexture,ut),Ft.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Ft.setValue(N,"batchingColorTexture",G._colorsTexture,ut));const fn=ne.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Me.update(G,ne,Zt),(yn||Je.receiveShadow!==G.receiveShadow)&&(Je.receiveShadow=G.receiveShadow,Ft.setValue(N,"receiveShadow",G.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Mn.envMap.value=Ie,Mn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&j.environment!==null&&(Mn.envMapIntensity.value=j.environmentIntensity),yn&&(Ft.setValue(N,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&Qo(Mn,yr),ye&&ie.fog===!0&&_e.refreshFogUniforms(Mn,ye),_e.refreshMaterialUniforms(Mn,ie,H,ce,_.state.transmissionRenderTarget[w.id]),Ul.upload(N,Ko(Je),Mn,ut)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ul.upload(N,Ko(Je),Mn,ut),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(N,"center",G.center),Ft.setValue(N,"modelViewMatrix",G.modelViewMatrix),Ft.setValue(N,"normalMatrix",G.normalMatrix),Ft.setValue(N,"modelMatrix",G.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Yt=ie.uniformsGroups;for(let dn=0,Mr=Yt.length;dn<Mr;dn++){const mt=Yt[dn];ct.update(mt,Zt),ct.bind(mt,Zt)}}return Zt}function Qo(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Jo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,j,ne){const ie=ke.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ke.get(w.texture).__webglTexture=j,ke.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ne=ke.get(w);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const Bl=N.createFramebuffer();this.setRenderTarget=function(w,j=0,ne=0){X=w,z=j,F=ne;let ie=!0,G=null,ye=!1,Pe=!1;if(w){const Ie=ke.get(w);if(Ie.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(N.FRAMEBUFFER,null),ie=!1;else if(Ie.__webglFramebuffer===void 0)ut.setupRenderTarget(w);else if(Ie.__hasExternalTextures)ut.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(w)}}const nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const rt=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?G=rt[j][ne]:G=rt[j],ye=!0):w.samples>0&&ut.useMultisampledRTT(w)===!1?G=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(rt)?G=rt[ne]:G=rt,U.copy(w.viewport),J.copy(w.scissor),Z=w.scissorTest}else U.copy(b).multiplyScalar(H).floor(),J.copy(te).multiplyScalar(H).floor(),Z=Oe;if(ne!==0&&(G=Bl),Ke.bindFramebuffer(N.FRAMEBUFFER,G)&&ie&&Ke.drawBuffers(w,G),Ke.viewport(U),Ke.scissor(J),Ke.setScissorTest(Z),ye){const Ie=ke.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ne)}else if(Pe){const Ie=j;for(let nt=0;nt<w.textures.length;nt++){const rt=ke.get(w.textures[nt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ne,Ie)}}else if(w!==null&&ne!==0){const Ie=ke.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ie.__webglTexture,ne)}R=-1},this.readRenderTargetPixels=function(w,j,ne,ie,G,ye,Pe,He=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){Ke.bindFramebuffer(N.FRAMEBUFFER,Ie);try{const nt=w.textures[He],rt=nt.format,Ze=nt.type;if(!vt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ie&&ne>=0&&ne<=w.height-G&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+He),N.readPixels(j,ne,ie,G,je.convert(rt),je.convert(Ze),ye))}finally{const nt=X!==null?ke.get(X).__webglFramebuffer:null;Ke.bindFramebuffer(N.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,j,ne,ie,G,ye,Pe,He=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(j>=0&&j<=w.width-ie&&ne>=0&&ne<=w.height-G){Ke.bindFramebuffer(N.FRAMEBUFFER,Ie);const nt=w.textures[He],rt=nt.format,Ze=nt.type;if(!vt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+He),N.readPixels(j,ne,ie,G,je.convert(rt),je.convert(Ze),0);const Rt=X!==null?ke.get(X).__webglFramebuffer:null;Ke.bindFramebuffer(N.FRAMEBUFFER,Rt);const St=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await av(N,St,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(st),N.deleteSync(St),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ne=0){const ie=Math.pow(2,-ne),G=Math.floor(w.image.width*ie),ye=Math.floor(w.image.height*ie),Pe=j!==null?j.x:0,He=j!==null?j.y:0;ut.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,ne,0,0,Pe,He,G,ye),Ke.unbindTexture()};const ea=N.createFramebuffer(),ta=N.createFramebuffer();this.copyTextureToTexture=function(w,j,ne=null,ie=null,G=0,ye=null){ye===null&&(G!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Pe,He,Ie,nt,rt,Ze,st,Rt,St;const Nt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(ne!==null)Pe=ne.max.x-ne.min.x,He=ne.max.y-ne.min.y,Ie=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,rt=ne.min.y,Ze=ne.isBox3?ne.min.z:0;else{const fn=Math.pow(2,-G);Pe=Math.floor(Nt.width*fn),He=Math.floor(Nt.height*fn),w.isDataArrayTexture?Ie=Nt.depth:w.isData3DTexture?Ie=Math.floor(Nt.depth*fn):Ie=1,nt=0,rt=0,Ze=0}ie!==null?(st=ie.x,Rt=ie.y,St=ie.z):(st=0,Rt=0,St=0);const Pt=je.convert(j.format),Je=je.convert(j.type);let bt;j.isData3DTexture?(ut.setTexture3D(j,0),bt=N.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),bt=N.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);const pt=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),yn=N.getParameter(N.UNPACK_SKIP_ROWS),yr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ze);const Ft=w.isDataArrayTexture||w.isData3DTexture,Mn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const fn=ke.get(w),Yt=ke.get(j),dn=ke.get(fn.__renderTarget),Mr=ke.get(Yt.__renderTarget);Ke.bindFramebuffer(N.READ_FRAMEBUFFER,dn.__webglFramebuffer),Ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let mt=0;mt<Ie;mt++)Ft&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(w).__webglTexture,G,Ze+mt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(j).__webglTexture,ye,St+mt)),N.blitFramebuffer(nt,rt,Pe,He,st,Rt,Pe,He,N.DEPTH_BUFFER_BIT,N.NEAREST);Ke.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||ke.has(w)){const fn=ke.get(w),Yt=ke.get(j);Ke.bindFramebuffer(N.READ_FRAMEBUFFER,ea),Ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,ta);for(let dn=0;dn<Ie;dn++)Ft?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fn.__webglTexture,G,Ze+dn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fn.__webglTexture,G),Mn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,ye,St+dn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,ye),G!==0?N.blitFramebuffer(nt,rt,Pe,He,st,Rt,Pe,He,N.COLOR_BUFFER_BIT,N.NEAREST):Mn?N.copyTexSubImage3D(bt,ye,st,Rt,St+dn,nt,rt,Pe,He):N.copyTexSubImage2D(bt,ye,st,Rt,nt,rt,Pe,He);Ke.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(bt,ye,st,Rt,St,Pe,He,Ie,Pt,Je,Nt.data):j.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,ye,st,Rt,St,Pe,He,Ie,Pt,Nt.data):N.texSubImage3D(bt,ye,st,Rt,St,Pe,He,Ie,Pt,Je,Nt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,st,Rt,Pe,He,Pt,Je,Nt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,st,Rt,Nt.width,Nt.height,Pt,Nt.data):N.texSubImage2D(N.TEXTURE_2D,ye,st,Rt,Pe,He,Pt,Je,Nt);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,yn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yr),ye===0&&j.generateMipmaps&&N.generateMipmap(bt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(w,j,ne=null,ie=null,G=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,j,ne,ie,G)},this.initRenderTarget=function(w){ke.get(w).__webglFramebuffer===void 0&&ut.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ut.setTextureCube(w,0):w.isData3DTexture?ut.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ut.setTexture2DArray(w,0):ut.setTexture2D(w,0),Ke.unbindTexture()},this.resetState=function(){z=0,F=0,X=null,Ke.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const Ns=["Home","About","Skills","Projects","Contact"],Um=["Data Analyst","Frondend Developer","Python Developer","Problem Solver","Creative Coder"];function CE(s){const e=new Os,n=new un({color:13158604,roughness:.18,metalness:.95});new un({color:1710620,roughness:.2,metalness:.9});const r=new un({color:657932,roughness:.35,metalness:.6}),a=new un({color:1973792,roughness:.55,metalness:.45}),u=new un({color:2763310,roughness:.12,metalness:.88}),f=new un({color:1118481,roughness:.95,metalness:0}),d=new un({color:328965,roughness:.6,metalness:.3}),m=3.6,p=.14,v=2.5,g=new Dt(new xn(m,p,v),n);g.receiveShadow=!0,g.castShadow=!0,e.add(g);const x=new Dt(new xn(m-.3,.005,v-.25),new un({color:8947856,roughness:.3,metalness:.7}));x.position.set(0,-p/2-.002,0),e.add(x),[[-1.6,1.05],[1.6,1.05],[-1.6,-1.05],[1.6,-1.05]].forEach(([de,Ee])=>{const Re=new Dt(new Wr(.12,.12,.025,16),f);Re.position.set(de,-p/2-.012,Ee),e.add(Re)});const y=m-.3,T=v-.55,A=new Dt(new xn(y,.01,T),new un({color:1118484,roughness:.5,metalness:.5}));A.position.set(0,p/2+.005,-.1),e.add(A),[{keys:14,w:.198,z:-.82},{keys:13,w:.22,z:-.56},{keys:12,w:.22,z:-.3},{keys:11,w:.22,z:-.04},{keys:10,w:.22,z:.22},{keys:1,w:1.1,z:.48}].forEach(({keys:de,w:Ee,z:Re})=>{const Ge=de*Ee+(de-1)*.03;for(let yt=0;yt<de;yt++){const at=Re===-.82?.17:.2,N=new Dt(new xn(Ee-.02,.025,at),a);N.position.set(-Ge/2+yt*(Ee+.03)+Ee/2,p/2+.02,Re),e.add(N)}});const _=new un({color:52479,emissive:43775,emissiveIntensity:.4,roughness:.1,metalness:.1,transparent:!0,opacity:.3}),k=new Dt(new xn(y-.1,.002,T-.2),_);k.position.set(0,p/2+.006,-.1),e.add(k),e.userData.backlight=k;const I=new Dt(new xn(.95,.008,.62),u);I.position.set(0,p/2+.007,.82),e.add(I);const P=new Dt(new xn(.97,.002,.64),new un({color:4473928,roughness:.2,metalness:.8}));P.position.set(0,p/2+.012,.82),e.add(P);const O=new Dt(new Wr(.055,.055,m+.05,24),new un({color:8947856,roughness:.15,metalness:.98}));O.rotation.z=Math.PI/2,O.position.set(0,p/2+.02,-v/2+.02),e.add(O),[-.25,.25].forEach(de=>{const Ee=new Dt(new xn(.12,.05,.06),d);Ee.position.set(-m/2-.01,0,de),e.add(Ee)});const z=new Dt(new xn(.11,.06,.14),d);z.position.set(m/2+.01,.01,0),e.add(z);const F=new Dt(new Wr(.025,.025,.06,12),d);F.rotation.z=Math.PI/2,F.position.set(m/2+.01,0,.4),e.add(F);const X=m-.04,R=2.35,C=.075,U=new Os;U.position.set(0,p/2+.01,-v/2+.04),e.add(U),e.userData.lidGroup=U;const J=new Dt(new xn(X,R,C),n);J.position.set(0,R/2,-C/2),J.castShadow=!0,U.add(J);const Z=new Dt(new Wr(.18,.18,.005,32),new un({color:11184815,roughness:.15,metalness:.95}));Z.rotation.x=Math.PI/2,Z.position.set(0,R/2,-C-.002),U.add(Z);const re=new Dt(new xn(X,R,C*.4),r);re.position.set(0,R/2,C*.3),U.add(re);const ue=new Dt(new Wr(.025,.025,.015,12),new un({color:328968,roughness:.2,metalness:.8}));ue.rotation.x=Math.PI/2,ue.position.set(0,R-.12,C*.72),U.add(ue);const oe=new Dt(new ed(.035,.008,8,20),new un({color:2763312,roughness:.3,metalness:.7}));oe.rotation.x=Math.PI/2,oe.position.set(0,R-.12,C*.72),U.add(oe);const ce=X-.28,H=R-.22,le=new $s(ce,H),se=document.createElement("canvas");se.width=1024,se.height=680;const b=se.getContext("2d"),te=[{t:"// ✦  Portfolio  2025",c:"#64d8ff",i:0},{t:"",c:"#fff",i:0},{t:"const developer = {",c:"#7ee8a2",i:0},{t:'name     : "Your Name",',c:"#ffd580",i:1},{t:'role     : "Full Stack Dev",',c:"#ffd580",i:1},{t:'location : "Your City, IN",',c:"#ff9de2",i:1},{t:"skills   : [",c:"#7ee8a2",i:1},{t:'"React", "Node.js", "Three.js",',c:"#ffd580",i:2},{t:'"TypeScript", "Python", "AWS"',c:"#ffd580",i:2},{t:"],",c:"#7ee8a2",i:1},{t:'passion  : "Building beautiful things",',c:"#ff9de2",i:1},{t:"available: true,",c:"#64d8ff",i:1},{t:"};",c:"#7ee8a2",i:0},{t:"",c:"#fff",i:0},{t:"function hire(dev) {",c:"#7ee8a2",i:0},{t:"  return dev.passion + dev.skills;",c:"#ff9de2",i:0},{t:"}",c:"#7ee8a2",i:0}];function Oe(){const Re=b.createLinearGradient(0,0,0,680);Re.addColorStop(0,"#020b14"),Re.addColorStop(1,"#050f1e"),b.fillStyle=Re,b.fillRect(0,0,1024,680),b.fillStyle="#0b1420",b.fillRect(0,0,1024,36),[["#ff5f57",18],["#ffbd2e",44],["#28ca41",70]].forEach(([at,N])=>{b.fillStyle=at,b.beginPath(),b.arc(N,18,7,0,Math.PI*2),b.fill()}),b.fillStyle="#121e30",b.beginPath(),b.roundRect(100,6,160,24,4),b.fill(),b.fillStyle="#64d8ff",b.font="bold 13px 'Courier New'",b.fillText("portfolio.js  ✕",112,23),b.fillStyle="rgba(255,255,255,0.02)",b.fillRect(0,36,54,644);const Ge=34,yt=80;if(b.font="bold 17px 'Courier New',monospace",te.forEach((at,N)=>{const _t=yt+N*Ge;b.fillStyle="#2e4a5a",b.fillText(String(N+1).padStart(2," "),8,_t),N===4&&(b.fillStyle="rgba(100,216,255,0.07)",b.fillRect(54,_t-22,970,Ge)),b.fillStyle=at.c,b.fillText("  ".repeat(at.i)+at.t,62,_t)}),Math.floor(Date.now()/500)%2===0){const at=yt+te.length*Ge-6;b.fillStyle="#64d8ff",b.fillRect(62,at-20,10,20)}b.fillStyle="#0b1420",b.fillRect(0,658,1024,22),b.fillStyle="#64d8ff",b.font="11px 'Courier New'",b.fillText("● portfolio.js   JavaScript   UTF-8   Ln 17  Col 1",8,673),b.fillStyle="#7ee8a2",b.fillText("▶ Live Server",894,673)}Oe();const Fe=new Ov(se);Fe.flipY=!1;const Q=new Dt(le,new un({map:Fe,emissive:6192,emissiveIntensity:.55,roughness:.04,metalness:0}));Q.position.set(0,R/2,C*.62),U.add(Q),e.userData.screenMesh=Q,e.userData.updateScreen=()=>{Oe(),Fe.needsUpdate=!0};const pe=new Hv(39423,3.5,3.5);return pe.position.set(0,R/2,C+.3),U.add(pe),e.userData.screenGlow=pe,U.rotation.x=Math.PI/2,e.scale.set(.9,.9,.9),e.position.set(0,-.15,0),s.add(e),e}function PE(){const s=pr.useRef(null),e=pr.useRef(0),n=pr.useRef(null),r=pr.useRef(null),[a,u]=pr.useState(0),[f,d]=pr.useState(0);pr.useEffect(()=>{const v=s.current,g=window.innerWidth,x=window.innerHeight,y=new RE({canvas:v,antialias:!0,alpha:!0});y.setSize(g,x),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=Om,y.toneMapping=Bm,y.toneMappingExposure=1.1;const T=new Uv;T.fog=new Qf(394761,.055);const A=new Vn(40,g/x,.1,100);A.position.set(0,1.6,7),A.lookAt(0,.3,0),T.add(new Gv(16777215,.55));const S=new yl(16774624,1.6);S.position.set(4,8,6),S.castShadow=!0,S.shadow.mapSize.set(2048,2048),S.shadow.camera.near=.5,S.shadow.camera.far=30,T.add(S);const _=new yl(4487167,.5);_.position.set(-5,3,-3),T.add(_);const k=new yl(54527,.7);k.position.set(0,5,-7),T.add(k);const I=new yl(2241348,.3);I.position.set(0,-4,2),T.add(I);const P=new Dt(new $s(40,40),new un({color:328967,roughness:.95,metalness:.05,transparent:!0,opacity:.55}));P.rotation.x=-Math.PI/2,P.position.y=-.75,P.receiveShadow=!0,T.add(P);const O=CE(T);n.current=O;const z=()=>{A.aspect=window.innerWidth/window.innerHeight,A.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",z);const F=document.getElementById("scroll-container"),X=()=>{const J=F.scrollHeight-F.clientHeight,Z=J>0?F.scrollTop/J:0;e.current=Z,d(Z),u(Math.min(Math.floor(Z*Ns.length),Ns.length-1))};F?.addEventListener("scroll",X);let R=0,C=0;const U=()=>{r.current=requestAnimationFrame(U),R+=.016;const J=e.current,Z=O.userData.lidGroup,re=O.userData.backlight,ue=Math.min(J/.3,1),oe=Mc.lerp(Math.PI/2,-1.18,ue);Z.rotation.x+=(oe-Z.rotation.x)*.08;const ce=J*Math.PI*1.75-.1;O.rotation.y+=(ce-O.rotation.y)*.055,O.position.y=-.15+Math.sin(R*.95)*.099,A.position.z=Mc.lerp(7,5.4,J),A.position.y=Mc.lerp(1.6,.8,J),A.lookAt(0,.3,0),re&&(re.material.emissiveIntensity=.35+Math.sin(R*1.4)*.15);const H=O.userData.screenGlow;H&&(H.intensity=3+Math.sin(R*2)*.6),R-C>.45&&(C=R,O.userData.updateScreen?.()),y.render(T,A)};return U(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("resize",z),F?.removeEventListener("scroll",X),y.dispose()}},[]);const m=v=>{const g=document.getElementById("scroll-container"),x=g.scrollHeight-g.clientHeight;g.scrollTo({top:v/Ns.length*x,behavior:"smooth"})},p=()=>{const v=`YOUR NAME
Full Stack Developer

Email: hello@yourname.dev
Phone: +91-XXXXXXXXXX
LinkedIn: linkedin.com/in/yourname
GitHub: github.com/yourname

SKILLS
React, TypeScript, Node.js, Three.js, Python, PostgreSQL, Docker, AWS

EXPERIENCE
Senior Developer — Company (2022–Present)
• Scalable web apps serving 50k+ users

EDUCATION
B.Tech CS — University (2019–2023)
`,g=document.createElement("a");g.href=URL.createObjectURL(new Blob([v],{type:"text/plain"})),g.download="YourName_Resume.txt",g.click()};return Le.jsxs("div",{style:{background:"#060609",fontFamily:"'DM Sans','Segoe UI',sans-serif",overflow:"hidden",position:"relative"},children:[Le.jsx("canvas",{ref:s,style:{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:1,pointerEvents:"none"}}),Le.jsx("div",{id:"scroll-container",style:{position:"fixed",inset:0,overflowY:"scroll",zIndex:2},children:Le.jsxs("div",{style:{height:`${Ns.length*100}vh`,position:"relative"},children:[Le.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 44px",background:"linear-gradient(to bottom,rgba(6,6,9,0.9),transparent)"},children:[Le.jsxs("span",{style:{fontSize:20,fontWeight:1e3,color:"#fff",letterSpacing:"0.08em"},children:["<",Le.jsx("span",{style:{color:"#030303"},children:"Nataraj's Portfolio"}),"/>"]}),Le.jsxs("div",{style:{display:"flex",gap:28,alignItems:"center"},children:[Ns.map((v,g)=>Le.jsx("button",{onClick:()=>m(g),style:{background:"none",border:"none",cursor:"pointer",fontSize:12,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:a===g?"#00d4ff":"rgb(0, 0, 0)",transition:"color 0.3s",padding:0},children:v},v)),Le.jsx("button",{onClick:()=>window.open("https://wa.me/918610806443","_blank"),style:Im(!1),children:"Hire Me"})]})]}),Le.jsx("section",{style:Fo(0),children:Le.jsxs("div",{style:Oo("left"),children:[Le.jsx("div",{style:bE,children:"✦ Available for Work"}),Le.jsx("h1",{style:{fontSize:15,fontWeight:800,color:"#fff",margin:"12px 0 6px",letterSpacing:"0.05em"},children:"I'm Natarajan R"}),Le.jsx("div",{style:{overflow:"hidden",whiteSpace:"nowrap",margin:"8px 0 14px",borderTop:"1px solid rgba(0,212,255,0.18)",borderBottom:"1px solid rgba(0,212,255,0.18)",padding:"7px 0"},children:Le.jsxs("span",{style:{display:"inline-block",animation:"marqueeAnim 14s linear infinite",fontSize:13,fontWeight:700,color:"#00d4ff",letterSpacing:"0.04em"},children:[[...Um,...Um].join("  ✦  "),"  "]})}),Le.jsx("p",{style:Rl,children:"Crafting high-performance web experiences with clean code and creative thinking. Open to freelance & full-time roles."}),Le.jsxs("div",{style:{display:"flex",gap:10,marginTop:18,flexWrap:"wrap"},children:[Le.jsx(Jc,{label:"View Work",primary:!0,onClick:()=>m(3)}),Le.jsx(Jc,{label:"⬇ Resume",onClick:p})]})]})}),Le.jsx("section",{style:Fo(1),children:Le.jsxs("div",{style:Oo("right"),children:[Le.jsx(wl,{children:"About Me"}),Le.jsxs(Al,{children:["Crafting Digital",Le.jsx("br",{}),"Experiences"]}),Le.jsx("p",{style:Rl,children:"I'm a passionate developer with 3+ years of experience building scalable web applications. I turn complex ideas into elegant, performant products."}),Le.jsx("p",{style:{...Rl,marginTop:8},children:"Currently open to full-time positions and exciting freelance projects."}),Le.jsx("div",{style:{display:"flex",gap:24,marginTop:18,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.08)"},children:[["3+","Years Exp"],["20+","Projects"],["15+","Clients"]].map(([v,g])=>Le.jsxs("div",{children:[Le.jsx("div",{style:{fontSize:15,fontWeight:800,color:"#00d4ff"},children:v}),Le.jsx("div",{style:{fontSize:12,fontWeight:800,color:"rgb(253, 252, 252)",marginTop:3},children:g})]},g))}),Le.jsx("div",{style:{marginTop:16},children:Le.jsx(Jc,{label:"⬇ Resume",onClick:p})})]})}),Le.jsx("section",{style:Fo(2),children:Le.jsxs("div",{style:Oo("left"),children:[Le.jsx(wl,{children:"Skills"}),Le.jsx(Al,{children:"My Toolkit"}),Le.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:14},children:[["React","#61dafb"],["TypeScript","#3178c6"],["Node.js","#68a063"],["Three.js","#049ef4"],["Python","#f7c948"],["PostgreSQL","#336791"],["GraphQL","#e10098"],["Docker","#2496ed"],["Figma","#f24e1e"],["AWS","#ff9900"]].map(([v,g])=>Le.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.04)",border:`1px solid ${g}55`,borderLeft:`3px solid ${g}`,padding:"8px 12px",borderRadius:7,display:"flex",alignItems:"center",gap:7},children:[Le.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:g,flexShrink:0}}),v]},v))})]})}),Le.jsx("section",{style:Fo(3),children:Le.jsxs("div",{style:Oo("right"),children:[Le.jsx(wl,{children:"Projects"}),Le.jsx(Al,{children:"Selected Work"}),[{name:"E-Commerce Platform",tech:"React · Node · MongoDB",desc:"Full-stack store with payment integration & admin panel.",color:"#00d4ff"},{name:"3D Portfolio",tech:"Three.js · React · GSAP",desc:"Interactive portfolio with WebGL scroll animations.",color:"#7ee8a2"},{name:"AI Analytics Dashboard",tech:"Python · FastAPI · React",desc:"Real-time analytics with ML-powered predictions.",color:"#ffd580"}].map(v=>Le.jsxs("div",{style:{marginTop:12,padding:"14px 16px",borderRadius:9,cursor:"pointer",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderLeft:`3px solid ${v.color}`,transition:"background 0.2s"},children:[Le.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#fff"},children:v.name}),Le.jsx("div",{style:{fontSize:11,fontWeight:700,color:v.color,marginTop:4,letterSpacing:"0.05em"},children:v.tech}),Le.jsx("div",{style:{fontSize:13,fontWeight:800,color:"rgb(255, 255, 255)",marginTop:6,lineHeight:1.65},children:v.desc})]},v.name))]})}),Le.jsx("section",{style:Fo(4),children:Le.jsxs("div",{style:{...Oo("left"),maxWidth:340},children:[Le.jsx(wl,{children:"Contact"}),Le.jsxs(Al,{children:["Let's Work",Le.jsx("br",{}),"Together"]}),Le.jsx("p",{style:Rl,children:"Have a project or opportunity? I'd love to hear from you."}),Le.jsx("div",{style:{display:"flex",flexDirection:"column",gap:9,marginTop:16},children:[{icon:"✉",label:"Email",val:"Send Mail",href:"mailto:natarajsg2026@gmail.com"},{icon:"📱",label:"Whatsapp",val:"Say Hi !",href:"https://wa.me/+918610806443"},{icon:"💼",label:"LinkedIn",val:"linkedin.com/in/yourname",href:"https://linkedin.com"},{icon:"🐙",label:"GitHub",val:"github.com/yourname",href:"https://github.com"}].map(({icon:v,label:g,val:x,href:y})=>Le.jsxs("a",{href:y,target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderRadius:9,textDecoration:"none",background:"rgba(0,212,255,0.06)",border:"1px solid rgba(0,212,255,0.2)",transition:"background 0.2s"},children:[Le.jsx("span",{style:{fontSize:17},children:v}),Le.jsxs("div",{children:[Le.jsx("div",{style:{fontSize:10,color:"#00d4ff",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase"},children:g}),Le.jsx("div",{style:{fontSize:12,color:"#fff",fontWeight:600,marginTop:2},children:x})]})]},g))}),Le.jsxs("div",{style:{display:"flex",gap:10,marginTop:18},children:[Le.jsx("a",{href:"mailto:hello@yourname.dev",style:{flex:1,textAlign:"center",fontSize:11,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",padding:"11px",borderRadius:8,background:"linear-gradient(135deg,#00d4ff,#0077ff)",color:"#fff",boxShadow:"0 0 22px rgba(0,212,255,0.4)"},children:"Send Email"}),Le.jsx("button",{onClick:p,style:{flex:1,fontSize:11,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer",padding:"11px",borderRadius:8,background:"transparent",border:"1px solid rgba(0,212,255,0.45)",color:"#fdfdfd"},children:"⬇ Resume"})]})]})})]})}),Le.jsx("div",{style:{position:"fixed",bottom:26,left:"50%",transform:"translateX(-50%)",zIndex:50},children:Le.jsx("button",{onClick:()=>window.open("https://wa.me/918610806443","_blank"),style:Im(!0),children:"✦ Hire Me"})}),Le.jsx("div",{style:{position:"fixed",top:0,left:0,height:2,zIndex:100,transition:"width 0.08s",width:`${f*100}%`,background:"linear-gradient(to right,#00d4ff,#0077ff)",boxShadow:"0 0 8px #00d4ff"}}),Le.jsx("div",{style:{position:"fixed",right:20,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:50},children:Ns.map((v,g)=>Le.jsx("div",{title:v,onClick:()=>m(g),style:{width:a===g?7:4,height:a===g?22:4,borderRadius:4,cursor:"pointer",transition:"all 0.3s",background:a===g?"#00d4ff":"rgba(53, 52, 52, 0.22)",boxShadow:a===g?"0 0 10px #00d4ff":"none"}},g))}),Le.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:0;}
        @keyframes marqueeAnim{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes hirePulse{0%,100%{box-shadow:0 0 26px rgba(0,212,255,0.55),0 4px 18px rgba(0,0,0,0.5)}50%{box-shadow:0 0 42px rgba(0,212,255,0.9),0 4px 24px rgba(0,0,0,0.6)}}
        a:hover{opacity:0.85;}
      `})]})}function Jc({label:s,primary:e,onClick:n}){return Le.jsx("button",{onClick:n,style:{fontSize:11,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer",padding:"10px 20px",borderRadius:8,border:e?"none":"1px solid rgba(0,212,255,0.45)",background:e?"linear-gradient(135deg,#00d4ff,#0077ff)":"transparent",color:e?"#fff":"#00d4ff",boxShadow:e?"0 0 18px rgba(0,212,255,0.3)":"none"},children:s})}function wl({children:s}){return Le.jsx("p",{style:{fontSize:10,fontWeight:800,color:"#00d4ff",letterSpacing:"0.22em",textTransform:"uppercase",marginBottom:8},children:s})}function Al({children:s}){return Le.jsx("h2",{style:{fontSize:15,fontWeight:800,color:"#fff",lineHeight:1.3,marginBottom:10},children:s})}const Rl={fontSize:14,fontWeight:600,color:"rgb(255, 255, 255)",lineHeight:1.85},bE={display:"inline-flex",alignItems:"center",gap:5,fontSize:10,fontWeight:800,color:"#00d4ff",letterSpacing:"0.14em",textTransform:"uppercase",padding:"4px 12px",borderRadius:20,background:"rgba(0,212,255,0.1)",border:"1px solid rgba(0,212,255,0.3)",marginBottom:4},Im=s=>({fontSize:s?12:11,fontWeight:800,letterSpacing:"0.13em",textTransform:"uppercase",padding:s?"12px 34px":"8px 18px",borderRadius:40,cursor:"pointer",background:"linear-gradient(135deg,#00d4ff,#0077ff)",color:"#fff",border:"none",animation:s?"hirePulse 2.5s ease-in-out infinite":"none",boxShadow:s?"0 0 26px rgba(0,212,255,0.55),0 4px 18px rgba(0,0,0,0.5)":"0 0 16px rgba(0,212,255,0.3)"});function Fo(s){return{position:"absolute",top:`${s*100}vh`,left:0,right:0,height:"100vh",display:"flex",alignItems:"center",padding:"0 44px",pointerEvents:"auto"}}function Oo(s){return{display:"flex",flexDirection:"column",maxWidth:330,marginLeft:s==="left"?"1%":"auto",marginRight:s==="right"?"1%":"auto",background:"rgba(7,9,16,0.85)",backdropFilter:"blur(18px)",padding:"26px 26px",borderRadius:14,border:"1px solid rgba(0,212,255,0.18)",borderLeft:s==="left"?"3px solid #00d4ff":"1px solid rgba(0,212,255,0.18)",borderRight:s==="right"?"3px solid #00d4ff":"1px solid rgba(0,212,255,0.18)",boxShadow:"0 8px 48px rgba(0,0,0,0.65),inset 0 0 0 1px rgba(255,255,255,0.03)"}}function LE(){return Le.jsx(PE,{})}r0.createRoot(document.getElementById("root")).render(Le.jsx(Z_.StrictMode,{children:Le.jsx(LE,{})}));
