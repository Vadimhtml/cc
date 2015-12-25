var casesObject = {
    cases: {},
    words: [],
    result: '',
    activeCase: null,
    init: function () {
        var e = getCookie('activeCase');
        if (e === undefined || this.cases.hasOwnProperty(e) === false) {
            e = 'normal';
        }
        this.activeCase = this.cases[e];
    },
    clearWords: function () {
        this.words = [];
    },
    addWord: function (e) {
        this.words.push(e);
    },
    makeResult: function (e) {
        this.result = e.run(this.words);
        return this.result;
    }
};

casesObject.cases.normal = {
    run: function (run) {
        var result = [];
        run.forEach(function (e) {
            result.push(e);
        });
        return '—' + result.join(' или ') + '!';
    }
};
casesObject.cases.upperCamelCase = {
    run: function (run) {
        var result = [];
        run.forEach(function (e) {
            result.push(e.toUpperCamelCase());
        });
        return result.join(' | ');
    }
};
casesObject.cases.lowerCamelCase = {
    run: function (run) {
        var result = [];
        run.forEach(function (e) {
            result.push(e.toLowerCamelCase());
        });
        return result.join(' | ');
    }
};
