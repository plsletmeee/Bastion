const a66_0x19fb=['guild','apply','number','members','RED','exec','document','language','exports','../../utils/confirmation','membersPruneQuestion','join','It\x20allows\x20you\x20to\x20prune\x20members\x20without\x20any\x20roles,\x20from\x20the\x20server,\x20based\x20on\x20how\x20long\x20they\x20have\x20been\x20inactive.','compile','return\x20/\x22\x20+\x20this\x20+\x20\x22/','days','default','channel','COLORS','client','prune','prune\x20--days\x20NUMBER\x20--\x20REASON','locale','tag','prune\x20--\x20REASON','abs','MANAGE_GUILD','@bastion/tesseract','getString','Command','author','send','info','test'];(function(_0x1c6367,_0x19fbe1){const _0x1f2e7b=function(_0x5e6bd0){while(--_0x5e6bd0){_0x1c6367['push'](_0x1c6367['shift']());}};const _0x4891ea=function(){const _0x3e9fe0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2a13c2,_0x1da5be,_0x4dfab9,_0x152843){_0x152843=_0x152843||{};let _0x133751=_0x1da5be+'='+_0x4dfab9;let _0x20f8f7=0x0;for(let _0x3f5612=0x0,_0x1027b2=_0x2a13c2['length'];_0x3f5612<_0x1027b2;_0x3f5612++){const _0x1a4f4a=_0x2a13c2[_0x3f5612];_0x133751+=';\x20'+_0x1a4f4a;const _0x124489=_0x2a13c2[_0x1a4f4a];_0x2a13c2['push'](_0x124489);_0x1027b2=_0x2a13c2['length'];if(_0x124489!==!![]){_0x133751+='='+_0x124489;}}_0x152843['cookie']=_0x133751;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a7b2e,_0x42ef64){_0x5a7b2e=_0x5a7b2e||function(_0x1d7a0b){return _0x1d7a0b;};const _0x4d01fb=_0x5a7b2e(new RegExp('(?:^|;\x20)'+_0x42ef64['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x28fbc9=function(_0x1e564a,_0x45389d){_0x1e564a(++_0x45389d);};_0x28fbc9(_0x1f2e7b,_0x19fbe1);return _0x4d01fb?decodeURIComponent(_0x4d01fb[0x1]):undefined;}};const _0x5dc088=function(){const _0x3ecbdf=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3ecbdf['test'](_0x3e9fe0['removeCookie']['toString']());};_0x3e9fe0['updateCookie']=_0x5dc088;let _0x1a4123='';const _0x5c1a7f=_0x3e9fe0['updateCookie']();if(!_0x5c1a7f){_0x3e9fe0['setCookie'](['*'],'counter',0x1);}else if(_0x5c1a7f){_0x1a4123=_0x3e9fe0['getCookie'](null,'counter');}else{_0x3e9fe0['removeCookie']();}};_0x4891ea();}(a66_0x19fb,0xdb));const a66_0x1f2e=function(_0x1c6367,_0x19fbe1){_0x1c6367=_0x1c6367-0x0;let _0x1f2e7b=a66_0x19fb[_0x1c6367];return _0x1f2e7b;};const a66_0x3e9fe0=function(){let _0x3a0257=!![];return function(_0x4bca09,_0x4d975f){const _0x5ed4f9=_0x3a0257?function(){if(_0x4d975f){const _0x42ff63=_0x4d975f[a66_0x1f2e('0x14')](_0x4bca09,arguments);_0x4d975f=null;return _0x42ff63;}}:function(){};_0x3a0257=![];return _0x5ed4f9;};}();const a66_0x5e6bd0=a66_0x3e9fe0(this,function(){const _0xbd7edb=function(){const _0x5c1ae0=_0xbd7edb['constructor'](a66_0x1f2e('0x21'))()[a66_0x1f2e('0x20')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5c1ae0[a66_0x1f2e('0x12')](a66_0x5e6bd0);};return _0xbd7edb();});a66_0x5e6bd0();'use strict';const tesseract_1=require(a66_0x1f2e('0xc'));const confirmation_1=require(a66_0x1f2e('0x1c'));module[a66_0x1f2e('0x1b')]=class PruneCommand extends tesseract_1[a66_0x1f2e('0xe')]{constructor(){super(a66_0x1f2e('0x5'),{'description':a66_0x1f2e('0x1f'),'triggers':[],'arguments':{'alias':{'days':'d'},'string':['days']},'scope':a66_0x1f2e('0x13'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_GUILD'],'userPermissions':[a66_0x1f2e('0xb')],'syntax':[a66_0x1f2e('0x9'),a66_0x1f2e('0x6')]});this[a66_0x1f2e('0x18')]=async(_0x15db44,_0x2aed7b)=>{const _0xb7f499=typeof _0x2aed7b[a66_0x1f2e('0x0')]===a66_0x1f2e('0x15')?Math[a66_0x1f2e('0xa')](_0x2aed7b[a66_0x1f2e('0x0')]):0x7;const _0x3eb9a1=_0x2aed7b['_'][a66_0x1f2e('0x1e')]('\x20')||'-';const _0x331593=await confirmation_1[a66_0x1f2e('0x1')](_0x15db44,this['client'][a66_0x1f2e('0x7')]['getString'](_0x15db44[a66_0x1f2e('0x13')][a66_0x1f2e('0x19')][a66_0x1f2e('0x1a')],a66_0x1f2e('0x11'),a66_0x1f2e('0x1d'),_0x15db44['author'][a66_0x1f2e('0x8')],_0xb7f499));if(!_0x331593)return;await _0x15db44[a66_0x1f2e('0x13')][a66_0x1f2e('0x16')][a66_0x1f2e('0x5')]({'days':_0xb7f499,'reason':_0x3eb9a1});return _0x15db44[a66_0x1f2e('0x2')][a66_0x1f2e('0x10')]({'embed':{'color':tesseract_1['Constants'][a66_0x1f2e('0x3')][a66_0x1f2e('0x17')],'description':this[a66_0x1f2e('0x4')][a66_0x1f2e('0x7')][a66_0x1f2e('0xd')](_0x15db44[a66_0x1f2e('0x13')][a66_0x1f2e('0x19')][a66_0x1f2e('0x1a')],'info','membersPrune',_0x15db44[a66_0x1f2e('0xf')][a66_0x1f2e('0x8')],_0xb7f499,_0x3eb9a1)}})['catch'](()=>{});};}};