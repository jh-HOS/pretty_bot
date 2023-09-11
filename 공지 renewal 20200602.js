var msgDatat1 = [];
var msgDatat2 = [];
var msgDatat3 = [];
var msgDatat4 = [];
var msgData_invite = ["", "", "", ""]; ///초대자

var nb = ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "0."];
var Gdif = "";
var msgArray = [];

////// 시간 및 난이도 조정 ////
var t1 = 3; // 1파티 시간
var t2 = 10; // 2파티 시간
var t3 = 50; // 3파티 시간
var t4 = 57;

var lv1 = "하드"; //1파티 난이도
var lv2 = "노말"; //2파티 난이도
var lv3 = "카오스"; //3파티 난이도
var lv4 = "미정"; //4파티 난이도

//////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
var msgDatat1_list = [];
var msgDatat2_list = [];
var msgDatat3_list = [];
var msgDatat4_list = [];

var msg2 = "";
var swit = false;
var time_n = "";

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  var com = "";
  if (room == "🍓쁘 띠 공 지 방🍓") {
    replier.reply(msgDatat1);
    replier.reply(msgDatat1_list);
    /////////// help //////////////
    if (msg.indexOf("/도움말") == 0) {
      replier.reply(
        "● 도움말\n☆원정 신청, 취소방법\n★/[N][닉네임][신청]을 입력\nEx) /N 닉네임 신청\nEx) /N 닉네임 취소\n-N:1~4\n(1:하드, 2:노말, 3:카오스2, 6:미정 )\n-한번에 한명만 신청 가능\n(별)취소시 신청 닉네임과 동일해야됨!"
      );
      replier.reply(
        "○ 명령어\n/도움말\n/목록 : 여제 목록 보기\n/변경 A-B : A를 B로 변경(시간,난이도)\n파티목록보기 : /1파티 (/파티번호+파티)"
      );
    }
    //////////  시작  ////////////
    if (swit == false && msg.startsWith("/시작") != -1) {
      swit = true;
      if (swit == true) {
        replier.reply(
          "🍓쁘띠 원정 명단 시작🍓\n시간엄수! 불참•지각 노노!\n < 하드 여제🍓 > \n- 격수 DPM30억 이상 \n-숍 DPM 무관(최대 2명)\n-3번째 숍부터는 DPM20억 이상\n < 카오스 여제🍓 > \n- 병묵사/접보, 풀피버\n- DPM n 이상\n원정관련 공지 필독!!"
        );
        replier.reply(
          "[/1 " +
            lv1 +
            " ][" +
            t1 +
            "]\n" +
            msgDatat1_list.join("\n") +
            "\n------------------\n[/2 " +
            lv2 +
            " ][" +
            t2 +
            "]\n" +
            msgDatat2_list.join("\n") +
            "\n------------------\n[/3 " +
            lv3 +
            " ][" +
            t3 +
            "]\n" +
            msgDatat3_list.join("\n") +
            "\n------------------\n[/6 " +
            lv6 +
            " ][" +
            t6 +
            "]\n" +
            msgDatat6_list.join("\n")
        );
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
      msgDatat4 = [];
      msgDatat4_list = [];
      var msgData_invite = ["", "", "", ""]; ///초대자
      t1 = 3;
      t2 = 10;
      t3 = 50;
      t4 = 57;
      lv1 = "하드";
      lv2 = "노말";
      lv3 = "카오스";
      lv4 = "미정";
    }
    //// 변경 ////
    if (swit == true && msg.indexOf("/변경") == 0 && msg.indexOf("-") != -1) {
      msg = msg.replace(/ /gi, "");
      Gdif = msg.substring(3, msg.indexOf("-"));
      ///난이도변경////
      if (
        Gdif.indexOf("노말") != -1 ||
        Gdif.indexOf("하드") != -1 ||
        Gdif.indexOf("카오스") != -1 ||
        Gdif.indexOf("미정") != -1
      ) {
        if (Gdif === lv1) {
          lv1 = msg.substring(msg.indexOf("-") + 1, msg.length);
          lv1 = lv1.replace(/(^\s*)|(\s*$)/, "");
          replier.reply(call_list(t1));
        } else if (Gdif === lv2) {
          lv2 = msg.substring(msg.indexOf("-") + 1, msg.length);
          lv2 = lv2.replace(/(^\s*)|(\s*$)/, "");
          replier.reply(call_list(t2));
        } else if (Gdif === lv3) {
          lv3 = msg.substring(msg.indexOf("-") + 1, msg.length);
          lv3 = lv3.replace(/(^\s*)|(\s*$)/, "");
          replier.reply(call_list(t3));
        } else if (Gdif === lv4) {
          lv4 = msg.substring(msg.indexOf("-") + 1, msg.length);
          lv4 = lv4.replace(/(^\s*)|(\s*$)/, "");
          replier.reply(call_list(t4));
        } ////시간변경////
      } else if (msg.indexOf(t1) != -1 && t1.toString().length == Gdif.length) {
        t1 = msg.substring(msg.indexOf("-") + 1, msg.length);
        t1 = t1.replace(/(^\s*)|(\s*$)/, "");
        replier.reply(call_list(t1));
      } else if (msg.indexOf(t2) != -1 && t2.toString().length == Gdif.length) {
        t2 = msg.substring(msg.indexOf("-") + 1, msg.length);
        t2 = t2.replace(/(^\s*)|(\s*$)/, "");
        replier.reply(call_list(t2));
      } else if (msg.indexOf(t3) != -1 && t3.toString().length == Gdif.length) {
        t3 = msg.substring(msg.indexOf("-") + 1, msg.length);
        t3 = t3.replace(/(^\s*)|(\s*$)/, "");
        replier.reply(call_list(t3));
      } else if (msg.indexOf(t4) != -1 && t4.toString().length == Gdif.length) {
        t4 = msg.substring(msg.indexOf("-") + 1, msg.length);
        t4 = t4.replace(/(^\s*)|(\s*$)/, "");
        replier.reply(call_list(t4));
      }
    }
    /////// reset /////////
    if (msg.indexOf("/리셋") != -1) {
      if (msg.indexOf("1") != -1) {
        msgDatat1 = [];
        msgDatat1_list = [];
        msgData_invite[0] = "";
        t1 = 5;
        lv1 = "하드";
        replier.reply("1팟 리셋완료");
      } else if (msg.indexOf("2") != -1) {
        msgDatat2 = [];
        msgDatat2_list = [];
        msgData_invite[1] = "";
        t2 = 10;
        lv2 = "노말";
        replier.reply("2팟 리셋완료");
      } else if (msg.indexOf("3") != -1) {
        msgDatat3 = [];
        msgDatat3_list = [];
        msgData_invite[2] = "";
        t3 = 50;
        lv3 = "카오스";
        replier.reply("3팟 리셋완료");
      } else if (msg.indexOf("4") != -1) {
        msgDatat4 = [];
        msgDatat4_list = [];
        msgData_invite[3] = "";
        t4 = 57;
        lv4 = "미정";
        replier.reply("4팟 리셋완료");
      } else if (msg.indexOf("all") != -1) {
        msgDatat1 = [];
        msgDatat1_list = [];
        msgDatat2 = [];
        msgDatat2_list = [];
        msgDatat3 = [];
        msgDatat3_list = [];
        msgDatat4 = [];
        msgDatat4_list = [];
        msgData_invite = ["", "", "", ""]; ///초대자
        t1 = 3;
        t2 = 10;
        t3 = 50;
        t4 = 57;
        lv1 = "하드";
        lv2 = "노말";
        lv3 = "카오스";
        lv4 = "미정";
        replier.reply("여제리스트 전체 리셋 완료!");
      }
    }

    //// 오류 방지 ///
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

    /////////////// 신청 /////////////////////

    if (swit == true && msg.indexOf("/") == 0 && msg.indexOf("신청") != -1) {
      if (msg.indexOf("/") == 0 && msg.indexOf("초대자") != -1) {
        if (msg.indexOf("신청") != -1 && msg.indexOf(t1) != -1) {
          msgData_invite[0] = invite(msg, t1);
          replier.reply(answer2(t1));
        } else if (msg.indexOf("신청") != -1 && msg.indexOf(t2) != -1) {
          msgData_invite[1] = invite(msg, t2);
          replier.reply(answer2(t2));
        } else if (msg.indexOf("신청") != -1 && msg.indexOf(t3) != -1) {
          msgData_invite[2] = invite(msg, t3);
          replier.reply(answer2(t3));
        } else if (msg.indexOf("신청") != -1 && msg.indexOf(t6) != -1) {
          msgData_invite[3] = invite(msg, t6);
          replier.reply(answer2(t6));
        }
      } else if (msgDatat1.length < 10 && msg.indexOf("/1") != -1) {
        msgDatat1.push(msg_filter(msg));
        replier.reply(call_list(t1, "+"));
      } else if (msgDatat1.length >= 10 && msg.indexOf("/1") != -1) {
        replier.reply("1팟" + lv1 + " 마감입니다!");
        return;
      } else if (msgDatat2.length < 10 && msg.indexOf("/2") != -1) {
        msgDatat2.push(msg_filter(msg));
        replier.reply(call_list(t2, "+"));
      } else if (msgDatat2.length >= 10 && msg.indexOf("/2") != -1) {
        replier.reply("2팟" + lv2 + " 마감입니다!");
        return;
      } else if (msgDatat3.length < 10 && msg.indexOf("/3") != -1) {
        msgDatat3.push(msg_filter(msg));
        replier.reply(call_list(t3, "+"));
      } else if (msgDatat3.length >= 10 && msg.indexOf("/3") != -1) {
        replier.reply("3팟 " + lv3 + "  마감입니다!");
        return;
      } else if (msgDatat4.length < 10 && msg.indexOf("/4") != -1) {
        msgDatat6.push(msg_filter(msg));
        replier.reply(call_list(t4, "+"));
      } else if (msgDatat4.length >= 10 && msg.indexOf("/4") != -1) {
        replier.reply("4팟 " + lv4 + "  마감입니다!");
        return;
      }
    }
    if (swit == false && msg.indexOf("신청") == 0) {
      replier.reply("여제는 모집시간이 아닙니다");
    }
    if (swit == true && msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
      if (msg.indexOf("/") == 0 && msg.includes("초대자") != -1) {
        if (msg.indexOf("취소") != -1 && msg.indexOf(t1) != -1) {
          msgData_invite[0] = "";
          replier.reply(answer2(t1));
        } else if (msg.indexOf("취소") != -1 && msg.indexOf(t2) != -1) {
          msgData_invite[1] = "";
          replier.reply(answer2(t2));
        } else if (msg.indexOf("취소") != -1 && msg.indexOf(t3) != -1) {
          msgData_invite[2] = "";
          replier.reply(answer2(t3));
        } else if (msg.indexOf("취소") != -1 && msg.indexOf(t4) != -1) {
          msgData_invite[3] = "";
          replier.reply(answer2(t4));
        }
      } else if (msg.indexOf("/1") != -1) {
        com = msgDatat1.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat1_list.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);
          msgDatat1.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);

          replier.reply(call_list(t1, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (msg.indexOf("/2") != -1) {
        com = msgDatat2.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat2_list.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
          msgDatat2.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t2, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (msg.indexOf("/3") != -1) {
        com = msgDatat3.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat3_list.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
          msgDatat3.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t3, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (msg.indexOf("/4") != -1) {
        com = msgDatat6.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat6_list.splice(msgDatat6.indexOf(msg_cancel(msg)), 1);
          msgDatat6.splice(msgDatat6.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t6, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      }
    }

    if (swit == true && msg.indexOf("/목록") == 0) {
      replier.reply(call_list("all"));
    }
    if (swit == true && msg.indexOf("/1파티") == 0) {
      replier.reply(answer2(t1));
    }
    if (swit == true && msg.indexOf("/2파티") == 0) {
      replier.reply(answer2(t2));
    }
    if (swit == true && msg.indexOf("/3파티") == 0) {
      replier.reply(answer2(t3));
    }
    if (swit == true && msg.indexOf("/4파티") == 0) {
      replier.reply(answer2(t4));
    }
  }
}

function msg_filter(a) {
  var b = "";
  if (a.indexOf("/1") == 0) {
    b = a.replace("/1", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/2") == 0) {
    b = a.replace("/2", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/3") == 0) {
    b = a.replace("/3", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/4") == 0) {
    b = a.replace("/4", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/5") == 0) {
    b = a.replace("/5", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/6") == 0) {
    b = a.replace("/6", "");
    b = msg_filter2(b);
  }

  return b;
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
  if (a.indexOf("/1") == 0) {
    b = a.replace("/1", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/2") == 0) {
    b = a.replace("/2", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/3") == 0) {
    b = a.replace("/3", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/4") == 0) {
    b = a.replace("/4", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/5") == 0) {
    b = a.replace("/5", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/6") == 0) {
    b = a.replace("/6", "");
    b = msg_cancel2(b);
  }
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

function call_list(a, b) {
  if (a == t1) {
    if (b == "+") {
      msgDatat1_list.push(
        nb[msgDatat1.length - 1] + msgDatat1[msgDatat1.length - 1]
      );
    }
    if (b == "-") {
      msgDatat1_list = [];
      for (i = 0; i < msgDatat1.length; i++) {
        msgDatat1_list.push(nb[i] + msgDatat1[i]);
      }
    }

    return (
      "[/1 " +
      lv1 +
      " ][" +
      t1 +
      "]\n 초대자 : " +
      msgData_invite[0] +
      "\n" +
      msgDatat1_list.join("\n")
    );
  }
  if (a == t2) {
    if (b == "+") {
      msgDatat2_list.push(
        nb[msgDatat2.length - 1] + msgDatat2[msgDatat2.length - 1]
      );
    }
    if (b == "-") {
      msgDatat2_list = [];
      for (i = 0; i < msgDatat2.length; i++) {
        msgDatat2_list.push(nb[i] + msgDatat2[i]);
      }
    }
    return (
      "[/2 " +
      lv2 +
      " ][" +
      t2 +
      "]\n 초대자 : " +
      msgData_invite[1] +
      "\n" +
      msgDatat2_list.join("\n")
    );
  }
  if (a == t3) {
    if (b == "+") {
      msgDatat3_list.push(
        nb[msgDatat3.length - 1] + msgDatat3[msgDatat3.length - 1]
      );
    }
    if (b == "-") {
      msgDatat3_list = [];
      for (i = 0; i < msgDatat3.length; i++) {
        msgDatat3_list.push(nb[i] + msgDatat3[i]);
      }
    }
    return (
      "[/3 " +
      lv3 +
      " ][" +
      t3 +
      "]\n 초대자 : " +
      msgData_invite[2] +
      "\n" +
      msgDatat3_list.join("\n")
    );
  }
  if (a == t6) {
    if (b == "+") {
      msgDatat6_list.push(
        nb[msgDatat6.length - 1] + msgDatat6[msgDatat6.length - 1]
      );
    }
    if (b == "-") {
      msgDatat6_list = [];
      for (i = 0; i < msgDatat6.length; i++) {
        msgDatat6_list.push(nb[i] + msgDatat6[i]);
      }
    }
    return (
      "[/6 " +
      lv6 +
      " ][" +
      t6 +
      "]\n 초대자 : " +
      msgData_invite[3] +
      "\n" +
      "]\n" +
      msgDatat6_list.join("\n")
    );
  }
  if (a == t4) {
    if (b == "+") {
      msgDatat4_list.push(
        nb[msgDatat4.length - 1] + msgDatat4[msgDatat4.length - 1]
      );
    }
    if (b == "-") {
      msgDatat4_list = [];
      for (i = 0; i < msgDatat4.length; i++) {
        msgDatat4_list.push(nb[i] + msgDatat4[i]);
      }
    }
    return "[/4 반레온][" + t4 + "]\n" + msgDatat4_list.join("\n");
  }
  if (a == t5) {
    if (b == "+") {
      msgDatat5_list.push(msgDatat5[msgDatat5.length - 1]);
    }
    if (b == "-") {
      msgDatat5_list = [];
      for (i = 0; i < msgDatat5.length; i++) {
        msgDatat5_list.push(msgDatat5[i]);
      }
    }
    return (
      "[/5 길레][9시" + t5 + "][" + gn + "명]\n" + msgDatat5_list.join(" /")
    );
  }
  if (a == "all") {
    return (
      "시간엄수! 불참•지각 노노!\n < 하드 여제🍓 > \n- 격수 DPM30억 이상 \n-숍 DPM 무관(최대 2명)\n-3번째 숍부터는 DPM20억 이상\n\n < 카오스 여제🍓 > \n- 병묵사/접보, 풀피버\n- DPM n 이상\n원정관련 공지 필독!!\n\n" +
      "[/1 " +
      lv1 +
      " ][" +
      t1 +
      "]\n초대자 : " +
      msgData_invite[0] +
      "\n" +
      msgDatat1_list.join("\n") +
      "\n------------------\n[/2 " +
      lv2 +
      " ][" +
      t2 +
      "]\n초대자 : " +
      msgData_invite[1] +
      "\n" +
      msgDatat2_list.join("\n") +
      "\n------------------\n[/3 " +
      lv3 +
      " ][" +
      t3 +
      "]\n초대자 : " +
      msgData_invite[2] +
      "\n" +
      msgDatat3_list.join("\n") +
      "\n------------------\n[/6 " +
      lv6 +
      " ][" +
      t6 +
      "]\n초대자 : " +
      msgData_invite[3] +
      "\n" +
      msgDatat6_list.join("\n")
    );
  }
  if (a == "leon") {
    return "[/4 반레온][" + t4 + "]\n" + msgDatat4_list.join("\n");
  }
  if (a == "race") {
    return (
      "[/5 길레][9시" + t5 + "][" + gn + "명]\n" + msgDatat5_list.join(" /")
    );
  }
}

function invite(a, b) {
  msg2 = a.replace("/", "");
  msg2 = msg2.replace(b, "");
  msg2 = msg2.replace("신청", "");
  msg2 = msg2.replace("초대자", "");
  msg2 = msg2.replace(/^ /gi, ""); //앞공백제거
  msg2 = msg2.replace(/\s*$/gi, ""); //뒤공백제거
  msgArray = msg2.split("");
  for (i = 0; i < msgArray.length; i++) {
    msgArray[i] = msgArray[i] + " ";
  }
  msg3 = msgArray.join("");
  msg3 = msg3.trim();
  return msg3;
}

function answer2(Ti) {
  if (Ti == t1) {
    return (
      "[/1 " +
      lv1 +
      " ][" +
      t1 +
      "]\n 초대자 : " +
      msgData_invite[0] +
      "\n" +
      msgDatat1_list.join("\n")
    );
  } else if (Ti == t2) {
    return (
      "[/2 " +
      lv2 +
      " ][" +
      t2 +
      "]\n  초대자 : " +
      msgData_invite[1] +
      "\n" +
      msgDatat2_list.join("\n")
    );
  } else if (Ti == t3) {
    return (
      "[/3 " +
      lv3 +
      " ][" +
      t3 +
      "]\n 초대자 : " +
      msgData_invite[2] +
      "\n" +
      msgDatat3_list.join("\n")
    );
  } else if (Ti == t6) {
    return (
      "[/6 " +
      lv6 +
      " ][" +
      t6 +
      "]\n 초대자 : " +
      msgData_invite[3] +
      "\n" +
      msgDatat6_list.join("\n")
    );
  }
}
