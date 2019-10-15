var x = null
const keymap={
    'h':'audios/bumbo.wav',
    'c':'audios/caixa.wav',
    '?':'audios/cym.wav',
    '?':'audios/cym2.wav',
    'b':'audios/hithat.wav',
    '?':'audios/tom1.wav',
    '?':'audios/tom2.wav',
    '?':'audios/tom3.wav'
}
document.addEventListener("keypress",(event)=>{
    x=keymap[event.key]
    if(x!==undefined){
        let novo=new Audio(keymap[event.key])
        novo.play()
    }
})