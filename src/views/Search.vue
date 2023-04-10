<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import HorizontalItemList from '@/components/HorizontalItemList.vue';
import NoData from '@/components/NoData.vue';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { ShowData } from '@/types/type';

const route = useRoute();
const router = useRouter();

const searchQuery = ref<string>();
const showData = ref<ShowData[]>();
const loading = ref<boolean>(true);

const handleShowData = (data: any[]) => {
    return data.map((item) => {
        return {
            id: item.show.id,
            name: item.show.name ?? '-',
            genres: item.show.genres,
            rating: item.show.rating?.average,
            image: item.show.image?.original ?? undefined,
            siteUrl: item.show.officialSite,
        } as ShowData;
    });
}

const fetchShowData = async () => {
    try {
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchQuery.value}`);
        if(data)
            showData.value = handleShowData(data);
    } catch(e) {
        console.log(e);
    } finally {
        loading.value = false;
    }
}

const handleClick = (id: number) => {
    router.push({ name: 'detail', params: { id } })
}

watch(
    () => route.query.q, 
    () => {
        searchQuery.value = route.query.q?.toString();
        fetchShowData();
    }
)

onMounted(() => {
    searchQuery.value = route.query.q?.toString();
    fetchShowData();
})
</script>

<template>
  <div>
    <Spinner v-if="loading"/>
    <div v-else class="list-container">
        <HorizontalItemList v-if="showData?.length !== 0" :items="showData" @click="handleClick" :is-search-page="true"></HorizontalItemList>
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