import hexColor from "./color.js"

let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let container = document.querySelector(".container");
let colorArr = [];
btn2.addEventListener("click", function () {
    let hex = "#";
    const randomHex = () => Math.floor(Math.random() * hexColor.length);
    for (let i = 0; i < 6; i++) {
        hex += hexColor[randomHex()];
    }
    document.body.style.backgroundColor = hex
    btn2.innerHTML = hex;
    colorArr.push(hex)
})

btn1.onclick = () => {
    document.body.innerHTML = "";
    let container = document.createElement("div")
    container.classList.add("d-flex", "flex-wrap","row")
    document.body.insertAdjacentElement("afterbegin", container)
    document.body.style.backgroundColor = ""
    for (let i = 0; i < colorArr.length; i++) {
        container.innerHTML += `
        
        <div class="cards col-1 d-flex flex-column justify-content-center align-items-center" style="height:100px;background-color:${colorArr[i]}">
        <p  data-mdb-animation-start="onClick" class="align-self-center" style="position:relative">${colorArr[i]}</p>
        </div>
        
        `
    }
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].style.cursor = "pointer"
        container.children[i].onclick = (e) => {
            navigator.clipboard.writeText(e.target.innerText).catch(err => console.log(object))
            console.log(e.target.parentElement);
            let deger = e.target.innerText
            e.target.style.fontWeight = "bold"
            e.target.style.textShadow = "0px 0px 4px white"
            e.target.innerHTML="Copied!"
            e.target.style.transition ="opacity 0.2s 1s ease"
            setTimeout(()=>{
                e.target.innerHTML= deger  
            }, 300);
        }
    }
}

