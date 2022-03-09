import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _267bfaf9 = () => interopDefault(import('../pages/agenda.vue' /* webpackChunkName: "pages/agenda" */))
const _fcc41d16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _78211cf4 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _2f4be982 = () => interopDefault(import('../pages/jeu-de-piste.vue' /* webpackChunkName: "pages/jeu-de-piste" */))
const _4448f702 = () => interopDefault(import('../pages/partenaires.vue' /* webpackChunkName: "pages/partenaires" */))
const _11ec9d82 = () => interopDefault(import('../pages/programme.vue' /* webpackChunkName: "pages/programme" */))
const _7dccb590 = () => interopDefault(import('../pages/trombi.vue' /* webpackChunkName: "pages/trombi" */))

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
    name: "agenda___fr"
  }, {
    path: "/en",
    component: _fcc41d16,
    name: "index___en"
  }, {
    path: "/events",
    component: _78211cf4,
    name: "events___fr"
  }, {
    path: "/jeu-de-piste",
    component: _2f4be982,
    name: "jeu-de-piste___fr"
  }, {
    path: "/partenaires",
    component: _4448f702,
    name: "partenaires___fr"
  }, {
    path: "/programme",
    component: _11ec9d82,
    name: "programme___fr"
  }, {
    path: "/trombi",
    component: _7dccb590,
    name: "trombi___fr"
  }, {
    path: "/en/agenda",
    component: _267bfaf9,
    name: "agenda___en"
  }, {
    path: "/en/events",
    component: _78211cf4,
    name: "events___en"
  }, {
    path: "/en/jeu-de-piste",
    component: _2f4be982,
    name: "jeu-de-piste___en"
  }, {
    path: "/en/partenaires",
    component: _4448f702,
    name: "partenaires___en"
  }, {
    path: "/en/programme",
    component: _11ec9d82,
    name: "programme___en"
  }, {
    path: "/en/trombi",
    component: _7dccb590,
    name: "trombi___en"
  }, {
    path: "/",
    component: _fcc41d16,
    name: "index___fr"
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
