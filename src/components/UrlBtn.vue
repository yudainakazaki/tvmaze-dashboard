<script lang="ts" setup>
defineProps<{
    text: string,
    url?: string,
}>();
</script>

<template>
    <div class="btn" v-if="url">
        <a :href="url" target="_blank">
            <span class="btn__icon">{{ text }}</span>
            <span class="bx bx-link-external btn__label" />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.btn {
    margin: $spacing-2;
    padding: $spacing-1;
    width: fit-content;
    border-radius: $spacing-1;
    background-color: $color-url-btn;

    &__icon {
        color: white;
        margin: 0 $spacing-1;
        font-size: $font-small;
    }

    &__label {
        color: white;
        margin: 0 $spacing-1;
        font-size: $font-small;
    }

}
</style>