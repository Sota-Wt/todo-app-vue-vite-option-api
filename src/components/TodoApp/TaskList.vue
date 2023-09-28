<script>
import TaskItem from './TaskItem.vue';

export default {
    components: {
        TaskItem
    },
    props: ['tasks'],
    mounted() {
        console.log(this.tasks);
    }
};
</script>
<template>
    <v-container>
        <v-card class="task-list-area">
            <v-container>
                <TaskItem v-for="task in tasks" :key="task.id" :task="task" class="task-item" />
            </v-container>
        </v-card>
    </v-container>
</template>
<style scoped>
.task-item {
    margin: auto;
    margin-bottom: 1rem;
}
</style>
