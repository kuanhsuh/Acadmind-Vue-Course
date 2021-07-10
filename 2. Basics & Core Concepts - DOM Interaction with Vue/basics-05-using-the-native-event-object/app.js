const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: "",
      lastname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000)
      }
    }
    // name(value) {
    //   if(value = '') {
    //     this.fullname = ''
    //   } else {
    //     this.fullname = value + " " + "Huang";
    //   }
    // },
    // lastname() {
    //   if (value === '') {
    //     this.fullname = ''
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastname === '') {
        return ''
      }
      return this.name + ' ' + this.lastname;
    },
  },
  methods: {

    setName(event, lastName) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
