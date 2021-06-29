<template>
  <div id="app">
    <CloudspongeVue :apiKey="apiKey" :afterSubmit="submittedContacts">
      <template v-slot:loading>
        <button>Loading</button>
      </template>
      <template v-slot:body>
        <button>Add</button>
      </template>
    </CloudspongeVue>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CloudspongeVue from '@/cloudsponge-vue.vue';

export default {
  name: 'ServeDev',
  components: {
    CloudspongeVue
  },
  setup() {
    let apiKey = ref(process.env.VUE_APP_CLOUDSPONGE_KEY || '');

    const submittedContacts = (contacts) => {
      console.log('Cloudsponge: submitted contacts');
      const emails = contacts.map((c) => c.selectedEmail());
      console.log('Emails are:', emails);
    }

    return {
      apiKey,
      submittedContacts,
    }
  }
};
</script>
