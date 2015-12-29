app.initialText = undefined;
app.tagLine = undefined;
app.input = undefined;

app.render = {
    text: undefined,
    inputText: undefined,
    color: undefined,
    backgroundColor: undefined,
    textAnimation: undefined,
    inputAnimation: undefined,
    hash: undefined,
    run: function () {
        if (this.hash !== undefined) {
            if (this.hash.length > 0) {
                window.location.hash = this.hash;
            } else {
                history.pushState('', document.title, window.location.pathname);
            }
        }
        $('.bodyMain__tagLine')
            .html(this.text)
            .addClass(this.textAnimation);

        $('.bodyMain__input')
            .val(this.inputText)
            .addClass(this.inputAnimation);
        $('body')
            .css({
                color: '#' + this.color,
                backgroundColor: '#' + this.backgroundColor,
                borderColor: '#' + this.color
            })
            .removeClass('bodyMain_loading');

    }
}; // Объект отрисовки приложения

app.stateStart = function () {
    this.render.color = '000000';
    this.render.backgroundColor = 'FFFFFF';
    this.render.inputText = '';
    this.render.textAnimation = 'bounceInUp';
    this.render.inputAnimation = 'slideInDown';
    this.render.text = this.initialText;
    this.render.hash = '';
    this.render.run();
}; // Рендер со стартом
app.stateStartError = function () {
    this.render.color = '000000';
    this.render.backgroundColor = 'FFFFFF';
    this.render.inputText = '';
    this.render.textAnimation = 'bounceInUp';
    this.render.inputAnimation = 'slideInDown';
    this.render.text = '404…';
    this.render.hash = undefined;
    this.render.run();
}; // Рендер с 404 на старте
app.stateStartColor = function (e) {
    this.getColor(e);
    this.render.color = this.getColorResult.contrast;
    this.render.backgroundColor = this.getColorResult.color;
    this.render.inputText = this.getColorResult.color;
    this.render.textAnimation = 'bounceInUp';
    this.render.inputAnimation = 'slideInDown';
    this.render.text = this.getColorResult.line;
    this.render.hash = undefined;
    this.render.run();
}; // Рендер с цветом на старте
app.stateNewColor = function (e) {
    this.getColor(e);
    this.render.color = this.getColorResult.contrast;
    this.render.backgroundColor = this.getColorResult.color;
    this.render.inputText = this.getColorResult.color;
    this.render.textAnimation = 'flip';
    this.render.inputAnimation = undefined;
    this.render.text = this.getColorResult.line;
    this.render.hash = e;
    this.render.run();
}; // Рендер со сменой цвета
app.stateDrop = function () {
    this.render.color = '000000';
    this.render.backgroundColor = 'FFFFFF';
    this.render.inputText = '';
    this.render.textAnimation = 'bounceInUp';
    this.render.inputAnimation = undefined;
    this.render.text = this.initialText;
    this.render.hash = '';
    this.render.run();
}; // Рендер с дропом состояния

app.init = function (tagLine, input) {
    this.initialText = tagLine.html();
    this.tagLine = tagLine;
    this.input = input;

    this.hashValidate();
    this.activeCaseCookie();

    if (this.hashValidateResult === null) {
        app.stateStart();
    } else if (this.hashValidateResult === false) {
        app.stateStartError();
    } else {
        app.stateStartColor(this.hashValidateResult);
    }

    input[0].focus();

}; // Функция инициализации приложения

$(window).load(function () {
    var tagLine = $('.bodyMain__tagLine'),
        input = $('.bodyMain__input');

    tagLine.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('bounceInUp flip');
    });
    input.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('slideInDown shake');
    });

    app.init(tagLine, input);

    var oldValue = input[0].value;

    function checkInput() {
        var newValue = input[0].value;
        if (newValue != oldValue) {
            var validate = /^(#?)([A-F0-9]{0,6})(;?)$/.exec(newValue.toUpperCase());
            if (validate != null) {
                input.val(validate[2]);
                oldValue = validate[2];
                if (validate[2].length == 6) {
                    app.stateNewColor(validate[2]);
                }
                else if (validate[2].length == 0) {
                    app.stateDrop();
                }
            } else {
                input.val(oldValue);
                input.addClass('shake');
            }
        }
    }

    setInterval(checkInput, 1);

//  console.log(app);    lowerCamelCase UpperCamelCase SCREAMING_SNAKE_CASE Train_Case Upper_snake_case lower_snake_kase

    var domCasesList = document.createElement('ul');
    for (var e in app.cases) {
        var domCaseElement = document.createElement('li'),
            domCaseLink = document.createElement('a');
        domCaseElement.className = 'caseList__element';
        domCaseLink.className = 'caseList__link';
        domCaseLink.innerHTML = app.cases[e].name;
        domCaseLink.setAttribute('href', '/');
        domCaseLink.setAttribute('data-case', e);
        domCaseElement.appendChild(domCaseLink);
        domCasesList.appendChild(domCaseElement);
    }
    domCasesList.className = 'caseList';
    document.body.appendChild(domCasesList);
    $('.caseList__link').click(function (e) {
        app.activeCaseValue($(this).data('case'));
        e.preventDefault();
    });
});
