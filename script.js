let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error")
console.log(errorEl)
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
    console.log(count)
}
function save(){
    let saveAs = count + " - "
    saveEl.textContent += saveAs
    countEl.textContent = 0
    count = 0
    console.log(saveAs)
}



