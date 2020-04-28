const messagePlugin = (Vue) => {
  Vue.prototype.$message = function(text) {
    window.M.toast({ html: text });
  };

  Vue.prototype.$error = function(text) {
    window.M.toast({ html: `[ошибка]: ${text}` });
  };
};

export default messagePlugin;
