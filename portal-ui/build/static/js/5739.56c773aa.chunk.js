"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5739],{35739:function(e,t,n){n.d(t,{Z:function(){return oe}});var o=n(4942),r=n(63366),a=n(87462),i=n(72791),l=n(63733),c=n(94419),u=n(29439),p=n(18252),s=n(88637),d=n(36229),f=n(97054),v=n(62971);function g(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function h(e,t){for(var n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreAccents,n=void 0===t||t,o=e.ignoreCase,r=void 0===o||o,a=e.limit,i=e.matchFrom,l=void 0===i?"any":i,c=e.stringify,u=e.trim,p=void 0!==u&&u;return function(e,t){var o=t.inputValue,i=t.getOptionLabel,u=p?o.trim():o;r&&(u=u.toLowerCase()),n&&(u=g(u));var s=u?e.filter((function(e){var t=(c||i)(e);return r&&(t=t.toLowerCase()),n&&(t=g(t)),"start"===l?0===t.indexOf(u):t.indexOf(u)>-1})):e;return"number"===typeof a?s.slice(0,a):s}}(),b=function(e){var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function x(e){var t,n=e.unstable_isActiveElementInListbox,o=void 0===n?b:n,r=e.unstable_classNamePrefix,l=void 0===r?"Mui":r,c=e.autoComplete,g=void 0!==c&&c,x=e.autoHighlight,Z=void 0!==x&&x,O=e.autoSelect,y=void 0!==O&&O,I=e.blurOnSelect,P=void 0!==I&&I,C=e.clearOnBlur,S=void 0===C?!e.freeSolo:C,w=e.clearOnEscape,A=void 0!==w&&w,L=e.componentName,k=void 0===L?"useAutocomplete":L,T=e.defaultValue,R=void 0===T?e.multiple?[]:null:T,D=e.disableClearable,N=void 0!==D&&D,M=e.disableCloseOnSelect,E=void 0!==M&&M,z=e.disabled,F=e.disabledItemsFocusable,j=void 0!==F&&F,H=e.disableListWrap,V=void 0!==H&&H,W=e.filterOptions,B=void 0===W?m:W,q=e.filterSelectedOptions,K=void 0!==q&&q,U=e.freeSolo,G=void 0!==U&&U,_=e.getOptionDisabled,J=e.getOptionLabel,Q=void 0===J?function(e){var t;return null!=(t=e.label)?t:e}:J,X=e.groupBy,Y=e.handleHomeEndKeys,$=void 0===Y?!e.freeSolo:Y,ee=e.id,te=e.includeInputInList,ne=void 0!==te&&te,oe=e.inputValue,re=e.isOptionEqualToValue,ae=void 0===re?function(e,t){return e===t}:re,ie=e.multiple,le=void 0!==ie&&ie,ce=e.onChange,ue=e.onClose,pe=e.onHighlightChange,se=e.onInputChange,de=e.onOpen,fe=e.open,ve=e.openOnFocus,ge=void 0!==ve&&ve,he=e.options,me=e.readOnly,be=void 0!==me&&me,xe=e.selectOnFocus,Ze=void 0===xe?!e.freeSolo:xe,Oe=e.value,ye=(0,p.Z)(ee);t=function(e){var t=Q(e);return"string"!==typeof t?String(t):t};var Ie=i.useRef(!1),Pe=i.useRef(!0),Ce=i.useRef(null),Se=i.useRef(null),we=i.useState(null),Ae=(0,u.Z)(we,2),Le=Ae[0],ke=Ae[1],Te=i.useState(-1),Re=(0,u.Z)(Te,2),De=Re[0],Ne=Re[1],Me=Z?0:-1,Ee=i.useRef(Me),ze=(0,s.Z)({controlled:Oe,default:R,name:k}),Fe=(0,u.Z)(ze,2),je=Fe[0],He=Fe[1],Ve=(0,s.Z)({controlled:oe,default:"",name:k,state:"inputValue"}),We=(0,u.Z)(Ve,2),Be=We[0],qe=We[1],Ke=i.useState(!1),Ue=(0,u.Z)(Ke,2),Ge=Ue[0],_e=Ue[1],Je=i.useCallback((function(e,n){if((le?je.length<n.length:null!==n)||S){var o;if(le)o="";else if(null==n)o="";else{var r=t(n);o="string"===typeof r?r:""}Be!==o&&(qe(o),se&&se(e,o,"reset"))}}),[t,Be,le,se,qe,S,je]),Qe=(0,s.Z)({controlled:fe,default:!1,name:k,state:"open"}),Xe=(0,u.Z)(Qe,2),Ye=Xe[0],$e=Xe[1],et=i.useState(!0),tt=(0,u.Z)(et,2),nt=tt[0],ot=tt[1],rt=!le&&null!=je&&Be===t(je),at=Ye&&!be,it=at?B(he.filter((function(e){return!K||!(le?je:[je]).some((function(t){return null!==t&&ae(e,t)}))})),{inputValue:rt&&nt?"":Be,getOptionLabel:t}):[],lt=(0,d.Z)({filteredOptions:it,value:je,inputValue:Be});i.useEffect((function(){var e=je!==lt.value;Ge&&!e||G&&!e||Je(null,je)}),[je,Je,Ge,lt.value,G]);var ct=Ye&&it.length>0&&!be,ut=(0,f.Z)((function(e){-1===e?Ce.current.focus():Le.querySelector('[data-tag-index="'.concat(e,'"]')).focus()}));i.useEffect((function(){le&&De>je.length-1&&(Ne(-1),ut(-1))}),[je,le,De,ut]);var pt=(0,f.Z)((function(e){var t=e.event,n=e.index,o=e.reason,r=void 0===o?"auto":o;if(Ee.current=n,-1===n?Ce.current.removeAttribute("aria-activedescendant"):Ce.current.setAttribute("aria-activedescendant","".concat(ye,"-option-").concat(n)),pe&&pe(t,-1===n?null:it[n],r),Se.current){var a=Se.current.querySelector('[role="option"].'.concat(l,"-focused"));a&&(a.classList.remove("".concat(l,"-focused")),a.classList.remove("".concat(l,"-focusVisible")));var i=Se.current;if("listbox"!==Se.current.getAttribute("role")&&(i=Se.current.parentElement.querySelector('[role="listbox"]')),i)if(-1!==n){var c=Se.current.querySelector('[data-option-index="'.concat(n,'"]'));if(c&&(c.classList.add("".concat(l,"-focused")),"keyboard"===r&&c.classList.add("".concat(l,"-focusVisible")),i.scrollHeight>i.clientHeight&&"mouse"!==r&&"touch"!==r)){var u=c,p=i.clientHeight+i.scrollTop,s=u.offsetTop+u.offsetHeight;s>p?i.scrollTop=s-i.clientHeight:u.offsetTop-u.offsetHeight*(X?1.3:0)<i.scrollTop&&(i.scrollTop=u.offsetTop-u.offsetHeight*(X?1.3:0))}}else i.scrollTop=0}})),st=(0,f.Z)((function(e){var n=e.event,o=e.diff,r=e.direction,a=void 0===r?"next":r,i=e.reason,l=void 0===i?"auto":i;if(at){var c=function(e,t){if(!Se.current||-1===e)return-1;for(var n=e;;){if("next"===t&&n===it.length||"previous"===t&&-1===n)return-1;var o=Se.current.querySelector('[data-option-index="'.concat(n,'"]')),r=!j&&(!o||o.disabled||"true"===o.getAttribute("aria-disabled"));if(!(o&&!o.hasAttribute("tabindex")||r))return n;n+="next"===t?1:-1}}(function(){var e=it.length-1;if("reset"===o)return Me;if("start"===o)return 0;if("end"===o)return e;var t=Ee.current+o;return t<0?-1===t&&ne?-1:V&&-1!==Ee.current||Math.abs(o)>1?0:e:t>e?t===e+1&&ne?-1:V||Math.abs(o)>1?e:0:t}(),a);if(pt({index:c,reason:l,event:n}),g&&"reset"!==o)if(-1===c)Ce.current.value=Be;else{var u=t(it[c]);Ce.current.value=u,0===u.toLowerCase().indexOf(Be.toLowerCase())&&Be.length>0&&Ce.current.setSelectionRange(Be.length,u.length)}}})),dt=i.useCallback((function(){if(at&&!function(){var e,n;if(-1!==Ee.current&&lt.filteredOptions&&lt.filteredOptions.length!==it.length&&lt.inputValue===Be&&(le?je.length===lt.value.length&&lt.value.every((function(e,n){return t(je[n])===t(e)})):(e=lt.value,n=je,(e?t(e):"")===(n?t(n):"")))){var o=lt.filteredOptions[Ee.current];if(o&&it.some((function(e){return t(e)===t(o)})))return!0}return!1}()){var e=le?je[0]:je;if(0!==it.length&&null!=e){if(Se.current)if(null==e)Ee.current>=it.length-1?pt({index:it.length-1}):pt({index:Ee.current});else{var n=it[Ee.current];if(le&&n&&-1!==h(je,(function(e){return ae(n,e)})))return;var o=h(it,(function(t){return ae(t,e)}));-1===o?st({diff:"reset"}):pt({index:o})}}else st({diff:"reset"})}}),[it.length,!le&&je,K,st,pt,at,Be,le]),ft=(0,f.Z)((function(e){(0,v.Z)(Se,e),e&&dt()}));i.useEffect((function(){dt()}),[dt]);var vt=function(e){Ye||($e(!0),ot(!0),de&&de(e))},gt=function(e,t){Ye&&($e(!1),ue&&ue(e,t))},ht=function(e,t,n,o){if(le){if(je.length===t.length&&je.every((function(e,n){return e===t[n]})))return}else if(je===t)return;ce&&ce(e,t,n,o),He(t)},mt=i.useRef(!1),bt=function(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"selectOption",r=t;if(le){var a=h(r=Array.isArray(je)?je.slice():[],(function(e){return ae(t,e)}));-1===a?r.push(t):"freeSolo"!==n&&(r.splice(a,1),o="removeOption")}Je(e,r),ht(e,r,o,{option:t}),E||e&&(e.ctrlKey||e.metaKey)||gt(e,o),(!0===P||"touch"===P&&mt.current||"mouse"===P&&!mt.current)&&Ce.current.blur()};var xt=function(e,t){if(le){""===Be&&gt(e,"toggleInput");var n=De;-1===De?""===Be&&"previous"===t&&(n=je.length-1):((n+="next"===t?1:-1)<0&&(n=0),n===je.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;for(var n=e;;){if("next"===t&&n===je.length||"previous"===t&&-1===n)return-1;var o=Le.querySelector('[data-tag-index="'.concat(n,'"]'));if(o&&o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),Ne(n),ut(n)}},Zt=function(e){Ie.current=!0,qe(""),se&&se(e,"","clear"),ht(e,le?[]:null,"clear")},Ot=function(e){return function(t){if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==De&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(Ne(-1),ut(-1)),229!==t.which))switch(t.key){case"Home":at&&$&&(t.preventDefault(),st({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":at&&$&&(t.preventDefault(),st({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),st({diff:-5,direction:"previous",reason:"keyboard",event:t}),vt(t);break;case"PageDown":t.preventDefault(),st({diff:5,direction:"next",reason:"keyboard",event:t}),vt(t);break;case"ArrowDown":t.preventDefault(),st({diff:1,direction:"next",reason:"keyboard",event:t}),vt(t);break;case"ArrowUp":t.preventDefault(),st({diff:-1,direction:"previous",reason:"keyboard",event:t}),vt(t);break;case"ArrowLeft":xt(t,"previous");break;case"ArrowRight":xt(t,"next");break;case"Enter":if(-1!==Ee.current&&at){var n=it[Ee.current],o=!!_&&_(n);if(t.preventDefault(),o)return;bt(t,n,"selectOption"),g&&Ce.current.setSelectionRange(Ce.current.value.length,Ce.current.value.length)}else G&&""!==Be&&!1===rt&&(le&&t.preventDefault(),bt(t,Be,"createOption","freeSolo"));break;case"Escape":at?(t.preventDefault(),t.stopPropagation(),gt(t,"escape")):A&&(""!==Be||le&&je.length>0)&&(t.preventDefault(),t.stopPropagation(),Zt(t));break;case"Backspace":if(le&&!be&&""===Be&&je.length>0){var r=-1===De?je.length-1:De,a=je.slice();a.splice(r,1),ht(t,a,"removeOption",{option:je[r]})}break;case"Delete":if(le&&!be&&""===Be&&je.length>0&&-1!==De){var i=De,l=je.slice();l.splice(i,1),ht(t,l,"removeOption",{option:je[i]})}}}},yt=function(e){_e(!0),ge&&!Ie.current&&vt(e)},It=function(e){o(Se)?Ce.current.focus():(_e(!1),Pe.current=!0,Ie.current=!1,y&&-1!==Ee.current&&at?bt(e,it[Ee.current],"blur"):y&&G&&""!==Be?bt(e,Be,"blur","freeSolo"):S&&Je(e,je),gt(e,"blur"))},Pt=function(e){var t=e.target.value;Be!==t&&(qe(t),ot(!1),se&&se(e,t,"input")),""===t?N||le||ht(e,null,"clear"):vt(e)},Ct=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));Ee.current!==t&&pt({event:e,index:t,reason:"mouse"})},St=function(e){pt({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),mt.current=!0},wt=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));bt(e,it[t],"selectOption"),mt.current=!1},At=function(e){return function(t){var n=je.slice();n.splice(e,1),ht(t,n,"removeOption",{option:je[e]})}},Lt=function(e){Ye?gt(e,"toggleInput"):vt(e)},kt=function(e){e.currentTarget.contains(e.target)&&e.target.getAttribute("id")!==ye&&e.preventDefault()},Tt=function(e){e.currentTarget.contains(e.target)&&(Ce.current.focus(),Ze&&Pe.current&&Ce.current.selectionEnd-Ce.current.selectionStart===0&&Ce.current.select(),Pe.current=!1)},Rt=function(e){z||""!==Be&&Ye||Lt(e)},Dt=G&&Be.length>0;Dt=Dt||(le?je.length>0:null!==je);var Nt=it;if(X){new Map;Nt=it.reduce((function(e,t,n){var o=X(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e}),[])}return z&&Ge&&It(),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.Z)({"aria-owns":ct?"".concat(ye,"-listbox"):null},e,{onKeyDown:Ot(e),onMouseDown:kt,onClick:Tt})},getInputLabelProps:function(){return{id:"".concat(ye,"-label"),htmlFor:ye}},getInputProps:function(){return{id:ye,value:Be,onBlur:It,onFocus:yt,onChange:Pt,onMouseDown:Rt,"aria-activedescendant":at?"":null,"aria-autocomplete":g?"both":"list","aria-controls":ct?"".concat(ye,"-listbox"):void 0,"aria-expanded":ct,autoComplete:"off",ref:Ce,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:z}},getClearProps:function(){return{tabIndex:-1,onClick:Zt}},getPopupIndicatorProps:function(){return{tabIndex:-1,onClick:Lt}},getTagProps:function(e){var t=e.index;return(0,a.Z)({key:t,"data-tag-index":t,tabIndex:-1},!be&&{onDelete:At(t)})},getListboxProps:function(){return{role:"listbox",id:"".concat(ye,"-listbox"),"aria-labelledby":"".concat(ye,"-label"),ref:ft,onMouseDown:function(e){e.preventDefault()}}},getOptionProps:function(e){var n=e.index,o=e.option,r=(le?je:[je]).some((function(e){return null!=e&&ae(o,e)})),a=!!_&&_(o);return{key:t(o),tabIndex:-1,role:"option",id:"".concat(ye,"-option-").concat(n),onMouseMove:Ct,onClick:wt,onTouchStart:St,"data-option-index":n,"aria-disabled":a,"aria-selected":r}},id:ye,inputValue:Be,value:je,dirty:Dt,expanded:at&&Le,popupOpen:at,focused:Ge||-1!==De,anchorEl:Le,setAnchorEl:ke,focusedTag:De,groupedOptions:Nt}}var Z=n(12065),O=n(91098),y=n(79834),I=n(35527),P=n(13400),C=n(81918),S=n(86779),w=n(55891),A=n(56059),L=n(96285),k=n(76189),T=n(80184),R=(0,k.Z)((0,T.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),D=n(89059),N=n(31402),M=n(66934),E=n(75878),z=n(21217);function F(e){return(0,z.Z)("MuiAutocomplete",e)}var j,H,V=(0,E.Z)("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),W=n(14036),B=n(42071),q=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],K=["ref"],U=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.fullWidth,a=n.hasClearIcon,i=n.hasPopupIcon,l=n.inputFocused,c=n.size;return[(0,o.Z)({},"& .".concat(V.tag),t.tag),(0,o.Z)({},"& .".concat(V.tag),t["tagSize".concat((0,W.Z)(c))]),(0,o.Z)({},"& .".concat(V.inputRoot),t.inputRoot),(0,o.Z)({},"& .".concat(V.input),t.input),(0,o.Z)({},"& .".concat(V.input),l&&t.inputFocused),t.root,r&&t.fullWidth,i&&t.hasPopupIcon,a&&t.hasClearIcon]}})((function(e){var t,n,r,i,l,c=e.ownerState;return(0,a.Z)((t={},(0,o.Z)(t,"&.".concat(V.focused," .").concat(V.clearIndicator),{visibility:"visible"}),(0,o.Z)(t,"@media (pointer: fine)",(0,o.Z)({},"&:hover .".concat(V.clearIndicator),{visibility:"visible"})),t),c.fullWidth&&{width:"100%"},(l={},(0,o.Z)(l,"& .".concat(V.tag),(0,a.Z)({margin:3,maxWidth:"calc(100% - 6px)"},"small"===c.size&&{margin:2,maxWidth:"calc(100% - 4px)"})),(0,o.Z)(l,"& .".concat(V.inputRoot),(n={flexWrap:"wrap"},(0,o.Z)(n,".".concat(V.hasPopupIcon,"&, .").concat(V.hasClearIcon,"&"),{paddingRight:30}),(0,o.Z)(n,".".concat(V.hasPopupIcon,".").concat(V.hasClearIcon,"&"),{paddingRight:56}),(0,o.Z)(n,"& .".concat(V.input),{width:0,minWidth:30}),n)),(0,o.Z)(l,"& .".concat(S.Z.root),{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}}),(0,o.Z)(l,"& .".concat(S.Z.root,".").concat(w.Z.sizeSmall),(0,o.Z)({},"& .".concat(S.Z.input),{padding:"2px 4px 3px 0"})),(0,o.Z)(l,"& .".concat(A.Z.root),(r={padding:9},(0,o.Z)(r,".".concat(V.hasPopupIcon,"&, .").concat(V.hasClearIcon,"&"),{paddingRight:39}),(0,o.Z)(r,".".concat(V.hasPopupIcon,".").concat(V.hasClearIcon,"&"),{paddingRight:65}),(0,o.Z)(r,"& .".concat(V.input),{padding:"7.5px 4px 7.5px 5px"}),(0,o.Z)(r,"& .".concat(V.endAdornment),{right:9}),r)),(0,o.Z)(l,"& .".concat(A.Z.root,".").concat(w.Z.sizeSmall),(0,o.Z)({paddingTop:6,paddingBottom:6,paddingLeft:6},"& .".concat(V.input),{padding:"2.5px 4px 2.5px 8px"})),(0,o.Z)(l,"& .".concat(L.Z.root),(i={paddingTop:19,paddingLeft:8},(0,o.Z)(i,".".concat(V.hasPopupIcon,"&, .").concat(V.hasClearIcon,"&"),{paddingRight:39}),(0,o.Z)(i,".".concat(V.hasPopupIcon,".").concat(V.hasClearIcon,"&"),{paddingRight:65}),(0,o.Z)(i,"& .".concat(L.Z.input),{padding:"7px 4px"}),(0,o.Z)(i,"& .".concat(V.endAdornment),{right:9}),i)),(0,o.Z)(l,"& .".concat(L.Z.root,".").concat(w.Z.sizeSmall),(0,o.Z)({paddingBottom:1},"& .".concat(L.Z.input),{padding:"2.5px 4px"})),(0,o.Z)(l,"& .".concat(w.Z.hiddenLabel),{paddingTop:8}),(0,o.Z)(l,"& .".concat(L.Z.root,".").concat(w.Z.hiddenLabel),(0,o.Z)({paddingTop:0,paddingBottom:0},"& .".concat(V.input),{paddingTop:16,paddingBottom:17})),(0,o.Z)(l,"& .".concat(L.Z.root,".").concat(w.Z.hiddenLabel,".").concat(w.Z.sizeSmall),(0,o.Z)({},"& .".concat(V.input),{paddingTop:8,paddingBottom:9})),(0,o.Z)(l,"& .".concat(V.input),(0,a.Z)({flexGrow:1,textOverflow:"ellipsis",opacity:0},c.inputFocused&&{opacity:1})),l))})),G=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:function(e,t){return t.endAdornment}})({position:"absolute",right:0,top:"calc(50% - 14px)"}),_=(0,M.ZP)(P.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:function(e,t){return t.clearIndicator}})({marginRight:-2,padding:4,visibility:"hidden"}),J=(0,M.ZP)(P.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:function(e,t){var n=e.ownerState;return(0,a.Z)({},t.popupIndicator,n.popupOpen&&t.popupIndicatorOpen)}})((function(e){var t=e.ownerState;return(0,a.Z)({padding:2,marginRight:-2},t.popupOpen&&{transform:"rotate(180deg)"})})),Q=(0,M.ZP)(O.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[(0,o.Z)({},"& .".concat(V.option),t.option),t.popper,n.disablePortal&&t.popperDisablePortal]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({zIndex:(t.vars||t).zIndex.modal},n.disablePortal&&{position:"absolute"})})),X=(0,M.ZP)(I.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:function(e,t){return t.paper}})((function(e){var t=e.theme;return(0,a.Z)({},t.typography.body1,{overflow:"auto"})})),Y=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:function(e,t){return t.loading}})((function(e){var t=e.theme;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}})),$=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:function(e,t){return t.noOptions}})((function(e){var t=e.theme;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}})),ee=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:function(e,t){return t.listbox}})((function(e){var t,n,r=e.theme;return(0,o.Z)({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative"},"& .".concat(V.option),(n={minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16},(0,o.Z)(n,r.breakpoints.up("sm"),{minHeight:"auto"}),(0,o.Z)(n,"&.".concat(V.focused),{backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,o.Z)(n,'&[aria-disabled="true"]',{opacity:(r.vars||r).palette.action.disabledOpacity,pointerEvents:"none"}),(0,o.Z)(n,"&.".concat(V.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,o.Z)(n,'&[aria-selected="true"]',(t={backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,Z.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},(0,o.Z)(t,"&.".concat(V.focused),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,Z.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(r.vars||r).palette.action.selected}}),(0,o.Z)(t,"&.".concat(V.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,Z.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)}),t)),n))})),te=(0,M.ZP)(y.Z,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:function(e,t){return t.groupLabel}})((function(e){var t=e.theme;return{backgroundColor:(t.vars||t).palette.background.paper,top:-8}})),ne=(0,M.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:function(e,t){return t.groupUl}})((0,o.Z)({padding:0},"& .".concat(V.option),{paddingLeft:24})),oe=i.forwardRef((function(e,t){var n,o,u,p,s,d=(0,N.Z)({props:e,name:"MuiAutocomplete"}),f=(d.autoComplete,d.autoHighlight,d.autoSelect,d.blurOnSelect,d.ChipProps),v=d.className,g=d.clearIcon,h=void 0===g?j||(j=(0,T.jsx)(R,{fontSize:"small"})):g,m=d.clearOnBlur,b=(void 0===m&&d.freeSolo,d.clearOnEscape,d.clearText),Z=void 0===b?"Clear":b,y=d.closeText,P=void 0===y?"Close":y,S=d.componentsProps,w=void 0===S?{}:S,A=d.defaultValue,L=(void 0===A&&d.multiple,d.disableClearable),k=void 0!==L&&L,M=(d.disableCloseOnSelect,d.disabled),E=void 0!==M&&M,z=(d.disabledItemsFocusable,d.disableListWrap,d.disablePortal),V=void 0!==z&&z,oe=(d.filterSelectedOptions,d.forcePopupIcon),re=void 0===oe?"auto":oe,ae=d.freeSolo,ie=void 0!==ae&&ae,le=d.fullWidth,ce=void 0!==le&&le,ue=d.getLimitTagsText,pe=void 0===ue?function(e){return"+".concat(e)}:ue,se=d.getOptionLabel,de=d.groupBy,fe=d.handleHomeEndKeys,ve=(void 0===fe&&d.freeSolo,d.includeInputInList,d.limitTags),ge=void 0===ve?-1:ve,he=d.ListboxComponent,me=void 0===he?"ul":he,be=d.ListboxProps,xe=d.loading,Ze=void 0!==xe&&xe,Oe=d.loadingText,ye=void 0===Oe?"Loading\u2026":Oe,Ie=d.multiple,Pe=void 0!==Ie&&Ie,Ce=d.noOptionsText,Se=void 0===Ce?"No options":Ce,we=(d.openOnFocus,d.openText),Ae=void 0===we?"Open":we,Le=d.PaperComponent,ke=void 0===Le?I.Z:Le,Te=d.PopperComponent,Re=void 0===Te?O.Z:Te,De=d.popupIcon,Ne=void 0===De?H||(H=(0,T.jsx)(D.Z,{})):De,Me=d.readOnly,Ee=void 0!==Me&&Me,ze=d.renderGroup,Fe=d.renderInput,je=d.renderOption,He=d.renderTags,Ve=d.selectOnFocus,We=(void 0===Ve&&d.freeSolo,d.size),Be=void 0===We?"medium":We,qe=d.slotProps,Ke=void 0===qe?{}:qe,Ue=(0,r.Z)(d,q),Ge=x((0,a.Z)({},d,{componentName:"Autocomplete"})),_e=Ge.getRootProps,Je=Ge.getInputProps,Qe=Ge.getInputLabelProps,Xe=Ge.getPopupIndicatorProps,Ye=Ge.getClearProps,$e=Ge.getTagProps,et=Ge.getListboxProps,tt=Ge.getOptionProps,nt=Ge.value,ot=Ge.dirty,rt=Ge.expanded,at=Ge.id,it=Ge.popupOpen,lt=Ge.focused,ct=Ge.focusedTag,ut=Ge.anchorEl,pt=Ge.setAnchorEl,st=Ge.inputValue,dt=Ge.groupedOptions,ft=!k&&!E&&ot&&!Ee,vt=(!ie||!0===re)&&!1!==re,gt=Je().onMouseDown,ht=(null!=be?be:{}).ref,mt=et(),bt=mt.ref,xt=(0,r.Z)(mt,K),Zt=(0,B.Z)(bt,ht),Ot=se||function(e){var t;return null!=(t=e.label)?t:e},yt=(0,a.Z)({},d,{disablePortal:V,expanded:rt,focused:lt,fullWidth:ce,getOptionLabel:Ot,hasClearIcon:ft,hasPopupIcon:vt,inputFocused:-1===ct,popupOpen:it,size:Be}),It=function(e){var t=e.classes,n=e.disablePortal,o=e.expanded,r=e.focused,a=e.fullWidth,i=e.hasClearIcon,l=e.hasPopupIcon,u=e.inputFocused,p=e.popupOpen,s=e.size,d={root:["root",o&&"expanded",r&&"focused",a&&"fullWidth",i&&"hasClearIcon",l&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",u&&"inputFocused"],tag:["tag","tagSize".concat((0,W.Z)(s))],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",p&&"popupIndicatorOpen"],popper:["popper",n&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,c.Z)(d,F,t)}(yt);if(Pe&&nt.length>0){var Pt=function(e){return(0,a.Z)({className:It.tag,disabled:E},$e(e))};s=He?He(nt,Pt,yt):nt.map((function(e,t){return(0,T.jsx)(C.Z,(0,a.Z)({label:Ot(e),size:Be},Pt({index:t}),f))}))}if(ge>-1&&Array.isArray(s)){var Ct=s.length-ge;!lt&&Ct>0&&(s=s.splice(0,ge)).push((0,T.jsx)("span",{className:It.tag,children:pe(Ct)},s.length))}var St=ze||function(e){return(0,T.jsxs)("li",{children:[(0,T.jsx)(te,{className:It.groupLabel,ownerState:yt,component:"div",children:e.group}),(0,T.jsx)(ne,{className:It.groupUl,ownerState:yt,children:e.children})]},e.key)},wt=je||function(e,t){return(0,T.jsx)("li",(0,a.Z)({},e,{children:Ot(t)}))},At=function(e,t){var n=tt({option:e,index:t});return wt((0,a.Z)({},n,{className:It.option}),e,{selected:n["aria-selected"],index:t,inputValue:st},yt)},Lt=null!=(n=Ke.clearIndicator)?n:w.clearIndicator,kt=null!=(o=Ke.paper)?o:w.paper,Tt=null!=(u=Ke.popper)?u:w.popper,Rt=null!=(p=Ke.popupIndicator)?p:w.popupIndicator;return(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(U,(0,a.Z)({ref:t,className:(0,l.Z)(It.root,v),ownerState:yt},_e(Ue),{children:Fe({id:at,disabled:E,fullWidth:!0,size:"small"===Be?"small":void 0,InputLabelProps:Qe(),InputProps:(0,a.Z)({ref:pt,className:It.inputRoot,startAdornment:s,onClick:function(e){e.target===e.currentTarget&&gt(e)}},(ft||vt)&&{endAdornment:(0,T.jsxs)(G,{className:It.endAdornment,ownerState:yt,children:[ft?(0,T.jsx)(_,(0,a.Z)({},Ye(),{"aria-label":Z,title:Z,ownerState:yt},Lt,{className:(0,l.Z)(It.clearIndicator,null==Lt?void 0:Lt.className),children:h})):null,vt?(0,T.jsx)(J,(0,a.Z)({},Xe(),{disabled:E,"aria-label":it?P:Ae,title:it?P:Ae,ownerState:yt},Rt,{className:(0,l.Z)(It.popupIndicator,null==Rt?void 0:Rt.className),children:Ne})):null]})}),inputProps:(0,a.Z)({className:It.input,disabled:E,readOnly:Ee},Je())})})),ut?(0,T.jsx)(Q,(0,a.Z)({as:Re,disablePortal:V,style:{width:ut?ut.clientWidth:null},ownerState:yt,role:"presentation",anchorEl:ut,open:it},Tt,{className:(0,l.Z)(It.popper,null==Tt?void 0:Tt.className),children:(0,T.jsxs)(X,(0,a.Z)({ownerState:yt,as:ke},kt,{className:(0,l.Z)(It.paper,null==kt?void 0:kt.className),children:[Ze&&0===dt.length?(0,T.jsx)(Y,{className:It.loading,ownerState:yt,children:ye}):null,0!==dt.length||ie||Ze?null:(0,T.jsx)($,{className:It.noOptions,ownerState:yt,role:"presentation",onMouseDown:function(e){e.preventDefault()},children:Se}),dt.length>0?(0,T.jsx)(ee,(0,a.Z)({as:me,className:It.listbox,ownerState:yt},xt,be,{ref:Zt,children:dt.map((function(e,t){return de?St({key:e.key,group:e.group,children:e.options.map((function(t,n){return At(t,e.index+n)}))}):At(e,t)}))})):null]}))})):null]})}))}}]);
//# sourceMappingURL=5739.56c773aa.chunk.js.map