String.prototype.toUpperCamelCase = function () {
    var n = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    };
    return this.replace(/[^A-Za-z0-9]/g, ' ')
        .toLowerCase()
        .replace(/(\s([a-z]))|(^([a-z]))/g, function (s) {
            return s.toUpperCase();
        })
        .replace(/([0-9]{1})/g, function (s, key) {
            return n[key] || s;
        })
        .replace(/\s/g, '');
};
