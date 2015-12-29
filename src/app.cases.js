app.cases = {
    words: {
        run: function (run) {
            var result = [];
            run.forEach(function (e) {
                result.push(e);
            });
            return '—' + result.join(' или ') + '!';
        },
        name: 'Название'
    },
    upperCamelCase: {
        run: function (run) {
            var result = [];
            run.forEach(function (e) {
                result.push(e.toUpperCamelCase());
            });
            return result.join(' | ');
        },
        name: 'UpperCamelCase'
    },
    lowerCamelCase: {
        run: function (run) {
            var result = [];
            run.forEach(function (e) {
                result.push(e.toLowerCamelCase());
            });
            return result.join(' | ');
        },
        name: 'lowerCamelCase'
    }
}; // Функции всех кейсов

app.activeCase = undefined; // Функция активного кейса

app.activeCaseName = undefined; // Имя активного кейса

app.defaultCaseName = 'words'; // Имя дефолтного кейса

app.activeCaseValue = function (e) {
    //if (this.activeCaseName !== e) {
    this.activeCase = this.cases[e];
    this.activeCaseName = e;
    document.cookie = 'case=' + e;
    this.getColor(this.getColorResult.color);
    this.stateNewColor(this.getColorResult.color);
    //}
}; // Ставим кейс по имени валидировать заранее

app.activeCaseCookie = function () {
    var e = getCookie('case');
    if (e === undefined || this.cases.hasOwnProperty(e) === false) e = this.defaultCaseName;
    this.activeCase = this.cases[e];
    this.activeCaseName = e;
}; // Ставим кейс по куки
