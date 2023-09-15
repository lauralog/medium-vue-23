<template>
  <Header />
  <Hero />
  
  <section class="trending">
    <div class="trending_title">
      <span class="rounded_icon">
        <ph-trend-up :size="16" />
      </span>
      <h2>Trending on Medium</h2>
    </div>

    <div class="trending_container">
      <Trending :post="trendingPostsFilter[0]" number="01"/>
      <Trending :post="trendingPostsFilter[1]" number="02"/>
      <Trending :post="trendingPostsFilter[2]" number="03"/>
      <Trending :post="trendingPostsFilter[3]" number="04"/>
      <Trending :post="trendingPostsFilter[4]" number="05"/>
      <Trending :post="trendingPostsFilter[5]" number="06"/>
    </div>
  </section>

  <main class="main_container">

    <section class="main_posts">
      <Post     
      :post="post" 
      :key="i"
      v-for="(post, i) in posts" 
      />
    </section>

    <div class="main_right">
      <div class="main_right_labels">
        <h2>Discover more of what matters to you</h2>
        <ul class="label_list">
          <Label
            :label="label" 
            :key="i"
            v-for="(label, i) in labelsArray" 
            >
              {{ label }}
          </Label>
        </ul>
        <a href="#" class="main_right_footer">
          <h3>See more topics</h3>
        </a>
      </div>

    </div>

  </main>

</template>

<script setup>
import { ref, computed, provide } from "vue";

import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Post from './components/Post.vue';
import Trending from './components/Trending.vue';
import Label from './components/Label.vue';

import { PhTrendUp } from "@phosphor-icons/vue";


const posts = ref([
  {
    id: "", 
    user: {
      pic: "https://picsum.photos/258/300",
      name: "Jude Gómez",
      href: "#",
    },
    section: "Progress",
    title: "The “Male Loneliness Epidemic” Does Not Exist",
    summary: "The media panic around “male loneliness” is driven by cherry-picked statistics and sexism. Now, that’s sad.", 
    text: "Lorem ipsum",
    date: new Date(2022, 11, 7),
    minutesToRead: 7,
    href: "#",
    membersOnly: true,
    trending: true, 
    picture: {
        src: "https://picsum.photos/300/200",
        alt: "aadasdas00"
    },
    labels: ["Politics", "Progress"],
  },
  {
    id: "", 
    user: {
        pic: "https://picsum.photos/350/200",
        name: "Lara González",
        href: "#",
    },
    section: "Writing",
    title: "Something Must Be Done About LED Bulbs",
    summary: "Why “Eco-friendly” bulbs are failing consumers and the environment, and what to do about it", 
    text: "ies commodo, nisl mauris semper enim, nec interdum velit velit eu nibh.",
    date: new Date(2022, 7, 20),
    minutesToRead: 7,
    href: "#",
    membersOnly: false,
    trending: true, 
    picture: {
        src: "https://picsum.photos/400/200",
        alt: "blabla"
    },
    labels: ["Writing", "Progress"],
  },
  {
    id: "", 
    user: {
        pic: "https://picsum.photos/250/200",
        name: "Pepe Palomino",
        href: "#",
    },
    section: "Technology",
    title: "Van Leeuwen and the art of not advertising.",
    summary: "How to scale your brand without ads.", 
    text: "postData text",
    date: new Date(2022, 1, 14),
    minutesToRead: 7,
    href: "#",
    membersOnly: true,
    trending: true, 
    picture: {
        src: "https://picsum.photos/700/200",
        alt: "blabla"
    },
    labels: ["Progress", "Relationships"],
  },
  {
      id: "", 
      user: {
          pic: "https://picsum.photos/550/200",
          name: "Irene Casado",
          href: "#",
      },
      section: "Data Science",
      title: "Today is National Grief Awareness Daye",
      summary: "PGrief is far more complicated than being sad and crying", 
      text: "Donec euismod dui quis velit euismod blandit.",
      date: new Date(2020, 8, 14),
      minutesToRead: 7,
      href: "#",
      membersOnly: true,
      trending: false, 
      picture: {
          src: "https://picsum.photos/600/200",
          alt: "aadasdas00"
      },
      labels: ["Data Science"],
  },
  {
    id: "", 
    user: {
        pic: "https://picsum.photos/587/200",
        name: "Samuel Arcos",
        href: "#",
    },
    section: "Productivity",
    title: "postData title",
    summary: "Post summary", 
    text: "postData text",
    date: new Date(1997, 5, 1),
    minutesToRead: 7,
    href: "#",
    membersOnly: true,
    trending: true, 
    picture: {
        src: "https://picsum.photos/582/200",
        alt: "blabla"
    },
    labels: ["Technology", "Productivity"],
  },
  {
    id: "", 
    user: {
        pic: "https://picsum.photos/258/200",
        name: "Lola Garbo",
        href: "#",
    },
    section: "Technology",
    title: "postData title",
    summary: "Post summary", 
    text: "postData text",
    date: new Date(2022, 10, 14),
    minutesToRead: 7,
    href: "#",
    membersOnly: true,
    trending: true, 
    picture: {
        src: "https://picsum.photos/482/200",
        alt: "blabla"
    },
    labels: ["Progress", "Politics"],
  },
  {
    id: "", 
    user: {
        pic: "https://picsum.photos/258/200",
        name: "Lola Garbo",
        href: "#",
    },
    section: "Technology",
    title: "postData title",
    summary: "Post summary", 
    text: "postData text",
    date: new Date(2022, 10, 14),
    minutesToRead: 7,
    href: "#",
    membersOnly: false,
    trending: false, 
    picture: {
        src: "https://picsum.photos/482/240",
        alt: "blabla"
    },
    labels: ["Programing", "Progress"],
  },
  {
    id: "", 
    user: {
        pic: "https://picsum.photos/250/200",
        name: "Post Author",
        href: "#",
    },
    section: "Technology",
    title: "postData title",
    summary: "Post summary", 
    text: "postData text",
    date: new Date(2022, 10, 14),
    minutesToRead: 7,
    href: "#",
    membersOnly: false,
    trending: true, 
    picture: {
        src: "https://picsum.photos/602/200",
        alt: "blabla"
    },
    labels: ["Programing", "Politics"],
  }
])

