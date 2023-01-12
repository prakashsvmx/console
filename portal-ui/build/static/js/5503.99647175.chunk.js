(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5503],{23804:function(e,t,n){"use strict";n(72791);var r=n(11135),i=n(25787),s=n(61889),o=n(80184);t.Z=(0,i.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,r=e.title,i=e.help;return(0,o.jsx)("div",{className:t.root,children:(0,o.jsxs)(s.ZP,{container:!0,children:[(0,o.jsxs)(s.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,r]}),(0,o.jsx)(s.ZP,{item:!0,xs:12,className:t.helpText,children:i})]})})}))},47986:function(e,t,n){"use strict";n(72791);var r=n(61889),i=n(64554),s=n(23804),o=n(80184);t.Z=function(e){var t=e.iconComponent,n=e.entity;return(0,o.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,o.jsx)(r.ZP,{item:!0,xs:12,children:(0,o.jsx)(s.Z,{title:"".concat(n," not available"),iconComponent:t,help:(0,o.jsxs)(i.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,o.jsx)("div",{children:"This feature is not available for a single-disk setup."}),(0,o.jsxs)("div",{children:["Please deploy a server in"," ",(0,o.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},92217:function(e,t,n){"use strict";var r=n(1413),i=n(72791),s=n(61889),o=n(30829),l=n(20068),a=n(64554),c=n(11135),d=n(25787),u=n(75952),x=n(23814),h=n(78029),m=n.n(h),p=n(90932),g=n(27454),f=n(80184);t.Z=(0,d.Z)((function(e){return(0,c.Z)((0,r.Z)({},x.YI))}))((function(e){var t=e.value,n=e.label,r=void 0===n?"":n,c=e.tooltip,d=void 0===c?"":c,x=e.mode,h=void 0===x?"json":x,j=e.classes,b=e.onBeforeChange,v=(e.readOnly,e.editorHeight),Z=void 0===v?"250px":v;return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(s.ZP,{item:!0,xs:12,sx:{marginBottom:"10px"},children:(0,f.jsxs)(o.Z,{className:j.inputLabel,children:[(0,f.jsx)("span",{children:r}),""!==d&&(0,f.jsx)("div",{className:j.tooltipContainer,children:(0,f.jsx)(l.Z,{title:d,placement:"top-start",children:(0,f.jsx)("div",{className:j.tooltip,children:(0,f.jsx)(u.byK,{})})})})]})}),(0,f.jsx)(s.ZP,{item:!0,xs:12,style:{maxHeight:Z,overflow:"auto",border:"1px solid #eaeaea"},children:(0,f.jsx)(p.Z,{value:t,language:h,onChange:function(e){b(null,null,e.target.value)},id:"code_wrapper",padding:15,style:{fontSize:12,backgroundColor:"#fefefe",fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",minHeight:Z||"initial",color:"#000000"}})}),(0,f.jsx)(s.ZP,{item:!0,xs:12,sx:{background:"#f7f7f7",border:"1px solid #eaeaea",borderTop:0},children:(0,f.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}}},children:(0,f.jsx)(g.Z,{tooltip:"Copy to Clipboard",children:(0,f.jsx)(m(),{text:t,children:(0,f.jsx)(u.zxk,{type:"button",id:"copy-code-mirror",icon:(0,f.jsx)(u.TIy,{}),color:"primary",variant:"regular"})})})})})]})}))},87998:function(e,t,n){"use strict";var r=n(1413),i=n(4942),s=n(72791),o=n(66934),l=n(40986),a=n(78917),c=n(64554),d=n(80184),u=(0,o.ZP)(l.Z)((function(){var e;return e={height:10,borderRadius:5},(0,i.Z)(e,"&.".concat(a.Z.colorPrimary),{backgroundColor:"#f1f1f1"}),(0,i.Z)(e,"& .".concat(a.Z.bar),{borderRadius:5}),e})),x=(0,o.ZP)(u)((function(){return(0,i.Z)({height:6,borderRadius:3},"& .".concat(a.Z.bar),{borderRadius:3})}));function h(e){var t="#000",n=18;return e.error?(t="#C83B51",n=14):e.cancelled&&(t="#FFBD62",n=14),(0,d.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsx)(c.Z,{sx:{width:"100%",mr:3},children:(0,d.jsx)(u,(0,r.Z)({variant:"determinate"},e))}),(0,d.jsx)(c.Z,{sx:{minWidth:35,fontSize:n,color:t},className:"value",children:e.cancelled?"Cancelled":(0,d.jsx)(s.Fragment,{children:e.error?"Failed":"".concat(Math.round(e.value||0),"%")})})]})}t.Z=function(e){var t=e.value,n=e.ready,i=e.indeterminate,s=e.withLabel,o=e.size,l=void 0===o?"regular":o,a=e.error,c=e.cancelled,m={variant:!i||n||c?"determinate":"indeterminate",value:n?100:t,color:a?"error":c?"warning":100===t&&n?"success":"primary"};return s?(0,d.jsx)(h,(0,r.Z)((0,r.Z)({},m),{},{error:!!a,cancelled:!!c})):"small"===l?(0,d.jsx)(x,(0,r.Z)({},m)):(0,d.jsx)(u,(0,r.Z)({},m))}},15962:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(93433),i=n(29439),s=n(1413),o=n(72791),l=n(78687),a=n(95087),c=n(61889),d=n(57689),u=n(75952),x=n(99779),h=n(11135),m=n(32291),p=n(23814),g=n(26824),f=n(56087),j=n(26181),b=n.n(j),v=n(45248),Z=n(92217),y=n(20601),S=n(28265),w=n(82839),P=n(18602),C=n(25787),N=n(28182),E=n(80184),F=(0,C.Z)((function(e){return(0,h.Z)({objectGeneralTitle:{lineHeight:1,fontSize:50,color:"#696969"},generalUnit:{color:"#000",fontSize:12,fontWeight:"bold"},testUnitRes:{fontSize:60,color:"#081C42",fontWeight:"bold",textAlign:"right"},metricValContainer:{lineHeight:1,verticalAlign:"bottom"},objectsUnitRes:{fontSize:22,marginTop:6,color:"#696969",fontWeight:"bold",textAlign:"right"},objectsUnit:{color:"#696969",fontSize:16,fontWeight:"bold"},iconTd:{verticalAlign:"bottom"}})}))((function(e){var t=e.classes,n=e.title,r=e.icon,i=e.throughput,s=e.objects,o=(0,v.Am)(i),l="0",a="";return 0!==o.total&&(l=o.total.toString(),a="".concat(o.unit,"/s")),(0,E.jsxs)("table",{children:[(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:t.objectGeneralTitle,children:n}),(0,E.jsx)("td",{className:t.iconTd,children:r})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.testUnitRes),children:l}),(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.generalUnit),children:a})]}),(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.objectsUnitRes),children:s}),(0,E.jsx)("td",{className:(0,N.Z)(t.metricValContainer,t.objectsUnit),children:0!==s&&"Objs/S"})]})]})})),T=n(72455),k=(0,T.Z)((function(e){return(0,h.Z)({actionButtons:{textAlign:"right"},descriptorLabel:{fontWeight:"bold",fontSize:14},resultsContainer:{backgroundColor:"#FBFAFA",borderTop:"#F1F1F1 1px solid",marginTop:30,padding:25},resultsIcon:{display:"flex",alignItems:"center","& svg":{fill:"#07193E"}},detailedItem:{display:"flex",alignItems:"center",justifyContent:"flex-start"},detailedVersion:{display:"flex",alignItems:"center",justifyContent:"flex-end"},serversTable:{width:"100%",marginTop:15,"& thead > tr > th":{textAlign:"left",padding:15,fontSize:14,fontWeight:"bold"},"& tbody > tr":{"&:last-of-type":{"& > td":{borderBottom:"#E2E2E2 1px solid"}},"& > td":{borderTop:"#E2E2E2 1px solid",padding:15,fontSize:14,"&:first-of-type":{borderLeft:"#E2E2E2 1px solid"},"&:last-of-type":{borderRight:"#E2E2E2 1px solid"}}}},serverIcon:{width:55},serverValue:{width:140},serverHost:{maxWidth:540,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},tableOverflow:{overflowX:"auto",paddingBottom:15},objectGeneral:{marginTop:15},download:{"& .min-icon":{width:35,height:35,color:"rgb(113,200,150)"}},upload:{"& .min-icon":{width:35,height:35,color:"rgb(66,127,172)"}},versionIcon:{color:"#07193E",marginRight:20}})})),I=function(e){var t=e.results,n=e.start,s=k(),l=(0,o.useState)(!1),a=(0,i.Z)(l,2),d=a[0],x=a[1],h=t[t.length-1]||[],m=b()(h,"GETStats.servers",[])||[],p=b()(h,"PUTStats.servers",[])||[],g=b()(h,"GETStats.throughputPerSec",0),f=b()(h,"GETStats.objectsPerSec",0),j=b()(h,"PUTStats.throughputPerSec",0),C=b()(h,"PUTStats.objectsPerSec",0),N=[];m.forEach((function(e){var t=e.endpoint,n=p.find((function(e){return e.endpoint===t})),r={getUnit:"-",getValue:"N/A",host:e.endpoint,putUnit:"-",putValue:"N/A"};if(e.err&&""!==e.err)r.getError=e.err,r.getUnit="-",r.getValue="N/A";else{var i=(0,v.Am)(e.throughputPerSec.toString());r.getUnit=i.unit,r.getValue=i.total.toString()}if(n)if(n.err&&""!==n.err)r.putError=n.err,r.putUnit="-",r.putValue="N/A";else{var s=(0,v.Am)(n.throughputPerSec.toString());r.putUnit=s.unit,r.putValue=s.total.toString()}N.push(r)}));var T=h?JSON.stringify(h,null,4):"",I=function(e){var t=e.filter((function(e){return"0"!==e.version&&0!==e.disks})).map((function(e){var t,n;return{get:(null===(t=e.GETStats)||void 0===t?void 0:t.throughputPerSec)||0,put:(null===(n=e.PUTStats)||void 0===n?void 0:n.throughputPerSec)||0}}));return[{get:0,put:0}].concat((0,r.Z)(t))}(t);return(0,E.jsxs)(o.Fragment,{children:[(0,E.jsxs)(c.ZP,{container:!0,className:s.objectGeneral,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsxs)(c.ZP,{container:!0,className:s.objectGeneral,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsx)(F,{icon:(0,E.jsx)("div",{className:s.download,children:(0,E.jsx)(u.Q_z,{})}),title:"GET",throughput:"".concat(g),objects:f})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsx)(F,{icon:(0,E.jsx)("div",{className:s.upload,children:(0,E.jsx)(u.jhp,{})}),title:"PUT",throughput:"".concat(j),objects:C})})]})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,E.jsx)(y.h,{width:"99%",children:(0,E.jsxs)(S.T,{data:I,children:[(0,E.jsxs)("defs",{children:[(0,E.jsxs)("linearGradient",{id:"colorPut",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,E.jsx)("stop",{offset:"0%",stopColor:"#2781B0",stopOpacity:.9}),(0,E.jsx)("stop",{offset:"95%",stopColor:"#fff",stopOpacity:0})]}),(0,E.jsxs)("linearGradient",{id:"colorGet",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,E.jsx)("stop",{offset:"0%",stopColor:"#4CCB92",stopOpacity:.9}),(0,E.jsx)("stop",{offset:"95%",stopColor:"#fff",stopOpacity:0})]})]}),(0,E.jsx)(w.q,{strokeDasharray:"0 0",strokeWidth:1,strokeOpacity:.5,stroke:"#F1F1F1",vertical:!1}),(0,E.jsx)(P.u,{type:"monotone",dataKey:"get",stroke:"#4CCB92",fill:"url(#colorGet)",fillOpacity:.3,strokeWidth:2,dot:!1}),(0,E.jsx)(P.u,{type:"monotone",dataKey:"put",stroke:"#2781B0",fill:"url(#colorPut)",fillOpacity:.3,strokeWidth:2,dot:!1})]})})})]}),(0,E.jsx)("br",{}),I.length>1&&(0,E.jsxs)(o.Fragment,{children:[(0,E.jsxs)(c.ZP,{container:!0,children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,className:s.descriptorLabel,children:n?(0,E.jsx)(o.Fragment,{children:"Preliminar Results:"}):(0,E.jsx)(o.Fragment,{children:d?"JSON Results:":"Detailed Results:"})}),(0,E.jsx)(c.ZP,{item:!0,xs:12,md:6,className:s.actionButtons,children:!n&&(0,E.jsxs)(o.Fragment,{children:[(0,E.jsx)(u.zxk,{id:"download-results","aria-label":"Download Results",onClick:function(){var e=new Date,t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+JSON.stringify(h)),t.setAttribute("download","speedtest_results-".concat(e.toISOString(),".log")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},icon:(0,E.jsx)(u._8t,{})}),"\xa0",(0,E.jsx)(u.zxk,{id:"toggle-json","aria-label":"Toogle JSON",onClick:function(){x(!d)},icon:(0,E.jsx)(u.iH5,{})})]})})]}),(0,E.jsx)(c.ZP,{container:!0,className:s.resultsContainer,children:d?(0,E.jsx)(o.Fragment,{children:(0,E.jsx)(Z.Z,{value:T,readOnly:!0,onBeforeChange:function(){}})}):(0,E.jsxs)(o.Fragment,{children:[(0,E.jsx)(c.ZP,{item:!0,xs:12,sm:12,md:1,lg:1,className:s.resultsIcon,alignItems:"flex-end",children:(0,E.jsx)(u.UMk,{width:45})}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,className:s.detailedItem,children:["Nodes:\xa0",(0,E.jsx)("strong",{children:h.servers})]}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,className:s.detailedItem,children:["Drives:\xa0",(0,E.jsx)("strong",{children:h.disks})]}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,className:s.detailedItem,children:["Concurrent:\xa0",(0,E.jsx)("strong",{children:h.concurrent})]}),(0,E.jsxs)(c.ZP,{item:!0,xs:12,sm:12,md:12,lg:5,className:s.detailedVersion,children:[(0,E.jsx)("span",{className:s.versionIcon,children:(0,E.jsx)(u.Dbk,{})})," ","MinIO VERSION\xa0",(0,E.jsx)("strong",{children:h.version})]}),(0,E.jsx)(c.ZP,{item:!0,xs:12,className:s.tableOverflow,children:(0,E.jsxs)("table",{className:s.serversTable,cellSpacing:0,cellPadding:0,children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("th",{colSpan:2,children:"Servers"}),(0,E.jsx)("th",{children:"GET"}),(0,E.jsx)("th",{children:"PUT"})]})}),(0,E.jsx)("tbody",{children:N.map((function(e,t){return(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{className:s.serverIcon,children:(0,E.jsx)(u.idV,{})}),(0,E.jsx)("td",{className:s.serverHost,children:e.host}),e.getError&&""!==e.getError?(0,E.jsx)("td",{children:e.getError}):(0,E.jsx)(o.Fragment,{children:(0,E.jsxs)("td",{className:s.serverValue,children:[(0,v.CE)(parseFloat(e.getValue)),"\xa0",e.getUnit,"/s."]})}),e.putError&&""!==e.putError?(0,E.jsx)("td",{children:e.putError}):(0,E.jsx)(o.Fragment,{children:(0,E.jsxs)("td",{className:s.serverValue,children:[(0,v.CE)(parseFloat(e.putValue)),"\xa0",e.putUnit,"/s."]})})]},"storage-".concat(t.toString()))}))})]})})]})})]})]})},R=n(21435),O=n(87998),B=n(56578),U=n(74794),z=n(38442),A=n(47986),L=n(23804),V=n(87995),G=n(31460),_=(0,T.Z)((function(e){return(0,h.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({advancedContent:{backgroundColor:"#FBFAFA",maxHeight:0,transitionDuration:"0.3s",overflow:"hidden",padding:"0 15px",marginTop:15,justifyContent:"space-between","&.open":{maxHeight:400,paddingBottom:15}},stepProgressText:{fontSize:13,marginBottom:8}},p.S),p.OR),p.qg),p.DF),(0,p.Bz)(e.spacing(4))))})),D=function(){var e=(0,l.v9)(V.N5),t=(0,l.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.system)||void 0===t?void 0:t.licenseInfo})),n=(0,d.s0)(),s=(t||{}).plan,h=void 0===s?"":s,p="STANDARD"===h||"ENTERPRISE"===h,j=_(),b=(0,o.useState)(!1),v=(0,i.Z)(b,2),Z=v[0],y=v[1],S=(0,o.useState)(null),w=(0,i.Z)(S,2),P=w[0],C=w[1],N=(0,o.useState)("64"),F=(0,i.Z)(N,2),T=F[0],k=F[1],D=(0,o.useState)("MB"),M=(0,i.Z)(D,2),W=M[0],H=M[1],J=(0,o.useState)("10"),K=(0,i.Z)(J,2),q=K[0],Q=K[1],X=(0,o.useState)(0),Y=(0,i.Z)(X,2),$=Y[0],ee=Y[1],te=(0,o.useState)(0),ne=(0,i.Z)(te,2),re=ne[0],ie=ne[1],se=(0,o.useState)(0),oe=(0,i.Z)(se,2),le=oe[0],ae=oe[1],ce=(0,o.useState)(0),de=(0,i.Z)(ce,2),ue=de[0],xe=de[1];(0,o.useEffect)((function(){if(Z){var e=new URL(window.location.toString()),t=e.port,n=new URL(document.baseURI).pathname,i=(0,g.x2)(e.protocol),s=new a.w3cwebsocket("".concat(i,"://").concat(e.hostname,":").concat(t).concat(n,"ws/speedtest?&size=").concat(T).concat(W,"&duration=").concat(q,"s")),o=x.ou.now(),l=o.toUnixInteger()/1e3,c=o.plus({seconds:2*parseInt("10")}).toUnixInteger()/1e3,d=(c-l)/1e3;ee(c),ie(l),ae(d);var u=null;if(null!==s)return s.onopen=function(){console.log("WebSocket Client Connected"),s.send("ok"),u=setInterval((function(){s.send("ok")}),1e4)},s.onmessage=function(e){var t=JSON.parse(e.data.toString());C((function(e){var n=[];e&&(n=(0,r.Z)(e));var i=0!==t.servers?[t]:[];return[].concat((0,r.Z)(n),i)}));var n=x.ou.now().toUnixInteger()/1e3;ie(n)},s.onclose=function(){clearInterval(u),console.log("connection closed by server"),y(!1)},function(){s.close(1e3),clearInterval(u),console.log("closing websockets")}}else y(!1)}),[T,W,Z,q]),(0,o.useEffect)((function(){var e=100-100*(($-re)/1e3)/le;e>100&&(e=100),xe(e)}),[Z,re,$,le]);var he=Z?"Start":null!==P?"Retest":"Start";return(0,E.jsxs)(o.Fragment,{children:[(0,E.jsx)(m.Z,{label:"Performance"}),(0,E.jsxs)(U.Z,{children:[!p&&(0,E.jsx)(G.Z,{compactMode:!0}),e?(0,E.jsxs)(z.s,{scopes:[f.Ft.ADMIN_HEAL],resource:f.C3,children:[(0,E.jsxs)(c.ZP,{item:!0,xs:12,className:j.boxy,children:[(0,E.jsxs)(c.ZP,{container:!0,children:[(0,E.jsxs)(c.ZP,{item:!0,md:4,sm:12,children:[(0,E.jsx)("div",{className:j.stepProgressText,children:Z?(0,E.jsxs)(o.Fragment,{children:["Speedtest in progress...",(0,E.jsx)(u.aNw,{style:{width:15,height:15}})]}):(0,E.jsx)(o.Fragment,{children:P&&!Z?(0,E.jsx)("b",{children:"Speed Test results:"}):(0,E.jsx)("b",{children:"Performance test"})})}),(0,E.jsx)("div",{children:(0,E.jsx)(O.Z,{value:ue,ready:null!==P&&!Z,indeterminate:Z,size:"small"})})]}),(0,E.jsx)(c.ZP,{item:!0,md:!0,sm:12,children:(0,E.jsx)("div",{style:{marginLeft:10,width:300},children:(0,E.jsx)(R.Z,{id:"size",name:"size",label:"Object Size",onChange:function(e){k(e.target.value)},noLabelMinWidth:!0,value:T,disabled:Z,overlayObject:(0,E.jsx)(B.Z,{id:"size-unit",onUnitChange:H,unitSelected:W,unitsList:[{label:"KiB",value:"KiB"},{label:"MiB",value:"MiB"},{label:"GiB",value:"GiB"}],disabled:Z})})})}),(0,E.jsx)(c.ZP,{item:!0,md:!0,sm:12,children:(0,E.jsx)("div",{style:{marginLeft:10,width:300},children:(0,E.jsx)(R.Z,{id:"duration",name:"duration",label:"Duration",onChange:function(e){e.target.validity.valid&&Q(e.target.value)},noLabelMinWidth:!0,value:q,disabled:Z,overlayObject:(0,E.jsx)(B.Z,{id:"size-unit",onUnitChange:function(){},unitSelected:"s",unitsList:[{label:"s",value:"s"}],disabled:Z}),pattern:"[0-9]*"})})}),(0,E.jsx)(c.ZP,{item:!0,md:1,sm:12,textAlign:"right",children:(0,E.jsx)(u.zxk,{onClick:function(){"STANDARD"===h||"ENTERPRISE"===h?(C(null),y(!0)):n("/support/register")},color:"primary",type:"button",id:"start-speed-test",variant:p&&null!==P&&!Z?"callAction":"regular",className:"".concat(j.buttonBackground," ").concat(j.speedStart),disabled:""===q.trim()||""===T.trim()||Z,label:he})})]}),(0,E.jsx)(c.ZP,{container:!0,className:j.multiModule,children:(0,E.jsx)(c.ZP,{item:!0,xs:12,children:(0,E.jsx)(o.Fragment,{children:(0,E.jsx)(c.ZP,{item:!0,xs:12,children:null!==P&&(0,E.jsx)(o.Fragment,{children:(0,E.jsx)(I,{results:P,start:Z})})})})})})]}),!Z&&!P&&p&&(0,E.jsxs)(o.Fragment,{children:[(0,E.jsx)("br",{}),(0,E.jsx)(L.Z,{title:"During the speed test all your production traffic will be temporarily suspended.",iconComponent:(0,E.jsx)(u.e6P,{}),help:(0,E.jsx)(o.Fragment,{})})]})]}):(0,E.jsx)(A.Z,{iconComponent:(0,E.jsx)(u.QBB,{}),entity:"Speedtest"})]})]})}},31460:function(e,t,n){"use strict";var r=n(72791),i=n(61889),s=n(36151),o=n(64554),l=n(57689),a=n(75952),c=n(23804),d=n(80184);t.Z=function(e){var t=e.compactMode,n=void 0!==t&&t,u=(0,l.s0)(),x=(0,d.jsx)(s.Z,{type:"submit",variant:"contained",color:"primary",onClick:function(){return u("/support/register")},children:"Register your Cluster"}),h="Use your MinIO Subscription Network login credentials to register this cluster.";return n?(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(c.Z,{title:(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},children:[(0,d.jsx)("span",{children:h})," ",x]}),iconComponent:(0,d.jsx)(a.e6P,{}),help:(0,d.jsx)(r.Fragment,{})}),(0,d.jsx)("br",{})]}):(0,d.jsx)(o.Z,{sx:{padding:"25px",border:"1px solid #eaeaea",display:"flex",alignItems:"center",justifyContent:"center",flexFlow:{sm:"row",xs:"column"},marginBottom:"15px"},children:(0,d.jsxs)(i.ZP,{container:!0,children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(o.Z,{sx:{marginRight:"8px",fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center","& .min-icon":{width:"83px",height:"14px",marginLeft:"5px",marginRight:"5px"}},children:"Register your cluster"})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(o.Z,{sx:{display:"flex",flexFlow:{xs:"column",md:"row"}},children:(0,d.jsxs)(o.Z,{sx:{display:"flex",flexFlow:"column",flex:"2"},children:[(0,d.jsx)(o.Z,{sx:{fontSize:"16px",display:"flex",flexFlow:"column",marginTop:"15px",marginBottom:"15px"},children:h}),(0,d.jsx)(o.Z,{sx:{flex:"1"},children:(0,d.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:x})})]})})})]})})}},26824:function(e,t,n){"use strict";n.d(t,{HE:function(){return s},V9:function(){return r},ci:function(){return i},x2:function(){return o}});var r=1006,i=1008,s=1011,o=function(e){var t="ws";return"https:"===e&&(t="wss"),t}},94210:function(e){var t=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},95087:function(e,t,n){var r;if("object"===typeof globalThis)r=globalThis;else try{r=n(94210)}catch(l){}finally{if(r||"undefined"===typeof window||(r=window),!r)throw new Error("Could not determine global this")}var i=r.WebSocket||r.MozWebSocket,s=n(51496);function o(e,t){return t?new i(e,t):new i(e)}i&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(o,e,{get:function(){return i[e]}})})),e.exports={w3cwebsocket:i?o:null,version:s}},51496:function(e,t,n){e.exports=n(19794).version},19794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=5503.99647175.chunk.js.map