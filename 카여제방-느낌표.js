var msgDatat1 = [];
var msgDatat2 = [];
var msgDatat3 = [];
var msgDatat4 = [];
var nb = ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "0."];
var Gdif = "";
var msgArray = [];

////// 시간 및 난이도 조정 ////
var t1 = 30;     // 1파티 시간
var t2 = 40;    // 2파티 시간
var t3 = 50;    // 3파티 시간
var lv1 = "카오스1";  //1파티 난이도
var lv2 = "카오스2";  //2파티 난이도
var lv3 = "카오스3";//3파티 난이도

//////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
var msgDatat1_list = [];
var msgDatat2_list = [];
var msgDatat3_list = [];

var msg2 = "";
var swit = false;
var time_n = "";

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    var com = "";
    if (room =="🍓쁘 띠 공 지 방🍓"){
        /////////// help //////////////
        if (msg.indexOf("/도움말") == 0) {
            replier.reply("● 도움말\n☆원정 신청, 취소방법\n★/[N][닉네임][신청]을 입력\nEx) /N 닉네임 신청\nEx) /N 닉네임 취소\n-N:1~5\n(1:노말, 2:하드, 3:카오스, 4:반레온, 5:길레)\n-신청시 키알 조심\n-한번에 한명만 신청 가능\n(별)취소시 신청 닉네임과 동일해야됨!\n-반레온, 길레는 상시 모집");
            replier.reply("○ 명령어\n/도움말\n/목록 : 여제 목록 보기\n/레온 : 반레온 목록 보기\n/길레 : 길레 목록 보기\n/변경 A-B : A를 B로 변경(시간,난이도)")
        }
        //////////  시작  ////////////
        if (swit == false && msg.indexOf("/시작") != -1) {
            swit = true;
            if (swit == true) {
                replier.reply("🍓연합 원정 명단 시작🍓\n시간엄수! 불참•지각 노노!\n원정관련 공지 필독!!");
                replier.reply("[/1 " + lv1 + " ][" + t1 + "]\n" + msgDatat1_list.join("\n") + "\n------------------\n[/2 " + lv2 + " ][" + t2 + "]\n" + msgDatat2_list.join("\n") + "\n------------------\n[/3 " + lv3 + " ][" + t3 + "]\n");
            }
        }
        ///////////// 끝 /////////////
        if (swit == true && msg.indexOf("/끝") != -1) {
            replier.reply("원정모집을 마감합니다\n🍓수고하셨습니다🍓");
            swit = false;
            msgDatat1 = [];
            msgDatat1_list = [];
            msgDatat2 = [];
            msgDatat2_list = [];
            msgDatat3 = [];
            msgDatat3_list = [];
            t1 = 30;
            t2 = 40;
            t3 = 50;
            lv1 = "카오스1";
            lv2 = "카오스2";
            lv3 = "카오스3";
        }

        //// 시간 변경 ////
        if (msg.indexOf("/변경") == 0 && msg.indexOf("-") != -1) {
            msg = msg.replace(/ /gi, "");
            Gdif = msg.substring(3, msg.indexOf("-"));
            if (Gdif.indexOf("노말") != -1 || Gdif.indexOf("하드") != -1 || Gdif.indexOf("없음") != -1) {
                if (Gdif === lv1) {
                    lv1 = msg.substring(msg.indexOf("-") + 1, msg.length);
                    lv1 = lv1.replace(/(^\s*)|(\s*$)/, "");
                    replier.reply(call_list(t1));
                }
                else if (Gdif === lv2) {
                    lv2 = msg.substring(msg.indexOf("-") + 1, msg.length);
                    lv2 = lv2.replace(/(^\s*)|(\s*$)/, "");
                    replier.reply(call_list(t2));
                }
                else if (Gdif === lv3) {
                    lv3 = msg.substring(msg.indexOf("-") + 1, msg.length);
                    lv3 = lv3.replace(/(^\s*)|(\s*$)/, "");
                    replier.reply(call_list(t3));
                }
            }

            else if (msg.indexOf(t1) != -1 && t1.toString().length == Gdif.length) {
                t1 = msg.substring(msg.indexOf("-") + 1, msg.length);
                t1 = t1.replace(/(^\s*)|(\s*$)/, "");
                replier.reply(call_list(t1));
            }
            else if (msg.indexOf(t2) != -1 && t2.toString().length == Gdif.length) {
                t2 = msg.substring(msg.indexOf("-") + 1, msg.length);
                t2 = t2.replace(/(^\s*)|(\s*$)/, "");
                replier.reply(call_list(t2));
            }
            else if (msg.indexOf(t3) != -1 && t3.toString().length == Gdif.length) {
                t3 = msg.substring(msg.indexOf("-") + 1, msg.length);
                t3 = t3.replace(/(^\s*)|(\s*$)/, '');
                replier.reply(call_list(t3));
            }
        }


        /////// reset /////////
        if (swit == true && msg.indexOf("/리셋") != -1) {
            if (msg.indexOf("1") != -1) {
                msgDatat1 = [];
                msgDatat1_list = [];
                t1 = 5;
                replier.reply("1팟 리셋완료");
            }
            else if (msg.indexOf("2") != -1) {
                msgDatat2 = [];
                msgDatat2_list = [];
                t2 = 20;
                replier.reply("2팟 리셋완료");
            }
            else if (msg.indexOf("3") != -1) {
                msgDatat3 = [];
                msgDatat3_list = [];
                t3 = 57;
                replier.reply("3팟 리셋완료");
            }
        }
        if (msg.indexOf("/리셋") != -1) {
            if (msg.indexOf("all") != -1) {
                msgDatat1 = [];
                msgDatat1_list = [];
                msgDatat2 = [];
                msgDatat2_list = [];
                msgDatat3 = [];
                msgDatat3_list = [];
                t1 = 30;
                t2 = 40;
                t3 = 50;
                lv1 = "카오스1";
                lv2 = "카오스2";
                lv3 = "카오스3";
                replier.reply("전부 리셋완료");
            }
        }

        //// 오류 방지 ///
        if (msg.indexOf("/") == 0 && msg.indexOf("신청") != -1 && msg.indexOf("취소") != -1) {
            replier.reply("신청, 취소 둘중 하나만 합시다!");
            return;
        }
        if (msg.indexOf("/") == 0 && msg.indexOf("\n") != -1 && msg.indexOf("신청") != -1) {
            replier.reply("한번에 한명만 신청가능합니다!! 줄 바꾸면 안돼요!");
            return;
        }

        /////////////// 신청 /////////////////////

        if (swit == true && msg.indexOf("/") == 0 && msg.indexOf("신청") != -1) {
            if (msgDatat1.length < 10 && msg.indexOf("/1") != -1) {
                msgDatat1.push(msg_filter(msg));
                replier.reply(call_list(t1, '+'));
            }
            else if (msgDatat1.length >= 10 && msg.indexOf("/1") != -1) {
                replier.reply("1팟" + lv1 + " 마감입니다!");
                return;
            }
            else if (msgDatat2.length < 10 && msg.indexOf("/2") != -1) {
                msgDatat2.push(msg_filter(msg));
                replier.reply(call_list(t2, '+'));
            }
            else if (msgDatat2.length >= 10 && msg.indexOf("/2") != -1) {
                replier.reply("2팟" + lv2 + " 마감입니다!");
                return;
            }
            else if (msgDatat3.length < 10 && msg.indexOf("/3") != -1) {
                msgDatat3.push(msg_filter(msg));
                replier.reply(call_list(t3, '+'));
            }
            else if (msgDatat3.length >= 10 && msg.indexOf("/3") != -1) {
                replier.reply("3팟 " + lv3 + "  마감입니다!");
                return;
            }

        }

        if (msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
            if (swit == true && msg.indexOf("/1") != -1) {
                com = msgDatat1.indexOf(msg_cancel(msg));
                if (com != -1) {
                    msgDatat1_list.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);
                    msgDatat1.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);

                    replier.reply(call_list(t1, '-'));
                }
                else {
                    replier.reply("명단과 동일하게 입력해주세요!!");
                    return;
                }
            }
            else if (swit == true && msg.indexOf("/2") != -1) {
                com = msgDatat2.indexOf(msg_cancel(msg));
                if (com != -1) {
                    msgDatat2_list.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
                    msgDatat2.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
                    replier.reply(call_list(t2, '-'));
                }
                else {
                    replier.reply("명단과 동일하게 입력해주세요!!");
                    return;
                }
            }
            else if (swit == true && msg.indexOf("/3") != -1) {
                com = msgDatat3.indexOf(msg_cancel(msg));
                if (com != -1) {
                    msgDatat3_list.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
                    msgDatat3.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
                    replier.reply(call_list(t3, '-'));
                }

                else {
                    replier.reply("명단과 동일하게 입력해주세요!!");
                    return;
                }
            }
        }


        if (swit == true && msg.indexOf("/목록") == 0) {
            replier.reply(call_list("all"));
        }
    }
}


function msg_filter(a) {
    var b = "";
    if (a.indexOf("/1") == 0) {
        b = a.replace("/1", "");
        b = msg_filter2(b);
    }
    else if (a.indexOf("/2") == 0) {
        b = a.replace("/2", "");
        b = msg_filter2(b);
    }
    else if (a.indexOf("/3") == 0) {
        b = a.replace("/3", "");
        b = msg_filter2(b);
    }
    else if (a.indexOf("/4") == 0) {
        b = a.replace("/4", "");
        b = msg_filter2(b);
    }
    else if (a.indexOf("/5") == 0) {
        b = a.replace("/5", "");
        b = msg_filter2(b);
    }

    return b;
}

function msg_blank(a){
    var b = "";
    msgArray = a.split("");
    for(i=0; i<msgArray.length; i++){
        msgArray[i] = msgArray[i]+" ";
    }
    b = msgArray.join("");
    b = b.trim();
    return b;
}

function msg_filter2(a) {
    var b = "";
    b = a.replace(/ /gi, "");
    b = b.replace("신청", "");
    b = b.replace(/\s*$/gi, "");
    b = msg_blank(b)
    return b;
}
function msg_cancel(a) {
    var b = "";
    if (a.indexOf("/1") == 0) {
        b = a.replace("/1", "");
        b = msg_cancel2(b);
    }
    else if (a.indexOf("/2") == 0) {
        b = a.replace("/2", "");
        b = msg_cancel2(b);
    }
    else if (a.indexOf("/3") == 0) {
        b = a.replace("/3", "");
        b = msg_cancel2(b);
    }
    return b;
}
function msg_cancel2(a) {
    var b = "";
    b = a.replace(/ /gi, "");
    b = b.replace("취소", "");
    b = b.replace(/\s*$/gi, "");
    b = msg_blank(b)
    return b;
}

