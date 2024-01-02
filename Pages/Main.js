let addEl = document.getElementById("add_el")
let countEl = document.getElementById("count_el")
let saveEl = document.getElementById("save_el")

let count = 0

function Add() {
    count += 1
    countEl.innerText = count
}
function Subtract() {
    if (count > 0) {
        count -= 1
        countEl.innerText = count
    }
}
function Save() {
    if (count > 0) {
        let SaveStr = count + " - "
        saveEl.textContent += SaveStr
        countEl.innerText = 0
        count = 0
    }
}
function Sum() {
    
}