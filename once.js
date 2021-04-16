function once(func) {
    var result;
    return function(a, b) {
        if(func) {
            result = func.apply(this, arguments);
            func = null;
        }
        return result;
    }
}

function add(a, b) {
    return a + b;
}

var onceAdd = once(add);
console.log(onceAdd(1,2));
console.log(onceAdd(7,2));
console.log(onceAdd(1,5));
console.log(onceAdd(9,2));
