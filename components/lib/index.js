import Card from "./card";
import Button from "./button";
import Input from "./input";
import { Col, Row } from "./grid";

const components = {
  Card,
  Button,
  Input,
  Col,
  Row,
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
