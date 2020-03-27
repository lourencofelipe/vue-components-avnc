<template>
  <div id="app">
    <h1>Vue JS</h1>

    <Post title="Vue Components" />
    <Post title="passing data via props" />
  </div>
</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  }
}
</script>