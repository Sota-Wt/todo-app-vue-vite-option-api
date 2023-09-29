<script>
import { mapActions, mapStores } from 'pinia';
import { useTaskStore } from '../stores/task';
import TaskList from '../components/TodoApp/TaskList.vue';

export default {
    components: {
        TaskList,
    },
    computed: {
        ...mapStores(useTaskStore),
    },
    methods: {
        ...mapActions(useTaskStore, {
            onClickCheckButton: 'completeTask',
            onClickDeleteButton: 'deleteTask',
        }),
    },
};
</script>
<template>
    <div div class="todo-app-area">
        <TaskList :tasks="taskStore.allTasks" @on-click-check-button="(id) => onClickCheckButton(id)"
            @on-click-delete-button="(id) => onClickDeleteButton(id)" />
    </div>
</template>
