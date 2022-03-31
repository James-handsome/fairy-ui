import Menu from "./menu.vue";
import MenuGroup from "./menu-group.vue";
import MenuItem from "./menu-item.vue";
import Submenu from "./submenu.vue";

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu);
};
MenuGroup.install = function (Vue) {
  Vue.component(MenuGroup.name, MenuGroup);
};
MenuItem.install = function (Vue) {
  Vue.component(MenuItem.name, MenuItem);
};
Submenu.install = function (Vue) {
  Vue.component(Submenu.name, Submenu);
};

export { Menu, MenuGroup, MenuItem, Submenu };
