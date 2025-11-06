<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
    { to: '/', label: 'Home' },
    { to: '/catalog', label: 'Catalog' },
    { to: '/about', label: 'About' },
    { to: '/inquiry', label: 'Inquiry' },
    { to: '/legal', label: 'Legal' }
]
</script>


<template>
    <footer class="w-full border-t border-(--pz-border) bg-(--pz-bg) text-(--pz-text) shrink-0">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <nav aria-label="Footer" class="w-full sm:w-auto">
                <ul class="flex flex-wrap items-center gap-4 sm:gap-6">
                    <li v-for="item in items" :key="item.label">
                        <NuxtLink :to="item.to"
                            class="cyber text-base hover:text-(--pz-accent) focus:outline-none focus:ring-2 focus:ring-(--pz-accent)/60 rounded px-1">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="text-xs opacity-75 text-center sm:text-right">
                © 2089 Parallax-9 ·
                <NuxtLink to="/privacy" class="hover:text-(--pz-accent)">Privacy</NuxtLink>
            </div>
        </div>
    </footer>
</template>
