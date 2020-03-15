<template>
  <div class="app">
        <!--Navbar-->
    <mdb-navbar :color="'unique-color'" position="top" dark scrolling>
      <mdb-navbar-brand href="#">
        <img src="assets/leaky.png" height="30" alt="Leaky Images">
        <strong> Images</strong>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item router-link to="/" waves-fixed active>Single User Attacks</mdb-nav-item>
          <mdb-nav-item router-link to="multiAttack" waves-fixed>Multi User Attack</mdb-nav-item>
          <mdb-nav-item router-link to="htmlOnly" waves-fixed>HTML Only</mdb-nav-item>
          <mdb-nav-item router-link to="how" waves-fixed>How It Works</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <br />
    <br />
    <router-view/>
  </div>
</template>

<script>
  import {mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbNavbarBrand } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbNavbarBrand
    }
  }
</script>