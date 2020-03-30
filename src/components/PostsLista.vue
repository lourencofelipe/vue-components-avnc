<template>
    <div>
        <h2>Lista de Posts</h2>
        <PostsListaIten v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>

import PostsListaIten from './PostsListaIten.vue'
export default {
    components: {
        PostsListaIten
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>