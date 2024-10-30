import{u as vn,a as mn}from"./use-dark.c4cd3903.js";import{c as Bt,a as ut,h as Vt,g as Yt,e as At,f as S,j as bn,D as Nn,_ as An,N as $n,O as kn,Q as $t,R as Cn,a0 as En}from"./index.9f8fefea.js";import{a as zt}from"./render.deafcc10.js";var Sn={value:()=>{}};function Qt(){for(var t=0,n=arguments.length,e={},r;t<n;++t){if(!(r=arguments[t]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new K(e)}function K(t){this._=t}function Rn(t,n){return t.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}K.prototype=Qt.prototype={constructor:K,on:function(t,n){var e=this._,r=Rn(t+"",e),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(t=r[o]).type)&&(i=Tn(e[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<s;)if(i=(t=r[o]).type)e[i]=kt(e[i],t.name,n);else if(n==null)for(i in e)e[i]=kt(e[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new K(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};function Tn(t,n){for(var e=0,r=t.length,i;e<r;++e)if((i=t[e]).name===n)return i.value}function kt(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Sn,t=t.slice(0,r).concat(t.slice(r+1));break}return e!=null&&t.push({name:n,value:e}),t}var ft="http://www.w3.org/1999/xhtml",Ct={svg:"http://www.w3.org/2000/svg",xhtml:ft,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function rt(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),Ct.hasOwnProperty(n)?{space:Ct[n],local:t}:t}function qn(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===ft&&n.documentElement.namespaceURI===ft?n.createElement(t):n.createElementNS(e,t)}}function Mn(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ut(t){var n=rt(t);return(n.local?Mn:qn)(n)}function Fn(){}function gt(t){return t==null?Fn:function(){return this.querySelector(t)}}function In(t){typeof t!="function"&&(t=gt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=new Array(s),u,f,l=0;l<s;++l)(u=o[l])&&(f=t.call(u,u.__data__,l,o))&&("__data__"in u&&(f.__data__=u.__data__),a[l]=f);return new y(r,this._parents)}function Hn(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Pn(){return[]}function Kt(t){return t==null?Pn:function(){return this.querySelectorAll(t)}}function Dn(t){return function(){return Hn(t.apply(this,arguments))}}function Xn(t){typeof t=="function"?t=Dn(t):t=Kt(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var s=n[o],a=s.length,u,f=0;f<a;++f)(u=s[f])&&(r.push(t.call(u,u.__data__,f,s)),i.push(u));return new y(r,i)}function Gt(t){return function(){return this.matches(t)}}function Wt(t){return function(n){return n.matches(t)}}var On=Array.prototype.find;function Ln(t){return function(){return On.call(this.children,t)}}function Bn(){return this.firstElementChild}function Vn(t){return this.select(t==null?Bn:Ln(typeof t=="function"?t:Wt(t)))}var Yn=Array.prototype.filter;function zn(){return Array.from(this.children)}function Qn(t){return function(){return Yn.call(this.children,t)}}function Un(t){return this.selectAll(t==null?zn:Qn(typeof t=="function"?t:Wt(t)))}function Kn(t){typeof t!="function"&&(t=Gt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=[],u,f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new y(r,this._parents)}function Jt(t){return new Array(t.length)}function Gn(){return new y(this._enter||this._groups.map(Jt),this._parents)}function J(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}J.prototype={constructor:J,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Wn(t){return function(){return t}}function Jn(t,n,e,r,i,o){for(var s=0,a,u=n.length,f=o.length;s<f;++s)(a=n[s])?(a.__data__=o[s],r[s]=a):e[s]=new J(t,o[s]);for(;s<u;++s)(a=n[s])&&(i[s]=a)}function Zn(t,n,e,r,i,o,s){var a,u,f=new Map,l=n.length,c=o.length,h=new Array(l),d;for(a=0;a<l;++a)(u=n[a])&&(h[a]=d=s.call(u,u.__data__,a,n)+"",f.has(d)?i[a]=u:f.set(d,u));for(a=0;a<c;++a)d=s.call(t,o[a],a,o)+"",(u=f.get(d))?(r[a]=u,u.__data__=o[a],f.delete(d)):e[a]=new J(t,o[a]);for(a=0;a<l;++a)(u=n[a])&&f.get(h[a])===u&&(i[a]=u)}function jn(t){return t.__data__}function te(t,n){if(!arguments.length)return Array.from(this,jn);var e=n?Zn:Jn,r=this._parents,i=this._groups;typeof t!="function"&&(t=Wn(t));for(var o=i.length,s=new Array(o),a=new Array(o),u=new Array(o),f=0;f<o;++f){var l=r[f],c=i[f],h=c.length,d=ne(t.call(l,l&&l.__data__,f,r)),p=d.length,_=a[f]=new Array(p),$=s[f]=new Array(p),xn=u[f]=new Array(h);e(l,c,_,$,xn,d,n);for(var F=0,Y=0,bt,Nt;F<p;++F)if(bt=_[F]){for(F>=Y&&(Y=F+1);!(Nt=$[Y])&&++Y<p;);bt._next=Nt||null}}return s=new y(s,r),s._enter=a,s._exit=u,s}function ne(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function ee(){return new y(this._exit||this._groups.map(Jt),this._parents)}function re(t,n,e){var r=this.enter(),i=this,o=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function ie(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,s=Math.min(i,o),a=new Array(i),u=0;u<s;++u)for(var f=e[u],l=r[u],c=f.length,h=a[u]=new Array(c),d,p=0;p<c;++p)(d=f[p]||l[p])&&(h[p]=d);for(;u<i;++u)a[u]=e[u];return new y(a,this._parents)}function oe(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function se(t){t||(t=ae);function n(c,h){return c&&h?t(c.__data__,h.__data__):!c-!h}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var s=e[o],a=s.length,u=i[o]=new Array(a),f,l=0;l<a;++l)(f=s[l])&&(u[l]=f);u.sort(n)}return new y(i,this._parents).order()}function ae(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ue(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function fe(){return Array.from(this)}function le(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function ce(){let t=0;for(const n of this)++t;return t}function he(){return!this.node()}function de(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],o=0,s=i.length,a;o<s;++o)(a=i[o])&&t.call(a,a.__data__,o,i);return this}function pe(t){return function(){this.removeAttribute(t)}}function _e(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ge(t,n){return function(){this.setAttribute(t,n)}}function ye(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function we(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function xe(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function ve(t,n){var e=rt(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?_e:pe:typeof n=="function"?e.local?xe:we:e.local?ye:ge)(e,n))}function Zt(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function me(t){return function(){this.style.removeProperty(t)}}function be(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Ne(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Ae(t,n,e){return arguments.length>1?this.each((n==null?me:typeof n=="function"?Ne:be)(t,n,e==null?"":e)):q(this.node(),t)}function q(t,n){return t.style.getPropertyValue(n)||Zt(t).getComputedStyle(t,null).getPropertyValue(n)}function $e(t){return function(){delete this[t]}}function ke(t,n){return function(){this[t]=n}}function Ce(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function Ee(t,n){return arguments.length>1?this.each((n==null?$e:typeof n=="function"?Ce:ke)(t,n)):this.node()[t]}function jt(t){return t.trim().split(/^|\s+/)}function yt(t){return t.classList||new tn(t)}function tn(t){this._node=t,this._names=jt(t.getAttribute("class")||"")}tn.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function nn(t,n){for(var e=yt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function en(t,n){for(var e=yt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Se(t){return function(){nn(this,t)}}function Re(t){return function(){en(this,t)}}function Te(t,n){return function(){(n.apply(this,arguments)?nn:en)(this,t)}}function qe(t,n){var e=jt(t+"");if(arguments.length<2){for(var r=yt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?Te:n?Se:Re)(e,n))}function Me(){this.textContent=""}function Fe(t){return function(){this.textContent=t}}function Ie(t){return function(){var n=t.apply(this,arguments);this.textContent=n==null?"":n}}function He(t){return arguments.length?this.each(t==null?Me:(typeof t=="function"?Ie:Fe)(t)):this.node().textContent}function Pe(){this.innerHTML=""}function De(t){return function(){this.innerHTML=t}}function Xe(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n==null?"":n}}function Oe(t){return arguments.length?this.each(t==null?Pe:(typeof t=="function"?Xe:De)(t)):this.node().innerHTML}function Le(){this.nextSibling&&this.parentNode.appendChild(this)}function Be(){return this.each(Le)}function Ve(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ye(){return this.each(Ve)}function ze(t){var n=typeof t=="function"?t:Ut(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Qe(){return null}function Ue(t,n){var e=typeof t=="function"?t:Ut(t),r=n==null?Qe:typeof n=="function"?n:gt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Ke(){var t=this.parentNode;t&&t.removeChild(this)}function Ge(){return this.each(Ke)}function We(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Je(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Ze(t){return this.select(t?Je:We)}function je(t){return arguments.length?this.property("__data__",t):this.node().__data__}function tr(t){return function(n){t.call(this,n,this.__data__)}}function nr(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function er(t){return function(){var n=this.__on;if(!!n){for(var e=0,r=-1,i=n.length,o;e<i;++e)o=n[e],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):n[++r]=o;++r?n.length=r:delete this.__on}}}function rr(t,n,e){return function(){var r=this.__on,i,o=tr(n);if(r){for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=n;return}}this.addEventListener(t.type,o,e),i={type:t.type,name:t.name,value:n,listener:o,options:e},r?r.push(i):this.__on=[i]}}function ir(t,n,e){var r=nr(t+""),i,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var u=0,f=a.length,l;u<f;++u)for(i=0,l=a[u];i<o;++i)if((s=r[i]).type===l.type&&s.name===l.name)return l.value}return}for(a=n?rr:er,i=0;i<o;++i)this.each(a(r[i],n,e));return this}function rn(t,n,e){var r=Zt(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function or(t,n){return function(){return rn(this,t,n)}}function sr(t,n){return function(){return rn(this,t,n.apply(this,arguments))}}function ar(t,n){return this.each((typeof n=="function"?sr:or)(t,n))}function*ur(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var on=[null];function y(t,n){this._groups=t,this._parents=n}function B(){return new y([[document.documentElement]],on)}function fr(){return this}y.prototype=B.prototype={constructor:y,select:In,selectAll:Xn,selectChild:Vn,selectChildren:Un,filter:Kn,data:te,enter:Gn,exit:ee,join:re,merge:ie,selection:fr,order:oe,sort:se,call:ue,nodes:fe,node:le,size:ce,empty:he,each:de,attr:ve,style:Ae,property:Ee,classed:qe,text:He,html:Oe,raise:Be,lower:Ye,append:ze,insert:Ue,remove:Ge,clone:Ze,datum:je,on:ir,dispatch:ar,[Symbol.iterator]:ur};function Ji(t){return typeof t=="string"?new y([[document.querySelector(t)]],[document.documentElement]):new y([[t]],on)}function wt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function sn(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function V(){}var D=.7,Z=1/D,T="\\s*([+-]?\\d+)\\s*",X="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",v="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lr=/^#([0-9a-f]{3,8})$/,cr=new RegExp(`^rgb\\(${T},${T},${T}\\)$`),hr=new RegExp(`^rgb\\(${v},${v},${v}\\)$`),dr=new RegExp(`^rgba\\(${T},${T},${T},${X}\\)$`),pr=new RegExp(`^rgba\\(${v},${v},${v},${X}\\)$`),_r=new RegExp(`^hsl\\(${X},${v},${v}\\)$`),gr=new RegExp(`^hsla\\(${X},${v},${v},${X}\\)$`),Et={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wt(V,O,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:St,formatHex:St,formatHex8:yr,formatHsl:wr,formatRgb:Rt,toString:Rt});function St(){return this.rgb().formatHex()}function yr(){return this.rgb().formatHex8()}function wr(){return an(this).formatHsl()}function Rt(){return this.rgb().formatRgb()}function O(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=lr.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?Tt(n):e===3?new g(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?z(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?z(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=cr.exec(t))?new g(n[1],n[2],n[3],1):(n=hr.exec(t))?new g(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=dr.exec(t))?z(n[1],n[2],n[3],n[4]):(n=pr.exec(t))?z(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=_r.exec(t))?Ft(n[1],n[2]/100,n[3]/100,1):(n=gr.exec(t))?Ft(n[1],n[2]/100,n[3]/100,n[4]):Et.hasOwnProperty(t)?Tt(Et[t]):t==="transparent"?new g(NaN,NaN,NaN,0):null}function Tt(t){return new g(t>>16&255,t>>8&255,t&255,1)}function z(t,n,e,r){return r<=0&&(t=n=e=NaN),new g(t,n,e,r)}function xr(t){return t instanceof V||(t=O(t)),t?(t=t.rgb(),new g(t.r,t.g,t.b,t.opacity)):new g}function lt(t,n,e,r){return arguments.length===1?xr(t):new g(t,n,e,r==null?1:r)}function g(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}wt(g,lt,sn(V,{brighter(t){return t=t==null?Z:Math.pow(Z,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?D:Math.pow(D,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new g(C(this.r),C(this.g),C(this.b),j(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qt,formatHex:qt,formatHex8:vr,formatRgb:Mt,toString:Mt}));function qt(){return`#${k(this.r)}${k(this.g)}${k(this.b)}`}function vr(){return`#${k(this.r)}${k(this.g)}${k(this.b)}${k((isNaN(this.opacity)?1:this.opacity)*255)}`}function Mt(){const t=j(this.opacity);return`${t===1?"rgb(":"rgba("}${C(this.r)}, ${C(this.g)}, ${C(this.b)}${t===1?")":`, ${t})`}`}function j(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function C(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function k(t){return t=C(t),(t<16?"0":"")+t.toString(16)}function Ft(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new w(t,n,e,r)}function an(t){if(t instanceof w)return new w(t.h,t.s,t.l,t.opacity);if(t instanceof V||(t=O(t)),!t)return new w;if(t instanceof w)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),s=NaN,a=o-i,u=(o+i)/2;return a?(n===o?s=(e-r)/a+(e<r)*6:e===o?s=(r-n)/a+2:s=(n-e)/a+4,a/=u<.5?o+i:2-o-i,s*=60):a=u>0&&u<1?0:s,new w(s,a,u,t.opacity)}function mr(t,n,e,r){return arguments.length===1?an(t):new w(t,n,e,r==null?1:r)}function w(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}wt(w,mr,sn(V,{brighter(t){return t=t==null?Z:Math.pow(Z,t),new w(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?D:Math.pow(D,t),new w(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new g(st(t>=240?t-240:t+120,i,r),st(t,i,r),st(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new w(It(this.h),Q(this.s),Q(this.l),j(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=j(this.opacity);return`${t===1?"hsl(":"hsla("}${It(this.h)}, ${Q(this.s)*100}%, ${Q(this.l)*100}%${t===1?")":`, ${t})`}`}}));function It(t){return t=(t||0)%360,t<0?t+360:t}function Q(t){return Math.max(0,Math.min(1,t||0))}function st(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}var un=t=>()=>t;function br(t,n){return function(e){return t+e*n}}function Nr(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Ar(t){return(t=+t)==1?fn:function(n,e){return e-n?Nr(n,e,t):un(isNaN(n)?e:n)}}function fn(t,n){var e=n-t;return e?br(t,e):un(isNaN(t)?n:t)}var Ht=function t(n){var e=Ar(n);function r(i,o){var s=e((i=lt(i)).r,(o=lt(o)).r),a=e(i.g,o.g),u=e(i.b,o.b),f=fn(i.opacity,o.opacity);return function(l){return i.r=s(l),i.g=a(l),i.b=u(l),i.opacity=f(l),i+""}}return r.gamma=t,r}(1);function A(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var ct=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,at=new RegExp(ct.source,"g");function $r(t){return function(){return t}}function kr(t){return function(n){return t(n)+""}}function Cr(t,n){var e=ct.lastIndex=at.lastIndex=0,r,i,o,s=-1,a=[],u=[];for(t=t+"",n=n+"";(r=ct.exec(t))&&(i=at.exec(n));)(o=i.index)>e&&(o=n.slice(e,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,u.push({i:s,x:A(r,i)})),e=at.lastIndex;return e<n.length&&(o=n.slice(e),a[s]?a[s]+=o:a[++s]=o),a.length<2?u[0]?kr(u[0].x):$r(n):(n=u.length,function(f){for(var l=0,c;l<n;++l)a[(c=u[l]).i]=c.x(f);return a.join("")})}var Pt=180/Math.PI,ht={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ln(t,n,e,r,i,o){var s,a,u;return(s=Math.sqrt(t*t+n*n))&&(t/=s,n/=s),(u=t*e+n*r)&&(e-=t*u,r-=n*u),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,u/=a),t*r<n*e&&(t=-t,n=-n,u=-u,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Pt,skewX:Math.atan(u)*Pt,scaleX:s,scaleY:a}}var U;function Er(t){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?ht:ln(n.a,n.b,n.c,n.d,n.e,n.f)}function Sr(t){return t==null||(U||(U=document.createElementNS("http://www.w3.org/2000/svg","g")),U.setAttribute("transform",t),!(t=U.transform.baseVal.consolidate()))?ht:(t=t.matrix,ln(t.a,t.b,t.c,t.d,t.e,t.f))}function cn(t,n,e,r){function i(f){return f.length?f.pop()+" ":""}function o(f,l,c,h,d,p){if(f!==c||l!==h){var _=d.push("translate(",null,n,null,e);p.push({i:_-4,x:A(f,c)},{i:_-2,x:A(l,h)})}else(c||h)&&d.push("translate("+c+n+h+e)}function s(f,l,c,h){f!==l?(f-l>180?l+=360:l-f>180&&(f+=360),h.push({i:c.push(i(c)+"rotate(",null,r)-2,x:A(f,l)})):l&&c.push(i(c)+"rotate("+l+r)}function a(f,l,c,h){f!==l?h.push({i:c.push(i(c)+"skewX(",null,r)-2,x:A(f,l)}):l&&c.push(i(c)+"skewX("+l+r)}function u(f,l,c,h,d,p){if(f!==c||l!==h){var _=d.push(i(d)+"scale(",null,",",null,")");p.push({i:_-4,x:A(f,c)},{i:_-2,x:A(l,h)})}else(c!==1||h!==1)&&d.push(i(d)+"scale("+c+","+h+")")}return function(f,l){var c=[],h=[];return f=t(f),l=t(l),o(f.translateX,f.translateY,l.translateX,l.translateY,c,h),s(f.rotate,l.rotate,c,h),a(f.skewX,l.skewX,c,h),u(f.scaleX,f.scaleY,l.scaleX,l.scaleY,c,h),f=l=null,function(d){for(var p=-1,_=h.length,$;++p<_;)c[($=h[p]).i]=$.x(d);return c.join("")}}}var Rr=cn(Er,"px, ","px)","deg)"),Tr=cn(Sr,", ",")",")"),M=0,H=0,I=0,hn=1e3,tt,P,nt=0,E=0,it=0,L=typeof performance=="object"&&performance.now?performance:Date,dn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function xt(){return E||(dn(qr),E=L.now()+it)}function qr(){E=0}function et(){this._call=this._time=this._next=null}et.prototype=pn.prototype={constructor:et,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?xt():+e)+(n==null?0:+n),!this._next&&P!==this&&(P?P._next=this:tt=this,P=this),this._call=t,this._time=e,dt()},stop:function(){this._call&&(this._call=null,this._time=1/0,dt())}};function pn(t,n,e){var r=new et;return r.restart(t,n,e),r}function Mr(){xt(),++M;for(var t=tt,n;t;)(n=E-t._time)>=0&&t._call.call(void 0,n),t=t._next;--M}function Dt(){E=(nt=L.now())+it,M=H=0;try{Mr()}finally{M=0,Ir(),E=0}}function Fr(){var t=L.now(),n=t-nt;n>hn&&(it-=n,nt=t)}function Ir(){for(var t,n=tt,e,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:tt=e);P=t,dt(r)}function dt(t){if(!M){H&&(H=clearTimeout(H));var n=t-E;n>24?(t<1/0&&(H=setTimeout(Dt,t-L.now()-it)),I&&(I=clearInterval(I))):(I||(nt=L.now(),I=setInterval(Fr,hn)),M=1,dn(Dt))}}function Xt(t,n,e){var r=new et;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}var Hr=Qt("start","end","cancel","interrupt"),Pr=[],_n=0,Ot=1,pt=2,G=3,Lt=4,_t=5,W=6;function ot(t,n,e,r,i,o){var s=t.__transition;if(!s)t.__transition={};else if(e in s)return;Dr(t,e,{name:n,index:r,group:i,on:Hr,tween:Pr,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:_n})}function vt(t,n){var e=x(t,n);if(e.state>_n)throw new Error("too late; already scheduled");return e}function m(t,n){var e=x(t,n);if(e.state>G)throw new Error("too late; already running");return e}function x(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Dr(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=pn(o,0,e.time);function o(f){e.state=Ot,e.timer.restart(s,e.delay,e.time),e.delay<=f&&s(f-e.delay)}function s(f){var l,c,h,d;if(e.state!==Ot)return u();for(l in r)if(d=r[l],d.name===e.name){if(d.state===G)return Xt(s);d.state===Lt?(d.state=W,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete r[l]):+l<n&&(d.state=W,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete r[l])}if(Xt(function(){e.state===G&&(e.state=Lt,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=pt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===pt){for(e.state=G,i=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(d=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(i[++c]=d);i.length=c+1}}function a(f){for(var l=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(u),e.state=_t,1),c=-1,h=i.length;++c<h;)i[c].call(t,l);e.state===_t&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=W,e.timer.stop(),delete r[n];for(var f in r)return;delete t.__transition}}function Xr(t,n){var e=t.__transition,r,i,o=!0,s;if(!!e){n=n==null?null:n+"";for(s in e){if((r=e[s]).name!==n){o=!1;continue}i=r.state>pt&&r.state<_t,r.state=W,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[s]}o&&delete t.__transition}}function Or(t){return this.each(function(){Xr(this,t)})}function Lr(t,n){var e,r;return function(){var i=m(this,t),o=i.tween;if(o!==e){r=e=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===n){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function Br(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=m(this,t),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:n,value:e},u=0,f=i.length;u<f;++u)if(i[u].name===n){i[u]=a;break}u===f&&i.push(a)}o.tween=i}}function Vr(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=x(this.node(),e).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===t)return s.value;return null}return this.each((n==null?Lr:Br)(e,t,n))}function mt(t,n,e){var r=t._id;return t.each(function(){var i=m(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return x(i,r).value[n]}}function gn(t,n){var e;return(typeof n=="number"?A:n instanceof O?Ht:(e=O(n))?(n=e,Ht):Cr)(t,n)}function Yr(t){return function(){this.removeAttribute(t)}}function zr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Qr(t,n,e){var r,i=e+"",o;return function(){var s=this.getAttribute(t);return s===i?null:s===r?o:o=n(r=s,e)}}function Ur(t,n,e){var r,i=e+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===i?null:s===r?o:o=n(r=s,e)}}function Kr(t,n,e){var r,i,o;return function(){var s,a=e(this),u;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),u=a+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a)))}}function Gr(t,n,e){var r,i,o;return function(){var s,a=e(this),u;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),u=a+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a)))}}function Wr(t,n){var e=rt(t),r=e==="transform"?Tr:gn;return this.attrTween(t,typeof n=="function"?(e.local?Gr:Kr)(e,r,mt(this,"attr."+t,n)):n==null?(e.local?zr:Yr)(e):(e.local?Ur:Qr)(e,r,n))}function Jr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Zr(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function jr(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Zr(t,o)),e}return i._value=n,i}function ti(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Jr(t,o)),e}return i._value=n,i}function ni(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=rt(t);return this.tween(e,(r.local?jr:ti)(r,n))}function ei(t,n){return function(){vt(this,t).delay=+n.apply(this,arguments)}}function ri(t,n){return n=+n,function(){vt(this,t).delay=n}}function ii(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?ei:ri)(n,t)):x(this.node(),n).delay}function oi(t,n){return function(){m(this,t).duration=+n.apply(this,arguments)}}function si(t,n){return n=+n,function(){m(this,t).duration=n}}function ai(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?oi:si)(n,t)):x(this.node(),n).duration}function ui(t,n){if(typeof n!="function")throw new Error;return function(){m(this,t).ease=n}}function fi(t){var n=this._id;return arguments.length?this.each(ui(n,t)):x(this.node(),n).ease}function li(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;m(this,t).ease=e}}function ci(t){if(typeof t!="function")throw new Error;return this.each(li(this._id,t))}function hi(t){typeof t!="function"&&(t=Gt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],s=o.length,a=r[i]=[],u,f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new N(r,this._parents,this._name,this._id)}function di(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),s=new Array(r),a=0;a<o;++a)for(var u=n[a],f=e[a],l=u.length,c=s[a]=new Array(l),h,d=0;d<l;++d)(h=u[d]||f[d])&&(c[d]=h);for(;a<r;++a)s[a]=n[a];return new N(s,this._parents,this._name,this._id)}function pi(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function _i(t,n,e){var r,i,o=pi(n)?vt:m;return function(){var s=o(this,t),a=s.on;a!==r&&(i=(r=a).copy()).on(n,e),s.on=i}}function gi(t,n){var e=this._id;return arguments.length<2?x(this.node(),e).on.on(t):this.each(_i(e,t,n))}function yi(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function wi(){return this.on("end.remove",yi(this._id))}function xi(t){var n=this._name,e=this._id;typeof t!="function"&&(t=gt(t));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var a=r[s],u=a.length,f=o[s]=new Array(u),l,c,h=0;h<u;++h)(l=a[h])&&(c=t.call(l,l.__data__,h,a))&&("__data__"in l&&(c.__data__=l.__data__),f[h]=c,ot(f[h],n,e,h,f,x(l,e)));return new N(o,this._parents,n,e)}function vi(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Kt(t));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var u=r[a],f=u.length,l,c=0;c<f;++c)if(l=u[c]){for(var h=t.call(l,l.__data__,c,u),d,p=x(l,e),_=0,$=h.length;_<$;++_)(d=h[_])&&ot(d,n,e,_,h,p);o.push(h),s.push(l)}return new N(o,s,n,e)}var mi=B.prototype.constructor;function bi(){return new mi(this._groups,this._parents)}function Ni(t,n){var e,r,i;return function(){var o=q(this,t),s=(this.style.removeProperty(t),q(this,t));return o===s?null:o===e&&s===r?i:i=n(e=o,r=s)}}function yn(t){return function(){this.style.removeProperty(t)}}function Ai(t,n,e){var r,i=e+"",o;return function(){var s=q(this,t);return s===i?null:s===r?o:o=n(r=s,e)}}function $i(t,n,e){var r,i,o;return function(){var s=q(this,t),a=e(this),u=a+"";return a==null&&(u=a=(this.style.removeProperty(t),q(this,t))),s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a))}}function ki(t,n){var e,r,i,o="style."+n,s="end."+o,a;return function(){var u=m(this,t),f=u.on,l=u.value[o]==null?a||(a=yn(n)):void 0;(f!==e||i!==l)&&(r=(e=f).copy()).on(s,i=l),u.on=r}}function Ci(t,n,e){var r=(t+="")=="transform"?Rr:gn;return n==null?this.styleTween(t,Ni(t,r)).on("end.style."+t,yn(t)):typeof n=="function"?this.styleTween(t,$i(t,r,mt(this,"style."+t,n))).each(ki(this._id,t)):this.styleTween(t,Ai(t,r,n),e).on("end.style."+t,null)}function Ei(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function Si(t,n,e){var r,i;function o(){var s=n.apply(this,arguments);return s!==i&&(r=(i=s)&&Ei(t,s,e)),r}return o._value=n,o}function Ri(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Si(t,n,e==null?"":e))}function Ti(t){return function(){this.textContent=t}}function qi(t){return function(){var n=t(this);this.textContent=n==null?"":n}}function Mi(t){return this.tween("text",typeof t=="function"?qi(mt(this,"text",t)):Ti(t==null?"":t+""))}function Fi(t){return function(n){this.textContent=t.call(this,n)}}function Ii(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&Fi(i)),n}return r._value=t,r}function Hi(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Ii(t))}function Pi(){for(var t=this._name,n=this._id,e=wn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,u,f=0;f<a;++f)if(u=s[f]){var l=x(u,n);ot(u,t,e,f,s,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new N(r,this._parents,t,e)}function Di(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,s){var a={value:s},u={value:function(){--i===0&&o()}};e.each(function(){var f=m(this,r),l=f.on;l!==t&&(n=(t=l).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(u)),f.on=n}),i===0&&o()})}var Xi=0;function N(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function wn(){return++Xi}var b=B.prototype;N.prototype={constructor:N,select:xi,selectAll:vi,selectChild:b.selectChild,selectChildren:b.selectChildren,filter:hi,merge:di,selection:bi,transition:Pi,call:b.call,nodes:b.nodes,node:b.node,size:b.size,empty:b.empty,each:b.each,on:gi,attr:Wr,attrTween:ni,style:Ci,styleTween:Ri,text:Mi,textTween:Hi,remove:wi,tween:Vr,delay:ii,duration:ai,ease:fi,easeVarying:ci,end:Di,[Symbol.iterator]:b[Symbol.iterator]};function Oi(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Li={time:null,delay:0,duration:250,ease:Oi};function Bi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function Vi(t){var n,e;t instanceof N?(n=t._id,t=t._name):(n=wn(),(e=Li).time=xt(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,u,f=0;f<a;++f)(u=s[f])&&ot(u,t,n,f,s,e||Bi(u,n));return new N(r,this._parents,t,n)}B.prototype.interrupt=Or;B.prototype.transition=Vi;function R(t,n,e){this.k=t,this.x=n,this.y=e}R.prototype={constructor:R,scale:function(t){return t===1?this:new R(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new R(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new R(1,0,0);R.prototype;var Yi=Bt({name:"QCard",props:{...vn,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:n}){const{proxy:{$q:e}}=Yt(),r=mn(t,e),i=ut(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>Vt(t.tag,{class:i.value},zt(n.default))}}),zi=Bt({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:n}){const{proxy:{$q:e}}=Yt(),r=At(bn,S);if(r===S)return console.error("QPage needs to be a deep child of QLayout"),S;if(At(Nn,S)===S)return console.error("QPage needs to be child of QPageContainer"),S;const o=ut(()=>{const a=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof t.styleFn=="function"){const u=r.isContainer.value===!0?r.containerHeight.value:e.screen.height;return t.styleFn(a,u)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-a+"px":e.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":e.screen.height-a+"px"}}),s=ut(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>Vt("main",{class:s.value,style:o.value},zt(n.default))}});const Qi={};function Ui(t,n){return $n(),kn(zi,{class:"column items-center"},{default:$t(()=>[Cn(Yi,{class:"column items-center q-ma-md q-pa-md"},{default:$t(()=>[En(t.$slots,"default")]),_:3})]),_:3})}var Zi=An(Qi,[["render",Ui]]);export{Zi as E,O as a,Ht as b,un as c,Cr as d,A as i,Ji as s};