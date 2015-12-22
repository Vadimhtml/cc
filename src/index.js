$(window).load(function () {

    function hashValidate() {
        var result = /^(#?)([A-Fa-f0-9]{6})$/.exec(window.location.hash);
        if (result != null) {
            result = result[2].toUpperCase();
        }
        return result;
    }

    var hashValidateResult = hashValidate(),
        bodyMain = $('.bodyMain'),
        bodyMain__input = $('.bodyMain__input'),
        bodyMain__tagLine = $('.bodyMain__tagLine'),
        bodyMain__tagLine_initText = bodyMain__tagLine.text(),
        documentInit = false,
        defaultState = true;

    function setColorState(color) {
        $.get("ajax.php?color=" + color, function (data) {
            jsonData = JSON.parse(data);
            bodyMain.css('color', '#' + jsonData.contr);
            bodyMain__tagLine.text('—' + jsonData.name + '!');
            bodyMain__input.val(color);
            oldValue = color;
            bodyMain.css('background-color', '#' + color);
            window.location.hash = color;
            if (documentInit == false) {
                documentInit = true;
                document.body.className = 'bodyMain';
                bodyMain__tagLine.addClass('bounceInUp');
                bodyMain__input.addClass('slideInDown');
                bodyMain__input[0].focus();
            } else {
                bodyMain__tagLine.addClass('flip');
            }
            defaultState = false;
        });
    }

    function dropColorState() {
        bodyMain__input.val(null);
        bodyMain__tagLine.text(bodyMain__tagLine_initText);
        bodyMain.css({
            backgroundColor: '#ffffff',
            color: '#000000'
        });
        bodyMain__tagLine.addClass('bounceInUp');
        window.location.hash = '';
        defaultState = true;
    }

    bodyMain__tagLine.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('bounceInUp').removeClass('flip');
    });
    bodyMain__input.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('slideInDown').removeClass('shake');
    });

    if (hashValidateResult == null) {
        bodyMain__input.val(null);
        document.body.className = 'bodyMain';
        bodyMain__tagLine.addClass('bounceInUp');
        bodyMain__input.addClass('slideInDown');
        bodyMain__input[0].focus();
        documentInit = true;
    } else {
        setColorState(hashValidateResult);
    }

    $(window).on('hashchange', function () {
        var hashChangeValidateResult = hashValidate();
        if (hashChangeValidateResult == null) {
            dropColorState();
        } else {
            if (oldValue != hashChangeValidateResult) {
                setColorState(hashChangeValidateResult);
            }
        }
    });

    var oldValue = '';

    function checkInput() {
        var newValue = bodyMain__input[0].value;
        if (newValue != oldValue) {
            var validate = /^(#?)([A-F0-9]{0,6})(;?)$/.exec(newValue.toUpperCase());
            if (validate != null) {
                bodyMain__input.val(validate[2]);
                oldValue = validate[2];
                if (validate[2].length == 6) {
                    setColorState(validate[2]);
                }
                else if (validate[2].length == 0) {
                    if (defaultState != true) {
                        dropColorState();
                    }
                }
            } else {
                bodyMain__input.val(oldValue);
                bodyMain__input.addClass('shake');
            }
        }
    }

    setInterval(checkInput, 1);
});
