(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),u=t(6),o=t(3),a=t(2),i=t(0),s=function(e){var n=e.value,t=e.onChange;return Object(i.jsxs)("div",{children:["Filter: ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.newName,t=e.setNewName,r=e.newNumber,c=e.setNewNumber,u=e.onSubmit;return Object(i.jsxs)("form",{onSubmit:u,children:[Object(i.jsxs)("div",{children:["Name:"," ",Object(i.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]}),Object(i.jsxs)("div",{children:["Number:"," ",Object(i.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"Add"})})]})},b=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("div",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:function(){return t(n)},children:"Delete"})]})},l=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return Object(i.jsx)(b,{person:e,deletePerson:t},e.name)}))},j=function(e){var n=e.message;if(null===n)return null;var t={padding:10,position:"fixed",top:8,color:"#fff",background:"success"===n.type?"green":"red"};return Object(i.jsx)("div",{style:t,children:n.content})},f=t(4),h=t.n(f),m="/api/persons",v={getAll:function(){return h.a.get(m).then((function(e){return e.data}))},create:function(e){return h.a.post(m,e).then((function(e){return e.data}))},delete:function(e){return h.a.delete("".concat(m,"/").concat(e))},update:function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))}},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),b=Object(o.a)(c,2),f=b[0],h=b[1],m=Object(a.useState)(""),O=Object(o.a)(m,2),p=O[0],x=O[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),N=w[0],y=w[1],k=Object(a.useState)({type:"success",content:"Hello"}),C=Object(o.a)(k,2),S=C[0],P=C[1];Object(a.useEffect)((function(){v.getAll().then((function(e){return r(e)}))}),[]);var A=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;P(e),setTimeout((function(){return P(null)}),n)},E=function(e){return D({type:"success",content:e})},F=function(e){return D({type:"error",content:e})};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(s,{value:N,onChange:function(e){return y(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(d,{newName:f,setNewName:h,newNumber:p,setNewNumber:x,onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));if(n){var c="".concat(f," is already added to phonebook. Replace the old number with a new one?");if(window.confirm(c)){var o=n.id,a=Object(u.a)(Object(u.a)({},n),{},{number:p});v.update(o,a).then((function(e){var n=t.map((function(n){return n.id!==o?n:e}));E("".concat(f,"'s number has been updated")),r(n),h(""),x("")}))}}else{var i={name:f,number:p};v.create(i).then((function(e){E("".concat(f,"'s number has been added")),r(t.concat(e)),h(""),x("")}))}}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(l,{persons:A,deletePerson:function(e){var n=e.name,c=e.id;window.confirm('Delete "'.concat(n,'"?'))&&v.delete(c).then((function(){return r(t.filter((function(e){return e.id!==c})))})).catch((function(){var e='Information of "'.concat(n,'" has already been removed from the server');F(e),r(t.filter((function(e){return e.id!==c})))}))}}),Object(i.jsx)(j,{message:S})]})};c.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7b5c4136.chunk.js.map