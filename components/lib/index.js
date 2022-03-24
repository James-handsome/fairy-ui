import Card from "./card";
import Button from "./button";
import Input from "./input";

const components = {
  Card,
  Button,
  Input,
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
