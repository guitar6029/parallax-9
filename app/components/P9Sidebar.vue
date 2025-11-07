<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import P9Logo from "@/assets/img/brain-logo.png"

const items: NavigationMenuItem[] = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '/catalog',
        label: 'Catalog'
    },
    {
        to: '/about',
        label: 'About'
    },
    {
        to: '/inquiry',
        label: 'Inquiry'
    },
    {
        to: '/legal',
        label: 'Legal'
    }
]
</script>

<template>
    <aside class="sticky top-0 h-screen sm:hidden lg:flex lg:w-80 shrink-0 flex flex-col justify-around bg-(--pz-bg) text-(--pz-text)">
        <!-- top section -->
        <div class="flex flex-col gap-2 items-center justify-center">
            <img :src="P9Logo" alt="Parallax-9 Logo" class="w-full opacity-80">
            <span class="font-tech text-center">Parallax-9</span>
        </div>
        <!-- Middle Section -->
        <nav class="flex flex-col items-center gap-2">
            <div class="cyber text-2xl" v-for="item in items" :key="item.label">
                <NuxtLink :to="item.to" class="trns hover:text-(--pz-neon)">
                    {{ item.label }}
                </NuxtLink>
            </div>
        </nav>
        <!-- Bottom section -->
        <div>

        </div>
    </aside>
</template>