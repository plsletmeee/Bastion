const a116_0x12f0=['joinedTimestamp','locale','getClaimMessageKey','client','findOne','alreadyClaimed','claimStreakLast','../../models/Member','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','tag','Daily\x20Reward','author','default','toDateString','Constants','send','IRIS','getRandomInt','getString','@bastion/tesseract','catch','setDate','claim','lastClaimed','info','getDate','daily','guild','document','premiumSinceTimestamp','constructor','Command','claimStreakFirst','member','getTime','test','COLORS','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','exec','language','claimStreak'];(function(_0x492aef,_0x12f04e){const _0x1c4bd9=function(_0x4d31e0){while(--_0x4d31e0){_0x492aef['push'](_0x492aef['shift']());}},_0x46bceb=function(){const _0x183268={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x448460,_0x40516e,_0x5ccbb6,_0x3f47dd){_0x3f47dd=_0x3f47dd||{};let _0x5b0bd9=_0x40516e+'='+_0x5ccbb6,_0x434397=0x0;for(let _0x1cf1f4=0x0,_0x515c43=_0x448460['length'];_0x1cf1f4<_0x515c43;_0x1cf1f4++){const _0x5813c0=_0x448460[_0x1cf1f4];_0x5b0bd9+=';\x20'+_0x5813c0;const _0x1adbfa=_0x448460[_0x5813c0];_0x448460['push'](_0x1adbfa),_0x515c43=_0x448460['length'],_0x1adbfa!==!![]&&(_0x5b0bd9+='='+_0x1adbfa);}_0x3f47dd['cookie']=_0x5b0bd9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5596ff,_0x528626){_0x5596ff=_0x5596ff||function(_0x1293ce){return _0x1293ce;};const _0x27a87b=_0x5596ff(new RegExp('(?:^|;\x20)'+_0x528626['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x446f65=function(_0x416a58,_0x5daebb){_0x416a58(++_0x5daebb);};return _0x446f65(_0x1c4bd9,_0x12f04e),_0x27a87b?decodeURIComponent(_0x27a87b[0x1]):undefined;}},_0x3fb049=function(){const _0x8539ab=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x8539ab['test'](_0x183268['removeCookie']['toString']());};_0x183268['updateCookie']=_0x3fb049;let _0x36cb23='';const _0x19f458=_0x183268['updateCookie']();if(!_0x19f458)_0x183268['setCookie'](['*'],'counter',0x1);else _0x19f458?_0x36cb23=_0x183268['getCookie'](null,'counter'):_0x183268['removeCookie']();};_0x46bceb();}(a116_0x12f0,0x8e));const a116_0x1c4b=function(_0x492aef,_0x12f04e){_0x492aef=_0x492aef-0x0;let _0x1c4bd9=a116_0x12f0[_0x492aef];return _0x1c4bd9;};const _0x4e593a=a116_0x1c4b,a116_0x183268=function(){let _0x36cb23=!![];return function(_0x19f458,_0x448460){const _0x40516e=_0x36cb23?function(){const _0x414864=a116_0x1c4b;if(_0x448460){const _0x5ccbb6=_0x448460[_0x414864('0x22')](_0x19f458,arguments);return _0x448460=null,_0x5ccbb6;}}:function(){};return _0x36cb23=![],_0x40516e;};}(),a116_0x4d31e0=a116_0x183268(this,function(){const _0x3f47dd=function(){const _0xf00a24=a116_0x1c4b,_0x5b0bd9=_0x3f47dd['constructor'](_0xf00a24('0x23'))()[_0xf00a24('0xf')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5b0bd9[_0xf00a24('0x14')](a116_0x4d31e0);};return _0x3f47dd();});a116_0x4d31e0();'use strict';const tesseract_1=require(_0x4e593a('0x4')),Member_1=require(_0x4e593a('0x21')),numbers=require('../../utils/numbers');module['exports']=class DailyCommand extends tesseract_1[_0x4e593a('0x10')]{constructor(){const _0xfd460d=_0x4e593a;super(_0xfd460d('0xb'),{'description':_0xfd460d('0x16'),'triggers':[_0xfd460d('0x7')],'arguments':{},'scope':_0xfd460d('0xc'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0xfd460d('0x1c')]=_0x434397=>{const _0x20bd7f=_0xfd460d;switch(_0x434397){case 0x1:return _0x20bd7f('0x11');case 0x6:return _0x20bd7f('0x20');case 0x7:return'claimStreakClaimed';default:return _0x20bd7f('0x19');}},this[_0xfd460d('0x17')]=async _0x1cf1f4=>{const _0x4aa537=_0xfd460d,_0x515c43=await Member_1[_0x4aa537('0x27')][_0x4aa537('0x1e')]({'user':_0x1cf1f4[_0x4aa537('0x26')]['id'],'guild':_0x1cf1f4[_0x4aa537('0xc')]['id']}),_0x5813c0=new Date(),_0x1adbfa=(_0x446f65=>new Date(_0x446f65[_0x4aa537('0x6')](_0x446f65[_0x4aa537('0xa')]()-0x1)))(new Date()),_0x5596ff=new Date(_0x515c43[_0x4aa537('0x8')]);if(_0x5813c0[_0x4aa537('0x28')]()===_0x5596ff[_0x4aa537('0x28')]())throw new Error(this['client']['locale'][_0x4aa537('0x3')](_0x1cf1f4['guild'][_0x4aa537('0xd')][_0x4aa537('0x18')],'errors',_0x4aa537('0x1f'),_0x1cf1f4[_0x4aa537('0x26')][_0x4aa537('0x24')]));_0x515c43[_0x4aa537('0x8')]=_0x5813c0[_0x4aa537('0x13')]();let _0x528626=numbers[_0x4aa537('0x2')](0x2a,0x80);_0x5813c0[_0x4aa537('0x13')]()-_0x1cf1f4['member'][_0x4aa537('0x1a')]<0xf731400&&(_0x528626/=0x2);_0x515c43['claimStreak']=_0x1adbfa['toDateString']()===_0x5596ff[_0x4aa537('0x28')]()?_0x515c43[_0x4aa537('0x19')]+0x1:0x1;const _0x27a87b=this[_0x4aa537('0x1d')][_0x4aa537('0x1b')][_0x4aa537('0x3')](_0x1cf1f4[_0x4aa537('0xc')]['document'][_0x4aa537('0x18')],_0x4aa537('0x9'),this['getClaimMessageKey'](_0x515c43[_0x4aa537('0x19')]),0x7-_0x515c43[_0x4aa537('0x19')]);_0x515c43['claimStreak']===0x7&&(_0x515c43[_0x4aa537('0x19')]=0x0,_0x528626+=numbers[_0x4aa537('0x2')](0x200,0x400)),_0x1cf1f4['member'][_0x4aa537('0xe')]&&(_0x528626*=0x2),await _0x1cf1f4[_0x4aa537('0x12')]['credit'](_0x528626,_0x4aa537('0x25'),_0x515c43),await _0x515c43['save'](),_0x1cf1f4['channel'][_0x4aa537('0x0')]({'embed':{'color':tesseract_1[_0x4aa537('0x29')][_0x4aa537('0x15')][_0x4aa537('0x1')],'description':this[_0x4aa537('0x1d')][_0x4aa537('0x1b')][_0x4aa537('0x3')](_0x1cf1f4[_0x4aa537('0xc')][_0x4aa537('0xd')][_0x4aa537('0x18')],_0x4aa537('0x9'),'claim',_0x1cf1f4[_0x4aa537('0x26')][_0x4aa537('0x24')])+'\x0a\x0a'+_0x27a87b,'footer':{'text':_0x1cf1f4[_0x4aa537('0x12')]['premiumSinceTimestamp']?this[_0x4aa537('0x1d')]['locale'][_0x4aa537('0x3')](_0x1cf1f4[_0x4aa537('0xc')]['document'][_0x4aa537('0x18')],'info','claimRewardBooster'):''}}})[_0x4aa537('0x5')](()=>{});};}};