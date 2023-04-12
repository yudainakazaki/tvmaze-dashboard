import { defineStore } from 'pinia'
import type { ShowData } from '@/types/type'
import { computed, ref } from 'vue';
import { handleShowData } from '@/utils/utils';
import axios from 'axios';

export const useShowStore = defineStore('show', () => {

	//state
	const shows = ref<ShowData[]>([])
	const loading = ref<boolean>(false)

	//getters
	const getAll = computed(() => shows.value)
	const getShows = computed(() => shows.value.slice(0, 10))
	const getShowsByGenre = computed(() => {
		return (genre: string) => {
			var list: ShowData[] = [];
			for(var show of shows.value){
				if(show.genres.includes(genre)) list.push(show);
				if(list.length === 10) break;
			}
			return list;
		}
	})
	const getLoading = computed(() => loading.value)

	//actions
	const fetchShows = async () => {
		loading.value = true;
		var list: any[] = [];
		try {
			let page = 0;
			while(page <= 10){ 
				const { data } = await axios.get(`https://api.tvmaze.com/shows?page=${page}`);
				list = list.concat(data);
				page++;
			}
			if(shows) {
				shows.value = handleShowData(list);
			}
		} catch(e) {
			console.error(e);
		} finally {
			loading.value = false;
		}
	}
	
	return {
		getAll,
		getShows,
		getShowsByGenre,
		getLoading,
		fetchShows,
	}
})
