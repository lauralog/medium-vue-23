<template>
    <article class="trending_post">
        <div class="trending_position">
            {{ number }}
        </div>
        <div class="trending_content">
            <header class="post_header">
                <div class="user_pic"><img :src="post.user.pic" :alt="post.user.name">
                </div>
                <div class="user_name">
                    <span class="user_name_highlight"> {{ post.user.name }}</span>
                    in 
                    <span class="user_name_highlight"> {{ post.section }} </span>
                </div>
            </header>
            <div class="post_body">
                <div class="post_title"> {{ post.title }} </div>
            </div>
            <footer class="post_footer">
                <div class="post_date"> {{ formatDate(post.date) }} </div>
                <div> * </div>
                <div class="post_time_to_read"> {{ post.minutesToRead }} </div>
                <div v-if="isMembersOnly">
                    <ph-star-four :size="16" color="#ffc017" weight="fill"/>
                </div>
            </footer>
        </div>
    </article>
</template>

<script setup>    
import { PhStarFour } from "@phosphor-icons/vue";
import { inject } from 'vue';
const { formatDate } = inject('formatDate')

const props = defineProps({
    post: Object,
    number: String,
})

const isMembersOnly = props.post.membersOnly

</script>

<style lang="sass" scoped>
.trending_post
    @apply mb-10 flex justify-center gap-4 

    .trending_position
        @apply text-3xl font-bold text-medium_gray1

    .trending_content
        @apply w-full
        .post_header
            @apply mb-2 flex items-center 
            @apply text-xs
            .user_pic 
                @apply h-8 w-8 rounded-lg mr-2 overflow-hidden
                @apply bg-primary
                img 
                    @apply object-cover w-full h-full
            .user_name
                .user_name_highlight
                    @apply font-bold capitalize
        .post_body 
            @apply capitalize
            .post_title 
                @apply font-bold text-lg

        .post_footer 
            @apply flex gap-2
            @apply text-medium_gray2 text-xs font-medium
            .post_date 
            .post_time_to_read 
            .post_membership 
            .labels 
            .post_bookmark 
                @apply flex justify-end

</style>