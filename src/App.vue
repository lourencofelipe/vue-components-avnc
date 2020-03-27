<template>
  <div id="app" class="container">
    
    <h1>Vue JS</h1>
    
    <Post>
       <h2 slot="header">Vue Components</h2>
       <template>
          <p class="post-paragraph">Components are one of most importants things in Vue</p>
          <span>...</span>
       </template>
       
       <small slot="footer"> - {{ author }} </small>
    </Post>
  </div>
</template>

<script>

import Post from './components/Post.vue'

export default {
  components: {
    Post
  },
  data(){
    return {
      author: 'Darth'
    }
  }
  }
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
  .post-paragraph {
    color: red;
  }

</style>

