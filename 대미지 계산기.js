var 피일 = [0, 0, 25, 0, 0, 25, 25, 0, 0, 0, 0, 0];
var 피맥 = [0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0];
var 스탯이름값 = [
  "직업",
  "공격력",
  "공증",
  "댐증",
  "보공",
  "치확",
  "치피",
  "최댐",
  "종댐",
  "피버",
  "스킬대미지",
  "적피감감소",
];
//0직업,1공격력,2공증,3댐증,4보공,5치확,6치피,7최댐,8종댐,9피버,10스킬대미지,11적피감감소
var 직업 = [
  ["데슬", "데몬 임팩트", 200, 100, 0, 20, 0],
  ["바이퍼", "주먹질", 400, 0, 15, 20, 40],
  ["비숍", "벤전스 엔젤레이", 230, 0, 0, 0, 0],
  ["섀도어", "암살", 285, 0, 20, 20, 20],
  ["제논", "저격", 300, 0, 0, 20, 20],
  ["팬텀", "얼티밋 드라이브", 235.9, 0, 15, 20, 0],
  ["플위", "오비탈 플레임", 260, 0, 20, -10, 20],
  ["메세", "나사빠진 모노보우건", 300, 0, 20, 20, 20],
  ["보마", "폭풍의시", 220, 0, 0, -20, 20],
  ["불독", "패럴라이즈", 180, 0, 0, 20, 0],
];
//0직업,1스킬,2스킬댐,3치확보정,4치피,5종댐,6보공
var 도핑리스트 = [
  ["기돞", 0, 30, 30, 30, 10, 10, 0, 0, 0, 0, 0],
  ["풀돞", 0, 50, 30, 50, 30, 30, 0, 0, 0, 0, 0],
  ["묵", 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ["요거트", 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ["탕윤", 0, 0, 20, 20, 20, 0, 0, 0, 0, 0, 0],
  ["용봉탕", 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0],
  ["잉어찜", 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0],
  ["신선과", 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0],
  ["꿀타래", 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0],
  ["보킬", 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0], //여기까지 도핑 이후부터는 버프
  ["돌아와", 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0], //에반
  ["데몬크라이", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10], //데몬
  ["메디", 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0], //썬콜불독
  ["사자왕성의가호", 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0], //반레온 보스 버프
  ["버닝리전", 0, 25.2, 7.2, 0, 0, 0, 0, 0, 0, 0, 0], //플위
  ["분노", 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0], //히어로
  ["어블", 0, 33, 0, 15, 0, 0, 0, 0, 0, 0, 0], //비숍
  ["만렙벞", 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0],
  ["와헌", 0, 14.7, 0, 0, 0, 0, 0, 0, 0, 0, 0], //와헌
  ["하이퍼몽키", 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ["일반몽키", 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0], //캐슈
  ["샤프", 0, 0, 15, 0, 0, 35, 0, 0, 0, 0, 0], //보마
  ["엘비쉬", 0, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0], //메세
  ["플립", 0, 15, 0, 0, 0, 15, 0, 0, 0, 0, 0], //섀도어
];
//0도핑버프,1공격력,2공증,3댐증,4보공,5치확,6치피,7최댐,8종댐,9피버,10스킬대미지,11적피감감소
var 블레싱하모니1 = [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0];
var 블레싱하모니5 = [0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0];
var 블레싱하모니10 = [0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0];
var 경계선 = "\r\n―――――――――――――――――――――――――――――――\r\n";
function 도핑(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (i == 0) {
      a[i] = a[i];
    } else {
      a[i] = a[i] + b[i];
    }
  }
  return a;
}

function 도핑체크(a) {
  var c = [];
  for (var i = 0; i < 도핑리스트.length; i++) {
    c.push("");
  }
  for (var i = 0; i < 도핑리스트.length; i++) {
    if (a.indexOf("풀돞") != -1) {
      if (a.indexOf(도핑리스트[i][0]) != -1 && 도핑리스트[i][0] != "기돞") {
        c[i] = 1;
      } else {
        c[i] = 0;
      }
    } else {
      if (a.indexOf(도핑리스트[i][0]) != -1) {
        c[i] = 1;
      } else {
        c[i] = 0;
      }
    }
  }
  return c;
}

function 도핑출력(a) {
  if (a.indexOf(1) != -1) {
    var m = "도핑과 파티버프로 입력한 스탯에 추가 계산될 것은 ";
    for (var i = 0; i < a.length; i++) {
      if (a[i] == 1) {
        m += 도핑리스트[i][0];
        if (i + 1 == a.length) {
        } else {
          m += ", ";
        }
      } else {
      }
    }
    m += "입니다.\r\n\r\n";
  } else {
    var m = "도핑과 파티버프를 입력하신 것이 없습니다.\r\n\r\n";
  }
  return m;
}

function 파싱(a) {
  var c = [, , , , , , , , , , , ,];
  //0직업,1공격력,2공증,3댐증,4보공,5치확,6치피,7최댐,8종댐,9피버,10스킬대미지,11적피감감소
  for (var i = 0; i < c.length; i++) {
    j = i + 1;
    if (i == 0) {
      c[i] = a.split("\n")[j].split(" : ")[1];
    } else if (i == 9) {
      c[i] = Number(a.split("\n")[j].split(" : ")[1]) + 50;
    } else {
      if (
        isNaN(Number(a.split("\n")[j].split(" : ")[1])) ||
        a.split("\n")[j].split(" : ")[1] == null ||
        a.split("\n")[i].split(" : ")[1] == undefined
      ) {
        if (i == 7) {
          c[i] = 9999999;
        } else if (i == 10) {
          c[i] = 100;
        } else {
          c[i] = 0;
        }
      } else {
        c[i] = Number(a.split("\n")[j].split(" : ")[1]);
      }
    }
  }
  return c;
}

function 대미지(a) {
  var c;
  c = parseInt(
    a[1] *
      (a[2] / 100 + a[10] / 100) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      ((140 + a[11]) / 140)
  );
  return c;
}

function 보스대미지(a) {
  var c;
  c = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      ((140 + a[11]) / 140)
  );
  return c;
}

function 치명타(a) {
  var c;
  c = parseInt(
    a[1] *
      (a[2] / 100 + a[10] / 100) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  );
  return c;
}

function 보스치명타(a) {
  var c;
  c = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  );
  return c;
}

