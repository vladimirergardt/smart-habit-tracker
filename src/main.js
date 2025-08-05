import { createApp } from 'vue'
import { createPinia } from 'pinia' // Импортируем Pinia
import App from './App.vue'
import router from './router/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faEdit,
    faImages,
    faThLarge,
    faCloudUploadAlt,
    faCut,
    faEraser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Создаем экземпляр Pinia
const pinia = createPinia()

// Добавляем иконки
library.add(faEdit, faImages, faThLarge, faCloudUploadAlt, faCut, faEraser)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(pinia) // Подключаем Pinia перед роутером
    .use(router)
    .mount('#app')
