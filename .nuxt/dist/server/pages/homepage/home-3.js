exports.ids = [22];
exports.modules = {

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inject; });
/* unused harmony export provide */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


function generateWarning(child, parent) {
  return () => Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleWarn */ "c"])(`The ${child} component must be used inside a ${parent}`);
}
function inject(namespace, child, parent) {
  const defaultImpl = child && parent ? {
    register: generateWarning(child, parent),
    unregister: generateWarning(child, parent)
  } : null;
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'registrable-inject',
    inject: {
      [namespace]: {
        default: defaultImpl
      }
    }
  });
}
function provide(namespace, self = false) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'registrable-provide',
    provide() {
      return {
        [namespace]: self ? this : {
          register: this.register,
          unregister: this.unregister
        }
      };
    }
  });
}

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return factory; });
/* harmony import */ var _registrable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
// Mixins

function factory(namespace, child, parent) {
  return Object(_registrable__WEBPACK_IMPORTED_MODULE_0__[/* inject */ "a"])(namespace, child, parent).extend({
    name: 'groupable',
    props: {
      activeClass: {
        type: String,
        default() {
          if (!this[namespace]) return undefined;
          return this[namespace].activeClass;
        }
      },
      disabled: Boolean
    },
    data() {
      return {
        isActive: false
      };
    },
    computed: {
      groupClasses() {
        if (!this.activeClass) return {};
        return {
          [this.activeClass]: this.isActive
        };
      }
    },
    created() {
      this[namespace] && this[namespace].register(this);
    },
    beforeDestroy() {
      this[namespace] && this[namespace].unregister(this);
    },
    methods: {
      toggle() {
        this.$emit('change');
      }
    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Groupable = factory('itemGroup');
/* unused harmony default export */ var _unused_webpack_default_export = (Groupable);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseItemGroup; });
/* harmony import */ var _src_components_VItemGroup_VItemGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var _src_components_VItemGroup_VItemGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VItemGroup_VItemGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_comparable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(294);
/* harmony import */ var _mixins_proxyable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
// Styles
 // Mixins



 // Utilities



const BaseItemGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_comparable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_proxyable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).extend({
  name: 'base-item-group',
  props: {
    activeClass: {
      type: String,
      default: 'v-item--active'
    },
    mandatory: Boolean,
    max: {
      type: [Number, String],
      default: null
    },
    multiple: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      internalLazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      items: []
    };
  },
  computed: {
    classes() {
      return {
        'v-item-group': true,
        ...this.themeClasses
      };
    },
    selectedIndex() {
      return this.selectedItem && this.items.indexOf(this.selectedItem) || -1;
    },
    selectedItem() {
      if (this.multiple) return undefined;
      return this.selectedItems[0];
    },
    selectedItems() {
      return this.items.filter((item, index) => {
        return this.toggleMethod(this.getValue(item, index));
      });
    },
    selectedValues() {
      if (this.internalValue == null) return [];
      return Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue];
    },
    toggleMethod() {
      if (!this.multiple) {
        return v => this.valueComparator(this.internalValue, v);
      }
      const internalValue = this.internalValue;
      if (Array.isArray(internalValue)) {
        return v => internalValue.some(intern => this.valueComparator(intern, v));
      }
      return () => false;
    }
  },
  watch: {
    internalValue: 'updateItemsState',
    items: 'updateItemsState'
  },
  created() {
    if (this.multiple && !Array.isArray(this.internalValue)) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_5__[/* consoleWarn */ "c"])('Model must be bound to an array if the multiple property is true.', this);
    }
  },
  methods: {
    genData() {
      return {
        class: this.classes
      };
    },
    getValue(item, i) {
      return item.value === undefined ? i : item.value;
    },
    onClick(item) {
      this.updateInternalValue(this.getValue(item, this.items.indexOf(item)));
    },
    register(item) {
      const index = this.items.push(item) - 1;
      item.$on('change', () => this.onClick(item)); // If no value provided and mandatory,
      // assign first registered item

      if (this.mandatory && !this.selectedValues.length) {
        this.updateMandatory();
      }
      this.updateItem(item, index);
    },
    unregister(item) {
      if (this._isDestroyed) return;
      const index = this.items.indexOf(item);
      const value = this.getValue(item, index);
      this.items.splice(index, 1);
      const valueIndex = this.selectedValues.indexOf(value); // Items is not selected, do nothing

      if (valueIndex < 0) return; // If not mandatory, use regular update process

      if (!this.mandatory) {
        return this.updateInternalValue(value);
      } // Remove the value

      if (this.multiple && Array.isArray(this.internalValue)) {
        this.internalValue = this.internalValue.filter(v => v !== value);
      } else {
        this.internalValue = undefined;
      } // If mandatory and we have no selection
      // add the last item as value

      /* istanbul ignore else */

      if (!this.selectedItems.length) {
        this.updateMandatory(true);
      }
    },
    updateItem(item, index) {
      const value = this.getValue(item, index);
      item.isActive = this.toggleMethod(value);
    },
    // https://github.com/vuetifyjs/vuetify/issues/5352
    updateItemsState() {
      this.$nextTick(() => {
        if (this.mandatory && !this.selectedItems.length) {
          return this.updateMandatory();
        } // TODO: Make this smarter so it
        // doesn't have to iterate every
        // child in an update

        this.items.forEach(this.updateItem);
      });
    },
    updateInternalValue(value) {
      this.multiple ? this.updateMultiple(value) : this.updateSingle(value);
    },
    updateMandatory(last) {
      if (!this.items.length) return;
      const items = this.items.slice();
      if (last) items.reverse();
      const item = items.find(item => !item.disabled); // If no tabs are available
      // aborts mandatory value

      if (!item) return;
      const index = this.items.indexOf(item);
      this.updateInternalValue(this.getValue(item, index));
    },
    updateMultiple(value) {
      const defaultValue = Array.isArray(this.internalValue) ? this.internalValue : [];
      const internalValue = defaultValue.slice();
      const index = internalValue.findIndex(val => this.valueComparator(val, value));
      if (this.mandatory &&
      // Item already exists
      index > -1 &&
      // value would be reduced below min
      internalValue.length - 1 < 1) return;
      if (
      // Max is set
      this.max != null &&
      // Item doesn't exist
      index < 0 &&
      // value would be increased above max
      internalValue.length + 1 > this.max) return;
      index > -1 ? internalValue.splice(index, 1) : internalValue.push(value);
      this.internalValue = internalValue;
    },
    updateSingle(value) {
      const isSame = this.valueComparator(this.internalValue, value);
      if (this.mandatory && isSame) return;
      this.internalValue = isSame ? undefined : value;
    }
  },
  render(h) {
    return h(this.tag, this.genData(), this.$slots.default);
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (BaseItemGroup.extend({
  name: 'v-item-group',
  provide() {
    return {
      itemGroup: this
    };
  }
}));

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'comparable',
  props: {
    valueComparator: {
      type: Function,
      default: _util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* deepEqual */ "j"]
    }
  }
}));

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("73707fd0", content, true)

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/FormSubscribe.vue?vue&type=template&id=7952c332&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('form', [_vm._ssrNode("<div class=\"ps-form--subscribe\"><div class=\"ps-form__control\"><input type=\"email\" placeholder=\"Enter your email address\"" + _vm._ssrAttr("value", _vm.email) + " class=\"form-control ps-input\"> <button class=\"ps-btn ps-btn--warning\">Subscribe</button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/FormSubscribe.vue?vue&type=template&id=7952c332&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/FormSubscribe.vue?vue&type=script&lang=js&
/* harmony default export */ var FormSubscribevue_type_script_lang_js_ = ({
  name: 'form-subscribe',
  data() {
    return {
      email: null
    };
  },
  methods: {
    handleSubscribe() {
      this.$emit('handleSubscribe', this.email);
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/FormSubscribe.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_FormSubscribevue_type_script_lang_js_ = (FormSubscribevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/FormSubscribe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_FormSubscribevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56df757d"
  
)

/* harmony default export */ var FormSubscribe = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/Banner.vue?vue&type=template&id=302aed02&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.banner ? _c('div', {
    staticClass: "ps-banner",
    style: {
      backgroundColor: _vm.banner.bgColor
    }
  }, [_vm._ssrNode((_vm.banner.imgbg ? "<img" + _vm._ssrAttr("src", _vm.banner.img) + " alt=\"alt\"" + _vm._ssrClass(null, ['ps-banner__imagebg', _vm.banner.imgbg]) + ">" : "<!---->") + " <div" + _vm._ssrClass(null, [_vm.banner.noFull ? 'container-no-round' : 'container container-initial']) + "><div" + _vm._ssrClass(null, ['ps-banner__block', _vm.reverse ? 'row-reverse' : '']) + "><div class=\"ps-banner__content\">" + (_vm.banner.baged ? "<p class=\"ps-banner__baged\"><strong>" + _vm._ssrEscape(_vm._s(_vm.banner.baged)) + "</strong></p>" : "<!---->") + " <h2" + _vm._ssrClass(null, ['ps-banner__title', _vm.banner.textColor && _vm.banner.textColor]) + ">" + _vm._s(_vm.banner.title) + "</h2> <div" + _vm._ssrClass(null, ['ps-banner__desc', _vm.banner.textColor && _vm.banner.textColor]) + ">" + _vm._s(_vm.banner.desc) + "</div> " + (_vm.banner.price ? "<div class=\"ps-banner__price\"><span>" + _vm._ssrEscape(_vm._s(_vm.banner.price.ins)) + "</span> <del>" + _vm._ssrEscape(_vm._s(_vm.banner.price.del)) + "</del></div>" : "<!---->") + " " + (_vm.banner.button ? "<div class=\"ps-banner__btn-group\">" + _vm._ssrList(_vm.banner.button, function (item, index) {
    return "<div" + _vm._ssrClass(null, ['ps-banner__btn', _vm.banner.buttonColor && _vm.banner.buttonColor]) + "><img" + _vm._ssrAttr("src", item.icon) + " alt=\"alt\"" + _vm._ssrStyle(null, _vm.banner.filter && _vm.banner.filter, null) + ">" + _vm._ssrEscape(_vm._s(item.text) + "\n                    ") + "</div>";
  }) + "</div>" : "<!---->") + " " + (_vm.banner.shop || _vm.banner.cart ? "<a href=\"#\"" + _vm._ssrClass(null, ['ps-banner__shop', _vm.banner.shop, _vm.banner.cart]) + ">" + _vm._ssrEscape(_vm._s(_vm.banner.textShop ? _vm.banner.textShop : _vm.banner.shop ? 'Shop now' : 'Add to cart')) + "</a>" : "<!---->") + " " + (_vm.banner.percent && !_vm.banner.percent.thumbnail ? "<div" + _vm._ssrClass(null, ['ps-banner__persen', _vm.banner.percent.extraClass]) + ">" + _vm._s(_vm.banner.percent.text) + "</div>" : "<!---->") + "</div> <div" + _vm._ssrClass(null, ['ps-banner__thumnail', {
    'ps-banner__fluid': !_vm.banner.round
  }]) + ">" + (_vm.banner.round ? "<img" + _vm._ssrAttr("src", _vm.banner.round) + " alt=\"alt\" class=\"ps-banner__round\">" : "<!---->") + " " + (!_vm.banner.imgbg && _vm.banner.img ? "<img" + _vm._ssrAttr("src", _vm.banner.img) + " alt=\"alt\" class=\"ps-banner__image\">" : "<!---->") + " " + (_vm.banner.percent && _vm.banner.percent.thumbnail ? "<div" + _vm._ssrClass(null, ['ps-banner__persen', _vm.banner.percent.extraClass]) + ">" + _vm._ssrEscape("\n                " + _vm._s(_vm.banner.percent.text) + "\n                ") + "</div>" : "<!---->") + "</div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/Banner.vue?vue&type=template&id=302aed02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/Banner.vue?vue&type=script&lang=js&
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  props: {
    banner: {
      type: Object,
      default: () => {}
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/Banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "07cc98b6"
  
)

/* harmony default export */ var Banner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("c176411c", content, true)

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-tabs>.v-tabs-bar{background-color:#fff}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-tabs .v-tab:hover:before{opacity:.04}.theme--light.v-tabs .v-tab--active:before,.theme--light.v-tabs .v-tab--active:hover:before,.theme--light.v-tabs .v-tab:focus:before{opacity:.12}.theme--light.v-tabs .v-tab--active:focus:before{opacity:.16}.theme--dark.v-tabs>.v-tabs-bar{background-color:#1e1e1e}.theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:hsla(0,0%,100%,.6)}.theme--dark.v-tabs .v-tab:hover:before{opacity:.08}.theme--dark.v-tabs .v-tab--active:before,.theme--dark.v-tabs .v-tab--active:hover:before,.theme--dark.v-tabs .v-tab:focus:before{opacity:.24}.theme--dark.v-tabs .v-tab--active:focus:before{opacity:.32}.theme--light.v-tabs-items{background-color:#fff}.theme--dark.v-tabs-items{background-color:#1e1e1e}.v-tabs-bar.accent .v-tab,.v-tabs-bar.accent .v-tabs-slider,.v-tabs-bar.error .v-tab,.v-tabs-bar.error .v-tabs-slider,.v-tabs-bar.info .v-tab,.v-tabs-bar.info .v-tabs-slider,.v-tabs-bar.primary .v-tab,.v-tabs-bar.primary .v-tabs-slider,.v-tabs-bar.secondary .v-tab,.v-tabs-bar.secondary .v-tabs-slider,.v-tabs-bar.success .v-tab,.v-tabs-bar.success .v-tabs-slider,.v-tabs-bar.warning .v-tab,.v-tabs-bar.warning .v-tabs-slider{color:#fff}.v-tabs{flex:1 1 auto;width:100%}.v-tabs .v-menu__activator{height:100%}.v-tabs.v.tabs--vertical.v-tabs--right{flex-direction:row-reverse}.v-tabs:not(.v-tabs--vertical) .v-tab{white-space:normal}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:inline;display:initial;visibility:hidden}.v-tabs-bar{border-radius:inherit;height:48px}.v-tabs-bar.v-item-group>*{cursor:auto}.v-tab{align-items:center;cursor:pointer;display:flex;flex:0 1 auto;font-size:.875rem;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;min-width:90px;max-width:360px;outline:none;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-tab.v-tab{color:inherit}.v-tab:before{bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-tab:before,.v-tabs-slider{background-color:currentColor}.v-tabs-slider{height:100%;width:100%}.v-tabs-slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-left:42px}.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-right:42px}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-right:auto}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-left:auto}.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*{margin-right:auto}.v-tabs--fixed-tabs>.v-tabs-bar .v-tab{flex:1 1 auto;width:100%}.v-tabs--grow>.v-tabs-bar .v-tab{flex:1 0 auto;max-width:none}.v-tabs--icons-and-text>.v-tabs-bar{height:72px}.v-tabs--icons-and-text>.v-tabs-bar .v-tab{flex-direction:column-reverse}.v-tabs--icons-and-text>.v-tabs-bar .v-tab>:first-child{margin-bottom:6px}.v-tabs--overflow>.v-tabs-bar .v-tab{flex:1 0 auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-left:auto}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-right:auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-right:0}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-left:0}.v-tabs--vertical{display:flex}.v-tabs--vertical>.v-tabs-bar{flex:1 0 auto;height:auto}.v-tabs--vertical>.v-tabs-bar .v-slide-group__next,.v-tabs--vertical>.v-tabs-bar .v-slide-group__prev{display:none}.v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content{flex-direction:column}.v-tabs--vertical>.v-tabs-bar .v-tab{height:48px}.v-tabs--vertical>.v-tabs-bar .v-tabs-slider{height:100%}.v-tabs--vertical>.v-window{flex:0 1 100%}.v-tabs--vertical.v-tabs--icons-and-text>.v-tabs-bar .v-tab{height:72px}.v-tab--active{color:inherit}.v-tab--active.v-tab:not(:focus):before{opacity:0}.v-tab--active .v-btn.v-btn--flat,.v-tab--active .v-icon{color:inherit}.v-tab--disabled{opacity:.5}.v-tab--disabled,.v-tab--disabled *{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("8f7a87bc", content, true)

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("0d135400", content, true)

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("549a5500", content, true)

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-btn:not(.v-btn--outlined).accent,.v-btn:not(.v-btn--outlined).error,.v-btn:not(.v-btn--outlined).info,.v-btn:not(.v-btn--outlined).primary,.v-btn:not(.v-btn--outlined).secondary,.v-btn:not(.v-btn--outlined).success,.v-btn:not(.v-btn--outlined).warning{color:#fff}.theme--light.v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn.v-btn--disabled,.theme--light.v-btn.v-btn--disabled .v-btn__loading,.theme--light.v-btn.v-btn--disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--light.v-btn.v-btn--disabled.v-btn--has-bg{background-color:rgba(0,0,0,.12)!important}.theme--light.v-btn.v-btn--has-bg{background-color:#f5f5f5}.theme--light.v-btn.v-btn--outlined.v-btn--text{border-color:rgba(0,0,0,.12)}.theme--light.v-btn.v-btn--icon{color:rgba(0,0,0,.54)}.theme--light.v-btn:hover:before{opacity:.08}.theme--light.v-btn:focus:before{opacity:.24}.theme--light.v-btn--active:before,.theme--light.v-btn--active:hover:before{opacity:.18}.theme--light.v-btn--active:focus:before{opacity:.16}.theme--dark.v-btn{color:#fff}.theme--dark.v-btn.v-btn--disabled,.theme--dark.v-btn.v-btn--disabled .v-btn__loading,.theme--dark.v-btn.v-btn--disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn.v-btn--has-bg{background-color:#272727}.theme--dark.v-btn.v-btn--outlined.v-btn--text{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-btn.v-btn--icon{color:#fff}.theme--dark.v-btn:hover:before{opacity:.08}.theme--dark.v-btn:focus:before{opacity:.24}.theme--dark.v-btn--active:before,.theme--dark.v-btn--active:hover:before{opacity:.18}.theme--dark.v-btn--active:focus:before{opacity:.32}.v-btn{align-items:center;border-radius:4px;display:inline-flex;flex:0 0 auto;font-weight:500;letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.v-btn.v-size--x-small{font-size:.625rem}.v-btn.v-size--small{font-size:.75rem}.v-btn.v-size--default,.v-btn.v-size--large{font-size:.875rem}.v-btn.v-size--x-large{font-size:1rem}.v-btn:before{background-color:currentColor;border-radius:inherit;bottom:0;color:inherit;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-btn:not(.v-btn--round).v-size--x-small{height:20px;min-width:36px;padding:0 8.8888888889px}.v-btn:not(.v-btn--round).v-size--small{height:28px;min-width:50px;padding:0 12.4444444444px}.v-btn:not(.v-btn--round).v-size--default{height:36px;min-width:64px;padding:0 16px}.v-btn:not(.v-btn--round).v-size--large{height:44px;min-width:78px;padding:0 19.5555555556px}.v-btn:not(.v-btn--round).v-size--x-large{height:52px;min-width:92px;padding:0 23.1111111111px}.v-btn>.v-btn__content .v-icon{color:inherit}.v-btn__content{align-items:center;color:inherit;display:flex;flex:1 0 auto;justify-content:inherit;line-height:normal;position:relative;transition:inherit;transition-property:opacity}.v-btn__content .v-icon.v-icon--left,.v-btn__content .v-icon.v-icon--right{font-size:18px;height:18px;width:18px}.v-application--is-ltr .v-btn__content .v-icon--left{margin-left:-4px;margin-right:8px}.v-application--is-ltr .v-btn__content .v-icon--right,.v-application--is-rtl .v-btn__content .v-icon--left{margin-left:8px;margin-right:-4px}.v-application--is-rtl .v-btn__content .v-icon--right{margin-left:-4px;margin-right:8px}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn--absolute.v-btn--right,.v-btn--fixed.v-btn--right{right:16px}.v-btn--absolute.v-btn--left,.v-btn--fixed.v-btn--left{left:16px}.v-btn--absolute.v-btn--top,.v-btn--fixed.v-btn--top{top:16px}.v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:16px}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%!important;max-width:none}.v-btn--is-elevated{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-btn--is-elevated:after{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-btn--is-elevated:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab:after{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.v-btn--disabled{pointer-events:none}.v-btn--fab,.v-btn--icon{min-height:0;min-width:0;padding:0}.v-btn--fab.v-size--x-small .v-icon,.v-btn--icon.v-size--x-small .v-icon{height:18px;font-size:18px;width:18px}.v-btn--fab.v-size--default .v-icon,.v-btn--fab.v-size--small .v-icon,.v-btn--icon.v-size--default .v-icon,.v-btn--icon.v-size--small .v-icon{height:24px;font-size:24px;width:24px}.v-btn--fab.v-size--large .v-icon,.v-btn--icon.v-size--large .v-icon{height:28px;font-size:28px;width:28px}.v-btn--fab.v-size--x-large .v-icon,.v-btn--icon.v-size--x-large .v-icon{height:32px;font-size:32px;width:32px}.v-btn--icon.v-size--x-small{height:20px;width:20px}.v-btn--icon.v-size--small{height:28px;width:28px}.v-btn--icon.v-size--default{height:36px;width:36px}.v-btn--icon.v-size--large{height:44px;width:44px}.v-btn--icon.v-size--x-large{height:52px;width:52px}.v-btn--fab.v-btn--absolute,.v-btn--fab.v-btn--fixed{z-index:4}.v-btn--fab.v-size--x-small{height:32px;width:32px}.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom{bottom:-16px}.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--top{top:-16px}.v-btn--fab.v-size--small{height:40px;width:40px}.v-btn--fab.v-size--small.v-btn--absolute.v-btn--bottom{bottom:-20px}.v-btn--fab.v-size--small.v-btn--absolute.v-btn--top{top:-20px}.v-btn--fab.v-size--default{height:56px;width:56px}.v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom{bottom:-28px}.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top{top:-28px}.v-btn--fab.v-size--large{height:64px;width:64px}.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom{bottom:-32px}.v-btn--fab.v-size--large.v-btn--absolute.v-btn--top{top:-32px}.v-btn--fab.v-size--x-large{height:72px;width:72px}.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--bottom{bottom:-36px}.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--top{top:-36px}.v-btn--loading{pointer-events:none;transition:none}.v-btn--loading .v-btn__content{opacity:0}.v-btn--outlined{border:thin solid}.v-btn--plain:before{display:none}.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content{opacity:.62}.v-btn--round{border-radius:50%}.v-btn--rounded{border-radius:28px}.v-btn--tile{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(9).default("e003f1f8", content, true)

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 347:
/***/ (function(module) {

module.exports = JSON.parse("{\"j\":[{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"},{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\"}],\"k\":[{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$29.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/slide2.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"noFull\":true},{\"title\":\"Fully equipped <br/> of ophthalmic rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round2.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Antibacterial <br/> Medical Mask\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/slide8.jpg\",\"bgColor\":\"#306A53\",\"buttonColor\":\"text-warning\",\"textColor\":\"text-white\",\"noFull\":true,\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"}],\"l\":[{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$29.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/bg-slide3-home3.jpg\",\"round\":\"\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\"}],\"m\":[{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\",\"buttonColor\":\"font-bold\"},{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"}],\"o\":[{\"title\":\"Fully equipped<br/> of ophthalmic <br/>rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow ps-center\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\",\"buttonColor\":\"font-bold\"},{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"}],\"q\":[{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"only <br/> $25\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home6-bg.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"imgbg\":\"not-fuild\",\"filter\":\"filter: invert(40%) sepia(50%) saturate(366%) hue-rotate(182deg) brightness(80%) contrast(89%);\"},{\"title\":\"Dental office <br/> equipement <br/> on sale\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/home6-bg2.jpg\",\"bgColor\":\"#fcfcfe\",\"imgbg\":\"fuild\"},{\"title\":\"Best prices <br/> for all the lenses\",\"desc\":\"All correction values\",\"shop\":\"bg-warning\",\"textSale\":\"Up to -30%\",\"img\":\"/img/promotion/home6-bg3.jpg\",\"bgColor\":\"rgb(243 245 244)\",\"imgbg\":\"fuild\"}],\"s\":[{\"title\":\"SonicX900 <br>Electrical Brush\",\"desc\":\"Now with special price -30%\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"baged\":\"New\",\"percent\":{\"text\":\"New\",\"extraClass\":\"bg-success\",\"thumbnail\":true}},{\"title\":\"New stylish colors <br>now available!\",\"desc\":\"Choose a color that really <br>matches your personality\",\"shop\":\"bg-pink\",\"baged\":\"New\"}],\"n\":[{\"title\":\"PowerSteel <br/>X-tra 200 Brush\",\"shop\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home4-banner-4.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"textShop\":\"Add to cart\"},{\"title\":\"Fully equipped <br/>of ophthalmic rooms\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow ps-right\"},\"img\":\"/img/promotion/bg.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Antibacterial <br/>Medical Mask\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/anti-virus-bg.jpg\",\"bgColor\":\"#FFCC00\",\"textColor\":\"text-white\",\"buttonColor\":\"text-warning\",\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"},{\"title\":\"Super Sonic Brush <br/>X200 Higenic\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/tooth-brush-icon.png\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/dashboard-icon.png\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/bg-banner-detal.jpg\",\"bgColor\":\"#FFCC00\"}],\"p\":[{\"title\":\"Take care of <br/>yourself and <br/>your loved ones\",\"shop\":\"bg-yellow\",\"textShop\":\"Face mask\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/bg-banner15.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Best blood <br/>pressure <br/>monitors\",\"shop\":\"bg-yellow\",\"textShop\":\"Blood pressure\",\"img\":\"/img/promotion/blood-pressure.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Home and <br/>dental office <br/>equipment\",\"shop\":\"bg-yellow\",\"textShop\":\"Dental\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"img\":\"/img/promotion/bg-banner-dental.jpg\",\"bgColor\":\"#FFCC00\",\"textColor\":\"text-white\"}],\"r\":[{\"title\":\"The best quality <br/>masks at the<br/>best price\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Up to 5 users simultaneously\"},{\"icon\":\"/img/icon/ribbon.svg\",\"text\":\"Has HEALTH certificate\"}],\"img\":\"/img/promotion/face-masks.jpg\",\"bgColor\":\"#fcfcfe\"},{\"title\":\"PowerSteel <br/>X-tra 200 Brush\",\"shop\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home4-banner-4.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"textShop\":\"Add to cart\"},{\"title\":\"Your one and only <br>online pharmacy!\",\"desc\":\"Just a few seconds to measure<br>your body temperature.\",\"shop\":\"bg-yellow\",\"textShop\":\"About\",\"button\":[{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Up to 5 users simultaneously\"},{\"icon\":\"/img/icon/ribbon.svg\",\"text\":\"Has HEALTH certificate\"}],\"round\":\"/img/round5.png\",\"img\":\"/img/girl-face-mask.png\"}],\"t\":[{\"title\":\"Antibacterial <br/> Medical Mask\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/slide8.jpg\",\"round\":\"\",\"bgColor\":\"#306A53\",\"buttonColor\":\"text-warning\",\"textColor\":\"text-white\",\"noFull\":true,\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"},{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/slide2.jpg\",\"round\":\"\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"noFull\":true},{\"title\":\"Fully equipped <br/> of ophthalmic rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round2.png\",\"bgColor\":\"#F0F2F5\"}],\"a\":[{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/girl-face-mask.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"bannerRound\":true,\"filter\":\"filter: invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%);\"},{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/home6-bg.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"bannerRound\":true,\"filter\":\"filter: invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%);\"}],\"b\":[{\"title\":\"Premium CBD <br/>Oil 1000mg\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning\"},\"img\":\"/img/promotion/slide13.jpg\",\"bgColor\":\"#DAECFA\",\"textColor\":\"text-dark\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide14.jpg\",\"bgColor\":\"#E8F5F4\",\"textColor\":\"text-dark\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/slide16.jpg\",\"bgColor\":\"#F2F2F2\",\"textColor\":\"text-white\",\"imgbg\":\"d-block\",\"filter\":\"filter: brightness(0) invert(1);\"}],\"d\":[{\"title\":\"Take care <br/>of yourself and your skin \",\"shop\":\"bg-white\",\"textShop\":\"Sunscreens\",\"button\":[{\"icon\":\"/img/icon/icon11.png\",\"text\":\"Best quality\"},{\"icon\":\"/img/icon/icon12.png\",\"text\":\"Day & Night\"}],\"img\":\"/img/promotion/bg-banner16.jpg\",\"bgColor\":\"#FD8D27\"},{\"title\":\"Stay focused <br/>with best <br/>supplements\",\"shop\":\"bg-warning\",\"textShop\":\"Supplements\",\"img\":\"/img/promotion/bg-banner17.jpg\",\"bgColor\":\"#182947\"}],\"c\":[{\"banner\":\"/img/promotion/banner-home13-1.jpg\",\"title\":\"Boxed water <br/>is better!\",\"btnName\":\"Shop now\",\"sale\":\"-30%\",\"classTitle\":\"text-dark\",\"saleColor\":\"text-dark\",\"btnClass\":\"btn-green\"},{\"banner\":\"/img/promotion/banner-home13-2.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon9.png\"},{\"banner\":\"/img/promotion/banner-home13-3.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"Buy now\",\"price\":\"$15.99\",\"del\":\"$29.99\",\"priceColor\":\"text-white\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\"}],\"f\":[{\"banner\":\"/img/promotion/bg-promo1.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon10.png\"},{\"banner\":\"/img/promotion/bg-promo2.jpg\",\"title\":\"Eczema <br/>Treatment CBD <br/>Ointement\",\"btnName\":\"Shop now\",\"sale\":\"-30%\",\"classTitle\":\"text-white\",\"saleColor\":\"text-white\",\"btnClass\":\"btn-green\"},{\"banner\":\"/img/promotion/bg-promo3.jpg\",\"title\":\"SFP 50+ <br/>Suncream\",\"btnName\":\"Buy now\",\"price\":\"$6.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"delColor\":\"text-white\"}],\"g\":[{\"banner\":\"/img/promotion/bg-banner20.jpg\",\"title\":\"FaceWash <br/>up to -20%\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon19.png\"},{\"banner\":\"/img/promotion/bg-banner21.jpg\",\"title\":\"PREHCU <br/>Workout\",\"btnName\":\"Buy now\",\"price\":\"$6.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"delColor\":\"text-white\"},{\"banner\":\"/img/promotion/bg-banner22.jpg\",\"title\":\"Neauthy <br/>creams\",\"btnName\":\"Buy now\",\"price\":\"$12.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"}],\"e\":[{\"banner\":\"/img/promotion/bg-banner23.jpg\",\"title\":\"PowerUp <br/>Lemon\",\"btnName\":\"Buy now\",\"price\":\"$38.24\",\"del\":\"$48.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner24.jpg\",\"title\":\"TwoEXP+ <br/>Areozol\",\"btnName\":\"Buy now\",\"price\":\"$8.24\",\"del\":\"$12.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner25.jpg\",\"title\":\"Cranberry <br/>Brand\",\"btnName\":\"Buy now\",\"price\":\"$13.24\",\"del\":\"$18.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner26.jpg\",\"title\":\"Recoup <br/>Recovery\",\"btnName\":\"Buy now\",\"price\":\"$8.24\",\"del\":\"$12.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"}],\"h\":[{\"title\":\"Premium CBD <br/>Oil 1000mg\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-white text-dark\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-dark\"},\"img\":\"/img/promotion/slide15.jpg\",\"bgColor\":\"#DAECFA\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide17.jpg\",\"bgColor\":\"#e9f5f5\",\"imgbg\":\"d-block bg-padding\",\"textColor\":\"text-dark\"}],\"i\":[{\"banner\":\"/img/promotion/promo12.jpg\",\"title\":\"Pure Natural <br/>Creams\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"},{\"banner\":\"/img/promotion/promo13.jpg\",\"title\":\"Orange Relief <br/>for your body\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"},{\"banner\":\"/img/promotion/promo14.jpg\",\"title\":\"Herbal Power <br/>Skin Care\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"}]}");

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VWindow/VWindow.sass
var VWindow = __webpack_require__(341);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBtn/VBtn.sass
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/index.js
var VSheet = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VProgressCircular/VProgressCircular.sass
var VProgressCircular = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
// Styles
 // Directives

 // Mixins

 // Utils


/* @vue/component */

/* harmony default export */ var VProgressCircular_VProgressCircular = (colorable["a" /* default */].extend({
  name: 'v-progress-circular',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    button: Boolean,
    indeterminate: Boolean,
    rotate: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 32
    },
    width: {
      type: [Number, String],
      default: 4
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    radius: 20,
    isVisible: true
  }),
  computed: {
    calculatedSize() {
      return Number(this.size) + (this.button ? 8 : 0);
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    classes() {
      return {
        'v-progress-circular--visible': this.isVisible,
        'v-progress-circular--indeterminate': this.indeterminate,
        'v-progress-circular--button': this.button
      };
    },
    normalizedValue() {
      if (this.value < 0) {
        return 0;
      }
      if (this.value > 100) {
        return 100;
      }
      return parseFloat(this.value);
    },
    strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },
    strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },
    strokeWidth() {
      return Number(this.width) / +this.size * this.viewBoxSize * 2;
    },
    styles() {
      return {
        height: Object(helpers["g" /* convertToUnit */])(this.calculatedSize),
        width: Object(helpers["g" /* convertToUnit */])(this.calculatedSize)
      };
    },
    svgStyles() {
      return {
        transform: `rotate(${Number(this.rotate)}deg)`
      };
    },
    viewBoxSize() {
      return this.radius / (1 - Number(this.width) / +this.size);
    }
  },
  methods: {
    genCircle(name, offset) {
      return this.$createElement('circle', {
        class: `v-progress-circular__${name}`,
        attrs: {
          fill: 'transparent',
          cx: 2 * this.viewBoxSize,
          cy: 2 * this.viewBoxSize,
          r: this.radius,
          'stroke-width': this.strokeWidth,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },
    genSvg() {
      const children = [this.indeterminate || this.genCircle('underlay', 0), this.genCircle('overlay', this.strokeDashOffset)];
      return this.$createElement('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`
        }
      }, children);
    },
    genInfo() {
      return this.$createElement('div', {
        staticClass: 'v-progress-circular__info'
      }, this.$slots.default);
    },
    onObserve(entries, observer, isIntersecting) {
      this.isVisible = isIntersecting;
    }
  },
  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-progress-circular',
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
      },
      class: this.classes,
      directives: [{
        name: 'intersect',
        value: this.onObserve
      }],
      style: this.styles,
      on: this.$listeners
    }), [this.genSvg(), this.genInfo()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js


/* harmony default export */ var components_VProgressCircular = (VProgressCircular_VProgressCircular);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
// Styles
 // Extensions

 // Components

 // Mixins






 // Utilities



const baseMixins = Object(mixins["a" /* default */])(VSheet["a" /* default */], routable["a" /* default */], positionable["a" /* default */], sizeable["a" /* default */], Object(groupable["a" /* factory */])('btnToggle'), Object(toggleable["b" /* factory */])('inputValue')
/* @vue/component */);

/* harmony default export */ var VBtn_VBtn = (baseMixins.extend().extend({
  name: 'v-btn',
  props: {
    activeClass: {
      type: String,
      default() {
        if (!this.btnToggle) return '';
        return this.btnToggle.activeClass;
      }
    },
    block: Boolean,
    depressed: Boolean,
    fab: Boolean,
    icon: Boolean,
    loading: Boolean,
    outlined: Boolean,
    plain: Boolean,
    retainFocusOnClick: Boolean,
    rounded: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    text: Boolean,
    tile: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    value: null
  },
  data: () => ({
    proxyClass: 'v-btn--active'
  }),
  computed: {
    classes() {
      return {
        'v-btn': true,
        ...routable["a" /* default */].options.computed.classes.call(this),
        'v-btn--absolute': this.absolute,
        'v-btn--block': this.block,
        'v-btn--bottom': this.bottom,
        'v-btn--disabled': this.disabled,
        'v-btn--is-elevated': this.isElevated,
        'v-btn--fab': this.fab,
        'v-btn--fixed': this.fixed,
        'v-btn--has-bg': this.hasBg,
        'v-btn--icon': this.icon,
        'v-btn--left': this.left,
        'v-btn--loading': this.loading,
        'v-btn--outlined': this.outlined,
        'v-btn--plain': this.plain,
        'v-btn--right': this.right,
        'v-btn--round': this.isRound,
        'v-btn--rounded': this.rounded,
        'v-btn--router': this.to,
        'v-btn--text': this.text,
        'v-btn--tile': this.tile,
        'v-btn--top': this.top,
        ...this.themeClasses,
        ...this.groupClasses,
        ...this.elevationClasses,
        ...this.sizeableClasses
      };
    },
    computedElevation() {
      if (this.disabled) return undefined;
      return elevatable["a" /* default */].options.computed.computedElevation.call(this);
    },
    computedRipple() {
      var _a;
      const defaultRipple = this.icon || this.fab ? {
        circle: true
      } : true;
      if (this.disabled) return false;else return (_a = this.ripple) !== null && _a !== void 0 ? _a : defaultRipple;
    },
    hasBg() {
      return !this.text && !this.plain && !this.outlined && !this.icon;
    },
    isElevated() {
      return Boolean(!this.icon && !this.text && !this.outlined && !this.depressed && !this.disabled && !this.plain && (this.elevation == null || Number(this.elevation) > 0));
    },
    isRound() {
      return Boolean(this.icon || this.fab);
    },
    styles() {
      return {
        ...this.measurableStyles
      };
    }
  },
  created() {
    const breakingProps = [['flat', 'text'], ['outline', 'outlined'], ['round', 'rounded']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(console["a" /* breaking */])(original, replacement, this);
    });
  },
  methods: {
    click(e) {
      // TODO: Remove this in v3
      !this.retainFocusOnClick && !this.fab && e.detail && this.$el.blur();
      this.$emit('click', e);
      this.btnToggle && this.toggle();
    },
    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-btn__content'
      }, this.$slots.default);
    },
    genLoader() {
      return this.$createElement('span', {
        class: 'v-btn__loader'
      }, this.$slots.loader || [this.$createElement(components_VProgressCircular, {
        props: {
          indeterminate: true,
          size: 23,
          width: 2
        }
      })]);
    }
  },
  render(h) {
    const children = [this.genContent(), this.loading && this.genLoader()];
    const {
      tag,
      data
    } = this.generateRouteLink();
    const setColor = this.hasBg ? this.setBackgroundColor : this.setTextColor;
    if (tag === 'button') {
      data.attrs.type = this.type;
      data.attrs.disabled = this.disabled;
    }
    data.attrs.value = ['string', 'number'].includes(typeof this.value) ? this.value : JSON.stringify(this.value);
    return h(tag, this.disabled ? data : setColor(this.color, data), children);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js


/* harmony default export */ var components_VBtn = (VBtn_VBtn);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(291);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ var VWindow_VWindow = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'v-window',
  directives: {
    Touch: touch["a" /* default */]
  },
  provide() {
    return {
      windowGroup: this
    };
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: Boolean,
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },
  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },
  computed: {
    isActive() {
      return this.transitionCount > 0;
    },
    classes() {
      return {
        ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },
    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.internalReverse ? !this.isReverse : this.isReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },
    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },
    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },
    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },
    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },
    internalReverse() {
      return this.$vuetify.rtl ? !this.reverse : this.reverse;
    }
  },
  watch: {
    internalIndex(val, oldVal) {
      this.isReverse = this.updateReverse(val, oldVal);
    }
  },
  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genContainer() {
      const children = [this.genDefaultSlot()];
      if (this.showArrows) {
        children.push(this.genControlIcons());
      }
      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },
    genIcon(direction, icon, click) {
      var _a, _b, _c;
      const on = {
        click: e => {
          e.stopPropagation();
          this.changedByDelimiters = true;
          click();
        }
      };
      const attrs = {
        'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
      };
      const children = (_c = (_b = (_a = this.$scopedSlots)[direction]) === null || _b === void 0 ? void 0 : _b.call(_a, {
        on,
        attrs
      })) !== null && _c !== void 0 ? _c : [this.$createElement(components_VBtn, {
        props: {
          icon: true
        },
        attrs,
        on
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          large: true
        }
      }, icon)])];
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, children);
    },
    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }
      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }
      return icons;
    },
    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },
    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },
    next() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },
    prev() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },
    updateReverse(val, oldVal) {
      const itemsLength = this.items.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) return val < oldVal;
      if (val === lastIndex && oldVal === 0) {
        return true;
      } else if (val === 0 && oldVal === lastIndex) {
        return false;
      } else {
        return val < oldVal;
      }
    }
  },
  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };
    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }
    return h('div', data, [this.genContainer()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js
// Extensions
 // Types & Components


/* @vue/component */

/* harmony default export */ var VTabsItems = __webpack_exports__["a"] = (VWindow_VWindow.extend({
  name: 'v-tabs-items',
  props: {
    mandatory: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ...VWindow_VWindow.options.computed.classes.call(this),
        'v-tabs-items': true
      };
    },
    isDark() {
      return this.rootIsDark;
    }
  },
  methods: {
    getValue(item, i) {
      return item.id || VItemGroup["a" /* BaseItemGroup */].options.methods.getValue.call(this, item, i);
    }
  }
}));

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/HeaderTop.vue?vue&type=template&id=1f30af2d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"ps-header__text\"><strong>100% Secure delivery </strong>without contacting the courier </div> "), _vm._ssrNode("<div class=\"ps-top__right\">", "</div>", [_c('language-currency'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-top__social\">", "</div>", [_c('social-icon')], 1), _vm._ssrNode(" "), _c('render-list', {
    attrs: {
      "list": _vm.menu,
      "className": "menu-top"
    }
  }), _vm._ssrNode(" <div class=\"ps-header__text\">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/modules/HeaderTop.vue?vue&type=template&id=1f30af2d&

// EXTERNAL MODULE: ./components/shared/SocialIcon.vue + 2 modules
var SocialIcon = __webpack_require__(87);

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageCurrency.vue + 4 modules
var LanguageCurrency = __webpack_require__(78);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/HeaderTop.vue?vue&type=script&lang=js&




/* harmony default export */ var HeaderTopvue_type_script_lang_js_ = ({
  components: {
    SocialIcon: SocialIcon["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    RenderList: RenderList["a" /* default */]
  },
  data() {
    return {
      menu: menu["f" /* menuTopHome2 */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/headers/modules/HeaderTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_HeaderTopvue_type_script_lang_js_ = (HeaderTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/modules/HeaderTop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_HeaderTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ced7aa3"
  
)

/* harmony default export */ var HeaderTop = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Delivery.vue?vue&type=template&id=e635e84e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-delivery",
    staticStyle: {
      "background-image": "url('/img/promotion/banner-delivery-2.jpg')"
    }
  }, [_vm._ssrNode("<div class=\"ps-delivery__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-delivery__text\"><i class=\"icon-shield-check\"></i><span><strong>100% Secure delivery </strong>without contacting the\n                courier</span></div> "), _c('nuxt-link', {
    staticClass: "ps-delivery__more",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("More")])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/Delivery.vue?vue&type=template&id=e635e84e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/Delivery.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b48ba8e4"
  
)

/* harmony default export */ var Delivery = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/SectionBanner.vue?vue&type=template&id=47feff8f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: ['ps-section--banner', _vm.sectionClass]
  }, [_vm._ssrNode("<div class=\"ps-section__overlay\"" + _vm._ssrStyle(null, null, {
    display: _vm.loadingBanner ? '' : 'none'
  }) + "><div class=\"ps-section__loading\"></div></div> "), _vm._ssrNode("<div class=\"ps-swiper\">", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:bannerSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "bannerSwiper"
    }],
    staticClass: "swiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.listData, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm.round ? _vm._ssrNode("<div class=\"ps-banner--round\">", "</div>", [_c('banner', {
      attrs: {
        "banner": item
      }
    })], 1) : _c('banner', {
      attrs: {
        "banner": item
      }
    })], 1);
  }), 0)]), _vm._ssrNode(" <div class=\"ps-swiper__nav\"><div class=\"swiper-button-prev swiper-prev-banner\"></div> <div class=\"swiper-button-next swiper-next-banner\"></div></div> <div class=\"swiper-pagination pagination-banner\"></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/SectionBanner.vue?vue&type=template&id=47feff8f&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/elements/commons/Banner.vue + 4 modules
var Banner = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/SectionBanner.vue?vue&type=script&lang=js&


/* harmony default export */ var SectionBannervue_type_script_lang_js_ = ({
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    sectionClass: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Banner: Banner["a" /* default */]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 15000,
          disableOnInteraction: false
        },
        navigation: {
          prevEl: '.swiper-prev-banner',
          nextEl: '.swiper-next-banner'
        },
        pagination: {
          el: '.pagination-banner',
          clickable: true
        }
      },
      loadingBanner: true
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  },
  mounted() {
    setTimeout(() => {
      this.loadingBanner = false;
    }, 1000);
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/SectionBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_SectionBannervue_type_script_lang_js_ = (SectionBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/SectionBanner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_SectionBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "92d1d272"
  
)

/* harmony default export */ var SectionBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductByCollection; });
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

