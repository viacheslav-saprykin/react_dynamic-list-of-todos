(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(5),l=c(2),r=c(3),i=c.n(r),o=c(1),d=(c(12),c(13),c(0)),j=function(e){var t=e.todos,c=e.onShowTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},b=function(e){var t=e.onFilterChange,c=Object(o.useState)(""),a=Object(l.a)(c,2),s=a[0],n=a[1];return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{onChange:function(e){var c=e.target.value;t(c,s)},"data-cy":"statusSelect",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){var c=e.target.value;n(c),t("all",c)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{type:"button",className:"delete",onClick:function(){n(""),t("all","")}})})]})]})},h=(c(15),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),u=function(e){var t=e.todo,c=e.onCloseModal,a=e.userLoading;return Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c,"aria-label":"Close Modal",tabIndex:0}),a?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:t.title}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsx)("div",{className:"modal-card-body",children:Object(d.jsxs)("p",{className:"block","data-cy":"modal-title",children:[t.description,Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(t.email),children:t.username})]})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!0),r=Object(l.a)(s,2),O=r[0],x=r[1],p=Object(o.useState)(null),f=Object(l.a)(p,2),v=f[0],N=f[1],y=Object(o.useState)(null),g=Object(l.a)(y,2),w=g[0],k=g[1],C=Object(o.useState)(!0),S=Object(l.a)(C,2),E=S[0],T=S[1],_=Object(o.useState)("all"),I=Object(l.a)(_,2),L=I[0],F=I[1];Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("/todos");case 3:t=e.sent,a(t),x(!1),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error fetching todos");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var M,A=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(t),e.prev=1,e.next=4,a=t.userId,m("/users/".concat(a));case 4:c=e.sent,k(c),T(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Error fetching user details:");case 12:case"end":return e.stop()}var a}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return M="completed"===L?c.filter((function(e){return e.completed})):"active"===L?c.filter((function(e){return!e.completed})):c,Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(b,{onFilterChange:function(e){F(e)}})}),Object(d.jsx)("div",{className:"block",children:O?Object(d.jsx)(h,{}):Object(d.jsx)(j,{todos:M,onShowTodo:A})})]})})}),v&&Object(d.jsx)(u,{todo:v,onCloseModal:function(){N(null),k(null),T(!0)},userLoading:E}),E&&Object(d.jsx)(h,{}),!E&&w&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"User Details:"}),Object(d.jsxs)("p",{children:["Name:",w.name]}),Object(d.jsxs)("p",{children:["Email:",w.email]})]})]})};s.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.83f50cba.chunk.js.map