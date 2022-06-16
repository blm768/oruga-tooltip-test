<template>
  <div id="app">
    <OTooltip
      id="top-left"
      label="Top Left Tooltip"
      :position="position"
    >
      Top Left
    </OTooltip>

    <OTooltip
      id="top-middle"
      label="Top Middle Tooltip"
      :position="position"
    >
      Top Middle
    </OTooltip>


    <OTooltip
      label="Bottom Left Tooltip"
      id="bottom-left"
      :position="position"
    >
      Bottom Left
    </OTooltip>

    <OTooltip
      label="Middle Tooltip"
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

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      position: 'auto',
    };
  },
});
</script>

<style>
@import '@oruga-ui/oruga/dist/oruga.css';

body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#app {
  height: 100vh;
  position: relative;
  width: 100vw;
}

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
