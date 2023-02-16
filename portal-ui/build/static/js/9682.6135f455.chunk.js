"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9682],{33690:function(e,n,i){i.r(n);var t=i(29439),o=i(1413),a=i(72791),l=i(75952),s=i(11135),c=i(25787),r=i(61889),d=i(23814),u=i(81207),x=i(56028),p=i(90673),f=i(92217),m=i(87995),h=i(25469),b=i(19859),g=i(80184);(0,s.Z)((0,o.Z)((0,o.Z)({},d.ID),d.bK));n.default=(0,c.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)((0,o.Z)({codeMirrorContainer:{marginBottom:20,"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},d.DF),d.ID),d.bK))}))((function(e){var n=e.classes,i=e.open,o=e.bucketName,s=e.actualPolicy,c=e.actualDefinition,d=e.closeModalAndRefresh,Z=(0,h.TL)(),j=(0,a.useState)(!1),v=(0,t.Z)(j,2),y=v[0],C=v[1],P=(0,a.useState)(""),S=(0,t.Z)(P,2),k=S[0],B=S[1],M=(0,a.useState)(b.L),N=(0,t.Z)(M,2),I=N[0],L=N[1];return(0,a.useEffect)((function(){B(s),L(c?JSON.stringify(JSON.parse(c),null,4):b.L)}),[B,s,L,c]),(0,g.jsx)(x.Z,{title:"Change Access Policy",modalOpen:i,onClose:function(){d()},titleIcon:(0,g.jsx)(l.QXQ,{}),children:(0,g.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),y||(C(!0),u.Z.invoke("PUT","/api/v1/buckets/".concat(o,"/set-policy"),{access:k,definition:I}).then((function(e){C(!1),d()})).catch((function(e){C(!1),Z((0,m.zb)(e))})))},children:(0,g.jsxs)(r.ZP,{container:!0,children:[(0,g.jsxs)(r.ZP,{item:!0,xs:12,className:n.modalFormScrollable,children:[(0,g.jsx)(r.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,g.jsx)(p.Z,{value:k,label:"Access Policy",id:"select-access-policy",name:"select-access-policy",onChange:function(e){B(e.target.value)},options:[{value:"PRIVATE",label:"Private"},{value:"PUBLIC",label:"Public"},{value:"CUSTOM",label:"Custom"}]})}),"PUBLIC"===k&&(0,g.jsx)("div",{style:{marginTop:"25px",fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:"* Warning: With Public access anyone will be able to upload, download and delete files from this Bucket *"}),"CUSTOM"===k&&(0,g.jsx)(r.ZP,{item:!0,xs:12,className:n.codeMirrorContainer,children:(0,g.jsx)(f.Z,{label:"Write Policy",value:I,onBeforeChange:function(e,n,i){L(i)},editorHeight:"350px"})})]}),(0,g.jsxs)(r.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,g.jsx)(l.zxk,{id:"cancel",type:"button",variant:"regular",onClick:function(){d()},disabled:y,label:"Cancel"}),(0,g.jsx)(l.zxk,{id:"set",type:"submit",variant:"callAction",disabled:y||"CUSTOM"===k&&!I,label:"Set"})]})]})})})}))},92217:function(e,n,i){var t=i(1413),o=i(72791),a=i(61889),l=i(30829),s=i(20068),c=i(64554),r=i(11135),d=i(25787),u=i(75952),x=i(23814),p=i(78029),f=i.n(p),m=i(60655),h=i(27454),b=i(80184);n.Z=(0,d.Z)((function(e){return(0,r.Z)((0,t.Z)({},x.YI))}))((function(e){var n=e.value,i=e.label,t=void 0===i?"":i,r=e.tooltip,d=void 0===r?"":r,x=e.mode,p=void 0===x?"json":x,g=e.classes,Z=e.onBeforeChange,j=(e.readOnly,e.editorHeight),v=void 0===j?"250px":j;return(0,b.jsxs)(o.Fragment,{children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,sx:{marginBottom:"10px"},children:(0,b.jsxs)(l.Z,{className:g.inputLabel,children:[(0,b.jsx)("span",{children:t}),""!==d&&(0,b.jsx)("div",{className:g.tooltipContainer,children:(0,b.jsx)(s.Z,{title:d,placement:"top-start",children:(0,b.jsx)("div",{className:g.tooltip,children:(0,b.jsx)(u.byK,{})})})})]})}),(0,b.jsx)(a.ZP,{item:!0,xs:12,style:{maxHeight:v,overflow:"auto",border:"1px solid #eaeaea"},children:(0,b.jsx)(m.Z,{value:n,language:p,onChange:function(e){Z(null,null,e.target.value)},id:"code_wrapper",padding:15,style:{fontSize:12,backgroundColor:"#fefefe",fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",minHeight:v||"initial",color:"#000000"}})}),(0,b.jsx)(a.ZP,{item:!0,xs:12,sx:{background:"#f7f7f7",border:"1px solid #eaeaea",borderTop:0},children:(0,b.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}}},children:(0,b.jsx)(h.Z,{tooltip:"Copy to Clipboard",children:(0,b.jsx)(f(),{text:n,children:(0,b.jsx)(u.zxk,{type:"button",id:"copy-code-mirror",icon:(0,b.jsx)(u.TIy,{}),color:"primary",variant:"regular"})})})})})]})}))},19859:function(e,n,i){i.d(n,{L:function(){return t}});var t='{\n    "Version": "2012-10-17",\n    "Statement": [\n        \n    ]\n}'}}]);
//# sourceMappingURL=9682.6135f455.chunk.js.map