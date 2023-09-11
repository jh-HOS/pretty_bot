var msgDatat1 = ["", "", "", "", ""];
var msgDatat1_s = ["   ", "   ", "   ", "   ", "   "];

var msgDatat2 = ["", "", "", "", ""];
var msgDatat2_s = ["   ", "   ", "   ", "   ", "   "];

var msgData_invite = ["", "", "", "", ""]; ///초대자

var msgDatat3 = ["", "", "", "", ""];
var msgDatat3_s = ["   ", "   ", "   ", "   ", "   "];

var msgDatat4 = ["", "", "", "", ""];
var msgDatat4_s = ["   ", "   ", "   ", "   ", "   "];

var msgDatat5 = ["", "", "", "", ""];
var msgDatat5_s = ["   ", "   ", "   ", "   ", "   "];

var mD1 = 0, mD1_s = 0, mD2 = 0, mD2_s = 0, mD3 = 0, mD3_s = 0, mD4 = 0, mD4_s = 0; mD5 = 0, mD5_s = 0;
var t1list = 0, t2list = 0, t3list = 0, t4list = 0; t5list = 0;

//////관리자 ID ////
var adminID1 = '영광쓰/발렌/팬텀';
var adminID2 = '우천/발렌/팬텀';
var adminID3 = '강시/발렌/팬텀';
var adminID4 = '그림자/발렌/나워';
var adminID5 = '나항상그대곁에//보마200,비숍200';

var adminlist = ['영광쓰/발렌/팬텀', '우천/발렌/팬텀', '강시/발렌/팬텀', '그림자/발렌/나워', '나항상그대곁에/x/보마,비숍200', '엠생은즐메지/발렌/숍', '라쿤/바이퍼/발렌', '머스/쁘띠/섀도어','조립반/TEN/신궁', '악투/발렌/나워']

////// 원정시간 ////
var t1 = 10;
var t2 = 30;
var t3 = 40;
var t4 = 50;
var t5 = "";
//////////////////////// 무단 배포 및 수정 절대 금지 /////////////////////
var msg2 = "";
var addT = false;
var admin = ""; 
var swit = false;
var dps = 0;
var dpm = 0;
var dpm_t = 0;
var dpm_d = 0;
var dpmsg = 0;

