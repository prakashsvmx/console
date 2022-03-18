(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9080,1140],{39080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(18489),o=n(50390),a=n(38342),i=n.n(a),l=n(86509),s=n(4285),c=n(66946),u=n(51002),d=n(25594),p=n(58217),f=n(65771),m=n(70758),y=n(33034),h=n.n(y),g=n(86362),b=n(72462),v=n(62559),x=(0,s.Z)((function(e){return(0,l.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,r.Z)((0,r.Z)({},b.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var t=e.label,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,a=e.classes,i=void 0===a?{}:a;return(0,v.jsxs)("div",{className:i.container,children:[(0,v.jsxs)("div",{className:i.inputLabel,children:[n,":"]}),(0,v.jsx)("div",{className:i.inputWithCopy,children:(0,v.jsx)(p.Z,{value:o,readOnly:!0,endAdornment:(0,v.jsx)(f.Z,{position:"end",children:(0,v.jsx)(h(),{text:o,children:(0,v.jsx)(m.Z,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:(0,v.jsx)(g.TI,{})})})})})})]})})),j=n(47424),C=(0,s.Z)((function(e){return(0,l.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,a=e.open,l=e.closeModal,s=e.entity;if(!n)return null;var p=i()(n,"console",null),f=i()(n,"idp",!1);return(0,v.jsx)(u.Z,{modalOpen:a,onClose:function(){l()},title:(0,v.jsx)("div",{className:t.promptTitle,children:(0,v.jsxs)("div",{children:["New ",s," Created"]})}),titleIcon:(0,v.jsx)(g.tV,{}),children:(0,v.jsxs)(d.ZP,{container:!0,children:[(0,v.jsxs)(d.ZP,{item:!0,xs:12,className:t.formScrollable,children:["A new ",s," has been created with the following details:",!f&&p&&(0,v.jsx)(o.Fragment,{children:(0,v.jsxs)(d.ZP,{item:!0,xs:12,className:t.credentialsPanel,children:[(0,v.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(p)&&p.map((function(e,t){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{label:"Access Key",value:e.accessKey}),(0,v.jsx)(x,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(p)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{label:"Access Key",value:p.accessKey}),(0,v.jsx)(x,{label:"Secret Key",value:p.secretKey})]})]})}),f?(0,v.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):(0,v.jsxs)("div",{className:t.warningBlock,children:[(0,v.jsx)(j.Z,{}),(0,v.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,v.jsxs)(d.ZP,{item:!0,xs:12,className:t.buttonContainer,children:[(0,v.jsx)(c.Z,{id:"done-button",variant:"outlined",className:t.buttonSpacer,onClick:function(){l()},color:"primary",children:"Done"}),!f&&(0,v.jsx)(c.Z,{id:"download-button",onClick:function(){var e={};p&&(e=Array.isArray(p)?p.map((function(e){return{url:e.url,accessKey:e.accessKey,secretKey:e.secretKey,api:"s3v4",path:"auto"}}))[0]:{url:p.url,accessKey:p.accessKey,secretKey:p.secretKey,api:"s3v4",path:"auto"});!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("credentials.json",JSON.stringify((0,r.Z)({},e)))},endIcon:(0,v.jsx)(g._8,{}),variant:"contained",color:"primary",children:"Download"})]})]})})}))},51002:function(e,t,n){"use strict";var r=n(23430),o=n(18489),a=n(50390),i=n(34424),l=n(95467),s=n(97771),c=n(84402),u=n(78426),d=n(93085),p=n(86509),f=n(4285),m=n(72462),y=n(44149),h=n(21278),g=n(45980),b=n(62559),v=(0,i.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:y.MK});t.Z=(0,f.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)({},m.Qw),{},{root:{"& .MuiPaper-root":{padding:"0 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},m.sN))}))(v((function(e){var t=e.onClose,n=e.modalOpen,i=e.title,p=e.children,f=e.classes,m=e.wideLimit,y=void 0===m||m,v=e.modalSnackMessage,x=e.noContentPadding,j=e.setModalSnackMessage,C=e.titleIcon,w=void 0===C?null:C,O=(0,a.useState)(!1),k=(0,r.Z)(O,2),S=k[0],Z=k[1];(0,a.useEffect)((function(){j("")}),[j]),(0,a.useEffect)((function(){if(v){if(""===v.message)return void Z(!1);"error"!==v.type&&Z(!0)}}),[v]);var P=y?{classes:{paper:f.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},D="";return v&&(D=v.detailedErrorMsg,(""===v.detailedErrorMsg||v.detailedErrorMsg.length<5)&&(D=v.message)),(0,b.jsxs)(c.Z,(0,o.Z)((0,o.Z)({open:n,classes:f},P),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:f.root,children:[(0,b.jsxs)(u.Z,{className:f.title,children:[(0,b.jsxs)("div",{className:f.titleText,children:[w," ",i]}),(0,b.jsx)("div",{className:f.closeContainer,children:(0,b.jsx)(l.Z,{"aria-label":"close",className:f.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,b.jsx)(h.Z,{})})})]}),(0,b.jsx)(g.Z,{isModal:!0}),(0,b.jsx)(s.Z,{open:S,className:f.snackBarModal,onClose:function(){Z(!1),j("")},message:D,ContentProps:{className:"".concat(f.snackBar," ").concat(v&&"error"===v.type?f.errorSnackBar:"")},autoHideDuration:v&&"error"===v.type?1e4:5e3}),(0,b.jsx)(d.Z,{className:x?"":f.content,children:p})]}))})))},21278:function(e,t,n){"use strict";var r=n(64119);t.Z=void 0;var o=r(n(66830)),a=n(62559),i=(0,o.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},20409:function(e,t,n){"use strict";var r=n(61498),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,s,c,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),l=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),c&&document.body.removeChild(c),i()}return u}},12900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(50390)),o=a(n(20409));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return y(f(n=d(this,(e=p(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,l=t.children,s=t.options,c=r.default.Children.only(l),u=(0,o.default)(a,s);i&&i(a,u),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],a&&u(n.prototype,a),i&&u(n,i),t}(r.default.PureComponent);t.CopyToClipboard=h,y(h,"defaultProps",{onCopy:void 0,options:void 0})},33034:function(e,t,n){"use strict";var r=n(12900).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},61498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9080.d84213b3.chunk.js.map