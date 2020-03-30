<template>
  <div id="app" class="container">
    
    <h1>Dynamic Component</h1>
    <button @click="selectedComponent = 'Home'">Home</button>
    <button @click="selectedComponent = 'PostsLista'">Posts</button>
    <button @click="selectedComponent = 'About'">About</button>
    <button @click="selectedComponent = 'Async'">asynchronous</button>

    <keep-alive :exlude="['Home', 'PostsLista']"> 
      <component :is="selectedComponent" v-bind="currentProps"></component>
    </keep-alive>
  </div>
</template>

<script>

import Home from './components/Home.vue'
import About from './components/About.vue'
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    Asynchronous: () => import('./components/Asynchronous.vue'),
    Home,
    About,
    PostsLista
  },
  data(){
    return {
      selectedComponent: 'Home',
      posts: [
        {id: 1, title: 'Vue Components', content: 'Components, are on of the most importants things in Vue.', author: 'Darth'},
        {id: 2, title: 'Distributing content with slots', content: 'Slots can be used as html code repositories', author: 'C3PO'}
      ]
    }
  },
  computed: {
    currentProps(){
      return this.selectedComponent === 'PostsLista'
      ? { posts: this.posts}
      : {}
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

