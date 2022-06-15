<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <Breadcrumb :items="items" title="Teaching" background="teaching" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row">

          <div class="col center">
            <!-- Start Single List -->
            <div class="bk-list--2 mt--45 move-up wow">
              <div class="list-header mb--30 with-ckeck center" style="padding-left: 20%;" v-for="list in lists" :key="list.i">
                <div class="marker  dark-color"></div>
                <div class="title-wrap" >
                  <h6 class="heading heading-h5">{{ list.title }}</h6>
                </div>
              </div>
            </div>
            <!-- End Single List -->
        <div class="image-wrap mt--30 center">
            <div class="thumb">
                <div class="shape">
                    <img class="egg" src="~/assets/images/photo2.gif" alt="shape image">
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
                interdum erat pharetra vitae. Maecenas semper purus non
                tincidunt mattis. Maecenas consectetur ipsum eu tempor suscipit.
                Vivamus in ex efficitur, tincidunt leo non, lacinia nulla. Cras
                luctus fermentum quam, rhoncus elementum nibh gravida ut. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
                maximus ex.
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
          text: "Teaching",
          active: true,
        },
      ],
      lists: [
        {
          title: "Professional",
          marker: 1,
        },
        {
          title: "Reliable",
          marker: 2,
        },
        {
          title: "Creative",
          marker: 3,
        },
        {
          title: "Adaptive",
          marker: 4,
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

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>