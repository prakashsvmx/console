(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[41],{376:function(e,t,a){"use strict";a(1);var n=a(549),i=a(290),r=a(299),o=a(94),l=a(38),c=a(71),s=a(72),d=a(402),u=a(0),b=Object(l.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode}}),null);t.a=b(Object(r.a)((function(e){return Object(i.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,a=e.label,i=e.actions,r=e.sidebarOpen,l=e.operatorMode;return Object(u.jsxs)(n.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(u.jsx)(d.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(u.jsx)(n.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(u.jsxs)(n.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!r&&Object(u.jsx)("div",{className:t.logo,children:l?Object(u.jsx)(c.a,{}):Object(u.jsx)(s.a,{})}),Object(u.jsx)(o.a,{variant:"h4",className:t.labelStyle,children:a})]}),i&&Object(u.jsx)(n.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:i})]})})))},378:function(e,t,a){"use strict";var n=a(2),i=a(1),r=a.n(i),o=a(882),l=a(549),c=a(883),s=a(365),d=a(367),u=a(290),b=a(358),p=a(299),m=a(120),h=a(122),j=a(0),f=Object(b.a)((function(e){return Object(u.a)(Object(n.a)({},m.k))}));function g(e){var t=f();return Object(j.jsx)(o.a,Object(n.a)({InputProps:{classes:t}},e))}t.a=Object(p.a)((function(e){return Object(u.a)(Object(n.a)(Object(n.a)(Object(n.a)({},m.g),m.A),{},{textBoxContainer:{flexGrow:1,position:"relative"},textBoxWithIcon:{position:"relative",paddingRight:25},errorState:{color:"#b53b4b",fontSize:14,position:"absolute",top:7,right:7},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,i=e.value,o=e.id,u=e.name,b=e.type,p=void 0===b?"text":b,m=e.autoComplete,f=void 0===m?"off":m,x=e.disabled,O=void 0!==x&&x,v=e.multiline,y=void 0!==v&&v,C=e.tooltip,E=void 0===C?"":C,w=e.index,k=void 0===w?0:w,_=e.error,N=void 0===_?"":_,S=e.required,A=void 0!==S&&S,q=e.placeholder,T=void 0===q?"":q,I=e.min,L=e.max,B=e.overlayIcon,M=void 0===B?null:B,W=e.overlayObject,F=void 0===W?null:W,R=e.extraInputProps,P=void 0===R?{}:R,D=e.overlayAction,z=e.noLabelMinWidth,H=void 0!==z&&z,U=e.classes,G=Object(n.a)({"data-index":k},P);return"number"===p&&I&&(G.min=I),"number"===p&&L&&(G.max=L),Object(j.jsx)(r.a.Fragment,{children:Object(j.jsxs)(l.a,{container:!0,className:" ".concat(""!==N?U.errorInField:U.inputBoxContainer),children:[""!==t&&Object(j.jsxs)(c.a,{htmlFor:o,className:H?U.noMinWidthLabel:U.inputLabel,children:[Object(j.jsxs)("span",{children:[t,A?"*":""]}),""!==E&&Object(j.jsx)("div",{className:U.tooltipContainer,children:Object(j.jsx)(s.a,{title:E,placement:"top-start",children:Object(j.jsx)("div",{className:U.tooltip,children:Object(j.jsx)(h.a,{})})})})]}),Object(j.jsxs)("div",{className:U.textBoxContainer,children:[Object(j.jsx)(g,{id:o,name:u,fullWidth:!0,value:i,disabled:O,onChange:a,type:p,multiline:y,autoComplete:f,inputProps:G,error:""!==N,helperText:N,placeholder:T,className:U.inputRebase}),M&&Object(j.jsx)("div",{className:"".concat(U.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(j.jsx)(d.a,{onClick:D?function(){D()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:M})}),F&&Object(j.jsx)("div",{className:"".concat(U.overlayAction," ").concat(""!==t?"withLabel":""),children:F})]})]})})}))},382:function(e,t,a){"use strict";var n=a(5),i=a(2),r=a(1),o=a.n(r),l=a(290),c=a(299),s=a(526),d=a(883),u=a(365),b=a(94),p=a(549),m=a(120),h=a(122),j=a(7),f=a(0),g=Object(c.a)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))(s.a);t.a=Object(c.a)((function(e){return Object(l.a)(Object(i.a)(Object(i.a)({seeMore:{marginTop:e.spacing(3)},paper:{display:"flex",overflow:"auto",flexDirection:"column",paddingTop:15,boxShadow:"none"},addSideBar:{width:"320px",padding:"20px"},tableToolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(0)},wrapCell:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},minTableHeader:{color:"#393939","& tr":{"& th":{fontWeight:"bold"}}},noFound:{textAlign:"center",padding:"10px 0"},tableContainer:{maxHeight:200},stickyHeader:{backgroundColor:"#fff"},actionsTitle:{fontWeight:600,color:"#081C42",fontSize:16,alignSelf:"center"},tableBlock:{marginTop:15},filterField:{width:375,fontWeight:600,"& .input":{"&::placeholder":{fontWeight:600,color:"#081C42"}}},divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},m.a),m.g))}))((function(e){var t=e.label,a=void 0===t?"":t,i=e.onChange,r=e.value,l=e.id,c=e.name,s=e.checked,m=void 0!==s&&s,x=e.disabled,O=void 0!==x&&x,v=e.switchOnly,y=void 0!==v&&v,C=e.tooltip,E=void 0===C?"":C,w=e.description,k=void 0===w?"":w,_=e.classes,N=e.indicatorLabels,S=Object(f.jsxs)(o.a.Fragment,{children:[!y&&Object(f.jsx)("span",{className:Object(j.a)(_.indicatorLabel,Object(n.a)({},_.indicatorLabelOn,!m)),children:N&&N.length>1?N[1]:"OFF"}),Object(f.jsx)(g,{checked:m,onChange:i,color:"primary",name:c,inputProps:{"aria-label":"primary checkbox"},disabled:O,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:r}),!y&&Object(f.jsx)("span",{className:Object(j.a)(_.indicatorLabel,Object(n.a)({},_.indicatorLabelOn,m)),children:N?N[0]:"ON"})]});return y?S:Object(f.jsx)("div",{className:_.divContainer,children:Object(f.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(f.jsx)(p.a,{item:!0,xs:!0,children:Object(f.jsxs)(p.a,{container:!0,children:[Object(f.jsx)(p.a,{item:!0,xs:12,sm:4,md:3,children:""!==a&&Object(f.jsxs)(d.a,{htmlFor:l,className:_.inputLabel,children:[Object(f.jsx)("span",{children:a}),""!==E&&Object(f.jsx)("div",{className:_.tooltipContainer,children:Object(f.jsx)(u.a,{title:E,placement:"top-start",children:Object(f.jsx)("div",{className:_.tooltip,children:Object(f.jsx)(h.a,{})})})})]})}),Object(f.jsx)(p.a,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==k&&Object(f.jsx)(b.a,{component:"p",className:_.fieldDescription,children:k})})]})}),Object(f.jsx)(p.a,{item:!0,xs:12,sm:2,textAlign:"right",className:_.switchContainer,children:S})]})})}))},398:function(e,t,a){"use strict";a(1);var n=a(290),i=a(299),r=a(549),o=a(0);t.a=Object(i.a)((function(e){return Object(n.a)({root:{border:"1px solid rgb(234, 237, 238)",borderRadius:5,paddingTop:10,paddingLeft:40,paddingRight:40,paddingBottom:40,marginTop:10,marginBottom:10,backgroundColor:"#fbfafa"},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:20,display:"flex",alignItems:"center","& .min-icon":{width:"2.5rem",marginRight:".8rem"}},iconSize:{fontSize:64},helpText:{fontSize:16}})}))((function(e){var t=e.classes,a=e.iconComponent,n=e.title,i=e.help;return Object(o.jsx)("div",{className:t.root,children:Object(o.jsxs)(r.a,{container:!0,children:[Object(o.jsxs)(r.a,{item:!0,xs:12,className:t.leftItems,children:[a,n]}),Object(o.jsx)(r.a,{item:!0,xs:12,className:t.helpText,children:i})]})})}))},405:function(e,t,a){"use strict";var n=a(2),i=(a(1),a(549)),r=a(290),o=a(299),l=a(120),c=a(0);t.a=Object(o.a)((function(e){return Object(r.a)(Object(n.a)({pageContainer:{width:"100%"}},l.o))}))((function(e){var t=e.classes,a=e.className,n=void 0===a?"":a,r=e.children;return Object(c.jsx)("div",{className:t.contentSpacer,children:Object(c.jsx)(i.a,{container:!0,children:Object(c.jsx)(i.a,{item:!0,xs:12,className:n,children:r})})})}))},431:function(e,t,a){"use strict";var n=a(2),i=a(14),r=a(1),o=a.n(r),l=a(402),c=a(898),s=a(534),d=a(535),u=a(554),b=a(299),p=a(28),m=a(290),h=a(859),j=a(0);t.a=Object(b.a)((function(e){return Object(m.a)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#FBFAFA",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5"}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var t=e.children,a=e.classes,r=e.selectedTab,b=void 0===r?"0":r,m=e.routes,f=e.isRouteTabs,g=o.a.useState(b),x=Object(i.a)(g,2),O=x[0],v=x[1],y=Object(p.a)(),C=Object(h.a)(y.breakpoints.down("md")),E=[],w=[];return t?(t.forEach((function(e){E.push(e.tabConfig),w.push(e.content)})),Object(j.jsx)(s.a,{value:"".concat(O),children:Object(j.jsxs)(l.a,{className:a.tabsContainer,children:[Object(j.jsx)(l.a,{className:a.tabsHeaderContainer,children:Object(j.jsx)(d.a,{onChange:function(e,t){v(t)},orientation:C?"horizontal":"vertical",variant:C?"scrollable":"standard",scrollButtons:"auto",className:a.tabList,children:E.map((function(e,t){return e?Object(j.jsx)(c.a,Object(n.a)(Object(n.a)({className:a.tabHeader,value:"".concat(t)},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(t)):null}))})}),Object(j.jsxs)(l.a,{className:a.tabContentContainer,children:[f?null:w.map((function(e,t){return Object(j.jsx)(u.a,{classes:Object(n.a)({},a.tabPanel),value:"".concat(t),children:e||null},"v-tab-p-".concat(t))})),f?Object(j.jsx)("div",{className:a.tabPanel,children:m}):null]})]})})):null}))},443:function(e,t,a){"use strict";a(1);var n=a(549),i=a(290),r=a(299),o=a(0);t.a=Object(r.a)((function(e){return Object(i.a)({headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44}},headerBarSubheader:{color:"grey"},screenTitle:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid #EAEAEA"},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:"1.4rem"}},leftItems:{display:"flex",alignItems:"center"},rightItems:{display:"flex",alignItems:"center"}})}))((function(e){var t=e.classes,a=e.icon,i=e.title,r=e.subTitle,l=e.actions;return Object(o.jsx)(n.a,{container:!0,children:Object(o.jsxs)(n.a,{item:!0,xs:12,className:t.screenTitle,children:[Object(o.jsxs)("div",{className:t.leftItems,children:[a?Object(o.jsx)("div",{className:t.headerBarIcon,children:a}):null,Object(o.jsxs)("div",{className:t.titleColumn,children:[Object(o.jsx)("h1",{style:{margin:0},children:i}),Object(o.jsx)("span",{className:t.headerBarSubheader,children:r})]})]}),Object(o.jsx)("div",{className:t.rightItems,children:l})]})})}))},648:function(e,t,a){"use strict";var n=a(2),i=a(1),r=a.n(i),o=a(549),l=a(883),c=a(365),s=a(882),d=a(290),u=a(299),b=a(120),p=a(122),m=a(0);t.a=Object(u.a)((function(e){return Object(d.a)(Object(n.a)(Object(n.a)(Object(n.a)({},b.g),b.A),{},{inputLabel:Object(n.a)(Object(n.a)({},b.g.inputLabel),{},{marginBottom:16,fontSize:14}),textBoxContainer:{flexGrow:1,position:"relative"},errorState:{color:"#b53b4b",fontSize:14,position:"absolute",top:7,right:7},cssOutlinedInput:{borderColor:"#EAEAEA",padding:16},rootContainer:{"& .MuiOutlinedInput-inputMultiline":Object(n.a)(Object(n.a)({},b.g.inputLabel),{},{fontSize:13,minHeight:150}),"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"& textarea":{color:"#07193E",fontSize:13,fontWeight:600,"&:placeholder":{color:"#393939",opacity:1}}}}))}))((function(e){var t=e.label,a=e.onChange,n=e.value,i=e.id,d=e.name,u=e.disabled,b=void 0!==u&&u,h=e.tooltip,j=void 0===h?"":h,f=e.index,g=void 0===f?0:f,x=e.error,O=void 0===x?"":x,v=e.required,y=void 0!==v&&v,C=e.placeholder,E=void 0===C?"":C,w=e.classes,k={"data-index":g};return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsxs)(o.a,{item:!0,xs:12,className:"".concat(w.fieldContainer," ").concat(""!==O?w.errorInField:""),children:[""!==t&&Object(m.jsxs)(l.a,{htmlFor:i,className:w.inputLabel,children:[Object(m.jsxs)("span",{children:[t,y?"*":""]}),""!==j&&Object(m.jsx)("div",{className:w.tooltipContainer,children:Object(m.jsx)(c.a,{title:j,placement:"top-start",children:Object(m.jsx)("div",{className:w.tooltip,children:Object(m.jsx)(p.a,{})})})})]}),Object(m.jsx)("div",{className:w.textBoxContainer,children:Object(m.jsx)(s.a,{id:i,name:d,fullWidth:!0,value:n,disabled:b,onChange:a,multiline:!0,rows:5,inputProps:k,error:""!==O,helperText:O,placeholder:E,InputLabelProps:{shrink:!0},InputProps:{classes:{notchedOutline:w.cssOutlinedInput,root:w.rootContainer}},variant:"outlined"})})]})})}))},708:function(e,t,a){"use strict";var n=a(15),i=a(14),r=a(2),o=a(1),l=a.n(o),c=a(290),s=a(299),d=a(549),u=a(120),b=a(378),p=a(44),m=a.n(p),h=a(420),j=a.n(h),f=a(883),g=a(365),x=a(122),O=a(138),v=a(0),y=Object(s.a)((function(e){return Object(c.a)(Object(r.a)(Object(r.a)(Object(r.a)({},u.g),u.A),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},labelContainer:{display:"flex"}}))}))((function(e){var t=e.elements,a=e.name,r=e.label,c=e.tooltip,s=void 0===c?"":c,u=e.commonPlaceholder,p=void 0===u?"":u,h=e.onChange,y=e.withBorder,C=void 0!==y&&y,E=e.classes,w=Object(o.useState)([""]),k=Object(i.a)(w,2),_=k[0],N=k[1],S=Object(o.createRef)();Object(o.useEffect)((function(){if(1===_.length&&""===_[0]&&t&&""!==t){var e=t.split(",");e.push(""),N(e)}}),[t,_]),Object(o.useEffect)((function(){if(_.length>1){var e=S.current;e&&e.scrollIntoView(!1)}}),[_,S]);var A=Object(o.useRef)(!0);Object(o.useLayoutEffect)((function(){A.current?A.current=!1:T()}),[_]);var q=function(e){e.persist();var t=Object(n.a)(_);t[m()(e.target,"dataset.index",0)]=e.target.value,N(t)},T=j()((function(){var e=_.filter((function(e){return""!==e.trim()})).join(",");h(e)}),500),I=_.map((function(e,t){return Object(v.jsx)(b.a,{id:"".concat(a,"-").concat(t.toString()),label:"",classes:E,name:"".concat(a,"-").concat(t.toString()),value:_[t],onChange:q,index:t,placeholder:p,overlayIcon:t===_.length-1?Object(v.jsx)(O.a,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var t=Object(n.a)(e);t.push(""),N(t)}}(_)}},"csv-".concat(a,"-").concat(t.toString()))}));return Object(v.jsx)(l.a.Fragment,{children:Object(v.jsxs)(d.a,{item:!0,xs:12,className:E.fieldContainer,children:[Object(v.jsxs)(f.a,{className:E.inputLabel,children:[Object(v.jsx)("span",{children:r}),""!==s&&Object(v.jsx)("div",{className:E.tooltipContainer,children:Object(v.jsx)(g.a,{title:s,placement:"top-start",children:Object(v.jsx)("div",{className:E.tooltip,children:Object(v.jsx)(x.a,{})})})})]}),Object(v.jsxs)(d.a,{item:!0,xs:12,className:"".concat(C?E.inputWithBorder:""),children:[I,Object(v.jsx)("div",{ref:S})]})]})})})),C=a(648),E=a(382),w=function(e,t,a){var n="on|off"===t?"false":"";if(a.length>0){var i=a.find((function(t){return t.key===e}));i&&(n=i.value)}return n};t.a=Object(s.a)((function(e){return Object(c.a)(Object(r.a)(Object(r.a)({},u.h),{},{formFieldRow:Object(r.a)({},u.h.formFieldRow),inputBoxContainer:{marginBottom:7,"& .MuiInputLabel-root":{minWidth:200,"& svg":{width:16,height:16}},"& div[class|='InputBoxWrapper-textBoxContainer']":{display:"flex"}},overlayAction:{top:0,right:0,position:"relative",marginLeft:10,display:"flex",alignItems:"center","& button":{background:"#EAEAEA"}},fieldContainer:{"& .MuiInputLabel-root":{flex:1,minWidth:200},"& div[class|='CommentBoxWrapper-textBoxContainer']":{flexGrow:1,width:"100%"}},tooltipContainer:Object(r.a)(Object(r.a)({},u.g.tooltipContainer),{},{"& svg":{width:16,height:16}})},u.m))}))((function(e){var t=e.onChange,a=e.fields,r=e.defaultVals,l=e.classes,c=Object(o.useState)([]),s=Object(i.a)(c,2),u=s[0],p=s[1],m=a||[],h=r||[];Object(o.useEffect)((function(){var e=[];a.forEach((function(t){var a={key:t.name,value:w(t.name,t.type,h)};e.push(a)})),p(e)}),[a,r]),Object(o.useEffect)((function(){t(u)}),[u]);var j=function(e,t,a){var i=Object(n.a)(u);i[a]={key:e,value:t},p(i)},f=function(e,t){switch(e.type){case"on|off":var a=u[t]?u[t].value:"false";return Object(v.jsx)(E.a,{classes:l,onChange:function(a){var n=a.target.checked?"true":"false";j(e.name,n,t)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"true"===a});case"csv":return Object(v.jsx)(y,{classes:l,elements:u[t]?u[t].value:"",label:e.label,name:e.name,onChange:function(a){return j(e.name,a,t)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return Object(v.jsx)(C.a,{classes:l,id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:u[t]?u[t].value:"",onChange:function(a){return j(e.name,a.target.value,t)},placeholder:e.placeholder});default:return Object(v.jsx)(b.a,{classes:l,id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:u[t]?u[t].value:"",onChange:function(a){return j(e.name,a.target.value,t)},multiline:!!e.multiline,placeholder:e.placeholder})}};return Object(v.jsx)(d.a,{container:!0,children:Object(v.jsx)(d.a,{xs:12,item:!0,className:l.fieldBox,children:m.map((function(e,t){return Object(v.jsx)(d.a,{item:!0,xs:12,className:l.formFieldRow,children:f(e,t)},e.name)}))})})}))},881:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(1),r=a(290),o=a(299),l=a(549),c=a(820),s=a.n(c),d=a(821),u=a.n(d),b=a(822),p=a.n(b),m=a(823),h=a.n(m),j=a(824),f=a.n(j),g=a(825),x=a.n(g),O=a(826),v=a.n(O),y=a(827),C=a.n(y),E=a(828),w=a.n(E),k=a(830),_=a.n(k),N=a(829),S=a.n(N),A=a(0),q=[{icon:Object(A.jsx)(s.a,{}),configuration_id:"region",configuration_label:"Region"},{icon:Object(A.jsx)(u.a,{}),configuration_id:"cache",configuration_label:"Cache"},{icon:Object(A.jsx)(p.a,{}),configuration_id:"compression",configuration_label:"Compression"},{icon:Object(A.jsx)(h.a,{}),configuration_id:"api",configuration_label:"API"},{icon:Object(A.jsx)(f.a,{}),configuration_id:"heal",configuration_label:"Heal"},{icon:Object(A.jsx)(x.a,{}),configuration_id:"scanner",configuration_label:"Scanner"},{icon:Object(A.jsx)(v.a,{}),configuration_id:"etcd",configuration_label:"Etcd"},{icon:Object(A.jsx)(C.a,{}),configuration_id:"identity_openid",configuration_label:"Identity Openid"},{icon:Object(A.jsx)(w.a,{}),configuration_id:"identity_ldap",configuration_label:"Identity LDAP"},{icon:Object(A.jsx)(S.a,{}),configuration_id:"logger_webhook",configuration_label:"Logger Webhook"},{icon:Object(A.jsx)(_.a,{}),configuration_id:"audit_webhook",configuration_label:"Audit Webhook"}],T={region:[{name:"name",required:!0,label:"Server Location",tooltip:'Name of the location of the server e.g. "us-west-rack2"',type:"string",placeholder:"e.g. us-west-rack-2"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",placeholder:"Enter Comment"}],cache:[{name:"drives",required:!0,label:"Drives",tooltip:'Mountpoints e.g. "/optane1" or "/optane2", you can write one per field',type:"csv",placeholder:"Enter Mount Point"},{name:"expiry",required:!1,label:"Expiry",tooltip:'Cache expiry duration in days e.g. "90"',type:"number",placeholder:"Enter Number of Days"},{name:"quota",required:!1,label:"Quota",tooltip:'Limit cache drive usage in percentage e.g. "90"',type:"number",placeholder:"Enter in %"},{name:"exclude",required:!1,label:"Exclude",tooltip:'Wildcard exclusion patterns e.g. "bucket/*.tmp" or "*.exe", you can write one per field',type:"csv",placeholder:"Enter Wildcard Exclusion Patterns"},{name:"after",required:!1,label:"After",tooltip:"Minimum number of access before caching an object",type:"number",placeholder:"Enter Number of Attempts"},{name:"watermark_low",required:!1,label:"Watermark Low",tooltip:"Watermark Low",type:"number",placeholder:"Enter Watermark Low"},{name:"watermark_high",required:!1,label:"Watermark High",tooltip:"Watermark High",type:"number",placeholder:"Enter Watermark High"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter Comment"}],compression:[{name:"extensions",required:!1,label:"Extensions",tooltip:'Extensions to compress e.g. ".txt",".log" or ".csv", you can write one per field',type:"csv",placeholder:"Enter an Extension",withBorder:!0},{name:"mime_types",required:!1,label:"Mime Types",tooltip:'Mime types e.g. "text/*","application/json" or "application/xml", you can write one per field',type:"csv",placeholder:"Enter a Mime Type",withBorder:!0}],api:[{name:"requests_max",required:!1,label:"Requests Max",tooltip:"Maximum number of concurrent requests, e.g. '1600'",type:"number",placeholder:"Enter Requests Max"},{name:"cors_allow_origin",required:!1,label:"Cors Allow Origin",tooltip:"list of origins allowed for CORS requests",type:"csv",placeholder:"Enter allowed origin e.g. https://example.com"},{name:"replication_workers",required:!1,label:"Replication Workers",tooltip:"Number of replication workers, defaults to 100",type:"number",placeholder:"Enter Replication Workers"},{name:"replication_failed_workers",required:!1,label:"Replication Failed Workers",tooltip:"Number of replication workers for recently failed replicas, defaults to 4",type:"number",placeholder:"Enter Replication Failed Workers"}],heal:[{name:"bitrotscan",required:!1,label:"Bitrot Scan",tooltip:"Perform bitrot scan on disks when checking objects during scanner",type:"on|off"},{name:"max_sleep",required:!1,label:"Max Sleep",tooltip:"Maximum sleep duration between objects to slow down heal operation. eg. 2s",type:"duration",placeholder:"Enter Max Sleep duration"},{name:"max_io",required:!1,label:"Max IO",tooltip:"Maximum IO requests allowed between objects to slow down heal operation. eg. 3",type:"number",placeholder:"Enter Max IO"}],scanner:[{name:"delay",required:!1,label:"Delay multiplier",tooltip:"Scanner delay multiplier, defaults to '10.0'",type:"number",placeholder:"Enter Delay"},{name:"max_wait",required:!1,label:"Max Wait",tooltip:"Maximum wait time between operations, defaults to '15s'",type:"duration",placeholder:"Enter Max Wait"},{name:"cycle",required:!1,label:"Cycle",tooltip:"Time duration between scanner cycles, defaults to '1m'",type:"duration",placeholder:"Enter Cycle"}],etcd:[{name:"endpoints",required:!0,label:"Endpoints",tooltip:'List of etcd endpoints e.g. "http://localhost:2379", you can write one per field',type:"csv",placeholder:"Enter Endpoint"},{name:"path_prefix",required:!1,label:"Path Prefix",tooltip:'namespace prefix to isolate tenants e.g. "customer1/"',type:"string",placeholder:"Enter Path Prefix"},{name:"coredns_path",required:!1,label:"Coredns Path",tooltip:'Shared bucket DNS records, default is "/skydns"',type:"string",placeholder:"Enter Coredns Path"},{name:"client_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_cert_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter Comment"}],identity_openid:[{name:"config_url",required:!1,label:"Config URL",tooltip:"Config URL for identity provider configuration",type:"string",placeholder:"https://identity-provider-url/.well-known/openid-configuration"},{name:"client_id",required:!1,label:"Client ID",type:"string",placeholder:"Enter Client ID"},{name:"client_secret",required:!1,label:"Secret ID",type:"string",placeholder:"Enter Secret ID"},{name:"claim_name",required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",type:"string",placeholder:"Enter Claim Name"},{name:"claim_prefix",required:!1,label:"Claim Prefix",tooltip:"Claim Prefix",type:"string",placeholder:"Enter Claim Prefix"},{name:"claim_userinfo",required:!1,label:"Claim UserInfo",type:"on|off"},{name:"redirect_uri",required:!1,label:"Redirect URI",type:"string",placeholder:"https://console-endpoint-url/oauth_callback"},{name:"scopes",required:!1,label:"Scopes",type:"string",placeholder:"openid,profile,email"}],identity_ldap:[{name:"server_addr",required:!0,label:"Server Addr",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',type:"string",placeholder:"Enter Server Address"},{name:"username_format",required:!0,label:"Username Format",tooltip:'List of username bind DNs e.g. "uid=%s","cn=accounts","dc=myldapserver" or "dc=com", you can write one per field',type:"csv",placeholder:"Enter Username Format"},{name:"username_search_filter",required:!0,label:"Username Search Filter",tooltip:'User search filter, for example "(cn=%s)" or "(sAMAccountName=%s)" or "(uid=%s)"',type:"string",placeholder:"Enter Username Search Filter"},{name:"group_search_filter",required:!0,label:"Group Search Filter",tooltip:'Search filter for groups e.g. "(&(objectclass=groupOfNames)(memberUid=%s))"',type:"string",placeholder:"Enter Group Search Filter"},{name:"username_search_base_dn",required:!1,label:"Username Search Base DN",tooltip:"List of username search DNs, you can write one per field",type:"csv",placeholder:"Enter Username Search Base DN"},{name:"group_name_attribute",required:!1,label:"Group Name Attribute",tooltip:'Search attribute for group name e.g. "cn"',type:"string",placeholder:"Enter Group Name Attribute"},{name:"sts_expiry",required:!1,label:"STS Expiry",tooltip:'temporary credentials validity duration in s,m,h,d. Default is "1h"',type:"string",placeholder:"Enter STS Expiry"},{name:"tls_skip_verify",required:!1,label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "off" (verify)',type:"on|off"},{name:"server_insecure",required:!1,label:"Server Insecure",tooltip:'Allow plain text connection to AD/LDAP server, defaults to "off"',type:"on|off"},{name:"comment",required:!1,label:"Comment",tooltip:"Optionally add a comment to this setting",type:"comment",placeholder:"Enter Comment"}],logger_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}]},I=a(120),L=a(376),B=a(398),M=a(121),W=a(20),F=a(19),R=a(44),P=a.n(R),D=a(14),z=a(38),H=a(355),U=a(369),G=a(49),V=a(708),Y=a(30),$={serverNeedsRestart:Y.c,setErrorSnackMessage:Y.e},J=Object(z.b)(null,$)(Object(o.a)((function(e){return Object(r.a)(Object(n.a)(Object(n.a)(Object(n.a)({},I.g),I.u),{},{strongText:{fontWeight:700},keyName:{marginLeft:5},buttonContainer:{textAlign:"right"},logoButton:{height:"80px"},customTitle:Object(n.a)(Object(n.a)({},I.u.customTitle),{},{marginTop:0})}))}))((function(e){var t=e.serverNeedsRestart,a=e.selectedConfiguration,n=e.setErrorSnackMessage,r=e.classes,o=e.history,c=e.className,s=void 0===c?"":c,d=Object(i.useState)([]),u=Object(D.a)(d,2),b=u[0],p=u[1],m=Object(i.useState)(!1),h=Object(D.a)(m,2),j=h[0],f=h[1],g=Object(i.useState)(!0),x=Object(D.a)(g,2),O=x[0],v=x[1],y=Object(i.useState)([]),C=Object(D.a)(y,2),E=C[0],w=C[1];Object(i.useEffect)((function(){var e=P()(a,"configuration_id",!1);e&&G.a.invoke("GET","/api/v1/configs/".concat(e)).then((function(e){var t=P()(e,"key_values",[]);w(t)})).catch((function(e){v(!1),n(e)})),v(!1)}),[a,n]),Object(i.useEffect)((function(){if(j){var e={key_values:(i=b,i.filter((function(e){return""!==e.value})))};G.a.invoke("PUT","/api/v1/configs/".concat(a.configuration_id),e).then((function(e){f(!1),t(e.restart),o.push("/settings")})).catch((function(e){f(!1),n(e)}))}var i}),[j,o,t,a,b,n]);var k=Object(i.useCallback)((function(e){p(e)}),[p]);return Object(A.jsx)(i.Fragment,{children:Object(A.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),f(!0)},className:s,children:[Object(A.jsxs)(l.a,{item:!0,xs:12,className:r.settingsFormContainer,children:[O&&Object(A.jsx)(l.a,{item:!0,xs:12,children:Object(A.jsx)(H.a,{})}),Object(A.jsx)(V.a,{fields:T[a.configuration_id],onChange:k,defaultVals:E})]}),Object(A.jsx)(l.a,{item:!0,xs:12,className:r.settingsButtonContainer,children:Object(A.jsx)(U.a,{type:"submit",variant:"contained",color:"primary",disabled:j,children:"Save"})})]})})}))),K=Object(o.a)((function(e){return Object(r.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},I.r),I.a),I.u),Object(I.e)(e.spacing(4))),{},{strongText:{fontWeight:700},keyName:{marginLeft:5},iconText:{lineHeight:"24px"},customConfigurationPage:{height:"calc(100vh - 324px)",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},mainCont:Object(n.a)(Object(n.a)({},I.u.mainCont),{},{maxWidth:1180})}))}))((function(e){var t=e.match,a=e.history,n=P()(t,"url",""),i=n.substring(n.lastIndexOf("/")+1),r=q.find((function(e){return e.configuration_id===i})),o="".concat(i);return Object(A.jsx)(l.a,{item:!0,xs:12,children:r&&Object(A.jsx)(J,{className:"".concat(o),selectedConfiguration:r,history:a})})})),Q=a(50),X=a(431),Z=a(405),ee=a(443);t.default=Object(o.a)((function(e){return Object(r.a)(Object(n.a)(Object(n.a)(Object(n.a)({strongText:{fontWeight:700},keyName:{marginLeft:5},iconText:{lineHeight:"24px"},customConfigurationPage:{height:"calc(100vh - 324px)",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},settingsOptionsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",border:"#E5E5E5 1px solid",borderRadius:2,backgroundColor:"#fff"},configurationLink:{border:"#E5E5E5 1px solid",borderRadius:2,padding:20,width:190,height:80,margin:15}},I.r),I.a),Object(I.e)(e.spacing(4))))}))((function(e){var t=e.classes,a=e.match,n=P()(a,"url",""),r=n.substring(n.lastIndexOf("/")+1);return r="settings"===r?"region":r,Object(A.jsxs)(i.Fragment,{children:[Object(A.jsx)(L.a,{label:"Settings"}),Object(A.jsxs)(Z.a,{children:[Object(A.jsx)(l.a,{item:!0,xs:12,children:Object(A.jsx)(l.a,{item:!0,xs:12,children:Object(A.jsxs)("div",{className:t.settingsOptionsContainer,children:[Object(A.jsx)(ee.a,{icon:Object(A.jsx)(M.zb,{}),title:"Configuration:"}),Object(A.jsx)(X.a,{selectedTab:r,isRouteTabs:!0,routes:Object(A.jsx)("div",{className:t.contentSpacer,children:Object(A.jsx)(W.c,{history:Q.a,children:Object(A.jsxs)(W.d,{children:[q.map((function(e){return Object(A.jsx)(W.b,{exact:!0,path:"/settings/".concat(e.configuration_id),component:K},"configItem-".concat(e.configuration_label))})),Object(A.jsx)(W.b,{exact:!0,path:"/settings",children:Object(A.jsx)(W.a,{to:"/settings/region"})})]})})}),children:q.map((function(e){var t,a=e.configuration_id;return{tabConfig:{label:e.configuration_label,value:a,icon:e.icon,component:F.a,to:(t=a,"/settings/".concat(t))}}}))})]})})}),Object(A.jsx)(l.a,{item:!0,xs:12,children:Object(A.jsx)(B.a,{title:"Learn more about SETTINGS",iconComponent:Object(A.jsx)(M.zb,{}),help:Object(A.jsxs)(i.Fragment,{children:["MinIO supports a variety of configurations ranging from encryption, compression, region, notifications, etc.",Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"You can learn more at our"," ",Object(A.jsx)("a",{href:"https://docs.min.io/minio/baremetal/reference/minio-cli/minio-mc-admin/mc-admin.config.html?ref=con#id4",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})}))}}]);
//# sourceMappingURL=41.ed27dd68.chunk.js.map