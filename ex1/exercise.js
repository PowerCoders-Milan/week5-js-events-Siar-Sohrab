// define your functions here

// call the functions and connect them to an event

var strong = document.querySelectorAll('strong');
var a = document.querySelector('a');
console.log(strong);
a.addEventListener('mouseenter', function () {
    strong.forEach(function (str) {
            str.style.fontSize = '60px';
        });
    
});

var strong = document.querySelectorAll('strong');
var a = document.querySelector('a');
console.log(strong);
a.addEventListener('mouseleave', function () {
    strong.forEach(function (str) {
            str.style.fontSize = '30px';
        });
    
});
