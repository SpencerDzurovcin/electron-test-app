import { createApp } from 'vue'
// Remove or comment out the import for App from './App.vue'

// Define the inline component and give it a unique name
const InlineApp = {
    data() {
        return {
            message: 'Vue is working in Electron!'
        }
    },
    template: `<div>{{ message }}</div>`
}

// Mount the inline component
createApp(InlineApp).mount('#app')

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

func()
