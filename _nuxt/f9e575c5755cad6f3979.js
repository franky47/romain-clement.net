(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{297:function(t,e,r){"use strict";r.r(e);r(66),r(27),r(23),r(16),r(43),r(32);var n=r(25),c=(r(87),r(174));r(88);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o=r(2).a.extend({asyncData:function(t){var e=t.params.slug,article=t.$content.articles.find((function(a){return a.slug===e}));return article?(article.meta.published=new Date(article.meta.published),{article:article}):t.error({statusCode:404})},data:function(){return{article:{},repo:this.$t("common.app.repository")}},head:function(){var meta=[{hid:!0,name:"description",value:this.article.meta.summary},{hid:!0,name:"keywords",value:this.article.meta.tags.join(",")},{hid:!0,name:"og:title",value:this.article.meta.title},{hid:!0,name:"og:description",value:this.article.meta.summary},{hid:!0,name:"og:type",value:"article"},{hid:!0,name:"article:published_time",value:this.article.meta.published.toISOString().split("T")[0]},{hid:!0,name:"article:author",value:this.$t("common.feeds.authors.".concat(this.article.meta.author,".name"))}].concat(Object(c.a)(this.article.meta.tags.map((function(t){return{hid:!1,name:"article:tag",value:t}}))));return{title:this.article.meta.title,meta:meta.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t.hid?{hid:t.name}:{},{name:t.name,property:t.name,content:t.value})}))}}}),m=r(31),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half is-offset-one-quarter"},[r("p",{staticClass:"title"},[t._v("\n          "+t._s(t.article.meta.title)+"\n        ")]),t._v(" "),r("b-taglist",t._l(t.article.meta.tags,(function(e){return r("b-tag",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])})),1),t._v(" "),r("p",{staticClass:"heading"},[t._v("\n          "+t._s(t.$d(t.article.meta.published,"short"))+"\n          ·\n          "+t._s(t.$t("common.feeds.authors."+t.article.meta.author).name)+"\n          ·\n          "),r("i18n",{attrs:{path:"articles.slug.reading"},scopedSlots:t._u([{key:"time",fn:function(){return[t._v("\n              "+t._s(t.$tc("articles.slug.minutes",t.article.readingTime))+"\n            ")]},proxy:!0}])})],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content"},[r("span",{domProps:{innerHTML:t._s(t.article.content)}})]),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"has-text-centered"},[r("i18n",{attrs:{path:"articles.slug.mistake",tag:"small"},scopedSlots:t._u([{key:"url",fn:function(){return[r("a",{attrs:{href:t.repo.url+"/blob/master/"+t.article.filepath,title:t.repo.name,alt:t.repo.name}},[t._v("\n                "+t._s(t.repo.name)+"\n              ")])]},proxy:!0}])})],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);