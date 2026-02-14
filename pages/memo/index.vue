<script setup lang="ts">
import { profile } from '~/data/profile'
import { publications } from '~/data/publications'

const { data: articles, error } = await useAsyncData('memo-list', () => 
  queryContent('/memo')
    .sort({ date: -1 })
    .find()
)
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
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8"><Icon name="heroicons:pencil" class="text-primary" /> Memo </h3>
        <div class="space-y-6">
          <article v-for="article in articles" :key="article._path" class="group relative pl-6 border-l-2 border-slate-200 hover:border-primary/80 transition-colors">
            <NuxtLink :to="article._path" class="block py-2">
              <span class="text-sm font-mono text-slate-500">{{ article.date }}</span>
              <h2 class="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mt-1">{{ article.title }}</h2>
              <p class="text-slate-600 mt-2 line-clamp-2 text-sm">{{ article.description }}</p>
            </NuxtLink>
          </article>
          <div v-if="!articles?.length" class="text-slate-500 italic">No memos found.</div>
        </div>
    </section>
  </main>
</template>
