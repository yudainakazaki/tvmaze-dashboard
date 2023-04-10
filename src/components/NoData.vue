<template>
    <div class="no-data flex-col items-center">
        <span class="bx bx-tv no-data__icon" />
        <span class="no-data__text">No data found</span>
    </div>
</template>

<style lang="scss" scoped>
.no-data {
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);

    &__text {
        font-size: $font-large;
    }

    &__icon {
        font-size: 96px;
    }
}
</style>
