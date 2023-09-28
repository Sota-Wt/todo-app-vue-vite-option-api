<script>
export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
};
</script>

<template>
    <h1>Chutorial4</h1>
    <!-- make this button work -->
    <button @click="increment()">count is: {{ count }}</button>
    <br />
</template>
