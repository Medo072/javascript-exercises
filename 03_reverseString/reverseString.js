const reverseString = function(stringToBeReversed) {
    let reversedString = [];
    for(let i = 0; i < stringToBeReversed.length; ++i)
    {
        let char = stringToBeReversed[stringToBeReversed.length - i -1];
        reversedString.push(char);
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
