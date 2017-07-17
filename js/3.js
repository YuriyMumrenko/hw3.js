
//--------------инпуты--------------------

let inputArrayIndex = document.querySelector('.inputArrayIndex');
let inputArrayValue = document.querySelector('.inputArrayValue');

//--------------кнопки----------------------

let buttonEnterArr = document.querySelector('.enterArr');
let buttonPop = document.querySelector('.pop');
let buttonShift = document.querySelector('.shift');
let buttonPush = document.querySelector('.push');

//-----------слушатели----------------------

buttonEnterArr.addEventListener('click', arrOut);
buttonPop.addEventListener('click', popRemoveLastElement);
buttonShift.addEventListener('click', shiftRemoveFirsElement);
buttonPush.addEventListener('click', pushAddEnd);

//-----------------------------------------

let arr1 = [];
let p = document.getElementById('new');

//------------------------------------------
function add (arr){
	p.textContent = arr;
}

//-----------ф-я вывода--------------------
function arrOut(){

 arr1 [inputArrayIndex.value] = inputArrayValue.value;
 add (arr1);
}

//------ф-я добавляет значение в конец массива--------

function pushAddEnd(){
	arr1.push(inputArrayValue.value);
	add (arr1);
}

//------ф-я удаляет значение в конце массива--------

function popRemoveLastElement(){
	arr1.pop();
	add (arr1);
}

//------ф-я удаляет значение в начале массива--------

function shiftRemoveFirsElement(){
	arr1.shift();
	add (arr1);
}

//------------------------------------------------




