function del(arr, params) {
    if (params.length !== 1) {
        return "Error: invalid";
    }
    let index = params;
    if (isNaN(index) || (index <= 0 || index > arr.length)) {
        return `Error: invalid index ${index}`;
    }
    let res = arr;
    res.splice(index - 1, 1);
    return res;
}