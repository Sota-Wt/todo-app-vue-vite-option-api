<script>
export default {
    props: ['task'],
    emit: ['onClickCheckButton', 'onClickDeleteButton'],
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
                <v-col>
                    <v-btn color="teal" size="small" @click="onClickCheckButton(task.id)">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </v-btn>
                </v-col>
                <v-col>
                    {{ task.id }}
                </v-col>
                <v-col>
                    {{ task.title }}
                </v-col>
                <v-col>
                    {{ task.priority }}
                </v-col>
                <v-col>
                    <v-btn color="teal" size="small">
                        <font-awesome-icon icon="fa-solid fa-pen" />
                    </v-btn>
                </v-col>
                <v-col>
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
    text-align: center;
}
</style>
