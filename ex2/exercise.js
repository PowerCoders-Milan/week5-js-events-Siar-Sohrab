function windowSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var p = document.querySelectorAll('p')
    p[1].innerHTML = `The window width is ${w} pixels and the hight is ${h} p pixels`
}
windowSize()