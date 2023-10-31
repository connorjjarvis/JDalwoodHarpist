<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :items="items" title="History" background="history" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row">
          <div class="col">
            <!-- Start Single List -->
            <div class="bk-list move-up wow">
              <div class="list-header">
                <div class="title-wrap">
                  <p class="bk_pra">
                    Jessica commenced her musical career with the violin when she started school, being taught by suzuki method. She soon moved on to private lessons where she started taking grades with the ABRSM exam board. At the age of 8 she joined South Somerset County Orchestra, being the youngest member the Orchestra had ever had! She progressed later to being the principal violinist. After playing with local orchestras she then gained a place with the National Children's Orchestra on violin and viola.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->

            <!-- Start Single List -->
            <div class="bk-list mt--45 move-up wow">
              <div class="list-header">
                <div class="title-wrap">
                  <p class="bk_pra">
                    Her harp career began at the age of 12 when she, along with her sister, had been watching the 100 harps at Cardiff's Millenium Stadium on tele in 2000. She also attended a concert where Marisa Robles perform Mozart's flute and harp concerto, and made it a goal to be able to perform this piece herself, which she achieved with the Dorset County Orchestra in 2010.
                  </p>
                </div>
              </div>
            </div>
                        <div class="bk-list mt--45 move-up wow">
              <div class="list-header">
                <div class="title-wrap">
                  <p class="bk_pra">
                   Jessica has studied harp with Sarah Deere-Jones, Ruth Faber and Valerie Aldrich-Smith. She studied music at Cardiff University with harp as her principal instrument, also partaking in ensembles, orchestras and choirs. Whilst at Cardiff University she also attended a number of masterclasses at the Royal Welsh College of Music and Drama with Menir Heulen, Caryl Thomas and Catrin Finch.
                  </p>
                </div>
              </div>
            </div>
                        <div class="bk-list mt--45 move-up wow">
              <div class="list-header">
                <div class="title-wrap">
                  <p class="bk_pra">
Jessica has performed and taught on the lap harp, the 34 string folk lever harp and 48 string concert harp.

                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->
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
          text: 'About me & my history',
          active: true,
        },
      ]
    };
  },

  head() {
    return {
      title: 'History',
    };
  },
};
</script>
