<script lang="ts">
import { defineComponent } from 'vue';
import CloudspongeVue from '@/CloudspongeVue.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    CloudspongeVue
  },
  data: () => ({
    apiKey: '',
  }),
  created() {
    this.apiKey = '1234';
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
