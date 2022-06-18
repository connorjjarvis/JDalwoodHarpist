<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :items="items" title="Orchestral" background="orchestral" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <!-- Start Single List -->
            <div class="bk-list move-up wow">
              <div class="list-header">
                <div class="marker"></div>
                <div class="title-wrap">
                  <h5 class="heading heading-h5">Professionalism</h5>
                  <p class="bk_pra">
                    The harp is a challenging instrument to play with an Orchestra, partly due to there only usually being one or two players so there is very little room for error and also due to having to compete with a large groups of other instrumentalists.


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
                  <h5 class="heading heading-h5">Experienced</h5>
                  <p class="bk_pra">
                    Jessica has played for several Orchestras including the National Children's Orchestra, Dorset County Orchestra, Sherborne Community Orchestra and Cardiff University Symphony Orchestra. In 2011 she also played harp with the Hallé Youth Orchestra on their summer tour of Cornwall. A notable performance was playing as the harp soloist in Mozart's flute and harp concerto with the Dorset County Orchestra.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->
          </div>


          <div class="col">
          <div class="row">
          <div class="col">
            <div class="bk-list--2 mt--30 move-up wow">
              <div class="list-header mb--30 with-ckeck center" v-for="list in listOne" :key="list.i">
                <div class="marker dark-color"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
              </div>
              </div>
          <div class="col">
                          <div class="bk-list--2 mt--30 move-up wow">
              <div class="list-header mb--30 with-ckeck center" v-for="list in listTwo" :key="list.i">
                <div class="marker dark-color"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
              </div>
              </div>
              </div>
            <!-- End Single List -->

          <div class="row">
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
    <div class="brook-call-to-action bg_color--1 ptb--80 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-12">
            <div class="call-content vertical-call-toaction text-center">
              <h3 class="heading heading-h3">Contact me to find out more</h3>
              <div class="spacing"></div>
              <div class="call-btn text-center">
                <n-link
                  to="/contact"
                  class="
                    brook-btn
                    bk-btn-theme
                    text-theme
                    btn-sd-size btn-rounded
                  "
                  >Contact me now</n-link
                >
              </div>
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
          text: 'Orchestral',
          active: true,
        },
      ],
      listOne: [
        {
          title: 'Professional',
          marker: 1,
        },
        {
          title: 'Reliable',
          marker: 2,
        }
      ],      
      listTwo: [
        {
          title: 'Creative',
          marker: 1,
        },
        {
          title: 'Adaptive',
          marker: 2,
        },
      ],
    };
  },

  head() {
    return {
      title: "Orchestral",
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
