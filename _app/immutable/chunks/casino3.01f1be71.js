import{S as ka,i as ma,s as fa,k as p,q as i,a as l,l as e,m as c,r as u,h as a,c as r,n as f,J as fn,b as t,G as o,H as Mn}from"./index.e7fff774.js";function da(aa){let d,dn,W,w,yn,O,k,M,gn,bn,J,vn,hn,A,wn,jn,N,_n,En,G,Sn,$,j,Hn,q,_,Pn,U,y,sa=`<code class="language-js"><span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> storedCount <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'money'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>storedCount<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      money <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>storedCount<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">saveCurrencyCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'money'</span><span class="token punctuation">,</span> money<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,B,E,xn,F,g,ta='<code class="language-js"><span class="token function">saveCurrencyCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>',K,Y,z,S,Cn,Q,b,pa=`<code class="language-js"><span class="token keyword">const</span> symbols <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Coal.webp"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Copper.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Iron.webp"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Silver.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Gold.webp"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Mithril.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">3200</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Adamantite.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">6400</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">"Runite.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">payout</span><span class="token operator">:</span> <span class="token number">12800</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">&#125;</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">const</span> initialSlots <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> slots <span class="token operator">=</span> initialSlots<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">weightedRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`,V,H,In,X,v,ea=`<code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">spin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>spinning<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>money <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"You're out of money!"</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">&#125;</span>
    spinning <span class="token operator">=</span> <span class="token boolean">true</span>
  
    <span class="token keyword">const</span> shuffleDuration <span class="token operator">=</span> <span class="token number">1000</span>
    <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime <span class="token operator">&lt;</span> shuffleDuration<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      slots <span class="token operator">=</span> initialSlots<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">weightedRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

    slots <span class="token operator">=</span> initialSlots<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">weightedRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">checkWin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    spinning <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">&#125;</span>
  
<span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,Z,P,Rn,nn,h,oa=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">weightedRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">const</span> totalWeight <span class="token operator">=</span> symbols<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> symbol</span><span class="token punctuation">)</span> <span class="token operator">=></span> sum <span class="token operator">+</span> symbol<span class="token punctuation">.</span>weight<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> totalWeight
      
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> symbol <span class="token keyword">of</span> symbols<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        random <span class="token operator">-=</span> symbol<span class="token punctuation">.</span>weight
        <span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">return</span> symbol<span class="token punctuation">.</span>id
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  
<span class="token keyword">function</span> <span class="token function">checkWin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>symbol1<span class="token punctuation">,</span> symbol2<span class="token punctuation">,</span> symbol3<span class="token punctuation">]</span> <span class="token operator">=</span> slots
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>symbol1 <span class="token operator">===</span> symbol2 <span class="token operator">&amp;&amp;</span> symbol2 <span class="token operator">===</span> symbol3<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> payout <span class="token operator">=</span> symbols<span class="token punctuation">[</span>symbol1<span class="token punctuation">]</span><span class="token punctuation">.</span>payout
    money <span class="token operator">+=</span> payout
    money <span class="token operator">-=</span> <span class="token number">10</span>
    <span class="token function">saveCurrencyCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    money <span class="token operator">-=</span> <span class="token number">10</span>
    <span class="token function">saveCurrencyCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,an,x,Ln,sn,tn,pn,C,Tn,en,on,ln,I,Dn,rn,R,Jn,cn,L,An,un,T,Nn,kn,D,Gn,mn;return{c(){d=p("h1"),dn=i("CASINO LAST UPDATE"),W=l(),w=p("p"),yn=i("Nu är jag i princip klar med projektet. Jag har finslipat en massa saker som fått spelen att faktiskt fungera och inte enkelt bli förstörda. Detta är en lista av några förbättringar jag har gjort som inte fanns tidigare."),O=l(),k=p("ul"),M=p("li"),gn=i("Nu kan man inte klicka på deal medans ett blackjack game är pågående och man kan inte klicka på hit eller stand medans ett game inte är pågående. Detta finns även på crash fast för crash knapparna."),bn=l(),J=p("li"),vn=i("Blackjack och crash har nu “proceed” knappar efter varje game så att man kan spela igen utan att ladda om sidan."),hn=l(),A=p("li"),wn=i("Knapparna är nu mer stylish med click effects, hover effects och riktig bakgrund. Även stylingen generellt är bättre."),jn=l(),N=p("li"),_n=i("Nu kan man faktiskt vinna pengar från crash och slots vilket man inte kunde göra förut."),En=l(),G=p("li"),Sn=i("En knapp på home page som man kan klicka på för att få +$1 så att man faktiskt har något att gambla med."),$=l(),j=p("p"),Hn=i("Jag tog dock bort roulette eftersom att jag inte hade tillräckligt mycket tid."),q=l(),_=p("p"),Pn=i("Jag fixade även local saving på pengarna så att man slipper börja om varje gång man laddar om sidan."),U=l(),y=p("pre"),B=l(),E=p("p"),xn=i("Och efter varje gång som valuta värdet uppdateras så sparar man det med denna funktion."),F=l(),g=p("pre"),K=l(),Y=p("hr"),z=l(),S=p("p"),Cn=i("Detta är lite kod och förklaringar som beskriver hur mitt crash spel fungerar"),Q=l(),b=p("pre"),V=l(),H=p("p"),In=i("^^ Här deklareras värden som till exempel hur mycket man ska vinna om man får 3 i rad av en viss ore och hur stor sannolikhet det är att en viss ore rullas deklareras med weight."),X=l(),v=p("pre"),Z=l(),P=p("p"),Rn=i("^^ Här är funktionaliteten för när man snurrar slots maskinen. Först så blir man förhindrad från att snurra den om den redan snurrar eller om man inte har tillräckligt mycket pengar. Sedan byts symbolerna varje 100 ms i 1000 ms så att det ser ut som att symbolerna typ snurrar. Sedan blir resultatet random beroende på hur mycket weight de olika symbolerna har och det kollas om man vann med hjälp av de 2 funktionerna nedan."),nn=l(),h=p("pre"),an=l(),x=p("p"),Ln=i("weightedRandom är funktionen som bestämmer sannolikheten för en symbol att visa sig beroende på sin weight och checkWin kollar om man vunnit genom att helt enkelt kolla om den första, andra och tredje symbolen är lika."),sn=l(),tn=p("hr"),pn=l(),C=p("p"),Tn=i("Jag hade lite trubbel med att balansera oddsen på crash och slots. På crash bestämde jag mig för att sätta en chans på 1/175 att den kraschar varje gång multiplikatorn går upp med 0.01. Slots fixade jag rätt bra genom att göra så att varje klick på spin snurrade 50000 gånger och ändrade weight och payout värdena så att man över tid vann nästan lika mycket som man förlorade. Såklart så förlorar man lite mer än man vinner eftersom att det är ett casino."),en=l(),on=p("hr"),ln=l(),I=p("p"),Dn=i("Sammanfattningsvis så har jag helt enkelt finslipat projektet. Jag hade funktionalitet för spelen sedan förra bloggen men inte någon okej styling, fungerande vinster, local saving eller något som förhindrar folk från att förstöra spelen genom att till exempel klicka på hit knappen innan deal knappen. Allt detta har jag fixat även om jag hade kunnat gjort bättre styling så finns det grundläggande så att det ser okej ut. Så här ser mina sidor ut efter att jag fixat allt detta."),rn=l(),R=p("img"),cn=i(`
^^ Här ser man den nya +1$ knappen.
`),L=p("img"),un=i(`
^^ Här ser man den nya stylingen och när man startar ett game så försvinner start game knappen tills man avslutat rundan.
`),T=p("img"),kn=i(`
^^ Här kan man också se den nya stylingen.
`),D=p("img"),mn=i(`
^^ Här kan man inte se så mycket skillnad eftersom att all ändring ligger i funktionaliteten som jag pratade om tidigare.`),this.h()},l(n){d=e(n,"H1",{});var s=c(d);dn=u(s,"CASINO LAST UPDATE"),s.forEach(a),W=r(n),w=e(n,"P",{});var Wn=c(w);yn=u(Wn,"Nu är jag i princip klar med projektet. Jag har finslipat en massa saker som fått spelen att faktiskt fungera och inte enkelt bli förstörda. Detta är en lista av några förbättringar jag har gjort som inte fanns tidigare."),Wn.forEach(a),O=r(n),k=e(n,"UL",{});var m=c(k);M=e(m,"LI",{});var On=c(M);gn=u(On,"Nu kan man inte klicka på deal medans ett blackjack game är pågående och man kan inte klicka på hit eller stand medans ett game inte är pågående. Detta finns även på crash fast för crash knapparna."),On.forEach(a),bn=r(m),J=e(m,"LI",{});var $n=c(J);vn=u($n,"Blackjack och crash har nu “proceed” knappar efter varje game så att man kan spela igen utan att ladda om sidan."),$n.forEach(a),hn=r(m),A=e(m,"LI",{});var qn=c(A);wn=u(qn,"Knapparna är nu mer stylish med click effects, hover effects och riktig bakgrund. Även stylingen generellt är bättre."),qn.forEach(a),jn=r(m),N=e(m,"LI",{});var Un=c(N);_n=u(Un,"Nu kan man faktiskt vinna pengar från crash och slots vilket man inte kunde göra förut."),Un.forEach(a),En=r(m),G=e(m,"LI",{});var Bn=c(G);Sn=u(Bn,"En knapp på home page som man kan klicka på för att få +$1 så att man faktiskt har något att gambla med."),Bn.forEach(a),m.forEach(a),$=r(n),j=e(n,"P",{});var Fn=c(j);Hn=u(Fn,"Jag tog dock bort roulette eftersom att jag inte hade tillräckligt mycket tid."),Fn.forEach(a),q=r(n),_=e(n,"P",{});var Kn=c(_);Pn=u(Kn,"Jag fixade även local saving på pengarna så att man slipper börja om varje gång man laddar om sidan."),Kn.forEach(a),U=r(n),y=e(n,"PRE",{class:!0});var la=c(y);la.forEach(a),B=r(n),E=e(n,"P",{});var Yn=c(E);xn=u(Yn,"Och efter varje gång som valuta värdet uppdateras så sparar man det med denna funktion."),Yn.forEach(a),F=r(n),g=e(n,"PRE",{class:!0});var ra=c(g);ra.forEach(a),K=r(n),Y=e(n,"HR",{}),z=r(n),S=e(n,"P",{});var zn=c(S);Cn=u(zn,"Detta är lite kod och förklaringar som beskriver hur mitt crash spel fungerar"),zn.forEach(a),Q=r(n),b=e(n,"PRE",{class:!0});var ca=c(b);ca.forEach(a),V=r(n),H=e(n,"P",{});var Qn=c(H);In=u(Qn,"^^ Här deklareras värden som till exempel hur mycket man ska vinna om man får 3 i rad av en viss ore och hur stor sannolikhet det är att en viss ore rullas deklareras med weight."),Qn.forEach(a),X=r(n),v=e(n,"PRE",{class:!0});var ia=c(v);ia.forEach(a),Z=r(n),P=e(n,"P",{});var Vn=c(P);Rn=u(Vn,"^^ Här är funktionaliteten för när man snurrar slots maskinen. Först så blir man förhindrad från att snurra den om den redan snurrar eller om man inte har tillräckligt mycket pengar. Sedan byts symbolerna varje 100 ms i 1000 ms så att det ser ut som att symbolerna typ snurrar. Sedan blir resultatet random beroende på hur mycket weight de olika symbolerna har och det kollas om man vann med hjälp av de 2 funktionerna nedan."),Vn.forEach(a),nn=r(n),h=e(n,"PRE",{class:!0});var ua=c(h);ua.forEach(a),an=r(n),x=e(n,"P",{});var Xn=c(x);Ln=u(Xn,"weightedRandom är funktionen som bestämmer sannolikheten för en symbol att visa sig beroende på sin weight och checkWin kollar om man vunnit genom att helt enkelt kolla om den första, andra och tredje symbolen är lika."),Xn.forEach(a),sn=r(n),tn=e(n,"HR",{}),pn=r(n),C=e(n,"P",{});var Zn=c(C);Tn=u(Zn,"Jag hade lite trubbel med att balansera oddsen på crash och slots. På crash bestämde jag mig för att sätta en chans på 1/175 att den kraschar varje gång multiplikatorn går upp med 0.01. Slots fixade jag rätt bra genom att göra så att varje klick på spin snurrade 50000 gånger och ändrade weight och payout värdena så att man över tid vann nästan lika mycket som man förlorade. Såklart så förlorar man lite mer än man vinner eftersom att det är ett casino."),Zn.forEach(a),en=r(n),on=e(n,"HR",{}),ln=r(n),I=e(n,"P",{});var na=c(I);Dn=u(na,"Sammanfattningsvis så har jag helt enkelt finslipat projektet. Jag hade funktionalitet för spelen sedan förra bloggen men inte någon okej styling, fungerande vinster, local saving eller något som förhindrar folk från att förstöra spelen genom att till exempel klicka på hit knappen innan deal knappen. Allt detta har jag fixat även om jag hade kunnat gjort bättre styling så finns det grundläggande så att det ser okej ut. Så här ser mina sidor ut efter att jag fixat allt detta."),na.forEach(a),rn=r(n),R=e(n,"IMG",{src:!0}),cn=u(n,`
^^ Här ser man den nya +1$ knappen.
`),L=e(n,"IMG",{src:!0}),un=u(n,`
^^ Här ser man den nya stylingen och när man startar ett game så försvinner start game knappen tills man avslutat rundan.
`),T=e(n,"IMG",{src:!0}),kn=u(n,`
^^ Här kan man också se den nya stylingen.
`),D=e(n,"IMG",{src:!0}),mn=u(n,`
^^ Här kan man inte se så mycket skillnad eftersom att all ändring ligger i funktionaliteten som jag pratade om tidigare.`),this.h()},h(){f(y,"class","language-js"),f(g,"class","language-js"),f(b,"class","language-js"),f(v,"class","language-js"),f(h,"class","language-js"),fn(R.src,Jn="/home2.png")||f(R,"src",Jn),fn(L.src,An="/crash2.png")||f(L,"src",An),fn(T.src,Nn="/slots2.png")||f(T,"src",Nn),fn(D.src,Gn="/blackjack2.png")||f(D,"src",Gn)},m(n,s){t(n,d,s),o(d,dn),t(n,W,s),t(n,w,s),o(w,yn),t(n,O,s),t(n,k,s),o(k,M),o(M,gn),o(k,bn),o(k,J),o(J,vn),o(k,hn),o(k,A),o(A,wn),o(k,jn),o(k,N),o(N,_n),o(k,En),o(k,G),o(G,Sn),t(n,$,s),t(n,j,s),o(j,Hn),t(n,q,s),t(n,_,s),o(_,Pn),t(n,U,s),t(n,y,s),y.innerHTML=sa,t(n,B,s),t(n,E,s),o(E,xn),t(n,F,s),t(n,g,s),g.innerHTML=ta,t(n,K,s),t(n,Y,s),t(n,z,s),t(n,S,s),o(S,Cn),t(n,Q,s),t(n,b,s),b.innerHTML=pa,t(n,V,s),t(n,H,s),o(H,In),t(n,X,s),t(n,v,s),v.innerHTML=ea,t(n,Z,s),t(n,P,s),o(P,Rn),t(n,nn,s),t(n,h,s),h.innerHTML=oa,t(n,an,s),t(n,x,s),o(x,Ln),t(n,sn,s),t(n,tn,s),t(n,pn,s),t(n,C,s),o(C,Tn),t(n,en,s),t(n,on,s),t(n,ln,s),t(n,I,s),o(I,Dn),t(n,rn,s),t(n,R,s),t(n,cn,s),t(n,L,s),t(n,un,s),t(n,T,s),t(n,kn,s),t(n,D,s),t(n,mn,s)},p:Mn,i:Mn,o:Mn,d(n){n&&a(d),n&&a(W),n&&a(w),n&&a(O),n&&a(k),n&&a($),n&&a(j),n&&a(q),n&&a(_),n&&a(U),n&&a(y),n&&a(B),n&&a(E),n&&a(F),n&&a(g),n&&a(K),n&&a(Y),n&&a(z),n&&a(S),n&&a(Q),n&&a(b),n&&a(V),n&&a(H),n&&a(X),n&&a(v),n&&a(Z),n&&a(P),n&&a(nn),n&&a(h),n&&a(an),n&&a(x),n&&a(sn),n&&a(tn),n&&a(pn),n&&a(C),n&&a(en),n&&a(on),n&&a(ln),n&&a(I),n&&a(rn),n&&a(R),n&&a(cn),n&&a(L),n&&a(un),n&&a(T),n&&a(kn),n&&a(D),n&&a(mn)}}}const ga={title:"Tjena",date:"2023-06-07"};class ba extends ka{constructor(d){super(),ma(this,d,null,da,fa,{})}}export{ba as default,ga as metadata};
