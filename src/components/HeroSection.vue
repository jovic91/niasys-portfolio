<script setup>
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'CodePen', href: 'https://codepen.io', icon: 'codepen' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' }
]
</script>

<template>
  <section class="relative flex flex-col justify-center min-h-screen px-6 lg:px-8">    
    <div class="relative z-10 max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      <div class="text-left">
        <div class="flex justify-center mb-8">
          <img 
            src="/hero-image2.png" 
            alt="Your Logo" 
            class="object-contain w-auto h-32"
          />
        </div>
        
      </div>
    </div>
  </section>
</template>