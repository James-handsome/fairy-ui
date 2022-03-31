import Card from "./card";
import { Button, ButtonGroup } from "./button";
import Input from "./input";
import { Col, Row } from "./grid";
import Icon from "./icon";
import Layout from "./layout";

const components = {
  Card,
  Button,
  ButtonGroup,
  Input,
  Col,
  Row,
  Icon,
  Layout,
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
