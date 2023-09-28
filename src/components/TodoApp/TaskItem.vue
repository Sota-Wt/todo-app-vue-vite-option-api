<script>
export default {
    props: ['task']
};
</script>
<template>
    <v-card class="task-item-card" :color="task.completed ? 'teal-lighten-4' : ''">
        <v-container>
            <v-row>
                <v-col>
                    <v-btn color="teal" size="small">
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
                    <v-btn color="teal" size="small">
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
