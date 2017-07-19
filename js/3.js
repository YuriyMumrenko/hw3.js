
//--------------инпуты--------------------

let inputArrayIndex = document.querySelector('.inputArrayIndex');
let inputArrayValue = document.querySelector('.inputArrayValue');

//--------------кнопки----------------------

let buttonEnterArr = document.querySelector('.enterArr');
let buttonPop = document.querySelector('.pop');
let buttonShift = document.querySelector('.shift');
let buttonPush = document.querySelector('.push');

//-----------слушатели----------------------

 buttonEnterArr.addEventListener('click', arrInput);
buttonPop.addEventListener('click', popRemoveLastElement);
buttonShift.addEventListener('click', shiftRemoveFirsElement);
buttonPush.addEventListener('click', pushAddEnd);

//-----------------------------------------

let arr1 = [];
let p = document.getElementById('new');

//--------ф-я вывода массива (индекс -> значение)---

function arrOut(arr){
    
var toStringArr = (arr1) => arr1.map( (inputArrayValue, inputArrayIndex) => {
let str = '';
str += `array[${inputArrayIndex}] = ${inputArrayValue}`;
return str;
});
 p.textContent = toStringArr(arr);
}

//--------ф-я ввода в массив индекса и значения--------

function arrInput(){
	arr1 [inputArrayIndex.value] = inputArrayValue.value;
	arrOut(arr1);
}

//------ф-я добавляет значение в конец массива--------

function pushAddEnd(){
	arr1.push(inputArrayValue.value);
	arrOut (arr1);
}

//------ф-я удаляет значение в конце массива--------

function popRemoveLastElement(){
	arr1.pop();
	arrOut (arr1);
}

//------ф-я удаляет значение в начале массива--------

function shiftRemoveFirsElement(){
	arr1.shift();
	arrOut (arr1);
}

//------------------------------------------------




