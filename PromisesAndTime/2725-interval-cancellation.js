var cancellable = function(fn, args, t) {
    fn(...args)
    let intervalId = setInterval(() => {
        fn(...args)
    }, t)
    let cancelFn = function() {
        clearInterval(intervalId);
    };

    // Return the cancel function
    return cancelFn;
};