document.getElementById('set').addEventListener('click', () => {
    // PopUp, div with display: none
    document.getElementById('popup').style.display = 'block'
    document.getElementById('main').style.opacity = '0.3'
})

document.getElementById('popup-submit').addEventListener('click', () => {
    let h = document.getElementById('h').value
    let m = document.getElementById('m').value
    let s = document.getElementById('s').value
    let time = [h, m, s]

    for (let i=0; i<=2; i++){
        if (String(time[i]).length === 1) time[i] = `0${time[i]}`
        if (String(time[i]).length === 0) time[i] = "00"
    }
    document.getElementById('time').innerText = `${time[0]}:${time[1]}:${time[2]}`

    document.getElementById('popup').style.display = 'none'
    document.getElementById('main').style.opacity = '1'
})

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('popup').style.display = 'none'
    document.getElementById('main').style.opacity = '1'
})

// Time go
let playing = 0
let play

// and alarm

document.getElementById('ok').addEventListener('click', ()=>{
    document.getElementById('popupAudio').style.display = 'none'
    document.getElementById('main').style.opacity = '1'
    document.getElementById('audio').pause()
    document.getElementById('audio').currentTime = 0
})

function timerEnd(){
    document.getElementById('time').innerText = '00:00:00'
    pause()

    document.getElementById('audio').play()
    document.getElementById('popupAudio').style.display = 'block'
    document.getElementById('main').style.opacity = '0.3'
}

function start(){
    if (!play) {
        play = setTimeout(start, 1000)
    } else if (playing === 1) {
        // Time changing
        let time = document.getElementById('time').textContent.split(':')
        time = [Number(time[0]), Number(time[1]), Number(time[2])]
        if (time[2] === 0) {
            if (time[1] === 0){
                if (time[0] === 0){
                    timerEnd()
                } else {
                    time = [time[0]--, 59, 59]
                }
            } else {
                time[2] = 59
                time[1]--
            }
        } else {
            time[2]--
        }

        // Time string style
        for (let i=0; i<=2; i++){
            if (String(time[i]).length === 1) time[i] = `0${time[i]}`
        }
        document.getElementById('time').innerText = `${time[0]}:${time[1]}:${time[2]}`

        play = setTimeout(start, 1000)
    }
}

function pause(){
    clearTimeout(play)
    document.getElementById('play').innerHTML = '&#9658;'
    playing = 0
    play = 0 // Avoid bug of clicking on the start and pause, and 1 second pass automactly
}

document.getElementById('play').addEventListener('click', () => {
    if (playing === 0){
        document.getElementById('play').innerHTML = '&#10074;&#10074;'
        playing = 1
        start()
    } else {
        pause()
    }
})

document.getElementById('restart').addEventListener('click', () => {
    document.getElementById('time').innerText = '00:00:00'
    pause()
})

// Keyboard shortcuts
document.onkeydown = (e) => {
    if (e.key === " " || e.key === "Enter"){
        document.getElementById('play').click()
    }
    if (e.key === "r"){
        document.getElementById('restart').click()
    }
}