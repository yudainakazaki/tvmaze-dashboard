<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Spinner from '@/components/Spinner.vue';
import UrlBtn from '@/components/UrlBtn.vue';
import ItemArray from '@/components/ItemArray.vue';
import Rating from '@/components/Rating.vue';
import noImage from '@/assets/image/no-image.svg' 

const route = useRoute();
const showDetail = ref();
const loading = ref(true);

const handleData = (data?: any) => {
    return {
        id: data.id,
        name: data.name,
        genres: data.genres,
        language: data.language ?? '-',
        rating: data.rating?.average,
        year: data.premiered?.split("-")[0] ?? '-',
        officialSite: data.officialSite,
        network: data.network ? {
            name: data.network.name,
            country: data.network.country?.name ?? '-',
        } : {
            name: data.webChannel.name,
            officialSite: data.webChannel.officialSite,
            country: data.webChannel.country?.name ?? '-',
        },
        image: data.image?.original,
        summary: data.summary,
    }
}

const fetchShowDetail = async () => {
    try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${route.params.id}`);
        if(data)
            showDetail.value = handleData(data);
    
    } catch(e) {
        console.error(e);
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    fetchShowDetail();
})

</script>

<template>
    <Spinner v-if="loading" />
    <div v-else class="detail">
        <div class="detail__name">
            <h1>{{ showDetail.name }}</h1>
        </div>
        <div class="detail__body">
            <div class="detail__body__image">
                <img :src="showDetail.image || noImage" :alt="showDetail.name" class="detail__body__image__img">
            </div>
            <div class="detail__body__info">
                <div class="detail__body__info__network">
                    <h2>{{ showDetail.network.name }} ({{ showDetail.year }})</h2>
                </div>
                <ItemArray :items="[showDetail.language, showDetail.network.country]" />
                <ItemArray :items="showDetail.genres" />
                <div class="detail__body__info__btns">
                    <Rating :rating="showDetail.rating"/>
                    <UrlBtn :text="'Visit website'" :url="showDetail.officialSite"/>
                </div>
                <div v-html="showDetail.summary" class="detail__body__info__summary"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detail {
    width: 60%;
    margin: auto;

    &__name {
        margin: $spacing-10 0;
    }

    &__body {
        display: flex;

        &__image {
            height: $width-7;
            width: fit-content;
            object-fit: cover;
            overflow: hidden;
            display: flex;
            justify-content: center;
        }

        &__info {
            width: 50%;
            margin: 0 $spacing-5;

            &__network {
                margin: $spacing-2;
            }

            &__region {
                font-size: $font-small;
                margin: $spacing-2; 
            }

            &__btns {
                display: flex;
            }

            &__summary {
                margin: $spacing-2;
            }
        }
    }
}

@media (max-width: 976px) {
    .detail {
        width: 90%;
        margin: auto;

        &__name {
            margin: $spacing-6 0;
        }

        &__body {
            flex-direction: column;

            &__image {
                width: 100%;

                &__img {
                    margin: 0 auto;
                }
            }

            &__info {
                width: fit-content;
                margin: $spacing-4 $spacing-1;
            }
        }
    }
}
</style>
