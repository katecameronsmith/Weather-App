/* Global Variables */
const e = require("express");

const generate = document.querySelector("#generate");
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");
const feeling = document.querySelector("feeling");
const temp = document.querySelector("#temp")
const date = d.toDateString();
const example = "api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}";
const baseURI = "api.openweathermap.org/data/2.5/weather?zip=";
const key = "a9a2c0598720047fa9f01191e0f24ef7";


generate.addEventListener("click", (event) => {
    e.preventDefault();
    const madeURI = 
});


// Create a new date instance dynamically with JS
const d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();