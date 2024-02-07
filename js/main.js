let elColorForm = document.querySelector(".color-form");
let elColor = document.querySelector(".sub-color");
let elLabel1 = document.querySelector(".color-form-label-1");
let elLabel2 = document.querySelector(".color-form-label-2");
let elInput1 = document.querySelector(".color-form-input-1");
let elInput2 = document.querySelector(".color-form-input-2");
let elImg = document.querySelector(".wrapper-img");

let elPriceForm = document.querySelector(".price-form");
let elPriceSpan = document.querySelector(".sub-price");
let elPriceLabel = document.querySelector(".price-label");
let elPrice1 = document.querySelector(".price-label1")
let elPrice2 = document.querySelector(".price-label2")
let elPrice3 = document.querySelector(".price-label3")
let elPrice4 = document.querySelector(".price-label4")



elLabel1.classList.add("color-form-label-add");

elColorForm.addEventListener("change", (evt)=>{
    evt.preventDefault();

    elColor.textContent = evt.target.value;
     if(evt.target.value == elInput1.value) {
        elLabel1.classList.add("color-form-label-add");
        elLabel2.classList.remove("color-form-label-add");
        elImg.src = "./images/77eca8b2420bb1d5e95728168d6e6c92.jpeg"
     } else {
        elLabel2.classList.add("color-form-label-add");
        elLabel1.classList.remove("color-form-label-add");
        elImg.src = "./images/696f087203dbc41896f9d180cf9d0435.jpeg"
     }
    // console.log(evt.target.value);
})
elPrice1.style.borderColor = "#007fff";

elPriceForm.addEventListener("change", (evt)=>{
    evt.preventDefault();

    if(evt.target.value == '512gb') {
        elPriceSpan.textContent = "$1,999";
        elPrice1.style.borderColor = "#007fff";
        elPrice2.style.borderColor = "#cfe7ff";
        elPrice3.style.borderColor = "#cfe7ff";
        elPrice4.style.borderColor = "#cfe7ff";
    } else if(evt.target.value == '1tb') {
        elPriceSpan.textContent = "$2,199";
        elPrice1.style.borderColor = "#cfe7ff";
        elPrice2.style.borderColor = "#007fff";
        elPrice3.style.borderColor = "#cfe7ff";
        elPrice4.style.borderColor = "#cfe7ff";
    } else if(evt.target.value == '2tb') {
        elPriceSpan.textContent = "$2,599";
        elPrice1.style.borderColor = "#cfe7ff";
        elPrice2.style.borderColor = "#cfe7ff";
        elPrice3.style.borderColor = "#007fff";
        elPrice4.style.borderColor = "#cfe7ff";
    } else if(evt.target.value == '4tb') {
        elPriceSpan.textContent = "$3,199";
        elPrice1.style.borderColor = "#cfe7ff";
        elPrice2.style.borderColor = "#cfe7ff";
        elPrice3.style.borderColor = "#007fff";
        elPrice4.style.borderColor = "#cfe7ff";
    }
})
