<script>
import { mapStores } from 'pinia';
import { useTaskStore } from '../stores/task';
import TaskList from '../components/TodoApp/TaskList.vue';

export default {
    components: {
        TaskList
    },
    computed: {
        ...mapStores(useTaskStore)
    }
};
</script>
<template>
    <div div class="todo-app-area">
        <TaskList :tasks="taskStore.allTasks" />
    </div>
</template>
