import{s as i,E as l}from"./ExerciseContainer.19c742a6.js";import{M as d,o as _,N as g,O as h,Q as p,Z as n}from"./index.7e5a0476.js";import"./use-dark.530b5504.js";import"./render.d2f1037b.js";const E=d({__name:"Exercise3",setup(u){return _(()=>{const a=[80,100,56,120,180,30,40,120,160],t=500,s=300,o=5,r=t/a.length;i("svg").attr("width",t).attr("height",s).selectAll("rect").data(a).enter().append("rect").attr("y",e=>s-e).attr("height",e=>e).attr("width",r-o).attr("transform",(e,c)=>`translate(${[r*c,0]})`)}),(a,t)=>(g(),h(l,null,{default:p(()=>t[0]||(t[0]=[n("h2",null,"Bar Chart using D3.js",-1),n("svg",{class:"bar-chart"},null,-1)])),_:1}))}});export{E as default};
