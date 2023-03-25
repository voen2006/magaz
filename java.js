let notebook = {
    data() {
        return {
            nameNote: ['Dell', 'HP', 'Acer', 'Lenovo', 'Aple'],
            allData: [
                { name: 'Dell', CPU: 'i5', model: 'Inspirion', storage: '500Gb', price: 30000 },
                { name: 'Dell', CPU: 'i5', model: 'Inspirion 2', storage: '500Gb', price: 30000 },
                { name: 'Dell', CPU: 'i5', model: 'Inspirion 3', storage: '500Gb', price: 30000 },

                { name: 'Acer', CPU: 'i213', model: 'ne Inspirion', storage: '500Gb', price: 30040 },
                { name: 'Acer', CPU: 'i7', model: 'tochno ne Inspirion', storage: '500Gb', price: 30000 },
                { name: 'Acer', CPU: 'i9', model: 'absolutly ne Inspirion', storage: '500Gb', price: 30000 },

                { name: 'Lenovo', CPU: 'ne i5', model: 'Insn', storage: '500Gb', price: 30000 },
                { name: 'Lenovo', CPU: 'radeon 3', model: 'Inssarion', storage: '500Gb', price: 30000 },
                { name: 'Lenovo', CPU: 'pentium', model: 'Insafion', storage: '500Gb', price: 30000 },

                { name: 'Aple', CPU: 'm1', model: 'air 13', storage: '500Gb', price: 30000 },
                { name: 'Aple', CPU: 'm2', model: 'pro 13', storage: '500Gb', price: 30000 },
                { name: 'Aple', CPU: 'i5', model: 'Inpro max turbo', storage: '500Gb', price: 30000 },
            ],
            nazva: 'chouse modele',
            num: -1,
            capybara: [],
            isHover: false,
            hoverNum: -1,
        }
    },
    methods: {
        clike(n) {
            this.nazva = this.nameNote[n];
            this.num = n;
            this.capybara.length = 0;
            for (let item of this.allData) {
                if (item.name == this.nazva) {
                    this.capybara.push(item)
                }
            }
        }

    },
    mounted() {
        this.clike(0)
    },
}

Vue.createApp(notebook).mount('#cont-vue')