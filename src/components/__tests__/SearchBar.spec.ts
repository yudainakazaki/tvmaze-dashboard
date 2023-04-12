import SearchBar from '../SearchBar.vue'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './data'
import { useSearchStore } from '@/stores/search';
import { setActivePinia, createPinia } from 'pinia'

describe('SearchBar', async () => {

    const pinia = createPinia()

    var wrapper: VueWrapper<any>;

    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    });

    beforeEach(() => {
        setActivePinia(createPinia());
        wrapper = shallowMount(SearchBar, {
            global: {
                plugins: [
                    router, 
                    pinia
                ],
            }
        });
    })


    it('search bar should be rendered', async () => {
        expect(wrapper.find('.search-bar').exists()).toBe(true);
    })

    it('should change a router query with a query input', async () => {
        const searchStore = useSearchStore();
        const input = wrapper.find('.search-bar__box')
        await input.setValue('hello')
        expect(searchStore.getQuery).toEqual('hello')
    })
})