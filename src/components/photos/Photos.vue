<template>
<div>
  <h1 class="text-info">Photos page</h1>
  <ul v-if="photos && photos.length">
    <li v-for="photo of photos" v-bind:key="photo.id">
    <b-card class="mb-5 mr-5">
      <b-card-text>
        <strong>{{photo.title}}</strong>
      </b-card-text>
      <b-card-text>
        <img v-bind:src="photo.thumbnailUrl" alt="image"/>
      </b-card-text>
      <b-card-text>
          <strong class="text-info"><a v-bind:href="photo.url">Get the link to this picture</a></strong>
      </b-card-text>      
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
  name: 'Photos',
  data() {
    return {
      photos: [],
      errors: []
    }
  },
  created() {
    service.getPhotos().then(
      response => {
        this.photos = response.data.filter(photo => photo.id <= 30);
      }
    ).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>