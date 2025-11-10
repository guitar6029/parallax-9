<script setup lang="ts">
import Orbit from '~/ui/accents/Orbit.vue'
const mainContainer = {
    positionX: "right-50",
    positionY: "top-20",
}

const orbiter = {
    width: 50,
    height: 50,
    borderWidth: 1.5
}

const orbityType = 'outside'

</script>
<template>
    <Orbit :main-container="mainContainer" :orbiter :orbit-type="orbityType" />
</template>