<template>
    
    <div class="main-container">

        <HeaderBlack class="bg_color--23 border-bottom" @togglenav="navOpen = !navOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroEssential />

        <div class="brook-call-to-action bg_color--24 ptb--40">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-6">
                        <div class="call-content essential-cta-content text-center text-sm-left">
                            <h3 class="text-white wow move-up">Let’s create something extraordinary together.</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="call-btn text-center text-md-right mt_mobile--20 wow move-up">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size essential-btn">Join us now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <EssentialIconBox />

        <EssentialService />

        <EssentialSkillProgress />

        <EssentialTestimonial />

        <ContactUsThree />

        <FooterTwo />

    </div>

</template>

<script>
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroEssential: () => import('@/components/HeroEssential'),
            EssentialIconBox: () => import('@/components/EssentialIconBox'),
            EssentialService: () => import('@/components/EssentialService'),
            EssentialCaseStudy: () => import('@/components/EssentialCaseStudy'),
            EssentialTestimonial: () => import('@/components/EssentialTestimonial'),
            ContactUsThree: () => import('@/components/ContactUsThree'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-23', 'template-font-7', 'CerebriSans-font')
        },

        head() {
            return {
                title: 'Home Essential'
            }
        },
    };
</script>