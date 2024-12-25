var main1 = document.getElementById("main1");
var foolBtn1 = document.getElementById("foolBtn1");
var foolDiv1 = document.getElementById("foolDiv1");
foolBtn1.addEventListener('click', function(){
    main1.style.display = "none";
    foolDiv1.style.display = "block";
});
var btn1to2 = document.getElementById("button1to2");
var main2 = document.getElementById("main2");
btn1to2.addEventListener('click', function(){
    main1.style.display = "none";
    main2.style.display = "block";
});


var foolBtn2 = document.getElementById("foolBtn2");
var foolDiv2 = document.getElementById("foolDiv2");
foolBtn2.addEventListener('click', function(){
    main2.style.display = "none";
    foolDiv2.style.display = "block";
});
var btn2to3 = document.getElementById("button2to3");
var main3 = document.getElementById("main3");
btn2to3.addEventListener('click', function(){
    main2.style.display = "none";
    main3.style.display = "block";
});

var foolBtn3 = document.getElementById("foolBtn3");
var foolDiv3 = document.getElementById("foolDiv3");
foolBtn3.addEventListener('click', function(){
    main3.style.display = "none";
    foolDiv3.style.display = "block";
});
var btn3to4 = document.getElementById("button3to4");
var main4 = document.getElementById("main4");
btn3to4.addEventListener('click', function(){
    main3.style.display = "none";
    main4.style.display = "block";
});

var foolBtn4 = document.getElementById("foolBtn4");
var foolDiv4 = document.getElementById("foolDiv4");
foolBtn4.addEventListener('click', function(){
    main4.style.display = "none";
    foolDiv4.style.display = "block";
});
var key = document.getElementById("key");
var main5 = document.getElementById("main5");
key.addEventListener('click', function(){
    main4.style.display = "none";
    main5.style.display = "block";
});