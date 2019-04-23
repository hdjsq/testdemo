/**type */
function type(target) {
    var ret = typeof target,
        toString = Object.prototype.toString,
        template = {
            "[object Array]": "array",
            "[object Object]": "object",
            "[object Number]": "number - object",
            "[object Boolean]": "bollean - object",
            "[object String]": "string - object"
        }
    if (target === null) {
        return "null"
    } else if (ret === "object") {
        var string = toString.call(target)
        return template[str];
    } else {
        return ret
    }
}


Array.prototype.unique = function () {
    var temp = {}
    var arr = []
    var len = this.length
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = "had"
            arr.push(this[i]);
        }
    }
    return arr
}