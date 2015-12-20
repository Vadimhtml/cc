$(document).ready(function () {
    var bodyMain__tagLine = $('.bodyMain__tagLine'),
        bodyMain__input = $('.bodyMain__input'),
        bodyMain = $('.bodyMain');

    hashCheck();

    $(window).on('hashchange', function () {
        hashCheck();
    });

    function hashCheck() {
        console.log('hash');
        var hashlink = /^(#?)([A-Fa-f0-9]{6})$/.exec(window.location.hash);
        if (hashlink != null) {
            hashlink = hashlink[2].toUpperCase();
            getColorName(hashlink);
            bodyMain__input[0].value = hashlink; //TODO: разобраться с говнокодингом
        }
    }

    function getColorName(code) {
        $.get("ajax.php?color=" + code, function (data) {
            jsonData = JSON.parse(data);
            bodyMain__tagLine.html('—' + jsonData.name + '!');
            bodyMain__tagLine.addClass('flip');
            bodyMain.css({
                backgroundColor: '#' + code,
                color: '#' + jsonData.contr
            });
        });
    }

    function setNewText(input, text) {
        var value = input.value;
        var selectionStart = input.selectionStart;
        var selectionEnd = input.selectionEnd;
        var length = text.length;
        text = value.substring(0, selectionStart) + text + value.substring(selectionEnd);
        var validate = /^(#?)([A-F0-9]{0,6})$/.exec(text);
        if (validate != null) {
            input.value = validate[2];
            input.selectionStart = selectionStart + length;
            input.selectionEnd = input.selectionStart;
            if (validate[2].length == 6) {
                getColorName(validate[2]);
            }
        }
    }

    bodyMain__input.on('paste', function (e) {
        e.preventDefault();
        var clipboard = (e.originalEvent || e).clipboardData.getData('text/plain') || false;
        if (clipboard != false) setNewText(this, clipboard.toUpperCase());
    });

    bodyMain__input.keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, C, V, Command+A, C, V
            ((e.keyCode == 65 || e.keyCode == 67 || e.keyCode == 86) && ( e.ctrlKey === true || e.metaKey === true ) ) ||
                // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        e.preventDefault();
        var keyMap = {
            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9',
            65: 'A',
            66: 'B',
            67: 'C',
            68: 'D',
            69: 'E',
            70: 'F'
        };
        if (e.keyCode in keyMap == true) setNewText(this, keyMap[e.keyCode]);
    });

    bodyMain__tagLine.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('bounceInUp').removeClass('flip');
    });

    bodyMain__tagLine.addClass('animated bounceInUp');
    bodyMain__input.addClass('animated slideInDown');
    bodyMain__input[0].focus();
});
