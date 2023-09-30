<script>
import { mapActions, mapStores } from 'pinia';
import { useTaskStore } from '../stores/task';
import TaskList from '../components/TodoApp/TaskList.vue';
import TaskCounter from '../components/TodoApp/TaskCounter.vue';

export default {
    components: {
        TaskList,
        TaskCounter,
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
    <div class="todo-app-area">
        <v-container>
            <v-card>
                <TaskCounter :totalCount="taskStore.totalCount" :completedCount="taskStore.completedCount"
                    :inCompletedCount="taskStore.inCompletedCount" />
                <TaskList :tasks="taskStore.allTasks" @on-click-check-button="(id) => onClickCheckButton(id)"
                    @on-click-delete-button="(id) => onClickDeleteButton(id)" />
            </v-card>
        </v-container>
    </div>
</template>
