(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{632:function(t,e,n){"use strict";n(8);var r={props:{banner:{type:Object,default:function(){}},reverse:{type:Boolean,default:!1}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.banner?e("div",{staticClass:"ps-banner",style:{backgroundColor:t.banner.bgColor}},[t.banner.imgbg?e("img",{class:["ps-banner__imagebg",t.banner.imgbg],attrs:{src:t.banner.img,alt:"alt"}}):t._e(),t._v(" "),e("div",{class:[t.banner.noFull?"container-no-round":"container container-initial"]},[e("div",{class:["ps-banner__block",t.reverse?"row-reverse":""]},[e("div",{staticClass:"ps-banner__content"},[t.banner.baged?e("p",{staticClass:"ps-banner__baged"},[e("strong",[t._v(t._s(t.banner.baged))])]):t._e(),t._v(" "),e("h2",{class:["ps-banner__title",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.title)}}),t._v(" "),e("div",{class:["ps-banner__desc",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.desc)}}),t._v(" "),t.banner.price?e("div",{staticClass:"ps-banner__price"},[e("span",[t._v(t._s(t.banner.price.ins))]),t._v(" "),e("del",[t._v(t._s(t.banner.price.del))])]):t._e(),t._v(" "),t.banner.button?e("div",{staticClass:"ps-banner__btn-group"},t._l(t.banner.button,(function(n,r){return e("div",{key:r,class:["ps-banner__btn",t.banner.buttonColor&&t.banner.buttonColor]},[e("img",{style:t.banner.filter&&t.banner.filter,attrs:{src:n.icon,alt:"alt"}}),t._v(t._s(n.text)+"\n                    ")])})),0):t._e(),t._v(" "),t.banner.shop||t.banner.cart?e("a",{class:["ps-banner__shop",t.banner.shop,t.banner.cart],attrs:{href:"#"}},[t._v(t._s(t.banner.textShop?t.banner.textShop:t.banner.shop?"Shop now":"Add to cart"))]):t._e(),t._v(" "),t.banner.percent&&!t.banner.percent.thumbnail?e("div",{class:["ps-banner__persen",t.banner.percent.extraClass],domProps:{innerHTML:t._s(t.banner.percent.text)}}):t._e()]),t._v(" "),e("div",{class:["ps-banner__thumnail",{"ps-banner__fluid":!t.banner.round}]},[t.banner.round?e("img",{staticClass:"ps-banner__round",attrs:{src:t.banner.round,alt:"alt"}}):t._e(),t._v(" "),!t.banner.imgbg&&t.banner.img?e("img",{staticClass:"ps-banner__image",attrs:{src:t.banner.img,alt:"alt"}}):t._e(),t._v(" "),t.banner.percent&&t.banner.percent.thumbnail?e("div",{class:["ps-banner__persen",t.banner.percent.extraClass]},[t._v("\n                "+t._s(t.banner.percent.text)+"\n                ")]):t._e()])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},633:function(t,e,n){"use strict";var r=n(190),o=n(183),menu=n(85),c=n(110),l={components:{SocialIcon:r.a,LanguageCurrency:o.a,RenderList:c.a},data:function(){return{menu:menu.f}}},d=n(4),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"ps-top__right"},[e("language-currency"),t._v(" "),e("div",{staticClass:"ps-top__social"},[e("social-icon")],1),t._v(" "),e("render-list",{attrs:{list:t.menu,className:"menu-top"}}),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__text"},[e("strong",[t._v("100% Secure delivery ")]),t._v("without contacting the courier ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__text"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])}],!1,null,null,null);e.a=component.exports},635:function(t,e,n){"use strict";n(10),n(9),n(8),n(13),n(14);var r=n(1),o=n(12),c=n(632);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{listData:{type:Array,default:function(){return[]}},sectionClass:{type:String,default:""},round:{type:Boolean,default:!1}},components:{Banner:c.a},data:function(){return{swiperOption:{slidesPerView:1,loop:!0,effect:"fade",autoplay:{delay:15e3,disableOnInteraction:!1},navigation:{prevEl:".swiper-prev-banner",nextEl:".swiper-next-banner"},pagination:{el:".pagination-banner",clickable:!0}},loadingBanner:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({loading:function(t){return t.app.loading}})),mounted:function(){var t=this;setTimeout((function(){t.loadingBanner=!1}),1e3)}},_=d,m=n(4),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("section",{class:["ps-section--banner",t.sectionClass]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingBanner,expression:"loadingBanner"}],staticClass:"ps-section__overlay"},[e("div",{staticClass:"ps-section__loading"})]),t._v(" "),e("div",{staticClass:"ps-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:bannerSwiper",value:t.swiperOption,expression:"swiperOption",arg:"bannerSwiper"}],staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.listData,(function(n,r){return e("div",{key:r,staticClass:"swiper-slide"},[t.round?e("div",{staticClass:"ps-banner--round"},[e("banner",{attrs:{banner:n}})],1):e("banner",{attrs:{banner:n}})],1)})),0)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"swiper-pagination pagination-banner"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-swiper__nav"},[t("div",{staticClass:"swiper-button-prev swiper-prev-banner"}),this._v(" "),t("div",{staticClass:"swiper-button-next swiper-next-banner"})])}],!1,null,null,null);e.a=component.exports},638:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(7),o=(n(26),n(11));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="collections?slug=".concat(e),t.next=3,o.b.get("".concat(o.a,"/").concat(n)).then((function(t){return t.data&&t.data.length>0?t.data[0].products:[]})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},639:function(t,e,n){"use strict";var r=n(630),o={props:{title:{type:String,default:"Join our newsletter and get <br>$20 discount for your first order"},desc:{type:String,default:""}},components:{FormSubscribe:r.a},methods:{handleSubscribe:function(t){console.log("email",t);this.$store.commit("app/setMessageNotify",{message:"Thank you for you subscribe.",icon:"icon-shield-check"}),this.$store.commit("app/setDialogNotify",!0)}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--newsletter"},[e("div",{staticClass:"container",staticStyle:{"background-image":"url('/img/newsletter-bg.jpg')"}},[e("h3",{staticClass:"ps-section__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.desc?e("p",{staticClass:"ps-section__text"},[t._v(t._s(t.desc))]):t._e(),t._v(" "),e("div",{staticClass:"ps-section__content"},[e("form-subscribe",{on:{handleSubscribe:t.handleSubscribe}})],1)])])}),[],!1,null,null,null);e.a=component.exports},669:function(t,e,n){"use strict";var r=n(624),o=(n(10),n(9),n(8),n(13),n(14),n(1)),c=n(57),l=n(12);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _={props:{title:{type:String,default:""},dataList:{type:Array,default:function(){return[]}}},components:{ProductStandard:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({loading:function(t){return t.app.loading}}))},m=_,h=n(4),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--featured"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"ps-section__title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"ps-section__content"},[t.loading?e("div",{staticClass:"row"},t._l(5,(function(t){return e("div",{key:t,staticClass:"col-6 col-sm-4 col-lg-2dot4"},[e(r.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"row m-0"},t._l(t.dataList,(function(t,n){return e("div",{key:n,staticClass:"col-6 col-sm-4 col-lg-2dot4 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),0),t._v(" "),t._m(0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-shop__more"},[t("a",{attrs:{href:"#"}},[this._v("Show all")])])}],!1,null,null,null);e.a=component.exports},673:function(t){t.exports=JSON.parse('{"a":[{"name":"Wound Care","list":[{"text":"Accessories","url":"/shop"},{"text":"Bandages","url":"/shop"},{"text":"Gypsum foundations","url":"/shop"},{"text":"Patches and tapes","url":"/shop"},{"text":"Surgical sutures","url":"/shop"},{"text":"Swabs","url":"/shop"},{"text":"Wound healing","url":"/shop"}]},{"name":"Higiene","list":[{"text":"Disinfectants","url":"/shop"},{"text":"Disposable products","url":"/shop"},{"text":"Face Masks - protective","url":"/shop"},{"text":"Gloves","url":"/shop"},{"text":"Protective clothing","url":"/shop"},{"text":"Sterilization","url":"/shop"},{"text":"Surgical foils","url":"/shop"}]},{"name":"Laboratory","list":[{"text":"Accessories","url":"/shop"},{"text":"Devices","url":"/shop"},{"text":"Diagnostic tests","url":"/shop"},{"text":"Dyes","url":"/shop"},{"text":"Pipettes","url":"/shop"},{"text":"Tubes","url":"/shop"},{"text":"Test-tubes","url":"/shop"}]},{"name":"Tools","list":[{"text":"Care products","url":"/shop"},{"text":"Claws and forceps","url":"/shop"},{"text":"Electrosurgery","url":"/shop"},{"text":"Needles","url":"/shop"},{"text":"Plaster tools","url":"/shop"},{"text":"Scalpels, blades","url":"/shop"},{"text":"Scissors","url":"/shop"}]},{"name":"Diagnosis","list":[{"text":"Accessories","url":"/shop"},{"text":"Biopsy tools","url":"/shop"},{"text":"Endoscopes","url":"/shop"},{"text":"Monitoring","url":"/shop"},{"text":"Otoscopes","url":"/shop"},{"text":"Oxygen concentrators","url":"/shop"},{"text":"Thermometers","url":"/shop"}]},{"name":"Equipment","list":[{"text":"Blades","url":"/shop"},{"text":"Education","url":"/shop"},{"text":"Germicidal lamps","url":"/shop"},{"text":"Infusion stands","url":"/shop"},{"text":"Lighting","url":"/shop"},{"text":"Machines","url":"/shop"},{"text":"Tables and assistants","url":"/shop"}]}],"c":[{"text":"Bandages","image":"/img/branch/plastercross.svg"},{"text":"Capsules","image":"/img/branch/capsule.svg"},{"text":"Dental","image":"/img/branch/dental.svg"},{"text":"Thermometer","image":"/img/branch/thermometer.svg"},{"text":"Heart Health","image":"/img/branch/heart-healt.svg"},{"text":"Micrscope","image":"/img/branch/microscope.svg"},{"text":"Tubes","image":"/img/branch/tube.svg"}],"b":[{"name":"Face masks","image":"/img/promotion/facemask-cat.png"},{"name":"Uniforms","image":"/img/promotion/uniforms-cat.png"},{"name":"Protective covers","image":"/img/promotion/protectcover-cat.png"},{"name":"Dental","image":"/img/promotion/dental-cat.png"},{"name":"Blood pressure","image":"/img/promotion/pressure-cat.png"},{"name":"Sugar level","image":"/img/promotion/sugarlevel-cat.png"}]}')},679:function(t,e,n){"use strict";n(393);var r=n(184),o={data:function(){return{instagram:r.e}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--instagram"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"ps-section__content"},[e("div",{staticClass:"row m-0"},t._l(t.instagram,(function(n,r){return e("div",{key:r,staticClass:"col-6 col-sm-4 col-md-2"},[e("a",{staticClass:"ps-image--transition",attrs:{href:n.link,target:"_blank"}},[e("img",{attrs:{src:n.image,alt:""}}),t._v(" "),t._m(1,!0)])])})),0)])])])}),[function(){var t=this,e=t._self._c;return e("h3",{staticClass:"ps-section__title"},[t._v("Follow "),e("strong",[t._v("@MYMEDI ")]),t._v("on instagram")])},function(){var t=this._self._c;return t("span",{staticClass:"ps-image__overlay"},[t("i",{staticClass:"fa fa-instagram"})])}],!1,null,null,null);e.a=component.exports},683:function(t,e,n){"use strict";n(8);var r={props:{banner:{type:Object,default:function(){}}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-home__banner"},[t.banner?e("div",{staticClass:"ps-banner",style:{backgroundColor:t.banner.bgColor}},[e("img",{staticClass:"ps-banner__overlay",attrs:{src:t.banner.img,alt:"alt"}}),t._v(" "),e("div",{staticClass:"ps-banner__block"},[e("div",{staticClass:"ps-banner__content"},[e("h2",{class:["ps-banner__title",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.title)}}),t._v(" "),t.banner.button?e("div",{staticClass:"ps-banner__btn-group"},t._l(t.banner.button,(function(n,r){return e("div",{key:r,class:["ps-banner__btn",t.banner.buttonColor&&t.banner.buttonColor]},[e("img",{style:t.banner.filter&&t.banner.filter,attrs:{src:n.icon,alt:"alt"}}),t._v(t._s(n.text)+"\n                    ")])})),0):t._e(),t._v(" "),t.banner.price?e("div",{staticClass:"ps-banner__price"},[e("span",[t._v(t._s(t.banner.price.ins))]),t._v(" "),e("del",[t._v(t._s(t.banner.price.del))])]):t._e(),t._v(" "),e("a",{class:["ps-banner__shop",t.banner.shop],attrs:{href:"#"}},[t._v(t._s(t.banner.textShop))])]),t._v(" "),t.banner.percent?e("div",{staticClass:"ps-banner__thumnail"},[e("div",{class:["ps-banner__persen",t.banner.percent.extraClass]},[t._v("\n                "+t._s(t.banner.percent.text)+"\n                ")])]):t._e()])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},716:function(t,e,n){"use strict";var r=n(191),o=n(188),c=n(192),l=n(189),footer=n(113),d=n(110),_={components:{FooterBottom:r.a,FooterTop:o.a,FooterContact:c.a,FooterAddress:l.a,RenderList:d.a},data:function(){return{information:footer.e,account:footer.a,store:footer.g}}},m=n(4),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"ps-footer ps-footer--8"},[e("div",{staticClass:"container"},[e("footer-top"),t._v(" "),e("div",{staticClass:"ps-footer__middle"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("footer-address")],1),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-8"},[e("footer-contact")],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-md-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.information.title))]),t._v(" "),e("render-list",{attrs:{list:t.information.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.account.title))]),t._v(" "),e("render-list",{attrs:{list:t.account.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.store.title))]),t._v(" "),e("render-list",{attrs:{list:t.store.items,className:"ps-block__list"}})],1)])])])])]),t._v(" "),e("footer-bottom")],1)])}),[],!1,null,null,null);e.a=component.exports},722:function(t,e,n){"use strict";n(19);var r=n(673),o={data:function(){return{categoryImage:r.b}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--category ps-category--image"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"ps-section__title"},[t._v("Check out the most popular categories")]),t._v(" "),e("div",{staticClass:"ps-section__content"},[e("div",{staticClass:"row"},t._l(t.categoryImage,(function(n,r){return e("div",{key:r,staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-category__thumbnail"},[e("nuxt-link",{staticClass:"ps-category__image",attrs:{to:"/shop"}},[e("img",{attrs:{src:n.image,alt:""}})]),t._v(" "),e("div",{staticClass:"ps-category__content"},[e("nuxt-link",{staticClass:"ps-category__name",attrs:{to:"/shop"}},[t._v(t._s(n.name))]),t._v(" "),e("nuxt-link",{staticClass:"ps-category__more",attrs:{to:"/shop"}},[t._v("More")])],1)],1)])})),0)])])])}),[],!1,null,null,null);e.a=component.exports},743:function(t,e,n){var content=n(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("42d17091",content,!0,{sourceMap:!1})},824:function(t,e,n){"use strict";n(743)},825:function(t,e,n){var r=n(21)(!1);r.push([t.i,":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--8 .ps-home__content{padding-top:20px}.ps-home--8 .ps-promo{padding-bottom:0;display:none;margin-left:-15px;margin-right:-15px}.ps-home--8 .ps-promo.mobile{display:block}.ps-home--8 .ps-promo .ps-promo__banner{max-height:258px}.ps-home--8 .ps-section--banner{padding-bottom:50px}.ps-home--8 .ps-section--banner .owl-dots{bottom:-30px}.ps-home--8 .ps-home__banner{margin-bottom:50px}.ps-home--8 .ps-section--category{padding:30px 0 50px}.ps-home--8 .ps-section--category .col-6:nth-child(5),.ps-home--8 .ps-section--category .col-6:nth-child(6),.ps-home--8 .ps-section--category .ps-section__title{display:none}.ps-home--8 .ps-section--latest{margin:30px 0 50px}.ps-home--8 .ps-home__promo{display:block;margin:0;padding-top:30px}.ps-home--8 .ps-section--featured{padding:30px 0 50px}.ps-home--8 .ps-section--featured .ps-shop__more{display:block}.ps-home--8 .ps-section--featured .col-6:nth-child(6),.ps-home--8 .ps-section--featured .col-6:nth-child(7),.ps-home--8 .ps-section--featured .col-6:nth-child(8),.ps-home--8 .ps-section--featured .col-6:nth-child(9),.ps-home--8 .ps-section--featured .col-6:nth-child(10){display:none}.ps-home--8 .ps-section--instagram{padding:30px 0 80px}.ps-home--8 .ps-section--newsletter{padding:80px 0}.ps-home--8 .ps-home__line{border-top:1px solid #f0f2f5}.ps-home--8 .ps-home__banner{margin-top:20px}@media(min-width:768px){.ps-home--8 .ps-section--banner{margin:0}.ps-home--8 .ps-promo{padding-bottom:20px;display:block;margin:0}.ps-home--8 .ps-promo.mobile{display:none}.ps-home--8 .ps-section--category .col-sm-4{flex:0 0 25%;max-width:25%}}@media(min-width:1280px){.ps-home--8 .ps-banner{height:450px}.ps-home--8 .ps-banner .ps-banner__title{line-height:60px!important;font-size:50px i!important}.ps-home--8 .ps-banner .ps-banner__price span{font-size:50px}.ps-home--8 .ps-banner .ps-banner__price del{font-size:24px}.ps-home--8 .ps-banner .ps-banner__desc{font-size:22px}.ps-home--8 .ps-banner .ps-banner__shop{font-size:20px}.ps-home--8 .ps-home__banner .ps-banner{height:350px}.ps-home--8 .ps-home__banner .ps-banner__content{padding:4%}}",""]),t.exports=r},845:function(t,e,n){"use strict";n.r(e);var r=n(621),o=n(7),c=(n(26),n(10),n(9),n(8),n(13),n(14),n(1)),l=n(111),menu=n(85),d=n(110),_=n(183),m=n(185),h=n(49),v=n(187),f=n(186),C=n(12),x=n(633);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{Notification:l.a,RenderList:d.a,LanguageCurrency:_.a,FormSearch:m.a,LoginModal:v.a,CartMini:f.a,HeaderTop:x.a},data:function(){return{mainMenu:menu.a,product:null,sticky:!1,showNavigation:!1}},computed:w(w({},Object(C.b)({cartItems:function(t){return t.cart.cartItems},wishlistItems:function(t){return t.wishlist.items},appDrawer:function(t){return t.app.appDrawer}})),{},{productCartQuantity:function(){var t=0;return this.cartItems.forEach((function(element){t+=element.quantity})),t}}),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.getProductById)(5);case 2:t.product=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>200},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)},handleOpenMenu:function(){this.showNavigation=!this.showNavigation}}},j=n(4),k=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--2 ps-header--8",{"ps-header--sticky":t.sticky}]},[e("notification"),t._v(" "),e("div",{staticClass:"ps-header__top"},[e("header-top")],1),t._v(" "),e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo.png",alt:""}}),t._v(" "),e("img",{staticClass:"sticky-logo",attrs:{src:"/img/sticky-logo.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("a",{staticClass:"ps-menu--sticky",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenMenu()}}},[e("i",{staticClass:"fa fa-bars"})]),t._v(" "),e("ul",{staticClass:"ps-header__icons"},[e("li",{},[e("a",{staticClass:"active ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"icon-magnifier"})])]),t._v(" "),e("li",{staticClass:"ps-header__user"},[t._m(0),t._v(" "),e("login-modal")],1),t._v(" "),e("li",{},[e("nuxt-link",{staticClass:"ps-header__item",attrs:{to:"/shop/wishlist"}},[e("i",{staticClass:"fa fa-heart-o"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.wishlistItems.length))])])],1),t._v(" "),e("li",{staticClass:"ps-header__cart"},[e("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[e("i",{staticClass:"icon-cart-empty"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.productCartQuantity))])]),t._v(" "),e("cart-mini")],1)]),t._v(" "),e("form-search"),t._v(" "),t._m(1)],1)])]),t._v(" "),e("div",{class:["ps-navigation",{active:t.showNavigation}]},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-navigation__left"},[e("nav",{staticClass:"ps-main-menu"},[e("render-list",{attrs:{list:t.mainMenu,className:"menu",product:t.product}})],1)]),t._v(" "),t._m(2)])])],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[t("i",{staticClass:"icon-user"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-middle__text"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-navigation__right"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])}],!1,null,null,null).exports;function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var D={components:{Notification:l.a},data:function(){return{sticky:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(C.b)({appDrawer:function(t){return t.app.appDrawer}})),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>700},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)}}},S=D,M=Object(j.a)(S,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--8 ps-header--mobile",{"ps-header--sticky":t.sticky}]},[e("notification"),t._v(" "),e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/mobile-logo.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",[e("a",{staticClass:"ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"fa fa-search"})])])])])])])],1)}),[],!1,null,null,null).exports,L=n(716),E=n(635),N=n(672),I=n(722),B=n(193),T=n(638),F=n(195),H=n(683),$=n(669),R=n(679),A=n(639),z={layout:"home-default",components:{HeaderV8:k,HeaderMobile:M,FooterV6:L.a,SectionBanner:E.a,CategoryImage:I.a,LatestProductCarousel:B.a,PromoItem:F.a,BannerOverlay:H.a,FeaturedProduct:$.a,Instagram:R.a,Newsletter:A.a},data:function(){return{banners:N.t,latestProduct:[],promotion:[{banner:"/img/promotion/bg-banner8.jpg",title:"Hubble <br/>Eye Lenses",btnName:"Shop now",sale:"-12%",classTitle:"text-white",saleColor:"text-yellow"},{banner:"/img/promotion/bg-banner6.jpg",title:"Domestic <br/>Clean PRO",btnName:"Shop now",price:"$15.99",del:"$29.99",priceColor:"text-primary",priceHorizontal:!0}],bannerContent:N.n,featuredProduct:[],bestsellerProduct:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("app/setLoading",!0),n={_limit:8},e.next=4,Object(h.e)(n);case 4:return t.latestProduct=e.sent,e.next=7,Object(T.a)("featured-products");case 7:return t.featuredProduct=e.sent,e.next=10,Object(T.a)("top-5-best-sellers");case 10:t.bestsellerProduct=e.sent,t.$store.commit("app/setLoading",!1);case 12:case"end":return e.stop()}}),e)})))()}},Y=(n(824),Object(j.a)(z,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ps-page"},[e("header-v8"),t._v(" "),e("header-mobile"),t._v(" "),e("div",{staticClass:"ps-home ps-home--8"},[e("div",{staticClass:"ps-home__content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-promo"},[e("nuxt-link",{staticClass:"ps-promo__item",attrs:{to:"/shop"}},[e("img",{staticClass:"ps-promo__text",attrs:{src:"/img/christmas-banner-txt.png",alt:""}}),e("img",{staticClass:"ps-promo__banner",attrs:{src:"/img/christmas-banner-bg.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-promo mobile"},[e("nuxt-link",{staticClass:"ps-promo__item",attrs:{to:"/shop"}},[e("img",{staticClass:"ps-promo__text",attrs:{src:"/img/christmas-banner-mobile-txt.png",alt:""}}),e("img",{staticClass:"ps-promo__banner",attrs:{src:"/img/christmas-banner-mobile.jpg",alt:""}})])],1),t._v(" "),e("section-banner",{attrs:{listData:t.banners,sectionClass:"ps-banner--container"}})],1),t._v(" "),e("category-image"),t._v(" "),e("latest-product-carousel",{attrs:{title:"Latest products",dataList:t.latestProduct}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"ps-promo ps-home__promo"},[e("div",{staticClass:"row"},t._l(t.promotion,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-md-6"},[e("promo-item",{attrs:{item:t}})],1)})),0)]),t._v(" "),e("banner-overlay",{attrs:{banner:t.bannerContent[1]}})],1),t._v(" "),e("featured-product",{attrs:{title:"Bestsellers",dataList:t.bestsellerProduct}}),t._v(" "),e("featured-product",{attrs:{title:"Featured products",dataList:t.featuredProduct}}),t._v(" "),e("instagram"),t._v(" "),e("div",{staticClass:"ps-home__line"}),t._v(" "),e("newsletter")],1)]),t._v(" "),e("footer-v6")],1)}),[],!1,null,null,null));e.default=Y.exports}}]);