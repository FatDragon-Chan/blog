const home = r =>
  require.ensure([], () => r(require("../views/blog/home/index.vue")), "home");

const categories = r =>
  require.ensure(
    [],
    () => r(require("../views/blog/categories/index.vue")),
    "categories"
  );

export default [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/categories",
    name: "categories",
    component: categories
  }
];
