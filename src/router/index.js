/**
 * router/index.js
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

// Extend routes with meta information and custom path for testimonialForm
const extendedRoutes = routes.map(route => {
  console.log('Generated Route:', route) // Debug: Log each route
  // Override path for testimonialForm.vue to /testimonials
  if (route.name === 'testimonialForm') {
    return {
      ...route,
      path: '/testimonials', // Cleaner URL
      meta: {
        title: 'Submit a Testimonial',
        showInNav: false // Hide from navigation, like testimonials
      }
    }
  }
  return {
    ...route,
    meta: {
      title: route.name === 'index' ? 'Home' : route.name === 'testimonials' ? 'Testimonials' : route.name,
      showInNav: route.name !== 'testimonials' // Keep existing logic
    }
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: extendedRoutes,
})

// Workaround for dynamic import error
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
  console.log('Router is ready. Current routes:', router.getRoutes()) // Debug: Log all routes
})

// Remove or comment out the document title logic
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || 'My Resume'
//   next()
// })

export default router