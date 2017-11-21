function insert(arr, params) {
    if (params.length != 2) {
        return "Error: invalid command parameters";
    }

    let index = params[0];
    let str = params[1];
    if (isNaN(index) || (index < 0 || index > arr.length - 1)) {
        return `Error: invalid index ${index}`;
    }
    let res = arr;
    res.splice(index, 0 , str);
    return res;
}