<template>
    <a href="#">
        <h3>
            <slot/>
        </h3>
    </a>
</template>

<script setup>
</script>

<style lang="sass" scoped>
a
    @apply px-4 py-1 flex w-fit
    @apply bg-black text-white rounded-full
    h3
        @apply m-auto
</style>