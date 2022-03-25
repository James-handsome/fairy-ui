import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export { Button, ButtonGroup };
