<template>
<b-container fluid="md" id="navbar">
  <b-navbar toggleable="lg" type="light" align="center">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/weddings">Wedding & Events</b-nav-item>
        <b-nav-item href="/teaching">Teaching</b-nav-item>
        <b-nav-item href="/orchestral">Orchestral</b-nav-item>
        <b-nav-item href="/repertoire">Repertoire</b-nav-item>
        <b-nav-item href="/history">History</b-nav-item>
        <b-nav-item href="/audio">Audio Clips</b-nav-item>
        <b-nav-item href="/contact">Contact</b-nav-item>
        <b-nav-item href="/testimonials">Testimonials</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</b-container>
</template>

<script lang="ts">
export default {
    name: 'Navbar',
    computed: {},
    methods: {}
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  font-size: 1.3rem; 
  font-weight: bold;
  color: #000000;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0,0,0,0.15) ;
}

.navbar-light .navbar-nav .nav-link:hover { 
  color: #cea6fe;
}

ul.navbar-nav {
    margin:0 auto;
}

.navbar-toggler {
  margin: 0 auto;
}

#navbar {
  background-color: #e0d1e0;
      border-bottom: 2px solid #c7bac7;
      border-radius: 20px 20px 0px 0px;
}

</style>