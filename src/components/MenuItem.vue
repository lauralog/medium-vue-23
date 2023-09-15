<template>
    <li class="menu_item">
        <a href="#">
            <h4><slot></slot></h4>
        </a>
    </li>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.menu_item
    @apply flex items-center justify-center
    @apply text-black text-sm
</style>