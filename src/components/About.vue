<template>
    <div>
        <h2>About</h2>

        <p v-if="author">Author: {{ author }}</p>
        <input type="text" v-model="author">
    </div>
</template>
<script>

export default {
    data(){
        return {
            author: ''
        }
    },
}
</script>