function 기대값(a, b, c) {
  var d;
  var p = c;
  if (p >= 100) {
    p = 100;
  }
  d = parseInt((a * (100 - p)) / 100 + (b * p) / 100);
  return d;
}

function 범위(a, b) {
  var c;
  var k = parseInt(a * 1.05);
  var l = parseInt(a * 0.95);
  if (b[7] <= a * 1.05) {
    k = b[7];
  }
  if (b[7] <= a * 0.95) {
    l = b[7];
  }
  c = l + " ~ " + k;
  return c;
}

function 맥댐(a, b) {
  var c = a;
  if (b[7] <= c) {
    c = b[7];
  }
  return c;
}

function 효율(a) {
  var x = a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100); //공증보공
  var y = 1 + a[3] / 100; //댐증
  var z = 1.2 + a[6] / 100; //치피
  var u = 1 + a[8] / 100; //종댐
  var y3 = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + (a[3] + 10) / 100) *
      (1 + a[8] / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  ); //댐증
  var z3 = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      (1.2 + (a[6] + 10) / 100) *
      ((140 + a[11]) / 140)
  ); //치피
  var x3 = parseInt(
    a[1] *
      ((a[2] + 10) / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  ); //공증
  var x4 = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + (a[4] + 10) / 100)) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  ); //보공
  var u3 = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + a[3] / 100) *
      (1 + (a[8] + 10) / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  ); //종댐
  var 대미지공식 = parseInt(
    a[1] *
      (a[2] / 100 + (a[10] / 100) * (1 + a[4] / 100)) *
      (1 + a[3] / 100) *
      (1 + a[8] / 100) *
      (1.2 + a[6] / 100) *
      ((140 + a[11]) / 140)
  );
  var max = Math.max(x, y, z);
  var x2 = parseInt((x / max) * 10000) / 10000;
  var y2 = parseInt((y / max) * 10000) / 10000;
  var z2 = parseInt((z / max) * 10000) / 10000;
  var u2 = parseInt((u / max) * 10000) / 10000;
  var 공증효율 = parseInt((x3 / 대미지공식) * 10000 - 10000) / 100;
  var 보공효율 = parseInt((x4 / 대미지공식) * 10000 - 10000) / 100;
  var 댐증효율 = parseInt((y3 / 대미지공식) * 10000 - 10000) / 100;
  var 치피효율 = parseInt((z3 / 대미지공식) * 10000 - 10000) / 100;
  var 종댐효율 = parseInt((u3 / 대미지공식) * 10000 - 10000) / 100;
  var m = "\r\n★★★ 스탯 효율 계산 ★★★\r\n\r\n";
  m +=
    "현재 상황에서 공증보공, 댐증, 치피의 비율을 출력합니다. 가장 낮은 비율의 값에 투자를 하는 것이 유리합니다.\r\n";
  m +=
    "10% 상승시 총 대미지 증가율은 치확이나 최댐을 무시하고 각 스탯 10% 상승시 보스치명타시 대미지 상승률을 나타냅니다.\r\n";
  m +=
    "현재 스킬 대미지에서 보공을 1% 올리면 공증이 " +
    a[10] / 100 +
    "%증가하는 것과 같은 수치입니다.\r\n\r\n";
  m +=
    "공증보공 : " +
    x2 +
    "\r\n(공증 10% 상승시 총 대미지 증가율 : " +
    공증효율 +
    "%)\r\n(보공 10% 상승시 총 대미지 증가율 : " +
    보공효율 +
    "%)\r\n\r\n";
  m +=
    "댐증 : " +
    y2 +
    "\r\n(댐증 10% 상승시 총 대미지 증가율 : " +
    댐증효율 +
    "%)\r\n\r\n";
  m +=
    "치피 : " +
    z2 +
    "\r\n(치피 10% 상승시 총 대미지 증가율 : " +
    치피효율 +
    "%)\r\n\r\n";
  m +=
    "종댐 : " +
    u2 +
    "\r\n(종댐 10% 상승시 총 대미지 증가율 : " +
    종댐효율 +
    "%)\r\n\r\n";
  return m;
}

