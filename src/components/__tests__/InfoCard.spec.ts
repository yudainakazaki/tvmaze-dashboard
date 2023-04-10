import InfoCard from "../InfoCard.vue";
import Rating from "../Rating.vue";
import ItemArray from "../ItemArray.vue";
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('InfoCard', async () => {
    const wrapper = shallowMount(InfoCard);

    it('should show image', () => {
        const image = wrapper.find('.card__img__img');
        expect(image.exists()).toBe(true);
    })

    it('should show a rating', () => {
        const rating = wrapper.findComponent(Rating);
        expect(rating.exists()).toBe(true);
    })

    it('should show a list of genres', () => {
        const genres = wrapper.findComponent(ItemArray);
        expect(genres.exists()).toBe(true);
    })
})