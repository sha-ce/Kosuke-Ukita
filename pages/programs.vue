<script setup lang="ts">
import { profile } from '~/data/profile'
import { programs } from '~/data/programs'
</script>

<template>
  <main class="max-w-5xl mx-auto">
    
    <div class="flex items-center gap-6 mb-12 border-b border-slate-100 pt-10 pb-8 px-6">
      <div class="w-20 h-20 rounded-full overflow-hidden shadow-xl shrink-0">
        <img src="/assets/photo.jpg" alt="Profile" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/200x200?text=Photo'"/>
      </div>
      
      <div>
        <h1 class="text-2xl font-bold text-slate-900">{{ profile.name }}</h1>
        <p class="text-slate-500 text-sm flex items-center gap-2"><Icon name="heroicons:academic-cap" /> {{ profile.role }}</p>
      </div>
    </div>
    <section id="programs" class="scroll-mt-24 pb-10">
      <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8 px-6"><Icon name="heroicons:command-line" class="text-primary" /> Programs </h3>

      <div v-for="program in programs" :key="program.id" class="overflow-hidden relative group">
        <div v-if="program.thumbnail" class="absolute inset-0 -z-10 width=100%">
          <img :src="program.thumbnail" :alt="program.title" class="w-full h-full object-cover opacity-50 scale-100" />
        </div>
        
        <div class="relative px-8 py-4 flex flex-col gap-3">
          <div class="flex flex-col gap-8 p-6 rounded-lg bg-white/5 backdrop-blur-none border border-white/20 shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.15)] group-hover:backdrop-blur-sm transition-all duration-300">
            <div class="flex items-start justify-between">
              <a :href="program.url" target="_blank" rel="noopener noreferrer" class="block">
                <h4 class="text-xl font-semibold text-black text-shadow-md underline group-hover:drop-shadow-lg hover:text-primary transition-all duration-300">{{ program.title }}</h4>
              </a>
              <a :href="program.githubUrl" target="_blank" rel="noopener noreferrer" class="text-black/80 hover:text-primary transition-colors drop-shadow-md ml-3 shrink-0" @click.stop><Icon name="mdi:github" class="w-6 h-6" /></a>
            </div>
            <p class="text-sm text-black/80 text-shadow-md leading-relaxed group-hover:text-shadow-lg group-hover:text-black transition-all duration-300">{{ program.description }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>