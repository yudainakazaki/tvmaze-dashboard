<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const inputQuery = ref<string | undefined>('');

watch(
    () => inputQuery.value,
    () => {
        if(inputQuery.value !== '')
            router.push({name: 'search', query: { q: inputQuery.value }})
        else
            router.push({path: '/'})
    }
)

onMounted(async () => {
    await router.isReady();
    inputQuery.value = route.query.q === undefined ? '' : route.query.q?.toLocaleString();
})

</script>

<template>
    <div class="search-bar">
        <span class="bx bx-search search-bar__logo"></span>
        <input type="text" v-model="inputQuery" placeholder="Titles" class="search-bar__box">
    </div>
</template>

<style lang="scss" scoped>
.search-bar {
    margin: 0 $spacing-10;
    width: 25%;
    display: flex;
    align-items: center;
    border: solid 1px $color-main;
    padding: $spacing-1 $spacing-2;

    &__logo {
        font-size: $font-large;
    }

    &__box {
        margin-left: $spacing-1;
        border: none;

        &:focus {
            outline: none;
        }
    }
}

@media (max-width: 976px) {
    .search-bar {
        width: fit-content;
    }
}

</style>