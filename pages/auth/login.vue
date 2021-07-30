<template>
	<div class="login-wrapper ">
      <!-- START Login Background Pic Wrapper-->
      <div class="bg-pic">
        <!-- START Background Caption-->
        <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
          <h1 class="semi-bold text-white">
			Meet pages - The simplest and fastest way to build web UI for your dashboard or app.</h1>
          <p class="small">
            Our beautifully-designed UI Framework come with hundreds of customizable features. Every Layout is just a starting point. ©2019-2020 All Rights Reserved. Pages® is a registered trademark of Revox Ltd.
          </p>
        </div>
        <!-- END Background Caption-->
      </div>
      <!-- END Login Background Pic Wrapper-->
      <!-- START Login Right Container-->
      <div class="login-container bg-white">
        <div class="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
          <img src="/img/logo-48x48_c.png" alt="logo" data-src="/img/logo-48x48_c.png" data-src-retina="/img/logo-48x48_c@2x.png" width="48" height="48">
          <h2 class="p-t-25">Get Started <br/> with your Dashboard</h2>
          <p class="mw-80 m-t-5">Sign in to your account</p>
          <!-- START Login Form -->
          <form id="form-login" class="p-t-15" role="form" @submit.prevent="userLogin">
            <!-- START Form Control-->
            <div class="form-group form-group-default">
              <label>Email Address</label>
              <div class="controls">
                <input v-model="login.email" type="email" class="form-control" required>
              </div>
            </div>
            <!-- END Form Control-->
            <!-- START Form Control-->
            <div class="form-group form-group-default">
              <label>Password</label>
              <div class="controls">
                <input v-model="login.password" type="password" class="form-control" required>
              </div>
            </div>
            <!-- START Form Control-->
            <div class="row">
              <div class="col-md-6 d-flex align-items-center justify-content-end">
                <button aria-label="" class="btn btn-primary btn-lg m-t-10" type="submit">Sign in</button>
              </div>
            </div>
            <div class="m-b-5 m-t-30">
              <a href="#" class="normal">Lost your password?</a>
            </div>
            <div>
              <a href="#" class="normal">Not a member yet? Signup now.</a>
            </div>
            <!-- END Form Control-->
          </form>
          <!--END Login Form-->
          <div class="pull-bottom sm-pull-bottom">
            <div class="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
              <div class="col-sm-9 no-padding m-t-10">
                <p class="small-text normal hint-text">
                  ©2019-2020 All Rights Reserved. Pages® is a registered trademark of Revox Ltd. <a href="">Cookie Policy</a>, <a href=""> Privacy and Terms</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Login Right Container-->
    </div>
</template>

<script>
	export default {
		layout: 'auth',
    data() {
      return {
        login: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      async userLogin() {
        try {
          const response = await this.$auth.loginWith('cookie', { data: this.login });
          return response;
          // console.log(response);
        } catch (err) {
          // console.log(err);
          return err;
        }
      }
    }
	}
</script>