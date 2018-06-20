var _jsxFileName="__tests__/basic/Toast.ios.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _Button=require("./../../src/basic/Button");
var _Toast=require("./../../src/basic/Toast");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var cover=require("../assets/drawer-cover.png");

jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders default Toast",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay"}));},__source:{fileName:_jsxFileName,lineNumber:21}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:29}},"Toast"))).


toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Toast button style",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
buttonTextStyle:{color:"#008000"},
buttonStyle:{backgroundColor:"#5cb85c"}}));},__source:{fileName:_jsxFileName,lineNumber:39}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:49}},"Toast"))).


toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Toast with duration",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
duration:3000}));},__source:{fileName:_jsxFileName,lineNumber:59}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:68}},"Toast"))).


toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Toast position",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:78}},
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
position:"top"}));},__source:{fileName:_jsxFileName,lineNumber:79}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:88}},"Top Toast")),

_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
position:"bottom"}));},__source:{fileName:_jsxFileName,lineNumber:90}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:99}},"Bottom Toast")))).



toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Toast Text style",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
textStyle:{color:"yellow"},
buttonText:"Okay"}));},__source:{fileName:_jsxFileName,lineNumber:110}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:119}},"Toast"))).


toJSON();
expect(tree).toMatchSnapshot();
});

it("renders Toast Type",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{padder:true,__source:{fileName:_jsxFileName,lineNumber:129}},
_react2.default.createElement(_Button.Button,{
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay"}));},__source:{fileName:_jsxFileName,lineNumber:130}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:138}},"Default Toast")),

_react2.default.createElement(_Button.Button,{
success:true,
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
type:"success"}));},__source:{fileName:_jsxFileName,lineNumber:140}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:150}},"Success Toast")),

_react2.default.createElement(_Button.Button,{
warning:true,
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
type:"warning"}));},__source:{fileName:_jsxFileName,lineNumber:152}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:162}},"Warning Toast")),

_react2.default.createElement(_Button.Button,{
danger:true,
onPress:function onPress(){return(
_Toast.Toast.show({
text:"Wrong password!",
buttonText:"Okay",
type:"danger"}));},__source:{fileName:_jsxFileName,lineNumber:164}},



_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:174}},"Danger Toast")))).



toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Toast.ios.js.map