let playing = 0

document.getElementById('play').addEventListener('click', () => {
    if (playing === 0 ){
        document.getElementById('play').innerHTML = '&#10074;&#10074;'
        playing = 1
    } else {
        document.getElementById('play').innerHTML = '&#9658;'
        playing = 0
    }
    console.log('Play')
})