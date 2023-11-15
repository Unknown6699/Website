
const blockMenu = document.querySelector("#block_menu")
const blockP = document.querySelectorAll(".block_p")
const btn1 = document.querySelector("#button1")

setTimeout(() => {blockMenu.style.display = "block"; startSetInterval()}, 100);
btn1.addEventListener("click", function() {blockMenu.style.display = "none"})

blockMenu.addEventListener("mouseover", function() {clearInterval(idSetInterval)})
blockMenu.addEventListener("mouseout", function() {startSetInterval()})

let idSetInterval
let countP = 0
function startSetInterval() {
    idSetInterval = setInterval(() => {countP++
        if (countP === 1) {blockP[0].style.display = "none"; blockP[1].style.display = "block";}
        else if (countP === 2) {blockP[1].style.display = "none"; blockP[2].style.display = "block";}
        else if (countP === 3) {blockP[2].style.display = "none"; blockP[0].style.display = "block"; countP = 0}
    }, 5000)
}
