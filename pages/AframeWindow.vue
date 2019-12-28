<template>
  <div id="aframe-window">
    <a-scene background="color: #ECECEC" embedded>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Aframe from 'aframe'
@Component({
  components: {
    Aframe,
  }
})
export default class AframeWindow extends Vue {}
</script>

<style>
@media only screen and (min-width: 640px) {
  #aframe-window {
    width: 640px;
    height: 320px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 640px) {
  #aframe-window {
    width: 320px;
    height: 320px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

