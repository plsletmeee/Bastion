const a124_0x1e99=['test','hex','@bastion/tesseract','DiscordError','join','INVALID_COMMAND_SYNTAX','colour','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','rgb','color\x20R\x20G\x20B','channel','integer','../../utils/errors','guild','Integer','exec','send','color\x20C\x20M\x20Y\x20K','HEX','It\x20allows\x20you\x20the\x20convert\x20the\x20specified\x20color\x20in\x20one\x20format\x20into\x20many\x20differt\x20formats.','constructor'];(function(_0x557bff,_0x1e99db){const _0x169f35=function(_0x340491){while(--_0x340491){_0x557bff['push'](_0x557bff['shift']());}};const _0x1a7da3=function(){const _0x5d8bb9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x583fb5,_0x544b67,_0x43ff28,_0x2df25f){_0x2df25f=_0x2df25f||{};let _0x1e9a83=_0x544b67+'='+_0x43ff28;let _0x4e7eb0=0x0;for(let _0x2a97f9=0x0,_0x2c575c=_0x583fb5['length'];_0x2a97f9<_0x2c575c;_0x2a97f9++){const _0x48f0a9=_0x583fb5[_0x2a97f9];_0x1e9a83+=';\x20'+_0x48f0a9;const _0x514519=_0x583fb5[_0x48f0a9];_0x583fb5['push'](_0x514519);_0x2c575c=_0x583fb5['length'];if(_0x514519!==!![]){_0x1e9a83+='='+_0x514519;}}_0x2df25f['cookie']=_0x1e9a83;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26fd88,_0x248a8f){_0x26fd88=_0x26fd88||function(_0x177852){return _0x177852;};const _0x23eae0=_0x26fd88(new RegExp('(?:^|;\x20)'+_0x248a8f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5efa08=function(_0xd206f1,_0xf9aa39){_0xd206f1(++_0xf9aa39);};_0x5efa08(_0x169f35,_0x1e99db);return _0x23eae0?decodeURIComponent(_0x23eae0[0x1]):undefined;}};const _0x59f6ce=function(){const _0x492780=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x492780['test'](_0x5d8bb9['removeCookie']['toString']());};_0x5d8bb9['updateCookie']=_0x59f6ce;let _0x488cb7='';const _0x2fcef5=_0x5d8bb9['updateCookie']();if(!_0x2fcef5){_0x5d8bb9['setCookie'](['*'],'counter',0x1);}else if(_0x2fcef5){_0x488cb7=_0x5d8bb9['getCookie'](null,'counter');}else{_0x5d8bb9['removeCookie']();}};_0x1a7da3();}(a124_0x1e99,0x1cb));const a124_0x169f=function(_0x557bff,_0x1e99db){_0x557bff=_0x557bff-0x0;let _0x169f35=a124_0x1e99[_0x557bff];return _0x169f35;};const a124_0x5d8bb9=function(){let _0x4fe0dd=!![];return function(_0xf4a13d,_0x110414){const _0x44012c=_0x4fe0dd?function(){if(_0x110414){const _0x53d814=_0x110414['apply'](_0xf4a13d,arguments);_0x110414=null;return _0x53d814;}}:function(){};_0x4fe0dd=![];return _0x44012c;};}();const a124_0x340491=a124_0x5d8bb9(this,function(){const _0xc87827=function(){const _0x1f9796=_0xc87827[a124_0x169f('0x2')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a124_0x169f('0xa'));return!_0x1f9796[a124_0x169f('0x3')](a124_0x340491);};return _0xc87827();});a124_0x340491();'use strict';const tesseract_1=require(a124_0x169f('0x5'));const colors=require('../../utils/colors');const errors=require(a124_0x169f('0x10'));module[a124_0x169f('0xb')]=class ColorCommand extends tesseract_1['Command']{constructor(){super('color',{'description':a124_0x169f('0x1'),'triggers':[a124_0x169f('0x9')],'arguments':{},'scope':a124_0x169f('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['color\x20HEX',a124_0x169f('0xd'),a124_0x169f('0x15')]});this[a124_0x169f('0x13')]=async(_0x26146c,_0x2bbbbe)=>{const _0x167631=colors['parse'](_0x2bbbbe['_']['join']('\x20'));if(!_0x167631)throw new errors[(a124_0x169f('0x6'))](errors['BASTION_ERROR_TYPE'][a124_0x169f('0x8')],this['name']);await _0x26146c[a124_0x169f('0xe')][a124_0x169f('0x14')]({'embed':{'color':_0x167631[a124_0x169f('0xf')],'title':'Color','fields':[{'name':'RGB','value':_0x167631[a124_0x169f('0xc')][a124_0x169f('0x7')](',\x20'),'inline':!![]},{'name':'CMYK','value':_0x167631['cmyk'][a124_0x169f('0x7')](',\x20'),'inline':!![]},{'name':a124_0x169f('0x0'),'value':'#'+_0x167631[a124_0x169f('0x4')],'inline':!![]},{'name':a124_0x169f('0x12'),'value':_0x167631[a124_0x169f('0xf')],'inline':!![]}]}});};}};