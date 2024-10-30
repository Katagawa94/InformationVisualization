import{s as Q,E as W}from"./ExerciseContainer.19c742a6.js";import{i as N,l as X,m as Y}from"./linear.04c2ecdb.js";import{M as Z,o as q,N as G,O as J,Q as K,Z as B}from"./index.7e5a0476.js";import"./use-dark.530b5504.js";import"./render.d2f1037b.js";class H extends Map{constructor(n,i=tt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:i}}),n!=null)for(const[e,a]of n)this.set(e,a)}get(n){return super.get(P(this,n))}has(n){return super.has(P(this,n))}set(n,i){return super.set(T(this,n),i)}delete(n){return super.delete(U(this,n))}}function P({_intern:t,_key:n},i){const e=n(i);return t.has(e)?t.get(e):i}function T({_intern:t,_key:n},i){const e=n(i);return t.has(e)?t.get(e):(t.set(e,i),i)}function U({_intern:t,_key:n},i){const e=n(i);return t.has(e)&&(i=t.get(e),t.delete(e)),i}function tt(t){return t!==null&&typeof t=="object"?t.valueOf():t}function nt(t,n,i){t=+t,n=+n,i=(a=arguments.length)<2?(n=t,t=0,1):a<3?1:+i;for(var e=-1,a=Math.max(0,Math.ceil((n-t)/i))|0,u=new Array(a);++e<a;)u[e]=t+e*i;return u}function rt(t){return t}var z=1,E=2,I=3,v=4,R=1e-6;function et(t){return"translate("+t+",0)"}function at(t){return"translate(0,"+t+")"}function it(t){return n=>+t(n)}function ut(t,n){return n=Math.max(0,t.bandwidth()-n*2)/2,t.round()&&(n=Math.round(n)),i=>+t(i)+n}function ot(){return!this.__axis}function $(t,n){var i=[],e=null,a=null,u=6,s=6,g=3,c=typeof window!="undefined"&&window.devicePixelRatio>1?0:.5,f=t===z||t===v?-1:1,d=t===v||t===E?"x":"y",l=t===z||t===I?et:at;function r(o){var h=e==null?n.ticks?n.ticks.apply(n,i):n.domain():e,b=a==null?n.tickFormat?n.tickFormat.apply(n,i):rt:a,x=Math.max(u,0)+g,y=n.range(),A=+y[0]+c,S=+y[y.length-1]+c,O=(n.bandwidth?ut:it)(n.copy(),c),w=o.selection?o.selection():o,k=w.selectAll(".domain").data([null]),m=w.selectAll(".tick").data(h,n).order(),V=m.exit(),C=m.enter().append("g").attr("class","tick"),M=m.select("line"),_=m.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),m=m.merge(C),M=M.merge(C.append("line").attr("stroke","currentColor").attr(d+"2",f*u)),_=_.merge(C.append("text").attr("fill","currentColor").attr(d,f*x).attr("dy",t===z?"0em":t===I?"0.71em":"0.32em")),o!==w&&(k=k.transition(o),m=m.transition(o),M=M.transition(o),_=_.transition(o),V=V.transition(o).attr("opacity",R).attr("transform",function(p){return isFinite(p=O(p))?l(p+c):this.getAttribute("transform")}),C.attr("opacity",R).attr("transform",function(p){var F=this.parentNode.__axis;return l((F&&isFinite(F=F(p))?F:O(p))+c)})),V.remove(),k.attr("d",t===v||t===E?s?"M"+f*s+","+A+"H"+c+"V"+S+"H"+f*s:"M"+c+","+A+"V"+S:s?"M"+A+","+f*s+"V"+c+"H"+S+"V"+f*s:"M"+A+","+c+"H"+S),m.attr("opacity",1).attr("transform",function(p){return l(O(p)+c)}),M.attr(d+"2",f*u),_.attr(d,f*x).text(b),w.filter(ot).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===E?"start":t===v?"end":"middle"),w.each(function(){this.__axis=O})}return r.scale=function(o){return arguments.length?(n=o,r):n},r.ticks=function(){return i=Array.from(arguments),r},r.tickArguments=function(o){return arguments.length?(i=o==null?[]:Array.from(o),r):i.slice()},r.tickValues=function(o){return arguments.length?(e=o==null?null:Array.from(o),r):e&&e.slice()},r.tickFormat=function(o){return arguments.length?(a=o,r):a},r.tickSize=function(o){return arguments.length?(u=s=+o,r):u},r.tickSizeInner=function(o){return arguments.length?(u=+o,r):u},r.tickSizeOuter=function(o){return arguments.length?(s=+o,r):s},r.tickPadding=function(o){return arguments.length?(g=+o,r):g},r.offset=function(o){return arguments.length?(c=+o,r):c},r}function st(t){return $(I,t)}function lt(t){return $(v,t)}const j=Symbol("implicit");function D(){var t=new H,n=[],i=[],e=j;function a(u){let s=t.get(u);if(s===void 0){if(e!==j)return e;t.set(u,s=n.push(u)-1)}return i[s%i.length]}return a.domain=function(u){if(!arguments.length)return n.slice();n=[],t=new H;for(const s of u)t.has(s)||t.set(s,n.push(s)-1);return a},a.range=function(u){return arguments.length?(i=Array.from(u),a):i.slice()},a.unknown=function(u){return arguments.length?(e=u,a):e},a.copy=function(){return D(n,i).unknown(e)},N.apply(a,arguments),a}function L(){var t=D().unknown(void 0),n=t.domain,i=t.range,e=0,a=1,u,s,g=!1,c=0,f=0,d=.5;delete t.unknown;function l(){var r=n().length,o=a<e,h=o?a:e,b=o?e:a;u=(b-h)/Math.max(1,r-c+f*2),g&&(u=Math.floor(u)),h+=(b-h-u*(r-c))*d,s=u*(1-c),g&&(h=Math.round(h),s=Math.round(s));var x=nt(r).map(function(y){return h+u*y});return i(o?x.reverse():x)}return t.domain=function(r){return arguments.length?(n(r),l()):n()},t.range=function(r){return arguments.length?([e,a]=r,e=+e,a=+a,l()):[e,a]},t.rangeRound=function(r){return[e,a]=r,e=+e,a=+a,g=!0,l()},t.bandwidth=function(){return s},t.step=function(){return u},t.round=function(r){return arguments.length?(g=!!r,l()):g},t.padding=function(r){return arguments.length?(c=Math.min(1,f=+r),l()):c},t.paddingInner=function(r){return arguments.length?(c=Math.min(1,r),l()):c},t.paddingOuter=function(r){return arguments.length?(f=+r,l()):f},t.align=function(r){return arguments.length?(d=Math.max(0,Math.min(1,r)),l()):d},t.copy=function(){return L(n(),[e,a]).round(g).paddingInner(c).paddingOuter(f).align(d)},N.apply(l(),arguments)}const ht=Z({__name:"Exercise6",setup(t){return q(()=>{var d;const n=[80,100,56,120,180,30,40,120,160],i=500,e=300,a=30,u=Q("svg"),s=X().domain([0,(d=Y(n))!=null?d:0]).range([e-a*2,0]),g=L().domain(n.map((l,r)=>r.toString())).range([a,i-a]).padding(.1),c=st(g).tickFormat((l,r)=>(r+1).toString()),f=lt(s);u.attr("width",i).attr("height",e).append("g").attr("transform",`translate(0, ${e-a})`).call(c),u.append("g").attr("transform",`translate(${a}, ${a})`).call(f),u.selectAll("rect").data(n).enter().append("rect").attr("x",(l,r)=>g(r.toString())).attr("y",l=>s(l)+a).attr("width",g.bandwidth()).attr("height",l=>e-a*2-s(l)).attr("fill","#e10019"),u.selectAll(".bar-label").data(n).enter().append("text").attr("class","bar-label").text(l=>l).attr("x",(l,r)=>g(r.toString())+g.bandwidth()/2).attr("y",l=>s(l)-5+ +a).attr("text-anchor","middle").attr("fill","black")}),(n,i)=>(G(),J(W,null,{default:K(()=>i[0]||(i[0]=[B("h2",null,"Bar Chart using D3.js",-1),B("svg",{class:"bar-chart"},null,-1)])),_:1}))}});export{ht as default};
