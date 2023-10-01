<script>
import { mapActions, mapStores } from 'pinia';
import { useTaskStore } from '../stores/task';
import TaskList from '../components/TodoApp/TaskList.vue';
import TaskCounter from '../components/TodoApp/TaskCounter.vue';
import TaskModal from '../components/TodoApp/TaskModal.vue';

export default {
    components: {
        TaskList,
        TaskCounter,
        TaskModal,
    },
    data() {
        return {
            openTaskModal: false,
        };
    },
    computed: {
        ...mapStores(useTaskStore),
    },
    methods: {
        ...mapActions(useTaskStore, {
            onClickCheckButton: 'completeTask',
            onClickDeleteButton: 'deleteTask',
            onClickSubmitButtonToAdd: 'addTask',
            onClickSubmitButtonToUpdate: 'updateTask',
        }),
    },
};
</script>
<template>
    <div class="todo-app-area">
        <v-container>
            <!-- Note
                以下のような記述はダイアログの制御がなぜかできない 
                v-Modelじゃないと制御できない -->
            <!-- :open="openDialog"  -->
            <TaskModal :is-add-task="true" v-model="openTaskModal"
                @on-click-delete-modal-button="openTaskModal = !openTaskModal" @on-click-submit-button-to-add="(inputtedtask, selectedPriority) =>
                        onClickSubmitButtonToAdd(inputtedtask, selectedPriority)
                    " />
            <v-card>
                <v-container>
                    <v-row>
                        <v-col cols="11">
                            <TaskCounter :total-count="taskStore.totalCount" :completed-count="taskStore.completedCount"
                                :incompleted-count="taskStore.incompletedCount" class="task-counter-area" />
                        </v-col>
                        <v-col align-self="center">
                            <v-btn color="teal" size="small" @click="openTaskModal = !openTaskModal">
                                <font-awesome-icon icon="fa-solid fa-plus" />
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <TaskList :tasks="taskStore.allTasks" @on-click-check-button="(id) => onClickCheckButton(id)"
                            @on-click-delete-button="(id) => onClickDeleteButton(id)" @on-click-submit-button-to-update="(inputtedTask, selectedPriority, id) =>
                                    onClickSubmitButtonToUpdate(inputtedTask, selectedPriority, id)
                                " />
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
