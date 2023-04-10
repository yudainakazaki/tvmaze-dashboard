import Rating from "../Rating.vue";
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('InfoCard', async () => {

    it('should show a rating', () => {
        const wrapper = shallowMount(Rating, {
            props: {
                rating: 10
            }
        });
        const rating = wrapper.find('.rating__rate');
        expect(rating.html()).toContain(10);
    })

    it('should show not show a rating', () => {
        const wrapper = shallowMount(Rating, {
            props: {
                rating: undefined
            }
        });
        const rating = wrapper.find('.rating__rate');
        expect(rating.html()).toContain('-');
    })

})