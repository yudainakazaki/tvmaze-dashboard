<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import HorizontalItemList from '@/components/HorizontalItemList.vue';
import NoData from '@/components/NoData.vue';
import { useSearchStore } from '@/stores/search';
import { useRouterStore } from '@/stores/router';

const searchStore = useSearchStore();
const routerStore = useRouterStore();

const handleClick = (id: number) => {
    routerStore.pushDetail(id)
}

</script>

<template>
  <div>
    <Spinner v-if="searchStore.getLoading"/>
    <div v-else class="list-container">
        <HorizontalItemList v-if="searchStore.getShows?.length !== 0" :items="searchStore.getShows" @click="handleClick" :is-search-page="true" />
        <NoData v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-container {
    display: flex;
    flex-direction: column;
    margin: $spacing-10 0;
}
</style>