<script setup lang="ts">
// --- プロフィール設定（ここを書き換えてください） ---
const profile = {
  name: "Kosuke Ukita",
  role: "PhD Student (D1) / Researcher",
  affiliation: "Kyushu Institute of Technology",
  email: "ukita.kosuke299[at]mail.kyutech.jp",
  github: "https://github.com/sha-ce",
  twitter: "",
  scholar: "https://scholar.google.com/citations?hl=en&user=rmfjRpEAAAAJ", // Google Scholar
  linkedin: "https://www.linkedin.com/in/ukita000/",
  bio: `
    I am a first-year PhD student at Kyushu Institute of Technology.
    My research interests include Generative AI, Machine Learning and Deep Learning.
    I am passionate about creating ...
  `
}

// --- ニュース/更新情報 ---
const news = [
  { date: "2026-04-01", content: "Started PhD program at Kyushu Institute of Technology." },
  { date: "2026-02-08", content: "Our paper was accepted to PAKDD 2026!" },
  { date: "2026-01-23", content: "Our paper was accepted to AISTATS 2026!" },
]

// --- 論文リスト ---
const publications = [
  {
    title: "Title of Your Outstanding Paper",
    authors: "Your Name, Co-author A, Co-author B",
    venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2026",
    links: [
      { name: "Paper", url: "#" },
      { name: "Code", url: "#" },
    ]
  },
  {
    title: "Another Great Research Work",
    authors: "Co-author A, Your Name, Co-author B",
    venue: "arXiv preprint arXiv:2401.xxxxx",
    year: "2025",
    links: [
      { name: "arXiv", url: "#" },
    ]
  },
]

// --- 受賞歴 ---
const awards = [
  { title: "Best Paper Award", organization: "International Conference on AI", year: "2025" },
  { title: "Dean's List", organization: "University of XXX", year: "2024" },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-900">{{ profile.name }}</h1>
        <nav class="hidden sm:flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#about" class="hover:text-blue-600 transition">About</a>
          <a href="#news" class="hover:text-blue-600 transition">News</a>
          <a href="#publications" class="hover:text-blue-600 transition">Publications</a>
          <a href="#awards" class="hover:text-blue-600 transition">Awards</a>
        </nav>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <section id="about" class="grid md:grid-cols-4 gap-8 items-start">
        <div class="md:col-span-1">
          <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto md:mx-0 overflow-hidden">
             <div class="flex items-center justify-center h-full text-gray-500 text-xs">Photo</div>
          </div>
        </div>
        <div class="md:col-span-3 space-y-4">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">{{ profile.name }}</h2>
            <p class="text-lg text-gray-600">{{ profile.role }}</p>
            <p class="text-gray-500">{{ profile.affiliation }}</p>
          </div>
          <p class="leading-relaxed text-gray-700 whitespace-pre-line">{{ profile.bio }}</p>
          
          <div class="flex space-x-4 pt-2">
            <a v-if="profile.github" :href="profile.github" target="_blank" class="text-gray-600 hover:text-black">GitHub</a>
            <a v-if="profile.scholar" :href="profile.scholar" target="_blank" class="text-gray-600 hover:text-blue-600">Scholar</a>
            <a v-if="profile.twitter" :href="profile.twitter" target="_blank" class="text-gray-600 hover:text-blue-400">X (Twitter)</a>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" class="text-gray-600 hover:text-blue-700">LinkedIn</a>
          </div>
        </div>
      </section>

      <section id="news">
        <h3 class="text-2xl font-bold border-b pb-2 mb-6">News</h3>
        <ul class="space-y-4">
          <li v-for="(item, index) in news" :key="index" class="flex flex-col sm:flex-row sm:gap-6">
            <span class="text-sm text-gray-500 min-w-[100px]">{{ item.date }}</span>
            <span class="text-gray-800">{{ item.content }}</span>
          </li>
        </ul>
      </section>

      <section id="publications">
        <h3 class="text-2xl font-bold border-b pb-2 mb-6">Publications</h3>
        <div class="space-y-8">
          <div v-for="(paper, index) in publications" :key="index">
            <h4 class="text-lg font-semibold text-gray-900">{{ paper.title }}</h4>
            <p class="text-gray-700">{{ paper.authors }}</p>
            <p class="text-gray-600 italic text-sm mb-2">{{ paper.venue }}, {{ paper.year }}</p>
            <div class="flex space-x-3 text-sm">
              <a v-for="link in paper.links" :key="link.name" :href="link.url" class="text-blue-600 hover:underline border border-blue-600 px-2 py-0.5 rounded-sm">
                [{{ link.name }}]
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="awards">
        <h3 class="text-2xl font-bold border-b pb-2 mb-6">Awards & Honors</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-800">
          <li v-for="(award, index) in awards" :key="index">
            <span class="font-semibold">{{ award.title }}</span>, {{ award.organization }} ({{ award.year }})
          </li>
        </ul>
      </section>
    </main>

    <footer class="bg-gray-100 py-8 text-center text-gray-500 text-sm">
      <p>&copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
/* 滑らかなスクロール */
html {
  scroll-behavior: smooth;
}
</style>