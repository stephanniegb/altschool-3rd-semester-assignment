import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/main.css'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faPiggyBank, faTruckFast,faLaptop, faRectangleAd,faFaceSmileBeam, faHeadset,faStar} from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-regular-svg-icons'
library.add(faChevronRight, faClock, faPiggyBank, faTruckFast,faLaptop, faRectangleAd,faFaceSmileBeam, faHeadset, faStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
