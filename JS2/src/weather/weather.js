export default class Sub {};
function weather () {
//Получаем прогноз в массив data
let key = "6fa88857718d165eea43d1f88ca5634f";
// let idSity = 625144;
let nameSity = document.getElementById("t5").value;
// fetch('http://api.openweathermap.org/data/2.5/weather?id='+idSity+'&lang=ru&appid='+key+'&mode=json&units=metric')
fetch('http://api.openweathermap.org/data/2.5/weather?q='+nameSity+'&lang=ru&appid='+key+'&mode=json&units=metric')
.then(function (resp) {return resp.json() })
.then(function (data) {
  console.log(data);
//     //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp).toFixed(1) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'] + ", ";
    // document.querySelector('.weather__desc2').textContent = data.weather[1]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width="50px" height="50px">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });
  };

  document.getElementById("weatherButton").onclick = weather;