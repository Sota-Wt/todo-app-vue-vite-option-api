<script>
export default {
    props: ['task'],
    emits: ['onClickCheckButton', 'onClickDeleteButton'],
    methods: {
        onClickCheckButton(id) {
            this.$emit('onClickCheckButton', id);
        },
        onClickDeleteButton(id) {
            this.$emit('onClickDeleteButton', id);
        },
    },
};
</script>
<template>
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
                    <v-btn color="teal" size="small">
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
