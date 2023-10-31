<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :items="items" title="Teaching" background="teaching" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row">

          <div class="col">
          <div class="row center">
          <div class="col">
            <div class="bk-list--2 mt--30 move-up wow" >
              <div class="list-header mb--30 with-ckeck " v-for="list in listOne" :key="list.i">
                <div class="marker dark-color"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
              </div>
              </div>
          <div class="col">
                          <div class="bk-list--2 mt--30 move-up wow">
              <div class="list-header mb--30 with-ckeck " v-for="list in listTwo" :key="list.i">
                <div class="marker dark-color"></div>
                <div class="title-wrap">
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
              </div>
              </div>
              </div>
            <!-- End Single List -->

          <div class="row" style="justify-content: center;">
            <!-- Image Wrap -->
            <div class="image-wrap mt--30">
              <div class="thumb">
                <div class="shape">
                  <img class="egg" src="~/assets/images/photo2.gif" alt="shape image" />
                </div>
              </div>
            </div>
          </div>
      </div>
          <div class="col">
            <!-- Start Single List -->
            <div class="bk-list move-up wow">
              <div class="list-header">
                <div class="marker"></div>
                <div class="title-wrap">
                  <h5 class="heading heading-h5">Proficient Teacher</h5>
                  <p class="bk_pra">
                    Jessica Dalwood has a range of music teaching experience, from class music teaching to private and peripatetic instrumental teaching. She also takes group sessions, currently on lap harps. She teaches both folk lever harp and full sized concert pedal harp.
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
                  <h5 class="heading heading-h5">Harp Teaching</h5>
                  <p class="bk_pra">
                    Jessica’s teaching experience ranges from private one-to-one tuition to group tuition within schools and even whole class instrument teaching. She will tailor the teaching style to whatever is appropriate for each individual’s learning pattern and also musical preferences. She tries to encourage pupils with performance and taking grades, however this is by no means obligatory and plenty of individuals play just for pleasure!
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
                  <h5 class="heading heading-h5">Violin and Viola Teaching</h5>
                  <p class="bk_pra">
                    Jessica is also an accomplished violin and viola player and has had a lot of orchestral experience and has been principal violinist whilst at school and with local orchestras. She has grade 8 in all instruments she teaches. She has taught both of these instruments privately and in group sessions within schools.
                  </p>
                </div>
              </div>
            </div>
            <!-- End Single List -->
          </div>

        </div>
      </div>
    </div>
    <!-- Start Divider Area -->
<div class="brook-call-to-action bg_color--1 ptb--80 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-12">
            <div class="call-content vertical-call-toaction text-center">
              <h3 class="heading heading-h3">Interested in learning?</h3>
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
          text: 'Teaching',
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
      title: 'Teaching',
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