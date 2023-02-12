const repeatString = function(expression, repeat) {

    if(repeat === -1)
        return "ERROR";
    let stringAfterRepeat = "";
    for(let i = 0; i < repeat; ++i){
        stringAfterRepeat += expression;
    }
    return stringAfterRepeat;
};

// Do not edit below this line
module.exports = repeatString;
