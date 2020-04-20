<template>
  <div class="main-parent">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item to="./">Home</b-nav-item>
          <b-nav-item to="about">About</b-nav-item>
          <b-nav-item to="contact">Contact Us</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
     <div class="main-area">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
};
</script>
<style>
.main-parent {
  background-color: darkgray;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
 .main-area {
   margin: 1, 1, 1, 1;
 }
</style>