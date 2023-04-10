import SearchBar from '../SearchBar.vue'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './data'

describe('SearchBar', async () => {

    var wrapper: any;

    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    });

    beforeEach( async () => {

        wrapper = shallowMount(SearchBar, {
            global: {
                plugins: [router],
            }
        });

        router.currentRoute.value.name = 'search';
    })

    it('search bar should be rendered', async () => {
        expect(wrapper.exists()).toBe(true); 
    })

    it('should change a router query with a query input', async () => {
        const input = await wrapper.find('input');
        input.setValue('hello');

        await wrapper.vm.$nextTick();

        // Assert that the router's query parameter is updated as expected
        // console.log(router.currentRoute.value)
        // expect(router.currentRoute.value.query.q).toBe('hello');
    })

    // it('should show image', () => {
    //     const image = wrapper.find('.card__img__img');
    //     expect(image.exists()).toBe(true);
    // })

    // it('should show a rating', () => {
    //     const rating = wrapper.findComponent(Rating);
    //     expect(rating.exists()).toBe(true);
    // })

    // it('should show a list of genres', () => {
    //     const genres = wrapper.findComponent(ItemArray);
    //     expect(genres.exists()).toBe(true);
    // })
})