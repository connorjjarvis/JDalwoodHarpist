<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :items="items" title="Weddings" background="wedding" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
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


          <div class="col">
          <div class="row">
          <div class="col">
            <div class="bk-list--2 mt--30 move-up wow" style="float:right;">
              <div class="list-header mb--30 with-ckeck center" v-for="list in listOne" :key="list.i">
                <div class="marker dark-color"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
              </div>
              </div>
          <div class="col">
                          <div class="bk-list--2 mt--30 move-up wow" style="float:left;">
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
                  <img class="egg" style="float: right;" src="~/assets/images/photo1.gif" alt="shape image" />
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
    <!-- End Divider Area -->
    <div class="brook-call-to-action bg_color--1 ptb--80 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-12">
            <div class="call-content vertical-call-toaction text-center">
              <h3 class="heading heading-h3">Create your perfect day now</h3>
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
        <!-- End Divider Area -->
        <!-- Start Divider Area -->
        <div class="brook-dividers-area bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dividers-inner">
                            <div class="space"></div>
                            <h5 class="heading heading-h5">Elegant and Beautiful Music</h5>
                            <p class="bk_pra mt--15">The harp is an elegant instrument with a beautiful tone that will add a magical touch to your wedding or special occasion.
</p>

            <div class="container mt--45">
        <div class="row align-items-center" style="width:75%; margin-left: auto; margin-right: auto">
                      <div class="col">
  <p>Beauty and the beast</p> <br> <audio preload="metadata" controls="controls"><source src="/_nuxt/assets/music/BeautyandtheBeast.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio><p>Can't help falling in love with you</p> <br> <audio preload="metadata" controls="controls"><source src="/_nuxt/assets/music/CantHelpFallingInLoveWithYou.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
</audio></div>

                    <div class="col"><p>Fire Dance</p> <br> <audio preload="metadata" controls="controls"><source src="/_nuxt/assets/music/FireDance.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
</audio><p>Watching the Wheat</p> <br> <audio preload="metadata" controls="controls"><source src="/_nuxt/assets/music/WatchingTheWheat.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
</audio></div>
                        </div>
                        </div>
                            <div class="space"></div>
                            <div class="basic-thine-line"></div>
                        </div>
                    </div>
                        </div>
            </div>
            </div>
        <!-- End Divider Area -->

    <div
      class="
        brook-pricing-table-area
        ptb--50
        ptb-md--40
        ptb-sm--40
        bg_color--5
      "
    >

    </div></div></div>
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
      title: "Weddings",
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
