import Layout from "./layout.vue";
import Header from "./header.vue";
import Sider from "./sider.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";

Layout.install = function (Vue) {
  Vue.component(Layout.name, Layout);
};

Header.install = function (Vue) {
  Vue.component(Header.name, Header);
};

Sider.install = function (Vue) {
  Vue.component(Sider.name, Sider);
};

Content.install = function (Vue) {
  Vue.component(Content.name, Content);
};

Footer.install = function (Vue) {
  Vue.component(Footer.name, Footer);
};

export { Layout, Header, Sider, Content, Footer };
