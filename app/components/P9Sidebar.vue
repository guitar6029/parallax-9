<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

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
    <aside class="sticky top-0 h-screen w-80 shrink-0 flex flex-col justify-around bg-(--pz-bg) text-(--pz-text)">
        <!-- top section -->
        <div>

        </div>
        <!-- Middle Section -->
        <nav class="flex flex-col items-center gap-2">
            <div class="cyber text-2xl" v-for="item in items" :key="item.label">
                <NuxtLink :to="item.to">
                    {{ item.label }}
                </NuxtLink>
            </div>
        </nav>
        <!-- Bottom section -->
        <div>

        </div>
    </aside>
</template>