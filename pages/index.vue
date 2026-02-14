
<script setup lang="ts">
import { profile } from '~/data/profile'
import { news } from '~/data/news'
import { publications } from '~/data/publications'
import { awards } from '~/data/awards'
import { education } from '~/data/education'

profile.sociels = [
    {name: "GitHub", url: "https://github.com/Kosuke-Ukita", icon: "uil:github", color: "hover:text-gray-300 transition"},
    {name: "Hugging Face", url: "https://huggingface.co/sha-ce", icon: "simple-icons:huggingface", color: "hover:text-yellow-500 transition"},
    {name: "Google Scholar", url: "https://scholar.google.com/citations?user=rmfjRpEAAAAJ", icon: "simple-icons:googlescholar", color: "hover:text-blue-600 transition"},
    {name: "ORCID", url: "https://orcid.org/0009-0008-3325-1363", icon: "simple-icons:orcid", color: "hover:text-green-600 transition"},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/ukita000", icon: "uil:linkedin", color: "hover:text-blue-700 transition"},
    {name: "X", url: "./", icon: "fa6-brands:x-twitter", color: "hover:text-gray-300 transition"},
    {name: "Instagram", url: "./", icon: "simple-icons:instagram", color: "hover:text-pink-500 transition"},
    {name: "YouTube", url: "./", icon: "simple-icons:youtube", color: "hover:text-red-500 transition"},
]
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-100">
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-20">
      
      <section id="about" class="grid md:grid-cols-12 gap-10 items-center scroll-mt-24">
        <div class="md:col-span-4 flex justify-center md:justify-start">
          <div class="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-3 hover:rotate-0 transition duration-500">
            <img src="/assets/photo.png" alt="Profile" class="w-full h-full object-cover bg-slate-200" 
                 onerror="this.onerror=null; this.src='https://placehold.co/400x400?text=Photo'"/>
          </div>
        </div>
        
        <div class="md:col-span-8 space-y-5">
          <div>
            <h1 class="text-2xl md:text-2xl font-extrabold text-slate-800 tracking-tight mb-2">{{ profile.name }}</h1>
            <p class="text-xl font-bold">浮田 嵩祐</p>
            <p class="text-xl text-orange-600 font-medium">{{ profile.role }}</p>
            <p class="text-slate-500 flex items-center gap-2"><Icon name="heroicons:building-library" /> {{ profile.affiliation }}</p>
            <p class="text-slate-500 flex items-center gap-2"><Icon name="heroicons:map-pin" />Fukuoka, Japan</p>
          </div>
          
          <p class="leading-relaxed text-slate-600 whitespace-pre-line text-lg">{{ profile.bio }}</p>
          
          <div class="flex flex-wrap gap-3 pt-2">
            <a :href="`mailto:${profile.email}`" class="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition text-sm font-medium"><Icon name="heroicons:envelope" class="w-4 h-4" /> Email : {{ profile.email }} </a>
          </div>
          <div class="flex flex-wrap gap-3 pt-2">
            <a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700" :class="social.color">
              <Icon :name="social.icon" class="w-4 h-4" :class="social.color" />{{ social.name }}
            </a>
          </div>
        </div>
      </section>

      <section id="news" class="scroll-mt-24">
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6"><Icon name="heroicons:megaphone" class="text-orange-500" /> News </h3>
        <div class="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div v-for="(item, index) in news" :key="index" 
               class="p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition">
            <span class="text-sm font-mono text-slate-500 min-w-[100px]">{{ item.date }}</span>
            <span class="text-slate-800">{{ item.content }}</span>
          </div>
        </div>
      </section>

      <section id="publications" class="scroll-mt-24">
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8"><Icon name="heroicons:book-open" class="text-orange-500" /> Publications </h3>
        <p class="text-sm text-slate-500 mb-4">Recent 3 publications</p>
        
        <div class="space-y-2">
          <article v-for="(paper, index) in publications.slice(0, 3)" :key="index"
                class="flex flex-col group px-6 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300">
                
                <div class="space-y-1 mb-2">
                  <h4 class="text-l font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                  {{ paper.title }}
                  </h4>
                  <div class="text-slate-500 text-base">
                  {{ paper.authors }}
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
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
          <Icon name="heroicons:trophy" class="text-orange-500" /> Awards
        </h3>
        
        <div class="space-y-4">
          <div v-for="(award, index) in awards" :key="index" 
               class="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-orange-200 hover:shadow-md transition flex items-center gap-4">
            
            <div class="p-3 bg-yellow-50 text-yellow-600 rounded-lg shrink-0">
               <Icon :name="award.icon" class="w-6 h-6" />
            </div>
            
            <div>
              <p class="font-bold text-slate-900 text-lg leading-tight">{{ award.title }}</p>
              <div class="flex flex-wrap items-center gap-x-2 text-slate-600 mt-1">
                <span>{{ award.organization }}</span>
                <span class="text-slate-300 hidden sm:inline">|</span>
                <span class="text-slate-500 text-sm">{{ award.year }}</span>
              </div>
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