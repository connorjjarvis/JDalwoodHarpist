<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

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
                    Jessica Dalwood has a range of performance experience, including weddings, funerals and social functions, including a performance
                    for the Royal Society of Engineering at City Hall, Cardiff, where Princess Anne was present. Jessica has performed solos and with
                    ensembles at a variety of venues in and around Cardiff such as the Wales Millenium Centre, and Cardiff Castle and has taken part
                    in various concerts within Cardiff University.
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
                    The harp is a particularly elegant instrument in its look and sound. It will add a magical atmosphere to a couple's special day.
                    Jessica is an experienced wedding harpist and as well as playing a variety of traditional wedding music, is prepared to do any
                    arrangements of modern or popular songs when couples request them.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-12 mt--35">
            <!-- Start Single List -->
            <div class="bk-list--2 move-up wow">
              <div class="list-header mb--30 with-ckeck center" v-for="list in lists" :key="list.i">
                <div class="marker dark-color"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
            </div>
            <!-- End Single List -->

            <!-- Image Wrap -->
            <div class="image-wrap mt--30 center">
              <div class="thumb">
                <div class="shape">
                  <img class="egg" src="~/assets/images/photo1.gif" alt="shape image" />
                </div>
              </div>
            </div>
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
              <div class="basic-thine-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Divider Area -->
    <div class="brook-call-to-action bg_color--1 ptb--80 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-12">
            <div class="call-content vertical-call-toaction text-center">
              <h3 class="heading heading-h3">Interested in creating your perfect day?</h3>
              <div class="spacing"></div>
              <div class="call-btn text-center">
                <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded">Click here for prices</n-link>
              </div>
            </div>
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
              <div class="basic-thine-line"></div>
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
              <h5 class="heading heading-h5">Basic thick line</h5>
              <p class="bk_pra mt--15">
                Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for
                particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both
                front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as
                flexibility.
              </p>
              <div class="space"></div>
              <div class="basic-thine-line"></div>
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
    HeaderBlack: () => import('@/components/HeaderBlack'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    FooterTwo: () => import('@/components/FooterTwo'),
  },

  data() {
    return {
      navOpen: false,
      items: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Weddings',
          active: true,
        },
      ],
      lists: [
        {
          title: 'Professional',
          marker: 1,
        },
        {
          title: 'Reliable',
          marker: 2,
        },
        {
          title: 'Creative',
          marker: 3,
        },
        {
          title: 'Adaptive',
          marker: 4,
        },
      ],
    };
  },

  head() {
    return {
      title: 'Weddings',
    };
  },
};
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
