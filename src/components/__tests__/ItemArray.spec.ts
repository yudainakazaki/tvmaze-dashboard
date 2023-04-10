import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ItemArray from '../ItemArray.vue'

describe('HorizontalItemList', () => {

    const wrapper = shallowMount(ItemArray, {
        props: {
            items: ['test1', 'test2', 'test3'],
        }
    })

    it('should show item1', () => {
        expect(wrapper.find('.genres__genre--0').html()).toContain('test1');
    })

    it('should show item2', () => {
        expect(wrapper.find('.genres__genre--1').html()).toContain('test2');
    })

    it('should show item3', () => {
        expect(wrapper.find('.genres__genre--2').html()).toContain('test3');
    })


})