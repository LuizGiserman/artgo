import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _267bfaf9 = () => interopDefault(import('../pages/agenda.vue' /* webpackChunkName: "pages/agenda" */))
const _78211cf4 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _121360bd = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7dccb590 = () => interopDefault(import('../pages/trombi.vue' /* webpackChunkName: "pages/trombi" */))
const _fcc41d16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agenda",
    component: _267bfaf9,
    name: "agenda"
  }, {
    path: "/events",
    component: _78211cf4,
    name: "events"
  }, {
    path: "/inspire",
    component: _121360bd,
    name: "inspire"
  }, {
    path: "/trombi",
    component: _7dccb590,
    name: "trombi"
  }, {
    path: "/",
    component: _fcc41d16,
    name: "index"
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