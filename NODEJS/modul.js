function a(text){
    console.log(text);
    return "a function";
};

function b(){
    return "b function";
};

module.exports.a=a;
module.exports.b=b;