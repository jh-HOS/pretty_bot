function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (room == "메이플M 메르세데스 톡방") {
    if (msg.indexOf("!") == 0 && msg.indexOf("공지") != -1) {
      replier.reply(
        "오픈톡 입장시 공지 확인\n✔ 닉 양식: 닉네임/서버/길드/레벨\n✔ 거래글은 각 서버 거래방을 이용해주세요\n✔ 전 서버 톡방이기 때문에 아이템 가격문의는 답해드리기 어렵습니다\n\n각종 공략 자동응답 명령어\n☞  채팅창에 명령어를 쓰시면 봇이 링크 걸어줍니다\n\n모든 정보표 : !모정\n\n무과금 템셋팅 : !무과금템셋\n\n토드 공략 : (게시글삭제됨)\n\n메세 스킬 셋팅 : !메세스킬\n\n메세 원정대 공략글 : !메세원정\n\n메세 카여제 공략글 : !여제공략\n\n메세 카여제 영상(여우님 스팸님) : !카여참고\n\n메세 디버프 카여 영상 : !카여디벞영상\n\n메세 카오스 반반 영상 : !카반영상\n\n보스 장신구 가이드 : !보장\n\n소울옵션 : !소울\n\n\n이 외로 궁금하신 점은 질문하시면 친절한 유저분들께서 대답해주실거에요\n\n해당 공지 댓글에 링크가 있으니 봇 고장시 참고바랍니다."
      );
    }
    if (msg.indexOf("어서오세") != -1) {
      replier.reply(
        "오픈톡 입장시 공지 확인\n✔ 닉 양식: 닉네임/서버/길드/레벨\n✔ 거래글은 각 서버 거래방을 이용해주세요\n✔ 전 서버 톡방이기 때문에 아이템 가격문의는 답해드리기 어렵습니다"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("카여참고") != -1) {
      replier.reply(
        "✔여우님 영상\nhttps://www.youtube.com/watch?v=S8M5Xziyw9E&feature=youtu.be"
      );
      replier.reply(
        "✔스팸님 영상\nhttps://www.youtube.com/watch?v=S8M5Xziyw9E&feature=youtu.be"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("소울") != -1) {
      replier.reply(
        "✔소울옵션표\nhttps://cafe.naver.com/nexonmaplestorym/1172741"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("모정") != -1) {
      replier.reply(
        "✔모든정보표\nhttps://m.cafe.naver.com/nexonmaplestorym/1116356"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("무과금템셋") != -1) {
      replier.reply(
        "✔무과금템셋팅\nhttps://m.cafe.naver.com/nexonmaplestorym/1121319"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("메세스킬") != -1) {
      replier.reply("✔메세스킬\nhttps://m.blog.naver.com/ain0902/221560038557");
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("메세원정") != -1) {
      replier.reply(
        "✔메세원정대\nhttps://m.cafe.naver.com/nexonmaplestorym/1116464"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("여제공략") != -1) {
      replier.reply(
        "✔카오스 시그너스 패턴공략\nhttps://m.blog.naver.com/PostView.nhn?blogId=heja_&logNo=221432456112&proxyReferer=h"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("카반영상") != -1) {
      replier.reply(
        "✔카오스반반 영상\nhttps://m.youtube.com/watch?v=WL7lQnNyThc&t=47s"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("카반영상") != -1) {
      replier.reply(
        "✔카여제 디버프영상\nhttps://m.youtube.com/watch?v=I6u1Puvia3w&feature=youtu.be"
      );
    }
    if (msg.indexOf("분꼭") != -1 || msg.indexOf("용르") != -1) {
      replier.reply("(빠직)");
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("패턴모음") != -1) {
      replier.reply(
        "✔전체 원정 패턴 모음집\nhttps://cafe.naver.com/nexonmaplestorym/1514518\n!!!!움짤 많음 데이터주의"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("힐라") != -1) {
      replier.reply(
        "✔힐라 멀티 하드 공략 by LUCID, 크로아\nhttps://cafe.naver.com/nexonmaplestorym/1582102\n!!!!움짤 많음 데이터주의"
      );
    }
    if (msg.indexOf("!") == 0 && msg.indexOf("보장") != -1) {
      replier.reply(
        "✔보스장신구+군단장장신구 by 안덕덕네비\n🍕보스장신구🍕\n반지3(실블링,여제2)\n눈장식(하드핑크빈)\n목걸이(혼테일2종)\n얼굴장식(여제금얼장)\n웬투스뱃지(카오스자쿰)\n\n🍕가이드🍕\n\n🍕여제셋(선택)\n1)여제얼장,반지3,눈장,뱃지,목걸이유니크,카니발목걸이유니크(댐증1.5)\n2) 여제얼장,반지2,눈장,뱃지,목걸이2,네트금반지4강(댐증2.5)\n\n🍕블랙,디멘셋(고정)\n-반지3,목걸이2,눈장식,뱃지\n\n🍕군단장(3종 필수)\n*고귀한이피아반지\n*귀걸이(하드힐라)\n*포켓(카오스힐라)"
      );
    }
  }
}
