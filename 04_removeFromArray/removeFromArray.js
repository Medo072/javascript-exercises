const removeFromArray = function(arr) {
    for(let i = 1; i < arguments.length; ++i)
        for(let index = 0; index < arr.length;)
        {
            if (arr[index] === arguments[i]){
                arr.splice(index, 1);
            } else {
                ++index;
            }
        }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
