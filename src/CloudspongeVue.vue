<script lang="ts">
import { defineComponent } from 'vue';

declare global {
  interface Window { cloudsponge: any; }
};

export default defineComponent({
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
    }
  },
  data: () => ({
    isLoading: true,
  }),
  mounted() {
    this.$nextTick(() => {
      let externalScript = document.createElement('script');
      externalScript.setAttribute('src', `https://api.cloudsponge.com/widget/${this.apiKey}.js`);
      externalScript.async = true;
      externalScript.onload = () => {
        window.cloudsponge?.init({
          ...this.config,
          afterSubmitContacts: this.afterSubmit,
          afterInit: this.afterInit,
        });
      }
      document.head.appendChild(externalScript);
    });
  },
  methods: {
    afterInit() {
      this.isLoading = false;
    }
  }
});
</script>

<template>
  <div class="cloudsponge-launch">
    <slot name="loading" v-if="isLoading"></slot>
    <slot name="body" v-else></slot>
  </div>
</template>

<style scoped>
</style>
