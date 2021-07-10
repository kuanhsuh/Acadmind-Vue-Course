const app = Vue.createApp({
  data() {
    return {
      name: 'Danny',
      age: 33,
      imgUrl: "https://images.pexels.com/photos/6770410/pexels-photo-6770410.jpeg?cs=srgb&dl=pexels-anastasiya-vragova-6770410.jpg&fm=jpg"
    }
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random()
    }
  }
})


app.mount('#assignment');
