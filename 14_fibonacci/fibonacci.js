const fibonacci = function(num) {
    if (num < 0)
        return "OOPS";
    else if (num == 0)
        return 0;

    let num1 = 1;
    let num2 = 1;
    let result = 1;

    for (let i = 2; i < num; i++)
    {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
