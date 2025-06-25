const sumAll = function(a, b) 
{
    if (a < 0 || b < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let c = Math.min(a, b);
    let d = Math.max(a, b);
    let sum = 0;
    for (; c <= d; c++)
    {
        sum += c;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
