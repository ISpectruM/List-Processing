function append(arr, params) {
    if (params.length != 1) {
        return "Error: invalid command parameters";
    }

    let res = arr;
    res.push(params);
    return res;

}
