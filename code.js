
const blockMenu = document.querySelector("#block_menu")
const blockP = document.querySelectorAll(".block_p")
const btn1 = document.querySelector("#button1")
const help1 = document.querySelector("#help1")

setTimeout(() => {blockMenu.style.display = "block"; startSetInterval()}, 100)
setTimeout(() => {helpStyle("290px", "Натисніть, щоб зупинити слайд-шоу")}, 2000)
btn1.addEventListener("click", function() {blockMenu.style.display = "none"})

let idSetInterval1, idSetTimeout1, idSetTimeout2
let countP = countInterval = 0
function helpStyle(x, y) {help1.style.display = "block"
    setTimeout(() => {help1.style.width = x; help1.innerHTML = y}, 50)
    clearTimeout(idSetTimeout1); idSetTimeout1 = setTimeout(() => {help1.style.width = "0px"}, 3000)
    clearTimeout(idSetTimeout2); idSetTimeout2 = setTimeout(() => {help1.style.display = "none"}, 4000)
}

blockMenu.addEventListener("click", function() {countInterval++
    if (countInterval === 1) {clearInterval(idSetInterval1); helpStyle("171px", "Слайд-шоу зупинено")}
    else if (countInterval === 2) {startSetInterval(); helpStyle("174px", "Слайд-шоу запущено"); countInterval = 0}
})

function startSetInterval() {
    idSetInterval1 = setInterval(() => {countP++
        if (countP === 1) {blockP[0].style.display = "none"; blockP[1].style.display = "block";}
        else if (countP === 2) {blockP[1].style.display = "none"; blockP[2].style.display = "block";}
        else if (countP === 3) {blockP[2].style.display = "none"; blockP[0].style.display = "block"; countP = 0}
    }, 5000)
}
