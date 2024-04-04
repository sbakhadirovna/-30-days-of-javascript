var filter = function (arr, fn) {
  const fArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      fArr.push(arr[i]);
    }
  }
  return fArr;
};
