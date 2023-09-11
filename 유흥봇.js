var 벌췩 = [
  "불에 구워 노릇노릇 먹었습니다!!",
  "바삭하게 튀겨 먹었습니다!!",
  "시속 130km의 스포츠카로 치어버렸습니다!",
  "화염방사기로 시커멓게 태워버렸습니다!!",
  "짜장면 쏘기",
  "깡추기",
  "다리찢기하기",
  "틱톡깔기",
]; //성깔에 맞게 추가하세오

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (room == "🍓쁘 띠🍓") {
    if (msg.indexOf("/") == 0 && msg.indexOf("도움") != -1) {
      replier.reply(
        "각종 공략 자동응답 명령어\n\n모든 정보표 : /모정\n\n소울옵션 : /소울\n\nLUCID님 힐라 공략 : /힐라\n\n전체 원정대,루타, 군단장 패턴모음 : /패턴모음\n\n보스장신구 가이드 : /보장\n\n아주 복잡한 데미지 예상 : !대미지 ## 나오는 도움말 읽고 사용!!!\n\n혹시 뛰어들고픈 당신을 위해...  한강온도 측정 : /한강수온"
      );
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("끔살") != -1) {
      msg = msg.split(" ")[1];
      var 랜덤 = 벌췩[Math.floor(Math.random() * 벌췩.length)];
      replier.reply(sender + "님이 " + 대상 + "를(을)" + 랜덤);
    }

    if (msg.indexOf("/") == 0 && msg.indexOf("dps") != -1) {
      msg = msg.replace("dps", "");
      msg = msg.replace("/", "");
      msg = msg.replace(/ /gi, "");
      dpm = msg * 0.6;
      dpm = Math.round(dpm * 100) / 100.0;
      replier.reply("dpm = " + dpm + "억");
    }
    if (msg == "/한강수온") {
      parse = org.jsoup.Jsoup.connect("http://doami.dothome.co.kr/HanTemp.php")
        .get()
        .text();
      json = JSON.parse(parse);
      replier.reply(
        "현재 한강 수온은 " +
          json.temp +
          " 입니다.\n " +
          json.time +
          " 에 측정됨"
      );
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("모정") != -1) {
      replier.reply(
        "✔모든정보표\nhttps://m.cafe.naver.com/nexonmaplestorym/1116356"
      );
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("패턴모음") != -1) {
      replier.reply(
        "✔전체 원정 패턴 모음집\nhttps://cafe.naver.com/nexonmaplestorym/1514518\n!!!!움짤 많음 데이터주의"
      );
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("소울") != -1) {
      replier.reply(
        "✔소울옵션표\nhttps://cafe.naver.com/nexonmaplestorym/1172741"
      );
    }
    if (msg == "/배터리") {
      replier.reply(+Device.getBatteryLevel() + "% 입니다.");
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("힐라") != -1) {
      replier.reply(
        "✔힐라 멀티 하드 공략 by LUCID, 크로아\nhttps://cafe.naver.com/nexonmaplestorym/1582102\n!!!!움짤 많음 데이터주의"
      );
    }
    if (msg.indexOf("/") == 0 && msg.indexOf("보장") != -1) {
      replier.reply(
        "✔보스장신구+군단장장신구 by 안덕덕네비\n🍕보스장신구🍕\n반지3(실블링,여제2)\n눈장식(하드핑크빈)\n목걸이(혼테일2종)\n얼굴장식(여제금얼장)\n웬투스뱃지(카오스자쿰)\n\n🍕가이드🍕\n\n🍕여제셋(선택)\n1)여제얼장,반지3,눈장,뱃지,목걸이유니크,카니발목걸이유니크(댐증1.5)\n2) 여제얼장,반지2,눈장,뱃지,목걸이2,네트금반지4강(댐증2.5)\n\n🍕블랙,디멘셋(고정)\n-반지3,목걸이2,눈장식,뱃지\n\n🍕군단장(3종 필수)\n*고귀한이피아반지\n*귀걸이(하드힐라)\n*포켓(카오스힐라)"
      );
    }
    //if (msg.indexOf("/") == 0 && msg.includes("전체키알") != -1) {
    //replier.reply(
    //"븍븍 / 케이티 / 갱키드/ 봉뀨 / 지갑 / 청약 /  까르보부루닭 / 트페 / 퍼렁 / 부우순 / 진혁 / 삽존잘러 / 화붕 / 곽쑨 / 냐옹2 / 임육덕 / 동작구잡아라 / 꼬에라 / 허접 / 이쁜하늘이 / 연쓰 / 띠8 / 3센티 / 머스 / 긔랭 /  귀여운뚝배기 /  락꼬꾸 / 외데고르 / 루빔 / 오골매 / 잔디"
    //);
    // }
  }
}
