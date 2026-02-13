<script setup lang="ts">
const config = useRuntimeConfig()
const base = config.app.baseURL

// --- profile ---
const profile = {
  name: "Kosuke Ukita",
  role: "MSc / Researcher",
  affiliation: "Kyushu Institute of Technology",
  email: "ukita.kosuke299[at]mail.kyutech.jp", 
  socials: [
    { 
      name: "GitHub", 
      url: "https://github.com/Kosuke-Ukita", 
      icon: "uil:github", 
      color: "hover:text-gray-900" 
    },
    { 
      name: "Hugging Face", 
      url: "https://huggingface.co/sha-ce", 
      icon: "simple-icons:huggingface",
      color: "hover:text-yellow-500" 
    },
    { 
      name: "Google Scholar", 
      url: "https://scholar.google.com/citations?user=rmfjRpEAAAAJ", 
      icon: "simple-icons:googlescholar", 
      color: "hover:text-blue-600" 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/ukita000", 
      icon: "uil:linkedin", 
      color: "hover:text-blue-700" 
    },
    { 
      name: "X", 
      url: "./", 
      icon: "fa6-brands:x-twitter", 
      color: "hover:text-black" 
    },
  ],

  bio: `
    どうも．浮田 嵩祐です．AIに関する研究をしている大学院生です．
    生成AIの効率化や基礎理論(e.g. grokking)に興味があります．
    Department of Creative Informatics, Graduate School of Computer Science and Systems Engineering.
  `
}

// --- news ---
const news = [
  { date: "2026-02-08", content: "我々の論文が，国際会議PAKDD2026にOral presentationとして採択されました．" },
  { date: "2026-01-23", content: "我々の論文が，国際会議AISTATS2026にSpotlight presentation (Top 3%)として採択されました．" },
]

