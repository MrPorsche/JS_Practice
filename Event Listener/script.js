const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener('click', e => {
    console.log("You clicked on Grandparent.")
})

parent.addEventListener('click', e => {
    console.log("You clicked on Parent as well.")
})

child.addEventListener('click', e => {
    console.log("Why are you clicking on Child.")
})

document.addEventListener("click", e => {
    console.log("You just clicked on Document itself.")
})


// How Capture & Bubble works

grandparent.addEventListener(
    "click", e => {
        console.log("You clicked on Grandparent while captured.")
    },
    {capture: true}
)

grandparent.addEventListener('click', e => {
    console.log("You clicked on Grandparent while bubbled.")
})

parent.addEventListener(
    "click", e => {
        console.log("You clicked on Parent as well while captured.")
    },
    {capture: true}
)

parent.addEventListener('click', e => {
    console.log("You clicked on Parent as well while bubbled.")
})

child.addEventListener(
    "click", e => {
        console.log("Why are you clicking on child while captured.")
    },
    {capture: true}
)

child.addEventListener('click', e => {
    console.log("Why are you clicking on child while bubbled.")
})

document.addEventListener(
    "click", e => {
        console.log("You just clicked on Document itself while captured.")
    },
    {capture: true}
)

document.addEventListener('click', e => {
    console.log("You just clicked on Document itself while bubbled.")
})

grandparent.addEventListener('click', e => {
    console.log("You clicked on Grandparent while bubbled.")
})

parent.addEventListener('click', e => {
    console.log("You clicked on Parent as well while bubbled.")
}) 

// removing event listener

parent.addEventListener("click", printMsg)

setTimeout(() => {
    parent.removeEventListener("click", printMsg)
}, 5000)

child.addEventListener('click', e => {
    // e.stopPropagation()
    console.log("Why are you clicking on child while bubbled.")
})

function printMsg() {
    console.log("Now stop clicking on me, will you?")
}

// Event Delegation 

const divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("You are clicking on Div now.")
    })
})

document.addEventListener("click", e => {
    if (e.target.matches("div")) {
        console.log("Event Listener is available on every div. So, Enjoy!")
    }
})
// this could be done in two ways

// No. 1

addGlobalEventListener("click", "div" , e => {
    console.log("Event Listener is available on every div by Global Event Listener. So, Enjoy!")
})

// No. 2

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.targ  .matches(selector)) callback(e)
    })
}

// adding new div element

const newDiv = document.createElement("div")
newDiv.style.width = "400px"
newDiv.style.height = "400px"
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv)