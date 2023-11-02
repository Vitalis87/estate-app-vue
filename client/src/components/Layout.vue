<template>
    <header class="bg-slate-200 shadow-md">
        <Header />
    </header>

    <main>
        <router-view />
    </main>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>
