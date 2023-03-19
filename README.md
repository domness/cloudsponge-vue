# CloudSponge for Vue 3

## Installation

CloudSponge Vue can be installed using the following methods:

```
yarn add cloudsponge-vue
```

or

```
npm i --save cloudsponge-vue
```

## Props

- apiKey
  - CloudSponge API Key
  - https://www.cloudsponge.com/developer/getting-started/
- afterSubmit
  - Callback function when contacts have been submitted
- config
  - CloudSponge Configuration
  - https://www.cloudsponge.com/developer/address-book-widget/options/

## Usage

### Install as component

```javascript
import { createApp } from 'vue';
import { CloudSpongeVue } from 'cloudsponge-vue';

const app = createApp({});

app.component('cloudsponge-vue', CloudSpongeVue);
app.mount('#app');
```

### Install as plugin

```javascript
import { createApp } from 'vue';
import { CloudSpongeVuePlugin } from 'cloudsponge-vue';

const app = createApp({});
CloudSpongeVuePlugin.install(app);
app.mount('#app');
```

### Usage

```vue
<template>
  <div>
    <cloudsponge-vue apiKey="my-api-key" :afterSubmit="submittedContacts">
      <template v-slot:loading>
        <button>Loading...</button>
      </template>
      <template v-slot:body>
        <button>Add friends from your contacts</button>
      </template>
    </cloudsponge-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  methods: {
    submittedContacts(contacts) {
      console.log('CloudSponge: submitted contacts');
      const emails = contacts.map((c) => c.selectedEmail());
    }
  }
});
</script>
```
