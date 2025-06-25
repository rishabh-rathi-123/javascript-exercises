const repeatString = function(str, num) {
    if (num === 0)  return "";
    for (let i = 1; i < num; i++)
    {
        str += str;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
