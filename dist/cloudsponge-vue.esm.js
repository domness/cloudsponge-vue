import { defineComponent, ref, onMounted, nextTick, pushScopeId, popScopeId, openBlock, createBlock, renderSlot, withScopeId } from 'vue';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var script = defineComponent({
  name: 'CloudspongeVue',
  props: {
    apiKey: {
      type: String,
      default: ''
    },
    afterSubmit: {
      type: Function,
      default: function _default() {}
    },
    config: {
      type: Object,
      default: function _default() {}
    }
  },
  setup: function setup(props) {
    var isLoading = ref(true);

    var afterInit = function afterInit() {
      isLoading.value = false;
    };

    onMounted(function () {
      nextTick(function () {
        var externalScript = document.createElement('script');
        externalScript.setAttribute('src', "https://api.cloudsponge.com/widget/".concat(props.apiKey, ".js"));
        externalScript.async = true;

        externalScript.onload = function () {
          var _window$cloudsponge;

          (_window$cloudsponge = window.cloudsponge) === null || _window$cloudsponge === void 0 ? void 0 : _window$cloudsponge.init(_objectSpread2(_objectSpread2({}, props.config), {}, {
            afterSubmitContacts: props.afterSubmit,
            afterInit: afterInit()
          }));
        };

        document.head.appendChild(externalScript);
      });
    });
    return {
      isLoading: isLoading
    };
  }
});

var _withId = /*#__PURE__*/withScopeId("data-v-54d41578");

pushScopeId("data-v-54d41578");

var _hoisted_1 = {
  class: "cloudsponge-launch"
};

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [_ctx.isLoading ? renderSlot(_ctx.$slots, "loading", {
    key: 0
  }) : renderSlot(_ctx.$slots, "body", {
    key: 1
  })]);
});

script.render = render;
script.__scopeId = "data-v-54d41578";

var entry = {
  install: function install(app, _options) {
    app.component('CloudspongeVue', script);
  }
};

export default entry;
