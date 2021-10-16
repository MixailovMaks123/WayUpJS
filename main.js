"use strict";

// 1 Задание
let city = "Якутск",
    country = "Россия",
    population = 478100,
    footballStadium = true;


// 2 Задание
let height = 40,
    width = 70,
    s;

s = height * width;

alert('площадь прямоугольника '+ s +' см');

// 3 задание
let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114,
    speed,
    distance;

speed = speedOfFirst + speedOfSecond;

distance = speed * time;

alert('расстояние между автомабилями равно = ' + distance + ' км');

// 4 задание
const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber < 20){
    alert('randomNumber меньше 20');
}else if(randomNumber > 50){
    alert('randomNumber больше 50');
}else{
    alert('randomNumber больше 20, и меньше 50');
}

// 5 задание
const randomNumber1 = Math.floor(Math.random() * 100);

switch(randomNumber1){
    case (randomNumber1 < 20):
        alert('randomNumber1 меньше 20');
        break;
    case (randomNumber1 > 50):
        alert('randomNumber1 больше 50');
        break;
    default:
        alert('randomNumber1 больше 20, и меньше 50');
}