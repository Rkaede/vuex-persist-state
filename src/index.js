import Persist from './persist.js';

const plugin = function(config = {}) {
  return store => {
    let persist = Persist({ ...config, store });
    store.persist = persist;

    store.subscribe((mutation, state) => {
      persist.write(state);
    });
  };
};

export default plugin;
