<script setup>
const experiences = [
  {
    period: '2024 — Present',
    position: 'Head of IT Development & Delivery',
    company: 'IntechOpen',
    url: 'https://www.intechopen.com/',
    description: 'Overseeing the full IT development lifecycle, from strategic planning to delivery of complex software solutions. Leading cross-functional teams, defining technical strategy, and ensuring projects meet quality, performance, and business goals. Responsible for process improvement, resource management, and stakeholder collaboration.',
    technologies: ['Technical Arhitecture', 'System Integrations', 'DevOps', 'Project & Team Management', 'AWS']
  },
  {
    period: '2024 — Present',
    position: 'Senior Salesforce Developer | Development Team Lead',
    company: 'HSM Informatika',
    url: 'https://www.hsm360.com/hr/',
    description: 'Leading the design and delivery of Salesforce solutions with hands-on Apex, Lightning, and integration development. Responsible for technical architecture, code quality, and aligning solutions with business needs. As Development Team Lead, I coordinate developers, mentor team members, conduct code reviews, and ensure reliable project delivery through structured processes and stakeholder collaboration.',
    technologies: ['Salesforce', 'Apex', 'LWC', 'Asynchronous Apex', 'REST / SOAP APIs', 'CI/CD', 'Middleware solutions', 'Technical Leadership', 'Technical Arhitecture']
  },
  {
    period: '2023 — 2024',
    position: 'Senior Salesforce Developer',
    company: 'ROKO Labs',
    url: 'https://www.rokolabs.com/',
    description: 'Designed and implemented a scalable Salesforce-based recruitment platform for a leading U.S. hedge fund. The project included custom Apex and Lightning development, workflow automation, and integrations with HR and assessment systems, focusing on performance, data security, and a flexible architecture for high-volume recruitment.',
    technologies: ['Salesforce', 'Apex', 'LWC', 'Asynchronous Apex', 'REST / SOAP APIs']
  },
  {
    period: '2022 — 2023',
    position: 'Senior Salesforce Developer',
    company: 'SL Solucije d.o.o.',
    url: 'https://slsolucije.hr/hr',
    description: 'Development and customization of Salesforce solutions using Apex, Lightning, and automation tools, with strong focus on integrations with back-office systems and external services. Responsible for technical design, code quality, and reliable delivery aligned with business needs.',
    technologies: ['Salesforce', 'Apex', 'LWC', 'Aura', 'Visualforce']
  },
  {
    period: '2019 — 2022',
    position: 'Lead Developer',
    company: 'IntechOpen',
    url: 'https://www.intechopen.com/',
    description: 'As Lead Developer, I guided the development team, overseeing complex projects from planning to production. My responsibilities included system architecture, mentoring, code reviews, and ensuring high standards in quality, security, and performance. <br><br> A key focus was implementing and integrating Salesforce with back-office systems, designing custom solutions that automated workflows, improved efficiency, and aligned with business requirements, while managing priorities, timelines, and cross-team collaboration.',
    technologies: ['Symfony', 'PHP', 'Node.js', 'Vue.js', 'GraphQL', 'MySQL', 'Salesforce']
  },
  {
    period: '2016 — 2019',
    position: 'Web Developer',
    company: 'IntechOpen',
    url: 'https://www.intechopen.com/',
    description: 'Development and maintenance of web applications using HTML, CSS, JavaScript, and PHP, with a focus on responsive design, front-end functionality, and basic back-end logic. Assisted in debugging, testing, and improving existing codebases.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
  }
]
</script>

<template>
  <section id="experience" class="px-6 py-24 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <h2 class="sticky font-semibold tracking-widest text-left uppercase lg:text-center text-brand-primary top-24">
            Experience
          </h2>
        </div>
        
        <div class="lg:col-span-2">
          <div class="space-y-12">
            <div
              v-for="(experience, index) in experiences"
              :key="index"
              class="relative grid p-4 pb-1 -mx-4 transition-all rounded-md group sm:grid-cols-8 sm:gap-8 md:gap-4 hover:bg-brand-surface hover:shadow-lg"
            >
              <div class="absolute z-0 hidden transition rounded-md -inset-x-4 -inset-y-4 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-brand-surface lg:group-hover:shadow-lg"></div>
              
              <header class="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide uppercase text-brand-muted sm:col-span-2">
                {{ experience.period }}
              </header>
              
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-brand-primary">
                  <a
                    :href="experience.url"
                    class="inline-flex items-baseline text-base font-medium leading-tight text-brand-primary hover:text-brand-accent focus-visible:text-brand-accent group/link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{{ experience.position }} · {{ experience.company }}</span>
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
                
                <p class="mt-2 text-sm leading-normal text-brand-secondary" v-html="experience.description">
                </p>
                
                <ul class="flex flex-wrap mt-2" aria-label="Technologies used">
                  <li
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="mr-1.5 mt-2"
                  >
                    <div class="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full text-brand-accent-light bg-brand-accent-light">
                      {{ tech }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>