const input = document.getElementById("city-input");
const btn = document.getElementById("submit-button");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const clouds = document.getElementById("cloud");




const getFetch = () =>{
  let city = input.value;
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17b21eed487c55d2ec2bac78727c83dc`;

  fetch(weatherApi).
  then(res => res.json()).
  then(data=>{
    temperature.textInput = `${data.temperature.value}`;
    wind.textInput = `${data.wind.speed}`;
    clouds.textInput = `${data.clouds.value}`;
  })
  .catch(error => {
    console.log(error)//is there more that should go into the errors?
  })
};

btn.addEventListener("click", getFetch);

//api key 17b21eed487c55d2ec2bac78727c83dc

