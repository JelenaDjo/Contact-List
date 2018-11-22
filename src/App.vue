<template>
  <div id="app">
    <NavBar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Walking get's too boring when you learn how to fly!"/>
    <!-- <ContactList /> -->
    <!-- <BlogPost :title="parentTitle"  -->
      <!-- @callParentFunction="parentFunction" -->
    <!-- /> : su skrcenica od v-bind: -->
<router-view> </router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue'
import BlogPost from './components/BlogPost.vue'
import NavBar from './components/NavBar.vue'

export default {

  name: 'app',
  data(){
    return {
      parentTitle: 'BlogPost'
    };
  },
  components: {
    HelloWorld,
    ContactList,
    BlogPost,
    NavBar
  },
  methods: {
    parentFunction (name, age) {
      console.log('Hi from parent ' + name, + age);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
