
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

//------создание нового элемента <p> --------------

 // let newP = document.createElement('p');
 //  newP.className = "out";
 //  newP.textContent = "Вывод массива: " + inputArrayValue.value;
 //  document.body.appendChild(newP);
//---------------------------------------------

//-----------ф-я вывода--------------------
var arr1 = [];
function arrOut(){
	var p = document.getElementById('out');
	for (var i = 0; i < arr1.length; i++){
	}

 arr1 [inputArrayIndex.value] = inputArrayValue.value;
p.textContent = arr1 + " Последние изменения: "+ ' длина массива = '+ arr1.length  + " индекс: " + inputArrayIndex.value +" значение: " + inputArrayValue.value;
}

//------ф-я добавляет значение в конец массива--------

function pushAddEnd(){
	arr1.push(inputArrayValue.value);
	arrOut();
}

//------ф-я удаляет значение в конце массива--------

function popRemoveLastElement(){
	arr1.pop();
	arrOut();
}

//------ф-я удаляет значение в начале массива--------

function shiftRemoveFirsElement(){
	arr1.shift();
	arrOut();
}

//------------------------------------------------




