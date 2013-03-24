
var PageName = 'Lists';
var PageId = 'ffb7c76aec5c45dfaf5299aa92a30555'
var PageUrl = 'Lists.html'
document.title = 'Lists';
var PageNotes = 
{
"pageName":"Lists",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '27');
  value = value.replace(/\[\[GenMonth\]\]/g, '3');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'Март');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'вторник');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if (true) {

SetWidgetRichText('u31', '<p style="text-align:center;"><span style="font-family:Arial;font-size:24px;font-weight:bold;font-style:normal;text-decoration:none;color:#76A9E0;">[[PageName]]</span></p>');

SetWidgetSelected('u20');
}

}

function rdo0NewEvent1(e) {

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u86 = document.getElementById('u86');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u102 = document.getElementById('u102');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	self.location.href="Google_Map.html" + GetQuerystring();

}

}

var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');

var u76 = document.getElementById('u76');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');

var u53 = document.getElementById('u53');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="UI_Controls.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u66 = document.getElementById('u66');

var u112 = document.getElementById('u112');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u104 = document.getElementById('u104');

var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Modal___Popover.html" + GetQuerystring();

}

}

var u60 = document.getElementById('u60');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u122 = document.getElementById('u122');

var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u64 = document.getElementById('u64');

var u100 = document.getElementById('u100');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u118 = document.getElementById('u118');

var u124 = document.getElementById('u124');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u108 = document.getElementById('u108');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u58 = document.getElementById('u58');

var u37 = document.getElementById('u37');

var u126 = document.getElementById('u126');

var u2 = document.getElementById('u2');

var u92 = document.getElementById('u92');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u130 = document.getElementById('u130');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u47 = document.getElementById('u47');

var u68 = document.getElementById('u68');

var u90 = document.getElementById('u90');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u84 = document.getElementById('u84');

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u128 = document.getElementById('u128');

var u106 = document.getElementById('u106');

var u28 = document.getElementById('u28');

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{
windowEvent = e;


if (true) {

	self.location.href="iOS_Wireframe.html" + GetQuerystring();

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u39 = document.getElementById('u39');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u78 = document.getElementById('u78');

var u120 = document.getElementById('u120');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u114 = document.getElementById('u114');

var u94 = document.getElementById('u94');

var u6 = document.getElementById('u6');

var u96 = document.getElementById('u96');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u56 = document.getElementById('u56');

var u116 = document.getElementById('u116');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u82 = document.getElementById('u82');

var u132 = document.getElementById('u132');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="Menus___Forms.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u18 = document.getElementById('u18');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u110 = document.getElementById('u110');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u88 = document.getElementById('u88');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u98 = document.getElementById('u98');

var u80 = document.getElementById('u80');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
if (window.OnLoad) OnLoad();
