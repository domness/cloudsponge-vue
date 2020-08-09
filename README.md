# cloudsponge-vue

## Installation

cloudsponge-vue can be installed using the following methods:

```
yarn add cloudsponge-vue
```

or

```
npm i --save cloudsponge-vue
```

## Props

- apiKey
  - Cloudsponge API Key
  - https://www.cloudsponge.com/developer/getting-started/
- afterSubmit
  - Callback function when contacts have been submitted
- config
  - Cloudsponge Configuration
  - https://www.cloudsponge.com/developer/address-book-widget/options/

## Usage

main:

```javascript
// main.ts
import Cloudsponge from 'cloudsponge-vue';
Vue.use(Cloudsponge);
```

view:

```vue
<template>
  <div>
    <CloudspongeVue apiKey="my-api-key" :afterSubmit="submittedContacts">
      <button>Open address book</button>
    </CloudspongeVue>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyComponent',
  methods: {
    submittedContacts(contacts) {
      console.log('Cloudsponge: submitted contacts');
      const emails = contacts.map((c) => c.selectedEmail());
    }
  }
});
</script>
```
