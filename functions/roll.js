function roll(arr, params) {
    if (params.length !== 1) {
        return "Error: invalid command parameters";
    }

    let res = arr;
    let rollIndex;

    if (params[0] === "left") {
        rollIndex = arr[0];
        res.shift();
        res.push(rollIndex);
        return res;
    } else if (params[0] === "right") {
        rollIndex = arr[arr.length - 1];
        res.pop();
        res.unshift(rollIndex)
    } else {
        return "Error: invalid roll direction"
    }

    return res;
}

