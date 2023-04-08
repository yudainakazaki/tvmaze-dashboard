import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoCard from '../InfoCard/InfoCard.vue'

describe('InfoCard', () => {
    if('should render', () => {
        const wrapper = mount(InfoCard);
        expect(wrapper.html()).toContain
    })
})
