import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_custom_element_data,set_data,space,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[9]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[12]=t[n],s}function create_each_block_1(e){let t,n=e[12]+"",s,o;return{c(){t=element("a"),s=text(n),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"href",o="mailto:"+e[12]),attr(t,"class","card-link")},m(e,n){insert_hydration(e,t,n),append_hydration(t,s)},p(e,i){i&32&&n!==(n=e[12]+"")&&set_data(s,n),i&32&&o!==(o="mailto:"+e[12])&&attr(t,"href",o)},d(e){e&&detach(t)}}}function create_each_block(e){let t,n=e[9]+"",s,o;return{c(){t=element("a"),s=text(n),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"href",o="tel:"+e[9]),attr(t,"class","card-link")},m(e,n){insert_hydration(e,t,n),append_hydration(t,s)},p(e,i){i&128&&n!==(n=e[9]+"")&&set_data(s,n),i&128&&o!==(o="tel:"+e[9])&&attr(t,"href",o)},d(e){e&&detach(t)}}}function create_fragment(e){let l,o,T,ee,ye,F,re,ue,s,y,u,ve,r,Oe,p,g,Ce,b,_e,d,pe,m,O,he,a,fe,_,W=e[2].text+"",oe,Z,le,f,q=e[3].text+"",J,te,we,S,U=e[4].title+"",ae,ge,i,M,x,B,k,ne,Ee,h,H,Y=e[5].title+"",Q,Ae,ke,z,v,L,E,G,de,j,P,$=e[6].title+"",X,be,C,ce=e[6].location+"",me,V,w,I,A,ie,je,c,R,K=e[7].title+"",se,xe,N=e[5].addresses,n=[];for(let t=0;t<N.length;t+=1)n[t]=create_each_block_1(get_each_context_1(e,N,t));let D=e[7].numbers,t=[];for(let n=0;n<D.length;n+=1)t[n]=create_each_block(get_each_context(e,D,n));return{c(){l=element("section"),o=element("div"),T=element("h2"),ee=text(e[0]),ye=space(),F=element("p"),re=text(e[1]),ue=space(),s=element("form"),y=element("div"),u=element("input"),ve=space(),r=element("input"),Oe=space(),p=element("div"),g=element("input"),Ce=space(),b=element("input"),_e=space(),d=element("textarea"),pe=space(),m=element("div"),O=element("input"),he=space(),a=element("label"),fe=text("Accept "),_=element("a"),oe=text(W),le=text(` and
          `),f=element("a"),J=text(q),we=space(),S=element("button"),ae=text(U),ge=space(),i=element("ul"),M=element("li"),x=element("div"),B=element("div"),k=element("ion-icon"),Ee=space(),h=element("div"),H=element("h3"),Q=text(Y),Ae=space();for(let e=0;e<n.length;e+=1)n[e].c();ke=space(),z=element("li"),v=element("div"),L=element("div"),E=element("ion-icon"),de=space(),j=element("div"),P=element("h3"),X=text($),be=space(),C=element("address"),me=space(),V=element("li"),w=element("div"),I=element("div"),A=element("ion-icon"),je=space(),c=element("div"),R=element("h3"),se=text(K),xe=space();for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(D){l=claim_element(D,"SECTION",{class:!0,id:!0,"aria-label":!0});var G,He,Ue,N,De,ce,Se,te,qe,$e,Be,Z,Pe,ne,Re,ie,Ne,Ie,ze,Le,Te,We,Ge,Ke,Fe,Ye,Me,Ve,Xe=children(l);o=claim_element(Xe,"DIV",{class:!0}),G=children(o),T=claim_element(G,"H2",{class:!0}),He=children(T),ee=claim_text(He,e[0]),He.forEach(detach),ye=claim_space(G),F=claim_element(G,"P",{class:!0}),Ue=children(F),re=claim_text(Ue,e[1]),Ue.forEach(detach),ue=claim_space(G),s=claim_element(G,"FORM",{action:!0,class:!0}),N=children(s),y=claim_element(N,"DIV",{class:!0}),De=children(y),u=claim_element(De,"INPUT",{type:!0,name:!0,"aria-label":!0,placeholder:!0,class:!0}),ve=claim_space(De),r=claim_element(De,"INPUT",{type:!0,name:!0,"aria-label":!0,placeholder:!0,class:!0}),De.forEach(detach),Oe=claim_space(N),p=claim_element(N,"DIV",{class:!0}),ce=children(p),g=claim_element(ce,"INPUT",{type:!0,name:!0,"aria-label":!0,placeholder:!0,class:!0}),Ce=claim_space(ce),b=claim_element(ce,"INPUT",{type:!0,name:!0,"aria-label":!0,placeholder:!0,class:!0}),ce.forEach(detach),_e=claim_space(N),d=claim_element(N,"TEXTAREA",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),children(d).forEach(detach),pe=claim_space(N),m=claim_element(N,"DIV",{class:!0}),Se=children(m),O=claim_element(Se,"INPUT",{type:!0,name:!0,id:!0,class:!0}),he=claim_space(Se),a=claim_element(Se,"LABEL",{for:!0,class:!0}),te=children(a),fe=claim_text(te,"Accept "),_=claim_element(te,"A",{href:!0,class:!0}),qe=children(_),oe=claim_text(qe,W),qe.forEach(detach),le=claim_text(te,` and
          `),f=claim_element(te,"A",{href:!0,class:!0}),$e=children(f),J=claim_text($e,q),$e.forEach(detach),te.forEach(detach),Se.forEach(detach),we=claim_space(N),S=claim_element(N,"BUTTON",{type:!0,class:!0}),Be=children(S),ae=claim_text(Be,U),Be.forEach(detach),N.forEach(detach),ge=claim_space(G),i=claim_element(G,"UL",{class:!0}),Z=children(i),M=claim_element(Z,"LI",{class:!0}),Pe=children(M),x=claim_element(Pe,"DIV",{class:!0}),ne=children(x),B=claim_element(ne,"DIV",{class:!0}),Re=children(B),k=claim_element(Re,"ION-ICON",{name:!0,"aria-hidden":!0}),children(k).forEach(detach),Re.forEach(detach),Ee=claim_space(ne),h=claim_element(ne,"DIV",{class:!0}),ie=children(h),H=claim_element(ie,"H3",{class:!0}),Ne=children(H),Q=claim_text(Ne,Y),Ne.forEach(detach),Ae=claim_space(ie);for(let e=0;e<n.length;e+=1)n[e].l(ie);ie.forEach(detach),ne.forEach(detach),Pe.forEach(detach),ke=claim_space(Z),z=claim_element(Z,"LI",{class:!0}),Ie=children(z),v=claim_element(Ie,"DIV",{class:!0}),ze=children(v),L=claim_element(ze,"DIV",{class:!0}),Le=children(L),E=claim_element(Le,"ION-ICON",{name:!0,"aria-hidden":!0}),children(E).forEach(detach),Le.forEach(detach),de=claim_space(ze),j=claim_element(ze,"DIV",{class:!0}),Te=children(j),P=claim_element(Te,"H3",{class:!0}),We=children(P),X=claim_text(We,$),We.forEach(detach),be=claim_space(Te),C=claim_element(Te,"ADDRESS",{class:!0}),Ge=children(C),Ge.forEach(detach),Te.forEach(detach),ze.forEach(detach),Ie.forEach(detach),me=claim_space(Z),V=claim_element(Z,"LI",{class:!0}),Ke=children(V),w=claim_element(Ke,"DIV",{class:!0}),Fe=children(w),I=claim_element(Fe,"DIV",{class:!0}),Ye=children(I),A=claim_element(Ye,"ION-ICON",{name:!0,"aria-hidden":!0}),children(A).forEach(detach),Ye.forEach(detach),je=claim_space(Fe),c=claim_element(Fe,"DIV",{class:!0}),Me=children(c),R=claim_element(Me,"H3",{class:!0}),Ve=children(R),se=claim_text(Ve,K),Ve.forEach(detach),xe=claim_space(Me);for(let e=0;e<t.length;e+=1)t[e].l(Me);Me.forEach(detach),Fe.forEach(detach),Ke.forEach(detach),Z.forEach(detach),G.forEach(detach),Xe.forEach(detach),this.h()},h(){attr(T,"class","h2 section-title"),attr(F,"class","section-text"),attr(u,"type","text"),attr(u,"name","name"),attr(u,"aria-label","name"),attr(u,"placeholder","Your name*"),u.required=!0,attr(u,"class","input-field"),attr(r,"type","email"),attr(r,"name","email_address"),attr(r,"aria-label","email"),attr(r,"placeholder","Email address*"),r.required=!0,attr(r,"class","input-field"),attr(y,"class","input-wrapper"),attr(g,"type","text"),attr(g,"name","subject"),attr(g,"aria-label","subject"),attr(g,"placeholder","Subject"),attr(g,"class","input-field"),attr(b,"type","number"),attr(b,"name","phone"),attr(b,"aria-label","phone"),attr(b,"placeholder","Phone number"),attr(b,"class","input-field"),attr(p,"class","input-wrapper"),attr(d,"name","message"),attr(d,"aria-label","message"),attr(d,"placeholder","Your message...*"),d.required=!0,attr(d,"class","input-field"),attr(O,"type","checkbox"),attr(O,"name","terms_and_policy"),attr(O,"id","terms"),O.required=!0,attr(O,"class","checkbox"),attr(_,"href",Z=e[2].url),attr(_,"class","label-link"),attr(f,"href",te=e[3].url),attr(f,"class","label-link"),attr(a,"for","terms"),attr(a,"class","label"),attr(m,"class","checkbox-wrapper"),attr(S,"type","submit"),attr(S,"class","btn btn-primary"),attr(s,"action",""),attr(s,"class","contact-form"),set_custom_element_data(k,"name",ne=e[5].icon),set_custom_element_data(k,"aria-hidden","true"),attr(B,"class","card-icon"),attr(H,"class","h3 card-title"),attr(h,"class","card-content"),attr(x,"class","contact-card"),attr(M,"class","contact-item"),set_custom_element_data(E,"name",G=e[6].icon),set_custom_element_data(E,"aria-hidden","true"),attr(L,"class","card-icon"),attr(P,"class","h3 card-title"),attr(C,"class","card-address"),attr(j,"class","card-content"),attr(v,"class","contact-card"),attr(z,"class","contact-item"),set_custom_element_data(A,"name",ie=e[7].icon),set_custom_element_data(A,"aria-hidden","true"),attr(I,"class","card-icon"),attr(R,"class","h3 card-title"),attr(c,"class","card-content"),attr(w,"class","contact-card"),attr(V,"class","contact-item"),attr(i,"class","contact-list"),attr(o,"class","container"),attr(l,"class","section contact"),attr(l,"id","contact"),attr(l,"aria-label","contact")},m(e,D){insert_hydration(e,l,D),append_hydration(l,o),append_hydration(o,T),append_hydration(T,ee),append_hydration(o,ye),append_hydration(o,F),append_hydration(F,re),append_hydration(o,ue),append_hydration(o,s),append_hydration(s,y),append_hydration(y,u),append_hydration(y,ve),append_hydration(y,r),append_hydration(s,Oe),append_hydration(s,p),append_hydration(p,g),append_hydration(p,Ce),append_hydration(p,b),append_hydration(s,_e),append_hydration(s,d),append_hydration(s,pe),append_hydration(s,m),append_hydration(m,O),append_hydration(m,he),append_hydration(m,a),append_hydration(a,fe),append_hydration(a,_),append_hydration(_,oe),append_hydration(a,le),append_hydration(a,f),append_hydration(f,J),append_hydration(s,we),append_hydration(s,S),append_hydration(S,ae),append_hydration(o,ge),append_hydration(o,i),append_hydration(i,M),append_hydration(M,x),append_hydration(x,B),append_hydration(B,k),append_hydration(x,Ee),append_hydration(x,h),append_hydration(h,H),append_hydration(H,Q),append_hydration(h,Ae);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(h,null);append_hydration(i,ke),append_hydration(i,z),append_hydration(z,v),append_hydration(v,L),append_hydration(L,E),append_hydration(v,de),append_hydration(v,j),append_hydration(j,P),append_hydration(P,X),append_hydration(j,be),append_hydration(j,C),C.innerHTML=ce,append_hydration(i,me),append_hydration(i,V),append_hydration(V,w),append_hydration(w,I),append_hydration(I,A),append_hydration(w,je),append_hydration(w,c),append_hydration(c,R),append_hydration(R,se),append_hydration(c,xe);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(c,null)},p(e,[s]){if(s&1&&set_data(ee,e[0]),s&2&&set_data(re,e[1]),s&4&&W!==(W=e[2].text+"")&&set_data(oe,W),s&4&&Z!==(Z=e[2].url)&&attr(_,"href",Z),s&8&&q!==(q=e[3].text+"")&&set_data(J,q),s&8&&te!==(te=e[3].url)&&attr(f,"href",te),s&16&&U!==(U=e[4].title+"")&&set_data(ae,U),s&32&&ne!==(ne=e[5].icon)&&set_custom_element_data(k,"name",ne),s&32&&Y!==(Y=e[5].title+"")&&set_data(Q,Y),s&32){N=e[5].addresses;let t;for(t=0;t<N.length;t+=1){const o=get_each_context_1(e,N,t);n[t]?n[t].p(o,s):(n[t]=create_each_block_1(o),n[t].c(),n[t].m(h,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=N.length}if(s&64&&G!==(G=e[6].icon)&&set_custom_element_data(E,"name",G),s&64&&$!==($=e[6].title+"")&&set_data(X,$),s&64&&ce!==(ce=e[6].location+"")&&(C.innerHTML=ce),s&128&&ie!==(ie=e[7].icon)&&set_custom_element_data(A,"name",ie),s&128&&K!==(K=e[7].title+"")&&set_data(se,K),s&128){D=e[7].numbers;let n;for(n=0;n<D.length;n+=1){const o=get_each_context(e,D,n);t[n]?t[n].p(o,s):(t[n]=create_each_block(o),t[n].c(),t[n].m(c,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=D.length}},i:noop,o:noop,d(e){e&&detach(l),destroy_each(n,e),destroy_each(t,e)}}}function instance(e,t,n){let{title:s,body:o,form:i,services:a,policy:r,button:c,email:l,address:d,phone:u}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"body"in e&&n(1,o=e.body),"form"in e&&n(8,i=e.form),"services"in e&&n(2,a=e.services),"policy"in e&&n(3,r=e.policy),"button"in e&&n(4,c=e.button),"email"in e&&n(5,l=e.email),"address"in e&&n(6,d=e.address),"phone"in e&&n(7,u=e.phone)},[s,o,a,r,c,l,d,u,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,body:1,form:8,services:2,policy:3,button:4,email:5,address:6,phone:7})}}export default Component