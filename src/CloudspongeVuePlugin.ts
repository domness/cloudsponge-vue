import { App, Plugin } from 'vue';

// Import vue component
import component from './CloudSpongeVue.vue';

// The Install function used by Vue to register the plugin
export const CloudSpongeVuePlugin: Plugin = {
  install(app: App) {
    // register Headline as a global component, so you can use it wherever you want in your app
    app.component('CloudSpongeVue', component);
  }
}
