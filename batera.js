var x = null
const keymap={
    'h':'audios/bumbo.wav',
    'c':'audios/caixa.wav',
    'j':'audios/cym.wav',
    'k':'audios/cym2.wav',
    'b':'audios/hithat.wav',
    'd':'audios/tom1.wav',
    's':'audios/tom2.wav',
    'a':'audios/tom3.wav'
}
document.addEventListener("keypress",(event)=>{
    let novo=new Audio(keymap[event.key])
    novo.play()
})