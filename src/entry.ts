import component from '@/cloudsponge-vue.vue';

export default {
  install: (app: any, _options: any) => {
    app.component('CloudspongeVue', component);
  }
};
