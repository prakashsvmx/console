"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2112],{9505:function(e,n,t){var o=t(29439),i=t(72791),a=t(81207);n.Z=function(e,n){var t=(0,i.useState)(!1),c=(0,o.Z)(t,2),s=c[0],r=c[1];return[s,function(t,o,i){r(!0),a.Z.invoke(t,o,i).then((function(n){r(!1),e(n)})).catch((function(e){r(!1),n(e)}))}]}},23508:function(e,n,t){var o=t(1413),i=t(72791),a=t(5574),c=t(65661),s=t(39157),r=t(97123),l=t(36151),d=t(59860),u=t(13400),m=t(29823),f=t(11135),p=t(25787),Z=t(23814),v=t(80184);n.Z=(0,p.Z)((function(e){return(0,f.Z)((0,o.Z)({},Z.Qw))}))((function(e){var n=e.isOpen,t=void 0!==n&&n,f=e.onClose,p=e.onCancel,Z=e.onConfirm,x=e.classes,C=void 0===x?{}:x,h=e.title,j=void 0===h?"":h,b=e.isLoading,k=e.confirmationContent,g=e.cancelText,P=void 0===g?"Cancel":g,N=e.confirmText,y=void 0===N?"Confirm":N,B=e.confirmButtonProps,E=void 0===B?{}:B,M=e.cancelButtonProps,T=void 0===M?{}:M,V=e.titleIcon,D=void 0===V?null:V;return(0,v.jsxs)(a.Z,{open:t,onClose:function(e,n){"backdropClick"!==n&&f()},className:C.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[(0,v.jsxs)(c.Z,{className:C.title,children:[(0,v.jsxs)("div",{className:C.titleText,children:[D," ",j]}),(0,v.jsx)("div",{className:C.closeContainer,children:(0,v.jsx)(u.Z,{"aria-label":"close",className:C.closeButton,onClick:f,disableRipple:!0,size:"small",children:(0,v.jsx)(m.Z,{})})})]}),(0,v.jsx)(s.Z,{className:C.content,children:k}),(0,v.jsxs)(r.Z,{className:C.actions,children:[(0,v.jsx)(l.Z,(0,o.Z)((0,o.Z)({className:C.cancelButton,onClick:p||f,disabled:b,type:"button"},T),{},{variant:"outlined",color:"primary",id:"confirm-cancel",children:P})),(0,v.jsx)(d.Z,(0,o.Z)((0,o.Z)({className:C.confirmButton,type:"button",onClick:Z,loading:b,disabled:b,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:(0,v.jsx)(i.Fragment,{}),autoFocus:!0,id:"confirm-ok"},E),{},{children:y}))]})]})}))},32112:function(e,n,t){t.r(n);var o=t(29439),i=t(72791),a=t(51691),c=t(21435),s=t(61889),r=t(60364),l=t(42649),d=t(9505),u=t(23508),m=t(93656),f=t(80184),p=(0,r.$j)(null,{setErrorSnackMessage:l.Ih});n.default=p((function(e){var n=e.deleteOpen,t=e.selectedPVC,r=e.closeDeleteModalAndRefresh,l=e.setErrorSnackMessage,p=(0,i.useState)(""),Z=(0,o.Z)(p,2),v=Z[0],x=Z[1],C=(0,d.Z)((function(){return r(!0)}),(function(e){return l(e)})),h=(0,o.Z)(C,2),j=h[0],b=h[1];return(0,f.jsx)(u.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:n,titleIcon:(0,f.jsx)(m.Nv,{}),isLoading:j,onConfirm:function(){v===t.name?b("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.tenant,"/pvc/").concat(t.name)):l({errorMessage:"PVC name is incorrect",detailedError:""})},onClose:function(){return r(!1)},confirmButtonProps:{disabled:v!==t.name||j},confirmationContent:(0,f.jsxs)(a.Z,{children:["To continue please type ",(0,f.jsx)("b",{children:t.name})," in the box.",(0,f.jsx)(s.ZP,{item:!0,xs:12,children:(0,f.jsx)(c.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){x(e.target.value)},label:"",value:v})})]})})}))},29823:function(e,n,t){var o=t(95318);n.Z=void 0;var i=o(t(45649)),a=t(80184),c=(0,i.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=c}}]);
//# sourceMappingURL=2112.6991f0b0.chunk.js.map