<script lang="ts" setup>
import Rating from '@/components/Rating.vue';
import ItemArray from '@/components/ItemArray.vue';
import noImage from '@/assets/image/no-image.svg' 

defineProps<{
    id?: number,
    name?: string,
    genres?: string[],
    rating?: number,
    image?: string,
    siteUrl?: string,
    isLast?: boolean,
}>();

</script>

<template>
    <div class="border-radius card" :class="{'card--last' : isLast}" :title="name">
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
    margin-left: $spacing-4;
    cursor: pointer;

    &--last {
        margin: 0 $spacing-4;
        //margin-right: auto;
    }
    
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