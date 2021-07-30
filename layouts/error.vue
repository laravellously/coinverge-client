<template>
  <div>
    <div class="d-flex justify-content-center full-height full-width align-items-center">
    <div class="error-container text-center">
      <h1 class="error-number">{{ error.statusCode }}</h1>
      <h2 v-if="error.statusCode === 404" class="semi-bold">The requested page or resource is not found on this server.</h2>
      <h2 v-if="error.statusCode === 500" class="semi-bold">An error occurred on this server.</h2>
      <!-- <p class="p-b-10">This page you are looking for does not exsist <a href="#">Report this?</a> -->
      </p>
      <div class="error-container-innner text-center">
        <form class="error-form">
          <div class=" transparent text-left">
            <div class="form-group form-group-default input-group">
              <div class="form-input-group">
                <label>Search</label>
                <input class="form-control" placeholder="Try searching the missing page" type="email">
              </div>
              <div class="input-group-append">
                <span class="input-group-text transparent">
                    <span class="pg-icon p-l-5">search</span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="pull-bottom sm-pull-bottom full-width d-flex align-items-center justify-content-center">
    <div class="error-container">
      <div class="error-container-innner">
        <div class="p-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up row no-margin">
          <div class="col-md-3 no-padding d-flex align-items-center justify-content-center">
            <img alt="" data-src="img/demo/pages_icon.png" data-src-retina="img/demo/pages_icon_2x.png" height="60" src="img/demo/pages_icon.png" width="60">
          </div>
          <div class="col-md-9 no-padding d-flex align-items-center justify-content-center">
            <p class="small no-margin flex-1">Create a pages account. If you have a facebook account, log into it for this process. Sign in with <a href="#">Facebook</a> or <a href="#">Google</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
}
</script>