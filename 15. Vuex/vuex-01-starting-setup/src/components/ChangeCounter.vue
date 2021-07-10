<template>
    <button @click="increment">Add 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // addOne() {
            // this.$store.state.counter++
            // this.$store.dispatch('increment');
        // }
        ...mapActions('numbers', ['increment', 'increase'])
        // ...mapActions({
        //     zxv: 'increase',
        //     asdf: 'increment'
        // })
    }
}
</script>
