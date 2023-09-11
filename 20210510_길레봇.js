var Race = [ "사 도",'머 스',"로 제", "해 냄","길 드","왕 초","요 르 구 트"];
var Wait = [];
var msgArray = [];

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (room == "🍓쁘 띠 공 지 방🍓") {
    if (msg == "/길레공지") {
      replier.reply(
        "***길레 명단 신청하신분 필독 ***\n\n(20.06.07추가)\n-앞으로 길드레이스 첫주 월요일/화요일 쉬고\n수요일부터 길드레이스 시작하겠습니다!\n월,화는 푹 쉬시고 수요일부터 달릴준비하세요!\n\n- 21시04분까지 접속 후 120채 알캠 천막(창고지기 옆 포탈)로 들어오셔서 숍버프 미리 받고 대기 부탁드립니다\n \n- 상대는 5분에 확인할 수 있으니 상대 확인되면 길드채팅으로 도핑 알려드릴테니 맞게 도핑부탁드립니다\n\n- 230초정도부터 버프시작 할테니 버프받고 입장 부탁드릴께요(에반,팔라,와헌)\n★★★★버프 받는법 추가★★★★\n1. 4분전에 숍벞 먼저 받기\n2-1. 유 밍<< 길레 불참시\n→와헌/팔라, 에반 따로 버프파티 있으니 와헌/팔라 버프받고, 에반버프 받고 ㅊㅊ 외치기 \n2-2. 유 밍<< 길레 참가시\n → 와헌/팔라 버프 받고 ㅊㅊ외치기\n    (에반은 안에 들어가서 버프사용)\n\n- 지정한 인원 외에는 길드스킬(스턴) 절대 쓰지마세요! (트 페, 탐 사, 진 혘, 사 도, 땡 글, 퍼 렁만 사용)\n\n- 제일중요한거! 0초 땡 시작하면 포탈없이 바로 포탑부십니다 포탈 찾지마세요!!!!!!\n\n- 만통/피버는 알아서 센스있게 다들 잘 쓰실거라 믿습니다 화이팅!\n\n- 명단신청은 *무조건 선착순*이고 5분에 상대 길드보고 인원조정하여 초대드리겠습니다\n\n-30초 이내로 남았을때 신청을 안했어도 초대가 오면 가능하면 수락하고 들어와서 도핑 후 참여부탁드립니다\n\n★초대 안온다 렉걸린다 얘기만 반복하지 말고\n 길레 시작 전에 메엠 완전히 껏다가 키거나\n 폰 재부팅 하고 들어오시면 좋을 것 같습니다~"
      );
    }
    //리셋//
    if (msg.indexOf("/리셋") == 0) {
      if (msg.indexOf("길레") != -1 || msg.indexOf("0") != -1) {
        msg_origin("길레");
        replier.reply("길레 리셋완료");
      }
      if (msg.indexOf("all") != -1) {
        msg_origin("길레");
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
      ///20명 전///
      if (Race.length < 20 && msg.indexOf("/0") != -1) {
        Race.push(msg_filter(msg));
        replier.reply("[길레][" + Race.length + "명]\n" + Race.join(" /"));
        ///다차고 대기자///
      } else if (Race.length >= 20 && msg.indexOf("/0") != -1) {
        Wait.push(msg_filter(msg));
        replier.reply("현재 길드레이스 마감입니다! 대기인원으로 전환합니다.");
        replier.reply("[대기명단][" + Wait.length + "명]\n" + Wait.join(" /"));
      } else if (Race.length < 20 && msg.indexOf("/길레") != -1) {
        Race.push(msg_filter(msg));
        replier.reply("[길레][" + Race.length + "명]\n" + Race.join(" /"));
        ///다차고 대기자///
      } else if (Race.length >= 20 && msg.indexOf("/길레") != -1) {
        Wait.push(msg_filter(msg));
        replier.reply("현재 길드레이스 마감입니다! 대기인원으로 전환합니다.");
        replier.reply("[대기명단][" + Wait.length + "명]\n" + Wait.join(" /"));
      }
    }
    ////취소///
    if (msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
      if (msg.indexOf("/0") != -1 || msg.indexOf("/길레") != -1) {
        com1 = Race.indexOf(msg_cancel(msg));
        com2 = Wait.indexOf(msg_cancel(msg));
        ///길레명단에있고 대기자 없을때///
        if (com1 != -1 && Wait.length == 0) {
          Race.splice(Race.indexOf(msg_cancel(msg)), 1);
          replier.reply("[길레][" + Race.length + "명]\n" + Race.join(" /"));
          ///길레명단에 있고 대기자 있을때//
        } else if (com1 != -1 && Wait.length > 0) {
          Race.splice(Race.indexOf(msg_cancel(msg)), 1);
          Race.push(Wait[0]);
          Wait.splice(Wait.indexOf(Wait[0]), 1);
          replier.reply("대기인원을 올려보냅니다!");
          replier.reply("[길레][" + Race.length + "명]\n" + Race.join(" /"));
          replier.reply(
            "[대기명단][" + Wait.length + "명]\n" + Wait.join(" /")
          );
          return;
          ///대기자일 경우에
        } else if (com2 != -1) {
          Wait.splice(Wait.indexOf(msg_cancel(msg)), 1);
          replier.reply(
            "[대기명단][" + Wait.length + "명]\n" + Wait.join(" /")
          );
          replier.reply("대기 취소되었습니다.");
        } else {
          replier.reply("명단과 동일하게 입력해주세요!!");
          return;
        }
      }
    }

    //리스트//
    if (msg == "/길레") {
      if (Wait.length == 0) {
        replier.reply("[길레][" + Race.length + "명]\n" + Race.join(" /"));
      } else {
        replier.reply("[길레][" + Race.length + "명]\n" + Race.join(" /"));
        replier.reply("[대기명단][" + Wait.length + "명]\n" + Wait.join(" /"));
      }
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
  if (a.indexOf("/0") == 0) {
    b = a.replace("/0", "");
    b = msg_filter2(b);
  }
  if (a.indexOf("/길레") == 0) {
    b = a.replace("/길레", "");
    b = msg_filter2(b);
  }
  return b;
}
function msg_filter2(a) {
  var b = "";
  b = a.replace(/ /gi, "");
  b = b.replace(/신청/gi, "");
  b = b.replace(/\s*$/gi, "");
  b = msg_blank(b);
  return b;
}
function msg_cancel(a) {
  var b = "";
  if (a.indexOf("/0") == 0) {
    b = a.replace("/0", "");
    b = msg_cancel2(b);
  }
  if (a.indexOf("/길레") == 0) {
    b = a.replace("/길레", "");
    b = msg_filter2(b);
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

function msg_origin(a) {
  if (a == "길레") {
    Race = [  "사 도",'머 스',"로 제", "해 냄","길 드","왕 초","요 르 구 트"];
    Wait = [];
    return;
  }
}