function 출력(a) {
  if (a[5] >= 100) {
    a[5] = 100;
  }
  var m = "일반몹 치명X : " + 대미지(a) + "\n";
  m += "예상범위 : " + 범위(대미지(a), a) + "\n\n";
  m += "일반몹 치명타 : " + 치명타(a) + "\n";
  m += "예상범위 : " + 범위(치명타(a), a) + "\n\n";
  m +=
    "★ 일반몹 기대 대미지 : " +
    기대값(맥댐(대미지(a), a), 맥댐(치명타(a), a), a[5]) +
    "\n\n";
  m += 경계선;
  m += "보스몹 치명X : " + 보스대미지(a) + "\n";
  m += "예상범위 : " + 범위(보스대미지(a), a) + "\n\n";
  m += "보스몹 치명타 : " + 보스치명타(a) + "\n";
  m += "예상범위 : " + 범위(보스치명타(a), a) + "\n\n";
  m +=
    "★ 보스몹 기대 대미지 : " +
    기대값(맥댐(보스대미지(a), a), 맥댐(보스치명타(a), a), a[5]) +
    "\n\n";
  m += 경계선;
  m += 효율(a);
  m += 경계선;
  return m;
}

function 출력피버(a) {
  var x = [, , , , , , , , , , , ,];
  var y = [, , , , , , , , , , , ,];
  x[0] = a[0];
  y[0] = a[0];
  for (var i = 1; i < a.length; i++) {
    x[i] = a[i] + 피일[i];
    y[i] = a[i] + 피맥[i];
  }
  if (x[5] >= 100) {
    x[5] = 100;
  }
  if (y[5] >= 100) {
    y[5] = 100;
  }
  if (x[9] >= 100) {
    x[9] = 100;
  }
  if (y[9] >= 100) {
    y[9] = 100;
  }
  var m =
    "다음은 보스몬스터에게 피버 도핑시 들어가는 예상 대미지입니다.\r\n\r\n";
  m += "일반피버 치명X : " + 보스대미지(x) + "\n";
  m += "예상범위 : " + 범위(보스대미지(x), x) + "\n\n";
  m += "일반피버 치명타 : " + 보스치명타(x) + "\n";
  m += "예상범위 : " + 범위(보스치명타(x), x) + "\n\n";
  m +=
    "★ 일반피버 기대 대미지 : " +
    기대값(맥댐(보스대미지(x), x), 맥댐(보스치명타(x), x), x[5]) +
    "\n\n";
  m += 경계선;
  m += 효율(x);
  m += 경계선;
  m += "맥스피버 치명X : " + 보스대미지(y) + "\n";
  m += "예상범위 : " + 범위(보스대미지(y), y) + "\n\n";
  m += "맥스피버 치명타 : " + 보스치명타(y) + "\n";
  m += "예상범위 : " + 범위(보스치명타(y), y) + "\n\n";
  m +=
    "★ 보스몹 기대 대미지 : " +
    기대값(맥댐(보스대미지(y), y), 맥댐(보스치명타(y), y), y[5]) +
    "\n\n";
  m += 경계선;
  m += 효율(y);
  m += 경계선;
  m +=
    "★ 피버 기대 대미지 : " +
    기대값(
      기대값(맥댐(보스대미지(x), x), 맥댐(보스치명타(x), x), x[5]),
      기대값(맥댐(보스대미지(y), y), 맥댐(보스치명타(y), y), y[5]),
      x[9]
    );
  m += 경계선;
  return m;
}

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  if (room == "🍓쁘 띠🍓" || room == "메이플M 메르세데스 톡방") {
    if (msg == "!대미지") {
      var help =
        "★ 대미지 계산기 사용 설명서\r\n\r\n★\r\n메이플M 대미지계산기 ver1.1\r\n★ 제작자 : 메이플스토리M 스카니아 프리연못 ★\r\n제가 만든 원정대 봇도 많이 이용해주시면 감사하겠습니다.\r\n\r\n !직업 : 현재 지원되는 직업 리스트를 부릅니다. 지원되지 않는 직업이라고 하더라도 계산은 가능합니다. 다만 스킬대미지를 필수로 입력하셔야 합니다.\r\n\r\n★ !도핑 : 지원되는 도핑아이템, 버프입니다. 옵션에 기입시 도핑과 버프가 추가되어서 계산됩니다. 본인 직업의 버프가 적용된 캐릭터 정보창이라면 그 버프는 별도로 기입하지 않으셔도 됩니다.\r\n\r\n아래 양식에 캐릭터 정보창에 있는 정보 대로 입력해주세요.\r\n\r\n지원되는 스킬이면 스킬대미지에 0을 입력해주세요.\r\n\r\n옵션에는 도핑, 버프 이름을 기입하시면 됩니다.";
      var Send = "!대미지\n";
      Send += "직업 : \n";
      Send += "공격력 : \n";
      Send += "공증 : \n";
      Send += "댐증 : \n";
      Send += "보공 : \n";
      Send += "치확 : \n";
      Send += "치피 : \n";
      Send += "최댐 : \n";
      Send += "종댐 : \n";
      Send += "피버확률증가 : \n";
      Send += "스킬대미지 : 0\n";
      Send += "적피감 감소 : 0\n";
      Send += "옵션 : 기돞,풀돞,탕윤";
      replier.reply(help);
      java.lang.Thread.sleep(500);
      replier.reply(Send);
    } else if (
      msg.split("\n")[0] == "!대미지" &&
      msg.split("\n").length <= 13
    ) {
      replier.reply("누락된 값이 있습니다. 양식을 다시 확인해주세요.");
    } else if (msg.split("\n")[0] == "!대미지") {
      var 기본 = 파싱(msg);
      var Send = "★" + sender + "님이 입력한 캐릭터 정보의 대미지 계산\n\n";
      var job = -1;
      for (var i = 0; i < 직업.length; i++) {
        if (직업[i].indexOf(기본[0]) != -1) {
          job = i;
          i = 직업.length;
        }
      }
      if (기본[0] == "비숍") {
        var 기본1 = new 파싱(msg);
        var 기본5 = new 파싱(msg);
        var 기본10 = new 파싱(msg);
      }
      var 체크 = 도핑체크(msg.split("\n")[13]);
      Send += 도핑출력(체크);
      for (var i = 0; i < 체크.length; i++) {
        if (체크[i] == 1) {
          도핑(기본, 도핑리스트[i]);
          if (기본[0] == "비숍") {
            도핑(기본1, 도핑리스트[i]);
            도핑(기본5, 도핑리스트[i]);
            도핑(기본10, 도핑리스트[i]);
          }
        } else {
        }
      }
      if (job != -1 && 기본[10] == 0) {
        기본[10] = 직업[job][2]; //스킬대미지
        기본[5] = 기본[5] + 직업[job][3]; //치확
        기본[6] = 기본[6] + 직업[job][4]; //치피
        기본[8] = 기본[8] + 직업[job][5]; //종댐
        기본[4] = 기본[4] + 직업[job][6]; //보공
        if (기본[0] == "비숍") {
          기본1[10] = 직업[job][2]; //스킬대미지
          기본5[10] = 직업[job][2]; //스킬대미지
          기본10[10] = 직업[job][2]; //스킬대미지
          Send += 직업[job][1] + "의 예상 대미지를 계산합니다.\n\n";
          Send +=
            "★ 비숍은 블레싱 하모니의 최종 대미지가 자동으로 추가되어 계산됩니다. 아래는 파티원 1인 기준입니다.\n\n";
          기본1 = 도핑(기본1, 블레싱하모니1);
          //0직업,1공격력,2공증,3댐증,4보공,5치확,6치피,7최댐,8종댐,9피버,10스킬대미지
          Send += 출력(기본1);
          Send += 출력피버(기본1);
          Send += "\r\n\r\n★★★ 5인파티 기준 ★★★\n\n";
          기본5 = 도핑(기본5, 블레싱하모니5);
          Send += 출력(기본5);
          Send += 출력피버(기본5);
          Send += "\r\n\r\n★★★ 10인파티 기준 ★★★\n\n";
          기본10 = 도핑(기본10, 블레싱하모니10);
          Send += 출력(기본10);
          Send += 출력피버(기본10);
        } else {
          Send += 직업[job][1] + "의 예상 대미지를 계산합니다.\n\n";
          Send += 출력(기본);
          Send += 출력피버(기본);
        }
      } else {
        if (기본[0] == "비숍") {
          Send +=
            "★ 비숍은 블레싱 하모니의 최종 대미지가 자동으로 추가되어 계산됩니다. 아래는 파티원 1인 기준입니다.\n\n";
          기본1 = 도핑(기본1, 블레싱하모니1);
          //0직업,1공격력,2공증,3댐증,4보공,5치확,6치피,7최댐,8종댐,9피버,10스킬대미지
          Send += 출력(기본1);
          Send += 출력피버(기본1);
          Send += "\r\n\r\n★★★ 5인파티 기준 ★★★\n\n";
          기본5 = 도핑(기본5, 블레싱하모니5);
          Send += 출력(기본5);
          Send += 출력피버(기본5);
          Send += "\r\n\r\n★★★ 10인파티 기준 ★★★\n\n";
          기본10 = 도핑(기본10, 블레싱하모니10);
          Send += 출력(기본10);
          Send += 출력피버(기본10);
        } else {
          Send += 출력(기본);
          Send += 출력피버(기본);
        }
      }
      replier.reply(Send);
    }
    if (msg == "!직업") {
      var Send =
        "현재 스킬대미지가 지원되는 직업은 아래와 같습니다. 직업만 입력해도 지원되는 스킬이 자동으로 입력됩니다. 지원되지 않는 스킬이나 직업군은 수동으로 스킬대미지를 입력해주시면 됩니다.\r\n\r\n";
      for (var i = 0; i < 직업.length; i++) {
        Send +=
          직업[i][0] +
          "의 " +
          직업[i][1] +
          "\r\n스킬대미지 : " +
          직업[i][2] +
          "\r\n치확보정 : " +
          직업[i][3] +
          "\r\n치명타피해 : " +
          직업[i][4] +
          "\r\n최종대미지 : " +
          직업[i][5] +
          "\r\n보스공격력 : " +
          직업[i][6];
        if (i + 1 == 직업.length) {
        } else {
          Send += "\r\n\r\n";
        }
      }
      replier.reply(Send);
    }

    if (msg == "!도핑") {
      var Send = "현재 지원되는 도핑, 직업버프 종류는 아래와 같습니다.\r\n\r\n";
      for (var i = 0; i < 도핑리스트.length; i++) {
        var j = i + 1;
        Send += j + ". " + 도핑리스트[i][0] + "\r\n";
        for (var k = 1; k < 도핑리스트[i].length; k++) {
          if (도핑리스트[i][k] > 0) {
            Send += 스탯이름값[k] + " : " + 도핑리스트[i][k] + "\r\n";
          }
        }
        //0직업,1공격력,2공증,3댐증,4보공,5치확,6치피,7최댐,8종댐,9피버,10스킬대미지,11적피감감소
        if (j == 도핑리스트.length) {
        } else {
          Send += "\r\n";
        }
      }
      replier.reply(Send);
    }
  }
}
