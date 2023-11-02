<template>
    <div class="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 class="font-bold text-sm sm:text-xl flex flex-wrap">
            <span class="text-slate-500">Real</span>
            <span class="text-slate-700">Estate</span>
        </h1>

        <form class="bg-slate-100 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." class="bg-transparent focus:outline-none w-24 sm:w-64" />
            <MagnifyingGlassIcon class="text-slate-600 w-5 h-5" />
        </form>

        <ul class="flex gap-4">
            <router-link to="/">
                <li class="hidden sm:inline text-slate-700 hover:underline cursor-pointer">Home</li>
            </router-link>
            <router-link to="/about">
                <li class="hidden sm:inline text-slate-700 hover:underline cursor-pointer">About</li>
            </router-link>
            <router-link to="/sign-in">
                <li class="text-slate-700 hover:underline cursor-pointer">Sign In</li>
            </router-link>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>