<script setup lang="ts">
import { profile } from '~/data/profile'
import { news } from '~/data/news'
import { publications } from '~/data/publications'
import { awards } from '~/data/awards'

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

// SEO
useSeoMeta({
  title: 'Kosuke Ukita',
  ogTitle: 'Kosuke Ukita',
  description: profile.bio,
  ogDescription: profile.bio,
  ogImage: 'https://Kosuke-Ukita.github.io/Kosuke-Ukita/public/assets/photo.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  meta: [{ name: 'google-site-verification', content: 'Vueua9w0ImvYpxqfLC-2PPndYTAHZ6YKxhlPQ-p2F30' }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'Kosuke Ukita';
  }
})
</script>

<template>
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-6 h-12 flex justify-between items-center">
        
        <NuxtLink to="/" class="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2 hover:text-primary transition" @click="closeMenu">
          <div class="w-5 h-5 rounded-lg overflow-hidden">
            <img src="/favicon.ico" alt="cat" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/16x16?text=cat'"/>
          </div>
          {{ profile.name }}
        </NuxtLink>
        
        <nav class="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <NuxtLink to="/" class="hover:text-primary transition flex items-center gap-1"><Icon name="heroicons:home" class="w-4 h-4" /> Home </NuxtLink>
          <NuxtLink to="/cv" class="hover:text-primary transition flex items-center gap-1"><Icon name="heroicons:document-text" class="w-4 h-4" /> CV </NuxtLink>
          <NuxtLink to="/publications" class="hover:text-primary transition flex items-center gap-1"><Icon name="heroicons:book-open" class="w-4 h-4" /> Publications </NuxtLink>
          <NuxtLink to="/memo" class="hover:text-primary transition flex items-center gap-1"><Icon name="heroicons:pencil" class="w-4 h-4" /> Memo </NuxtLink>
          <NuxtLink to="/programs" class="hover:text-primary transition flex items-center gap-1"><Icon name="heroicons:command-line" class="w-4 h-4" /> Programs </NuxtLink>
        </nav>

        <button @click="toggleMenu" class="md:hidden text-slate-600 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition">
          <Icon v-if="isMenuOpen" name="heroicons:x-mark" class="w-4 h-4 flex items-center justify-center" />
          <Icon v-else name="heroicons:bars-3" class="w-4 h-4 flex items-center justify-center" />
        </button>
      </div>

      <div v-show="isMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg">
        <nav class="flex flex-col p-4 space-y-2 text-slate-600 font-medium">
          <NuxtLink to="/" @click="closeMenu" class="block py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition flex items-center gap-2"><Icon name="heroicons:home" class="w-5 h-5" /> Home </NuxtLink>
          <NuxtLink to="/cv" @click="closeMenu" class="block py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition flex items-center gap-2"><Icon name="heroicons:document-text" class="w-5 h-5" /> CV </NuxtLink>
          <NuxtLink to="/publications" @click="closeMenu" class="block py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition flex items-center gap-2"><Icon name="heroicons:book-open" class="w-5 h-5" /> Publications </NuxtLink>
          <NuxtLink to="/memo" @click="closeMenu" class="block py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition flex items-center gap-2"><Icon name="heroicons:pencil" class="w-5 h-5" /> Memo </NuxtLink>
          <NuxtLink to="/programs" @click="closeMenu" class="block py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition flex items-center gap-2"><Icon name="heroicons:command-line" class="w-5 h-5" /> Programs </NuxtLink>
        </nav>
      </div>
    </header>

    <NuxtPage />

    <footer class="bg-slate-100 border-t border-slate-200 py-12 mt-12">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div class="text-center md:text-left">
          <p class="font-bold text-slate-700 text-lg">{{ profile.name }}</p>
          <div class="flex items-center gap-2">
            <div class="w-4 h-4 rounded-lg overflow-hidden">
                <img src="/favicon.ico" alt="cat" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/16x16?text=cat'"/>
            </div>
            <p class="text-slate-500 text-sm mt-1">I love cats.</p>
          </div>
        </div>
        
        <div class="flex gap-6">
          <a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank" class="text-slate-400" :class="social.color">
            <Icon :name="social.icon" class="w-4 h-4" />
          </a>
        </div>

      </div>

      <div class="text-center text-slate-400 text-xs mt-8">&copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved. </div>
    </footer>
</template>


<style>
@import 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>