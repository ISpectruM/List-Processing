function sort(arr, params){
    if ( params.length != 0) {
        return "Error: invalid command parameters";
    }

    return arr.sort(function(a,b){
        if(typeof a == "number" && typeof b == "number"){
            return a-b;
        }
        else{
            return a.localeCompare(b);
        }
    });
}
