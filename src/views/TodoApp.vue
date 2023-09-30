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
                <v-container>
                    <v-row>
                        <v-col>
                            <TaskCounter :totalCount="taskStore.totalCount" :completedCount="taskStore.completedCount"
                                :inCompletedCount="taskStore.inCompletedCount" class="task-counter-area" />
                        </v-col>
                        <v-col>
                            <v-btn color="teal" size="small"> </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <TaskList :tasks="taskStore.allTasks" @on-click-check-button="(id) => onClickCheckButton(id)"
                            @on-click-delete-button="(id) => onClickDeleteButton(id)" />
                    </v-row>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>
<style scoped>
.task-counter-area {
    margin: 1rem;
}
</style>
