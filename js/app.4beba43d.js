(function(e){function t(t){for(var n,c,a=t[0],o=t[1],p=t[2],u=0,l=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&l.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(l.length)l.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},i={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/recipe_generator/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var d=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"0c77":function(e,t,r){},2115:function(e,t,r){"use strict";var n=r("b20c"),i=r.n(n);i.a},"2d59":function(e,t,r){},3831:function(e,t,r){"use strict";var n=r("0c77"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"component-container"},[e._m(0),r("category-dropdown",{attrs:{id:"recipe-category-list",categories:e.recipeCategories}}),r("recipe-list",{attrs:{id:"recipe-list",recipes:e.recipesFromCategory}}),r("recipe-detail",{attrs:{id:"recipe-info",recipe:e.selectedRecipe}})],1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-container"},[r("h1",{staticClass:"title",attrs:{id:"title"}},[e._v("Recipe Fetcher")]),r("h3",[e._v("Have a look for some culinary inspiration...")])])}],c=(r("7db0"),r("d81d"),r("d3b7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dropdown-list"},[r("label",{attrs:{for:"category-select"}},[e._v("Pick a category: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{id:"category-select"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCategory=t.target.multiple?r:r[0]},e.handleChange]}},e._l(e.categories,(function(t){return r("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)])}),a=[],o={data:function(){return{selectedCategory:""}},props:["categories"],methods:{handleChange:function(){F.$emit("category-selected",this.selectedCategory)}}},p=o,d=r("2877"),u=Object(d["a"])(p,c,a,!1,null,"6c92401d",null),l=u.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"recipes-container"},[r("ul",e._l(e.recipes,(function(e){return r("recipe-list-item",{attrs:{id:"pointer-hover",recipe:e}})})),1)])},v=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"pointer",on:{click:e.handleClick}},[e._v(e._s(e.recipe.strMeal))])},h=[],g={name:"recipe-list-item",props:["recipe"],methods:{handleClick:function(){F.$emit("recipe-selected",this.recipe.idMeal)}}},m=g,y=(r("2115"),Object(d["a"])(m,f,h,!1,null,"2e00f9dd",null)),b=y.exports,M={props:["recipes"],components:{"recipe-list-item":b}},C=M,I=(r("3831"),Object(d["a"])(C,_,v,!1,null,"3feb3d65",null)),w=I.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.recipe?r("article",[r("h3",[e._v(e._s(e.recipe.strMeal))]),r("img",{attrs:{src:e.recipe.strMealThumb,alt:"Image Unavailable"}}),r("table",[r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient1))]),r("td",[e._v(e._s(e.recipe.strMeasure1))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient1))]),r("td",[e._v(e._s(e.recipe.strMeasure1))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient2))]),r("td",[e._v(e._s(e.recipe.strMeasure2))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient3))]),r("td",[e._v(e._s(e.recipe.strMeasure3))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient4))]),r("td",[e._v(e._s(e.recipe.strMeasure4))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient5))]),r("td",[e._v(e._s(e.recipe.strMeasure5))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient6))]),r("td",[e._v(e._s(e.recipe.strMeasure6))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient7))]),r("td",[e._v(e._s(e.recipe.strMeasure7))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient8))]),r("td",[e._v(e._s(e.recipe.strMeasure8))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient9))]),r("td",[e._v(e._s(e.recipe.strMeasure9))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient10))]),r("td",[e._v(e._s(e.recipe.strMeasure10))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient11))]),r("td",[e._v(e._s(e.recipe.strMeasure11))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient12))]),r("td",[e._v(e._s(e.recipe.strMeasure12))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient13))]),r("td",[e._v(e._s(e.recipe.strMeasure13))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient14))]),r("td",[e._v(e._s(e.recipe.strMeasure14))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient15))]),r("td",[e._v(e._s(e.recipe.strMeasure15))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient16))]),r("td",[e._v(e._s(e.recipe.strMeasure16))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient17))]),r("td",[e._v(e._s(e.recipe.strMeasure17))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient18))]),r("td",[e._v(e._s(e.recipe.strMeasure18))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient19))]),r("td",[e._v(e._s(e.recipe.strMeasure19))])]),r("tr",[r("td",[e._v(e._s(e.recipe.strIngredient20))]),r("td",[e._v(e._s(e.recipe.strMeasure20))])])]),r("p",{attrs:{id:"instructions"}},[e._v(e._s(e.recipe.strInstructions))]),r("p",[e._v("Original Source: "),r("a",{attrs:{href:e.recipe.strSource}},[e._v(e._s(e.recipe.strSource))])])]):e._e()},O=[],R={name:"recipe-detail",props:["recipe"]},x=R,$=(r("bdcb"),Object(d["a"])(x,j,O,!1,null,"929a2376",null)),k=$.exports,P={name:"app",data:function(){return{recipeCategories:[],searchCategoryTerm:"",recipesFromCategory:[],selectedRecipeId:null,selectedRecipe:null}},watch:{searchCategoryTerm:function(){this.fetchRecipes()},selectedRecipeId:function(){this.fetchChosenRecipe()}},methods:{fetchRecipes:function(){var e=this,t="https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(this.searchCategoryTerm);fetch(t).then((function(e){return e.json()})).then((function(t){return e.recipesFromCategory=t.meals}))},fetchChosenRecipe:function(){var e=this,t="https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(this.selectedRecipeId);fetch(t).then((function(e){return e.json()})).then((function(e){return e.meals[0]})).then((function(t){return e.selectedRecipe=t}))}},mounted:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return e.json()})).then((function(t){var r=t.categories.map((function(e){return e.strCategory}));e.recipeCategories=r})),F.$on("category-selected",(function(t){e.searchCategoryTerm=t})),F.$on("recipe-selected",(function(t){e.selectedRecipeId=t}))},components:{"category-dropdown":l,"recipe-list":w,"recipe-detail":k},computed:{renderedRecipe:function(){var e=this;return this.recipesFromCategory.find((function(t){return t.idMeal===e.selectedRecipeId}))}}},S=P,T=(r("034f"),Object(d["a"])(S,i,s,!1,null,null,null)),E=T.exports;r.d(t,"eventBus",(function(){return F}));var F=new n["a"];new n["a"]({render:function(e){return e(E)}}).$mount("#app")},"85ec":function(e,t,r){},b20c:function(e,t,r){},bdcb:function(e,t,r){"use strict";var n=r("2d59"),i=r.n(n);i.a}});
//# sourceMappingURL=app.4beba43d.js.map