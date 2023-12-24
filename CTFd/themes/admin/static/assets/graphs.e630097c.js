import{N as g,E as y,K as d,O as b}from"./pages/main.17a48075.js";import{e as f}from"./echarts-en.common.13902b37.js";const m={score_graph:{format:(u,i,s,p,r)=>{let l={title:{left:"center",text:"Score over Time"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:0,data:[s]},toolbox:{feature:{saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const n=[],a=[],o=r[0].data,h=r[2].data,e=o.concat(h);e.sort((t,c)=>new Date(t.date)-new Date(c.date));for(let t=0;t<e.length;t++){const c=y(e[t].date);n.push(c.toDate());try{a.push(e[t].challenge.value)}catch{a.push(e[t].value)}}return n.forEach(t=>{l.xAxis[0].data.push(t)}),l.series.push({name:window.stats_data.name,type:"line",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{color:d(s+i)}},itemStyle:{normal:{color:d(s+i)}},data:b(a)}),l}},category_breakdown:{format:(u,i,s,p,r)=>{let l={title:{left:"center",text:"Category Breakdown"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{saveAsImage:{}}},legend:{type:"scroll",orient:"vertical",top:"middle",right:0,data:[]},series:[{name:"Category Breakdown",type:"pie",radius:["30%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},itemStyle:{normal:{label:{show:!0,formatter:function(e){return`${e.percent}% (${e.value})`}},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"14",fontWeight:"normal"}}}},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[]}]};const n=r[0].data,a=[];for(let e=0;e<n.length;e++)a.push(n[e].challenge.category);const o=a.filter((e,t)=>a.indexOf(e)==t),h=[];for(let e=0;e<o.length;e++){let t=0;for(let c=0;c<a.length;c++)a[c]==o[e]&&t++;h.push(t)}return o.forEach((e,t)=>{l.legend.data.push(e),l.series[0].data.push({value:h[t],name:e,itemStyle:{color:d(e)}})}),l}},solve_percentages:{format:(u,i,s,p,r)=>{const l=r[0].data.length,n=r[1].meta.count;return{title:{left:"center",text:"Solve Percentages"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{saveAsImage:{}}},legend:{orient:"vertical",top:"middle",right:0,data:["Fails","Solves"]},series:[{name:"Solve Percentages",type:"pie",radius:["30%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},itemStyle:{normal:{label:{show:!0,formatter:function(o){return`${o.name} - ${o.value} (${o.percent}%)`}},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"14",fontWeight:"normal"}}}},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:n,name:"Fails",itemStyle:{color:"rgb(207, 38, 0)"}},{value:l,name:"Solves",itemStyle:{color:"rgb(0, 209, 64)"}}]}]}}}};function S(u,i,s,p,r,l,n){const a=m[u];let o=f.init(document.querySelector(i));o.setOption(a.format(p,r,l,n,s)),g(window).on("resize",function(){o!=null&&o!=null&&o.resize()})}function _(u,i,s,p,r,l,n){const a=m[u];f.init(document.querySelector(i)).setOption(a.format(p,r,l,n,s))}export{S as c,_ as u};
