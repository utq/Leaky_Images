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
          <mdb-nav-item router-link to="/" waves-fixed active>Single User attack</mdb-nav-item>
          <mdb-nav-item router-link to="multiService" waves-fixed>Mult Services Attack</mdb-nav-item>
          <mdb-nav-item router-link to="multiAttackWP" waves-fixed><a class="px-2 fa-lg li-ic"><i class="fab fa-wordpress"></i></a>Multi User Attack</mdb-nav-item>
          <mdb-nav-item router-link to="multiAttackOD" waves-fixed><a class="px-2 fa-lg tw-ic"><i class="fab fa-microsoft"></i></a>Multi User Attack</mdb-nav-item>
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
