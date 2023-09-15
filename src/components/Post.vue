<template>
    <article class="post">

        <div class="post_content">
            <header class="post_header">
                <div class="user_pic"><img :src="post.user.pic" alt=""></div>
                <div class="user_name">
                    <span class="user_name_highlight"> {{ post.user.name }}</span>
                    in 
                    <span class="user_name_highlight"> {{ post.section }} </span>
                </div>
            </header>

            <div class="post_body">
                <div class="post_title"> {{ post.title }} </div>
                <div class="post_summary"> {{ post.summary}} </div>
            </div>

            <footer class="post_footer">
                <div class="post_date"> {{ formatDate(post.date) }} </div>
                <div> * </div>
                <div class="post_time_to_read"> {{ post.minutesToRead }} minutes to read </div>
                <div class="post_labels">
                    <Label
                    :label="post.label" 
                    :key="i"
                    v-for="(label, i) in post.labels" 
                    >
                        {{ label }}
                    </Label>
                </div>
                <div v-if="isMembersOnly">
                    <ph-star-four :size="16" color="#ffc017" weight="fill"/>
                </div>
            </footer>
        </div>

        <div class="post_img">
            <img :src="post.picture.src" :alt="post.picture.alt">
        </div>

    </article>
</template>

<script setup>
import { PhStarFour } from "@phosphor-icons/vue";
import Label from './Label.vue'
import { inject } from 'vue';
const { formatDate } = inject('formatDate')

const props = defineProps({
    post: Object,
})
const isMembersOnly = props.post.membersOnly

</script>

<style lang="sass" scoped>
.post
    @apply flex gap-4 justify-between 
    @apply mb-10 mt-2 max-h-fit
    @apply w-full max-w-3xl
    .post_content
        @apply w-full
        .post_header
            @apply mb-2 flex items-center 
            @apply text-xs
            .user_pic 
                @apply h-8 w-8 rounded-full mr-2 overflow-hidden
                @apply bg-primary
                img 
                    @apply object-cover w-full h-full
            .user_name
                .user_name_highlight
                    @apply font-bold capitalize
        .post_body 
            @apply mb-2
            .post_title 
                @apply font-bold text-lg capitalize
            .post_summary
                @apply hidden md:block
                @apply max-w-[45ch] font-medium mt-1
                @apply text-base text-medium_gray2 leading-5
        .post_footer 
            @apply flex gap-2 items-center
            @apply text-medium_gray2 text-xs font-medium
            // .post_date 
            // .post_time_to_read 
            // .post_membership 
            .post_labels 
                @apply hidden md:flex
                @apply  gap-2 text-medium_gray2
            .post_bookmark 
                @apply flex justify-end

    .post_img
        @apply w-[100px] md:w-80
        @apply  max-h-40 max-h-fit
        img
            @apply object-cover h-full w-full
</style>