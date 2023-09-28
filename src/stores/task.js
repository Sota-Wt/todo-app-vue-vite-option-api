import { defineStore } from 'pinia';
import { dummyTasks } from '@/data/dummy/dummyTasks';
export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: dummyTasks
    }),
    getters: {
        allTasks: (state) => state.tasks,
        totalCount: (state) => state.tasks.length,
        completedCount: (state) => state.tasks.filter((task) => task.completed).length,
        inCompletefCount: (state) => state.tasks.filter.filter((task) => !task.completed).length
    },
    actions: {
        completeTask(id, state) {
            const target = state.tasks.value.find((task) => task.id === id);
            target.completed;
        }
    }
});
