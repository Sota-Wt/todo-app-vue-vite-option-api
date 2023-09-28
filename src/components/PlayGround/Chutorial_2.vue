<script>
export default {
    data() {
        return {
            message: 'Hello World!',
            counter: {
                count: 0
            }
        }
    }
}
</script>

<template>
    <h1>Chutorial2</h1>
    <h1>{{ message }}</h1>
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <p>Count is: {{ counter.count }}</p>
    <br />
</template>
