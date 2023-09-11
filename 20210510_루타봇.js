var msgDatat1 = [];
var msgDatat2 = [];
var msgDatat3 = [];
var nb = [
  "1.",
  "2.",
  "3.",
  "4.",
  "5.",
  "6.",
  "7.",
  "8.",
  "9.",
  "10.",
  "11.",
  "12.",
  "13.",
  "14.",
  "15.",
  "16.",
  "17.",
  "18.",
  "19.",
  "20.",
  "21.",
  "22.",
  "23.",
  "24.",
  "25.",
  "26.",
  "27.",
  "28.",
  "29.",
  "30.",
  "31.",
  "32.",
  "33.",
  "34.",
  "35.",
  "36.",
  "37.",
  "38.",
  "39.",
  "40.",
];
var Gdif = "";
var msgArray = [];

////// 시간 및 난이도 조정 ////
var t1 = "목요일"; // 1파티 시간
var t2 = "토요일"; // 2파티 시간
var t3 = "일요일"; // 3파티 시간
var lv1 = ""; //목파티 난이도
var lv2 = ""; //토파티 난이도
var lv3 = ""; //일파티 난이도

//////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
var msgDatat1_list = [];
var msgDatat2_list = [];
var msgDatat3_list = [];

var msg2 = "";
var time_n = "";

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  var com = "";
  if (room == "🍓쁘 띠 공 지 방🍓") {
    if (msg.indexOf("/루타도움") != -1) {
      replier.reply(
        "쁘띠 카루타 공지사항 6/1(월) \n * 매주 화요일~일요일 반반 블퀸 벨룸 피에르 통합신청 (봇사용) \n신청방법 : \n 1-카반반/블퀸(월) 2-카벨룸(목) 3-카피에르(일) \n (** 상황에 따라 요일은 변경될수있고 변경시 따로 공지해드립니다.) \n * 반반/블퀸경우 반반 22:00시 블퀸 22시20분 이런식으로 진행하겠습니다 \n\n 양식 : 본인닉/토2시가능여부/토3시가능여부/졸업까지 남은횟수 \n ex) /목 사 도.O.O.졸 신청 (카반반신청) \n     /목 사 도 O.O.졸. 2연트 신청 (몇 연트 가능한지도 작성)\n * 최종명단은 전날까지 담당자가 올려드릴예정입니다. 본인이 신청했을시 꼭 확인할것! \n * 파티 구성의 안정성을 위해 불가피한 인원조정이 있을 수 있습니다. \n * 모두가 즐겁게 카루타컨텐츠를 진행할 수 있게 많은 참여 및 협조 부탁드립니다."
      );
    }
    //// 시간 변경 ////
    if (msg.indexOf("/변경") == 0 && msg.indexOf("-") != -1) {
      msg = msg.replace(/ /gi, "");
      Gdif = msg.substring(3, msg.indexOf("-"));
      if (
        Gdif.indexOf("ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ") != -1 ||
        Gdif.indexOf("ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ") != -1 ||
        Gdif.indexOf("ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ") != -1 ) {
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
        } 
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
      }
    }
    /////// reset /////////
    if (msg.indexOf("/리셋") != -1) {
      if (msg.indexOf("가") != -1) {
        msgDatat1 = [];
        msgDatat1_list = [];
        t1 = "목요일";
        replier.reply("목욜 리셋완료");
      } else if (msg.indexOf("나") != -1) {
        msgDatat2 = [];
        msgDatat2_list = [];
        t2 = "토요일";
        replier.reply("토욜 리셋완료");
      } else if (msg.indexOf("다") != -1) {
        msgDatat3 = [];
        msgDatat3_list = [];
        t3 = "일요일";
        replier.reply("일욜 리셋완료");
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
        t1 = "목요일"; // 1파티 시간
        t2 = "토요일"; // 2파티 시간
        t3 = "일요일"; // 3파티 시간
        lv1 = ""; //목파티 난이도
        lv2 = ""; //토파티 난이도
        lv3 = ""; //일파티 난이도
        replier.reply("전체 리셋 완료!");
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

    if (msg.indexOf("/") == 0 && msg.indexOf("신청") != -1) {
      if (msg.indexOf("/목") != -1) {
        msgDatat1.push(msg_filter(msg));
        replier.reply(call_list(t1, "+"));
      } else if (msg.indexOf("/토") != -1) {
        msgDatat2.push(msg_filter(msg));
        replier.reply(call_list(t2, "+"));
      } else if (msg.indexOf("/일") != -1) {
        msgDatat3.push(msg_filter(msg));
        replier.reply(call_list(t3, "+"));
      }
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
      if (msg.indexOf("/목") != -1) {
        com = msgDatat1.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat1_list.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);
          msgDatat1.splice(msgDatat1.indexOf(msg_cancel(msg)), 1);

          replier.reply(call_list(t1, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (msg.indexOf("/토") != -1) {
        com = msgDatat2.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat2_list.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
          msgDatat2.splice(msgDatat2.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t2, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      } else if (msg.indexOf("/일") != -1) {
        com = msgDatat3.indexOf(msg_cancel(msg));
        if (com != -1) {
          msgDatat3_list.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
          msgDatat3.splice(msgDatat3.indexOf(msg_cancel(msg)), 1);
          replier.reply(call_list(t3, "-"));
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      }
    }
    if (msg.indexOf("/루타") == 0) {
      replier.reply(call_list("all"));
    }
    if (msg.indexOf("/목파티") == 0 ) {
      replier.reply(call_list("1파티"));
    }
    if (msg.indexOf("/토파티") == 0 ) {
      replier.reply(call_list("2파티"));
    }
    if (msg.indexOf("/일파티") == 0 ) {
      replier.reply(call_list("3파티"));
    }
    if (msg.indexOf("/마감") != -1) {
      if (msg.indexOf("1") != -1) {
        msgDatat1 = ["목요일 마감"];
        msgDatat1_list = ["목요일 마감"];
        replier.reply("목요일 마감되었습니다.");
      } else if (msg.indexOf("2") != -1) {
        msgDatat2 = ["토요일 마감"];
        msgDatat2_list = ["토요일 마감"];
        replier.reply("토요일 마감되었습니다.");
      } else if (msg.indexOf("3") != -1) {
        msgDatat3 = ["일요일 마감"];
        msgDatat3_list = ["일요일 마감"];
        replier.reply("일요일 마감되었습니다.");
      }
    }
  }
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

    return "[/목 " + lv1 + " ][" + t1 + "]\n" + msgDatat1_list.join("\n");
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
    return "[/토 " + lv2 + " ][" + t2 + "]\n" + msgDatat2_list.join("\n");
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
    return "[/일 " + lv3 + " ][" + t3 + "]\n" + msgDatat3_list.join("\n");
  }
  if (a == "all") {
    return (
      "[/목 " +
      lv1 +
      " ][" +
      t1 +
      "]\n" +
      msgDatat1_list.join("\n") +
      "\n------------------\n[/토 " +
      lv2 +
      " ][" +
      t2 +
      "]\n" +
      msgDatat2_list.join("\n") +
      "\n------------------\n[/일 " +
      lv3 +
      " ][" +
      t3 +
      "]\n" +
      msgDatat3_list.join("\n")
    );
  }
  if (a == "1파티") {
    return "[/목 " + lv1 + " ][" + t1 + "]\n" + msgDatat1_list.join("\n");
  }
  if (a == "2파티") {
    return "[/토 " + lv2 + " ][" + t2 + "]\n" + msgDatat2_list.join("\n");
  }
  if (a == "3파티") {
    return "[/일 " + lv3 + " ][" + t3 + "]\n" + msgDatat3_list.join("\n");
  }

}
function msg_filter(a) {
  var b = "";
  if (a.indexOf("/목") == 0) {
    b = a.replace("/목", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/토") == 0) {
    b = a.replace("/토", "");
    b = msg_filter2(b);
  } else if (a.indexOf("/일") == 0) {
    b = a.replace("/일", "");
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
  if (a.indexOf("/목") == 0) {
    b = a.replace("/목", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/토") == 0) {
    b = a.replace("/토", "");
    b = msg_cancel2(b);
  } else if (a.indexOf("/일") == 0) {
    b = a.replace("/일", "");
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