<script setup lang="ts">
import { profile } from '~/data/profile'
import { programs } from '~/data/programs'
</script>

<template>
  <main class="max-w-5xl mx-auto px-6 py-10">
    
    <div class="flex items-center gap-6 mb-12 border-b border-slate-100 pb-8">
      <div class="w-20 h-20 rounded-full overflow-hidden shadow-xl border-2 border-slate-100 shrink-0">
        <img src="/assets/photo.jpg" alt="Profile" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/200x200?text=Photo'"/>
      </div>
      
      <div>
        <h1 class="text-2xl font-bold text-slate-900">{{ profile.name }}</h1>
        <p class="text-slate-500 text-sm flex items-center gap-2"><Icon name="heroicons:academic-cap" /> {{ profile.role }}</p>
      </div>
    </div>
    <section id="programs" class="scroll-mt-24">
      <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8"><Icon name="heroicons:command-line" class="text-primary" /> Programs </h3>

      <div class="grid gap-6">
      <div v-for="program in programs" :key="program.id" class="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-primary/60 hover:shadow-lg transition-shadow group">
      <a :href="program.url" target="_blank" rel="noopener noreferrer" class="block transition-colors">
      <div class="relative w-full overflow-hidden">
      <div v-if="program.thumbnail" class="absolute inset-0 bg-slate-100"><img :src="program.thumbnail" :alt="program.title" class="w-full h-full object-cover opacity-20" /></div>
      <div class="relative p-6 h-full flex flex-col justify-between">
        <div>
        <div class="flex items-start justify-between mb-3">
          <h4 class="text-2xl font-semibold text-slate-900 group-hover:text-primary transition-colors">{{ program.title }}</h4>
          <a :href="program.githubUrl" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-primary transition-colors" @click.stop>
          <Icon name="mdi:github" class="w-6 h-6" />
          </a>
        </div>
        <p class="text-sm text-slate-600 mb-4">{{ program.description }}</p>
        </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in program.tags" :key="tag" class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
        {{ tag }}
        </span>
      </div>
      </div>
      </div>
      </a>
      </div>
      </div>
    </section>

  </main>
</template>