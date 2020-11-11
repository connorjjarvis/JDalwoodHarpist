<template>
<div>
  <b-row class="text-center">  
        <b-col>
            <h2>My Audio Clips</h2>
        </b-col>
    </b-row>
    <b-row class="text-center">
    <b-col sm="2" md="3">
      <img src="~/assets/photo1.gif">
    </b-col>
    <b-col sm="8" md="8">
      <p>Listen to some free audio clips here </p>
      <iframe width="100%" height="450" scrolling="no" margin-top:10px frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F7528370&amp;color=5f00ff&amp;auto_play=false&amp;show_artwork=true"></iframe>
    </b-col>
  </b-row>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
#musicContainer {
    margin: 0 auto;
}

#music {
    display: inline-block;
    margin-right: 10px;
    text-align: center;
}
</style>
