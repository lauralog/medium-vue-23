<template>
    <a href="#">
        <h4>
            <slot/>
        </h4>
    </a>
</template>

<script setup>
</script>

<style lang="sass" scoped>
a
    @apply px-4 py-1 flex w-fit
    @apply bg-medium_gray1 rounded-full
    h3
        @apply m-auto
</style>