let ourform = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourform.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(ourField.value)
})

function createItem(x){
    let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementTodelete){
    elementTodelete.parentElement.remove()
}

