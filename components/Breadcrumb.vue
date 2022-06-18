<template>
  <div
    class="
      breadcrumb-area
      pt--100
      pt_lg--150
      pt_md--100
      pt_sm--65
      pb--200
      bg_image--8
      breadcrumb-title-bar breadcrumb-title-white
    "
    :style="{
      backgroundImage: `url('/img/bg/${background}.jpg')`,
      backgroundColor: `hsl(0deg 0% 0% / 43%)`,
      backgroundBlendMode: `multiply`,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-center">
            <h1 class="heading">{{ title }}</h1>
            <div class="breadcrumb-insite">
              <b-breadcrumb
                class="core-breadcrumb"
                :items="items"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "title", "background"],
};
</script>
