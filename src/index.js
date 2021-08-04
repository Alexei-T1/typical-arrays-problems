
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    array.sort((s, p) => s - p);
    return array[0];
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    array.sort((s, p) => s - p);
    return array[array.length - 1];
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    const avg = array.reduce((a, c) => a + c) / array.length;
    return avg;
}

