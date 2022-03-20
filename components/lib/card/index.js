import Card from "./main.vue";

Card.install = function (Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
