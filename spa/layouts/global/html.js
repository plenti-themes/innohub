import{SvelteComponent,add_flush_callback,append_hydration,assign,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,construct_svelte_component,create_component,destroy_component,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,space,subscribe,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Head from"./head.js";import Nav from"./nav.js";import Footer from"./footer.js";import Login from"./login.js";function create_if_block(e){let t,i,s,o;function a(t){e[7](t)}var n=e[6].menu;function r(e){let t={user:e[5]};return e[0]!==void 0&&(t.content=e[0]),{props:t}}return n&&(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert_hydration(e,s,n),o=!0},p(e,o){const c={};if(o&32&&(c.user=e[5]),!i&&o&1&&(i=!0,c.content=e[0],add_flush_callback(()=>i=!1)),o&64&&n!==(n=e[6].menu)){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(c)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let o,a,y,s,f,r,h,u,w,d,i,g,m,t,v,c,p;const b=[{title:e[0].filename},{env:e[2]},e[0].fields];let j={};for(let e=0;e<b.length;e+=1)j=assign(j,b[e]);a=new Head({props:j});let n=e[5]&&e[6].isAuthenticated&&create_if_block(e);u=new Nav({}),i=new Login({props:{user:e[5]}});const _=[e[0].fields,{allContent:e[3]},{allLayouts:e[4]},{content:e[0]}];var l=e[1];function O(){let t={};for(let e=0;e<_.length;e+=1)t=assign(t,_[e]);return{props:t}}return l&&(t=construct_svelte_component(l,O(e))),c=new Footer({}),{c(){o=element("html"),create_component(a.$$.fragment),y=space(),s=element("body"),n&&n.c(),f=space(),r=element("header"),h=element("div"),create_component(u.$$.fragment),w=space(),d=element("main"),create_component(i.$$.fragment),g=space(),m=element("article"),t&&create_component(t.$$.fragment),v=space(),create_component(c.$$.fragment),this.h()},l(e){o=claim_element(e,"HTML",{lang:!0});var l,p,j,_,O,b=children(o);claim_component(a.$$.fragment,b),y=claim_space(b),s=claim_element(b,"BODY",{id:!0}),l=children(s),n&&n.l(l),f=claim_space(l),r=claim_element(l,"HEADER",{class:!0,"data-header":!0}),j=children(r),h=claim_element(j,"DIV",{class:!0}),_=children(h),claim_component(u.$$.fragment,_),_.forEach(detach),j.forEach(detach),w=claim_space(l),d=claim_element(l,"MAIN",{}),p=children(d),claim_component(i.$$.fragment,p),g=claim_space(p),m=claim_element(p,"ARTICLE",{}),O=children(m),t&&claim_component(t.$$.fragment,O),O.forEach(detach),p.forEach(detach),v=claim_space(l),claim_component(c.$$.fragment,l),l.forEach(detach),b.forEach(detach),this.h()},h(){attr(h,"class","container"),attr(r,"class","header"),attr(r,"data-header",""),attr(s,"id","top"),attr(o,"lang","en")},m(e,l){insert_hydration(e,o,l),mount_component(a,o,null),append_hydration(o,y),append_hydration(o,s),n&&n.m(s,null),append_hydration(s,f),append_hydration(s,r),append_hydration(r,h),mount_component(u,h,null),append_hydration(s,w),append_hydration(s,d),mount_component(i,d,null),append_hydration(d,g),append_hydration(d,m),t&&mount_component(t,m,null),append_hydration(s,v),mount_component(c,s,null),p=!0},p(e,[o]){const c=o&5?get_spread_update(b,[o&1&&{title:e[0].filename},o&4&&{env:e[2]},o&1&&get_spread_object(e[0].fields)]):{};a.$set(c),e[5]&&e[6].isAuthenticated?n?(n.p(e,o),o&96&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(s,f)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const r={};o&32&&(r.user=e[5]),i.$set(r);const d=o&25?get_spread_update(_,[o&1&&get_spread_object(e[0].fields),o&8&&{allContent:e[3]},o&16&&{allLayouts:e[4]},o&1&&{content:e[0]}]):{};if(o&2&&l!==(l=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}l?(t=construct_svelte_component(l,O(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,m,null)):t=null}else l&&t.$set(d)},i(e){if(p)return;transition_in(a.$$.fragment,e),transition_in(n),transition_in(u.$$.fragment,e),transition_in(i.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(c.$$.fragment,e),p=!0},o(e){transition_out(a.$$.fragment,e),transition_out(n),transition_out(u.$$.fragment,e),transition_out(i.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(c.$$.fragment,e),p=!1},d(e){e&&detach(o),destroy_component(a),n&&n.d(),destroy_component(u),destroy_component(i),t&&destroy_component(t),destroy_component(c)}}}function instance(e,t,n){let a,i=noop,r=()=>(i(),i=subscribe(o,e=>n(6,a=e)),o);e.$$.on_destroy.push(()=>i());let{content:s,layout:c,env:l,allContent:d,allLayouts:u,user:o}=t;r();function h(e){s=e,n(0,s)}return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,c=e.layout),"env"in e&&n(2,l=e.env),"allContent"in e&&n(3,d=e.allContent),"allLayouts"in e&&n(4,u=e.allLayouts),"user"in e&&r(n(5,o=e.user))},[s,c,l,d,u,o,a,h]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,env:2,allContent:3,allLayouts:4,user:5})}}export default Component