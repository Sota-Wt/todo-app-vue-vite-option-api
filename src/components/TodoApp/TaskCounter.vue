<script>
export default {
    props: ['totalCount', 'completedCount', 'incompletedCount'],
};
</script>
<template>
    <div>
        Total : {{ totalCount }} | Completed : {{ completedCount }} | Incompleted
        {{ incompletedCount }}
    </div>
</template>