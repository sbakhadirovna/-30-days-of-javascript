var once = function(fn) {
    let call = false;
    let res;

    return function(...args) {
        if (!call) {
            call = true;
            res = fn(...args);
            return res;
        } else {
            return undefined;
        }
    };
};