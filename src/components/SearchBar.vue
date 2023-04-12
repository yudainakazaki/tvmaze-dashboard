<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';
import { useSearchStore } from '@/stores/search';
import { useRouterStore } from '@/stores/router';

const searchStore = useSearchStore();
const routerStore = useRouterStore();
const searchQuery = ref();

watch(
    () => searchQuery.value,
    () => {
        if(!searchQuery.value){
            if(routerStore.getParam !== 'detail') routerStore.pushBase()
        } else {
            routerStore.updateQuery(searchQuery.value);
            routerStore.pushSearch();
            searchStore.fetchShows();
        }
    }
)

watch(
    () => routerStore.getQuery,
    () => searchQuery.value = routerStore.getQuery
)

onMounted(
    async () => {
        await routerStore.router.isReady();
        searchQuery.value = routerStore.getQuery === undefined ? '' : routerStore.getQuery?.toLocaleString();
    }
)

</script>

<template>
    <div class="search-bar">
        <span class="bx bx-search search-bar__logo" />
        <input type="text" v-model="searchQuery" placeholder="Titles" class="search-bar__box">
    </div>
</template>

<style lang="scss" scoped>
.search-bar {
    margin: 0 $spacing-10;
    width: 25%;
    display: flex;
    align-items: center;
    border: solid 1px $color-main;
    padding: $spacing-1 $spacing-2;

    &__logo {
        font-size: $font-large;
    }

    &__box {
        margin-left: $spacing-1;
        border: none;
        width: 100%;

        &:focus {
            outline: none;
        }
    }
}

@media (max-width: 976px) {
    .search-bar {
        width: fit-content;
    }
}

</style>