import{j as n,e as I,T as d,F as h,C as R,r as l,f as w,h as P,J as T,i as D,u as L,k as O,B as k,c as A,R as K}from"./index-8761bca0.js";import{i as Q,b}from"./index-65217616.js";import{u as W}from"./useDispatch-fdd5cd52.js";const q=e=>{const{answer:t,question:s}=e;return n.jsxs(I,{role:"alert",children:[n.jsx(d,{$size:"100",$weight:"bold",children:s}),n.jsxs(h,{$gap:4,$alignItems:"flex-end",children:[n.jsx(d,{$size:"75",$color:"success",$colorLevel:"500",$weight:"medium",children:"정답"}),n.jsx(d,{$size:"75",children:t})]})]})},v="label";function C(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function B(e,t){const s=e.options;s&&t&&Object.assign(s,t)}function y(e,t){e.labels=t}function z(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v;const r=[];e.datasets=t.map(a=>{const o=e.datasets.find(f=>f[s]===a[s]);return!o||!a.data||r.includes(o)?{...a}:(r.push(o),Object.assign(o,a),o)})}function J(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v;const s={labels:[],datasets:[]};return y(s,e.labels),z(s,e.datasets,t),s}function M(e,t){const{height:s=150,width:r=300,redraw:a=!1,datasetIdKey:o,type:f,data:i,options:u,plugins:g=[],fallbackContent:m,updateMode:x,...E}=e,$=l.useRef(null),c=l.useRef(),p=()=>{$.current&&(c.current=new R($.current,{type:f,data:J(i,o),options:u&&{...u},plugins:g}),C(t,c.current))},j=()=>{C(t,null),c.current&&(c.current.destroy(),c.current=null)};return l.useEffect(()=>{!a&&c.current&&u&&B(c.current,u)},[a,u]),l.useEffect(()=>{!a&&c.current&&y(c.current.config.data,i.labels)},[a,i.labels]),l.useEffect(()=>{!a&&c.current&&i.datasets&&z(c.current.config.data,i.datasets,o)},[a,i.datasets]),l.useEffect(()=>{c.current&&(a?(j(),setTimeout(p)):c.current.update(x))},[a,u,i.labels,i.datasets,x]),l.useEffect(()=>{c.current&&(j(),setTimeout(p))},[f]),l.useEffect(()=>(p(),()=>j()),[]),w.createElement("canvas",Object.assign({ref:$,role:"img",height:s,width:r},E),m)}const N=l.forwardRef(M);function F(e,t){return R.register(t),l.forwardRef((s,r)=>w.createElement(N,Object.assign({},s,{ref:r,type:e})))}const S=F("pie",P),H=e=>{const{correctCount:t,incorrectCount:s}=e,{color:r}=T();return n.jsx(D,{role:"graphics-document",children:n.jsx(S,{data:{labels:["정답","오답"],datasets:[{label:"퀴즈 결과",data:[t,s],backgroundColor:[r.success[400],r.error[400]],borderColor:[r.success[400],r.error[400]],borderWidth:1}]}})})},_=()=>{const e=W(),t=L(),[s]=O(),r=Q(s.get("res")),a=r.incorrectQuizData.length,o=r.quizCount-a,f=()=>{e(A()),t(K.READY)},i=()=>{f()};return r?n.jsxs(h,{$direction:"column",$alignItems:"center",$height:"100%",$gap:20,children:[n.jsxs(h,{$direction:"column",$alignItems:"center",$gap:8,children:[n.jsx(d,{$size:"500",$weight:"bold",tag:"h2",children:"🥳 모든 퀴즈를 풀었습니다 🎉"}),n.jsxs(h,{$alignItems:"center",$gap:8,children:[n.jsxs(d,{$color:"success",$colorLevel:"500",$size:"50",children:["정답 ",o,"개"]}),n.jsxs(d,{$color:"error",$colorLevel:"500",$size:"50",children:["오답 ",a,"개"]}),n.jsxs(d,{$colorLevel:"600",$size:"50",$weight:"medium",children:["  총 소요 시간 ",r.seconds,"초"]})]})]}),n.jsx(H,{correctCount:o,incorrectCount:a}),n.jsx(k,{$fullWidth:!0,onClick:i,children:"처음으로"}),n.jsxs(h,{$direction:"column",$gap:8,style:{flex:1,overflow:"auto"},children:[n.jsx(d,{$colorLevel:"700",$size:"200",$weight:"medium",children:"오답 노트 📝"}),r==null?void 0:r.incorrectQuizData.map(({correct_answer:u,question:g},m)=>n.jsx(q,{answer:b(u)||"",question:b(g)||""},m))]})]}):(f(),null)};export{_ as default};