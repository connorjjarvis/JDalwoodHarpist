<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <Breadcrumb :items="items" title="Weddings" background="wedding" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <!-- Start Single List -->
            <div class="bk-list move-up wow">
              <div class="list-header">
                <div class="marker"></div>
                <div class="title-wrap">
                  <h5 class="heading heading-h5">Professional Experience</h5>
                  <p class="bk_pra">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum porta lorem vitae eleifend pretium. Nullam
                    dignissim, nulla in iaculis pretium, lectus purus suscipit
                    mi, quis iaculis dui augue et ante. Maecenas convallis
                    commodo dui, dapibus interdum erat pharetra vitae.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->

            <!-- Start Single List -->
            <div class="bk-list mt--45 move-up wow">
              <div class="list-header">
                <div class="marker"></div>
                <div class="title-wrap">
                  <h5 class="heading heading-h5">Unique ideas</h5>
                  <p class="bk_pra">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum porta lorem vitae eleifend pretium. Nullam
                    dignissim, nulla in iaculis pretium, lectus purus suscipit
                    mi, quis iaculis dui augue et ante. Maecenas convallis
                    commodo dui, dapibus interdum erat pharetra vitae.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <!-- Start Single List -->
            <div class="bk-list--2 mt--45 move-up wow">
              <div class="list-header" v-for="list in lists" :key="list.i">
                <div class="marker with-dot"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
            </div>
            <!-- End Single List -->
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <!-- Start Single List -->
            <div class="bk-list--2 mt--45 move-up wow">
              <div class="list-header" v-for="list in lists" :key="list.i">
                <div class="marker with-dot"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
            </div>
            <!-- End Single List -->
          </div>
        </div>
      </div>
    </div>
    <!-- Start Divider Area -->
    <div class="brook-dividers-area bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="dividers-inner">
              <div class="space"></div>
              <div class="text-center">
                <div class="basic-modern-dots">
                  <div class="dot first-circle"></div>
                  <div class="dot second-circle"></div>
                  <div class="dot third-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Divider Area -->
    <!-- Start Divider Area -->
    <div class="brook-dividers-area bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="dividers-inner">
              <div class="space"></div>
              <h5 class="heading heading-h5">Modern dots</h5>
              <p class="bk_pra mt--15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porta lorem vitae eleifend pretium. Nullam dignissim,
                nulla in iaculis pretium, lectus purus suscipit mi, quis iaculis
                dui augue et ante. Maecenas convallis commodo dui, dapibus
                interdum erat pharetra vitae.
              </p>
              <div class="space"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Divider Area -->

    <FooterTwo />
  </div>
</template>

<script>
export default {
  components: {
    HeaderBlack: () => import("@/components/HeaderBlack"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    FooterTwo: () => import("@/components/FooterTwo"),
  },

  data() {
    return {
      navOpen: false,
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Weddings",
          active: true,
        },
      ],
      lists: [
        {
          title: "Entry 1",
          marker: 1,
        },
        {
          title: "Entry 2",
          marker: 2,
        },
        {
          title: "Entry 3",
          marker: 3,
        },
        {
          title: "Entry 4",
          marker: 4,
        },
        {
          title: "Entry 5",
          marker: 5,
        },
        {
          title: "Entry 6",
          marker: 6,
        },
      ],
    };
  },

  head() {
    return {
      title: "Dividers",
    };
  },
};
</script>
