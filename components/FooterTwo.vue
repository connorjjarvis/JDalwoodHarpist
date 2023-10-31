<template>
  <footer
    class="
      page-footer
      bg_color--3
      pl--150
      pr--150
      pl_lg--30
      pr_lg--30
      pl_md--30
      pr_md--30
      pl_sm--5
      pr_sm--5
    "
  >
    <!-- Start Footer Top Area -->
    <div class="bk-footer-inner pt--50 pb--30 pt_sm--100">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-sm-6">
            <div class="footer-widget text-var--2">
              <h2 class="widgettitle">Location Coverage</h2>
              <div class="footer-inner">
                <p>
                  Based in Somerset/South West England, I primarily cover
                  Somerset, Dorset, Bath & Bristol, but willing to travel if
                  needed.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 mt_mobile--40">
            <div class="footer-widget text-var--2 menu--about">
              <h2 class="widgettitle">Links</h2>
              <div class="footer-menu">
                <ul class="ft-menu-list bk-hover">
                  <li>
                    <n-link to="/about-me">About me</n-link>
                  </li>
                  <li>
                    <n-link to="/contact">Contact</n-link>
                  </li>
                </ul>
                <div class="social-share social--transparent text-white">
                  <a
                    href="https://www.facebook.com/JessicaDalwoodHarpist/?fref=ts"
                    target="_blank"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6 mt_md--40 mt_sm--40">
            <div class="footer-widget text-var--2 menu--contact">
              <h2 class="widgettitle">Contact</h2>
              <div class="footer-address">
                <div class="bk-hover">
                  <p>
                    Jessica Dalwood <br />
                    United Kingdom
                  </p>
                  <p>
                    <a href="mailto:j.dalwood@hotmail.co.uk"
                      >j.dalwood@hotmail.co.uk</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Footer Top Area -->

    <!-- Start Copyright Area -->
    <div class="copyright ptb--25 text-var-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="copyright-right text-md-right text-center">
              <p>
                &copy; 2021
                               developed by
                <a href="https://connorjarvis.co.uk"><b>Connor Jarvis</b></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Copyright Area -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      instagramPosts: [
        {
          id: 1,
          image: "/img/instagram/instagram-1.jpg",
          like: "1K",
          comment: "8",
        },
        {
          id: 2,
          image: "/img/instagram/instagram-2.jpg",
          like: "6K",
          comment: "9",
        },
        {
          id: 3,
          image: "/img/instagram/instagram-3.jpg",
          like: "3K",
          comment: "4",
        },
        {
          id: 4,
          image: "/img/instagram/instagram-4.jpg",
          like: "1K",
          comment: "3",
        },
        {
          id: 5,
          image: "/img/instagram/instagram-5.jpg",
          like: "2K",
          comment: "7",
        },
        {
          id: 6,
          image: "/img/instagram/instagram-6.jpg",
          like: "1K",
          comment: "8",
        },
      ],
    };
  },
};
</script>
