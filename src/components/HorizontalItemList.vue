<script lang="ts" setup>
import InfoCard from '@/components/InfoCard/InfoCard.vue';
import type { ShowData } from '@/types/type';
import { ref } from 'vue';

const isMobile = ref(window.innerWidth <= 976);

defineProps<{
    title?: string;
    items?: ShowData[];
    isSearchPage?: boolean;
}>();

defineEmits(['click']);

</script>

<template>
    <div class="showList">
        <div v-if="title" class="showList__title">
            <h2>{{ title }}</h2>
        </div>
        <div :class="isSearchPage ? 'showList__list--search' : 'showList__list'">
            <InfoCard v-bind="show" v-for="(show, _) in items" @click="$emit('click', show.id)"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.showList {
    display: flex;
    flex-direction: column;
    margin: 0;

    &__title {
        margin: $spacing-5;

        h2 {
            margin: 0;
        }
    }

    &__list {
        display: flex;
        justify-content: left;
        //width: 100%;
        overflow-x: scroll;
        
        &--search {
            display: flex;
            justify-content: left;
            flex-wrap: wrap;
        }
    }
}

@media (max-width: 976px) {
    .showList {
        display: flex;
        flex-direction: column;
        margin: 0;

        &__title {
            margin: $spacing-2;

            h2 {
                margin: 0;
            }
        }

        &__list {
            display: flex;
            justify-content: left;
            flex-wrap: nowrap;
            overflow-x: scroll;
            
            &--search {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
        }
    }
}
</style>