function call_list(a, b) {
    if (a == t1) {

        if (b == '+') {
            msgDatat1_list.push(nb[(msgDatat1.length) - 1] + msgDatat1[(msgDatat1.length) - 1]);
        }
        if (b == '-') {
            msgDatat1_list = [];
            for (i = 0; i < msgDatat1.length; i++) {
                msgDatat1_list.push(nb[i] + msgDatat1[i]);
            }
        }

        return "[/1 " + lv1 +" ][" + t1 + "]\n" + msgDatat1_list.join("\n");
    }
    if (a == t2) {
        if (b == '+') {
            msgDatat2_list.push(nb[(msgDatat2.length) - 1] + msgDatat2[(msgDatat2.length) - 1]);
        }
        if (b == '-') {
            msgDatat2_list = [];
            for (i = 0; i < msgDatat2.length; i++) {
                msgDatat2_list.push(nb[i] + msgDatat2[i]);
            }
        }
        return "[/2 " + lv2 +" ][" + t2 + "]\n" + msgDatat2_list.join("\n");
    }
    if (a == t3) {
        if (b == '+') {
            msgDatat3_list.push(nb[(msgDatat3.length) - 1] + msgDatat3[(msgDatat3.length) - 1]);
        }
        if (b == '-') {
            msgDatat3_list = [];
            for (i = 0; i < msgDatat3.length; i++) {
                msgDatat3_list.push(nb[i] + msgDatat3[i]);
            }
        }
        return "[/3 " + lv3 +" ][" + t3 + "]\n" + msgDatat3_list.join("\n");
    }

    if (a == "all") {
        return "[/1 " + lv1 + " ][" + t1 + "]\n" + msgDatat1_list.join("\n") + "\n------------------\n[/2 " + lv2 + " ][" + t2 + "]\n" + msgDatat2_list.join("\n") + "\n------------------\n[/3 " + lv3 +" ][" + t3 + "]\n" + msgDatat3_list.join("\n");
    }
}