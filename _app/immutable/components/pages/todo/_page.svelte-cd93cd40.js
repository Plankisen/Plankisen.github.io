import{S as C,i as H,s as J,k as g,q as L,a as I,l as b,m as y,r as O,h as p,c as N,n as U,b as B,D as h,L as D,J as q,B as P,M as K,K as M,N as V,u as A}from"../../../chunks/index-f3cd9b09.js";function S(o,l,i){const n=o.slice();return n[5]=l[i],n[7]=i,n}function w(o){let l,i=o[5]+"",n,s,a,d,f,m,v;return{c(){l=g("li"),n=L(i),s=I(),a=g("button"),d=L("-"),f=I()},l(r){l=b(r,"LI",{});var c=y(l);n=O(c,i),s=N(c),a=b(c,"BUTTON",{});var E=y(a);d=O(E,"-"),E.forEach(p),f=N(c),c.forEach(p)},m(r,c){B(r,l,c),h(l,n),h(l,s),h(l,a),h(a,d),h(l,f),m||(v=q(a,"click",function(){V(o[3](o[5]))&&o[3](o[5]).apply(this,arguments)}),m=!0)},p(r,c){o=r,c&2&&i!==(i=o[5]+"")&&A(n,i)},d(r){r&&p(l),m=!1,v()}}}function F(o){let l,i,n,s,a,d,f,m,v,r,c,E,T=o[1],u=[];for(let e=0;e<T.length;e+=1)u[e]=w(S(o,T,e));return{c(){l=g("h1"),i=L("Todo"),n=I(),s=g("div"),a=g("input"),d=I(),f=g("button"),m=L("+"),v=I(),r=g("ul");for(let e=0;e<u.length;e+=1)u[e].c();this.h()},l(e){l=b(e,"H1",{class:!0});var _=y(l);i=O(_,"Todo"),_.forEach(p),n=N(e),s=b(e,"DIV",{class:!0});var t=y(s);a=b(t,"INPUT",{type:!0,placeholder:!0}),d=N(t),f=b(t,"BUTTON",{});var k=y(f);m=O(k,"+"),k.forEach(p),v=N(t),r=b(t,"UL",{});var z=y(r);for(let j=0;j<u.length;j+=1)u[j].l(z);z.forEach(p),t.forEach(p),this.h()},h(){U(l,"class","svelte-v9mjaz"),U(a,"type","text"),U(a,"placeholder","what to do?"),U(s,"class","svelte-v9mjaz")},m(e,_){B(e,l,_),h(l,i),B(e,n,_),B(e,s,_),h(s,a),D(a,o[0]),h(s,d),h(s,f),h(f,m),h(s,v),h(s,r);for(let t=0;t<u.length;t+=1)u[t].m(r,null);c||(E=[q(a,"input",o[4]),q(f,"click",o[2])],c=!0)},p(e,[_]){if(_&1&&a.value!==e[0]&&D(a,e[0]),_&10){T=e[1];let t;for(t=0;t<T.length;t+=1){const k=S(e,T,t);u[t]?u[t].p(k,_):(u[t]=w(k),u[t].c(),u[t].m(r,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=T.length}},i:P,o:P,d(e){e&&p(l),e&&p(n),e&&p(s),K(u,e),c=!1,M(E)}}}function G(o,l,i){let n="",s=[];function a(){s.push(n),i(1,s)}function d(m){let v=s.indexOf(m);s.splice(v,1),i(1,s)}function f(){n=this.value,i(0,n)}return[n,s,a,d,f]}class R extends C{constructor(l){super(),H(this,l,G,F,J,{})}}export{R as default};
