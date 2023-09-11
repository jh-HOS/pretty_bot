var msgDatat1 = [];
var msgDatat2 = [];
var msgDatat3 = [];
var msgDatat4 = [];
var msgDatat5 = [];
var msgDatat6 = [];

var nb = ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "0."];
var Gdif = "";
var msgArray = [];

////// 시간 및 난이도 조정 ////
var t1 = "길레 후"; // 1파티 시간
var t2 = 2130; 
var t3 = 2200; 
var t4 = 2230;
var t5 = 2300; 
var t6 = 2330; 

var lv1 = "카힐1"; //1파티 난이도
var lv2 = "매그1"; //2파티 난이도
var lv3 = "매그2"; //2파티 난이도
var lv4 = "카힐2";
var lv5 = "노아카1";
var lv6 = "하아카";

//////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
var msgDatat1_list = [];
var msgDatat2_list = [];
var msgDatat3_list = [];
var msgDatat4_list = [];
var msgDatat5_list = [];
var msgDatat6_list = [];

var msg2 = "";
var swit = false;
var time_n = "";


function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (room == "김재현") {
    if (msg.indexOf("^/\/시작/$") != -1) {
      swit = true;
      replier.reply(" 공지 어쩌구 ~~ ")
    }
    /// 시작 하고 나서
    msg_raw = msg_filter1(msg)
    
  }
}



function analyze(str) {
  switch (swit == true) {
    case /\/\d.*/gi.analyze(str): /// /숫자로 시작하는 경우
      msg_raw   
      if (msg.indexOf(/신청$/gm) != -1) {
        
      } else if (/취소$/gm) {

      }

      break;

    case /^\/끝$/gm.analyze(str):
      swit = false;

      break;

    case /^\/리셋\d$/gm.analyze(str):
    
      break;
      
    default:

      break;
  }
}

    var next_msg = ""|""


function msg_filter1(a){
    var b = "";
    b = a.replace(/ /gi, "");
    c = b.replace(/\s*$/gi, "")
    return c
}



function msg_filter(a) {
    var b = "";
    b = a.replace("/\/\d/gi", ""); /// /숫자 부분을 공백으로 치환
    c = b.replace(/ /gi, ""); /// 문자내의 모든 공백
    d = c.replace("신청", ""); /// 인식자 제거
    e = d.replace(/\s*$/gi, "");  /// 문자 뒷부분의 모든 공백 
    e = msg_blank(e)
    return e;
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
      );;
    }
    if (a == t5) {
      if (b == "+") {
        msgDatat5_list.push(
          nb[msgDatat5.length - 1] + msgDatat5[msgDatat5.length - 1]
        );
      }
      if (b == "-") {
        msgDatat5_list = [];
        for (i = 0; i < msgDatat5.length; i++) {
          msgDatat5_list.push(nb[i] + msgDatat5[i]);
        }
      }
      return (
        "[/5 " +
        lv5 +
        " ][" +
        t5 +
        "]" +
        "\n" +
        msgDatat5_list.join("\n")
      );;
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
          msgDatat6_list.push(nb[i] + msgDatat6_list[i]);
        }
      }
      return (
        "[/6 " +
        lv6 +
        " ][" +
        t6 +
        "]" +
        "\n" +
        msgDatat6_list.join("\n")
      );;
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
    } else if (Ti == t5) {
      return (
        "[/5 " +
        lv5 +
        " ][" +
        t5 +
        "]" +
        "\n" +
        msgDatat5_list.join("\n")
      );
    } else if (Ti == t6) {
      return (
        "[/6 " +
        lv6 +
        " ][" +
        t6 +
        "]" +
        "\n" +
        msgDatat6_list.join("\n")
      );
    } 
  }
  
  
  function msg_origin(a) {
    if (a == "all") {
      msgDatat1 = [];
      msgDatat2 = [];
      msgDatat3 = [];
      msgDatat4 = [];
      msgDatat5 = [];
      msgDatat6 = [];
      
      nb = ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "0."];
      Gdif = "";
      msgArray = [];
      
      ////// 시간 및 난이도 조정 ////
      t1 = "길레 후"; // 1파티 시간
      t2 = 2130; 
      t3 = 2200; 
      t4 = 2230;
      t5 = 2300; 
      t6 = 2330; 
      
      lv1 = "카힐1"; //1파티 난이도
      lv2 = "매그1"; //2파티 난이도
      lv3 = "매그2"; //2파티 난이도
      lv4 = "카힐2";
      lv5 = "노아카1";
      lv6 = "하아카";
      
      //////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
      msgDatat1_list = [];
      msgDatat2_list = [];
      msgDatat3_list = [];
      msgDatat4_list = [];
      msgDatat5_list = [];
      msgDatat6_list = [];
      
      msg2 = "";
      swit = false;
      time_n = "";
      return;
    }
  }