(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5f7E":function(t,e,i){"use strict";i.r(e),i.d(e,"ui_water_jar",(function(){return a}));var r=i("9IFk");const a=class{constructor(t){Object(r.i)(this,t),this.value=0,this.color="#488aff",this.shape="circle"}getValidShape(){switch(this.shape){default:case"circle":case"round":return"circle";case"rect":case"square":return"rect"}}render(){const t=((t,e,i)=>(t<0&&(t=0),t>100&&(t=100),t))(this.value),e=this.color,i=this.getValidShape();return Object(r.g)(r.b,null,Object(r.g)("svg",{viewBox:"0 0 100 100",width:"100%",height:"100%"},Object(r.g)("defs",null,Object(r.g)("mask",{id:"mask-circle"},Object(r.g)("circle",{fill:"white",r:"50",cx:"50",cy:"50"})),Object(r.g)("mask",{id:"mask-rect"},Object(r.g)("rect",{fill:"white",x:"0",y:"0",width:"100",height:"100"})),Object(r.g)("symbol",{id:"water"},Object(r.g)("path",{d:"M200,109.992l-200,0.008l0,-110.016c16.668,0.001 33.334,5.016 50,5.016c16.666,0 33.333,-5.015 50,-5.016c16.668,0.001 33.334,5.016 50,5.016c16.665,0 33.333,-5.015 50,-5.016l0,110.008Z"}))),Object(r.g)("g",{mask:"url(#mask-"+i+")"},Object(r.g)("rect",{fill:"gray","fill-opacity":"0.1",x:"0",y:"0",width:"100",height:"100"}),Object(r.g)("g",{class:"water",transform:"translate(0,"+(100-1.05*t)+")"},Object(r.g)("use",{href:"#water",fill:e,"fill-opacity":"0.5",width:"200",height:"110"},Object(r.g)("animate",{attributeType:"XML",attributeName:"x",from:"0",to:"-100",dur:"1.4s",repeatCount:"indefinite"})),Object(r.g)("use",{href:"#water",fill:e,width:"200",height:"110"},Object(r.g)("animate",{attributeType:"XML",attributeName:"x",from:"-100",to:"0",dur:"0.7s",repeatCount:"indefinite"}))))))}};a.style=":host{width:100%;height:100%}:host svg{width:100%;height:100%}:host .water{-webkit-transition:-webkit-transform 300ms linear;transition:-webkit-transform 300ms linear;transition:transform 300ms linear;transition:transform 300ms linear, -webkit-transform 300ms linear}:host .water>*{-webkit-transition:fill 300ms linear;transition:fill 300ms linear}:host(.no-animation) .water{-webkit-transition:none !important;transition:none !important}:host(.no-animation) .water>*{-webkit-transition:none !important;transition:none !important}"}}]);