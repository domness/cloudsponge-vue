<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CloudspongeVue', // vue component name
  props: {
    apiKey: {
      type: String,
      default: '6PCap7zRaiSNYcpB4znxpQ',
    },
  },
  mounted() {
    let externalScript = document.createElement('script');
    externalScript.setAttribute('src', `https://api.cloudsponge.com/widget/${this.apiKey}.js`);
    document.head.appendChild(externalScript);
  },
});
</script>

<template>
  <div class="cloudsponge-vue">
    <div class="cloudsponge-launch">
      <span>Something</span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>
