
var PageName = 'Menus & Forms';
var PageId = '81a7267117dd4aea91b0465cdfcd2c5d'
var PageUrl = 'Menus___Forms.html'
document.title = 'Menus & Forms';
var PageNotes = 
{
"pageName":"Menus &amp; Forms",
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

SetWidgetSelected('u12');
}

}

widgetIdToPanelStateChangeFunction['u81'] = function() {
var e = windowEvent;

if ((GetPanelState('u81')) == ('pd0u81')) {

	SetPanelVisibility('u69','hidden','fade',300);

}
else
if ((GetPanelState('u81')) == ('pd1u81')) {

	SetPanelVisibility('u69','','fade',300);

}

}
function rdo0NewEvent1(e) {

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
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
gv_vAlignTable['u55'] = 'center';
var u46 = document.getElementById('u46');

var u76 = document.getElementById('u76');

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u43', 'pd0u43','none','',500,'none','',500);

	SetPanelState('u35', 'pd0u35','swing','right',500,'swing','right',500);

}

}

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

var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u48 = document.getElementById('u48');

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

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u30 = document.getElementById('u30');

var u60 = document.getElementById('u60');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u34 = document.getElementById('u34');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u81 = document.getElementById('u81');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u43', 'pd2u43','none','',500,'none','',500);

	SetPanelState('u35', 'pd0u35','swing','right',500,'swing','right',500);

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u43', 'pd1u43','none','',500,'none','',500);

	SetPanelState('u35', 'pd0u35','swing','right',500,'swing','right',500);

}

}

var u2 = document.getElementById('u2');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u35', 'pd1u35','swing','left',500,'swing','left',500);

}

}

var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u58 = document.getElementById('u58');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

}

}

var u73 = document.getElementById('u73');

var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

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

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u35', 'pd1u35','swing','left',500,'swing','left',500);

}

}

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

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u69 = document.getElementById('u69');

var u78 = document.getElementById('u78');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');

var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u35', 'pd1u35','swing','left',500,'swing','left',500);

}

}

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u81', 'pd0u81','none','',500,'none','',500);

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u67 = document.getElementById('u67');

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u81', 'pd1u81','none','',500,'none','',500);

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');

var u6 = document.getElementById('u6');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');

var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
if (window.OnLoad) OnLoad();
