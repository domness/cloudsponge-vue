'use strict';

var vue = require('vue');
var component = require('@/CloudspongeVue.vue');

var script = vue.defineComponent({
    name: 'CloudspongeVue',
    props: {
        apiKey: {
            type: String,
            default: '',
        },
        afterSubmit: {
            type: Function,
            default: () => { },
        },
        config: {
            type: Object,
            default: () => { },
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
            };
            document.head.appendChild(externalScript);
        });
    },
    methods: {
        afterInit() {
            this.isLoading = false;
        }
    }
});

const _hoisted_1 = { class: "cloudsponge-launch" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    (_ctx.isLoading)
      ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 })
      : vue.renderSlot(_ctx.$slots, "body", { key: 1 })
  ]))
}

script.render = render;
script.__file = "src/CloudspongeVue.vue";

// Import vue component
// The Install function used by Vue to register the plugin
const CloudspongeVuePlugin = {
    install(app) {
        // register Headline as a global component, so you can use it wherever you want in your app
        app.component('CloudspongeVue', component);
    }
};

exports.CloudspongeVue = script;
exports.CloudspongeVuePlugin = CloudspongeVuePlugin;
//# sourceMappingURL=index.js.map
