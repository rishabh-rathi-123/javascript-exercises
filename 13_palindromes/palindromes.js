const palindromes = function (strIn) {

    let str = "";
    for (let i = 0; i < strIn.length; i++)
    {
        if (strIn[i].match(/[a-zA-Z0-9]/i))
            str += strIn[i].toLowerCase();
    }

    if (str.length === 0)
        return false;
    else if (str.length === 1)
        return true;

    let size = str.length / 2;

    for (let i = 0; i < size; i++)
    {
        if (str[i] !== str[str.length - i - 1])
            return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
