import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
	data() {
		return {
			mainJSON: {pages: []},
			workspace: {
				pageName: 'google.com',
				URL: 'www.eatmyass.lgbtv',
				blocks: [ { "blockName": "name", "tests": [ { "Tname": "name", "actions": [ { "actName": "act1", "data": "data1", "description": "description" }, { "actName": "act2", "data": "data2", "description": "description" }, { "actName": "act3", "data": "data3", "description": "description" } ] }, { "Tname": "name", "actions": [ { "actName": "act1", "data": "data1", "description": "description" }, { "actName": "act2", "data": "data2", "description": "description" }, { "actName": "act3", "data": "data3", "description": "description" } ] } ] }, { "blockName": "name", "tests": [ { "Tname": "name", "actions": [ { "actName": "act1", "data": "data1", "description": "description" }, { "actName": "act2", "data": "data2", "description": "description" }, { "actName": "act3", "data": "data3", "description": "description" } ] }, { "Tname": "name", "actions": [ { "actName": "act1", "data": "data1", "description": "description" }, { "actName": "act2", "data": "data2", "description": "description" }, { "actName": "act3", "data": "data3", "description": "description" } ] } ] } ],
				data: [ { "dataName": "data1", "data": "data", "description": "description" }, { "dataName": "data1", "data": "data", "description": "description" }, { "dataName": "data1", "data": "data", "description": "description" } ]
			},
			pageToAdd: {
				pageName: '',
				URL: ''				
			},
			selectedData: '',
			selectedPage: 'animeTITTIS'

		}
	},

	methods: {
		async getMainJSON(){
			// Add your own URL
			return fetch('./src/example.json').then(response => response.json())
		},
		selectPage(pageInfo){
			this.workspace = pageInfo
		},
		addNewPage(){
			if (this.pageToAdd.pageName === '' || this.pageToAdd.URL === '') return
			this.mainJSON.pages.push({ pageName: this.pageToAdd.pageName, URL: this.pageToAdd.URL })
			this.pageToAdd.pageName = this.pageToAdd.URL = ''
		},
		selectData(selectedData){
			this.selectedData = selectedData
		},
	},

	computed: {
		dataToShow(){
			let dataToShow = this.mainJSON.pages
			return 'dataToShow'
		},
		pageToShow(){
			const result = this.mainJSON.pages.filter(e => e.pageName === selectedPage)
			return result
		}
	},
	
	async mounted(){
		this.mainJSON = await this.getMainJSON()
	}

}).mount('#app')

