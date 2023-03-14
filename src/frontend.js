import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
	data() {
		return {
			mainJSON: {pages: [{pageName: '', URL: '', data: [{data: '', dataName: '', description: ''}]}]},
			pageToAdd: {
				pageName: '',
				URL: ''				
			},
			selectedData: 'www',
			selectedPage: { pageName: 'animeTITTIS', URL: 'yeassdaddy.hotmoms'},
			isDataShown: true,
		}
	},

	methods: {
		async getMainJSON(){
			// Add your own URL
			return fetch('./src/example.json').then(response => response.json())
		},
		selectPage(pageInfo){
			this.selectedPage.pageName = pageInfo.pageName
			this.selectedPage.URL = pageInfo.URL
		},
		addNewPage(){
			if (this.pageToAdd.pageName === '' || this.pageToAdd.URL === '') return
			this.mainJSON.pages.push({ pageName: this.pageToAdd.pageName, URL: this.pageToAdd.URL, data: [], blocks: [] })

			this.pageToAdd.pageName = this.pageToAdd.URL = ''
		},
		selectData(dataToSelect){
			this.selectedData = dataToSelect
			console.log(this.selectedData)
		},
	},

	computed: {
		pageToShow(){
			return this.mainJSON.pages.filter(e => e.pageName === this.selectedPage.pageName)[0] || {}
		}
	},
	
	async mounted(){
		this.mainJSON = await this.getMainJSON()
	}

}).mount('#app')

