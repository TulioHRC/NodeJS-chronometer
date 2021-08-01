let time
let alarm

// Popup
document.getElementById('set').addEventListener('click', ()=>{
    document.getElementById('popup').style.display = 'block'
    time = new Date()
    document.getElementById('h').value = time.getHours()
    document.getElementById('m').value = time.getMinutes()
    document.getElementById('s').value = time.getSeconds()
})

document.getElementById('popup-submit').addEventListener('click', ()=>{
    document.getElementById('popup').style.display = 'none'
    alarm = `${document.getElementById('h').value}:${document.getElementById('m').value}:${document.getElementById('s').value}`
})

// Infinite Loop
let updateTime = function(){
    time = new Date()
    if (`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` === alarm) {
        alert('alarm')
    }
    // Time string style
    time = [time.getHours(),time.getMinutes(),time.getSeconds()]
    for (let i=0; i<=2; i++){
        if (String(time[i]).length === 1) time[i] = `0${time[i]}`
    }
    document.getElementById('time').innerText = `${time[0]}:${time[1]}:${time[2]}`
}

setInterval(updateTime, 1000)