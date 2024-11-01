import{E as ln}from"./ExerciseContainer.5d697bff.js";import{s as cn}from"./transform.3136d1cb.js";import{M as fn,o as gn,N as pn,O as dn,Q as hn,Z as sn}from"./index.f9e6fa5a.js";import{o as mn}from"./ordinal.d6400369.js";import{w as yn,c as w,a as xn}from"./array.fd924281.js";import"./use-dark.a4913242.js";import"./render.38af945a.js";import"./init.0b4a962a.js";function vn(t){for(var o=t.length/6|0,c=new Array(o),d=0;d<o;)c[d]="#"+t.slice(d*6,++d*6);return c}var An=vn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");const un=Math.abs,M=Math.atan2,S=Math.cos,Mn=Math.max,tn=Math.min,B=Math.sin,D=Math.sqrt,P=1e-12,H=Math.PI,L=H/2,K=2*H;function Rn(t){return t>1?0:t<-1?H:Math.acos(t)}function on(t){return t>=1?L:t<=-1?-L:Math.asin(t)}function wn(t){return t.innerRadius}function bn(t){return t.outerRadius}function Tn(t){return t.startAngle}function Pn(t){return t.endAngle}function $n(t){return t&&t.padAngle}function Cn(t,o,c,d,v,y,g,n){var f=c-t,s=d-o,e=g-v,p=n-y,a=p*f-e*s;if(!(a*a<P))return a=(e*(o-y)-p*(t-v))/a,[t+a*f,o+a*s]}function J(t,o,c,d,v,y,g){var n=t-c,f=o-d,s=(g?y:-y)/D(n*n+f*f),e=s*f,p=-s*n,a=t+e,u=o+p,h=c+e,m=d+p,E=(a+h)/2,l=(u+m)/2,R=h-a,A=m-u,x=R*R+A*A,b=v-y,T=a*m-h*u,V=(A<0?-1:1)*D(Mn(0,b*b*x-T*T)),k=(T*A-R*V)/x,q=(-T*R-A*V)/x,N=(T*A+R*V)/x,$=(-T*R+A*V)/x,C=k-E,r=q-l,i=N-E,I=$-l;return C*C+r*r>i*i+I*I&&(k=N,q=$),{cx:k,cy:q,x01:-e,y01:-p,x11:k*(v/b-1),y11:q*(v/b-1)}}function En(){var t=wn,o=bn,c=w(0),d=null,v=Tn,y=Pn,g=$n,n=null,f=yn(s);function s(){var e,p,a=+t.apply(this,arguments),u=+o.apply(this,arguments),h=v.apply(this,arguments)-L,m=y.apply(this,arguments)-L,E=un(m-h),l=m>h;if(n||(n=e=f()),u<a&&(p=u,u=a,a=p),!(u>P))n.moveTo(0,0);else if(E>K-P)n.moveTo(u*S(h),u*B(h)),n.arc(0,0,u,h,m,!l),a>P&&(n.moveTo(a*S(m),a*B(m)),n.arc(0,0,a,m,h,l));else{var R=h,A=m,x=h,b=m,T=E,V=E,k=g.apply(this,arguments)/2,q=k>P&&(d?+d.apply(this,arguments):D(a*a+u*u)),N=tn(un(u-a)/2,+c.apply(this,arguments)),$=N,C=N,r,i;if(q>P){var I=on(q/a*B(k)),Q=on(q/u*B(k));(T-=I*2)>P?(I*=l?1:-1,x+=I,b-=I):(T=0,x=b=(h+m)/2),(V-=Q*2)>P?(Q*=l?1:-1,R+=Q,A-=Q):(V=0,R=A=(h+m)/2)}var W=u*S(R),j=u*B(R),Z=a*S(b),z=a*B(b);if(N>P){var F=u*S(A),G=u*B(A),U=a*S(x),X=a*B(x),O;if(E<H)if(O=Cn(W,j,U,X,F,G,Z,z)){var Y=W-O[0],_=j-O[1],nn=F-O[0],en=G-O[1],rn=1/B(Rn((Y*nn+_*en)/(D(Y*Y+_*_)*D(nn*nn+en*en)))/2),an=D(O[0]*O[0]+O[1]*O[1]);$=tn(N,(a-an)/(rn-1)),C=tn(N,(u-an)/(rn+1))}else $=C=0}V>P?C>P?(r=J(U,X,W,j,u,C,l),i=J(F,G,Z,z,u,C,l),n.moveTo(r.cx+r.x01,r.cy+r.y01),C<N?n.arc(r.cx,r.cy,C,M(r.y01,r.x01),M(i.y01,i.x01),!l):(n.arc(r.cx,r.cy,C,M(r.y01,r.x01),M(r.y11,r.x11),!l),n.arc(0,0,u,M(r.cy+r.y11,r.cx+r.x11),M(i.cy+i.y11,i.cx+i.x11),!l),n.arc(i.cx,i.cy,C,M(i.y11,i.x11),M(i.y01,i.x01),!l))):(n.moveTo(W,j),n.arc(0,0,u,R,A,!l)):n.moveTo(W,j),!(a>P)||!(T>P)?n.lineTo(Z,z):$>P?(r=J(Z,z,F,G,a,-$,l),i=J(W,j,U,X,a,-$,l),n.lineTo(r.cx+r.x01,r.cy+r.y01),$<N?n.arc(r.cx,r.cy,$,M(r.y01,r.x01),M(i.y01,i.x01),!l):(n.arc(r.cx,r.cy,$,M(r.y01,r.x01),M(r.y11,r.x11),!l),n.arc(0,0,a,M(r.cy+r.y11,r.cx+r.x11),M(i.cy+i.y11,i.cx+i.x11),l),n.arc(i.cx,i.cy,$,M(i.y11,i.x11),M(i.y01,i.x01),!l))):n.arc(0,0,a,b,x,l)}if(n.closePath(),e)return n=null,e+""||null}return s.centroid=function(){var e=(+t.apply(this,arguments)+ +o.apply(this,arguments))/2,p=(+v.apply(this,arguments)+ +y.apply(this,arguments))/2-H/2;return[S(p)*e,B(p)*e]},s.innerRadius=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),s):t},s.outerRadius=function(e){return arguments.length?(o=typeof e=="function"?e:w(+e),s):o},s.cornerRadius=function(e){return arguments.length?(c=typeof e=="function"?e:w(+e),s):c},s.padRadius=function(e){return arguments.length?(d=e==null?null:typeof e=="function"?e:w(+e),s):d},s.startAngle=function(e){return arguments.length?(v=typeof e=="function"?e:w(+e),s):v},s.endAngle=function(e){return arguments.length?(y=typeof e=="function"?e:w(+e),s):y},s.padAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),s):g},s.context=function(e){return arguments.length?(n=e==null?null:e,s):n},s}function Nn(t,o){return o<t?-1:o>t?1:o>=t?0:NaN}function Bn(t){return t}function On(){var t=Bn,o=Nn,c=null,d=w(0),v=w(K),y=w(0);function g(n){var f,s=(n=xn(n)).length,e,p,a=0,u=new Array(s),h=new Array(s),m=+d.apply(this,arguments),E=Math.min(K,Math.max(-K,v.apply(this,arguments)-m)),l,R=Math.min(Math.abs(E)/s,y.apply(this,arguments)),A=R*(E<0?-1:1),x;for(f=0;f<s;++f)(x=h[u[f]=f]=+t(n[f],f,n))>0&&(a+=x);for(o!=null?u.sort(function(b,T){return o(h[b],h[T])}):c!=null&&u.sort(function(b,T){return c(n[b],n[T])}),f=0,p=a?(E-s*A)/a:0;f<s;++f,m=l)e=u[f],x=h[e],l=m+(x>0?x*p:0)+A,h[e]={data:n[e],index:f,value:x,startAngle:m,endAngle:l,padAngle:R};return h}return g.value=function(n){return arguments.length?(t=typeof n=="function"?n:w(+n),g):t},g.sortValues=function(n){return arguments.length?(o=n,c=null,g):o},g.sort=function(n){return arguments.length?(c=n,o=null,g):c},g.startAngle=function(n){return arguments.length?(d=typeof n=="function"?n:w(+n),g):d},g.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:w(+n),g):v},g.padAngle=function(n){return arguments.length?(y=typeof n=="function"?n:w(+n),g):y},g}const Hn=fn({__name:"Exercise8",setup(t){return gn(()=>{const o=[{label:"Android",value:40.11},{label:"Windows",value:36.69},{label:"iOS",value:13.06}],c=500,d=500,v=Math.min(c,d)/2,y=cn(".pie-chart");y.attr("width",c).attr("height",d);const g=y.append("g").attr("transform",`translate(${c/2}, ${d/2})`),n=mn(An),f=On().value(p=>p.value),s=En().innerRadius(0).outerRadius(v),e=g.selectAll(".arc").data(f(o)).enter().append("g");e.append("path").attr("d",s).attr("fill",p=>n(p.data.label)),e.selectAll(".arc").data(f(o)).enter().append("text").attr("transform",p=>`translate(${s.centroid(p)})`).attr("text-anchor","middle").text(p=>p.data.label).style("font-family","Arial")}),(o,c)=>(pn(),dn(ln,null,{default:hn(()=>c[0]||(c[0]=[sn("h2",null,"Pie Chart",-1),sn("svg",{class:"pie-chart"},null,-1)])),_:1}))}});export{Hn as default};