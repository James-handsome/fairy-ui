import Select from "./select.vue";
import Option from "./option.vue";
import OptionGroup from "./option-group.vue";

Select.install = function (Vue) {
  Vue.component(Select.name, Select);
};

Option.install = function (Vue) {
  Vue.component(Option.name, Option);
};

OptionGroup.install = function (Vue) {
  Vue.component(OptionGroup.name, OptionGroup);
};

export { Select, Option, OptionGroup };
