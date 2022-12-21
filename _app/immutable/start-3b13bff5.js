import{S as et,i as tt,s as nt,a as rt,e as V,c as at,b as G,g as me,t as B,d as _e,f as F,h as J,j as st,o as Oe,k as ot,l as it,m as lt,n as Se,p as D,q as ct,r as ft,u as ut,v as X,w as Y,x as je,y as Q,z as Z,A as ue}from"./chunks/index-6c645415.js";import{g as We,f as ze,s as W,a as Pe,b as dt,i as pt,c as ht}from"./chunks/singletons-71757e84.js";import{u as mt}from"./chunks/parse-c28c2630.js";function _t(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function gt(n){return n.split("%25").map(decodeURI).join("%25")}function wt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const yt=["href","pathname","search","searchParams","toString","toJSON"];function bt(n,e){const t=new URL(n);for(const s of yt){let i=t[s];Object.defineProperty(t,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return vt(t),t}function vt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Et="/__data.json";function kt(n){return n.replace(/\/$/,"")+Et}function St(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;se.delete(s)}return ge(n,e)};const se=new Map;function Rt(n,e){const t=Qe(n,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:i,...c}=JSON.parse(s.textContent),a=s.getAttribute("data-ttl");return a&&se.set(t,{body:i,init:c,ttl:1e3*Number(a)}),Promise.resolve(new Response(i,c))}return ge(n,e)}function $t(n,e,t){if(se.size>0){const s=Qe(n,t),i=se.get(s);if(i){if(performance.now()<i.ttl)return new Response(i.body,i.init);se.delete(s)}}return ge(e,t)}function Qe(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${St(e.body)}"]`),s}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(n){const e=[],t=[],s=[];let i=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${Ut(n).map((a,p,b)=>{const m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(m)return e.push(m[1]),t.push(m[2]),s.push(!1),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(_)return e.push(_[1]),t.push(_[2]),s.push(!0),"(?:/([^/]+))?";const $=p===b.length-1;return a?"/"+a.split(/\[(.+?)\](?!\])/).map((U,C)=>{if(C%2){if(U.startsWith("x+"))return Re(String.fromCharCode(parseInt(U.slice(2),16)));if(U.startsWith("u+"))return Re(String.fromCharCode(...U.slice(2).split("-").map(le=>parseInt(le,16))));const I=Lt.exec(U);if(!I)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,H,ie,ee]=I;return e.push(ie),t.push(ee),s.push(!!x),H?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return $&&U.includes(".")&&(i=!1),Re(U)}).join(""):void 0}).join("")}${i?"/?":""}$`),names:e,types:t,optional:s}}function Pt(n){return!/^\([^)]+\)$/.test(n)}function Ut(n){return n.slice(1).split("/").filter(Pt)}function At(n,{names:e,types:t,optional:s},i){const c={};for(let a=0;a<e.length;a+=1){const p=e[a],b=t[a];let m=n[a+1];if(m||!s[a]){if(b){const _=i[b];if(!_)throw new Error(`Missing "${b}" param matcher`);if(!_(m))return}c[p]=m!=null?m:""}}return c}function Re(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function It(n,e,t,s){const i=new Set(e);return Object.entries(t).map(([p,[b,m,_]])=>{const{pattern:$,names:R,types:K,optional:U}=Ot(p),C={id:p,exec:I=>{const x=$.exec(I);if(x)return At(x,{names:R,types:K,optional:U},s)},errors:[1,..._||[]].map(I=>n[I]),layouts:[0,...m||[]].map(a),leaf:c(b)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function c(p){const b=p<0;return b&&(p=~p),[b,n[p]]}function a(p){return p===void 0?p:[i.has(p),n[p]]}}function jt(n){let e,t,s;var i=n[0][0];function c(a){return{props:{data:a[2],form:a[1]}}}return i&&(e=X(i,c(n))),{c(){e&&Y(e.$$.fragment),t=V()},l(a){e&&je(e.$$.fragment,a),t=V()},m(a,p){e&&Q(e,a,p),G(a,t,p),s=!0},p(a,p){const b={};if(p&4&&(b.data=a[2]),p&2&&(b.form=a[1]),i!==(i=a[0][0])){if(e){me();const m=e;B(m.$$.fragment,1,0,()=>{Z(m,1)}),_e()}i?(e=X(i,c(a)),Y(e.$$.fragment),F(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else i&&e.$set(b)},i(a){s||(e&&F(e.$$.fragment,a),s=!0)},o(a){e&&B(e.$$.fragment,a),s=!1},d(a){a&&J(t),e&&Z(e,a)}}}function Tt(n){let e,t,s;var i=n[0][0];function c(a){return{props:{data:a[2],$$slots:{default:[Nt]},$$scope:{ctx:a}}}}return i&&(e=X(i,c(n))),{c(){e&&Y(e.$$.fragment),t=V()},l(a){e&&je(e.$$.fragment,a),t=V()},m(a,p){e&&Q(e,a,p),G(a,t,p),s=!0},p(a,p){const b={};if(p&4&&(b.data=a[2]),p&523&&(b.$$scope={dirty:p,ctx:a}),i!==(i=a[0][0])){if(e){me();const m=e;B(m.$$.fragment,1,0,()=>{Z(m,1)}),_e()}i?(e=X(i,c(a)),Y(e.$$.fragment),F(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else i&&e.$set(b)},i(a){s||(e&&F(e.$$.fragment,a),s=!0)},o(a){e&&B(e.$$.fragment,a),s=!1},d(a){a&&J(t),e&&Z(e,a)}}}function Nt(n){let e,t,s;var i=n[0][1];function c(a){return{props:{data:a[3],form:a[1]}}}return i&&(e=X(i,c(n))),{c(){e&&Y(e.$$.fragment),t=V()},l(a){e&&je(e.$$.fragment,a),t=V()},m(a,p){e&&Q(e,a,p),G(a,t,p),s=!0},p(a,p){const b={};if(p&8&&(b.data=a[3]),p&2&&(b.form=a[1]),i!==(i=a[0][1])){if(e){me();const m=e;B(m.$$.fragment,1,0,()=>{Z(m,1)}),_e()}i?(e=X(i,c(a)),Y(e.$$.fragment),F(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else i&&e.$set(b)},i(a){s||(e&&F(e.$$.fragment,a),s=!0)},o(a){e&&B(e.$$.fragment,a),s=!1},d(a){a&&J(t),e&&Z(e,a)}}}function Ge(n){let e,t=n[5]&&He(n);return{c(){e=ot("div"),t&&t.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=lt(e);t&&t.l(i),i.forEach(J),this.h()},h(){Se(e,"id","svelte-announcer"),Se(e,"aria-live","assertive"),Se(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(s,i){G(s,e,i),t&&t.m(e,null)},p(s,i){s[5]?t?t.p(s,i):(t=He(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&J(e),t&&t.d()}}}function He(n){let e;return{c(){e=ct(n[6])},l(t){e=ft(t,n[6])},m(t,s){G(t,e,s)},p(t,s){s&64&&ut(e,t[6])},d(t){t&&J(e)}}}function Ct(n){let e,t,s,i,c;const a=[Tt,jt],p=[];function b(_,$){return _[0][1]?0:1}e=b(n),t=p[e]=a[e](n);let m=n[4]&&Ge(n);return{c(){t.c(),s=rt(),m&&m.c(),i=V()},l(_){t.l(_),s=at(_),m&&m.l(_),i=V()},m(_,$){p[e].m(_,$),G(_,s,$),m&&m.m(_,$),G(_,i,$),c=!0},p(_,[$]){let R=e;e=b(_),e===R?p[e].p(_,$):(me(),B(p[R],1,1,()=>{p[R]=null}),_e(),t=p[e],t?t.p(_,$):(t=p[e]=a[e](_),t.c()),F(t,1),t.m(s.parentNode,s)),_[4]?m?m.p(_,$):(m=Ge(_),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(_){c||(F(t),c=!0)},o(_){B(t),c=!1},d(_){p[e].d(_),_&&J(s),m&&m.d(_),_&&J(i)}}}function Dt(n,e,t){let{stores:s}=e,{page:i}=e,{components:c}=e,{form:a}=e,{data_0:p=null}=e,{data_1:b=null}=e;st(s.page.notify);let m=!1,_=!1,$=null;return Oe(()=>{const R=s.page.subscribe(()=>{m&&(t(5,_=!0),t(6,$=document.title||"untitled page"))});return t(4,m=!0),R}),n.$$set=R=>{"stores"in R&&t(7,s=R.stores),"page"in R&&t(8,i=R.page),"components"in R&&t(0,c=R.components),"form"in R&&t(1,a=R.form),"data_0"in R&&t(2,p=R.data_0),"data_1"in R&&t(3,b=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(i)},[c,a,p,b,m,_,$,s,i]}class qt extends et{constructor(e){super(),tt(this,e,Dt,Ct,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const xt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Vt=function(n,e){return new URL(n,e).href},Me={},z=function(e,t,s){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(c=>{if(c=Vt(c,s),c in Me)return;Me[c]=!0;const a=c.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!s)for(let _=i.length-1;_>=0;_--){const $=i[_];if($.href===c&&(!a||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":xt,a||(m.as="script",m.crossOrigin=""),m.href=c,document.head.appendChild(m),a)return new Promise((_,$)=>{m.addEventListener("load",_),m.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Bt={},we=[()=>z(()=>import("./chunks/0-7f151f5a.js"),["./chunks/0-7f151f5a.js","./chunks/_layout-5d13426d.js","./components/pages/_layout.svelte-de82ac35.js","./chunks/index-6c645415.js"],import.meta.url),()=>z(()=>import("./chunks/1-bc0f70f6.js"),["./chunks/1-bc0f70f6.js","./components/error.svelte-aa9a0851.js","./chunks/index-6c645415.js","./chunks/singletons-71757e84.js"],import.meta.url),()=>z(()=>import("./chunks/2-c054ac9b.js"),["./chunks/2-c054ac9b.js","./components/pages/_page.svelte-0329c645.js","./chunks/index-6c645415.js","./assets/_page-00ecc9f2.css","./assets/pico-17913ccb.css"],import.meta.url),()=>z(()=>import("./chunks/3-62ab2fc8.js"),["./chunks/3-62ab2fc8.js","./components/pages/chatbot/_page.svelte-7a02427c.js","./chunks/index-6c645415.js","./chunks/parse-c28c2630.js","./chunks/singletons-71757e84.js","./assets/_page-140d810a.css","./assets/pico-17913ccb.css"],import.meta.url),()=>z(()=>import("./chunks/4-80e03296.js"),["./chunks/4-80e03296.js","./components/pages/memory/_page.svelte-913099e6.js","./chunks/index-6c645415.js","./assets/_page-56b3248a.css","./assets/pico-17913ccb.css"],import.meta.url),()=>z(()=>import("./chunks/5-c2e89165.js"),["./chunks/5-c2e89165.js","./components/pages/telltale/_page.svelte-130fa2e9.js","./chunks/index-6c645415.js","./assets/_page-043d033e.css","./assets/pico-17913ccb.css"],import.meta.url),()=>z(()=>import("./chunks/6-c2a540ad.js"),["./chunks/6-c2a540ad.js","./components/pages/todo/_page.svelte-fea633ce.js","./chunks/index-6c645415.js","./assets/_page-eded0c5b.css","./assets/pico-17913ccb.css"],import.meta.url)],Ft=[],Jt={"/":[2],"/chatbot":[3],"/memory":[4],"/telltale":[5],"/todo":[6]},Kt={handleError:({error:n})=>{console.error(n)}};class Ue{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,t){this.status=e,this.location=t}}async function Wt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,i])=>[s,await i])));return n}const Ze="sveltekit:scroll",q="sveltekit:index",de=It(we,Ft,Jt,Bt),Ae=we[0],Ie=we[1];Ae();Ie();let oe={};try{oe=JSON.parse(sessionStorage[Ze])}catch{}function $e(n){oe[n]=Pe()}function zt({target:n,base:e}){var Fe;const t=[];let s=null;const i={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,url:null},a=!1,p=!1,b=!0,m=!1,_=!1,$=!1,R=!1,K,U=(Fe=history.state)==null?void 0:Fe[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const C=oe[U];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let I,x,H;async function ie(){H=H||Promise.resolve(),await H,H=null;const r=new URL(location.href),l=ve(r,!0);s=null,await Te(l,r,[])}async function ee(r,{noScroll:l=!1,replaceState:f=!1,keepFocus:o=!1,state:u={},invalidateAll:d=!1},h,v){return typeof r=="string"&&(r=new URL(r,We(document))),Ee({url:r,scroll:l?Pe():null,keepfocus:o,redirect_chain:h,details:{state:u,replaceState:f},nav_token:v,accepted:()=>{d&&(R=!0)},blocked:()=>{},type:"goto"})}async function le(r){const l=ve(r,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${r}`);return s={id:l.id,promise:De(l).then(f=>(f.type==="loaded"&&f.state.error&&(s=null),f))},s.promise}async function Te(r,l,f,o,u={},d){var v,E;x=u;let h=r&&await De(r);if(h||(h=await Be(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(r==null?void 0:r.url)||l,x!==u)return!1;if(h.type==="redirect")if(f.length>10||f.includes(l.pathname))h=await ce({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ee(new URL(h.location,l).href,{},[...f,l.pathname],u),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await W.updated.check()&&await fe(l);if(t.length=0,R=!1,m=!0,o&&o.details){const{details:w}=o,y=w.replaceState?0:1;w.state[q]=U+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(s=null,p){c=h.state,h.props.page&&(h.props.page.url=l);const w=he();K.$set(h.props),w()}else Ne(h);if(o){const{scroll:w,keepfocus:y}=o;if(y||Le(),await ue(),b){const k=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):k?k.scrollIntoView():scrollTo(0,0)}}else await ue();b=!0,h.props.page&&(I=h.props.page),d&&d(),m=!1}function Ne(r){var u,d;c=r.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),I=r.props.page;const f=he();K=new qt({target:n,props:{...r.props,stores:W},hydrate:!0}),f();const o={from:null,to:pe("to",{params:c.params,route:{id:(d=(u=c.route)==null?void 0:u.id)!=null?d:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};i.after_navigate.forEach(h=>h(o)),p=!0}async function te({url:r,params:l,branch:f,status:o,error:u,route:d,form:h}){var j;const v=f.filter(Boolean);let E="never";for(const L of f)(L==null?void 0:L.slash)!==void 0&&(E=L.slash);r.pathname=_t(r.pathname,E),r.search=r.search;const w={type:"loaded",state:{url:r,params:l,branch:f,error:u,route:d},props:{components:v.map(L=>L.node.component)}};h!==void 0&&(w.props.form=h);let y={},k=!I;for(let L=0;L<v.length;L+=1){const A=v[L];y={...y,...A.data},(k||!c.branch.some(N=>N===A))&&(w.props[`data_${L}`]=y,k=k||Object.keys((j=A.data)!=null?j:{}).length>0)}if(k||(k=Object.keys(I.data).length!==Object.keys(y).length),!c.url||r.href!==c.url.href||c.error!==u||h!==void 0||k){w.props.page={error:u,params:l,route:d,status:o,url:r,form:h,data:k?y:I.data},Object.defineProperty(w.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const L=(A,N)=>{Object.defineProperty(w.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${N}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return w}async function ye({loader:r,parent:l,url:f,params:o,route:u,server_data_node:d}){var w,y,k,T,j,L,A;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await r();if((w=E.shared)!=null&&w.load){let N=function(...g){for(const S of g){const{href:O}=new URL(S,f);v.dependencies.add(O)}};const ne={route:{get id(){return v.route=!0,u.id}},params:new Proxy(o,{get:(g,S)=>(v.params.add(S),g[S])}),data:(y=d==null?void 0:d.data)!=null?y:null,url:bt(f,()=>{v.url=!0}),async fetch(g,S){let O;g instanceof Request?(O=g.url,S={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...S}):O=g;const P=new URL(O,f).href;return N(P),p?$t(O,P,S):Rt(O,S)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(ne,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(k=await E.shared.load.call(null,ne))!=null?k:null,h=h?await Wt(h):null}return{node:E,loader:r,server:d,shared:(T=E.shared)!=null&&T.load?{type:"data",data:h,uses:v}:null,data:(j=h!=null?h:d==null?void 0:d.data)!=null?j:null,slash:(A=(L=E.shared)==null?void 0:L.trailingSlash)!=null?A:d==null?void 0:d.slash}}function Ce(r,l,f,o,u){if(R)return!0;if(!o)return!1;if(o.parent&&r||o.route&&l||o.url&&f)return!0;for(const d of o.params)if(u[d]!==c.params[d])return!0;for(const d of o.dependencies)if(t.some(h=>h(new URL(d))))return!0;return!1}function be(r,l){var f,o;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((f=r.uses.dependencies)!=null?f:[]),params:new Set((o=r.uses.params)!=null?o:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"&&l!=null?l:null}async function De({id:r,invalidating:l,url:f,params:o,route:u}){var ne;if((s==null?void 0:s.id)===r)return s.promise;const{errors:d,layouts:h,leaf:v}=u,E=[...h,v];d.forEach(g=>g==null?void 0:g().catch(()=>{})),E.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const y=c.url?r!==c.url.pathname+c.url.search:!1,k=c.route?r!==c.route.id:!1,T=E.reduce((g,S,O)=>{var re;const P=c.branch[O],M=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||Ce(g.some(Boolean),k,y,(re=P.server)==null?void 0:re.uses,o));return g.push(M),g},[]);if(T.some(Boolean)){try{w=await Ye(f,T)}catch(g){return ce({status:500,error:ae(g,{url:f,params:o,route:{id:u.id}}),url:f,route:u})}if(w.type==="redirect")return w}const j=w==null?void 0:w.nodes;let L=!1;const A=E.map(async(g,S)=>{var re;if(!g)return;const O=c.branch[S],P=j==null?void 0:j[S];if((!P||P.type==="skip")&&g[1]===(O==null?void 0:O.loader)&&!Ce(L,k,y,(re=O.shared)==null?void 0:re.uses,o))return O;if(L=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:g[1],url:f,params:o,route:u,parent:async()=>{var Ke;const Je={};for(let ke=0;ke<S;ke+=1)Object.assign(Je,(Ke=await A[ke])==null?void 0:Ke.data);return Je},server_data_node:be(P===void 0&&g[0]?{type:"skip"}:P!=null?P:null,O==null?void 0:O.server)})});for(const g of A)g.catch(()=>{});const N=[];for(let g=0;g<E.length;g+=1)if(E[g])try{N.push(await A[g])}catch(S){if(S instanceof Xe)return{type:"redirect",location:S.location};let O=500,P;j!=null&&j.includes(S)?(O=(ne=S.status)!=null?ne:O,P=S.error):S instanceof Ue?(O=S.status,P=S.body):P=ae(S,{params:o,url:f,route:{id:u.id}});const M=await qe(g,N,d);return M?await te({url:f,params:o,branch:N.slice(0,M.idx).concat(M.node),status:O,error:P,route:u}):await Be(f,{id:u.id},P,O)}else N.push(void 0);return await te({url:f,params:o,branch:N,status:200,error:null,route:u,form:l?void 0:null})}async function qe(r,l,f){for(;r--;)if(f[r]){let o=r;for(;!l[o];)o-=1;try{return{idx:o+1,node:{node:await f[r](),loader:f[r],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:r,error:l,url:f,route:o}){var w;const u={},d=await Ae();let h=null;if(d.server)try{const y=await Ye(f,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;h=(w=y.nodes[0])!=null?w:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||a)&&await fe(f)}const v=await ye({loader:Ae,url:f,params:u,route:o,parent:()=>Promise.resolve({}),server_data_node:be(h)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await te({url:f,params:u,branch:[v,E],status:r,error:l,route:null})}function ve(r,l){if(xe(r))return;const f=gt(r.pathname.slice(e.length)||"/");for(const o of de){const u=o.exec(f);if(u)return{id:r.pathname+r.search,invalidating:l,route:o,params:wt(u),url:r}}}function xe(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}function Ve({url:r,type:l,intent:f,delta:o}){var v,E,w,y,k;let u=!1;const d={from:pe("from",{params:c.params,route:{id:(E=(v=c.route)==null?void 0:v.id)!=null?E:null},url:c.url}),to:pe("to",{params:(w=f==null?void 0:f.params)!=null?w:null,route:{id:(k=(y=f==null?void 0:f.route)==null?void 0:y.id)!=null?k:null},url:r}),willUnload:!f,type:l};o!==void 0&&(d.delta=o);const h={...d,cancel:()=>{u=!0}};return _||i.before_navigate.forEach(T=>T(h)),u?null:d}async function Ee({url:r,scroll:l,keepfocus:f,redirect_chain:o,details:u,type:d,delta:h,nav_token:v,accepted:E,blocked:w}){const y=ve(r,!1),k=Ve({url:r,type:d,delta:h,intent:y});if(!k){w();return}$e(U),E(),_=!0,p&&W.navigating.set(k),await Te(y,r,o,{scroll:l,keepfocus:f,details:u},v,()=>{_=!1,i.after_navigate.forEach(T=>T(k)),W.navigating.set(null)})}async function Be(r,l,f,o){return r.origin===location.origin&&r.pathname===location.pathname&&!a?await ce({status:o,error:f,url:r,route:l}):await fe(r)}function fe(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{Oe(()=>(i.after_navigate.push(r),()=>{const l=i.after_navigate.indexOf(r);i.after_navigate.splice(l,1)}))},before_navigate:r=>{Oe(()=>(i.before_navigate.push(r),()=>{const l=i.before_navigate.indexOf(r);i.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(m||!p)&&(b=!1)},goto:(r,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ee(r,l,[])},invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")t.push(r);else{const{href:l}=new URL(r,location.href);t.push(f=>f.href===l)}return ie()},invalidateAll:()=>(R=!0,ie()),prefetch:async r=>{const l=new URL(r,We(document));await le(l)},prefetch_routes:async r=>{const f=(r?de.filter(o=>r.some(u=>o.exec(u))):de).map(o=>Promise.all([...o.layouts,o.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(f)},apply_action:async r=>{if(r.type==="error"){const l=new URL(location.href),{branch:f,route:o}=c;if(!o)return;const u=await qe(c.branch.length,f,o.errors);if(u){const d=await te({url:l,params:c.params,branch:f.slice(0,u.idx).concat(u.node),status:500,error:r.error,route:o});c=d.state;const h=he();K.$set(d.props),h(),ue().then(Le)}}else if(r.type==="redirect")ee(r.location,{invalidateAll:!0},[]);else{const l={form:r.data,page:{...I,form:r.data,status:r.status}},f=he();K.$set(l),f(),r.type==="success"&&ue().then(Le)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var d,h;let u=!1;if(!_){const v={from:pe("from",{params:c.params,route:{id:(h=(d=c.route)==null?void 0:d.id)!=null?h:null},url:c.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};i.before_navigate.forEach(E=>E(v))}u?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(U);try{sessionStorage[Ze]=JSON.stringify(oe)}catch{}}});const r=o=>{const{url:u,options:d,has:h}=ze(o);if(u&&d.prefetch&&!xe(u)){if(d.reload||h.rel_external||h.target||h.download)return;le(u)}};let l;const f=o=>{clearTimeout(l),l=setTimeout(()=>{var u;(u=o.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:u,url:d,options:h,has:v}=ze(o);if(!u||!d||!(u instanceof SVGAElement)&&d.protocol!==location.protocol&&!(d.protocol==="https:"||d.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){Ve({url:d,type:"link"})||o.preventDefault(),_=!0;return}const[w,y]=d.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){$=!0,$e(U),c.url=d,W.page.set({...I,url:d}),W.page.notify();return}Ee({url:d,scroll:h.noscroll?Pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{var u;if((u=o.state)!=null&&u[q]){if(o.state[q]===U)return;const d=o.state[q]-U;Ee({url:new URL(location.href),scroll:oe[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[q]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{$&&($=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&W.navigating.set(null)})},_hydrate:async({status:r,error:l,node_ids:f,params:o,route:u,data:d,form:h})=>{var w;a=!0;const v=new URL(location.href);let E;try{const y=f.map(async(k,T)=>{const j=d[T];return ye({loader:we[k],url:v,params:o,route:u,parent:async()=>{const L={};for(let A=0;A<T;A+=1)Object.assign(L,(await y[A]).data);return L},server_data_node:be(j)})});E=await te({url:v,params:o,branch:await Promise.all(y),status:r,error:l,form:h,route:(w=de.find(({id:k})=>k===u.id))!=null?w:null})}catch(y){if(y instanceof Xe){await fe(new URL(y.location,location.href));return}E=await ce({status:y instanceof Ue?y.status:500,error:ae(y,{url:v,params:o,route:u}),url:v,route:u})}Ne(E)}}}async function Ye(n,e){var c;const t=new URL(n);t.pathname=kt(n.pathname);const s=await ge(t.href,{headers:{"x-sveltekit-invalidated":e.map(a=>a?"1":"").join(",")}}),i=await s.json();if(!s.ok)throw new Error(i);return(c=i.nodes)==null||c.forEach(a=>{var p,b;(a==null?void 0:a.type)==="data"&&(a.data=mt(a.data),a.uses={dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((b=a.uses.params)!=null?b:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url})}),i}function ae(n,e){var t;return n instanceof Ue?n.body:(t=Kt.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Gt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(n,e){for(const t of Gt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function he(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function Yt({env:n,hydrate:e,paths:t,target:s,version:i}){dt(t),ht(i);const c=zt({target:s,base:t.base});pt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Yt as start};