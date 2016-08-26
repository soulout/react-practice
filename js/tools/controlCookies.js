/**
 * Created by xtong on 16/7/7.
 */
/*
 功能：保存cookies函数
 参数：name，cookie名字；value，值
 */
export function setCookie(name, value) {
    var Days = 30 * 12;   //cookie 将被保存一年
    var exp = new Date();  //获得当前时间
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);  //换成毫秒

    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
}
/*
 功能：获取cookies函数
 参数：name，cookie名字
 */
export function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return arr[2];
    } else {
        return null;
    }
}
/*
 功能：删除cookies函数
 参数：name，cookie名字
 */

export function delCookie(name) {
    var exp = new Date();  //当前时间
    exp.setTime(exp.getTime() - 1);
    var val = getCookie(name);
    if (cval != null) document.cookie = name + "=" + val + ";expires=" + exp.toGMTString();
}

export function setArrayCookie(name, array) {
    setCookie(name, JSON.stringify(array));
}

export function getArrayCookie(name) {
    var data = getCookie(name);
    console.log(data);
    if (data) {
        return JSON.parse(data);
    } else {
        return null;
    }
}