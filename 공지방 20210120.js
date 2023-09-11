var swit = false;

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  var com = "";
  if (room == "🍓쁘 띠 공 지 방🍓") {
    /////////// help //////////////
    if (msg.indexOf("/도움말") == 0) {
      replier.reply(
        "● 도움말\n☆원정 신청, 취소방법\n★/[N][닉네임][신청]을 입력\nEx) /N 닉네임 신청\nEx) /N 닉네임 취소\n-N:1~3\n(1:노아카-길레후 카힐라, 2:길레 후 하아카&카힐라, 3:하아카&카힐라 (00시), 4: 22:00 매그너스)\n-신청시 키알 조심\n-한번에 한명만 신청 가능\n(별)취소시 신청 닉네임과 동일해야됨!\n- 길레는 상시 모집"
      );
      replier.reply(
        "○ 명령어\n/도움말\n/목록 : 여제 목록 보기\n/길레 : 길레 목록 보기\n파티목록보기 : /1파티 (/파티번호+파티)"
      );
    }
    //////////  시작  ////////////
    if (swit == false && msg.indexOf("/시작") != -1) {
      msg_origin("all");
      swit = true;
      if (swit == true) {
        replier.reply(
          "🍓쁘띠 힐라 명단 시작🍓\n시간엄수! 불참•지각 노노!\n < 노말힐라 🍓 > \n- 격수 22셋 이상 \n-숍 DPM 무관(최대 2명)\n < 하드 힐라🍓 > \n- 파프 3셋 이상 \n- 풀돞 풀피버 이상\n- 숍 2명 필수\n원정관련 공지 필독!!"
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
            ".\n" +
            ".\n" +
            ".\n"
        );
      }
    }
    ///////////// 끝 /////////////
    if (swit == true && msg.indexOf("/끝") != -1) {
      msg_origin("all");
      swit = false;
      replier.reply("보스 모집을 마감합니다\n🍓수고하셨습니다🍓");
    }

    
    /////// reset /////////
    if (swit == true && msg.indexOf("/리셋") != -1) {
      if (msg.indexOf("1") != -1) {
        msgDatat1 = [];
        msgDatat1_list = [];
        t1 = 2045;
        lv1 = "노아카 & 길레 후 카힐라"; //1파티 난이도
        replier.reply("1팟 리셋완료!");
      } else if (msg.indexOf("2") != -1) {
        msgDatat2 = [];
        msgDatat2_list = [];
        t2 = '길레 후';
        lv2 = "하아카&카힐라"; //2파티 난이도
        replier.reply("2팟 리셋완료!");
      } else if (msg.indexOf("3") != -1) {
        msgDatat3 = [];
        msgDatat3_list = [];
        t3 = 0000;
        lv3 = "하아카&카힐라";
        replier.reply("3팟 리셋완료!");
      } else if (msg.indexOf("4") != -1) {
        msgDatat4 = [];
        msgDatat4_list = [];
        t4 = 2200;
        lv4 = "매그";
        replier.reply("4팟 리셋완료!");
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
      if (msgDatat1.length < 10 && msg.indexOf("/1") != -1) {
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
        replier.reply("3팟" + lv3 + " 마감입니다!");
        return;
      } else if (msgDatat4.length < 10 && msg.indexOf("/4") != -1) {
        msgDatat4.push(msg_filter(msg));
        replier.reply(call_list(t4, "+"));
      } else if (msgDatat4.length >= 10 && msg.indexOf("/4") != -1) {
        replier.reply("4팟" + lv3 + " 마감입니다!");
        return;
      }
    }

    if (msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
      if (swit == true && msg.indexOf("/1") != -1) {
        com = msgDatat1.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat1_list.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);
          msgDatat1.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);

          replier.reply(call_list(t1, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (swit == true && msg.indexOf("/2") != -1) {
        com = msgDatat2.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat2_list.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
          msgDatat2.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t2, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (swit == true && msg.indexOf("/3") != -1) {
        com = msgDatat3.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat3_list.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
          msgDatat3.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t3, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (swit == true && msg.indexOf("/4") != -1) {
        com = msgDatat4.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat4_list.splice(msgDatat4.indexOf(msg_cancel(msg)), 1);
          msgDatat4.splice(msgDatat4.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t4, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } 
    }
    if (swit == true && msg.indexOf("/목록") == 0) {
      replier.reply(
        "[/1 " +
        lv1 +
        " ][" +
        t1 +
        "]" +
        "\n" +
        msgDatat1_list.join("\n") +
        "\n\n" +
        "[/2 " +
        lv2 +
        " ][" +
        t2 +
        "]" +
        "\n" +
        msgDatat2_list.join("\n") +
        "\n\n" +
        "[/3 " +
        lv3 +
        " ][" +
        t3 +
        "]" +
        "\n" +
        msgDatat3_list.join("\n") +
        "\n\n" +
        "[/4 " +
        lv4 +
        " ][" +
        t4 +
        "]" +
        "\n" +
        msgDatat4_list.join("\n")
      );
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
  c = b.replace(/신청/gi, "");
  d = c.replace(/\s*$/gi, "");
  d = msg_blank(d);
  return d;
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
  } 
  return b;
}
function msg_cancel2(a) {
  var b = "";
  b = a.replace(/ /gi, "");
  b = b.replace(/취소/gi, "");
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
      "]" +
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
      "]" +
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
      "]" +
      "\n" +
      msgDatat3_list.join("\n")
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
    return (
      "[/4 " +
      lv4 +
      " ][" +
      t4 +
      "]" +
      "\n" +
      msgDatat4_list.join("\n")
    );
  }
}


function answer2(Ti) {
  if (Ti == t1) {
    return (
      "[/1 " +
      lv1 +
      " ][" +
      t1 +
      "]" +
      "\n" +
      msgDatat1_list.join("\n")
    );
  } else if (Ti == t2) {
    return (
      "[/2 " +
      lv2 +
      " ][" +
      t2 +
      "]" +
      "\n" +
      msgDatat2_list.join("\n")
    );
  } else if (Ti == t3) {
    return (
      "[/3 " +
      lv3 +
      " ][" +
      t3 +
      "]" +
      "\n" +
      msgDatat3_list.join("\n")
    );
  } else if (Ti == t4) {
    return (
      "[/4 " +
      lv4 +
      " ][" +
      t4 +
      "]" +
      "\n" +
      msgDatat4_list.join("\n")
    );
  } 
}


function msg_origin(a) {
  if (a == "all") {
    msgDatat1 = [];
    msgDatat2 = [];
    msgDatat3 = [];
    msgDatat4 = [];
    nb = ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "0."];
    Gdif = "";
    msgArray = [];
    
    ////// 시간 및 난이도 조정 ////
    t1 = 2045; // 1파티 시간
    t2 = "길레 후"; 
    t3 = "00:00"; 
    t4 = 2200; 
    lv1 = "노아카 & 길레 후 카힐라"; //1파티 난이도
    lv2 = "하아카&카힐라"; //2파티 난이도
    lv3 = "하아카&카힐라"; //3파티 난이도
    lv4 = "매그";

    
    //////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
    msgDatat1_list = [];
    msgDatat2_list = [];
    msgDatat3_list = [];
    msgDatat4_list = [];

    
    msg2 = "";
    time_n = "";
    return;
  }
}