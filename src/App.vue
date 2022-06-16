<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto p-8">
      <RouterView />
    </main>
  </div>
</template>
