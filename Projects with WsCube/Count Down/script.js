const endDate = "24 August 2024 9:00 AM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff <0) return;

    console.log(diff)
    inputs[0].value = Math.floor(diff / 3600 / 24); // convert into days
    inputs[1].value = Math.floor(diff / 3600) % 24;// convert into hours
    inputs[2].value = Math.floor(diff / 60) % 60; // convert into minutes
    inputs[3].value = Math.floor(diff) % 60; // convert into seconds
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)

const currentTime = document.querySelector('#time span')

setInterval(() => {
	currentTime.innerText = new Date().toLocaleString()
}, 1000);