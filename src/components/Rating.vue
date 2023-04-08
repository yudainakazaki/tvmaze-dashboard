<script lang="ts" setup>
defineProps<{
    rating?: number;
}>();
</script>

<template>
    <div class="rating">
        <span class="bx bxs-star rating__star" />
        <span class="rating__rate">{{ rating || '-' }}</span>
    </div>
</template>

<style lang="scss" scoped>
.rating {
    margin: $spacing-2;
    padding: $spacing-1;
    width: fit-content;
    border-radius: $spacing-1;
    background-color: $color-rating;

    &__star {
        color: white;
        margin: 0 $spacing-1;
        font-size: $font-small;
    }

    &__rate {
        color: white;
        margin: 0 $spacing-1;
        font-size: $font-small;
    }
}
</style>