// --- publications ---
const publications = [
  {
    title: "Efficient Inference for Flow Matching via Unified Path CFG",
    authors: "*Kosuke Ukita* and Tsuyoshi Okita",
    venue: "The 30th Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD 2026)",
    date: "June 2026",
    location: "Hong Kong, China",
    type: "Oral",
    note: "Refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "#", icon: "heroicons:document-duplicate" },
      { name: "Code", url: "#", icon: "heroicons:code-bracket" },
    ]
  },
  {
    title: "High-Performance Self-Supervised Representation Learning by Joint Training of Flow Matching and Representation Encoder",
    authors: "*Kosuke Ukita* and Tsuyoshi Okita",
    venue: "The 29th International Conference on Artificial Intelligence and Statistics (AISTATS 2026)",
    date: "May 2026",
    location: "Tangier, Morocco",
    type: "Spotlight",
    note: "Refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://openreview.net/forum?id=yW5dvLytON", icon: "heroicons:document-text" },
      { name: "Code", url: "#", icon: "heroicons:code-bracket" },
      { name: "Arxiv", url: "https://arxiv.org/abs/2512.19729", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "Foundation Models to Tackle Activity Recognition in Unknown Domain: Sussex-Huawei Locomotion Challenge 2025 Task 2",
    authors: "Tsuyoshi Okita, *Kosuke Ukita*, Asahi Miyazaki, Daichi Kubota, Jukichi Ota, Naoki Kagiyama, Asahi Nishikawa, Nagayasu Daichi, Syunya Tomitaka, Daisuke Nozaki, Yuki Odo, Raku Yamashita, Xiaolong Ye, Huayu Gao, Kazuki Okahashi, Koki Matsuishi, Masaharu Kagiyama, Kodai Hirata, Haruki Kai, Lin Wang, Hristijan Gjoreski, Mathias Ciliberto, Paula Lago, Kazuya Murao, Daniel Roggen",
    venue: "Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp Companion '25), pp. 983–991",
    date: "October 2025",
    location: "Espoo, Finland",
    type: "Oral",
    note: "Refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://dl.acm.org/doi/10.1145/3714394.3756203", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "Multimodal Foundation Model for Cross-Modal Retrieval and Activity Recognition Tasks",
    authors: "Koki Matsuishi, *Kosuke Ukita*, Tsuyoshi Okita",
    venue: "International Journal of Activity and Behavior Computing (IJABC), Care XDX Center, Kyushu Institute of Technology, Vol. 2025, No. 3, pp. 1-25",
    date: "November 2025",
    location: "Kitakyushu, Japan",
    type: "Oral",
    note: "Refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://www.jstage.jst.go.jp/article/ijabc/2025/3/2025_124/_article/-char/en", icon: "heroicons:document-text" },
      { name: "Arxiv", url: "https://arxiv.org/abs/2506.03174", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "Energy-Efficient High-Performance Represen-tation Learning for Sensor Data via Flow Matching",
    authors: "*Kosuke Ukita* and Tsuyoshi Okita",
    venue: "The 7th International Symposium on Neuromorphic AI Hardware, Paper No. P-19",
    date: "October 2025",
    location: "Kitakyushu, Japan",
    type: "Poster",
    note: "Non-refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://www.dropbox.com/scl/fi/i3yjkrd9lqaybflfzmlss/Poster-Session.xlsx?rlkey=0bntd96bmxtje3f0r04w6yeat&e=1&st=rdyvop6k&dl=0", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "Image Classification Using a Diffusion Model as a PreTraining Model",
    authors: "*Kosuke Ukita*, Xiaolong Ye, Tsuyoshi Okita",
    venue: "arXiv preprint arXiv:2505.06890",
    date: "May 2025",
    location: "",
    type: "Preprint",
    note: "Non-refeered",
    tags: [""],
    links: [
      { name: "Arxiv", url: "https://arxiv.org/abs/2505.06890", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "AURA-MFM: 詳細な行動理解のためのCLIPを用いたマルチモーダル基盤モデルの構築",
    authors: "松石康希，*浮田嵩祐*，大北剛",
    venue: "情報処理学会研究報告(IPSJ SIG Technical Report), Vol. 2025-UBI-85, No. 8",
    date: "February 2025",
    location: "Osaka, Japan",
    type: "Oral",
    note: "Non-refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://kyutech.repo.nii.ac.jp/record/2001921/files/10463229.pdf", icon: "heroicons:document-text" },
      { name: "Workshop", url: "https://mbl.ipsj.or.jp/program/2025/114/", icon: "heroicons:building-library" },
    ]
  },
  {
    title: "Improving Human Activity Recognition through Diffusion Models",
    authors: "*Kosuke Ukita* and Tsuyoshi Okita",
    venue: "The International Symposium on Applied Engineering and Sciences (SAES2024), No. p0052",
    date: "November 2024",
    location: "Kitakyushu, Japan",
    type: "Oral",
    note: "Non-refeered",
    tags: [""],
    links: [
      { name: "Workshop", url: "https://conferenceservice.jp/www/saes2024/", icon: "heroicons:building-library" },
    ]
  },
  {
    title: "Ensemble Learning of Models for Human Activity Recognition",
    authors: "Asahi Miyazaki, *Kosuke Ukita*, Tsuyoshi Okita",
    venue: "The International Symposium on Applied Engineering and Sciences (SAES2024), No. p0053",
    date: "November 2024",
    location: "Kitakyushu, Japan",
    type: "Oral",
    note: "Non-refeered",
    tags: [""],
    links: [
      { name: "Workshop", url: "https://conferenceservice.jp/www/saes2024/", icon: "heroicons:building-library" },
    ]
  },
  {
    title: "Analysis of Human Activity Recognition by Diffusion Models",
    authors: "*Kosuke Ukita* and Tsuyoshi Okita",
    venue: "Companion of the 2024 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp '24), pp. 458–463",
    date: "October 2024",
    location: "Melbourne, Australia",
    type: "Oral",
    note: "Refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://dl.acm.org/doi/10.1145/3675094.3678439", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "表現条件付き潜在拡散モデルと表現学習",
    authors: "*浮田嵩祐*，Ye Xiaolong，大北剛",
    venue: "火の国情報シンポジウム 2024, No. A4-4",
    date: "March 2024",
    location: "Kagoshima, Japan",
    type: "Oral",
    note: "Non-refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://www.ipsj-kyushu.jp/page/ronbun/hinokuni/1013/Papers/A4-4.pdf", icon: "heroicons:document-text" },
    ]
  },
  {
    title: "Towards LLMs for Sensor Data: Multi-Task Self-Supervised Learning",
    authors: "Tsuyoshi Okita, *Kosuke Ukita*, Koki Matsuishi, Masaharu Kagiyama, Kodai Hirata, Asahi Miyazaki",
    venue: "Adjunct Proceedings of the 2023 ACM International Joint Conference on Pervasive and Ubiquitous Computing & the 2023 ACM International Symposium on Wearable Computing (UbiComp/ISWC '23 Adjunct), pp. 499–504",
    date: "Octover 2023",
    location: "Cancun, Mexico",
    type: "Oral",
    note: "Refeered",
    tags: [""],
    links: [
      { name: "Paper", url: "https://dl.acm.org/doi/10.1145/3594739.3610745", icon: "heroicons:document-text" },
      { name: "Code", url: "https://github.com/Okita-Laboratory/SENvT", icon: "heroicons:code-bracket" },
    ]
  },
]

