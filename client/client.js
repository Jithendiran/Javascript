const PORT = 9876
const URL = `ws://localhost:${PORT}`
const getmsg = document.getElementById('rec')
const sendTxt = document.getElementById('sendtext')
const send = document.getElementById('send')

send.disabled = true
const ws = new WebSocket(URL)

ws.onopen = ()=>{
    console.log("Opened");
     send.disabled = false
}
ws.onmessage = (msg)=>{
    getmsg.value = getmsg.value+"\n"+"Server : "+msg.data
}
send.addEventListener('click',()=>{
    ws.send(sendTxt.value)
    getmsg.value = getmsg.value+"\n"+"Client : "+sendTxt.value
    sendTxt.value = ''
})