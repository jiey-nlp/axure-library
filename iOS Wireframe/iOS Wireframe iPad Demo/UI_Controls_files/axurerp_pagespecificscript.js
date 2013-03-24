
var PageName = 'UI Controls';
var PageId = 'b208bebeda4841498da799111bda5f4d'
var PageUrl = 'UI_Controls.html'
document.title = 'UI Controls';
var PageNotes = 
{
"pageName":"UI Controls",
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

SetWidgetSelected('u4');
SetWidgetSelected('u43');
}

}

function rdo0NewEvent1(e) {

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u32 = document.getElementById('u32');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u140 = document.getElementById('u140');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u14 = document.getElementById('u14');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u138 = document.getElementById('u138');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}

}

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	self.location.href="Lists.html" + GetQuerystring();

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u120 = document.getElementById('u120');

var u110 = document.getElementById('u110');

var u6 = document.getElementById('u6');

var u108 = document.getElementById('u108');

var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u75 = document.getElementById('u75');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u34 = document.getElementById('u34');

var u68 = document.getElementById('u68');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u39 = document.getElementById('u39');

var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u47');
}

}

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u66 = document.getElementById('u66');

var u112 = document.getElementById('u112');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u78 = document.getElementById('u78');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
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

var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}

}

var u118 = document.getElementById('u118');

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u91', 'pd1u91','none','',500,'none','',500);

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u26 = document.getElementById('u26');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u51 = document.getElementById('u51');

var u10 = document.getElementById('u10');

var u100 = document.getElementById('u100');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u30 = document.getElementById('u30');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u116 = document.getElementById('u116');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u120', 'pd1u120','none','',500,'none','',500);

}

}

var u114 = document.getElementById('u114');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u92 = document.getElementById('u92');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u98 = document.getElementById('u98');

var u127 = document.getElementById('u127');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u43');
}

}

var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}

}

var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u104 = document.getElementById('u104');

var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u120', 'pd0u120','none','',500,'none','',500);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u91', 'pd2u91','none','',500,'none','',500);

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u134 = document.getElementById('u134');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u94 = document.getElementById('u94');

var u60 = document.getElementById('u60');

var u102 = document.getElementById('u102');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u73 = document.getElementById('u73');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

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

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u29 = document.getElementById('u29');

var u132 = document.getElementById('u132');

var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u91', 'pd0u91','none','',500,'none','',500);

}

}

var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
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

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');

var u146 = document.getElementById('u146');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u49');
}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u80 = document.getElementById('u80');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
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

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u45');
}

}

var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');

var u136 = document.getElementById('u136');

var u28 = document.getElementById('u28');

if (window.OnLoad) OnLoad();
