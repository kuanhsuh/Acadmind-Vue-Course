<template>
    <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
    </router-view>

</template>

<script>

// import UserList from './components/UserList'
export default {
  // components: {
  //   UserList
  // },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval)
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval)
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    beforeLeave(el) {
      el.style.opacity = 1
    },
    enter(el, done) {
      let round = 1
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round++
        if (round > 100) {
          clearInterval(this.enterInterval)
          done()
        }
      }, 20);
    },
    leave(el, done) {
      let round = 1
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01
        round++
        if (round > 100) {
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20);
    },
    showUsers() {
      this.usersAreVisible = true
    },
    hideUsers() {
      this.usersAreVisible = false
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 0.5s; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-50px) */
  /* animation: slide-scale 0.3s ease-out forwards; */
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .v-enter-active {
  animation: slide-scale 0.3s ease-out;
  transition: all 0.3s ease-out;
} */

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0px);
} */

.v-leave-from {
  /* opacity: 1;
  transform: translateY(0px); */
}


.v-leave-active {
    /* animation: slide-scale 0.3s ease-in; */

  /* transition: all 0.3s ease-in; */

}

.v-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-leave-from,
.fade-button-enter-to {
  opacity: 1;
}

.route-enter-from {}
.route-enter-active {
  animation: slide-scale 0.5s ease-out;
}
.route-leave-active {
  animation: slide-scale 0.5s ease-in;
}
.route-enter-to  {}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
