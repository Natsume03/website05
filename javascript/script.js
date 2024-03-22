'use strict';

//時間表示機能
setInterval(function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString();
}, 1000);

//時刻変動メッセージ
let timemessage;
const hour = new Date().getHours();

if (hour >= 6 && hour < 9) {
    timemessage = ('おはようございます');
} else if (hour >= 9 && hour < 16) {
    timemessage = ('こんにちは');
} else if (hour >= 16) {
    timemessage = ('こんばんは');
} else if (hour >= 0 && hour < 6) {
    timemessage = ('こんばんは');
    document.getElementById("greeting").innerHTML = timemessage;

    const pasword = ('夜分遅くに失礼しますわよっ');
    let pasmessage;
    const rep = window.prompt('夜分遅くに失礼しますわよっ');
    if (pasword === rep) {
        pasmessage = ('なかなかやりますわねっ');
        document.getElementById("openpage").innerHTML = ("<a href=html/secretdiary.html>PressToEnterTheSecretPage</a>");
    }
    window.alert(pasmessage);
}
