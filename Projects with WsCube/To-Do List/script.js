const item = document.getElementById("item")
const toDoList = document.getElementById("to-do")

item.addEventListener(
    "keyup",
    function(event) {
        if(event.key == "Enter"){
        addToDo(this.value)
        this.value = ""
        }
    }
)

const addToDo = (item) => {
    const itemList =document.createElement("li");
    itemList.innerHTML = `
        ${item}
        <i class="fa-sharp fa-solid fa-circle-xmark fa-2xs"></i>
    `;

    itemList.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    itemList.querySelector("i").addEventListener(
        "click",
        function() {
            itemList.remove()
        }
    )
    toDoList.appendChild(itemList)
}