var msgArray = [];
var msgReply = [];
function response(room, msg, sender, isGroupChat, replier, imageDB) {
    if (room == "김재현") {
        msgArray = msg.split("");
        for(i=0; i<msgArray.length; i++){
            msgArray[i] = msgArray[i]+" ";
        }
        replier.reply(msgArray.join(""))
    }
}