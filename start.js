Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
   };
   
function updateClock(alarm) {
    var now = new Date();
    var sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear(),
    ampm = "am";

    if (hou > 12) {
    hou = hou - 12;
    ampm = "pm"
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var tags = ["mon", "d", "y", "h", "m", "s", "ampm"],
    corr = [months[mo], dy, yr, hou, min.pad(2), sec.pad(2), ampm];
    for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
    updateClock();
    var periodInMinutes = 1 / 60;
    browser.alarms.create({periodInMinutes});
    browser.alarms.onAlarm.addListener(updateClock);
}

window.addEventListener("load", function(event) {
    initClock();
});