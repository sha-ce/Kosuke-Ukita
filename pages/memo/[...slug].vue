<template>
  <main class="max-w-3xl mx-auto px-6 py-12">
    <ContentDoc v-slot="{ doc }">
      <article class="prose prose-slate lg:prose-lg mx-auto">
        <div class="mb-8 border-b border-slate-200 pb-8">
          <NuxtLink to="/memo" class="text-sm text-orange-600 hover:underline mb-4 inline-block">&larr; Back to Memo</NuxtLink>
          <h3 class="font-bold text-base text-slate-900 mb-2">{{ doc.title }}</h3>
          <time class="text-slate-500 font-mono text-sm">{{ doc.date }}</time>
        </div>

        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>