let inputOne = document.querySelector("#input-1");
let inputTwo = document.querySelector("#input-2");
let inputThree = document.querySelector("#input-3");
let inputFour = document.querySelector("#input-4");
let inputFive = document.querySelector("#input-5");
let inputSix = document.querySelector("#input-6");
let imgEl = document.querySelector("img");

inputOne.addEventListener('input' , () =>{
    imgEl.style.borderRadius = inputOne.value / 2 + "%";
})

inputTwo.addEventListener('input' , () =>{
    imgEl.style.width = inputTwo.value + "px";
})

inputThree.addEventListener('input' , () =>{
    imgEl.style.height = inputThree.value + "px";
})

inputFour.addEventListener('change' , () =>{
    imgEl.style.filter = `contrast(${inputFour.value * 3.6 + "%" })`
})

inputFive.addEventListener('change' , () =>{
    imgEl.style.filter = `brightness(${inputFive.value+ "%" })`
})

inputSix.addEventListener('change' , () =>{
    imgEl.style.filter = `hue-rotate(${inputSix.value * 3.6 + "deg" })`
})
