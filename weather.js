const input = document.getElementById("city-input");
const btn = document.getElementById("submit-button");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const clouds = document.getElementById("cloud");
const test = document.getElementById("test")
const windyImg = document.getElementById("windy-image")
const heatImg = document.getElementById("heat-image")
const cloudImg = document.getElementById("cloud-image")

const getFetch = () =>{
    let city = input.value;
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17b21eed487c55d2ec2bac78727c83dc&units=metric`;

  fetch(weatherApi).
  then(res => res.json()).
  then(data=>{
    temperature.value = `Temperature(c): ${data.main.temp}`;
    wind.value = `Wind Speed: ${data.wind.speed}`;
    clouds.value = `Cloud number? ${data.clouds.all}`;
  })
  .catch(error => {
    console.log(error)//is there more that should go into the errors?
  })
  if (wind.value<=10){
    windyImg.style = "visibility:hidden"
  }
  if (temperature.value <= 33){
    heatImg.style = "visibility:hidden"
  }
  if (cloudImg.value <= 9){
    cloudImg.style = "visibility:hidden"
  }
};

btn.addEventListener("click", getFetch);

//api key 17b21eed487c55d2ec2bac78727c83dc
