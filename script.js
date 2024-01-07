
const body = document.getElementById("body");
const button = document.getElementById("random");
const button2 = document.getElementById("random2")
const propertyValue = document.getElementById("propertyValue");
const propertyValue2 = document.getElementById("propertyValue2");

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const inputcolors = document.querySelector("#showcolors");
const img = document.querySelector(".img");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const generateImage = () => {
    const direction = Math.round(Math.random() * 360);
    const r1 = Math.round(Math.random() * 255); 
    const g1 = Math.round(Math.random() * 255); 
    const b1 = Math.round(Math.random() * 255); 

    const r2 = Math.round(Math.random() * 255);
    const g2 = Math.round(Math.random() * 255);
    const b2 = Math.round(Math.random() * 255);

    const background = body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1}), rgba(${r2},${g2},${b2}) )`;

    propertyValue.textContent = `${background};`;
    img.classList.add("active");
}

const generateImage2 = () => {
    const direction = Math.round(Math.random() * 360);
    const r1 = Math.round(Math.random() * 255); 
    const g1 = Math.round(Math.random() * 255); 
    const b1 = Math.round(Math.random() * 255); 
  
    const r2 = Math.round(Math.random() * 255);
    const g2 = Math.round(Math.random() * 255);
    const b2 = Math.round(Math.random() * 255);
  
    const r3 = Math.round(Math.random() * 255);
    const g3 = Math.round(Math.random() * 255);
    const b3 = Math.round(Math.random() * 255);
  
    const background2 = body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1}), rgba(${r2},${g2},${b2}), rgba(${r3}, ${g3}, ${b3}))`;

    propertyValue2.textContent = `${background2};`;
    img1.classList.add("active");
}

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    inputcolors.textContent = body.style.background + ";";
    img2.classList.add("active");
}

button.addEventListener("click", generateImage);
button2.addEventListener("click", generateImage2);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const copy = () =>{
  var textarea = document.createElement("textarea");
  textarea.value = propertyValue.innerText;
  document.body.appendChild(textarea);
  
  textarea.select();
  document.execCommand("copy");
  
  document.body.removeChild(textarea);
  
}

const copy2 = () =>{
    var textarea = document.createElement("textarea");
    textarea.value = propertyValue2.innerText;
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(textarea);
    
}

  
const copy3 = () =>{
    var textarea = document.createElement("textarea");
    textarea.value = inputcolors.innerText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

}


img.addEventListener("click", copy);
img1.addEventListener("click", copy2);
img2.addEventListener("click", copy3);