const a29_0x2ef5=['language','disable','RED','Constants','GREEN','channel','moderationLogChannelId','exec','apply','document','COLORS','@bastion/tesseract','Command','catch','moderationLogs\x20--disable','send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','tag','save','constructor','info','test','guild','modLogs','getString','moderationLogs','moderationLogsDisable','client','author','moderationLogsEnable'];(function(_0x483e82,_0x300067){const _0x2ef5a8=function(_0x1c29da){while(--_0x1c29da){_0x483e82['push'](_0x483e82['shift']());}},_0x11a8eb=function(){const _0x51d8b0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x104b67,_0x13ec23,_0x510813,_0xc8d9f5){_0xc8d9f5=_0xc8d9f5||{};let _0x1230d8=_0x13ec23+'='+_0x510813,_0x1f275d=0x0;for(let _0x22674c=0x0,_0x356b19=_0x104b67['length'];_0x22674c<_0x356b19;_0x22674c++){const _0x272e4d=_0x104b67[_0x22674c];_0x1230d8+=';\x20'+_0x272e4d;const _0x1d2c20=_0x104b67[_0x272e4d];_0x104b67['push'](_0x1d2c20),_0x356b19=_0x104b67['length'],_0x1d2c20!==!![]&&(_0x1230d8+='='+_0x1d2c20);}_0xc8d9f5['cookie']=_0x1230d8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x390a49,_0x1a25fb){_0x390a49=_0x390a49||function(_0x4784a3){return _0x4784a3;};const _0x416807=_0x390a49(new RegExp('(?:^|;\x20)'+_0x1a25fb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x45e77c=function(_0x4b259b,_0x589a71){_0x4b259b(++_0x589a71);};return _0x45e77c(_0x2ef5a8,_0x300067),_0x416807?decodeURIComponent(_0x416807[0x1]):undefined;}},_0x2a4022=function(){const _0x411abc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x411abc['test'](_0x51d8b0['removeCookie']['toString']());};_0x51d8b0['updateCookie']=_0x2a4022;let _0x80fc49='';const _0x2e177b=_0x51d8b0['updateCookie']();if(!_0x2e177b)_0x51d8b0['setCookie'](['*'],'counter',0x1);else _0x2e177b?_0x80fc49=_0x51d8b0['getCookie'](null,'counter'):_0x51d8b0['removeCookie']();};_0x11a8eb();}(a29_0x2ef5,0x1ec));const a29_0x11a8=function(_0x483e82,_0x300067){_0x483e82=_0x483e82-0x133;let _0x2ef5a8=a29_0x2ef5[_0x483e82];return _0x2ef5a8;};const a29_0x19fc14=a29_0x11a8,a29_0x2a4022=function(){let _0x2e177b=!![];return function(_0x104b67,_0x13ec23){const _0x510813=_0x2e177b?function(){const _0x40568e=a29_0x11a8;if(_0x13ec23){const _0xc8d9f5=_0x13ec23[_0x40568e(0x14d)](_0x104b67,arguments);return _0x13ec23=null,_0xc8d9f5;}}:function(){};return _0x2e177b=![],_0x510813;};}(),a29_0x51d8b0=a29_0x2a4022(this,function(){const _0x1230d8=function(){const _0x1d3f45=a29_0x11a8,_0x1f275d=_0x1230d8[_0x1d3f45(0x13a)](_0x1d3f45(0x137))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1f275d[_0x1d3f45(0x13c)](a29_0x51d8b0);};return _0x1230d8();});a29_0x51d8b0();'use strict';const tesseract_1=require(a29_0x19fc14(0x150));module['exports']=class ModerationLogs extends tesseract_1[a29_0x19fc14(0x133)]{constructor(){const _0x1caa0b=a29_0x19fc14;super(_0x1caa0b(0x140),{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20logging\x20of\x20the\x20moderation\x20events\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Moderation\x20Log\x20Channel\x20that\x20will\x20log\x20the\x20moderation\x20events\x20in\x20the\x20server.','triggers':[_0x1caa0b(0x13e)],'arguments':{'alias':{'disable':['d']},'boolean':[_0x1caa0b(0x146)]},'scope':_0x1caa0b(0x13d),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[_0x1caa0b(0x140),_0x1caa0b(0x135)]}),this[_0x1caa0b(0x14c)]=async(_0x22674c,_0x356b19)=>{const _0x305233=_0x1caa0b,_0x272e4d=_0x22674c[_0x305233(0x13d)];_0x356b19[_0x305233(0x146)]?(_0x272e4d[_0x305233(0x14e)]['moderationLogChannelId']=undefined,delete _0x272e4d[_0x305233(0x14e)][_0x305233(0x14b)]):_0x272e4d[_0x305233(0x14e)][_0x305233(0x14b)]=_0x22674c[_0x305233(0x14a)]['id'],await _0x272e4d[_0x305233(0x14e)][_0x305233(0x139)](),await _0x22674c[_0x305233(0x14a)][_0x305233(0x136)]({'embed':{'color':_0x272e4d[_0x305233(0x14e)][_0x305233(0x14b)]?tesseract_1[_0x305233(0x148)][_0x305233(0x14f)][_0x305233(0x149)]:tesseract_1['Constants'][_0x305233(0x14f)][_0x305233(0x147)],'description':this[_0x305233(0x142)]['locale'][_0x305233(0x13f)](_0x22674c[_0x305233(0x13d)][_0x305233(0x14e)][_0x305233(0x145)],_0x305233(0x13b),_0x272e4d[_0x305233(0x14e)][_0x305233(0x14b)]?_0x305233(0x144):_0x305233(0x141),_0x22674c[_0x305233(0x143)][_0x305233(0x138)])}})[_0x305233(0x134)](()=>{});};}};