import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";

Button.Group = ButtonGroup;

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
