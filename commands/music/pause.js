const a116_0x1a4d=['playing','textChannel','It\x20allows\x20you\x20to\x20pause\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','getString','exports','errors','pausedTime','musicDisabled','dispatcher','locale','musicDisabledPublic','guild','member','exec','playbackPause','language','connection','COLORS','constructor','\x20•\x20','\x20/\x20','music','pause','@bastion/tesseract','queue','name','paused','RED','channel','send','catch','isMusicMaster','apply','Constants','Paused\x20Playback','enabled','document','voice','client','return\x20/\x22\x20+\x20this\x20+\x20\x22/','tag','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];(function(_0x576ee3,_0x46ae8e){const _0x1a4de5=function(_0x19f5b7){while(--_0x19f5b7){_0x576ee3['push'](_0x576ee3['shift']());}},_0x539f6b=function(){const _0x52badf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5167e4,_0x5e6687,_0xea90d6,_0xff080d){_0xff080d=_0xff080d||{};let _0x3779f8=_0x5e6687+'='+_0xea90d6,_0x5e05c7=0x0;for(let _0x480d35=0x0,_0x3d55ad=_0x5167e4['length'];_0x480d35<_0x3d55ad;_0x480d35++){const _0x4f9f0e=_0x5167e4[_0x480d35];_0x3779f8+=';\x20'+_0x4f9f0e;const _0x30bc28=_0x5167e4[_0x4f9f0e];_0x5167e4['push'](_0x30bc28),_0x3d55ad=_0x5167e4['length'],_0x30bc28!==!![]&&(_0x3779f8+='='+_0x30bc28);}_0xff080d['cookie']=_0x3779f8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x296e8d,_0x50e5d5){_0x296e8d=_0x296e8d||function(_0x1d8879){return _0x1d8879;};const _0x2d1de3=_0x296e8d(new RegExp('(?:^|;\x20)'+_0x50e5d5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x40a77c=function(_0xecf9b,_0xc47e9){_0xecf9b(++_0xc47e9);};return _0x40a77c(_0x1a4de5,_0x46ae8e),_0x2d1de3?decodeURIComponent(_0x2d1de3[0x1]):undefined;}},_0x5c029d=function(){const _0x150e30=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x150e30['test'](_0x52badf['removeCookie']['toString']());};_0x52badf['updateCookie']=_0x5c029d;let _0x46c5f2='';const _0x51e853=_0x52badf['updateCookie']();if(!_0x51e853)_0x52badf['setCookie'](['*'],'counter',0x1);else _0x51e853?_0x46c5f2=_0x52badf['getCookie'](null,'counter'):_0x52badf['removeCookie']();};_0x539f6b();}(a116_0x1a4d,0xa4));const a116_0x539f=function(_0x576ee3,_0x46ae8e){_0x576ee3=_0x576ee3-0x6b;let _0x1a4de5=a116_0x1a4d[_0x576ee3];return _0x1a4de5;};const a116_0x17123c=a116_0x539f,a116_0x5c029d=function(){let _0x51e853=!![];return function(_0x5167e4,_0x5e6687){const _0xea90d6=_0x51e853?function(){const _0x19838c=a116_0x539f;if(_0x5e6687){const _0xff080d=_0x5e6687[_0x19838c(0x8f)](_0x5167e4,arguments);return _0x5e6687=null,_0xff080d;}}:function(){};return _0x51e853=![],_0xea90d6;};}(),a116_0x52badf=a116_0x5c029d(this,function(){const _0x3779f8=function(){const _0x14b736=a116_0x539f,_0x5e05c7=_0x3779f8[_0x14b736(0x81)](_0x14b736(0x6c))()[_0x14b736(0x81)](_0x14b736(0x6e));return!_0x5e05c7['test'](a116_0x52badf);};return _0x3779f8();});a116_0x52badf();'use strict';const tesseract_1=require(a116_0x17123c(0x86)),constants=require('../../utils/constants');module[a116_0x17123c(0x73)]=class Pause extends tesseract_1['Command']{constructor(){const _0x569afe=a116_0x17123c;super(_0x569afe(0x85),{'description':_0x569afe(0x71),'triggers':[],'arguments':{},'scope':_0x569afe(0x7a),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[]}),this[_0x569afe(0x7c)]=async _0x480d35=>{const _0x575c97=_0x569afe,_0x3d55ad=_0x480d35['guild'];if(!_0x3d55ad['document']['music']||!_0x3d55ad[_0x575c97(0x93)][_0x575c97(0x84)][_0x575c97(0x92)])return await _0x480d35[_0x575c97(0x8b)][_0x575c97(0x8c)]({'embed':{'color':tesseract_1[_0x575c97(0x90)][_0x575c97(0x80)][_0x575c97(0x8a)],'description':this['client']['locale'][_0x575c97(0x72)](_0x480d35[_0x575c97(0x7a)][_0x575c97(0x93)][_0x575c97(0x7e)],_0x575c97(0x74),constants['isPublicBastion'](_0x480d35['author'])?_0x575c97(0x79):_0x575c97(0x76))}})[_0x575c97(0x8d)](()=>{});if(!_0x480d35[_0x575c97(0x7b)][_0x575c97(0x8e)]())return;if(_0x3d55ad['music'][_0x575c97(0x6f)]&&_0x3d55ad[_0x575c97(0x94)]&&_0x3d55ad[_0x575c97(0x94)][_0x575c97(0x7f)][_0x575c97(0x77)]&&!_0x3d55ad[_0x575c97(0x94)][_0x575c97(0x7f)][_0x575c97(0x77)][_0x575c97(0x89)]){_0x3d55ad[_0x575c97(0x94)][_0x575c97(0x7f)]['dispatcher'][_0x575c97(0x85)](!![]);const _0x4f9f0e=_0x3d55ad['music'][_0x575c97(0x87)][0x0],_0x30bc28=_0x3d55ad[_0x575c97(0x94)]['connection']['dispatcher']['streamTime']-_0x3d55ad[_0x575c97(0x94)][_0x575c97(0x7f)][_0x575c97(0x77)][_0x575c97(0x75)];_0x3d55ad[_0x575c97(0x84)][_0x575c97(0x70)][_0x575c97(0x8c)]({'embed':{'color':tesseract_1[_0x575c97(0x90)][_0x575c97(0x80)]['PINK'],'title':_0x575c97(0x91),'description':this[_0x575c97(0x6b)][_0x575c97(0x78)][_0x575c97(0x72)](_0x480d35[_0x575c97(0x7a)][_0x575c97(0x93)][_0x575c97(0x7e)],'info',_0x575c97(0x7d),_0x480d35['author'][_0x575c97(0x6d)],_0x4f9f0e['track']),'footer':{'text':Math['floor'](_0x30bc28/0xea60)+':'+Math['floor'](_0x30bc28%0xea60/0x3e8)+_0x575c97(0x83)+_0x4f9f0e['duration']+_0x575c97(0x82)+_0x3d55ad[_0x575c97(0x94)][_0x575c97(0x7f)][_0x575c97(0x8b)][_0x575c97(0x88)]}}})['catch'](()=>{});}};}};