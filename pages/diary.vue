<script setup lang="ts">
import { profile } from '~/data/profile'
import { publications } from '~/data/publications'
import { ref, onMounted } from 'vue'

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS9vAb9jwdZXkzX8wdZIFzCl3TQRk8wqj1VqVEidr17coW2oCyRYlpMVKbn-KKuZMrCzzD_cjKnPVIG/pub?gid=0&single=true&output=csv'

// 日記データの型定義
type DiaryEntry = {
  date: string
  title: string
  content: string
}

const diaryEntries = ref<DiaryEntry[]>([])
const loading = ref(true)

const parseCSV = (csvText: string): DiaryEntry[] => {
  const lines = csvText.trim().split('\n')
  const headers = lines[0].split(',')
  
  return lines.slice(1).map(line => {
    const values = line.split(',')
    
    if (values.length < 3) return null

    // Date, Titleはそのまま、Contentは残りの部分を結合（本文にカンマがある場合への簡易対策）
    const date = values[0].trim()
    const title = values[1].trim()
    const content = values.slice(2).join(',').trim() // 3列目以降を結合

    return { date, title, content }
  }).filter((entry): entry is DiaryEntry => entry !== null) // nullを除外
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 日付の新しい順にソート
}

// マウント時にデータを取得
onMounted(async () => {
  try {
    const response = await fetch(SHEET_URL)
    const text = await response.text()
    diaryEntries.value = parseCSV(text)
  } catch (error) {
    console.error('Failed to fetch diary:', error)
  } finally {
    loading.value = false
  }
})
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
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8"><Icon name="heroicons:pencil" class="text-orange-500" /> Diary </h3>

    <div v-if="loading" class="text-center py-10 text-slate-500">
      Loading...
    </div>

    <div v-else class="space-y-10">
      <article v-for="(entry, index) in diaryEntries" :key="index" class="relative pl-8 border-l-2 border-slate-200">
        <span class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-orange-400"></span>
        
        <div class="mb-1">
          <span class="text-sm font-mono text-slate-500">{{ entry.date }}</span>
          <h2 class="text-xl font-bold text-slate-900 mt-1">{{ entry.title }}</h2>
        </div>
        
        <p class="text-slate-600 leading-relaxed whitespace-pre-wrap mt-3">
          {{ entry.content }}
        </p>
      </article>
    </div>
  </section>

  </main>
</template>