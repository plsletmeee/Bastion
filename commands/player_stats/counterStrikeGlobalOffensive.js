const a108_0x8550=['\x20hours.','metadata','value','BASTION_ERROR_TYPE','length','csgo','rankScore','overview','displayValue','steam','displayName','name','makeRequest','map','Command','keys','errors','message','guild','toFixed','counterStrikeGlobalOffensive\x20USERNAME','counterStrikeGlobalOffensive','platformUserHandle','test','constructor','filter','send','platformInfo','toLowerCase','type','data','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','avatarUrl','segments','../../utils/errors','join','@bastion/tesseract','platform','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Counter-Strike:\x20Global\x20Offensive\x20player\x20in\x20any\x20supported\x20platform.','CSGO','/playerstats/csgo/','return\x20/\x22\x20+\x20this\x20+\x20\x22/','stats','timePlayed','../../utils/constants','json','platforms'];(function(_0x1c774b,_0x85502e){const _0x30d64e=function(_0x129439){while(--_0x129439){_0x1c774b['push'](_0x1c774b['shift']());}},_0x48c355=function(){const _0x5885b4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x20d058,_0x224ff2,_0x68ab37,_0x299149){_0x299149=_0x299149||{};let _0x361dc2=_0x224ff2+'='+_0x68ab37,_0x1ba0bf=0x0;for(let _0x57c60a=0x0,_0x15d50b=_0x20d058['length'];_0x57c60a<_0x15d50b;_0x57c60a++){const _0x496df8=_0x20d058[_0x57c60a];_0x361dc2+=';\x20'+_0x496df8;const _0x49805=_0x20d058[_0x496df8];_0x20d058['push'](_0x49805),_0x15d50b=_0x20d058['length'],_0x49805!==!![]&&(_0x361dc2+='='+_0x49805);}_0x299149['cookie']=_0x361dc2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4c7190,_0x48f84e){_0x4c7190=_0x4c7190||function(_0xdebb3b){return _0xdebb3b;};const _0x2af2c2=_0x4c7190(new RegExp('(?:^|;\x20)'+_0x48f84e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4c8cb5=function(_0x4ff9d7,_0x20a65e){_0x4ff9d7(++_0x20a65e);};return _0x4c8cb5(_0x30d64e,_0x85502e),_0x2af2c2?decodeURIComponent(_0x2af2c2[0x1]):undefined;}},_0x299d5f=function(){const _0x126157=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x126157['test'](_0x5885b4['removeCookie']['toString']());};_0x5885b4['updateCookie']=_0x299d5f;let _0x57b7cc='';const _0x4c9b05=_0x5885b4['updateCookie']();if(!_0x4c9b05)_0x5885b4['setCookie'](['*'],'counter',0x1);else _0x4c9b05?_0x57b7cc=_0x5885b4['getCookie'](null,'counter'):_0x5885b4['removeCookie']();};_0x48c355();}(a108_0x8550,0x7b));const a108_0x30d6=function(_0x1c774b,_0x85502e){_0x1c774b=_0x1c774b-0x0;let _0x30d64e=a108_0x8550[_0x1c774b];return _0x30d64e;};const _0x3e2dfd=a108_0x30d6,a108_0x5885b4=function(){let _0x57b7cc=!![];return function(_0x4c9b05,_0x20d058){const _0x224ff2=_0x57b7cc?function(){if(_0x20d058){const _0x68ab37=_0x20d058['apply'](_0x4c9b05,arguments);return _0x20d058=null,_0x68ab37;}}:function(){};return _0x57b7cc=![],_0x224ff2;};}(),a108_0x129439=a108_0x5885b4(this,function(){const _0x299149=function(){const _0x26d5c6=a108_0x30d6,_0x361dc2=_0x299149[_0x26d5c6('0x2a')](_0x26d5c6('0xc'))()['constructor'](_0x26d5c6('0x2'));return!_0x361dc2[_0x26d5c6('0x29')](a108_0x129439);};return _0x299149();});a108_0x129439();'use strict';const tesseract_1=require(_0x3e2dfd('0x7')),constants=require(_0x3e2dfd('0xf')),errors=require(_0x3e2dfd('0x5')),omnic=require('../../utils/omnic');module['exports']=class CounterStrikeGlobalOffensiveCommand extends tesseract_1[_0x3e2dfd('0x20')]{constructor(){const _0x194c3e=_0x3e2dfd;super(_0x194c3e('0x27'),{'description':_0x194c3e('0x9'),'triggers':[_0x194c3e('0x17')],'arguments':{'alias':{'platform':['p']},'string':[_0x194c3e('0x8')]},'scope':_0x194c3e('0x24'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x194c3e('0x26'),'counterStrikeGlobalOffensive\x20USERNAME\x20--platform\x20PLATFORM']}),this['exec']=async(_0x1ba0bf,_0x57c60a)=>{const _0x5b7ad5=_0x194c3e;if(!_0x57c60a['_'][_0x5b7ad5('0x16')])throw new errors['DiscordError'](errors[_0x5b7ad5('0x15')]['INVALID_COMMAND_SYNTAX'],this[_0x5b7ad5('0x1d')]);const _0x15d50b=_0x57c60a['_'][_0x5b7ad5('0x6')]('\x20'),_0x496df8=_0x57c60a[_0x5b7ad5('0x8')]&&this[_0x5b7ad5('0x11')]['includes'](_0x57c60a[_0x5b7ad5('0x8')][_0x5b7ad5('0x2e')]())?_0x57c60a['platform'][_0x5b7ad5('0x2e')]():this[_0x5b7ad5('0x11')][0x0],_0x49805=await omnic[_0x5b7ad5('0x1e')](_0x5b7ad5('0xb')+_0x496df8+'/'+encodeURIComponent(_0x15d50b)),_0x4c7190=await _0x49805[_0x5b7ad5('0x10')]();if(_0x4c7190['errors'])throw new Error(_0x4c7190[_0x5b7ad5('0x22')][0x0][_0x5b7ad5('0x23')]);const _0x48f84e=_0x4c7190[_0x5b7ad5('0x1')][_0x5b7ad5('0x4')]['find'](_0x2af2c2=>_0x2af2c2[_0x5b7ad5('0x0')]===_0x5b7ad5('0x19'));await _0x1ba0bf['channel'][_0x5b7ad5('0x2c')]({'embed':{'color':constants['COLORS'][_0x5b7ad5('0xa')],'author':{'name':_0x4c7190[_0x5b7ad5('0x1')][_0x5b7ad5('0x2d')][_0x5b7ad5('0x28')],'url':'https://steamcommunity.com/id/'+_0x4c7190['data'][_0x5b7ad5('0x2d')][_0x5b7ad5('0x28')]},'title':'Counter-Strike:\x20Global\x20Offensive\x20-\x20Player\x20Stats','description':_0x48f84e[_0x5b7ad5('0xd')][_0x5b7ad5('0xe')]?_0x4c7190[_0x5b7ad5('0x1')]['platformInfo'][_0x5b7ad5('0x28')]+'\x20has\x20played\x20for\x20'+(_0x48f84e[_0x5b7ad5('0xd')][_0x5b7ad5('0xe')][_0x5b7ad5('0x14')]/0x3c/0x3c)[_0x5b7ad5('0x25')](0x2)+_0x5b7ad5('0x12'):'','fields':Object[_0x5b7ad5('0x21')](_0x48f84e['stats'])[_0x5b7ad5('0x2b')](_0x4c8cb5=>_0x4c8cb5!==_0x5b7ad5('0xe'))[_0x5b7ad5('0x1f')](_0xdebb3b=>({'name':_0x48f84e[_0x5b7ad5('0xd')][_0xdebb3b][_0x5b7ad5('0x1c')],'value':_0x48f84e[_0x5b7ad5('0xd')][_0xdebb3b][_0x5b7ad5('0x1a')],'inline':!![]})),'thumbnail':{'url':_0x48f84e[_0x5b7ad5('0xd')][_0x5b7ad5('0x18')]?_0x48f84e[_0x5b7ad5('0xd')][_0x5b7ad5('0x18')][_0x5b7ad5('0x13')]['iconUrl']:_0x4c7190[_0x5b7ad5('0x1')][_0x5b7ad5('0x2d')][_0x5b7ad5('0x3')]},'footer':{'text':_0x496df8['toUpperCase']()+'\x20•\x20Powered\x20by\x20Tracker\x20Network'}}});},this['platforms']=[_0x194c3e('0x1b')];}};