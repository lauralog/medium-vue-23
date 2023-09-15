<template>
    <header class="header transitions"
    :style="backgroundColorHeader"
    >
        <Logo />

        <!-- <div class="space"></div> -->

        <nav class="menu">
            <ul class="menu_items">
                <MenuItem
                :key="i"
                :menuItems="menuItem"
                v-for="(menuItem, i) in menuItems"
                :style="menuItemDisplay(menuItem)"
                > {{ menuItem.title }}</MenuItem>
            </ul>
            <Button :style="backgroundColorButton">
                Get Started
            </Button>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MenuItem from "./MenuItem.vue";
import Button from "./Button.vue";
import Logo from "./Logo.vue";

const menuItems = [
    {
        title: 'Our Story',
        fullDisplay: false,
    },
    {
        title: 'Membership',
        fullDisplay: false,
    },
    {
        title: 'Wright',
        fullDisplay: false,
    },
    {
        title: 'Sign in',
        fullDisplay: true,
    }
];

/**
 * ---------------------------------------------------------------------
 * RESPONSIVE MENU
 * ---------------------------------------------------------------------
*/

const windowWidth = ref(window.innerWidth);
/**
 * Actualiza el valor del ancho del viewport
 */
onMounted(() => {
    window.addEventListener("resize", (ev) => {
        windowWidth.value = window.innerWidth
    });   
});
/**
 * Oculta los elementos del menú reducido
 * @param {HTMLElement} menuItem 
 */
const menuItemDisplay = (menuItem) => {
    if (!menuItem.fullDisplay && windowWidth.value <= 1000) {
        return ({display: 'none'})
    } 
}

/**
 * ---------------------------------------------------------------------
 * HEADER COLOR STYLE
 * ---------------------------------------------------------------------
*/

// Initial colors
const backgroundColorHeader = ref({backgroundColor: '#ffc017',});
const backgroundColorButton = ref({backgroundColor: '#000000',});

window.addEventListener('scroll', (ev) => {
    if (window.scrollY > 500) {
        backgroundColorHeader.value.backgroundColor = '#ffffff'
        backgroundColorButton.value.backgroundColor = '#1a8917'
    } else {
        backgroundColorHeader.value.backgroundColor = '#ffc017'
        backgroundColorButton.value.backgroundColor = '#000000'
    }
});

</script>


<style lang="sass" scoped>
header
    @apply fixed w-full top-0 py-6 px-6 justify-between
    @apply h-20 md:py-6 md:px-16
    @apply flex justify-between items-center
    @apply border-b border-black

// .space
//     @apply flex-grow
.menu
    @apply flex gap-6
    .menu_items
        @apply hidden md:flex
        @apply gap-6

// helpers
.transitions
    @apply transition-all duration-300 ease-in-out



</style>