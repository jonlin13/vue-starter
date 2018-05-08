/* eslint-disable */
export const DecimalToCurrency = function (value) {
    var currencyValue = Number(value) || 0
    Number.prototype.formatMoney = function (c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + '$' + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }
    return (currencyValue).formatMoney(0, '.', ',')
}

export const titlefy = function (string) {
    if (string) {
        var noHypensString = string.replace(/-/g, " ");
        var strings = noHypensString.split(' ')

        var finalString = []
        strings.forEach((strItem, i) => {
            var str = strItem.toLowerCase()
            var firstLetter = str.charAt(0).toUpperCase()
            var restOfString = str.substr(1)
            var finalStr = firstLetter + restOfString
            finalString.push(finalStr)
        })

        return finalString.join(' ')
    }
}

export const phoneFormat = function (s) {
    var s2 = ("" + s).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}
