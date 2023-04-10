import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HorizontalItemList from '../HorizontalItemList.vue'

describe('HorizontalItemList', () => {

    const wrapper = shallowMount(HorizontalItemList, {
        props: {
            title: 'test',
            items: [],
            isSearchPage: false
        }
    })

    it('should show a title of the list', () => {
        expect(wrapper.html()).toContain('test');
    })

    it('should show an item list', () => {
        expect(wrapper.find('.show-list__list').exists()).toBe(true)
    })

    it('should not show an item list for a search result', () => {
        expect(wrapper.find('.show-list__search-list').exists()).toBe(false)
    })


})