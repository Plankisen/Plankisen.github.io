import{S as w,i as G,s as N,k as m,l as g,m as b,h as v,n as f,b as q,D as _,B as y,N as S,a as I,c as z,I as k,O as E,J as M,K as V}from"../../../chunks/index-6c645415.js";/* empty css                               */function D(n,l,r){const a=n.slice();return a[6]=l[r],a[8]=r,a}function $(n){let l,r,a,t,e,c,s,o,i;function u(){return n[2](n[6])}function d(){return n[3](n[6])}return{c(){l=m("div"),r=m("img"),t=I(),e=m("img"),s=I(),this.h()},l(p){l=g(p,"DIV",{class:!0});var h=b(l);r=g(h,"IMG",{class:!0,src:!0,alt:!0}),t=z(h),e=g(h,"IMG",{class:!0,src:!0,alt:!0}),s=z(h),h.forEach(v),this.h()},h(){f(r,"class","front svelte-1h1bhzg"),k(r.src,a=n[6].img)||f(r,"src",a),f(r,"alt",""),f(e,"class","back svelte-1h1bhzg"),k(e.src,c="back.webp")||f(e,"src",c),f(e,"alt",""),f(l,"class","card svelte-1h1bhzg"),E(l,"flipped",n[6].flipped)},m(p,h){q(p,l,h),_(l,r),_(l,t),_(l,e),_(l,s),o||(i=[M(l,"click",u),M(l,"keypress",d)],o=!0)},p(p,h){n=p,h&1&&!k(r.src,a=n[6].img)&&f(r,"src",a),h&1&&E(l,"flipped",n[6].flipped)},d(p){p&&v(l),o=!1,V(i)}}}function A(n){let l,r,a=n[0],t=[];for(let e=0;e<a.length;e+=1)t[e]=$(D(n,a,e));return{c(){l=m("main"),r=m("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){l=g(e,"MAIN",{class:!0});var c=b(l);r=g(c,"DIV",{class:!0});var s=b(r);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(v),c.forEach(v),this.h()},h(){f(r,"class","row svelte-1h1bhzg"),f(l,"class","svelte-1h1bhzg")},m(e,c){q(e,l,c),_(l,r);for(let s=0;s<t.length;s+=1)t[s].m(r,null)},p(e,[c]){if(c&3){a=e[0];let s;for(s=0;s<a.length;s+=1){const o=D(e,a,s);t[s]?t[s].p(o,c):(t[s]=$(o),t[s].c(),t[s].m(r,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},i:y,o:y,d(e){e&&v(l),S(t,e)}}}function B(n,l,r){let a=[];for(let i=0;i<6;i++)for(let u=0;u<2;u++)a.push({id:u+i*2,img:`https://picsum.photos/${i*5+100}/200`,flipped:!1,completed:!1}),a=a.map(d=>({value:d,sort:Math.random()})).sort((d,p)=>d.sort-p.sort).map(({value:d})=>d);let t=0,e=null;function c(i){if(!i.flipped){if(t>1){alert("chill");return}i.flipped=!0,t+=1,e!=null?e.img==i.img?(e.completed=!0,i.completed=!0,e=null,t=0):(e=null,setTimeout(()=>{a.forEach(u=>{u.flipped=u.completed}),t=0,r(0,a)},2e3)):e=i,r(0,a)}}return[a,c,i=>{c(i)},i=>{c(i)}]}class K extends w{constructor(l){super(),G(this,l,B,A,N,{})}}export{K as default};