import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import WebLayout from './pages/components/webLayout.vue'

createInertiaApp({
    resolve: name => {
        const pages = require(`./pages/${name}`)
        pages.default.layout = pages.default.layout || WebLayout
        return pages
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },

})