/**
 * Returns Trending posts
 */
const trendingPostsFilter = computed(() => {
  const trendingPosts = posts.value.filter(post => post.trending)
  return trendingPosts
})

/**
 * Labels Array
 */
const labelsArray = computed(() => {
  const labels = []

  for (const post of posts.value) {
    for (const label of post.labels) {
      if (!labels.includes(label)) {
        labels.push(label)
      }
    }
  }
  return labels
})

/**
 * Date format -> DD/MM/YYYY
 */
 const formatDate = (date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getYear() + 1900
  const formatedDate = `${day} / ${month} / ${year}`
  return formatedDate
}
provide('formatDate', {formatDate})

</script>

<style lang="sass" scoped>
.trending
  @apply px-16 pt-10 pb-3 
  @apply border-b border-b-medium_gray1

  .trending_title
    @apply flex gap-2 mb-4 items-center
  .trending_container
    @apply items-center
    @apply grid gap-x-10 md:grid-cols-2 lg:grid-cols-3

.main_container
  @apply px-12 w-full
  @apply flex flex-col flex-col-reverse gap-16
  @apply xl:flex-row xl:justify-center xl:max-w-6xl xl:mx-auto xl:p-0 xl:pt-10

  .main_posts
    @apply w-full flex flex-col items-start gap-12 items-center
  .main_right
    @apply text-sm 
    @apply xl:w-1/2 
    .main_right_labels
      @apply block gap-4 flex-wrap pb-6 mb-4
      @apply mb-4 border-b border-b-medium_gray1
      .label_list
        @apply flex gap-2 flex-wrap my-4
      .main_right_footer
        @apply text-medium_green font-medium
        @apply hover:text-black

.section_title
  @apply flex mb-3

.rounded_icon
  @apply border border-black rounded-full w-5 h-5 pt-0.5 pr-1 overflow-hidden
</style>
