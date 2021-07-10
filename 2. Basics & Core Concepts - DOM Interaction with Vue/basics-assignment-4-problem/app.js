const app = Vue.createApp({
    data() {
        return {
            inputClass: "",
            paragraphVisible: true,
            inputBgColor: ""
        }
    },
    methods: {
        toggleParagraphVisible() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    },
    computed: {
        paragraphClass() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible,
            }
        }
    }
});

app.mount('#assignment');
