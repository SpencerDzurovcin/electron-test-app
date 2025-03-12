import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.min.css'

createApp(App).use(router).mount('#app')

const information = document.getElementById('info')
if (information) {
  information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
}

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()
