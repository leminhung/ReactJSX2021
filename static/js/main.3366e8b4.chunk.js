(this.webpackJsonpcocktails=this.webpackJsonpcocktails||[]).push([[0],{17:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(26),n=c.n(i),r=c(10),l=c(8),j=c(0),o=function(){var e=[{id:1,path:"/home",text:"Home"},{id:2,path:"/about",text:"About"}];return Object(j.jsxs)("nav",{className:"navbar navbar-nav navbar-expand-lg navbar-dark bg-dark",children:[Object(j.jsxs)("p",{className:"navbar-brand",children:["The",Object(j.jsx)("span",{children:"Cocktail"}),"DB"]}),Object(j.jsx)("div",{className:"collapse navbar-collapse",children:Object(j.jsxs)("ul",{className:"navbar-nav custom",children:[Object(j.jsx)("li",{className:"nav-item-right",children:Object(j.jsx)(l.c,{className:"nav-link-color custom-underline",activeClassName:"active-link",exact:!0,to:e[0].path,children:e[0].text})},e[0].id),Object(j.jsx)("li",{className:"nav-item-right",children:Object(j.jsx)(l.c,{className:"nav-link-color custom-underline",activeClassName:"active-link",exact:!0,to:e[1].path,children:e[1].text})},e[1].id),Object(j.jsx)("li",{className:"nav-item-right",children:Object(j.jsx)("a",{className:"nav-link-color custom-underline",href:"#",children:"Contact"})})]})})]})},h=function(e){var t=e.handleSearching;return Object(j.jsxs)("div",{className:"cocktails-searching",children:[Object(j.jsx)("h3",{className:"title-customizing",children:"search cocktail"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"exampleInputEmail1",children:"search your favorite cocktail"}),Object(j.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:t})]})]})},b=function(e){var t=e.item,c=e.strDrink,s=e.strGlass,a=e.strDrinkThumb,i=e.getItem;return Object(j.jsxs)("article",{className:"cocktail",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:a,alt:c})}),Object(j.jsxs)("div",{className:"cocktail-footer",children:[Object(j.jsxs)("h4",{children:[" ",c]}),Object(j.jsx)("p",{children:s}),Object(j.jsx)(l.b,{to:"cocktail/".concat(t.idDrink),className:"btn btn-primary btn-details",onClick:function(){return i(t)},children:"details"})]})]})},d=function(e){var t=e.list,c=e.loading,s=e.match;return c?Object(j.jsx)("h2",{className:"section-title",children:"Loading..."}):s?Object(j.jsx)("div",{children:Object(j.jsx)("h4",{className:"no-matched",children:"no cocktails matched your search creteria"})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"title-customizing aligh",children:"cocktails"}),Object(j.jsx)("section",{className:"cocktails",children:t.map((function(t){return Object(j.jsx)(b,{item:t,strDrink:t.strDrink,strGlass:t.strGlass,strDrinkThumb:t.strDrinkThumb,getItem:e.getItem},t.idDrink)}))})]})},m=(c(17),c(28)),O=c.n(m),x=c(2),u=function(){return Object(j.jsx)("div",{children:"Hello from About"})},v=function(){return Object(j.jsx)("div",{children:"Hello from Home"})},k=function(e){var t=e.item,c=t.strDrinkThumb,s=t.strDrink,a=t.strCategory,i=t.strAlcoholic,n=t.strGlass,r=t.strInstructionsIT,o=t.strIngredient1;return Object(j.jsxs)("div",{className:"detailCocktail-container",children:[Object(j.jsxs)("div",{className:"back-home",children:[Object(j.jsx)(l.b,{className:"link-back",to:"/",children:"back home"}),Object(j.jsx)("h3",{children:s})]}),Object(j.jsxs)("div",{className:"detailCocktail",children:[Object(j.jsx)("div",{className:"cocktail-img",children:Object(j.jsx)("img",{src:c,alt:"cocktail"})}),Object(j.jsxs)("div",{className:"detail-info",children:[Object(j.jsxs)("p",{children:["Name: ",s]}),Object(j.jsxs)("p",{children:["Category: ",a]}),Object(j.jsxs)("p",{children:["Info: ",i]}),Object(j.jsxs)("p",{children:["Glass: ",n]}),Object(j.jsxs)("p",{children:["Instructions: ",r]}),Object(j.jsxs)("p",{children:["Ingredient: ",o]})]})]})]})},p=function(){return Object(j.jsx)("div",{children:"Hello from NoMatch"})},g=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)("a"),n=Object(r.a)(i,2),l=n[0],b=n[1],m=Object(s.useState)({}),g=Object(r.a)(m,2),N=g[0],f=g[1],I=Object(s.useState)(!1),D=Object(r.a)(I,2),C=D[0],y=D[1],S=Object(s.useState)(!1),H=Object(r.a)(S,2),T=H[0],w=H[1];return Object(s.useEffect)((function(){y(!0),O.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(l)).then((function(e){null===e.data.drinks?w(!0):(a(e.data.drinks),w(!1)),console.log("hung"),y(!1)})).catch((function(e){return console.log(e.message)}))}),[l]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{exact:!0,path:"/",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{handleSearching:function(e){b(e.target.value)}}),Object(j.jsx)(d,{list:c,getItem:function(e){f(e)},loading:C,match:T})]})}),Object(j.jsx)(x.a,{path:"/about",children:Object(j.jsx)(u,{})}),Object(j.jsx)(x.a,{path:"/home",children:Object(j.jsx)(v,{})}),Object(j.jsx)(x.a,{path:"/cocktail/:slug",children:Object(j.jsx)(k,{item:N})}),Object(j.jsx)(x.a,{path:"*",children:Object(j.jsx)(p,{})})]})]})};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(g,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3366e8b4.chunk.js.map