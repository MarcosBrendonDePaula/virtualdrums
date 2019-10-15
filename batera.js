var x = null
var keymap={
    'h':'audios/bumbo.wav',
    'c':'audios/caixa.wav',
    '?':'audios/cym.wav',
    '?':'audios/cym2.wav',
    'b':'audios/hithat.wav',
    '?':'audios/tom1.wav',
    '?':'audios/tom2.wav',
    '?':'audios/tom3.wav'
}

function findKey(event){
    x=keymap[event.key]
    if(x!==undefined){
        let novo = new Audio(keymap[x])
        novo.play()
    }
}

document.addEventListener("keypress",findKey)