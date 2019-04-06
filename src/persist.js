import throttle from './throttle.js';

export default (config = {}) => {
  let defaults = {
    prefix: '_state',
    throttle: 1000,
    restoreOnLoad: true,
    ...config
  };
  let mergedConfig = { ...defaults, ...config };

  let writeLocalStore = throttle((prefix, data) => {
    localStorage.setItem(prefix, data);
  }, mergedConfig.throttle);

  let persist = {
    ...mergedConfig,
    restore() {
      let data = localStorage.getItem(this.prefix);
      let state = JSON.parse(data);
      if (state) {
        this.store.replaceState(state);
      }
    },
    write(state) {
      let data = JSON.stringify(state);
      writeLocalStore(this.prefix, data);
    }
  };

  if (persist.restoreOnLoad) {
    persist.restore();
  }
  return persist;
};
