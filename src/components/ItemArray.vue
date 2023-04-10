<script lang="ts" setup>
defineProps<{
    items?: string[];
}>();
</script>
<template>
    <div v-if="items" class="genres">
        <span v-for="(genre, i) in items" :class="`genres__genre genres__genre--${i}`" >
            {{ genre }}
            <span v-if="i != items.length-1" class="genres__genre__separator">|</span>
        </span>
    </div>
</template>
<style lang="scss" scoped>
.genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: $spacing-1;

    &__genre {
        margin: $spacing-1;
        font-size: $font-small;
        font-weight: bold;

        &__separator {
            margin-left: $spacing-1;
        }
    }
}
</style>