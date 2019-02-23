<template>
  <div id="app">
    <router-view name="navigation"></router-view>
    <router-view></router-view>
    <!-- <photos></photos>  -->
    <!-- <users></users> -->
    <router-view name="footer"></router-view>
  </div>
</template> 

<script>
// import Photos from './components/photos/Photos';
// import Users from './components/users/Users';

  export default {
    name: 'app',
    components: {
      // Photos,
      // Users
    },
  };
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
