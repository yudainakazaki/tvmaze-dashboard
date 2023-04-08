<script setup lang='ts'>
import SearchBar from './SearchBar.vue';
import { ref, onMounted } from 'vue';

const isMobile = ref(window.innerWidth <= 976);
const windowWidth = ref(window.innerWidth);

const checkScreenWidth = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 976) isMobile.value = true;
    else isMobile.value = false;
    return
}

onMounted(() => {
    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth;
})

</script>

<template>
    <header class="header">
        <a href="/browse" class="flex">
            <img src="../assets/image/tv.png" alt="logo" class="header__logo">
            <h1 v-if="!isMobile" class="header__title">TVMAZE Dashboard</h1>
        </a>
        <SearchBar />
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: $height-8;
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    opacity: 0.97;

    &__title {
        margin-left: $spacing-2;
        color: $color-main;
        font-size: $font-large;
        font-family: $font-main;
        font-weight: bolder;
    }

    &__logo {
        height: $spacing-12;
        margin-left: $spacing-6;
    }
}
</style>