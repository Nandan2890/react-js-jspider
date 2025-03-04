//! named export
function add(n1, n2){
    return n1 + n2;
}
function subtract(n1, n2){
    return n1-n2;
}

//* useState function: internally working
function useState(val){
    return [val, () => {}];
}

export {add, subtract, useState};

//? default export
function mulitply(n1, n2){
    return n1*n2;
}

export default mulitply;

















