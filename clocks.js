const time = () => {
    let secondHand = document.querySelector(".second-hand");
    let minuteHand = document.querySelector(".minute-hand");
    let hourHand = document.querySelector(".hour-hand");
    const date = new Date();
    const [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let secDeg = s * 6;
    let minDeg = ((m * 60) + s) / 10;
    let hourDeg = ((((h - 12) * 60) + m) * 60) / 12 / 10;
    console.log(hourDeg);
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

let cells = document.querySelector(".cells");
let digiClock = () => {
    cells.innerHTML = '';
    const date = new Date();
    let formattedDate = date.toLocaleTimeString();
    // console.log(formattedDate);
    for (let i in formattedDate) {
        let cell = document.createElement('div');
        let topEl = document.createElement('div');
        let bottomEl = document.createElement('div');
        let bt = "3px";
        cell.classList.add("cell");
        topEl.classList.add("top");
        bottomEl.classList.add("bottom");
        cells.appendChild(cell);
        cell.appendChild(topEl);
        cell.appendChild(bottomEl);
        if (formattedDate[i] == 0) {
            topEl.style.borderWidth = `${bt} ${bt} 0 ${bt}`;
            bottomEl.style.borderWidth = `0 ${bt} ${bt} ${bt}`;
        } else if (formattedDate[i] == 1) {
            topEl.style.borderWidth = `0 ${bt} 0 0`;
            bottomEl.style.borderWidth = `0 ${bt} 0 0`;
        } else if (formattedDate[i] == 2) {
            topEl.style.borderWidth = `${bt} ${bt} ${bt} 0`;
            bottomEl.style.borderWidth = `0 0 ${bt} ${bt}`;
        } else if (formattedDate[i] == 3) {
            topEl.style.borderWidth = `${bt} ${bt} ${bt} 0`;
            bottomEl.style.borderWidth = `0 ${bt} ${bt} 0`;
        } else if (formattedDate[i] == 4) {
            topEl.style.borderWidth = `0 ${bt} ${bt} ${bt}`;
            bottomEl.style.borderWidth = `0 ${bt} 0 0`;
        } else if (formattedDate[i] == 5) {
            topEl.style.borderWidth = `${bt} 0 ${bt} ${bt}`;
            bottomEl.style.borderWidth = `0 ${bt} ${bt} 0`;
        } else if (formattedDate[i] == 6) {
            topEl.style.borderWidth = `${bt} 0 ${bt} ${bt}`;
            bottomEl.style.borderWidth = `0 ${bt} ${bt} ${bt}`;
        } else if (formattedDate[i] == 7) {
            topEl.style.borderWidth = `${bt} ${bt} 0 0`;
            bottomEl.style.borderWidth = `0 ${bt} 0 0`;
        } else if (formattedDate[i] == 8) {
            topEl.style.borderWidth = `${bt}`;
            bottomEl.style.borderWidth = `0 ${bt} ${bt} ${bt}`;
        } else if (formattedDate[i] == 9) {
            topEl.style.borderWidth = `${bt}`;
            bottomEl.style.borderWidth = `0 ${bt} ${bt} 0`;
        } else {
            cell.style.display = "flex";
            cell.style.flexDirection = "column";
            cell.style.justifyContent = "space-around";
            cell.style.margin = "0 10px";
            topEl.style.borderWidth = `${bt}`;
            bottomEl.style.borderWidth = `${bt}`;
            topEl.style.width = `${bt}`;
            topEl.style.height = `${bt}`;
            bottomEl.style.width = `${bt}`;
            bottomEl.style.height = `${bt}`;
        }
    }
}

let simpleClock = () => {
    let simpleClock = document.querySelector(".simple-clock");
    let time = new Date();
    let formattedTime = time.toLocaleTimeString();
    simpleClock.innerHTML = formattedTime;
}

setInterval(time, 1000)
setInterval(digiClock, 1000)
setInterval(simpleClock, 1000)




