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
    <footer class="flex items-center gap-2 min-h-40">
        <nav>
            <ul class="flex items-center gap-2">
                <NuxtLink v-for="item in items" :key="item.label" :to="item.to">
                    {{ item.label }}
                </NuxtLink>
            </ul>

        </nav>
    </footer>
</template>