const a132_0x2b42=['claimStreakClaimed','joinedTimestamp','constructor','Constants','claimRewardBooster','lastClaimed','getRandomInt','COLORS','../../models/Member','errors','premiumSinceTimestamp','language','getTime','channel','../../utils/numbers','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','locale','daily','setDate','credit','member','Command','test','claimStreakFirst','info','Daily\x20Reward','alreadyClaimed','client','exports','guild','claimStreak','apply','getClaimMessageKey','claim','@bastion/tesseract','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','send','findOne','save','author','toDateString','tag'];(function(_0x288270,_0x135cda){const _0x2b4253=function(_0x21487b){while(--_0x21487b){_0x288270['push'](_0x288270['shift']());}},_0x2ca512=function(){const _0x20c565={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x265c69,_0x28d97d,_0x40d9fb,_0x409b07){_0x409b07=_0x409b07||{};let _0x2a561b=_0x28d97d+'='+_0x40d9fb,_0x3676e0=0x0;for(let _0x5cb3d8=0x0,_0x22ee7d=_0x265c69['length'];_0x5cb3d8<_0x22ee7d;_0x5cb3d8++){const _0x59316e=_0x265c69[_0x5cb3d8];_0x2a561b+=';\x20'+_0x59316e;const _0x274024=_0x265c69[_0x59316e];_0x265c69['push'](_0x274024),_0x22ee7d=_0x265c69['length'],_0x274024!==!![]&&(_0x2a561b+='='+_0x274024);}_0x409b07['cookie']=_0x2a561b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x297b0e,_0x568d65){_0x297b0e=_0x297b0e||function(_0x23c5e5){return _0x23c5e5;};const _0xaf1b87=_0x297b0e(new RegExp('(?:^|;\x20)'+_0x568d65['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5f29a2=function(_0x3bdb85,_0x992e20){_0x3bdb85(++_0x992e20);};return _0x5f29a2(_0x2b4253,_0x135cda),_0xaf1b87?decodeURIComponent(_0xaf1b87[0x1]):undefined;}},_0x159294=function(){const _0x3f5dd6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f5dd6['test'](_0x20c565['removeCookie']['toString']());};_0x20c565['updateCookie']=_0x159294;let _0x2b22ba='';const _0x44e5ed=_0x20c565['updateCookie']();if(!_0x44e5ed)_0x20c565['setCookie'](['*'],'counter',0x1);else _0x44e5ed?_0x2b22ba=_0x20c565['getCookie'](null,'counter'):_0x20c565['removeCookie']();};_0x2ca512();}(a132_0x2b42,0x1ed));const a132_0x2ca5=function(_0x288270,_0x135cda){_0x288270=_0x288270-0xab;let _0x2b4253=a132_0x2b42[_0x288270];return _0x2b4253;};const a132_0x4d27e8=a132_0x2ca5,a132_0x159294=function(){let _0x44e5ed=!![];return function(_0x265c69,_0x28d97d){const _0x40d9fb=_0x44e5ed?function(){const _0x23c760=a132_0x2ca5;if(_0x28d97d){const _0x409b07=_0x28d97d[_0x23c760(0xd8)](_0x265c69,arguments);return _0x28d97d=null,_0x409b07;}}:function(){};return _0x44e5ed=![],_0x40d9fb;};}(),a132_0x20c565=a132_0x159294(this,function(){const _0x2a561b=function(){const _0x49e208=a132_0x2ca5,_0x3676e0=_0x2a561b[_0x49e208(0xba)](_0x49e208(0xb0))()[_0x49e208(0xba)](_0x49e208(0xc7));return!_0x3676e0[_0x49e208(0xcf)](a132_0x20c565);};return _0x2a561b();});a132_0x20c565();'use strict';const tesseract_1=require(a132_0x4d27e8(0xad)),Member_1=require(a132_0x4d27e8(0xc0)),numbers=require(a132_0x4d27e8(0xc6));module[a132_0x4d27e8(0xd5)]=class DailyCommand extends tesseract_1[a132_0x4d27e8(0xce)]{constructor(){const _0x4bcac1=a132_0x4d27e8;super(_0x4bcac1(0xca),{'description':_0x4bcac1(0xae),'triggers':[_0x4bcac1(0xac)],'arguments':{},'scope':_0x4bcac1(0xd6),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x4bcac1(0xab)]=_0x5cb3d8=>{const _0x48631f=_0x4bcac1;switch(_0x5cb3d8){case 0x1:return _0x48631f(0xd0);case 0x6:return'claimStreakLast';case 0x7:return _0x48631f(0xb8);default:return _0x48631f(0xd7);}},this['exec']=async _0x22ee7d=>{const _0x71b4dc=_0x4bcac1,_0x59316e=await Member_1['default'][_0x71b4dc(0xb3)]({'user':_0x22ee7d[_0x71b4dc(0xb5)]['id'],'guild':_0x22ee7d['guild']['id']}),_0x274024=new Date(),_0x297b0e=(_0x23c5e5=>new Date(_0x23c5e5[_0x71b4dc(0xcb)](_0x23c5e5['getDate']()-0x1)))(new Date()),_0x568d65=new Date(_0x59316e[_0x71b4dc(0xbd)]);if(_0x274024[_0x71b4dc(0xb6)]()===_0x568d65['toDateString']())throw new Error(this[_0x71b4dc(0xd4)][_0x71b4dc(0xc9)][_0x71b4dc(0xb1)](_0x22ee7d[_0x71b4dc(0xd6)]['document'][_0x71b4dc(0xc3)],_0x71b4dc(0xc1),_0x71b4dc(0xd3),_0x22ee7d[_0x71b4dc(0xb5)][_0x71b4dc(0xb7)]));_0x59316e[_0x71b4dc(0xbd)]=_0x274024[_0x71b4dc(0xc4)]();let _0xaf1b87=numbers[_0x71b4dc(0xbe)](0x2a,0x80);_0x274024[_0x71b4dc(0xc4)]()-_0x22ee7d[_0x71b4dc(0xcd)][_0x71b4dc(0xb9)]<0xf731400&&(_0xaf1b87/=0x2);_0x59316e[_0x71b4dc(0xd7)]=_0x297b0e[_0x71b4dc(0xb6)]()===_0x568d65[_0x71b4dc(0xb6)]()?_0x59316e[_0x71b4dc(0xd7)]+0x1:0x1;const _0x5f29a2=this[_0x71b4dc(0xd4)][_0x71b4dc(0xc9)][_0x71b4dc(0xb1)](_0x22ee7d[_0x71b4dc(0xd6)][_0x71b4dc(0xaf)][_0x71b4dc(0xc3)],_0x71b4dc(0xd1),this[_0x71b4dc(0xab)](_0x59316e['claimStreak']),0x7-_0x59316e[_0x71b4dc(0xd7)]);_0x59316e[_0x71b4dc(0xd7)]===0x7&&(_0x59316e[_0x71b4dc(0xd7)]=0x0,_0xaf1b87+=numbers[_0x71b4dc(0xbe)](0x200,0x400)),_0x22ee7d[_0x71b4dc(0xcd)]['premiumSinceTimestamp']&&(_0xaf1b87*=0x2),await _0x22ee7d[_0x71b4dc(0xcd)][_0x71b4dc(0xcc)](_0xaf1b87,_0x71b4dc(0xd2),_0x59316e),await _0x59316e[_0x71b4dc(0xb4)](),_0x22ee7d[_0x71b4dc(0xc5)][_0x71b4dc(0xb2)]({'embed':{'color':tesseract_1[_0x71b4dc(0xbb)][_0x71b4dc(0xbf)][_0x71b4dc(0xc8)],'description':this['client'][_0x71b4dc(0xc9)]['getString'](_0x22ee7d[_0x71b4dc(0xd6)][_0x71b4dc(0xaf)]['language'],_0x71b4dc(0xd1),_0x71b4dc(0xac),_0x22ee7d['author'][_0x71b4dc(0xb7)])+'\x0a\x0a'+_0x5f29a2,'footer':{'text':_0x22ee7d['member'][_0x71b4dc(0xc2)]?this[_0x71b4dc(0xd4)][_0x71b4dc(0xc9)][_0x71b4dc(0xb1)](_0x22ee7d['guild'][_0x71b4dc(0xaf)][_0x71b4dc(0xc3)],_0x71b4dc(0xd1),_0x71b4dc(0xbc)):''}}})['catch'](()=>{});};}};