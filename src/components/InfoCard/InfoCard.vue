<script lang="ts" setup>
import Rating from '@/components/Rating.vue';
import ItemArray from '@/components/ItemArray.vue';
import noImage from '@/assets/image/no-image.svg' 

const props = defineProps<{
    id?: number,
    name?: string,
    genres?: string[],
    rating?: number,
    image?: string,
    siteUrl?: string,
}>();

</script>

<template>
    <div class="card border-radius" :title="name">
        <div class="card__img border-radius">
            <img class="card__img__img" :src="image || noImage" alt="name">
        </div>
        <div class="card__info">
            <Rating :rating="rating" />
            <ItemArray :items="genres" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    width: $width-3;
    height: fit-content;
    margin: $spacing-3;
    cursor: pointer;
    
    &__img {
        height: $width-5;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        display: flex;
        justify-content: center;

        &__img {
            width: auto;
            height: 100%;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 976px) {
    .card {
        margin: $spacing-2;
    }
}

</style>