// --- awards ---
const awards = [
  {
    title: "Spotlight Presentation (Top 3% of submissions)",
    organization: "The 29th Annual Conference on Artificial Intelligence and Statistics (AISTATS 2026)",
    year: "May 2026", icon: "heroicons:ticket" 
  },
  { 
    title: "Incentive Award (奨励賞)", 
    organization: "IPSJ Kyushu Branch (情報処理学会九州支部)", 
    year: "March 2024", icon: "heroicons:academic-cap" 
  },
  { 
    title: "Highest Award (最優秀賞)", 
    organization: "The 8th Sports Data Analysis Competition", 
    year: "May 2019", icon: "heroicons:academic-cap" 
  },
]

// --- education ---
const education = [
  { 
    degree: "PhD in Creative Informatics", 
    school: "Kyushu Institute of Technology, Graduate School of Computer Science and Systems Engineering", 
    year: "Apr. 2026 - Present", 
    description: "Advisor: Assoc. Prof. Tsuyoshi Okita" 
  },
  { 
    degree: "MSc in Creative Informatics", 
    school: "Kyushu Institute of Technology, Graduate School of Computer Science and Systems Engineering", 
    year: "Apr. 2024 - Mar. 2026", 
    description: "GPA: 3.6 / 4.0" 
  },
  { 
    degree: "BSc in Intelligent Control Systems", 
    school: "Kyushu Institute of Technology, Computer Science and Systems Engineering", 
    year: "Apr. 2020 - Mar. 2024", 
    description: "GPA: 3.7 / 4.0" 
  },
  { 
    degree: "High School Diploma", 
    school: "Kanonji Daiichi High School, Science and Mathematics Course", 
    year: "Apr. 2017 - Mar. 2020", 
    description: "GPA: 5.0 / 5.0" 
  },
]

