<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import HorizontalItemList from '@/components/HorizontalItemList.vue';
import { useRouter } from 'vue-router';
import { useShowStore } from '@/stores/shows';
import { genres } from '@/data/genres';

const showStore = useShowStore();
const router = useRouter();

const handleClick = (id: number) => {
    router.push({ name: 'detail', params: { id } });
}

</script>

<template>
    <div>
        <Spinner v-if="showStore.getLoading"/>
        <div v-else class="flex-col">
            <HorizontalItemList 
                title='Top rated TV shows' 
                :items="showStore.getShows" 
                @click="handleClick" 
            />
            <div v-for="(genre, _) in genres" class="showList">
                <HorizontalItemList 
                    :title='genre' 
                    :items="showStore.getShowsByGenre(genre)" 
                    @click="handleClick" 
                />
            </div>
        </div>
    </div>
</template>