function response(room, msg, sender, isGroupChat, replier, imageDB) {
    var x; // /번호 추출
    var y = ""; // ID 만 추출
    var z = ""; // ID 에 공백 추가
    /////관리자 설정 /////
   /* if (sender == adminID1 || sender == adminID2 || sender == adminID3 || sender == adminID4 || sender == adminID5) {
        admin = sender;
    }*/
    if (adminlist.indexOf(sender) != -1) {
        admin = sender;
    }
    //////////  시작  ////////////
    if (sender == admin && msg.indexOf("/start") != -1) {
        swit = true;
        if (swit == true) {
            replier.reply("카오스 여제 모집을 시작합니다!(굿)\n[모집시간]\n매타임 10분, 30분, 40분, 50분 + 20분\n[주의사항]\n(알약)도핑 : 기돞치백+피버 3장\n(최고)최소 dps : 8억 (dpm : 48억)\n(절규)비석주의 : 공반, 레드제네, 유폭은 스스로 피하세요!\n(별)비숍 : 메크로를 꼭 사용해주세요!\n\n(총) 지각, 미참 금지!!");
            //replier.reply("(꽃)[신청 방법]\n/시간 역할군 신청\nEx)/10 격수 신청\n(총)[취소 방법]\n/시간 역할군 취소\nEx)/10 격수 취소\n[초대자 넣는법]\n/시간 초대자 닉네임 신청(취소)\n\n(해)[역할군]\n격수, 팬텀, 리프, 메인, 신수, 보조\n(별)[주의사항!!]\n닉네임/길드/직업\n닉네임양식 꼭 지키기!!\n도움말 : /help\n명단 : /list\n비숍역할 : /숍");
            replier.reply("- 출발 30분 전까지 \n※팬텀, 리프 자리가 공석이면\n>> 격수분들 신청 가능합니다.\n- 리스트 작성 시간에는 잡담 조금만 줄여주세용~!");
        }
    }

    //////// 추가 시간 //////
   if (swit == 1 && sender == admin&& msg.indexOf("/") != -1 && msg.indexOf("추가") != -1) {
        msg2 = msg.replace("/", "");
        msg2 = msg2.replace("추가", "");
        msg2 = msg2.replace(/^ /gi, "");//앞공백제거    
        msg2 = msg2.replace(/\s*$/gi, "");//뒤공백제거
        t5 = msg2;
        replier.reply(t5+ "분 추가되었습니다.");
        addT = true;
    }

    /// 닉네임 검출 ///
    if (sender.indexOf("/")==-1 && msg.indexOf("신청")!=-1 ) {
        replier.reply("닉네임 양식을 지켜주세요!!\n>>> 닉네임/길드/직업\n형식이 아니면 인식이 안돼요~~");
        return;
    }
    //// 닉네임 작업 ///
    x = sender.indexOf("/");
    y = sender.substr(0, x);
    for (var i = 0; i < y.length; i++) {
        z += y.charAt(i) + ' ';
    }
    //// 오류 방지 ///
    if (swit == 1 && msg.indexOf("/") != -1 && msg.indexOf("신청") != -1 && msg.indexOf("취소") != -1) {
        replier.reply("신청?취소? 헷갈링게 둘중 하나만 합시다!!");
        return;
    }

            //////////// 초대자 ////////////////
    if (swit == true && msg.indexOf("/") == 0 && msg.indexOf("초대자") != -1) {
        if (sender.indexOf("분.꼭") != -1) {
            replier.reply("응 안돼요~돌아가요~");
            return 0;
        }
        if (msg.indexOf("신청") != -1 && msg.indexOf(t1) != -1) {
            msgData_invite[0] = invite(msg, t1);            
            replier.reply(answer2(t1));
        }
        else if (msg.indexOf("취소") != -1 && msg.indexOf(t1) != -1) {
            msgData_invite[0] = "";            
            replier.reply(answer2(t1));
        }
        else if (msg.indexOf("신청") != -1 && msg.indexOf(t2) != -1) {
            msgData_invite[1] = invite(msg, t2);
            replier.reply(answer2(t2));
        }
        else if (msg.indexOf("취소") != -1 && msg.indexOf(t2) != -1) {
            msgData_invite[1] = "";
            replier.reply(answer2(t2));
        }
        else if (msg.indexOf("신청") != -1 && msg.indexOf(t3) != -1 ) {
            msgData_invite[2] = invite(msg, t3);
            replier.reply(answer2(t3));
        }
        else if (msg.indexOf("취소") != -1 && msg.indexOf(t3) != -1 ) {
            msgData_invite[2] = "";
            replier.reply(answer2(t3));
        }
        else if (msg.indexOf("신청") != -1 && msg.indexOf(t4) != -1 ) {
            msgData_invite[3] = invite(msg, t4);
            replier.reply(answer2(t4));
        }
        else if (msg.indexOf("취소") != -1 && msg.indexOf(t4) != -1 ) {
            msgData_invite[3] = "";
            replier.reply(answer2(t4));
        }
        else if (msg.indexOf("신청") != -1 && msg.indexOf(t5) != -1) {
            msgData_invite[4] = invite(msg, t5);
            replier.reply(answer2(t5));
        }
        else if (msg.indexOf("취소") != -1 && msg.indexOf(t5) != -1) {
            msgData_invite[4] = "";
            replier.reply(answer2(t5));
        }
    }

    /////////// 신청 //////////
    if (swit == true && msg.indexOf("/") == 0 && msg.indexOf("신청") != -1) {

        if (msg.indexOf("격수") != -1) {
            if (msg.indexOf(t1) != -1) {
                if (mD1 >= 5) {
                    replier.reply("1팟 격수 자리 마감입니다");
                    return;
                }
                check_front(z, t1);
                replier.reply(answer(t1));
                mD1++;
            }
            else if (msg.indexOf(t2) != -1) {
                if (mD2 >= 5) {
                    replier.reply("2팟 격수 자리 마감입니다");
                    return;
                }
                check_front(z, t2);
                replier.reply(answer(t2));
                mD2++;
            }
            else if (msg.indexOf(t3) != -1) {
                if (mD3 >= 5) {
                    replier.reply("3팟 격수 자리 마감입니다");
                    return;
                }
                check_front(z, t3);
                replier.reply(answer(t3));
                mD3++;
            }
            else if (msg.indexOf(t4) != -1) {
                if (mD4 >= 5) {
                    replier.reply("4팟 격수 자리 마감입니다");
                    return;
                }
                check_front(z, t4);
                replier.reply(answer(t4));
                mD4++;
            }
            else if (msg.indexOf(t5) != -1) {
                if (mD5 >= 5) {
                    replier.reply("5팟 격수 자리 마감입니다");
                    return;
                }
                check_front(z, t5);
                replier.reply(answer(t5));
                mD5++;
            }
        }
        else if (msg.indexOf("팬텀") != -1) {
            if (msg.indexOf(t1) != -1 && msgDatat1_s[0] != "   ") {
                replier.reply("1팟 팬텀(공반) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t2) != -1 && msgDatat2_s[0] != "   ") {
                replier.reply("2팟 팬텀(공반) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t3) != -1 && msgDatat3_s[0] != "   ") {
                replier.reply("3팟 팬텀(공반) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t4) != -1 &&msgDatat4_s[0] != "   ") {
                replier.reply("4팟 팬텀(공반) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t5) != -1 &&msgDatat5_s[0] != "   ") {
                replier.reply("5팟 팬텀(공반) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t1) != -1) {
                msgDatat1_s[0] = z;
                replier.reply(answer(t1));
                mD1_s++;
            }
            else if (msg.indexOf(t2) != -1) {
                msgDatat2_s[0] = z;
                replier.reply(answer(t2));
                mD2_s++;
            }
            else if (msg.indexOf(t3) != -1) {
                msgDatat3_s[0] = z;
                replier.reply(answer(t3));
                mD3_s++;
            }
            else if (msg.indexOf(t4) != -1) {
                msgDatat4_s[0] = z;
                replier.reply(answer(t4));
                mD4_s++;
            }
            else if (msg.indexOf(t5) != -1 && addT == true) {
                msgDatat5_s[0] = z;
                replier.reply(answer(t5));
                mD5_s++;
            }
        }
        else if (msg.indexOf("신수") != -1) {

            if (msg.indexOf(t1) != -1 && msgDatat1_s[1] != "   ") {
                replier.reply("1팟 신수 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t2) != -1 && msgDatat2_s[1] != "   ") {
                replier.reply("2팟 신수 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t3) != -1 && msgDatat3_s[1] != "   ") {
                replier.reply("3팟 신수 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t4) != -1 && msgDatat4_s[1] != "   ") {
                replier.reply("4팟 신수 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t5) != -1 && msgDatat5_s[1] != "   ") {
                replier.reply("4팟 신수 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t1) != -1) {
                msgDatat1_s[1] = z;
                replier.reply(answer(t1));
                mD1_s++;
            }
            else if (msg.indexOf(t2) != -1) {
                msgDatat2_s[1] = z;
                replier.reply(answer(t2));
                mD2_s++;
            }
            else if (msg.indexOf(t3) != -1) {
                msgDatat3_s[1] = z;
                replier.reply(answer(t3));
                mD3_s++;
            }
            else if (msg.indexOf(t4) != -1) {
                msgDatat4_s[1] = z;
                replier.reply(answer(t4));
                mD4_s++;
            }
            else if (msg.indexOf(t5) != -1 && addT == true) {
                msgDatat5_s[1] = z;
                replier.reply(answer(t5));
                mD5_s++;
            }
        }
        else if (msg.indexOf("리프") != -1) {

            if (msg.indexOf(t1) != -1 && msgDatat1_s[2] != "   ") {
                replier.reply("1팟 리프/숍 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t2) != -1 && msgDatat2_s[2] != "   ") {
                replier.reply("2팟 리프/숍 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t3) != -1 && msgDatat3_s[2] != "   ") {
                replier.reply("3팟 리프/숍 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t4) != -1 && msgDatat4_s[2] != "   ") {
                replier.reply("4팟 리프/숍 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t5) != -1 && msgDatat5_s[2] != "   ") {
                replier.reply("5팟 리프/숍 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t1) != -1) {
                msgDatat1_s[2] = z;
                replier.reply(answer(t1));
                mD1_s++;
            }
            else if (msg.indexOf(t2) != -1) {
                msgDatat2_s[2] = z;
                replier.reply(answer(t2));
                mD2_s++;
            }
            else if (msg.indexOf(t3) != -1) {
                msgDatat3_s[2] = z;
                replier.reply(answer(t3));
                mD3_s++;
            }
            else if (msg.indexOf(t4) != -1 ) {
                msgDatat4_s[2] = z;
                replier.reply(answer(t4));
                mD4_s++;
            }
            else if (msg.indexOf(t5) != -1 && addT == true) {
                msgDatat5_s[2] = z;
                replier.reply(answer(t5));
                mD5_s++;
            }
        }
        else if (msg.indexOf("메인") != -1) {
            if (msg.indexOf(t1) != -1 && msgDatat1_s[3] != "   ") {
                replier.reply("1팟 메인(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t2) != -1 && msgDatat2_s[3] != "   ") {
                replier.reply("2팟 메인(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t3) != -1 && msgDatat3_s[3] != "   ") {
                replier.reply("3팟 메인(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t4) != -1 && msgDatat4_s[3] != "   ") {
                replier.reply("4팟 메인(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t5) != -1 && msgDatat5_s[3] != "   ") {
                replier.reply("5팟 메인(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t1) != -1) {
                msgDatat1_s[3] = z;
                replier.reply(answer(t1));
                mD1_s++;
            }
            else if (msg.indexOf(t2) != -1) {
                msgDatat2_s[3] = z;
                replier.reply(answer(t2));
                mD2_s++;
            }
            else if (msg.indexOf(t3) != -1) {
                msgDatat3_s[3] = z;
                replier.reply(answer(t3));
                mD3_s++;
            }
            else if (msg.indexOf(t4) != -1) {
                msgDatat4_s[3] = z;
                replier.reply(answer(t4));
                mD4_s++;
            }
            else if (msg.indexOf(t5) != -1 && addT == true) {
                msgDatat5_s[3] = z;
                replier.reply(answer(t5));
                mD5_s++;
            }
        }
        else if (msg.indexOf("보조") != -1) {

            if (msg.indexOf(t1) != -1 && msgDatat1_s[4] != "   ") {
                replier.reply("1팟 보조(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t2) != -1 && msgDatat2_s[4] != "   ") {
                replier.reply("2팟 보조(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t3) != -1 && msgDatat3_s[4] != "   ") {
                replier.reply("3팟 보조(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t4) != -1 && msgDatat4_s[4] != "   ") {
                replier.reply("4팟 보조(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t5) != -1 && msgDatat5_s[4] != "   ") {
                replier.reply("5팟 보조(숍) 자리 마감입니다.");
                return;
            }
            else if (msg.indexOf(t1) != -1) {
                msgDatat1_s[4] = z;
                replier.reply(answer(t1));
                mD1_s++;
            }
            else if (msg.indexOf(t2) != -1) {
                msgDatat2_s[4] = z;
                replier.reply(answer(t2));
                mD2_s++;
            }
            else if (msg.indexOf(t3) != -1) {
                msgDatat3_s[4] = z;
                replier.reply(answer(t3));
                mD3_s++;
            }
            else if (msg.indexOf(t4) != -1) {
                msgDatat4_s[4] = z;
                replier.reply(answer(t4));
                mD4_s++;
            }
            else if (msg.indexOf(t5) != -1 && addT == true) {
                msgDatat5_s[4] = z;
                replier.reply(answer(t5));
                mD5_s++;
            }
        }
    }

    /////////////////// 취소 //////////////////////////
    else if (swit == true && msg.indexOf("/") == 0 && msg.indexOf("취소") != -1) {
        if (msg.indexOf("격수") != -1) {
            if (msg.indexOf(t1) != -1) {
                if (mD1 <= 0) {
                    return;
                }
                cancel(z, t1);
                t1list = 0;
                mD1--;                
                replier.reply(answer(t1));
            }
            else if (msg.indexOf(t2) != -1) {
                if (mD2 <= 0) {
                    return;
                }
                cancel(z, t2);
                t2list = 0;
                mD2--;                
                replier.reply(answer(t2));
            }
            else if (msg.indexOf(t3) != -1) {
                if (mD3 <= 0) {
                    return;
                }
                cancel(z, t3);
                t3list = 0;
                mD3--;
                replier.reply(answer(t3));
            }
            else if (msg.indexOf(t4) != -1) {
                if (mD4 <= 0) {
                    return;
                }
                cancel(z, t4);
                t4list = 0;
                mD4--;
                replier.reply(answer(t4));
            }
            else if (msg.indexOf(t5) != -1) {
                if (mD5 <= 0) {
                    return;
                }
                cancel(z, t5);
                t5list = 0;
                mD5--;
                replier.reply(answer(t5));
            }
        }
        else if (msg.indexOf("팬텀") != -1) {
            if (msg.indexOf(t1) != -1) {
                mD1_s--;
                t1list = 0;
                msgDatat1_s[0] = "   ";
                replier.reply(answer(t1));
            }
            else if (msg.indexOf(t2) != -1) {
                mD2_s--;
                t2list = 0;
                msgDatat2_s[0] = "   ";
                replier.reply(answer(t2));
            }
            else if (msg.indexOf(t3) != -1) {
                mD3_s--;
                t3list = 0;
                msgDatat3_s[0] = "   ";
                replier.reply(answer(t3));
            }
            else if (msg.indexOf(t4) != -1) {
                mD4_s--;
                t4list = 0;
                msgDatat4_s[0] = "   ";
                replier.reply(answer(t4));
            }
            else if (msg.indexOf(t5) != -1) {
                mD5_s--;
                t5list = 0;
                msgDatat5_s[0] = "   ";
                replier.reply(answer(t5));
            }
        }
        else if (msg.indexOf("신수") != -1) {
            if (msg.indexOf(t1) != -1) {
                mD1_s--;
                t1list = 0;
                msgDatat1_s[1] = "   ";
                replier.reply(answer(t1));
            }
            else if (msg.indexOf(t2) != -1) {
                mD2_s--;
                t2list = 0;
                msgDatat2_s[1] = "   ";
                replier.reply(answer(t2));
            }
            else if (msg.indexOf(t3) != -1) {
                mD3_s--;
                t3list = 0;
                msgDatat3_s[1] = "   ";
                replier.reply(answer(t3));
            }
            else if (msg.indexOf(t4) != -1) {
                mD4_s--;
                t4list = 0;
                msgDatat4_s[1] = "   ";
                replier.reply(answer(t4));
            }
            else if (msg.indexOf(t5) != -1) {
                mD5_s--;
                t5list = 0;
                msgDatat5_s[1] = "   ";
                replier.reply(answer(t5));
            }
        }
        else if (msg.indexOf("리프") != -1) {
            if (msg.indexOf(t1) != -1) {
                mD1_s--;
                t1list = 0;
                msgDatat1_s[2] = "   ";
                replier.reply(answer(t1));
            }
            else if (msg.indexOf(t2) != -1) {
                mD2_s--;
                t2list = 0;
                msgDatat2_s[2] = "   ";
                replier.reply(answer(t2));
            }
            else if (msg.indexOf(t3) != -1) {
                mD3_s--;
                t3list = 0;
                msgDatat3_s[2] = "   ";
                replier.reply(answer(t3));
            }
            else if (msg.indexOf(t4) != -1) {
                mD4_s--;
                t4list = 0;
                msgDatat4_s[2] = "   ";
                replier.reply(answer(t4));
            }
            else if (msg.indexOf(t5) != -1) {
                mD5_s--;
                t5list = 0;
                msgDatat5_s[2] = "   ";
                replier.reply(answer(t5));
            }
        }
        else if (msg.indexOf("메인") != -1) {
            if (msg.indexOf(t1) != -1) {
                mD1_s--;
                t1list = 0;
                msgDatat1_s[3] = "   ";
                replier.reply(answer(t1));
            }
            else if (msg.indexOf(t2) != -1) {
                mD2_s--;
                t2list = 0;
                msgDatat2_s[3] = "   ";
                replier.reply(answer(t2));
            }
            else if (msg.indexOf(t3) != -1) {
                mD3_s--;
                t3list = 0;
                msgDatat3_s[3] = "   ";
                replier.reply(answer(t3));
            }
            else if (msg.indexOf(t4) != -1) {
                mD4_s--;
                t4list = 0;
                msgDatat4_s[3] = "   ";
                replier.reply(answer(t4));
            }
            else if (msg.indexOf(t5) != -1) {
                mD5_s--;
                t5list = 0;
                msgDatat5_s[3] = "   ";
                replier.reply(answer(t5));
            }
        }
        else if (msg.indexOf("보조") != -1) {
            if (msg.indexOf(t1) != -1) {
                mD1_s--;
                t1list = 0;
                msgDatat1_s[4] = "   ";
                replier.reply(answer(t1));
            }
            else if (msg.indexOf(t2) != -1) {
                mD2_s--;
                t2list = 0;
                msgDatat2_s[4] = "   ";
                replier.reply(answer(t2));
            }
            else if (msg.indexOf(t3) != -1) {
                mD3_s--;
                t3list = 0;
                msgDatat3_s[4] = "   ";
                replier.reply(answer(t3));
            }
            else if (msg.indexOf(t4) != -1) {
                mD4_s--;
                t4list = 0;
                msgDatat4_s[4] = "   ";
                replier.reply(answer(t4));
            }
            else if (msg.indexOf(t5) != -1) {
                mD5_s--;
                t5list = 0;
                msgDatat5_s[4] = "   ";
                replier.reply(answer(t5));
            }
        }
    }
    ///// 각 파티 호출 /////
    else if (swit == true && msg.indexOf("/1파티") == 0) {
        replier.reply(answer2(t1));
    }
    else if (swit == true && msg.indexOf("/2파티") == 0) {
        replier.reply(answer2(t2));
    }
    else if (swit == true && msg.indexOf("/3파티") == 0) {
        replier.reply(answer2(t3));
    }
    else if (swit == true && msg.indexOf("/4파티") == 0) {
        replier.reply(answer2(t4));
    }
    else if (swit == true && msg.indexOf("/5파티") == 0 && addT == true) {
        replier.reply(answer2(t5));
    }

        ////// list ///////
    else if (swit == true && msg.indexOf("/list") == 0) {
        replier.reply(answer(t1));
        replier.reply(answer(t2));
        replier.reply(answer(t3));
        replier.reply(answer(t4));
        
        if (addT == true) {
            replier.reply(answer(t5));
        }
        replier.reply("- 출발 30분 전 까지 \n팬텀, 리프 자리가 공석이면\n>> 격수로 대체 가능합니다.");
    }
        ////// reset ///////
    else if (swit == true && sender == admin && msg.indexOf("/reset")!=-1) {
        if (msg.indexOf(t1) != -1) {
            msgDatat1 = ["", "", "", "", ""];
            msgDatat1_s = ["   ", "   ", "   ", "   ", "   "];
            msgData_invite[0] = "";
            mD1 = 0, mD1_s = 0, t1list = 0;
            replier.reply(t1 + "분 리셋 완료");
        }
        else if (msg.indexOf(t2) != -1) {
            msgDatat2 = ["", "", "", "", ""];
            msgDatat2_s = ["   ", "   ", "   ", "   ", "   "];
            msgData_invite[1] = "";
            mD2 = 0, mD2_s = 0, t2list = 0;
            replier.reply(t2 + "분 리셋 완료");
        }
        else if (msg.indexOf(t3) != -1) {
            msgDatat3 = ["", "", "", "", ""];
            msgDatat3_s = ["   ", "   ", "   ", "   ", "   "];
            msgData_invite[2] = "";
            mD3 = 0, mD3_s = 0, t3list = 0;
            replier.reply(t3 + "분 리셋 완료");            
        }
        else if (msg.indexOf(t4) != -1) {
            msgDatat4 = ["", "", "", "", ""];
            msgDatat4_s = ["   ", "   ", "   ", "   ", "   "];
            msgData_invite[3] = "";
            mD4 = 0, mD4_s = 0, t4list = 0;
            replier.reply(t4 + "분 리셋 완료");
        }
        else if (msg.indexOf(t5) != -1) {
            msgDatat5 = ["", "", "", "", ""];
            msgDatat5_s = ["   ", "   ", "   ", "   ", "   "];
            msgData_invite[4] = "";
            mD5 = 0, mD5_s = 0, t5list = 0;
            replier.reply(t5 + "분 리셋 완료");
            addT = false;
        }
    }
    else if (sender.indexOf("IDOL") != -1 && msg.indexOf("충성") != -1 || sender.indexOf("아이돌") != -1 && msg.indexOf("충성") != -1) {
        replier.reply("전입을 명 받았게 이요! 이에 신고할 게 이요!!");
    }
    else if (sender == adminID2 && msg.indexOf("바보") != -1) {
        replier.reply("적당히 바보짓해야지..");
    }
        ////// help /////
    else if (msg.indexOf("/help")!= -1) {
        replier.reply("(꽃)[신청 방법]\n/시간 역할군 신청\nEx)/10 격수 신청\n(총)[취소 방법]\n/시간 역할군 취소\nEx)/10 격수 취소\n[초대자 넣는법]\n/시간 초대자 닉네임 신청(취소)\n\n(해)[역할군]\n격수, 팬텀, 리프, 메인, 신수, 보조, 초대자\n(별)[주의사항!!]\n닉네임/길드/직업\n닉네임양식 꼭 지키기!!\n도움말 : /help\n명단 : /list\n비숍역할 : /숍");
        replier.reply("[Dpm 계산기 이용법]\n/dps 숫자 : Dps→Dpm 환산\n/dpm 총데미지%시간(초) : 총딜을 Dpm으로 환산\nEx)3000딜, 3분30초(210초)\n/dpm 3000%210");
    }
///////////////     숍 역할        ////////////////
    else if (msg.indexOf("/숍")!= -1) {
        replier.reply("- 메인 숍 역할\n ●1차 디버프 담당\n     (돼지, 토네이도, 유혹)\n ●1차 리저 담당\n# 오더 및 매크로에 집중!!\n\n- 보조 숍 역할\n ● 유폭 담당 \n ● 2차 리저 담당 \n # 메인 숍 매크로 및 오더에 집중!!\n\n- 써드 숍 역할\n ● 유혹(오즈) 담당\n ● 3차 리저 담당\n # 메인 및 보조 숍 매크로 집중! \n\n ★ 여제 연속 디벞 시 \n   Ex) 돼지>회오리>유폭 : 센스것    \n  유폭 풀어주기!\n (돼지:메인>회오리:보조>유폭:써드) \n\n- Tip\n  (야옹) 매크로 사용 생활화!!\n    1. 디벞 / 디펠 쿨 \n    2. 리저 쿨 / 20초 이상  \n    3. 리저 온 / 대기 \n    4. 리저완료 \n    5. 데카사용 \n  (야옹) 버프는 리저 사용한 숍이!!\n    -> 리저 사용 후 버프(어블, 심, 도어) 사용\n  (야옹) 숍 사망 시 데카 사용!!\n\nps. 자세한 가이드 라인은 공지 참고");
    }
        ////// 끝 ///////
    else if (swit == true && sender == admin && msg.indexOf("/end") != -1) {
        swit = false;
        replier.reply("모집을 마감합니다 모두 수고하셨습니다!!\n(굿)초대자분들 수고하셨슴다!!\n미참 인원&도핑 의심되는 인원은 제보해주세요!");
        msgDatat1 = ["", "", "", "", ""];
        msgDatat1_s = ["   ", "   ", "   ", "   ", "   "];
        msgDatat2 = ["", "", "", "", ""];
        msgDatat2_s = ["   ", "   ", "   ", "   ", "   "];
        msgDatat3 = ["", "", "", "", ""];
        msgDatat3_s = ["   ", "   ", "   ", "   ", "   "];
        msgData_invite = ["", "", "", "",""];
        msgDatat4 = ["", "", "", "", ""];
        msgDatat4_s = ["   ", "   ", "   ", "   ", "   "];
        msgDatat5 = ["", "", "", "", ""];
        msgDatat5_s = ["   ", "   ", "   ", "   ", "   "];
        mD1 = 0, mD1_s = 0, mD2 = 0, mD2_s = 0, mD3 = 0, mD3_s = 0, mD4 = 0, mD4_s = 0; mD5 = 0, mD5_s = 0;
        t1list = 0, t2list = 0, t3list = 0, t4list = 0; t5list = 0;
        addT = false;
        return;
    }    

    /////dpm 측정기 /////////
    if (msg.indexOf("/dps") != -1) {
        dps = msg.replace("/dps", "");        
        dps = dps.replace(/^ /gi, "");//앞공백제거    
        dps = dps.replace(/\s*$/gi, "");//뒤공백제거
        dps = dps * 0.6;
        replier.reply("Dpm=" + dps.toFixed(2)+"억");
    }
    if (msg.indexOf("/dpm") == 0 &&msg.indexOf("%")!=-1) {
        dpm = msg.replace("/dpm", "");
        dpm_d = dpm.indexOf("%");
        dpm = dpm.replace(/^ /gi, "");//앞공백제거    
        dpm = dpm.replace(/\s*$/gi, "");//뒤공백제거
        dpmsg = dpm;

        dpm_t = dpm.substring(dpm_d);
        dpm = dpm.substring(0, (dpm_d - 1));
        dpm = (dpm / dpm_t) * 60 / 100000000;
        dpm.toString();
        replier.reply("총 데미지:" + dpmsg.substring(0, (dpm_d - 1)) + " >>> \ndpm : " + dpm.toFixed(2)+"억");
    }    
}
////리스트 호출 ///
function answer(Ti) {
    if (Ti == t1) {
        for (i = 0; i < 5; i++) {
            if (msgDatat1[i] == "")
                return ("<1파티>\n" + t1 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[0] + " / 3분 전 친추\n\n1." + msgDatat1[0] + "\n2." + msgDatat1[1] + "\n3." + msgDatat1[2] + "\n4." + msgDatat1[3] + "\n5." + msgDatat1[4] + "\n6." + msgDatat1_s[0] + "/ 팬텀(공반) \n7." + msgDatat1_s[1] + "/ 신수\n8." + msgDatat1_s[2] + "/ 리프(숍)\n9." + msgDatat1_s[3] + "/ 메인\n0." + msgDatat1_s[4] + "/ 보조");

            else if (msgDatat1_s[i] == "   ") {
                return ("<1파티>\n" + t1 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[0] + " / 3분 전 친추\n\n1." + msgDatat1[0] + "\n2." + msgDatat1[1] + "\n3." + msgDatat1[2] + "\n4." + msgDatat1[3] + "\n5." + msgDatat1[4] + "\n6." + msgDatat1_s[0] + "/ 팬텀(공반) \n7." + msgDatat1_s[1] + "/ 신수\n8." + msgDatat1_s[2] + "/ 리프(숍)\n9." + msgDatat1_s[3] + "/ 메인\n0." + msgDatat1_s[4] + "/ 보조");
            }
        }
        if (mD1 >= 4 && mD1_s >= 4) {
            if (t1list == 0) {
                t1list++;
                return ("<1파티>\n" + t1 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[0] + " / 3분 전 친추\n\n1." + msgDatat1[0] + "\n2." + msgDatat1[1] + "\n3." + msgDatat1[2] + "\n4." + msgDatat1[3] + "\n5." + msgDatat1[4] + "\n6." + msgDatat1_s[0] + "/ 팬텀(공반) \n7." + msgDatat1_s[1] + "/ 신수\n8." + msgDatat1_s[2] + "/ 리프(숍)\n9." + msgDatat1_s[3] + "/ 메인\n0." + msgDatat1_s[4] + "/ 보조");
            }
            return ("1파티 마감입니다. 1파티 리스트를 보시려면 '/1파티'");
        }
    }
    else if (Ti == t2) {
        for (i = 0; i < 5; i++) {
            if (msgDatat2[i] == "")
                return ("<2파티>\n" + t2 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[1] + " / 3분 전 친추\n\n1." + msgDatat2[0] + "\n2." + msgDatat2[1] + "\n3." + msgDatat2[2] + "\n4." + msgDatat2[3] + "\n5." + msgDatat2[4] + "\n6." + msgDatat2_s[0] + "/ 팬텀(공반) \n7." + msgDatat2_s[1] + "/ 신수\n8." + msgDatat2_s[2] + "/ 리프(숍)\n9." + msgDatat2_s[3] + "/ 메인\n0." + msgDatat2_s[4] + "/ 보조");

            else if (msgDatat2_s[i] == "   ") {
                return ("<2파티>\n" + t2 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[1] + " / 3분 전 친추\n\n1." + msgDatat2[0] + "\n2." + msgDatat2[1] + "\n3." + msgDatat2[2] + "\n4." + msgDatat2[3] + "\n5." + msgDatat2[4] + "\n6." + msgDatat2_s[0] + "/ 팬텀(공반) \n7." + msgDatat2_s[1] + "/ 신수\n8." + msgDatat2_s[2] + "/ 리프(숍)\n9." + msgDatat2_s[3] + "/ 메인\n0." + msgDatat2_s[4] + "/ 보조");
            }
        }
        if (mD2 >= 4 && mD2_s >= 4) {
            if (t2list == 0) {
                t2list++;
                return ("<2파티>\n" + t2 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[1] + " / 3분 전 친추\n\n1." + msgDatat2[0] + "\n2." + msgDatat2[1] + "\n3." + msgDatat2[2] + "\n4." + msgDatat2[3] + "\n5." + msgDatat2[4] + "\n6." + msgDatat2_s[0] + "/ 팬텀(공반) \n7." + msgDatat2_s[1] + "/ 신수\n8." + msgDatat2_s[2] + "/ 리프(숍)\n9." + msgDatat2_s[3] + "/ 메인\n0." + msgDatat2_s[4] + "/ 보조");
            }
            return ("2파티 마감입니다. 2파티 리스트를 보시려면 '/2파티'");
        }
    }
    else if (Ti == t3) {
        for (i = 0; i < 5; i++) {
            if (msgDatat3[i] == "")
                return ("<3파티>\n" + t3 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[2] + " / 3분 전 친추\n\n1." + msgDatat3[0] + "\n2." + msgDatat3[1] + "\n3." + msgDatat3[2] + "\n4." + msgDatat3[3] + "\n5." + msgDatat3[4] + "\n6." + msgDatat3_s[0] + "/ 팬텀(공반) \n7." + msgDatat3_s[1] + "/ 신수\n8." + msgDatat3_s[2] + "/ 리프(숍)\n9." + msgDatat3_s[3] + "/ 메인\n0." + msgDatat3_s[4] + "/ 보조");
            else if (msgDatat3_s[i] == "   ") {
                return ("<3파티>\n" + t3 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[2] + " / 3분 전 친추\n\n1." + msgDatat3[0] + "\n2." + msgDatat3[1] + "\n3." + msgDatat3[2] + "\n4." + msgDatat3[3] + "\n5." + msgDatat3[4] + "\n6." + msgDatat3_s[0] + "/ 팬텀(공반) \n7." + msgDatat3_s[1] + "/ 신수\n8." + msgDatat3_s[2] + "/ 리프(숍)\n9." + msgDatat3_s[3] + "/ 메인\n0." + msgDatat3_s[4] + "/ 보조");
            }
        }
        if (mD3 >= 4 && mD3_s >= 4) {
            if (t3list == 0) {
                t3list++;
                return ("<3파티>\n" + t3 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[2] + " / 3분 전 친추\n\n1." + msgDatat3[0] + "\n2." + msgDatat3[1] + "\n3." + msgDatat3[2] + "\n4." + msgDatat3[3] + "\n5." + msgDatat3[4] + "\n6." + msgDatat3_s[0] + "/ 팬텀(공반) \n7." + msgDatat3_s[1] + "/ 신수\n8." + msgDatat3_s[2] + "/ 리프(숍)\n9." + msgDatat3_s[3] + "/ 메인\n0." + msgDatat3_s[4] + "/ 보조");
            }
            return ("3파티 마감입니다. 3파티 리스트를 보시려면 '/3파티'");
        }
    }
    else if (Ti == t4) {
        for (i = 0; i < 5; i++) {
            if (msgDatat4[i] == "")
                return ("<4파티>\n" + t4 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[3] + " / 3분 전 친추\n\n1." + msgDatat4[0] + "\n2." + msgDatat4[1] + "\n3." + msgDatat4[2] + "\n4." + msgDatat4[3] + "\n5." + msgDatat4[4] + "\n6." + msgDatat4_s[0] + "/ 팬텀(공반) \n7." + msgDatat4_s[1] + "/ 신수\n8." + msgDatat4_s[2] + "/ 리프(숍)\n9." + msgDatat4_s[3] + "/ 메인\n0." + msgDatat4_s[4] + "/ 보조");

            else if (msgDatat4_s[i] == "   ") {
                return ("<4파티>\n" + t4 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[3] + " / 3분 전 친추\n\n1." + msgDatat4[0] + "\n2." + msgDatat4[1] + "\n3." + msgDatat4[2] + "\n4." + msgDatat4[3] + "\n5." + msgDatat4[4] + "\n6." + msgDatat4_s[0] + "/ 팬텀(공반) \n7." + msgDatat4_s[1] + "/ 신수\n8." + msgDatat4_s[2] + "/ 리프(숍)\n9." + msgDatat4_s[3] + "/ 메인\n0." + msgDatat4_s[4] + "/ 보조");
            }
        }
        if (mD4 >= 4 && mD4_s >= 4) {
            if (t4list == 0) {
                t4list++;
                return ("<4파티>\n" + t4 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[3] + " / 3분 전 친추\n\n1." + msgDatat4[0] + "\n2." + msgDatat4[1] + "\n3." + msgDatat4[2] + "\n4." + msgDatat4[3] + "\n5." + msgDatat4[4] + "\n6." + msgDatat4_s[0] + "/ 팬텀(공반) \n7." + msgDatat4_s[1] + "/ 신수\n8." + msgDatat4_s[2] + "/ 리프(숍)\n9." + msgDatat4_s[3] + "/ 메인\n0." + msgDatat4_s[4] + "/ 보조");
            }
            return ("4파티 마감입니다. 4파티 리스트를 보시려면 '/4파티'");
        }
    }

    else if (Ti == t5 && addT == true) {
        for (i = 0; i < 5; i++) {
            if (msgDatat5[i] == "")
                return ("<5파티>\n" + t5 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[4] + " / 3분 전 친추\n\n1." + msgDatat5[0] + "\n2." + msgDatat5[1] + "\n3." + msgDatat5[2] + "\n4." + msgDatat5[3] + "\n5." + msgDatat5[4] + "\n6." + msgDatat5_s[0] + "/ 팬텀(공반) \n7." + msgDatat5_s[1] + "/ 신수\n8." + msgDatat5_s[2] + "/ 리프(숍)\n9." + msgDatat5_s[3] + "/ 메인\n0." + msgDatat5_s[4] + "/ 보조");

            else if (msgDatat5_s[i] == "   ") {
                return ("<5파티>\n" + t5 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[4] + " / 3분 전 친추\n\n1." + msgDatat5[0] + "\n2." + msgDatat5[1] + "\n3." + msgDatat5[2] + "\n4." + msgDatat5[3] + "\n5." + msgDatat5[4] + "\n6." + msgDatat5_s[0] + "/ 팬텀(공반) \n7." + msgDatat5_s[1] + "/ 신수\n8." + msgDatat5_s[2] + "/ 리프(숍)\n9." + msgDatat5_s[3] + "/ 메인\n0." + msgDatat5_s[4] + "/ 보조");
            }
        }
        if (mD5 >= 4 && mD5_s >= 4) {
            if (t5list == 0) {
                t5list++;
                return ("<5파티>\n" + t5 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[4] + " / 3분 전 친추\n\n1." + msgDatat5[0] + "\n2." + msgDatat5[1] + "\n3." + msgDatat5[2] + "\n4." + msgDatat5[3] + "\n5." + msgDatat5[4] + "\n6." + msgDatat5_s[0] + "/ 팬텀(공반) \n7." + msgDatat5_s[1] + "/ 신수\n8." + msgDatat5_s[2] + "/ 리프(숍)\n9." + msgDatat5_s[3] + "/ 메인\n0." + msgDatat5_s[4] + "/ 보조");
            }
            return ("5파티 마감입니다. 5파티 리스트를 보시려면 '/5파티'");
        }
    }

}

/////리스트 호출2 ////
function answer2(Ti) {
    if (Ti == t1) {
        return ("<1파티>\n" + t1 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[0] + " / 3분 전 친추\n\n1." + msgDatat1[0] + "\n2." + msgDatat1[1] + "\n3." + msgDatat1[2] + "\n4." + msgDatat1[3] + "\n5." + msgDatat1[4] + "\n6." + msgDatat1_s[0] + "/ 팬텀(공반) \n7." + msgDatat1_s[1] + "/ 신수\n8." + msgDatat1_s[2] + "/ 리프(숍)\n9." + msgDatat1_s[3] + "/ 메인\n0." + msgDatat1_s[4] + "/ 보조");
    }
    else if (Ti == t2) {
        return ("<2파티>\n" + t2 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[1] + " / 3분 전 친추\n\n1." + msgDatat2[0] + "\n2." + msgDatat2[1] + "\n3." + msgDatat2[2] + "\n4." + msgDatat2[3] + "\n5." + msgDatat2[4] + "\n6." + msgDatat2_s[0] + "/ 팬텀(공반) \n7." + msgDatat2_s[1] + "/ 신수\n8." + msgDatat2_s[2] + "/ 리프(숍)\n9." + msgDatat2_s[3] + "/ 메인\n0." + msgDatat2_s[4] + "/ 보조");

        }
    else if (Ti == t3) {
        return ("<3파티>\n" + t3 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[2] + " / 3분 전 친추\n\n1." + msgDatat3[0] + "\n2." + msgDatat3[1] + "\n3." + msgDatat3[2] + "\n4." + msgDatat3[3] + "\n5." + msgDatat3[4] + "\n6." + msgDatat3_s[0] + "/ 팬텀(공반) \n7." + msgDatat3_s[1] + "/ 신수\n8." + msgDatat3_s[2] + "/ 리프(숍)\n9." + msgDatat3_s[3] + "/ 메인\n0." + msgDatat3_s[4] + "/ 보조");

          }
    else if (Ti == t4) {
        return ("<4파티>\n" + t4 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[3] + " / 3분 전 친추\n\n1." + msgDatat4[0] + "\n2." + msgDatat4[1] + "\n3." + msgDatat4[2] + "\n4." + msgDatat4[3] + "\n5." + msgDatat4[4] + "\n6." + msgDatat4_s[0] + "/ 팬텀(공반) \n7." + msgDatat4_s[1] + "/ 신수\n8." + msgDatat4_s[2] + "/ 리프(숍)\n9." + msgDatat4_s[3] + "/ 메인\n0." + msgDatat4_s[4] + "/ 보조");
    }  
    else if (Ti == t5 && addT == true) {
        return ("<5파티>\n" + t5 + " 분 / 출발 3분 전 대기\n초대자: " + msgData_invite[4] + " / 3분 전 친추\n\n1." + msgDatat5[0] + "\n2." + msgDatat5[1] + "\n3." + msgDatat5[2] + "\n4." + msgDatat5[3] + "\n5." + msgDatat5[4] + "\n6." + msgDatat5_s[0] + "/ 팬텀(공반) \n7." + msgDatat5_s[1] + "/ 신수\n8." + msgDatat5_s[2] + "/ 리프(숍)\n9." + msgDatat5_s[3] + "/ 메인\n0." + msgDatat5_s[4] + "/ 보조");
    }    
}


function check_front(a,b) {
    for (i = 0; i < msgDatat1.length; i++) {
        if (b==t1 &&msgDatat1[i] == "") {
            msgDatat1[i] = a;
            break;
        }
        else if (b==t2 && msgDatat2[i] == "") {
            msgDatat2[i] = a;
            break;
        }
        else if (b == t3 && msgDatat3[i] == "") {
            msgDatat3[i] = a;
            break;
        }
        else if (b == t4 && msgDatat4[i] == "") {
            msgDatat4[i] = a;
            break;
        }
        else if (b == t5 && msgDatat5[i] == "") {
            msgDatat5[i] = a;
            break;
        }
    }
}
function cancel(a, b) {
    for (i = 0; i < msgDatat1.length; i++){
        if (b == t1 && msgDatat1[i] == a) {
            msgDatat1[i] = "";            
            break;
        }
        else if (b == t2 && msgDatat2[i] == a) {
            msgDatat2[i] = "";
            break;
        }
        else if (b == t3 && msgDatat3[i] == a) {
            msgDatat3[i] = "";
            break;
        }
        else if (b == t4 && msgDatat4[i] == a) {
            msgDatat4[i] = "";
            break;
        }
        else if (b == t5 && msgDatat5[i] == a) {
            msgDatat5[i] = "";
            break;
        }
    }
}

//// 초대자 닉 검출 ////
function invite(a,b) {
    msg2 = a.replace("/", "");
    msg2 = msg2.replace(b, "")
    msg2 = msg2.replace("신청", "");
    msg2 = msg2.replace("초대자", "");
    msg2 = msg2.replace(/^ /gi, "");//앞공백제거    
    msg2 = msg2.replace(/\s*$/gi, "");//뒤공백제거
    return msg2;
}