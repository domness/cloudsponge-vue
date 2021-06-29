<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue';

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
  setup(props) {
    let isLoading = ref(true);

    const afterInit = () => { isLoading.value = false };

    onMounted(() => {
      nextTick(() => {
        let externalScript = document.createElement('script');
        externalScript.setAttribute('src', `https://api.cloudsponge.com/widget/${props.apiKey}.js`);
        externalScript.async = true;
        externalScript.onload = () => {
          window.cloudsponge?.init({
            ...props.config,
            afterSubmitContacts: props.afterSubmit,
            afterInit: afterInit(),
          });
        }
        document.head.appendChild(externalScript);
      });
    });

    return {
      isLoading,
    }
  },
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
