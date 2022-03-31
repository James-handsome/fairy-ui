import Card from "./card";
import { Button, ButtonGroup } from "./button";
import Input from "./input";
import { Col, Row } from "./grid";
import Icon from "./icon";
import { Layout, Header, Sider, Content, Footer } from "./layout";
import { Menu, MenuGroup, MenuItem, Submenu } from "./menu";
import { Select, Option, OptionGroup } from "./select";

const components = {
  Card,
  Button,
  ButtonGroup,
  Input,
  Col,
  Row,
  Icon,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
  Select,
  Option,
  OptionGroup,
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
