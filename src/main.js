import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { createAppRouter } from './router.js'
import './style.css'

// Create the SSG app
export const createApp = ViteSSG(
  App,
  { 
    routes: [
      { path: '/', component: App }
    ]
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Install plugins, configure app, etc.
    // This runs on both server and client
    
    // Client-side only code
    if (isClient) {
      // Add any client-side only logic here
    }
  }
)
