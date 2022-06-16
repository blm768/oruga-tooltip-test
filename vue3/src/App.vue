<script setup lang="ts">
import { ref, triggerRef } from 'vue';

const appendToBody = false; // No ref since we can't change this at runtime w/o errors
const position = ref('auto');

const viewport = ref(window.visualViewport);

window.visualViewport.addEventListener('resize', () => { 
  viewport.value = window.visualViewport;
  triggerRef(viewport);
});
window.visualViewport.addEventListener('scroll', () => {
  viewport.value = window.visualViewport;
  triggerRef(viewport);
});
</script>

<template>
  <OTooltip
    id="top-left"
    :append-to-body="appendToBody"
    label="Top Left Tooltip"
    :position="position"
  >
    Top Left
  </OTooltip>

  <OTooltip
    id="top-middle"
    :append-to-body="appendToBody"
    label="Top Middle Tooltip"
    :position="position"
  >
    Top Middle
  </OTooltip>


  <OTooltip
    label="Bottom Left Tooltip"
    :append-to-body="appendToBody"
    id="bottom-left"
    :position="position"
  >
    Bottom Left
  </OTooltip>

  <OTooltip
    label="Middle Tooltip"
    :append-to-body="appendToBody"
    id="middle"
    :position="position"
  >
    Middle
  </OTooltip>

  <OField label="Position">
    <OSelect v-model="position">
      <option value="auto">Auto</option>
      <option value="top">Top</option>
      <option value="left">Left</option>
      <option value="right">Right</option>
      <option value="bottom">Bottom</option>
    </OSelect>
  </OField>

  <dl>
    <dt>Left</dt><dd>{{viewport.offsetLeft}}</dd>
    <dt>Top</dt><dd>{{viewport.offsetTop}}</dd>
    <dt>Width</dt><dd>{{viewport.width}}</dd>
    <dt>Height</dt><dd>{{viewport.height}}</dd>
  </dl>
</template>

<style>
@import '@oruga-ui/oruga-next/dist/oruga.css';

body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  position: relative;
  width: 100vw;
}
</style>

<style scoped>

#top-middle {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

#bottom-left {
  bottom: 0;
  left: 0;
  position: absolute;
}

#middle {
  top: 50%;
  left: 50%;
  position: absolute;
}
</style>
