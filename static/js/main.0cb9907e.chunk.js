(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,c){},15:function(e,a,c){"use strict";c.r(a);var t=c(6),n=c.n(t),i=c(8),l=c(5),r=c(1);c(13);function s(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var o=c(7),j=c.n(o),d=c(0),u=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),l=s(1,i);return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:"page-item disabled",children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){n(t-1)},children:"\xab"})}),l.map((function(e){return Object(d.jsx)("li",{className:j()("page-item",{active:t===e}),children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){n(t+1)},children:"\xbb"})})]})},b=s(1,42).map((function(e){return"Item ".concat(e)})),h=b.length,p=function(){var e=Object(r.useState)(5),a=Object(l.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),s=Object(l.a)(n,2),o=s[0],j=s[1],p=o*c,m=p-c,g=p>h?h:p,O=Object(i.a)(b.slice(m,g));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(m+1," - ").concat(g," of 42)")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(Number(e.target.value)),j(1)},children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(u,{total:h,perPage:c,currentPage:o,onPageChange:function(e){j(e)}}),Object(d.jsx)("ul",{children:O.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0cb9907e.chunk.js.map