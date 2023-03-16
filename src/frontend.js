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
			dataPosition: -1000,
			isDataModalShown: true,
			dataModalError: '',
			dataToAdd: {
				dataName: '',
				data: '',
				description: ''
			}
		}
	},

	methods: {
		async getMainJSON(){
			// Add your own URL
			return fetch('./src/example.json').then(response => response.json())
		},
		selectPage(pageInfo){
			this.dataPosition = -500
			setTimeout(() => {this.selectedPage = pageInfo}, 300)
			setTimeout(this.setDataBarPosition, 600)
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
		
		toggleDataBar(){
			this.isDataShown = !this.isDataShown
		},

		deletePage(URL){
			this.mainJSON.pages = this.mainJSON.pages.filter(e => e.URL != URL)
		},

		setDataBarPosition(){
			if (this.isDataShown){
				this.dataPosition = 0
			} else {
				this.dataPosition = this.$refs.dataBar.clientWidth * -1
			}
		},
		toggleDataModal(){
			this.clearModalError()
			this.isDataModalShown = !this.isDataModalShown			
		},

		saveNewData(){
			if (this.dataToAdd.dataName === '' || this.dataToAdd.data === '' || this.dataToAdd === '') {
				this.dataModalError = "Can't add data with empty parametres"
				return
			}
			this.toggleDataModal()
			this.dataToAdd = {	
				dataName: '',
				data: '',
				description: ''
			}
		},
		clearModalError(){
			this.dataModalError = ''
		}

	},

	watch: {
		isDataShown(){
			this.setDataBarPosition()
		}
	},

	computed: {
		pageToShow(){
			return this.mainJSON.pages.filter(e => e.pageName === this.selectedPage.pageName)[0] || {}
		}
	},

	// updated: function () {
		
	// },
	
	async mounted(){
		this.mainJSON = await this.getMainJSON()
		setTimeout(this.setDataBarPosition, 200)
	}

}).mount('#app')

