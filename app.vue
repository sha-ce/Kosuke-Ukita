<script setup lang="ts">
import { profile } from '~/data/profile'
import { news } from '~/data/news'
import { publications } from '~/data/publications'
import { awards } from '~/data/awards'
import { education } from '~/data/education'
import { skills } from '~/data/skills'
</script>

<template>
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-6 h-12 flex justify-between items-center">
        <NuxtLink to="/" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:user"/> Kosuke Ukita </NuxtLink>
        <nav class="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <NuxtLink to="/" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:home"/> Home </NuxtLink>
          <NuxtLink to="/publications" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:book-open"/> Pubilcations </NuxtLink>
          <NuxtLink to="/cv" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:document-text"/> CV </NuxtLink>
        </nav>
        <button class="md:hidden text-slate-600"><Icon name="heroicons:bars-3" class="w-6 h-6" /></button>
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
            <Icon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>

      </div>

      <div class="text-center text-slate-400 text-xs mt-8">&copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved. </div>
    </footer>
</template>