(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{629:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var r=n(7),c=(n(26),n(11));function o(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="posts",e&&(n+="?".concat(Object(c.c)(e))),t.next=4,c.b.get("".concat(c.a,"/").concat(n)).then((function(t){return t.data})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.get("".concat(c.a,"/posts/").concat(e)).then((function(t){return t.data})).catch((function(t){return{error:JSON.stringify(t)}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="post-categories",e&&(n+="?".concat(Object(c.c)(e))),t.next=4,c.b.get("".concat(c.a,"/").concat(n)).then((function(t){return t.data})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},631:function(t,e,n){"use strict";n(19);var r=n(11),c=n(0),o=n.n(c),l={props:{item:{type:Object,default:function(){}}},data:function(){return{baseDomain:r.a}},computed:{createdAt:function(){return o()(this.item.created_at).format("MMM DD, YYYY")}}},d=n(4),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"ps-blog--latset"},[e("div",{staticClass:"ps-blog__thumbnail"},[t.item.thumbnail?e("nuxt-link",{attrs:{to:"/blog/post-detail-1/".concat(t.item.id)}},[e("img",{attrs:{src:t.baseDomain+t.item.thumbnail.url,alt:"alt"}})]):t._e(),t._v(" "),e("div",{staticClass:"ps-blog__badge"},t._l(t.item.post_categories,(function(n){return e("span",{key:n.id,staticClass:"ps-badge__item"},[t._v(t._s(n.name))])})),0)],1),t._v(" "),e("div",{staticClass:"ps-blog__content"},[e("div",{staticClass:"ps-blog__meta"},[e("span",{staticClass:"ps-blog__date"},[t._v(t._s(t.createdAt))]),e("a",{staticClass:"ps-blog__author",attrs:{href:"#"}},[t._v("Alfredo Austin")])]),t._v(" "),e("nuxt-link",{staticClass:"ps-blog__title",attrs:{to:"/blog/post-detail-1/".concat(t.item.id)}},[t._v(t._s(t.item.name))]),t._v(" "),t.item.short_description?e("p",{staticClass:"ps-blog__desc"},[t._v(t._s(t.item.short_description))]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},670:function(t,e,n){"use strict";var r=n(624),c=(n(10),n(9),n(8),n(13),n(14),n(1)),o=(n(31),n(12));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{page:{type:Number,default:1},length:{type:Number,default:1}},computed:d(d({},Object(o.b)({loading:function(t){return t.app.loading}})),{},{pageIndex:{set:function(t){return this.handleChangPage(t),t},get:function(){return this.page}}}),methods:{handleChangPage:function(t){t!=this.page&&this.$emit("handleChangePage",t)},prevPage:function(){this.pageIndex>1&&this.pageIndex--},nextPage:function(){this.pageIndex<this.length&&this.pageIndex++}}},v=n(4),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-pagination"},[t.loading?e(r.a,{attrs:{type:"image",width:"100%",height:"50"}}):e("ul",{staticClass:"pagination"},[e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.prevPage()}}},[e("i",{staticClass:"icon-chevron-left"})])]),t._v(" "),t._l(t.length,(function(n){return e("li",{key:n,class:[t.pageIndex===n?"active":""]},[e("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.pageIndex=n}}},[t._v(t._s(n))])])})),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.nextPage()}}},[e("i",{staticClass:"icon-chevron-right"})])])],2)],1)}),[],!1,null,null,null);e.a=component.exports},698:function(t,e,n){"use strict";var r=n(624),c=(n(10),n(9),n(8),n(13),n(14),n(1)),o=n(57),l=n(12),d=(n(19),{name:"module-post-category",props:{list:{type:Array,default:function(){return[]}},className:{type:String,default:""}},data:function(){return{active:null}},methods:{openSubItem:function(t){t==this.active?this.active=null:this.active=t}}}),f=n(4),v=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.list&&t.list.length?e("ul",{class:t.className},t._l(t.list,(function(n,r){return e("li",{key:r,class:[n.extraClass,{active:t.active==r}]},[e("nuxt-link",{attrs:{to:"/blog/sidebar-1"},nativeOn:{click:function(e){return t.openSubItem(r)}}},[t._v("\n            "+t._s(n.name)+"\n        ")]),t._v(" "),n.posts&&n.posts.length?e("span",{staticClass:"sub-toggle",on:{click:function(e){return t.openSubItem(r)}}},[e("i",{staticClass:"fa fa-chevron-down"})]):t._e(),t._v(" "),e("slide-up-down",{attrs:{active:t.active==r}},[n.posts&&n.posts.length?e("ul",{staticClass:"sub-menu"},t._l(n.posts,(function(n,r){return e("li",{key:r},[e("nuxt-link",{attrs:{to:"/blog/post-detail-1/".concat(n.id)}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])],1)})),0):t._e()])],1)})),0):t._e()}),[],!1,null,null,null).exports;function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={props:{products:{type:Array,default:function(){return[]}},categories:{type:Array,default:function(){return[]}}},components:{ProductStandard:o.a,ModulePostCategory:v},data:function(){return{activeSlide:null,windowWidth:0}},computed:h(h({},Object(l.b)({loading:function(t){return t.app.loading}})),{},{isMobile:function(){return this.windowWidth<768}}),created:function(){window.addEventListener("resize",this.resizeScreen),this.resizeScreen()},destroyed:function(){window.removeEventListener("resize",this.resizeScreen)},methods:{activeSlideUpDown:function(t){this.activeSlide==t?this.activeSlide=null:this.activeSlide=t},resizeScreen:function(){this.windowWidth=window.innerWidth}}},y=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-widget ps-widget--blog"},[e("div",{staticClass:"ps-widget__block"},[e("h4",{staticClass:"ps-widget__title"},[t._v("Categories")]),t._v(" "),e("a",{class:["ps-block-control",{active:"category"==t.activeSlide}],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.activeSlideUpDown("category")}}},[e("i",{staticClass:"fa fa-angle-down"})]),t._v(" "),e("slide-up-down",{attrs:{active:!t.isMobile||"category"==t.activeSlide}},[e("div",{staticClass:"ps-widget__content ps-widget__category"},[e("module-post-category",{attrs:{list:t.categories,className:"menu--mobile ps-widget--category"}})],1)])],1),t._v(" "),e("div",{staticClass:"ps-widget__block"},[e("h4",{staticClass:"ps-widget__title"},[t._v("Related Products")]),t._v(" "),e("a",{class:["ps-block-control",{active:"product"==t.activeSlide}],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.activeSlideUpDown("product")}}},[e("i",{staticClass:"fa fa-angle-down"})]),t._v(" "),e("slide-up-down",{attrs:{active:!t.isMobile||"product"==t.activeSlide}},[e("div",{staticClass:"ps-widget__content"},[t.loading?e("div",{staticClass:"ps-widget__product"},t._l(3,(function(t){return e(r.a,{key:t,attrs:{type:"image, article"}})})),1):e("div",{staticClass:"ps-widget__product"},t._l(t.products,(function(t){return e("product-standard",{key:t.id,attrs:{product:t}})})),1)])])],1),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-widget--promo"},[t("img",{attrs:{src:"/img/banner-sidebar1.jpg",alt:""}})])}],!1,null,null,null);e.a=y.exports},857:function(t,e,n){"use strict";n.r(e);var r=n(624),c=(n(10),n(9),n(8),n(13),n(14),n(7)),o=n(1),l=(n(26),n(182)),d=n(629),f=n(698),v=n(49),_=n(631),h=n(670),m=n(12);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var O={layout:"default",components:{Breadcrumb:l.a,BlogWidget:f.a,PostLatset:_.a,ModulePagination:h.a},data:function(){return{breadcrumb:[{url:"/",text:"Home"},{url:"/blog/sidebar-2",extraClass:"active",text:"My Medi Blog"}],blogs:[],products:[],meta:{pageSize:9,pageIndex:1},postCategory:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)({loading:function(t){return t.app.loading}})),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("app/setLoading",!0),n={_limit:4,_start:30},e.next=4,Object(v.e)(n);case 4:return t.products=e.sent,e.next=7,Object(d.b)();case 7:t.postCategory=e.sent,t.getPostList(),t.$store.commit("app/setLoading",!1);case 10:case"end":return e.stop()}}),e)})))()},methods:{handleChangePage:function(t){this.meta.pageIndex=t,this.getPostList()},getPostList:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.meta.pageSize*(t.meta.pageIndex-1),r={_limit:t.meta.pageSize,_start:n},e.next=4,Object(d.c)(r);case 4:t.blogs=e.sent;case 5:case"end":return e.stop()}}),e)})))()}}},w=O,C=n(4),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-blog"},[e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{dataList:t.breadcrumb}}),t._v(" "),e("h1",{staticClass:"ps-blog__title"},[t._v("My Medi Blog")]),t._v(" "),e("div",{staticClass:"ps-blog__content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-9"},[e("div",{staticClass:"ps-blog--sidebar"},[t.loading?e(r.a,{staticClass:"mb-2",attrs:{type:"image, article"}}):e("post-latset",{attrs:{item:t.blogs[0]}})],1),t._v(" "),e("div",{staticClass:"ps-blog--grid"},[t.loading?e("div",{staticClass:"row"},t._l(2,(function(t){return e("div",{key:t,staticClass:"col-12 col-lg-6 p-0"},[e(r.a,{staticClass:"mb-2",attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"row"},[t._l(t.blogs,(function(n,r){return[r>0?e("div",{key:r,staticClass:"col-12 col-lg-6 p-0"},[e("post-latset",{attrs:{item:n}})],1):t._e()]}))],2)]),t._v(" "),e("module-pagination",{attrs:{page:t.meta.pageIndex,length:1},on:{handleChangePage:t.handleChangePage}})],1),t._v(" "),e("div",{staticClass:"col-12 col-sm-3"},[e("blog-widget",{attrs:{products:t.products,categories:t.postCategory}})],1)])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);