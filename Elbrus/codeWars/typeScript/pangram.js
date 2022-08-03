var isPangram = function (phrase) {
    var arr_en = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];
    var arrayPhrase = phrase.split('').
        filter(function (el) { return el !== ' ' && el !== '.'; }).
        map(function (el) { return el.toLocaleLowerCase(); }).sort();
    var countingIdenticalLetters = arr_en.reduce(function (acc, key, index) {
        acc[key] = 0;
        arr_en.includes(arrayPhrase[index]) ? acc[key] = acc[key] + 1 : acc[key] = 0;
        return acc;
    }, {});
    return countingIdenticalLetters.every(function (elem) { return elem > 1; });
};
isPangram('This is not a pangram.');
