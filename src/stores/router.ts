import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useRouterStore = defineStore('router', () => {

    const router = useRouter()
    const route = useRoute()
    const query = ref()

    //getters
    const getQuery = computed(() => query.value)
    const getShowId = computed(() => route.params.id)
    const getParam = computed(() => route.name)

    //actions
    const pushBase = () => router.push({path: '/'})
    const pushSearch = () => router.push({name: 'search', query: { q: query.value }})
    const pushDetail = (id: number) => router.push({ name: 'detail', params: { id } })
    const updateQuery = (newValue: string) => query.value = newValue

    watch(
        () => route.query.q,
        () => query.value = route.query.q?.toString()
    )

    return {
        router,
        getQuery,
        getShowId,
        getParam,
        pushBase,
        pushSearch,
        updateQuery,
        pushDetail,
    }
})