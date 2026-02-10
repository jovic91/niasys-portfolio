<script setup>
const projects = [
  {
    title: 'NiaSys Portfolio Website',
    description: 'This is the official portfolio of Niasys, showcasing select projects, technical expertise, and professional experience. Designed with a minimalist approach, the site focuses on clarity, usability, and highlighting the work rather than unnecessary distractions. It reflects the brand\'s commitment to clean, modern design and practical, maintainable IT solutions.',
    image: '/niasys.webp',
    technologies: ['Vue.js', 'Tailwind CSS', 'SSG', 'SEO', 'UI/UX'],
    url: '#'
  },
  {
    title: 'DDG Group Website',
    description: 'Developed a modern, responsive corporate website for DDG Group, an construction company. The project included full-stack development, integration of content management features, and optimization for performance and SEO.',
    image: '/ddg.webp',
    technologies: ['Laravel', 'Vue.js', 'Vite', 'Tailwind CSS', 'SSR', 'Inertia.js', 'SEO', 'UI/UX'],
    url: 'https://ddg.hr/en'
  }
]
</script>

<template>
  <section id="projects" class="px-6 py-24 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <h2 class="sticky font-semibold tracking-widest text-left uppercase lg:text-center text-brand-primary top-24">
            Projects
          </h2>
        </div>
        
        <div class="lg:col-span-2">
          <p class="mb-8 text-sm leading-relaxed text-brand-secondary">
            Selected projects available for public display. For a more comprehensive overview of my work, including private and enterprise projects, please <a href="mailto:aleks@niasys.hr" class="transition-colors duration-200 text-brand-primary hover:text-brand-accent">get in touch</a>.
          </p>
          
          <div class="space-y-12">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="relative grid gap-4 p-4 pb-1 -mx-4 transition-all rounded-md group sm:grid-cols-8 sm:gap-8 md:gap-4 hover:bg-brand-surface hover:shadow-lg"
            >
              <div class="absolute z-0 hidden transition rounded-md -inset-x-4 -inset-y-4 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-brand-surface lg:group-hover:shadow-lg"></div>
              
              <div class="z-10 sm:order-2 sm:col-span-5">
                <h3>
                  <a
                    :href="project.url"
                    class="inline-flex items-baseline text-base font-medium leading-tight text-brand-primary hover:text-brand-accent focus-visible:text-brand-accent group/link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {{ project.title }}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </h3>
                
                <p class="mt-2 text-sm leading-normal text-brand-secondary">
                  {{ project.description }}
                </p>
                
                <div class="flex mt-2 space-x-4 text-sm">
                  <a
                    :href="project.url"
                    class="inline-flex items-center font-medium transition-colors duration-200 text-brand-primary hover:text-brand-accent"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live
                  </a>
                </div>
                
                <ul class="flex flex-wrap mt-2" aria-label="Technologies used">
                  <li
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="mr-1.5 mt-2"
                  >
                    <div class="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-brand-accent-light bg-brand-accent-light">
                      {{ tech }}
                    </div>
                  </li>
                </ul>
              </div>
              
              <img
                :src="project.image"
                :alt="project.title + ' screenshot'"
                loading="lazy"
                width="500"
                decoding="async"
                class="transition border rounded border-brand-secondary/20 group-hover:border-brand-accent/50 sm:order-1 sm:col-span-3 sm:translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>