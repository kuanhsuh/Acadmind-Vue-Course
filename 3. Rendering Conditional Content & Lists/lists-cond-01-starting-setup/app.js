const app = Vue.createApp({
  data() {
    return {
      enteredValueGoal: "",
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValueGoal);
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
