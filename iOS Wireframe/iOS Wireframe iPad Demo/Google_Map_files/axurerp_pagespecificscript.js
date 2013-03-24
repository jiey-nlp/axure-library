
var PageName = 'Google Map';
var PageId = '082ff3ab8da54dfaba5aa12c32608998'
var PageUrl = 'Google_Map.html'
document.title = 'Google Map';
var PageNotes = 
{
"pageName":"Google Map",
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

SetWidgetRichText('u45', '<p style="text-align:center;"><span style="font-family:Arial;font-size:24px;font-weight:bold;font-style:normal;text-decoration:none;color:#76A9E0;">[[PageName]]</span></p>');

SetWidgetSelected('u30');
}

}

widgetIdToShowFunction['u0'] = function() {
var e = windowEvent;

if (true) {

	BringToFront("u0");

}

}
function rdo0NewEvent1(e) {

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u51 = document.getElementById('u51');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u46 = document.getElementById('u46');

var u76 = document.getElementById('u76');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u76','hidden','fade',200);

}

}

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{
windowEvent = e;


if (true) {

	self.location.href="iOS_Wireframe.html" + GetQuerystring();

}

}

var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u53 = document.getElementById('u53');

var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','hidden','fade',200);

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','hidden','fade',200);

}

}

var u66 = document.getElementById('u66');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	self.location.href="Lists.html" + GetQuerystring();

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u66','toggle','fade',200);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');

var u79 = document.getElementById('u79');

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','','fade',300);

	SetPanelVisibility('u76','hidden','fade',200);

}

}

var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','','fade',300);

	SetPanelVisibility('u66','hidden','fade',200);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u36 = document.getElementById('u36');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	self.location.href="Modal___Popover.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u73 = document.getElementById('u73');

var u20 = document.getElementById('u20');

var u50 = document.getElementById('u50');

var u28 = document.getElementById('u28');

var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u56','toggle','fade',200);

}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u69 = document.getElementById('u69');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','','fade',300);

	SetPanelVisibility('u56','hidden','fade',200);

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (true) {

	self.location.href="Menus___Forms.html" + GetQuerystring();

}

}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u56 = document.getElementById('u56');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u5 = document.getElementById('u5');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	self.location.href="UI_Controls.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');

var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u66','hidden','fade',200);

}

}

var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u56','hidden','fade',200);

}

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u40 = document.getElementById('u40');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');

var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u76','toggle','fade',200);

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
if (window.OnLoad) OnLoad();
