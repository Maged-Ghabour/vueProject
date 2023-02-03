<template>
    <div>
        <h2>Keep Alive</h2>
        <mark class="d-block">If i increment and change the component the component will keep a component alive </mark>
        <button class="btn btn-info" @click="increment">increment</button>
        <p>{{ counter }}</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            counter: 0,

        }
    },
    methods: {
        increment() {
            this.counter++
        }
    }
}
</script>