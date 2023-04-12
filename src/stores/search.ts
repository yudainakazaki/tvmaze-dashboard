import { defineStore } from 'pinia'
import { computed, ref } from 'vue';
import type { ShowData } from '@/types/type'
import { handleSearchData } from '@/utils/utils';
import { useRouterStore } from './router';
import axios from 'axios';

export const useSearchStore = defineStore('search', () => {

    const routerStore = useRouterStore()

    //state
    const shows = ref<ShowData[]>([])
    const loading = ref<boolean>(false)

    //getters
    const getShows = computed(() => shows.value);
    const getQuery = computed(() => routerStore.getQuery);
    const getLoading = computed(() => loading.value);

    //actions
    const fetchShows = async () => {
        loading.value = true
        try {
            const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${routerStore.getQuery}`);
            if(data) shows.value = handleSearchData(data);
        } catch(e) {
            console.error(e);
        } finally {
            loading.value = false;
        }
    }

    return {
        getShows,
        getQuery,
        getLoading,
        fetchShows,
    }

})