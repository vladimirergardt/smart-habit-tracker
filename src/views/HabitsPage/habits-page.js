/**
 * Created by Ergardt.Vladimir on 16.07.25
 */

// Импорты (реактивность, хуки, утилиты)
import { ref, computed, onMounted, defineProps, defineExpose, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

// Импорт дочерних компонентов
// import ChildComponent from './ChildComponent.vue'
// import Button from '@/components/ui/Button.vue'

// Импорт внешних функций/хуков
// import { fetchData } from '@/api/service'
// import useUserStore from '@/stores/user'


export default {
    setup() {
        // Props (объявление входных параметров)
        const props = defineProps({
            title: {
                type: String,
                required: true
            },
            items: {
                type: Array,
                default: () => []
            }
        })

        // Emits (объявление событий)
        const emit = defineEmits(['item-selected', 'update:title'])

        // Роутер и хранилища
        const router = useRouter()
        // const userStore = useUserStore()

        // Реактивные переменные
        const count = ref(0)
        const testText = ref('test text')
        const isLoading = ref(false)
        const errorMessage = ref(null)

        // Вычисляемые свойства
        const totalItems = computed(() => props.items.length)
        const formattedTitle = computed(() => props.title.toUpperCase())

        // Функции
        function increment() {
            count.value++
        }

        async function loadData() {
            try {
                isLoading.value = true
                // const data = await fetchData()
                // Обработка данных
            } catch (error) {
                errorMessage.value = error.message
            } finally {
                isLoading.value = false
            }
        }

        // Хуки жизненного цикла
        onMounted(() => {
            console.log('Component mounted')
            loadData()
        })

        // Expose (если нужно открыть методы/значения через ref)
        defineExpose({
            reset: () => {
                count.value = 0
                errorMessage.value = null
            }
        })


    }
}
