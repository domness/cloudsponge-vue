<script lang="ts">
import Vue from 'vue';
import CloudspongeVue from '@/cloudsponge-vue.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CloudspongeVue
  },
  data: () => ({
    apiKey: '',
  }),
  created() {
    this.apiKey = process.env.VUE_APP_CLOUDSPONGE_KEY || '';
  }
});
</script>

<template>
  <div id="app">
    <CloudspongeVue :apiKey="apiKey">
      <template v-slot:loading>
        <button>Loading</button>
      </template>
      <template v-slot:body>
        <button>Add</button>
      </template>
    </CloudspongeVue>
  </div>
</template>
