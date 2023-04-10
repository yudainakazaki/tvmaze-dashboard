import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Header from '../Header.vue'


describe('Header', async () => {
    const wrapper = shallowMount(Header);
    it('should render', () => {
        expect(wrapper.html()).toContain("TVMAZE Dashboard");
    })
})
