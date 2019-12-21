// import Sub from './weather/weather.js';
import './weather/weather';

// function weatherBalloon( cityID ) {
//     let key = "6fa88857718d165eea43d1f88ca5634f";
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key +'&mode=json&units=metric') 
//     .then(function(resp) { return resp.json() }) // Convert data to json
//     .then(function(data) {
//       // console.log(data);
//       document.querySelector('.weather__city').textContent = data.name;
//       //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
//       document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp) + '&deg;';
//       //Добавляем описание погоды
//       document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
//       //Добавляем иконку погоды
//       document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//     })
//     .catch(function() {
//       // catch any errors
//     });
//   }
  
//   window.onload = function() {
//     weatherBalloon(625144);
//   }

 
  

// let myTable = document.createElement("myTable");
// function insertRow(id) {
//   // let myTable = document.createElement("myTable");
//   let valueSelect = getValue();
//   // let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
//   let row = document.createElement("tr");
//   let td1 = document.createElement("td");
//       td1.appendChild(document.createTextNode("Вид транспорта: " +valueSelect));
//       td1.appendChild(document.createTextNode(" / из "+document.getElementById("t1").value))    ;    
//       td1.appendChild(document.createTextNode(" в "+document.getElementById("t5").value));
//       td1.appendChild(document.createTextNode(" / отправление "+document.getElementById("mydate").value));
//       td1.appendChild(document.createTextNode(" прибытия "+document.getElementById("t3").value));
//       td1.appendChild(document.createTextNode(" / цена билета "+document.getElementById("t6").value+ " руб."));
//   let td2 = document.createElement("td");
//       td2.appendChild(button = document.createElement("input"))
//       button.type = "button";
//       button.value = "УДАЛИТЬ";
//   row.appendChild(td1);
//   row.appendChild(td2);
//   // tbody.append(row);
//   // удаление
//   td2.setAttribute ('onmousedown', 'this.parentNode.parentNode.removeChild (this.parentNode);');
// }





// function weather () {
// // //Получаем прогноз в массив data
// let key = "6fa88857718d165eea43d1f88ca5634f";
// let idSity = 625144;
// let nameSity = document.getElementById("t5").value;
// // fetch('http://api.openweathermap.org/data/2.5/weather?id='+idSity+'&lang=ru&appid='+key+'&mode=json&units=metric')
// fetch('http://api.openweathermap.org/data/2.5/weather?q='+nameSity+'&lang=ru&appid='+key+'&mode=json&units=metric')
// .then(function (resp) {return resp.json() })
// .then(function (data) {
//   console.log(data);
// //     //добавляем название города
//     document.querySelector('.weather__city').textContent = data.name;
//     document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp).toFixed(1) + '&deg;';
//     //Добавляем описание погоды
//     document.querySelector('.weather__desc').textContent = data.weather[0]['description'] + ", ";
//     document.querySelector('.weather__desc2').textContent = data.weather[1]['description'];
//     //Добавляем иконку погоды
//     document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//     })
//     .catch(function () {
//         //Обрабатываем ошибки
//     });
//   };

// document.getElementById("weatherButton").onclick = weather;


function generateTable(){
  let valueSelect = getValue();
  for(let i = 0;i < arrTable.length; i++) 
  table.innerHTML = "";
  table.innerHTML += '<table class="table" id="myTable">'+
    '<tbody>'+
    '<tr class="tr">'+
    '<td>'+
    "Вид транспорта: " +valueSelect+
    " / из "+document.getElementById("t1").value+
    " в "+document.getElementById("t5").value+
    " / отправление "+document.getElementById("mydate").value+
    " прибытия "+document.getElementById("t3").value+
    " / цена билета "+document.getElementById("t6").value+ " руб."+
    // '<button id="remove" name="remove">'+
    // '</button>'+
    '<td><input type="button" value="Удалить" id="remove"></td>'+
    '</td>'+
    '</tr>'+
    '<tbody>'+
    '</table>'; 
}


document.getElementById('buttonTable').onclick = generateTable;

//масси в котором хрранится все
let arrTable = [];
   

function getValue() {
  let select = document.getElementById("select");
  let value = select.value;
  return value;
}

let time, hours, minutes, seconds, day, mouth, year;
time=new Date();
year = time.getFullYear();
mouth = time.getMonth() + 1;
day = time.getDate();
hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
if (hours <=9) hours = '0'+hours;
if (minutes <=9) minutes = '0'+minutes;
if (seconds <=9) seconds = '0'+seconds;
// document.myform.mytime.value = +hours+':'+minutes+':'+seconds;
document.myform.mydate.value = +day+'.' +mouth+'.' +year;
