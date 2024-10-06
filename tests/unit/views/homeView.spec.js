import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView Snapshot', () => {
  test('debe coincidir con el snapshot', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})