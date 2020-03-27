<template>
  <div id="app" class="container">
    
    <h1>Dynamic Component</h1>
    <button @click="selectedComponent = 'Home'">Home</button>
   <!--  <button @click="selectedComponent = 'PostsLista'">Posts</button> -->
    <button @click="selectedComponent = 'About'">About</button>
    
    <component :is="'componenteSelecionado'"></component>

  </div>
</template>

<script>

import Post from './components/Post.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  components: {
    Home,
    About,
    Post
  },
  data(){
    return {
      selectedComponent: 'Home'
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

