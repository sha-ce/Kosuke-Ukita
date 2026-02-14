
<script setup lang="ts">
import { profile } from '~/data/profile'
import { publications } from '~/data/publications'
import { awards } from '~/data/awards'
import { education } from '~/data/education'
import { experience } from '~/data/experience'
import { others } from '~/data/others'

const highlightAuthor = (authors: string) => {
  return authors
    .replace(/Kosuke Ukita/g, `<span class="underline">Kosuke Ukita</span>`)
    .replace(/浮田嵩祐/g, `<span class="underline">浮田嵩祐</span>`);
}
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-100">
    <main class="max-w-4xl mx-auto px-6 py-12 space-y-16">
    <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-4"><Icon name="heroicons:document-text" class="text-orange-500" /> CV </h3>
    
    <header class="flex flex-col sm:flex-row gap-8 items-start border-b-2 border-slate-100 pb-2">
      <div class="w-32 h-32 rounded-lg overflow-hidden border border-slate-200 shadow-xl shrink-0">
         <img src="/assets/photo.png" alt="Profile" class="w-full h-full object-cover" 
              onerror="this.onerror=null; this.src='https://placehold.co/300x400?text=Photo'"/>
      </div>

      <div class="flex-1 space-y-2">
        <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">
          {{ profile.name }}
        </h1>
        
        <div class="text-slate-500 space-y-1">
          <p class="text-base font-bold text-orange-500">MSc student (M2), full-time </p>
          <p class="text-slate-500 flex items-center gap-2"><Icon name="heroicons:building-library" /> {{ profile.affiliation }} </p>
          <p class="text-sm">Gender: Male</p>
          <p class="text-sm">Nationality: Japanese</p>
        </div>

        <div class="flex flex-wrap gap-4 text-sm text-slate-500 py-2">
          <span class="flex items-center gap-1">
            <Icon name="heroicons:envelope" /> {{ profile.email }}
          </span>
          <a :href="profile.socials.find(s => s.name === 'GitHub')?.url" target="_blank" class="flex items-center gap-1 hover:text-orange-600"><Icon name="uil:github" /></a>
          <a :href="profile.socials.find(s => s.name === 'Scholar')?.url" target="_blank" class="flex items-center gap-1 hover:text-orange-600"><Icon name="simple-icons:googlescholar" /></a>
          <a :href="profile.socials.find(s => s.name === 'LinkedIn')?.url" target="_blank" class="flex items-center gap-1 hover:text-orange-600"><Icon name="simple-icons:linkedin" /></a>
        </div>
      </div>
    </header>

      <section id="education" class="scroll-mt-24">
        <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
          <Icon name="heroicons:academic-cap" class="text-orange-500" /> Education
        </h3>
        
        <div class="space-y-4 border-l-2 border-slate-100 ml-3 pl-4 relative">
          <div v-for="(edu, index) in education" :key="index" class="relative">
            <span class="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 shadow-sm"></span>
            
            <h4 class="text-lg font-bold text-slate-900">{{ edu.degree }}</h4>
            <p class="text-slate-700">{{ edu.school }}</p>
            <p class="text-sm text-slate-500 mt-1">{{ edu.year }}</p>
            <p v-if="edu.description" class="text-sm text-slate-600 mt-2 bg-slate-50 inline-block px-2 py-1 rounded">
              {{ edu.description }}
            </p>
          </div>
        </div>
      </section>

      <section id="experience" class="scroll-mt-24">
        <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
          <Icon name="heroicons:shopping-bag" class="text-orange-500" /> Work Experience
        </h3>
        
        <div class="space-y-4 border-l-2 border-slate-100 ml-3 pl-4 relative">
          <div v-for="(exp, index) in experience" :key="index" class="relative">
            <span class="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-orange-500 shadow-sm"></span>
            
            <h4 class="text-lg font-bold text-slate-900">{{ exp.name }}</h4>
            <p class="text-sm text-slate-500 mt-1">{{ exp.year }}</p>
            <p v-if="exp.description1" class="text-sm text-slate-600 mt-2 bg-slate-50 inline-block px-2 py-1 rounded">{{ exp.description1 }}</p>
            <p v-if="exp.description2" class="text-sm text-slate-600 mt-2 bg-slate-50 inline-block px-2 py-1 rounded">{{ exp.description2 }}</p>
          </div>
        </div>
      </section>

      <section id="publications" class="scroll-mt-24">
        <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4"><Icon name="heroicons:book-open" class="text-orange-500" /> Publications </h3>
        
        <div class="space-y-2">
          <article v-for="(paper, index) in publications" :key="index" 
                   class="flex flex-col group px-6 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300">
            
            <div class="space-y-1 mb-2">
              <h4 class="text-l font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
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
                  <span v-if="paper.type" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                    {{ paper.type }}
                  </span>
                  <span v-if="paper.note" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                    {{ paper.note }}
                  </span>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-x-2 gap-y-2 mt-2 text-sm text-slate-500">
                <a v-for="link in paper.links" :key="link.name" :href="link.url" 
                  class="flex items-center gap-2 text-sm font-bold text-slate-700 border border-slate-300 px-2 py-1 rounded-lg hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition bg-slate-50">
                  <Icon :name="link.icon" class="w-4 h-4" />
                  {{ link.name }}
                </a>
              </div>
            </div>

          </article>
        </div>
      </section>

      <section id="awards" class="scroll-mt-24">
        <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
          <Icon name="heroicons:trophy" class="text-orange-500" /> Awards
        </h3>
        
        <div class="space-y-4">
          <div v-for="(award, index) in awards" :key="index" 
               class="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-orange-200 hover:shadow-md transition flex items-center gap-4">
            
            <div class="p-3 bg-yellow-50 text-yellow-600 rounded-lg shrink-0">
               <Icon :name="award.icon" class="w-6 h-6" />
            </div>
            
            <div>
              <p class="font-bold text-slate-900 text-sm leading-tight">{{ award.title }}</p>
              <div class="flex flex-wrap items-center gap-x-2 text-sm text-slate-600 mt-1">
                <span>{{ award.organization }}</span>
                <span class="text-slate-300 hidden sm:inline">|</span>
                <span class="text-slate-500 text-sm">{{ award.year }}</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section id="others" class="scroll-mt-24">
        <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
          <Icon name="heroicons:cpu-chip" class="text-orange-500" /> Others
        </h3>
        
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="(otherGroup, index) in others" :key="index" class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
              {{ otherGroup.category }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in otherGroup.items" :key="item" 
                    class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<style>
/* カスタムスクロールバー（Webkit系ブラウザ用） */
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