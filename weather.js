const input = document.getElementById("city-input");
const btn = document.getElementById("submit-button");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const clouds = document.getElementById("cloud");
const windyImg = document.getElementById("windy-picture")
const heatImg = document.getElementById("heat-image")
const cloudImg = document.getElementById("cloud-image")
const pictureSpan = document.getElementById("pictures")
const temperatureMax = document.getElementById("temperature-max")
const temperatureMin = document.getElementById("temperature-min")
const forecast = document.getElementById("forecast")

const getFetch = () =>{
    clearFunction
    let city = input.value;
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17b21eed487c55d2ec2bac78727c83dc&units=metric`;

  fetch(weatherApi).
  then(res => res.json()).
  then(data=>{
    forecast.innerText = data.weather.main
    temperatureMin.innerText = data.main.temp_min
    temperatureMax = data.main.temp_max
    temperature.innerText =  parseInt(data.main.temp);
    wind.innerHTML = parseInt(data.wind.speed);
    clouds.innerText = parseInt(data.clouds.all);
  /*
  if (wind.innerText>=1){
    windyImg.src="https://www.ephotozine.com/resize/articles/28777/128320_1382474914.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsyBFtG"
  }
  if (clouds.innerText>1){
    cloudImg.src="https://www.thoughtco.com/thmb/81QGhTao0s1fj7PydEBkBl7gl0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/521928855-56a9e2925f9b58b7d0ffac0a.jpg"
  }
  if (temperature.innerText >29){
    heatImg.src="https://canadianart.ca/wp-content/uploads/2018/10/Arjuna-Neuman-and-Denise-Ferreira-da-Silva_serpent-rain-2016-1024x576.jpg"
  } else if (temperature.innerText<1){
    heatImg.src="https://www.thoughtco.com/thmb/yVaEVnUwsvgT9nYW7E1JZ0b7Bsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-ice-of-lake-baikal-620730000-5828935c3df78c6f6a5cae1c.jpg"
  }*/
  })
  .catch(error => {
    console.log(error)//is there more that should go into the errors?
    clearFunction
  })
}

btn.addEventListener("click", getFetch);

const clearFunction = () =>{
    forecast.innerText = "";
    temperatureMin.innerText = "";
    temperatureMax = "";
    temperature.innerText = "";
    wind.innerHTML = "";
    clouds.innerText = "";
}
