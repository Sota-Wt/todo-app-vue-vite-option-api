import { defineStore } from 'pinia';
import { Task } from '../Models/Task';
import { dummyTasks } from '@/data/dummy/dummyTasks';
export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: dummyTasks,
    }),
    getters: {
        allTasks: (state) => state.tasks,
        totalCount: (state) => state.tasks.length,
        completedCount: (state) => state.tasks.filter((task) => task.completed).length,
        incompletedCount: (state) => state.tasks.filter((task) => !task.completed).length,
    },
    actions: {
        completeTask(id) {
            const target = this.tasks.find((task) => task.id === id);
            target.completed = !target.completed;
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter((task) => task.id !== id);
        },
        addTask(inputtedtask, selectedPriority) {
            const maxId = Math.max(...this.allTasks.map((task) => task.id)) + 1;
            this.tasks.push(new Task(maxId, inputtedtask, selectedPriority, false, false));
        },
        updateTask(inputtedtask, selectedPriority, id) {
            const target = this.tasks.find((task) => task.id === id);
            target.title = inputtedtask;
            target.priority = selectedPriority;
        },
    },
});
