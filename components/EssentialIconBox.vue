<template>
  <div class="brook-icon-boxes-area ptb--100">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-sm-6" v-for="item in boxList" :key="item.id">
          <div
            class="icon-box text-center no-border bg-transparant vibrate-style"
          >
            <div class="inner">
              <div class="icon">
                <i :class="item.icon"></i>
              </div>
              <div class="content">
                <h5 class="heading heading-h5">{{ item.title }}</h5>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxList: [
        {
          id: 1,
          icon: "fa fa-drum",
          title: "Exceptional",
          text: "I am a Professional Harpist and Accomplished Teacher",
        },
        {
          id: 2,
          icon: "fa fa-cloud",
          title: "Genuine",
          text: "I provide reliable and trustworthy service",
        },
        {
          id: 3,
          icon: "fa fa-fingerprint",
          title: "Innovative",
          text: "I am creative and strive to connect with you to create new ideas to make your wedding yours",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
