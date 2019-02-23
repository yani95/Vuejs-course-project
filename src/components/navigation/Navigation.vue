<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="posts">Posts</b-nav-item>
          <b-nav-item to="photos">Photos</b-nav-item>
          <b-nav-item to="users">Users</b-nav-item>
          <b-nav-item to="about">About</b-nav-item>
          <b-nav-item to="search">Search images</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  export default {
  };
</script>

<style>
nav {
  position: absolute;
  top: 0;
  height: 85px;
  font-size: 26px;
  margin-top: -60px;
  clear: both;
}
</style>