// --- skills ---
const skills = [
  { category: "Research Interests", items: ["Generative AI", "Flow Matching", "Foundation Models", "Multimodal Learning", "Diffusion Models", "Machine Learning", "Deep Learning"] },
  { category: "Languages", items: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL", "R"] },
  { category: "Frameworks & Tools", items: ["PyTorch", "Docker", "Git", "ABCI (HPC)"] },
]
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-100">
    
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">{{ profile.name }}</a>
        
        <nav class="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#about" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:user" /> About </a>
          <a href="#news" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:newspaper" /> News </a>
          <a href="#publications" class="hover:text-orange-600 transition flex items-center gap-1"><Icon name="heroicons:book-open" /> Publications </a>
          <a href="#awards" class="hover:text-orange-600 transition"><Icon name="heroicons:trophy" /> Awards </a>
          <a href="#education" class="hover:text-orange-600 transition"><Icon name="heroicons:academic-cap" /> Education </a>
          <a href="#skills" class="hover:text-orange-600 transition"><Icon name="heroicons:cpu-chip" /> Skills </a>
        </nav>

        <button class="md:hidden text-slate-600">
          <Icon name="heroicons:bars-3" class="w-6 h-6" />
        </button>
      </div>
    </header>

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
            <h1 class="text-2xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              {{ profile.name }}
            </h1>
            <p class="text-xl font-bold">浮田 嵩祐</p>
            <p class="text-xl text-orange-600 font-medium">{{ profile.role }}</p>
            <p class="text-slate-500 flex items-center gap-2"><Icon name="heroicons:building-library" /> {{ profile.affiliation }}</p>
            <p class="text-slate-500 flex items-center gap-2"><Icon name="heroicons:map-pin" />Japan</p>
          </div>
          
          <p class="leading-relaxed text-slate-600 whitespace-pre-line text-lg">
            {{ profile.bio }}
          </p>
          
          <div class="flex flex-wrap gap-3 pt-2">
            <a :href="`mailto:${profile.email}`" class="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition text-sm font-medium">
              <Icon name="heroicons:envelope" class="w-4 h-4" /> Email
            </a>
            <a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank" 
               class="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition text-sm font-medium">
              <Icon :name="social.icon" class="w-4 h-4" :class="social.color" />
              {{ social.name }}
            </a>
          </div>
        </div>
      </section>

      <section id="news" class="scroll-mt-24">
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
          <Icon name="heroicons:megaphone" class="text-orange-500" /> News
        </h3>
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
        
        <div class="space-y-6">
          <article v-for="(paper, index) in publications" :key="index" 
                   class="flex flex-col group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300">
            
            <div class="space-y-3 mb-4">
              <h4 class="text-xl font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                {{ paper.title }}
              </h4>
              <div class="text-slate-700 text-base">
                {{ paper.authors }}
              </div>
              <div class="font-semibold text-slate-900 italic">
                {{ paper.venue }}
              </div>
            </div>

            <div class="border-t border-slate-100 pt-3 mb-4">
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
            </div>

            <div class="flex flex-wrap gap-3">
              <a v-for="link in paper.links" :key="link.name" :href="link.url" 
                 class="flex items-center gap-2 text-sm font-bold text-slate-700 border border-slate-300 px-4 py-2 rounded-lg hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50 transition bg-slate-50">
                <Icon :name="link.icon" class="w-4 h-4" />
                {{ link.name }}
              </a>
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

      <section id="education" class="scroll-mt-24">
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
          <Icon name="heroicons:academic-cap" class="text-orange-500" /> Education
        </h3>
        
        <div class="space-y-8 border-l-2 border-slate-100 ml-3 pl-8 relative">
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

      <section id="skills" class="scroll-mt-24">
        <h3 class="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
          <Icon name="heroicons:cpu-chip" class="text-orange-500" /> Skills
        </h3>
        
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="(skillGroup, index) in skills" :key="index" class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
              {{ skillGroup.category }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in skillGroup.items" :key="item" 
                    class="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="bg-slate-100 border-t border-slate-200 py-12 mt-12">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-slate-700 text-lg">{{ profile.name }}</p>
          <p class="text-slate-500 text-sm mt-1">PhD Candidate at Kyushu Institute of Technology</p>
        </div>
        
        <div class="flex gap-6">
          <a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank" 
             class="text-slate-400 hover:text-slate-700 transition">
            <Icon :name="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="text-center text-slate-400 text-xs mt-8">
        &copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
      </div>
    </footer>

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