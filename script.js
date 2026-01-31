const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey="";
let input= document.querySelector("#input");
const button=document.querySelector(".search button");
let city=document.querySelector("#city");
let humi=document.querySelector("#hum");
let wind=document.querySelector("#win");
let temp=document.querySelector("#te");



const checkweather=async ()=>{
    response= await fetch(apiURL+ `&q=${input.value}&appid=${apiKey}`);
    let data=await response.json();
    temp.innerText=data.main.temp;
    city.innerText=data.name;
    humi.innerText=data.main.humidity;
    wind.innerText=data.wind.speed;
}



button.addEventListener("click", ()=>{
    checkweather();
});