import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  test('debe renderizar el componente AboutView correctamente', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/about',
        name: 'about',
        component: AboutView
      }]
    })
    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })

  // agregar el snapshot 
  test('debe coincidir con el snapshot', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/about',
        name: 'about',
        component: AboutView
      }]
    })
    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })

    // Prueba del snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
