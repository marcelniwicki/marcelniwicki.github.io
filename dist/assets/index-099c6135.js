(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function dl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function fl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?Zy(s):fl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(ve(t))return t}}const Yy=/;(?![^(]*\))/g,Jy=/:([^]+)/,Xy=/\/\*.*?\*\//gs;function Zy(t){const e={};return t.replace(Xy,"").split(Yy).forEach(n=>{if(n){const s=n.split(Jy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pl(t){let e="";if(Ve(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=pl(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tv=dl(ev);function pf(t){return!!t||t===""}function nv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ko(t[s],e[s]);return n}function Ko(t,e){if(t===e)return!0;let n=Ju(t),s=Ju(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Vr(t),s=Vr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?nv(t,e):!1;if(n=ve(t),s=ve(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ko(t[o],e[o]))return!1}}return String(t)===String(e)}function sv(t,e){return t.findIndex(n=>Ko(n,e))}const ke=t=>Ve(t)?t:t==null?"":z(t)||ve(t)&&(t.toString===yf||!ee(t.toString))?JSON.stringify(t,gf,2):String(t),gf=(t,e)=>e&&e.__v_isRef?gf(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!z(e)&&!vf(e)?String(e):e,we={},Ns=[],Dt=()=>{},rv=()=>!1,iv=/^on[^a-z]/,Go=t=>iv.test(t),gl=t=>t.startsWith("onUpdate:"),it=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,ae=(t,e)=>ov.call(t,e),z=Array.isArray,Os=t=>li(t)==="[object Map]",Wo=t=>li(t)==="[object Set]",Ju=t=>li(t)==="[object Date]",ee=t=>typeof t=="function",Ve=t=>typeof t=="string",Vr=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",mf=t=>ve(t)&&ee(t.then)&&ee(t.catch),yf=Object.prototype.toString,li=t=>yf.call(t),av=t=>li(t).slice(8,-1),vf=t=>li(t)==="[object Object]",yl=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,Gt=Qo(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,tr=Qo(t=>t.replace(lv,"-$1").toLowerCase()),Yo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Va=Qo(t=>t?`on${Yo(t)}`:""),Br=(t,e)=>!Object.is(t,e),Qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const uv=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Rt;class hv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function dv(t,e=Rt){e&&e.active&&e.effects.push(t)}function fv(){return Rt}const vl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_f=t=>(t.w&On)>0,wf=t=>(t.n&On)>0,pv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=On},gv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];_f(r)&&!wf(r)?r.delete(t):e[n++]=r,r.w&=~On,r.n&=~On}e.length=n}},yc=new WeakMap;let Ir=0,On=1;const vc=30;let kt;const ss=Symbol(""),_c=Symbol("");class _l{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dv(this,s)}run(){if(!this.active)return this.fn();let e=kt,n=bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,bn=!0,On=1<<++Ir,Ir<=vc?pv(this):Zu(this),this.fn()}finally{Ir<=vc&&gv(this),On=1<<--Ir,kt=this.parent,bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Zu(this),this.onStop&&this.onStop(),this.active=!1)}}function Zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bn=!0;const Ef=[];function nr(){Ef.push(bn),bn=!1}function sr(){const t=Ef.pop();bn=t===void 0?!0:t}function ft(t,e,n){if(bn&&kt){let s=yc.get(t);s||yc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=vl()),If(r)}}function If(t,e){let n=!1;Ir<=vc?wf(t)||(t.n|=On,n=!_f(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function an(t,e,n,s,r,i){const o=yc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?yl(n)&&a.push(o.get("length")):(a.push(o.get(ss)),Os(t)&&a.push(o.get(_c)));break;case"delete":z(t)||(a.push(o.get(ss)),Os(t)&&a.push(o.get(_c)));break;case"set":Os(t)&&a.push(o.get(ss));break}if(a.length===1)a[0]&&wc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);wc(vl(c))}}function wc(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&eh(s);for(const s of n)s.computed||eh(s)}function eh(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mv=dl("__proto__,__v_isRef,__isVue"),bf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr)),yv=wl(),vv=wl(!1,!0),_v=wl(!0),th=wv();function wv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)ft(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const s=le(this)[e].apply(this,n);return sr(),s}}),t}function Ev(t){const e=le(this);return ft(e,"has",t),e.hasOwnProperty(t)}function wl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Uv:Rf:e?Af:Sf).get(s))return s;const o=z(s);if(!t){if(o&&ae(th,r))return Reflect.get(th,r,i);if(r==="hasOwnProperty")return Ev}const a=Reflect.get(s,r,i);return(Vr(r)?bf.has(r):mv(r))||(t||ft(s,"get",r),e)?a:nt(a)?o&&yl(r)?a:a.value:ve(a)?t?kf(a):rr(a):a}}const Iv=Tf(),bv=Tf(!0);function Tf(t=!1){return function(n,s,r,i){let o=n[s];if(Bs(o)&&nt(o)&&!nt(r))return!1;if(!t&&(!uo(r)&&!Bs(r)&&(o=le(o),r=le(r)),!z(n)&&nt(o)&&!nt(r)))return o.value=r,!0;const a=z(n)&&yl(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===le(i)&&(a?Br(r,o)&&an(n,"set",s,r):an(n,"add",s,r)),c}}function Tv(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&an(t,"delete",e,void 0),s}function Cv(t,e){const n=Reflect.has(t,e);return(!Vr(e)||!bf.has(e))&&ft(t,"has",e),n}function Sv(t){return ft(t,"iterate",z(t)?"length":ss),Reflect.ownKeys(t)}const Cf={get:yv,set:Iv,deleteProperty:Tv,has:Cv,ownKeys:Sv},Av={get:_v,set(t,e){return!0},deleteProperty(t,e){return!0}},Rv=it({},Cf,{get:vv,set:bv}),El=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function Pi(t,e,n=!1,s=!1){t=t.__v_raw;const r=le(t),i=le(e);n||(e!==i&&ft(r,"get",e),ft(r,"get",i));const{has:o}=Jo(r),a=s?El:n?Tl:jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function xi(t,e=!1){const n=this.__v_raw,s=le(n),r=le(t);return e||(t!==r&&ft(s,"has",t),ft(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Li(t,e=!1){return t=t.__v_raw,!e&&ft(le(t),"iterate",ss),Reflect.get(t,"size",t)}function nh(t){t=le(t);const e=le(this);return Jo(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function sh(t,e){e=le(e);const n=le(this),{has:s,get:r}=Jo(n);let i=s.call(n,t);i||(t=le(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Br(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function rh(t){const e=le(this),{has:n,get:s}=Jo(e);let r=n.call(e,t);r||(t=le(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&an(e,"delete",t,void 0),i}function ih(){const t=le(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Mi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=le(o),c=e?El:t?Tl:jr;return!t&&ft(a,"iterate",ss),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ui(t,e,n){return function(...s){const r=this.__v_raw,i=le(r),o=Os(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?El:e?Tl:jr;return!e&&ft(i,"iterate",c?_c:ss),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function kv(){const t={get(i){return Pi(this,i)},get size(){return Li(this)},has:xi,add:nh,set:sh,delete:rh,clear:ih,forEach:Mi(!1,!1)},e={get(i){return Pi(this,i,!1,!0)},get size(){return Li(this)},has:xi,add:nh,set:sh,delete:rh,clear:ih,forEach:Mi(!1,!0)},n={get(i){return Pi(this,i,!0)},get size(){return Li(this,!0)},has(i){return xi.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Mi(!0,!1)},s={get(i){return Pi(this,i,!0,!0)},get size(){return Li(this,!0)},has(i){return xi.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ui(i,!1,!1),n[i]=Ui(i,!0,!1),e[i]=Ui(i,!1,!0),s[i]=Ui(i,!0,!0)}),[t,n,e,s]}const[Nv,Ov,Dv,Pv]=kv();function Il(t,e){const n=e?t?Pv:Dv:t?Ov:Nv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const xv={get:Il(!1,!1)},Lv={get:Il(!1,!0)},Mv={get:Il(!0,!1)},Sf=new WeakMap,Af=new WeakMap,Rf=new WeakMap,Uv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $v(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(av(t))}function rr(t){return Bs(t)?t:bl(t,!1,Cf,xv,Sf)}function Vv(t){return bl(t,!1,Rv,Lv,Af)}function kf(t){return bl(t,!0,Av,Mv,Rf)}function bl(t,e,n,s,r){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=$v(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ds(t){return Bs(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function uo(t){return!!(t&&t.__v_isShallow)}function Nf(t){return Ds(t)||Bs(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Of(t){return co(t,"__v_skip",!0),t}const jr=t=>ve(t)?rr(t):t,Tl=t=>ve(t)?kf(t):t;function Df(t){bn&&kt&&(t=le(t),If(t.dep||(t.dep=vl())))}function Pf(t,e){t=le(t);const n=t.dep;n&&wc(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Bv(t){return xf(t,!1)}function jv(t){return xf(t,!0)}function xf(t,e){return nt(t)?t:new qv(t,e)}class qv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:jr(e)}get value(){return Df(this),this._value}set value(e){const n=this.__v_isShallow||uo(e)||Bs(e);e=n?e:le(e),Br(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),Pf(this))}}function Ps(t){return nt(t)?t.value:t}const Hv={get:(t,e,n)=>Ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return nt(r)&&!nt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Lf(t){return Ds(t)?t:new Proxy(t,Hv)}var Mf;class zv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Mf]=!1,this._dirty=!0,this.effect=new _l(e,()=>{this._dirty||(this._dirty=!0,Pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=le(this);return Df(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Mf="__v_isReadonly";function Kv(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=Dt):(s=t.get,r=t.set),new zv(s,r,i||!r,n)}function Tn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Xo(i,e,n)}return r}function It(t,e,n,s){if(ee(t)){const i=Tn(t,e,n,s);return i&&mf(i)&&i.catch(o=>{Xo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(It(t[i],e,n,s));return r}function Xo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Tn(c,null,10,[t,o,a]);return}}Gv(t,n,r,s)}function Gv(t,e,n,s=!0){console.error(t)}let qr=!1,Ec=!1;const et=[];let Bt=0;const xs=[];let Xt=null,Gn=0;const Uf=Promise.resolve();let Cl=null;function Ff(t){const e=Cl||Uf;return t?e.then(this?t.bind(this):t):e}function Wv(t){let e=Bt+1,n=et.length;for(;e<n;){const s=e+n>>>1;Hr(et[s])<t?e=s+1:n=s}return e}function Sl(t){(!et.length||!et.includes(t,qr&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?et.push(t):et.splice(Wv(t.id),0,t),$f())}function $f(){!qr&&!Ec&&(Ec=!0,Cl=Uf.then(Bf))}function Qv(t){const e=et.indexOf(t);e>Bt&&et.splice(e,1)}function Yv(t){z(t)?xs.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?Gn+1:Gn))&&xs.push(t),$f()}function oh(t,e=qr?Bt+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function Vf(t){if(xs.length){const e=[...new Set(xs)];if(xs.length=0,Xt){Xt.push(...e);return}for(Xt=e,Xt.sort((n,s)=>Hr(n)-Hr(s)),Gn=0;Gn<Xt.length;Gn++)Xt[Gn]();Xt=null,Gn=0}}const Hr=t=>t.id==null?1/0:t.id,Jv=(t,e)=>{const n=Hr(t)-Hr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bf(t){Ec=!1,qr=!0,et.sort(Jv);const e=Dt;try{for(Bt=0;Bt<et.length;Bt++){const n=et[Bt];n&&n.active!==!1&&Tn(n,null,14)}}finally{Bt=0,et.length=0,Vf(),qr=!1,Cl=null,(et.length||xs.length)&&Bf()}}function Xv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(r=n.map(g=>Ve(g)?g.trim():g)),h&&(r=n.map(lo))}let a,c=s[a=Va(e)]||s[a=Va(Gt(e))];!c&&i&&(c=s[a=Va(tr(e))]),c&&It(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(l,t,6,r)}}function jf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=jf(l,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):it(o,i),ve(t)&&s.set(t,o),o)}function Zo(t,e){return!t||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,tr(e))||ae(t,e))}let yt=null,qf=null;function ho(t){const e=yt;return yt=t,qf=t&&t.type.__scopeId||null,e}function Zv(t,e=yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&mh(-1);const i=ho(e);let o;try{o=t(...r)}finally{ho(i),s._d&&mh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ba(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:w,inheritAttrs:_}=t;let N,R;const U=ho(t);try{if(n.shapeFlag&4){const Y=r||s;N=Vt(u.call(Y,Y,h,i,g,d,w)),R=c}else{const Y=e;N=Vt(Y.length>1?Y(i,{attrs:c,slots:a,emit:l}):Y(i,null)),R=e.props?c:e_(c)}}catch(Y){Or.length=0,Xo(Y,t,1),N=Me(xt)}let P=N;if(R&&_!==!1){const Y=Object.keys(R),{shapeFlag:ie}=P;Y.length&&ie&7&&(o&&Y.some(gl)&&(R=t_(R,o)),P=Pn(P,R))}return n.dirs&&(P=Pn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),N=P,ho(U),N}const e_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Go(n))&&((e||(e={}))[n]=t[n]);return e},t_=(t,e)=>{const n={};for(const s in t)(!gl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function n_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ah(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Zo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ah(s,o,l):!0:!!o;return!1}function ah(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Zo(n,i))return!0}return!1}function s_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const r_=t=>t.__isSuspense;function i_(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Yv(t)}function Yi(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Pt(t,e,n=!1){const s=Ne||yt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}const Fi={};function Ls(t,e,n){return Hf(t,e,n)}function Hf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){const a=fv()===(Ne==null?void 0:Ne.scope)?Ne:null;let c,l=!1,u=!1;if(nt(t)?(c=()=>t.value,l=uo(t)):Ds(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(P=>Ds(P)||uo(P)),c=()=>t.map(P=>{if(nt(P))return P.value;if(Ds(P))return Xn(P);if(ee(P))return Tn(P,a,2)})):ee(t)?e?c=()=>Tn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[d])}:c=Dt,e&&s){const P=c;c=()=>Xn(P())}let h,d=P=>{h=R.onStop=()=>{Tn(P,a,4)}},g;if(Kr)if(d=Dt,e?n&&It(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const P=tw();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Dt;let w=u?new Array(t.length).fill(Fi):Fi;const _=()=>{if(R.active)if(e){const P=R.run();(s||l||(u?P.some((Y,ie)=>Br(Y,w[ie])):Br(P,w)))&&(h&&h(),It(e,a,3,[P,w===Fi?void 0:u&&w[0]===Fi?[]:w,d]),w=P)}else R.run()};_.allowRecurse=!!e;let N;r==="sync"?N=_:r==="post"?N=()=>ht(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),N=()=>Sl(_));const R=new _l(c,N);e?n?_():w=R.run():r==="post"?ht(R.run.bind(R),a&&a.suspense):R.run();const U=()=>{R.stop(),a&&a.scope&&ml(a.scope.effects,R)};return g&&g.push(U),U}function o_(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?zf(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Ne;js(this);const a=Hf(r,i.bind(s),n);return o?js(o):is(),a}function zf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Xn(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))Xn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(Wo(t)||Os(t))t.forEach(n=>{Xn(n,e)});else if(vf(t))for(const n in t)Xn(t[n],e);return t}function a_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yf(()=>{t.isMounted=!0}),Jf(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],c_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=G_(),s=a_();let r;return()=>{const i=e.default&&Gf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==xt){o=_;break}}const a=le(t),{mode:c}=a;if(s.isLeaving)return ja(o);const l=ch(o);if(!l)return ja(o);const u=Ic(l,a,s,n);bc(l,u);const h=n.subTree,d=h&&ch(h);let g=!1;const{getTransitionKey:w}=l.type;if(w){const _=w();r===void 0?r=_:_!==r&&(r=_,g=!0)}if(d&&d.type!==xt&&(!Wn(l,d)||g)){const _=Ic(d,a,s,n);if(bc(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ja(o);c==="in-out"&&l.type!==xt&&(_.delayLeave=(N,R,U)=>{const P=Kf(s,d);P[String(d.key)]=d,N._leaveCb=()=>{R(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=U})}return o}}},l_=c_;function Kf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ic(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:_,onAppear:N,onAfterAppear:R,onAppearCancelled:U}=e,P=String(t.key),Y=Kf(n,t),ie=(J,_e)=>{J&&It(J,s,9,_e)},Ce=(J,_e)=>{const ge=_e[1];ie(J,_e),z(J)?J.every(Ge=>Ge.length<=1)&&ge():J.length<=1&&ge()},Ue={mode:i,persisted:o,beforeEnter(J){let _e=a;if(!n.isMounted)if(r)_e=_||a;else return;J._leaveCb&&J._leaveCb(!0);const ge=Y[P];ge&&Wn(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),ie(_e,[J])},enter(J){let _e=c,ge=l,Ge=u;if(!n.isMounted)if(r)_e=N||c,ge=R||l,Ge=U||u;else return;let We=!1;const Tt=J._enterCb=Yt=>{We||(We=!0,Yt?ie(Ge,[J]):ie(ge,[J]),Ue.delayedLeave&&Ue.delayedLeave(),J._enterCb=void 0)};_e?Ce(_e,[J,Tt]):Tt()},leave(J,_e){const ge=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return _e();ie(h,[J]);let Ge=!1;const We=J._leaveCb=Tt=>{Ge||(Ge=!0,_e(),Tt?ie(w,[J]):ie(g,[J]),J._leaveCb=void 0,Y[ge]===t&&delete Y[ge])};Y[ge]=t,d?Ce(d,[J,We]):We()},clone(J){return Ic(J,e,n,s)}};return Ue}function ja(t){if(ea(t))return t=Pn(t),t.children=null,t}function ch(t){return ea(t)?t.children?t.children[0]:void 0:t}function bc(t,e){t.shapeFlag&6&&t.component?bc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ae?(o.patchFlag&128&&r++,s=s.concat(Gf(o.children,e,a))):(e||o.type!==xt)&&s.push(a!=null?Pn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Wf(t){return ee(t)?{setup:t,name:t.name}:t}const Ji=t=>!!t.type.__asyncLoader,ea=t=>t.type.__isKeepAlive;function u_(t,e){Qf(t,"a",e)}function h_(t,e){Qf(t,"da",e)}function Qf(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ta(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ea(r.parent.vnode)&&d_(s,e,n,r),r=r.parent}}function d_(t,e,n,s){const r=ta(e,t,s,!0);Xf(()=>{ml(s[e],r)},n)}function ta(t,e,n=Ne,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr(),js(n);const a=It(e,n,t,o);return is(),sr(),a});return s?r.unshift(i):r.push(i),i}}const fn=t=>(e,n=Ne)=>(!Kr||t==="sp")&&ta(t,(...s)=>e(...s),n),f_=fn("bm"),Yf=fn("m"),p_=fn("bu"),g_=fn("u"),Jf=fn("bum"),Xf=fn("um"),m_=fn("sp"),y_=fn("rtg"),v_=fn("rtc");function __(t,e=Ne){ta("ec",t,e)}function Cn(t,e){const n=yt;if(n===null)return t;const s=ra(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function qn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(nr(),It(c,n,8,[t.el,a,t,e]),sr())}}const Zf="components";function Dn(t,e){return E_(Zf,t,!0,e)||t}const w_=Symbol();function E_(t,e,n=!0,s=!1){const r=yt||Ne;if(r){const i=r.type;if(t===Zf){const a=X_(i,!1);if(a&&(a===e||a===Gt(e)||a===Yo(Gt(e))))return i}const o=lh(r[t]||i[t],e)||lh(r.appContext[t],e);return!o&&s?i:o}}function lh(t,e){return t&&(t[e]||t[Gt(e)]||t[Yo(Gt(e))])}function rs(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ve(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Tc=t=>t?hp(t)?ra(t)||t.proxy:Tc(t.parent):null,Nr=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tc(t.parent),$root:t=>Tc(t.root),$emit:t=>t.emit,$options:t=>Al(t),$forceUpdate:t=>t.f||(t.f=()=>Sl(t.update)),$nextTick:t=>t.n||(t.n=Ff.bind(t.proxy)),$watch:t=>o_.bind(t)}),qa=(t,e)=>t!==we&&!t.__isScriptSetup&&ae(t,e),I_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(qa(s,e))return o[e]=1,s[e];if(r!==we&&ae(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];Cc&&(o[e]=0)}}const u=Nr[e];let h,d;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return qa(r,e)?(r[e]=n,!0):s!==we&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ae(t,o)||qa(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(Nr,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Cc=!0;function b_(t){const e=Al(t),n=t.proxy,s=t.ctx;Cc=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:w,activated:_,deactivated:N,beforeDestroy:R,beforeUnmount:U,destroyed:P,unmounted:Y,render:ie,renderTracked:Ce,renderTriggered:Ue,errorCaptured:J,serverPrefetch:_e,expose:ge,inheritAttrs:Ge,components:We,directives:Tt,filters:Yt}=e;if(l&&T_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const de=o[me];ee(de)&&(s[me]=de.bind(n))}if(r){const me=r.call(n,n);ve(me)&&(t.data=rr(me))}if(Cc=!0,i)for(const me in i){const de=i[me],Ct=ee(de)?de.bind(n,n):ee(de.get)?de.get.bind(n,n):Dt,jn=!ee(de)&&ee(de.set)?de.set.bind(n):Dt,St=wt({get:Ct,set:jn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>St.value,set:ut=>St.value=ut})}if(a)for(const me in a)ep(a[me],s,n,me);if(c){const me=ee(c)?c.call(n):c;Reflect.ownKeys(me).forEach(de=>{Yi(de,me[de])})}u&&uh(u,t,"c");function Oe(me,de){z(de)?de.forEach(Ct=>me(Ct.bind(n))):de&&me(de.bind(n))}if(Oe(f_,h),Oe(Yf,d),Oe(p_,g),Oe(g_,w),Oe(u_,_),Oe(h_,N),Oe(__,J),Oe(v_,Ce),Oe(y_,Ue),Oe(Jf,U),Oe(Xf,Y),Oe(m_,_e),z(ge))if(ge.length){const me=t.exposed||(t.exposed={});ge.forEach(de=>{Object.defineProperty(me,de,{get:()=>n[de],set:Ct=>n[de]=Ct})})}else t.exposed||(t.exposed={});ie&&t.render===Dt&&(t.render=ie),Ge!=null&&(t.inheritAttrs=Ge),We&&(t.components=We),Tt&&(t.directives=Tt)}function T_(t,e,n=Dt,s=!1){z(t)&&(t=Sc(t));for(const r in t){const i=t[r];let o;ve(i)?"default"in i?o=Pt(i.from||r,i.default,!0):o=Pt(i.from||r):o=Pt(i),nt(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function uh(t,e,n){It(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ep(t,e,n,s){const r=s.includes(".")?zf(n,s):()=>n[s];if(Ve(t)){const i=e[t];ee(i)&&Ls(r,i)}else if(ee(t))Ls(r,t.bind(n));else if(ve(t))if(z(t))t.forEach(i=>ep(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Ls(r,i,t)}}function Al(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>fo(c,l,o,!0)),fo(c,e,o)),ve(e)&&i.set(e,c),c}function fo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&fo(t,i,n,!0),r&&r.forEach(o=>fo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=C_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const C_={data:hh,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:zn,directives:zn,watch:A_,provide:hh,inject:S_};function hh(t,e){return e?t?function(){return it(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function S_(t,e){return zn(Sc(t),Sc(e))}function Sc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?it(it(Object.create(null),t),e):e}function A_(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const s in e)n[s]=ct(t[s],e[s]);return n}function R_(t,e,n,s=!1){const r={},i={};co(i,sa,1),t.propsDefaults=Object.create(null),tp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Vv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function k_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=le(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Zo(t.emitsOptions,d))continue;const g=e[d];if(c)if(ae(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const w=Gt(d);r[w]=Ac(c,a,w,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{tp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=tr(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ac(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&an(t,"set","$attrs")}function tp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wi(c))continue;const l=e[c];let u;r&&ae(r,u=Gt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ac(r,c,h,l[h],t,!ae(l,h))}}return o}function Ac(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(js(r),s=l[n]=c.call(null,e),is())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===tr(n))&&(s=!0))}return s}function np(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,g]=np(h,e,!0);it(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ve(t)&&s.set(t,Ns),Ns;if(z(i))for(let u=0;u<i.length;u++){const h=Gt(i[u]);dh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Gt(u);if(dh(h)){const d=i[u],g=o[h]=z(d)||ee(d)?{type:d}:Object.assign({},d);if(g){const w=gh(Boolean,g.type),_=gh(String,g.type);g[0]=w>-1,g[1]=_<0||w<_,(w>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return ve(t)&&s.set(t,l),l}function dh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ph(t,e){return fh(t)===fh(e)}function gh(t,e){return z(e)?e.findIndex(n=>ph(n,t)):ee(e)&&ph(e,t)?0:-1}const sp=t=>t[0]==="_"||t==="$stable",Rl=t=>z(t)?t.map(Vt):[Vt(t)],N_=(t,e,n)=>{if(e._n)return e;const s=Zv((...r)=>Rl(e(...r)),n);return s._c=!1,s},rp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(sp(r))continue;const i=t[r];if(ee(i))e[r]=N_(r,i,s);else if(i!=null){const o=Rl(i);e[r]=()=>o}}},ip=(t,e)=>{const n=Rl(e);t.slots.default=()=>n},O_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),co(e,"_",n)):rp(e,t.slots={})}else t.slots={},e&&ip(t,e);co(t.slots,sa,1)},D_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(r,e),!n&&a===1&&delete r._):(i=!e.$stable,rp(e,r)),o=e}else e&&(ip(t,e),o={default:1});if(i)for(const a in r)!sp(a)&&!(a in o)&&delete r[a]};function op(){return{app:null,config:{isNativeTag:rv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P_=0;function x_(t,e){return function(s,r=null){ee(s)||(s=Object.assign({},s)),r!=null&&!ve(r)&&(r=null);const i=op(),o=new Set;let a=!1;const c=i.app={_uid:P_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:nw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Me(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ra(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Rc(t,e,n,s,r=!1){if(z(t)){t.forEach((d,g)=>Rc(d,e&&(z(e)?e[g]:e),n,s,r));return}if(Ji(s)&&!r)return;const i=s.shapeFlag&4?ra(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),ee(c))Tn(c,a,12,[o,u]);else{const d=Ve(c),g=nt(c);if(d||g){const w=()=>{if(t.f){const _=d?ae(h,c)?h[c]:u[c]:c.value;r?z(_)&&ml(_,i):z(_)?_.includes(i)||_.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,ht(w,n)):w()}}}const ht=i_;function L_(t){return M_(t)}function M_(t,e){const n=uv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Dt,insertStaticContent:w}=t,_=(f,p,m,v=null,b=null,A=null,D=!1,S=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Wn(f,p)&&(v=O(f),ut(f,b,A,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:T,ref:q,shapeFlag:F}=p;switch(T){case na:N(f,p,m,v);break;case xt:R(f,p,m,v);break;case Xi:f==null&&U(p,m,v,D);break;case Ae:We(f,p,m,v,b,A,D,S,k);break;default:F&1?ie(f,p,m,v,b,A,D,S,k):F&6?Tt(f,p,m,v,b,A,D,S,k):(F&64||F&128)&&T.process(f,p,m,v,b,A,D,S,k,oe)}q!=null&&b&&Rc(q,f&&f.ref,A,p||f,!p)},N=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},R=(f,p,m,v)=>{f==null?s(p.el=c(p.children||""),m,v):p.el=f.el},U=(f,p,m,v)=>{[f.el,f.anchor]=w(f.children,p,m,v,f.el,f.anchor)},P=({el:f,anchor:p},m,v)=>{let b;for(;f&&f!==p;)b=d(f),s(f,m,v),f=b;s(p,m,v)},Y=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ie=(f,p,m,v,b,A,D,S,k)=>{D=D||p.type==="svg",f==null?Ce(p,m,v,b,A,D,S,k):_e(f,p,b,A,D,S,k)},Ce=(f,p,m,v,b,A,D,S)=>{let k,T;const{type:q,props:F,shapeFlag:H,transition:Q,dirs:ne}=f;if(k=f.el=o(f.type,A,F&&F.is,F),H&8?u(k,f.children):H&16&&J(f.children,k,null,v,b,A&&q!=="foreignObject",D,S),ne&&qn(f,null,v,"created"),Ue(k,f,f.scopeId,D,v),F){for(const fe in F)fe!=="value"&&!Wi(fe)&&i(k,fe,null,F[fe],A,f.children,v,b,x);"value"in F&&i(k,"value",null,F.value),(T=F.onVnodeBeforeMount)&&$t(T,v,f)}ne&&qn(f,null,v,"beforeMount");const ye=(!b||b&&!b.pendingBranch)&&Q&&!Q.persisted;ye&&Q.beforeEnter(k),s(k,p,m),((T=F&&F.onVnodeMounted)||ye||ne)&&ht(()=>{T&&$t(T,v,f),ye&&Q.enter(k),ne&&qn(f,null,v,"mounted")},b)},Ue=(f,p,m,v,b)=>{if(m&&g(f,m),v)for(let A=0;A<v.length;A++)g(f,v[A]);if(b){let A=b.subTree;if(p===A){const D=b.vnode;Ue(f,D,D.scopeId,D.slotScopeIds,b.parent)}}},J=(f,p,m,v,b,A,D,S,k=0)=>{for(let T=k;T<f.length;T++){const q=f[T]=S?vn(f[T]):Vt(f[T]);_(null,q,p,m,v,b,A,D,S)}},_e=(f,p,m,v,b,A,D)=>{const S=p.el=f.el;let{patchFlag:k,dynamicChildren:T,dirs:q}=p;k|=f.patchFlag&16;const F=f.props||we,H=p.props||we;let Q;m&&Hn(m,!1),(Q=H.onVnodeBeforeUpdate)&&$t(Q,m,p,f),q&&qn(p,f,m,"beforeUpdate"),m&&Hn(m,!0);const ne=b&&p.type!=="foreignObject";if(T?ge(f.dynamicChildren,T,S,m,v,ne,A):D||de(f,p,S,null,m,v,ne,A,!1),k>0){if(k&16)Ge(S,p,F,H,m,v,b);else if(k&2&&F.class!==H.class&&i(S,"class",null,H.class,b),k&4&&i(S,"style",F.style,H.style,b),k&8){const ye=p.dynamicProps;for(let fe=0;fe<ye.length;fe++){const De=ye[fe],At=F[De],Is=H[De];(Is!==At||De==="value")&&i(S,De,At,Is,b,f.children,m,v,x)}}k&1&&f.children!==p.children&&u(S,p.children)}else!D&&T==null&&Ge(S,p,F,H,m,v,b);((Q=H.onVnodeUpdated)||q)&&ht(()=>{Q&&$t(Q,m,p,f),q&&qn(p,f,m,"updated")},v)},ge=(f,p,m,v,b,A,D)=>{for(let S=0;S<p.length;S++){const k=f[S],T=p[S],q=k.el&&(k.type===Ae||!Wn(k,T)||k.shapeFlag&70)?h(k.el):m;_(k,T,q,null,v,b,A,D,!0)}},Ge=(f,p,m,v,b,A,D)=>{if(m!==v){if(m!==we)for(const S in m)!Wi(S)&&!(S in v)&&i(f,S,m[S],null,D,p.children,b,A,x);for(const S in v){if(Wi(S))continue;const k=v[S],T=m[S];k!==T&&S!=="value"&&i(f,S,T,k,D,p.children,b,A,x)}"value"in v&&i(f,"value",m.value,v.value)}},We=(f,p,m,v,b,A,D,S,k)=>{const T=p.el=f?f.el:a(""),q=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:Q}=p;Q&&(S=S?S.concat(Q):Q),f==null?(s(T,m,v),s(q,m,v),J(p.children,m,q,b,A,D,S,k)):F>0&&F&64&&H&&f.dynamicChildren?(ge(f.dynamicChildren,H,m,b,A,D,S),(p.key!=null||b&&p===b.subTree)&&ap(f,p,!0)):de(f,p,m,q,b,A,D,S,k)},Tt=(f,p,m,v,b,A,D,S,k)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?b.ctx.activate(p,m,v,D,k):Yt(p,m,v,b,A,D,k):vr(f,p,k)},Yt=(f,p,m,v,b,A,D)=>{const S=f.component=K_(f,v,b);if(ea(f)&&(S.ctx.renderer=oe),W_(S),S.asyncDep){if(b&&b.registerDep(S,Oe),!f.el){const k=S.subTree=Me(xt);R(null,k,p,m)}return}Oe(S,f,p,m,b,A,D)},vr=(f,p,m)=>{const v=p.component=f.component;if(n_(f,p,m))if(v.asyncDep&&!v.asyncResolved){me(v,p,m);return}else v.next=p,Qv(v.update),v.update();else p.el=f.el,v.vnode=p},Oe=(f,p,m,v,b,A,D)=>{const S=()=>{if(f.isMounted){let{next:q,bu:F,u:H,parent:Q,vnode:ne}=f,ye=q,fe;Hn(f,!1),q?(q.el=ne.el,me(f,q,D)):q=ne,F&&Qi(F),(fe=q.props&&q.props.onVnodeBeforeUpdate)&&$t(fe,Q,q,ne),Hn(f,!0);const De=Ba(f),At=f.subTree;f.subTree=De,_(At,De,h(At.el),O(At),f,b,A),q.el=De.el,ye===null&&s_(f,De.el),H&&ht(H,b),(fe=q.props&&q.props.onVnodeUpdated)&&ht(()=>$t(fe,Q,q,ne),b)}else{let q;const{el:F,props:H}=p,{bm:Q,m:ne,parent:ye}=f,fe=Ji(p);if(Hn(f,!1),Q&&Qi(Q),!fe&&(q=H&&H.onVnodeBeforeMount)&&$t(q,ye,p),Hn(f,!0),F&&te){const De=()=>{f.subTree=Ba(f),te(F,f.subTree,f,b,null)};fe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&De()):De()}else{const De=f.subTree=Ba(f);_(null,De,m,v,f,b,A),p.el=De.el}if(ne&&ht(ne,b),!fe&&(q=H&&H.onVnodeMounted)){const De=p;ht(()=>$t(q,ye,De),b)}(p.shapeFlag&256||ye&&Ji(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&ht(f.a,b),f.isMounted=!0,p=m=v=null}},k=f.effect=new _l(S,()=>Sl(T),f.scope),T=f.update=()=>k.run();T.id=f.uid,Hn(f,!0),T()},me=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,k_(f,p.props,v,m),D_(f,p.children,m),nr(),oh(),sr()},de=(f,p,m,v,b,A,D,S,k=!1)=>{const T=f&&f.children,q=f?f.shapeFlag:0,F=p.children,{patchFlag:H,shapeFlag:Q}=p;if(H>0){if(H&128){jn(T,F,m,v,b,A,D,S,k);return}else if(H&256){Ct(T,F,m,v,b,A,D,S,k);return}}Q&8?(q&16&&x(T,b,A),F!==T&&u(m,F)):q&16?Q&16?jn(T,F,m,v,b,A,D,S,k):x(T,b,A,!0):(q&8&&u(m,""),Q&16&&J(F,m,v,b,A,D,S,k))},Ct=(f,p,m,v,b,A,D,S,k)=>{f=f||Ns,p=p||Ns;const T=f.length,q=p.length,F=Math.min(T,q);let H;for(H=0;H<F;H++){const Q=p[H]=k?vn(p[H]):Vt(p[H]);_(f[H],Q,m,null,b,A,D,S,k)}T>q?x(f,b,A,!0,!1,F):J(p,m,v,b,A,D,S,k,F)},jn=(f,p,m,v,b,A,D,S,k)=>{let T=0;const q=p.length;let F=f.length-1,H=q-1;for(;T<=F&&T<=H;){const Q=f[T],ne=p[T]=k?vn(p[T]):Vt(p[T]);if(Wn(Q,ne))_(Q,ne,m,null,b,A,D,S,k);else break;T++}for(;T<=F&&T<=H;){const Q=f[F],ne=p[H]=k?vn(p[H]):Vt(p[H]);if(Wn(Q,ne))_(Q,ne,m,null,b,A,D,S,k);else break;F--,H--}if(T>F){if(T<=H){const Q=H+1,ne=Q<q?p[Q].el:v;for(;T<=H;)_(null,p[T]=k?vn(p[T]):Vt(p[T]),m,ne,b,A,D,S,k),T++}}else if(T>H)for(;T<=F;)ut(f[T],b,A,!0),T++;else{const Q=T,ne=T,ye=new Map;for(T=ne;T<=H;T++){const mt=p[T]=k?vn(p[T]):Vt(p[T]);mt.key!=null&&ye.set(mt.key,T)}let fe,De=0;const At=H-ne+1;let Is=!1,Wu=0;const _r=new Array(At);for(T=0;T<At;T++)_r[T]=0;for(T=Q;T<=F;T++){const mt=f[T];if(De>=At){ut(mt,b,A,!0);continue}let Ft;if(mt.key!=null)Ft=ye.get(mt.key);else for(fe=ne;fe<=H;fe++)if(_r[fe-ne]===0&&Wn(mt,p[fe])){Ft=fe;break}Ft===void 0?ut(mt,b,A,!0):(_r[Ft-ne]=T+1,Ft>=Wu?Wu=Ft:Is=!0,_(mt,p[Ft],m,null,b,A,D,S,k),De++)}const Qu=Is?U_(_r):Ns;for(fe=Qu.length-1,T=At-1;T>=0;T--){const mt=ne+T,Ft=p[mt],Yu=mt+1<q?p[mt+1].el:v;_r[T]===0?_(null,Ft,m,Yu,b,A,D,S,k):Is&&(fe<0||T!==Qu[fe]?St(Ft,m,Yu,2):fe--)}}},St=(f,p,m,v,b=null)=>{const{el:A,type:D,transition:S,children:k,shapeFlag:T}=f;if(T&6){St(f.component.subTree,p,m,v);return}if(T&128){f.suspense.move(p,m,v);return}if(T&64){D.move(f,p,m,oe);return}if(D===Ae){s(A,p,m);for(let F=0;F<k.length;F++)St(k[F],p,m,v);s(f.anchor,p,m);return}if(D===Xi){P(f,p,m);return}if(v!==2&&T&1&&S)if(v===0)S.beforeEnter(A),s(A,p,m),ht(()=>S.enter(A),b);else{const{leave:F,delayLeave:H,afterLeave:Q}=S,ne=()=>s(A,p,m),ye=()=>{F(A,()=>{ne(),Q&&Q()})};H?H(A,ne,ye):ye()}else s(A,p,m)},ut=(f,p,m,v=!1,b=!1)=>{const{type:A,props:D,ref:S,children:k,dynamicChildren:T,shapeFlag:q,patchFlag:F,dirs:H}=f;if(S!=null&&Rc(S,null,m,f,!0),q&256){p.ctx.deactivate(f);return}const Q=q&1&&H,ne=!Ji(f);let ye;if(ne&&(ye=D&&D.onVnodeBeforeUnmount)&&$t(ye,p,f),q&6)I(f.component,m,v);else{if(q&128){f.suspense.unmount(m,v);return}Q&&qn(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,m,b,oe,v):T&&(A!==Ae||F>0&&F&64)?x(T,p,m,!1,!0):(A===Ae&&F&384||!b&&q&16)&&x(k,p,m),v&&Es(f)}(ne&&(ye=D&&D.onVnodeUnmounted)||Q)&&ht(()=>{ye&&$t(ye,p,f),Q&&qn(f,null,p,"unmounted")},m)},Es=f=>{const{type:p,el:m,anchor:v,transition:b}=f;if(p===Ae){Di(m,v);return}if(p===Xi){Y(f);return}const A=()=>{r(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:D,delayLeave:S}=b,k=()=>D(m,A);S?S(f.el,A,k):k()}else A()},Di=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},I=(f,p,m)=>{const{bum:v,scope:b,update:A,subTree:D,um:S}=f;v&&Qi(v),b.stop(),A&&(A.active=!1,ut(D,f,p,m)),S&&ht(S,p),ht(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(f,p,m,v=!1,b=!1,A=0)=>{for(let D=A;D<f.length;D++)ut(f[D],p,m,v,b)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),B=(f,p,m)=>{f==null?p._vnode&&ut(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,m),oh(),Vf(),p._vnode=f},oe={p:_,um:ut,m:St,r:Es,mt:Yt,mc:J,pc:de,pbc:ge,n:O,o:t};let Se,te;return e&&([Se,te]=e(oe)),{render:B,hydrate:Se,createApp:x_(B,Se)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ap(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vn(r[i]),a.el=o.el),n||ap(o,a)),a.type===na&&(a.el=o.el)}}function U_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const F_=t=>t.__isTeleport,Ae=Symbol(void 0),na=Symbol(void 0),xt=Symbol(void 0),Xi=Symbol(void 0),Or=[];let Nt=null;function pe(t=!1){Or.push(Nt=t?null:[])}function $_(){Or.pop(),Nt=Or[Or.length-1]||null}let zr=1;function mh(t){zr+=t}function cp(t){return t.dynamicChildren=zr>0?Nt||Ns:null,$_(),zr>0&&Nt&&Nt.push(t),t}function be(t,e,n,s,r,i){return cp(y(t,e,n,s,r,i,!0))}function po(t,e,n,s,r){return cp(Me(t,e,n,s,r,!0))}function kc(t){return t?t.__v_isVNode===!0:!1}function Wn(t,e){return t.type===e.type&&t.key===e.key}const sa="__vInternal",lp=({key:t})=>t??null,Zi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||nt(t)||ee(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,r=null,i=t===Ae?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lp(e),ref:e&&Zi(e),scopeId:qf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(kl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),zr>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Me=V_;function V_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===w_)&&(t=xt),kc(t)){const a=Pn(t,e,!0);return n&&kl(a,n),zr>0&&!i&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(t)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(Z_(t)&&(t=t.__vccOpts),e){e=B_(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=pl(a)),ve(c)&&(Nf(c)&&!z(c)&&(c=it({},c)),e.style=fl(c))}const o=Ve(t)?1:r_(t)?128:F_(t)?64:ve(t)?4:ee(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function B_(t){return t?Nf(t)||sa in t?it({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?q_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lp(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Zi(e)):[r,Zi(e)]:Zi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Nc(t=" ",e=0){return Me(na,null,t,e)}function up(t,e){const n=Me(Xi,null,t);return n.staticCount=e,n}function j_(t="",e=!1){return e?(pe(),po(xt,null,t)):Me(xt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?Me(xt):z(t)?Me(Ae,null,t.slice()):typeof t=="object"?vn(t):Me(na,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function kl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),kl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(sa in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[Nc(e)]):n=8);t.children=e,t.shapeFlag|=n}function q_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=pl([e.class,s.class]));else if(r==="style")e.style=fl([e.style,s.style]);else if(Go(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){It(t,e,7,[n,s])}const H_=op();let z_=0;function K_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||H_,i={uid:z_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new hv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(s,r),emitsOptions:jf(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xv.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const G_=()=>Ne||yt,js=t=>{Ne=t,t.scope.on()},is=()=>{Ne&&Ne.scope.off(),Ne=null};function hp(t){return t.vnode.shapeFlag&4}let Kr=!1;function W_(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,r=hp(t);R_(t,n,r,e),O_(t,s);const i=r?Q_(t,e):void 0;return Kr=!1,i}function Q_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Of(new Proxy(t.ctx,I_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?J_(t):null;js(t),nr();const i=Tn(s,t,0,[t.props,r]);if(sr(),is(),mf(i)){if(i.then(is,is),e)return i.then(o=>{yh(t,o,e)}).catch(o=>{Xo(o,t,0)});t.asyncDep=i}else yh(t,i,e)}else dp(t,e)}function yh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Lf(e)),dp(t,n)}let vh;function dp(t,e,n){const s=t.type;if(!t.render){if(!e&&vh&&!s.render){const r=s.template||Al(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=it(it({isCustomElement:i,delimiters:a},o),c);s.render=vh(r,l)}}t.render=s.render||Dt}js(t),nr(),b_(t),sr(),is()}function Y_(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function J_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Y_(t))},slots:t.slots,emit:t.emit,expose:e}}function ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lf(Of(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nr)return Nr[n](t)},has(e,n){return n in e||n in Nr}}))}function X_(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function Z_(t){return ee(t)&&"__vccOpts"in t}const wt=(t,e)=>Kv(t,e,Kr);function fp(t,e,n){const s=arguments.length;return s===2?ve(e)&&!z(e)?kc(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kc(n)&&(n=[n]),Me(t,e,n))}const ew=Symbol(""),tw=()=>Pt(ew),nw="3.2.47",sw="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,_h=Qn&&Qn.createElement("template"),rw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Qn.createElementNS(sw,t):Qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_h.innerHTML=s?`<svg>${t}</svg>`:t;const a=_h.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function iw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ow(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){if(e&&!Ve(e))for(const i in e)n[i]==null&&Oc(s,i,"");for(const i in n)Oc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const wh=/\s*!important$/;function Oc(t,e,n){if(z(n))n.forEach(s=>Oc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=aw(t,e);wh.test(n)?t.setProperty(tr(s),n.replace(wh,""),"important"):t[s]=n}}const Eh=["Webkit","Moz","ms"],Ha={};function aw(t,e){const n=Ha[e];if(n)return n;let s=Gt(e);if(s!=="filter"&&s in t)return Ha[e]=s;s=Yo(s);for(let r=0;r<Eh.length;r++){const i=Eh[r]+s;if(i in t)return Ha[e]=i}return e}const Ih="http://www.w3.org/1999/xlink";function cw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n);else{const i=tv(e);n==null||i&&!pf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function lw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Yn(t,e,n,s){t.addEventListener(e,n,s)}function uw(t,e,n,s){t.removeEventListener(e,n,s)}function hw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=dw(e);if(s){const l=i[e]=gw(s,r);Yn(t,a,l,c)}else o&&(uw(t,a,o,c),i[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function dw(t){let e;if(bh.test(t)){e={};let s;for(;s=t.match(bh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let za=0;const fw=Promise.resolve(),pw=()=>za||(fw.then(()=>za=0),za=Date.now());function gw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(mw(s,n.value),e,5,[s])};return n.value=t,n.attached=pw(),n}function mw(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Th=/^on[a-z]/,yw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?iw(t,s,r):e==="style"?ow(t,n,s):Go(e)?gl(e)||hw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vw(t,e,s,r))?lw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cw(t,e,s,r))};function vw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&Ve(n)?!1:e in t}const _w={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};l_.props;const go=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Qi(e,n):e};function ww(t){t.target.composing=!0}function Ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qs={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=go(r);const i=s||r.props&&r.props.type==="number";Yn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=lo(a)),t._assign(a)}),n&&Yn(t,"change",()=>{t.value=t.value.trim()}),e||(Yn(t,"compositionstart",ww),Yn(t,"compositionend",Ch),Yn(t,"change",Ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=go(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&lo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Sh={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Wo(e);Yn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?lo(mo(o)):mo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=go(s)},mounted(t,{value:e}){Ah(t,e)},beforeUpdate(t,e,n){t._assign=go(n)},updated(t,{value:e}){Ah(t,e)}};function Ah(t,e){const n=t.multiple;if(!(n&&!z(e)&&!Wo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=mo(i);if(n)z(e)?i.selected=sv(e,o)>-1:i.selected=e.has(o);else if(Ko(mo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function mo(t){return"_value"in t?t._value:t.value}const Ew=["ctrl","shift","alt","meta"],Iw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ew.some(n=>t[`${n}Key`]&&!e.includes(n))},Nl=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Iw[e[r]];if(i&&i(n,e))return}return t(n,...s)},bw=it({patchProp:yw},rw);let Rh;function Tw(){return Rh||(Rh=L_(bw))}const Cw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Sw(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sw(t){return Ve(t)?document.querySelector(t):t}function Aw(){return pp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function pp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Rw=typeof Proxy=="function",kw="devtools-plugin:setup",Nw="plugin:settings:set";let bs,Dc;function Ow(){var t;return bs!==void 0||(typeof window<"u"&&window.performance?(bs=!0,Dc=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(bs=!0,Dc=global.perf_hooks.performance):bs=!1),bs}function Dw(){return Ow()?Dc.now():Date.now()}class Pw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return Dw()}},n&&n.on(Nw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function xw(t,e){const n=t,s=pp(),r=Aw(),i=Rw&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(kw,t,e);else{const o=i?new Pw(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof window<"u";function Lw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ka(t,e){const n={};for(const s in e){const r=e[s];n[s]=Lt(r)?r.map(t):t(r)}return n}const Dr=()=>{},Lt=Array.isArray,Mw=/\/$/,Uw=t=>t.replace(Mw,"");function Ga(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Bw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Fw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $w(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&gp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vw(t[n],e[n]))return!1;return!0}function Vw(t,e){return Lt(t)?Nh(t,e):Lt(e)?Nh(e,t):t===e}function Nh(t,e){return Lt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Bw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Gr;(function(t){t.pop="pop",t.push="push"})(Gr||(Gr={}));var Pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pr||(Pr={}));function jw(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Uw(t)}const qw=/^[^#]+#/;function Hw(t,e){return t.replace(qw,"#")+e}function zw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Oh(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function Gw(t,e){Pc.set(t,e)}function Ww(t){const e=Pc.get(t);return Pc.delete(t),e}let Qw=()=>location.protocol+"//"+location.host;function mp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),kh(c,"")}return kh(n,t)+s+r}function Yw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=mp(t,location),w=n.value,_=e.value;let N=0;if(d){if(n.value=g,e.value=d,o&&o===w){o=null;return}N=_?d.position-_.position:0}else s(g);r.forEach(R=>{R(n.value,w,{delta:N,type:Gr.pop,direction:N?N>0?Pr.forward:Pr.back:Pr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const w=r.indexOf(d);w>-1&&r.splice(w,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:ia()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Dh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ia():null}}function Jw(t){const{history:e,location:n}=window,s={value:mp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Qw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,Dh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:ia()});i(u.current,u,!0);const h=he({},Dh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Xw(t){t=jw(t);const e=Jw(t),n=Yw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:Hw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Zw(t){return typeof t=="string"||t&&typeof t=="object"}function yp(t){return typeof t=="string"||typeof t=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vp=Symbol("");var Ph;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ph||(Ph={}));function zs(t,e){return he(new Error,{type:t,[vp]:!0},e)}function Jt(t,e){return t instanceof Error&&vp in t&&(e==null||!!(t.type&e))}const xh="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},tE=/[.+*?^${}()[\]/\\]/g;function nE(t,e){const n=he({},eE,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(tE,"\\$&"),g+=40;else if(d.type===1){const{value:w,repeatable:_,optional:N,regexp:R}=d;i.push({name:w,repeatable:_,optional:N});const U=R||xh;if(U!==xh){g+=10;try{new RegExp(`(${U})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${w}" (${U}): `+Y.message)}}let P=_?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=N&&l.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),r+=P,g+=20,N&&(g+=-8),_&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",w=i[d-1];h[w.name]=g&&w.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:_,optional:N}=g,R=w in l?l[w]:"";if(Lt(R)&&!_)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const U=Lt(R)?R.join("/"):R;if(!U)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function sE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rE(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=sE(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Lh(s))return 1;if(Lh(r))return-1}return r.length-s.length}function Lh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iE={type:0,value:""},oE=/[a-zA-Z0-9_]/;function aE(t){if(!t)return[[]];if(t==="/")return[[iE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:oE.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function cE(t,e,n){const s=nE(aE(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lE(t,e){const n=[],s=new Map;e=Fh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,w=uE(u);w.aliasOf=d&&d.record;const _=Fh(e,u),N=[w];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const Y of P)N.push(he({},w,{components:d?d.record.components:w.components,path:Y,aliasOf:d?d.record:w}))}let R,U;for(const P of N){const{path:Y}=P;if(h&&Y[0]!=="/"){const ie=h.record.path,Ce=ie[ie.length-1]==="/"?"":"/";P.path=h.record.path+(Y&&Ce+Y)}if(R=cE(P,h,_),d?d.alias.push(R):(U=U||R,U!==R&&U.alias.push(R),g&&u.name&&!Uh(R)&&o(u.name)),w.children){const ie=w.children;for(let Ce=0;Ce<ie.length;Ce++)i(ie[Ce],R,d&&d.children[Ce])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return U?()=>{o(U)}:Dr}function o(u){if(yp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&rE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!_p(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Uh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},w,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw zs(1,{location:u});_=d.record.name,g=he(Mh(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Mh(u.params,d.keys.map(U=>U.name))),w=d.stringify(g)}else if("path"in u)w=u.path,d=n.find(U=>U.re.test(w)),d&&(g=d.parse(w),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw zs(1,{location:u,currentLocation:h});_=d.record.name,g=he({},h.params,u.params),w=d.stringify(g)}const N=[];let R=d;for(;R;)N.unshift(R.record),R=R.parent;return{name:_,path:w,params:g,matched:N,meta:dE(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Mh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function uE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Uh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dE(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Fh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _p(t,e){return e.children.some(n=>n===t||_p(t,n))}const wp=/#/g,fE=/&/g,pE=/\//g,gE=/=/g,mE=/\?/g,Ep=/\+/g,yE=/%5B/g,vE=/%5D/g,Ip=/%5E/g,_E=/%60/g,bp=/%7B/g,wE=/%7C/g,Tp=/%7D/g,EE=/%20/g;function Ol(t){return encodeURI(""+t).replace(wE,"|").replace(yE,"[").replace(vE,"]")}function IE(t){return Ol(t).replace(bp,"{").replace(Tp,"}").replace(Ip,"^")}function xc(t){return Ol(t).replace(Ep,"%2B").replace(EE,"+").replace(wp,"%23").replace(fE,"%26").replace(_E,"`").replace(bp,"{").replace(Tp,"}").replace(Ip,"^")}function bE(t){return xc(t).replace(gE,"%3D")}function TE(t){return Ol(t).replace(wp,"%23").replace(mE,"%3F")}function CE(t){return t==null?"":TE(t).replace(pE,"%2F")}function yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function SE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ep," "),o=i.indexOf("="),a=yo(o<0?i:i.slice(0,o)),c=o<0?null:yo(i.slice(o+1));if(a in e){let l=e[a];Lt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function $h(t){let e="";for(let n in t){const s=t[n];if(n=bE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(s)?s.map(i=>i&&xc(i)):[s&&xc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function AE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Lt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const RE=Symbol(""),Vh=Symbol(""),oa=Symbol(""),Cp=Symbol(""),Lc=Symbol("");function wr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function _n(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(zs(4,{from:n,to:e})):h instanceof Error?a(h):Zw(h)?a(zs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Wa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(kE(a)){const l=(a.__vccOpts||a)[e];l&&r.push(_n(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Lw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&_n(d,n,s,i,o)()}))}}return r}function kE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bh(t){const e=Pt(oa),n=Pt(Cp),s=wt(()=>e.resolve(Ps(t.to))),r=wt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Hs.bind(null,u));if(d>-1)return d;const g=jh(c[l-2]);return l>1&&jh(u)===g&&h[h.length-1].path!==g?h.findIndex(Hs.bind(null,c[l-2])):d}),i=wt(()=>r.value>-1&&PE(n.params,s.value.params)),o=wt(()=>r.value>-1&&r.value===n.matched.length-1&&gp(n.params,s.value.params));function a(c={}){return DE(c)?e[Ps(t.replace)?"replace":"push"](Ps(t.to)).catch(Dr):Promise.resolve()}return{route:s,href:wt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const NE=Wf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bh,setup(t,{slots:e}){const n=rr(Bh(t)),{options:s}=Pt(oa),r=wt(()=>({[qh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:fp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),OE=NE;function DE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Lt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function jh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qh=(t,e,n)=>t??e??n,xE=Wf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Pt(Lc),r=wt(()=>t.route||s.value),i=Pt(Vh,0),o=wt(()=>{let l=Ps(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=wt(()=>r.value.matched[o.value]);Yi(Vh,wt(()=>o.value+1)),Yi(RE,a),Yi(Lc,r);const c=Bv();return Ls(()=>[c.value,a.value,t.name],([l,u,h],[d,g,w])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Hs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Hh(n.default,{Component:d,route:l});const g=h.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=fp(d,he({},w,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Hh(n.default,{Component:N,route:l})||N}}});function Hh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const LE=xE;function ME(t){const e=lE(t.routes,t),n=t.parseQuery||SE,s=t.stringifyQuery||$h,r=t.history,i=wr(),o=wr(),a=wr(),c=jv(mn);let l=mn;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ka.bind(null,I=>""+I),h=Ka.bind(null,CE),d=Ka.bind(null,yo);function g(I,x){let O,B;return yp(I)?(O=e.getRecordMatcher(I),B=x):B=I,e.addRoute(B,O)}function w(I){const x=e.getRecordMatcher(I);x&&e.removeRoute(x)}function _(){return e.getRoutes().map(I=>I.record)}function N(I){return!!e.getRecordMatcher(I)}function R(I,x){if(x=he({},x||c.value),typeof I=="string"){const f=Ga(n,I,x.path),p=e.resolve({path:f.path},x),m=r.createHref(f.fullPath);return he(f,p,{params:d(p.params),hash:yo(f.hash),redirectedFrom:void 0,href:m})}let O;if("path"in I)O=he({},I,{path:Ga(n,I.path,x.path).path});else{const f=he({},I.params);for(const p in f)f[p]==null&&delete f[p];O=he({},I,{params:h(I.params)}),x.params=h(x.params)}const B=e.resolve(O,x),oe=I.hash||"";B.params=u(d(B.params));const Se=Fw(s,he({},I,{hash:IE(oe),path:B.path})),te=r.createHref(Se);return he({fullPath:Se,hash:oe,query:s===$h?AE(I.query):I.query||{}},B,{redirectedFrom:void 0,href:te})}function U(I){return typeof I=="string"?Ga(n,I,c.value.path):he({},I)}function P(I,x){if(l!==I)return zs(8,{from:x,to:I})}function Y(I){return Ue(I)}function ie(I){return Y(he(U(I),{replace:!0}))}function Ce(I){const x=I.matched[I.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let B=typeof O=="function"?O(I):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=U(B):{path:B},B.params={}),he({query:I.query,hash:I.hash,params:"path"in B?{}:I.params},B)}}function Ue(I,x){const O=l=R(I),B=c.value,oe=I.state,Se=I.force,te=I.replace===!0,f=Ce(O);if(f)return Ue(he(U(f),{state:typeof f=="object"?he({},oe,f.state):oe,force:Se,replace:te}),x||O);const p=O;p.redirectedFrom=x;let m;return!Se&&$w(s,B,O)&&(m=zs(16,{to:p,from:B}),jn(B,B,!0,!1)),(m?Promise.resolve(m):_e(p,B)).catch(v=>Jt(v)?Jt(v,2)?v:Ct(v):me(v,p,B)).then(v=>{if(v){if(Jt(v,2))return Ue(he({replace:te},U(v.to),{state:typeof v.to=="object"?he({},oe,v.to.state):oe,force:Se}),x||p)}else v=Ge(p,B,!0,te,oe);return ge(p,B,v),v})}function J(I,x){const O=P(I,x);return O?Promise.reject(O):Promise.resolve()}function _e(I,x){let O;const[B,oe,Se]=UE(I,x);O=Wa(B.reverse(),"beforeRouteLeave",I,x);for(const f of B)f.leaveGuards.forEach(p=>{O.push(_n(p,I,x))});const te=J.bind(null,I,x);return O.push(te),Ts(O).then(()=>{O=[];for(const f of i.list())O.push(_n(f,I,x));return O.push(te),Ts(O)}).then(()=>{O=Wa(oe,"beforeRouteUpdate",I,x);for(const f of oe)f.updateGuards.forEach(p=>{O.push(_n(p,I,x))});return O.push(te),Ts(O)}).then(()=>{O=[];for(const f of I.matched)if(f.beforeEnter&&!x.matched.includes(f))if(Lt(f.beforeEnter))for(const p of f.beforeEnter)O.push(_n(p,I,x));else O.push(_n(f.beforeEnter,I,x));return O.push(te),Ts(O)}).then(()=>(I.matched.forEach(f=>f.enterCallbacks={}),O=Wa(Se,"beforeRouteEnter",I,x),O.push(te),Ts(O))).then(()=>{O=[];for(const f of o.list())O.push(_n(f,I,x));return O.push(te),Ts(O)}).catch(f=>Jt(f,8)?f:Promise.reject(f))}function ge(I,x,O){for(const B of a.list())B(I,x,O)}function Ge(I,x,O,B,oe){const Se=P(I,x);if(Se)return Se;const te=x===mn,f=Ss?history.state:{};O&&(B||te?r.replace(I.fullPath,he({scroll:te&&f&&f.scroll},oe)):r.push(I.fullPath,oe)),c.value=I,jn(I,x,O,te),Ct()}let We;function Tt(){We||(We=r.listen((I,x,O)=>{if(!Di.listening)return;const B=R(I),oe=Ce(B);if(oe){Ue(he(oe,{replace:!0}),B).catch(Dr);return}l=B;const Se=c.value;Ss&&Gw(Oh(Se.fullPath,O.delta),ia()),_e(B,Se).catch(te=>Jt(te,12)?te:Jt(te,2)?(Ue(te.to,B).then(f=>{Jt(f,20)&&!O.delta&&O.type===Gr.pop&&r.go(-1,!1)}).catch(Dr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),me(te,B,Se))).then(te=>{te=te||Ge(B,Se,!1),te&&(O.delta&&!Jt(te,8)?r.go(-O.delta,!1):O.type===Gr.pop&&Jt(te,20)&&r.go(-1,!1)),ge(B,Se,te)}).catch(Dr)}))}let Yt=wr(),vr=wr(),Oe;function me(I,x,O){Ct(I);const B=vr.list();return B.length?B.forEach(oe=>oe(I,x,O)):console.error(I),Promise.reject(I)}function de(){return Oe&&c.value!==mn?Promise.resolve():new Promise((I,x)=>{Yt.add([I,x])})}function Ct(I){return Oe||(Oe=!I,Tt(),Yt.list().forEach(([x,O])=>I?O(I):x()),Yt.reset()),I}function jn(I,x,O,B){const{scrollBehavior:oe}=t;if(!Ss||!oe)return Promise.resolve();const Se=!O&&Ww(Oh(I.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return Ff().then(()=>oe(I,x,Se)).then(te=>te&&Kw(te)).catch(te=>me(te,I,x))}const St=I=>r.go(I);let ut;const Es=new Set,Di={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:N,getRoutes:_,resolve:R,options:t,push:Y,replace:ie,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:vr.add,isReady:de,install(I){const x=this;I.component("RouterLink",OE),I.component("RouterView",LE),I.config.globalProperties.$router=x,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ps(c)}),Ss&&!ut&&c.value===mn&&(ut=!0,Y(r.location).catch(oe=>{}));const O={};for(const oe in mn)O[oe]=wt(()=>c.value[oe]);I.provide(oa,x),I.provide(Cp,rr(O)),I.provide(Lc,c);const B=I.unmount;Es.add(I),I.unmount=function(){Es.delete(I),Es.size<1&&(l=mn,We&&We(),We=null,c.value=mn,ut=!1,Oe=!1),B()}}};return Di}function Ts(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function UE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hs(l,c))||r.push(c))}return[n,s,r]}function xn(){return Pt(oa)}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Sp="store";function ir(t){return t===void 0&&(t=null),Pt(t!==null?t:Sp)}function or(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function FE(t){return t!==null&&typeof t=="object"}function $E(t){return t&&typeof t.then=="function"}function VE(t,e){return function(){return t(e)}}function Ap(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Rp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;aa(t,n,[],t._modules.root,!0),Dl(t,n,e)}function Dl(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};or(r,function(o,a){i[a]=VE(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=rr({data:e}),t.strict&&zE(t),s&&n&&t._withCommit(function(){s.data=null})}function aa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Pl(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=BE(t,o,n);s.forEachMutation(function(u,h){var d=o+h;jE(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;qE(t,d,g,l)}),s.forEachGetter(function(u,h){var d=o+h;HE(t,d,u,l)}),s.forEachChild(function(u,h){aa(t,e,n.concat(h),u,r)})}function BE(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=vo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=vo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return kp(t,e)}},state:{get:function(){return Pl(t.state,n)}}}),r}function kp(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function jE(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function qE(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return $E(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function HE(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function zE(t){Ls(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Pl(t,e){return e.reduce(function(n,s){return n[s]},t)}function vo(t,e,n){return FE(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var KE="vuex bindings",zh="vuex:mutations",Qa="vuex:actions",Cs="vuex",GE=0;function WE(t,e){xw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[KE]},function(n){n.addTimelineLayer({id:zh,label:"Vuex Mutations",color:Kh}),n.addTimelineLayer({id:Qa,label:"Vuex Actions",color:Kh}),n.addInspector({id:Cs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Cs)if(s.filter){var r=[];Pp(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Dp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Cs){var r=s.nodeId;kp(e,r),s.state=JE(ZE(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Cs){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Cs),n.sendInspectorState(Cs),n.addTimelineEvent({layerId:zh,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=GE++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Qa,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Qa,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Kh=8702998,QE=6710886,YE=16777215,Np={label:"namespaced",textColor:YE,backgroundColor:QE};function Op(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Dp(t,e){return{id:e||"root",label:Op(e),tags:t.namespaced?[Np]:[],children:Object.keys(t._children).map(function(n){return Dp(t._children[n],e+n+"/")})}}function Pp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Np]:[]}),Object.keys(e._children).forEach(function(r){Pp(t,e._children[r],n,s+r+"/")})}function JE(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=XE(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Op(o):o,editable:!1,value:Mc(function(){return i[o]})}})}return r}function XE(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Mc(function(){return t[n]})}else e[n]=Mc(function(){return t[n]})}),e}function ZE(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Mc(t){try{return t()}catch(e){return e}}var Ut=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},xp={namespaced:{configurable:!0}};xp.namespaced.get=function(){return!!this._rawModule.namespaced};Ut.prototype.addChild=function(e,n){this._children[e]=n};Ut.prototype.removeChild=function(e){delete this._children[e]};Ut.prototype.getChild=function(e){return this._children[e]};Ut.prototype.hasChild=function(e){return e in this._children};Ut.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ut.prototype.forEachChild=function(e){or(this._children,e)};Ut.prototype.forEachGetter=function(e){this._rawModule.getters&&or(this._rawModule.getters,e)};Ut.prototype.forEachAction=function(e){this._rawModule.actions&&or(this._rawModule.actions,e)};Ut.prototype.forEachMutation=function(e){this._rawModule.mutations&&or(this._rawModule.mutations,e)};Object.defineProperties(Ut.prototype,xp);var gs=function(e){this.register([],e,!1)};gs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};gs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};gs.prototype.update=function(e){Lp([],this.root,e)};gs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Ut(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&or(n.modules,function(a,c){r.register(e.concat(c),a,s)})};gs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};gs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Lp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Lp(t.concat(s),e.getChild(s),n.modules[s])}}function eI(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new gs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,w){return l.call(o,d,g,w)},this.strict=r;var u=this._modules.root.state;aa(this,u,[],this._modules.root),Dl(this,u),s.forEach(function(h){return h(n)})},xl={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||Sp,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&WE(e,this)};xl.state.get=function(){return this._state.data};xl.state.set=function(t){};gt.prototype.commit=function(e,n,s){var r=this,i=vo(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};gt.prototype.dispatch=function(e,n){var s=this,r=vo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};gt.prototype.subscribe=function(e,n){return Ap(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Ap(s,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,s){var r=this;return Ls(function(){return e(r.state,r.getters)},n,Object.assign({},s))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),aa(this,this.state,e,this._modules.get(e),s.preserveState),Dl(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Pl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Rp(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),Rp(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,xl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new nI;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const w=l<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sI=function(t){const e=Mp(t);return Up.encodeByteArray(e,!0)},_o=function(t){return sI(t).replace(/\./g,"")},Fp=function(t){try{return Up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,oI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fp(t[1]);return e&&JSON.parse(e)},Ll=()=>{try{return iI()||oI()||aI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$p=t=>{var e,n;return(n=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cI=t=>{const e=$p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lI=()=>{var t;return(t=Ll())===null||t===void 0?void 0:t.config},Vp=t=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_o(JSON.stringify(n)),_o(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function fI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gI(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mI(){try{return typeof indexedDB=="object"}catch{return!1}}function yI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vI,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?_I(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new pn(r,a,s)}}function _I(t,e){return t.replace(wI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Gh(i)&&Gh(o)){if(!wo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function br(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Tr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function II(t,e){const n=new bI(t,e);return n.subscribe.bind(n)}class bI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ya),r.error===void 0&&(r.error=Ya),r.complete===void 0&&(r.complete=Ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new uI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SI(t){return t===Kn?void 0:t}function AI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const kI={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},NI=ce.INFO,OI={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},DI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=OI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=NI,this._logHandler=DI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const PI=(t,e)=>e.some(n=>t instanceof n);let Wh,Qh;function xI(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LI(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,Uc=new WeakMap,jp=new WeakMap,Ja=new WeakMap,Ul=new WeakMap;function MI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),Ul.set(e,t),e}function UI(t){if(Uc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FI(t){Fc=t(Fc)}function $I(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xa(this),e,...n);return jp.set(s,e.sort?e.sort():[e]),Sn(s)}:LI().includes(t)?function(...e){return t.apply(Xa(this),e),Sn(Bp.get(this))}:function(...e){return Sn(t.apply(Xa(this),e))}}function VI(t){return typeof t=="function"?$I(t):(t instanceof IDBTransaction&&UI(t),PI(t,xI())?new Proxy(t,Fc):t)}function Sn(t){if(t instanceof IDBRequest)return MI(t);if(Ja.has(t))return Ja.get(t);const e=VI(t);return e!==t&&(Ja.set(t,e),Ul.set(e,t)),e}const Xa=t=>Ul.get(t);function BI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const jI=["get","getKey","getAll","getAllKeys","count"],qI=["put","add","delete","clear"],Za=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Za.set(e,i),i}FI(t=>({...t,get:(e,n,s)=>Yh(e,n)||t.get(e,n,s),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",Jh="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Ml("@firebase/app"),KI="@firebase/app-compat",GI="@firebase/analytics-compat",WI="@firebase/analytics",QI="@firebase/app-check-compat",YI="@firebase/app-check",JI="@firebase/auth",XI="@firebase/auth-compat",ZI="@firebase/database",eb="@firebase/database-compat",tb="@firebase/functions",nb="@firebase/functions-compat",sb="@firebase/installations",rb="@firebase/installations-compat",ib="@firebase/messaging",ob="@firebase/messaging-compat",ab="@firebase/performance",cb="@firebase/performance-compat",lb="@firebase/remote-config",ub="@firebase/remote-config-compat",hb="@firebase/storage",db="@firebase/storage-compat",fb="@firebase/firestore",pb="@firebase/firestore-compat",gb="firebase",mb="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",yb={[$c]:"fire-core",[KI]:"fire-core-compat",[WI]:"fire-analytics",[GI]:"fire-analytics-compat",[YI]:"fire-app-check",[QI]:"fire-app-check-compat",[JI]:"fire-auth",[XI]:"fire-auth-compat",[ZI]:"fire-rtdb",[eb]:"fire-rtdb-compat",[tb]:"fire-fn",[nb]:"fire-fn-compat",[sb]:"fire-iid",[rb]:"fire-iid-compat",[ib]:"fire-fcm",[ob]:"fire-fcm-compat",[ab]:"fire-perf",[cb]:"fire-perf-compat",[lb]:"fire-rc",[ub]:"fire-rc-compat",[hb]:"fire-gcs",[db]:"fire-gcs-compat",[fb]:"fire-fst",[pb]:"fire-fst-compat","fire-js":"fire-js",[gb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map,Bc=new Map;function vb(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Bc.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,t);for(const n of Eo.values())vb(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},An=new ui("app","Firebase",_b);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=mb;function qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw An.create("bad-app-name",{appName:String(r)});if(n||(n=lI()),!n)throw An.create("no-options");const i=Eo.get(r);if(i){if(wo(n,i.options)&&wo(s,i.config))return i;throw An.create("duplicate-app",{appName:r})}const o=new RI(r);for(const c of Bc.values())o.addComponent(c);const a=new wb(n,s,o);return Eo.set(r,a),a}function Hp(t=Vc){const e=Eo.get(t);if(!e&&t===Vc)return qp();if(!e)throw An.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let r=(s=yb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Ks(new ls(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="firebase-heartbeat-database",Ib=1,Wr="firebase-heartbeat-store";let ec=null;function zp(){return ec||(ec=BI(Eb,Ib,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wr)}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),ec}async function bb(t){try{return(await zp()).transaction(Wr).objectStore(Wr).get(Kp(t))}catch(e){if(e instanceof pn)us.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function Xh(t,e){try{const s=(await zp()).transaction(Wr,"readwrite");return await s.objectStore(Wr).put(e,Kp(t)),s.done}catch(n){if(n instanceof pn)us.warn(n.message);else{const s=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(s.message)}}}function Kp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1024,Cb=30*24*60*60*1e3;class Sb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Cb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zh(),{heartbeatsToSend:n,unsentEntries:s}=Ab(this._heartbeatsCache.heartbeats),r=_o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Zh(){return new Date().toISOString().substring(0,10)}function Ab(t,e=Tb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mI()?yI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ed(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){Ks(new ls("platform-logger",e=>new HI(e),"PRIVATE")),Ks(new ls("heartbeat",e=>new Sb(e),"PRIVATE")),Rn($c,Jh,t),Rn($c,Jh,"esm2017"),Rn("fire-js","")}kb("");function $l(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Gp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nb=Gp,Wp=new ui("auth","Firebase",Gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Ml("@firebase/auth");function Ob(t,...e){Io.logLevel<=ce.WARN&&Io.warn(`Auth (${ar}): ${t}`,...e)}function eo(t,...e){Io.logLevel<=ce.ERROR&&Io.error(`Auth (${ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Vl(t,...e)}function qt(t,...e){return Vl(t,...e)}function Qp(t,e,n){const s=Object.assign(Object.assign({},Nb()),{[e]:n});return new ui("auth","Firebase",s).create(e,{appName:t.name})}function Db(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&bt(t,"argument-error"),Qp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Wp.create(t,...e)}function K(t,e,...n){if(!t)throw Vl(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function cn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pb(){return td()==="http:"||td()==="https:"}function td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pb()||fI()||"connection"in navigator)?navigator.onLine:!0}function Lb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=dI()||pI()}get(){return xb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new di(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,n,s,r={}){return Jp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yp.fetch()(Xp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Jp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mb),e);try{const r=new Fb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $i(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $i(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $i(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qp(t,u,l);bt(t,u)}}catch(r){if(r instanceof pn)throw r;bt(t,"network-request-failed",{message:String(r)})}}async function fi(t,e,n,s,r={}){const i=await lr(t,e,n,s,r);return"mfaPendingCredential"in i&&bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Bl(t.config,r):`${t.config.apiScheme}://${r}`}class Fb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),Ub.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $i(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=qt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function Vb(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bb(t,e=!1){const n=pt(t),s=await n.getIdToken(e),r=jl(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:xr(tc(r.auth_time)),issuedAtTime:xr(tc(r.iat)),expirationTime:xr(tc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function jl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Fp(n);return r?JSON.parse(r):(eo("Failed to decode base64 JWT payload"),null)}catch(r){return eo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function jb(t){const e=jl(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&qb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Qr(t,Vb(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gb(i.providerUserInfo):[],a=Kb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Zp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zb(t){const e=pt(t);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gb(t){return t.map(e=>{var{providerId:n}=e,s=$l(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){const n=await Jp(t,{},async()=>{const s=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Xp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Wb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Yr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class os{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=$l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bb(this,e)}reload(){return zb(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qr(this,$b(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:Y,isAnonymous:ie,providerData:Ce,stsTokenManager:Ue}=n;K(P&&Ue,e,"internal-error");const J=Yr.fromJSON(this.name,Ue);K(typeof P=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),K(typeof Y=="boolean",e,"internal-error"),K(typeof ie=="boolean",e,"internal-error"),yn(g,e.name),yn(w,e.name),yn(_,e.name),yn(N,e.name),yn(R,e.name),yn(U,e.name);const _e=new os({uid:P,auth:e,email:d,emailVerified:Y,displayName:h,isAnonymous:ie,photoURL:w,phoneNumber:g,tenantId:_,stsTokenManager:J,createdAt:R,lastLoginAt:U});return Ce&&Array.isArray(Ce)&&(_e.providerData=Ce.map(ge=>Object.assign({},ge))),N&&(_e._redirectEventId=N),_e}static async _fromIdTokenResponse(e,n,s=!1){const r=new Yr;r.updateFromServerResponse(n);const i=new os({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await bo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Map;function tn(t){cn(t instanceof Function,"Expected a class definition");let e=nd.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eg.type="NONE";const sd=eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=to(this.userKey,r.apiKey,i),this.fullPersistenceKey=to("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ms(tn(sd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||tn(sd);const o=to(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=os._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ms(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ms(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ig(e))return"Blackberry";if(og(e))return"Webos";if(ql(e))return"Safari";if((e.includes("chrome/")||ng(e))&&!e.includes("edge/"))return"Chrome";if(rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function tg(t=ot()){return/firefox\//i.test(t)}function ql(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ng(t=ot()){return/crios\//i.test(t)}function sg(t=ot()){return/iemobile/i.test(t)}function rg(t=ot()){return/android/i.test(t)}function ig(t=ot()){return/blackberry/i.test(t)}function og(t=ot()){return/webos/i.test(t)}function ca(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qb(t=ot()){var e;return ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yb(){return gI()&&document.documentMode===10}function ag(t=ot()){return ca(t)||rg(t)||og(t)||ig(t)||/windows phone/i.test(t)||sg(t)}function Jb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e=[]){let n;switch(t){case"Browser":n=rd(ot());break;case"Worker":n=`${rd(ot())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ar}/${s}`}async function lg(t,e){return lr(t,"GET","/v2/recaptchaConfig",cr(t,e))}function id(t){return t!==void 0&&t.enterprise!==void 0}class ug{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Xb().appendChild(s)})}function Zb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const e0="https://www.google.com/recaptcha/enterprise.js?render=",t0="recaptcha-enterprise";class dg{constructor(e){this.type=t0,this.auth=ms(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{lg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ug(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;id(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(l=>{a(l)})}catch(l){a(l)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&id(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hg(e0+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function To(t,e,n,s=!1){const r=new dg(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new od(this),this.idTokenSubscription=new od(this),this.beforeStateQueue=new n0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}async initializeRecaptchaConfig(){const e=await lg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ug(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new dg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ob(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return pt(t)}class od{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(wo(i,e??{}))return r;bt(r,"already-initialized")}return n.initialize({options:e})}function i0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function o0(t,e,n){const s=ms(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=fg(e),{host:o,port:a}=a0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||c0()}function fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a0(t){const e=fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ad(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ad(o)}}}function ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function l0(t,e){return lr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(t,e){return fi(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function h0(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Hl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Jr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Jr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await To(e,s,"signInWithPassword");return nc(e,r)}else return nc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await To(e,s,"signInWithPassword");return nc(e,i)}else return Promise.reject(r)});case"emailLink":return u0(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return l0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return h0(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return fi(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="http://localhost";class hs extends Hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=$l(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new hs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:d0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p0(t){const e=br(Tr(t)).link,n=e?br(Tr(e)).deep_link_id:null,s=br(Tr(t)).deep_link_id;return(s?br(Tr(s)).link:null)||s||n||e||t}class zl{constructor(e){var n,s,r,i,o,a;const c=br(Tr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=f0((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p0(e);try{return new zl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.providerId=ur.PROVIDER_ID}static credential(e,n){return Jr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zl.parseLink(n);return K(s,"argument-error"),Jr._fromEmailAndCode(e,s.code,s.tenantId)}}ur.PROVIDER_ID="password";ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends pi{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends pi{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends pi{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return In.credential(n,s)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t,e){return fi(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await os._fromIdTokenResponse(e,s,r),o=cd(s);return new ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=cd(s);return new ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends pn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Co(e,n,s,r)}}function pg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(t,i,e,s):i})}async function g0(t,e,n=!1){const s=await Qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Qr(t,pg(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=jl(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t,e,n=!1){const s="signIn",r=await pg(t,s,e),i=await ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function y0(t,e){return gg(ms(t),e)}async function v0(t,e,n){var s;const r=ms(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await To(r,i,"signUpPassword");o=sc(r,l)}else o=sc(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await To(r,i,"signUpPassword");return sc(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await ds._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function _0(t,e,n){return y0(pt(t),ur.credential(e,n))}function w0(t,e,n,s){return pt(t).onIdTokenChanged(e,n,s)}function E0(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function I0(t){return pt(t).signOut()}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){const t=ot();return ql(t)||ca(t)}const T0=1e3,C0=10;class yg extends mg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=b0()&&Jb(),this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Yb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,C0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},T0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yg.type="LOCAL";const S0=yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends mg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vg.type="SESSION";const _g=vg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new la(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await A0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function k0(t){Ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function N0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function D0(){return wg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="firebaseLocalStorageDb",P0=1,Ao="firebaseLocalStorage",Ig="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function x0(){const t=indexedDB.deleteDatabase(Eg);return new gi(t).toPromise()}function qc(){const t=indexedDB.open(Eg,P0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ao,{keyPath:Ig})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ao)?e(s):(s.close(),await x0(),e(await qc()))})})}async function ld(t,e,n){const s=ua(t,!0).put({[Ig]:e,value:n});return new gi(s).toPromise()}async function L0(t,e){const n=ua(t,!1).get(e),s=await new gi(n).toPromise();return s===void 0?null:s.value}function ud(t,e){const n=ua(t,!0).delete(e);return new gi(n).toPromise()}const M0=800,U0=3;class bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>U0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(D0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await N0(),!this.activeServiceWorker)return;this.sender=new R0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qc();return await ld(e,So,"1"),await ud(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ld(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>L0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ua(r,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bg.type="LOCAL";const F0=bg;new di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){return e?tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $0(t){return gg(t.auth,new Wl(t),t.bypassAuthState)}function V0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),m0(n,new Wl(t),t.bypassAuthState)}async function B0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),g0(n,new Wl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $0;case"linkViaPopup":case"linkViaRedirect":return B0;case"reauthViaPopup":case"reauthViaRedirect":return V0;default:bt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=new di(2e3,1e4);async function q0(t,e,n){const s=ms(t);Db(t,e,Kl);const r=Tg(s,n);return new Zn(s,"signInViaPopup",e,r).executeNotNull()}class Zn extends Cg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,j0.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="pendingRedirect",no=new Map;class z0 extends Cg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const s=await K0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K0(t,e){const n=Q0(e),s=W0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function G0(t,e){no.set(t._key(),e)}function W0(t){return tn(t._redirectPersistence)}function Q0(t){return to(H0,t.config.apiKey,t.name)}async function Y0(t,e,n=!1){const s=ms(t),r=Tg(s,e),o=await new z0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=10*60*1e3;class X0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J0&&this.cachedEventUids.clear(),this.cachedEventUids.has(hd(e))}saveEventToCache(e){this.cachedEventUids.add(hd(e)),this.lastProcessedEventTime=Date.now()}}function hd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nT=/^https?/;async function sT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eT(t);for(const n of e)try{if(rT(n))return}catch{}bt(t,"unauthorized-domain")}function rT(t){const e=jc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nT.test(n))return!1;if(tT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new di(3e4,6e4);function dd(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oT(t){return new Promise((e,n)=>{var s,r,i;function o(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),n(qt(t,"network-request-failed"))},timeout:iT.get()})}if(!((r=(s=Ht().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)o();else{const a=Zb("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},hg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw so=null,e})}let so=null;function aT(t){return so=so||oT(t),so}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=new di(5e3,15e3),lT="__/auth/iframe",uT="emulator/auth/iframe",hT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bl(e,uT):`https://${t.config.authDomain}/${lT}`,s={apiKey:e.apiKey,appName:t.name,v:ar},r=dT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${hi(s).slice(1)}`}async function pT(t){const e=await aT(t),n=Ht().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:fT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Ht().setTimeout(()=>{i(o)},cT.get());function c(){Ht().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mT=500,yT=600,vT="_blank",_T="http://localhost";class fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wT(t,e,n,s=mT,r=yT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gT),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=ng(l)?vT:n),tg(l)&&(e=e||_T,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(Qb(l)&&a!=="_self")return ET(e||"",a),new fd(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new fd(h)}function ET(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="__/auth/handler",bT="emulator/auth/handler",TT=encodeURIComponent("fac");async function pd(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ar,eventId:r};if(e instanceof Kl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof pi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${TT}=${encodeURIComponent(c)}`:"";return`${CT(t)}?${hi(a).slice(1)}${l}`}function CT({config:t}){return t.emulator?Bl(t,bT):`https://${t.authDomain}/${IT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="webStorageSupport";class ST{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_g,this._completeRedirectFn=Y0,this._overrideRedirectResult=G0}async _openPopup(e,n,s,r){var i;cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await pd(e,n,s,jc(),r);return wT(e,o,Gl())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await pd(e,n,s,jc(),r);return k0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(cn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pT(e),s=new X0(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[rc];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ag()||ql()||ca()}}const AT=ST;var gd="@firebase/auth",md="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NT(t){Ks(new ls("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),K(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cg(t)},l=new s0(s,r,i,c);return i0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new ls("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(s=>new RT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(gd,md,kT(t)),Rn(gd,md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=5*60,DT=Vp("authIdTokenMaxAge")||OT;let yd=null;const PT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>DT)return;const r=n==null?void 0:n.token;yd!==r&&(yd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xT(t=Hp()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=r0(t,{popupRedirectResolver:AT,persistence:[F0,S0,_g]}),s=Vp("authTokenSyncURL");if(s){const i=PT(s);E0(n,i,()=>i(n.currentUser)),w0(n,o=>i(o))}const r=$p("auth");return r&&o0(n,`http://${r}`),n}NT("Browser");var LT="firebase",MT="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(LT,MT,"app");var UT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Ql=Ql||{},W=UT||self;function Ro(){}function ha(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FT(t){return Object.prototype.hasOwnProperty.call(t,ic)&&t[ic]||(t[ic]=++$T)}var ic="closure_uid_"+(1e9*Math.random()>>>0),$T=0;function VT(t,e,n){return t.call.apply(t.bind,arguments)}function BT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=VT:st=BT,st.apply(null,arguments)}function Vi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function $n(){this.s=this.s,this.o=this.o}var jT=0;$n.prototype.s=!1;$n.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jT!=0)&&FT(this)};$n.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ag=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ha(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var qT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Ro,e),W.removeEventListener("test",Ro,e)}catch{}return t}();function ko(t){return/^[\s\xa0]*$/.test(t)}var _d=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function oc(t,e){return t<e?-1:t>e?1:0}function da(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return da().indexOf(t)!=-1}function Jl(t){return Jl[" "](t),t}Jl[" "]=Ro;function HT(t){var e=GT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zT=jt("Opera"),Gs=jt("Trident")||jt("MSIE"),Rg=jt("Edge"),Hc=Rg||Gs,kg=jt("Gecko")&&!(da().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),KT=da().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function Ng(){var t=W.document;return t?t.documentMode:void 0}var No;e:{var ac="",cc=function(){var t=da();if(kg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rg)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(KT)return/WebKit\/(\S+)/.exec(t);if(zT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cc&&(ac=cc?cc[1]:""),Gs){var lc=Ng();if(lc!=null&&lc>parseFloat(ac)){No=String(lc);break e}}No=ac}var GT={};function WT(){return HT(function(){let t=0;const e=_d(String(No)).split("."),n=_d("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=oc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||oc(r[2].length==0,i[2].length==0)||oc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var zc;if(W.document&&Gs){var wd=Ng();zc=wd||parseInt(No,10)||void 0}else zc=void 0;var QT=zc;function Xr(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kg){e:{try{Jl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xr.X.h.call(this)}}Ke(Xr,rt);var YT={2:"touch",3:"pen",4:"mouse"};Xr.prototype.h=function(){Xr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yi="closure_listenable_"+(1e6*Math.random()|0),JT=0;function XT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++JT,this.ba=this.ea=!1}function fa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Xl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Og(t){const e={};for(const n in t)e[n]=t[n];return e}const Ed="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ed.length;i++)n=Ed[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function pa(t){this.src=t,this.g={},this.h=0}pa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Gc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new XT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Kc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ag(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Zl="closure_lm_"+(1e6*Math.random()|0),uc={};function Pg(t,e,n,s,r){if(s&&s.once)return Lg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pg(t,e[i],n,s,r);return null}return n=nu(n),t&&t[yi]?t.N(e,n,mi(s)?!!s.capture:!!s,r):xg(t,e,n,!1,s,r)}function xg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=mi(r)?!!r.capture:!!r,a=tu(t);if(a||(t[Zl]=a=new pa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ZT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)qT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ug(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZT(){function t(n){return e.call(t.src,t.listener,n)}const e=eC;return t}function Lg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lg(t,e[i],n,s,r);return null}return n=nu(n),t&&t[yi]?t.O(e,n,mi(s)?!!s.capture:!!s,r):xg(t,e,n,!0,s,r)}function Mg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Mg(t,e[i],n,s,r);else s=mi(s)?!!s.capture:!!s,n=nu(n),t&&t[yi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Gc(i,n,s,r),-1<n&&(fa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=tu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gc(e,n,s,r)),(n=-1<t?e[t]:null)&&eu(n))}function eu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[yi])Kc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ug(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=tu(e))?(Kc(n,t),n.h==0&&(n.src=null,e[Zl]=null)):fa(t)}}}function Ug(t){return t in uc?uc[t]:uc[t]="on"+t}function eC(t,e){if(t.ba)t=!0;else{e=new Xr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&eu(t),t=n.call(s,e)}return t}function tu(t){return t=t[Zl],t instanceof pa?t:null}var hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function nu(t){return typeof t=="function"?t:(t[hc]||(t[hc]=function(e){return t.handleEvent(e)}),t[hc])}function qe(){$n.call(this),this.i=new pa(this),this.P=this,this.I=null}Ke(qe,$n);qe.prototype[yi]=!0;qe.prototype.removeEventListener=function(t,e,n,s){Mg(this,t,e,n,s)};function ze(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var r=e;e=new rt(s,t),Dg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Bi(o,s,!0,e)&&r}if(o=e.g=t,r=Bi(o,s,!0,e)&&r,r=Bi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Bi(o,s,!1,e)&&r}qe.prototype.M=function(){if(qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)fa(n[s]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Bi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Kc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var su=W.JSON.stringify;function tC(){var t=Vg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nC{constructor(){this.h=this.g=null}add(e,n){const s=Fg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new sC,t=>t.reset());class sC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rC(t){W.setTimeout(()=>{throw t},0)}function $g(t,e){Wc||iC(),Qc||(Wc(),Qc=!0),Vg.add(t,e)}var Wc;function iC(){var t=W.Promise.resolve(void 0);Wc=function(){t.then(oC)}}var Qc=!1,Vg=new nC;function oC(){for(var t;t=tC();){try{t.h.call(t.g)}catch(n){rC(n)}var e=Fg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qc=!1}function ga(t,e){qe.call(this),this.h=t||1,this.g=e||W,this.j=st(this.lb,this),this.l=Date.now()}Ke(ga,qe);$=ga.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ze(this,"tick"),this.ca&&(ru(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ru(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){ga.X.M.call(this),ru(this),delete this.g};function iu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Bg(t){t.g=iu(()=>{t.g=null,t.i&&(t.i=!1,Bg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aC extends $n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bg(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(t){$n.call(this),this.h=t,this.g={}}Ke(Zr,$n);var Id=[];function jg(t,e,n,s){Array.isArray(n)||(n&&(Id[0]=n.toString()),n=Id);for(var r=0;r<n.length;r++){var i=Pg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qg(t){Xl(t.g,function(e,n){this.g.hasOwnProperty(n)&&eu(e)},t),t.g={}}Zr.prototype.M=function(){Zr.X.M.call(this),qg(this)};Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ma(){this.g=!0}ma.prototype.Aa=function(){this.g=!1};function cC(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function lC(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ks(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hC(t,n)+(s?" "+s:"")})}function uC(t,e){t.info(function(){return"TIMEOUT: "+e})}ma.prototype.info=function(){};function hC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return su(n)}catch{return e}}var ys={},bd=null;function ya(){return bd=bd||new qe}ys.Pa="serverreachability";function Hg(t){rt.call(this,ys.Pa,t)}Ke(Hg,rt);function ei(t){const e=ya();ze(e,new Hg(e))}ys.STAT_EVENT="statevent";function zg(t,e){rt.call(this,ys.STAT_EVENT,t),this.stat=e}Ke(zg,rt);function lt(t){const e=ya();ze(e,new zg(e,t))}ys.Qa="timingevent";function Kg(t,e){rt.call(this,ys.Qa,t),this.size=e}Ke(Kg,rt);function vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var va={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Gg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ou(){}ou.prototype.h=null;function Td(t){return t.h||(t.h=t.i())}function Wg(){}var _i={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function au(){rt.call(this,"d")}Ke(au,rt);function cu(){rt.call(this,"c")}Ke(cu,rt);var Yc;function _a(){}Ke(_a,ou);_a.prototype.g=function(){return new XMLHttpRequest};_a.prototype.i=function(){return{}};Yc=new _a;function wi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Zr(this),this.O=dC,t=Hc?125:void 0,this.T=new ga(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qg}function Qg(){this.i=null,this.g="",this.h=!1}var dC=45e3,Jc={},Oo={};$=wi.prototype;$.setTimeout=function(t){this.O=t};function Xc(t,e,n){t.K=1,t.v=Ea(ln(e)),t.s=n,t.P=!0,Yg(t,null)}function Yg(t,e){t.F=Date.now(),Ei(t),t.A=ln(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),rm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qg,t.g=Cm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aC(st(t.La,t,t.g),t.N)),jg(t.S,t.g,"readystatechange",t.ib),e=t.H?Og(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ei(),cC(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&nn(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Hc||this.g&&(this.h.h||this.g.fa()||Rd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ei(3):ei(2)),wa(this);var n=this.g.aa();this.Y=n;t:if(Jg(this)){var s=Rd(this.g);t="";var r=s.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),Lr(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,lC(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ko(a)){var l=a;break t}}l=null}if(n=l)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zc(this,n);else{this.i=!1,this.o=3,lt(12),es(this),Lr(this);break e}}this.P?(Xg(this,u,o),Hc&&this.i&&u==3&&(jg(this.S,this.T,"tick",this.hb),this.T.start())):(ks(this.j,this.m,o,null),Zc(this,o)),u==4&&es(this),this.i&&!this.I&&(u==4?Em(this.l,this):(this.i=!1,Ei(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),es(this),Lr(this)}}}catch{}finally{}};function Jg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=fC(t,n),r==Oo){e==4&&(t.o=4,lt(14),s=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Jc){t.o=4,lt(15),ks(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ks(t.j,t.m,r,null),Zc(t,r);Jg(t)&&r!=Oo&&r!=Jc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gu(e),e.K=!0,lt(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),es(t),Lr(t))}$.hb=function(){if(this.g){var t=nn(this.g),e=this.g.fa();this.C<e.length&&(wa(this),Xg(this,t,e),this.i&&t!=4&&Ei(this))}};function fC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Oo:(n=Number(e.substring(n,s)),isNaN(n)?Jc:(s+=1,s+n>e.length?Oo:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.I=!0,es(this)};function Ei(t){t.V=Date.now()+t.O,Zg(t,t.O)}function Zg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vi(st(t.gb,t),e)}function wa(t){t.B&&(W.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(uC(this.j,this.A),this.K!=2&&(ei(),lt(17)),es(this),this.o=2,Lr(this)):Zg(this,this.V-t)};function Lr(t){t.l.G==0||t.I||Em(t.l,t)}function es(t){wa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ru(t.T),qg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||el(n.h,t))){if(!t.J&&el(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)xo(n),Ta(n);else break e;pu(n),lt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=vi(st(n.cb,n),6e3));if(1>=am(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ts(n,11)}else if((t.J||n.g==t)&&xo(n),!ko(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(lu(i,i.h),i.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Te(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Tm(s,s.H?s.ka:null,s.V),o.J){cm(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(wa(a),Ei(a)),s.g=o}else _m(s);0<n.i.length&&Ca(n)}else l[0]!="stop"&&l[0]!="close"||ts(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ts(n,7):fu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ei(4)}catch{}}function pC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ha(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function gC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ha(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function em(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ha(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gC(t),s=pC(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function as(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof as){this.h=e!==void 0?e:t.h,Do(this,t.j),this.s=t.s,this.g=t.g,Po(this,t.m),this.l=t.l,e=t.i;var n=new ti;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cd(this,n),this.o=t.o}else t&&(n=String(t).match(tm))?(this.h=!!e,Do(this,n[1]||"",!0),this.s=Cr(n[2]||""),this.g=Cr(n[3]||"",!0),Po(this,n[4]),this.l=Cr(n[5]||"",!0),Cd(this,n[6]||"",!0),this.o=Cr(n[7]||"")):(this.h=!!e,this.i=new ti(null,this.h))}as.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sr(e,Sd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sr(e,Sd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sr(n,n.charAt(0)=="/"?_C:vC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sr(n,EC)),t.join("")};function ln(t){return new as(t)}function Do(t,e,n){t.j=n?Cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cd(t,e,n){e instanceof ti?(t.i=e,IC(t.i,t.h)):(n||(e=Sr(e,wC)),t.i=new ti(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function Ea(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sd=/[#\/\?@]/g,vC=/[#\?:]/g,_C=/[#\?]/g,wC=/[#\?@]/g,EC=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&mC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=ti.prototype;$.add=function(t,e){Vn(this),this.i=null,t=hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nm(t,e){Vn(t),e=hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sm(t,e){return Vn(t),e=hr(t,e),t.g.has(e)}$.forEach=function(t,e){Vn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};$.oa=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};$.W=function(t){Vn(this);let e=[];if(typeof t=="string")sm(this,t)&&(e=e.concat(this.g.get(hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Vn(this),this.i=null,t=hr(this,t),sm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rm(t,e,n){nm(t,e),0<n.length&&(t.i=null,t.g.set(hr(t,e),Yl(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function IC(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(nm(this,s),rm(this,r,n))},t)),t.j=e}var bC=class{constructor(e,n){this.h=e,this.g=n}};function im(t){this.l=t||TC,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TC=10;function om(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function am(t){return t.h?1:t.g?t.g.size:0}function el(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lu(t,e){t.g?t.g.add(e):t.h=e}function cm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}im.prototype.cancel=function(){if(this.i=lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yl(t.i)}function uu(){}uu.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};uu.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function CC(){this.g=new uu}function SC(t,e,n){const s=n||"";try{em(t,function(r,i){let o=r;mi(r)&&(o=su(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function AC(t,e){const n=new ma;if(W.Image){const s=new Image;s.onload=Vi(ji,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Vi(ji,n,s,"TestLoadImage: error",!1,e),s.onabort=Vi(ji,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Vi(ji,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ji(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ii(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(Ii,ou);Ii.prototype.g=function(){return new Ia(this.l,this.j)};Ii.prototype.i=function(t){return function(){return t}}({});function Ia(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Ia,qe);var hu=0;$=Ia.prototype;$.open=function(t,e){if(this.readyState!=hu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ni(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=hu};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;um(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function um(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bi(this):ni(this),this.readyState==3&&um(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,bi(this))};$.Ua=function(t){this.g&&(this.response=t,bi(this))};$.ga=function(){this.g&&bi(this)};function bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ni(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RC=W.JSON.parse;function Re(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hm,this.K=this.L=!1}Ke(Re,qe);var hm="",kC=/^https?$/i,NC=["POST","PUT"];$=Re.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yc.g(),this.C=this.u?Td(this.u):Td(Yc),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ad(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=Ag(NC,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pm(this),0<this.B&&((this.K=OC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=iu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ad(this,i)}};function OC(t){return Gs&&WT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof Ql<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function Ad(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dm(t),ba(t)}function dm(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),ba(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ba(this,!0)),Re.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?fm(this):this.fb())};$.fb=function(){fm(this)};function fm(t){if(t.h&&typeof Ql<"u"&&(!t.C[1]||nn(t)!=4||t.aa()!=2)){if(t.v&&nn(t)==4)iu(t.Ha,0,t);else if(ze(t,"readystatechange"),nn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(tm)[1]||null;if(!r&&W.self&&W.self.location){var i=W.self.location.protocol;r=i.substr(0,i.length-1)}s=!kC.test(r?r.toLowerCase():"")}n=s}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",dm(t)}}finally{ba(t)}}}}function ba(t,e){if(t.g){pm(t);const n=t.g,s=t.C[0]?Ro:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function pm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function nn(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RC(e)}};function Rd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gm(t){let e="";return Xl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function du(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mm(t){this.Ca=0,this.i=[],this.j=new ma,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Er("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Er("baseRetryDelayMs",5e3,t),this.bb=Er("retryDelaySeedMs",1e4,t),this.$a=Er("forwardChannelMaxRetries",2,t),this.ta=Er("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new im(t&&t.concurrentRequestLimit),this.Fa=new CC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=mm.prototype;$.ma=8;$.G=1;function fu(t){if(ym(t),t.G==3){var e=t.U++,n=ln(t.F);Te(n,"SID",t.I),Te(n,"RID",e),Te(n,"TYPE","terminate"),Ti(t,n),e=new wi(t,t.j,e,void 0),e.K=2,e.v=Ea(ln(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ei(e)}bm(t)}function Ta(t){t.g&&(gu(t),t.g.cancel(),t.g=null)}function ym(t){Ta(t),t.u&&(W.clearTimeout(t.u),t.u=null),xo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Ca(t){om(t.h)||t.m||(t.m=!0,$g(t.Ja,t),t.C=0)}function DC(t,e){return am(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vi(st(t.Ja,t,e),Im(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new wi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Og(i),Dg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vm(this,r,e),n=ln(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Ti(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(gm(i)))+"&"+e:this.o&&du(n,this.o,i)),lu(this.h,r),this.Ya&&Te(n,"TYPE","init"),this.O?(Te(n,"$req",e),Te(n,"SID","null"),r.Z=!0,Xc(r,n,null)):Xc(r,n,e),this.G=2}}else this.G==3&&(t?kd(this,t):this.i.length==0||om(this.h)||kd(this))};function kd(t,e){var n;e?n=e.m:n=t.U++;const s=ln(t.F);Te(s,"SID",t.I),Te(s,"RID",n),Te(s,"AID",t.T),Ti(t,s),t.o&&t.s&&du(s,t.o,t.s),n=new wi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),lu(t.h,n),Xc(n,s,e)}function Ti(t,e){t.ia&&Xl(t.ia,function(n,s){Te(e,s,n)}),t.l&&em({},function(n,s){Te(e,s,n)})}function vm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?st(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{SC(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function _m(t){t.g||t.u||(t.Z=1,$g(t.Ia,t),t.A=0)}function pu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vi(st(t.Ia,t),Im(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,wm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vi(st(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),Ta(this),wm(this))};function gu(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function wm(t){t.g=new wi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ln(t.sa);Te(e,"RID","rpc"),Te(e,"SID",t.I),Te(e,"CI",t.L?"0":"1"),Te(e,"AID",t.T),Te(e,"TYPE","xmlhttp"),Ti(t,e),t.o&&t.s&&du(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ea(ln(e)),n.s=null,n.P=!0,Yg(n,t)}$.cb=function(){this.v!=null&&(this.v=null,Ta(this),pu(this),lt(19))};function xo(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Em(t,e){var n=null;if(t.g==e){xo(t),gu(t),t.g=null;var s=2}else if(el(t.h,e))n=e.D,cm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ya(),ze(s,new Kg(s,n)),Ca(t)}else _m(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&DC(t,e)||s==2&&pu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ts(t,5);break;case 4:ts(t,10);break;case 3:ts(t,6);break;default:ts(t,2)}}}function Im(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ts(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=st(t.kb,t);n||(n=new as("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Do(n,"https"),Ea(n)),AC(n.toString(),s)}else lt(2);t.G=0,t.l&&t.l.va(e),bm(t),ym(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function bm(t){if(t.G=0,t.la=[],t.l){const e=lm(t.h);(e.length!=0||t.i.length!=0)&&(vd(t.la,e),vd(t.la,t.i),t.h.i.length=0,Yl(t.i),t.i.length=0),t.l.ua()}}function Tm(t,e,n){var s=n instanceof as?ln(n):new as(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Po(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new as(null,void 0);s&&Do(i,s),e&&(i.g=e),r&&Po(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Te(s,n,e),Te(s,"VER",t.ma),Ti(t,s),s}function Cm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Re(new Ii({jb:!0})):new Re(t.ra),e.Ka(t.H),e}function Sm(){}$=Sm.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Lo(){if(Gs&&!(10<=Number(QT)))throw Error("Environmental error: no available transport.")}Lo.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){qe.call(this),this.g=new mm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ko(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ko(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new dr(this)}Ke(vt,qe);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Tm(t,null,t.V),Ca(t)};vt.prototype.close=function(){fu(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=su(t),t=n);e.i.push(new bC(e.ab++,t)),e.G==3&&Ca(e)};vt.prototype.M=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,vt.X.M.call(this)};function Am(t){au.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Am,au);function Rm(){cu.call(this),this.status=1}Ke(Rm,cu);function dr(t){this.g=t}Ke(dr,Sm);dr.prototype.xa=function(){ze(this.g,"a")};dr.prototype.wa=function(t){ze(this.g,new Am(t))};dr.prototype.va=function(t){ze(this.g,new Rm)};dr.prototype.ua=function(){ze(this.g,"b")};Lo.prototype.createWebChannel=Lo.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;va.NO_ERROR=0;va.TIMEOUT=8;va.HTTP_ERROR=6;Gg.COMPLETE="complete";Wg.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";qe.prototype.listen=qe.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.Oa;Re.prototype.getLastErrorCode=Re.prototype.Ea;Re.prototype.getStatus=Re.prototype.aa;Re.prototype.getResponseJson=Re.prototype.Sa;Re.prototype.getResponseText=Re.prototype.fa;Re.prototype.send=Re.prototype.da;Re.prototype.setWithCredentials=Re.prototype.Ka;var PC=function(){return new Lo},xC=function(){return ya()},dc=va,LC=Gg,MC=ys,Nd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},UC=Ii,qi=Wg,FC=Re;const Od="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Ml("@firebase/firestore");function Dd(){return fs.logLevel}function V(t,...e){if(fs.logLevel<=ce.DEBUG){const n=e.map(mu);fs.debug(`Firestore (${fr}): ${t}`,...n)}}function un(t,...e){if(fs.logLevel<=ce.ERROR){const n=e.map(mu);fs.error(`Firestore (${fr}): ${t}`,...n)}}function Mo(t,...e){if(fs.logLevel<=ce.WARN){const n=e.map(mu);fs.warn(`Firestore (${fr}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function Ie(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let M=class extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class VC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new km(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Ye(e)}}class jC{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class qC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new jC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new HC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=KC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Fe(0,0))}static max(){return new X(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends si{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const GC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends si{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return GC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ee.fromString(e))}static fromName(e){return new j(Ee.fromString(e).popFirst(5))}static empty(){return new j(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ee(e.slice()))}}function WC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new Fe(n+1,0):new Fe(n,s));return new Ln(r,j.empty(),e)}function QC(t){return new Ln(t.readTime,t.key,-1)}class Ln{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ln(X.min(),j.empty(),-1)}static max(){return new Ln(X.max(),j.empty(),-1)}}function YC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==JC)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}yu.ct=-1;function Sa(t){return t==null}function Uo(t){return t===0&&1/t==-1/0}function ZC(t){return typeof t=="number"&&Number.isInteger(t)&&!Uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??He.RED,this.left=r??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new He(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new $e(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new eS("Invalid base64 string: "+r):r}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const tS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=tS.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pm(t){const e=t.mapValue.fields.__previous_value__;return Dm(e)?Pm(e):e}function ri(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dm(t)?4:sS(t)?9007199254740991:10:G()}function Wt(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ri(t).isEqual(ri(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Mn(s.timestampValue),o=Mn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Qs(s.bytesValue).isEqual(Qs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?Uo(i)===Uo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Pd(i)!==Pd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Wt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function oi(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ld(t.timestampValue,e.timestampValue);case 4:return Ld(ri(t),ri(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Qs(r),a=Qs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(xe(r.latitude),xe(i.latitude));return o!==0?o:ue(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ys(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===zi.mapValue&&i===zi.mapValue)return 0;if(r===zi.mapValue)return 1;if(i===zi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=Ys(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Mn(t),s=Mn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Js(t){return tl(t)}function tl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Mn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Qs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=tl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${tl(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Md(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nl(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Fd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ro(t){return!!t&&"mapValue"in t}function Mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Mr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mr(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Mr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ro(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){pr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Et(Mr(this.value))}}function xm(t){const e=[];return pr(t.fields,(n,s)=>{const r=new tt([n]);if(ro(s)){const i=xm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,X.min(),X.min(),X.min(),Et.empty(),0)}static newFoundDocument(e,n,s,r){return new Ze(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new Ze(e,2,n,X.min(),X.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,X.min(),X.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.position=e,this.inclusive=n}}function $d(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n="asc"){this.field=e,this.dir=n}}function rS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{}class Le extends Lm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new oS(e,n,s):n==="array-contains"?new lS(e,s):n==="in"?new uS(e,s):n==="not-in"?new hS(e,s):n==="array-contains-any"?new dS(e,s):new Le(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new aS(e,s):new cS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mt extends Lm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Mt(e,n)}matches(e){return Mm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Mm(t){return t.op==="and"}function Um(t){return iS(t)&&Mm(t)}function iS(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function sl(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(Um(t))return t.filters.map(e=>sl(e)).join(",");{const e=t.filters.map(n=>sl(n)).join(",");return`${t.op}(${e})`}}function Fm(t,e){return t instanceof Le?function(n,s){return s instanceof Le&&n.op===s.op&&n.field.isEqual(s.field)&&Wt(n.value,s.value)}(t,e):t instanceof Mt?function(n,s){return s instanceof Mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Fm(i,s.filters[o]),!0):!1}(t,e):void G()}function $m(t){return t instanceof Le?function(e){return`${e.field.canonicalString()} ${e.op} ${Js(e.value)}`}(t):t instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map($m).join(" ,")+"}"}(t):"Filter"}class oS extends Le{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class aS extends Le{constructor(e,n){super(e,"in",n),this.keys=Vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cS extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class lS extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&oi(n.arrayValue,this.value)}}class uS extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class hS extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class dS extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>oi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Bd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new fS(t,e,n,s,r,i,o)}function _u(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>sl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Sa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Js(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Js(s)).join(",")),e.ft=n}return e.ft}function wu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vd(t.startAt,e.startAt)&&Vd(t.endAt,e.endAt)}function rl(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function pS(t,e,n,s,r,i,o,a){return new gr(t,e,n,s,r,i,o,a)}function Eu(t){return new gr(t)}function jd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Iu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Aa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Bm(t){return t.collectionGroup!==null}function $s(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=Aa(e),s=Iu(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Fs(n)),e.dt.push(new Fs(tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Fs(tt.keyField(),i))}}}return e.dt}function hn(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=Bd(e.path,e.collectionGroup,$s(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of $s(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Fs(i.field,o))}const s=e.endAt?new Fo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fo(e.startAt.position,e.startAt.inclusive):null;e.wt=Bd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function il(t,e){e.getFirstInequalityField(),Aa(t);const n=t.filters.concat([e]);return new gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $o(t,e,n){return new gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return wu(hn(t),hn(e))&&t.limitType===e.limitType}function jm(t){return`${_u(hn(t))}|lt:${t.limitType}`}function ol(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>$m(s)).join(", ")}]`),Sa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Js(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Js(s)).join(",")),`Target(${n})`}(hn(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of $s(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=$d(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,$s(n),s)||n.endAt&&!function(r,i,o){const a=$d(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,$s(n),s))}(t,e)}function gS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qm(t){return(e,n)=>{let s=!1;for(const r of $s(t)){const i=mS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function mS(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ys(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Om(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new Be(j.comparator);function dn(){return yS}const Hm=new Be(j.comparator);function Ar(...t){let e=Hm;for(const n of t)e=e.insert(n.key,n);return e}function zm(t){let e=Hm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ns(){return Ur()}function Km(){return Ur()}function Ur(){return new mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const vS=new Be(j.comparator),_S=new $e(j.comparator);function se(...t){let e=_S;for(const n of t)e=e.add(n);return e}const wS=new $e(ue);function Gm(){return wS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function Qm(t){return{integerValue:""+t}}function ES(t,e){return ZC(e)?Qm(e):Wm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this._=void 0}}function IS(t,e,n){return t instanceof Vo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ai?Jm(t,e):t instanceof ci?Xm(t,e):function(s,r){const i=Ym(s,r),o=qd(i)+qd(s._t);return nl(i)&&nl(s._t)?Qm(o):Wm(s.serializer,o)}(t,e)}function bS(t,e,n){return t instanceof ai?Jm(t,e):t instanceof ci?Xm(t,e):n}function Ym(t,e){return t instanceof Bo?nl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Vo extends Na{}class ai extends Na{constructor(e){super(),this.elements=e}}function Jm(t,e){const n=Zm(e);for(const s of t.elements)n.some(r=>Wt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ci extends Na{constructor(e){super(),this.elements=e}}function Xm(t,e){let n=Zm(e);for(const s of t.elements)n=n.filter(r=>!Wt(r,s));return{arrayValue:{values:n}}}class Bo extends Na{constructor(e,n){super(),this.serializer=e,this._t=n}}function qd(t){return xe(t.integerValue||t.doubleValue)}function Zm(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ai&&s instanceof ai||n instanceof ci&&s instanceof ci?Ws(n.elements,s.elements,Wt):n instanceof Bo&&s instanceof Bo?Wt(n._t,s._t):n instanceof Vo&&s instanceof Vo}(t.transform,e.transform)}class CS{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oa{}function ey(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bu(t.key,zt.none()):new Ai(t.key,t.data,zt.none());{const n=t.data,s=Et.empty();let r=new $e(tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new vs(t.key,s,new Ot(r.toArray()),zt.none())}}function SS(t,e,n){t instanceof Ai?function(s,r,i){const o=s.value.clone(),a=zd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,r,i){if(!io(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ty(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Fr(t,e,n,s){return t instanceof Ai?function(r,i,o,a){if(!io(r.precondition,i))return o;const c=r.value.clone(),l=Kd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(r,i,o,a){if(!io(r.precondition,i))return o;const c=Kd(r.fieldTransforms,a,i),l=i.data;return l.setAll(ty(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return io(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function AS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ym(s.transform,r||null);i!=null&&(n===null&&(n=Et.empty()),n.set(s.field,i))}return n||null}function Hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ws(n,s,(r,i)=>TS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ai extends Oa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vs extends Oa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ty(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zd(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,bS(o,a,n[r]))}return s}function Kd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,IS(i,o,e))}return s}class bu extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RS extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&SS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Fr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Fr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Km();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=ey(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,s)=>Hd(n,s))&&Ws(this.baseMutations,e.baseMutations,(n,s)=>Hd(n,s))}}class Tu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=vS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Tu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,re;function DS(t){switch(t){default:return G();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function ny(t){if(t===void 0)return un("GRPC error has no .code"),E.UNKNOWN;switch(t){case Pe.OK:return E.OK;case Pe.CANCELLED:return E.CANCELLED;case Pe.UNKNOWN:return E.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return E.INTERNAL;case Pe.UNAVAILABLE:return E.UNAVAILABLE;case Pe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Pe.NOT_FOUND:return E.NOT_FOUND;case Pe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Pe.ABORTED:return E.ABORTED;case Pe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Pe.DATA_LOSS:return E.DATA_LOSS;default:return G()}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ki}static getOrCreateInstance(){return Ki===null&&(Ki=new Cu),Ki}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ki=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Da(X.min(),r,Gm(),dn(),se())}}class Ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ri(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class sy{constructor(e,n){this.targetId=e,this.Et=n}}class ry{constructor(e,n,s=at.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Gd{constructor(){this.At=0,this.Rt=Qd(),this.vt=at.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=se(),n=se(),s=se();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new Ri(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Qd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class PS{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=dn(),this.qt=Wd(),this.Ut=new $e(ue)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(rl(o))if(r===0){const a=new j(o.path);this.Qt(s,a,Ze.newNoDocument(a,X.min()))}else Ie(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Cu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&rl(a.target)){const c=new j(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ze.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Da(e,n,this.Ut,this.Lt,s);return this.Lt=dn(),this.qt=Wd(),this.Ut=new $e(ue),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Gd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new $e(ue),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Gd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Wd(){return new Be(j.comparator)}function Qd(){return new Be(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),MS=(()=>({and:"AND",or:"OR"}))();class US{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FS(t,e){return jo(t,e.toTimestamp())}function Kt(t){return Ie(!!t),X.fromTimestamp(function(e){const n=Mn(e);return new Fe(n.seconds,n.nanos)}(t))}function Su(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function oy(t){const e=Ee.fromString(t);return Ie(uy(e)),e}function al(t,e){return Su(t.databaseId,e.path)}function fc(t,e){const n=oy(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(ay(n))}function cl(t,e){return Su(t.databaseId,e)}function $S(t){const e=oy(t);return e.length===4?Ee.emptyPath():ay(e)}function ll(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ay(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yd(t,e,n){return{name:al(t,e),fields:n.value.mapValue.fields}}function VS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ie(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:ny(c.code);return new M(l,c.message||"")}(o);n=new ry(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=fc(t,s.document.name),i=Kt(s.document.updateTime),o=s.document.createTime?Kt(s.document.createTime):X.min(),a=new Et({mapValue:{fields:s.document.fields}}),c=Ze.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new oo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=fc(t,s.document),i=s.readTime?Kt(s.readTime):X.min(),o=Ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new oo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=fc(t,s.document),i=s.removedTargetIds||[];n=new oo([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new OS(r),o=s.targetId;n=new sy(o,i)}}return n}function BS(t,e){let n;if(e instanceof Ai)n={update:Yd(t,e.key,e.value)};else if(e instanceof bu)n={delete:al(t,e.key)};else if(e instanceof vs)n={update:Yd(t,e.key,e.data),updateMask:YS(e.fieldMask)};else{if(!(e instanceof RS))return G();n={verify:al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Vo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ai)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ci)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Bo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:FS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function jS(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Kt(s.updateTime):Kt(r);return i.isEqual(X.min())&&(i=Kt(r)),new CS(i,s.transformResults||[])}(n,e))):[]}function qS(t,e){return{documents:[cl(t,e.path)]}}function HS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=cl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ly(Mt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:As(u.field),direction:GS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Sa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function zS(t){let e=$S(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=cy(u);return h instanceof Mt&&Um(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Fs(Rs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Sa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Fo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Fo(d,h)}(n.endAt)),pS(e,r,o,i,a,"F",c,l)}function KS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rs(e.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(e.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Rs(e.unaryFilter.field);return Le.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rs(e.unaryFilter.field);return Le.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Le.create(Rs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(n=>cy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function GS(t){return xS[t]}function WS(t){return LS[t]}function QS(t){return MS[t]}function As(t){return{fieldPath:t.canonicalString()}}function Rs(t){return tt.fromServerFormat(t.fieldPath)}function ly(t){return t instanceof Le?function(e){if(e.op==="=="){if(Fd(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NAN"}};if(Ud(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fd(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NAN"}};if(Ud(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(e.field),op:WS(e.op),value:e.value}}}(t):t instanceof Mt?function(e){const n=e.getFilters().map(s=>ly(s));return n.length===1?n[0]:{compositeFilter:{op:QS(e.op),filters:n}}}(t):G()}function YS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,s,r,i=X.min(),o=X.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.se=e}}function XS(t){const e=zS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$o(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.He=new eA}addToCollectionParentIndex(e,n){return this.He.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Ln.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class eA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new $e(Ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $e(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Xs(0)}static bn(){return new Xs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.changes=new mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Fr(s.mutation,r,Ot.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ar();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=dn();const o=Ur(),a=Ur();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof vs)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fr(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ur();let r=new Be((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ot.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Km();u.forEach(d=>{if(!i.has(d)){const g=ey(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(ns());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:zm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=Ar();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ar();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new gr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ze.newInvalidDocument(l)))});let o=Ar();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Fr(l.mutation,c,Ot.empty(),Fe.now()),ka(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Kt(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:XS(s.bundledQuery),readTime:Kt(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.overlays=new Be(j.comparator),this.ts=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ns();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=ns(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ns(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new NS(n,s));let i=this.ts.get(n);i===void 0&&(i=se(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.es=new $e(je.ns),this.ss=new $e(je.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new je(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new je(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new j(new Ee([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new j(new Ee([])),s=new je(n,e),r=new je(n,e+1);let i=se();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return j.comparator(e.key,n.key)||ue(e.ds,n.ds)}static rs(e,n){return ue(e.ds,n.ds)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new $e(je.ns)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $e(ue);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),C.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new je(new j(i),0);let a=new $e(ue);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),C.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return C.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new je(n,0),r=this._s.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.Ts=e,this.docs=new Be(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let s=dn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ze.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=dn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||YC(QC(u),s)<=0||(r.has(u.key)||ka(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){G()}Es(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new cA(this)}getSize(e){return C.resolve(this.size)}}class cA extends tA{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.persistence=e,this.As=new mr(n=>_u(n),wu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Au,this.targetCount=0,this.bs=Xs.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),C.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Sn(n),C.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new yu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new lA(this),this.indexManager=new ZS,this.remoteDocumentCache=function(s){return new aA(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new JS(n),this.xs=new rA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new oA(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new hA(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return C.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class hA extends XC{constructor(e){super(),this.currentSequenceNumber=e}}class Ru{constructor(e){this.persistence=e,this.$s=new Au,this.Ms=null}static Fs(e){return new Ru(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),C.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Bs,s=>{const r=j.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return C.or([()=>C.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ku(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(jd(n))return C.resolve(null);let s=hn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=$o(n,null,"F"),s=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,$o(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return jd(n)||r.isEqual(X.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Dd()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ol(n)),this.Fi(e,o,n,WC(r,-1)))})}$i(e,n){let s=new $e(qm(e));return n.forEach((r,i)=>{ka(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Dd()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ol(n)),this.xi.getDocumentsMatchingQuery(e,n,Ln.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Be(ue),this.qi=new mr(i=>_u(i),wu),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sA(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function pA(t,e,n,s){return new fA(t,e,n,s)}async function hy(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function gA(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=C.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(w=>{const _=c.docVersions.get(g);Ie(_!==null),w.version.compareTo(_)<0&&(u.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),l.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function dy(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function mA(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(w,_,N){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=dn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(yA(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(X.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function yA(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=dn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function vA(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _A(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new cs(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function ul(t,e,n){const s=Z(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Si(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Jd(t,e,n){const s=Z(t);let r=X.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.qi.get(l);return h!==void 0?C.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,hn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:se())).next(a=>(wA(s,gS(e),a),{documents:a,Wi:i})))}function wA(t,e,n){let s=t.Ui.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Xd{constructor(){this.activeTargetIds=Gm()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EA{constructor(){this.Br=new Xd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Xd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi=null;function pc(){return Gi===null?Gi=268435456+Math.round(2147483648*Math.random()):Gi++,"0x"+Gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class CA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=pc(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Mo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+fr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=bA[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=pc();return new Promise((o,a)=>{const c=new FC;c.setWithCredentials(!0),c.listenOnce(LC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dc.NO_ERROR:const u=c.getResponseJson();V(Qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case dc.TIMEOUT:V(Qe,`RPC '${e}' ${i} timed out`),a(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const h=c.getStatus();if(V(Qe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(_){const N=_.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(N)>=0?N:E.UNKNOWN}(g.status);a(new M(w,g.message))}else a(new M(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(E.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{V(Qe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(Qe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=pc(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PC(),a=xC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new UC({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Qe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new TA({Wr:_=>{d?V(Qe,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(h||(V(Qe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(Qe,`RPC '${e}' stream ${r} sending:`,_),u.send(_))},Hr:()=>u.close()}),w=(_,N,R)=>{_.listen(N,U=>{try{R(U)}catch(P){setTimeout(()=>{throw P},0)}})};return w(u,qi.EventType.OPEN,()=>{d||V(Qe,`RPC '${e}' stream ${r} transport opened.`)}),w(u,qi.EventType.CLOSE,()=>{d||(d=!0,V(Qe,`RPC '${e}' stream ${r} transport closed`),g.so())}),w(u,qi.EventType.ERROR,_=>{d||(d=!0,Mo(Qe,`RPC '${e}' stream ${r} transport errored:`,_),g.so(new M(E.UNAVAILABLE,"The operation could not be completed")))}),w(u,qi.EventType.MESSAGE,_=>{var N;if(!d){const R=_.data[0];Ie(!!R);const U=R,P=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(P){V(Qe,`RPC '${e}' stream ${r} received error:`,P);const Y=P.status;let ie=function(Ue){const J=Pe[Ue];if(J!==void 0)return ny(J)}(Y),Ce=P.message;ie===void 0&&(ie=E.INTERNAL,Ce="Unknown error status: "+Y+" with message "+P.message),d=!0,g.so(new M(ie,Ce)),u.close()}else V(Qe,`RPC '${e}' stream ${r} received:`,R),g.io(R)}}),w(a,MC.STAT_EVENT,_=>{_.stat===Nd.PROXY?V(Qe,`RPC '${e}' stream ${r} detected buffering proxy`):_.stat===Nd.NOPROXY&&V(Qe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return new US(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new fy(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SA extends py{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=VS(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?Kt(i.readTime):X.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=ll(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=rl(a)?{documents:qS(r,a)}:{query:HS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=iy(r,i.resumeToken):i.snapshotVersion.compareTo(X.min())>0&&(o.readTime=jo(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=KS(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=ll(this.serializer),n.removeTarget=e,this.Fo(n)}}class AA extends py{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=jS(e.writeResults,e.commitTime),s=Kt(e.commitTime);return this.listener.Zo(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ll(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>BS(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class kA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(un(n),this.ru=!1):V("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{_s(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.du.add(4),await ki(c),c.mu.set("Unknown"),c.du.delete(4),await xa(c)}(this))})}),this.mu=new kA(s,r)}}async function xa(t){if(_s(t))for(const e of t.wu)await e(!0)}async function ki(t){for(const e of t.wu)await e(!1)}function gy(t,e){const n=Z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Du(n)?Ou(n):yr(n).No()&&Nu(n,e))}function my(t,e){const n=Z(t),s=yr(n);n.fu.delete(e),s.No()&&yy(n,e),n.fu.size===0&&(s.No()?s.$o():_s(n)&&n.mu.set("Unknown"))}function Nu(t,e){t.gu.Ot(e.targetId),yr(t).jo(e)}function yy(t,e){t.gu.Ot(e),yr(t).Wo(e)}function Ou(t){t.gu=new PS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),yr(t).start(),t.mu.ou()}function Du(t){return _s(t)&&!yr(t).xo()&&t.fu.size>0}function _s(t){return Z(t).du.size===0}function vy(t){t.gu=void 0}async function OA(t){t.fu.forEach((e,n)=>{Nu(t,e)})}async function DA(t,e){vy(t),Du(t)?(t.mu.au(e),Ou(t)):t.mu.set("Unknown")}async function PA(t,e,n){if(t.mu.set("Online"),e instanceof ry&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qo(t,s)}else if(e instanceof oo?t.gu.Kt(e):e instanceof sy?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(X.min()))try{const s=await dy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),yy(r,a);const l=new cs(c.target,a,1,c.sequenceNumber);Nu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await qo(t,s)}}async function qo(t,e,n){if(!Si(e))throw e;t.du.add(1),await ki(t),t.mu.set("Offline"),n||(n=()=>dy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await xa(t)})}function _y(t,e){return e().catch(n=>qo(t,n,e))}async function La(t){const e=Z(t),n=Un(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;xA(e);)try{const r=await vA(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,LA(e,r)}catch(r){await qo(e,r)}wy(e)&&Ey(e)}function xA(t){return _s(t)&&t.lu.length<10}function LA(t,e){t.lu.push(e);const n=Un(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function wy(t){return _s(t)&&!Un(t).xo()&&t.lu.length>0}function Ey(t){Un(t).start()}async function MA(t){Un(t).tu()}async function UA(t){const e=Un(t);for(const n of t.lu)e.Yo(n.mutations)}async function FA(t,e,n){const s=t.lu.shift(),r=Tu.from(s,e,n);await _y(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await La(t)}async function $A(t,e){e&&Un(t).Jo&&await async function(n,s){if(r=s.code,DS(r)&&r!==E.ABORTED){const i=n.lu.shift();Un(n).Oo(),await _y(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await La(n)}var r}(t,e),wy(t)&&Ey(t)}async function ef(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=_s(n);n.du.add(3),await ki(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await xa(n)}async function VA(t,e){const n=Z(t);e?(n.du.delete(2),await xa(n)):e||(n.du.add(2),await ki(n),n.mu.set("Unknown"))}function yr(t){return t.yu||(t.yu=function(e,n,s){const r=Z(e);return r.nu(),new SA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:OA.bind(null,t),Zr:DA.bind(null,t),zo:PA.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Du(t)?Ou(t):t.mu.set("Unknown")):(await t.yu.stop(),vy(t))})),t.yu}function Un(t){return t.pu||(t.pu=function(e,n,s){const r=Z(e);return r.nu(),new AA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:MA.bind(null,t),Zr:$A.bind(null,t),Xo:UA.bind(null,t),Zo:FA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await La(t)):(await t.pu.stop(),t.lu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Pu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(t,e){if(un("AsyncQueue",`${e}: ${t}`),Si(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Ar(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Vs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Iu=new Be(j.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Vs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.Eu=void 0,this.listeners=[]}}class jA{constructor(){this.queries=new mr(e=>jm(e),Ra),this.onlineState="Unknown",this.Au=new Set}}async function Iy(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new BA),r)try{i.Eu=await n.onListen(s)}catch(o){const a=xu(o,`Initialization of query '${ol(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Lu(n)}async function by(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function qA(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Lu(n)}function HA(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Lu(t){t.Au.forEach(e=>{e.next()})}class Ty{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.key=e}}class Sy{constructor(e){this.key=e}}class zA{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=se(),this.mutatedKeys=se(),this.Ku=qm(e),this.Gu=new Vs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new tf,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=ka(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;d&&g?d.data.isEqual(g.data)?w!==_&&(s.track({type:3,doc:g}),N=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),N=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),N=!0):d&&!g&&(s.track({type:1,doc:d}),N=!0,(c||l)&&(a=!0)),N&&(g?(o=o.add(g),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Zs(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new tf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=se(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Sy(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Cy(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=se();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Zs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class KA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class GA{constructor(e){this.key=e,this.ec=!1}}class WA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new mr(a=>jm(a),Ra),this.ic=new Map,this.rc=new Set,this.oc=new Be(j.comparator),this.uc=new Map,this.cc=new Au,this.ac={},this.hc=new Map,this.lc=Xs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function QA(t,e){const n=iR(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await _A(n.localStore,hn(e));n.isPrimaryClient&&gy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await YA(n,e,s,a==="current",o.resumeToken)}return r}async function YA(t,e,n,s,r){t.dc=(h,d,g)=>async function(w,_,N,R){let U=_.view.zu(N);U.Mi&&(U=await Jd(w.localStore,_.query,!1).then(({documents:ie})=>_.view.zu(ie,U)));const P=R&&R.targetChanges.get(_.targetId),Y=_.view.applyChanges(U,w.isPrimaryClient,P);return sf(w,_.targetId,Y.Yu),Y.snapshot}(t,h,d,g);const i=await Jd(t.localStore,e,!0),o=new zA(e,i.Wi),a=o.zu(i.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);sf(t,n,l.Yu);const u=new KA(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function JA(t,e){const n=Z(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Ra(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ul(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),my(n.remoteStore,s.targetId),hl(n,s.targetId)}).catch(Ci)):(hl(n,s.targetId),await ul(n.localStore,s.targetId,!0))}async function XA(t,e,n){const s=oR(t);try{const r=await function(i,o){const a=Z(i),c=Fe.now(),l=o.reduce((d,g)=>d.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=dn(),w=se();return a.Ki.getEntries(d,l).next(_=>{g=_,g.forEach((N,R)=>{R.isValidDocument()||(w=w.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{u=_;const N=[];for(const R of o){const U=AS(R,u.get(R.key).overlayedDocument);U!=null&&N.push(new vs(R.key,U,xm(U.value.mapValue),zt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,N,o)}).next(_=>{h=_;const N=_.applyToLocalDocumentSet(u,w);return a.documentOverlayCache.saveOverlays(d,_.batchId,N)})}).then(()=>({batchId:h.batchId,changes:zm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Be(ue)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ni(s,r.changes),await La(s.remoteStore)}catch(r){const i=xu(r,"Failed to persist write");n.reject(i)}}async function Ay(t,e){const n=Z(t);try{const s=await mA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Ie(o.ec):r.removedDocuments.size>0&&(Ie(o.ec),o.ec=!1))}),await Ni(n,s,e)}catch(s){await Ci(s)}}function nf(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Lu(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZA(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Be(j.comparator);o=o.insert(i,Ze.newNoDocument(i,X.min()));const a=se().add(i),c=new Da(X.min(),new Map,new $e(ue),o,a);await Ay(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Mu(s)}else await ul(s.localStore,e,!1).then(()=>hl(s,e,n)).catch(Ci)}async function eR(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await gA(n.localStore,e);ky(n,s,null),Ry(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ni(n,r)}catch(r){await Ci(r)}}async function tR(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);ky(s,e,n),Ry(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ni(s,r)}catch(r){await Ci(r)}}function Ry(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function ky(t,e,n){const s=Z(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Ny(t,s)})}function Ny(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(my(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Mu(t))}function sf(t,e,n){for(const s of n)s instanceof Cy?(t.cc.addReference(s.key,e),nR(t,s)):s instanceof Sy?(V("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Ny(t,s.key)):G()}function nR(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(s),Mu(t))}function Mu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(Ee.fromString(e)),s=t.lc.next();t.uc.set(s,new GA(n)),t.oc=t.oc.insert(n,s),gy(t.remoteStore,new cs(hn(Eu(n.path)),s,2,yu.ct))}}async function Ni(t,e,n){const s=Z(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ku.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>C.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Si(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(h,w)}}}(s.localStore,i))}async function sR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await hy(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ni(n,s.Qi)}}function rR(t,e){const n=Z(t),s=n.uc.get(e);if(s&&s.ec)return se().add(s.key);{let r=se();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function iR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZA.bind(null,e),e.nc.zo=qA.bind(null,e.eventManager),e.nc.wc=HA.bind(null,e.eventManager),e}function oR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tR.bind(null,e),e}class rf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pA(this.persistence,new dA,e.initialUser,this.serializer)}createPersistence(e){return new uA(Ru.Fs,this.serializer)}createSharedClientState(e){return new EA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sR.bind(null,this.syncEngine),await VA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jA}createDatastore(e){const n=Pa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new CA(r));var r;return function(i,o,a,c){return new RA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>nf(this.syncEngine,a,0),o=Zd.D()?new Zd:new IA,new NA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new WA(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ki(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ye.UNAUTHENTICATED,this.clientId=Nm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await hy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function of(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uR(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ef(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ef(e.remoteStore,i)),t._onlineComponents=e}function lR(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function uR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lR(n))throw n;Mo("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new rf)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await mc(t,new rf);return t._offlineComponents}async function Dy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await of(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await of(t,new aR))),t._onlineComponents}function hR(t){return Dy(t).then(e=>e.syncEngine)}async function Py(t){const e=await Dy(t),n=e.eventManager;return n.onListen=QA.bind(null,e.syncEngine),n.onUnlisten=JA.bind(null,e.syncEngine),n}function dR(t,e,n={}){const s=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Oy({next:h=>{i.enqueueAndForget(()=>by(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new M(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new M(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ty(Eu(o.path),l,{includeMetadataChanges:!0,xu:!0});return Iy(r,u)}(await Py(t),t.asyncQueue,e,n,s)),s.promise}function fR(t,e,n={}){const s=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Oy({next:h=>{i.enqueueAndForget(()=>by(r,u)),h.fromCache&&a.source==="server"?c.reject(new M(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ty(o,l,{includeMetadataChanges:!0,xu:!0});return Iy(r,u)}(await Py(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pR(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cf(t){if(!j.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lf(t){if(j.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ma(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ma(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gR(t,e){if(e<=0)throw new M(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $C;switch(n.type){case"firstParty":return new qC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=af.get(e);n&&(V("ComponentProvider","Removing Datastore"),af.delete(e),n.terminate())}(this),Promise.resolve()}}function mR(t,e,n,s={}){var r;const i=(t=Fn(t,Ua))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ye.MOCK_USER;else{o=hI(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ye(c)}t._authCredentials=new VC(new km(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Bn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bn(this.firestore,e,this._query)}}class kn extends Bn{constructor(e,n,s){super(e,n,Eu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new j(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function Je(t,e,...n){if(t=pt(t),xy("collection","path",e),t instanceof Ua){const s=Ee.fromString(e,...n);return lf(s),new kn(t,null,s)}{if(!(t instanceof dt||t instanceof kn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return lf(s),new kn(t.firestore,null,s)}}function Jn(t,e,...n){if(t=pt(t),arguments.length===1&&(e=Nm.A()),xy("doc","path",e),t instanceof Ua){const s=Ee.fromString(e,...n);return cf(s),new dt(t,null,new j(s))}{if(!(t instanceof dt||t instanceof kn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return cf(s),new dt(t.firestore,t instanceof kn?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new fy(this,"async_queue_retry"),this.qc=()=>{const n=gc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new sn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Si(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw un("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Pu.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Oi extends Ua{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new yR,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ly(this),this._firestoreClient.terminate()}}function vR(t,e){const n=typeof t=="object"?t:Hp(),s=typeof t=="string"?t:e||"(default)",r=Fl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cI("firestore");i&&mR(r,...i)}return r}function Uu(t){return t._firestoreClient||Ly(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ly(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new nS(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new cR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(at.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^__.*__$/;class wR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ai(e,this.data,n,this.fieldTransforms)}}function Uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Vu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ho(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Uy(this.Yc)&&_R.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ER{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pa(e)}ua(e,n,s,r=!1){return new Vu({Yc:e,methodName:n,oa:s,path:tt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fy(t){const e=t._freezeSettings(),n=Pa(t._databaseId);return new ER(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IR(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);By("Data must be an object, but it was:",o,s);const a=$y(s,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=TR(e,h,n);if(!o.contains(d))throw new M(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SR(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new wR(new Et(a),c,l)}function bR(t,e,n,s=!1){return Bu(n,t.ua(s?4:3,e))}function Bu(t,e){if(Vy(t=pt(t)))return By("Unsupported field value:",e,t),$y(t,e);if(t instanceof My)return function(n,s){if(!Uy(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Bu(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ES(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:jo(s.serializer,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jo(s.serializer,r)}}if(n instanceof $u)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:iy(s.serializer,n._byteString)};if(n instanceof dt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Su(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Ma(n)}`)}(t,e)}function $y(t,e){const n={};return Om(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(s,r)=>{const i=Bu(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Vy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof $u||t instanceof er||t instanceof dt||t instanceof My)}function By(t,e,n){if(!Vy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ma(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function TR(t,e,n){if((e=pt(e))instanceof Fu)return e._internalPath;if(typeof e=="string")return jy(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const CR=new RegExp("[~\\*/\\[\\]]");function jy(t,e,n){if(e.search(CR)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function SR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AR extends qy{data(){return super.data()}}function Fa(t,e){return typeof e=="string"?jy(t,e):e instanceof Fu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ju{}class qu extends ju{}function rn(t,e,...n){let s=[];e instanceof ju&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Hu).length,o=r.filter(a=>a instanceof $a).length;if(i>1||i>0&&o>0)throw new M(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class $a extends qu{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new $a(e,n,s)}_apply(e){const n=this._parse(e);return Hy(e._query,n),new Bn(e.firestore,e.converter,il(e._query,n))}_parse(e){const n=Fy(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new M(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){df(u,l);const d=[];for(const g of u)d.push(hf(a,r,g));h={arrayValue:{values:d}}}else h=hf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||df(u,l),h=bR(o,i,u,l==="in"||l==="not-in");return Le.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Nn(t,e,n){const s=e,r=Fa("where",t);return $a._create(r,s,n)}class Hu extends ju{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Mt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Hy(i,a),i=il(i,a)}(e._query,n),new Bn(e.firestore,e.converter,il(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zu extends qu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zu(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Fs(r,i);return function(a,c){if(Iu(a)===null){const l=Aa(a);l!==null&&zy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Bn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new gr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function kR(t,e="asc"){const n=e,s=Fa("orderBy",t);return zu._create(s,n)}class Ku extends qu{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Ku(e,n,s)}_apply(e){return new Bn(e.firestore,e.converter,$o(e._query,this._limit,this._limitType))}}function NR(t){return gR("limit",t),Ku._create("limit",t,"F")}function hf(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new M(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bm(e)&&n.indexOf("/")!==-1)throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ee.fromString(n));if(!j.isDocumentKey(s))throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Md(t,new j(s))}if(n instanceof dt)return Md(t,n._key);throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ma(n)}.`)}function df(t,e){if(!Array.isArray(t)||t.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hy(t,e){if(e.isInequality()){const s=Aa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Iu(t);i!==null&&zy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function zy(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class OR{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return pr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new $u(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Pm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ri(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ee.fromString(e);Ie(uy(s));const r=new ii(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ky extends qy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ao extends Ky{data(e={}){return super.data(e)}}class PR{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Rr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ao(this._firestore,this._userDataWriter,s.key,s,new Rr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ao(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Rr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ao(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Rr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:xR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){t=Fn(t,dt);const e=Fn(t.firestore,Oi);return dR(Uu(e),t._key).then(n=>MR(e,t,n))}class Gy extends OR{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function on(t){t=Fn(t,Bn);const e=Fn(t.firestore,Oi),n=Uu(e),s=new Gy(e);return RR(t._query),fR(n,t._query).then(r=>new PR(e,s,t,r))}function $r(t,e,n){t=Fn(t,dt);const s=Fn(t.firestore,Oi),r=DR(t.converter,e,n);return Wy(s,[IR(Fy(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,zt.none())])}function LR(t){return Wy(Fn(t.firestore,Oi),[new bu(t._key,zt.none())])}function Wy(t,e){return function(n,s){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>XA(await hR(n),s,r)),r.promise}(Uu(t),e)}function MR(t,e,n){const s=n.docs.get(e._key),r=new Gy(t);return new Ky(t,r,e._key,s,new Rr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){fr=n})(ar),Ks(new ls("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Oi(new BC(n.getProvider("auth-internal")),new zC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Rn(Od,"3.10.1",t),Rn(Od,"3.10.1","esm2017")})();const UR={apiKey:"AIzaSyAm248JQ15SmLapJ0T-EXlG-S0UGMcHdYw",authDomain:"snickers-ff4df.firebaseapp.com",projectId:"snickers-ff4df",storageBucket:"snickers-ff4df.appspot.com",messagingSenderId:"370306569806",appId:"1:370306569806:web:87e2b34dc221714bbdd51f",measurementId:"G-DXZF2TQNQ8"},Qy=qp(UR),Xe=vR(Qy),kr=xT(Qy),FR=new Zt,zo=eI({state:{user:{loggedIn:!1,data:null}},getters:{user(t){return t.user}},mutations:{SET_LOGGED_IN(t,e){t.user.loggedIn=e},SET_USER(t,e){t.user.data=e}},actions:{async register(t,{email:e,password:n}){const s=await v0(kr,e,n);if(s)t.commit("SET_USER",s.user);else throw new Error("Unable to register user")},async login(t,{email:e,password:n}){const s=await _0(kr,e,n);if(s)t.commit("SET_USER",s.user);else throw new Error("login failed")},async loginFacebook(t,{}){const e=q0(kr,FR);if(e)t.commit("SET_USER",e.user);else throw new Error("facebook login failed")},async logOut(t){await I0(kr),t.commit("SET_USER",null)},async fetchUser(t,e){t.commit("SET_LOGGED_IN",e!==null),e?t.commit("SET_USER",{displayName:e.displayName,email:e.email}):t.commit("SET_USER",null)}}}),Qt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},$R={setup(){const t=ir();xn(),kr.onAuthStateChanged(e=>{t.dispatch("fetchUser",e)})},data(){return{router:xn(),store:zo}}};function VR(t,e,n,s,r,i){const o=Dn("router-view");return pe(),po(o)}const BR=Qt($R,[["render",VR]]),jR="/assets/logo-7d52c660.png";const qR={props:["user"],data(){return{router:xn(),store:ir()}},methods:{getUser(){return this.store.getters.user.loggedIn?this.store.getters.user.data.email:"Login"},getUserLink(){return this.store.getters.user.loggedIn?"/profile":"/login"}}},HR={class:"row header-row"},zR=y("div",{class:"header-col left-col col-lg-6"},[y("a",{href:"/"},[y("img",{class:"logo",src:jR,alt:"No logo :("})])],-1),KR={class:"header-col d-flex right-col col-lg-6"},GR=["href"];function WR(t,e,n,s,r,i){return pe(),be("header",null,[y("div",HR,[zR,y("div",KR,[y("a",{class:"login-link text-white",href:this.getUserLink()},ke(this.getUser()),9,GR)])])])}const ws=Qt(qR,[["render",WR]]);const QR={components:{Header:ws},data(){return{email:"",password:"",router:xn()}},methods:{async login(){try{await zo.dispatch("login",{email:this.email,password:this.password})}catch(t){console.log(t.message)}this.router.push("/profile")},async loginFacebook(){try{await zo.dispatch("loginFacebook",{})}catch(t){console.log(t.message)}this.router.push("/profile")}}},YR={class:"login-main"},JR={class:"login-container"},XR=y("h2",{class:"text-white lato"},"Log in to your account",-1),ZR={class:"input-group mb-3"},ek=y("div",{class:"input-group-prepend"},[y("span",{class:"input-group-text button-login lato"},"Email")],-1),tk={class:"input-group mb-3"},nk=y("div",{class:"input-group-prepend"},[y("span",{class:"input-group-text button-login lato",id:"basic-addon2"},"Password")],-1),sk=y("button",{type:"submit",class:"btn btn-light submit-button lato"},"Login",-1),rk=y("a",{href:"/register"},[y("h3",{class:"lato red register"},"Register")],-1);function ik(t,e,n,s,r,i){return pe(),be("div",YR,[y("div",JR,[XR,y("form",{action:"/",onSubmit:e[2]||(e[2]=Nl((...o)=>i.login&&i.login(...o),["prevent"]))},[y("div",ZR,[ek,Cn(y("input",{name:"email",type:"email",id:"basic-addon1 email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),required:"",class:"form-control input-login lato",placeholder:"...","aria-label":"Email","aria-describedby":"basic-addon1"},null,512),[[qs,r.email]])]),y("div",tk,[nk,Cn(y("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),required:"",class:"form-control input-login lato",placeholder:"...","aria-label":"Email","aria-describedby":"basic-addon2"},null,512),[[qs,r.password]])]),sk],32)]),rk,y("button",{onClick:e[3]||(e[3]=(...o)=>i.loginFacebook&&i.loginFacebook(...o)),class:"btn btn-primary"},"Login/register with Facebook")])}const ok=Qt(QR,[["render",ik]]);const ak={props:["name","imageLink","price","id"]},ck=["href"],lk=["src"],uk={class:"row"},hk={class:"col-lg-9"},dk={class:"item-name"},fk={class:"col-lg-3"},pk={class:"item-price"};function gk(t,e,n,s,r,i){return pe(),be("a",{href:"/item/"+n.id,class:"item-container"},[y("img",{class:"item-image",src:n.imageLink},null,8,lk),y("div",uk,[y("div",hk,[y("h3",dk,ke(n.name),1)]),y("div",fk,[y("h3",pk,ke(n.price)+"zł",1)])])],8,ck)}const Gu=Qt(ak,[["render",gk]]),mk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASeSURBVHic7dtLqFVVHMfxz915FSsr86qgltoNyhplBaVBhT3uIMqIyGoQDayIHhRBDQoaBBU0KKIaSZYNKqMc1EyIEtEs6YE9TCtMg1Czbnrt0lVPg+WNm521z95nP84p7hfWZO/D7/df/73XXs/TozyOwwW4BOfibMxCH07AEIbxM3bgK2zE+qPX/pMkWIJV+AWNNsphbMBDmFFv+O3Ti+X4TnuVjpVhvCy8PV3LUvyg3IofW0bwAqbXVKdMzMQa1Vb82LIb19VRuVYsxi71Vn5seUlodqXTk+E3twrtMk8Au7AZ27AXv2EyTsR8LMD5mJhDcy1uPKpVG3cKX+ksT+kL4Uven1F7MgbwCg5k9PgUU4tXKxvLcCRDUOtwZUGvPjyO/Rn8NghvUqUswh8tAtkrNI8szSgrs/FWC98G3inZ9x9M0/qDtw5zqgoAdwhjgrQYHq7K/I0WxmuE9ls1lwkfvFgcIzivbNPrUwwbWC2M+eviImEOEYtnozAcL4VefJti9iEmlWWWg2uk90S3lWV0V4rJHmFm1ymeisTVEMYaE4oa9OCbFJObihoUpBdfisd3c1GDgRTx94uKl8QV4jGuLSq+MkX80qLiJbJO8xgPY267or3iixmfFIu3dJaKP6i72xVdlCJ6f7F4S2ei+MNa067oAxHBBk4rFm8lvKp5rHvbEUuEhcxmfI+d7YhWzAeR69O00VUnwvy8GZvzitVEWlzn5BVLxF/z7XnFamK78Mo3Y2ZesQSnRu5161r9AWGq3oy+vGKJ+DDyYF6xGtkfuZ57rpKIz6YqWYQsidha4kheoQT7IvdOyitWEwmmRO4NtyMW6z/n5RWriTnizfanvGKJsMvTjNxdSk0sSLmXe9ySYEvk3oU6swDSisWR6yPYmlcswWeRe5OFre5u46rI9S3a7Lmmiy85rWhHsELmi+9VPF9E+OOI6H7xgVIneFJ84rakiPCDKcKPFREukVPEl8n3KLguOAN/RsR/19kF0VGeFX9IT5dhsCrFYHUZBgVYKHzlm8V2SIHlsLGcdVQsloTlZZi0wRTp+xUryzRbkWI0jMvLNMvABLyXEtOQkvcopwnHUmKGg7i4TMMUJkhvlg08WoXxshamQ7i2CuMxTJH+5BvCvmDhHaEYL7YwPyJ8eauYMi+U3uZHy0AF3n8zSXwTYmz5WnxompepQlcX+9ofW3bizJK8m3KysACZJZj1uEF7k6d+4W0azOhVaxL6sClHQL/iNaHLXOjfiyqJsM4wgCfwUQ7tjiXheLxdIMCDwqrTvhIq27EkJHhEfLhcZdmEq/Fji99VngTCa52nSRQpQ0I/P9rT9OuSJCS4XfknxUfLiHB4cm4T765JAmEQcotwgCLLgcpWZTeeEd+qG6WrkjDKPNyDd4W5eZYKH8LneE4YS+Q5N1xaEqo6bTkPZ+B0YSFjdHwwKDzpHcKZpKECHv3C25e2hb9LmMB16z5nYeZq/eeN2ptD3YwnwXgSMJ4EjCcB40lA9nHC7E4FWAdZkvBmx6KriVZJiB0O+V+R9k3Y1sG4aiWWhPs6GVTdzMLrwlnjrbgXPX8BT4aeZtSDLlIAAAAASUVORK5CYII=";const yk={components:{Header:ws,Item:Gu},data(){return{searchString:"",searchCategory:"Popular",items:[],filteredItems:[],recentItems:[]}},methods:{chooseCategory(t){this.searchCategory=t,this.updateItems()},async updateItems(){this.items=[];const t=Je(Xe,"items"),e=rn(t,Nn("Categories","array-contains",this.searchCategory));(await on(e)).forEach(s=>{let r=s.data();console.log(r),this.items.push({name:r.name,price:r.price,imageLink:r.image_link,id:r.id})}),this.filterItems()},filterItems(){this.filteredItems=this.items.filter(t=>t.name.toLowerCase().includes(this.searchString.toLowerCase()))},async getRecentItems(){this.recentItems=[];const t=Je(Xe,"items"),e=rn(t,kR("date_added","desc"),NR(3));(await on(e)).forEach(s=>{let r=s.data();this.recentItems.push({name:r.name,price:r.price,imageLink:r.image_link,id:r.id})})}},mounted(){this.updateItems(),this.getRecentItems()}},vk={class:"main row"},_k={class:"col-lg-3 filters"},wk={class:"categories-container"},Ek={class:"recent"},Ik=y("h2",{class:"text-center lato-red"},"Recently added",-1),bk={class:"recent-container"},Tk={class:"col-lg-9 content-container"},Ck={class:"search-bar"},Sk={class:"input-group"},Ak={class:"input-group-prepend"},Rk=y("img",{class:"search-logo",src:mk,alt:" "},null,-1),kk=[Rk],Nk={class:"text-center lato-red"},Ok={class:"content"};function Dk(t,e,n,s,r,i){const o=Dn("Header"),a=Dn("Item");return pe(),be(Ae,null,[Me(o),y("div",vk,[y("div",_k,[y("div",wk,[y("a",{href:"#",onClick:e[0]||(e[0]=c=>this.chooseCategory("Men")),class:"category text-white"},"Men"),y("a",{href:"#",onClick:e[1]||(e[1]=c=>this.chooseCategory("Women")),class:"category text-white"},"Women"),y("a",{href:"#",onClick:e[2]||(e[2]=c=>this.chooseCategory("Children")),class:"category text-white"},"Children"),y("a",{href:"#",onClick:e[3]||(e[3]=c=>this.chooseCategory("Popular")),class:"category text-white"},"Popular"),y("a",{href:"#",onClick:e[4]||(e[4]=c=>this.chooseCategory("For sale")),class:"category text-white"},"For sale")]),y("div",Ek,[Ik,y("div",bk,[(pe(!0),be(Ae,null,rs(r.recentItems,c=>(pe(),po(a,{name:c.name,imageLink:c.imageLink,price:c.price,id:c.id},null,8,["name","imageLink","price","id"]))),256))])])]),y("div",Tk,[y("div",Ck,[y("div",Sk,[y("div",Ak,[y("button",{onClick:e[5]||(e[5]=(...c)=>i.filterItems&&i.filterItems(...c)),class:"btn btn-light search-button",id:"inputGroup-sizing-default"},kk)]),Cn(y("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=c=>r.searchString=c),class:"form-control search-input","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"},null,512),[[qs,r.searchString]])])]),y("h2",Nk,ke(r.searchCategory),1),y("div",Ok,[(pe(!0),be(Ae,null,rs(r.filteredItems,c=>(pe(),po(a,{name:c.name,imageLink:c.imageLink,price:c.price,id:c.id},null,8,["name","imageLink","price","id"]))),256))])])])],64)}const Pk=Qt(yk,[["render",Dk]]);const xk={components:{Header:ws},data(){return{availableSizes:{},item:{name:""},size:"",shop:"",reviews:[],reviewScore:0,store:ir(),router:xn()}},methods:{async getAvailable(){this.availableSizes=[];const t=Je(Xe,"items-available"),e=rn(t,Nn("item_id","==",this.item.id)),n=await on(e);n.forEach(s=>{s.data().sizes.forEach(i=>{this.availableSizes[i]=[]})}),n.forEach(s=>{let r=s.data();r.sizes.forEach(i=>{this.availableSizes[i].push(r.shop_name)})})},async getItem(){this.item={name:""};const t=Je(Xe,"items"),e=rn(t,Nn("id","==",Number.parseInt(this.$route.params.item_id))),n=await on(e);let s,r;n.forEach(i=>{r=i.id,s=i.data()}),this.itemRef=r,this.item=s,await this.loadReviews()},async addToCart(){if(this.size==""||this.shop==""||!this.store.getters.user.loggedIn){navigator.vibrate(250),window.alert("Unable to add product");return}const t=Je(Xe,"user-carts");let e=Jn(t,"user-carts-"+this.store.getters.user.data.email),n=(await ff(e)).data();if(n==null){let s=Jn(Je(Xe,"user-carts"),"user-carts-"+this.store.getters.user.data.email);await $r(s,{user_email:this.store.getters.user.data.email,items:[]}),n=(await ff(e)).data()}n.items.push({size:this.size,shop:this.shop,item_id:this.item.id}),await $r(Jn(Je(Xe,"user-carts"),"user-carts-"+this.store.getters.user.data.email),n),this.router.push("/")},async loadReviews(){this.reviews=[],(await on(rn(Je(Xe,"item-reviews"),Nn("item_id","==",this.item.id)))).forEach(e=>{let n=e.data();this.reviews.push(n)})},async leaveReview(){const t=Jn(Je(Xe,"item-reviews"),"item-reviews-"+this.store.getters.user.data.email+"-"+this.item.id);await $r(t,{email:this.store.getters.user.data.email,score:this.reviewScore,item_id:this.item.id}),await this.loadReviews()},async deleteReview(){const t=Jn(Je(Xe,"item-reviews"),"item-reviews-"+this.store.getters.user.data.email+"-"+this.item.id);LR(t),await this.loadReviews()},async share(){navigator.share({url:"https://marcelniwicki.github.io/item/"+this.item.id,text:"Hey! Look at these awesome sneakers i found!",title:"Share"})}},async mounted(){await this.getItem(),await this.getAvailable()}},Lk={class:"item-page-main"},Mk={class:"row"},Uk={class:"col-lg-4"},Fk=["src"],$k={class:"col-lg-8"},Vk={class:"item-info"},Bk={class:"lato-red item-info-name"},jk={class:"row"},qk={class:"col-lg-6"},Hk={class:"lato-red item-info-parameter"},zk={class:"lato-red item-info-parameter"},Kk={class:"lato-red item-info-parameter"},Gk={class:"lato-red item-info-parameter"},Wk={class:"lato-red"},Qk={class:"col-lg-6"},Yk={class:"lato-red description"},Jk={class:"buttons-container"},Xk={class:"row"},Zk={class:"col-lg-3"},e1={key:0,class:"leave-review-container"},t1={class:"lato-red"},n1={class:"col-lg-9"},s1={class:"reviews-container"},r1={class:"review"},i1={class:"lato-red"},o1={class:"lato-red"};function a1(t,e,n,s,r,i){const o=Dn("Header");return pe(),be(Ae,null,[Me(o),y("div",Lk,[y("div",Mk,[y("div",Uk,[y("img",{class:"item-info-img",src:r.item.image_link,alt:"PIGNASIUOGSR"},null,8,Fk)]),y("div",$k,[y("div",Vk,[y("h2",Bk,ke(r.item.name),1),y("div",jk,[y("div",qk,[y("h3",Hk,"Use: "+ke(r.item.use),1),y("h3",zk,"Color: "+ke(r.item.color),1),y("h3",Kk,[Nc("Size: "),Cn(y("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.size=a),id:"available-sizes",class:"lato-red item-info-select custom-select"},[(pe(!0),be(Ae,null,rs(Object.keys(r.availableSizes),a=>(pe(),be("option",null,ke(a),1))),256))],512),[[Sh,r.size]])]),y("h3",Gk,[Nc("Available in: "),Cn(y("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.shop=a),id:"available-shops",class:"lato-red item-info-select custom-select"},[(pe(!0),be(Ae,null,rs(r.availableSizes[r.size],a=>(pe(),be("option",null,ke(a),1))),256))],512),[[Sh,r.shop]])]),y("h3",Wk,ke(r.item.price)+" zł",1)]),y("div",Qk,[y("p",Yk,ke(r.item.description),1)])]),y("div",Jk,[y("button",{onClick:e[2]||(e[2]=a=>this.addToCart()),class:"btn btn-outline-danger btn-large"},"Add to cart"),y("button",{onClick:e[3]||(e[3]=(...a)=>i.share&&i.share(...a)),class:"btn btn-outline-danger btn-large"},"Share")])])]),y("div",Xk,[y("div",Zk,[this.store.getters.user.loggedIn?(pe(),be("div",e1,[y("h3",t1,"Leave a review: "+ke(r.reviewScore),1),Cn(y("input",{type:"range",class:"form-range","onUpdate:modelValue":e[4]||(e[4]=a=>r.reviewScore=a),min:"0",max:"10",id:"customRange2"},null,512),[[qs,r.reviewScore]]),y("button",{onClick:e[5]||(e[5]=(...a)=>i.leaveReview&&i.leaveReview(...a)),class:"r-button btn btn-outline-danger"},"Submit"),y("button",{onClick:e[6]||(e[6]=(...a)=>i.deleteReview&&i.deleteReview(...a)),class:"r-button btn btn-outline-danger"},"Delete your review")])):j_("",!0)]),y("div",n1,[y("div",s1,[(pe(!0),be(Ae,null,rs(r.reviews,a=>(pe(),be("div",r1,[y("h4",i1,"Review by "+ke(a.email),1),y("h4",o1,"Score: "+ke(a.score),1)]))),256))])])])])])],64)}const c1=Qt(xk,[["render",a1]]);const l1={data(){return{userEmail:"",userPass:"",store:ir(),router:xn()}},components:{Header:ws},methods:{async register(){try{await this.store.dispatch("register",{email:this.userEmail,password:this.userPass})}catch(t){console.log(t.message)}this.router.push("/profile")}}},u1={class:"login-main"},h1={class:"login-container"},d1=y("h2",{class:"text-white lato"},"Create new account",-1),f1={class:"input-group mb-3"},p1=y("div",{class:"input-group-prepend"},[y("span",{class:"input-group-text button-login lato",id:"basic-addon1"},"Email")],-1),g1={class:"input-group mb-3"},m1=y("div",{class:"input-group-prepend"},[y("span",{class:"input-group-text button-login lato",id:"basic-addon2"},"Password")],-1),y1=y("button",{type:"submit",class:"btn btn-light submit-button lato"},"Register",-1),v1=y("a",{href:"/login"},[y("h3",{class:"lato login-text"},"Login")],-1);function _1(t,e,n,s,r,i){return pe(),be("div",u1,[y("div",h1,[d1,y("form",{action:"/profile",onSubmit:e[2]||(e[2]=Nl((...o)=>i.register&&i.register(...o),["prevent"]))},[y("div",f1,[p1,Cn(y("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>r.userEmail=o),class:"form-control input-login lato",placeholder:"...","aria-label":"Email","aria-describedby":"basic-addon1"},null,512),[[qs,r.userEmail]])]),y("div",g1,[m1,Cn(y("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.userPass=o),class:"form-control input-login lato",placeholder:"...","aria-label":"Password","aria-describedby":"basic-addon2"},null,512),[[qs,r.userPass]])]),y1],32)]),v1])}const w1=Qt(l1,[["render",_1]]);const E1={components:{Header:ws,Item:Gu},data(){return{userEmail:"",cartItems:[],total:0,itemIds:{},store:ir(),router:xn()}},watch:{userEmail:function(t,e){t!=""&&this.getUserCart()}},methods:{async logout(){await this.store.dispatch("logOut"),this.router.push("/")},getUser(){return this.store.getters.user.loggedIn?(this.userEmail=this.store.getters.user.data.email,this.store.getters.user.data.email):""},async getUserCart(){this.cartItems=[];const t=Je(Xe,"user-carts"),e=rn(t,Nn("user_email","==",this.userEmail)),n=await on(e);let s;n.forEach(r=>{s=r.data().items}),s!=null&&s.length>0&&await this.fillCart(s)},async fillCart(t){let e={};const n=Je(Xe,"items"),s=rn(n,Nn("id","in",t.map(r=>parseInt(r.item_id,10))));(await on(s)).forEach(r=>{let i=r.data();e[i.id]=i}),this.calculateTotal(t,e),this.cartItems=t,this.itemIds=e,console.log(e),console.log(t)},calculateTotal(t,e){t.forEach(n=>{this.total+=parseFloat(e[n.item_id].price)})},async emptyCart(){const t=Je(Xe,"user-carts");let e=await Jn(t,"user-carts-"+this.store.getters.user.data.email);await $r(e,{user_email:this.store.getters.user.data.email,items:[]}),this.getUserCart(),this.total=0}},mounted(){this.store.getters.user.loggedIn}},I1={class:"profile-container"},b1={class:"row"},T1={class:"col-lg-3"},C1={class:"profile-info"},S1=y("h2",{class:"lato-red"},"You're logged in as",-1),A1={class:"col-lg-9 profile-right"},R1=y("h2",{class:"lato-red"},"Your cart",-1),k1={class:"d-flex profile-cart"},N1={class:"d-block cart-item"},O1={class:"lato-red"},D1={class:"lato-red"},P1={class:"lato-red"},x1={key:0,class:"buttons-container"},L1=y("a",{class:"btn btn-outline-danger btn-lg",href:"/order"},"Buy all",-1),M1={key:1},U1=y("h3",{class:"lato-red"},"Your cart is empty!",-1),F1=[U1];function $1(t,e,n,s,r,i){const o=Dn("Header"),a=Dn("Item");return pe(),be(Ae,null,[Me(o),y("div",I1,[y("div",b1,[y("div",T1,[y("div",C1,[S1,y("h3",{onChange:e[0]||(e[0]=c=>{i.getUserCart()}),class:"lato-red"},ke(i.getUser()),33),y("a",{class:"btn btn-outline-danger btn-lg lato-red",onClick:e[1]||(e[1]=c=>this.logout()),href:"/"},"Log out")])]),y("div",A1,[R1,y("div",k1,[(pe(!0),be(Ae,null,rs(r.cartItems,c=>(pe(),be("div",N1,[Me(a,{id:c.item_id,name:r.itemIds[c.item_id].name,price:r.itemIds[c.item_id].price,imageLink:r.itemIds[c.item_id].image_link},null,8,["id","name","price","imageLink"]),y("h3",O1,"Shop: "+ke(c.shop),1),y("h3",D1,"Size: "+ke(c.size),1)]))),256))]),y("h3",P1,"Total: "+ke(r.total)+" zł",1),Object.keys(r.cartItems).length>0?(pe(),be("div",x1,[L1,y("button",{onClick:e[2]||(e[2]=c=>{this.emptyCart()}),class:"btn btn-outline-danger btn-lg"},"Empty cart")])):(pe(),be("div",M1,F1))])])])],64)}const V1=Qt(E1,[["render",$1]]);const B1={components:{Header:ws},methods:{},mounted(){console.log(document.getElementById("map"));const t=L.map(document.getElementById("map")).setView([51.505,-.09],13);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t)}},j1=up('<div class="shop-main"><div class="row"><div class="col-lg-4"><img class="shop-img" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt="KDLSMNGOIMG"></div><div class="col-lg-8"><div class="shop-info-container"><h2 class="lato-red shop-name">{Shop name}</h2><h3 class="lato-red">Address: {Address}</h3><h3 class="lato-red">Working hours: {Working hours}</h3><p class="lato-red description">{Description}</p></div></div></div><div id="map"></div></div>',1);function q1(t,e,n,s,r,i){const o=Dn("Header");return pe(),be(Ae,null,[Me(o),j1],64)}const H1=Qt(B1,[["render",q1]]);const z1={components:{Header:ws,Item:Gu},data(){const t=ir();return{userEmail:"",cartItems:[],itemIds:{},store:t,router:xn(),user:t.getters.user.loggedIn}},methods:{getUser(){return this.store.getters.user.loggedIn?(this.userEmail=this.store.getters.user.data.email,this.store.getters.user.data.email):""},async getUserCart(){this.cartItems=[];const t=Je(Xe,"user-carts"),e=rn(t,Nn("user_email","==",this.userEmail)),n=await on(e);let s;n.forEach(r=>{s=r.data().items}),s!=null&&s.length>0&&await this.fillCart(s)},async fillCart(t){let e={};const n=Je(Xe,"items"),s=rn(n,Nn("id","in",t.map(r=>parseInt(r.item_id,10))));(await on(s)).forEach(r=>{let i=r.data();e[i.id]=i}),this.cartItems=t,this.itemIds=e,console.log(e),console.log(t)},async order(){const t=Je(Xe,"user-carts");let e=await Jn(t,"user-carts-"+this.store.getters.user.data.email);await $r(e,{user_email:this.store.getters.user.data.email,items:[]}),this.router.push("/")}},watch:{userEmail:async function(t,e){await this.getUser(),await this.getUserCart()}}},K1={hidden:""},G1=y("div",{class:"row"},[y("form",{action:"/"},[y("div",{class:"col-lg-6"}),y("div",{class:"col-lg-6"})])],-1),W1={class:"order-main"},Q1={class:"d-flex profile-cart"},Y1={class:"d-flex order-container"},J1={class:"d-block cart-item"},X1={class:"lato-red"},Z1={class:"lato-red"},eN={class:"input-form"},tN=up('<div class="input-group mb-3"><span class="input-group-text" id="basic-addon3">Full name</span><input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"></div><div class="input-group mb-3"><span class="input-group-text" id="basic-addon3">City</span><input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"></div><div class="input-group mb-3"><span class="input-group-text" id="basic-addon3">Street</span><input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"></div><div class="input-group mb-3"><span class="input-group-text" id="basic-addon3">House, apartment</span><input type="text" required class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"></div><button class="buy-button btn btn-outline-danger btn-lg">Order</button>',5),nN=[tN];function sN(t,e,n,s,r,i){const o=Dn("Item");return pe(),be(Ae,null,[y("h2",K1,ke(i.getUser()),1),G1,y("div",W1,[y("div",Q1,[y("div",Y1,[(pe(!0),be(Ae,null,rs(r.cartItems,a=>(pe(),be("div",J1,[Me(o,{id:a.item_id,name:r.itemIds[a.item_id].name,price:r.itemIds[a.item_id].price,imageLink:r.itemIds[a.item_id].image_link},null,8,["id","name","price","imageLink"]),y("h3",X1,"Shop: "+ke(a.shop),1),y("h3",Z1,"Size: "+ke(a.size),1)]))),256))])]),y("div",eN,[y("form",{action:"/",onSubmit:e[0]||(e[0]=Nl((...a)=>i.order&&i.order(...a),["prevent"]))},nN,32)])])],64)}const rN=Qt(z1,[["render",sN]]),iN=[{path:"/",name:"main",component:Pk},{path:"/item/:item_id",name:"item page",component:c1},{path:"/login",name:"login",component:ok},{path:"/register",name:"register",component:w1},{path:"/profile",name:"profile",component:V1},{path:"/shop",name:"shop",component:H1},{path:"/order",name:"order",component:rN}],oN=ME({history:Xw(),routes:iN});Cw(BR).use(zo).use(oN).mount("#app");
