<template>
  <div class="page-container p-2 bg-white">
    <div class="page-content-wrapper ">
      <!-- START PAGE CONTENT -->
      <div class="content ">
        <div class="">
          <h1>Hello Nuxters! 👋</h1>
          <p>
            This page is rendered on the <strong>{{ rendering }}</strong>
          </p>
          <p v-if="rendering === 'server'">
            First load or hard refresh is done on server side.
          </p>
          <p v-if="rendering === 'client'">Navigation is done on client side.</p>
          <ul>
            <li>Refresh the page for server side rendering.</li>
            <li>Click the links to see client side rendering.</li>
          </ul>
          <NuxtLink to="/about">About Page</NuxtLink>
        </div>
        <!-- START JUMBOTRON -->
        <div class="jumbotron">
          <div class=" container p-l-0 p-r-0   container-fixed-lg sm-p-l-0 sm-p-r-0">
            <div class="inner">
              <!-- START BREADCRUMB -->
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <!-- END JUMBOTRON -->
      </div>
      <!-- END PAGE CONTENT -->
    </div>
  </div>
</template>
<script>
export default {
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
