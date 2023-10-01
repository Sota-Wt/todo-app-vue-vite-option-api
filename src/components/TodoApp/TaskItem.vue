<script>
import TaskModal from './TaskModal.vue';
export default {
    inheritAttrs: false,
    components: {
        TaskModal
    },
    props: ['task'],
    emits: ['onClickCheckButton', 'onClickDeleteButton', 'onClickSubmitButtonToUpdate'],
    data() {
        return {
            openTaskModal: false,
        };
    },
    methods: {
        onClickCheckButton(id) {
            this.$emit('onClickCheckButton', id);
        },
        onClickDeleteButton(id) {
            this.$emit('onClickDeleteButton', id);
        },
        onClickSubmitButtonToUpdate(inputtedTask, selectedPriority, id) {
            this.$emit('onClickSubmitButtonToUpdate', inputtedTask, selectedPriority, id);
        },
    },
};
</script>
<template>
    <TaskModal :is-add-task="false" :task="task" v-model="openTaskModal"
        @on-click-delete-modal-button="openTaskModal = !openTaskModal" @on-click-submit-button-to-update="(inputtedtask, selectedPriority) =>
            onClickSubmitButtonToUpdate(inputtedtask, selectedPriority, task.id)
            " />
    <v-card class="task-item-card" :color="task.completed ? 'teal-lighten-4' : ''">
        <v-container>
            <v-row>
                <v-col cols="1">
                    <v-btn color="teal" size="small" @click="onClickCheckButton(task.id)">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </v-btn>
                </v-col>
                <v-col cols="1" align-self="center">
                    {{ task.id }}
                </v-col>
                <v-col cols="6" align-self="center">
                    {{ task.title }}
                </v-col>
                <v-col cols="2" align-self="center">
                    {{ task.priority }}
                </v-col>
                <v-col cols="1" align-self="center">
                    <v-btn color="teal" size="small" @click="openTaskModal = !openTaskModal">
                        <font-awesome-icon icon="fa-solid fa-pen" />
                    </v-btn>
                </v-col>
                <v-col cols="1" align-self="center">
                    <v-btn color="teal" size="small" @click="onClickDeleteButton(task.id)">
                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<style scoped>
.task-item-card {
    width: 80%;
    text-align: left;
}
</style>
