<script setup lang="ts">
import { profile } from '~/data/profile'
import { publications } from '~/data/publications'

const highlightAuthor = (authors: string) => {
  return authors
    .replace(/Kosuke Ukita/g, `<span class="underline">Kosuke Ukita</span>`)
    .replace(/浮田嵩祐/g, `<span class="underline">浮田嵩祐</span>`);
}
</script>

<template>
  <main class="max-w-5xl mx-auto px-6 py-10">
    
    <div class="flex items-center gap-6 mb-12 border-b border-slate-100 pb-8">
      <div class="w-20 h-20 rounded-full overflow-hidden shadow-xl border-2 border-slate-100 shrink-0">
        <img src="/assets/photo.png" alt="Profile" class="w-full h-full object-cover" 
             onerror="this.onerror=null; this.src='https://placehold.co/200x200?text=Photo'"/>
      </div>
      
      <div>
        <h1 class="text-2xl font-bold text-slate-900">{{ profile.name }}</h1>
        <p class="text-slate-500 text-sm flex items-center gap-2"><Icon name="heroicons:academic-cap" /> {{ profile.role }}</p>
      </div>
    </div>
    <section id="publications" class="scroll-mt-24">
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8"><Icon name="heroicons:book-open" class="text-primary" /> Publications </h3>
        
        <div class="space-y-2">
          <article v-for="(paper, index) in publications" :key="index" 
                   class="flex flex-col group px-6 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300">
            
            <div class="space-y-1 mb-2">
              <h4 class="text-l font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                {{ paper.title }}
              </h4>
              <div class="text-slate-500 text-base">
                <span v-html="highlightAuthor(paper.authors)"></span>
              </div>
              <div class="font-semibold text-slate-900 italic">
                {{ paper.venue }}
              </div>
            </div>

            <div class="border-t border-slate-100 pt-1 mb-1">
              <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <span class="flex items-center gap-1.5">
                  <Icon name="heroicons:calendar" class="w-4 h-4 text-slate-400" />
                  {{ paper.date }}
                </span>
                <span class="flex items-center gap-1.5" v-if="paper.location">
                  <Icon name="heroicons:map-pin" class="w-4 h-4 text-slate-400" />
                  {{ paper.location }}
                </span>
                <div class="flex gap-2">
                  <span v-if="paper.type" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/5 text-primary border border-primary/10">
                    {{ paper.type }}
                  </span>
                  <span v-if="paper.note" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                    {{ paper.note }}
                  </span>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-x-2 gap-y-2 mt-2 text-sm text-slate-500">
                <a v-for="link in paper.links" :key="link.name" :href="link.url" 
                  class="flex items-center gap-2 text-sm font-bold text-slate-700 border border-slate-300 px-2 py-1 rounded-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition bg-slate-50">
                  <Icon :name="link.icon" class="w-4 h-4" />
                  {{ link.name }}
                </a>
              </div>
            </div>

          </article>
        </div>
      </section>

  </main>
</template>