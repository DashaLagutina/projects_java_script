let btn = document.querySelector(".btn");
let apiKey = "abf61ec6202c721d650256505c73afcc"
let weatherDay = document.querySelector(".weather_day")
let boxError = document.querySelector("#box_error")
let telo = document.querySelector("#telo")


btn.addEventListener("click", () => {
    let cityName = document.querySelector("input").value
    let url = `
https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`


    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = () => {
        if (req.status === 200) {
            let x = JSON.parse(req.response);
            getTemp(x)
            telo.style.display = "block"
            boxError.style.display = "none"
        } else {
            // alert("404 NOT FOUND")

            boxError.style.display = "block"
            telo.style.display = "none"
        }
    }
    req.send();


    let req1 = new XMLHttpRequest();
    let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`;
    req1.open("GET", url1);
    req1.onload = () => {
        if (req1.status === 200) {
            let y = JSON.parse(req1.response);
            getTempFiveDays(y)
        } 
    }
    req1.send();
})


function getTemp(obg) {
    let data = new Date()
    imagine.style.display = "block"
    document.getElementById("data").innerText = data.toISOString().split("T")[0]
    let weatherToday = document.querySelector(".weather_today")
    weatherToday.style.backgroundColor = "white"
    city.innerText = document.querySelector("input").value
    cond.innerText = obg.weather[0].description
    temp.innerText = obg.main["temp"] + "°C"
    min_temp.innerText = "Минимальная температура: " + obg.main["temp_min"] + "°C"
    max_temp.innerText = "Максимальная температура: " + obg.main["temp_max"] + "°C"
    wind_speed.innerText = "Скорость ветра (км/ч): " + obg.wind["speed"]
    imagine.src = `https://openweathermap.org/img/wn/${obg.weather[0].icon}@2x.png`
}


function getTempFiveDays(obg1) {
    let weatherFiveHours = document.querySelector(".weather_five_hours")
    weatherFiveHours.style.backgroundColor = "white"
    head.innerText = "Почасовой прогноз погоды";
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let data = new Date();
    const dayOfWeek = data.getDay();
    const currentDayOfWeek = daysOfWeek[dayOfWeek];
    document.getElementById("data1").innerText = currentDayOfWeek;
    cond1.innerText = "Прогноз";
    temp1.innerText = "Температура(°C)";
    wind.innerText = "Скорость ветра (км/ч):";
    time.innerText = "9:00"
    img1.style.display = "block"
    img1.src = `https://openweathermap.org/img/wn/${obg1.list[5].weather[0].icon}@2x.png`
    cond2.innerText = obg1.list[5].weather[0].description
    temp2.innerText = obg1.list[5].main["temp"]
    wind1.innerText = obg1.list[5].wind["speed"]
    time1.innerText = "12:00"
    img2.style.display = "block"
    img2.src = `https://openweathermap.org/img/wn/${obg1.list[6].weather[0].icon}@2x.png`
    cond3.innerText = obg1.list[6].weather[0].description
    temp3.innerText = obg1.list[6].main["temp"]
    wind2.innerText = obg1.list[6].wind["speed"]
    time2.innerText = "15:00"
    img3.style.display = "block"
    img3.src = `https://openweathermap.org/img/wn/${obg1.list[7].weather[0].icon}@2x.png`
    cond4.innerText = obg1.list[7].weather[0].description
    temp4.innerText = obg1.list[7].main["temp"]
    wind3.innerText = obg1.list[7].wind["speed"]
    time3.innerText = "18:00"
    img4.style.display = "block"
    img4.src = `https://openweathermap.org/img/wn/${obg1.list[8].weather[0].icon}@2x.png`
    cond5.innerText = obg1.list[8].weather[0].description
    temp5.innerText = obg1.list[8].main["temp"]
    wind4.innerText = obg1.list[8].wind["speed"]
    time4.innerText = "21:00"
    img5.style.display = "block"
    img5.src = `https://openweathermap.org/img/wn/${obg1.list[9].weather[0].icon}@2x.png`
    cond6.innerText = obg1.list[9].weather[0].description
    temp6.innerText = obg1.list[9].main["temp"]
    wind5.innerText = obg1.list[9].wind["speed"]
    time5.innerText = "00:00"
    img6.style.display = "block"
    img6.src = `https://openweathermap.org/img/wn/${obg1.list[10].weather[0].icon}@2x.png`
    cond7.innerText = obg1.list[10].weather[0].description
    temp7.innerText = obg1.list[10].main["temp"]
    wind6.innerText = obg1.list[10].wind["speed"]
}