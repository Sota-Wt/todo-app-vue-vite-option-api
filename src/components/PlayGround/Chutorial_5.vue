<script>
export default {
    data() {
        return {
            text: ''
        };
    }
};
</script>

<template>
    <h1>Chutorial5</h1>
    <input v-model="text" placeholder="Type here" />
    <p>{{ text }}</p>
    <br />
</template>
