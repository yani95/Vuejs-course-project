<template>
  <div class="search">
     <b-form v-on:submit.prevent="getResultVideo(query)">
      <h1 class="text-info">Search videos from nasa api:</h1>     
      <input type="text" class="form-control mx-auto" style="width: 50em" placeholder="Search..." v-model="query" autofocus>
     </b-form>
      <div class="results" v-if="results">
        <div v-for="result in results" :key="result.id">
          <h3>{{result.data[0].media_type}}</h3>
          <h3>{{result.data[0].description}}</h3>
          <!-- <video v-bind:src="result.links[0].href"></video> -->
         
        <div class="col-md-6">
          <h4 v-html="imageOfDayTitle"></h4>
          <a class="inline-block" href="#daily-image">
            <img class="img-format" :src="imageOfDayURL" :alt="imageOfDayTitle">
          </a>
          <p class="original-image">
            <small>
              <a :href="imageOfDayURL" v-html="imageOfDayURL" target="_blank"></a>
            </small>
          </p>
          <!-- lightbox container hidden with CSS -->
          <a href="#" class="lightbox" id="daily-image">
            <img :src="imageOfDayURL" :alt="imageOfDayTitle">
          </a>
        </div>
        <div class="description col-md-6">
          <p v-html="imageOfDayDesc"></p>
        </div>
      </div>
        </div>
      <div v-if="!results">No results!</div>
  </div>
  
</template>

<script>
import axios from 'axios';
// import service from '../../api/data-service';

export default {
  name: 'search-video',
  props: {
    
  },
  data () {
    return {
      query: '',
      results: '',
      imageOfDayMedia: '',
      imageOfDayTitle: '',
      imageOfDayDesc: '',
      imageOfDayURL: '',
      imageTitle: '',
      imageDesc: '',
      imageURL: '',
      imageLarge: ''
    }
  },
  methods: {
  getImageOfTheDay() {
      axios({
        method: 'get',
        url: 'https://api.nasa.gov/planetary/apod?api_key=AxpFkDHeLJTjVEY8WXfKdwF0vijVAmAjo1fI9qXZ'
      }).then(response => {
        var imageStartData = JSON.stringify(response.data);
        var imageStartParsed = JSON.parse(imageStartData);
        this.imageOfDayMedia = imageStartParsed.media_type;
        this.imageOfDayTitle = imageStartParsed.title;
        this.imageOfDayURL = imageStartParsed.url;
        this.imageOfDayDesc = imageStartParsed.explanation;
      });
    },
    getResultVideo(query) {
      axios.get('https://images-api.nasa.gov/search?q='+ query + '&media_type=audio').then(response => {console.log(response.data.collection.items);
      this.results = response.data.collection.items;
      var imagesData = JSON.stringify(response.data.collection.items);
      var imageParsed = JSON.parse(imagesData);
      var imageIndex = Math.floor(Math.random() * imageParsed.length);
      var imageData = imageParsed[imageIndex];
      this.imageTitle = imageData.data[0].title;
      this.imageDesc = imageData.data[0].description;
      this.imageURL = imageData.links[0].href;
      this.imageLarge = this.imageURL.match(/(h.*?~)/)[1] + 'orig.jpg';
      });      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .results img {
    height: 300px;
    margin: 10px;
  }
</style>
