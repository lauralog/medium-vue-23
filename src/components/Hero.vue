<template>
    <div class="hero">
        <div class="hero_left">
            <h1 class="hero_title">
                Stay curious.
            </h1>
            <h2 class="hero_subtitle">
                Discover stories, thinking, and expertise from writers on any topic.
            </h2>
            <Button class="hero_btn">
                Start reading
            </Button>
        </div>

        <div class="hero_right">
            <HeroAnimation />
        </div>
    </div>
</template>

<script setup>
import Button from "./Button.vue";
import HeroAnimation from "./HeroAnimation.vue";
</script>

<style lang="sass" scoped>
.hero
    @apply bg-primary flex justify-between mt-20
    .hero_left
        @apply flex flex-col gap-10 py-24 pl-[5%]
        .hero_title
            @apply font-myserif lg:text-8xl
        .hero_subtitle
            @apply lg:text-2xl lg:max-w-[32ch] 

        .hero_btn
            @apply w-[213px] text-xl

    .hero_right
        @apply hidden lg:flex
        @apply w-fit

h1
    @apply text-6xl
h2 
    @apply text-xl font-medium leading-6 max-w-[25ch]
</style>
