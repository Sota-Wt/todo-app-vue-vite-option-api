<script>
export default {
    mounted() {
        this.$refs.pElementRef.textContent = 'mounted!';
    }
};
</script>

<template>
    <h1>Chuotorial9</h1>
    <p ref="pElementRef">hello</p>
    <br />
</template>
