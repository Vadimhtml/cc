app.getColorResult = {
    color: undefined,
    contrast: undefined,
    names: undefined,
    line: undefined
};

app.getColor = function getColor(e) {
    var r = parseInt(e.substr(0, 2), 16),
        g = parseInt(e.substr(2, 2), 16),
        b = parseInt(e.substr(4, 2), 16),

        resDistance = 999999,
        resAltrence = 0;

    for (var color in this.colors) {
        if (this.colors.hasOwnProperty(color)) {
            var rc = parseInt(this.colors[color].substr(0, 2), 16),
                gc = parseInt(this.colors[color].substr(2, 2), 16),
                bc = parseInt(this.colors[color].substr(4, 2), 16),

                distance = (r - rc) * (r - rc) + (g - gc) * (g - gc) + (b - bc) * (b - bc);

            if (distance < resDistance) {
                resDistance = distance;
                this.getColorResult.names = [color];
            } else if (distance == resDistance) {
                this.getColorResult.names.push(color);
            }
        }
    }

    var distanceBlack = r * r + g * g + b * b,
        distanceWhite = (r - 255) * (r - 255) + (g - 255) * (g - 255) + (b - 255) * (b - 255);

    this.getColorResult.color = e;
    if (distanceBlack > distanceWhite) {
        this.getColorResult.contrast = '000000'
    } else {
        this.getColorResult.contrast = 'FFFFFF'
    }

    this.getColorResult.line = this.activeCase.run(this.getColorResult.names);

    return this.getColorResult;
}; // Функция получения информации о цвете
