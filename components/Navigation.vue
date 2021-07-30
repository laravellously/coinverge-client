<template>
    <div class="header p-r-0 bg-primary">
      <div class="header-inner header-md-height">
        <a href="#" class="btn-link toggle-sidebar d-lg-none text-white sm-p-l-0 btn-icon-link" data-toggle="horizontal-menu">
          <i class="pg-icon">menu</i>
        </a>
        <div class="">
          <div class="brand inline no-border d-sm-inline-block">
            <img src="@/assets/img/logo_white.png" alt="logo" data-src="@/assets/img/logo_white.png" data-src-retina="@/assets/img/logo_white_2x.png" width="78" height="22">
          </div>
          <ul class="d-lg-inline-block d-none  notification-list no-margin b-grey b-l b-r no-style p-l-30 p-r-20">
            <li class="p-r-10 inline">
              <div class="dropdown">
                <a href="javascript:;" class="header-icon btn-icon-link" data-toggle="dropdown">
                  <i class="pg-icon">grid</i>
                  <!-- <span class="bubble"></span> -->
                </a>
                <!-- START Notification Dropdown -->
                <div class="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">
                  <!-- START Notification -->
                  <div class="notification-panel">
                    <!-- START Notification Body-->
                    <div class="notification-body">
                      <!-- START Notification Item-->
                      <div class="notification-item clearfix">
                        <!-- START Notification Item-->
                        <div class="heading open">
                          <a href="#" class="text-complete pull-left d-flex align-items-center">
                            <!-- <i class="pg-icon m-r-10">map</i> -->
                            <span class="bold">Exchange</span>
                            <!-- <span class="fs-12 m-l-10">David Nester</span> -->
                          </a>
                          <!-- <div class="pull-right">
                            <div class="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                              <div><i class="pg-icon">chevron_down</i>
                              </div>
                            </div>
                            <span class=" time">few sec ago</span>
                          </div> -->
                          <div class="more-details">
                            <div class="more-details-inner">
                              <p class="small hint-text">
                                buy/sell securely using advanced tools
                              </p>
                            </div>
                          </div>
                        </div>
                        <!-- END Notification Item-->
                        <!-- START Notification Item Right Side-->
                        <!-- <div class="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                          <a href="#" class="mark"></a>
                        </div> -->
                        <!-- END Notification Item Right Side-->
                      </div>
                    </div>
                    <!-- END Notification Body-->
                  </div>
                  <!-- END Notification -->
                </div>
                <!-- END Notification Dropdown -->
              </div>
            </li>
          </ul>
          <div class="d-lg-inline-block menu-bar" data-pages-init='horizontal-menu'>
            <a href="#" class="btn-link header-icon toggle-sidebar d-lg-none" data-toggle="horizontal-menu">
              <i class="pg-icon">close</i>
            </a>
            <ul>
              <li>
                <a href="javascript:;"><span class="title">Buy Crypto</span>
                <span class=" arrow"></span></a>
                <ul class="">
                  <li class="">
                    <a href="#">Cash Deposit</a>
                    <!-- <small>Buy crypto using direct bank deposit</small> -->
                  </li>
                  <li class="">
                    <a href="#">P2P Trading</a>
                  </li>
                  <li class="">
                    <a href="#">WalletConnect</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#"><span class="title">Markets</span></a>
              </li>
              <li>
                <a href="javascript:;"><span class="title">Trade</span>
                <span class=" arrow"></span></a>
                <ul class="">
                  <li class="">
                    <a href="#">Exchange</a>
                  </li>
                  <li class="">
                    <a href="#">P2P Trading</a>
                  </li>
                  <li class="">
                    <a href="#">Bot Trading</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;"><span class="title">Finance</span>
                <span class=" arrow"></span></a>
                <ul class="">
                  <li class="">
                    <a href="#">Zuga&reg; Vault</a>
                  </li>
                  <li class="">
                    <a href="#">Zuga&reg; Loans</a>
                  </li>
                  <li class="">
                    <a href="#">Zuga&reg; Swap</a>
                  </li>
                  <li class="">
                    <a href="#">Zuga&reg; Pay</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <!-- START User Info-->
          <div class="pull-left p-r-10 fs-14 d-lg-inline-block d-none text-white">
            <span class="semi-bold">David</span> <span class="">Nest</span>
          </div>
          <div class="dropdown pull-right d-lg-block">
            <button class="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="profile dropdown">
              <span class="thumbnail-wrapper d32 circular inline">
						<img src="@/assets/img/profiles/avatar.jpg" alt="" data-src="@/assets/img/profiles/avatar.jpg"
							data-src-retina="@/assets/img/profiles/avatar_small2x.jpg" width="32" height="32">
					</span>
            </button>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
              <a href="#" class="dropdown-item"><span>Signed in as <br /><b>David Aunsberg</b></span></a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Your Profile</a>
              <a href="#" class="dropdown-item">Your Activity</a>
              <a href="#" class="dropdown-item">Your Archive</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Features</a>
              <a href="#" class="dropdown-item">Help</a>
              <a href="#" class="dropdown-item">Settings</a>
              <a href="#" class="dropdown-item">Logout</a>
              <div class="dropdown-divider"></div>
              <span class="dropdown-item fs-12 hint-text">Last edited by David<br />on Friday at 5:27PM</span>
            </div>
          </div>
          <!-- END User Info-->
          <a href="#" class="header-icon m-l-10 sm-no-margin sm-p-r-0 d-inline-block" data-toggle="quickview" data-toggle-element="#quickview">
            <i class="pg-icon btn-icon-link">menu_add</i>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
//   export default {
//     name: 'Navigation'
//   }
</script>