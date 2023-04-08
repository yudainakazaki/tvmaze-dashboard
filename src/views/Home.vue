<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import HorizontalItemList from '@/components/HorizontalItemList.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { ShowData } from '@/types/type';

const genres = ['Drama','Science-Fiction','Action','Horror','Romance','Mystery','Fantasy','Anime','Comedy','Sports']

const showData = ref<ShowData[]>();
const top10 = ref<Map<string, ShowData[]>>(new Map());
const loading = ref<boolean>(false);

const route = useRoute();
const router = useRouter();

const handleShowData = (data: any[]) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      genres: item.genres,
      rating: item.rating?.average,
      image: item.image?.original ?? undefined,
      siteUrl: item.officialSite,
    } as ShowData;
  }).filter((item) => item.rating)
  .sort((a, b) => b.rating - a.rating);
}

const fetchShowData = async () => {

  loading.value = true;
  var shows: any[] = [];

  try {
    var page = 0;

    while(page <= 10){ 
      const { data } = await axios.get(`http://api.tvmaze.com/shows?page=${page}`);
      shows = shows.concat(data);
      page++;
    }

    if(shows) {
      showData.value = handleShowData(shows);
      top10.value.set('general', showData.value.slice(0, 10));
      for(var gen of genres){
        var list: ShowData[] = []; 
        for (var data of showData.value){
          if(data.genres.includes(gen)) list.push(data);
          if(list.length === 10) break;
        }
        top10.value.set(gen, list);
      }
    }
  } catch(e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

const handleClick = (id: number) => {
  router.push({ name: 'detail', params: { id } })
}

onMounted(() => {
  fetchShowData();
})
</script>

<template>
  <div>
    <Spinner v-if="loading"/>
    <div v-else class="list-container">
      <HorizontalItemList title='Top rated TV shows' :items="top10?.get('general')" @click="handleClick" />
      <div v-for="(genre, _) in genres" class="showList">
        <HorizontalItemList :title='genre' :items="top10?.get(genre)" @click="handleClick" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: column;
}
</style>