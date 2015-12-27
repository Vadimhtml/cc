app.hashValidateResult = undefined;

app.hashValidate = function hashValidate() {
    var wlh = window.location.hash;
    if (wlh.length > 0) {
        wlh = /^#?([A-F0-9]{6})$/.exec(wlh);
        if (wlh === null) {
            this.hashValidateResult = false;
        } else {
            this.hashValidateResult = wlh[1];
        }
    } else {
        this.hashValidateResult = null;
        history.pushState('', document.title, window.location.pathname);
    }
    return this.hashValidateResult;
};
