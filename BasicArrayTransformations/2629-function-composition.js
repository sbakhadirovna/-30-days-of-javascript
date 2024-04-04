var compose = function (functions) {
  return function (x) {
    if (functions == []) {
      return x;
    } else {
      let result = x;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    }
  };
};