async function getProductByCollection(slug) {
  const endPoint = `collections?slug=${slug}`;
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/${endPoint}`).then(response => {
    if (response.data && response.data.length > 0) {
      return response.data[0].products;
    } else {
      return [];
    }
  }).catch(error => {
    console.log(JSON.stringify(error));
    return null;
  });
  return reponse;
}

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/FeaturedProduct.vue?vue&type=template&id=2828fa0e&


var FeaturedProductvue_type_template_id_2828fa0e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--featured"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(5, function (item) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-2dot4\">", "</div>", [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"row m-0\">", "</div>", _vm._l(_vm.dataList, function (item, index) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-2dot4 p-0\">", "</div>", [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"ps-shop__more\"><a href=\"#\">Show all</a></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/FeaturedProduct.vue?vue&type=template&id=2828fa0e&

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/FeaturedProduct.vue?vue&type=script&lang=js&


/* harmony default export */ var FeaturedProductvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ProductStandard: ProductStandard["a" /* default */]
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/FeaturedProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_FeaturedProductvue_type_script_lang_js_ = (FeaturedProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/FeaturedProduct.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_FeaturedProductvue_type_script_lang_js_,
  FeaturedProductvue_type_template_id_2828fa0e_render,
  staticRenderFns,
  false,
  null,
  null,
  "275d2492"
  
)

/* harmony default export */ var FeaturedProduct = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 370:
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":[{\"name\":\"Wound Care\",\"list\":[{\"text\":\"Accessories\",\"url\":\"/shop\"},{\"text\":\"Bandages\",\"url\":\"/shop\"},{\"text\":\"Gypsum foundations\",\"url\":\"/shop\"},{\"text\":\"Patches and tapes\",\"url\":\"/shop\"},{\"text\":\"Surgical sutures\",\"url\":\"/shop\"},{\"text\":\"Swabs\",\"url\":\"/shop\"},{\"text\":\"Wound healing\",\"url\":\"/shop\"}]},{\"name\":\"Higiene\",\"list\":[{\"text\":\"Disinfectants\",\"url\":\"/shop\"},{\"text\":\"Disposable products\",\"url\":\"/shop\"},{\"text\":\"Face Masks - protective\",\"url\":\"/shop\"},{\"text\":\"Gloves\",\"url\":\"/shop\"},{\"text\":\"Protective clothing\",\"url\":\"/shop\"},{\"text\":\"Sterilization\",\"url\":\"/shop\"},{\"text\":\"Surgical foils\",\"url\":\"/shop\"}]},{\"name\":\"Laboratory\",\"list\":[{\"text\":\"Accessories\",\"url\":\"/shop\"},{\"text\":\"Devices\",\"url\":\"/shop\"},{\"text\":\"Diagnostic tests\",\"url\":\"/shop\"},{\"text\":\"Dyes\",\"url\":\"/shop\"},{\"text\":\"Pipettes\",\"url\":\"/shop\"},{\"text\":\"Tubes\",\"url\":\"/shop\"},{\"text\":\"Test-tubes\",\"url\":\"/shop\"}]},{\"name\":\"Tools\",\"list\":[{\"text\":\"Care products\",\"url\":\"/shop\"},{\"text\":\"Claws and forceps\",\"url\":\"/shop\"},{\"text\":\"Electrosurgery\",\"url\":\"/shop\"},{\"text\":\"Needles\",\"url\":\"/shop\"},{\"text\":\"Plaster tools\",\"url\":\"/shop\"},{\"text\":\"Scalpels, blades\",\"url\":\"/shop\"},{\"text\":\"Scissors\",\"url\":\"/shop\"}]},{\"name\":\"Diagnosis\",\"list\":[{\"text\":\"Accessories\",\"url\":\"/shop\"},{\"text\":\"Biopsy tools\",\"url\":\"/shop\"},{\"text\":\"Endoscopes\",\"url\":\"/shop\"},{\"text\":\"Monitoring\",\"url\":\"/shop\"},{\"text\":\"Otoscopes\",\"url\":\"/shop\"},{\"text\":\"Oxygen concentrators\",\"url\":\"/shop\"},{\"text\":\"Thermometers\",\"url\":\"/shop\"}]},{\"name\":\"Equipment\",\"list\":[{\"text\":\"Blades\",\"url\":\"/shop\"},{\"text\":\"Education\",\"url\":\"/shop\"},{\"text\":\"Germicidal lamps\",\"url\":\"/shop\"},{\"text\":\"Infusion stands\",\"url\":\"/shop\"},{\"text\":\"Lighting\",\"url\":\"/shop\"},{\"text\":\"Machines\",\"url\":\"/shop\"},{\"text\":\"Tables and assistants\",\"url\":\"/shop\"}]}],\"c\":[{\"text\":\"Bandages\",\"image\":\"/img/branch/plastercross.svg\"},{\"text\":\"Capsules\",\"image\":\"/img/branch/capsule.svg\"},{\"text\":\"Dental\",\"image\":\"/img/branch/dental.svg\"},{\"text\":\"Thermometer\",\"image\":\"/img/branch/thermometer.svg\"},{\"text\":\"Heart Health\",\"image\":\"/img/branch/heart-healt.svg\"},{\"text\":\"Micrscope\",\"image\":\"/img/branch/microscope.svg\"},{\"text\":\"Tubes\",\"image\":\"/img/branch/tube.svg\"}],\"b\":[{\"name\":\"Face masks\",\"image\":\"/img/promotion/facemask-cat.png\"},{\"name\":\"Uniforms\",\"image\":\"/img/promotion/uniforms-cat.png\"},{\"name\":\"Protective covers\",\"image\":\"/img/promotion/protectcover-cat.png\"},{\"name\":\"Dental\",\"image\":\"/img/promotion/dental-cat.png\"},{\"name\":\"Blood pressure\",\"image\":\"/img/promotion/pressure-cat.png\"},{\"name\":\"Sugar level\",\"image\":\"/img/promotion/sugarlevel-cat.png\"}]}");

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
// Mixins


 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
// Must be after routable
// to overwrite activeClass
Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('tabsBar'), _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-tab',
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  data: () => ({
    proxyClass: 'v-tab--active'
  }),
  computed: {
    classes() {
      return {
        'v-tab': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-tab--disabled': this.disabled,
        ...this.groupClasses
      };
    },
    value() {
      let to = this.to || this.href;
      if (to == null) return to;
      if (this.$router && this.to === Object(this.to)) {
        const resolve = this.$router.resolve(this.to, this.$route, this.append);
        to = resolve.href;
      }
      return to.replace('#', '');
    }
  },
  methods: {
    click(e) {
      // Prevent keyboard actions
      // from children elements
      // within disabled tabs
      if (this.disabled) {
        e.preventDefault();
        return;
      } // If user provides an
      // actual link, do not
      // prevent default

      if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
      if (e.detail) this.$el.blur();
      this.$emit('click', e);
      this.to || this.toggle();
    },
    toggle() {
      // VItemGroup treats a change event as a click
      if (!this.isActive || !this.tabsBar.mandatory && !this.to) {
        this.$emit('change');
      }
    }
  },
  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = {
      ...data.attrs,
      'aria-selected': String(this.isActive),
      role: 'tab',
      tabindex: this.disabled ? -1 : 0
    };
    data.on = {
      ...data.on,
      keydown: e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* keyCodes */ "s"].enter) this.click(e);
        this.$emit('keydown', e);
      }
    };
    return h(tag, data, this.$slots.default);
  }
}));

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTabs/VTabs.sass
var VTabs = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(339);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities



function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
  const clientWidth = selectedElement.clientWidth;
  const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;
  if (rtl) {
    currentScrollOffset = -currentScrollOffset;
  }
  const totalWidth = widths.wrapper + currentScrollOffset;
  const itemOffset = clientWidth + offsetLeft;
  const additionalOffset = clientWidth * 0.4;
  if (offsetLeft <= currentScrollOffset) {
    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
  } else if (totalWidth <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
  }
  return rtl ? -currentScrollOffset : currentScrollOffset;
}
function calculateCenteredOffset(selectedElement, widths, rtl) {
  const {
    offsetLeft,
    clientWidth
  } = selectedElement;
  if (rtl) {
    const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  } else {
    const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
    return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  }
}
const BaseSlideGroup = Object(mixins["a" /* default */])(VItemGroup["a" /* BaseItemGroup */], mobile["a" /* default */]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: resize["a" /* default */],
    Touch: touch["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },
    __cachedNext() {
      return this.genTransition('next');
    },
    __cachedPrev() {
      return this.genTransition('prev');
    },
    classes() {
      return {
        ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },
    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },
    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },
    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }
  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',
    scrollOffset(val) {
      if (this.$vuetify.rtl) val = -val;
      let scroll = val <= 0 ? bias(-val) : val > this.widths.content - this.widths.wrapper ? -(this.widths.content - this.widths.wrapper) + bias(this.widths.content - this.widths.wrapper - val) : -val;
      if (this.$vuetify.rtl) scroll = -scroll;
      this.$refs.content.style.transform = `translateX(${scroll}px)`;
    }
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      obs.observe(this.$refs.content);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    } else {
      let itemsLength = 0;
      this.$on('hook:beforeUpdate', () => {
        var _a;
        itemsLength = (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length;
      });
      this.$on('hook:updated', () => {
        var _a;
        if (itemsLength === (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length) return;
        this.setWidths();
      });
    }
  },
  methods: {
    onScroll() {
      this.$refs.wrapper.scrollLeft = 0;
    },
    onFocusin(e) {
      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration

      for (const el of Object(helpers["f" /* composedPath */])(e)) {
        for (const vm of this.items) {
          if (vm.$el === el) {
            this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
            return;
          }
        }
      }
    },
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content',
        on: {
          focusin: this.onFocusin
        }
      }, this.$slots.default);
    },
    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },
    genIcon(location) {
      let icon = location;
      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }
      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },
    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },
    genTransition(location) {
      return this.$createElement(transitions["c" /* VFadeTransition */], [this.genIcon(location)]);
    },
    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper',
        on: {
          scroll: this.onScroll
        }
      }, [this.genContent()]);
    },
    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },
    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },
    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },
    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },
    onTouchMove(e) {
      if (!this.canTouch) return;
      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }
      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },
    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);
      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },
    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },
    scrollIntoView
    /* istanbul ignore next */() {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();
        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }
      if (!this.selectedItem) {
        return;
      }
      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },
    scrollTo
    /* istanbul ignore next */(location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },
    setWidths() {
      window.requestAnimationFrame(() => {
        if (this._isDestroyed) return;
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }
  },
  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }
});
/* harmony default export */ var VSlideGroup_VSlideGroup = (BaseSlideGroup.extend({
  name: 'v-slide-group',
  provide() {
    return {
      slideGroup: this
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js
var ssr_bootable = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsBar.js
// Extensions
 // Mixins


 // Utilities


/* harmony default export */ var VTabsBar = (Object(mixins["a" /* default */])(BaseSlideGroup, ssr_bootable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-tabs-bar',
  provide() {
    return {
      tabsBar: this
    };
  },
  computed: {
    classes() {
      return {
        ...BaseSlideGroup.options.computed.classes.call(this),
        'v-tabs-bar': true,
        'v-tabs-bar--is-mobile': this.isMobile,
        // TODO: Remove this and move to v-slide-group
        'v-tabs-bar--show-arrows': this.showArrows,
        ...this.themeClasses
      };
    }
  },
  watch: {
    items: 'callSlider',
    internalValue: 'callSlider',
    $route: 'onRouteChange'
  },
  methods: {
    callSlider() {
      if (!this.isBooted) return;
      this.$emit('call:slider');
    },
    genContent() {
      const render = BaseSlideGroup.options.methods.genContent.call(this);
      render.data = render.data || {};
      render.data.staticClass += ' v-tabs-bar__content';
      return render;
    },
    onRouteChange(val, oldVal) {
      /* istanbul ignore next */
      if (this.mandatory) return;
      const items = this.items;
      const newPath = val.path;
      const oldPath = oldVal.path;
      let hasNew = false;
      let hasOld = false;
      for (const item of items) {
        if (item.to === oldPath) hasOld = true;else if (item.to === newPath) hasNew = true;
        if (hasNew && hasOld) break;
      } // If we have an old item and not a new one
      // it's assumed that the user navigated to
      // a path that is not present in the items

      if (!hasNew && hasOld) this.internalValue = undefined;
    }
  },
  render(h) {
    const render = BaseSlideGroup.options.render.call(this, h);
    render.data.attrs = {
      role: 'tablist'
    };
    return render;
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js + 5 modules
var VTabsItems = __webpack_require__(348);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
// Mixins
 // Utilities


/* @vue/component */

/* harmony default export */ var VTabsSlider = (Object(mixins["a" /* default */])(colorable["a" /* default */]).extend({
  name: 'v-tabs-slider',
  render(h) {
    return h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-tabs-slider'
    }));
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js
// Styles
 // Components



 // Mixins



 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(colorable["a" /* default */], proxyable["a" /* default */], themeable["a" /* default */]);
/* harmony default export */ var VTabs_VTabs = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-tabs',
  directives: {
    Resize: resize["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    alignWithTitle: Boolean,
    backgroundColor: String,
    centerActive: Boolean,
    centered: Boolean,
    fixedTabs: Boolean,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: undefined
    },
    hideSlider: Boolean,
    iconsAndText: Boolean,
    mobileBreakpoint: [String, Number],
    nextIcon: {
      type: String,
      default: '$next'
    },
    optional: Boolean,
    prevIcon: {
      type: String,
      default: '$prev'
    },
    right: Boolean,
    showArrows: [Boolean, String],
    sliderColor: String,
    sliderSize: {
      type: [Number, String],
      default: 2
    },
    vertical: Boolean
  },
  data() {
    return {
      resizeTimeout: 0,
      slider: {
        height: null,
        left: null,
        right: null,
        top: null,
        width: null
      },
      transitionTime: 300
    };
  },
  computed: {
    classes() {
      return {
        'v-tabs--align-with-title': this.alignWithTitle,
        'v-tabs--centered': this.centered,
        'v-tabs--fixed-tabs': this.fixedTabs,
        'v-tabs--grow': this.grow,
        'v-tabs--icons-and-text': this.iconsAndText,
        'v-tabs--right': this.right,
        'v-tabs--vertical': this.vertical,
        ...this.themeClasses
      };
    },
    isReversed() {
      return this.$vuetify.rtl && this.vertical;
    },
    sliderStyles() {
      return {
        height: Object(helpers["g" /* convertToUnit */])(this.slider.height),
        left: this.isReversed ? undefined : Object(helpers["g" /* convertToUnit */])(this.slider.left),
        right: this.isReversed ? Object(helpers["g" /* convertToUnit */])(this.slider.right) : undefined,
        top: this.vertical ? Object(helpers["g" /* convertToUnit */])(this.slider.top) : undefined,
        transition: this.slider.left != null ? null : 'none',
        width: Object(helpers["g" /* convertToUnit */])(this.slider.width)
      };
    },
    computedColor() {
      if (this.color) return this.color;else if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    }
  },
  watch: {
    alignWithTitle: 'callSlider',
    centered: 'callSlider',
    centerActive: 'callSlider',
    fixedTabs: 'callSlider',
    grow: 'callSlider',
    iconsAndText: 'callSlider',
    right: 'callSlider',
    showArrows: 'callSlider',
    vertical: 'callSlider',
    '$vuetify.application.left': 'onResize',
    '$vuetify.application.right': 'onResize',
    '$vuetify.rtl': 'onResize'
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    }
    this.$nextTick(() => {
      window.setTimeout(this.callSlider, 30);
    });
  },
  methods: {
    callSlider() {
      if (this.hideSlider || !this.$refs.items || !this.$refs.items.selectedItems.length) {
        this.slider.width = 0;
        return false;
      }
      this.$nextTick(() => {
        // Give screen time to paint
        const activeTab = this.$refs.items.selectedItems[0];
        /* istanbul ignore if */

        if (!activeTab || !activeTab.$el) {
          this.slider.width = 0;
          this.slider.left = 0;
          return;
        }
        const el = activeTab.$el;
        this.slider = {
          height: !this.vertical ? Number(this.sliderSize) : el.scrollHeight,
          left: this.vertical ? 0 : el.offsetLeft,
          right: this.vertical ? 0 : el.offsetLeft + el.offsetWidth,
          top: el.offsetTop,
          width: this.vertical ? Number(this.sliderSize) : el.scrollWidth
        };
      });
      return true;
    },
    genBar(items, slider) {
      const data = {
        style: {
          height: Object(helpers["g" /* convertToUnit */])(this.height)
        },
        props: {
          activeClass: this.activeClass,
          centerActive: this.centerActive,
          dark: this.dark,
          light: this.light,
          mandatory: !this.optional,
          mobileBreakpoint: this.mobileBreakpoint,
          nextIcon: this.nextIcon,
          prevIcon: this.prevIcon,
          showArrows: this.showArrows,
          value: this.internalValue
        },
        on: {
          'call:slider': this.callSlider,
          change: val => {
            this.internalValue = val;
          }
        },
        ref: 'items'
      };
      this.setTextColor(this.computedColor, data);
      this.setBackgroundColor(this.backgroundColor, data);
      return this.$createElement(VTabsBar, data, [this.genSlider(slider), items]);
    },
    genItems(items, item) {
      // If user provides items
      // opt to use theirs
      if (items) return items; // If no tabs are provided
      // render nothing

      if (!item.length) return null;
      return this.$createElement(VTabsItems["a" /* default */], {
        props: {
          value: this.internalValue
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, item);
    },
    genSlider(slider) {
      if (this.hideSlider) return null;
      if (!slider) {
        slider = this.$createElement(VTabsSlider, {
          props: {
            color: this.sliderColor
          }
        });
      }
      return this.$createElement('div', {
        staticClass: 'v-tabs-slider-wrapper',
        style: this.sliderStyles
      }, [slider]);
    },
    onResize() {
      if (this._isDestroyed) return;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(this.callSlider, 0);
    },
    parseNodes() {
      let items = null;
      let slider = null;
      const item = [];
      const tab = [];
      const slot = this.$slots.default || [];
      const length = slot.length;
      for (let i = 0; i < length; i++) {
        const vnode = slot[i];
        if (vnode.componentOptions) {
          switch (vnode.componentOptions.Ctor.options.name) {
            case 'v-tabs-slider':
              slider = vnode;
              break;
            case 'v-tabs-items':
              items = vnode;
              break;
            case 'v-tab-item':
              item.push(vnode);
              break;
            // case 'v-tab' - intentionally omitted

            default:
              tab.push(vnode);
          }
        } else {
          tab.push(vnode);
        }
      }
      /**
       * tab: array of `v-tab`
       * slider: single `v-tabs-slider`
       * items: single `v-tabs-items`
       * item: array of `v-tab-item`
       */

      return {
        tab,
        slider,
        items,
        item
      };
    }
  },
  render(h) {
    const {
      tab,
      slider,
      items,
      item
    } = this.parseNodes();
    return h('div', {
      staticClass: 'v-tabs',
      class: this.classes,
      directives: [{
        name: 'resize',
        modifiers: {
          quiet: true
        },
        value: this.onResize
      }]
    }, [this.genBar(tab, slider), this.genItems(items, item)]);
  }
}));

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(bootable["a" /* default */], Object(groupable["a" /* factory */])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ var VWindowItem = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },
  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },
  computed: {
    classes() {
      return this.groupClasses;
    },
    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }
      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }
  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },
    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },
    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.

      this.inTransition = false;
      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },
    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.

      this.inTransition = true;
      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(helpers["g" /* convertToUnit */])(this.windowGroup.$el.clientHeight);
      }
      this.windowGroup.transitionCount++;
    },
    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }
      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.

        this.windowGroup.transitionHeight = Object(helpers["g" /* convertToUnit */])(el.clientHeight);
      });
    }
  },
  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
// Extensions

/* @vue/component */

/* harmony default export */ var VTabItem = __webpack_exports__["a"] = (VWindowItem.extend({
  name: 'v-tab-item',
  props: {
    id: String
  },
  methods: {
    genWindowItem() {
      const item = VWindowItem.options.methods.genWindowItem.call(this);
      item.data.domProps = item.data.domProps || {};
      item.data.domProps.id = this.id || this.value;
      return item;
    }
  }
}));

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterCategory.vue?vue&type=template&id=35ace21a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row ps-footer__category m-0"
  }, [_vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.woundCare.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.woundCare.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.higiene.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.higiene.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.laboratory.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.laboratory.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.tools.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.tools.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.diagnosis.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.diagnosis.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.equipment.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.equipment.items,
      "className": 'ps-block__list'
    }
  })], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCategory.vue?vue&type=template&id=35ace21a&

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./static/data/footer.json
var footer = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterCategory.vue?vue&type=script&lang=js&


/* harmony default export */ var FooterCategoryvue_type_script_lang_js_ = ({
  components: {
    RenderList: RenderList["a" /* default */]
  },
  data() {
    return {
      woundCare: footer["i" /* woundCare */],
      higiene: footer["d" /* higiene */],
      laboratory: footer["f" /* laboratory */],
      tools: footer["h" /* tools */],
      diagnosis: footer["b" /* diagnosis */],
      equipment: footer["c" /* equipment */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCategory.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_FooterCategoryvue_type_script_lang_js_ = (FooterCategoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCategory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_FooterCategoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6505d93c"
  
)

/* harmony default export */ var FooterCategory = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js + 1 modules
var VTabItem = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 3 modules
var VTabs = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsItems.js + 5 modules
var VTabsItems = __webpack_require__(348);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/BestsellersProduct.vue?vue&type=template&id=53bc2ae2&







var BestsellersProductvue_type_template_id_53bc2ae2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--sellers"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Top 5 Bestsellers in: </h3> "), _vm._ssrNode("<div class=\"ps-section__tab\">", "</div>", [_c(VTabs["a" /* default */], {
    attrs: {
      "centered": ""
    },
    model: {
      value: _vm.tab,
      callback: function ($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c(VTab["a" /* default */], {
    attrs: {
      "href": "#blood"
    }
  }, [_vm._v("\n                    Blood pressure\n                ")]), _vm._v(" "), _c(VTab["a" /* default */], {
    attrs: {
      "href": "#mask"
    }
  }, [_vm._v("\n                    Face masks\n                ")]), _vm._v(" "), _c(VTab["a" /* default */], {
    attrs: {
      "href": "#stomatology"
    }
  }, [_vm._v("\n                    Stomatology\n                ")])], 1), _vm._ssrNode(" "), _c(VTabsItems["a" /* default */], {
    model: {
      value: _vm.tab,
      callback: function ($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c(VTabItem["a" /* default */], {
    attrs: {
      "value": "blood"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "tab-content",
    attrs: {
      "flat": ""
    }
  }, [_c('div', {
    staticClass: "ps-swiper"
  }, [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:tabBloodSwiper",
      value: _vm.swiperOption1,
      expression: "swiperOption1",
      arg: "tabBloodSwiper"
    }],
    staticClass: "swiper"
  }, [_vm.loading ? _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(5, function (item) {
    return _c('div', {
      key: item,
      staticClass: "swiper-slide ps-preloader"
    }, [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.dataList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination pagination-tab-blood"
  })])])], 1), _vm._v(" "), _c(VTabItem["a" /* default */], {
    attrs: {
      "value": "mask"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "tab-content",
    attrs: {
      "flat": ""
    }
  }, [_c('div', {
    staticClass: "ps-swiper"
  }, [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:tabMaskSwiper",
      value: _vm.swiperOption2,
      expression: "swiperOption2",
      arg: "tabMaskSwiper"
    }],
    staticClass: "swiper"
  }, [_vm.loading ? _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(5, function (item) {
    return _c('div', {
      key: item,
      staticClass: "swiper-slide ps-preloader"
    }, [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.dataList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination pagination-tab-mask"
  })])])], 1), _vm._v(" "), _c(VTabItem["a" /* default */], {
    attrs: {
      "value": "stomatology"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "tab-content",
    attrs: {
      "flat": ""
    }
  }, [_c('div', {
    staticClass: "ps-swiper"
  }, [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:tabStomatologySwiper",
      value: _vm.swiperOption3,
      expression: "swiperOption3",
      arg: "tabStomatologySwiper"
    }],
    staticClass: "swiper"
  }, [_vm.loading ? _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(5, function (item) {
    return _c('div', {
      key: item,
      staticClass: "swiper-slide ps-preloader"
    }, [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.dataList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination pagination-tab-stomatology"
  })])])], 1)], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/BestsellersProduct.vue?vue&type=template&id=53bc2ae2&

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/BestsellersProduct.vue?vue&type=script&lang=js&


/* harmony default export */ var BestsellersProductvue_type_script_lang_js_ = ({
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ProductStandard: ProductStandard["a" /* default */]
  },
  data() {
    return {
      tab: 0,
      swiperOption1: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          delay: 11000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.pagination-tab-blood',
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      },
      swiperOption2: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          delay: 11000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.pagination-tab-mask',
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      },
      swiperOption3: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          delay: 11000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.pagination-tab-stomatology',
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/BestsellersProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_BestsellersProductvue_type_script_lang_js_ = (BestsellersProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/BestsellersProduct.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_BestsellersProductvue_type_script_lang_js_,
  BestsellersProductvue_type_template_id_53bc2ae2_render,
  staticRenderFns,
  false,
  null,
  null,
  "46f66bf9"
  
)

/* harmony default export */ var BestsellersProduct = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=template&id=4a969818&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--category-horizontal"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Popular categories</h3> "), _vm._ssrNode("<div class=\"ps-category__content\">", "</div>", _vm._l(_vm.popularCategories, function (item, index) {
    return _vm._ssrNode("<div class=\"ps-category__item\">", "</div>", [_c('nuxt-link', {
      staticClass: "ps-category__link",
      attrs: {
        "to": "/shop"
      }
    }, [_c('img', {
      attrs: {
        "src": item.image,
        "alt": ""
      }
    })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-category__name\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": "/shop"
      }
    }, [_vm._v(_vm._s(item.text))])], 1)], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-category__all\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop"
    }
  }, [_vm._v("Show all")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=template&id=4a969818&

// EXTERNAL MODULE: ./static/data/category.json
var category = __webpack_require__(370);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=script&lang=js&

/* harmony default export */ var PopularCategoryHorizontalvue_type_script_lang_js_ = ({
  data() {
    return {
      popularCategories: category["c" /* popularCategories */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_PopularCategoryHorizontalvue_type_script_lang_js_ = (PopularCategoryHorizontalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_PopularCategoryHorizontalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b17b4d1"
  
)

/* harmony default export */ var PopularCategoryHorizontal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterListpage.vue?vue&type=template&id=0bd37320&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-footer--listpage"
  }, [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/about-us"
    }
  }, [_vm._v("About us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Delivery information")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Privacy Policy")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Affiliate")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Sales")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Terms & Conditions")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Bestsellers")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Discount")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Latest products")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("My account")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("My orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Returns")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop/list"
    }
  }, [_vm._v("Shipping")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_vm._v("Wishlist")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-4 col-md-2\"></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterListpage.vue?vue&type=template&id=0bd37320&

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterListpage.vue?vue&type=script&lang=js&

/* harmony default export */ var FooterListpagevue_type_script_lang_js_ = ({
  components: {
    RenderList: RenderList["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterListpage.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_FooterListpagevue_type_script_lang_js_ = (FooterListpagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterListpage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_FooterListpagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "88d0fe2a"
  
)

/* harmony default export */ var FooterListpage = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterNewsletter.vue?vue&type=template&id=35b80cc0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-footer--newsletter"
  }, [_vm._ssrNode("<h5 class=\"ps-footer__title\">Join our newsletter</h5> <p>And get $20 discount for your first order</p> "), _c('form-subscribe', {
    on: {
      "handleSubscribe": _vm.handleSubscribe
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterNewsletter.vue?vue&type=template&id=35b80cc0&

// EXTERNAL MODULE: ./components/elements/commons/FormSubscribe.vue + 4 modules
var FormSubscribe = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterNewsletter.vue?vue&type=script&lang=js&

/* harmony default export */ var FooterNewslettervue_type_script_lang_js_ = ({
  components: {
    FormSubscribe: FormSubscribe["a" /* default */]
  },
  methods: {
    handleSubscribe(email) {
      console.log('email', email);
      const message = {
        message: 'Thank you for you subscribe.',
        icon: 'icon-shield-check'
      };
      this.$store.commit('app/setMessageNotify', message);
      this.$store.commit('app/setDialogNotify', true);
    }
  }
});
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterNewsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_FooterNewslettervue_type_script_lang_js_ = (FooterNewslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterNewsletter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_FooterNewslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "04a739f7"
  
)

/* harmony default export */ var FooterNewsletter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/Header3Search.vue?vue&type=template&id=b540d024&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-header3-search-mobile"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-search__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-menu__sticky\"><a href=\"#\" class=\"menu-slide\"><i class=\"fa fa-bars\"></i>Products</a></div> "), _vm._ssrNode("<div class=\"ps-header__menu\">", "</div>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu"
    }
  })], 1), _vm._ssrNode(" "), _c('form-search')], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/modules/Header3Search.vue?vue&type=template&id=b540d024&

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/shared/headers/modules/FormSearch.vue + 4 modules
var FormSearch = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/Header3Search.vue?vue&type=script&lang=js&



/* harmony default export */ var Header3Searchvue_type_script_lang_js_ = ({
  components: {
    RenderList: RenderList["a" /* default */],
    FormSearch: FormSearch["a" /* default */]
  },
  data() {
    return {
      mainMenu: menu["c" /* menuHome3 */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/headers/modules/Header3Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_Header3Searchvue_type_script_lang_js_ = (Header3Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/modules/Header3Search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_Header3Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75f20329"
  
)

/* harmony default export */ var Header3Search = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(453);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("555cfce6", content, true, context)
};

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_3_vue_vue_type_style_index_0_id_2647786b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_3_vue_vue_type_style_index_0_id_2647786b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_3_vue_vue_type_style_index_0_id_2647786b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_3_vue_vue_type_style_index_0_id_2647786b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_3_vue_vue_type_style_index_0_id_2647786b_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--3 .ps-section--banner .ps-banner__fluid{position:static}.ps-home--3 .ps-section--banner .ps-banner__fluid .ps-banner__image{width:100%;height:100%;position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover}.ps-home--3 .ps-section--banner .ps-banner__content{z-index:10;position:relative;height:256px}.ps-home--3 .ps-section--banner .ps-banner__persen{bottom:-20%}.ps-home--3 .ps-section--banner .container-initial .ps-banner__block{position:static}.ps-home--3 .ps-section--banner .ps-banner .container{padding:0}.ps-home--3 .ps-home__content{padding-top:15px}.ps-home--3 .ps-home__row,.ps-home--3 .ps-promo{padding:30px 0 50px}.ps-home--3 .ps-promo .ps-promo__banner{max-height:200px;min-height:200px}.ps-home--3 .ps-section--featured{padding:30px 0 80px}.ps-home--3 .ps-home3__banner{background-size:cover;background-position:50%}.ps-home--3 .ps-home3__banner .ps-banner{height:600px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__thumnail{padding-top:10px;position:i}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__persen{position:static;margin:auto;width:133px;height:133px;font-size:45px;line-height:45px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__btn-group{display:block;margin:20px 0 0}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__btn{line-height:20px;color:#103178;font-weight:600;display:block;font-size:18px;margin-bottom:15px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__btn img{margin-top:-5px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__content{height:auto}.ps-home--3 .ps-delivery{margin:30px 0 50px}.ps-home--3 .ps-section--sellers{padding:30px 0 50px}.ps-home--3 .ps-section--category-horizontal{padding-bottom:50px}.ps-home--3 .ps-section--weekdeal{padding-bottom:30px}@media(min-width:768px){.ps-home--3 .ps-home__row .ps-home__week-deal{padding-right:0}.ps-home--3 .ps-home3__banner .ps-banner{height:430px;min-height:430px!important}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__content{width:60%;flex:0 0 60%}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__thumnail{padding-top:0;display:flex;justify-content:center;align-items:center;flex:0 0 40%}.ps-home--3 .ps-promo .ps-promo__banner{max-height:160px;min-height:160px}.ps-home--3 .ps-section--banner .ps-banner__content{padding-top:4%;height:auto}.ps-home--3 .ps-section--banner .ps-banner__persen{bottom:25%;right:-75%}.ps-home--3 .ps-section--banner .ps-banner .container{padding:0 15px}}@media(min-width:1024px){.ps-home--3 .ps-home3__banner .ps-banner{height:500px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__content{padding-top:40px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__btn-group{display:table;margin:30px 0 20px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__btn{display:table-cell}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__persen{margin-left:100px}}@media(min-width:1200px){.ps-home--3 .ps-home__row .ps-home__week-deal{padding-right:15px}}@media(min-width:1280px){.ps-home--3 .ps-section--banner .ps-banner{height:700px}.ps-home--3 .ps-section--banner .ps-banner__content{padding-top:0;display:flex;flex-direction:column;justify-content:center}.ps-home--3 .ps-section--banner .ps-banner__shop{width:-moz-fit-content;width:fit-content}.ps-home--3 .ps-section--banner .ps-banner__persen{right:-105%}.ps-home--3 .ps-promo .ps-promo__banner{max-height:230px;min-height:230px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__title{font-size:50px;line-height:1.2}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__desc{font-size:22px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__shop{font-size:18px}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__content{padding-top:0;display:flex;flex-direction:column;justify-content:center}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__shop{width:-moz-fit-content;width:fit-content}.ps-home--3 .ps-home3__banner .ps-banner .ps-banner__persen{margin-left:70px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-3.vue?vue&type=template&id=2647786b&



var home_3vue_type_template_id_2647786b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v3'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--3"
  }, [_c('section-banner', {
    attrs: {
      "listData": _vm.banners
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-home__content"
  }, [_c('popular-category-horizontal'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row ps-home__row"
  }, [_c('div', {
    staticClass: "col-12 col-sm-4 col-md-3 ps-home__week-deal"
  }, [_c('weekdeal-product', {
    attrs: {
      "product": _vm.product
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-sm-8 col-md-9"
  }, [_c('section', {
    staticClass: "ps-section--latest-horizontal"
  }, [_c('h3', {
    staticClass: "ps-section__title"
  }, [_vm._v("\n                                Latest products\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "ps-section__content"
  }, [_vm.loading ? _c('div', {
    staticClass: "row"
  }, _vm._l(4, function (item) {
    return _c('div', {
      key: item,
      staticClass: "col-6 col-lg-3"
    }, [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _c('div', {
    staticClass: "row m-0"
  }, [_vm._l(_vm.latestProduct, function (item, index) {
    return [index < 8 ? _c('div', {
      key: item.id,
      staticClass: "col-6 col-lg-3 p-0"
    }, [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1) : _vm._e()];
  })], 2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "ps-promo"
  }, [_c('h3', {
    staticClass: "ps-promo__title"
  }, [_vm._v("Latest offers")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.promotions, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-sm-4"
    }, [_c('promo-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])]), _vm._v(" "), _c('bestsellers-product', {
    attrs: {
      "dataList": _vm.bestsellerProduct
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('delivery')], 1), _vm._v(" "), _c('featured-product', {
    attrs: {
      "title": "Featured products",
      "dataList": _vm.featuredProduct
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "ps-home3__banner",
    staticStyle: {
      "background-image": "url('/img/promotion/banner-bg-12.jpg')"
    }
  }, [_c('banner', {
    attrs: {
      "banner": _vm.banner
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('footer-v3')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-3.vue?vue&type=template&id=2647786b&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV3.vue?vue&type=template&id=e80fa378&
var FooterV3vue_type_template_id_e80fa378_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "ps-footer ps-footer--3"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('footer-top'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-footer__middle\">", "</div>", [_c('footer-category'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row ps-footer__box\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-4\">", "</div>", [_c('footer-contact')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-4\">", "</div>", [_c('footer-address')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-4\">", "</div>", [_c('footer-newsletter')], 1)], 2), _vm._ssrNode(" "), _c('footer-listpage')], 2), _vm._ssrNode(" "), _c('footer-bottom')], 2)]);
};
var FooterV3vue_type_template_id_e80fa378_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/FooterV3.vue?vue&type=template&id=e80fa378&

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterBottom.vue + 2 modules
var FooterBottom = __webpack_require__(88);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterTop.vue + 4 modules
var FooterTop = __webpack_require__(85);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterContact.vue + 2 modules
var FooterContact = __webpack_require__(89);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterAddress.vue + 4 modules
var FooterAddress = __webpack_require__(86);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterCategory.vue + 4 modules
var FooterCategory = __webpack_require__(382);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterListpage.vue + 4 modules
var FooterListpage = __webpack_require__(401);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterNewsletter.vue + 4 modules
var FooterNewsletter = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV3.vue?vue&type=script&lang=js&







/* harmony default export */ var FooterV3vue_type_script_lang_js_ = ({
  components: {
    FooterBottom: FooterBottom["a" /* default */],
    FooterTop: FooterTop["a" /* default */],
    FooterContact: FooterContact["a" /* default */],
    FooterAddress: FooterAddress["a" /* default */],
    FooterCategory: FooterCategory["a" /* default */],
    FooterListpage: FooterListpage["a" /* default */],
    FooterNewsletter: FooterNewsletter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/shared/footers/FooterV3.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_FooterV3vue_type_script_lang_js_ = (FooterV3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/FooterV3.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_FooterV3vue_type_script_lang_js_,
  FooterV3vue_type_template_id_e80fa378_render,
  FooterV3vue_type_template_id_e80fa378_staticRenderFns,
  false,
  null,
  null,
  "27ff3d33"
  
)

/* harmony default export */ var FooterV3 = (component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV3.vue?vue&type=template&id=9ce35f04&
var HeaderV3vue_type_template_id_9ce35f04_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--3', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__top\">", "</div>", [_c('header-top')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sticky-logo",
    attrs: {
      "src": "/img/sticky-logo.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li class=\"ps-header__user\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-user\"></i></a> "), _c('login-modal')], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    staticClass: "ps-header__item",
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.wishlistItems.length))])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-cart-empty\"></i> <span class=\"badge\">" + _vm._ssrEscape(_vm._s(_vm.productCartQuantity)) + "</span></a> "), _c('cart-mini')], 2)], 2), _vm._ssrNode(" "), _c('language-currency'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-middle__social\">", "</div>", [_c('social-icon')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__menu\">", "</div>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu"
    }
  })], 1), _vm._ssrNode(" "), _c('form-search')], 2)], 2), _vm._ssrNode(" "), _c('header3-search')], 2)], 2);
};
var HeaderV3vue_type_template_id_9ce35f04_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV3.vue?vue&type=template&id=9ce35f04&

// EXTERNAL MODULE: ./components/shared/headers/modules/Notification.vue + 4 modules
var Notification = __webpack_require__(42);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageCurrency.vue + 4 modules
var LanguageCurrency = __webpack_require__(78);

// EXTERNAL MODULE: ./components/shared/headers/modules/FormSearch.vue + 4 modules
var FormSearch = __webpack_require__(82);

// EXTERNAL MODULE: ./components/shared/headers/modules/LoginModal.vue + 4 modules
var LoginModal = __webpack_require__(84);

// EXTERNAL MODULE: ./components/shared/headers/modules/CartMini.vue + 9 modules
var CartMini = __webpack_require__(83);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/shared/headers/modules/HeaderTop.vue + 4 modules
var HeaderTop = __webpack_require__(349);

// EXTERNAL MODULE: ./components/shared/SocialIcon.vue + 2 modules
var SocialIcon = __webpack_require__(87);

// EXTERNAL MODULE: ./components/shared/headers/modules/Header3Search.vue + 4 modules
var Header3Search = __webpack_require__(403);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV3.vue?vue&type=script&lang=js&











/* harmony default export */ var HeaderV3vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    RenderList: RenderList["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    FormSearch: FormSearch["a" /* default */],
    LoginModal: LoginModal["a" /* default */],
    CartMini: CartMini["a" /* default */],
    HeaderTop: HeaderTop["a" /* default */],
    SocialIcon: SocialIcon["a" /* default */],
    Header3Search: Header3Search["a" /* default */]
  },
  data() {
    return {
      mainMenu: menu["c" /* menuHome3 */],
      sticky: false,
      showNavigation: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      cartItems: state => state.cart.cartItems,
      wishlistItems: state => state.wishlist.items,
      appDrawer: state => state.app.appDrawer
    }),
    productCartQuantity() {
      let quantity = 0;
      this.cartItems.forEach(element => {
        quantity += element.quantity;
      });
      return quantity;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scroll = window.scrollY;
      if (scroll > 200) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },
    handleOpenDrawer(drawer) {
      this.$store.commit('app/setCurrentDrawerContent', drawer);
      this.$store.commit('app/setAppDrawer', !this.appDrawer);
    },
    handleOpenMenu() {
      this.showNavigation = !this.showNavigation;
    }
  }
});
// CONCATENATED MODULE: ./components/shared/headers/HeaderV3.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV3vue_type_script_lang_js_ = (HeaderV3vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/headers/HeaderV3.vue





/* normalize component */

var HeaderV3_component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV3vue_type_script_lang_js_,
  HeaderV3vue_type_template_id_9ce35f04_render,
  HeaderV3vue_type_template_id_9ce35f04_staticRenderFns,
  false,
  null,
  null,
  "7ba7ebd2"
  
)

/* harmony default export */ var HeaderV3 = (HeaderV3_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV3.vue?vue&type=template&id=e5c30e62&
var HeaderV3vue_type_template_id_e5c30e62_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--3 ps-header--mobile', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/mobile-logo.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li class=\"ps-header__user\"><a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-user\"></i></a></li> "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    staticClass: "ps-header__item",
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.wishlistItems.length))])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_c('nuxt-link', {
    staticClass: "active ps-header__item",
    attrs: {
      "to": "/shop/shopping-cart"
    }
  }, [_c('i', {
    staticClass: "icon-cart-empty"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.productCartQuantity))])])], 1)], 2)])], 2), _vm._ssrNode(" "), _c('header3-search')], 2)], 2);
};
var HeaderV3vue_type_template_id_e5c30e62_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV3.vue?vue&type=template&id=e5c30e62&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV3.vue?vue&type=script&lang=js&



/* harmony default export */ var mobile_headers_HeaderV3vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    Header3Search: Header3Search["a" /* default */]
  },
  data() {
    return {
      sticky: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      appDrawer: state => state.app.appDrawer,
      cartItems: state => state.cart.cartItems,
      wishlistItems: state => state.wishlist.items
    }),
    productCartQuantity() {
      let quantity = 0;
      this.cartItems.forEach(element => {
        quantity += element.quantity;
      });
      return quantity;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scroll = window.scrollY;
      if (scroll > 700) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },
    handleOpenDrawer(drawer) {
      this.$store.commit('app/setCurrentDrawerContent', drawer);
      this.$store.commit('app/setAppDrawer', !this.appDrawer);
    }
  }
});
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV3.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_mobile_headers_HeaderV3vue_type_script_lang_js_ = (mobile_headers_HeaderV3vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV3.vue





/* normalize component */

var headers_HeaderV3_component = Object(componentNormalizer["a" /* default */])(
  shared_mobile_headers_HeaderV3vue_type_script_lang_js_,
  HeaderV3vue_type_template_id_e5c30e62_render,
  HeaderV3vue_type_template_id_e5c30e62_staticRenderFns,
  false,
  null,
  null,
  "24f89a68"
  
)

/* harmony default export */ var headers_HeaderV3 = (headers_HeaderV3_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/SectionBanner.vue + 4 modules
var SectionBanner = __webpack_require__(351);

// EXTERNAL MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue + 4 modules
var PopularCategoryHorizontal = __webpack_require__(398);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/WeekdealProduct.vue?vue&type=template&id=41bf5c80&


var WeekdealProductvue_type_template_id_41bf5c80_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--weekdeal"
  }, [_vm._ssrNode("<h3 class=\"ps-section__title\">Popular categories</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-weekdeal__product\">", "</div>", [_c('count-down'), _vm._ssrNode(" "), _vm.loading ? _c(VSkeletonLoader["a" /* default */], {
    attrs: {
      "type": "image, article"
    }
  }) : _c('product-standard', {
    attrs: {
      "product": _vm.product
    }
  })], 2)])], 2);
};
var WeekdealProductvue_type_template_id_41bf5c80_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/WeekdealProduct.vue?vue&type=template&id=41bf5c80&

// EXTERNAL MODULE: ./components/elements/commons/CountDown.vue + 4 modules
var CountDown = __webpack_require__(97);

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/WeekdealProduct.vue?vue&type=script&lang=js&



/* harmony default export */ var WeekdealProductvue_type_script_lang_js_ = ({
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CountDown: CountDown["a" /* default */],
    ProductStandard: ProductStandard["a" /* default */]
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/WeekdealProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_WeekdealProductvue_type_script_lang_js_ = (WeekdealProductvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/WeekdealProduct.vue





/* normalize component */

var WeekdealProduct_component = Object(componentNormalizer["a" /* default */])(
  homepage_WeekdealProductvue_type_script_lang_js_,
  WeekdealProductvue_type_template_id_41bf5c80_render,
  WeekdealProductvue_type_template_id_41bf5c80_staticRenderFns,
  false,
  null,
  null,
  "06574776"
  
)

/* harmony default export */ var WeekdealProduct = (WeekdealProduct_component.exports);
// EXTERNAL MODULE: ./components/elements/commons/PromoItem.vue + 4 modules
var PromoItem = __webpack_require__(94);

// EXTERNAL MODULE: ./components/partials/homepage/BestsellersProduct.vue + 4 modules
var BestsellersProduct = __webpack_require__(391);

// EXTERNAL MODULE: ./components/partials/homepage/Delivery.vue + 2 modules
var Delivery = __webpack_require__(350);

// EXTERNAL MODULE: ./components/partials/homepage/FeaturedProduct.vue + 4 modules
var FeaturedProduct = __webpack_require__(368);

// EXTERNAL MODULE: ./components/elements/commons/Banner.vue + 4 modules
var Banner = __webpack_require__(310);

// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(14);

// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__(354);

// EXTERNAL MODULE: ./static/data/banners.json
var banners = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-3.vue?vue&type=script&lang=js&
















/* harmony default export */ var home_3vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    FooterV3: FooterV3,
    HeaderV3: HeaderV3,
    HeaderMobile: headers_HeaderV3,
    SectionBanner: SectionBanner["a" /* default */],
    PopularCategoryHorizontal: PopularCategoryHorizontal["a" /* default */],
    WeekdealProduct: WeekdealProduct,
    ProductStandard: ProductStandard["a" /* default */],
    PromoItem: PromoItem["a" /* default */],
    BestsellersProduct: BestsellersProduct["a" /* default */],
    Delivery: Delivery["a" /* default */],
    FeaturedProduct: FeaturedProduct["a" /* default */],
    Banner: Banner["a" /* default */]
  },
  data() {
    return {
      banners: banners["l" /* home3Banner */],
      product: null,
      latestProduct: null,
      promotions: [{
        banner: '/img/promotion/bg-banner5.jpg',
        title: 'Candid <br/>Whitening Kit',
        btnName: 'Shop now',
        sale: '-10%'
      }, {
        banner: '/img/promotion/bg-banner4.jpg',
        badge: 'New',
        title: 'Get rid of bacteria <br/>in your home',
        btnName: 'More',
        classTitle: 'mb-20'
      }, {
        banner: '/img/promotion/bg-banner3.jpg',
        title: 'SuperBrush <br/>X200 Higenic',
        btnName: 'Shop now',
        price: '$119.00',
        del: '$129.00',
        classTitle: 'text-white'
      }],
      banner: {
        title: 'Super Sonic Brush <br>X200 Higenic',
        desc: 'The sonic power of the brush is the best for <br>dental problems',
        shop: 'bg-warning',
        button: [{
          icon: '/img/icon/tooth-brush-icon.png',
          text: 'Up to 5 users simultaneously'
        }, {
          icon: '/img/icon/dashboard-icon.png',
          text: 'Has HEALTH certificate'
        }],
        percent: {
          text: '-30%',
          extraClass: 'bg-warning',
          thumbnail: true
        },
        textShop: 'About'
      },
      bestsellerProduct: [],
      featuredProduct: []
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    this.product = await Object(ProductRepository["getProductById"])(5);
    const params = {
      _limit: 8
    };
    this.latestProduct = await Object(ProductRepository["e" /* getProducts */])(params);
    this.bestsellerProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('top-5-best-sellers');
    this.featuredProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('featured-products');
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/homepage/home-3.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_3vue_type_script_lang_js_ = (home_3vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-3.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(452)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_3_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_3vue_type_script_lang_js_,
  home_3vue_type_template_id_2647786b_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c183258"
  
)

/* harmony default export */ var home_3 = __webpack_exports__["default"] = (home_3_component.exports);

/***/ })

};;
//# sourceMappingURL=home-3.js.map