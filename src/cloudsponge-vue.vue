<script lang="ts">
import Vue from 'vue';

declare global {
  interface Window { cloudsponge: any; }
};

export default Vue.extend({
  name: 'CloudspongeVue',
  props: {
    apiKey: {
      type: String,
      default: '',
    },
    afterSubmit: {
      type: Function,
      default: () => {},
    },
    config: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$nextTick(() => {
      let externalScript = document.createElement('script');
      externalScript.setAttribute('src', `https://api.cloudsponge.com/widget/${this.apiKey}.js`);
      externalScript.async = true;
      externalScript.onload = () => {
        window.cloudsponge?.init({
          ...this.config,
          afterSubmitContacts: this.afterSubmit,
        });
      }
      document.head.appendChild(externalScript);
    });
  },
});
</script>

<template>
  <div class="cloudsponge-vue">
    <div class="cloudsponge-launch">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>
