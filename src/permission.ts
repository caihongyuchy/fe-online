import router from './router';
router.beforeEach((to: any, from, next) => {
  console.log(1);
});
