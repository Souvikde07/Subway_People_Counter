let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

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




