const a96_0x1bdc=['INVALID_COMMAND_SYNTAX','../../utils/errors','NO_LINK_FILTER_SAFE_LIST_EXISTS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','text','map','resolver','send','default','../../models/Guild','resolveGuildChannel','filter','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','language','MANAGE_GUILD','inviteFilterSafeListAdd','getString','inviteFilter','length','resolveRole','Command','exports','join','client','guild','link','info','Constants','channel','DiscordError','test','linkFilterSafeListAdd','findById','inviteFilterSafeListRemove','GREEN','news','ROLE_OR_CHANNEL_NOT_FOUND','document','role','tag','BASTION_ERROR_TYPE','NO_INVITE_FILTER_SAFE_LIST_EXISTS','apply','RED','save','toObject','exec','overwrite','safeList\x20--link','safeList\x20--invite\x20CHANNEL\x20|\x20ROLE\x20--delete','filters','locale','safeList\x20--link\x20CHANNEL\x20|\x20ROLE','name','delete','whitelist','constructor','linkFilter','author','safeList\x20--invite','push','IRIS','linkFilterSafeListRemove','COLORS','invite','safeList\x20--link\x20CHANNEL\x20|\x20ROLE\x20--delete','Invite\x20Filter\x20-\x20Safe\x20List','It\x20allows\x20you\x20to\x20add\x20members\x20or\x20roles\x20to\x20a\x20safe\x20list\x20that\x20prevents\x20their\x20messages\x20from\x20being\x20filtered\x20by\x20invite\x20filter\x20or\x20link\x20filter\x20in\x20the\x20server.'];(function(_0x1e1cd8,_0x3397c2){const _0x1bdc06=function(_0x2aea4f){while(--_0x2aea4f){_0x1e1cd8['push'](_0x1e1cd8['shift']());}},_0x213656=function(){const _0x2f92f0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4f9db2,_0x2c1415,_0x369066,_0x250022){_0x250022=_0x250022||{};let _0x30b79d=_0x2c1415+'='+_0x369066,_0x2d4cb1=0x0;for(let _0x229a2d=0x0,_0x5c63e4=_0x4f9db2['length'];_0x229a2d<_0x5c63e4;_0x229a2d++){const _0x1279a6=_0x4f9db2[_0x229a2d];_0x30b79d+=';\x20'+_0x1279a6;const _0x478392=_0x4f9db2[_0x1279a6];_0x4f9db2['push'](_0x478392),_0x5c63e4=_0x4f9db2['length'],_0x478392!==!![]&&(_0x30b79d+='='+_0x478392);}_0x250022['cookie']=_0x30b79d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x34a984,_0xe2f244){_0x34a984=_0x34a984||function(_0x4e320a){return _0x4e320a;};const _0x4fe487=_0x34a984(new RegExp('(?:^|;\x20)'+_0xe2f244['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4769ab=function(_0x5c9062,_0x47e38a){_0x5c9062(++_0x47e38a);};return _0x4769ab(_0x1bdc06,_0x3397c2),_0x4fe487?decodeURIComponent(_0x4fe487[0x1]):undefined;}},_0x572817=function(){const _0x58190e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x58190e['test'](_0x2f92f0['removeCookie']['toString']());};_0x2f92f0['updateCookie']=_0x572817;let _0x450d5a='';const _0x2a859d=_0x2f92f0['updateCookie']();if(!_0x2a859d)_0x2f92f0['setCookie'](['*'],'counter',0x1);else _0x2a859d?_0x450d5a=_0x2f92f0['getCookie'](null,'counter'):_0x2f92f0['removeCookie']();};_0x213656();}(a96_0x1bdc,0x117));const a96_0x2136=function(_0x1e1cd8,_0x3397c2){_0x1e1cd8=_0x1e1cd8-0xa9;let _0x1bdc06=a96_0x1bdc[_0x1e1cd8];return _0x1bdc06;};const a96_0x1789b6=a96_0x2136,a96_0x572817=function(){let _0x2a859d=!![];return function(_0x4f9db2,_0x2c1415){const _0x369066=_0x2a859d?function(){const _0x88b337=a96_0x2136;if(_0x2c1415){const _0x250022=_0x2c1415[_0x88b337(0xcc)](_0x4f9db2,arguments);return _0x2c1415=null,_0x250022;}}:function(){};return _0x2a859d=![],_0x369066;};}(),a96_0x2f92f0=a96_0x572817(this,function(){const _0x30b79d=function(){const _0x533f12=a96_0x2136,_0x2d4cb1=_0x30b79d[_0x533f12(0xda)](_0x533f12(0xe9))()[_0x533f12(0xda)](_0x533f12(0xae));return!_0x2d4cb1[_0x533f12(0xc0)](a96_0x2f92f0);};return _0x30b79d();});a96_0x2f92f0();'use strict';const tesseract_1=require('@bastion/tesseract'),Guild_1=require(a96_0x1789b6(0xab)),errors=require(a96_0x1789b6(0xe7));module[a96_0x1789b6(0xb7)]=class SafeListCommand extends tesseract_1[a96_0x1789b6(0xb6)]{constructor(){const _0x26b52e=a96_0x1789b6;super('safeList',{'description':_0x26b52e(0xe5),'triggers':[],'arguments':{'boolean':[_0x26b52e(0xe2),_0x26b52e(0xbb),_0x26b52e(0xd8)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x26b52e(0xb0)],'syntax':[_0x26b52e(0xdd),'safeList\x20--invite\x20CHANNEL\x20|\x20ROLE',_0x26b52e(0xd3),_0x26b52e(0xd2),_0x26b52e(0xd6),_0x26b52e(0xe3)]}),this[_0x26b52e(0xd0)]=async(_0x229a2d,_0x5c63e4)=>{const _0x3d8fc3=_0x26b52e;if(_0x5c63e4[_0x3d8fc3(0xe2)]){const _0x1279a6=await Guild_1[_0x3d8fc3(0xaa)]['findById'](_0x229a2d['guild']['id']);if(_0x5c63e4['_']&&_0x5c63e4['_'][_0x3d8fc3(0xb4)]){const _0x478392=_0x5c63e4['_']['join']('\x20'),_0x34a984=this[_0x3d8fc3(0xb9)]['resolver'][_0x3d8fc3(0xac)](_0x229a2d['guild'],_0x478392,[_0x3d8fc3(0xea),_0x3d8fc3(0xc5)]),_0xe2f244=this[_0x3d8fc3(0xb9)][_0x3d8fc3(0xec)][_0x3d8fc3(0xb5)](_0x229a2d[_0x3d8fc3(0xba)],_0x478392),_0x4fe487=_0x34a984||_0xe2f244||undefined;if(!_0x4fe487)throw new Error(_0x3d8fc3(0xc6));const _0x4769ab=_0x1279a6[_0x3d8fc3(0xcf)]();if(_0x5c63e4[_0x3d8fc3(0xd8)]){if(_0x4769ab['filters']&&_0x4769ab[_0x3d8fc3(0xd4)]['inviteFilter']&&_0x4769ab[_0x3d8fc3(0xd4)][_0x3d8fc3(0xb3)]['whitelist']){_0x4769ab[_0x3d8fc3(0xd4)]['inviteFilter'][_0x3d8fc3(0xd9)]=_0x4769ab[_0x3d8fc3(0xd4)]['inviteFilter'][_0x3d8fc3(0xd9)]['filter'](_0x4e320a=>_0x4e320a!==_0x4fe487['id']);if(!_0x4769ab[_0x3d8fc3(0xd4)][_0x3d8fc3(0xb3)]['whitelist'][_0x3d8fc3(0xb4)])delete _0x4769ab[_0x3d8fc3(0xd4)][_0x3d8fc3(0xb3)][_0x3d8fc3(0xd9)];}}else{if(!_0x4769ab[_0x3d8fc3(0xd4)])_0x4769ab[_0x3d8fc3(0xd4)]={};if(_0x4769ab[_0x3d8fc3(0xd4)][_0x3d8fc3(0xb3)]){if(_0x4769ab['filters']['inviteFilter'][_0x3d8fc3(0xd9)])_0x4769ab[_0x3d8fc3(0xd4)][_0x3d8fc3(0xb3)][_0x3d8fc3(0xd9)][_0x3d8fc3(0xde)](_0x4fe487['id']);else _0x4769ab[_0x3d8fc3(0xd4)][_0x3d8fc3(0xb3)]['whitelist']=[_0x4fe487['id']];}else _0x4769ab['filters'][_0x3d8fc3(0xb3)]={'enabled':!![],'whitelist':[_0x4fe487['id']]};}return _0x1279a6[_0x3d8fc3(0xd1)](_0x4769ab),await _0x1279a6['save'](),await _0x229a2d[_0x3d8fc3(0xbe)][_0x3d8fc3(0xa9)]({'embed':{'color':_0x5c63e4[_0x3d8fc3(0xd8)]?tesseract_1[_0x3d8fc3(0xbd)][_0x3d8fc3(0xe1)][_0x3d8fc3(0xcd)]:tesseract_1['Constants'][_0x3d8fc3(0xe1)][_0x3d8fc3(0xc4)],'description':this[_0x3d8fc3(0xb9)]['locale']['getString'](_0x229a2d[_0x3d8fc3(0xba)][_0x3d8fc3(0xc7)]['language'],_0x3d8fc3(0xbc),_0x5c63e4[_0x3d8fc3(0xd8)]?_0x3d8fc3(0xc3):_0x3d8fc3(0xb1),_0x229a2d['author']['tag'],_0x4fe487[_0x3d8fc3(0xd7)])}});}if(_0x1279a6[_0x3d8fc3(0xd4)]&&_0x1279a6['filters']['inviteFilter']&&_0x1279a6['filters'][_0x3d8fc3(0xb3)]['whitelist'])return await _0x229a2d[_0x3d8fc3(0xbe)][_0x3d8fc3(0xa9)]({'embed':{'color':tesseract_1['Constants'][_0x3d8fc3(0xe1)][_0x3d8fc3(0xdf)],'title':_0x3d8fc3(0xe4),'description':_0x1279a6['filters'][_0x3d8fc3(0xb3)][_0x3d8fc3(0xd9)][_0x3d8fc3(0xeb)](_0x5c9062=>{const _0xa9af15=_0x3d8fc3,_0x47e38a=this[_0xa9af15(0xb9)][_0xa9af15(0xec)][_0xa9af15(0xac)](_0x229a2d[_0xa9af15(0xba)],_0x5c9062),_0x58190e=this[_0xa9af15(0xb9)]['resolver']['resolveRole'](_0x229a2d[_0xa9af15(0xba)],_0x5c63e4['role']),_0x261e73=_0x47e38a||_0x58190e||undefined;return _0x261e73?_0x261e73[_0xa9af15(0xd7)]:_0x5c9062;})[_0x3d8fc3(0xb8)](',\x20')}});else throw new Error(_0x3d8fc3(0xcb));}if(_0x5c63e4[_0x3d8fc3(0xbb)]){const _0x48285f=await Guild_1[_0x3d8fc3(0xaa)][_0x3d8fc3(0xc2)](_0x229a2d[_0x3d8fc3(0xba)]['id']);if(_0x5c63e4['_']&&_0x5c63e4['_']['length']){const _0x1af7d7=_0x5c63e4['_'][_0x3d8fc3(0xb8)]('\x20'),_0x13161e=this[_0x3d8fc3(0xb9)]['resolver'][_0x3d8fc3(0xac)](_0x229a2d[_0x3d8fc3(0xba)],_0x1af7d7,[_0x3d8fc3(0xea),_0x3d8fc3(0xc5)]),_0x27d48d=this['client'][_0x3d8fc3(0xec)][_0x3d8fc3(0xb5)](_0x229a2d['guild'],_0x1af7d7),_0x187526=_0x13161e||_0x27d48d||undefined;if(!_0x187526)throw new Error(_0x3d8fc3(0xc6));const _0x5dee4b=_0x48285f[_0x3d8fc3(0xcf)]();if(_0x5c63e4[_0x3d8fc3(0xd8)]){if(_0x5dee4b[_0x3d8fc3(0xd4)]&&_0x5dee4b['filters']['linkFilter']&&_0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)]['whitelist']){_0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)]=_0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)][_0x3d8fc3(0xad)](_0x5d71e3=>_0x5d71e3!==_0x187526['id']);if(!_0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)][_0x3d8fc3(0xb4)])delete _0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)];}}else{if(!_0x5dee4b['filters'])_0x5dee4b[_0x3d8fc3(0xd4)]={};if(_0x5dee4b['filters']['linkFilter']){if(_0x5dee4b[_0x3d8fc3(0xd4)]['linkFilter'][_0x3d8fc3(0xd9)])_0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)][_0x3d8fc3(0xde)](_0x187526['id']);else _0x5dee4b[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)]=[_0x187526['id']];}else _0x5dee4b[_0x3d8fc3(0xd4)]['linkFilter']={'enabled':!![],'whitelist':[_0x187526['id']]};}return _0x48285f[_0x3d8fc3(0xd1)](_0x5dee4b),await _0x48285f[_0x3d8fc3(0xce)](),await _0x229a2d[_0x3d8fc3(0xbe)][_0x3d8fc3(0xa9)]({'embed':{'color':_0x5c63e4[_0x3d8fc3(0xd8)]?tesseract_1[_0x3d8fc3(0xbd)][_0x3d8fc3(0xe1)]['RED']:tesseract_1['Constants'][_0x3d8fc3(0xe1)]['GREEN'],'description':this[_0x3d8fc3(0xb9)][_0x3d8fc3(0xd5)][_0x3d8fc3(0xb2)](_0x229a2d[_0x3d8fc3(0xba)][_0x3d8fc3(0xc7)][_0x3d8fc3(0xaf)],_0x3d8fc3(0xbc),_0x5c63e4[_0x3d8fc3(0xd8)]?_0x3d8fc3(0xe0):_0x3d8fc3(0xc1),_0x229a2d[_0x3d8fc3(0xdc)][_0x3d8fc3(0xc9)],_0x187526[_0x3d8fc3(0xd7)])}});}if(_0x48285f[_0x3d8fc3(0xd4)]&&_0x48285f[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)]&&_0x48285f[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)])return await _0x229a2d['channel']['send']({'embed':{'color':tesseract_1[_0x3d8fc3(0xbd)][_0x3d8fc3(0xe1)][_0x3d8fc3(0xdf)],'title':'Link\x20Filter\x20-\x20Safe\x20List','description':_0x48285f[_0x3d8fc3(0xd4)][_0x3d8fc3(0xdb)][_0x3d8fc3(0xd9)][_0x3d8fc3(0xeb)](_0x5b36da=>{const _0x237964=_0x3d8fc3,_0x46daea=this['client'][_0x237964(0xec)][_0x237964(0xac)](_0x229a2d['guild'],_0x5b36da),_0x5f0065=this[_0x237964(0xb9)][_0x237964(0xec)][_0x237964(0xb5)](_0x229a2d[_0x237964(0xba)],_0x5c63e4[_0x237964(0xc8)]),_0x4aeb61=_0x46daea||_0x5f0065||undefined;return _0x4aeb61?_0x4aeb61[_0x237964(0xd7)]:_0x5b36da;})[_0x3d8fc3(0xb8)](',\x20')}});else throw new Error(_0x3d8fc3(0xe8));}throw new errors[(_0x3d8fc3(0xbf))](errors[_0x3d8fc3(0xca)][_0x3d8fc3(0xe6)],this[_0x3d8fc3(0xd7)]);};}};