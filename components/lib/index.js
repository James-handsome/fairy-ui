import Card from "./card";
import Button from "./button";
import ButtonGroup from "./button-group";

const components = {
  Card,
  Button,
  ButtonGroup,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = {
  install,
};

export default API;
