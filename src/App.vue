<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TheFooter from './components/TheFooter.vue'

const showScrollTop = ref(false)

const handleMouseMove = (event) => {
  const { clientX, clientY } = event
  const { innerWidth, innerHeight } = window
  
  const mouseX = (clientX / innerWidth) * 100
  const mouseY = (clientY / innerHeight) * 100
  
  document.documentElement.style.setProperty('--mouse-x', `${mouseX}%`)
  document.documentElement.style.setProperty('--mouse-y', `${mouseY}%`)
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="bg-brand-primary text-brand-primary selection-brand scrollbar-brand cursor-gradient">
    <TheHeader />
    
    <div class="relative z-10">
      <HeroSection />
    </div>
    
    <div 
      class="relative z-10 mx-auto transition-all duration-500 ease-in-out max-w-7xl md:max-w-none"
    >
      <main 
        class="px-6 transition-all duration-500 ease-in-out md:px-12 lg:px-24"
      >
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      
      <TheFooter />
    </div>
    
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="scale-95 translate-y-2 opacity-0"
      enter-to-class="scale-100 translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="scale-100 translate-y-0 opacity-100"
      leave-to-class="scale-95 translate-y-2 opacity-0"
    >
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed z-50 p-3 transition-all duration-300 border rounded-full shadow-lg cursor-pointer bottom-6 right-6 bg-brand-primary/80 hover:bg-brand-primary text-brand-accent hover:text-brand-accent hover:scale-110 backdrop-blur-sm border-brand-accent/20 hover:border-brand-accent/40"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </Transition>
  </div>
</template>
