export default function throttle(fn, wait) {
  let isThrottled = false;
  let args;

  function wrapper() {
    if (isThrottled) {
      args = arguments;
      return;
    }

    isThrottled = true;
    fn.apply(this, arguments);

    setTimeout(() => {
      isThrottled = false;
      if (args) {
        wrapper.apply(this, args);
        args = null;
      }
    }, wait);
  }

  return wrapper;
}
