var addTwoPromises = function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(values => {
            const sum = values[0] + values[1];
            return sum;
        });
};