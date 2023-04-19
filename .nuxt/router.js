import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a064677 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _7408ca2f = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _d05ff808 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _25443b51 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0b8c568a = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _7aa1660a = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _e59ee450 = () => interopDefault(import('../pages/account/forget-password.vue' /* webpackChunkName: "pages/account/forget-password" */))
const _606aea3f = () => interopDefault(import('../pages/account/my-account.vue' /* webpackChunkName: "pages/account/my-account" */))
const _6fbe94a9 = () => interopDefault(import('../pages/blog/masonry.vue' /* webpackChunkName: "pages/blog/masonry" */))
const _8c9ef038 = () => interopDefault(import('../pages/blog/sidebar-1.vue' /* webpackChunkName: "pages/blog/sidebar-1" */))
const _8c82c136 = () => interopDefault(import('../pages/blog/sidebar-2.vue' /* webpackChunkName: "pages/blog/sidebar-2" */))
const _7a83a8f4 = () => interopDefault(import('../pages/coming-soon/V1.vue' /* webpackChunkName: "pages/coming-soon/V1" */))
const _7a91c075 = () => interopDefault(import('../pages/coming-soon/V2.vue' /* webpackChunkName: "pages/coming-soon/V2" */))
const _16c275fd = () => interopDefault(import('../pages/homepage/home-10.vue' /* webpackChunkName: "pages/homepage/home-10" */))
const _16d08d7e = () => interopDefault(import('../pages/homepage/home-11.vue' /* webpackChunkName: "pages/homepage/home-11" */))
const _16dea4ff = () => interopDefault(import('../pages/homepage/home-12.vue' /* webpackChunkName: "pages/homepage/home-12" */))
const _16ecbc80 = () => interopDefault(import('../pages/homepage/home-13.vue' /* webpackChunkName: "pages/homepage/home-13" */))
const _16fad401 = () => interopDefault(import('../pages/homepage/home-14.vue' /* webpackChunkName: "pages/homepage/home-14" */))
const _1708eb82 = () => interopDefault(import('../pages/homepage/home-15.vue' /* webpackChunkName: "pages/homepage/home-15" */))
const _42dab444 = () => interopDefault(import('../pages/homepage/home-2.vue' /* webpackChunkName: "pages/homepage/home-2" */))
const _42e8cbc5 = () => interopDefault(import('../pages/homepage/home-3.vue' /* webpackChunkName: "pages/homepage/home-3" */))
const _42f6e346 = () => interopDefault(import('../pages/homepage/home-4.vue' /* webpackChunkName: "pages/homepage/home-4" */))
const _4304fac7 = () => interopDefault(import('../pages/homepage/home-5.vue' /* webpackChunkName: "pages/homepage/home-5" */))
const _43131248 = () => interopDefault(import('../pages/homepage/home-6.vue' /* webpackChunkName: "pages/homepage/home-6" */))
const _432129c9 = () => interopDefault(import('../pages/homepage/home-7.vue' /* webpackChunkName: "pages/homepage/home-7" */))
const _432f414a = () => interopDefault(import('../pages/homepage/home-8.vue' /* webpackChunkName: "pages/homepage/home-8" */))
const _433d58cb = () => interopDefault(import('../pages/homepage/home-9.vue' /* webpackChunkName: "pages/homepage/home-9" */))
const _2af0f584 = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _20a8f33e = () => interopDefault(import('../pages/shop/grid.vue' /* webpackChunkName: "pages/shop/grid" */))
const _33d6b155 = () => interopDefault(import('../pages/shop/grid-dark.vue' /* webpackChunkName: "pages/shop/grid-dark" */))
const _0cc67ef0 = () => interopDefault(import('../pages/shop/grid-detail.vue' /* webpackChunkName: "pages/shop/grid-detail" */))
const _3337d6b4 = () => interopDefault(import('../pages/shop/grid-green.vue' /* webpackChunkName: "pages/shop/grid-green" */))
const _6ecf2b02 = () => interopDefault(import('../pages/shop/grid-separate.vue' /* webpackChunkName: "pages/shop/grid-separate" */))
const _5de8ac96 = () => interopDefault(import('../pages/shop/list.vue' /* webpackChunkName: "pages/shop/list" */))
const _8638bc36 = () => interopDefault(import('../pages/shop/list-load-more.vue' /* webpackChunkName: "pages/shop/list-load-more" */))
const _1bda5cf4 = () => interopDefault(import('../pages/shop/promo-category.vue' /* webpackChunkName: "pages/shop/promo-category" */))
const _e4e556d6 = () => interopDefault(import('../pages/shop/result.vue' /* webpackChunkName: "pages/shop/result" */))
const _b2842fc6 = () => interopDefault(import('../pages/shop/shopping-cart.vue' /* webpackChunkName: "pages/shop/shopping-cart" */))
const _fc8cd386 = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _dae99d46 = () => interopDefault(import('../pages/product/layout/layout-1/_id.vue' /* webpackChunkName: "pages/product/layout/layout-1/_id" */))
const _26cfa05e = () => interopDefault(import('../pages/product/layout/layout-2/_id.vue' /* webpackChunkName: "pages/product/layout/layout-2/_id" */))
const _89d7e142 = () => interopDefault(import('../pages/product/layout/layout-3/_id.vue' /* webpackChunkName: "pages/product/layout/layout-3/_id" */))
const _4f587e60 = () => interopDefault(import('../pages/product/layout/layout-4/_id.vue' /* webpackChunkName: "pages/product/layout/layout-4/_id" */))
const _38c6253e = () => interopDefault(import('../pages/product/layout/layout-5/_id.vue' /* webpackChunkName: "pages/product/layout/layout-5/_id" */))
const _77e15c62 = () => interopDefault(import('../pages/product/layout/layout-6/_id.vue' /* webpackChunkName: "pages/product/layout/layout-6/_id" */))
const _0c25cb63 = () => interopDefault(import('../pages/product/layout/layout-7/_id.vue' /* webpackChunkName: "pages/product/layout/layout-7/_id" */))
const _ad5697fc = () => interopDefault(import('../pages/product/layout/product-sold-out/_id.vue' /* webpackChunkName: "pages/product/layout/product-sold-out/_id" */))
const _11ad60a9 = () => interopDefault(import('../pages/product/layout/product-variable/_id.vue' /* webpackChunkName: "pages/product/layout/product-variable/_id" */))
const _542e9dd1 = () => interopDefault(import('../pages/blog/post-detail-1/_id.vue' /* webpackChunkName: "pages/blog/post-detail-1/_id" */))
const _2f19e65c = () => interopDefault(import('../pages/blog/post-detail-2/_id.vue' /* webpackChunkName: "pages/blog/post-detail-2/_id" */))
const _a31b191c = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _6a064677,
    name: "404___en"
  }, {
    path: "/about-us",
    component: _7408ca2f,
    name: "about-us___en"
  }, {
    path: "/contact-us",
    component: _d05ff808,
    name: "contact-us___en"
  }, {
    path: "/fr",
    component: _25443b51,
    name: "index___fr"
  }, {
    path: "/portfolio",
    component: _0b8c568a,
    name: "portfolio___en"
  }, {
    path: "/shop",
    component: _7aa1660a,
    name: "shop___en"
  }, {
    path: "/account/forget-password",
    component: _e59ee450,
    name: "account-forget-password___en"
  }, {
    path: "/account/my-account",
    component: _606aea3f,
    name: "account-my-account___en"
  }, {
    path: "/blog/masonry",
    component: _6fbe94a9,
    name: "blog-masonry___en"
  }, {
    path: "/blog/sidebar-1",
    component: _8c9ef038,
    name: "blog-sidebar-1___en"
  }, {
    path: "/blog/sidebar-2",
    component: _8c82c136,
    name: "blog-sidebar-2___en"
  }, {
    path: "/coming-soon/V1",
    component: _7a83a8f4,
    name: "coming-soon-V1___en"
  }, {
    path: "/coming-soon/V2",
    component: _7a91c075,
    name: "coming-soon-V2___en"
  }, {
    path: "/fr/404",
    component: _6a064677,
    name: "404___fr"
  }, {
    path: "/fr/about-us",
    component: _7408ca2f,
    name: "about-us___fr"
  }, {
    path: "/fr/contact-us",
    component: _d05ff808,
    name: "contact-us___fr"
  }, {
    path: "/fr/portfolio",
    component: _0b8c568a,
    name: "portfolio___fr"
  }, {
    path: "/fr/shop",
    component: _7aa1660a,
    name: "shop___fr"
  }, {
    path: "/homepage/home-10",
    component: _16c275fd,
    name: "homepage-home-10___en"
  }, {
    path: "/homepage/home-11",
    component: _16d08d7e,
    name: "homepage-home-11___en"
  }, {
    path: "/homepage/home-12",
    component: _16dea4ff,
    name: "homepage-home-12___en"
  }, {
    path: "/homepage/home-13",
    component: _16ecbc80,
    name: "homepage-home-13___en"
  }, {
    path: "/homepage/home-14",
    component: _16fad401,
    name: "homepage-home-14___en"
  }, {
    path: "/homepage/home-15",
    component: _1708eb82,
    name: "homepage-home-15___en"
  }, {
    path: "/homepage/home-2",
    component: _42dab444,
    name: "homepage-home-2___en"
  }, {
    path: "/homepage/home-3",
    component: _42e8cbc5,
    name: "homepage-home-3___en"
  }, {
    path: "/homepage/home-4",
    component: _42f6e346,
    name: "homepage-home-4___en"
  }, {
    path: "/homepage/home-5",
    component: _4304fac7,
    name: "homepage-home-5___en"
  }, {
    path: "/homepage/home-6",
    component: _43131248,
    name: "homepage-home-6___en"
  }, {
    path: "/homepage/home-7",
    component: _432129c9,
    name: "homepage-home-7___en"
  }, {
    path: "/homepage/home-8",
    component: _432f414a,
    name: "homepage-home-8___en"
  }, {
    path: "/homepage/home-9",
    component: _433d58cb,
    name: "homepage-home-9___en"
  }, {
    path: "/shop/checkout",
    component: _2af0f584,
    name: "shop-checkout___en"
  }, {
    path: "/shop/grid",
    component: _20a8f33e,
    name: "shop-grid___en"
  }, {
    path: "/shop/grid-dark",
    component: _33d6b155,
    name: "shop-grid-dark___en"
  }, {
    path: "/shop/grid-detail",
    component: _0cc67ef0,
    name: "shop-grid-detail___en"
  }, {
    path: "/shop/grid-green",
    component: _3337d6b4,
    name: "shop-grid-green___en"
  }, {
    path: "/shop/grid-separate",
    component: _6ecf2b02,
    name: "shop-grid-separate___en"
  }, {
    path: "/shop/list",
    component: _5de8ac96,
    name: "shop-list___en"
  }, {
    path: "/shop/list-load-more",
    component: _8638bc36,
    name: "shop-list-load-more___en"
  }, {
    path: "/shop/promo-category",
    component: _1bda5cf4,
    name: "shop-promo-category___en"
  }, {
    path: "/shop/result",
    component: _e4e556d6,
    name: "shop-result___en"
  }, {
    path: "/shop/shopping-cart",
    component: _b2842fc6,
    name: "shop-shopping-cart___en"
  }, {
    path: "/shop/wishlist",
    component: _fc8cd386,
    name: "shop-wishlist___en"
  }, {
    path: "/fr/account/forget-password",
    component: _e59ee450,
    name: "account-forget-password___fr"
  }, {
    path: "/fr/account/my-account",
    component: _606aea3f,
    name: "account-my-account___fr"
  }, {
    path: "/fr/blog/masonry",
    component: _6fbe94a9,
    name: "blog-masonry___fr"
  }, {
    path: "/fr/blog/sidebar-1",
    component: _8c9ef038,
    name: "blog-sidebar-1___fr"
  }, {
    path: "/fr/blog/sidebar-2",
    component: _8c82c136,
    name: "blog-sidebar-2___fr"
  }, {
    path: "/fr/coming-soon/V1",
    component: _7a83a8f4,
    name: "coming-soon-V1___fr"
  }, {
    path: "/fr/coming-soon/V2",
    component: _7a91c075,
    name: "coming-soon-V2___fr"
  }, {
    path: "/fr/homepage/home-10",
    component: _16c275fd,
    name: "homepage-home-10___fr"
  }, {
    path: "/fr/homepage/home-11",
    component: _16d08d7e,
    name: "homepage-home-11___fr"
  }, {
    path: "/fr/homepage/home-12",
    component: _16dea4ff,
    name: "homepage-home-12___fr"
  }, {
    path: "/fr/homepage/home-13",
    component: _16ecbc80,
    name: "homepage-home-13___fr"
  }, {
    path: "/fr/homepage/home-14",
    component: _16fad401,
    name: "homepage-home-14___fr"
  }, {
    path: "/fr/homepage/home-15",
    component: _1708eb82,
    name: "homepage-home-15___fr"
  }, {
    path: "/fr/homepage/home-2",
    component: _42dab444,
    name: "homepage-home-2___fr"
  }, {
    path: "/fr/homepage/home-3",
    component: _42e8cbc5,
    name: "homepage-home-3___fr"
  }, {
    path: "/fr/homepage/home-4",
    component: _42f6e346,
    name: "homepage-home-4___fr"
  }, {
    path: "/fr/homepage/home-5",
    component: _4304fac7,
    name: "homepage-home-5___fr"
  }, {
    path: "/fr/homepage/home-6",
    component: _43131248,
    name: "homepage-home-6___fr"
  }, {
    path: "/fr/homepage/home-7",
    component: _432129c9,
    name: "homepage-home-7___fr"
  }, {
    path: "/fr/homepage/home-8",
    component: _432f414a,
    name: "homepage-home-8___fr"
  }, {
    path: "/fr/homepage/home-9",
    component: _433d58cb,
    name: "homepage-home-9___fr"
  }, {
    path: "/fr/shop/checkout",
    component: _2af0f584,
    name: "shop-checkout___fr"
  }, {
    path: "/fr/shop/grid",
    component: _20a8f33e,
    name: "shop-grid___fr"
  }, {
    path: "/fr/shop/grid-dark",
    component: _33d6b155,
    name: "shop-grid-dark___fr"
  }, {
    path: "/fr/shop/grid-detail",
    component: _0cc67ef0,
    name: "shop-grid-detail___fr"
  }, {
    path: "/fr/shop/grid-green",
    component: _3337d6b4,
    name: "shop-grid-green___fr"
  }, {
    path: "/fr/shop/grid-separate",
    component: _6ecf2b02,
    name: "shop-grid-separate___fr"
  }, {
    path: "/fr/shop/list",
    component: _5de8ac96,
    name: "shop-list___fr"
  }, {
    path: "/fr/shop/list-load-more",
    component: _8638bc36,
    name: "shop-list-load-more___fr"
  }, {
    path: "/fr/shop/promo-category",
    component: _1bda5cf4,
    name: "shop-promo-category___fr"
  }, {
    path: "/fr/shop/result",
    component: _e4e556d6,
    name: "shop-result___fr"
  }, {
    path: "/fr/shop/shopping-cart",
    component: _b2842fc6,
    name: "shop-shopping-cart___fr"
  }, {
    path: "/fr/shop/wishlist",
    component: _fc8cd386,
    name: "shop-wishlist___fr"
  }, {
    path: "/fr/product/layout/layout-1/:id?",
    component: _dae99d46,
    name: "product-layout-layout-1-id___fr"
  }, {
    path: "/fr/product/layout/layout-2/:id?",
    component: _26cfa05e,
    name: "product-layout-layout-2-id___fr"
  }, {
    path: "/fr/product/layout/layout-3/:id?",
    component: _89d7e142,
    name: "product-layout-layout-3-id___fr"
  }, {
    path: "/fr/product/layout/layout-4/:id?",
    component: _4f587e60,
    name: "product-layout-layout-4-id___fr"
  }, {
    path: "/fr/product/layout/layout-5/:id?",
    component: _38c6253e,
    name: "product-layout-layout-5-id___fr"
  }, {
    path: "/fr/product/layout/layout-6/:id?",
    component: _77e15c62,
    name: "product-layout-layout-6-id___fr"
  }, {
    path: "/fr/product/layout/layout-7/:id?",
    component: _0c25cb63,
    name: "product-layout-layout-7-id___fr"
  }, {
    path: "/fr/product/layout/product-sold-out/:id?",
    component: _ad5697fc,
    name: "product-layout-product-sold-out-id___fr"
  }, {
    path: "/fr/product/layout/product-variable/:id?",
    component: _11ad60a9,
    name: "product-layout-product-variable-id___fr"
  }, {
    path: "/fr/blog/post-detail-1/:id?",
    component: _542e9dd1,
    name: "blog-post-detail-1-id___fr"
  }, {
    path: "/fr/blog/post-detail-2/:id?",
    component: _2f19e65c,
    name: "blog-post-detail-2-id___fr"
  }, {
    path: "/product/layout/layout-1/:id?",
    component: _dae99d46,
    name: "product-layout-layout-1-id___en"
  }, {
    path: "/product/layout/layout-2/:id?",
    component: _26cfa05e,
    name: "product-layout-layout-2-id___en"
  }, {
    path: "/product/layout/layout-3/:id?",
    component: _89d7e142,
    name: "product-layout-layout-3-id___en"
  }, {
    path: "/product/layout/layout-4/:id?",
    component: _4f587e60,
    name: "product-layout-layout-4-id___en"
  }, {
    path: "/product/layout/layout-5/:id?",
    component: _38c6253e,
    name: "product-layout-layout-5-id___en"
  }, {
    path: "/product/layout/layout-6/:id?",
    component: _77e15c62,
    name: "product-layout-layout-6-id___en"
  }, {
    path: "/product/layout/layout-7/:id?",
    component: _0c25cb63,
    name: "product-layout-layout-7-id___en"
  }, {
    path: "/product/layout/product-sold-out/:id?",
    component: _ad5697fc,
    name: "product-layout-product-sold-out-id___en"
  }, {
    path: "/product/layout/product-variable/:id?",
    component: _11ad60a9,
    name: "product-layout-product-variable-id___en"
  }, {
    path: "/blog/post-detail-1/:id?",
    component: _542e9dd1,
    name: "blog-post-detail-1-id___en"
  }, {
    path: "/blog/post-detail-2/:id?",
    component: _2f19e65c,
    name: "blog-post-detail-2-id___en"
  }, {
    path: "/fr/portfolio/:id",
    component: _a31b191c,
    name: "portfolio-id___fr"
  }, {
    path: "/portfolio/:id",
    component: _a31b191c,
    name: "portfolio-id___en"
  }, {
    path: "/",
    component: _25443b51,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
