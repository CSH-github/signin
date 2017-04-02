//如何创建cookie
function createCookie(key, value, expires, path, domain, secure) {
    var cookieStr = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieStr += ';expires=' + expires;
    }
    if (path) {
        cookieStr += ';path=' + path;
    }
    if (domain) {
        cookieStr += ';domain=' + domain;
    }
    if (secure) {
        cookieStr += ';secure';
    }
    document.cookie = cookieStr;
}

function setCookieDate(day) {
    var date = null;
    if (typeof day == 'number' && day > 0) {
        date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //修改日期
    } else {
    }
    return date;
}
function getCookie(key) {
    var cookieName = encodeURIComponent(key) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        var cookieValue = "";
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;

        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}
function removeCookie(key) {
    document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0);
}