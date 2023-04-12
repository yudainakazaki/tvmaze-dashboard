<script setup lang="ts">
import { onMounted } from 'vue';
import { useShowStore } from './stores/shows';
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import 'boxicons';

const showStore = useShowStore();

onMounted(() => {
    showStore.fetchShows();
})
</script>

<template>
  <div class="body">
    <Header />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.body {
  background-color: white;
  padding-top: $height-8;
  margin: 0;
}
</style>
