import UrlBtn from '../UrlBtn.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('InfoCard', async () => {

    it('should show a button', () => {
        const wrapper = shallowMount(UrlBtn, {
            props: {
                text: 'url',
                url: 'https://test.com'
            }
        });
        
        expect(wrapper.find('.btn').exists()).toBe(true);
    })

    it('should show not show a button', () => {
        const wrapper = shallowMount(UrlBtn, {
            props: {
                text: 'url',
                url: ''
            }
        });
        
        expect(wrapper.find('.btn').exists()).toBe(false);
    })

})