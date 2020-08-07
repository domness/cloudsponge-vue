<script lang="ts">
import Vue from 'vue';
import CloudspongeVue from '@/cloudsponge-vue.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CloudspongeVue
  }
});
</script>

<template>
  <div id="app">
    <cloudsponge-vue />
  </div>
</template>
