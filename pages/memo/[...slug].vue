<template>
  <main class="max-w-3xl mx-auto px-6 py-12">
    <ContentDoc v-slot="{ doc }">
      <article class="prose prose-slate lg:prose-lg mx-auto">
        <div class="mb-8 border-b border-slate-200 pb-8">
          <NuxtLink to="/memo" class="text-sm text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Memo</NuxtLink>
          <h1 class="text-3xl font-extrabold text-slate-900 mb-2">{{ doc.title }}</h1>
          <time class="text-slate-500 font-mono text-sm">{{ doc.date }}</time>
        </div>

        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>