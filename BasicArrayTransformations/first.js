function map(arr, fn) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i], i));
    }
    return array
}