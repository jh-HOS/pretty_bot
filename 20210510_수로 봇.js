var Race00 = [];
var Race20 = [];
var Race50 = [];
var msgArray = [];

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (room == "🍓쁘 띠 공 지 방🍓") {
    if (msg == "/수로공지") {
      replier.reply(
        "***수로 신청하신분 필독 ***\n\n - 주말 오후 7시-8시에만 진행하는 컨텐츠\n - 길드어빌리티 맥뎀 확장에 필수 = 길드 스펙업!! "
      );
    }
    //리셋//
    if (msg.indexOf("/리셋") == 0) {
      if (msg.indexOf("수로") != -1 || msg.indexOf("9") != -1) {
        msg_origin("수로");
        replier.reply("수로 리셋완료");
      }
      if (msg.indexOf("all") != -1) {
        msg_origin("수로");
        replier.reply("수로 리셋완료");
      }
    }
    ////오류방지///
    if (
      msg.indexOf("/") == 0 &&
      msg.indexOf("신청") != -1 &&
      msg.indexOf("취소") != -1
    ) {
      replier.reply("신청, 취소 둘중 하나만 합시다!");
      return;
    }
    if (
      msg.indexOf("/") == 0 &&
      msg.indexOf("\n") != -1 &&
      msg.indexOf("신청") != -1
    ) {
      replier.reply("한번에 한명만 신청가능합니다!! 줄 바꾸면 안돼요!");
      return;
    }
    //신청//
    if (msg.indexOf("/") == 0 && msg.indexOf("신청") != -1) {
      if (msg.indexOf("/9") != -1 || msg.indexOf("/수로") != -1){
        if (msg.indexOf("/900")!= -1 || msg.indexOf("/수로00") != -1) {
          Race00.push(msg_filter(msg));
        }
        if (msg.indexOf("/920")!= -1 || msg.indexOf("/수로20") != -1) {
          Race20.push(msg_filter(msg));
        }
        if (msg.indexOf("/950")!= -1 || msg.indexOf("/수로50") != -1) {
          Race50.push(msg_filter(msg));
        }
        replier.reply("[수로][명]\n" + "[00][" + Race00.length + "]\n" + Race00.join(" /") + "\n[20][" + Race20.length + "]\n" + Race20.join(" /")+ "\n[50][" + Race50.length + "]\n" + Race50.join(" /"));
      }
    }

    ////취소///
    if (msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
      if (msg.indexOf("/900")!= -1 || msg.indexOf("/수로00") != -1) {
        com1 = Race00.indexOf(msg_cancel(msg));
        if (com1 != -1 ) {
          Race00.splice(Race00.indexOf(msg_cancel(msg)), 1);
          replier.reply("[수로][명]\n" + "[00][" + Race00.length + "]\n" + Race00.join(" /") + "\n[20][" + Race20.length + "]\n" + Race20.join(" /")+ "\n[50][" + Race50.length + "]\n" + Race50.join(" /"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      }
      if (msg.indexOf("/920")!= -1 || msg.indexOf("/수로20") != -1) {
        com1 = Race20.indexOf(msg_cancel(msg));
        if (com1 != -1 ) {
          Race20.splice(Race20.indexOf(msg_cancel(msg)), 1);
          replier.reply("[수로][명]\n" + "[00][" + Race00.length + "]\n" + Race00.join(" /") + "\n[20][" + Race20.length + "]\n" + Race20.join(" /")+ "\n[50][" + Race50.length + "]\n" + Race50.join(" /"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      }
      if (msg.indexOf("/950")!= -1 || msg.indexOf("/수로50") != -1) {
        com1 = Race50.indexOf(msg_cancel(msg));
        if (com1 != -1 ) {
          Race50.splice(Race50.indexOf(msg_cancel(msg)), 1);
          replier.reply("[수로][명]\n" + "[00][" + Race00.length + "]\n" + Race00.join(" /") + "\n[20][" + Race20.length + "]\n" + Race20.join(" /")+ "\n[50][" + Race50.length + "]\n" + Race50.join(" /"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      }
    }

    //리스트//
    if (msg == "/수로") {
      replier.reply("[수로][명]\n" + "[00][" + Race00.length + "]\n" + Race00.join(" /") + "\n[20][" + Race20.length + "]\n" + Race20.join(" /")+ "\n[50][" + Race50.length + "]\n" + Race50.join(" /"));
    }
  }
}
function msg_blank(a) {
  var b = "";
  msgArray = a.split("");
  for (i = 0; i < msgArray.length; i++) {
    msgArray[i] = msgArray[i] + " ";
  }
  b = msgArray.join("");
  b = b.trim();
  return b;
}

function msg_filter(a) {
  var b = "";
  if (a.indexOf("/9") == 0) {
    if (a.indexOf("00")!= -1) {
      b = a.replace("00", "");
    }
    if (a.indexOf("20")!= -1) {
      b = a.replace("20", "");
    }
    if (a.indexOf("50")!= -1) {
      b = a.replace("50", "");
    }
    b = b.replace("/9", "");
  }
  if (a.indexOf("/수로") == 0) {
    if (a.indexOf("00")!= -1) {
      b = a.replace("00", "");
    }
    if (a.indexOf("20")!= -1) {
      b = a.replace("20", "");
    }
    if (a.indexOf("50")!= -1) {
      b = a.replace("50", "");
    }
    b = b.replace("/수로", "");
  }
  b = msg_filter2(b);
  return b;
}
function msg_filter2(a) {
  var b = "";
  b = a.replace(/ /gi, "");
  b = b.replace("신청", "");
  b = b.replace(/\s*$/gi, "");
  b = msg_blank(b);
  return b;
}
function msg_cancel(a) {
  var b = "";
  if (a.indexOf("/9") == 0) {
    if (a.indexOf("00")!= -1) {
      b = a.replace("00", "");
    }
    if (a.indexOf("20")!= -1) {
      b = a.replace("20", "");
    }
    if (a.indexOf("50")!= -1) {
      b = a.replace("50", "");
    }
    b = b.replace("/9", "");
  }
  if (a.indexOf("/수로") == 0) {
    if (a.indexOf("00")!= -1) {
      b = a.replace("00", "");
    }
    if (a.indexOf("20")!= -1) {
      b = a.replace("20", "");
    }
    if (a.indexOf("50")!= -1) {
      b = a.replace("50", "");
    }
    b = b.replace("/수로", "");
  }
  b = msg_cancel2(b);
  return b;
}
function msg_cancel2(a) {
  var b = "";
  b = a.replace(/ /gi, "");
  b = b.replace("취소", "");
  b = b.replace(/\s*$/gi, "");
  b = msg_blank(b);
  return b;
}

function msg_origin(a) {
  if (a == "수로") {
    Race00 = [];
    Race20 = [];
    Race50 = [];
    msgArray = [];
    return;
  }
}