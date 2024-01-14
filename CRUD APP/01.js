// DOMES
const mainInput = document.querySelector(".mainInput")
const ul = document.getElementById("root")
const editBox = document.querySelector(".editBox")
const editInput = document.getElementById("editInput")
const editedBtn = document.getElementById("editedBtn")
const DATA = []
mainInput.focus()                                  // FOCUS INPUT WHEN PAGE LOADED


// ADD ITEM

function addItem() {
    if (mainInput.value !== "")                    // NOT WORKING WITHOUT VALUE
        DATA.push(mainInput.value)
    render()
}

//RENDER
function render() {
    const template = DATA.map((item, index) => {
        return `<li>${item}
        <button class="liBtns" onclick=deleteItem(${index})>DELETE</button>
        <button class="liBtns" onclick=editItem(${index})>EDIT</button>
        <hr />
        </li>`
    }).join("")
    ul.innerHTML = template
    mainInput.value = ""
    mainInput.focus()                              // FOCUS ON INPUT
}


// DELETE ITEM
function deleteItem(indexItem) {
    DATA.splice(indexItem, 1)
    render()
}


// EDIT ITEM
function editItem(indexItem) {
    editBox.classList.remove("hide")
    editInput.focus()
    editInput.value = DATA[indexItem]
    editedBtn.onclick = () => {
        DATA[indexItem] = editInput.value
        if (editInput.value !== "") {              // NOT WORKING WITHOUT VALUE
            editBox.classList.add("hide")
            render()
        }
    }
}


// PRESS ENTER KEYBOARD
mainInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter")
        addItem()
})
