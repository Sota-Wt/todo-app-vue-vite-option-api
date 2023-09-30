<script>
export default {
    props: ['totalCount', 'completedCount', 'inCompletedCount'],
};
</script>
<template>
    <div>
        Total : {{ totalCount }} | Completed : {{ completedCount }} | InCompleted
        {{ inCompletedCount }}
    </div>
</template>