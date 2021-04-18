(this["webpackJsonpnumadic-client"]=this["webpackJsonpnumadic-client"]||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),i=n.n(r),s=(n(153),n(51)),o=n(16),l=(n(154),n(155),n(6)),u=function(){return Object(l.jsxs)("div",{className:"centered",children:[Object(l.jsx)(s.b,{to:"/place-interactions",children:Object(l.jsx)("h1",{children:"Place Interactions"})}),Object(l.jsx)(s.b,{to:"/vehicle-activity",children:Object(l.jsx)("h1",{children:"Vehicle Activity"})})]})},j=n(72),d=n(45),b=n.n(d),h=n(63),O=n(21),p=n(54),f=n(20),v=n(229),g=n(64),x="https://numadic-apr21.herokuapp.com/",m=n(223),y=(n(190),n(191),n(192),function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2)[1],n=Object(a.useState)([]),c=Object(O.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(new Date(2018,8,9)),o=Object(O.a)(s,2),u=o[0],d=o[1],y=Object(a.useState)(new Date),S=Object(O.a)(y,2),w=S[0],C=S[1],D=function(e){return function(t){t&&e(t)}};return Object(l.jsxs)("div",{className:"place-interactions",children:[Object(l.jsx)("h1",{children:"Place Interactions"}),Object(l.jsxs)("div",{className:"inputs",children:[Object(l.jsxs)(f.a,{utils:g.a,children:[Object(l.jsx)(v.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",label:"Start Date",value:u,onChange:D(d),KeyboardButtonProps:{"aria-label":"change date"}}),Object(l.jsx)(v.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"End Date",value:w,onChange:D(C),KeyboardButtonProps:{"aria-label":"change date"}})]}),Object(l.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){var e=new URL("/place_interactions",x),t={start_tis:u.toISOString(),end_tis:w.toISOString()};e.search=new URLSearchParams(t).toString(),function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.href);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e)},children:"Search"})]}),Object(l.jsx)("div",{className:"ag-theme-alpine grid-container",style:{width:"100%",height:"100%"},children:Object(l.jsxs)(p.AgGridReact,{rowData:r,onGridReady:function(e){t(e.api),e.api.sizeColumnsToFit()},children:[Object(l.jsx)(p.AgGridColumn,{headerName:"License no.",field:"license"}),Object(l.jsx)(p.AgGridColumn,{headerName:"Time",field:"ts",valueFormatter:function(e){var t=e.value;return t?new Date(t).toLocaleString():""}}),Object(l.jsx)(p.AgGridColumn,{headerName:"Coordinates",field:"ewkt",valueFormatter:function(e){var t=e.value;if(!t||"string"!==typeof t)return"";var n=t.match(Object(j.a)(/SRID=4326;POINT\((.*) (.*)\)/,{longitude:1,latitude:2}));return(null===n||void 0===n?void 0:n.groups)?"".concat(n.groups.latitude," ").concat(n.groups.longitude):""}})]})})]})}),S=n(230),w=n(225),C=n(233),D=n(226),N=n(227),T=n(228),k=(n(193),function(e){var t=Object(w.a)(),n=Object(a.createRef)();return Object(a.useEffect)((function(){var e;Object.keys(null===(e=n.current)||void 0===e?void 0:e._bounds).length>0&&t.flyToBounds(n.current._bounds)}),[n,t,e.path]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),function(){if(e.path.length>0){var t=Object(O.a)(e.path,1)[0];return Object(l.jsx)(D.a,{position:t})}}(),function(){if(e.path.length>1){var t=e.path[e.path.length-1];return Object(l.jsx)(D.a,{position:t})}}(),Object(l.jsx)(N.a,{ref:n,positions:e.path})]})}),I=function(){var e=Object(a.useState)("ADTEST1"),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date(2018,8,9)),i=Object(O.a)(r,2),s=i[0],o=i[1],u=Object(a.useState)(new Date),d=Object(O.a)(u,2),p=d[0],y=d[1],w=Object(a.useState)([]),C=Object(O.a)(w,2),D=C[0],N=C[1],I=function(e){return function(t){t&&e(t)}};return Object(l.jsxs)("div",{className:"vehicle-activity",children:[Object(l.jsx)("h1",{children:"Vehicle Activity"}),Object(l.jsxs)("div",{className:"inputs",children:[Object(l.jsx)(S.a,{label:"License No.",value:n,onChange:function(e){var t=e.target.value;c(t)}}),Object(l.jsxs)(f.a,{utils:g.a,children:[Object(l.jsx)(v.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",label:"Start Date",value:s,onChange:I(o),KeyboardButtonProps:{"aria-label":"change date"}}),Object(l.jsx)(v.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"End Date",value:p,onChange:I(y),KeyboardButtonProps:{"aria-label":"change date"}})]}),Object(l.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){var e=new URL("/vehicle_activity",x),t={license:n,start_tis:s.toISOString(),end_tis:p.toISOString()};e.search=new URLSearchParams(t).toString(),function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.href);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c=a.map((function(e){var t=e.ewkt.match(Object(j.a)(/SRID=4326;POINT\((.*) (.*)\)/,{longitude:1,latitude:2}));return(null===t||void 0===t?void 0:t.groups)?[parseFloat(t.groups.latitude),parseFloat(t.groups.longitude)]:null})).filter((function(e){return null!==e})),N(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e)},children:"Search"})]}),Object(l.jsx)(T.a,{center:[51.505,-.09],zoom:13,style:{height:"100%"},children:Object(l.jsx)(k,{path:D})})]})};var P=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(s.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/place-interactions",children:Object(l.jsx)(y,{})}),Object(l.jsx)(o.a,{path:"/vehicle-activity",children:Object(l.jsx)(I,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(u,{})})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root")),F(console.log)}},[[194,1,2]]]);
//# sourceMappingURL=main.4c78a701.chunk.js.map