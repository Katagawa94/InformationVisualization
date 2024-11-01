import{E as cn}from"./ExerciseContainer.6aaf8f09.js";import{s as sn}from"./transform.3136d1cb.js";import{b as ln,t as ye,c as fn,a as gn,l as mn,m as hn}from"./linear.fb8647fb.js";import{i as Tn}from"./init.0b4a962a.js";import{M as yn,o as Mn,N as Cn,O as pn,Q as Un,Z as Me}from"./index.0fa80f60.js";import{w as Dn,a as vn,c as Z}from"./array.fd924281.js";import{a as wn,b as Sn}from"./axis.0fbd6d3f.js";import"./use-dark.52c25f85.js";import"./render.ca9dd5c5.js";function Fn(e,n){let t,r;if(n===void 0)for(const a of e)a!=null&&(t===void 0?a>=a&&(t=r=a):(t>a&&(t=a),r<a&&(r=a)));else{let a=-1;for(let o of e)(o=n(o,++a,e))!=null&&(t===void 0?o>=o&&(t=r=o):(t>o&&(t=o),r<o&&(r=o)))}return[t,r]}function Yn(e,n){e=e.slice();var t=0,r=e.length-1,a=e[t],o=e[r],c;return o<a&&(c=t,t=r,r=c,c=a,a=o,o=c),e[t]=n.floor(a),e[r]=n.ceil(o),e}const ue=new Date,oe=new Date;function D(e,n,t,r){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),n(o,1),e(o),o),a.round=o=>{const c=a(o),f=a.ceil(o);return o-c<f-o?c:f},a.offset=(o,c)=>(n(o=new Date(+o),c==null?1:Math.floor(c)),o),a.range=(o,c,f)=>{const s=[];if(o=a.ceil(o),f=f==null?1:Math.floor(f),!(o<c)||!(f>0))return s;let m;do s.push(m=new Date(+o)),n(o,f),e(o);while(m<o&&o<c);return s},a.filter=o=>D(c=>{if(c>=c)for(;e(c),!o(c);)c.setTime(c-1)},(c,f)=>{if(c>=c)if(f<0)for(;++f<=0;)for(;n(c,-1),!o(c););else for(;--f>=0;)for(;n(c,1),!o(c););}),t&&(a.count=(o,c)=>(ue.setTime(+o),oe.setTime(+c),e(ue),e(oe),Math.floor(t(ue,oe))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(r?c=>r(c)%o===0:c=>a.count(0,c)%o===0):a)),a}const G=D(()=>{},(e,n)=>{e.setTime(+e+n)},(e,n)=>n-e);G.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?D(n=>{n.setTime(Math.floor(n/e)*e)},(n,t)=>{n.setTime(+n+t*e)},(n,t)=>(t-n)/e):G);G.range;const d=1e3,b=d*60,k=b*60,L=k*24,se=L*7,Ce=L*30,ae=L*365,P=D(e=>{e.setTime(e-e.getMilliseconds())},(e,n)=>{e.setTime(+e+n*d)},(e,n)=>(n-e)/d,e=>e.getUTCSeconds());P.range;const le=D(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*d)},(e,n)=>{e.setTime(+e+n*b)},(e,n)=>(n-e)/b,e=>e.getMinutes());le.range;const He=D(e=>{e.setUTCSeconds(0,0)},(e,n)=>{e.setTime(+e+n*b)},(e,n)=>(n-e)/b,e=>e.getUTCMinutes());He.range;const fe=D(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*d-e.getMinutes()*b)},(e,n)=>{e.setTime(+e+n*k)},(e,n)=>(n-e)/k,e=>e.getHours());fe.range;const We=D(e=>{e.setUTCMinutes(0,0,0)},(e,n)=>{e.setTime(+e+n*k)},(e,n)=>(n-e)/k,e=>e.getUTCHours());We.range;const J=D(e=>e.setHours(0,0,0,0),(e,n)=>e.setDate(e.getDate()+n),(e,n)=>(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*b)/L,e=>e.getDate()-1);J.range;const ge=D(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/L,e=>e.getUTCDate()-1);ge.range;const de=D(e=>{e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCDate(e.getUTCDate()+n)},(e,n)=>(n-e)/L,e=>Math.floor(e/L));de.range;function I(e){return D(n=>{n.setDate(n.getDate()-(n.getDay()+7-e)%7),n.setHours(0,0,0,0)},(n,t)=>{n.setDate(n.getDate()+t*7)},(n,t)=>(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*b)/se)}const ee=I(0),K=I(1),xn=I(2),bn=I(3),Q=I(4),Hn=I(5),Wn=I(6);ee.range;K.range;xn.range;bn.range;Q.range;Hn.range;Wn.range;function A(e){return D(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-e)%7),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCDate(n.getUTCDate()+t*7)},(n,t)=>(t-n)/se)}const me=A(0),$=A(1),dn=A(2),kn=A(3),V=A(4),Ln=A(5),_n=A(6);me.range;$.range;dn.range;kn.range;V.range;Ln.range;_n.range;const he=D(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,n)=>{e.setMonth(e.getMonth()+n)},(e,n)=>n.getMonth()-e.getMonth()+(n.getFullYear()-e.getFullYear())*12,e=>e.getMonth());he.range;const ke=D(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCMonth(e.getUTCMonth()+n)},(e,n)=>n.getUTCMonth()-e.getUTCMonth()+(n.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());ke.range;const _=D(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,n)=>{e.setFullYear(e.getFullYear()+n)},(e,n)=>n.getFullYear()-e.getFullYear(),e=>e.getFullYear());_.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:D(n=>{n.setFullYear(Math.floor(n.getFullYear()/e)*e),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,t)=>{n.setFullYear(n.getFullYear()+t*e)});_.range;const N=D(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n)},(e,n)=>n.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());N.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:D(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/e)*e),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,t)=>{n.setUTCFullYear(n.getUTCFullYear()+t*e)});N.range;function Le(e,n,t,r,a,o){const c=[[P,1,d],[P,5,5*d],[P,15,15*d],[P,30,30*d],[o,1,b],[o,5,5*b],[o,15,15*b],[o,30,30*b],[a,1,k],[a,3,3*k],[a,6,6*k],[a,12,12*k],[r,1,L],[r,2,2*L],[t,1,se],[n,1,Ce],[n,3,3*Ce],[e,1,ae]];function f(m,y,p){const C=y<m;C&&([m,y]=[y,m]);const U=p&&typeof p.range=="function"?p:s(m,y,p),w=U?U.range(m,+y+1):[];return C?w.reverse():w}function s(m,y,p){const C=Math.abs(y-m)/p,U=ln(([,,B])=>B).right(c,C);if(U===c.length)return e.every(ye(m/ae,y/ae,p));if(U===0)return G.every(Math.max(ye(m,y,p),1));const[w,q]=c[C/c[U-1][2]<c[U][2]/C?U-1:U];return w.every(q)}return[f,s]}Le(N,ke,me,de,We,He);const[Nn,On]=Le(_,he,ee,J,fe,le);function ie(e){if(0<=e.y&&e.y<100){var n=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return n.setFullYear(e.y),n}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function ce(e){if(0<=e.y&&e.y<100){var n=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return n.setUTCFullYear(e.y),n}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function E(e,n,t){return{y:e,m:n,d:t,H:0,M:0,S:0,L:0}}function In(e){var n=e.dateTime,t=e.date,r=e.time,a=e.periods,o=e.days,c=e.shortDays,f=e.months,s=e.shortMonths,m=j(a),y=z(a),p=j(o),C=z(o),U=j(c),w=z(c),q=j(f),B=z(f),ne=j(s),te=z(s),H={a:Je,A:Xe,b:Ge,B:Ke,c:null,d:Se,e:Se,f:at,g:yt,G:Ct,H:rt,I:ut,j:ot,L:_e,m:it,M:ct,p:$e,q:en,Q:xe,s:be,S:st,u:lt,U:ft,V:gt,w:mt,W:ht,x:null,X:null,y:Tt,Y:Mt,Z:pt,"%":Ye},W={a:nn,A:tn,b:rn,B:un,c:null,d:Fe,e:Fe,f:wt,g:Lt,G:Nt,H:Ut,I:Dt,j:vt,L:Oe,m:St,M:Ft,p:on,q:an,Q:xe,s:be,S:Yt,u:xt,U:bt,V:Ht,w:Wt,W:dt,x:null,X:null,y:kt,Y:_t,Z:Ot,"%":Ye},re={a:Qe,A:Ve,b:qe,B:Be,c:Ee,d:ve,e:ve,f:$n,g:De,G:Ue,H:we,I:we,j:Jn,L:Kn,m:zn,M:Xn,p:Pe,q:jn,Q:nt,s:tt,S:Gn,u:Qn,U:Vn,V:qn,w:Pn,W:Bn,x:je,X:ze,y:De,Y:Ue,Z:En,"%":et};H.x=l(t,H),H.X=l(r,H),H.c=l(n,H),W.x=l(t,W),W.X=l(r,W),W.c=l(n,W);function l(i,g){return function(h){var u=[],F=-1,M=0,Y=i.length,x,O,Te;for(h instanceof Date||(h=new Date(+h));++F<Y;)i.charCodeAt(F)===37&&(u.push(i.slice(M,F)),(O=pe[x=i.charAt(++F)])!=null?x=i.charAt(++F):O=x==="e"?" ":"0",(Te=g[x])&&(x=Te(h,O)),u.push(x),M=F+1);return u.push(i.slice(M,F)),u.join("")}}function S(i,g){return function(h){var u=E(1900,void 0,1),F=X(u,i,h+="",0),M,Y;if(F!=h.length)return null;if("Q"in u)return new Date(u.Q);if("s"in u)return new Date(u.s*1e3+("L"in u?u.L:0));if(g&&!("Z"in u)&&(u.Z=0),"p"in u&&(u.H=u.H%12+u.p*12),u.m===void 0&&(u.m="q"in u?u.q:0),"V"in u){if(u.V<1||u.V>53)return null;"w"in u||(u.w=1),"Z"in u?(M=ce(E(u.y,0,1)),Y=M.getUTCDay(),M=Y>4||Y===0?$.ceil(M):$(M),M=ge.offset(M,(u.V-1)*7),u.y=M.getUTCFullYear(),u.m=M.getUTCMonth(),u.d=M.getUTCDate()+(u.w+6)%7):(M=ie(E(u.y,0,1)),Y=M.getDay(),M=Y>4||Y===0?K.ceil(M):K(M),M=J.offset(M,(u.V-1)*7),u.y=M.getFullYear(),u.m=M.getMonth(),u.d=M.getDate()+(u.w+6)%7)}else("W"in u||"U"in u)&&("w"in u||(u.w="u"in u?u.u%7:"W"in u?1:0),Y="Z"in u?ce(E(u.y,0,1)).getUTCDay():ie(E(u.y,0,1)).getDay(),u.m=0,u.d="W"in u?(u.w+6)%7+u.W*7-(Y+5)%7:u.w+u.U*7-(Y+6)%7);return"Z"in u?(u.H+=u.Z/100|0,u.M+=u.Z%100,ce(u)):ie(u)}}function X(i,g,h,u){for(var F=0,M=g.length,Y=h.length,x,O;F<M;){if(u>=Y)return-1;if(x=g.charCodeAt(F++),x===37){if(x=g.charAt(F++),O=re[x in pe?g.charAt(F++):x],!O||(u=O(i,h,u))<0)return-1}else if(x!=h.charCodeAt(u++))return-1}return u}function Pe(i,g,h){var u=m.exec(g.slice(h));return u?(i.p=y.get(u[0].toLowerCase()),h+u[0].length):-1}function Qe(i,g,h){var u=U.exec(g.slice(h));return u?(i.w=w.get(u[0].toLowerCase()),h+u[0].length):-1}function Ve(i,g,h){var u=p.exec(g.slice(h));return u?(i.w=C.get(u[0].toLowerCase()),h+u[0].length):-1}function qe(i,g,h){var u=ne.exec(g.slice(h));return u?(i.m=te.get(u[0].toLowerCase()),h+u[0].length):-1}function Be(i,g,h){var u=q.exec(g.slice(h));return u?(i.m=B.get(u[0].toLowerCase()),h+u[0].length):-1}function Ee(i,g,h){return X(i,n,g,h)}function je(i,g,h){return X(i,t,g,h)}function ze(i,g,h){return X(i,r,g,h)}function Je(i){return c[i.getDay()]}function Xe(i){return o[i.getDay()]}function Ge(i){return s[i.getMonth()]}function Ke(i){return f[i.getMonth()]}function $e(i){return a[+(i.getHours()>=12)]}function en(i){return 1+~~(i.getMonth()/3)}function nn(i){return c[i.getUTCDay()]}function tn(i){return o[i.getUTCDay()]}function rn(i){return s[i.getUTCMonth()]}function un(i){return f[i.getUTCMonth()]}function on(i){return a[+(i.getUTCHours()>=12)]}function an(i){return 1+~~(i.getUTCMonth()/3)}return{format:function(i){var g=l(i+="",H);return g.toString=function(){return i},g},parse:function(i){var g=S(i+="",!1);return g.toString=function(){return i},g},utcFormat:function(i){var g=l(i+="",W);return g.toString=function(){return i},g},utcParse:function(i){var g=S(i+="",!0);return g.toString=function(){return i},g}}}var pe={"-":"",_:" ",0:"0"},v=/^\s*\d+/,An=/^%/,Zn=/[\\^$*+?|[\]().{}]/g;function T(e,n,t){var r=e<0?"-":"",a=(r?-e:e)+"",o=a.length;return r+(o<t?new Array(t-o+1).join(n)+a:a)}function Rn(e){return e.replace(Zn,"\\$&")}function j(e){return new RegExp("^(?:"+e.map(Rn).join("|")+")","i")}function z(e){return new Map(e.map((n,t)=>[n.toLowerCase(),t]))}function Pn(e,n,t){var r=v.exec(n.slice(t,t+1));return r?(e.w=+r[0],t+r[0].length):-1}function Qn(e,n,t){var r=v.exec(n.slice(t,t+1));return r?(e.u=+r[0],t+r[0].length):-1}function Vn(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.U=+r[0],t+r[0].length):-1}function qn(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.V=+r[0],t+r[0].length):-1}function Bn(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.W=+r[0],t+r[0].length):-1}function Ue(e,n,t){var r=v.exec(n.slice(t,t+4));return r?(e.y=+r[0],t+r[0].length):-1}function De(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function En(e,n,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t,t+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function jn(e,n,t){var r=v.exec(n.slice(t,t+1));return r?(e.q=r[0]*3-3,t+r[0].length):-1}function zn(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.m=r[0]-1,t+r[0].length):-1}function ve(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.d=+r[0],t+r[0].length):-1}function Jn(e,n,t){var r=v.exec(n.slice(t,t+3));return r?(e.m=0,e.d=+r[0],t+r[0].length):-1}function we(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.H=+r[0],t+r[0].length):-1}function Xn(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.M=+r[0],t+r[0].length):-1}function Gn(e,n,t){var r=v.exec(n.slice(t,t+2));return r?(e.S=+r[0],t+r[0].length):-1}function Kn(e,n,t){var r=v.exec(n.slice(t,t+3));return r?(e.L=+r[0],t+r[0].length):-1}function $n(e,n,t){var r=v.exec(n.slice(t,t+6));return r?(e.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function et(e,n,t){var r=An.exec(n.slice(t,t+1));return r?t+r[0].length:-1}function nt(e,n,t){var r=v.exec(n.slice(t));return r?(e.Q=+r[0],t+r[0].length):-1}function tt(e,n,t){var r=v.exec(n.slice(t));return r?(e.s=+r[0],t+r[0].length):-1}function Se(e,n){return T(e.getDate(),n,2)}function rt(e,n){return T(e.getHours(),n,2)}function ut(e,n){return T(e.getHours()%12||12,n,2)}function ot(e,n){return T(1+J.count(_(e),e),n,3)}function _e(e,n){return T(e.getMilliseconds(),n,3)}function at(e,n){return _e(e,n)+"000"}function it(e,n){return T(e.getMonth()+1,n,2)}function ct(e,n){return T(e.getMinutes(),n,2)}function st(e,n){return T(e.getSeconds(),n,2)}function lt(e){var n=e.getDay();return n===0?7:n}function ft(e,n){return T(ee.count(_(e)-1,e),n,2)}function Ne(e){var n=e.getDay();return n>=4||n===0?Q(e):Q.ceil(e)}function gt(e,n){return e=Ne(e),T(Q.count(_(e),e)+(_(e).getDay()===4),n,2)}function mt(e){return e.getDay()}function ht(e,n){return T(K.count(_(e)-1,e),n,2)}function Tt(e,n){return T(e.getFullYear()%100,n,2)}function yt(e,n){return e=Ne(e),T(e.getFullYear()%100,n,2)}function Mt(e,n){return T(e.getFullYear()%1e4,n,4)}function Ct(e,n){var t=e.getDay();return e=t>=4||t===0?Q(e):Q.ceil(e),T(e.getFullYear()%1e4,n,4)}function pt(e){var n=e.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+T(n/60|0,"0",2)+T(n%60,"0",2)}function Fe(e,n){return T(e.getUTCDate(),n,2)}function Ut(e,n){return T(e.getUTCHours(),n,2)}function Dt(e,n){return T(e.getUTCHours()%12||12,n,2)}function vt(e,n){return T(1+ge.count(N(e),e),n,3)}function Oe(e,n){return T(e.getUTCMilliseconds(),n,3)}function wt(e,n){return Oe(e,n)+"000"}function St(e,n){return T(e.getUTCMonth()+1,n,2)}function Ft(e,n){return T(e.getUTCMinutes(),n,2)}function Yt(e,n){return T(e.getUTCSeconds(),n,2)}function xt(e){var n=e.getUTCDay();return n===0?7:n}function bt(e,n){return T(me.count(N(e)-1,e),n,2)}function Ie(e){var n=e.getUTCDay();return n>=4||n===0?V(e):V.ceil(e)}function Ht(e,n){return e=Ie(e),T(V.count(N(e),e)+(N(e).getUTCDay()===4),n,2)}function Wt(e){return e.getUTCDay()}function dt(e,n){return T($.count(N(e)-1,e),n,2)}function kt(e,n){return T(e.getUTCFullYear()%100,n,2)}function Lt(e,n){return e=Ie(e),T(e.getUTCFullYear()%100,n,2)}function _t(e,n){return T(e.getUTCFullYear()%1e4,n,4)}function Nt(e,n){var t=e.getUTCDay();return e=t>=4||t===0?V(e):V.ceil(e),T(e.getUTCFullYear()%1e4,n,4)}function Ot(){return"+0000"}function Ye(){return"%"}function xe(e){return+e}function be(e){return Math.floor(+e/1e3)}var R,Ae;It({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function It(e){return R=In(e),Ae=R.format,R.parse,R.utcFormat,R.utcParse,R}function At(e){return new Date(e)}function Zt(e){return e instanceof Date?+e:+new Date(+e)}function Ze(e,n,t,r,a,o,c,f,s,m){var y=fn(),p=y.invert,C=y.domain,U=m(".%L"),w=m(":%S"),q=m("%I:%M"),B=m("%I %p"),ne=m("%a %d"),te=m("%b %d"),H=m("%B"),W=m("%Y");function re(l){return(s(l)<l?U:f(l)<l?w:c(l)<l?q:o(l)<l?B:r(l)<l?a(l)<l?ne:te:t(l)<l?H:W)(l)}return y.invert=function(l){return new Date(p(l))},y.domain=function(l){return arguments.length?C(Array.from(l,Zt)):C().map(At)},y.ticks=function(l){var S=C();return e(S[0],S[S.length-1],l==null?10:l)},y.tickFormat=function(l,S){return S==null?re:m(S)},y.nice=function(l){var S=C();return(!l||typeof l.range!="function")&&(l=n(S[0],S[S.length-1],l==null?10:l)),l?C(Yn(S,l)):y},y.copy=function(){return gn(y,Ze(e,n,t,r,a,o,c,f,s,m))},y}function Rt(){return Tn.apply(Ze(Nn,On,_,he,ee,J,fe,le,P,Ae).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Re(e){this._context=e}Re.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;default:this._context.lineTo(e,n);break}}};function Pt(e){return new Re(e)}function Qt(e){return e[0]}function Vt(e){return e[1]}function qt(e,n){var t=Z(!0),r=null,a=Pt,o=null,c=Dn(f);e=typeof e=="function"?e:e===void 0?Qt:Z(e),n=typeof n=="function"?n:n===void 0?Vt:Z(n);function f(s){var m,y=(s=vn(s)).length,p,C=!1,U;for(r==null&&(o=a(U=c())),m=0;m<=y;++m)!(m<y&&t(p=s[m],m,s))===C&&((C=!C)?o.lineStart():o.lineEnd()),C&&o.point(+e(p,m,s),+n(p,m,s));if(U)return o=null,U+""||null}return f.x=function(s){return arguments.length?(e=typeof s=="function"?s:Z(+s),f):e},f.y=function(s){return arguments.length?(n=typeof s=="function"?s:Z(+s),f):n},f.defined=function(s){return arguments.length?(t=typeof s=="function"?s:Z(!!s),f):t},f.curve=function(s){return arguments.length?(a=s,r!=null&&(o=a(r)),f):a},f.context=function(s){return arguments.length?(s==null?r=o=null:o=a(r=s),f):r},f}const Bt="https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-12-31",nr=yn({__name:"Exercise9",setup(e){function n(r){return Object.entries(r).map(([a,o])=>({date:new Date(a),price:o}))}function t(r){const c={top:20,right:20,bottom:30,left:50},f=600-c.left-c.right,s=400-c.top-c.bottom;var y=sn("svg").attr("width",600).attr("height",400).append("g").attr("transform","translate("+c.left+","+c.top+")"),p=Rt().rangeRound([0,f]),C=mn().rangeRound([s,0]),U=qt().x(w=>p(w.date)).y(w=>C(w.price));p.domain(Fn(r,w=>w.date)),C.domain([0,hn(r,w=>w.price)||0]),y.append("path").datum(r).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",U),y.append("g").attr("transform",`translate(0, ${s})`).call(wn(p).ticks(5)),y.append("g").call(Sn(C))}return Mn(()=>{fetch(Bt).then(r=>r.json()).then(r=>{const a=n(r.bpi);t(a)})}),(r,a)=>(Cn(),pn(cn,null,{default:Un(()=>a[0]||(a[0]=[Me("h2",null,"Line Chart",-1),Me("svg",{class:"line-chart"},null,-1)])),_:1}))}});export{nr as default};