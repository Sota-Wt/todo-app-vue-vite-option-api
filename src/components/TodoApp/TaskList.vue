<script>
import TaskItem from './TaskItem.vue';

export default {
    components: {
        TaskItem,
    },
    props: ['tasks'],
    emits: ['onClickCheckButton', 'onClickDeleteButton', 'onClickSubmitButtonToUpdate'],
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
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" class="task-item"
        @on-click-check-button="(id) => onClickCheckButton(id)" @on-click-delete-button="(id) => onClickDeleteButton(id)"
        @on-click-submit-button-to-update="(inputtedTask, selectedPriority, id) =>
            onClickSubmitButtonToUpdate(inputtedTask, selectedPriority, id)
            ">
    </TaskItem>
</template>
<style scoped>
.task-item {
    margin: auto;
    margin-bottom: 1rem;
}
</style>
