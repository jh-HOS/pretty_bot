global_flag = 0;
gb_30_val = 0;
gb_30_text = "";

gb_50_val = 0;
gb_50_text = "";

gb_text = " 분 명단 입니다. \n  초대자 없을 시 1번 초대자. \n";

function getStartInfo(data, num, name) {
    try{
        var data = "깅깅봇의 명단 작성을 시작합니다."
      global_flag = 1;
        return data;  //결과 반환
    } catch(e) {
        return null;
    }
}

function getEndInfo(data, num, name) {
    try{
        var data = "깅깅봇의 명단 작성 끝!!!"
      global_flag = 1;
        return data;  //결과 반환
    } catch(e) {
        return null;
    }
}

function getMemotInfo(data, num, name) {
    try{
      if(num == "30" && gb_30_val <= 10) {
         gb_30_val++;
         var data = "";
         data = num + gb_text;
         data += gb_30_text + gb_30_val + ". " + name;
         gb_30_text += gb_30_val + ". " + name + "\n";
      }

      else if(num == 50 && gb_50_val <= 10) {
         gb_50_val++;
         var data = num + gb_text;
         data += num + name;
         gb_50_text += "\n num . name";
      }
      return data;  //결과 반환
    } catch(e) {
        return null;
    }
}

function response(room, msg, sender, imageDB, replier) {
   msg = msg.trim();
   var cmd = msg.split(" ")[0];
   var num = msg.split(" ")[1];
   var name = msg.split(" ")[2];
   var data = msg.replace(cmd + " ", "");
   if(cmd == "/시작" && global_flag == 0) {
      var result = getStartInfo();
      if(result == null) {
         replier.reply("오류!! 오류!! 발생 진혁을 불러주세요.");
      } else {
         replier.reply(result);
      }
   }
   else if(cmd == "/신청" && global_flag == 1 && gb_30_val < 10) {
      var result = getMemotInfo(data, num, name);
      if(result == null) {
         replier.reply("다시 작성해! ex) /신청 (분) (이름)");
      } else {
         replier.reply(result);
      }
   }

   else if(cmd == "/마감" && global_flag == 1) {
      global_flag = 0;
      gb_30_val = 0;
      gb_30_text = "";

      gb_50_val = 0;
      gb_50_text = "";

      var result = getEndInfo();
      if(result == null) {
         replier.reply("오류!! 오류!! 발생 진혁을 불러주세요.");
      } else {
         replier.reply(result);
      }
   }
   else if(cmd == "/취소" && global_flag == 1) {
      global_flag = 0;
      gb_30_val = 0;
      gb_30_text = "";

      gb_50_val = 0;
      gb_50_text = "";

      var result = getEndInfo();
      if(result == null) {
         replier.reply("오류!! 오류!! 발생 진혁을 불러주세요.");
      } else {
         replier.reply(result);
      }
   }

}
