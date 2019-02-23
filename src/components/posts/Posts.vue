<template>
<div>
  <h1 class="text-info">Posts page</h1>  
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <b-card bg-variant="light" text-variant="dark" class="mb-5 mr-5">
        <p><strong>{{post.title}}</strong></p>
        <b-card-text><p class="text-secondary">{{post.body}}</p></b-card-text>
      </b-card>
    </li>
  </ul>
   
  <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.id">
      {{error.message}}
    </li>
  </ul>
  </div>

</template>

<script>
import service from '../../api/data-service';

export default {
  name: 'posts',
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    service.getPosts().then(
      response => {
        this.posts = response.data.filter(post => post.id <= 25);
      }
    ).catch(e => {
      this.errors.push(e)
    })
  },
}
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>