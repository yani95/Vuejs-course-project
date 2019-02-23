<template>
<div class="inline-block">
  <h1 class="text-info">Users page</h1>
  <ul v-if="users && users.length" >
    <li class="col-md-5" v-for="user of users" v-bind:key="user.id">
      <b-card class="mb-5 mr-5">
        <p class="alert alert-warning"><strong>Name: </strong>{{user.name}}</p>
        <p class="alert alert-info"><strong>Username: </strong>{{user.username}}</p>
        <p class="alert alert-warning"><strong>Email: </strong>{{user.email}}</p>
        <p class="alert alert-info"><strong>City: </strong>{{user.address.city}}</p>
        <p class="alert alert-warning"><strong>Street: </strong>{{user.address.street}}</p>
        <p class="alert alert-info"><strong>Phone: </strong>{{user.phone}}</p>
        <p class="alert alert-warning"><strong>Company name: </strong>{{user.company.name}}</p>
        <p class="alert alert-info"><strong>Website: </strong>{{user.website}}</p>
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
  name: 'users',
  data() {
    return {
      users: [],
      errors: []
    }
  },
  created() {
    service.getUsers().then(
      response => {
        this.users = response.data;
      }
    ).catch(e => {
      this.errors.push(e)
    })
  },
}
</script>
<style scoped>
  ul li {
    display: inline-block !important;
  }

  .card-body {
    opacity: 40%;
  }
</style>
