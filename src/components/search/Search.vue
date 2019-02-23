<template>
  <div class="search">
    <form v-on:submit.prevent="getResult(query)">
      <h1 class="text-info">Search anything from nasa api:</h1>     
      <input type="text" class="form-control mx-auto" style="width: 50em" placeholder="Search..." v-model="query">
    </form>
     
    <div class="results" v-if="results">
      <div v-for="result in results" :key="result.id" class="col-md-5" style="display:inline-block">
        <b-card class="m-5">
          <b-card-text>
            <h3><strong>{{result.data[0].title}}</strong></h3>
            <img v-bind:src="result.links[0].href" alt="image"/>
            <h4 class="text-info">Secondary creator: {{result.data[0].secondary_creator}}</h4>
            <h4>Center: {{result.data[0].center}}</h4>
            <h4 class="text-secondary">Description: {{result.data[0].description}}</h4>
            <h4>Nasa id: {{result.data[0].nasa_id}}</h4>
            <h4 class="text-warning">Date: {{result.data[0].date_created | moment("MMMM D Y")}}</h4>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="alert alert-primary" role="alert" v-if="!query.lenght || !results">No results!</div>
  </div>
</template>

<script>
import axios from 'axios';
// import service from '../../api/data-service';

export default {
  name: 'search',
  props: {
    
  },
  data () {
    return {
      query: '',
      results: '',
    }
  },
  created() {
    // this.getSearchResults();
  },
  methods: {
    // getSearchResults(query){
    //   this.$router.push({path: 'search?q='+ query + '&media_type=image'});
    //   service.getSearchResults((response) => {
    //       this.results = response.data.collection.items;
    //     });
       
    // },
    getResult(query) {
      axios.get('https://images-api.nasa.gov/search?q='+ query + '&media_type=image').then(response => {console.log(response.data.collection.items);
      this.results = response.data.collection.items;
      });      
    },
  }
}
</script>

<style scoped>
  .results img {
    height: 300px;
    margin: 10px;
  }
  input {
    height: 60px;
  }
  b-card {
    width: 300px;
  }
  img {
    max-width: 30em;
    max-height: 55rem;
  }
</style>
