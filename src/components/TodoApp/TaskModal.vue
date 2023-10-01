<script>
import { Task } from '../../Models/Task';
export default {
    components: {},
    props: {
        isAddTask: Boolean,
        task: Task,
    },
    emits: ['onClickDeleteModalButton', 'onClickSubmitButtonToAdd', 'onClickSubmitButtonToUpdate'],
    data() {
        return {
            openTaskModal: false,
            inputtedTask: this.task ? this.task.title : '',
            priorities: ['High', 'Mid', 'Low'],
            selectedPriority: this.task ? this.task.priority : 'High',
        };
    },
    computed: {
        getTitle() {
            return this.isAddTask ? 'Add Task' : 'Edit Task';
        },
    },
    methods: {
        onClickSubmitButton(inputtedTask, selectedPriority, isAddTask) {
            isAddTask
                ? this.$emit('onClickSubmitButtonToAdd', inputtedTask, selectedPriority)
                : this.$emit('onClickSubmitButtonToUpdate', inputtedTask, selectedPriority);
            this.closeModal();
        },
        closeModal() {
            this.$emit('onClickDeleteModalButton');
        },
    },
};
</script>
<template>
    <v-dialog v-model="openTaskModal">
        <v-card class="task-modal">
            <div class="task-modal-header">
                {{ getTitle }}
            </div>
            <v-container>
                <v-form>
                    <v-text-field v-model="inputtedTask" variant="solo" />
                    <v-select v-model="selectedPriority" :items="priorities" variant="solo" hide-details="true" />
                    <br />
                </v-form>
                <div>
                    <v-btn @click="closeModal()" color="teal"> Close </v-btn>
                    <v-btn @click="onClickSubmitButton(inputtedTask, selectedPriority, isAddTask)" color="teal">
                        Submit
                    </v-btn>
                </div>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<style scoped>
.task-modal {
    align-self: center;
    width: 50%;
    height: 20rem;
}

.task-modal-header {
    width: 100%;
    height: 55px;
    background-color: teal;
    color: white;
}
</style>
