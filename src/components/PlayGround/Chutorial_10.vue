<script>
export default {
    data() {
        return {
            todoId: 1,
            todoData: null
        };
    },
    methods: {
        async fetchData() {
            this.todoData = null;
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`);
            this.todoData = await res.json();
        }
    },
    watch: {
        todoId() {
            this.fetchData()
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

<template>
    <h1>
        Chutorial10
    </h1>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
    <br />
</template>
