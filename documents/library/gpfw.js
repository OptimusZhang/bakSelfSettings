//  Copyright (C) NEC Corporation 2005-2006.ALL rights reserved.
//
//  [修正履歴]
//  1  01/01/05  新規作成
///////////////////////////////////////////////////////////
// Gprime JavaScript(基盤提供オブジェクト)

// ダイアログの「×」の制御用警告ダイアログの表示文字です。削除できません。
var AZ_DialogUnloadWarning = "";
// 統基781-依01 単項目エラー表示フラグ
var errorFlag = false;
// アクセスランプオブジェクト
function AccessLamp() {
	// オブジェクト取得
	this.obj = getAccessLampObj();
	function getAccessLampObj() {
		var obj = document.getElementById("accesslamp");
		if (obj == null || obj == window.undefined) {
			obj = parent.document.getElementById("accesslamp");
		}
		// Iframe部品対応
		if (obj == null || obj == window.undefined) {
			obj = parent.parent.document.getElementById("accesslamp");
		}

		if (obj == null || obj == window.undefined) {
			return null;
		}else {
			return obj;
		}
	}
}
// 通信状態を返す
function getstatus(){
	if (this.obj == null) {
		return ;
	}
	if (this.obj.className == "accesslamp_r") {
		return 1;
	}else {
		return 0;
	}
}
AccessLamp.prototype.getstatus = getstatus();

// アクセスランプをアニメーション画像にする
function switchOn(){
	if (this.obj == null) {
		return;
	}
	// 統基859-依01 Submit時のマウスカーソル表示強化
	// 「砂時計」マウスカーソルを設定する
	mouseCursorChange("wait");
	this.obj.className = "accesslamp_r";
}
AccessLamp.prototype.switchOn = switchOn;

// アクセスランプを静止画像にする
function switchOff(){
	if (this.obj == null) {
		return;
	}
	// 統基859-依01 Submit時のマウスカーソル表示強化
	// 通常マウスカーソルを設定する
	mouseCursorChange("auto");
	this.obj.className = "accesslamp";
}
AccessLamp.prototype.switchOff = switchOff;

/**
 * マウスカーソル変更
 */
function mouseCursorChange(ChangeCursor) {
	document.body.style.cursor = ChangeCursor;
	if (parent.document.body != null && parent.document.body != window.undefined) {
		parent.document.body.style.cursor = ChangeCursor;
	}
	if (parent.parent.document.body != null && parent.parent.document.body != window.undefined) {
		parent.parent.document.body.style.cursor = ChangeCursor;
	}
}

// ログインユーザオブジェクト
function LoginUser() {
	// 
}

// 年度を取得
function getNendo() {
	parent.getNendo();
}
LoginUser.prototype.getNendo = getNendo;

// 所属を取得
function getSyozoku() {
	parent.getSyozoku();
}
LoginUser.prototype.getSyozoku = getSyozoku;

// 操作員を取得
function getSousain() {
	parent.getSousain();
}
LoginUser.prototype.getSousain = getSousain;

// この処理で別のログインユーザがあるかどうか。
function hasOtherUser() {
	parent.hasOtherUser();
}
LoginUser.prototype.hasOtherUser = hasOtherUser;

// ログインユーザ切替ボタンの押下と同じ効果。
function reLogin() {
	parent.reLogin();
}
LoginUser.prototype.reLogin = reLogin;	

// 業務日付オブジェクト
function GyomuDate() {
	//
}

// 業務日付（西暦）を取得する。
//【返却値】YYYYMMDD    YYYY:西暦年度　MM:月　DD:日
function getYMD() {
	parent.getYMD();
}
GyomuDate.prototype.getYMD = getYMD;

// 表示モードにより、業務日付を変える　（※環境定義ファイルで変更可能にする）
// 1:和暦表示（既定値） 2:西暦表示
function chgDisp(mode) {
	parent.chgDisp(mode);
}
GyomuDate.prototype.chgDisp = chgDisp;

// パレットオブジェクトタ
// 業務画面で呼び出す場合、パラメーを空にする。
// 共通フレームの場合、iframNameにする。
function Pallet(iframName) {

	// オブジェクト取得
	this.obj = getNavObj(iframName);
	function getNavObj(iframName) {
		if (iframName == '' || iframName == window.undefined ) {
			var oElements = document.getElementsByTagName("ol");
			for (i = 0; i < oElements.length; i++) {
				var id = oElements[i].getAttribute("id");
				if (id.toLowerCase().indexOf("navlst") == 0) {
					return oElements[i];
				}
			}
		}else {
			var fobj = document.getElementsByName(iframName)[0];
			var oElements =  fobj.contentWindow.document.getElementsByTagName("ol");
			for (i = 0; i < oElements.length; i++) {
				var id = oElements[i].getAttribute("id");
				if (id.toLowerCase().indexOf("navlst") == 0) {
					return oElements[i];
				}
			}
		}
		return null;
	}
}

// 順番ナビエリアを非表示
function deleteNavs() {
	this.obj.style.display = "none";
}
Pallet.prototype.deleteNavs = deleteNavs;

// 順番ナビエリアを表示
function displayNavs() {
	this.obj.style.display = "block";
}
Pallet.prototype.displayNavs = displayNavs;

// 順番ナビエリアが表示されているかどうか
// 戻り値 0:表示（既定値）
//        1:非表示
//        9:順番ナビオブジェクトが存在しない
function doesDisplayNavs() {
	if (this.obj == null) {
		return 9;
	}
	if (this.obj.style.display != "none") {
		return 0;
	}else {
		return 1;
	}
}
Pallet.prototype.doesDisplayNavs = doesDisplayNavs;

// 作業ボックスオブジェクト
function WorkBox(boxid) {
	// メンバー変数
	this.id = boxid;
	this.tbodyObj = getTbodyObj(boxid);
	function getTbodyObj(boxid) {
		var obj = document.getElementById(boxid + "tbody");
		if (obj == null || obj == window.undefined) {
			return null;
		}else {
			return obj;
		}
	}
	
	this.tfootObj = getTfootObj(boxid);
	function getTfootObj(boxid) {
		var obj = document.getElementById(boxid + "tfoot");
		if (obj == null || obj == window.undefined) {
			return null;
		}else {
			return obj;
		}
	}
}

//作業ボックスの表示状態
function disp(no) {
	if (this.tbodyObj == null || this.tfootObj == null) {
		return ;
	}
	
	if(no==0){
		this.tbodyObj.style.display="block";
		this.tfootObj.style.display="none";		
	}else if(no==1){
		this.tbodyObj.style.display="none";
		this.tfootObj.style.display="block";
	}else{
		this.tbodyObj.style.display="block";
		this.tfootObj.style.display="block";
	}			
}
WorkBox.prototype.disp = disp;

//本文部を表示する 
function dispBody() {
	if (this.tbodyObj == null || this.tfootObj == null) {
		return ;
	}
	
	this.tbodyObj.style.display="block";
	this.tfootObj.style.display="none";
}
WorkBox.prototype.dispBody = dispBody;

//要約部を表示する
function dispSammary(){
	if (this.tbodyObj == null || this.tfootObj == null) {
		return ;
	}
	
	this.tbodyObj.style.display = "none";
	this.tfootObj.style.display = "block";
}
WorkBox.prototype.dispSammary = dispSammary;

//作業ボックスとナビボタンを非表示にする
function boxHidden(){
	var TABLE = this.id + "area";
	var obj = document.getElementById(this.id + "area");
	if (obj == null || obj == window.undefined) {
		// 何もしない
	}else {
		obj.style.display="none";
	}
	
	//  ナビボタン表示
	var nav = document.getElementById(this.id + "nav");
	if (nav == null || nav == window.undefined) {
		// 何もしない
	}else {
		nav.style.display="none";
	}
}
WorkBox.prototype.boxHidden = boxHidden;

//作業ボックスとナビボタンを表示する
function boxDisplay(){
	var TABLE = this.id + "area";
	var obj = document.getElementById(this.id + "area");
	if (obj == null || obj == window.undefined) {
		// 何もしない
	}else {
		obj.style.display="block";
	}
	
	//  ナビボタン表示
	var nav = document.getElementById(this.id + "nav");
	if (nav == null || nav == window.undefined) {
		// 何もしない
	}else {
		nav.style.display="block";
	}
}
WorkBox.prototype.boxDisplay = boxDisplay;
	
// タスクオブジェクト
function Task(boxid) {
	this.base = WorkBox;
    this.base(boxid);
}
Task.prototype = new WorkBox;

// 手順ナビボタンを押下し、自タスクの作業ボックスに移動し、
// 最初の部品にフォーカスを遷移させる
function focusOn() {
	// 最初の部品を見つかる
	var firstFormItem = null;
	var bFind = false;
	
	var oElement = document.getElementById(this.id + "area");
	if (oElement != null) {
		var tableStr = oElement.innerHTML;
		// 「form」部品の場合
		var indexF = -1;
		for (j = 0; j < document.forms[0].elements.length; j++) {
			var el = document.forms[0].elements[j];
			var temp = el.getAttribute("name");
			if (temp == "") {
				temp = el.id;
			}
			
			if (temp == "") {
				// name、あるいはidが存在しない場合
				continue;
			}

			// 非表示をスキップ
			if (el.style.visibility == "hidden") {
				continue;
			}

			// hiddenをスキップ
			if (el.type == "hidden") {
				continue;
			}

			// 入力できない場合
			// 「text」、「textarea」の場合
			if (el.type == "text" || el.type == "textarea") {
				if (el.getAttribute("readonly") == true) {
					continue;
				}
			}else if (el.getAttribute("disabled") == true) {
				continue;
			}
			
			// 作業ボックス内部品であるか
			indexF = tableStr.indexOf(temp);
			if (indexF == -1) {
				// 作業ボックス内部品ではない場合、スキップする
				continue;
			}else {	
				bFind = true;
				firstFormItem = el;
				break;
			}
		}
	}

	// 作業ボックスへ移動する
	var navAObj = document.getElementById(this.id + "link");
	if (navAObj != null) {
		navAObj.href = "#" + this.id + "name";
		navAObj.click();
	}
	
	// 本文部を表示する
	this.dispBody();
	
	if (bFind) {
		// 最初の部品にフォーカスを遷移する
		firstFormItem.focus();
	}
}
Task.prototype.focusOn = focusOn;

// タスク配列オブジェクト
function TaskArray(n) {
	for (var i = 0; i < n; i++) {
		this[i] = null;
	}
	this.length = n;
	
	function add(i, boxid) {
		this[i] = new Task(boxid);
	}
	TaskArray.prototype.add = add;
	
	// 全ての作業ボックスを本文部表示状態にする
	function AllBody() {
		for (i = 0; i < this.length; i++ ) {
			if (this[i] != null) {
				this[i].dispBody();
			}
		}
	}
	TaskArray.prototype.AllBody = AllBody;
	
	// 全ての作業ボックスを要約部表示状態にする
	function AllSummary() {
		for (i = 0; i < this.length; i++ ) {
			if (this[i] != null) {
				this[i].dispSammary();
			}
		}
	}
	TaskArray.prototype.AllSummary = AllSummary;
}

///////////////////////////////////////////////////////////
// Gprime JavaScript(基盤提供SUBMIT関数)

// SUBMIT関数 
function AZS_SubmitSub(screenname,submitid) {
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;  
		AZS_SubmitGif(1);

		// 手順ボックスのスクロール位置保存
		AZS_SaveShtScroll();
		// 明細のスクロール位置保存
		AZS_SaveTableScroll();

        // 統基220-依01 キャンセル時のフォーカス遷移
        var nowFocus = document.activeElement;
		if (nowFocus != null && nowFocus != window.undefined) {
			parent.curFocus = nowFocus.id;
		}

        // 統基137-依01 UI外字対応 追加
		AZS_CopyValueAllGaiji();
        // 統基137-依01 UI外字対応 追加

		// 「再入力」画面を閉じる
		AZS_CloseReLgcErr();
		
		document.forms[0].AZL_COMMON.value = "HTML=" + screenname + ",SUBMITID=" + submitid +
					document.forms[0].AZL_COMMON.value;
		document.forms[0].submit();
	}
	return ;
}

// SUBMIT関数 
function AZS_Submit(submitid) {
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;  
		AZS_SubmitGif(1);

		// 手順ボックスのスクロール位置保存
		AZS_SaveShtScroll();
		// 明細のスクロール位置保存
		AZS_SaveTableScroll();

        // 統基220-依01 キャンセル時のフォーカス遷移
        var nowFocus = document.activeElement;
		if (nowFocus != null && nowFocus != window.undefined) {
			parent.curFocus = nowFocus.id;
		}

		// 統基137-依01 UI外字対応 追加
		AZS_CopyValueAllGaiji();
                // 統基137-依01 UI外字対応 追加

		// 「再入力」画面を閉じる
		AZS_CloseReLgcErr();
		
		document.forms[0].AZL_COMMON.value = "SUBMITID=" + submitid +
					document.forms[0].AZL_COMMON.value;
		document.forms[0].submit();
	}
	return ;
}

// SUBMIT実行フラグのクリア
function AZS_ClearSubmitFlag() {
	window.top.AZL_SUBMITFLAG = 0;
	window.top.AZL_NOCHECKFLAG = 0;
	AZS_SubmitGif(0);
	return ;
}

// SUBMIT実行フラグの設定
function AZS_SetSubmitFlag() {
	window.top.AZL_SUBMITFLAG = 1;
	window.top.AZL_NOCHECKFLAG = 1;
	AZS_SubmitGif(1);
	return ;
}

// SUBMIT実行を判断する
function AZS_CHKSubmitFlag() {
	return window.top.AZL_SUBMITFLAG;
}

// IFrame部品関数（専用）
// コルバックサブミットID設定
function AZS_SetCallBackSubmit(obj, iframeName, submitid) {
	window.top.AZL_IFRAMESUBMITFLAG = 1;
	var screenname = "";
	// 子画面がある場合、
	if (obj.name.indexOf(".scn") > 0) {
		var last = obj.name.lastIndexOf(".");
		screenname = obj.name.substr(0, last);
	}
	if (screenname=="") {
		window.top.curIframeName = iframeName;
	}
	else {
		window.top.curIframeName = screenname + "." + iframeName;
	}
	parent.gCallBackSubmitID[window.top.curIframeName] = submitid;
}

// iframeName(=nvbName)
function AZS_SetCallBackSubmit2(iframeName, submitid) {
	window.top.AZL_IFRAMESUBMITFLAG = 1;
	window.top.curIframeName = iframeName;		
	parent.gCallBackSubmitID[window.top.curIframeName] = submitid;
}

// 外部システムからのコルバック関数
function AZS_Submit_AfterIframe() {
	var screenname = "";

	// IFrame部品が指定されていません
	if (window.top.curIframeName == "" || window.top.curIframeName == window.undefined) {
		alert("IFrame部品が指定されていません");
		return;
	}
	
	if (window.top.AZL_IFRAMESUBMITFLAG != 0) {
		if (window.top.curIframeName.indexOf(".scn") > 0) {
			var last = window.top.curIframeName.lastIndexOf(".");
			screenname = window.top.curIframeName.substr(0, last);
		}
		var submitid = window.top.gCallBackSubmitID[window.top.curIframeName];
		if (submitid =="") {
			alert("コルバック用SUBMITIDが指定されていません");
			return;
		}
		
		if (top.AZL_SUBMITFLAG == 0) {
			top.AZL_SUBMITFLAG = 1;
			top.AZL_NOCHECKFLAG = 1;
			AZS_SubmitGif(1);
			
			// 「再入力」画面を閉じる
			AZS_CloseReLgcErr();
			
			if (screenname == "") {
				// 親画面の場合
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + submitid +	document.forms[0].AZL_COMMON.value;
			}
			else {
				// 子画面の場合
				document.forms[0].AZL_COMMON.value = "HTML=" + screenname + ",SUBMITID=" + submitid +
						document.forms[0].AZL_COMMON.value;
			}
			document.forms[0].submit();
		}
		
		window.top.AZL_IFRAMESUBMITFLAG = 0;
	}
	return ;
}

// 親画面へのコールバック関数の登録関数
// 引数：子画面のコールバック関数名称(必須)
function AZS_RegisterChildSubmitFunc(func) {
	parent.childSubmitFunc = func;
}

// 子画面のSUBMITを呼び出しす関数
// 引数：親のコールバック関数名称（省略可能）
function AZS_ChildSubmit(parentfunc) {
	if (top.AZL_SUBMITFLAG == 0) {
		if (parent.childSubmitFunc != "") {
			top.AZL_SUBMITFLAG = 1;
			AZS_SubmitGif(1);
			parent.childSubmitFunc(parentfunc);
		}
	}
}

// IFrame部品関数（専用まで）

// ナビ 表示／非表示
function AZS_navFlag() {
  var obj = document.all["aznavmenuArea"];
  if (obj != null) {
		if (parent.AZL_NAVFLAG == 0) {
			obj.style.display = "inline";
		} else if (parent.AZL_NAVFLAG == 1) {
			obj.style.display = "none";
		}
  }
	return ;
}

// 通信イメージ制御関数 
function AZS_SubmitGif(ActionFlg) {
	var obj = new AccessLamp();
	//0:通信なし 1:通信中
	if (ActionFlg==1){
		obj.switchOn();
	}else if (ActionFlg==0){
		obj.switchOff();
	}
	return ;
}

// SUBMIT関数(フォーム指定) 主にAWで使います
function AZS_SubmitForm(submitid, tarForm) {
	if (null == tarForm) {
		AZS_SetAbtErr2( "AZS_SubmitForm", "フォームが存在しません" );
		return ;
	}
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		AZS_SubmitGif(1);
		
		// 「再入力」画面を閉じる
		AZS_CloseReLgcErr();
		
		tarForm.AZL_COMMON.value = "SUBMITID=" + submitid +
					tarForm.AZL_COMMON.value;
		tarForm.submit();
	}
	return ;
}

// 業務画面表示用
function AZS_LoadBusiness(comservValue) {
	top.AZL_SUBMITFLAG = 1;
	AZS_SubmitGif(1);
	
	// 「再入力」画面を閉じる
	AZS_CloseReLgcErr();
	document.gyomuframe.document.forms[0].AZL_COMMON.value = comservValue;
	document.gyomuframe.document.forms[0].submit();
}
// 0:強調しなくて表示、1：強調し表示
var AZS_MslRowSelected = "0";

// SUBMIT発生出力見出しの選択実行用 
function AZS_MslRowSelect() {
    AZS_MslRowSelected = "1";
}
// SUBMIT発生出力見出しの選択実行用 
function AZS_SelectAndSubmitSub(screenname,RadioName, RecNo, submitID) {
	// ラジオボタン選択処理
	if (RadioName != null && RadioName.length > 0) {
		var partnum = document.forms[0].elements.length;
		var partobj;
		var count = 0;
		var fobj = document.forms[0];
		for(var index = 0; index < partnum; index++) {
			partobj = fobj.elements[index];
			if(partobj.name == screenname + "." + RadioName) {
				count++;
				if (count == RecNo) {
					partobj.checked = true;
                    if (AZS_MslRowSelected == "1") {
                        id = partobj.getAttribute("id");
                        setSelectItemID(id);
 　　　　　　           g_AZC_RowSelected_radio_name = "";
                        g_AZC_RowSelected_radio_obj = "";
                        AZC_RowSelected_radio( partobj );
                    }
				}
			}
		}
	}
    AZS_MslRowSelected = "0";
	AZS_SubmitSub(screenname,submitID);
	return ;
}

// SUBMIT発生出力見出しの選択実行用 
function AZS_SelectAndSubmit(RadioName, RecNo, submitID) {
	// ラジオボタン選択処理
	if (RadioName != null && RadioName.length > 0) {
		var partnum = document.forms[0].elements.length;
		var partobj;
		var count = 0;
		var fobj = document.forms[0];
		for(var index = 0; index < partnum; index++) {
			partobj = fobj.elements[index];
			if(partobj.name == RadioName) {
				count++;
				if (count == RecNo) {
					partobj.checked = true;
                    if (AZS_MslRowSelected == "1") {
                        id = partobj.getAttribute("id");
                        setSelectItemID(id);
 　　　　　　           g_AZC_RowSelected_radio_name = "";
                        g_AZC_RowSelected_radio_obj = "";
                        AZC_RowSelected_radio( partobj );
                    }
				}
			}
		}
	}
    AZS_MslRowSelected = "0";
	AZS_Submit(submitID);
	return ;
}

// ツリービューツリー項目選択
function AZS_SelectTreeItem(hname, value, procID) {
	var obj = document.getElementById(hname)
	obj.value = value;
	AZS_Submit(procID);
}
// タイトルの変更
function AZI_TransHeadString( name ){
	top.document.title = name;
	document.getElementById("Syori").title = name;
	document.getElementById("Syori").innerText = name;
}
// モーダルダイアログ表示
function AZS_DlgCall(screenname,dialogName,OKSubmitID,CancelSubmitID,dWidth,dHeight,guidanceFlag,guidance,header_title,subSystemId,helpHtml,styleSheetID,frameColorGpfwComm
,navIconFlg,guidanceIconFlg,helpIconFlg,closeIconFlg,guidanceControl,meganeIconFlg,printIconFlg,meganeFontsize,frameColorGpfw,gaijiFlg,systemInstDir,dlgDispMode,dlgDispValueX,dlgDispValueY,dialogButtonControl,bg_color_radio_1,bg_color_radio_2,bg_color_radio_3,bg_color_checkBox_1,bg_color_checkBox_2,bg_color_checkBox_3,maxButton,minButton,dialogID,fontsize,framefontsize) 
{
	var azl_common = document.forms[0].AZL_COMMON.value;
	var ret;
	var args = new Array(29);
	args[0] = ",HTML=" + dialogName + document.forms[0].AZL_COMMON.value;
	args[1] = header_title;
	args[2] = guidanceFlag;
	args[3] = guidance;
	args[4] = subSystemId; 
	args[5] = helpHtml; // ヘルプ用
	args[6] = styleSheetID; // スタイルID
	args[7] = frameColorGpfwComm; // CSS(gpfw_commonframe)
	args[8] = navIconFlg;
	args[9] = guidanceIconFlg;
	args[10] = helpIconFlg;
	args[11] = closeIconFlg;
	args[12] = guidanceControl;
	args[13] = meganeIconFlg;
	args[14] = meganeFontsize;
	args[15] = frameColorGpfw;
	args[16] = gaijiFlg;
	args[17] = systemInstDir;
	args[18] = dialogButtonControl;
	args[19] = bg_color_radio_1;
	args[20] = bg_color_radio_2;
	args[21] = bg_color_radio_3;
	args[22] = bg_color_checkBox_1;
	args[23] = bg_color_checkBox_2;
	args[24] = bg_color_checkBox_3;
	// ダイアログID
	args[25] = dialogID;
	args[26] = printIconFlg;
	args[27] = fontsize;
	args[28] = framefontsize;

	// モーダルダイアログが開いていれば閉じる
	dHeight += 30;
	var dialogStyle = "dialogHeight: " + dHeight + "px; dialogWidth: " + dWidth + "px; status: no; scroll: no; help: no; resizable: yes;";

	// 20110527 統基927-依01-ダイアログウィンドウの最大化／最小化オプション制御　ADD START
        if (maxButton == 1) {
            dialogStyle = dialogStyle + " Maximize=yes;"
        }

        if (minButton == 1) {
            dialogStyle = dialogStyle + " Minimize=yes;"
        }
	// 20110527 統基927-依01-ダイアログウィンドウの最大化／最小化オプション制御　ADD START

	// 20100227 統基729-依01-画面起動制御の機能強化　ADD START
	var widthTemp = top.window.screenLeft + (top.document.body.clientWidth + 4 - dWidth)/2;
	var heightTemp = top.window.screenTop + (top.document.body.clientHeight - 28 - dHeight)/2;
	getDialogPosiInfo(dlgDispMode,dlgDispValueX,dlgDispValueY,widthTemp,heightTemp);
	if (dialogLeft != "" && dialogTop != "") {
	    dialogStyle = dialogStyle + "dialogLeft:" + dialogLeft + "; dialogTop:" + dialogTop;
	}
	// 20100227 統基729-依01-画面起動制御の機能強化　ADD END
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/modal_dialogframe.htm",args,dialogStyle);

	if(ret == 1)
	{
		if (OKSubmitID != "") {
			top.AZL_SUBMITFLAG = 1;
			top.AZL_NOCHECKFLAG = 1;
	
			AZS_SubmitGif(1);
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + OKSubmitID + ","  + "HTML=" + screenname + azl_common;
			} else {
				document.forms[0].AZL_COMMON.value ="SUBMITID=" + OKSubmitID + azl_common;
			}
			try {
				document.forms[0].SUBMITID.value = OKSubmitID;	
			}
			catch (exception){
				;
			}
			document.forms[0].submit();
		}
	}
	else if(ret == 2)
	{
		if (CancelSubmitID != "") {
			top.AZL_SUBMITFLAG = 1;
			top.AZL_NOCHECKFLAG = 1;
	
			AZS_SubmitGif(1);
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + CancelSubmitID + ","  + "HTML=" + screenname + azl_common;
			} else {
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + CancelSubmitID + azl_common;
			}
			try {
				document.forms[0].SUBMITID.value = CancelSubmitID;	
			}
			catch (exception) {
				;
			}
			document.forms[0].submit();
		}
		parent.curFocusFlag = 1;
	}
	else if(ret == 3)
	{
		//ダイアログ「×」終了場合
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;
		AZS_SubmitGif(1);

	if (document.forms[0].AZL_COMMON.value == null) {
		document.forms[0].AZL_COMMON.value = azl_common;
	}
		if (CancelSubmitID != "") {
			submitDialogExit(screenname, CancelSubmitID);
		}
		else {
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=DIALOGCL,"  + "HTML=" + screenname + document.forms[0].AZL_COMMON.value;
			} else {
				document.forms[0].AZL_COMMON.value = "SUBMITID=DIALOGCL," + document.forms[0].AZL_COMMON.value;
			}
			document.forms[0].submit();
		}
		parent.curFocusFlag = 1;
	}
	else if (ret == 99)
	{
		window.top.AZL_OPENERCLOSEFLAG = 1;
		window.top.close();
	}
	return;
}

// （内部使用）AZS_DlgCallにて呼び出される。
//ダイアログ「×」終了場合、AJAXでダイアログキャンセルSUBMITIDを実行する。
function submitDialogExit(screenname, CancelSubmitID) {
	try {
		var url = "/servlet/jp.co.nec.gprime.gpfw.olbs.Entrance";
		var name = screenname.substring(0, screenname.indexOf("."));
		if (name.length > 20) {
			url = "/euc/jp.co.nec.gprime.kiban.au.menu.AuEntrance";
		}
		if (window.XMLHttpRequest) { 
	      req = new XMLHttpRequest(); 
	  }
	  else if (window.ActiveXObject) {
	      req = new ActiveXObject("Microsoft.XMLHTTP"); 
	  }
	  if(req){
	    	req.open("POST",url, true);
	    	req.onreadystatechange = function() {getParentCancleSubmit(screenname, CancelSubmitID)};
	    	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    	var param = "";
				if (screenname != "") {
					param = "SUBMITID=DIALOGCL,"  + "HTML=" + screenname + document.forms[0].AZL_COMMON.value;
				} else {
					param = "SUBMITID=DIALOGCL," + document.forms[0].AZL_COMMON.value;
				}
         if (name.length > 20) {
		  	req.send(param);
		  }
		else {
			req.send("AZL_COMMON=" + param);
		}
	  }
	}catch (exception) {
		AZS_SubmitGif(0);
		AZI_SetAbort( "submitDialogExit", "ダイアログを終了する時、エラーが発生しました。\nシステム管理者に連絡してください。" ) ;
		return false ;
	}
}

// （内部使用）submitDialogExitにて呼び出される。
//ダイアログ「×」終了場合、AJAXでダイアログキャンセルSUBMITIDを実行する。
function getParentCancleSubmit(screenname, CancelSubmitID) {
    if (req.readyState == 4) {
        if (req.status == 200) {
    			if (screenname != "") {
						document.forms[0].AZL_COMMON.value = "SUBMITID=" + CancelSubmitID + ","  + "HTML=" + screenname + document.forms[0].AZL_COMMON.value;
					} else {
						document.forms[0].AZL_COMMON.value = "SUBMITID=" + CancelSubmitID + document.forms[0].AZL_COMMON.value;
					}
			   try {
					document.forms[0].SUBMITID.value = CancelSubmitID;	
				}
				catch (exception){
					;
				}
					document.forms[0].submit();
        }
    }
}

// モーダルダイアログ表示(URL連携版)
function AZS_MdlUrlDlgCall(PostAction,DWidth,DHeight,SubmitID,dlgDispMode,dlgDispValueX,dlgDispValueY) 
{
	var ret;
	var args = new Array(1);
	args[0] = PostAction;

	// モーダルダイアログ呼び出し実行
	var dialogStyle = "dialogHeight: " + DHeight + "px; dialogWidth: " + DWidth + "px; status: no; scroll: no; help: no; resizable: yes;";
	
	// 20100227 統基729-依01-画面起動制御の機能強化　ADD START
	var widthTemp = top.window.screenLeft + (top.document.body.clientWidth + 4 - DWidth)/2;
	var heightTemp = top.window.screenTop + (top.document.body.clientHeight - 28 - DHeight)/2;
	getDialogPosiInfo(dlgDispMode,dlgDispValueX,dlgDispValueY,widthTemp,heightTemp);
	if (dialogLeft != "" && dialogTop != "") {
	    dialogStyle = dialogStyle + "dialogLeft:" + dialogLeft + "; dialogTop:" + dialogTop;
	}
	// 20100227 統基729-依01-画面起動制御の機能強化　ADD END
	
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/modalUrl_dialogframe.htm",args,dialogStyle);

	// SubmitIDが指定されていなければ、終了処理なし


	if (SubmitID == null){
		return;
	}
	if (SubmitID.length == 0){
		return;
	}

	// 終了処理
	top.AZL_SUBMITFLAG = 1;
	top.AZL_NOCHECKFLAG = 1;

	document.forms[0].AZL_COMMON.value = "SUBMITID=" + SubmitID + document.forms[0].AZL_COMMON.value;
	document.forms[0].submit();

	return;
}

// 業務ダイアログを起動する
// パラメータに、モーダルとモードレスフラグが定義しますが、
// 現状、モーダルしか提供しません。（今後、拡張する）
function AZS_USERDLGCall(form, width, height, dialogId, subSystemId, OKSubmitID, CancelSubmitID, modal) {
// 統基776-依01 JSによるモードレスダイアログ起動 UPDATE START
	if (top.AZL_SUBMITFLAG == 1) {
	    return;
	}
	if (modal != "1" && modal != "0") {
		alert("モーダルとモードレス以外のダイアログを提供しません。");
		return;
	}
	top.AZL_SUBMITFLAG = 1;
// 統基776-依01 JSによるモードレスダイアログ起動 UPDATE END
  var common;
    // 呼出元のフォームオブジェクトがない場合
	if (form == null) {
		alert("呼出元のフォームオブジェクトは指定しません。");
		return;
	}
	else {
    // 指定したパラメータは、フォームオブジェクトではありません。
    try {
        common = form.AZL_COMMON.value;
    }
    catch (exception) {
		    alert("指定したパラメータは、フォームオブジェクトではありません。");
		    return;
    }
	}
	
	// ダイアログIDが指定しない場合
	if (dialogId == null) {
		alert("ダイアログIDは指定しません。");
		return;
	}
	// サブシステムIDが指定しない場合
	if (subSystemId == null) {
		alert("サブシステムIDは指定しません。");
		return;
	}
 	// screenname設定
	var ret;
	var screenname = "";
	var screennameInfo = form.AZL_COMMON.value.split(",");
	for (i = 0; i < screennameInfo.length; i++) {
		if (screennameInfo[i].indexOf("SCREENNAME=") >= 0) {
			screenname = screennameInfo[i].substring(11);
			break;
		}
	}

	// 手順ボックスのスクロール位置保存
	AZS_SaveShtScroll();
        // 明細のスクロール位置保存
	AZS_SaveTableScroll();

	// パラメータ設定
	var args = new Array(4);
	args[0] = form.AZL_COMMON.value;
	args[1] = dialogId;
	args[2] = subSystemId;
	args[3] = top.window;
	args[4] = screenname;
	args[5] = document.forms[0];

	// モーダルダイアログが開いていれば閉じる
	if (width < 400) {
		width = 400;
	}
	if (height < 300) {
		height = 300;
	}
	height += 30;
	var dialogStyle = "dialogHeight: " + height + "px; dialogWidth: " + width + "px; status: no; scroll: no; help: no; resizable: yes";
	// 統基776-依01 JSによるモードレスダイアログ起動 ADD START
	if (modal == "0") {
		// alert("モーダル以外のダイアログを提供しません。");
		AZS_USERMLSDLGCall(args, dialogStyle);
		return;
	}
	top.AZL_SUBMITFLAG = 0;
	// 統基776-依01 JSによるモードレスダイアログ起動 ADD END
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/modaljs_dialog.htm",args,dialogStyle);
	if(ret == 1)
	{
		if (OKSubmitID != "") {
			top.AZL_SUBMITFLAG = 1;
			top.AZL_NOCHECKFLAG = 1;

			AZS_SubmitGif(1);
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + OKSubmitID + ",SCREENNAME=" + screenname + ",HTML=" + screenname + document.forms[0].AZL_COMMON.value;
			} else {
				document.forms[0].AZL_COMMON.value ="SUBMITID=" + OKSubmitID + document.forms[0].AZL_COMMON.value;
			}
			document.forms[0].submit();
		}
	}
	else if(ret == 2)
	{
		if (CancelSubmitID != "") {
			top.AZL_SUBMITFLAG = 1;
			top.AZL_NOCHECKFLAG = 1;

			AZS_SubmitGif(1);
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + CancelSubmitID + ","  + "HTML=" + screenname + document.forms[0].AZL_COMMON.value;
			} else {
				document.forms[0].AZL_COMMON.value = "SUBMITID=" + CancelSubmitID + document.forms[0].AZL_COMMON.value;
			}
			document.forms[0].submit();
		}
		parent.curFocusFlag = 1;
	}
	else if(ret == 3)
	{
		//ダイアログ「×」終了場合
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;
		AZS_SubmitGif(1);


		if (CancelSubmitID != "") {
			submitDialogExit(screenname, CancelSubmitID);
		}
		else {
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=DIALOGCL,"  + "HTML=" + screenname + document.forms[0].AZL_COMMON.value;
			} else {
				document.forms[0].AZL_COMMON.value = "SUBMITID=DIALOGCL," + document.forms[0].AZL_COMMON.value;
			}
			document.forms[0].submit();
		}
		parent.curFocusFlag = 1;
	}
	else if (ret == 4) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;
		AZS_SubmitGif(1);
			if (screenname != "") {
				document.forms[0].AZL_COMMON.value = "SUBMITID=DLGSTGYOMU,DIALOGID=" + dialogId + ",SUBSYSTEMID=" + subSystemId + ",HTML=" + screenname + document.forms[0].AZL_COMMON.value;
			} else {
				document.forms[0].AZL_COMMON.value = "SUBMITID=DLGSTGYOMU,DIALOGID=" + dialogId + ",SUBSYSTEMID=" + subSystemId + document.forms[0].AZL_COMMON.value;
			}
			document.forms[0].submit();
		parent.curFocusFlag = 1;
	}
	else if (ret == 99)
	{
		window.top.AZL_OPENERCLOSEFLAG = 1;
		window.top.close();
	}
	return;
}

// 統基776-依01 JSによるモードレスダイアログ起動 ADD START
// JSによるモードレスダイアログを起動します。
function AZS_USERMLSDLGCall(args, dialogStyle) {
	window.showModelessDialog("/gprime/gpfw/comm/page/html/modelessjs_dialog.htm",args,dialogStyle);

	return;
}
// 統基776-依01 JSによるモードレスダイアログ起動 ADD START

// モードレスダイアログ表示(保留)
function AZS_MdlDlgCall(dialogName,OKSubmitID,CancelSubmitID,dWidth,dHeight,guidanceFlag,guidance,header_title,subSystemId,helpHtml,styleSheetID,frameColorGpfwComm,navIconFlg,guidanceIconFlg,helpIconFlg,closeIconFlg,guidanceControl,meganeIconFlg,printIconFlg,meganeFontsize,frameColorGpfw,gaijiFlg,systemInstDir,dlgDispMode,dlgDispValueX,dlgDispValueY,dialogButtonControl,bg_color_radio_1,bg_color_radio_2,bg_color_radio_3,bg_color_checkBox_1,bg_color_checkBox_2,bg_color_checkBox_3,maxButton,minButton,dialogID,fontsize,framefontsize)
{
	var ret;
	dHeight += 30;
	var dialogStyle = "dialogHeight=" + dHeight + "px; dialogWidth=" + dWidth + "px; status: no; scroll: no; help: no; resizable: yes;";

	// 20110527 統基927-依01-ダイアログウィンドウの最大化／最小化オプション制御　ADD START
        if (maxButton == 1) {
            dialogStyle = dialogStyle + " Maximize=yes;"
        }

        if (minButton == 1) {
            dialogStyle = dialogStyle + " Minimize=yes;"
        }
	// 20110527 統基927-依01-ダイアログウィンドウの最大化／最小化オプション制御　ADD START

// 20100227 統基729-依01-画面起動制御の機能強化　ADD START
	var widthTemp = top.window.screenLeft + (top.document.body.clientWidth + 4 - dWidth)/2;
	var heightTemp = top.window.screenTop + (top.document.body.clientHeight - 28 - dHeight)/2;
	getDialogPosiInfo(dlgDispMode,dlgDispValueX,dlgDispValueY,widthTemp, heightTemp);
	if (dialogLeft != "" && dialogTop != "") {
	    dialogStyle = dialogStyle + "dialogLeft:" + dialogLeft + "; dialogTop:" + dialogTop;
	}
// 20100227 統基729-依01-画面起動制御の機能強化　ADD END
	var args = new Array(30);
	args[0] = dialogName;		//ダイアログ名
	args[1] = header_title;		//ダイアログタイトル
	args[2] = document.forms[0].AZL_COMMON.value;	//SUBMIT文字列
	args[3] = guidanceFlag;
	args[4] = guidance;
	args[5] = subSystemId; 
	args[6] = helpHtml; // ヘルプ用
	args[7] = styleSheetID; // スタイルID
	args[8] = frameColorGpfwComm; // CSS(gpfw_commonframe)
	args[9] = navIconFlg;
	args[10] = guidanceIconFlg;
	args[11] = helpIconFlg;
	args[12] = closeIconFlg;
	args[13] = guidanceControl;
	args[14] = meganeIconFlg;
	args[15] = meganeFontsize;
	args[16] = frameColorGpfw;
	args[17] = gaijiFlg;
	args[18] = systemInstDir;
	args[19] = dialogButtonControl;
	args[20] = bg_color_radio_1;
	args[21] = bg_color_radio_2;
	args[22] = bg_color_radio_3;
	args[23] = bg_color_checkBox_1;
	args[24] = bg_color_checkBox_2;
	args[25] = bg_color_checkBox_3;
	args[26] = dialogID;   //ダイアログID
	args[27] = printIconFlg;//印刷Flag
	args[28] = fontsize;
	args[29] = framefontsize;
	window.showModelessDialog("/gprime/gpfw/comm/page/html/modeless_dialogframe.htm",args,dialogStyle);
	return;
}

// モードレスダイアログクローズ(保留)
function AZS_DlgClose() 
{
	return;
}

// 物理画面遷移(For論理画面)
function AZS_Trns( anchor )
{
	if (top.AZL_SUBMITFLAG != 0) {
		return ;
	}
	if( null == anchor ){
		AZS_SetAbtErr2( "AZS_Trns", "遷移先がありません" ) ;
		return ;
	}
	location.hash = anchor ;
}

// 物理画面遷移(同一論理画面)
function AZS_PhyTrans(physicalID) {
	// 警告メッセージ
	if (confirm("物理画面を遷移すると、現在のデータが全部廃棄されました。よろしいですか？")) {
		// 物理画面遷移
		top.AZL_SUBMITFLAG = 1;
		AZS_SubmitGif(1);
	
		document.forms[0].AZL_COMMON.value = "SUBMITID=OLBSPHYTRN,PHYSICALID=" + physicalID + document.forms[0].AZL_COMMON.value;
		document.forms[0].submit();
	}
}

// 単項目チェックエラー(JavaScript側)
function AZS_SetErrMsg( p_zID, p_zP1, p_zP2, p_zP3, p_zP4 ){
	// 統基781-依01 単項目エラーフラグ設定
	errorFlag = true;
	var zMsgRecord = "" ;
	// 検索
	var bHit = false ;
	for( i = 0; i < g_arrMsgTbl.length; i++ ){
		var arrMsgRec = g_arrMsgTbl[i].split( "," ) ;
		if( p_zID == arrMsgRec[0] ){
			bHit = true ;
			break ;
		}
	}
	if( !bHit ){
		arrMsgRec[0] = p_zID;
		arrMsgRec[1] = "?";
	}
	// パラメータ埋め込み
	zMsgRecord = arrMsgRec[1];
	nIndex1 = zMsgRecord.indexOf( "$1" )
	if( -1 != nIndex1 ){
		zMsgRecord = zMsgRecord.substring( 0, nIndex1 ) + p_zP1
			+ zMsgRecord.substring( nIndex1 +2, zMsgRecord.length );
	}
	nIndex2 = zMsgRecord.indexOf( "$2" )
	if( -1 != nIndex2 ){
		zMsgRecord = zMsgRecord.substring( 0, nIndex2 ) + p_zP2
			+ zMsgRecord.substring( nIndex2 +2, zMsgRecord.length );
	}
	nIndex3 = zMsgRecord.indexOf( "$3" )
	if( -1 != nIndex3 ){
		zMsgRecord = zMsgRecord.substring( 0, nIndex3 ) + p_zP3
			+ zMsgRecord.substring( nIndex3 +2, zMsgRecord.length );
	}
	nIndex4 = zMsgRecord.indexOf( "$4" )
	if( -1 != nIndex4 ){
		zMsgRecord = zMsgRecord.substring( 0, nIndex4 ) + p_zP4
			+ zMsgRecord.substring( nIndex4 +2, zMsgRecord.length );
	}
	
	var ret;
	var args = new Array(2);
	args[0] = p_zID;
	args[1] = zMsgRecord;
	
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/itemerror.htm",args,"dialogWidth:520px; dialogHeight:180px; status:no; help:no");
}


// 単項目チェックエラー(WEB側)
function AZS_SetItemErrMsg( msgid, msgstr ){
	
	var ret;
	var args = new Array(2);
	args[0] = msgid;
	args[1] = msgstr;
	
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/itemerror.htm",args,"dialogWidth:520px; dialogHeight:180px; status:no; help:no");
}

// 単項目エラー(FN_MSGERR用)
function AZS_SetErrMsg2( msgid, msgstr ){
	
	var ret;
	var args = new Array(2);
	args[0] = msgid;
	args[1] = msgstr;

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/itemerror.htm",args,"dialogWidth:520px; dialogHeight:180px; status:no; help:no");

	top.AZL_SUBMITFLAG = 1;
	top.AZL_NOCHECKFLAG = 1;

	document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSCA" + document.forms[0].AZL_COMMON.value;

	AZS_SubmitGif(1);

	document.forms[0].submit();
}

// 確認ダイアログ表示
function AZS_SetInfMsg(msgid,msgstr)
{
	var ret;
	var args = new Array(2);
	args[0] = msgid;
	args[1] = msgstr;

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/information.htm",args,"dialogWidth:520px; dialogHeight:180px; status:no; help:no");

	top.AZL_SUBMITFLAG = 1;
	top.AZL_NOCHECKFLAG = 1;

	document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSOK" + document.forms[0].AZL_COMMON.value;

	AZS_SubmitGif(1);

	document.forms[0].submit();
}

// 警告ダイアログ表示
function AZS_SetCauMsg(msgid,msgstr)
{
	var ret;
	var args = new Array(2);
	args[0] = msgid;
	args[1] = msgstr;
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/caution.htm",args,"dialogWidth:520px; dialogHeight:180px; status:no; help:no");
	if(ret == 1)
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSOK" + document.forms[0].AZL_COMMON.value;

		AZS_SubmitGif(1);

		document.forms[0].submit();
	}
	else
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSCA" + document.forms[0].AZL_COMMON.value;

		AZS_SubmitGif(1);

		document.forms[0].submit();
	}
}

// 問い合わせダイアログ表示
function AZS_SetQusMsg(msgid,msgstr)
{
	var ret;
	var args = new Array(2);
	args[0] = msgid;
	args[1] = msgstr;
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/question.htm",args,"dialogWidth:520px; dialogHeight:180px; status:no; help:no");
	if(ret == 1)
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSOK" + document.forms[0].AZL_COMMON.value;

		AZS_SubmitGif(1);

		document.forms[0].submit();
	}
	else
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSCA" + document.forms[0].AZL_COMMON.value;

		//ADD 2001/06/20
		AZS_SubmitGif(1);

		document.forms[0].submit();
	}
}

// 論理エラーダイアログ表示
var gfo;
function AZS_SetLgcErr(arr)
{
	gfo = arr;
	setTimeout("AZS_ShowLgcErr()",50);
	return;
}
function AZS_ShowLgcErr()
{
	var ret;
	var args = new Array(2);
	
	// 負荷分散対応
	var requestScheme = gfo.hLgcScheme.value + ":";
	// 統基717-依01 脆弱性対応
	// var hostname = gfo.hLgcHostName.value + "/servlet/jp.co.nec.gprime.gpfw.olbs.Entrance?";

	// パラメータ設定
	var elMsdId = document.getElementsByName("msgId");
	if (elMsdId == window.undefined || elMsdId.length < 1) {
		return;
	}
	var elMsdKbn = document.getElementsByName("msgKbn");
	var elMsd = document.getElementsByName("msg");
	var elMsdTs = document.getElementsByName("msgTs");

	var args = new Array(elMsdId.length*4 + 4);
	args[0] = gfo.hLgcErrorCount.value;
	args[1] = gfo.hLgcErrorFatalCount.value;
	args[2] = document.forms[0].AZL_COMMON.value;
	for (i = 0; i < elMsdId.length; i ++) {
		args[i*4+3] = elMsdId[i].value;
		args[i*4+4] = elMsdKbn[i].value;
		args[i*4+5] = elMsd[i].value;
		args[i*4+6] = elMsdTs[i].value;
	}
	args[elMsdId.length*4 + 3] = gfo.hLgcShowMode.value;

	var logicWidth = null;
	var logicHeight = null;
	if (gfo.hLgcErrorCount.value == "1") {
		logicHeight = "300px";
		logicWidth = "500px";
	}else {
		logicHeight = "400px";
		logicWidth = "850px";
	}
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/logicerror.htm", args,
		"dialogHeight: " + logicHeight + "; dialogWidth: " + logicWidth + "; status: no; help: no");
	if(ret == 2) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;
                // 問題処理票_受入110815_001 論理エラー継続時の基盤ヘッダボタン動作について
		// top.AZL_SUBMITOK = 0;
		document.forms[0].AZL_COMMON.value = "SUBMITID=LOGDLGCO" + document.forms[0].AZL_COMMON.value;

		AZS_SubmitGif(1);

		document.forms[0].submit();

		return;
	}else{
                // Prize課題事項 No.53について
                eval(gfo.errorItemFocus.value);
		if(ret == 1) {
			// S県税対応
			if (gfo.hLgcShowMode.value == "3") {
				AZS_SetErrMessage();
			}
		}
		return;
	}
	return;
}

// 論理通知ダイアログ表示
var gfoNotice;
function AZS_SetNoticeMessage(arr)
{
	gfoNotice = arr;
	setTimeout("AZS_ShowLgcNotice()",50);
	return;
}
function AZS_ShowLgcNotice()
{
	var ret;
	// 負荷分散対応
	var requestScheme = gfoNotice.hLgcNoticeScheme.value + ":";
	// パラメータ設定
	var elMsdId = document.getElementsByName("noticeMsgId");
	if (elMsdId == window.undefined || elMsdId.length < 1) {
		return;
	}
	var elMsdKbn = document.getElementsByName("noticeMsgKbn");
	var elMsd = document.getElementsByName("noticeMsg");
	var elMsdTs = document.getElementsByName("noticeMsgTs");

	var args = new Array(elMsdId.length*4 + 2);
	args[0] = gfoNotice.hLgcNoticeCount.value;
	args[1] = document.forms[0].AZL_COMMON.value;
	for (i = 0; i < elMsdId.length; i ++) {
		args[i*4+2] = elMsdId[i].value;
		args[i*4+3] = elMsdKbn[i].value;
		args[i*4+4] = elMsd[i].value;
		args[i*4+5] = elMsdTs[i].value;
	}

	var logicWidth = null;
	var logicHeight = null;
	if (gfoNotice.hLgcNoticeCount.value == "1") {
		logicHeight = "180px";
		logicWidth = "520px";
	}else {
		logicHeight = "270px";
		logicWidth = "800px";
	}
	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/logicnotice.htm", args,
		"dialogHeight: " + logicHeight + "; dialogWidth: " + logicWidth + "; status: no; help: no");
	top.AZL_SUBMITFLAG = 1;
	top.AZL_NOCHECKFLAG = 1;
	document.forms[0].AZL_COMMON.value = "SUBMITID=BSDLGSOK" + document.forms[0].AZL_COMMON.value;
	AZS_SubmitGif(1);
	document.forms[0].submit();
	return;
}

// 「再入力」画面を閉じる
function AZS_CloseReLgcErr() {
	if (parent.g_oLogicErrorReload != null) {
		parent.g_oLogicErrorReload.close();
	}
}

// 論理エラーダイアログクローズ
function AZS_CloseLgcErr()
{
    var trObj = top.document.getElementById("trDownCommon");
    if (trObj != null) {
        trObj.style.display="none";
        var trGyomuframe = top.document.getElementById("trGyomuframe");
        trGyomuframe.height = "100%";
    }
    return;
}

//論理エラーダイアログ（再入力の表示）
function AZS_SetLgcErrReEnter(fo)
{
	var args = new Array(2);

	args[0] = fo.hLgcErrorInfo.value;
	args[1] = fo.hLgcErrorCount.value;

	window.showModelessDialog("/gprime/gpfw/comm/page/html/logicerror_reload.htm",args,
	"dialogHeight: 200px; dialogWidth: 706px; status: no; help: no");

	return;
}

// 排他エラーダイアログ表示
function AZS_SetExcErr(fo)
{
	var ret;
	var item_name = new Array("exc_name", "exc_date", "exc_time", "exc_instr", "section_name",
				"staff_name", "proc_name", "sys_name", "subsys_name", 
				"exc_value1", "exc_value2", "exc_value3", "exc_value4", "exc_value5",
				"exc_value6", "exc_value7", "exc_value8", "exc_value9", "exc_value10",
				"exc_value11", "exc_value12", "exc_value13", "exc_value14", "exc_value15",
				"exc_value16", "exc_value17", "exc_value18", "exc_value19", "exc_value20",
				"exc_value21", "exc_value22", "exc_value23", "exc_value24", "exc_value25",
				"exc_value26", "exc_value27", "exc_value28", "exc_value29", "exc_value30"
				);
	
	var excsize = 0;
	
	if (fo.exc_name != window.undefined) {
		if (fo.exc_name.length == window.undefined) {
			excsize = 1;
		}else {
			excsize = fo.exc_name.length;
		}
	}
	//統基878-依01-オンライン画面の外字未対応項目の修正START
	var args = new Array(3+excsize*39 + 8);
	//統基878-依01-オンライン画面の外字未対応項目の修正END
	
	args[0] = fo.hExcErrorCount.value;
	args[1] = fo.hExcMode.value;
	args[2] = fo.hExcContinue.value;
	var tmp = "";
	for (i = 0; i < excsize; i++) {
		for (j = 0; j < 39; j++) {
			if (excsize == 1) {
				tmp = document.all(item_name[j]).value;
			}else {
				tmp = document.all(item_name[j])[i].value;
			}
			if (tmp == "") {
				args[i*39+j+3] = "　";
			}else {
				args[i*39+j+3] = tmp;
			}
		}
	}
	//統基878-依01-オンライン画面の外字未対応項目の修正START
	tmp = document.all("gaiji_flag").value;
	args[3+excsize*39] = tmp;
	if (tmp == "1" || tmp == "4" || tmp == "2") {
		tmp = document.all("height_coef").value;
		args[3+excsize*39 + 1] = tmp;
		tmp = document.all("class_id").value;
		args[3+excsize*39 + 2] = tmp;
		tmp = document.all("code_base").value;
		args[3+excsize*39 + 3] = tmp;
		tmp = document.all("font_size").value;
		args[3+excsize*39 + 4] = tmp;
		tmp = document.all("servlet_url").value;
		args[3+excsize*39 + 5] = tmp;
		tmp = document.all("use_font").value;
		args[3+excsize*39 + 6] = tmp;
		tmp = document.all("font_face").value;
		args[3+excsize*39 + 7] = tmp;
	}
	//統基878-依01-オンライン画面の外字未対応項目の修正END

	var lockContinueSubmitID = fo.hExcContinue.value;

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/exclusion.htm",args,
		"dialogHeight: 581px; dialogWidth: 800px; status: no; help: no");
	if(ret == 1)
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=EXCDLGRD" + document.forms[0].AZL_COMMON.value;

		// 通信中
		AZS_SubmitGif(1);
		document.forms[0].submit();
		return;
	}
	if(ret == 2)
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=EXCDLGRT" + document.forms[0].AZL_COMMON.value;

		// 通信中
		AZS_SubmitGif(1);
		document.forms[0].submit();
		return;
	}
	if(ret == 3)
	{
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;

		document.forms[0].AZL_COMMON.value = "SUBMITID=" + lockContinueSubmitID + document.forms[0].AZL_COMMON.value;
		AZS_SubmitGif(1);
		document.forms[0].submit();
		return;
	}
	if(ret == 99)
	{
		window.top.AZL_OPENERCLOSEFLAG = 1;
		if (args[1] == '1') {
			window.top.close();
		}
	}
	return;
}

// リリースモードでシンプルなアボート画面を呼び出す。
function AZS_CallSimpleAbortErr(fo)
{ 
	try {
		var ret;
		var abortinf = new Array(10);
		abortinf[0] = fo.zAbortInf0.value;
		abortinf[1] = fo.zAbortInf1.value;
		abortinf[2] = fo.zAbortInf2.value;
		abortinf[3] = fo.zAbortInf3.value;
		abortinf[4] = fo.zAbortInf4.value;
		abortinf[5] = fo.zAbortInf5.value;
		abortinf[6] = fo.zAbortInf6.value;
		abortinf[7] = fo.zAbortInf7.value;
		abortinf[8] = fo.zAbortInf8.value;
		abortinf[9] = fo.zAbortInf9.value;
		//統基878-依01-オンライン画面の外字未対応項目の修正START
		var args = new Array(34);
		//統基878-依01-オンライン画面の外字未対応項目の修正END
		args[0] = fo.zAbortDate.value;
		args[1] = fo.zAbortTime.value;
		args[2] = fo.zSysDate.value;
		args[3] = fo.zTermID.value;
		args[4] = fo.zPlaceID.value;
		args[5] = fo.zSectCD.value;
		args[6] = fo.zSectName.value;
		args[7] = fo.zStaffCD.value;
		args[8] = fo.zStaffName.value;
		args[9] = fo.zMenuID.value;
		args[10] = fo.zMenuName.value;
		args[11] = fo.zUserSessionID.value;
		args[12] = fo.zSysCD.value;
		args[13] = fo.zSysName.value;
		args[14] = fo.zSubSysCD.value;
		args[15] = fo.zSubSysName.value;
		args[16] = fo.zProcCD.value;
		args[17] = fo.zProcName.value;
		args[18] = fo.zProcTypeCD.value;
		args[19] = fo.zProcTypeName.value;
		args[20] = fo.zSessionID.value;
		args[21] = abortinf;
		args[22] = fo.zStyleSheetID.value;
		args[23] = fo.zFontSize.value;
		args[24] = fo.zStyleGpfwComm.value;
		args[25] = fo.zFontSizeFile.value;
		
	   //統基878-依01-オンライン画面の外字未対応項目の修正START
	   var tmp = "";
	   tmp = document.all("gaiji_flag").value;
	   args[26] = tmp;
	   if (tmp == "1" || tmp == "4" || tmp == "2") {
		   tmp = document.all("height_coef").value;
		   args[27] = tmp;
		   tmp = document.all("class_id").value;
		   args[28] = tmp;
		   tmp = document.all("code_base").value;
		   args[29] = tmp;
		   tmp = document.all("font_size").value;
		   args[30] = tmp;
		   tmp = document.all("servlet_url").value;
		   args[31] = tmp;
		   tmp = document.all("use_font").value;
		   args[32] = tmp;
		   tmp = document.all("font_face").value;
		   args[33] = tmp;
	   }
	   //統基878-依01-オンライン画面の外字未対応項目の修正END

		// アボートダイアログを起動されます。
		ret = window.showModalDialog("/gprime/gpfw/comm/page/html/simple_abort.htm",args,
			"dialogHeight: 230px; dialogWidth: 750px; status: no; scroll: no; help: no; resizable: yes");
    	window.top.close();
		return;
	}catch (exception) {
		// エラーを発生した場合に、何もしません。
	}
}

// アボートダイアログ表示
function AZS_SetAbtErr(fo)
{
	var ret;
	var abortinf = new Array(10);
	abortinf[0] = fo.zAbortInf0.value;
	abortinf[1] = fo.zAbortInf1.value;
	abortinf[2] = fo.zAbortInf2.value;
	abortinf[3] = fo.zAbortInf3.value;
	abortinf[4] = fo.zAbortInf4.value;
	abortinf[5] = fo.zAbortInf5.value;
	abortinf[6] = fo.zAbortInf6.value;
	abortinf[7] = fo.zAbortInf7.value;
	abortinf[8] = fo.zAbortInf8.value;
	abortinf[9] = fo.zAbortInf9.value;
	//統基878-依01-オンライン画面の外字未対応項目の修正START
	var args = new Array(30);
	//統基878-依01-オンライン画面の外字未対応項目の修正END
	args[0] = fo.zAbortDate.value;
	args[1] = fo.zAbortTime.value;
	args[2] = fo.zSysDate.value;
	args[3] = fo.zTermID.value;
	args[4] = fo.zPlaceID.value;
	args[5] = fo.zSectCD.value;
	args[6] = fo.zSectName.value;
	args[7] = fo.zStaffCD.value;
	args[8] = fo.zStaffName.value;
	args[9] = fo.zMenuID.value;
	args[10] = fo.zMenuName.value;
	args[11] = fo.zUserSessionID.value;
	args[12] = fo.zSysCD.value;
	args[13] = fo.zSysName.value;
	args[14] = fo.zSubSysCD.value;
	args[15] = fo.zSubSysName.value;
	args[16] = fo.zProcCD.value;
	args[17] = fo.zProcName.value;
	args[18] = fo.zProcTypeCD.value;
	args[19] = fo.zProcTypeName.value;
	args[20] = fo.zSessionID.value;
	args[21] = abortinf;
		
	//統基878-依01-オンライン画面の外字未対応項目の修正START
	var tmp = "";
	tmp = document.all("gaiji_flag").value;
	args[22] = tmp;
	if (tmp == "1" || tmp == "4" || tmp == "2") {
		   tmp = document.all("height_coef").value;
		   args[23] = tmp;
		   tmp = document.all("class_id").value;
		   args[24] = tmp;
		   tmp = document.all("code_base").value;
		   args[25] = tmp;
		   tmp = document.all("font_size").value;
		   args[26] = tmp;
		   tmp = document.all("servlet_url").value;
		   args[27] = tmp;
		   tmp = document.all("use_font").value;
		   args[28] = tmp;
		   tmp = document.all("font_face").value;
		   args[29] = tmp;
	}
	//統基878-依01-オンライン画面の外字未対応項目の修正END

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/abort.htm",args,
		"dialogHeight: 730px; dialogWidth: 750px; status: no; help: no; resizable: yes");
    window.top.close();
	return;
}

// アボートダイアログ表示
function AZS_SetAbtErr2( func, msg )
{
	var ret;
	var abortinf = new Array(10);
	abortinf[0] = "JS関数エラー:" + func + "(" + msg + ")";
	abortinf[1] = "ブラウザ名:" + navigator.appName;
	abortinf[2] = "バージョン:" + navigator.appVersion;
	abortinf[3] = "";
	abortinf[4] = "";
	abortinf[5] = "";
	abortinf[6] = "";
	abortinf[7] = "";
	abortinf[8] = "";
	abortinf[9] = "";
	var args = new Array(22);
	gtm = new Date();
	args[0] = gtm.toLocaleString();
	args[1] = "";
	args[2] = "";
	args[3] = "";
	args[4] = "";
	args[5] = "";
	args[6] = "";
	args[7] = "";
	args[8] = "";
	args[9] = "";
	args[10] = "";
	args[11] = "";
	args[12] = "";
	args[13] = "";
	args[14] = "";
	args[15] = "";
	args[16] = "";
	args[17] = "";
	args[18] = "";
	args[19] = "";
	args[20] = "";
	args[21] = abortinf;

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/abort.htm",args,
		"dialogHeight: 750px; dialogWidth: 650px; status: no; help: no; resizable: yes");
    window.top.close();
	return;
}

// エンドユーザ用アボートダイアログ表示(システム停止用)
function AZS_SetAbtErrForSystem()
{
	var args = new Array(2);
	args[0] = "DATE"; //拡張用
	args[1] = "TIME"; //拡張用

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/system_stop.htm",args,
		"dialogHeight: 150px; dialogWidth: 530px; status: no; help: no; resizable: yes");

	// *** submit OK ***
	window.top.AZL_SUBMITOK = 1;

	// *** 通信終了 ***
	AZS_SubmitGif(0);

	return;
}

// エンドユーザ用アボートダイアログ表示(端末認証失敗用)
function AZS_SetAbtErrForTerminal()
{
	var args = new Array(2);
	args[0] = "DATE"; //拡張用
	args[1] = "TIME"; //拡張用

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/system_stop.htm",args,
		"dialogHeight: 150px; dialogWidth: 530px; status: no; help: no; resizable: yes");
	window.top.close();
	return;
}

// エンドユーザ用アボートダイアログ表示(業務停止用)
function AZS_SetAbtErrForUser()
{
	var args = new Array(2);
	args[0] = "DATE"; //拡張用
	args[1] = "TIME"; //拡張用

	ret = window.showModalDialog("/gprime/gpfw/comm/page/html/gyoumu_stop.htm",args,
		"dialogHeight: 150px; dialogWidth: 530px; status: no; help: no; resizable: yes");

	window.top.close();
	return;
}

// 遷移エラーポップアップ(保留)
function AZS_TransferError(processName) {
	if (processName == null || processName.length == 0) {
		alert("次処理に遷移できません．");
	}
	else {
		alert("[" + processName + "]処理に遷移できません．");
	}
}

// 処理システム利用制御中、遷移エラー
function AZS_TransferSeigyoError(errorMsg) {
	if (errorMsg == null || errorMsg.length == 0) {
		alert("次処理は運用時間外です停止されました。");
	}
	else {
		alert(errorMsg);
	}
}

// 処理区分選択実行用(保留)
function AZS_SubmitProcType(obj, msgLv) {
	var okflg = false;
	var selectedValue = null;
	var splitValue = null;
	var beforeSelectedIndex = 0;   // 以前の選択項目
	var popupflg = "0";   // 確認ポップアップ表示フラグ
	// 以前の選択項目 と 確認ポップアップ表示フラグ を求める 
	var size = obj.options.length;
	for (var i = 0; i < size; i++) {
		selectedValue = obj.options[i].value;
		splitValue = selectedValue.split(",")
		if (splitValue[0] == document.all.item("AZL_CURRENTPROCTYPE").value) {
			beforeSelectedIndex = i;
			popupflg = splitValue[1];
			break;
		}
	}
	// SUBMIT中でない場合 
	if (top.AZL_SUBMITFLAG == 0) {
		var confirmMsg = azlMsgKbnStr;
		selectedValue = obj.options[obj.selectedIndex].value;
		splitValue = selectedValue.split(",")
		if (popupflg == "1" && confirmMsg != null && msgLv >= azlMsgKbnLv) {
			confirmMsg = confirmMsg.replace("$1", splitValue[2]);
			if (confirm(confirmMsg)) {
				okflg = true;
			}
			else {
				window.top.AZL_NOCHECKFLAG = 0;
			}
		}
		else {
			okflg = true;
		}
	}
	if (okflg) {
		document.all.item("AZL_CURRENTPROCTYPE").value = splitValue[0];
		var commonValue = "SUBMITID=PROCKBN" + splitValue[0] + "," + document.gyomuframe.document.forms[0].AZL_COMMON.value ;
		AZS_LoadBusiness(commonValue);
	}
	else {
		// キャンセル処理 
		obj.selectedIndex = beforeSelectedIndex;
	}
}

// 処理区分の動的変更関数
function AZS_OperateProcessClassification(p_nProcKbn){
	var cbxobj = top.document.all.item("lbxProcKbn");
	if (cbxobj != null){
		cbxobj.selectedIndex = p_nProcKbn;
		cbxobj.onchange();
	}
}

//汎用ファイルダウンロードオープン
function AZS_GetFileAndOpen(url,names){
	var fileURL;
	var dummy = "/gprime/gpfw/comm/page/html/download_dummy.htm";
	var i;
	var j = 0;
	var z;
	var fileNames = names;
	var args = new Array();
	var files = new Array();
	var gamen;
	var Arguments = new Array();
	
	for(i = 0; i < fileNames.length ; i++){
		if ("," == fileNames.charAt(i)){
			args[i] = fileNames.substring(j,i);	
			j = i + 1;
			files[i] = url + args[i];
	 	}
	}

	for(z = 0; z < files.length; z ++){
		if(files[z] != null && files[z].length > 0){	
			fileURL = files[z];
			gamen = window.open(dummy+"?"+encodeURIComponent(fileURL), "DownLoad" + z , "height=200,width=400,toolbar=no,menubar=no,scrollbars=yes,scroll=yes,resizable=yes,location=no,status=no");
			
		}
	}
}

///////////////////////////////////////////////////////////
// 外部連携用JavaScript
// 外部連係情報を取得
function AZC_GetExtInfo(exSystemId, key) {
	// キーチェック
	if (exSystemId == "") {
		return "";
	}
	if (key == "") {
		return "";
	}

	// 当キーに対する項目を取得
	var obj = document.getElementById("AZL_EXT" + exSystemId + key);
	if (obj == null || obj == window.undefined) {
		return "";
    }
	return obj.value;
}

///////////////////////////////////////////////////////////
// Gprime JavaScript(基盤提供SUBMITなし関数)

// オンラインベースヘッダー文字列転記関数(保留-実行基盤)
function AZC_TransHeadString(transStr)
{
	if ( parent.document.all.item("Syori") == null ) {
		setTimeout("AZC_TransHeadStringExec('" + transStr + "')", 500);
	}else{
		AZC_TransHeadStringExec(transStr);
	}

	this.focus();
}
function AZC_TransHeadStringExec(transStr)
{
	if ( parent.document.all.item("Syori") != null ) {
		parent.document.all.item("Syori").innerText = transStr;
	}
}

// ツリービューツリー項目展開圧縮表示
function AZC_ExpandTreeItem(source) {
	var target = source;
	while (target != null) {
		if (target.className == "aznode") {
			break;
		}
		target = target.parentNode;
	}
	if ( target == null ) {
		return;
	}
	target = target.nextSibling;
	while ( target != null ) {
		if ( target.className == "aznode" ) {
			return;
		}
		if ( target.className == "azchildnodes" ) {
			break;
		}
		target = target.nextSibling;
	}
	if ( target == null ) {
		return;
	}
	if ( target.style.display == "block" ) {
		target.style.display = "none";
		source.src = "/gprime/shared/style/comm/images/folder_close.gif";
	} else {
		target.style.display = "block";
		source.src = "/gprime/shared/style/comm/images/folder_open.gif";
	}
}
// フル桁遷移
function AZC_SetFullInputNextFocus(srcName,nextObj,no){
	var lMaxLength = srcName.maxLength;
	var lStrLength = srcName.value.length;

   // 問題処理票_受入100922_002対応 開始
	var VK_TAB = 9;
	var VK_RETURN = 13;
	var VK_SHIFT = 16;
	// SHIFT+TABの場合
	if (event.shiftKey == true) {
		if (event.keyCode == VK_TAB) {
			return true;
		}
	}
   // 後項目からフル桁項目へ遷移する（SHIFT）場合
	if (event.keyCode == VK_SHIFT) {
		return true;
	}
	// TABの場合
	if (event.keyCode == VK_TAB) {
		return true;
	}
	// RETURN(TABのイベントに変換)
	if( event.keyCode == VK_RETURN ){
		if( 1 == g_flgReturnTab ){
			if( 'TEXTAREA' != event.srcElement.tagName && !(
					event.srcElement.tagName == 'INPUT' && event.srcElement.type == "file" ) ){
                                if ('object' == event.srcElement.tagName.toLowerCase()){
                                   if (!event.srcElement.getAttribute("MULTILINE")) {
                                         return true;
                                   }
                                }
                                else {
                                	return true;
                                }
			}
		}
	}
   // 問題処理票_受入100922_002対応 終了

	if( lStrLength >= lMaxLength ){
			AZC_SetFocusByName(nextObj,no);	
		}
		return true;
}

// フォーカス位置付け
function AZC_SetFocus(obj,no) {
    if ( no < 0 ) {
		if( null != obj ){
			obj.focus();
		}
    } else {
		if( null != no && null != obj && null != obj[no] ){
			obj[no].focus();
		}
	}
} 

// フォーカス位置付け（名前指定）
// AZC_SetFocusがbodyのonloadで動かないので･･･
function AZC_SetFocusByName(name,no) {
    try {
        // check
        if( null == name || 0 == name.length ){
            return ;
        }
        // 部品を探す->target
        var target = null ;
        var index = -1 ;
        for( i = 0 ;; i++ ){
            if( null == document.forms[i] ){
                break ;
            }
            for( j = 0 ;; j++ ){
                if( null == document.forms[i].elements[j] ){
                    break ;
                }
                if( name == document.forms[i].elements[j].name ){
                    if( 0 > no ){
                        // 明細外部品の場合
                        target = document.forms[i].elements[j] ;
                        var pType = target.type;
                        if (pType == "hidden") {
                            var obj = document.getElementsByName("gtx" + name);
                            if (obj != null && obj.length > 0) {
                                target = obj[0];
                            }
                        }
                        break ;
                    }
                    else{
                        // 明細内部品の場合、目的の行まで読み飛ばす
                        index = index + 1 ;
                        if( no == index ){
                            target = document.forms[i].elements[j] ;
                            var pType = target.type;
                            if (pType == "hidden") {
                                var obj = document.getElementsByName("gtx" + name);
                                if (obj != null && obj.length > no) {
                                    target = obj[no];
                                }
                            }
                            break ;
                        }
                    }
                }
            }
            if( null != target ){
                break ;
            }
        }
        // フォーカス
        if( null != target && !target.disabled ){
            target.focus() ;
        }else{
            AZC_SetFocusByNameForAllItem(name,no);
        }
    }catch (exception) {
        // エラーを発生した場合に、何もしません。
    }
}

// フォーカス位置付け（名前指定）＋Elementではなく、ALL ITEMでの検索
// AZC_SetFocusがbodyのonloadで動かないので･･･
function AZC_SetFocusByNameForAllItem(name,no) {
	// check
	if( null == name || 0 == name.length ){
		return ;
	}
	// 部品を探す->target
	var target = null ;
	var index = -1 ;

	for( i = 0 ;; i++ ){
		if( null == document.all[i] ){
			break ;
		}
		if( null != document.all[i].name){
			if( name == document.all[i].name ){
				if( 0 > no ){
					// 明細外部品の場合
					target = document.all[i] ;
					break ;
				}
				else{
					// 明細内部品の場合、目的の行まで読み飛ばす
					index = index + 1 ;
					if( no == index ){
						target = document.all[i] ;
						break ;
					}
				}
			}
		}
	}
	if(  null != target && !target.disabled ){
		// フォーカス
		target.focus();
	}
}

// アップロードされたファイルを削除
function AZC_DeleteClientFile(delmode,name){
	if ( delmode == 1 )
	{
		if (confirm("アップロードされたファイルを削除してよろしいですか？"))
		{
			var fso;
			fso = new ActiveXObject("Scripting.FileSystemObject");
			fso.DeleteFile(name);
		}
	}
	else if ( delmode == 2 )
	{
		var fso;
		fso = new ActiveXObject("Scripting.FileSystemObject");
		fso.DeleteFile(name);
	}
}

// ナビボタン左スクロール制御関数
function AZC_NavLscrl() {
	var navRscrl = document.getElementById("navRscrl");
	navRscrl.style.disabled="true";
	navRscrl.setAttribute("class", "aznavRscrl");
  navRscrl.setAttribute("className", "aznavRscrl");  //for IE

	var navLscrl = document.getElementById("navLscrl");
	navLscrl.style.disabled="false";
	navLscrl.setAttribute("class", "aznavLscrl_lock");
  navLscrl.setAttribute("className", "aznavLscrl_lock");  //for IE

	var objNav1 = document.getElementById("navs_1");
	objNav1.style.display="block";
	var objNav2 = document.getElementById("navs_2");
	objNav2.style.display="none";
	}
		
// ナビボタン右スクロール制御関数
function AZC_NavRscrl() {
	var navRscrl = document.getElementById("navRscrl");
	navRscrl.style.disabled="false";
	navRscrl.setAttribute("class", "aznavRscrl_lock");
  navRscrl.setAttribute("className", "aznavRscrl_lock");  //for IE

	var navLscrl = document.getElementById("navLscrl");
	navLscrl.style.disabled="true";
	navLscrl.setAttribute("class", "aznavLscrl");
  navLscrl.setAttribute("className", "aznavLscrl");  //for IE
  
	var objNav1 = document.getElementById("navs_1");
	objNav1.style.display="none";
	var objNav2 = document.getElementById("navs_2");
	objNav2.style.display="block";
	}
	
// 作業ボックス制御関数
function AZC_Boxclose( boxid ) {
	var TBODY = boxid + "tbody";
	var TFOOT = boxid + "tfoot";
	
	var obj = document.all.tags("tbody")(TBODY);
	if (obj == null || obj == window.undefined) {
		return;
	}
	var TBODYstat = obj.style.display;
	
	// TBODYstatは初期値なし（デフォルトの場合値が入っていない）


	if( TBODYstat != "none" ) {
		document.all.tags("tbody")(TBODY).style.display="none";
		document.all.tags("tfoot")(TFOOT).style.display="block";
	} else {
		document.all.tags("tbody")(TBODY).style.display="block";
		document.all.tags("tfoot")(TFOOT).style.display="none";
	}
}

// 順番ナビボタンをクリックすると、作業ボックスへ移動する
var g_navObj = null;
function AZC_MovetoBox(no) {
	if (g_navObj == null) {
		g_navObj = new OrderNavigator();
	}
	if (no < g_navObj.activeTasks.length) {
		g_navObj.activeTasks[no].focusOn();
	}
}

// インナーフレーム部品サイズ自動変更
function AZC_DyniFrameSize(item) {
	item.height = item.Document.body.scrollHeight;
	item.width = item.Document.body.scrollWidth;
}

//可変明細明細行の背景色指定
function AZC_TROnClickExtention(obj,lineCount){
}

// シートの開閉
function AZC_ShtcloseSub( screenname,shtid ) {
	shtid = screenname + "." + shtid;
	var TBODY = shtid + "tbody";
	var TFOOT = shtid + "tfoot";
	
	var TBODYstat = document.getElementById( TBODY ).style.display;
	
	// TBODYstatは初期値なし（デフォルトの場合値が入っていない）
	if( TBODYstat != "none" ) {
			document.getElementById( TBODY ).style.display="none";
			document.getElementById( TFOOT ).style.display="block";
	} else {
			document.getElementById( TBODY ).style.display="block";
			document.getElementById( TFOOT ).style.display="none";
	}
}

// シートの開閉
function AZC_Shtclose( shtid ) {
	var TBODY = shtid + "tbody";
	var TFOOT = shtid + "tfoot";
	
	var TBODYstat = document.getElementById( TBODY ).style.display;
	
	// TBODYstatは初期値なし（デフォルトの場合値が入っていない）
	if( TBODYstat != "none" ) {
			document.getElementById( TBODY ).style.display="none";
			document.getElementById( TFOOT ).style.display="block";
	} else {
			document.getElementById( TBODY ).style.display="block";
			document.getElementById( TFOOT ).style.display="none";
	}
}
/////////////////////////////////////////////////////////////
// Gprime JavaScript（基盤内部関数）
// 一覧表の頁制御（右）
function AZC_listToRight(obj, leftBtn, tableID) {
  AZC_listToRightSub("", obj, leftBtn, tableID);
}
function AZC_listToRightSub(screenName, obj, leftBtn, tableID) {
	  var ctrlclm = "ctrlclm";
	  if (screenName != "") {
  	leftBtn = screenName + "." + leftBtn;
  	tableID = screenName + "." + tableID;
  	ctrlclm = screenName + "." + ctrlclm;
  }
  var leftButton = document.getElementById(leftBtn);
  leftButton.disabled = false;
	var objTable = document.getElementById( tableID );
	var COLGROUP = objTable.getElementsByTagName("colgroup");
  var colsF = 0;
  var colsT = 0;
  var colNum = false;
	for( var i=0; i<COLGROUP.length-1; i++ )
	{
		colsF = colsT;
		colsT = colsT + COLGROUP[i].childNodes.length;
		if ( COLGROUP[i].id == ctrlclm ){
			if (COLGROUP[i].colGroupNum == "true") {
				colNum = true;
			}
			continue;
		}
		if ( COLGROUP[i].style.display == "block" ) {
			COLGROUP[i].style.display = "none";
			COLGROUP[i+1].style.display = "block";
			if (objTable.getElementsByTagName("OBJECT").length!=0) {
				if (colNum) {
					for(var k = 0; k < objTable.childNodes.length; k++){
						var TR = objTable.childNodes[k];
						for(var l = 0; l < TR.childNodes.length; l++){
							var TDS = TR.childNodes[l];
							for(var n = 0; n < TDS.childNodes.length; n++){
							var TD = TDS.childNodes[n];
						    var objTag = TD.getElementsByTagName("OBJECT");
							if (objTag != null && objTag.length > 0) {
							    var colGroupNum = TD.getAttribute("colGroupNum");
							    if (colGroupNum != null && colGroupNum != undefined) {
									if (colGroupNum == i) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="none";
									        }
							 	    }
									else if (colGroupNum == (i + 1)) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="block";
									        }
								    }
						        }
								else {
									alert("明細に、外字タグ(object)のTDにcolGroupNum属性を設定しません。");
									return;
								}
							}
							}
						}
					}
				}
				else {
				    for (var r=0; r<objTable.rows.length; r++) {
						for (var j=colsF; j<colsT; j++) {
							var objTd = objTable.rows[r].cells[j];
							if (objTd != null) {
								var objTag = objTd.getElementsByTagName("OBJECT");
							  if (objTag != null) {
							      for(var k = 0; k < objTag.length; k++){
							          objTag[k].style.display="none";
							      }
							  }
							}
					}	
					for (var j=colsT; j<=colsT+COLGROUP[i+1].childNodes.length-1; j++) {
							var objTd = objTable.rows[r].cells[j];
							if (objTd != null) {
								var objTag = objTd.getElementsByTagName("OBJECT");
							  if (objTag != null) {
							      for(var k = 0; k < objTag.length; k++){
							          objTag[k].style.display="block";
							      }
							  }
							}
					}		
				}
			  }
			}
			// 明細に、selectタグ(mcx)の制御
		  if (objTable.getElementsByTagName("select").length!=0) {
			  if (colNum) {
					for(var k = 0; k < objTable.childNodes.length; k++){
						var TR = objTable.childNodes[k];
						for(var l = 0; l < TR.childNodes.length; l++){
							var TDS = TR.childNodes[l];
							for(var n = 0; n < TDS.childNodes.length; n++){
						    var TD = TDS.childNodes[n];
						    var objTag = TD.getElementsByTagName("select");
							if (objTag != null && objTag.length > 0) {
							    var colGroupNum = TD.getAttribute("colGroupNum");
							    if (colGroupNum != null && colGroupNum != undefined) {
									if (colGroupNum == i) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="none";
									        }
							 	    }
									else if (colGroupNum == (i + 1)) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="block";
									        }
								    }
						        }
								else {
									alert("明細に、selectタグ(mcx)のTDにcolGroupNum属性を設定しません。");
									return;
								}
							}
							}
						}
					}
			  }
			  else {
		         for (var r=0; r<objTable.rows.length; r++) {
		           for (var j=colsF; j<colsT; j++) {
		              var objTd = objTable.rows[r].cells[j];
		              var objTag = objTd.getElementsByTagName("select");
		              if (objTag != null) {
		                  for(var k = 0; k < objTag.length; k++){
		                      objTag[k].style.display="none";
		                  }
		              }
		          }
		          for (var j=colsT; j<=colsT+COLGROUP[i+1].childNodes.length-1; j++) {
		              var objTd = objTable.rows[r].cells[j];
		              var objTag = objTd.getElementsByTagName("select");
		              if (objTag != null) {
		                 for(var k = 0; k < objTag.length; k++){
		                     objTag[k].style.display="block";
		                  }
		              }
		           }
			  }
		    }
		  }
			if (i == COLGROUP.length-2) {
		 	  obj.disabled = true;
		 	  if (leftButton != null && leftButton.disabled != true){
		 	  		leftButton.focus();
		 	  }
		  }
			break;
		}				
	}
	// 川口外字対応　2011/9/12
	setGaijiTextValue();
}
// 一覧表の頁制御（左）
function AZC_listToLeft(obj, rightBtn, tableID) {
	AZC_listToLeftSub("", obj, rightBtn, tableID);  
}
function AZC_listToLeftSub(screenName, obj, rightBtn, tableID) {
	  var ctrlclm = "ctrlclm";
	  if (screenName != "") {
  	rightBtn = screenName + "." + rightBtn;
  	tableID = screenName + "." + tableID;
  	ctrlclm = screenName + "." + ctrlclm;
  }
  var rightButton = document.getElementById(rightBtn);
  rightButton.disabled = false;
	var objTable = document.getElementById( tableID );
	var COLGROUP = objTable.getElementsByTagName("colgroup");
  var colsF = 0;
  var colsT = 0;
  var colNum = false;
	for( var i=0; i<COLGROUP.length; i++ )
	{
		colsF = colsT;
		colsT = colsT + COLGROUP[i].childNodes.length;
		if ( COLGROUP[i].id == ctrlclm ){
			if (COLGROUP[i].colGroupNum == "true") {
				colNum = true;
			}
			continue;
		}
		if ( COLGROUP[i].style.display == "block" ) {
			COLGROUP[i].style.display = "none";
		  COLGROUP[i-1].style.display = "block";
			if (objTable.getElementsByTagName("OBJECT").length!=0) {
				if (colNum) {
					for(var k = 0; k < objTable.childNodes.length; k++){
						var TR = objTable.childNodes[k];
						for(var l = 0; l < TR.childNodes.length; l++){
							var TDS = TR.childNodes[l];
							for(var n = 0; n < TDS.childNodes.length; n++){
						    var TD = TDS.childNodes[n];
						    var objTag = TD.getElementsByTagName("OBJECT");
							if (objTag != null && objTag.length > 0) {
							    var colGroupNum = TD.getAttribute("colGroupNum");
							    if (colGroupNum != null && colGroupNum != undefined) {
									if (colGroupNum == i) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="none";
									        }
							 	    }
									else if (colGroupNum == (i - 1)) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="block";
									        }
								    }
						        }
								else {
									alert("明細に、外字タグ(object)のTDにcolGroupNum属性を設定しません。");
									return;
								}
							}
							}
						}
					}
				}
				else {
				for (var r=0; r<objTable.rows.length; r++) {
						for (var j=(colsT-1); j>=colsF; j--) {
							var objTd = objTable.rows[r].cells[j];
							if (objTd != null) {
								var objTag = objTd.getElementsByTagName("OBJECT");
							  if (objTag != null) {
							      for(var k = 0; k < objTag.length; k++){
							          objTag[k].style.display="none";
							      }
							  }
							}
					}		
					for (var j=(colsF-1); j>=colsF-COLGROUP[i-1].childNodes.length; j--) {
							var objTd = objTable.rows[r].cells[j];
							if (objTd != null) {
								var objTag = objTd.getElementsByTagName("OBJECT");
							  if (objTag != null) {
							      for(var k = 0; k < objTag.length; k++){
							          objTag[k].style.display="block";
							      }
							  }
							}
					}		
				}
			  }
			}
			// 明細に、selectタグ(mcx)の制御
		  if (objTable.getElementsByTagName("select").length!=0) {
				if (colNum) {
					for(var k = 0; k < objTable.childNodes.length; k++){
						var TR = objTable.childNodes[k];
						for(var l = 0; l < TR.childNodes.length; l++){
							var TDS = TR.childNodes[l];
							for(var n = 0; n < TDS.childNodes.length; n++){
							var TD = TDS.childNodes[n];
						    var objTag = TD.getElementsByTagName("select");
							if (objTag != null && objTag.length > 0) {
							    var colGroupNum = TD.getAttribute("colGroupNum");
							    if (colGroupNum != null && colGroupNum != undefined) {
									if (colGroupNum == i) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="none";
									        }
							 	    }
									else if (colGroupNum == (i - 1)) {
									        for(var m = 0; m < objTag.length; m++){
									            objTag[m].style.display="block";
									        }
								    }
						        }
								else {
									alert("明細に、selectタグ(mcx)のTDにcolGroupNum属性を設定しません。");
									return;
								}
							}
							}
						}
					}
				}
				else {
				for (var r=0; r<objTable.rows.length; r++) {
						for (var j=(colsT-1); j>=colsF; j--) {
							var objTd = objTable.rows[r].cells[j];
							if (objTd != null) {
								var objTag = objTd.getElementsByTagName("select");
							  if (objTag != null) {
							      for(var k = 0; k < objTag.length; k++){
							          objTag[k].style.display="none";
							      }
							  }
							}
					}		
					for (var j=(colsF-1); j>=colsF-COLGROUP[i-1].childNodes.length; j--) {
							var objTd = objTable.rows[r].cells[j];
							if (objTd != null) {
								var objTag = objTd.getElementsByTagName("select");
							  if (objTag != null) {
							      for(var k = 0; k < objTag.length; k++){
							          objTag[k].style.display="block";
							      }
							  }
							}
					}		
				}
			  }
			}
			if (COLGROUP[i-2].id == ctrlclm) {
			 	obj.disabled = true;
			 	if (rightButton != null && rightButton.disabled != true) {
			 		rightButton.focus();
			 	}
			}
			break;
		}
	}
	// 川口外字対応　2011/9/12
	setGaijiTextValue();
}

// ---------------------------------------------------------
// 選択行
// ---------------------------------------------------------
// 統基835-依01-明細強調表示のSubmit対応 修正開始
function AZC_RowSelectedBack( switchObj ,flag){

	type = switchObj.getAttribute("type");

	// 選択行のIDを格納
	if (flag == 0) {
	  id = switchObj.getAttribute("id");
	  setSelectItemID(id);
	}
	
	if ( type == "checkbox" ) {
		AZC_RowSelected_checkbox( switchObj );
	} else if ( type == "radio" ) {
	　　　　//g_AZC_RowSelected_radio_name = "";
		//g_AZC_RowSelected_radio_obj = "";
		AZC_RowSelected_radio( switchObj );
	}

}

function AZC_RowSelected( switchObj){
　　AZC_RowSelectedBack( switchObj ,0);
}

// 画面をロードの時、選択行の強調色を追加する。
function AZC_RowSelectedAddColor(selectItemID){

 var checkFlg = true;

 if (selectItemID != null) {
    setSelectItemID(selectItemID)
 }

 var ArrLen = parent.azlSelectItemId.length;
 for (var i = 0; i < ArrLen; i++) {
    // 選択行のIDを取得
    var name = parent.azlSelectItemId[i];
　  // 選択行を取得
　  var obj = document.getElementsByName(name);
　  // 強調色を追加
　  if (obj != null && obj != window.undefined) {
　　  for (var j = 0; j < obj.length; j++) {
　　　  var switchObj = obj[j];
　　　  AZC_RowSelectedBack( switchObj ,1);
　 　}
　 }
 }
}

// 明細選択行のチェックボックス(ラジオボタン)IDを設定
function setSelectItemID(selectItemID){
  if (selectItemID == null) {
      return;
  }
  var obj = document.getElementById(selectItemID);
  var onclickEvent = "";
  if (obj != null) {
     onclickEvent = obj.parentNode.innerHTML;
  }
  if (obj == null || onclickEvent == null) {
      return;
  }
  if (onclickEvent.indexOf("AZC_RowSelected") < 0) {
      return;
  }
  var ArrLen = parent.azlSelectItemId.length;
  var checkFlg = true;
 
  if (ArrLen > 0) {
   for (var i = 0; i <parent.azlSelectItemId.length; i++ ) {
    if (selectItemID == parent.azlSelectItemId[i]) {
       checkFlg = false;
       break;
     }
   }
 }

 if (checkFlg) {
  parent.azlSelectItemId.push(selectItemID);
 }
}
// 統基835-依01-明細強調表示のSubmit対応 修正終了

// ---------------------------------------------------------
// 選択行（ラジオボタン専用）
// ---------------------------------------------------------
var g_AZC_RowSelected_radio_name = "";
var g_AZC_RowSelected_radio_obj = "";

function AZC_RowSelected_radio( switchObj ){
    name = switchObj.getAttribute("name");
    radios = document.getElementsByName( name );

    var TR = "";
    var selectedLine = "";
    // 前回のラジオボタングループと同じなら直接変更
    //問題処理票_総合120222_001_ラジオボタン遅延_if語句を追加する
        if ( name == g_AZC_RowSelected_radio_name || !g_AZC_RowSelected_radio_name ) {
	if (g_AZC_RowSelected_radio_name && g_AZC_RowSelected_radio_obj && !g_AZC_RowSelected_radio_obj.checked) {
        // 前回分
        var arrTR = AZI_findTR( g_AZC_RowSelected_radio_obj );

        for (i = 0; i < arrTR.length; i++) {
            TR = arrTR[i];	
            AZC_ClassNameDel( TR, "azselectedOne" );

            // 問題処理票_受入101213_002
            var checkFlg = false;
            if (TR.className.indexOf("azselected") >= 0) {
                checkFlg = true;
            }
            selectedLine = AZC_GetSelectedLine(TR, arrTR.length);
            var fromobj = TR.getElementsByTagName("OBJECT");
            if (fromobj != null) {
                for (var j = 0; j < fromobj.length; j++) {
                    var hidObj = document.getElementsByName(fromobj[j].id.substr(3));
                    if (selectedLine >= hidObj.length) {
                        return;
                    }

                    // 問題処理票_受入101213_002
                    if (hidObj[selectedLine].bgColorSetFlag != "1"){
						if (checkFlg) {
							fromobj[j].BACKGROUND_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
							fromobj[j].CONTROL_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
						}
						else {
							fromobj[j].BACKGROUND_COLOR = hidObj[selectedLine].style.backgroundColor;
							fromobj[j].CONTROL_COLOR = hidObj[selectedLine].style.backgroundColor;
						}
					}
                    
                    // 2011/03/01 明細行の選択表示について
                    if (fromobj[j].USE_FONT == "server" || fromobj[j].USE_FONT == "client_server"
                        || fromobj[j].USE_FONT == "client_server_2" || fromobj[j].USE_FONT == "client") {
                        fromobj[j].Refresh();
                    }
                }
            }
         }
    }
　　　//問題処理票_総合120222_001_ラジオボタン遅延_if語句を追加する
　　　if (switchObj.checked) {
        // 今回分
        g_AZC_RowSelected_radio_obj = switchObj;
		g_AZC_RowSelected_radio_name = name;
        var nArrTR = AZI_findTR( switchObj );

        for (i = 0; i < nArrTR.length; i++) {
            TR = nArrTR[i];
            AZC_ClassNameAdd_ByBaseClass( TR, "azselectedOne", "azodd azeven azselected", "after" );
            selectedLine = AZC_GetSelectedLine(TR, nArrTR.length);
            var obj = TR.getElementsByTagName("OBJECT");
            if (obj != null) {
                for (var n = 0; n < obj.length; n++) {
                    var hidObj = document.getElementsByName(obj[n].id.substr(3));
                    if (selectedLine >= hidObj.length) {
                        return;
                    }
                    if (hidObj[selectedLine].bgColorSetFlag != "1"){
					    obj[n].BACKGROUND_COLOR = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
						obj[n].CONTROL_COLOR = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
					}
                    // 2011/03/01 明細行の選択表示について
                    if (obj[n].USE_FONT == "server" || obj[n].USE_FONT == "client_server"
                        || obj[n].USE_FONT == "client_server_2" || obj[n].USE_FONT == "client") {
                        obj[n].Refresh();
                    }
                }
            }
        }
　　　}	
    }
    else // 前回と異なるラジオボタングループなら全検索…行数が多いと遅い
    {
        g_AZC_RowSelected_radio_name = name;
        g_AZC_RowSelected_radio_obj = switchObj;

        for (var j=0; j<radios.length; j++) {
            // 選択行以外は全てclassを削除
            if ( radios[j].checked ) {
                var arrTR = AZI_findTR( radios[j] );
                for (i = 0; i < arrTR.length; i++) {
                        TR = arrTR[i];
                        AZC_ClassNameAdd_ByBaseClass( TR, "azselectedOne", "azodd azeven azselected", "after" );
                        selectedLine = AZC_GetSelectedLine(TR, arrTR.length);
                        var obj = TR.getElementsByTagName("OBJECT");
                        if (obj != null) {
                                for (var n = 0; n < obj.length; n++) {
                                    var hidObj = document.getElementsByName(obj[n].id.substr(3));
                                    if (selectedLine >= hidObj.length) {
                                        return;
                                    }
                                    if (hidObj[selectedLine].bgColorSetFlag != "1"){
										obj[n].BACKGROUND_COLOR = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
										obj[n].CONTROL_COLOR = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
									}
                                    // 2011/03/01 明細行の選択表示について
                                    if (obj[n].USE_FONT == "server" || obj[n].USE_FONT == "client_server"
                                         || obj[n].USE_FONT == "client_server_2" || obj[n].USE_FONT == "client") {
                                         obj[n].Refresh();
                                    }
                                }
                        }
                }
            } else {
                    var arrTR = AZI_findTR( radios[j] );
                    for (i = 0; i < arrTR.length; i++) {
                            TR = arrTR[i];
                            AZC_ClassNameDel( TR, "azselectedOne" );
                            // 問題処理票_受入101213_002
                            var checkFlg = false;
                            if (TR.className.indexOf("azselected") >= 0) {
                                checkFlg = true;
                            }
                            selectedLine = AZC_GetSelectedLine(TR, arrTR.length);
                            var fromobj = TR.getElementsByTagName("OBJECT");
                            if (fromobj != null) {
                                for (var n = 0; n < fromobj.length; n++) {
                                    var hidObj = document.getElementsByName(fromobj[n].id.substr(3));
                                    if (selectedLine >= hidObj.length) {
                                        return;
                                    }
                                    // 問題処理票_受入101213_002
                                    if (hidObj[selectedLine].bgColorSetFlag != "1"){
										if (checkFlg) {
											fromobj[n].BACKGROUND_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
											fromobj[n].CONTROL_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
										}
										else {
											fromobj[n].BACKGROUND_COLOR = hidObj[selectedLine].style.backgroundColor;
											fromobj[n].CONTROL_COLOR = hidObj[selectedLine].style.backgroundColor;
										}
										// 2011/03/01 明細行の選択表示について
										if (fromobj[n].USE_FONT == "server" || fromobj[n].USE_FONT == "client_server"
											 || fromobj[n].USE_FONT == "client_server_2" || fromobj[n].USE_FONT == "client") {
											 fromobj[n].Refresh();
										}
									}
                                    // 2011/03/01 明細行の選択表示について
                                    if (fromobj[n].USE_FONT == "server" || fromobj[n].USE_FONT == "client_server"
                                         || fromobj[n].USE_FONT == "client_server_2" || fromobj[n].USE_FONT == "client") {
                                         fromobj[n].Refresh();
                                    }
                                }
                            }
                    }
            }
        }
    }
}

// ---------------------------------------------------------
// 選択行（チェックボックス専用）
// ---------------------------------------------------------
function AZC_RowSelected_checkbox( switchObj ){

	var arrTR = AZI_findTR( switchObj );
	if ( switchObj.checked ) {
		for (i = 0; i < arrTR.length; i++) {
		    var TR = arrTR[i];
		    AZC_ClassNameAdd_ByBaseClass( TR, "azselected", "azodd azeven", "after" );
	            var selectedLine = AZC_GetSelectedLine(TR, arrTR.length);
		    var obj = TR.getElementsByTagName("OBJECT");
        if (obj != null) {
            for (var j = 0; j < obj.length; j++) {
                var hidObj = document.getElementsByName(obj[j].id.substr(3));
			          if (selectedLine >= hidObj.length) {
                  			return;
			          }
                      // 問題処理票_受入101213_002
                        if (hidObj[selectedLine].bgColorSetFlag != "1"){
					        if (obj[j].BACKGROUND_COLOR != top.azlGaijiRadioColor[top.azlStyleSheetID - 1]) {
							   obj[j].BACKGROUND_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
							   obj[j].CONTROL_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
						    }
					    }
                                // 2011/03/01 明細行の選択表示について
                                  if (obj[j].USE_FONT == "server" || obj[j].USE_FONT == "client_server"
                                       || obj[j].USE_FONT == "client_server_2" || obj[j].USE_FONT == "client") {
                                       obj[j].Refresh();
                                  }
			     }
		    }
		}
	} else {
		for (i = 0; i < arrTR.length; i++) {
		    var TR = arrTR[i];
		    AZC_ClassNameDel( TR, "azselected" );
		    var selectedLine = AZC_GetSelectedLine(TR, arrTR.length);
		    var fromobj = TR.getElementsByTagName("OBJECT");
		    if (fromobj != null) {
            for (var j = 0; j < fromobj.length; j++) {
			        var hidObj = document.getElementsByName(fromobj[j].id.substr(3));
			        if (selectedLine >= hidObj.length) {
                  		return;
			        }
                    // 問題処理票_受入101213_002
                    if (hidObj[selectedLine].bgColorSetFlag != "1"){
					    if (fromobj[j].BACKGROUND_COLOR != top.azlGaijiRadioColor[top.azlStyleSheetID - 1]) {
							fromobj[j].BACKGROUND_COLOR = hidObj[selectedLine].style.backgroundColor;
							fromobj[j].CONTROL_COLOR = hidObj[selectedLine].style.backgroundColor;
                        }
					}
                                // 2011/03/01 明細行の選択表示について
                                if (fromobj[j].USE_FONT == "server" || fromobj[j].USE_FONT == "client_server"
                                   || fromobj[j].USE_FONT == "client_server_2" || fromobj[j].USE_FONT == "client") {
                                   fromobj[j].Refresh();
                                }
			     }
		    }
		}
	}

}
function AZC_GetSelectedLine(obj, spanCount) {
	var index = 0;
	try {
		index = (obj.sectionRowIndex - obj.sectionRowIndex % spanCount) / spanCount;
	}
	catch (e) {
		index = 0;
	}
	return index
}
// ---------------------------------------------------------
// クラスを追加する汎用関数
//
// keyword: head/after/before/tail限定
//
// ---------------------------------------------------------
function AZC_ClassNameAdd_ByBaseClass( element, addClassName, baseClassName, keyword ) {
	Str = element.className;
	classes = element.className.split(" ");

	// 一応、既にクラスがあるか確認
	var Addflg = true;
	for( var i=0; i<classes.length; i++ ) {
		var Uclass = classes[i].toUpperCase();
		var Uadd = addClassName.toUpperCase();
		if ( Uclass == Uadd ) {
			Addflg = false;
			break;
		}
	}

	// 重複が無ければ追加
	var resultStr = "";
	if ( Addflg ) {
		switch (keyword) {
			case "head":
				element.className = addClassName + " " + Str;
				break;

			case "tail":
				element.className = Str + " " + addClassName;
				break;

			default:

			// 挿入先indexの保存
			var index = 0;
			if ( keyword == "before" ) {
				index = classes.length - 1;
				if ( index < 0 ) { index = 0; }
			}
			baseClasses = baseClassName.split(" ");
			for( j=0; j<baseClasses.length; j++ ) {
				// 指定のクラス名を探す
				for( var i=0; i<classes.length; i++ ) {

						var Uclass = classes[i].toUpperCase();
						var Ubase = baseClasses[j].toUpperCase();
						if ( Uclass == Ubase ) {
							if ( keyword == "before" ) {
								if( index > i ) { index = i; } // 最小を保存
							} else {
								if( index < i ) { index = i; } // 最大を保存
							}
							continue;
						}
				}
			}

			for( var i=0; i<classes.length; i++ ) {
				var sp = " ";
				if ( resultStr == "" ) { sp = ""; }

				if ( i == index ) {
					if ( keyword == "before" ) {
						resultStr = resultStr + sp + addClassName + " " + classes[i];
					} else {
						resultStr = resultStr + sp + classes[i] + " " + addClassName;
					}
					continue;
				}
				resultStr = resultStr + sp + classes[i];

			} // for-end
			element.className = resultStr;
		} // switch-end
	} // if-end
}

// ---------------------------------------------------------
// クラスを削除する汎用関数
// ---------------------------------------------------------
function AZC_ClassNameDel( element, delClassName ) {
	Str = element.className;
	classes = element.className.split(" ");

	var resultStr = "";
	for( var i=0; i<classes.length; i++ ) {
		var Uclass = classes[i].toUpperCase();
		var Udel = delClassName.toUpperCase();

		//alert( i +":"+ Uclass +":"+ Udel );

		if ( Uclass == Udel ) {
			continue;
		}
		var sp = " ";
		if ( resultStr == "" ) { sp = ""; }
		resultStr = resultStr + sp + classes[i];
	}
	element.className = resultStr;
}

//実行ボタンのリターンキーで実行する
function AZC_TbnOnKeyDown(obj) {
  
  //var VK_RETURN = 13;
  //if (event.keyCode==VK_RETURN) {
  //   obj.focus();
	// obj.click();
  //}
}

//日付編集形式を設定します
function AZC_SetDateFormateType() {
	//ドット形式
	g_dataSeparator = ".";
}

// キャンセル時のフォーカス遷移
function AZC_SetDlgCancelFocus() {
	if (parent.curFocusFlag == 1) {
		var focuseObj = document.getElementById(parent.curFocus);
		if (focuseObj != null && focuseObj != window.undefined) {
			if (!focuseObj.disabled) {
				focuseObj.focus();
				parent.curFocusFlag = 0;
			}
		}
    }
}

// ページ明細部品の件数表示ボタン押下時のフォーカス遷移
function AZC_SetTbcFocus() {
	if (parent.tbcCurFocusFlag == 1) {
		var focuseObj = document.getElementById(parent.tbcCurFocus);
		if (focuseObj != null && focuseObj != window.undefined) {
			if (!focuseObj.disabled) {
				focuseObj.focus();
				parent.tbcCurFocusFlag = 0;
			}
		}
    }
}

// ページ明細部品の頁数変更時のフォーカス遷移
function AZC_SetTbcPageFocus() {
	if (parent.tbcCurPageFocusFlag == 1) {
		var pageStart = null;
	   var tableObj = null;
	   var tbcName = parent.tbcCurPageFocusTBCItemName;
	   if (tbcName != null  && tbcName  != window.undefined) {
	   	    tableObj = document.getElementById(tbcName);
	   	}
	   	var focuspage = 0;
	   	if (parent.tbcCurPageFocusValue != null) {
	   		if (parent.tbcCurPageFocusValue== "&lt;&lt;") {
	   			focuspage = 2;
	   		}
	   	   else {
	   		    focuspage = parent.tbcCurPageFocusValue;
	   		    focuspage++;
	   		}
	   	}
	   if (tableObj  != null && tableObj != window.undefined) {
		    var focuseObj = tableObj.getElementsByTagName("a");
	    	for (i = 0; i < focuseObj.length; i ++) {
		    	var obj = focuseObj[i];
		     	if (obj != null && obj != window.undefined && obj.name == "mslCurPage") {
		     		if (pageStart == null) {
		     			pageStart = focuseObj[i];
		     		}
			    	if (obj.innerHTML == focuspage) {
			    			if (obj != null && obj != window.undefined && !obj.disabled) {
			    			    obj.focus();  
			                  parent.tbcCurPageFocusFlag = 0;
					           return;
			    			}
				   }
			    	else if (i == focuseObj.length - 1) {
			    	   	    if (pageStart != null && pageStart != window.undefined && !pageStart.disabled) {
			    	   	        pageStart.focus();  
			                  parent.tbcCurPageFocusFlag = 0;
					           return;
			    	   	    }
			    		}		
		    	}
		   }
        }
	   	}
}

// altキーによる実行関数
function AZC_AltAccessKeyAction() {
	if (g_flgShortcutSubmit == 1) {
		if(event.altKey) {
			event.srcElement.click();
		}
	}
}

///////////////////////////////////////////////////////////
//内部関数

///////////////////////////////////////////////////////////
// エラーダイアログ
function AZI_SetAbort( p_zFunctionName, p_zAbortMsg ){
	alert( "function : " + p_zFunctionName +"\n" + p_zAbortMsg ) ;
}

// IEバージョン4チェック
function AZI_is_jsIE4()
{
	var strTmp = escape("あ");
	if (strTmp.charAt(0) == '%' && strTmp.charAt(1) == 'u') {
		return 1;
	} else {
		return 0;
	}
}

// 文字列のバイト数を返す
function AZI_bytelength(str)
{
	var nChar = 0;
	var strTmp;
	var bIE4;

	strTmp = escape(str);
	var n = strTmp.length;

	bIE4 = AZI_is_jsIE4();

	var i;
	for (i = 0; i < n; i++) {
		if (strTmp.charAt(i) == '%') {
			if (bIE4 == 1 && strTmp.charAt(i+1) == 'u') {
				if (strTmp.charAt(i+2) == 'F' && strTmp.charAt(i+3) == 'F') {
					var x = strTmp.charAt(i+4);
					if (x < '6' || x > '9')
						nChar++;
				} else {
					nChar++;
				}
				i += 5;
			} else {
				if ((strTmp.charAt(i+1) == 'D' && strTmp.charAt(i+2) == '7') || (strTmp.charAt(i+1) == 'B' && strTmp.charAt(i+2) == '1') || (strTmp.charAt(i+1) == 'F' && strTmp.charAt(i+2) == '7')){
					nChar++;
				}
				i += 2;
			}
		}
		nChar++;
	}
	return nChar;
}

// 改行コードを1桁として、文字数を返す
function AZI_LengthWithCRLF(value) 
{

	// 改行の除いた文字列を取得
	// 改行文字定義
	var valueNoCRL = "";
	var strCRLF = "%0D%0A";
	var strn = "\n";
	
	// 検索＆編集
	var count = 0;
	var pos = 0 ;
	while( true ){
		var foundCRLF = value.indexOf( strCRLF, pos ) ;
		var foundn = value.indexOf( strn, pos ) ;
	    if( -1 != foundCRLF ){
	    	  count++;
    	    if( -1 != foundn ){
        	    if( foundCRLF < foundn ){
                	pos = foundCRLF + strCRLF.length;
	            }else{
	                pos = foundn + strn.length ;
	            }
    	    }else{
            	pos = foundCRLF + strCRLF.length ;
	        }
    	}else{
        	if( -1 != foundn ){
             	count++;
	            pos = foundn + strn.length ;
	        }else{
        	    pos = value.length ;
	        }
    	}
	    if( pos == value.length ){
	        break;
    	}
	}

	// 文字列文字数を取得
	var len = value.length - count;
	return len;
}
// カナチェック
function AZI_KanaExists(str)
{
	var i,j;

	var in_str1 = str;
	var in_str2 = ALLOWCHAR_HANKANA;

	// チェック
	var bRet = true;
	for( i=0 ; i<in_str1.length ; i++ ) {
		for( j=0 ; j<in_str2.length ; j++ ) {
			if( in_str1.charAt(i) == in_str2.charAt(j) ) {
				return true;
			}
		}
	}
	return false;
}

var g_strNum = "０１２３４５６７８９";

//西暦日付チェック
//西暦日付が妥当かチェックする
//YYYYMMDD形式に限定
function AZI_ChkS(
	in_str
){
	var iBuf_Y,iBuf_M,iBuf_D;
	var iMax_D;
	
	var bRet = false;
	if( 8 != in_str.length ){
		//要求する形式に一致するか？
		return false;
	}
	
	//バッファに格納
	iBuf_Y = in_str.substring( 0,4 );
	//年を抽出
	if( isNaN( iBuf_Y ) ){
		return false ;
	}
	iBuf_M = in_str.substring( 4,6 );
	//月を抽出
	if( isNaN( iBuf_M ) ){
		return false ;
	}
	iBuf_D = in_str.substring( 6,8 );
	//日を抽出
	if( isNaN( iBuf_D ) ){
		return false ;
	}
	
	//年のチェック
	if( 0 >= iBuf_Y ){
		return false ;
	}
	//月のチェック
	if( iBuf_M < 1 || 12 < iBuf_M ){
		return false;
	}
	
	//2月ならば閏年の判定
	if( 2 == iBuf_M ){
		if( ((0 == (iBuf_Y % 4)) && (0 != (iBuf_Y % 100))) || (0 == (iBuf_Y % 400)) ) {
			iMax_D = 29 ;//閏年
		}
		else {
			iMax_D = 28 ;
		}
	}
	else if( (1 == (iBuf_M % 7) % 2) || 7 == iBuf_M ){
		// 31日の月:1,3,5,7,8,10,12
		iMax_D = 31 ;
	}
	else {
		//30日の月:4,6,9,11
		iMax_D = 30;
	}

	//日のチェック
	if( iBuf_D < 1 || iMax_D < iBuf_D ){
		return false;
	}
	
	//チェックを通ればOK
	return true;
}


//和暦日付チェック
//和暦日付が妥当かチェックする
//GYYMMDD形式に限定
function AZI_ChkWDate(
	in_str
){
	var iBuf_Y ;
	// 元号チェック
	var Flg = false ;
	var i ;
	var arrBuf ;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (in_str.charAt(0) == arrBuf[0]//元号チェック
		  || in_str.charAt(0) == arrBuf[1]
		  || in_str.charAt(0) == arrBuf[2])
		){
			//合致する元号があったら
			//年度の部分を抽出して西暦に変換
			if( isNaN(in_str.substring(1,3)) ){
				return false ;
			}
			iBuf_Y = parseFloat( arrBuf[3] ) + parseFloat( in_str.substring(1,3) ) -1;
			Flg = true;
			break;
		}
	}
	if( !Flg ){
		//該当する元号がなかったら
		return false;
	}
	if( isNaN(iBuf_Y) ){
		return false ;
	}
	if( isNaN(in_str.substring( 3, 5 )) ){
		return false ;
	}
	if( isNaN(in_str.substring( 5, 7 )) ){
		return false ;
	}
	
	// 開始・終了チェック
	var date = AZI_EditSDate( iBuf_Y, in_str.substring( 3, 5 ), in_str.substring( 5, 7 ) ) ;
	var start = AZI_EditSDate( arrBuf[3], arrBuf[4], arrBuf[5] ) ;
	var end = AZI_EditSDate( arrBuf[6], arrBuf[7], arrBuf[8] ) ;
//alert( start + '<' + date + '<' + end ) ;
	if( parseFloat( date ) < parseFloat( start ) ){
		// 開始日付よりも前なのでだめ
		return false ;
	}
	if( parseFloat( date ) > parseFloat( end ) ){
		// 終了日付よりも後なのでだめ
		return false ;
	}
	// 日付チェック
	if( !AZI_ChkS( date ) ){
		return false ;
	}
	// OK!
	return true ;
}

//和暦年度チェック
//和暦年度が妥当かチェックする
//GYY形式に限定
function AZI_ChkWNendo(
	in_str
){
	var i;
	var bRet = false ;

	// チェック
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (in_str.charAt(0) == arrBuf[0]//元号チェック
			||in_str.charAt(0) == arrBuf[1]
			||in_str.charAt(0) == arrBuf[2])
			&& in_str.length <= 3//文字数は3文字以内
		){
			if( in_str.charAt(0) == arrBuf[0]//元号が英字の場合、引数を編集
			 || in_str.charAt(0) == arrBuf[1]
			){
				strBuf = AZI_EditStr( in_str.substring(1,3) );//引数編集
				//数字チェック  年は全て数字あること!! ADD 2001/09/19 KTS
				if( !AZI_ChkStr( strBuf, ALLOWCHAR_NUMS ) ){
					bRet = false;
					break;
				}
			}
			else if( in_str.charAt(0) == arrBuf[2]//元号が数字のとき,桁数は3桁のみ
				  && 3 == in_str.length
			){
				strBuf = in_str.substring(1,3);
				//数字チェック  年は全て数字あること!! ADD 2001/09/19 KTS
				if( !AZI_ChkStr( strBuf, ALLOWCHAR_NUMS ) ){
					bRet = false;
					break;
				}

			}
			else{//上記以外は不正
				bRet = false;
				break;
			}
			//西暦日付に変換（基準日４月１日）
			var year = parseFloat( arrBuf[3] ) + parseFloat( strBuf ) - 1;
			var sdate = parseFloat( AZI_EditSDate( year, 4, 1 ) ) ;
			if( isNaN( sdate ) ){
				return false ;
			}
			// 日付チェック
			if( !AZI_ChkS( sdate.toString() ) ){
				return false ;
			}
			//年度チェック
			var start = parseFloat( AZI_EditSDate( arrBuf[3], arrBuf[4], arrBuf[5] ) ) ;
			var end = parseFloat( AZI_EditSDate( arrBuf[6], arrBuf[7], arrBuf[8] ) ) ;
//alert( start + "<=" + sdate + "<=" + end ) ;
			if( start <= sdate && sdate <= end ){//年度の範囲チェック
				bRet = true ;
				break;
			}
			else {
				bRet = false ;
				break;
			}
		}
	}
	if( !bRet ){
		return false;
	}
	else {
		return true;
	}

}

//和暦年月チェック
//和暦年月が妥当かチェックする
//GYYMM形式に限定
function AZI_ChkWNengetsu(
	in_str
){
	var bRet = false ;
	// チェック
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (in_str.charAt(0) == arrBuf[0]//元号チェック
			||in_str.charAt(0) == arrBuf[1]
			||in_str.charAt(0) == arrBuf[2])
			&& in_str.length <= 5//文字数は5文字以内
		){
			// 年抽出
			var strY = AZI_EditStr( in_str.substring(1,3) ) ;
			//数字チェック  年は全て数字あること!! ADD 2001/09/19 KTS
			if( !AZI_ChkStr( strY, ALLOWCHAR_NUMS ) ){
				return false;
			}

			// 月抽出
			var strM = AZI_EditStr( in_str.substring(3,5) ) ;
			//数字チェック  月は全て数字あること!! ADD 2001/09/19 KTS
			if( !AZI_ChkStr( strM, ALLOWCHAR_NUMS ) ){
				return false;
			}
			
			//西暦日付に変換（基準日４月１日）
			var year = parseFloat( arrBuf[3] ) + parseFloat( strY ) - 1;
			var sdate = parseFloat( AZI_EditSDate( year, strM, 1 ) ) ;
			if( isNaN( sdate ) ){
				return false ;
			}
			// 日付チェック
			if( !AZI_ChkS( sdate.toString() ) ){
				return false ;
			}
			//範囲チェック
			var start = parseFloat( AZI_EditSDate( arrBuf[3], arrBuf[4], arrBuf[5] ) ) ;
			var end = parseFloat( AZI_EditSDate( arrBuf[6], arrBuf[7], arrBuf[8] ) ) ;
//alert( start + "<=" + sdate + "<=" + end ) ;
			if( start <= sdate && sdate <= end ){//年度の範囲チェック
				bRet = true ;
				break;
			}
			else {
				bRet = false ;
				break;
			}
		}
	}
	if( !bRet ){
		return false;
	}
	else {
		return true;
	}
	
}

//西暦日付組立て
// YYYY, MM, DD → YYYYMMDD形式
// 年、月、日がnullの場合0に編集
function AZI_EditSDate( yyyy, mm, dd ){
		// 年
		var iY ;
		if( 0 == (yyyy.toString()).length ){
			iY = 0 ;
		}
		else{
			iY = parseFloat( yyyy ) ;
			if( isNaN( iY ) ){
				iY = 0 ;
			}
		}
		var strY = iY.toString() ;
		while( strY.length < 4 ){
			strY = '0' + strY ;
		}
		// 月
		var iM ;
		if( 0 == (mm.toString()).length ){
			iM = 0 ;
		}
		else{
			iM = parseFloat( mm ) ;
			if( isNaN( iM ) ){
				iM = 0 ;
			}
		}
		var strM = iM.toString() ;
		while( strM.length < 2 ){
			strM = '0' + strM ;
		}
		// 日
		var iD ;
		if( 0 == (dd.toString()).length ){
			iD = 0 ;
		}
		else{
			iD = parseFloat( dd ) ;
			if( isNaN( iD ) ){
				iD = 0 ;
			}
		}
		var strD = iD.toString() ;
		while( strD.length < 2 ){
			strD = '0' + strD ;
		}
		return strY + strM + strD ;
}

//日付用の文字列編集
// " 1"→"01","1"→"01"と編集する
function AZI_EditStr(
	in_str
){
	var strBuf = in_str;
	
	if( 1 == in_str.length ){
		strBuf = "0" + in_str;
	}
	else if( 2 == in_str.length ){
		if( " " == in_str.charAt(0) ){
			strBuf = "0" + in_str.charAt(1);
		}
	}
	
	return strBuf;
}

//日付用の文字列編集2
// "01"→" 1","1"→" 1"と編集する
function AZI_EditStr2(
	in_str
){
	var strBuf = in_str;
	
	if( 1 == in_str.length ){
		strBuf = " " + in_str;
	}
	else if( 2 == in_str.length ){
		if( "0" == in_str.charAt(0) ){
			strBuf = " " + in_str.charAt(1);
		}
	}
	
	return strBuf;
}

//数字：半角→全角
//"02"→"　２","2"→"　２","01"→"元年"," 2"→"　２"
function AZI_EditNum(
	in_str,
	nType			//出力タイプ 0:"01"→"　１" 1:"01"→"元年"
){
	var strBuf = "";
	
	if( 1 == in_str.length ){
		strBuf = "　" + g_strNum.charAt( parseFloat( in_str ) );
	}
	else if( 2 == in_str.length ){
		if( "0" == in_str.charAt(0) ){
			strBuf = "　" + g_strNum.charAt( parseFloat( in_str.charAt(1) ) );
		}
		else if( " " == in_str.charAt(0) ){
			strBuf = "　" + g_strNum.charAt( parseFloat( in_str.charAt(1) ) );
		}
		else {
			strBuf = g_strNum.charAt( parseFloat( in_str.charAt(0) ) )
			+g_strNum.charAt( parseFloat( in_str.charAt(1) ) );
		}
	}
	
	if( strBuf == "　１" && nType == "1" ){
		strBuf = "　元";
	}
	
	return strBuf;
}

//数字：全角→半角
//"　２"→"02","　元"→"01"
function AZI_EditNum2(
	in_str
){
	var strBuf = "";
	
	if( 2 == in_str.length ){
		if( "　" == in_str.charAt(0) ){
			strBuf = "0" + AZI_NumConv( in_str.charAt(1) );
		}
		else if( "０" == in_str.charAt(0) ){
			strBuf = "0" + AZI_NumConv( in_str.charAt(1) );
		}
		else {
			strBuf = AZI_NumConv( in_str.charAt(0) )
			+ AZI_NumConv( in_str.charAt(1) );
		}
	}

	if( "　元" == in_str || "元" == in_str ){
		strBuf = "01";
	}
	
	return strBuf;
}

function AZI_NumConv(
	in_str
){
	var i;
	var strBuf = "";
	for( i=0 ; i<10 ; i++ ){
		if( in_str == g_strNum.charAt(i) ){
			strBuf = i;
		}
	}
	return strBuf.toString(10);
}

//和暦→西暦
//和暦から西暦に変換する。日付としての正当性チェックもおこなう。
//形式はGYYMMDD形式に限定
//例:S521002→19771002
//引数不正のときはfalseを返却
function AZI_WtoS(
	in_str
){
	var strBuf;
	var iBuf_Y;
	var Flg = false;

	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (in_str.charAt(0) == arrBuf[0]//元号チェック
		  || in_str.charAt(0) == arrBuf[1]
		  || in_str.charAt(0) == arrBuf[2])
		){//合致する元号があったら
			//年度の部分を抽出して西暦に変換
			iBuf_Y = parseFloat( arrBuf[3] ) + parseFloat( in_str.substring(1,3) ) -1;
			strBuf = iBuf_Y + in_str.substring(3, 7);
			Flg = true;
			break;
		}
	}
	if( !Flg ){//該当する元号がなかったら
		return false;
	}
	//日付の正当性チェック
	if( AZI_ChkS( strBuf ) ){//正しければ
		return strBuf;
	}
	else {
		return false;
	}
}

//和暦年度チェック
//引数が和暦年度として正当かチェックする。
//形式はGYY、元号○○年
function AZI_ChkWNendoIgnoreFmt(
	in_str			//和暦(GYYMMDD)
){
	var strIn ;
	// 空のときはチェックしない


	if( 0 == (in_str.toString()).length ){
		return true ;
	}
	// チェック
	if( 3 >= (in_str.toString()).length ){
		strIn = in_str ;
		if( AZI_ChkWNendo( strIn ) ){
			return true ;
		}
	}

	// 編集してチェック（漢字）
	if( strIn = AZI_InWNendoK( in_str ) ){
//alert( strIn ) ;
		if( AZI_ChkWNendo( strIn ) ){
			return true ;
		}
	}
	// チェックエラー
	return false ;
}

//和暦日付チェック
//引数引数が和暦として正当かチェックする。
//形式はGYYMMDD、GYY/MM/DD、元号○○年○○月○○日
function AZI_ChkWDateIgnoreFmt(
	in_str			//和暦(GYYMMDD)
){
	var strIn ;
	var strBuf_Y = parseFloat( in_str.substring(1,3) ) ;//GYY
	var strBuf_M = parseFloat( in_str.substring(3,5) ) ;//MM
	var strBuf_D = parseFloat( in_str.substring(5,7) ) ;//DD
	var i;
	
	// 空のときはチェックしない
	if( 0 == (in_str.toString()).length ){
		return true ;
	}
  var tmpStr = in_str.toString().replace(new RegExp(" ","gm"),"").replace(new RegExp("/","gm"),"");
	var retStr = "";
	var tmp;
  for(i = 0; i < tmpStr.length;i++) {
    tmp = tmpStr.substring(i,i+1);
    if ( tmp == '.' ) {
    }
    else {
      retStr += tmp;
    }
  }
  tmpStr = retStr;
	if(6 == tmpStr.toString().length){
  	  tmpStr = tmpStr.substring(0,1);
    if (AZI_ChkStr(tmpStr,ALLOWCHAR_NUMS)){
    	return false;
    }
  }
	// チェック
	if( 7 == (in_str.toString()).length ){
		strIn = in_str ;
		if( AZI_ChkWDate( strIn ) ){
			return true ;
		}
	}
	// 編集してチェック
	if( strIn = AZI_InWDate( in_str, 0 ) ){
		if( AZI_ChkWDate( strIn ) ){
			return true ;
		}
	}
	// 編集してチェック（漢字）
	if( strIn = AZI_InWDateK( in_str ) ){
		if( AZI_ChkWDate( strIn ) ){
			return true ;
		}
	}
	// チェックエラー
	return false ;
}

//和暦年月チェック
//引数引数が和暦として正当かチェックする。
//形式はGYYMM、GYY/MM、元号○○年○○月
function AZI_ChkWNengetsuIgnoreFmt(
	in_str
){
	var strIn = in_str.toString() ;
	// 空の時はチェックしない
	if( 0 == strIn.length ){
		return true ;
	}
	// 入力形式
	if( 5 == strIn.length ){
		if( AZI_ChkWNengetsu( strIn ) ){
			return true ;
		}else{
			return false;  //ADD 2001/09/19 KTS
		}
	}
	// 編集してチェック
	if( strIn = AZI_InWNenGetsu( in_str.toString(), 0 ) ){
		if( AZI_ChkWNengetsu( strIn ) ){
			return true ;
		}
	}
	// 編集してチェック(漢字)
	if( strIn = AZI_InWNengetsuK( in_str.toString() ) ){
		if( AZI_ChkWNengetsu( strIn ) ){
			return true ;
		}
	}
	// チェックエラー
	return false ;
}

//和暦編集
// 0 : GYYMMDD,GYY/MM/DD(GYY.MM.DD) → GYYMMDD（G:数字）
// 1 : GYYMMDD,GYY/MM/DD → GYY/MM/DD(GYY.MM.DD) (G:英大文字)
//スペースや十の位省略に対応
function AZI_InWDate(
	in_str,			//和暦
	nType			//出力タイプ
){
	var strBuf;
	var arrBuf;
	var i;

	//正当性チェック
	arrBuf = in_str.split( g_dataSeparator );
	var bRet = false;

	if( 1 == arrBuf.length ){
		//GYYMMDD形式
		if( 6 <= in_str.length && in_str.length <=7 ){
			//GYMMDD,GYYMMDD
			bRet = true;
		}
	}
	else if( 3 == arrBuf.length ){
		// GYY/MM/DD形式
		if( 6 <= in_str.length && in_str.length <= 9 ){
			// GY/M/D , GYY/MM/DD
			bRet = true;
		}
	}
	
	if( !bRet ){
		//上記以外は不正
		return false;
	}
	
	//文字列編集
	//まずGYY/MM/DD 形式に合わせる
	if( 1 == arrBuf.length ){
		//GYYMMDD形式の場合
		if( 7 == in_str.length ){
			//GYYMMDD
			arrBuf[0] = in_str.substring( 0,3 );
			arrBuf[1] = in_str.substring( 3,5 );
			arrBuf[2] = in_str.substring( 5,7 );
		}
		else if( 6 == in_str.length ){
			//GYMMDD
			arrBuf[0] = in_str.substring( 0,2 );
			arrBuf[1] = in_str.substring( 2,4 );
			arrBuf[2] = in_str.substring( 4,6 );
		}
	}

	//編集タイプによって年号を変換
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf1 = g_arrNendo[i].split( "," ) ;
		if( (arrBuf[0].charAt(0) == arrBuf1[0]//元号チェック
		  || arrBuf[0].charAt(0) == arrBuf1[1]
		  || arrBuf[0].charAt(0) == arrBuf1[2])
		){
			//合致する元号があったら
			if( 0 == nType ){
				arrBuf[0] = arrBuf1[2] + arrBuf[0].substring( 1,arrBuf[0].length );
			}
			else if( 1 == nType ){
				arrBuf[0] = arrBuf1[0] + arrBuf[0].substring( 1,arrBuf[0].length );
			}
			break;
		}
	}

	//スペース、十の位省略を編集
	arrBuf[0] = arrBuf[0].charAt(0) + AZI_EditStr( arrBuf[0].substring( 1,3 ) );//年度
	arrBuf[1] = AZI_EditStr( arrBuf[1] );//月


	arrBuf[2] = AZI_EditStr( arrBuf[2] );//日

	//GYYMMDDに編集
	strBuf = arrBuf[0] + arrBuf[1] + arrBuf[2];
	if( 1 == nType ){
			strBuf = arrBuf[0].charAt(0) + AZI_EditStr2( arrBuf[0].substring( 1,3 ) )
					 + g_dataSeparator + AZI_EditStr2( arrBuf[1] ) + g_dataSeparator + AZI_EditStr2( arrBuf[2] );
	}
	
	return strBuf ;
}

//和暦年編集漢字 
// 明治４４年 → 144
//スペースや十の位省略に対応
function AZI_InWNendoK(
	in_str
){
	if( 0 == in_str.length ){
		return true;// NULLならなにもしない
	}

	var strBuf;
	var i;
	var bRet = false ;
	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( in_str.substring( 0,2 ) == arrBuf[9]
		&& in_str.length < 6//文字数は４文字以内
		){
			//漢字→数字変換
			strBuf = arrBuf[2];
			//年編集
			var pos = in_str.indexOf( "年", 0 ) ;
			if( 0 > pos ){
				return false;
			}
			var strY = in_str.substring( 2, pos ) ;
			strBuf += AZI_EditNum2( strY );
			bRet = true;
			break;
		}
	}

	if( bRet ){
		return strBuf ;
	}
	else {
		return false;
	}
}

//和暦年月編集
// 0 : G_Y_M,GYY/MM(GYY.MM) → GYYMM（G:数字）
// 1 : GYYMMDD,GYY/MM/DD(GYY.MM.DD) → GYY/MM/DD(GYY.MM.DD) (G:英大文字)
//スペースや十の位省略に対応
function AZI_InWNenGetsu(
	in_str,			//和暦
	nType			//出力タイプ
){
	var strBuf;
	var arrBuf;
	var i;

	//正当性チェック
	arrBuf = in_str.split( g_dataSeparator );
	var bRet = false;

	if( 1 == arrBuf.length ){
		//GYYMM形式
		if( 4 <= in_str.length && in_str.length <=5 ){
			//GYMM,GYYMM
			bRet = true;
		}
	}
	else if( 2 == arrBuf.length ){
		// GYY/MM形式
		if( 4 <= in_str.length && in_str.length <= 6 ){
			// GY/M , GYY/MM
			bRet = true;
		}
	}

	if( !bRet ){
		//上記以外は不正
		return false;
	}
	
	//文字列編集
	//まずGYY/MM 形式に合わせる
	if( 1 == arrBuf.length ){
		//GYYMM形式の場合
		if( 4 == in_str.length ){
			//GYMM
			arrBuf[0] = in_str.substring(0,2) ;
			arrBuf[1] = in_str.substring(2,4) ;
		}
		else if( 5 == in_str.length ){
			//GYYMM
			arrBuf[0] = in_str.substring( 0,3 );
			arrBuf[1] = in_str.substring( 3,5 );
		}
	}

	//編集タイプによって年号を変換
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf1 = g_arrNendo[i].split( "," ) ;
		if( (arrBuf[0].charAt(0) == arrBuf1[0]//元号チェック
		  || arrBuf[0].charAt(0) == arrBuf1[1]
		  || arrBuf[0].charAt(0) == arrBuf1[2])
		){
			//合致する元号があったら
			if( 0 == nType ){
				arrBuf[0] = arrBuf1[2] + arrBuf[0].substring( 1,arrBuf[0].length );
			}
			else if( 1 == nType ){
				arrBuf[0] = arrBuf1[0] + arrBuf[0].substring( 1,arrBuf[0].length );
			}
			break;
		}
	}

	//スペース、十の位省略を編集
	arrBuf[0] = arrBuf[0].charAt(0) + AZI_EditStr( arrBuf[0].substring( 1,3 ) );//年度
	arrBuf[1] = AZI_EditStr( arrBuf[1] );//月


	//GYYMMDDに編集
	strBuf = arrBuf[0] + arrBuf[1];
	if( 1 == nType ){
		strBuf = arrBuf[0].charAt(0) + AZI_EditStr2( arrBuf[0].substring( 1,3 ) )
												+ g_dataSeparator + AZI_EditStr2( arrBuf[1] );
	}
	return strBuf;
	
}

//和暦編集漢字 
// 明治４４年１０月△１日 → 1441001
//スペースや十の位省略に対応
function AZI_InWDateK(
	in_str			//和暦
){
	var strBuf;
	var i, st, en;
	var bRet = false ;

	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		//年度変換
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( in_str.substring( 0,2 ) == arrBuf[9]
		){
			strBuf = arrBuf[2];//漢字→数字変換
			// 年
			st = 2 ;
			en = in_str.indexOf( '年' ) ;
			if( 0 > en ){
				return false ;
			}
			var strY = in_str.substring(st,en) ;
			while( 2 > strY.length ){
				strY = '　' + strY ;
			}
			strBuf += AZI_EditNum2( strY );//年度変換
			// 月
			st = en + 1 ;
			en = in_str.indexOf( '月' ) ;
			if( 0 > en ){
				return false ;
			}
			var strM = in_str.substring(st,en) ;
			while( 2 > strM.length ){
				strM = '　' + strM ;
			}
			strBuf += AZI_EditNum2( strM );//月変換
			// 日
			st = en + 1 ;
			en = in_str.indexOf( '日' ) ;
			if( 0 > en ){
				return false ;
			}
			var strD = in_str.substring(st,en) ;
			while( 2 > strD.length ){
				strD = '　' + strD ;
			}
			strBuf += AZI_EditNum2( strD );//日変換
			bRet = true;
			break;
		}
	}

	if( bRet ){
		return strBuf;
	}
	else {
		return false;
	}

}

//和暦年月編集漢字 
// 明治４４年１０月 → 14410
//スペースや十の位省略に対応
function AZI_InWNengetsuK(
	in_str			//和暦
){
	var strBuf;
	var i,st,en;
	var bRet = false ;

	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		//年度変換
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( in_str.substring( 0,2 ) == arrBuf[9]
		){
			strBuf = arrBuf[2];//漢字→数字変換
			st = 2 ;
			en = in_str.indexOf( "年" ) ;
			var strY = in_str.substring( st, en ) ;
			while( 2 > strY.length ){
				strY = '　' + strY ;
			}
			strBuf += AZI_EditNum2( strY );//年度変換
			st = en + 1;
			en = pos = in_str.indexOf( "月" ) ;
			var strM = in_str.substring( st, en ) ;
			while( 2 > strM.length ){
				strM = '　' + strM ;
			}
			strBuf += AZI_EditNum2( strM );//月変換
			bRet = true;
			break;
		}
	}

	if( bRet ){
		return strBuf;
	}
	else {
		return false;
	}

}

//西暦編集
// 編集タイプ:0 YYYYMMDD,YYYY/MM/DD(YYYY.MM.DD) → YYYYMMDD
//           :1 YYYYMMDD,YYYY/MM/DD(YYYY.MM.DD) → YYYY/MM/DD(YYYY.MM.DD)
function AZI_InSDate(
	in_str,
	zType//編集タイプ
){
	
	var arrBuf = in_str.split(g_dataSeparator);
	var strBuf = false ;
	var i;
	if( 1 == arrBuf.length ){
		// YYYYMMDD 形式
		if( 8 == arrBuf[0].length ){
			//桁数チェック
			if( AZI_ChkS( arrBuf[0] ) ){
				//西暦日付チェック
				if( 0 == zType ){
					strBuf = arrBuf[0];
				}
				else if( 1 == zType ){
					strBuf = arrBuf[0].substring(0,4)
							 + g_dataSeparator + AZI_EditStr2( arrBuf[0].substring(4,6) )
							 + g_dataSeparator + AZI_EditStr2( arrBuf[0].substring(6,8) );
				}
			}
		}
	}
	else if( 3 == arrBuf.length ){
		// YYYY/MM/DD 形式
		if( 8 <= in_str.length && in_str.length <= 10 ){
			//文字列編集
			var strBuf1 = arrBuf[0] ;
			//年を代入
			for( i=1 ; i<3 ; i++ ){
				strBuf1 += AZI_EditStr( arrBuf[i] );
			}
			if( AZI_ChkS( strBuf1 ) ){
				//西暦日付チェック
				if( 0 == zType ){
					strBuf = strBuf1;
				}
				else if( 1 == zType ){
					strBuf = arrBuf[0]
							 + g_dataSeparator + AZI_EditStr2( arrBuf[1] )
							 + g_dataSeparator + AZI_EditStr2( arrBuf[2] );
				}
			}
		}
	}

	return strBuf;

}

//西暦年月編集
// 編集タイプ:0 YYYYMM,YYYY/MM(YYYY.MM) → YYYYMM
//           :1 YYYYMM,YYYY/MM(YYYY.MM) → YYYY/MM(YYYY.MM)
function AZI_InSNenGetsu(
	in_str,
	zType//編集タイプ
){
	
	var arrBuf = in_str.split(g_dataSeparator);
	var strBuf = false ;
	if( 1 == arrBuf.length ){
		// YYYYMM 形式


		if( 6 == arrBuf[0].length ){
			//桁数チェック
			if( 0 == zType ){
				strBuf = arrBuf[0];
			}
			else if( 1 == zType ){
				strBuf = arrBuf[0].substring(0,4)
						 + g_dataSeparator + AZI_EditStr2( arrBuf[0].substring(4,6) );
			}
		}
	}
	else if( 2 == arrBuf.length ){
		// YYYY/MM 形式
		if( 6 <= in_str.length && in_str.length <= 7 ){
			//文字列編集
			var strBuf1 = arrBuf[0] ;
			//年を代入
			if( 0 == zType ){
				strBuf = arrBuf[0] + AZI_EditStr( arrBuf[1] );
			}
			else if( 1 == zType ){
				strBuf = arrBuf[0] + g_dataSeparator + AZI_EditStr2( arrBuf[1] );
			}
		}
	}

	return strBuf;
}


// チェック用文字列定義
var ALLOWCHAR_ALPHS    = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var ALLOWCHAR_ZENALPHS = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ" ;
var ALLOWCHAR_NUMS     = "0123456789" ;
var ALLOWCHAR_ZENNUMS  = "０１２３４５６７８９" ;
var ALLOWCHAR_HANKANA  = " ｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝﾞﾟ" ;
var ALLOWCHAR_ZENKANA  = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴ　ー" 
//文字列チェック
//引数1の文字列が引数2の文字列だけで構成されているかチェック
function AZI_ChkStr(
	in_str1,//被チェック文字列
	in_str2//構成文字列
){
	var i,j,flg;
	
	// チェック
	var bRet = true;
	for( i=0 ; i<in_str1.length ; i++ ) {
		flg = false ;
		for( j=0 ; j<in_str2.length ; j++ ) {
			if( in_str1.charAt(i) == in_str2.charAt(j) ) {
				flg = true ;
				break ;
			}
		}
		if( !flg ) {
			bRet = false;
			break;
		}
	}

	return bRet ;

}

//郵便番号チェック
function AZI_ChkYuubin(
	in_str
){
	in_str = AZI_DelStr( in_str, " " );
	in_str = AZI_DelTailStr( in_str, " " );
	
	var bRet = true ;
	var arrBuf = in_str.split("-");

	if( 1 == arrBuf.length ){
		// 9999999形式
		//桁数チェック
		if( 7 != arrBuf[0].length ){
			bRet = false;
		}
		else {
			//数字チェック
			if( !AZI_ChkStr( arrBuf[0] , ALLOWCHAR_NUMS ) ){
				bRet = false;
			} 
		}
	}
	else if( 2 == arrBuf.length ){
		// 999-9999形式
		//桁数チェック
		if( 3 != arrBuf[0].length || 4 != arrBuf[1].length ){
			bRet = false;
		}
		else {
			//数字チェック
			if( !AZI_ChkStr( arrBuf[0] , ALLOWCHAR_NUMS ) || !AZI_ChkStr( arrBuf[1] , ALLOWCHAR_NUMS ) ){
				bRet = false;
			} 
		}
	}
	else {
		bRet = false;
	}
	
	return bRet ;
}

//金額チェック
// 戻り値
// 0 : 正常
// 1 : 金額エラー
// 2 : 入力桁エラー
// 3 : マイナス入力エラー
function AZI_ChkMoney(
	in_str,		// 対象
	p_zMinus,	// マイナス 0:無 1:有
	p_zIntSize	// 整数桁数 max15
){
	
	var i,nIntSize;
	var strBuf;
	
	//文字列編集
	strBuf = AZI_DelStr( in_str, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	//チェック
	//マイナスの対応
	if( "-" == strBuf.charAt(0) ){
		if( 0 == p_zMinus ){
			return 3;
		}
		if( 1 == strBuf.length ){
			//マイナスだけだったら
			return 1;
		}
		if( 0 == strBuf.charAt(1)){
			//-0だったら
			return 1;
		}
		
		//今後の処理のためマイナスを除去
		strBuf = strBuf.substring( 1, strBuf.length );
	}

	//桁数が２以上で、最初の文字が0だったらエラー
	if( strBuf.length >= 2 && 0 == strBuf.charAt(0) ){
		return 1;
	}
	
	// ","で分割
	var arrBuf = strBuf.split(",");

	//数字＆桁チェック
	for( i=0 ; i < arrBuf.length ; i++ ){
		if( !AZI_ChkStr( arrBuf[i], ALLOWCHAR_NUMS ) ){
			return 1;
		}
		if( 0 == i && arrBuf.length > 1 && ( arrBuf[i].length < 1 || 3 < arrBuf[i].length ) ){
			// 例:12,345 最初のセクションは桁数1～3
			return 1;
		}
		else if( i>0 && ( 3 != arrBuf[i].length ) ){
			// 後のセクションは桁数は3
			return 1;
		}
	}
	
	//整数桁数チェック
	var nKeta = 0;
	for( i=0 ; i < arrBuf.length ; i++ ){
		nKeta += arrBuf[i].length;
	}

	if( nKeta > p_zIntSize || nKeta > 15 ){
		return 2;
	}

	return 0;
}

//文字列編集
//先頭から指定された文字を削除する
//例： 00000123 → 123
function AZI_DelStr(
	in_str, //対象文字列
	del_str //削除文字列
){
	var i;
	
	for( i=0 ; i< in_str.length ; i++ ){
		if( in_str.charAt(i) != del_str ){
			break;
		}
	}

	return in_str.substring( i, in_str.length );
}

//文字列編集
//末尾から指定された文字を削除する
//例： 12300000 → 123
function AZI_DelTailStr(
	in_str, //対象文字列
	del_str //削除文字列
){
	//末尾の半角スペースをのぞく
	var strBuf = in_str;
	while( del_str == strBuf.charAt(strBuf.length - 1) ){
		strBuf = strBuf.substring( 0, strBuf.length - 1 );
	}
	return strBuf;
}

// TR検索関数
function AZI_findTR( obj ) {	
	for ( var i=0; i<100; i++ ) {
		tag =  obj.tagName.toUpperCase();
		
		if ( tag == "TR" ) {
			break;
		}
		obj = obj.parentNode;
	}
	
	// 複数判断
	tdTag = obj.firstChild;
	var ret = new Array(1) ;
	if (tdTag.tagName.toUpperCase() == "TD") {
		row = tdTag.getAttribute("rowspan");
		if (row != null) {
		    ret = new Array(row);
		    var nextObj = obj;
		    for (i = 0; i < row;i++) {
		    	ret[i] = nextObj;
		    	nextObj = nextObj.nextSibling;
		    }
	   }else {
	       ret[0] = obj;	
	  }
	}
	
	return ret;
}

// 時刻チェック
function AZI_ChkTime(pStr) {
	var bRet = true ;
	
	var arrBuf = pStr.split(":");
	var realTime = "";
	if (arrBuf.length == 1) {
		realTime = pStr;
	}else if (arrBuf.length == 2) {
		realTime = arrBuf[0] + arrBuf[1];
	}else {
		return false;
	}
	
	// サイズチェック
	if 	(realTime.length != 4) {
		bRet = false;
	}else {
		//　数字チェック
		if( !AZI_ChkStr(realTime, ALLOWCHAR_NUMS ) ){
			bRet = false;
		}else {
			var hh = realTime.substring(0,2);
			var mm = realTime.substring(2,4);
			
			if (hh > 23 || hh < 00) {
				bRet = false;
			}
			if (bRet && (mm > 59 || mm < 00)) {
				bRet = false;
			}
		}
	}
	
	return bRet;
}

// 時刻編集
// 編集タイプ:0 HHMM,HH:MM → HHMM
//           :1 HHMM,HH:MM → HH:MM
function AZI_InTime(
	in_str,
	zType//編集タイプ
) {
	var arrBuf = in_str.split(":");
	var strBuf = false ;
	if( 1 == arrBuf.length ){
		// HHMM 形式
		if( 4 == arrBuf[0].length ){
			//桁数チェック
			if( AZI_ChkTime( arrBuf[0] ) ){
				//西暦日付チェック
				if( 0 == zType ){
					strBuf = arrBuf[0];
				}
				else if( 1 == zType ){
					strBuf = arrBuf[0].substring(0,2)
							 + ":" + arrBuf[0].substring(2,4);
				}
			}
		}
	}
	else if( 2 == arrBuf.length ){
		// HH/MM 形式
		if( 4 <= in_str.length && in_str.length <= 5 ){
			//文字列編集
			if( AZI_ChkTime( in_str ) ){
				//西暦日付チェック
				if( 0 == zType ){
					strBuf = arrBuf[0] + arrBuf[1];
				}
				else if( 1 == zType ){
					strBuf = in_str;
				}
			}
		}
	}

	return strBuf;
}

///////////////////////////////////////////////////////////
// 代理関数[X] チェック系 
///////////////////////////////////////////////////////////

// [X01]数字チェック
function _Proxy_X01(
	p_oTxt,			// 対象
	p_zMinus,		// マイナス 0:無 1:有
	p_zIntSize,		// 整数部桁数
	p_zDecSize		// 小数部桁数
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }
	if( "" == p_zMinus || "" == p_zIntSize || "" == p_zDecSize ){
		AZS_SetAbtErr2( "X01", "関数の引数にNULLがあります。" );
		return false;
	}
	
	var i;
	var strBuf = p_oTxt.value;
	
	//先頭の半角スペースをのぞく
	while( " " == strBuf.charAt(0) ){
		strBuf = strBuf.substring( 1, strBuf.length );
	}
	//末尾の半角スペースをのぞく
	while( " " == strBuf.charAt(strBuf.length - 1) ){
		strBuf = strBuf.substring( 0, strBuf.length - 1 );
	}
	//マイナスへの対処
	if( "-" == strBuf.charAt(0) ) {
		//マイナスがあったら後の処理のために取り除いておく。
		strBuf = strBuf.substring( 1, strBuf.length );
		if( "1" != p_zMinus ){
            // 統基781-依01 修正
			if (!errorFlag) {
			    AZS_SetErrMsg( "AZDP0202" ) ;
			    p_oTxt.focus() ;
			}
			else {
				p_oTxt.value = "";
		        return true;
			}
			setTimeout("errorFlag = false;",1);
			return false;
		}
		//問題処理票_受入110224_001 開始
	           else if("1" == p_zMinus && 0 == strBuf.length) {
			if (!errorFlag) {
			    AZS_SetErrMsg( "AZDP0201" ) ;
			    p_oTxt.focus() ;
			}
			else {
				p_oTxt.value = "";
		        return true;
			}
			setTimeout("errorFlag = false;",1);
			return false;
	           	}
	           	////問題処理票_受入110224_001 終了
	}

	var arrBuf = strBuf.split(".")//小数点で分割

	//小数チェック
	if( 2 == arrBuf.length ){
		//桁数チェック
		if( arrBuf[1].length > p_zDecSize ){
            // 統基781-依01 修正
			if (!errorFlag) {
			    AZS_SetErrMsg( "AZDP0215" ) ;
			    p_oTxt.focus() ;
			}
			else {
				p_oTxt.value = "";
		        return true;
			}
			setTimeout("errorFlag = false;",1);
			return false;
		}	
		if( 0 == p_zDecSize ){
            // 統基781-依01 修正
			if (!errorFlag) {
				AZS_SetErrMsg( "AZDP0203" ) ;
			    p_oTxt.focus() ;
			}
			else {
				p_oTxt.value = "";
		        return true;
			}
			setTimeout("errorFlag = false;",1);
			return false;
		}
	}
	if( arrBuf.length >= 3 ){
        // 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0201" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}

	//桁数チェック
	//整数部
	if( arrBuf[0].length > p_zIntSize ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0214" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	
	//数字チェック
	for( i=0 ; i < arrBuf.length ; i++ ){
		if( !AZI_ChkStr( arrBuf[i], ALLOWCHAR_NUMS ) ){
			// 統基781-依01 修正
		    if (!errorFlag) {
			    AZS_SetErrMsg( "AZDP0201" ) ;
			    p_oTxt.focus() ;
			}
			else {
			    p_oTxt.value = "";
		            return true;
			}
			setTimeout("errorFlag = false;",1);
			return false;
		}
	}
	
	return true;
}

// [X02]英字チェック
function _Proxy_X02(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , ALLOWCHAR_ALPHS );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0204" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X03]英数字チェック
function _Proxy_X03(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , ALLOWCHAR_NUMS + ALLOWCHAR_ALPHS );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0205" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X04]半角カナ文字チェック
function _Proxy_X04(
	p_oTxt,		// 対象
	p_zKakko	// 括弧 0:無 1:有
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }
	if( "" == p_zKakko ){
		AZS_SetAbtErr2( "X04", "関数の引数にNULLがあります。" );
		return false;
	}

	var num_str = ALLOWCHAR_HANKANA;

	//括弧に対応
	if( 1 == p_zKakko ){
		num_str = num_str + "()";
	}

	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , num_str );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0208" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X05]金額チェック
function _Proxy_X05(
	p_oTxt,		// 対象
	p_zMinus,	// マイナス 0:無 1:有
	p_zIntSize,	// 整数桁数 max15
	p_zDecSize	// 小数桁数 max14
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}

	//小数チェックなし(関数の引数の数は３)
	if( p_zDecSize == null ){
		if( 0 == p_zMinus.length || 0 == p_zIntSize.length ){
			AZS_SetAbtErr2( "X05", "関数の引数にNULLがあります。" );
			return false;
		}

		var bRet = AZI_ChkMoney( p_oTxt.value, p_zMinus, p_zIntSize );
                // 統基781-依01 修正
		switch( bRet ){
		case 1:
		case 2:
			if (!errorFlag) {
				//20111208問題処理票_受入111208_001修正AZDP0217-->AZDP0212
				AZS_SetErrMsg( "AZDP0212" ) ;
			    p_oTxt.focus() ;
			}
			else {
				p_oTxt.value = "";
		        return true;
			}
			break;
		case 3:
			if (!errorFlag) {
				AZS_SetErrMsg( "AZDP0213" ) ;
			    p_oTxt.focus() ;
			}
			else {
				p_oTxt.value = "";
		        return true;
			}
			break;
		}
                setTimeout("errorFlag = false;",1);
		if( bRet > 0 ){
			return false;
		}
		else {
			return true;
		}
	}

	//小数チェックあり(関数の引数の数は４)
	if( 0 == p_zMinus.length || "" == p_zIntSize.length || "" == p_zDecSize.length ){
		AZS_SetAbtErr2( "X05", "関数の引数にNULLがあります。" );
		return false;
	}

	var i;
	var arrBuf;
	// 整数、小数分解
	var intValue = "";
	var decValue = "";
	arrBuf = p_oTxt.value.split(".");
	if( arrBuf.length > 0 ){
		intValue = arrBuf[0];
	}
	if( arrBuf.length > 1 ){
		decValue = arrBuf[1];
		if( intValue.length == 0 ){
			intValue = "0";
		}
	}
	if( arrBuf.length > 2 ){
		//20111208問題処理票_受入111208_001修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0212" ) ;
			p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
			return true;
		}
		setTimeout("errorFlag = false;",1);
	}

	// 整数部チェック
	var bRet = AZI_ChkMoney( intValue, p_zMinus, p_zIntSize );
    // 統基781-依01 修正
	switch( bRet ){
	case 1:
	case 2:
		if (!errorFlag) {
		    //20111208問題処理票_受入111208_001修正AZDP0217-->AZDP0212
			AZS_SetErrMsg( "AZDP0212" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		break;
	case 3:
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0213" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		break;
	}

	for( i = 0 ; i < decValue.length ; i++ ){
		if( !AZI_ChkStr( decValue.substring(i,i+1), ALLOWCHAR_NUMS ) ){
			setTimeout("errorFlag = false;",1);
			return false;
		}
	}

	if( decValue.length > p_zDecSize ){
        // 統基781-依01 修正
		if (!errorFlag) {
			//20111208問題処理票_受入111208_001修正AZDP0217-->AZDP0212
			AZS_SetErrMsg( "AZDP0212" );
			p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}

	if( bRet > 0 ){
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X06]郵便番号チェック
// 9999999形式 or 999-9999形式
function _Proxy_X06(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLなaaらなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

	var bRet = AZI_ChkYuubin( p_oTxt.value );

	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0301" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X07]西暦年度チェック
// 4桁の数字以外はだめ
function _Proxy_X07(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	
	var bRet = true;
	//桁数チェック
	if( 4 != strBuf.length ){
		bRet = false;
	}
	if( !AZI_ChkStr( strBuf , ALLOWCHAR_NUMS ) ){
		bRet = false;
	}

	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0104" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X08]和暦年度チェック
// 
function _Proxy_X08(
	p_oTxt		// [X08]
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

	var strBuf;
	var i;
	var bRet = false ;

	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	// 2011/11/03 修正Start
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf1 = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf1[0]//元号チェック
		  || p_oTxt.value.charAt(0) == arrBuf1[1]
		  || p_oTxt.value.charAt(0) == arrBuf1[2])
		){
		    var strTmp = p_oTxt.value.replace(/ /g,"");
			if (3 != p_oTxt.value.length || 3 != strTmp.length) {
			    if (!errorFlag) {
					AZS_SetErrMsg( "AZDP0105" ) ;
					p_oTxt.focus() ;
				}
				else {
					p_oTxt.value = "";
					return true;
				}
				setTimeout("errorFlag = false;",1);
				return false;
			}
		}
	}
	// 2011/11/03 修正End
	// チェック
	bRet = AZI_ChkWNendoIgnoreFmt( strBuf ) ;
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0105" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X09]西暦日付チェック
// YYYYMMDD 形式 or YYYY/MM/DD(YYYY.MM.DD) 形式
function _Proxy_X09(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

 	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	var arrBuf = strBuf.split(g_dataSeparator);
	if( arrBuf.length > 1 ){
		for( i=0 ; i< 4 - arrBuf[0].length ; i++ ){
			strBuf = "0" + strBuf;
		}
	}

	// 西暦日付チェック
	bRet = false ;
	if( 8 > strBuf.length ){
		if( AZI_ChkS( strBuf ) ){
			bRet = true ;
		}
	}
	// 編集してチェック
	var str ;
	if( !bRet ){
		if( str = AZI_InSDate( strBuf, 0 ) ){
			if( AZI_ChkS( str ) ){
				bRet = true ;
			}
		}
	}

	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0102" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X10]
function _Proxy_X10(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
//    if (window.top.AZL_NOCHECKFLAG != 0) {
//        return true;
//    }

 	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	// 2011/11/03 修正Start
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf1 = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf1[0]//元号チェック
		  || p_oTxt.value.charAt(0) == arrBuf1[1]
		  || p_oTxt.value.charAt(0) == arrBuf1[2])
		){
		    var retFlag = true;
		    var arrBuf = p_oTxt.value.split( g_dataSeparator );
			if (1 == arrBuf.length ) {
			    if (7 == p_oTxt.value.length) {
				    var strTmp = p_oTxt.value.replace(/ /g,"");
					if (7 != strTmp.length) {
						retFlag = false;
					}
				}
				else {
				    retFlag = false;
				}
			}
			else if (3 == arrBuf.length ) {
			    if (9 != p_oTxt.value.length) {
				    retFlag = false;
				}
			}
			if (!retFlag) {
			    if (!errorFlag) {
						AZS_SetErrMsg( "AZDP0103" ) ;
						p_oTxt.focus() ;
				}
				else {
					p_oTxt.value = "";
					return true;
				}
				setTimeout("errorFlag = false;",1);
				return false;
			}
		}
	}
	// 2011/11/03 修正End
	//和暦編集（日付の正当性チェックもおこなっている）
	var bRet = AZI_ChkWDateIgnoreFmt( strBuf , 0 );

	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0103" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X11]
function _Proxy_X11(
	p_oTxt,		// 対象
	p_zSpaceCheck,  // スペースのみのチェック
	                       // 0：スペースのみの入力を許容する
	                       // 1：スペースのみの入力をエラーとする
	                       // 省略可、省略時は0で動作
	p_zCheckMode   // 省略チェック実行設定  0:チェックを実行する 1:チェックを実行しない
){
        // 統基957-依01 省略チェック仕様追加 修正開始 Start
	if ("1" == p_zCheckMode) {
	    return true;
	}
	// 統基957-依01 省略チェック仕様追加 修正開始 End
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	// 統基858-依01 省略チェック関数の機能強化 修正開始
 	//文字列編集
	var strBuf = p_oTxt.value;
   if ("1" == p_zSpaceCheck) {
	    strBuf = AZI_DelStr( strBuf, " " );//先頭の半角スペースを削除
	    strBuf = AZI_DelTailStr( strBuf, " " );//末尾の半角スペースを削除
	    strBuf = AZI_DelStr( strBuf, "　" );//先頭の全角スペースを削除
	    strBuf = AZI_DelTailStr( strBuf, "　" );//末尾の全角スペースを削除
   	    
  	}
	// 統基858-依01 省略チェック関数の機能強化 修正終了
	if( 0 == strBuf.length ){
	// 統基781-依01 修正
	    if (!errorFlag) {
		AZS_SetErrMsg( "AZDP0001" ) ;
		p_oTxt.focus() ;
	    }
	    else {
		p_oTxt.value = "";
		return true;
		 }
	setTimeout("errorFlag = false;",1);
	return false;
	}
	else {
		return true;
	}
}

// [X13]西暦月チェック
// YYYYMM 形式 or YYYY/MM(YYYY.MM) 形式
function _Proxy_X13(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

 	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	var bRet = false ;
	//西暦月チェック(1日の日付でチェック)
	if( 6 == strBuf.length ){
		if( AZI_ChkS( strBuf + '01' ) ){
			bRet = true ;
		}
	}
	if( !bRet ){
		// 編集してからチェック
		var arrBuf = strBuf.split(g_dataSeparator) ;
		if( 2 == arrBuf.length && 4 == arrBuf[0].length ){
			var strM = arrBuf[1].toString() ;
			while( 2 > strM.length ){
				strM = '0' + strM ;
			}
			if( AZI_ChkS( arrBuf[0] + strM + '01' ) ){
				bRet = true ;
			}
		}
	}

	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0107" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X14]
function _Proxy_X14(
	p_oTxt		// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }
    
 	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除

	// 2011/11/03 修正Start
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf1 = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf1[0]//元号チェック
		  || p_oTxt.value.charAt(0) == arrBuf1[1]
		  || p_oTxt.value.charAt(0) == arrBuf1[2])
		){
		    var retFlag = true;
		    var arrBuf = p_oTxt.value.split( g_dataSeparator );
			if (1 == arrBuf.length ) {
			    if (5 == p_oTxt.value.length) {
				    var strTmp = p_oTxt.value.replace(/ /g,"");
					if (5 != strTmp.length) {
						retFlag = false;
					}
				}
				else {
				    retFlag = false;
				}
			}
			else if (2 == arrBuf.length ) {
			    if (6 != p_oTxt.value.length) {
				    retFlag = false;
				}
			}
			if (!retFlag) {
			    if (!errorFlag) {
						AZS_SetErrMsg( "AZDP0106" ) ;
						p_oTxt.focus() ;
				}
				else {
					p_oTxt.value = "";
					return true;
				}
				setTimeout("errorFlag = false;",1);
				return false;
			}
		}
	}
	// 2011/11/03 修正End
	//和暦年月チェック
	var bRet = AZI_ChkWNengetsuIgnoreFmt(strBuf) ;

	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0106" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X15]整数範囲チェック
function _Proxy_X15(
	p_oTxt,		// 対象
	p_UnderLimit,	// (int)整数値下限
	p_UpperLimit	// (int)整数値上限
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0){
        return true;
    }
	if( "" == p_UnderLimit || "" == p_UpperLimit ){
		AZS_SetAbtErr2( "X15", "関数の引数にNULLがあります。" );
		return false;
	}
	if( isNaN( p_UnderLimit ) || isNaN( p_UpperLimit ) ){//数値チェック
		AZS_SetAbtErr2( "X15", "引数には数値をセットしてください。" );
		return false;
	}

	var nBuf = parseFloat( p_oTxt.value );
	if( isNaN( nBuf ) || nBuf < p_UnderLimit || p_UpperLimit < nBuf ){//数値チェック
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0216", p_UnderLimit, p_UpperLimit ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}

	//整数チェック
	var arrBuf = p_oTxt.value.split(".")//小数点で分割
	if( 2 == arrBuf.length ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0216", p_UnderLimit, p_UpperLimit ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}

	return true;
}

// [X16]全角カナ文字チェック
function _Proxy_X16(
	p_oTxt,		// 対象
	p_zKakko	// 括弧 0:無 1:有
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
    }
	if( "" == p_zKakko ){
		AZS_SetAbtErr2( "X16", "関数の引数にNULLがあります。" );
		return false;
	}
	if( 0 != p_zKakko && 1 != p_zKakko ){
		AZS_SetAbtErr2( "X16", "関数の引数に誤りがあります。" );
		return false;
	}

	var num_str = ALLOWCHAR_ZENKANA ;

	//括弧に対応
	if( 1 == p_zKakko ){
		num_str = num_str + "（）";
	}

	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , num_str );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0209" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X18]半角文字チェック
function _Proxy_X18(
	p_oTxt	// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}
	
	// 許可文字
	var allows = ALLOWCHAR_ALPHS + ALLOWCHAR_NUMS + ALLOWCHAR_HANKANA
	     + "-.,/()" ;
	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value, allows ) ;
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0210" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}

// [X18]半角文字チェック（記号あり）
function _Proxy_X18(
	p_oTxt,	// 対象
	kigou // 記号
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}
	
	// 許可文字
	var allows = ALLOWCHAR_ALPHS + ALLOWCHAR_NUMS + ALLOWCHAR_HANKANA
	     + "-.,/()" + kigou;
	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value, allows ) ;
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0210" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}

// [X19]電話番号チェック
function _Proxy_X19(
	p_oTxt	// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}
	if (p_oTxt.value.length > 20) {
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0302" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	
	// 許可文字
	var allows = ALLOWCHAR_NUMS + "-" ;
	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value, allows ) ;
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0302" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		var i;

		// チェック
		var bRet = true;
		for( i=0 ; i<p_oTxt.value.length ; i++ ) {
			flg = false ;
			if (p_oTxt.value.charAt(i) == '-') {
				if (i == 0 || i == p_oTxt.value.length - 1) {
					// 統基781-依01 修正
		            if (!errorFlag) {
			            AZS_SetErrMsg( "AZDP0302" ) ;
					    p_oTxt.focus() ;
					}
					else {
			            p_oTxt.value = "";
		                return true;
		            }
		            setTimeout("errorFlag = false;",1);
					return false ;					
				}
				if ((i < p_oTxt.value.length - 1) && p_oTxt.value.charAt(i + 1) == '-') {
					// 統基781-依01 修正
		            if (!errorFlag) {
						AZS_SetErrMsg( "AZDP0302" ) ;
					    p_oTxt.focus() ;
					}
					else {
			            p_oTxt.value = "";
		                return true;
		            }
		            setTimeout("errorFlag = false;",1);
					return false ;
				}
			}
		}
		return true ;
	}
}

// [X20]文字列サイズチェック
function _Proxy_X20(
	p_oTxt,	// 対象
	p_zPlen	// Maxサイズ
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = toClip(p_oTxt.GetText());
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	} 

  // GPRIME-基盤-D-0617 修正
	// var len = AZI_LengthWithCRLF(p_oTxt.value);
	// var len = p_oTxt.value.length;
	var len = surrogateLength(p_oTxt.value);
	// チェック
	if( len > p_zPlen ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0003" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}

// サロゲートペア外字がある、文字列長さの判断
function surrogateLength(pStr) {
	var str = pStr;
	var count = 0;
	if (str) {
		for (var i = 0; i < str.length; i++) {
			var high = str.charCodeAt(i);
			if (0xD800 <= high && high <= 0xDBFF) {
				if (i < str.length - 1) {
					var low = str.charCodeAt(i + 1);
					if (0xDC00 <= low && low <= 0xDFFF) {
						i++;
					}
				}
			}
			count++;
		}
	}
	return count;
}

// [X21]文字列サイズチェック（等価）
function _Proxy_X21(
	p_oTxt,	// 対象
	p_zPlen	// サイズ
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = toClip(p_oTxt.GetText());
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}

  // GPRIME-基盤-D-0617 修正
	// var len = AZI_LengthWithCRLF(p_oTxt.value);
	// var len = p_oTxt.value.length;
	var len = surrogateLength(p_oTxt.value);
	if( len != p_zPlen ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0219",p_zPlen) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}

// [X22]全角文字チェック(記号あり - 保留あり)
function _Proxy_X22(
	p_oTxt,	// 対象
	p_zKigou, //記号
	p_mode // チェックモード
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if (p_zKigou == window.undefined){
	  p_zKigou = "";
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}
　if (p_mode == window.undefined) {
		p_mode = "0";
	}
	var strValue = p_oTxt.value;
	var strValueNoKigou = "";
	var i,j,flg;
	for( i=0 ; i<strValue.length ; i++ ) {
		flg = false ;
		for( j=0 ; j<p_zKigou.length ; j++ ) {
			if( strValue.charAt(i) == p_zKigou.charAt(j) ) {
				var tempStr = p_zKigou.charAt(j);
			  if (p_mode == "1" || AZI_bytelength(tempStr) == tempStr.length*2) {
					flg = true ;
					break ;			  
			  }

			}
		}
		if( !flg ) {
			strValueNoKigou = strValueNoKigou + strValue.charAt(i);
		}
	}
	
	// 文字列文字数を取得
	var strLen = strValueNoKigou.length;
	
	// チェック
	if( AZI_bytelength(strValueNoKigou) != strLen*2 ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0211" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}

// [X23]全角文字チェック(改行を無視)
function _Proxy_X23(
	p_oTxt	// 対象
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = toClip(p_oTxt.GetText());
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}

	var value = escape(p_oTxt.value);

	// 改行の除いた文字列を取得
	// 改行文字定義
	var valueNoCRL = "";
	var strCRLF = "%0D%0A";
	var strn = "\n";
	
	// 検索＆編集
	var pos = 0 ;
	while( true ){
		var foundCRLF = value.indexOf( strCRLF, pos ) ;
		var foundn = value.indexOf( strn, pos ) ;
	    if( -1 != foundCRLF ){
    	    if( -1 != foundn ){
        	    if( foundCRLF < foundn ){
            	    valueNoCRL += value.substring( pos, foundCRLF ) ;
                	pos = foundCRLF + strCRLF.length;
	            }else{
    	            valueNoCRL += value.substring( pos, foundn ) ;
	                pos = foundn + strn.length ;
	            }
    	    }else{
        	    valueNoCRL += value.substring( pos, foundCRLF ) ;
            	pos = foundCRLF + strCRLF.length ;
	        }
    	}else{
        	if( -1 != foundn ){
            	valueNoCRL += value.substring( pos, foundn ) ;
	            pos = foundn + strn.length ;
	        }else{
    	        valueNoCRL += value.substring( pos ) ;
        	    pos = value.length ;
	        }
    	}
	    if( pos == value.length ){
	        break;
    	}
	}

	valueNoCRL = unescape(valueNoCRL);

	// 文字列文字数を取得
	var strLen = valueNoCRL.length;
	
	// チェック
	if( AZI_bytelength(valueNoCRL) != strLen*2 ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0211" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}

// [X24]パスワード入力時IME2002のカナキーロックチェック
// 
function _Proxy_X24(
	p_oTxt		// [X24]
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }

	// カナチェック
	if( AZI_KanaExists(p_oTxt.value) ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0218" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}

	return true;
}

// [X25]時刻チェック
// 
function _Proxy_X25(
	p_oTxt		// [X25]
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }
		
	// 時刻チェック
	if( !AZI_ChkTime(p_oTxt.value) ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0108" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}

	return true;
}

// [X26]半角カナ文字チェック(記号あり)
function _Proxy_X26(
	p_oTxt,		// 対象
	p_zKigou,	// 記号
	p_mode // チェックモード
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
  if (window.top.AZL_NOCHECKFLAG != 0) {
      return true;
  }
	if (p_mode == window.undefined) {
		p_mode = "0";
	}

  var kiGou = "";
	for (var i = 0; i < p_zKigou.length; i++) {
	  var tempStr = p_zKigou.charAt(i);
		if (p_mode == "1" || AZI_bytelength(tempStr) != tempStr.length*2) {
			kiGou = kiGou + tempStr;
		}
	}

	var num_str = ALLOWCHAR_HANKANA + kiGou;

	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , num_str );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0208" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X27]全角カナ文字チェック（記号あり）
function _Proxy_X27(
	p_oTxt,		// 対象
	p_zKigou,	// 記号
	p_mode // チェックモード
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
  if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
  }
	if (p_mode == window.undefined) {
		p_mode = "0";
	}
	var kiGou = "";
	for (var i = 0; i < p_zKigou.length; i++) {
		var tempStr = p_zKigou.charAt(i);
		if (p_mode == "1" || AZI_bytelength(tempStr) == tempStr.length*2) {
			kiGou = kiGou + tempStr;
		}
	}

	var num_str = ALLOWCHAR_ZENKANA + kiGou;

	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , num_str );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0209" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X36]全角カナ文字、英字（大文字、小文字）、数字チェック（記号有り）
function _Proxy_X36(
	p_oTxt,		// 対象
	p_zKigou,	// 記号
        p_zCheckMode
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    	if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
    	}
        //統基890-依01 X36関数のチェックモード追加 start
	var kiGou = "";
	for (var i = 0; i < p_zKigou.length; i++) {
		var tempStr = p_zKigou.charAt(i);
		if (AZI_bytelength(tempStr) == tempStr.length*2) {
			kiGou = kiGou + tempStr;
		}
	}
        //統基890-依01 X36関数のチェックモード追加 end

	var num_str = ALLOWCHAR_ZENKANA + kiGou;
	var errID = "";
	if ("0" == p_zCheckMode) {
		// チェックモード：全角カナ文字 ＋ 記号 ＋ 英字
        	num_str = num_str + ALLOWCHAR_ZENALPHS;
		errID = "AZDP0225";
        }
	else if ("1" == p_zCheckMode) {
		// チェックモード：全角カナ文字 ＋ 記号 ＋ 数字
		num_str = num_str + ALLOWCHAR_ZENNUMS;
		errID = "AZDP0226";
	}
	else if ("2" == p_zCheckMode) {
		// チェックモード：全角カナ文字 ＋ 記号 ＋ 英字 ＋ 数字
		num_str = num_str + ALLOWCHAR_ZENNUMS + ALLOWCHAR_ZENALPHS;
		errID = "AZDP0227";
	}
        //統基890-依01 X36関数のチェックモード追加 start
	else if ("3" == p_zCheckMode) {
		// チェックモード：記号 ＋ 数字
		num_str = kiGou + ALLOWCHAR_ZENNUMS;
		errID = "AZDP0229";
	}
	else if ("4" == p_zCheckMode) {
		// チェックモード：記号 ＋ 英字 ＋ 数字
		num_str = kiGou + ALLOWCHAR_ZENNUMS + ALLOWCHAR_ZENALPHS;
		errID = "AZDP0230";
	}
        else{
             return true;
        }
        //統基890-依01 X36関数のチェックモード追加 end
	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value , num_str );
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( errID ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	else {
		return true;
	}
}

// [X37]半角文字チェック-記号有り
function _Proxy_X37(
	p_oTxt,	// 対象
	p_Kigou, // 記号 
	p_mode // チェックモード
){
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
  if (window.top.AZL_NOCHECKFLAG != 0) {
		return true;
	}
	if (p_Kigou == window.undefined) {
		p_Kigou = "";
	}
	if (p_mode == window.undefined) {
		p_mode = "0";
	}
	
	var kiGou = "";
	for (var i = 0; i < p_Kigou.length; i++) {
		var tempStr = p_Kigou.charAt(i);
		if (p_mode == "1" || AZI_bytelength(tempStr) != tempStr.length*2) {
		 	kiGou = kiGou + tempStr;
		}
	}
	// 許可文字
	var allows = ALLOWCHAR_ALPHS + ALLOWCHAR_NUMS + ALLOWCHAR_HANKANA
	     + "-.,/()" + kiGou;
	// チェック
	var bRet = AZI_ChkStr( p_oTxt.value, allows ) ;
	if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
		    AZS_SetErrMsg( "AZDP0210" ) ;
		    p_oTxt.focus() ;
		}
		else {
		    p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false ;
	}
	else{
		return true ;
	}
}


///////////////////////////////////////////////////////////
// 代理関数[Y] 編集系 
///////////////////////////////////////////////////////////

// [Y01]数字入力編集
function _Proxy_Y01(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var num_str = ".0123456789" ;
	var i,j,flg;
	var strBuf = "" ;
	var strIn = p_oTxt.value ;

	// 先頭の0とスペースを除く
	while( " " == strIn.charAt(0) ){
		strIn = strIn.substring( 1, strIn.length ) ;
	}
	while( "0" == strIn.charAt(0) ){
		if( 1 == strIn.length || strIn.charAt(1) == "." ){
			break ;
		}
		strIn = strIn.substring( 1, strIn.length ) ;
	}
	for( i=0 ; i<strIn.length ; i++ ) {
		//数字のみに編集
		flg = false ;
		for( j=0 ; j<num_str.length ; j++ ) {
			if( strIn.charAt(i) == num_str.charAt(j) ) {
				strBuf += strIn.charAt(i)//該当する文字があったらバッファに入力
				break ;
			}
			else if( i==0 && strIn.charAt(i) == "-"){
				strBuf += strIn.charAt(i)//マイナスは先頭のみ許される
				break ;
			}
		}
	}

	p_oTxt.value = strBuf;

	return true ;
}

// [Y02]数字出力編集
function _Proxy_Y02(
	p_oTxt, // 対象
	p_zPLen, // 小数桁数
	p_zEType, // 編集タイプ 0:9タイプ 1:Zタイプ
	p_count // 指定される編集後桁数
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if( null == p_zPLen && p_zPLen.length == 0 || null == p_zEType && p_zEType.length == 0 ){
		AZS_SetAbtErr2( "Y02", "関数の引数にNULLがあります。" );
		return false;
	}
	var i,j,flg;
	var strBuf = "";
	var iAban,iPad;
	var bRet = true ;

	//var strBuf = p_oTxt.value;
	//先頭の半角スペースをのぞく
	while( " " == p_oTxt.value.charAt(0) ){
		p_oTxt.value = p_oTxt.value.substring( 1, p_oTxt.value.length );
	}
	//末尾の半角スペースをのぞく
	while( " " == p_oTxt.value.charAt(p_oTxt.value.length - 1) ){
		p_oTxt.value = p_oTxt.value.substring( 0, p_oTxt.value.length - 1 );
	}

	var arrBuf = p_oTxt.value.split( "." );//小数点があるかチェック
	var iOutLen = p_oTxt.maxLength ;// 出力桁数を取得

	if (p_count != null && p_count.length > 0) {
		iOutLen = p_count;
	}

	if( iOutLen > 20 ){//出力桁数は最大でも20まで
		iOutLen = 20;
	}

	//桁数チェック
	if( arrBuf[0].length > 20
		|| p_oTxt.value.length > 20
	  ){
		// 統基781-依01
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0214" ) ;
		    p_oTxt.focus();
		}
		else {
		    p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}

	if( arrBuf.length >= 2 ){
		if( arrBuf[1].length > 14 ){
			// 統基781-依01
		    if (!errorFlag) {
				AZS_SetErrMsg( "AZDP0215" ) ;
				p_oTxt.focus();
			}
			else {
		        p_oTxt.value = "";
		        return true;
		    }
		    setTimeout("errorFlag = false;",1);
			return false;
		}
		iAban = arrBuf[1].length - p_zPLen ;//切り捨てる小数桁数
	}
	else {
		iAban = 0;
	}

	//整数部
	// 最初のスペースを取り除く
	while( 0 < arrBuf[0].length && ' ' == arrBuf[0].charAt(0) ){
		arrBuf[0] = arrBuf[0].substring( 1 ) ;
	}
	
	// Z編集の場合、最初の０を取り除く
	if( 1 == p_zEType ){
		while( 1 < arrBuf[0].length && '0' == arrBuf[0].charAt(0) ){
			arrBuf[0] = arrBuf[0].substring( 1 ) ;
		}
		if( 1 < arrBuf[0].length && "-" == arrBuf[0].charAt(0) ){
		    while( 1 < arrBuf[0].length && '0' == arrBuf[0].charAt(1) ){
			    arrBuf[0] = arrBuf[0].substring( 0,1 ) + arrBuf[0].substring(2) ;
		    }
		}
	}
	//編集後桁数チェック
	if( p_zPLen > 0 ){
		if( arrBuf[0].length > iOutLen - p_zPLen - 1 ){
			// 統基781-依01
		    if (!errorFlag) {
				AZS_SetErrMsg( "AZDP0215" ) ;
				p_oTxt.focus();
			}
			else {
		        p_oTxt.value = "";
		        return true;
		    }
		    setTimeout("errorFlag = false;",1);
			return false;
		}
	}
	// パディング桁数 
	if( p_zPLen > 0 ) {
		iPad = iOutLen - arrBuf[0].length - p_zPLen - 1 ;
	}else{
		iPad = iOutLen - arrBuf[0].length ;
	}

	if( 0 == p_zEType ){
		// 9編集
		if( "-" == arrBuf[0].charAt(0) ){
			//マイナスの場合
			strBuf = arrBuf[0].charAt(0);
			//最初の文字はマイナス
			for( i=0 ; i < iPad ; i++ ){
				//0をつける
				strBuf += "0";
			}
			strBuf += arrBuf[0].substring( 1,arrBuf[0].length );
		}
		else {
			//プラスの場合
			for( i=0 ; i < iPad ; i++ ){
				//0をつける
				strBuf += "0";
			}
			strBuf += arrBuf[0];
		}
	}
	else if( 1 == p_zEType ){
		// Z編集
		for( i=0 ; i < iPad ; i++ ){
			//スペースをつける
			strBuf += " ";
		}
		strBuf += arrBuf[0].substring( 0,arrBuf[0].length );
	}
	else{
		bRet = false;
	}

	//小数部
	if( 2 == arrBuf.length && arrBuf[1].length > 0 && p_zPLen > 0 ){
		strBuf += "." ;
		strBuf += arrBuf[1].substring( 0,p_zPLen );
		if( iAban < 0 ){
			for( i=0 ; i < -1 * iAban ; i++ ){
				strBuf += "0";
			}
		}
	}
	else if( p_zPLen > 0 ){
		strBuf += "." ;
		for( i=0 ; i < p_zPLen  ; i++ ){
		strBuf += "0" ;
		}
	}

	if( bRet ){
		p_oTxt.value = strBuf;
		return true;
	}
	else {
		AZS_SetAbtErr2( "Y02", "編集タイプが不正です。" );
		return false;
	}
}
// [Y03]金額出力編集
function _Proxy_Y03(
	p_oTxt,		// 対象
	p_zPLen,	// 小数桁数
	p_count  // 出力結果桁数
){
    return AZI_EditMoney(p_oTxt, p_zPLen, p_count, 0);
}

// 金額出力編集
function AZI_EditMoney(
	p_oTxt,		// 対象
	p_zPLen,	// 小数桁数
	p_count,  // 出力結果桁数
	p_warning // 警告有り
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );
	if( 0 == p_oTxt.value.length ){
		// 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	    if (p_warning == 1) {
	        p_oTxt.style.color = "";
	    }
	    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
		return true;// NULLならなにもしない
	}

		var nKeta = p_oTxt.size;//出力桁数
	
		if (p_count != null && p_count.length > 0) {
			nKeta = p_count;
		}

	// 小数なし編集(引数の数は１)
	if( p_zPLen == null ){
		var strBuf = "";
		var arrBuf;
		var i;
		var nCnt,nMar;

		//正当性チェック
		var bRet = false;
                // GPRIME-基盤-N-1092 Y03関数の桁数チェックについて
		if( 0 != AZI_ChkMoney( p_oTxt.value, 1, 15) && 2 != AZI_ChkMoney( p_oTxt.value, 1, 15)){
		    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	            if (p_warning == 1) {
	                p_oTxt.style.color = "";
	            }
	            // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
			return false;
		}
		arrBuf = p_oTxt.value.split(",");
		if( arrBuf.length >= 2 ){
			for( i=0 ; i < nKeta - p_oTxt.value.length ; i++ ){
				strBuf += " ";
			}
			strBuf += p_oTxt.value;
			bRet = true;
		}
		else {
			if( 1 == arrBuf[0].length%3 && "-" == arrBuf[0].charAt(0) ){
				// -123,345などの場合
				nCnt = nKeta - arrBuf[0].length - (arrBuf[0].length -2)/3;
				for( i=0 ; i < nCnt ;i++ ){
					strBuf += " ";
				}
				strBuf += arrBuf[0].substring(0,4);
				for( i=1 ; i < arrBuf[0].length/3 -1 ; i++ ){
					strBuf += "," + arrBuf[0].substring( 1+3*i,1+3*(i+1) );
				}
				bRet = true;
			}
			else {
				nCnt = nKeta - arrBuf[0].length - (arrBuf[0].length -1)/3;
				for( i=0 ; i < nCnt ;i++ ){
					strBuf += " ";
				}
				nMar = (arrBuf[0].length + 2)%3 + 1;
				strBuf += arrBuf[0].substring( 0, nMar );
				for( i=1 ; i < arrBuf[0].length/3 ; i++ ){
					strBuf += "," + arrBuf[0].substring( nMar + 3*(i-1), nMar + 3*i );
				}
				bRet = true;
			}
		}

		if( bRet ){
	        // 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	        if (p_warning == 1) {
	            if (p_oTxt.value < y103_point) {
	                 p_oTxt.style.color = "#" + y103_fontcolor;
	            }
	            else {
	            	 p_oTxt.style.color = "";
	            }
	        }
	        // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
			p_oTxt.value = strBuf ;
			return true;
		}
		else {
		    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	        if (p_warning == 1) {
	            p_oTxt.style.color = "";
	        }
	        // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
			return false;
		}
	}

	var arrBuf;
	// 整数、小数分解
	var intValue = "";
	var decValue = "";
	arrBuf = p_oTxt.value.split(".");
	if( arrBuf.length > 0 ){
		intValue = arrBuf[0];
	}
	if( arrBuf.length > 1 ){
		decValue = arrBuf[1];
		if( intValue.length == 0 ){
			intValue = "0";
		}
	}
	if( arrBuf.length > 2 ){
		// 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	    if (p_warning == 1) {
	        p_oTxt.style.color = "";
	    }
	    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
		return false;
	}

	var strBuf = ""
	var intBuf = "";
	var decBuf = "";
	var i;
	var nCnt,nMar;
	//整数部正当性チェック
	var bRet = false;
	if ( intValue != "-0" ) {
		if( 0 != AZI_ChkMoney( intValue, 1, 15) && 2 != AZI_ChkMoney( intValue, 1, 15)){
		    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	        if (p_warning == 1) {
	            p_oTxt.style.color = "";
	        }
	        // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
			return false;
		}
	}

	//整数部編集
	arrBuf = intValue.split(",");
	if( arrBuf.length < 2 ){
		if( 1 == arrBuf[0].length%3 && "-" == arrBuf[0].charAt(0) ){
			// -123,345などの場合
			intBuf += arrBuf[0].substring(0,4);
			for( i=1 ; i < arrBuf[0].length/3 -1 ; i++ ){
				intBuf += "," + arrBuf[0].substring( 1+3*i,1+3*(i+1) );
			}
			bRet = true;
		}
		else {
			nMar = (arrBuf[0].length + 2)%3 + 1;
			intBuf += arrBuf[0].substring( 0, nMar );
			for( i=1 ; i < arrBuf[0].length/3 ; i++ ){
				intBuf += "," + arrBuf[0].substring( nMar + 3*(i-1), nMar + 3*i );
			}
			bRet = true;
		}
	}

	//小数部妥当性チェック
	for( i=0 ; i < decValue.length ; i++ ){
		if( !AZI_ChkStr( decValue.substring(i,i+1), ALLOWCHAR_NUMS ) ){
		    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	        if (p_warning == 1) {
	            p_oTxt.style.color = "";
	        }
	        // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
			return false;
		}
	}
	//小数部編集
	if( decValue.length == 0 ){
		for( i=0 ; i < p_zPLen ; i++){
			decBuf = decBuf + "0";
		}
	}else{
		for( i=0 ; i < p_zPLen ; i++ ){
			if( i < decValue.length ){
				decBuf = decBuf + decValue.substring(i,i+1);
			}else{
				decBuf = decBuf + "0";
			}
		}
	}
	if( decBuf.length > 0 ){
		decBuf = "." + decBuf;
	}

	//編集後桁数チェック
	strBuf = intBuf + decBuf;
	if( strBuf.length > nKeta ){
		// 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	    if (p_warning == 1) {
	        p_oTxt.style.color = "";
	    }
	    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
		return;
	}

	//スペース補足
	nCnt = nKeta - strBuf.length;
	for( i=0 ; i < nCnt ; i++ ){
		strBuf = " " + strBuf;
	}
	if( bRet ){
	    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	    if (p_warning == 1) {
	        if (p_oTxt.value < y103_point) {
	            p_oTxt.style.color = "#" + y103_fontcolor;
	        }
	        else {
	            p_oTxt.style.color = "";
	        }
	    }
	    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		// 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
	    if (p_warning == 1) {
	        p_oTxt.style.color = "";
	    }
	    // 統基791-依01-Y103金額出力編集(警告有り)　ADD　END
		return false;
	}

}

// [Y04]郵便番号出力編集
function _Proxy_Y04(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var bRet = true ;
	var arrBuf = p_oTxt.value.split("-");
	var strBuf;

	//正当性チェック
	if( !AZI_ChkYuubin( p_oTxt.value ) ){
		return false;
	}

	if( 1 == arrBuf.length ){
		// 9999999 形式
		strBuf = p_oTxt.value.substring( 0,3) + "-" + p_oTxt.value.substring( 3,7);
	}
	else if( 2 == arrBuf.length ){
		// 999-9999 形式
		strBuf = p_oTxt.value
	}
	else {
		// 統基781-依01
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0301" ) ;
			p_oTxt.focus();
		}
		else {
		    p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	
	p_oTxt.value = strBuf ;
	return true ;
}

// [Y05]
function _Proxy_Y05(
	p_oTxt,		// 対象
	p_zType		// 変換の種類 0:小文字→大文字 1:大文字→小文字
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if( "" == p_zType ){
		AZS_SetAbtErr2( "Y05", "関数の引数にNULLがあります。" );
		return false;
	}

	var bRet = true;
	var strBuf = p_oTxt.value ;
	
	if( 0 == p_zType ){
		strBuf = strBuf.toUpperCase() ;
	}
	else if( 1 == p_zType ){
		strBuf = strBuf.toLowerCase() ;
	}
	else {
		AZS_SetAbtErr2( "Y05", "変換の種類が不正です。" );
		return false ;
	}
	
	p_oTxt.value = strBuf ;
	// 統基800-依01 編集関数（JS）の外字対応 追加 開始
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.SetText(strBuf);
          // 2011/03/01 明細行の選択表示について
			if (p_oTxt.USE_FONT == "server" || p_oTxt.USE_FONT == "client_server"
                        || p_oTxt.USE_FONT == "client_server_2" || p_oTxt.USE_FONT == "client") {
			    p_oTxt.Refresh();
			}
		}
	}
	// 統基800-依01 編集関数（JS）の外字対応 追加 終了
	return true ;
}

// [Y06]和暦年度入力編集
function _Proxy_Y06(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	// 統基959-依-01修正
	else if (3 != p_oTxt.value.length ) {
		return false;
	}
	else {
	    //スペースを削除
	    var strTmp = p_oTxt.value.replace(/ /g,"");
	    if ( 3 != strTmp.length ){
			return false;
	    }
	}

	var strBuf;
	var i;
	var bRet = false ;

	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf[0]//元号チェック
			||p_oTxt.value.charAt(0) == arrBuf[1]
			||p_oTxt.value.charAt(0) == arrBuf[2])
			&& p_oTxt.value.length <= 3//文字数は3文字以内
		){
			if(p_oTxt.value.charAt(0) == arrBuf[0]//元号が英字の場合、引数を編集
			||p_oTxt.value.charAt(0) == arrBuf[1]
			){
				//英字→数字変換
				strBuf = arrBuf[2];
				strBuf += AZI_EditStr( p_oTxt.value.substring(1,3) );
			}
			else if( p_oTxt.value.length == 3){
				//元号が数字のとき,桁数は3桁のみ
				strBuf = p_oTxt.value;
			}
			else{
				//上記以外は不正
				bRet = false;
				break;
			}

			bRet = true ;
			break ;
		}
	}

	if( bRet ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

// [Y07]和暦年度出力編集
function _Proxy_Y07(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	// 統基959-依-01修正
	else if (3 != p_oTxt.value.length ) {
		return false;
	}
	else {
	    //スペースを削除
		var strTmp = p_oTxt.value.replace(/ /g,"");
	    if ( 3 != strTmp.length ){
			return false;
	    }
	}

	var strBuf;
	var i;
	var bRet = false ;

	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf[0]//元号チェック
			||p_oTxt.value.charAt(0) == arrBuf[1]
			||p_oTxt.value.charAt(0) == arrBuf[2])
			&& p_oTxt.value.length <= 3//文字数は3文字以内
		){
			//英数字→英字変換
			strBuf = arrBuf[0];
			if(p_oTxt.value.charAt(0) == arrBuf[0]//元号が英字の場合、引数を編集
			||p_oTxt.value.charAt(0) == arrBuf[1]
			){
				strBuf += AZI_EditStr( p_oTxt.value.substring(1,3) );
			}
			else if( p_oTxt.value.length == 3){//元号が数字のとき,桁数は3桁のみ
				strBuf += p_oTxt.value.substring(1,3);
			}
			else{//上記以外は不正
				bRet = false;
				break;
			}

			bRet = true ;
			break ;
		}
	}

	if( bRet ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

// [Y08]西暦年月日入力編集
function _Proxy_Y08(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	var arrBuf = p_oTxt.value.split(g_dataSeparator);
	if( arrBuf.length > 1 ){
		for( i=0 ; i< 4 - arrBuf[0].length ; i++ ){
			p_oTxt.value = "0" + p_oTxt.value;
		}
	}

	var strBuf = AZI_InSDate( p_oTxt.value, 0 );
	if( strBuf ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

// [Y09]
function _Proxy_Y09(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	var arrBuf = p_oTxt.value.split(g_dataSeparator);
	if( arrBuf.length > 1 ){
		for( i=0 ; i< 4 - arrBuf[0].length ; i++ ){
			p_oTxt.value = "0" + p_oTxt.value;
		}
	}

	var strBuf = AZI_InSDate( p_oTxt.value, 1 );
	var strOut = "";

	if( strBuf ){
		for ( i = 0; i < 4; i++ ){
			if( strBuf.charAt(i) == "0" ){
				strOut += " ";
			}else{
				break;
			}
		}
		strOut += strBuf.substr(i);
		p_oTxt.value = strOut ;
		return true;
	}
	else {
		return false;
	}
}

// [Y10]
function _Proxy_Y10(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

        var arrBuf = p_oTxt.value.split( g_dataSeparator );
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
        // 統基959-依-01修正
	else if (1 == arrBuf.length ){
	    if (7 != p_oTxt.value.length ){
			return false;
		}
	    else {
		     //スペースを削除
			var strTmp = p_oTxt.value.replace(/ /g,"");
			if (7 != strTmp.length) {
				return false;
			}
		}
	}
	else if(3 == arrBuf.length ){
	    if (9 != p_oTxt.value.length ){
			return false;
		}
	}
	var strRet = AZI_InWDate( p_oTxt.value, 0 );// 0:GYYMMDD(G:数字)に編集
	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}

// [Y11]
function _Proxy_Y11(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

        var arrBuf = p_oTxt.value.split( g_dataSeparator );
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
        // 統基959-依-01修正
        else if (1 == arrBuf.length ){
	    if (7 != p_oTxt.value.length ){
			return false;
		}
	    else {
		     //スペースを削除
			var strTmp = p_oTxt.value.replace(/ /g,"");
			if (7 != strTmp.length) {
				return false;
			}
		}
	}
	else if(3 == arrBuf.length ){
	    if (9 != p_oTxt.value.length ){
			return false;
		}
	}

	var strRet = AZI_InWDate( p_oTxt.value, 1);// 1:GYY/MM/DD(G:英字)に編集
	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}

// [Y20] 漢字和暦年度入力編集
function _Proxy_Y20(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	
	var str ;
	if( str = AZI_InWNendoK( p_oTxt.value ) ){
		p_oTxt.value = str ;
		return true;
	}
	else {
		return false;
	}
}

// [Y21] 漢字和暦年度出力編集
function _Proxy_Y21(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	// 統基959-依-01修正
	else if (3 != p_oTxt.value.length ){
		return false;
	}
	else {
	    //スペースを削除
		var strTmp = p_oTxt.value.replace(/ /g,"");
		if ( 3 != strTmp.length ) {
			return false;
	    }
	}

	var strBuf;
	var i;
	var bRet = false ;
	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf[0]//元号チェック
			||p_oTxt.value.charAt(0) == arrBuf[1]
			||p_oTxt.value.charAt(0) == arrBuf[2])
			&& p_oTxt.value.length <= 3//文字数は3文字以内
		){
			//英数字→漢字変換
			strBuf = arrBuf[9];
			strBuf += AZI_EditNum( p_oTxt.value.substring(1,3), 1 );
			strBuf += "年";
			
			bRet = true ;
			break ;
		}
	}

	if( bRet ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

// [Y22] 漢字和暦日付入力編集 明治４４年１０月△１日 → 1441001
function _Proxy_Y22(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	var strBuf;
	if( strBuf = AZI_InWDateK( p_oTxt.value ) ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}

}

// [Y23] 漢字和暦日付出力編集 1441001 → 明治４４年１０月△１日
function _Proxy_Y23(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	// 統基959-依-01修正
	else if (7 != p_oTxt.value.length){
		return false;
	}
	else {
	    //スペースを削除
		var strTmp = p_oTxt.value.replace(/ /g,"");
		if ( 7 != strTmp.length ){
			return false;
	    }
	}

	var strBuf;
	var i;
	var bRet = false ;
	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf[0]//元号チェック
			||p_oTxt.value.charAt(0) == arrBuf[1]
			||p_oTxt.value.charAt(0) == arrBuf[2])
		){
			//英数字→漢字変換
			strBuf = arrBuf[9];//元号漢字
			if( 7 == p_oTxt.value.length ){
				strBuf += AZI_EditNum( p_oTxt.value.substring(1,3), 1 );//年度
				strBuf += "年";
				strBuf += AZI_EditNum( p_oTxt.value.substring(3,5), 0 );//月
				strBuf += "月";
				strBuf += AZI_EditNum( p_oTxt.value.substring(5,7), 0 );//日
				strBuf += "日";
				bRet = true ;
			}
			else if( 6 == p_oTxt.value.length ){
				strBuf += AZI_EditNum( p_oTxt.value.substring(1,2), 1 );//年度
				strBuf += "年";
				strBuf += AZI_EditNum( p_oTxt.value.substring(2,4), 0 );//月
				strBuf += "月";
				strBuf += AZI_EditNum( p_oTxt.value.substring(4,6), 0 );//日
				strBuf += "日";
				bRet = true ;
			}
			break ;
		}
	}

	if( bRet ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

// [Y24] 和暦年月入力編集 T_910 → 20910
function _Proxy_Y24(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	var arrBuf = p_oTxt.value.split( g_dataSeparator );
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}// 2011/11/04 問題処理票_受入111104_002修正Start
	else if (1 == arrBuf.length ){
	    if (5 != p_oTxt.value.length ){
			return false;
		}
	    else {
		     //スペースを削除
			var strTmp = p_oTxt.value.replace(/ /g,"");
			if (5 != strTmp.length) {
				return false;
			}
		}
	}
	else if(2 == arrBuf.length ){
	    if (6 != p_oTxt.value.length ){
			return false;
		}
	}
	// 2011/11/04 問題処理票_受入111104_002修正End
	var strRet = AZI_InWNenGetsu( p_oTxt.value, 0);// 0:GYYMM(G:数字)に編集


	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}

// [Y25] 和暦年月出力編集
function _Proxy_Y25(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	//統基959-依01修正
	else if ( 5 != p_oTxt.value.length ) {
		return false;
	}
	else {
	    //スペースを削除
		var strTmp = p_oTxt.value.replace(/ /g,"");
		if ( 5 != strTmp.length ){
			return false;
		}
	}

	var strRet = AZI_InWNenGetsu( p_oTxt.value, 1);// 1:GYYMM(G:英字)に編集


	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}
// [Y26] 西暦年月入力編集
function _Proxy_Y26(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var strRet = AZI_InSNenGetsu( p_oTxt.value, 0);// 1:GYYMM(G:英字)に編集
	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}
// [Y27] 西暦年月出力編集
function _Proxy_Y27(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var strRet = AZI_InSNenGetsu( p_oTxt.value, 1);// 1:GYY/_M(G:英字)に編集


	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}
// [Y28] 漢字和暦年月入力編集
function _Proxy_Y28(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var strRet = AZI_InWNengetsuK( p_oTxt.value, 0 );// 0:GYYMM(G:数字)に編集


	if( strRet ){
		p_oTxt.value = strRet ;
		return true;
	}
	else {
		return false;
	}
}
// [Y29] 漢字和暦年月出力編集
function _Proxy_Y29(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
        //統基959-依01修正
        else if (5 != p_oTxt.value.length ){
		return false;
	}
	else {
	    //スペースを削除
		var strTmp = p_oTxt.value.replace(/ /g,"");
		if ( 5 != strTmp.length ){
			return false;
		}
	}

	var strBuf;
	var i;
	var bRet = false ;
	// チェック
	bRet = false;
	for( i=0 ; i<g_arrNendo.length ; i++ ){
		var arrBuf = g_arrNendo[i].split( "," ) ;
		if( (p_oTxt.value.charAt(0) == arrBuf[0]//元号チェック
			||p_oTxt.value.charAt(0) == arrBuf[1]
			||p_oTxt.value.charAt(0) == arrBuf[2])
		){
			//英数字→漢字変換
			strBuf = arrBuf[9];//元号漢字
			if( 5 == p_oTxt.value.length ){//GYYMM
				strBuf += AZI_EditNum( p_oTxt.value.substring(1,3), 1 );//年度
				strBuf += "年";
				strBuf += AZI_EditNum( p_oTxt.value.substring(3,5), 0 );//月
				strBuf += "月";
				bRet = true ;
			}
			else if( 4 == p_oTxt.value.length ){ // GYMM
				strBuf += AZI_EditNum( p_oTxt.value.substring(1,2), 1 );//年度
				strBuf += "年";
				strBuf += AZI_EditNum( p_oTxt.value.substring(2,4), 0 );//月
				strBuf += "月";
				bRet = true ;
			}
			break ;
		}
	}
	if( 0 <= p_oTxt.value.indexOf( '/' ) ){
		bRet = false ;
	}

	if( bRet ){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		//[20010605] AZS_SetErrMsg( "AZD00108" ) ;
		return false;
	}
}

// [Y30]住所用英数字全角編集
function _Proxy_Y30(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応 追加 開始
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = p_oTxt.GetText();
		}
	}
	// 統基800-依01 編集関数（JS）の外字対応 追加 終了
	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var num_str = "-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
	var num_str2 = "－０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
	var i,j,flg;
	var strBuf = "";

	for( i=0 ; i<p_oTxt.value.length ; i++ ) {
		//該当する文字を半角から全角に変換
		flg = false ;
		for( j=0 ; j<num_str.length ; j++ ) {
			if( p_oTxt.value.charAt(i) == num_str.charAt(j) ) {
				strBuf += num_str2.charAt(j)//半角から全角に変換
				flg = true;
				break ;
			}
		}
		if( !flg ){
			strBuf += p_oTxt.value.charAt(i)//該当する文字がなかったらそのまま格納
		}
	}
	p_oTxt.value = strBuf;
	// 統基800-依01 編集関数（JS）の外字対応 追加 開始
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.SetText(strBuf);
          // 2011/03/01 明細行の選択表示について
			if (p_oTxt.USE_FONT == "server" || p_oTxt.USE_FONT == "client_server"
                        || p_oTxt.USE_FONT == "client_server_2" || p_oTxt.USE_FONT == "client") {
			    p_oTxt.Refresh();
			}
		}
	}
	// 統基800-依01 編集関数（JS）の外字対応 追加 終了

	return true ;
}

// [Y36]郵便番号出力編集
function _Proxy_Y36(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr( p_oTxt.value, " " );
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr( p_oTxt.value, " " );

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	var bRet = true ;
	var arrBuf = p_oTxt.value.split("-");
	var strBuf;

	//正当性チェック
	if( !AZI_ChkYuubin( p_oTxt.value ) ){
		//AZS_SetErrMsg( "AZD00022" ) ;
		return false;
	}

	if( 1 == arrBuf.length ){// 9999999 形式
		strBuf = p_oTxt.value;
	}
	else if( 2 == arrBuf.length ){// 999-9999 形式
		strBuf = p_oTxt.value.substring( 0,3) + p_oTxt.value.substring( 4,8);
	}
	else {
		// 統基781-依01
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0301" ) ;
			p_oTxt.focus();
		}
		else {
		    p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	
	p_oTxt.value = strBuf ;

	return true ;
}

// [Y39]時刻入力編集
function _Proxy_Y39(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr(p_oTxt.value, " ");
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr(p_oTxt.value, " ");

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	var strBuf = AZI_InTime( p_oTxt.value, 0 );
	if(strBuf){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

// [Y40]時刻出力編集
function _Proxy_Y40(
	p_oTxt		// 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	//前スペースを消す
	p_oTxt.value = AZI_DelStr(p_oTxt.value, " ");
	//末尾のスペースを削除
	p_oTxt.value = AZI_DelTailStr(p_oTxt.value, " ");

	if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}

	var strBuf = AZI_InTime(p_oTxt.value, 1);
	if(strBuf){
		p_oTxt.value = strBuf ;
		return true;
	}
	else {
		return false;
	}
}

function _Proxy_Y77(
    p_oTxt,     // 対象
    p_startPos, // 開始桁
    p_editRule  // 編集方法
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			return true;
		}
	}
	var p_StrIn = p_oTxt.value;
    var p_outStr = "";
	var nameTxt = p_oTxt.getAttribute("name");
	var p_txt = document.getElementsByName(nameTxt);
	var lineNo = 0;
	var isMeisai = false;
    for (lineNo = 0; lineNo < p_txt.length; lineNo++) {
    	if (p_oTxt == p_txt[lineNo]) {
    		break;
    	}
    }
    var p_StrInId = p_oTxt.id;

    // 作業オブジェクト取得
    var p_wrkId;
    var pointindex = p_StrInId.lastIndexOf('.');
    // 子画面の場合
    if (pointindex > 0) {
        if ("m" == p_StrInId.substring(pointindex + 1, pointindex + 2)) {
    		p_wrkId = p_StrInId.substring(0, pointindex + 1) + "m__" + p_StrInId.substring(pointindex + 4);
    		isMeisai = true;
    	}
       else {
       		p_wrkId = p_StrInId.substring(0, pointindex + 1) + "___" + p_StrInId.substring(pointindex + 4);
       		isMeisai = false;
       	}
    }

    //　親画面の場合
    else {
       if ("m" == p_StrInId.substring(0, 1)) {
       	    p_wrkId = 'm__' + p_StrInId.substring(3);
       	    isMeisai = true;
    	}
       else {
       	  	 p_wrkId = '___' + p_StrInId.substring(3);
       	  	 isMeisai = false;
       }
    }
    var p_oWrk = document.getElementById(p_wrkId);
    if (p_oWrk == null) {
    	//「GPRIME-基盤-N-1075」Y77関数の記述拡張対応
    	p_oWrk = p_oTxt;
    }
    var nameWrk = p_oWrk.getAttribute("name");
    var p_wrk = document.getElementsByName(nameWrk);
    // 入力文字列を作業オブジェクトに保存
    if (isMeisai) {
    	p_wrk[lineNo].value = p_txt[lineNo].value;
    		// 入力文字列が空文字の場合
           if (AZI_StrIsEmpty(p_txt[lineNo].value)) {
               return false;
           }
           // 入力文字列のチェック
           if (AZI_EditStrByRuleCheck(p_txt[lineNo].value,p_startPos,p_editRule) == false) {
               //統基781-依01
	           if (!errorFlag) {
		    AZS_SetErrMsg( "AZDP0228" ) ;
                    p_txt[lineNo].focus();
			   }
			   else {
		            p_txt[lineNo].value = "";
		            return true;
		       }
		       setTimeout("errorFlag = false;",1);
               return false;
           }
          p_outStr = AZI_EditStrByRule(p_txt[lineNo].value,p_startPos,p_editRule);
          p_txt[lineNo].value= p_outStr;
   }
  else {
  	    p_oWrk.value = p_StrIn;
  	    // 入力文字列が空文字の場合
        if (AZI_StrIsEmpty(p_StrIn)) {
            return false;
        }
        // 入力文字列のチェック
        if (AZI_EditStrByRuleCheck(p_StrIn,p_startPos,p_editRule) == false) {
            //統基781-依01
	        if (!errorFlag) {
				AZS_SetErrMsg( "AZDP0228" ) ;
                p_oTxt.focus();
			}
			else {
		        p_oTxt.value = "";
		        return true;
		    }
		    setTimeout("errorFlag = false;",1);
            return false;
        }
       p_outStr = AZI_EditStrByRule(p_StrIn,p_startPos,p_editRule);
       p_oTxt.value= p_outStr;     
  }
    return true;
}

function _Proxy_Y78(
    p_oTxt // 対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			return true;
		}
	}
	var nameTxt = p_oTxt.getAttribute("name");
	var p_txt = document.getElementsByName(nameTxt);
	var p_StrInId = p_oTxt.id;
	var lineNo = 0;
	var isMeisai = false;
	for (lineNo = 0; lineNo < p_txt.length; lineNo++) {
		if (p_oTxt == p_txt[lineNo]) {
			break;
		}
	}
    // 作業オブジェクト取得
    var p_wrkId;
    var pointindex = p_StrInId.lastIndexOf('.');
    // 子画面の場合
    if (pointindex > 0) {
    	   if ("m" == p_StrInId.substring(pointindex + 1, pointindex + 2)) {
       	    	p_wrkId = p_StrInId.substring(0, pointindex + 1) + "m__" + p_StrInId.substring(pointindex + 4);
       	    	isMeisai = true;
       	    }
       	  else {
       	  	   p_wrkId = p_StrInId.substring(0, pointindex + 1) + "___" + p_StrInId.substring(pointindex + 4);
       	  	   isMeisai = false;
       	  }
    }
    //　親画面の場合
    else {
    	    if ("m" ==  p_StrInId.substring(0, 1)) {
            	p_wrkId = "m__" + p_StrInId.substring(3);
            	isMeisai = true;
            }
          else {
          	    p_wrkId = "___" + p_StrInId.substring(3);
          	    isMeisai = false;
          }
    }
    var p_oWrk = document.getElementById(p_wrkId);
    if (p_oWrk != null) {
    	var nameWrk = p_oWrk.getAttribute("name");
  	   var p_wrk = document.getElementsByName(nameWrk);
  	    if (isMeisai) {
  	    	p_txt[lineNo].value = p_wrk[lineNo].value;
       }
       else {
  	        p_oTxt.value = p_oWrk.value;
       }  	
  }
}

// 統基791-依01-Y103金額出力編集(警告有り)　ADD　START
var y103_fontcolor = "";
var y103_point = "";
// [Y103]金額出力編集(警告有り)
function _Proxy_Y103(
	p_oTxt,		// 対象
	p_zPLen,	// 小数桁数
	p_count  // 出力結果桁数
){
    return AZI_EditMoney(p_oTxt, p_zPLen, p_count, 1);
}
// 統基791-依01-Y103金額出力編集(警告有り)　ADD　END

// 文字列指定編集チェック<br>
// 入力文字列の桁数をチェックする。<br>
// return true:チェックOK false:チェックNG
function AZI_EditStrByRuleCheck(
  p_StrIn, // 編集対象となる文字列（半角のみ）
  p_StartPos, // 入力文字列が編集対象となる先頭の桁（０オリジン）
  p_editRule //編集方法を記述する文字列（全角あり）
){
    if (AZI_StrIsEmpty(p_StrIn)) {
       // 編集方法に対して入力文字列の桁数がたりない
       return false;
    }else if(AZI_StrIsEmpty(p_editRule)) {
       return true;
    }else {
       // 編集方法の処理
       var index = parseInt(p_StartPos);
       // 編集flag
       var strEditFlag = "0";
       // 編集方法length
       var lenEditRule = p_editRule.length;
       var i;
       for (i = 0; i < lenEditRule; i++) {
          if (index >= p_StrIn.length && i == (lenEditRule - 1)) {
              // 編集方法に対して入力文字列の桁数がたりない
              return false;
          }
          // 入力文字列の字
          var strInItem = AZI_SubString(p_StrIn, index, index + 1);
          // 編集方法の字
          var strEditRuleItem = AZI_SubString(p_editRule, i, i + 1);
          if (strEditRuleItem == "X") {
              index++;
              strEditFlag = "0";
          }
          else if (strEditRuleItem =="Y") {
              i++;
          }
          else if (strEditRuleItem=="Z") {
              if (strInItem!="0" || strEditFlag!="0") {
                  strEditFlag = "";
              }
              index++;
          }
       }
    }
   return true;
}

/**
 * [Y81]文字列指定出力編集.<br>
 * @param	p_oTxt		対象
 * @param	p_editRule	編集方法
 * @return 結果
 */
function _Proxy_Y81( p_oTxt, p_editRule ){
	// 統基800-依01 編集関数（JS）の外字対応
	if ( p_oTxt != null ) {
		if ( p_oTxt.tagName == "OBJECT" ) {
			return true;
		}
	}
	var p_StrIn = p_oTxt.value;
	var p_outStr = "";
	var nameTxt = p_oTxt.getAttribute("name");
	var p_txt = document.getElementsByName(nameTxt);
	var lineNo = 0;
	var isMeisai = false;
	for ( lineNo = 0; lineNo < p_txt.length; lineNo++ ) {
		if ( p_oTxt == p_txt[lineNo] ) {
			break;
		}
	}
	var p_StrInId = p_oTxt.id;

	// 作業オブジェクト取得
	var p_wrkId;
	var pointindex = p_StrInId.lastIndexOf('.');

	// 子画面の場合
	if ( pointindex > 0 ) {
		if ( "m" == p_StrInId.substring(pointindex + 1, pointindex + 2) ) {
			p_wrkId = p_StrInId.substring(0, pointindex + 1) + "m__" + p_StrInId.substring(pointindex + 4);
			isMeisai = true;
		}
		else {
			p_wrkId = p_StrInId.substring(0, pointindex + 1) + "___" + p_StrInId.substring(pointindex + 4);
			isMeisai = false;
		}
	}
	// 親画面の場合
	else {
		if ("m" == p_StrInId.substring(0, 1)) {
			p_wrkId = 'm__' + p_StrInId.substring(3);
			isMeisai = true;
		}
		else {
			p_wrkId = '___' + p_StrInId.substring(3);
			isMeisai = false;
		}
	}
	var p_oWrk = document.getElementById(p_wrkId);
	if (p_oWrk == null) {
		//「GPRIME-基盤-N-1075」Y77関数の記述拡張対応
		p_oWrk = p_oTxt;
	}
	var nameWrk = p_oWrk.getAttribute("name");
	var p_wrk = document.getElementsByName(nameWrk);

	// 入力文字列を作業オブジェクトに保存
	if ( isMeisai ) { // 明細
		p_wrk[lineNo].value = p_txt[lineNo].value;

		// 入力文字列が空文字の場合
		if (AZI_StrIsEmpty(p_txt[lineNo].value)) {
			return false;
		}
		// 編集方法のチェック
		if ( !AZI_CheckEditRule(p_editRule) ) {
			return false;
		}
		
		p_outStr = AZI_EditStrZeroPaddingByRule(p_txt[lineNo].value, p_editRule);
		// 0埋めを実施した文字列をworkへ
		p_wrk[lineNo].value = AZI_EditStrZeroPadding(p_txt[lineNo].value, p_editRule);
		p_txt[lineNo].value= p_outStr;
	}
	else { // 明細以外
		p_oWrk.value = p_StrIn;

		// 入力文字列が空文字の場合
		if (AZI_StrIsEmpty(p_StrIn)) {
			return false;
		}
		// 編集方法のチェック
		if ( !AZI_CheckEditRule(p_editRule) ) {
			return false;
		}
		p_outStr = AZI_EditStrZeroPaddingByRule(p_StrIn, p_editRule);
		// 0埋めを実施した文字列をworkへ
		p_oWrk.value = AZI_EditStrZeroPadding(p_StrIn, p_editRule);
		p_oTxt.value = p_outStr;
	}
	return true;
}

/**
 * 編集方法のチェック.<br>
 * 編集方法に誤りがある('Y'のあとが'X','Y','Z'でない)場合エラー.<br>
 * @param {String}	p_editRule		編集方法を記述する文字列
 * @return {boolean}	結果
 */
function AZI_CheckEditRule ( p_editRule ) {
	
	for ( var i=0; i < p_editRule.length; i++ ) {
		var item = AZI_SubString(p_editRule, i, i + 1);  // 編集方法の文字
		
		if ( item == "Y" ) {
			if ( i == p_editRule.length -1 ) {
				return false;
			} else {
				// Yの後ろの文字.
				var itemAfterY = AZI_SubString(p_editRule, i + 1 , i + 2)
				if ( itemAfterY.match(/[XYZ]/) ) {
					i++;
				} else {
					return false;
				}
			}
		}
	}
	return true;
}

/**
 * 編集方法に対して不足する文字数分、入力文字列を0埋めして返却する.<br>
 * @param {String}	p_strIn			編集対象となる文字列（半角のみ）
 * @param {String}	p_editRule		編集方法を記述する文字列
 * @return {String}	編集対象を0埋めした文字列
 */
function AZI_EditStrZeroPadding ( p_strIn, p_editRule ) {
	
	if ( AZI_StrIsEmpty(p_strIn) ) { // 編集対象が空
		return "";
	} 
	
	var indexStrIn = 0; // 入力文字列として必要なindex
	var p_editStrIn = p_strIn; // 0埋めを実施した文字列
	var lenEditRule = p_editRule.length; // 編集方法の長さ
	
	for ( var indexEditRule = 0; indexEditRule < lenEditRule; indexEditRule++ ) {
		var item = AZI_SubString( p_editRule, indexEditRule, indexEditRule + 1)
		
		if ( item == "X" ) {
			indexStrIn++;
		} else if ( item == "Y" ) {
			indexEditRule++;
		} else if ( item == "Z" ) {
			indexStrIn++;
		}
	}
	
	// 頭0埋め処理
	while( p_editStrIn.length < indexStrIn ) {
		p_editStrIn = "0" + p_editStrIn;
	}
	
	return p_editStrIn;
}

/**
 * 文字列指定編集。<br>
 * 入力文字列を指定された編集方法で編集し、編集文字列を返却する。<br>
 * 編集方法に対して入力文字列の文字数が不足する場合は、頭0埋めを行う。<br>
 * ただし、編集対象が空文字の場合は、頭0埋めは行わない。<br>
 *
 * 編集方法は、60-XX-ZZ,60-ZZ-XXのように指定する。<br>
 * X⇒入力文字列に置き換えていく置換対象文字。<br>
 * Z⇒Xと同じく置換対象文字で、且つ編集方法で'Z'が連続し、<br>
 *    表示内容が左端から0が続いた場合に半角スペースにする。
 * Y⇒X,Yを表示する場合のエスケープ文字とする。(YX⇒X、YZ⇒Z、YY⇒Y)<br>
 * 編集処理についてはY77の処理と同様.
 * 
 * @param {String}	p_strIn			編集対象となる文字列（半角のみ）
 * @param {String}	p_editRule		編集方法を記述する文字列
 * @return {String}	編集された文字列
 */
function AZI_EditStrZeroPaddingByRule( p_strIn, p_editRule ){

	var p_outStr = "";
	var p_editStrIn = p_strIn;

	// 異常
	if ( AZI_StrIsEmpty(p_strIn) ) { // 編集対象が空
		return "";
	} else {
		// 編集方法の処理
		var index = 0;
		// 編集方法を記述する文字列のlength値
		var lenEditRule = p_editRule.length;
		
		p_editStrIn = AZI_EditStrZeroPadding( p_strIn, p_editRule );
		
		// 編集flag
		var strEditFlag = "0";
		var i;
		
		for ( i = 0; i < lenEditRule; i++ ) {
			if ( index >= p_editStrIn.length && i == (lenEditRule - 1) ) { // 入力文字列をそのまま返却
				return p_strIn;
			}
			
			var strInItem = AZI_SubString(p_editStrIn, index, index + 1); // 入力文字列の字
			var strEditRuleItem = AZI_SubString(p_editRule, i, i + 1);  // 編集方法の字
			
			if ( strEditRuleItem == "X" ) {
				p_outStr= p_outStr + AZI_SubString(p_editStrIn, index, index + 1);
				index++;
				strEditFlag = "0";
			} else if ( strEditRuleItem == "Y" ) {
				// 編集方法に誤りがある('Y'のあとが'X','Y','Z'でない)、編集をせずに入力文字列をそのまま返却
				if ( i == (lenEditRule - 1) ) {
					return p_strIn;
				} else {
					// Y後の文字
					var strAfterY = AZI_SubString(p_editRule, i + 1, i + 2);
					if ( strAfterY == "X" ) {
						p_outStr= p_outStr + "X";
						i++;
					} else if ( strAfterY=="Y" ) {
						p_outStr = p_outStr + "Y";
						i++;
					} else if ( strAfterY == "Z" ) {
						p_outStr = p_outStr + "Z";
						i++;
					} else {
						// 編集方法に誤りがある('Y'のあとが'X','Y','Z'でない)、編集をせずに入力文字列をそのまま返却
						return p_strIn;
					}
				}
			} else if ( strEditRuleItem == "Z" ) {
				if ( strInItem == "0" && strEditFlag == "0" ) {
					p_outStr= p_outStr + " ";
				} else {
					p_outStr = p_outStr + strInItem;
					strEditFlag = "";
				}
				index++;
			} else {
				p_outStr = p_outStr + strEditRuleItem;
			}
		}
		return p_outStr;
	}
}

/**
 * [Y82]文字列指定入力編集.<br>
 * @param	p_oTxt	対象
 * @return	結果
 */
function _Proxy_Y82( p_oTxt ){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			return true;
		}
	}
	var nameTxt = p_oTxt.getAttribute("name");
	var p_txt = document.getElementsByName(nameTxt);
	var p_StrInId = p_oTxt.id;
	var lineNo = 0;
	var isMeisai = false;
	for (lineNo = 0; lineNo < p_txt.length; lineNo++) {
		if (p_oTxt == p_txt[lineNo]) {
			break;
		}
	}
	// 作業オブジェクト取得
	var p_wrkId;
	var pointindex = p_StrInId.lastIndexOf('.');
	// 子画面の場合
	if (pointindex > 0) {
		if ("m" == p_StrInId.substring(pointindex + 1, pointindex + 2)) {
			p_wrkId = p_StrInId.substring(0, pointindex + 1) + "m__" + p_StrInId.substring(pointindex + 4);
			isMeisai = true;
		} else {
			p_wrkId = p_StrInId.substring(0, pointindex + 1) + "___" + p_StrInId.substring(pointindex + 4);
			isMeisai = false;
		}
	}
	// 親画面の場合
	else {
		if ("m" ==  p_StrInId.substring(0, 1)) {
			p_wrkId = "m__" + p_StrInId.substring(3);
			isMeisai = true;
		} else {
			p_wrkId = "___" + p_StrInId.substring(3);
			isMeisai = false;
		}
	}
	var p_oWrk = document.getElementById(p_wrkId);
	if (p_oWrk != null) {
		var nameWrk = p_oWrk.getAttribute("name");
		var p_wrk = document.getElementsByName(nameWrk);
		if (isMeisai) {
			p_txt[lineNo].value = p_wrk[lineNo].value;
		} else {
			p_oTxt.value = p_oWrk.value;
		}
	}
}


// 文字列指定編集<br>
// 入力文字列を指定された編集方法で編集し、編集文字列を返却する。<br>
// 編集方法は、60-XX-ZZ,60-ZZ-XXのように指定する。<br>
// X⇒入力文字列に置き換えていく置換対象文字<br>
// Z⇒Xと同じく置換対象文字で、且つ編集方法で'Z'が連続し、<br>
// 表示内容が左端から0が続いた場合に半角スペースにする。<br>
// Y⇒X,Yを表示する場合のエスケープ文字とする。(YX⇒X、YZ⇒Z、YY⇒Y)<br>
// return 編集された文字列   
function AZI_EditStrByRule(
  p_StrIn, // 編集対象となる文字列（半角のみ）
  p_IStartIndex, // 入力文字列が編集対象となる先頭の桁（０オリジン）
  p_editRule //編集方法を記述する文字列（全角あり）
){
    var p_outStr = "";
    // 異常 開始桁がマイナス値である
    if (AZI_StrIsEmpty(p_StrIn)) {
       // 編集をせずに入力文字列をそのまま返却
       return "";
    }else if (p_IStartIndex < 0) {
       // 編集をせずに入力文字列をそのまま返却
       return p_StrIn;
    } else {
       // 編集方法の処理
       var index = parseInt(p_IStartIndex);
       // 編集flag
       var strEditFlag = "0";
       // 編集方法length
       var lenEditRule = p_editRule.length;
       var i;
       for (i = 0; i < lenEditRule; i++) {
          if (index >= p_StrIn.length && i == (lenEditRule - 1)) {
              // 編集をせずに入力文字列をそのまま返却
              return p_StrIn;
          }
          // 入力文字列の字
          var strInItem = AZI_SubString(p_StrIn, index, index + 1);
          // 編集方法の字
          var strEditRuleItem = AZI_SubString(p_editRule, i, i + 1);
          if (strEditRuleItem == "X") {
              p_outStr= p_outStr+AZI_SubString(p_StrIn, index, index + 1);
              index++;
              strEditFlag = "0";
          }
          else if (strEditRuleItem =="Y") {
                    // 編集方法に誤りがある('Y'のあとが'X','Y','Z'でない)、編集をせずに入力文字列をそのまま返却
                    if (i == (lenEditRule - 1)) {
                        return p_StrIn;
                    }
                    else {
                        // Y後の文字
                        var strAfterY = AZI_SubString(p_editRule, i + 1, i + 2);
                        if (strAfterY=="X") {
                            p_outStr= p_outStr+"X";
                            i++;
                        }
                        else if (strAfterY=="Y") {
                            p_outStr= p_outStr+"Y";
                            i++;
                        }
                        else if (strAfterY=="Z") {
                            p_outStr= p_outStr+"Z";
                            i++;
                        }
                        else {
                            // 編集方法に誤りがある('Y'のあとが'X','Y','Z'でない)、編集をせずに入力文字列をそのまま返却
                            return p_StrIn;
                        }
                    }
          }
          else if (strEditRuleItem=="Z") {
                    if (strInItem=="0" && strEditFlag=="0") {
                         p_outStr= p_outStr+" ";
                    }
                    else {
                        p_outStr= p_outStr+strInItem;
                        strEditFlag = "";
                    }
                    index++;
          }
          else {
              p_outStr= p_outStr + strEditRuleItem;
          }
       }
       return p_outStr;
    }
}


///////////////////////////////////////////////////////////
// 業務非公開関数
///////////////////////////////////////////////////////////

// 特殊処理用JS  番地編集　業務非公開  ADD 2001/06/04 KTS 
function _Proxy_Banti_Edit(
	p_oTxt		//対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
	var lInStrLen = p_oTxt.value.length;

	if( 0 == lInStrLen ){
		p_oTxt.value = "";
		return true; // NULLならなにもしない
	}

	//バッファ準備
	var strInBuf  = p_oTxt.value ;
	var strOutBuf = "";  //初期化

	//"/"文字編集
	var Sura = "/";
	if( strInBuf.indexOf(Sura,0) != -1 ){
		var arrSura = strInBuf.split(Sura);
		for (var i=0 ; i< arrSura.length -1 ; i++){
			strOutBuf = strOutBuf + arrSura[i] + "番地";
		}
		strInBuf = strOutBuf + arrSura[i];
	}

	//"*"文字編集
	var Kake = "*";
	if(-1 != strInBuf.indexOf(Kake,0)){
		var arrKake = strInBuf.split(Kake);
		strOutBuf = "";
		for (var i=0 ; i< arrKake.length -1 ; i++){
			strOutBuf = strOutBuf + arrKake[i] + "番";
		}
		strInBuf = strOutBuf + arrKake[i];
	}
	
	//"+"文字編集
	var Purasu = "+";
	if(-1 != strInBuf.indexOf(Purasu,0)){
		var arrPurasu = strInBuf.split(Purasu);
		strOutBuf = "";
		for (var i=0 ; i< arrPurasu.length -1 ; i++){
			strOutBuf = strOutBuf + arrPurasu[i] + "号";
		}
		strInBuf = strOutBuf + arrPurasu[i];
	}
	
	//"="文字編集
	var Eq = "=";
	if(-1 != strInBuf.indexOf(Eq,0)){
		var arrEq = strInBuf.split(Eq);
		strOutBuf = "";
		for (var i=0 ; i< arrEq.length -1 ; i++){
			strOutBuf = strOutBuf + arrEq[i] + "の";
		}
		strInBuf = strOutBuf + arrEq[i];
	}

	//住所用英数字全角変換
	p_oTxt.value = strInBuf;
	_Proxy_Y30(p_oTxt);
	return true;
}

// 桁数チェック用JS  業務非公開  ADD 2001/07/03 KTS 
function _Proxy_Byte_Chk(
	p_oTxt		//対象
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			return true;
		}
	}
	var lMaxLength = p_oTxt.maxLength;

	var strBuf = p_oTxt.value;
	var lStrLength = AZI_bytelength(strBuf)

	if( lStrLength > lMaxLength ){
		//統基781-依01
	    if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0003" ) 
		    p_oTxt.focus() ;
		}
		else {
		    p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
		return false;
	}
	return true;
}

//////////////////////////////////////////////
// DWマクロの一元化

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//////////////////////////////////////////////
// 業務へ公開されJavaScript関数

// onFocusイベントのPre関数
function onPreCommonFocus(item) {
}

// onFocusイベントのPost関数
function onPostCommonFocus(item) {
}

// onBlureイベントのPre関数
function onPreCommonBlur(item) {
}

// onBlureイベントのPost関数
function onPostCommonBlur(item) {
}

//////////////////////////////////////////////
// 画面制御用
//-----------------------------------------
// 共通処理


// ・STARTUP からの待ち画面
// ・ログインフレームが表示されるまで
// ・ログイン画面のログインからの待ち画面
// ・ログイン画面の終了からの待ち画面
// ・メニュー画面の業務起動からの待ち画面
// ・メニュー画面の終了からの待ち画面
//-----------------------------------------
function AZC_CommonProcess(winRef)
{
	winRef.document.writeln( 'function AZI_CancelMouseRightClick(e) {' );
	winRef.document.writeln( 'if (navigator.appName == "Microsoft Internet Explorer") {' );
	winRef.document.writeln( 'if (event.button == 2) {' );
	winRef.document.writeln( 'alert("右クリックは使用できません");' );
	winRef.document.writeln( 'return(false); } }' );
	winRef.document.writeln( 'else if (navigator.appName == "Netscape") {' );
	winRef.document.writeln( 'if (e.which == 3) {' );
	winRef.document.writeln( 'alert("右クリックは使用できません");' );
	winRef.document.writeln( 'return(false); } } }' );
	winRef.document.writeln( 'if (document.all) {' );
	winRef.document.writeln( 'document.onmousedown = AZI_CancelMouseRightClick; }' );
	winRef.document.writeln( 'if (document.layers) {' );
	winRef.document.writeln( 'window.onmousedown = AZI_CancelMouseRightClick;' );
	winRef.document.writeln( 'window.captureEvents(Event.MOUSEDOWN); }' );

	winRef.document.writeln( 'function AZI_DocumentOnKeydown() {' );
	winRef.document.writeln( 'var VK_F1 = 112;' );
	winRef.document.writeln( 'var VK_F15 = 126;' );
	winRef.document.writeln( 'var VK_BACKS = 8;' );
	winRef.document.writeln( 'var VK_ESCAPE = 27;' );
	winRef.document.writeln( 'var VK_HOME = 36;' );
	winRef.document.writeln( 'var VK_LEFT = 37;' );
	winRef.document.writeln( 'var VK_RIGHT = 39;' );
	winRef.document.writeln( 'var VK_B = 66;' );
	winRef.document.writeln( 'var VK_D = 68;' );
	winRef.document.writeln( 'var VK_E = 69;' );
	winRef.document.writeln( 'var VK_F = 70;' );
	winRef.document.writeln( 'var VK_H = 72;' );
	winRef.document.writeln( 'var VK_I = 73;' );
	winRef.document.writeln( 'var VK_L = 76;' );
	winRef.document.writeln( 'var VK_N = 78;' );
	winRef.document.writeln( 'var VK_O = 79;' );
	winRef.document.writeln( 'var VK_R = 82;' );
	winRef.document.writeln( 'var VK_W = 87;' );
	winRef.document.writeln( 'if ((event.keyCode >= VK_F1 && event.keyCode <= VK_F15) ||' );
	winRef.document.writeln( '	event.keyCode == VK_BACKS || event.keyCode == VK_ESCAPE ||' );
	winRef.document.writeln( '(event.ctrlKey == true && (' );
	winRef.document.writeln( 'event.keyCode == VK_B || event.keyCode == VK_D ||' );
	winRef.document.writeln( 'event.keyCode == VK_E || event.keyCode == VK_F ||' );
	winRef.document.writeln( 'event.keyCode == VK_H || event.keyCode == VK_I ||' );
	winRef.document.writeln( 'event.keyCode == VK_L || event.keyCode == VK_N ||' );
	winRef.document.writeln( 'event.keyCode == VK_O || event.keyCode == VK_R ||' );
	winRef.document.writeln( 'event.keyCode == VK_W' );
	winRef.document.writeln( ') ) ) {' );
	winRef.document.writeln( 'if (event.keyCode == VK_BACKS) {' );
	winRef.document.writeln( 'var activeObject = event.srcElement;' );
	winRef.document.writeln( 'if (activeObject.tagName == "TEXTAREA") { return; }' );
	winRef.document.writeln( 'if (activeObject.tagName == "INPUT") {' );
	winRef.document.writeln( 'if (activeObject.type == "text" || activeObject.type == "password") { return; } } }' );
	winRef.document.writeln( 'event.keyCode = 0;' );
	winRef.document.writeln( 'event.returnValue = false;' );
	winRef.document.writeln( 'event.cancelBubble = true;' );
	winRef.document.writeln( '} else if (event.altKey == true) {' );
	winRef.document.writeln( 'if (event.keyCode == VK_HOME) {' );
	winRef.document.writeln( 'alert("Alt + HOME キーは使用できません");' );
	winRef.document.writeln( '} else if (event.keyCode == VK_LEFT) {' );
	winRef.document.writeln( 'alert("Alt + ← キーは使用できません");' );
	winRef.document.writeln( '} else if (event.keyCode == VK_RIGHT) {' );
	winRef.document.writeln( 'alert("Alt + → キーは使用できません"); } } }' );
	winRef.document.writeln( 'if (document.all) { document.onkeydown = AZI_DocumentOnKeydown; }' );
}

// マウス右ボタンクリックの取消し
function contextmenuctrl() {
  if (event.srcElement.type != "text" && event.srcElement.type != "textarea") return false;
}
if (document.all) {
  document.oncontextmenu = contextmenuctrl;
}

// IE7、8対応
//---------------------------------
// Ctrl + マウス左クリック抑止
// Ctrl + マウスホイールクリック抑止
//---------------------------------
function onmousedown() {
	if (event.ctrlKey == true) {
		// 20101012 統基857-依01-画面起動制御の機能強化②　ADD START
		var isRelease = false;
		if (parent.parent.releaseFlag != null && parent.parent.releaseFlag == 1) {
			parent.parent.ctrlFlag = 1;
			isRelease = true;
		}
		if (parent.releaseFlag != null && parent.releaseFlag == 1) {
			parent.ctrlFlag = 1;
			isRelease = true;
		}
		// 20101012 統基857-依01-画面起動制御の機能強化②　ADD END
		// 20101012 統基857-依01-画面起動制御の機能強化②　UPDATE START
		if((event.button & 0x01) != 0 && !isRelease) {
			event.keyCode = 0;
			event.cancelBubble = true;
			event.returnValue = false;
			alert('Ctrl + マウス左クリックは使用できません');
		}
		// 20101012 統基857-依01-画面起動制御の機能強化②　UPDATE END
		if((event.button & 0x04) != 0) {
			event.keyCode = 0;
			event.cancelBubble = true;
			event.returnValue = false;
			alert('Ctrl + マウスホイールクリックは使用できません');
		}
	}
	else if((event.button & 0x04) != 0 &&
            ((event.srcElement.tagName == 'A')
            || (event.srcElement.tagName == 'DIV'))){
		// リンクタグでマウスホイールクリックは使用できません
		event.keyCode = 0;
		event.cancelBubble = true;
		event.returnValue = false;
		alert('リンクタグでマウスホイールクリックは使用できません');
	}
}

//---------------------------------
// CTRL/SHIFT+マウスホイール抑止
//---------------------------------
function mousewheel() {
	if (event.ctrlKey == true) {
		event.keyCode = 0;
		event.cancelBubble = true;
		event.returnValue = false;
		alert('Ctrl + マウスホイールスクロールは使用できません');
	}
	else if (event.shiftKey == true) {
		return false;
	}
}
if (document.all) {
	document.onmousedown = onmousedown;
	document.onmousewheel = mousewheel;
}
	//処理区分がフォーカス取得キー（ALT　＋　VK_SHORIKUBUN）
	//
	//    F1の時：112
	//　　F2の時：113（現状）
	//　　F3～F12は：114～123
	//    aの時：65
	//　　bの時：66
	//　　c～zは：67～90

	var VK_SHORIKUBUN = 113;

// アクセラレータキーの抑止用（IE専用）
function AZI_DocumentOnKeydown() {
	var VK_RETURN = 13;
	var VK_TAB = 9;
	var VK_F1 = 112;
	var VK_F15 = 126;
	var VK_BACKS = 8;
	var VK_ESCAPE = 27;
	var VK_HOME = 36;
	var VK_LEFT = 37;
	var VK_RIGHT = 39;
	var VK_B = 66;
	var VK_C = 67;
	var VK_D = 68;
	var VK_E = 69;
	var VK_F = 70;
	var VK_H = 72;
	var VK_I = 73;
	var VK_L = 76;
	var VK_N = 78;
	var VK_O = 79;
	var VK_R = 82;
	var VK_V = 86;
	var VK_W = 87;
	var VK_X = 88;
	var VK_SPACE = 32;

	if ( event.keyCode == VK_SPACE ) {
        // ボタン（実行ボタン・入力補助ボタン）にフォーカスがある状態で
        // 「Spaceキー」押下により、そのsubmitを実行。
        // リンクタグ 
		if (event.srcElement.tagName == 'A') {
            var obj = event.srcElement;
            if (obj.className == '') {
                // 実行ボタン(親ノードが「LI」)
                var parentObj = obj.parentNode;
                if (parentObj.tagName == 'LI') {
                    // 「A」タグのid（「-a」を除く）=「LI」タグのid（「-li」を除く）
                    if ((obj.id.length > 2 && obj.id.indexOf('_a') > 0) &&
                        (parentObj.id.length > 3 && parentObj.id.indexOf('_li') > 0) &&
                        (obj.id.substring(0, (obj.id.length - 2)) ==
                         parentObj.id.substring(0, (parentObj.id.length - 3)))) {
                        obj.click();
                    }
                }
            }
            else {
                // 補助ボタン(クラスが存在し、かつ「azias」がある場合)
                if(obj.className.indexOf('azias') >= 0) {
			        obj.click();
                }
            }
		}
	}
	// リターン遷移
	else if( event.keyCode == VK_RETURN ){
		if( 1 == g_flgReturnTab ){
			if( 'TEXTAREA' != event.srcElement.tagName && !(
					event.srcElement.tagName == 'INPUT' && event.srcElement.type == "file" ) ){
                                // 統基137-依01 UI外字対応 修正
                                if ('object' == event.srcElement.tagName.toLowerCase()){
                                   if (!event.srcElement.getAttribute("MULTILINE")) {
                                         event.keyCode = VK_TAB;
                                   }
                                }
                                else {
				    // TABのイベントに変換
				    event.keyCode = VK_TAB ;
                                }
                                // 統基137-依01 UI外字対応 修正
			}
		}
		else {
			// 「INPUTタグにリターンを押すと、白い画面になる」状況を対応する
			if (event.srcElement.tagName == 'INPUT') {
				return false;
            }
		}
	}
	// ESC入力補助
	else if( event.keyCode == VK_ESCAPE ){
		// 標準動作をキャンセル
		event.keyCode = 0 ;
		event.returnValue = false ;
		event.cancelBubble = true ;
	}
	// ALTキー
	else if (event.altKey == true) {
		if (event.keyCode == VK_HOME) {
			alert('Alt + HOME キーは使用できません');
		}
		else if (event.keyCode == VK_LEFT) {
			alert('Alt + ← キーは使用できません');
		}
		else if (event.keyCode == VK_RIGHT) {
			alert('Alt + → キーは使用できません');
		}
		// 統基-790　処理区分がフォーカス取得
		else if (event.keyCode == VK_SHORIKUBUN) {
			ProcKbnFocus();
			return;
		}
	}
	// ファンクションキー
	else if( event.keyCode >= VK_F1 && event.keyCode <= VK_F15 ){



		if( 1 == g_flgFunction ){
			var funcIndex = event.keyCode - VK_F1 ;
			if( funcIndex > g_arrFunctionSubmitIDs.length ){
				AZS_SetAbtErr2( 'AZI_DocumentOnKeydown', 
				'ファンクションキー(' + ( funcIndex + 1 ) + ')の定義がありません。' ) ;
			}
			if( null != g_arrFunctionSubmitIDs[funcIndex] ){
				try {
					var target = top.main.document.forms[0] ;
					if( null != target ){
						AZS_SubmitForm( g_arrFunctionSubmitIDs[funcIndex], target ) ;
					}
				} catch(e) {
					// top.main.locationによりアクセスエラーが発生する場合がある
				}
			}
		}
		// 標準動作をキャンセル
		event.keyCode = 0 ;
		event.returnValue = false ;
		event.cancelBubble = true ;
	}
	else if (event.keyCode == VK_BACKS 
                 || (event.ctrlKey == true && (
			event.keyCode == VK_B || event.keyCode == VK_D ||
			event.keyCode == VK_E || event.keyCode == VK_F ||
			event.keyCode == VK_H || event.keyCode == VK_I ||
			event.keyCode == VK_L || event.keyCode == VK_N ||
			event.keyCode == VK_O || event.keyCode == VK_R ||
			event.keyCode == VK_W
		) ) ) {
		if (event.keyCode == VK_BACKS) {
			var activeObject = event.srcElement;
			if (activeObject.tagName == "TEXTAREA") {
					if (!activeObject.readOnly){
						return;
					}
			}
			if (activeObject.tagName == "INPUT") {
				if (activeObject.type == "text" || 
					activeObject.type == "password" ||
					activeObject.type == "file") {
					if (!activeObject.readOnly){
						return;
					}
				}
			}
		}
		event.keyCode = 0;
		event.returnValue = false; // 標準動作をキャンセル
		event.cancelBubble = true;
	}
	else if (event.ctrlKey == true && (event.keyCode == VK_C ||
					   event.keyCode == VK_V ||
					   event.keyCode == VK_X)) {
			if ('object' == event.srcElement.tagName.toLowerCase()){
				outevent(event.srcElement, event.keyCode);
				// 問題処理票_受入091224_001_ペーストダイアログの対応(IE設定)
				event.returnValue = false;
			}
		}
}
if (document.all)
{
	document.onkeydown = AZI_DocumentOnKeydown;
}

// ドラッグ＆ドロップの抑止用（IE専用）
function AZI_DragDrop() {
	// パスワード項目対応
	var activeObject = event.srcElement;
	if (activeObject.tagName == "INPUT") {
		if (activeObject.type == "password") {
			return;
		}
	}
	event.dataTransfer.effectAllowed = "none";
}
if (document.all) {
	document.ondragstart = AZI_DragDrop;
}

// 複合機能部品 20070520 Start
function TBCPageSelect(value, tbcName) {
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;  
		AZS_SubmitGif(1);

		// 手順ボックスのスクロール位置保存
		AZS_SaveShtScroll();
		// 明細のスクロール位置保存
		AZS_SaveTableScroll();

		// ページ明細部品の頁数変更時のフォーカス遷移
        var nowFocus = document.activeElement;
		if (nowFocus != null && nowFocus != window.undefined) {
			parent.tbcCurPageFocus = nowFocus.name;
			parent.tbcCurPageFocusTBCItemName = tbcName;
			parent.tbcCurPageFocusValue = nowFocus.innerHTML;
		}
		parent.tbcCurPageFocusFlag = 1;

                // 2010/11/17 UI外字対応 追加
                AZS_CopyValueAllGaiji();
	  document.forms[0].AZL_COMMON.value ="TBCPARAMETER="+"0_0_"+ value+ "_"+ tbcName+",SUBMITID=TBCPageSelect" +
	  					document.forms[0].AZL_COMMON.value;
	  document.forms[0].submit();
	  return ;
	}
	return ;
}

function TBCRecordShow(tbcName) {
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;  
		AZS_SubmitGif(1);
		
	  var objStartRecord = document.getElementById('TBCStartRecord' + tbcName);
    
	  var objRecordPerPage = document.getElementById('TBCRecordPerPage' + tbcName);
	  
	  var objTotalRecord = document.getElementById('TBCTotalRecord' + tbcName);
	  // DELETE 20071111
	  //if (parseInt(objRecordPerPage.value) > parseInt(objTotalRecord.value) ) {
	  //	 objRecordPerPage.value = objTotalRecord.value;
	  //}
    
	  if (TBCRecordCheck(objTotalRecord.value,objStartRecord.value,objRecordPerPage.value)) {
			// 表示できる最大件数をチェックする
      var objMaxDispNum = document.getElementById('maxDispNum' + tbcName);
      if (objMaxDispNum != null) {
    	  var maxCount = objMaxDispNum.value;
    	  if (parseInt(maxCount) < parseInt(objRecordPerPage.value)) {
    				alert(maxCount + 'を超える件数を表示することはできません');
    				objRecordPerPage.focus();
						top.AZL_SUBMITFLAG = 0;
						AZS_SubmitGif(0);
    				return;
    	  }
      }
	  	AZS_SubmitGif(1);

		// 手順ボックスのスクロール位置保存
		AZS_SaveShtScroll();
		// 明細のスクロール位置保存
		AZS_SaveTableScroll();

		// ページ明細部品の件数表示ボタン押下時のフォーカス遷移
        var nowFocus = document.activeElement;
		if (nowFocus != null && nowFocus != window.undefined) {
			parent.tbcCurFocus = nowFocus.id;
		}
	  	parent.tbcCurFocusFlag = 1;

	  	document.forms[0].AZL_COMMON.value ="TBCPARAMETER="+ objStartRecord.value+"_"+ objRecordPerPage.value
	  	+"_0_" + tbcName+",SUBMITID=TBCRecordShow" +
	  					document.forms[0].AZL_COMMON.value;
                // 2010/11/17 UI外字対応 追加
                AZS_CopyValueAllGaiji();
	  	document.forms[0].submit();
	  	return ;
	  } else {
	  	alert('開始件数および１頁あたりのレコード数が無効です。再入力してください。');
		top.AZL_SUBMITFLAG = 0;
		AZS_SubmitGif(0);
	  	return ;
	  }
	}
	return ;
}
function TBCPageSelectSub(screenname, value, tbcName) {
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;  
		AZS_SubmitGif(1);

		// 手順ボックスのスクロール位置保存
		AZS_SaveShtScroll();
		// 明細のスクロール位置保存
		AZS_SaveTableScroll();

		// ページ明細部品の頁数変更時のフォcーカス遷移
        var nowFocus = document.activeElement;
		if (nowFocus != null && nowFocus != window.undefined) {
			parent.tbcCurPageFocus = nowFocus.name;
			parent.tbcCurPageFocusTBCItemName = screenname + "." + tbcName;
			parent.tbcCurPageFocusValue = nowFocus.innerHTML;
		}
		parent.tbcCurPageFocusFlag = 1;
		
                // 2010/11/17 UI外字対応 追加
                AZS_CopyValueAllGaiji();
	  document.forms[0].AZL_COMMON.value ="HTML=" + screenname + ",TBCPARAMETER="+"0_0_"+ value+ "_" + tbcName+",SUBMITID=TBCPageSelect" +
	  					document.forms[0].AZL_COMMON.value;
	  document.forms[0].submit();
	  return ;
	}
	return ;
}

function TBCRecordShowSub(screenname,tbcName) {
	if (top.AZL_SUBMITFLAG == 0) {
		top.AZL_SUBMITFLAG = 1;
		top.AZL_NOCHECKFLAG = 1;  
		AZS_SubmitGif(1);
		
	  var objStartRecord = document.getElementById(screenname+'.TBCStartRecord' + tbcName);
    
	  var objRecordPerPage = document.getElementById(screenname+'.TBCRecordPerPage' + tbcName);
	  
	  var objTotalRecord = document.getElementById(screenname+'.TBCTotalRecord' + tbcName);
	  // DELETE 20071111
	  //if (parseInt(objRecordPerPage.value) > parseInt(objTotalRecord.value) ) {
	  //	 objRecordPerPage.value = objTotalRecord.value;
	  //}
	  
	  if (TBCRecordCheck(objTotalRecord.value,objStartRecord.value,objRecordPerPage.value)) {
			// 表示できる最大件数をチェックする
      var objMaxDispNum = document.getElementById('maxDispNum' + tbcName);
      if (objMaxDispNum != null) {
    	  var maxCount = objMaxDispNum.value;
    	  if (parseInt(maxCount) < parseInt(objRecordPerPage.value)) {
    				alert(maxCount + 'を超える件数を表示することはできません');
    				objRecordPerPage.focus();
    				top.AZL_SUBMITFLAG = 0;
						AZS_SubmitGif(0);
    				return;
    	  }
      }
	  	AZS_SubmitGif(1);

		// 手順ボックスのスクロール位置保存
		AZS_SaveShtScroll();
		// 明細のスクロール位置保存
		AZS_SaveTableScroll();

		// ページ明細部品の件数表示ボタン押下時のフォーカス遷移
        var nowFocus = document.activeElement;
		if (nowFocus != null && nowFocus != window.undefined) {
			parent.tbcCurFocus = nowFocus.id;
		}
	  	parent.tbcCurFocusFlag = 1;

                // 2010/11/17 UI外字対応 追加
                AZS_CopyValueAllGaiji();
	  	document.forms[0].AZL_COMMON.value ="HTML=" + screenname + ",TBCPARAMETER="+ objStartRecord.value+"_"+ objRecordPerPage.value
	  	+"_0_" + tbcName+",SUBMITID=TBCRecordShow" +
	  					document.forms[0].AZL_COMMON.value;
	  	document.forms[0].submit();
	  	return ;
	  } else {
	  	alert('開始件数および１頁あたりのレコード数が無効です。再入力してください。');
		top.AZL_SUBMITFLAG = 0;
		AZS_SubmitGif(0);
	  	return ;
	  }
	}
	return ;
}
function TBCRecordCheck(totalRecord, sBangou, eBangou) {
	
	if (totalRecord == '0') {
		return false;
	}
	
	for (i=0;i < sBangou.length; i++) { 
		if (sBangou.charAt(i) < '0' || sBangou.charAt(i) > '9') {
			return false;		
		}
	}
	for (i=0;i < eBangou.length; i++) { 
		if (eBangou.charAt(i) < '0' || eBangou.charAt(i) > '9') {
			return false;		
		}
	}

	if (parseInt(eBangou) > 0 && parseInt(sBangou) > 0 && parseInt(sBangou) <= parseInt(totalRecord)) {
		return true;	
	} else {
		return false;
	}
	
}
// 複合機能部品 20070520 End
function AZS_CheckFileExists(name)
{

var fso = new ActiveXObject("Scripting.FileSystemObject"); 

var fileName = fso.FileExists(name);
if (!fileName) {
	alert("このファイルは使用中、または存在しません。");
}
	return fileName;
}
// UPLAOD DIALOG
function AZS_FileCheck(name){
	if (top.AZL_SUBMITFLAG != 0)
		return;
	// ファイル存在チェックとサイズチェック
	// 統基762-依01-アップロードダイアログの直接パス対応 開始
	if (name != null && name.replace(' ','').replace('　','').length > 0)
	{
		if (name.indexOf(":\\") != 1 && name.indexOf(":\\") != 2
		    && name.indexOf("\\") != 0) {
			 alert("ファイル名またはパスが正しくありません。");
			 return;
		}
		var arrbuf = name.split("\\");
		if ( arrbuf.length > 0 ) {
			var filename = arrbuf[arrbuf.length - 1];
			if ( filename.indexOf(',') >= 0 ) {
				alert("ファイル名またはパスに「,」は利用出来ません。");
				return;
			}
			if ( filename.indexOf("'") >= 0 ) {
				alert("ファイル名またはパスに「'」は利用出来ません。");
				return;
			}
			AZS_Submit('DIALOGOK');
	  }
	  else {
	  	alert("ファイル名またはパスが正しくありません。");
		return;
	  }
	}
	else
	{
		alert("ファイルが選択されておりません。");
		return;
	}
	// 統基762-依01-アップロードダイアログの直接パス対応 終了
}
//
// ################ 以下カスタマイズデータ #################
//

//元号定義（[0]元号英字大,[1]元号英字小,[2]元号数字,
//[3]始まりの年（西暦）,[4]月,[5]日,[6]終わりの年(西暦),[7]月,[8]日,[9]元号,[10]開始年[11]終了年）


var g_arrNendo = new Array("M,m,1,1868,9,8,1912,7,29,明治",
						   "T,t,2,1912,7,30,1926,12,24,大正",
						   "S,s,3,1926,12,25,1989,1,7,昭和",
						   "H,h,4,1989,1,8,9999,3,31,平成");

// メッセージテーブル（スペースを入れてはいけません）
var g_arrMsgTbl = new Array(
	 "AZDP0001,省略できません。"
	,"AZDP0003,入力可能な桁数を超えています。"
	,"AZDP0004,レコードを選択してください。"
	,"AZDP0101,日付が誤っています。"
	,"AZDP0102,西暦日付が誤っています。"
	,"AZDP0103,和暦日付が誤っています。"
	,"AZDP0104,西暦年度が誤っています。"
	,"AZDP0105,和暦年度が誤っています。"
	,"AZDP0106,和暦年月が誤っています。"
	,"AZDP0107,西暦年月が誤っています。"
	,"AZDP0108,時刻が誤っています。"
	,"AZDP0109,日付が誤っています$1。"
	,"AZDP0201,数字以外は入力できません。"
	,"AZDP0202,マイナス数字は入力できません。"
	,"AZDP0203,小数は入力できません。"
	,"AZDP0204,英文字以外は入力できません。"
	,"AZDP0205,英文字または数字以外は入力できません。"
	,"AZDP0208,半角カナ文字以外は入力できません。"
	,"AZDP0209,全角カナ文字以外は入力できません。"
	,"AZDP0210,半角カナ、英数字、記号以外は入力できません。"
	,"AZDP0211,全角文字以外は入力できません。"
	,"AZDP0212,金額として正しくありません。"
	,"AZDP0213,マイナス金額は入力できません。"
	,"AZDP0214,整数桁数が誤っています。"
	,"AZDP0215,小数桁数が誤っています。"
	,"AZDP0216,$1以上、$2以下の整数を入力してください。"
	,"AZDP0217,入力金額の桁数が誤っています。"
	,"AZDP0218,半角カナは入力できません。"
	,"AZDP0219,$1桁入力してください。"
	,"AZDP0221,指定年度以外は入力できません。"
	,"AZDP0222,$1を入力できません。"
	,"AZDP0223,チェック文字は1文字ではありません。"
	,"AZDP0224,指定文字の、入力文字数が不正です。$1は、$2文字で入力して下さい。"
	,"AZDP0301,郵便番号として正しくありません。"
	,"AZDP0302,電話番号として正しくありません。"
	,"AZDP1002,コードに誤りがあります。"
	,"AZDP1001,明細内に対象データがありません。"
	,"AZDP0225,全角のカナ、英字、指定記号以外は入力できません。"
	,"AZDP0226,全角のカナ、数字、指定記号以外は入力できません。"
	,"AZDP0227,全角のカナ、英数字、指定記号以外は入力できません。"
	,"AZDP0228,入力文字列の桁数がたりません。"
	,"AZDP0229,全角の数字、指定記号以外は入力できません。"
	,"AZDP0230,全角の英数字、指定記号以外は入力できません。"

) ;

// リターン遷移(0:OFF/1:ON デフォルト値は0:OFF)
var g_flgReturnTab = 0;

// ショートカット実行(0:OFF/1:ON デフォルト値は0:OFF)
var g_flgShortcutSubmit = 0;

// ファンクションキー(0:OFF/1:ON)
var g_flgFunction = 1 ;
// ファンクションキーに割り当てるSUBMITID
var g_arrFunctionSubmitIDs = new Array(
	null		
	,'SUBMIT_F02'
	,'SUBMIT_F03'
	,'SUBMIT_F04'
	,'SUBMIT_F05'
	,'SUBMIT_F06'
	,'SUBMIT_F07'
	,'SUBMIT_F08'
	,'SUBMIT_F09'
	,'SUBMIT_F10'
	,'SUBMIT_F11'
	,'SUBMIT_F12'
	,'SUBMIT_F13'
	,'SUBMIT_F14'
	,'SUBMIT_F15'
) ;
// 年月日のセパレータです
var g_dataSeparator = "/";

// GprimeOcxバージョン（上げる場合、ここに変更してください。）
var g_gprimeOcxVersion = "1,0,0,7";

// ActiveX ロードエラー状態
var g_isLoadError = 0; // エラーなし

//ファイル取得とプリンタ
function AZS_GetFileAndPrint(url,names){
    var files;
    var ret;
    var uniRet = "";
　　var pRet = document.getElementById("txtClientPrintRet");
    var refObj = document.getElementById("txtRefReportInfo");
    // OCXの返却値が存在していない場合
    if (pRet == null) {
        AZS_Submit('CLOSE');
    }
    if (url == null) {
        AZS_Submit('CLOSE');
    }
    if (names == null) {
        AZS_Submit('CLOSE');
    }

    // プリンタ情報を取得する。
    var pInfo = document.getElementById("txtPrinterInfo");
    // プリンタ情報が存在していない場合
    if (pInfo == null) {
        AZS_Submit('CLOSE');
    }

    var files = names.split(",");
    for(var i = 0; i < files.length ; i++){
        if (files[i] != null) {
            files[i] = url + files[i];
        }
    }
    var objArray;
    if (pInfo.value != null) {
        objArray = pInfo.value.split(";");
    }
    var refValue;
    var refValueArr;
    if (refObj != null) {
        refValue = refObj.value;
        if (refValue && refValue.length > 0) {
	    refValueArr = refValue.split("@!#");
        }
    }
    // ocxコントロールを取得する。
    var printerOCX = document.getElementById("GprimeOCX");
	var tempRet;
    // ocxコントロールが存在している場合
    if (printerOCX != null) {
	if (refValueArr && refValueArr.length > 1) {
            for (var m = 0; m < refValueArr.length; m++) {
                var refFiles = refValueArr[m];
                if (refFiles && refFiles.length > 0) {
                		tempRet = "";
                    var refPrintInfo = refFiles.split(";");
                    if (refPrintInfo && refPrintInfo.length > 0) {
                       for (var n = 0; n < refPrintInfo.length; n++) {
                           var realFile = refPrintInfo[n];
                           if (realFile && realFile.length > 0) {
                               realFile = url + realFile;
                               if (objArray && objArray.length > m) {
                                  var obj = objArray[m].split(",");
                                  if (obj.length == 6) {
                                      // OCXからPDF印刷機能を呼び出す。
                                      ret = document.getElementById("GprimeOCX").PrintPDF(realFile,obj[0],
                                                        obj[1],obj[2],
                                                        obj[3],obj[4],
                                                        obj[5]);
　　　　　　　　                      tempRet += ret;
                                  }
                               }
                           }
                       }
                    }
				            if (tempRet) {
					             var tempFlg = false;
					             for (var q = 0; q < tempRet.length; q++) {
						               if (tempRet != "" && tempRet.charAt(q) != "0") {
							             uniRet += "1";
							             tempFlg = true;
							             break;
						           }
					          }
					          if (!tempFlg) {
						           uniRet += "0";
					          }
                }
            }
       }
	}
	else {
            for (var j = 0;j < files.length;j++) {
                if (files[j] != null) {
                    if (pInfo.value != null) {
                        var obj = pInfo.value.split(",");
                        if (obj.length == 6) {
                            // OCXからPDF印刷機能を呼び出す。
                            ret = document.getElementById("GprimeOCX").PrintPDF(files[j],obj[0],
                                                obj[1],obj[2],
                                                obj[3],obj[4],
                                                obj[5]);
　　　　　　　　　　　　    uniRet += ret;
                        }
                    }
                }
            }
        }
    }
    pRet.value = uniRet;
　　AZS_Submit('CLOSE');
}

// GPRIME-基盤-N-0493　クライアント取得モード時の外字の文字欠けについて
var coef = 1.45;
function AZS_SetGaijiCoef(gaijiCoef) {
    coef = gaijiCoef;
}
// GPRIME-基盤-N-0493　クライアント取得モード時の外字の文字欠けについて

// 統基137-依01 UI外字対応 追加 開始
var fromGaijiObj;
// SUBMIT関数で、全ての外字コントロールから外字用hiddenタグへのデータのコピー
function AZS_CopyValueAllGaiji() {
  if (fromGaijiObj != null) {
      for(var i = 0; i < fromGaijiObj.length; i++){
		 var fromobj =  document.getElementsByName(fromGaijiObj[i]);
		 for (var j = 0; j < fromobj.length; j++) {
			  var toObj = document.getElementsByName(fromobj[j].id.substr(3));
			  toObj[j].value = fromobj[j].GetText();
		 }
      }
  }
}
// SUBMIT関数で、全ての外字用hiddenタグから外字コントロールへのデータの設定
function AZS_SetValueToGaiji() {
    fromGaijiObj = new Array();
    var objTag = document.getElementsByTagName("OBJECT");
    if (objTag != null) {
        for(var i = 0; i < objTag.length; i++){
            var objId = objTag[i].id;
            if (objId.indexOf("gtx") == 0) {
                if (objId.length > 3) {
                    if (checkTagId(objId)) {
                        var fromobj =  document.getElementsByName(objId);
                        var fontWeight = fromobj[0].FONT_SIZE * coef;
                        var pOffsetWidth = fromobj[0].offsetWidth;
                        var no = parseInt(pOffsetWidth/fontWeight);
                        for (var j = 0; j < fromobj.length; j++) {
                            var toObj = document.getElementsByName(fromobj[j].id.substr(3));
                            // lbvとmlbタグの場合、
                            if (objId.indexOf("lbv") != -1 || objId.indexOf("mlb") != -1) {
                                if (toObj[j].value != null) {
                                    // pt = 12/9pxのため、コントロールの幅を計算する。
                                    var rowLength = toObj[j].value.length;
                                    if (rowLength < no) {
                                        var pWidth = rowLength *fontWeight;
                                        fromobj[j].style.width = pWidth.toString() + "px";
                                    }
                                    fromobj[j].SetText(toObj[j].value);
                                }
                            }
                            else {
                                fromobj[j].SetText(toObj[j].value);
                            }
                        }
                    }
                }
            }
        }
    }
	// 川口外字対応　2011/9/12
	setGaijiTextValue();
}

// 2011/9/29 「左頁」「右頁」でのレイアウト崩れに対応
var cacheArray = new Array();

function setGaijiTextValue() {
	// 2011/9/8 川口市外字対応　モジュール対応　Start　
	var kawaGaiji = document.getElementsByTagName('INPUT');
	if (kawaGaiji) {
		var tempWidth = "";

		for (var k = 0; k < kawaGaiji.length; k++) {
			if (kawaGaiji[k].className == 'aztxtGaiji') {
				if (kawaGaiji[k].displayflag == '1') {
					kawaGaiji[k].style.visibility = "hidden";
				}
				var flag = "0";
				for (var j = 0; j < cacheArray.length; j++) {
					tempArrayGaiji = cacheArray[j];
					if (tempArrayGaiji[0] == kawaGaiji[k].name) {
						kawaGaiji[k].style.width = tempArrayGaiji[1];
						kawaGaiji[k].style.display = '';
						flag = "1";
					}	
				}
				if (flag == "1") {
					continue;
				}
				var tempTag = kawaGaiji[k];
				var tempWidth = tempTag.parentNode.offsetWidth;
				
				// 2011/9/29 「左頁」「右頁」でのレイアウト崩れに対応
				if (tempWidth == 0) {
					continue;
				}
				
				var int = 0;
				while (true) {
					kawaGaiji[k].style.width = tempTag.parentNode.offsetWidth - int;
					kawaGaiji[k].style.display = '';
					if (tempTag.parentNode.offsetWidth > tempWidth) {
						int = int + (tempTag.parentNode.offsetWidth - tempWidth) / 5;
						continue;
					}
					else {
						cacheArray.push([kawaGaiji[k].name, kawaGaiji[k].style.width]);
						break;	
					}
				}
			}
		}
	}
	// 2011/9/8 川口市外字対応　モジュール対応　End	
}
// 外字コントロールを取得する。
function checkTagId(tagId) {
  var cnt = fromGaijiObj.length;
  for(var i = 0; i < cnt; i++){
	  if (fromGaijiObj[i] == tagId) {
            return false;
	  }
  }
  fromGaijiObj[cnt] = tagId;
  return true;
}
// 統基137-依01 UI外字対応 追加 終了

// 統基284-依01 フレームカラー変更対応 追加 開始
//---------------------------------
// スタイルシートCSSファイル変更
//---------------------------------
function changeStyleSheetInfo(styleSheetID, frameColorGpfwComm, frameColorGpfw){
	// パラメータチェック
	if (styleSheetID == null) {
		return;
	}
	
	// リンクオブジェﾂａPト配列取得
  var objLinkArray = document.getElementsByTagName("link");
  if (objLinkArray == null) {
  	return;
  }

	// スタイルIDによって、リンク情報変更。
  for(var i = 0; i < objLinkArray.length; i++){
  	var LinkElement = objLinkArray[i];
  	var strOldStyleSheetID = "";
  	var strHref = LinkElement.href;
  	var strHead = "/gprime/shared/style/";
  	var idx1 = strHref.indexOf(strHead);
  	if (idx1 >= 0) {
  		idx1 = idx1 + strHead.length;
  		var idx2 = strHref.lastIndexOf("/");
  		if (idx2 >= 0) {
  			strOldStyleSheetID = strHref.substring(idx1, idx2);
  			if (isNaN(strOldStyleSheetID)) {
  				continue;
  			}
  		}
  		else {
  			continue;
  		}
  	}
  	else {
  		continue;
  	}
  	
  	// CSSファイル置き換え
  	var newFrameColorGpfwCommCss;
  	var newFrameColorGpfwCss;
  	if (strOldStyleSheetID.length > 0) {
  		if (strHref.indexOf("gpfw_commonframe_") > 0) {
  			// commonframeの場合
  			if (frameColorGpfwComm != null && frameColorGpfwComm.length > 0) {
  				newFrameColorGpfwCommCss = strHead + styleSheetID + "/" + frameColorGpfwComm;
  				LinkElement.href = newFrameColorGpfwCommCss;
  			}
  		}
  		else if (strHref.indexOf("gpfw_") > 0) {
  			// gpfwの場合
  			if (frameColorGpfw != null && frameColorGpfw.length > 0) {
  				newFrameColorGpfwCss = strHead + styleSheetID + "/" + frameColorGpfw;
  				LinkElement.href = newFrameColorGpfwCss;
  			}
  		}
  	}
  }
}
// 統基284-依01 フレームカラー変更対応 追加 終了

// 統基316-依01 UI外字対応(ctrl + c,ctrl + v,ctrl + x) 追加 開始
//---------------------------------
// 発生したイベント（エラーおよびキー）に合わせて処理を行います。
//     oj  ：イベントが発生したオブジェクト
//     cd  ：イベントのコード
//---------------------------------
function outevent(oj,cd) {
	switch(cd){
		case 88:clipoption('0',oj);break; /* Ctrl+X */
		case 67:clipoption('1',oj);break; /* Ctrl+C */
		case 86:clipoption('2',oj);break; /* Ctrl+V */
	}
	return true;
}
//---------------------------------
// WebGAiji機能コードの変換処理。
//     vl  ：対象文字列
//---------------------------------
function toClip(vl) {
	var out='';
	if(vl.length==1){
		out=vl;
	}else{
		// 統基710-外字機能強化
		out=vl.replace(/\\\\/g,'\\').replace(/\\n/g,String.fromCharCode(13,10));
	}
	return out;
}
//---------------------------------
// クリップボード処理。
// クリップボード利用しない場合は、JavaScriptの変数で行います。
//     type：0=切り取り,1=コピー,2=貼り付け
//     oj  ：イベントが発生したオブジェクト
//---------------------------------
function clipoption(type,oj) {
	var wk='';
	if(typeof(oj)=='undefined') return false;
	switch(type){
	case '0':
	case '1':
		wk=oj.GetSelect();
		var xx=clipboardData.setData('Text',toClip(wk));
		if(oj.READONLY.toString() != 'true' && oj.DISABLED.toString() != 'true'){
			if(type=='0')oj.SetSelect('');
		}
		break;
	case '2':
		if(oj.READONLY.toString() != 'true' && oj.DISABLED.toString() != 'true'){
			wk = clipboardData.getData("Text");
			if (wk==null) break;
			wk=wk.toString().replace(/\\/g,'\\\\');
			wk=wk.toString().replace(/\r\n/g,'\\n');
			wk=wk.toString().replace(/\n/g,'\\n');
			oj.SetSelect(wk);
		}
		break;
	}
	return true;
}
// 統基316-依01 UI外字対応(ctrl + c,ctrl + v,ctrl + x) 追加 終了
// 統基314－依01　フォントサイズ変更対応　追加始める
function changeFontsizeInfo(fontsize, fontsizeCssFilename) {
	// フォントサイズがない場合に何もしません
	if (fontsize == null || fontsize == undefined) {
		return;
	}
	// ヘッダオブシェクト取得
	var headObj = document.getElementsByTagName("head");
	// リンクオブジェクトを作り出す
	var newLinkObj = document.createElement("link");
	// リンクオブシェクトの属性設定
	newLinkObj.setAttribute("rel", "stylesheet");
	newLinkObj.setAttribute("type", "text/css"); 
	newLinkObj.setAttribute("href", "/gprime/shared/style/comm/" + fontsizeCssFilename);
	// タグ添加
	headObj[0].appendChild(newLinkObj);
}
// 統基314－依01　フォントサイズ変更対応　追加終わります
// 統基349-依01　論理エラー改造対応　追加始める
function AZS_SetErrMessage() {
    var trObj = top.document.getElementById("trDownCommon");
    if (trObj != null) {
        trObj.style.display="block";
        var trGyomuframe = top.document.getElementById("trGyomuframe");
        trGyomuframe.height = "75%";
        var obj = top.document.getElementById("downCommonFrm");
        obj.src="/gprime/gpfw/comm/page/html/ERRORMESSAGE_DUMMY.htm";
    }
}
// 統基349-依01　論理エラー改造対応　追加終わります
// 統基364-依01　ActiveX自動ダウンロード機能　追加始める
function AZS_LoadingReportActiveX() {
    document.writeln('<OBJECT onerror="error_downloadActiveX();"');
    document.writeln(' ID="GprimeOCX"');
    document.writeln(' classid="CLSID:FE4224E6-FD41-4FBE-92BB-7E912CB2B70B"');
    document.writeln(' codebase="/gprime/GprimeOCX.ocx#version=' + g_gprimeOcxVersion + '" style="height:0;width:0">');
    document.writeln('</object>');
}
// 統基364-依01　ActiveX自動ダウンロード機能　追加終わります
// 統基377_依01  入力補助ショートカット起動  追加始める

//---------------------------------------------------------
// ActiveX のダウンロードの失敗した(object onerror 発生)
//---------------------------------------------------------
function error_downloadActiveX()
{
	g_isLoadError = 1;
}

function AZS_AssistSubmit(assist) {
    var VK_ESCAPE = 27;
    if(event.keyCode == VK_ESCAPE) {
        AZS_Submit(assist);
    }
}
function AZS_AssistSubmitSub(subScreenName,assist) {
    var VK_ESCAPE = 27;
    if(event.keyCode == VK_ESCAPE) {
        AZS_SubmitSub(subScreenName,assist);
    }
}
// 統基377_依01  入力補助ショートカット起動  追加終わります

// IME制御
function AZS_SetIME( 
	p_zMode			// モード 0:off 1:ひらがな 2:全角カナ 3:全角英数 4:半角カタカナ 5:半角英数 9:状態継続
 ){
	var nMode = parseInt( p_zMode ) ;
	// ActiveXのチェック
  var ocxObj = document.getElementById("GprimeOCX");
	if( null == ocxObj ){
		AZI_SetAbort( "AZS_SetIME", "IME制御用ActiveXオブジェクト(GprimeOCX)が定義されていません。" ) ;
		return false ;
	}

	try {
		switch( nMode ){
		case 0 :
                        ocxObj.ime( 1+4+16+128 );
			ocxObj.ime( 0 ) ;
			break ;
		case 1 :
			ocxObj.ime( 1+4+16+128 );
			break ;
		case 2 :		
			ocxObj.ime( 1+4+32+128 );
			break ;
		case 3 :
			ocxObj.ime( 1+4+8+128 );
			break ;
		case 4 :
			ocxObj.ime( 1+2+32+128 );
			break ;
		case 5 :
			ocxObj.ime( 1+2+8+128 );
			break ;
		case 9 :
			break ;
		default :
			AZI_SetAbort( "AZS_SetIME", "パラメータ不正/" + nMode ) ;
			return false ;
		}
	} catch(e) {
			AZI_SetAbort( "AZS_SetIME", "IME制御ができません。ActiveXオブジェクト(GprimeOCX)が最新かをご確認してください。" ) ;
			return false ;
	}

	// 制御
	return true ;
}

//統基618-依01-曖昧日付関数（JS）の基盤取込み　Prize側で実装、保証して頂きます。
/** 頃判断 */
var m_skoro = ".頃";

/** 頃判断 */
var m_skoroNotDot = "頃";


/** 不詳判断 */
var m_fusyou = ".不詳";

/** 不詳 */
var m_fusyouNotDot = "不詳";

/** 全角空白*/
var FWSpacce = "　";

/** 半角空白*/
var HWSpacce = " ";

/** TAB空白*/
var TABSpacce ="	";

/** 日付編集形式の判断*/
var reTime = /[.]/g;

// Prize年月日のセパレータです
var prize_dataSeparator = /\.|\//;
    
/** エラー日付半角７バイト */
var m_sErrorDateHalfW7Byte = "???????";

/** エラー日付全角７バイト */
var m_sErrorDateFullW7Byte = "？？？？？？？";

/** エラー日付半角８バイト */
var m_sErrorDateHalfW8Byte = "????????";

/** エラー日付全角８バイト */
var m_sErrorDateFullW8Byte = "？？？？？？？？";

/** エラー日付全角１１バイト */
var m_sErrorDateFullW11Byte = "？？？？？？？？？？？";

/** 異常日付0000000 */
var m_sExceptionDate0_7 = "0000000";

/** 異常日付00000000 */
var m_sExceptionDate0_8 = "00000000";

//元号定義（[0]元号英字大,[1]元号英字小,[2]元号数字,
//[3]始まりの年（西暦）,[4]月,[5]日,[6]終わりの年(西暦),
//[7]月,[8]日,[9]元号,[10]開始年月日[11]終了年月日）
var prize_arrNendo = new Array("M,m,1,1868,9,8,1912,7,29,明治,18680908,19120729",
						   "T,t,2,1912,7,30,1926,12,24,大正,19120730,19261224",
						   "S,s,3,1926,12,25,1989,1,7,昭和,19261225,19890107",
						   "H,h,4,1989,1,8,9999,3,31,平成,19890108,99990331");
//元号定義:[0]元号英字大を取得する
var m_igengoInfo_alphUpper = 0;

//元号定義:[1]元号英字小を取得する
var m_igengoInfo_alphLower = 1;

//元号定義:[2]元号数字を取得する
var m_igengoInfo_num = 2;

//元号定義:[9]元号を取得する
var m_igengoInfo_name = 9;

//元号定義:[10]開始年月日を取得する
var m_igengoInfo_fymd = 10;

//元号定義:[11]終了年月日を取得する
var m_igengoInfo_tymd = 11;	

//パラメータ異常
var m_ParameterException= -1;

//エラーなし
var m_Normal = 0;

//日付として異常
var m_DateException = 1;

//和暦として異常
var m_WarekiException = 2;

/** 許可範囲は許可しない */
var m_sKyokaSiNai =  "0";

/** 許可範囲は年月日で許可 */
var m_sYMDKyoka = "1";

    /** 許可範囲は月日で許可 */
var m_sMDKyoka = "2";

    /** 許可範囲は日で許可 */
var m_sDKyoka = "3";

// [Y75]
// パラメータで渡された日付を曖昧表現を考慮し指定された形式に変換する 
function _Proxy_Y75(
	p_oTxt, // 対象
	p_zEType //指定形式
){
	// 統基800-依01 編集関数（JS）の外字対応
	if (p_oTxt != null) {
		if (p_oTxt.tagName == "OBJECT") {
			p_oTxt.value = "";
		}
	}
    if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
	if( "" == p_zEType ){
		AZS_SetAbtErr2( "Y75", "関数の引数にNULLがあります。" );
		return false;
	}
     var iType = parseInt(p_zEType,10);
     //文字列編集
	 var strBuf = p_oTxt.value;
	 strBuf = AZI_DelStr(strBuf, " " );//先頭のスペースを削除
	 strBuf = AZI_DelTailStr(strBuf, " " );//末尾のスペースを削除
	 switch (iType) {
     case 0: 
         strBuf = AZI_EditNyuryokuWareki(strBuf);
         break;
     case 1:
         strBuf = AZI_EditWarekiEisuji7(strBuf); 
         break;
     case 2: 
         strBuf = AZI_EditWarekiEisuji9(strBuf);
         break;
     case 7: 
         strBuf = AZI_EditNyuryokuSeireki(strBuf);
         break;
     case 8: 
         strBuf = AZI_EditSeirekiEisuji(strBuf); 
         break;
     default:
         AZS_SetAbtErr2( "Y75", "変換の種類が不正です。" );
         return false ;       
}
     p_oTxt.value = strBuf;
     return true;
}	

// [X35]
// 指定日付に対して曖昧日付チェックを行う
function _Proxy_X35(
	p_oTxt, // 対象
	p_zEType //指定形式
){
    if( 0 == p_oTxt.value.length ){
		return true;// NULLならなにもしない
	}
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }
    if( "" == p_zEType ){
		AZS_SetAbtErr2( "X35", "関数の引数にNULLがあります。" );
		return false;
	}
    var iType = parseInt(p_zEType,10);
    if (iType > 5) {
       AZS_SetAbtErr2( "X35", "変換の種類が不正です。" );
       return false ;     
    }
 	//文字列編集
	var strBuf = p_oTxt.value;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除
	var retInfoString = checkVagueDate(iType, strBuf);
	if(retInfoString!=null){
	    //統基781-依01
	    if (!errorFlag) {
		AZS_SetErrMsg( "AZDP0109",retInfoString) ;
	        p_oTxt.focus() ;
		}
		else {
		    p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
	    return false;
	}else{
	  return true;
	}
  
}

//文字列中の空欄を０にかえ、英数小文字を大文字へ変換する。
function AZI_InpDate(
    p_strDate
){
	var stroutPDate = "";
	// 入力データ≠nullの場合
	if(!AZI_StrIsEmpty(p_strDate)){
		//前スペースを消す
	    p_strDate = AZI_DelStr( p_strDate, " " );
	    //末尾のスペースを削除
	    p_strDate = AZI_DelTailStr( p_strDate, " " );
		// 文字列中に' 'がある場合、0に置換する
		stroutPDate = p_strDate.replace(/ /g, "0");
		// 文字列の先頭が半角英字だった場合、大文字に置換する
		stroutPDate = AZI_EditAlphabet(stroutPDate,0);
		}
	return stroutPDate;	
}
// 入力日付(6バイト)を西暦８桁変換する。例：364.頃⇒YYYY7000
function AZI_EditDate6(
	p_strInputDate // 入力日付			   
	){
	// １．入力元号のチェック
    var strOUTDate = m_sErrorDateHalfW8Byte;
    if (AZI_ChkStr(AZI_SubString(p_strInputDate, 1, 3),ALLOWCHAR_NUMS)
                && (p_strInputDate.indexOf(m_skoro) == 3)) {
       // 数字の場合(例「4」)：<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
       // 数字でない場合(例「H」)：<gengo>情報<gengo-alph>から該当する元号情報を取得する。
       var strDateGengou = AZI_SubString(p_strInputDate, 0, 1);
	   var strFymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_fymd);
       var strTymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_tymd);
	   if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return strOUTDate;
       }    
       // ２．西暦年度の取得
       var strDateSeirekiNendo = AZI_SeirekiNendoSyutoku(strFymd, p_strInputDate);
       // ３．元号切り替えがあった年の古い元号データのときは、月部分を通常より-10した値とする。
       // <１．で取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 = 西暦年>の場合
       if (strDateSeirekiNendo == AZI_SubString(strTymd, 0, 4)) {
            strOUTDate = strDateSeirekiNendo + "7000";
       }
       // <１．で取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 ≠ 西暦年>の場合
       else {
            strOUTDate = strDateSeirekiNendo + "8000";
       } 
     }
       return strOUTDate;
	}		
// 入力日付(7バイト)を西暦８桁変換する。
function AZI_EditDate7(
	p_strInputDate // 入力日付			   
	){
	// 入力日付は?999999と9999999の場合
	var strOutDate = m_sErrorDateHalfW8Byte;
	if(p_strInputDate =="?999999"||p_strInputDate =="9999999"){
		return "99999999";
		}
	// 日付が"GYY.MM."と"YYY.MM."の場合
	 var strDateGengou = ""; //日付の１文字目
     var strFymd = "";       //開始日
     var strTymd = "";       //終了日
	 if (AZI_ChkStr(AZI_SubString(p_strInputDate, 1, 3),ALLOWCHAR_NUMS)
                && (p_strInputDate.indexOf(g_dataSeparator) == 3)
                && (p_strInputDate.lastIndexOf(g_dataSeparator) == 6)) {
		 // 数字の場合(例「4」)：<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
         // 数字でない場合(例「H」)：<gengo>情報<gengo-alph>から該当する元号情報を取得する。
		 strDateGengou = AZI_SubString(p_strInputDate, 0, 1);
		 strFymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_fymd);
        strTymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_tymd);
		 if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return strOutDate;
         }
		 var strDateSeirekiNendo = AZI_SeirekiNendoSyutoku(strFymd, p_strInputDate);
		 // <取得した元号情報の<gengo-tymd>の先頭４桁 = 西暦年 且つ <日付の４桁目から２文字分（MM部分）が'  '>　の場合
		 if (AZI_SubString(strTymd, 0, 4)==strDateSeirekiNendo && AZI_SubString(p_strInputDate, 4, 6)=="  ") {
                strOutDate = strDateSeirekiNendo + "9000";
        }
            // <上記以外の場合>
       else {
                var strMM =AZI_SubString(p_strInputDate, 4, 6).replace(/[ ]/g, "0");
                if (AZI_ChkStr(strMM,ALLOWCHAR_NUMS)){
                   if( AZI_SubString(strTymd, 0, 4)==strDateSeirekiNendo){
                     strOutDate = strDateSeirekiNendo + strMM + "90";
                   }else{
                     strOutDate = strDateSeirekiNendo + strMM + "00";
                   }
                }
            }
	 }
	 // 日付が"YYYY.頃"の場合
     else if (AZI_ChkStr(AZI_SubString(p_strInputDate, 0, 4),ALLOWCHAR_NUMS)&& (p_strInputDate.indexOf(m_skoro) == 4)) {
            strOutDate = AZI_SubString(p_strInputDate, 0, 4) + "8000";
            return strOutDate;
        }
    // 日付が"GYYMMDD"と"YYYMMDD"の場合
	else if (AZI_ChkStr(AZI_SubString(p_strInputDate, 1, 7),ALLOWCHAR_NUMS)) {
	     if (p_strInputDate == "3011225"|| p_strInputDate == "S011225") {
                return "19261250";
            }
         else if (p_strInputDate == "1450730"|| p_strInputDate == "M450730") {
                return "19120750";
         }
         // 数字の場合(例「4」)：<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
         // 数字でない場合(例「H」)：<gengo>情報<gengo-alph>から該当する元号情報を取得する。
         strDateGengou = AZI_SubString(p_strInputDate, 0, 1);
         strFymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_fymd);
         strTymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_tymd);
         if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return strOutDate;
         }
         // 条件①<取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 = 西暦年> の場合
         var strDateSeirekiNendo = AZI_SeirekiNendoSyutoku(strFymd, p_strInputDate);
         var strMMDD =  AZI_SubString(p_strInputDate, 3, 7);
         var strDD = AZI_SubString(p_strInputDate, 5, 7);
         var strMM = AZI_SubString(p_strInputDate, 3, 5);
         if (strDateSeirekiNendo == AZI_SubString(strTymd, 0, 4)) {
                // 日付の４文字目から４文字分（MMDD部分）によって切り替える。
                if (strMMDD == "0000"|| strMMDD == "9000") {
                    strMM = "90";
                    strDD = "00";
                }
                else if (strMMDD == "9999"|| strMMDD == "8999") {
                    strMM = "89";
                    strDD = "99";
                }
                else if (strMMDD == "8000"|| strMMDD == "7000") {
                    strMM = "70";
                    strDD = "00";
                }
                // 日付の6文字目から2文字分（DD部分）によって切り替える。
                if (strDD=="00"|| strDD=="90") {
                    strDD = "90";
                }
                else if (strDD=="99"||strDD=="80"||strDD=="81"||strDD=="82"|| strDD=="83") {
                    strDD= (parseInt(strDD,10) - 10).toString();
                }
                strOutDate = strDateSeirekiNendo + strMM + strDD;
            }
            // 条件①<取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 ≠ 西暦年> の場合
            else {
                strOutDate = strDateSeirekiNendo + strMMDD;
            }
        }
        return strOutDate;
	  } 
// 入力日付(8バイト)を西暦８桁変換する。
function AZI_EditDate8(
	p_strInputDate // 入力日付			   
	){
	 var strOutDate = m_sErrorDateHalfW8Byte;

     var strYYYYMM = p_strInputDate.replace(reTime, "");
     // 日付の後ろ２文字が'不詳'の場合
     if(p_strInputDate.lastIndexOf(m_fusyou) == 3 && AZI_ChkStr(AZI_SubString(p_strInputDate, 1, 3),ALLOWCHAR_NUMS)){
     	 // 数字の場合(例「4」)：<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
        // 数字でない場合(例「H」)：<gengo>情報<gengo-alph>から該当する元号情報を取得する。
        var strDateGengou = AZI_SubString(p_strInputDate, 0, 1);
        var strFymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_fymd);
        var strTymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_tymd);
        if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return strOutDate;
         }
         var strDateSeirekiNendo = AZI_SeirekiNendoSyutoku(strFymd, p_strInputDate);
        // <取得した元号情報の終了年度の先頭４桁 = 西暦年>の場合
        if (AZI_SubString(strTymd, 0, 4)==strDateSeirekiNendo) {
                strOutDate = strDateSeirekiNendo + "8999";
            }
            // <取得した元号情報の終了年度の先頭４桁 ≠ 西暦年>の場合
        else {
                strOutDate = strDateSeirekiNendo + "9999";
            }
       }
       // 日付が"YYYY.MM."の場合
      else if (AZI_ChkStr(strYYYYMM.replace(/[ ]/g, "0"),ALLOWCHAR_NUMS) && (p_strInputDate.indexOf(g_dataSeparator) == 4)
                && (p_strInputDate.lastIndexOf(g_dataSeparator) == 7)) {
            strOutDate = strYYYYMM + "00";
        }
      // 日付が"YYYYMMDD"の場合
      else if (AZI_ChkStr(p_strInputDate,ALLOWCHAR_NUMS)) {
            strOutDate = p_strInputDate;
        }   
      return strOutDate;
	}	
// 入力日付(9バイト)を西暦８桁変換する。
function AZI_EditDate9(
	p_strInputDate // 入力日付			   
	){
	 var strOutDate = m_sErrorDateHalfW8Byte;
     // 日付の後ろ２文字が'不詳'の場合
     var strDateGengou = "";
     var strFymd = "";
     var strTymd = "";
     var strDateSeirekiNendo = "";
     if ((p_strInputDate.indexOf(m_fusyou) == 4)&& AZI_ChkStr(AZI_SubString(p_strInputDate, 0, 4),ALLOWCHAR_NUMS)) {
            strOutDate = AZI_SubString(p_strInputDate, 0, 4)+ "9999";
     }
     // 日付が"GYY.MM.不(頃、上、中、下）"と"YYY.MM.不(頃、上、中、下）"の場合
     else if (AZI_ChkStr(AZI_SubString(p_strInputDate, 1, 3),ALLOWCHAR_NUMS)
                && (p_strInputDate.indexOf(g_dataSeparator) == 3)
                && (p_strInputDate.lastIndexOf(g_dataSeparator) == 6)) {
          if (!AZI_ChkStr(AZI_SubString(p_strInputDate, 7, 9).replace(/[ ]/g, "0"), ALLOWCHAR_NUMS)) {
             var strMM = AZI_SubString(p_strInputDate, 4, 6);
             // 数字の場合(例「4」)：<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
             // 数字でない場合(例「H」)：<gengo>情報<gengo-alph>から該当する元号情報を取得する。  
             strDateGengou = AZI_SubString(p_strInputDate, 0, 1);
             strFymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_fymd);
             strTymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_tymd);
             if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return strOutDate;
              }
             var strDateSeirekiNendo = AZI_SeirekiNendoSyutoku(strFymd, p_strInputDate);
             // <取得した元号情報の終了年度の先頭４桁 = 西暦年>の場合 
             if (AZI_SubString(strTymd, 0, 4)==strDateSeirekiNendo) {
                    if (p_strInputDate.indexOf("不") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "89";
                    }
                    else if (p_strInputDate.indexOf("頃") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "70";
                    }
                    else if (p_strInputDate.indexOf("上") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM+ "71";
                    }
                    else if (p_strInputDate.indexOf("中") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "72";
                    }
                    else if (p_strInputDate.indexOf("下") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "73";
                    }
              }
              // <取得した元号情報の終了年度の先頭４桁 ≠ 西暦年>の場合
              else {
                    if (p_strInputDate.indexOf("不") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "99";
                    }
                    else if (p_strInputDate.indexOf("頃") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM+ "80";
                    }
                    else if (p_strInputDate.indexOf("上") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "81";
                    }
                    else if (p_strInputDate.indexOf("中") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "82";
                    }
                    else if (p_strInputDate.indexOf("下") == 7) {
                        strOutDate = strDateSeirekiNendo + strMM + "83";
                    }
                }
                return strOutDate;
          }
          // 日付が"YYY.MM.DD"と"GYY.MM.DD"の場合
          else {
                // 数字の場合(例「4」)：<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
                // 数字でない場合(例「H」)：<gengo>情報<gengo-alph>から該当する元号情報を取得する。
               strDateGengou = AZI_SubString(p_strInputDate, 0, 1);
               strFymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_fymd);
               strTymd = AZI_GetNendoInfo(strDateGengou,m_igengoInfo_tymd);
               if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                  return strOutDate;
               }
               var strDateSeirekiNendo = AZI_SeirekiNendoSyutoku(strFymd, p_strInputDate);
               // 日付が'301.12.25'と'S01.12.25'の場合
               if (p_strInputDate=="301"+g_dataSeparator+"12"+g_dataSeparator+"25"|| p_strInputDate=="S01"+g_dataSeparator+"12"+g_dataSeparator+"25") {
                    strOutDate = "19261250";
               }
               // 日付が'145.07.30'と'M45.07.30'の場合
               else if (p_strInputDate=="145"+g_dataSeparator+"07"+g_dataSeparator+"30"|| p_strInputDate=="M45"+g_dataSeparator+"07"+g_dataSeparator+"30") {
                    strOutDate = "19120750";
               }
               else {
                    strOutDate = strDateSeirekiNendo + AZI_SubString(p_strInputDate, 4, 6)
                            + AZI_SubString(p_strInputDate, 7, 9);
               }
            }        
     }
               return strOutDate;
	}	  
// 入力日付(10バイト)を西暦８桁変換する。
function AZI_EditDate10(
	p_strInputDate // 入力日付			   
	){
	 var strOutDate = m_sErrorDateHalfW8Byte;
     var strYYYY = AZI_SubString(p_strInputDate, 0, 4);
     var strMM = AZI_SubString(p_strInputDate, 5, 7).replace(/ /g, "0");
     var strDD = AZI_SubString(p_strInputDate, 8, 10).replace(/ /g, "0");
     if (AZI_ChkStr(strYYYY,ALLOWCHAR_NUMS)&& AZI_ChkStr(strMM,ALLOWCHAR_NUMS)
                && (p_strInputDate.indexOf(g_dataSeparator) == 4)
                && (p_strInputDate.lastIndexOf(g_dataSeparator) == 7)) {
            // 日付が"YYYY.MM.DD"の場合
            if (AZI_ChkStr(strDD, ALLOWCHAR_NUMS)) {
                strOutDate = strYYYY + strMM + strDD;
            }
            // 日付が"YYYY.MM.不(頃、上、中、下）"の場合
            else {
                if (p_strInputDate.indexOf("不") == 8) {
                    strOutDate = strYYYY + strMM + "99";
                }
                else if (p_strInputDate.indexOf("頃") == 8) {
                    strOutDate = strYYYY + strMM + "80";
                }
                else if (p_strInputDate.indexOf("上") == 8) {
                    strOutDate = strYYYY + strMM + "81";
                }
                else if (p_strInputDate.indexOf("中") == 8) {
                    strOutDate = strYYYY + strMM + "82";
                }
                else if (p_strInputDate.indexOf("下") == 8) {
                    strOutDate = strYYYY + strMM + "83";
                }
            }
        }
        return strOutDate;
	}
//西暦年度取得
function AZI_SeirekiNendoSyutoku(
  p_strFymd, // 元号開始年月日
  p_strInputDate // 入力日付
){
   var strDateSeirekiNendo = (parseInt(AZI_SubString(p_strFymd, 0, 4),10)+ parseInt(AZI_SubString(p_strInputDate, 1, 3),10) - 1).toString();
   return strDateSeirekiNendo;
}
// 和暦年度を取得する
function AZI_WarekiNendoSyutoKu(
  p_strZDate,    //入力日付
  p_iSyutoKuFLG  //取得Flag
){
   var iGengoBangou = 0;
   var strGengoBangou = ""; //元号番号
   var strFymd = "";        //開始日
   var strTymd = "";        //終了日
   var strDateNendo = AZI_SubString(p_strZDate, 0, 4);
   switch (p_iSyutoKuFLG) {
   case 2:
         while (true) {
                iGengoBangou = iGengoBangou + 1;
                strGengoBangou = iGengoBangou.toString();
                strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
                strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
               if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                   return "";
               }
                else if ((parseInt(strFymd,10) <= parseInt(p_strZDate,10))
                        && (parseInt(p_strZDate,10) <= parseInt(strTymd,10))) {
                    break;
                }
            }
         break;   
   case 4:
         while (true) {
                iGengoBangou = iGengoBangou + 1;
                strGengoBangou = iGengoBangou.toString();
                // 開始日を取得
                strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
                //　終了日を取得　
                strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
                if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                   return "";
                }
                else if ((parseInt(AZI_SubString(strFymd,0, 4),10) <= parseInt(strDateNendo,10))
                        && (parseInt(strDateNendo,10) <= (parseInt(AZI_SubString(strTymd, 0, 4),10)))) {
                    break;
                }
            }
        break;   
    default:
        break;
        }
        var strlNendo =(parseInt(AZI_SubString(p_strZDate, 0, 4),10)- parseInt(AZI_SubString(strFymd, 0, 4),10) + 1).toString();
        if (parseInt(strlNendo,10) > 99) {
            strlNendo = "99";
        }    
        var strDateWarekiNen = strGengoBangou + AZI_EditStr_PRIZE(strlNendo);
        return strDateWarekiNen;          
}
//パラメータで渡された日付を曖昧表現を考慮し7ﾊﾞｲﾄ表記(GYYMMDD)に変換する。
function AZI_EditWarekiEisuji7(
  p_strInputDate //入力日付		
){
  // １．日付の変換
  var strZDate = AZI_InpDate(p_strInputDate);
  var strOUTDate = "";
  // ２．日付が''、0000000 、00000000の場合は、''を返却する。
  if (AZI_StrIsEmpty(strZDate)||strZDate == "0000000"|| strZDate =="00000000") {
            return strOUTDate;
  }
  // ３．日付の先頭から５文字が'99999'の場合は、'?999999'を返却する。
  // ４．日付の先頭から５文字が'?9999' または 先頭２文字が'不詳'の場合は、'?999999'を返却する。
  if (AZI_SubString(strZDate, 0, 5)=="99999"||AZI_SubString(strZDate, 0, 5)=="?9999"
                || (strZDate.indexOf(m_fusyouNotDot) == 0)) {
            return "?999999";
  }
  // ５．日付が"2151225と19261225"の場合
  if (strZDate=="2151225"||strZDate=="19261225") {
            return "T151225";
  }

  // ６．日付が"1450730と19120750"の場合
  if (strZDate=="1450730"||strZDate=="19120750") {
            return "M450730";
  }
  // ７．日付 ← edit入力和暦(日付)を呼び出す。
  var strDateInputWareki = AZI_EditNyuryokuWareki(strZDate);
  // ８．<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
  var strGengoBangou = AZI_SubString(strDateInputWareki, 0, 1);
  // 開始日
  var strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
  // 終了日
  var strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
  // 元号英字大
  var strGengoEiji = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_alphUpper);
  if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return m_sErrorDateHalfW7Byte;
  }
  // 開始年
  var iFNen = parseInt(AZI_SubString(strFymd, 0, 4),10);
  // 終了年
  var iTNen = parseInt(AZI_SubString(strTymd, 0, 4),10);
  // 日付の２文字目から２文字分(YYYMMDD)＝元号終了年(YYYY)-元号開始年(YYYY) + 1
  // 日付の４文字目から２文字分(YYYMMDD)=元号終了のMM部分
  var strDateMM = AZI_SubString(strDateInputWareki, 3, 5);
  var strDateDD = AZI_SubString(strDateInputWareki, 5, 7);
  if (parseInt(AZI_SubString(strDateInputWareki, 1, 3),10) == (iTNen - iFNen + 1)) {
            if (AZI_SubString(strTymd, 4, 6) == strDateMM) {
                if (strDateDD =="00") {
                    strDateDD = "90";
                }
                else if (strDateDD =="99") {
                    strDateDD = "89";
                }
                else if (strDateDD =="80") {
                    strDateDD = "70";
                }
                else if (strDateDD =="81") {
                    strDateDD = "71";
                }
                else if (strDateDD =="82") {
                    strDateDD = "72";
                }
                else if (strDateDD =="83") {
                    strDateDD = "73";
                }
            }
            else {
                if (strDateMM == "00") {
                    strDateMM = "90";
                }
                else if (strDateMM == "99") {
                    strDateMM = "89";
                }
                else if (strDateMM == "80") {
                    strDateMM = "70";
                }
            }
  }
  strOUTDate = strGengoEiji+AZI_SubString(strDateInputWareki, 1, 3)+strDateMM+strDateDD;
  return strOUTDate;
}
//パラメータで渡された日付を曖昧表現を考慮し9ﾊﾞｲﾄ表記(GYY.MM.DD)に変換する。
function AZI_EditWarekiEisuji9(
  p_strInputDate //入力日付		
){
   // １．日付の変換
   var strOUTDate = "";
   var strZDate = AZI_InpDate(p_strInputDate);
   // ２．日付が''、0000000 、00000000の場合は、''を返却する。
   if (AZI_StrIsEmpty(strZDate)||strZDate ==m_sExceptionDate0_7
       || strZDate ==m_sExceptionDate0_8) {
            return strOUTDate;
   }
   // ３．日付 ← edit入力和暦(日付)を呼び出す。
   var strDateInputWareki = AZI_EditNyuryokuWareki(strZDate);
   // ４．日付の先頭から５文字が'99999' または '?9999' の場合、'不詳'を返却する。
   var strDateInputWareki_Head5 = AZI_SubString(strDateInputWareki, 0, 5);
   if (strDateInputWareki_Head5 =="99999"|| strDateInputWareki_Head5 == "?9999") {
            return m_fusyouNotDot;
   }
   // ５．<gengo>情報<gengo-pat name>から該当する元号情報を取得する。
   // 元号番号
   var strGengoBangou = AZI_SubString(strDateInputWareki, 0, 1);
   // 開始日
   var strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
   // 終了日
   var strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
   // 元号英字大
   var strGengoEiji = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_alphUpper);
   if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
                return m_sErrorDateHalfW7Byte;
   }
   // ６．YYの取得
   var strYY = AZI_SubString(strDateInputWareki, 1, 2).replace("0", " ")
                + AZI_SubString(strDateInputWareki, 2, 3);
   // ７．MMの取得
   var strMM = AZI_SubString(strDateInputWareki, 3, 5);
   if (strMM!="00") {
       strMM = AZI_SubString(strDateInputWareki, 3, 4).replace("0", " ")
               + AZI_SubString(strDateInputWareki, 4, 5);
   }
   // ８．DDの取得
   var strDD = AZI_SubString(strDateInputWareki, 5, 7);
   if (strDD!="00") {
            strDD = AZI_SubString(strDateInputWareki, 5, 6).replace("0", " ")
                    + AZI_SubString(strDateInputWareki, 6, 7);
   }
   // ９．曖昧日付編集
   var strAimaiDateEdit = "";  
   // 日付(MM部分)
   if (strMM =="99"||strMM =="89") {
            strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator + m_fusyouNotDot;
        }
        else if (strMM =="80"||strMM =="70") {
            strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator + "頃";
        }
        else if (strMM =="00"||strMM =="90") {
             strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+"  "+g_dataSeparator;
        }
        else {
            if (strDD =="00"||strDD =="90") {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator;
            }
            else if (strDD =="99"||strDD =="89") {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator+"不"; 
            }
            else if (strDD =="80"||strDD =="70") {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator+"頃";
            }
            else if (strDD =="81"||strDD =="71") {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator+"上";
            }
            else if (strDD =="82"||strDD =="72") {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator+"中";
            }
            else if (strDD =="83"||strDD =="73") {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator+"下";
            }
            else {
               strAimaiDateEdit = strGengoEiji+strYY+ g_dataSeparator+strMM+g_dataSeparator+strDD;
            }
        }
        // １１．日付(9バイト表記)で9文字に満たない場合、後ろに' 'を加えて９文字にする。
        strOUTDate = AZI_paddingString(strAimaiDateEdit,"X", 9); 
        return strOUTDate;        
}
//パラメータで渡された日付を曖昧表現を考慮し入力形式に変換する（七桁の和暦に変換する）。
//例：①　19890189⇒3640199　②　S45. 3. 1⇒3450301
//変換後の日付文字列を返却する。
function AZI_EditNyuryokuWareki(
	p_strDate //入力日付							
){
	// z日付 ← l_Inp日付(入力データの日付)
	var strOUTDate = "";
    var strzDate = "";
	var zEditDate = "";
	strzDate = AZI_InpDate(p_strDate);
	// ＜ z日付 = "" OR z日付 = '0000000' OR z日付 = '00000000' ＞の場合
    if(strzDate==""||strzDate == "0000000"||strzDate == "00000000") {
		return  strOUTDate;
		} 
	// ＜z日付の桁数が７ かつ z日付の１文字目が数字の場合＞
    if ((AZI_bytelength(strzDate) == 7) && AZI_ChkStr(AZI_SubString(strzDate, 0, 1),ALLOWCHAR_NUMS)) {
            return strzDate;
        }
	// ＜z日付の先頭４文字が"9999"の場合、 z日付の先頭５文字が99999の場合＞
    if (AZI_SubString(strzDate, 0, 4) == "9999"||AZI_SubString(strzDate, 0, 5) == "99999") {
            return strzDate;
        }
	// ＜z日付の先頭５文字が?9999の場合＞
	if (AZI_SubString(strzDate, 0, 5) == "?9999") {
            return "9999999";
        }
	switch (AZI_bytelength(strzDate)) {
	// ＜z日付の桁数が４の場合＞
	case 4:
	     return "9999999";
    // ＜z日付の桁数が６の場合＞ ※「頃」
	case 6:
	     // z日付の１文字目に該当する元号情報を取得する。
		 if( AZI_ChkStr(AZI_SubString(strzDate, 1, 3),ALLOWCHAR_NUMS)&&(strzDate.indexOf(m_skoro) == 3)){
			 var strDateGengou = AZI_SubString(strzDate, 0, 1);
                var strGengouNum = AZI_GetNendoInfo(strDateGengou,2);
				if(null==strGengouNum||strGengouNum==""){
					   strOUTDate = m_sErrorDateHalfW7Byte;
				}else{
					strOUTDate = strGengouNum + AZI_SubString(strzDate, 1, 3) + "8000";
					}
			 
			 }
			  return strOUTDate;
	    // ＜z日付の桁数が７の場合＞
        case 7:
            zEditDate = AZI_EditDate7(strzDate);
            break;

        // ＜z日付の桁数が８の場合＞
        case 8:
            zEditDate = AZI_EditDate8(strzDate);
            break;

        // ＜z日付の桁数が９の場合＞
        case 9:
            zEditDate = AZI_EditDate9(strzDate);
            break;

        // ＜z日付の桁数が１０の場合＞
        case 10:
            zEditDate = AZI_EditDate10(strzDate);
            break;
        default:
            return m_sErrorDateHalfW7Byte;
        }
        // ＜z日付＝'19261225'の場合＞
        if(zEditDate == "19261225"){
            return "2151225";
        }
        // ＜z日付＝19261250の場合＞
        else if (zEditDate == "19261250") {
            return "3011225";
        }
        // ＜z日付＝19120730の場合＞
        else if (zEditDate == "19120730") {
            return "2010730";
        }
        // ＜z日付＝19120750の場合＞
        else if (zEditDate == "19120750") {
            return "1450730";
        }
        
        // 和暦年度を取得する
        var strWarekiNendo = AZI_WarekiNendoSyutoKu(zEditDate, 4);
        if (AZI_StrIsEmpty(strWarekiNendo)) {
            strOUTDate = "";
            return strOUTDate;
        }
        var strGengoBangou = AZI_SubString(strWarekiNendo, 0, 1);
        strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
        strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
        var strzMM = "";
        var strzDD = "";
        var strzDateHead4 = AZI_SubString(zEditDate, 0, 4);
        var strzDate56 = AZI_SubString(zEditDate, 4, 6);
        var strzDate78 = AZI_SubString(zEditDate, 6, 8);
        // ＜z日付の先頭４桁=元号終了日の先頭４桁の場合
        if (AZI_SubString(strTymd, 0, 4)==strzDateHead4) {
            strOUTDate =AZI_EditNyuryokuWarekiSub(zEditDate, strTymd, strFymd,
                    strWarekiNendo, strzDate56, strzDate78, strzDateHead4);
            return strOUTDate;
        }
        // ＜z日付の先頭４桁≠元号終了日の先頭４桁の場合
        else {
            strzMM = AZI_EditStr_PRIZE(strzDate56);
            strzDD = AZI_EditStr_PRIZE(strzDate78);
            strOUTDate = strWarekiNendo + strzMM + strzDD;
            return strOUTDate;
        }
	}
// edit入力和暦Sub
// edit入力和暦で　＜z日付の先頭４桁=元号終了日の先頭４桁の場合	
function AZI_EditNyuryokuWarekiSub(
   p_strzEditDate,        // 入力日付		
   p_strTymd,             // 終了日
   p_strFymd,             // 開始日
   p_strWarekiNendo,      // 和暦年度
   p_strzDate56,          // 日付５６文字目
   p_strzDate78,          // 日付７８文字目
   p_strzDateHead4        // 日付先頭４桁
){
    var strOUTDate = "";
    var strzMM = "";
    var strzDD = "";
    var strWarekiNendo = "";
    // ＜z日付の５～６桁=元号終了日の５～６桁の場合＞
    if (AZI_SubString(p_strTymd, 4, 6) == p_strzDate56) {
       // ＜z日付の７～８桁が90,89,70,71,72,73の場合＞
        if (p_strzDate78 == "90"|| p_strzDate78 == "89"||p_strzDate78 == "70"
            ||p_strzDate78 == "71"||p_strzDate78 == "72"||p_strzDate78 == "73") {
                // zNUMに該当する元号の開始日、終了日を基盤ＡＰＩを利用し取得する。
                // ＜元号開始日の先頭４文字≦z日付の先頭４文字 かつ z日付の先頭４文字＜元号終了日の先頭４文字 の場合＞
                strzMM = AZI_EditStr_PRIZE(p_strzDate56);
                strzDD = AZI_EditStr_PRIZE((parseInt(p_strzDate78,10) + 10).toString());
                strOUTDate = p_strWarekiNendo + strzMM + strzDD;
                return strOUTDate;
        }
        // ＜z日付の７～８桁が00,99,80,81,82,83の場合＞
        else if (p_strzDate78 == "00"|| p_strzDate78 == "99"||p_strzDate78 == "80"
                ||p_strzDate78 == "81"||p_strzDate78 == "82"||p_strzDate78 == "83") {
                // zNUMに該当する元号の開始日、終了日を基盤ＡＰＩを利用し取得する。
                // ＜元号開始日の先頭４文字≦z日付の先頭４文字 かつ z日付の先頭４文字＜元号終了日の先頭４文字 の場合＞
                strzMM = AZI_EditStr_PRIZE(p_strzDate56);
                strzDD = AZI_EditStr_PRIZE(p_strzDate78);
                strOUTDate = p_strWarekiNendo + strzMM + strzDD;
                return strOUTDate;
             }
             else {
                // zNUMに該当する元号の開始日、終了日を基盤ＡＰＩを利用し取得する。
                // ＜元号開始日≦z日付 かつ z日付≦元号終了日 の場合＞
                strWarekiNendo = AZI_WarekiNendoSyutoKu(p_strzEditDate, 2);
                strzMM = AZI_EditStr_PRIZE(p_strzDate56);
                strzDD = AZI_EditStr_PRIZE(p_strzDate78);
                strOUTDate = strWarekiNendo + strzMM + strzDD;
                return strOUTDate;
             }
    }
    // ＜z日付の５～６桁≠元号終了日の５～６桁の場合＞
    else {
            // ＜z日付の５～６桁が90,89,70の場合＞
            if (p_strzDate56 == "90"|| p_strzDate56 == "89"||p_strzDate56 == "70") {
                // zNUMに該当する元号の開始日、終了日を基盤ＡＰＩを利用し取得する。
                // ＜元号開始日の先頭４文字≦z日付の先頭４文字 かつ z日付の先頭４文字＜元号終了日の先頭４文字 の場合＞
                strzMM = AZI_EditStr_PRIZE((parseInt(p_strzDate56,10) + 10).toString());
                strzDD = AZI_EditStr_PRIZE(p_strzDate78);
                if (strzMM=="10") {
                    strzMM = "00";
                }
                strOUTDate = p_strWarekiNendo + strzMM + strzDD;
                return strOUTDate;
            }
            // ＜z日付の５～６桁が00,99,80の場合＞
            else if (p_strzDate56 == "00"|| p_strzDate56 == "99"||p_strzDate56 == "80") {
                // zNUMに該当する元号の開始日、終了日を基盤ＡＰＩを利用し取得する。
                // ＜元号開始日の先頭４文字≦z日付の先頭４文字 かつ z日付の先頭４文字＜元号終了日の先頭４文字 の場合＞
                strzMM = AZI_EditStr_PRIZE(p_strzDate56);
                strzDD = AZI_EditStr_PRIZE(p_strzDate78);
                strOUTDate = p_strWarekiNendo + strzMM + strzDD;
                return strOUTDate;
            }
            // ＜上記以外の場合＞
            else {
                // zNUMに該当する元号の開始日、終了日を基盤ＡＰＩを利用し取得する。
                // ＜元号開始ﾂ挙冝・日付 かつ z日付≦元号終了日 の場合＞
                strWarekiNendo = AZI_WarekiNendoSyutoKu(p_strzEditDate, 2);
                strzMM = AZI_EditStr_PRIZE(p_strzDate56);
                strzDD = AZI_EditStr_PRIZE(p_strzDate78);
                strOUTDate = strWarekiNendo + strzMM + strzDD;
                return strOUTDate;
            }
        }
}
// edit入力西暦
// パラメータで渡された日付を曖昧表現を考慮しYYYYMMDD形式に変換する。
function AZI_EditNyuryokuSeireki(
   p_strInputDate //入力日付	
){
   // １．日付の変換
   var strOUTDate = m_sErrorDateHalfW8Byte;
   var strZDate = AZI_InpDate(p_strInputDate);
   // ２．日付が''、0000000 、00000000の場合は、''を返却する。
   if (AZI_StrIsEmpty(strZDate)||strZDate ==m_sExceptionDate0_7
       || strZDate ==m_sExceptionDate0_8) {
            return "";
   }
   // ３．日付が'?999999' または '9999999' または '99999999'の場合、'99999999'を返却する。
   else if (strZDate =="?999999"||strZDate =="9999999"||strZDate =="99999999") {
            return "99999999";
   }
   // ４．日付の右スペースをtrimする。
   strZDate = AZI_DelTailStr(strZDate,FWSpacce);
   strZDate = AZI_DelTailStr(strZDate,HWSpacce);
   strZDate = AZI_DelTailStr(strZDate,TABSpacce);
   var strtrimDate = strZDate;
   // ５．日付の文字数に応じて以下の処理を行う。
   switch (AZI_bytelength(strtrimDate)) {
   // 日付が4バイトの場合
   case 4:
      return "99999999";
   // 日付が6バイトの場合
   case 6:
      strOUTDate = AZI_EditDate6(strtrimDate); 
      break;
    // 日付が7バイトの場合
    case 7:
      strOUTDate = AZI_EditDate7(strtrimDate);
      break;
    // 日付が8バイトの場合
    case 8:
      strOUTDate = AZI_EditDate8(strtrimDate);
      break;
    // 日付が9バイトの場合
    case 9:
      strOUTDate = AZI_EditDate9(strtrimDate);
      break;
    // 日付が10バイトの場合
    case 10:
      strOUTDate = AZI_EditDate10(strtrimDate);
      break;
      default:
      return m_sErrorDateHalfW8Byte;
   }
      return strOUTDate;                
}
//edit西暦英数字
//パラメータで渡された日付を曖昧表現を考慮し10ﾊﾞｲﾄ表記（YYYY.MM.DD）に変換する。
function AZI_EditSeirekiEisuji(
   p_strInputDate //入力日付	
){
   // １．日付の変換
   var strOUTDate = m_sErrorDateHalfW7Byte;
   var strZDate = AZI_InpDate(p_strInputDate);
   // ２．日付が''、0000000 、00000000の場合は、''を返却する。
   if (AZI_StrIsEmpty(strZDate)||strZDate==m_sExceptionDate0_7
       ||strZDate==m_sExceptionDate0_8) {
            return "";
   }
   // ３．日付が'?999999' または '9999999' または '99999999'の場合、'不詳'を返却する。
   else if (strZDate=="?999999"||strZDate=="9999999"||strZDate=="99999999") {
            return m_fusyouNotDot;
   }
   // ４．日付の右スペースをtrimする。
   strZDate = AZI_DelTailStr(strZDate,FWSpacce);
   strZDate = AZI_DelTailStr(strZDate,HWSpacce);
   strZDate = AZI_DelTailStr(strZDate,TABSpacce);
   var strtrimDate = strZDate;
   // ５．日付の文字数に応じて以下の処理を行う。
   var strEditDate = "";
   switch (AZI_bytelength(strtrimDate)) {
        // 日付が4バイトの場合
        case 4:
            return m_fusyouNotDot;

        // 日付が6バイトの場合
        case 6:
            strEditDate = AZI_EditDate6(strtrimDate);
            break;
        // 日付が7バイトの場合
        case 7:
            strEditDate = AZI_EditDate7(strtrimDate);
            break;
        // 日付が8バイトの場合
        case 8:
            strEditDate = AZI_EditDate8(strtrimDate);
            break;
        // 日付が9バイトの場合
        case 9:
            strEditDate = AZI_EditDate9(strtrimDate);
            break;
        // 日付が10バイトの場合
        case 10:
            strEditDate = AZI_EditDate10(strtrimDate);
            break;
        default:
            return m_sErrorDateHalfW7Byte;
        }
        // ６．５.で取得した日付が'????????'の場合、日付 ← '???????'とする。
        if (strEditDate ==m_sErrorDateHalfW8Byte) {
            return m_sErrorDateHalfW7Byte;
        }

        var strbDate = "";
        // ７．日付が"19261250と19120750"の場合
        if (strEditDate == "19261250") {
            strOUTDate = AZI_paddingString("1926"+g_dataSeparator+"12"+g_dataSeparator+"25","X", 10);
            return strOUTDate;
        }
        else if (strEditDate == "19120750") {
            strOUTDate = AZI_paddingString("1912"+g_dataSeparator+" 7"+g_dataSeparator+"30","X", 10);
            return strOUTDate;
        }
        // ８．日付のMMDD部分が以下の場合
        var strYYYY = AZI_SubString(strEditDate, 0, 4);
        var strMMDD = AZI_SubString(strEditDate, 4, 8);
        var strMM = AZI_SubString(strEditDate, 4, 6);
        var strDD = AZI_SubString(strEditDate, 6, 8);
        // MMDD部分が"9999と8999"の場合
        if (strMMDD=="9999"|| strMMDD=="8999") {
            //YYYY+'.'+'不詳'
            strbDate = strYYYY+g_dataSeparator+m_fusyouNotDot;
        }
        // MMDD部分が"7000と8000"の場合
        else if (strMMDD=="7000"|| strMMDD=="8000") {
            //YYYY+'.'+'頃'
            strbDate = strYYYY+g_dataSeparator+"頃";
        }
        // MMDD部分が"0000と9000"の場合
        else if (strMMDD=="0000"|| strMMDD=="9000") {
            strbDate = strYYYY+".  .";
        }
        else {
            // ９．MM編集
            if (strMM!="00") {
                strMM = AZI_SubString(strMM, 0, 1).replace("0", " ")+ AZI_SubString(strMM, 1, 2);
            }
            // １０．DD編集
            // DD部分が"99と89"の場合
            if (strDD=="99"||strDD =="89") {
                strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator+"不";          
            }
             // DD部分が"80と70"の場合
            else if (strDD=="80"||strDD =="70") {
                strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator+"頃";                
            }
            // DD部分が"81と71"の場合
            else if (strDD=="81"||strDD =="71") {
                strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator+"上";                
            }
            // DD部分が"82と72"の場合
            else if (strDD=="82"||strDD =="72") {
                strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator+"中";                 
            }
            // DD部分が"83と73"の場合
            else if (strDD=="83"||strDD =="73") {
                strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator+"下";                
            }
            else {
                 // DDの先頭１文字が'0'の場合、半角スペースに置換する。
                 if (strDD!="00") {
                    strDD = AZI_SubString(strDD, 0, 1).replace("0", " ")
                    + AZI_SubString(strDD, 1, 2);
                 }
                 else {
                    strDD = "";
                 }
                // １１．MMDD編集
                // DD='90'
                if (strDD=="90") {
                    // MM='00'
                    if (strMM=="00") {
                        strbDate = strYYYY+g_dataSeparator+"  "+g_dataSeparator;
                    }
                    // 上記以外
                    else {
                        strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator;
                    }
                }
                // DD=''
                else if (AZI_StrIsEmpty(strDD)) {
                    strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator;
                }
                else {
                    strbDate = strYYYY+g_dataSeparator+strMM+g_dataSeparator+strDD;
                }
            }
        }
        // １２．Dateが10バイト未満の場合、10バイトまで後ろに半角スペースを付与する。
        strOUTDate = AZI_paddingString(strbDate,"X", 10);
        return strOUTDate;
   
}

//曖昧日付フラグ範囲チェック
function AZI_AimaiDateFlagCheck(
  p_sKuuranFlag,  // 空欄フラグ
  p_sFusyouFlag,  // 不詳フラグ
  p_sSkotoFlag,   // 頃フラグ
  p_sSyun         // 旬フラグ
){
  // 空欄フラグは0,2,3以外の値であれば、チェックフラグ=-1(パラメータ異常)を返却する。
  if(p_sKuuranFlag!=m_sKyokaSiNai && p_sKuuranFlag!=m_sMDKyoka
      && p_sKuuranFlag!=m_sDKyoka){
      return m_ParameterException;
  }
  // 不詳フラグは0,1,2,3以外の値であれば、チェックフラグ=-1(パラメータ異常)を返却する。
  if(p_sFusyouFlag!=m_sKyokaSiNai && p_sFusyouFlag!=m_sYMDKyoka 
     && p_sFusyouFlag!=m_sMDKyoka&& p_sFusyouFlag!=m_sDKyoka){
      return m_ParameterException;
  }
  // 頃フラグは0,2,3以外の値であれば、チェックフラグ=-1(パラメータ異常)を返却する。
  if (p_sSkotoFlag!=m_sKyokaSiNai && p_sSkotoFlag!=m_sMDKyoka
      && p_sSkotoFlag!=m_sDKyoka) {
        return m_ParameterException;
  }
  // 旬フラグは0,3以外の値であれば、チェックフラグ=-1(パラメータ異常)を返却する。
  if (p_sSyun!=m_sKyokaSiNai && p_sSyun!=m_sDKyoka) {
        return m_ParameterException;
  }
  return m_Normal;
}  

// check曖昧日付
// 和暦、西暦の曖昧日付をチェックする。判定結果を返却する。
// 日付を曖昧表現を考慮し妥当性のチェックを行う。曖昧日付の許可範囲は空欄フラグ～旬フラグによってあたえる
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
// return  -1:パラメータ異常      0:エラーなし     1:日付として異常    2:和暦として異常
function AZI_CheckAimaiDate(
  p_sInputDate,   // 入力日付	 
  p_sKuuranFlag,  // 空欄フラグ
  p_sFusyouFlag,  // 不詳フラグ
  p_sSkotoFlag,   // 頃フラグ
  p_sSyun         // 旬フラグ
){
  var iCheckFlag = m_Normal; // エラーなし
  var strCheckDate = "";     // チェック用の日付
  // 日付の変換
  var instrDate = AZI_InpDate(p_sInputDate);
  // 日付が''、0000000 、00000000の場合はチェックを行わずチェックフラグ=0を返却する。
  if (AZI_StrIsEmpty(instrDate)||instrDate ==m_sExceptionDate0_7
       ||instrDate ==m_sExceptionDate0_8) {
       return m_Normal;
  }
  // フラグ範囲チェック
  iCheckFlag = AZI_AimaiDateFlagCheck(p_sKuuranFlag,p_sFusyouFlag,p_sSkotoFlag,p_sSyun);
  if (iCheckFlag == m_ParameterException) {
            return m_ParameterException;
  }
  // 日付のバイト数毎にチェック用の日付を作成する。
  var strGengoBangou = "";  // 元号番号
  var strFymd = "";         // 開始日
  var strTymd = "";         // 終了日
  var iWarekiCheckFlag = 0; //和暦の範囲外チェックflg
  switch (AZI_bytelength(instrDate)) {
  // ４バイト
  case 4:
       // 日付が不詳の場合
       if(instrDate ==m_fusyouNotDot) {
          strCheckDate = "99999999";
       }
       // 上記以外の場合
       else {
          return m_DateException;
       }
       break;
  // ６バイト
  case 6:
      // 上記で元号情報が取得できない場合、チェックフラグの初期値＝1(日付として異常）を返却する。 
      iWarekiCheckFlag = 1; 
      // 元号番号を取得
      strGengoBangou = AZI_SubString(instrDate,0,1)
      // 開始日を取得
      strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
      // 終了日を取得
      strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
      if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
          return m_DateException;
      }else {
          strCheckDate = AZI_CheckAimaiDate6Byte(instrDate, strFymd, strTymd);
      }
      break;  
   // ７バイト
   case 7: 
      // 日付が?999999と9999999の場合
      if (instrDate =="?999999"||instrDate =="9999999") {
            strCheckDate = "99999999";
            // GPRIME-基盤-N-1025追加
            break;
      }
      // 日付が"GYY.MM."と"YYY.MM."の場合
      else if (AZI_ChkStr(AZI_SubString(instrDate, 1, 3),ALLOWCHAR_NUMS)
                    && (instrDate.indexOf(g_dataSeparator) == 3)
                    && (instrDate.lastIndexOf(g_dataSeparator) == 6)) {
           iWarekiCheckFlag = 1;  
           // 上記で元号情報が取得できない場合、チェックフラグの初期値＝1(日付として異常）を返却する。 
           // 元号番号を取得
           strGengoBangou = AZI_SubString(instrDate,0,1)
           // 開始日を取得
           strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
           // 終了日を取得
           strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
           if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
               return m_DateException;
           } 
           strCheckDate = AZI_CheckAimaiDate7Byte1(instrDate,strFymd,strTymd);     
      }
      // 日付が"YYYY.頃"の場合
      else if (AZI_ChkStr(AZI_SubString(instrDate, 1, 3),ALLOWCHAR_NUMS)
                && (instrDate.indexOf(m_skoro) == 4)) {
           strCheckDate = AZI_SubString(instrDate, 0, 4)+"8000";
      }
      // 日付が"3011250,S011250,2151250,T151250,1450750,M450750,2010750,T010750"の場合
      if (instrDate=="3011250"||instrDate=="S011250"||instrDate=="2151250"
          ||instrDate=="T151250"||instrDate=="1450750"||instrDate=="M450750"
          ||instrDate=="2010750"||instrDate=="T010750") {
                return m_DateException;
      }
      // 日付が"3011225,S011225"の場合
      else if (instrDate=="3011225"||instrDate=="S011225") {
               strCheckDate = "19261250";
      }
      // 日付が"1450730,M450730"の場合
      else if (instrDate=="1450730"||instrDate=="M450730") {
               strCheckDate = "19260750";
      }
      // 日付が"GYYMMDD"と"YYYMMDD"の場合
      if (AZI_ChkStr(AZI_SubString(instrDate, 1, 7),ALLOWCHAR_NUMS)) {
      // 上記で元号情報が取得できない場合、チェックフラグの初期値＝1(日付として異常）を返却する。
      iWarekiCheckFlag = 1;
      // 元号番号を取得
      strGengoBangou = AZI_SubString(instrDate,0,1)
      // 開始日を取得
      strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
      // 終了日を取得
      strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
      if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
            return m_DateException;
      } 
      strCheckDate = AZI_CheckAimaiDate7Byte2(instrDate,strFymd,strTymd);
      }
      break; 
   // ８バイト（例：YYY.不詳、YYYY.MM.、YYYYMMDD）
   case 8: 
      // 日付の後ろ２文字が'不詳'の場合
      var strYYYYMM = instrDate.replace(reTime, "");
      if (instrDate.lastIndexOf(m_fusyou) == 3
            && (AZI_ChkStr(AZI_SubString(instrDate, 1,3), ALLOWCHAR_NUMS))) {
         // 上記で元号情報が取得できない場合、チェックフラグの初期値＝1(日付として異常）を返却する。
         iWarekiCheckFlag = 1;
         // 元号番号を取得
         strGengoBangou = AZI_SubString(instrDate,0,1)
         // 開始日を取得
         strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
         // 終了日を取得
         strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
         if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
            return m_DateException;
         } 
         strCheckDate = AZI_CheckAimaiDate8Byte(instrDate,strFymd,strTymd);    
      }
      // YYYY.MM.の場合
      else if (AZI_ChkStr(strYYYYMM.replace(/ /g, "0"),ALLOWCHAR_NUMS)
                    && (instrDate.indexOf(g_dataSeparator) == 4)
                    && (instrDate.lastIndexOf(g_dataSeparator) == 7)) {
                strCheckDate = strYYYYMM + "00";
      }
      // YYYYMMDDの場合
      else if (AZI_ChkStr(instrDate,ALLOWCHAR_NUMS)) {
                strCheckDate = instrDate;
      }
      break;   
   // ９バイト（例：YYYY.不詳、YYY.MM.不、GYY.MM.DD）
   case 9:   
      // 日付の後ろ２文字が'不詳'の場合
      strGengoBangou = "";    // 元号番号
      strFymd = "";           // 開始日
      strTymd = "";           // 終了日
      if (instrDate.indexOf(m_fusyou) == 4
                    &&AZI_ChkStr(AZI_SubString(instrDate, 0, 4),ALLOWCHAR_NUMS)) {
           strCheckDate = AZI_SubString(instrDate, 0, 4)+ "9999";
      }
      // "301.12.50/S01.12.50/215.12.50/T15.12.50/145.07.50/M45.07.50/201.07.50/T01.07.50"
      else if (instrDate=="301"+g_dataSeparator+"12"+g_dataSeparator+"50"
                ||instrDate=="S01"+g_dataSeparator+"12"+g_dataSeparator+"50"
                ||instrDate=="215"+g_dataSeparator+"12"+g_dataSeparator+"50"
                ||instrDate=="T15"+g_dataSeparator+"12"+g_dataSeparator+"50"
                ||instrDate=="145"+g_dataSeparator+"07"+g_dataSeparator+"50"
                ||instrDate=="M45"+g_dataSeparator+"07"+g_dataSeparator+"50"
                ||instrDate=="201"+g_dataSeparator+"07"+g_dataSeparator+"50"
                ||instrDate=="T01"+g_dataSeparator+"07"+g_dataSeparator+"50") {
               return m_DateException;
      }
      // 日付が"301.12.25/S01.12.25"の場合
      else if (instrDate=="301"+g_dataSeparator+"12"+g_dataSeparator+"25"
               ||instrDate=="S01"+g_dataSeparator+"12"+g_dataSeparator+"25") {
                iWarekiCheckFlag = 1;
                strCheckDate = "19261250";
      }
      // 日付が"145.07.30/M45.07.30"の場合
      else if (instrDate=="145"+g_dataSeparator+"07"+g_dataSeparator+"30"
               ||instrDate=="M45"+g_dataSeparator+"07"+g_dataSeparator+"30") {
                iWarekiCheckFlag = 1;
                strCheckDate = "19120750";
      }
      // GYY.MM.不(頃、上、中、下）とYYY.MM.不(頃、上、中、下）の場合
      else if (AZI_ChkStr(AZI_SubString(instrDate, 1, 3),ALLOWCHAR_NUMS)
                    && (instrDate.indexOf(g_dataSeparator) == 3)
                    && (instrDate.lastIndexOf(g_dataSeparator) == 6)) {
           iWarekiCheckFlag = 1;    
           // 上記で元号情報が取得できない場合、チェックフラグの初期値＝1(日付として異常）を返却する。
           // 元号番号を取得
           strGengoBangou = AZI_SubString(instrDate,0,1)
           // 開始日を取得
           strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
           // 終了日を取得
           strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
           if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
              return m_DateException;
           }
           strCheckDate = AZI_CheckAimaiDate9Byte(instrDate,strFymd,strTymd); 
                
      }
      // 日付が"GYY.MM.DDとYYY.MM.DD"の場合
      else {
         // 上記で元号情報が取得できない場合、チェックフラグの初期値＝1(日付として異常）を返却する。
         iWarekiCheckFlag = 1;   
         // 元号番号を取得
         strGengoBangou = AZI_SubString(instrDate,0,1)
         // 開始日を取得
         strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
         // 終了日を取得
         strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
         if (AZI_StrIsEmpty(strFymd) || AZI_StrIsEmpty(strTymd)) {
              return m_DateException;
         }
         strCheckDate = AZI_SeirekiNendoSyutoku(strFymd,instrDate)
                   +AZI_SubString(instrDate, 4, 6)+AZI_SubString(instrDate, 7, 9);
      }
      break;
   // １０バイト（例：YYYY.MM.DD、YYYY.MM.不）
   case 10:
      strCheckDate = AZI_CheckAimaiDate10Byte(instrDate);
      break;
   default:
      return m_DateException;            
  }
  // ５．フラグ妥当性のチェック
  var strInputSeireki = strCheckDate;  // 入力西暦
  var strYYYY = AZI_SubString(strCheckDate, 0, 4);
  var strMM = AZI_SubString(strCheckDate, 4, 6);
  var strDD = AZI_SubString(strCheckDate, 6, 8);
  if (AZI_CheckAimaiDateDatou(strYYYY, strMM, strDD, p_sKuuranFlag,
                p_sFusyouFlag,p_sSkotoFlag, p_sSyun)) {
        return m_DateException;
  }
  // ６．YYYY='9999'の場合、チェックフラグ=0を返却する。
  if (strYYYY=="9999") {
     return m_Normal;
  }
  // ７．曖昧日付を通常の日付に置き換えて、基盤の日付チェック関数でチェックする。
  // MMが以下の場合、一旦置き換える。
  if (strMM=="00"||strMM=="99"||strMM=="80"||
       strMM=="90"||strMM=="89"||strMM=="70") {
       strMM = "01";
   }
   // DDが以下の場合、一旦置き換える。 
   if (strDD=="00"||strDD=="99"||strDD=="80"||
       strDD=="81"||strDD=="82"||strDD=="90"||
       strDD=="89"||strDD=="70"||strDD=="71") {
       strDD = "01";
   }
   else if (strDD=="83"||strDD=="73") {
            strDD = "20";
   }
   else if (strDD=="72") {
            strDD = "10";        
   }
   var strEnzanSeireki = strYYYY + strMM + strDD; // 演算西暦
   // 以下の日付の場合、一旦置き換える。
   if (strCheckDate=="19261250") {
      strEnzanSeireki = "19261225";
   }
   else if (strCheckDate=="19120750") {
      strEnzanSeireki = "19120730";
   }
   // 置き換えたYYYYMMDDで基盤の日付チェック関数を呼び出す。
   if (!AZI_CheckSDate(strEnzanSeireki)) {
       return m_DateException;
   }
   // ８．和暦の範囲外チェック
   strGengoBangou = AZI_SubString(p_sInputDate, 0, 1);
   // 開始日を取得
   strFymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_fymd);
   // 終了日を取得
   strTymd = AZI_GetNendoInfo(strGengoBangou,m_igengoInfo_tymd);
   if (iWarekiCheckFlag == 1&& !AZI_StrIsEmpty(strFymd)) {
      // 入力西暦後ろ2桁
      var strInputSeirekiLast2 = AZI_SubString(strInputSeireki, 6, 8);
      iCheckFlag = AZI_CheckAimaiDateHanniSoto(strFymd,strTymd,strEnzanSeireki,
                        strInputSeireki,strInputSeirekiLast2);
   }
   return iCheckFlag;
}  

//check曖昧日付6バイト
function AZI_CheckAimaiDate6Byte(
  p_sInputDate,   // 入力日付	
  p_sInputFymd,   // 開始日
  p_sInputTymd    // 終了日
){
  var strOUTDate = p_sInputDate;
  var strTY = AZI_SubString(p_sInputTymd, 0, 4);  //終了年度
  // 取得した元号情報（開始年度。例：19890108)の先頭４桁 ＋ 入力データの日付の２桁目から２文字 -1
  var iTY = parseInt(AZI_SeirekiNendoSyutoku(p_sInputFymd, p_sInputDate),10);
  // <取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 => YYYY>の場合
  if (iTY <= parseInt(strTY,10)) {
         strOUTDate = iTY.toString() + "7000";
  }
  // 以上以外の場合
  else {
         strOUTDate = iTY.toString() + "8000";
  }
      return strOUTDate;
}

// check曖昧日付7バイト1
function AZI_CheckAimaiDate7Byte1(
  p_sInputDate,   // 入力日付	
  p_sInputFymd,   // 開始日
  p_sInputTymd    // 終了日
){

   var strOUTDate = p_sInputDate;
   var strTY = AZI_SubString(p_sInputTymd, 0, 4);  //終了年度の取得
   // 取得した元号情報の<gengo-fymd>（開始年度。例：19890108)の先頭４桁 ＋
   // 入力データの日付の２桁目から２文字  - 1
   var iTY = parseInt(AZI_SeirekiNendoSyutoku(p_sInputFymd, p_sInputDate),10);
   // <取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 = YYYY>の場合 　且つ
   // <日付の４桁目から２文字分（MM部分）が'  '>　の場合
   if (iTY == parseInt(strTY,10)&& AZI_SubString(p_sInputDate, 4, 6) =="  ") {
       strOUTDate = iTY.toString()+"9000";
   }else{
      var strMM = AZI_EditStr_PRIZE(AZI_SubString(p_sInputDate, 4, 6))
      if(parseInt(strTY,10)>=iTY){
          strOUTDate = iTY.toString()+strMM+"90";
      }else{
          strOUTDate = iTY.toString() + strMM + "00";
      }
   }
   return strOUTDate;
}
// check曖昧日付7バイト2
function AZI_CheckAimaiDate7Byte2(
  p_sInputDate,   // 入力日付	
  p_sInputFymd,   // 開始日
  p_sInputTymd    // 終了日
){
   var strOUTDate = p_sInputDate;
   var strTY = AZI_SubString(p_sInputTymd, 0, 4);  //終了年度の取得
   // 取得した元号情報の<gengo-fymd>（開始年度。例：19890108)の先頭４桁 ＋
   // 入力データの日付の２桁目から２文字  - 1
   var iTY = parseInt(AZI_SeirekiNendoSyutoku(p_sInputFymd, p_sInputDate),10);
   // <取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 => YYYY>の場合
   var strMMDD = AZI_SubString(p_sInputDate, 3, 7);
   if (iTY <= parseInt(strTY,10)) {
      // MMDD部分が0000と9000の場合
      if (strMMDD =="0000"||strMMDD =="9000") {
           strOUTDate = iTY.toString() +  "9000";
      }
      // MMDD部分が9999と8999の場合
      else if (strMMDD =="9999"||strMMDD =="8999") {
           strOUTDate = iTY.toString() +  "8999";
      }
       // MMDD部分が8000と7000の場合
      else if (strMMDD =="8000"||strMMDD =="7000") {
           strOUTDate = iTY.toString() +  "7000";  
      } 
      else {
          // DD部分が00と90の場合
          var strDD = AZI_SubString(p_sInputDate, 5, 7);
                if (strDD=="00"||strDD=="90") {
                    strDD = "90";
                }
                // DD部分が99の場合
                else if (strDD=="99") {
                    strDD = "89";
                }
                // DD部分が80の場合
                else if (strDD=="80") {
                    strDD = "70";
                }
                // DD部分が81の場合
                else if (strDD=="81") {
                    strDD = "71";
                }
                // DD部分が82の場合
                else if (strDD=="82") {
                    strDD = "72";
                }
                // DD部分が83の場合
                else if (strDD=="83") {
                    strDD = "73";
                }
                strOUTDate = iTY.toString() + AZI_SubString(p_sInputDate, 3, 5) + strDD;
      }
   }
   else {
            strOUTDate = iTY.toString() + strMMDD;
   }
   return strOUTDate;
}
// check曖昧日付8バイト
function AZI_CheckAimaiDate8Byte(
  p_sInputDate,   // 入力日付	
  p_sInputFymd,   // 開始日
  p_sInputTymd    // 終了日
){
  var strOUTDate = p_sInputDate;
  var strTY = AZI_SubString(p_sInputTymd, 0, 4);  //終了年度の取得
  // 取得した元号情報の<gengo-fymd>（開始年度。例：19890108)の先頭４桁 ＋
  // 入力データの日付の２桁目から２文字  - 1
  var iTY = parseInt(AZI_SeirekiNendoSyutoku(p_sInputFymd, p_sInputDate),10);
  // <取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 => YYYY>の場合
  if (iTY <= parseInt(strTY,10)) {
     strOUTDate = iTY.toString() + "8999";
  }else{
     strOUTDate = iTY.toString() + "9999";
  }
  return strOUTDate;
}
//文字列編集
//先頭から指定された文字を削除する
//例： 00000123 → 123
function AZI_DelStr(
	in_str, //対象文字列
	del_str //削除文字列
){
	var i;
	
	for( i=0 ; i< in_str.length ; i++ ){
		if( in_str.charAt(i) != del_str ){
			break;
		}
	}

	return in_str.substring( i, in_str.length );
}
// check曖昧日付9バイト
function AZI_CheckAimaiDate9Byte(
  p_sInputDate,   // 入力日付	
  p_sInputFymd,   // 開始日
  p_sInputTymd    // 終了日
){
 var strOUTDate = p_sInputDate;
 var strTY = AZI_SubString(p_sInputTymd, 0, 4);  //終了年度の取得
 // 取得した元号情報の<gengo-fymd>（開始年度。例：19890108)の先頭４桁 ＋
 // 入力データの日付の２桁目から２文字  - 1
 var strYYYY = AZI_SeirekiNendoSyutoku(p_sInputFymd, p_sInputDate);
 // 取得した元号情報の<gengo-tymd>（終了年度。例：19890107)の先頭４桁 => YYYY>の場合
 var strDD = AZI_SubString(p_sInputDate, 7, 9);
 if(parseInt(strYYYY,10)<= parseInt(strTY,10)){
    // 日付の後ろの文字が不
    if (p_sInputDate.indexOf("不") == 7) {
          strDD = "89";
    }
    // 日付の後ろの文字が頃
    else if (p_sInputDate.indexOf("頃") == 7) {
          strDD = "70";
    }
    // 日付の後ろの文字が上
    else if (p_sInputDate.indexOf("上") == 7) {
          strDD = "71";
    }
    // 日付の後ろの文字が中
    else if (p_sInputDate.indexOf("中") == 7) {
          strDD = "72";
    }
    // 日付の後ろの文字が下
    else if (p_sInputDate.indexOf("下") == 7) {
          strDD = "73";
    }
 }
 // 以外の場合
 else {
     // 日付の後ろの文字が不
    if (p_sInputDate.indexOf("不") == 7) {
          strDD = "99";
    }
    // 日付の後ろの文字が頃
    else if (p_sInputDate.indexOf("頃") == 7) {
          strDD = "80";
    }
    // 日付の後ろの文字が上
    else if (p_sInputDate.indexOf("上") == 7) {
          strDD = "81";
    }
    // 日付の後ろの文字が中
    else if (p_sInputDate.indexOf("中") == 7) {
          strDD = "82";
    }
    // 日付の後ろの文字が下
    else if (p_sInputDate.indexOf("下") == 7) {
          strDD = "83";
    }
 }
  strOUTDate = strYYYY + AZI_SubString(p_sInputDate, 4, 6) + strDD;
  return strOUTDate;
}

// check曖昧日付10バイト
function AZI_CheckAimaiDate10Byte(
  p_sInputDate,   // 入力日付	
  p_sInputFymd,   // 開始日
  p_sInputTymd    // 終了日
){
  var strOUTDate = p_sInputDate;
  var strYYYY = AZI_SubString(p_sInputDate, 0, 4);
  var strMM = AZI_SubString(p_sInputDate, 5, 7).replace(/ /g, "0");
  var strDD = AZI_SubString(p_sInputDate, 8, 10).replace(/ /g, "0");
   if (AZI_ChkStr(strYYYY, ALLOWCHAR_NUMS)
                && AZI_ChkStr(strMM, ALLOWCHAR_NUMS)
                && (p_sInputDate.indexOf(g_dataSeparator) == 4)
                && (p_sInputDate.lastIndexOf(g_dataSeparator) == 7)) {
      if (AZI_ChkStr(strDD, ALLOWCHAR_NUMS)) {
                strOUTDate = strYYYY + strMM + strDD;
      }
      else {
          // 日付の後ろの文字が不
          if (p_sInputDate.indexOf("不") == 8) {
              strOUTDate = strYYYY + strMM + "99";
          }
          // 日付の後ろの文字が頃
          else if (p_sInputDate.indexOf("頃") == 8) {
              strOUTDate = strYYYY + strMM + "80";
          }
          // 日付の後ろの文字が上
          else if (p_sInputDate.indexOf("上") == 8) {
              strOUTDate = strYYYY + strMM + "81";
          }
          // 日付の後ろの文字が中
          else if (p_sInputDate.indexOf("中") == 8) {
              strOUTDate = strYYYY + strMM + "82";
          }
          // 日付の後ろの文字が下
          else if (p_sInputDate.indexOf("下") == 8) {
              strOUTDate = strYYYY + strMM + "83";
          }
      }          
   }
   return strOUTDate;
}

//check曖昧日付妥当性
function AZI_CheckAimaiDateDatou(
  p_sInputYYYY,    //YYYY
  p_sInputMM,     // MM
  p_sInputDD,     // DD
  p_sKuuranFlag,  // 空欄フラグ
  p_sFusyouFlag,  // 不詳フラグ
  p_sSkotoFlag,   // 頃フラグ
  p_sSyun         // 旬フラグ
 ) {
  // 空欄フラグ = 0
   if (p_sKuuranFlag == "0") {
       if (p_sInputYYYY =="0000"||p_sInputMM =="00"||p_sInputMM =="90"||
           p_sInputDD =="00"||p_sInputDD =="90") {
                return true;
       }
   }
   // 空欄フラグ = 2
   else if (p_sKuuranFlag == "2") {
           if (p_sInputYYYY =="0000") {
                return true;
           }
   }
   // 空欄フラグ が上記以外(日で許可)の場合
   else {
           if (p_sInputYYYY =="0000"||p_sInputMM =="00"||p_sInputDD =="90") {
                return true;
           }
   }
   // 不詳フラグ = 0
   // GPRIME-基盤-N-1025 修正開始
   if (p_sFusyouFlag=="0") {
           if (p_sInputDD=="99"||p_sInputDD=="89") {
                return true;
           }
           else if (p_sInputMM=="99"||p_sInputMM=="89") {
                return true;
           }
   }
   // 不詳フラグ上記以外(日で許可)
   else if (p_sFusyouFlag!="2" && p_sFusyouFlag!="1") {
           if (p_sInputMM=="99"||p_sInputDD=="89") {
                return true;
           }
   }
   // GPRIME-基盤-N-1025 修正終了
   // 頃フラグ = 0
   if (p_sSkotoFlag=="0") {
           if (p_sInputMM=="80"||p_sInputDD=="80"||p_sInputMM=="70"||p_sInputDD=="70") {
                return true;
           }
        }
   else if (p_sSkotoFlag!="2") {
           if (p_sInputMM=="80"||p_sInputMM=="70") {
                return true;
            }
   }
   // 旬フラグ = 0
   if (p_sSyun=="0") {
        if (p_sInputDD=="81"||p_sInputDD=="82"||p_sInputDD=="83"
           ||p_sInputDD=="71"||p_sInputDD=="72"||p_sInputDD=="73") {
                return true;
        }
   }
   return false;
}

// check曖昧Date範囲外
function AZI_CheckAimaiDateHanniSoto(
  p_strInputTymd,     // 開始日
  p_strInputFymd,    // 終了日
  p_strInputEnzanSeireki,  // 演算西暦
  p_strInputSeireki,  //入力西暦
  p_strInputSeirekiLast2 //入力西暦後ろ2桁
){
  var strzYYYYMMDD = "";
  var strzFYYYYMMDD = "";
  var strzTYYYYMMDD = "";
  if (p_strInputEnzanSeireki!="19261225"&& p_strInputEnzanSeireki!="19120730") {
     // 演算西暦＝入力西暦と入力西暦の後ろ2桁=81/82/83/71/72/73の場合
     if(p_strInputSeireki==p_strInputEnzanSeireki||
        p_strInputSeirekiLast2=="81"||p_strInputSeirekiLast2=="82"||
        p_strInputSeirekiLast2=="83"||p_strInputSeirekiLast2=="71"||
        p_strInputSeirekiLast2=="72"||p_strInputSeirekiLast2=="73"){
          strzYYYYMMDD = p_strInputEnzanSeireki;
          strzFYYYYMMDD = p_strInputTymd;
          strzTYYYYMMDD = p_strInputFymd;
     }// 演算西暦(6桁)＝入力西暦(6桁）
     else if (AZI_SubString(p_strInputEnzanSeireki, 0, 6)==AZI_SubString(p_strInputSeireki, 0, 6)) {
             strzYYYYMMDD = AZI_SubString(p_strInputEnzanSeireki, 0, 6) + "01";
             strzFYYYYMMDD = AZI_SubString(p_strInputTymd, 0, 6)+ "00";
             strzTYYYYMMDD = AZI_SubString(p_strInputFymd, 0, 6)+"99";
    }
    // 演算西暦(4桁)＝入力西暦(4桁）
    else if (AZI_SubString(p_strInputEnzanSeireki, 0, 4)==AZI_SubString(p_strInputSeireki, 0, 4)) {
             strzYYYYMMDD = AZI_SubString(p_strInputEnzanSeireki, 0, 4) + "0101";
             strzFYYYYMMDD = AZI_SubString(p_strInputTymd, 0, 4)+ "0000";
             strzTYYYYMMDD = AZI_SubString(p_strInputFymd, 0, 4)+"9999";
    }
    // チェック
    if (parseInt(AZI_SubString(strzYYYYMMDD, 0, 4),10) < parseInt(AZI_SubString(strzFYYYYMMDD, 0, 4),10)
        ||parseInt(AZI_SubString(strzTYYYYMMDD, 0, 4),10) < parseInt(AZI_SubString(strzYYYYMMDD, 0,4),10)) {
                return m_DateException;
     }
    else if (parseInt(strzYYYYMMDD,10) < parseInt(strzFYYYYMMDD,10)
                    || parseInt(strzTYYYYMMDD,10) < parseInt(strzYYYYMMDD,10)) {
                return m_WarekiException;
     }
  }
    return m_Normal;
}

// パラメータとしてチェックモード、曖昧日付ルールより曖昧日付チェックを行う。 
// return message メッセージの付加情報
function checkVagueDate(
  pCheckMode,  // チェックモード
  pValue       // チェック対象の値
){
  var message = null;
   switch (pCheckMode) {
        case 0:
            if (0 != AZI_CheckDate(pValue)) {
                message = new String("（空欄、不詳、頃、旬を許可しません）");
            }
            break;
        case 1:
            if (0 != AZI_CheckKuuranDate(pValue)) {
                message = new String("（不詳、頃、旬を許可しません）");
            }
            break;
        case 2:
            if (0 != AZI_CheckFushoDate(pValue)) {
                message = new String("（頃、旬を許可しません）");
            }
            break;
        case 3:
            if (0 != AZI_CheckFugoroDate(pValue)) {
                message = new String("（旬を許可しません）");
            }
            break;
        case 4:
            if (0 != AZI_CheckFugoroJunDate(pValue)) {
                message = new String("");
            }
            break;
        case 5:
            if (0 != AZI_CheckSenengappi(pValue)) {
                message = new String("（空欄、頃、旬を許可しません）");
            }
            break;
        default:
            break;
        }
        return message;
}
// check日付
// 実際の処理は、check曖昧日付で行い、本メソッドはパラメータを与えるのみ。
// 和暦、西暦の曖昧日付をチェックする。
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
function AZI_CheckDate(
  p_sInputDate   // 入力日付	
){
  var checkFlag = AZI_CheckAimaiDate(p_sInputDate,0,0,0,0);
  return checkFlag;
}

// check空欄日付
// 実際の処理は、check曖昧日付で行い、本メソッドはパラメータを与えるのみ。
// 和暦、西暦の曖昧日付をチェックする。
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
function AZI_CheckKuuranDate(
  p_sInputDate   // 入力日付	
){
  var checkFlag = AZI_CheckAimaiDate(p_sInputDate,2,0,0,0);
  return checkFlag;
}

// check不詳日付
// 実際の処理は、check曖昧日付で行い、本メソッドはパラメータを与えるのみ。
// 和暦、西暦の曖昧日付をチェックする。
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
function AZI_CheckFushoDate(
  p_sInputDate   // 入力日付	
){
  var checkFlag = AZI_CheckAimaiDate(p_sInputDate,2,1,0,0);
  return checkFlag;
}

// check不頃日付
// 実際の処理は、check曖昧日付で行い、本メソッドはパラメータを与えるのみ。
// 和暦、西暦の曖昧日付をチェックする。
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
function AZI_CheckFugoroDate(
  p_sInputDate   // 入力日付	
){
  var checkFlag = AZI_CheckAimaiDate(p_sInputDate,2,1,2,0);
  return checkFlag;
}

// check不頃旬日付
// 実際の処理は、check曖昧日付で行い、本メソッドはパラメータを与えるのみ。
// 和暦、西暦の曖昧日付をチェックする。
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
function AZI_CheckFugoroJunDate(
  p_sInputDate   // 入力日付	
){
  var checkFlag = AZI_CheckAimaiDate(p_sInputDate,2,1,2,3);
  return checkFlag;
}

// check生年月日
// 実際の処理は、check曖昧日付で行い、本メソッドはパラメータを与えるのみ。
// 和暦、西暦の曖昧日付をチェックする。
// 日付がNULL、0000000 、00000000の場合はチェックを行わず０を返却する。
function AZI_CheckSenengappi(
  p_sInputDate   // 入力日付	
){
  var checkFlag = AZI_CheckAimaiDate(p_sInputDate,0,2,0,0);
  return checkFlag;
}
//【ルール】指定位置により文字列を取得する。 
// 対象文字列はnull又は""の場合、""を返却する。
// 開始位置 ≧ 終了位置、終了位置 ≦ 0、開始位置 ≧ 対象文字列の長さの場合、""を返却する。
// 開始位置 ≦ 0の場合、開始位置は0と見られる。 
// 終了位置 ≧ 対象文字列の長さの場合、終了位置は対象文字列の長さと見られる。 
function  AZI_SubString(
          p_oldString,
          p_sIndex,
          p_eIndex){
        var stroldString = p_oldString;
        var isIndex = p_sIndex;
        var ieIndex = p_eIndex;
        if (p_oldString == null) {
            return "";
        }
        if (p_oldString=="") {
            return "";
        }
        if (p_sIndex >= p_eIndex || p_eIndex <= 0 || p_sIndex >= p_oldString.length) {
            return "";
        }

        if (p_sIndex < 0) {
            isIndex = 0;
        }
        if (p_eIndex >= p_oldString.length) {
            ieIndex = p_oldString.length;
        }
        stroldString = p_oldString.substring(isIndex, ieIndex);
        return stroldString;
    }
function AZI_GetNendoInfo(
	p_strGenGou, //元号
	p_iInfo //元号情報
	){
	   var sGenGouInfo = "";
	   var iGengou = 0;
	   //p_strGenGouは英字のとき
	   if(AZI_ChkStr(p_strGenGou,ALLOWCHAR_ALPHS)){
		   if (p_strGenGou == "M"||p_strGenGou == "m") {
			   iGengou = 1;}
		   else if(p_strGenGou == "T"|| p_strGenGou == "t"){
			   iGengou = 2;
		   }else if(p_strGenGou == "S"|| p_strGenGou == "s"){
			   iGengou = 3;
		   }else if(p_strGenGou == "H"|| p_strGenGou == "h"){
			   iGengou = 4;
		   }
	　　} else if(AZI_ChkStr(p_strGenGou,ALLOWCHAR_NUMS)){
		   iGengou = parseInt(p_strGenGou,10);
		} 
	   if(iGengou>=1 && iGengou<=4 && p_iInfo>=0 && p_iInfo<=11){
		   //元号情報を取得する
		   var arrBuf = prize_arrNendo[iGengou-1].split(",") ;
		   sGenGouInfo = arrBuf[p_iInfo]
		   }
		return  sGenGouInfo;  
	}

//日付用の文字列編集
// " 1"→"01","1"→"01"と編集する
function AZI_EditStr_PRIZE(
	in_str
){
	var strBuf = in_str;
	
	if( 1 == in_str.length ){
		strBuf = "0" + in_str;
	}
	else if( 2 == in_str.length ){
		if( " " == in_str.charAt(0) ){
			strBuf = "0" + in_str.charAt(1);
			strBuf = strBuf.replace(/ /g,"0");
		}
	}
	else if(3 >= in_str.length){
	    strBuf =AZI_SubString(in_str,in_str.length-2,in_str.length);
	    strBuf = strBuf.replace(/ /g,"0");
	}
	
	return strBuf;
}	
//文字列編集
// 指定した英字を第二引数で選択した形式（小文字、大文字）に変換する
// in_str 変換する英字
// changType 変換の種類:0：小文字を大文字に変換
//                      1：大文字を小文字に変換
function AZI_EditAlphabet(
	in_str, //変換する英字
	changType // 変換の種類
){
	var stroutPDate = "";
	// 入力データ≠nullの場合
	if(!AZI_StrIsEmpty(in_str)){
		if( 0 == changType ){
	  	   stroutPDate = in_str.toUpperCase() ;
	    }
	    else if( 1 == changType ){
		   stroutPDate = in_str.toLowerCase() ;
	    }
	    else {
		   AZS_SetAbtErr2( "AZI_EditAlphabet", "変換の種類が不正です。" );
	    }
	}
	return stroutPDate;
}

// Empty checks	
// Checks if a String is empty ("") or null.	                                                                 
// isEmpty(null)      = true
// isEmpty("")        = true
// isEmpty(" ")       = false
// isEmpty("bob")     = false
// isEmpty("  bob  ") = false
function AZI_StrIsEmpty(
	p_Inputstr //入力文字列	
	){
	return p_Inputstr == null || p_Inputstr.length == 0;
	}
	//指定長さにより、カナ・漢字項目： 左詰め、残り空白埋め 
//金額・件数項目： 右詰め、前ゼロ埋め
//return strText = "" 又は strText = nullの場合、
//                    X型：指定長さの半角空白 
//                    N型：指定長さ/2の全角空白
//strText = "" 又は strText = null以外場合、指定長さの埋め後結果
function AZI_paddingString(
    p_strText,  //テキスト内容
    p_strType,  //テキスト型
    p_lenString //テキスト長
    ) {
        var intLen = 0;
        var strRecord = "";
        var strTemp = "";
        //X： 1ﾊﾞｲﾄ文字
        if (p_strType=="X") {
            if (AZI_StrIsEmpty(p_strText)) {
                for (intLen = 0; intLen <= p_lenString - 1; intLen++) {
                    strRecord = strRecord + " ";
                }
            }
            else {
                var bytLineLength = AZI_bytelength(p_strText);
                if (bytLineLength > p_lenString) {
                    strRecord = p_strText;
                }
                else {
                    for (intLen = 0; intLen < p_lenString - bytLineLength; intLen++) {
                        strTemp = strTemp + " ";
                    }
                    strRecord = p_strText + strTemp;
                }
            }
        }
        //Ｎ： 2ﾊﾞｲﾄ文字
        if (p_strType=="N") {
            if (AZI_StrIsEmpty(p_strText)) {
                for (intLen = 0; intLen <= p_lenString / 2 - 1; intLen++) {
                    strRecord = strRecord + "　";
                }
            }
            else {
                strRecord = p_strText;
                if (p_strText.length > p_lenString / 2) {
                    strRecord = p_strText.substring(0, p_lenString / 2);
                }
                else {
                    for (intLen = 0; intLen < p_lenString / 2 - p_strText.length; intLen++) {
                        strTemp = strTemp + "　";
                    }
                    strRecord = p_strText + strTemp;
                }
            }
        }
        return strRecord;
    }
 //  チェック用文字列(数字)
function AZI_CheckNums(
 p_strText  //テキスト内容
){
　var reNums = /^\d+$/;
  p_strText.value =  reNums.test(p_strText.value);
}  
// 西暦日付チェック
// YYYYMMDD 形式 or YYYY/MM/DD(YYYY.MM.DD) 形式
function AZI_CheckSDate(
	p_sInputDate   // 入力日付	
){
	if( 0 == p_sInputDate ){
		return true;// NULLならなにもしない
	}
 	//文字列編集
	var strBuf = p_sInputDate;
	strBuf = AZI_DelStr( strBuf, " " );//先頭のスペースを削除
	strBuf = AZI_DelTailStr( strBuf, " " );//末尾のスペースを削除
	var arrBuf = strBuf.split(g_dataSeparator);
	if( arrBuf.length > 1 ){
		for( i=0 ; i< 4 - arrBuf[0].length ; i++ ){
			strBuf = "0" + strBuf;
		}
	}
	// 西暦日付チェック
	bRet = false ;
	if( 8 > strBuf.length ){
		if( AZI_ChkS( strBuf ) ){
			bRet = true ;
		}
	}
	// 編集してチェック
	var str ;
	if( !bRet ){
		if( str = AZI_InSDate( strBuf, 0 ) ){
			if( AZI_ChkS( str ) ){
				bRet = true ;
			}
		}
	}
	if( !bRet ){
		return false;
	}
	else {
		return true;
	}
}  
//日付編集形式を設定します
function AZC_SetDateFormateType_PRIZE() {
	//ドット形式
	g_dataSeparator = ".";
	m_skoro=".頃";
    m_fusyou = ".不詳";
    reTime =/[.]/g;
}
// 統基618-依01-曖昧日付関数（JS）の基盤取込み 　END　2009/8/5


// サニタイジング編集
// 指定した文字配列中の文字を、以下のようにエンティティ参照に変換します。
// 
// &lt; -> &amp;lt;
// &gt; -> &amp;gt;
// &amp; -> &amp;amp;
// &quot; -> &amp;quot;
// 
function AZI_EscapeCharacterData(
	p_instr
){
	var strBuf = "";
	var chr = "";
	var i = 0;
	
	for( i = 0 ; i < p_instr.length ; i++ ){
		chr = p_instr.charAt(i);
		if ("<" == chr) {
			chr = "&lt;";
		}
		else if (">" == chr) {
			chr = "&gt;";
		}
		else if ("&" == chr) {
			chr = "&amp;";
		}
		else if ("\"" == chr) {
			chr = "&quot;";
		}
		strBuf = strBuf + chr;
	}

	return strBuf;
}
// 20100227 統基729-依01-画面起動制御の機能強化　ADD START
//---------------------------------
// ダイアログ起動位置を取得する。
//---------------------------------
var dialogLeft;
var dialogTop;
function getDialogPosiInfo(dlgDispMode,dlgDispValueX,dlgDispValueY,dWidth, dHeight) {
	if (dlgDispMode == 0) {
		dialogLeft = '';
		dialogTop = '';
	}
	else if (dlgDispMode == 1) {
		dialogLeft = dlgDispValueX;
		dialogTop = dlgDispValueY;
	}
	else {
		dialogLeft = dWidth;
		dialogTop = dHeight;
	}
}
// 20100227 統基729-依01-画面起動制御の機能強化　ADD END	

// 統基745-依01-ウィンドウクローズ制御 ADD START
// ウィンドウ「×」ボタンの無効化機能
function AZS_WinButtonControlActiveX(functionName, winButtonControl) {
        if (winButtonControl == '0') {
            var gprimeocxObj = document.getElementById("GprimeOCX");
	        if( null == gprimeocxObj ){
	            AZI_SetAbort( functionName, "ActiveXオブジェクト(GprimeOCX)が定義されていません。" ) ;
	            window.top.close();
	            return;
	        }
	        try {
				gprimeocxObj.ignoreClose(1);
	        }
	        catch (e) {
	            AZI_SetAbort( functionName, "「×」ボタンを無効にできません。ActiveXオブジェクト(GprimeOCX)が最新かをご確認してください。" ) ;
	            window.top.close();
	            return;
	        }
        }
}
// ダイアログ・ウィンドウ「×」ボタンの無効化機能
function AZS_DialogWinButtonControlActiveX(functionName, winButtonControl) {
        if (winButtonControl == '0') {
            var gprimeocxObj = document.getElementById("GprimeOCX");
	        if( null == gprimeocxObj ){
	            AZI_SetAbort( functionName, "ActiveXオブジェクト(GprimeOCX)が定義されていません。" ) ;
	            window.top.close();
	            return;
	        }
	        try {
		    gprimeocxObj.disableSysMenu(3, 1);
	        }
	        catch (e) {
	            AZI_SetAbort( functionName, "「×」ボタンを無効にできません。ActiveXオブジェクト(GprimeOCX)が最新かをご確認してください。" ) ;
	            window.top.close();
	            return;
	        }
        }
}
// 統基745-依01-ウィンドウクローズ制御 ADD END

// 20100309 統基755-依01-手順ボックススクロール位置の保存 ADD START
// グルーピングのスクロール情報保存
function AZS_SaveShtScroll() {
	// グルーピングシート部品の取得
	var tableObject = document.getElementsByTagName("table");
	for( var i = 0; i < tableObject.length; i++ ) {
		// TABLEシート
		if (tableObject[i].className != "azsht") {
			continue;
		}
		// シートのDIVタグ場合
		if (tableObject[i].parentNode.tagName.toLowerCase() == "div" &&
			tableObject[i].parentNode.className.toLowerCase() == "azsht_inner") {
			if (tableObject[i].parentNode.id != null &&
				tableObject[i].parentNode.id.length != 0) {
				// 重複なIDを除く
				var exit = 0;
				var srlid = tableObject[i].parentNode.id;
				// 論理画面単位に同一ために、論理プロセスIDを追加する。
				// ダイアログの場合、いらない。
				if (parent.azlProcessId != undefined) {
					srlid = parent.azlProcessId + "." + srlid;
				}
				for (var j = 0; j < parent.shtItemIdArr.length; j++) {
					if (parent.shtItemIdArr[j] == srlid) {
						// 最新位置設定
						parent.shtScrollLeftArr[j] = tableObject[i].parentNode.scrollLeft;
						parent.shtScrollTopArr[j] = tableObject[i].parentNode.scrollTop;
						exit = 1;
						break;
					}
				}
				if (exit == 1) {
					continue;
				}
				// id、scrollLeft、scrollTopの保存
				parent.shtItemIdArr.push(srlid);
				parent.shtScrollLeftArr.push(tableObject[i].parentNode.scrollLeft);
				parent.shtScrollTopArr.push(tableObject[i].parentNode.scrollTop);
			}
		}
	}
}

// グルーピングのスクロール情報クリア、或いはリセット
// flag:0 クリア　1　リセット
function AZS_ResetShtScroll(processId, flag) {
	// 論理画面遷移初期化時に、プロセスIDが不正。
	if (processId != "") {
		parent.azlProcessId = processId;
	}
	// リセット
	if (flag == 1) {
		// グルーピングシート部品のスクロール設定
		for (var i = 0; i < parent.shtItemIdArr.length; i++) {
			var srlid = parent.shtItemIdArr[i];
			if (parent.azlProcessId != undefined) {
				var index = srlid.indexOf(".");
				var par = "";
				if (index >= 0) {
					par = srlid.substring(0, index);
					srlid = srlid.substring(index+1, srlid.length);
				}
				if (par != parent.azlProcessId) {
					continue;
				}
			}
			if (document.getElementById(srlid) != null) {
                                // GPRIME-基盤- D-1008手順ボックススクロール位置の保存機能について
				document.getElementById(srlid).scrollLeft = 0;
				document.getElementById(srlid).scrollTop = 0;
				document.getElementById(srlid).scrollLeft = parent.shtScrollLeftArr[i];
				document.getElementById(srlid).scrollTop = parent.shtScrollTopArr[i];
			}
		}
	}
}
// 20100309 統基755-依01-手順ボックススクロール位置の保存 ADD END

// 統基790-依01-処理区分コンボボックスへのショートカット設定
//処理区分コンボボックスにフォーカス設定
function ProcKbnFocus () {

	var obj = top.document.all.item("lbxProcKbn");
	if (obj != null && obj != undefined) {
		if (obj.disabled == true){
			return;
		}
		if(obj.style != null && obj.style.display == "none"){
			return;
		}
		obj.focus();
	}
}
// 統基790-依01-処理区分コンボボックスへのショートカット設定 ADD END

//統基785-依01-ファイルオープン関数、ActiveXの新規作成 追加 開始
//汎用ファイルダウンロードし、直接にオープンする
function AZS_GetFileAndOpenByActive(url,names){
	// GprimeOCXオブジェクトを取得する
	var gprimeocxObj = document.getElementById("GprimeOCX");
	if( null == gprimeocxObj ){
	    AZI_SetAbort( "AZS_GetFileAndOpenByActive", "ActiveXオブジェクト(GprimeOCX)が定義されていません。" ) ;
	    return;
	}
	try {	
	    var j = 0;
	    var files = new Array();
	    for(var i = 0; i < names.length ; i++){
		    if ("," == names.charAt(i)){
			    files[i] = url + names.substring(j,i);	
			    j = i + 1;
				if (gprimeocxObj.DownLoadFileAndOpen(files[i])){
					top.fileOpenFlag = "1";
				}
	 	    }
	    }
	}
	catch (e) {
	    AZI_SetAbort( "AZS_GetFileAndOpenByActive", "ファイルを開けません。ActiveXオブジェクト(GprimeOCX)が最新かをご確認してください。" ) ;
	    return;
	}
}
//格納用の一時フォルダ内にあるファイルを全て削除する
function AZS_DeleteAllTempFile(gprimeocxObj){
	if (fileOpenFlag == "1" && gprimeocxObj != null) {
	    try {
		gprimeocxObj.deleteAllTempFile();
		top.fileOpenFlag = "0";
	    }
	    catch (e) {
	        AZI_SetAbort( "AZS_DeleteAllTempFile", "ファイルを削除できません。ActiveXオブジェクト(GprimeOCX)が最新かをご確認してください。" ) ;
	        return;
	    }
	}
}
//統基785-依01-ファイルオープン関数、ActiveXの新規作成 追加 終了, 


// [Y79]日付（月日）入力編集
function _Proxy_Y79(
	p_oTxt		// 対象
){
	var strBuf = p_oTxt.value;
	
	if (strBuf == "" || strBuf.length != 5) {
            return false;
    }
    else {
        strBuf = "2000"  + g_dataSeparator + strBuf;
    }

	p_oTxt.value = strBuf;
	
	if (_Proxy_Y08(p_oTxt) == true) {
		strBuf = p_oTxt.value
		p_oTxt.value = strBuf.substring(4);
		return true;
	}
	else {
		strBuf = p_oTxt.value
		p_oTxt.value = strBuf.substring(5);
		return false;
	}
}

// [Y80]日付（月日）出力編集
function _Proxy_Y80(
	p_oTxt		// 対象
){
	var strBuf = p_oTxt.value;
	
	if (strBuf == "" || strBuf.length != 4) {
		return false;
	}
	else {
		if (strBuf.length == 4 && strBuf.indexOf(g_dataSeparator) == -1) {
		strBuf = "2000"  + strBuf;
		}
		else {
			strBuf = "2000"  + g_dataSeparator + strBuf;
		}
	}
	
	p_oTxt.value = strBuf;
	
	if (_Proxy_Y09(p_oTxt) == true) {
		strBuf = p_oTxt.value
		p_oTxt.value = strBuf.substring(5);
		return true;
	}
	else {
		strBuf = p_oTxt.value;
		if (strBuf.length == 10) {
			p_oTxt.value = strBuf.substring(5);
		}
		else {
			p_oTxt.value = strBuf.substring(4);
		}
		return false;
	}
}
// 20101123 統基870-依01-バッチファイル一覧ダイアログの機能強化について ADD START
// 明細のスクロール情報保存
function AZS_SaveTableScroll() {
	// 明細部品の取得
	var tableObject = document.getElementsByTagName("table");
	for( var i = 0; i < tableObject.length; i++ ) {
		// シートのTDタグ場合
		if (tableObject[i].parentNode.tagName.toLowerCase() == "div" &&
		        (tableObject[i].parentNode.className.toLowerCase() == "azhlist" ||
			tableObject[i].parentNode.className.toLowerCase() == "azovfydatarea")) {
			if (tableObject[i].parentNode.id != null &&
				tableObject[i].parentNode.id.length != 0) {
				// 重複なIDを除く
				var exit = 0;
				var srlid = tableObject[i].parentNode.id;
				// 論理画面単位に同一ために、論理プロセスIDを追加する。
				    // ダイアログの場合、いらない。
				if (parent.azlProcessId != undefined) {
					srlid = parent.azlProcessId + "." + srlid;
				}
				for (var j = 0; j < parent.tableItemIdArr.length; j++) {
					if (parent.tableItemIdArr[j] == srlid) {
						// 最新位置設定
						parent.tableScrollLeftArr[j] = tableObject[i].parentNode.scrollLeft;
						parent.tableScrollTopArr[j] = tableObject[i].parentNode.scrollTop;
						exit = 1;
						break;
					}
				}
				if (exit == 1) {
					continue;
				}
				// id、scrollLeft、scrollTopの保存
				parent.tableItemIdArr.push(srlid);
				parent.tableScrollLeftArr.push(tableObject[i].parentNode.scrollLeft);
				parent.tableScrollTopArr.push(tableObject[i].parentNode.scrollTop);
			}
		}
	}
}

// グルーピングのスクロール情報クリア、或いはリセット
// flag:0 クリア　1　リセット
function AZS_ResetTableScroll(processId, flag) {
	// 論理画面遷移初期化時に、プロセスIDが不正。
	if (processId != "") {
		parent.azlProcessId = processId;
	}
	// リセット
	if (flag == 1) {
		// グルーピングシート部品のスクロール設定
		for (var i = 0; i < parent.tableItemIdArr.length; i++) {
			var srlid = parent.tableItemIdArr[i];
			if (parent.azlProcessId != undefined) {
				var index = srlid.indexOf(".");
				var par = "";
				if (index >= 0) {
					par = srlid.substring(0, index);
					srlid = srlid.substring(index+1, srlid.length);
				}
				if (par != parent.azlProcessId) {
					continue;
				}
			}
			if (document.getElementById(srlid) != null) {
                                // GPRIME-基盤- D-1008手順ボックススクロール位置の保存機能について
				document.getElementById(srlid).scrollLeft = 0;
				document.getElementById(srlid).scrollTop = 0;
				document.getElementById(srlid).scrollLeft = parent.tableScrollLeftArr[i];
				document.getElementById(srlid).scrollTop = parent.tableScrollTopArr[i];
			}
		}
	}
}
// 20101123 統基870-依01-バッチファイル一覧ダイアログの機能強化について ADD END

// 問題処理票_受入101213_002 ADD START
// ---------------------------------------------------------
// 選択行の外字項目の背景色を全て変更する
// ---------------------------------------------------------
function changeObjColor(){
    var obj = document.getElementsByTagName("OBJECT");
    if (obj != null) {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].id != null && obj[i].id.indexOf("gtx") == 0) {
                var arrTR = AZI_findTR(obj[i]);
                for (var j = 0; j < arrTR.length; j++) {
                    var TR = arrTR[j];
                    // 20110315 Prize向けリリースのスクリプトエラー調査について
                    if (TR == null || TR == undefined) {
                        continue;
                    }
                    var selectedLine = AZC_GetSelectedLine(TR, arrTR.length);
                    var fromobj = TR.getElementsByTagName("OBJECT");
                    if (fromobj != null) {
                        for (var k = 0; k < fromobj.length; k++) {
                            var hidObj = document.getElementsByName(fromobj[k].id.substr(3));
                            if (selectedLine >= hidObj.length) {
                  		return;
			    }
                            if (TR.className.indexOf("azselectedOne") >= 0) {
							    if (hidObj[selectedLine].bgColorSetFlag != "1"){
								    fromobj[j].BACKGROUND_COLOR = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
									fromobj[j].CONTROL_COLOR = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
									hidObj[selectedLine].style.colorRadio = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
									hidObj[selectedLine].style.colorRadio = top.azlGaijiRadioColor[top.azlStyleSheetID - 1];
								}
                                 // 2011/03/01 明細行の選択表示について
                                if (obj[i].USE_FONT == "server" || obj[i].USE_FONT == "client_server"
                                        || obj[i].USE_FONT == "client_server_2" || obj[i].USE_FONT == "client") {
                                    obj[i].Refresh();
                                }
                            }
                            else if (TR.className.indexOf("azselected") >= 0) {
							    if (hidObj[selectedLine].bgColorSetFlag != "1"){
								    fromobj[j].BACKGROUND_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
									fromobj[j].CONTROL_COLOR = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
									hidObj[selectedLine].style.colorCheckBox = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
									hidObj[selectedLine].style.colorCheckBox = top.azlGaijiCheckboxColor[top.azlStyleSheetID - 1];
								}
                                // 2011/03/01 明細行の選択表示について
                                if (obj[i].USE_FONT == "server" || obj[i].USE_FONT == "client_server"
                                        || obj[i].USE_FONT == "client_server_2" || obj[i].USE_FONT == "client") {
                                    obj[i].Refresh();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// 問題処理票_受入101213_002 ADD END


// 問題処理票_受入101213_003 ADD START
// ---------------------------------------------------------
// 選択行の外字項目のフォントサイズを全て変更する
// ---------------------------------------------------------
function changeObjFontsize(){
    var obj = document.getElementsByTagName("OBJECT");
    if (obj != null) {
        for (var i = 0; i < obj.length; i++) {
            // 外字部品の場合
            if (obj[i].id != null && obj[i].id != "gtxlbvSectionAcronym" && obj[i].id != "gtxlbvStaffName" && obj[i].id.indexOf("gtx") == 0) {
                // 外字項目のフォントサイズを変更する
                obj[i].FONT_SIZE = top.azlGaijiFontsize[top.azlFontSize - 1];
                // hidden部品のIDを取得する
                var objId = obj[i].id.substr(3);
                // 外字TEXTAREX、TABLE_TEXTAREX部品の場合
                if (objId.indexOf("txa") == 0 || objId.indexOf("mta") == 0
                   || objId.indexOf(".txa") > 0 || objId.indexOf(".mta") > 0) {
                    var hiddenObj = document.getElementsByName(objId);
                    if (hiddenObj != null && hiddenObj[0].rows != null) {
                        var heightValue = "";

                        if (top.azlGaijiTextareaHeight[top.azlFontSize - 1] != null) {
                            heightValue = hiddenObj[0].rows * top.azlGaijiTextareaHeight[top.azlFontSize - 1];
                        }
                        else {
                            heightValue = hiddenObj[0].rows;
                        }
                        if (top.azlGaijiTani != null) {
                            obj[i].style.height = heightValue.toString() + top.azlGaijiTani;
                        }
                        else {
                            obj[i].style.height = heightValue.toString();
                        }
                        obj[i].style.width = "100%";
                    }
                }
                // 外字TEXT、TABLE_TEXT、TABLE_LABLE、LABLE部品の場合
                else if (objId.indexOf("txt") == 0 || objId.indexOf("mtx") == 0 || objId.indexOf("mlb") || objId.indexOf("lbv") || objId.indexOf(".txt") > 0 || objId.indexOf(".mtx") > 0 || objId.indexOf(".lbv") > 0 || objId.indexOf(".mlb") > 0) {
                    if (top.azlGaijiTextHeight[top.azlFontSize - 1] != null) {
                        if (top.azlGaijiTani != null) {
                            obj[i].style.height = top.azlGaijiTextHeight[top.azlFontSize - 1].toString() + top.azlGaijiTani;
                        }
                        else {
                            obj[i].style.height = top.azlGaijiTextHeight[top.azlFontSize - 1].toString();
                        }
                    }
                }
                // GPRIME-基盤-N-1107修正
                // 問題処理票_受入101014_002 開始
                if (objId.indexOf("lbv") == 0 || obj[i].id.indexOf(".lbv") > 0 || objId.indexOf("mlb") == 0 || obj[i].id.indexOf(".mlb") > 0
                     || objId.indexOf("mtx") == 0 || obj[i].id.indexOf(".mtx") > 0) {
                    var objVlaue = obj[i].GetText();
                    if (objVlaue != null && objVlaue.length != 0) {
                        if (top.azlGaijiTextWidth[top.azlFontSize - 1] != null) {
                        	//DHC画面初期時の外字オブジェクトの広さに合わせるように調整します。もう一個coefを掛けます
                            widthValue = objVlaue.length * (top.azlGaijiTextWidth[top.azlFontSize - 1] * coef * coef);
                        }
                        if (top.azlGaijiTani != null) {
                        	//DHC画面初期時の外字オブジェクトの広さに合わせるように調整します。
                            obj[i].style.width = "100%";
                            var pOffsetWidth = obj[i].offsetWidth;
                        	var no = parseInt(pOffsetWidth/(top.azlGaijiTextWidth[1] * coef));
                        	if (objVlaue.length < no) {
                        		obj[i].style.width = widthValue.toString() + top.azlGaijiTani;
                        	}
                        	else {
                        		obj[i].style.width = "100%";
                        	}
                        }
                        else {
                            obj[i].style.width = widthValue.toString();
                        }
                    }
                }
				// 問題処理票_結合120228_001修正
				else if(objId.indexOf("mtx") == 0 || obj[i].id.indexOf(".mtx") > 0){
				    obj[i].style.width = "99%";
				}
                // 外字TEXT部品の場合 
                else if (objId.indexOf("txt") == 0 || objId.indexOf(".txt") > 0) {
                    var hiddenObj = document.getElementsByName(objId);
                    if (hiddenObj != null && hiddenObj[0].size != null) {
                        var widthValue = "";
                        if (top.azlGaijiTextWidth[top.azlFontSize - 1] != null) {
                            widthValue = hiddenObj[0].size * top.azlGaijiTextWidth[top.azlFontSize - 1];
                        }
                        else {
                            widthValue = hiddenObj[0].size;
                        }
                        if (top.azlGaijiTani != null) {
                            obj[i].style.width = widthValue.toString() + top.azlGaijiTani;
                        }
                        else {
                            obj[i].style.width = widthValue.toString();
                        }
                    }
                }
                else if (objId.indexOf("txa") == 0 || objId.indexOf(".txa") > 0) {
                    var hiddenObj = document.getElementsByName(objId);
                    if (hiddenObj != null && hiddenObj[0].cols != null) {
                        var widthValue = "";
                        if (top.azlGaijiTextareaWidth[top.azlFontSize - 1] != null) {
                            widthValue = hiddenObj[0].cols * top.azlGaijiTextareaWidth[top.azlFontSize - 1];
                        }
                        else {
                            widthValue = hiddenObj[0].cols;
                        }
                        if (top.azlGaijiTani != null) {
                            obj[i].style.width = widthValue.toString() + top.azlGaijiTani;
                        }
                        else {
                            obj[i].style.width = widthValue.toString();
                        }
                    }
                }
                // 2011/03/01 明細行の選択表示について
                if (obj[i].USE_FONT == "server" || obj[i].USE_FONT == "client_server"
                        || obj[i].USE_FONT == "client_server_2" || obj[i].USE_FONT == "client") {
                    obj[i].Refresh();
                }
            }
        }
    };
}
// 問題処理票_受入101213_003 ADD END

//GPRIME-基盤-N-1070 START
// [X38]日付（月日）チェック
function _Proxy_X38(
    p_oTxt        // 対象
){
    var strBuf = p_oTxt.value;
    
    if (p_oTxt != null) {
        if (p_oTxt.tagName == "OBJECT") {
            p_oTxt.value = p_oTxt.GetText();
        }
    }
    if( 0 == p_oTxt.value.length ){
        return true; // NULLならなにもしない
    }
    if (window.top.AZL_NOCHECKFLAG != 0) {
        return true;
    }
    
    //禁則文字チェック（"."、"/"、" "[半角スペース]、"　"[全角スペース]、1-9）
    for(var i = 0 ; i < strBuf.length; i++){
        var code = strBuf.charCodeAt(i);
        if ((46 <= code && code <= 57) || code == 32 || code == 12288 ) {
        }else{
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0101" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
            return false;
        }
    }
    
    strBuf = AZI_DelStr( strBuf, " " ); //先頭のスペースを削除
    strBuf = AZI_DelTailStr( strBuf, " " ); //末尾のスペースを削除

    if (strBuf == "") {
        return false;
    }
    else {
        if (strBuf.length == 4 && strBuf.indexOf(g_dataSeparator) == -1 ) {
            strBuf = "2000" + strBuf;
        }
        else if (strBuf.indexOf(g_dataSeparator) == 1 || strBuf.indexOf(g_dataSeparator) == 2) {
            strBuf = "2000" + g_dataSeparator + strBuf;
        }
        else {
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0101" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
            return false;
        }
    }

    var arrBuf = strBuf.split(g_dataSeparator);
    if( arrBuf.length > 1 ){
        for( i=0 ; i< 4 - arrBuf[0].length ; i++ ){
            strBuf = "0" + strBuf;
        }
    }

    // 西暦日付チェック
    bRet = false;
    if( 8 > strBuf.length ){
        if( AZI_ChkS( strBuf ) ){
            bRet = true;
        }
    }
    
    // 編集してチェック
    var str;
    if( !bRet ){
        if( str = AZI_InSDate( strBuf, 0 ) ){
            if( AZI_ChkS( str ) ){
                bRet = true;
            }
        }
    }

    if( !bRet ){
		// 統基781-依01 修正
		if (!errorFlag) {
			AZS_SetErrMsg( "AZDP0101" ) ;
		    p_oTxt.focus() ;
		}
		else {
			p_oTxt.value = "";
		    return true;
		}
		setTimeout("errorFlag = false;",1);
        return false;
    }
    else {
        return true;
    }
}
//GPRIME-基盤-N-1070 END