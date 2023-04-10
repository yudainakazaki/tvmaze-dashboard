import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Header from '../Header.vue'
import SearchBar from '../SearchBar.vue'

describe('Header', async () => {
    const wrapper = shallowMount(Header);
    
    it('should contain a page title', () => {
        expect(wrapper.html()).toContain("TVMAZE Dashboard");
    });

    it('should contain a page logo', () => {
        expect(wrapper.find('.header__logo').exists()).toBe(true);
    });

    it('should contain a search bar', () => {
        const searchBar = wrapper.findComponent(SearchBar);
        expect(searchBar.exists()).toBe(true);
    })
})
