import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
	data() {
		return {
			intro: 'Vue is working...',
			mainJSON: {},
			workspace: {
				pageName: 'Select a page',
				URL: 'Good luck)))'
			},
			newPage: {
				pageName: '',
				URL: ''
			}
		}
	},

	methods: {
		async getMainJSON(){
			// Add your own URL
			return fetch('./src/example.json').then(response => response.json())
		},
		selectPage(pageInfo){
			this.workspace = pageInfo
			console.log(pageInfo)
		},
		addNewPage(){
			console.log('Hello Wolrd!!!')
			// this.mainJSON.push({pageName, URL})
		}
	},
	
	async mounted(){
		this.mainJSON = await this.getMainJSON()
	}

}).mount('#app')

