const a118_0x1c07=['send','pausedTime','track','history','../../utils/constants','info','PINK','playing','Music\x20Queue','shuffle','clear','getString','textChannel','name','page','has','queue\x20--shuffle','toString','musicDisabledPublic','queue\x20--clear','splice','guild','member','errors','map','\x20of\x20','@bastion/tesseract','items','Constants','RED','get','length','tag','cache','return\x20/\x22\x20+\x20this\x20+\x20\x22/','repeat','../../utils/arrays','voice','queue','remove','apply','channel','COLORS','client','../../utils/pagination','isMusicMaster','isPublicBastion','document','pages','../../utils/numbers','streamTime','musicQueueCount','connection','catch','test','users','musicDisabled','locale','duration','dispatcher','author','floor','queue\x20--loop','language','album','\x20-\x20','\x20•\x20Page\x20','exports','exec','Unknown\x20Artist','queue\x20--remove\x2013','slice','loop','musicQueueClean','music','requester','inRange'];(function(_0x41bb8e,_0x12107d){const _0x1c074b=function(_0x215c17){while(--_0x215c17){_0x41bb8e['push'](_0x41bb8e['shift']());}},_0x18da58=function(){const _0x269086={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x24764e,_0x43a004,_0x218bfe,_0x45c649){_0x45c649=_0x45c649||{};let _0x15a71f=_0x43a004+'='+_0x218bfe,_0x5e1a79=0x0;for(let _0x7f1a88=0x0,_0x55f4d4=_0x24764e['length'];_0x7f1a88<_0x55f4d4;_0x7f1a88++){const _0x46c833=_0x24764e[_0x7f1a88];_0x15a71f+=';\x20'+_0x46c833;const _0x7c1ba2=_0x24764e[_0x46c833];_0x24764e['push'](_0x7c1ba2),_0x55f4d4=_0x24764e['length'],_0x7c1ba2!==!![]&&(_0x15a71f+='='+_0x7c1ba2);}_0x45c649['cookie']=_0x15a71f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a1491,_0x564341){_0x5a1491=_0x5a1491||function(_0x2d6dbb){return _0x2d6dbb;};const _0x5205c7=_0x5a1491(new RegExp('(?:^|;\x20)'+_0x564341['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x23911a=function(_0x479f30,_0x2cb261){_0x479f30(++_0x2cb261);};return _0x23911a(_0x1c074b,_0x12107d),_0x5205c7?decodeURIComponent(_0x5205c7[0x1]):undefined;}},_0x40f2f2=function(){const _0xb7cc3f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb7cc3f['test'](_0x269086['removeCookie']['toString']());};_0x269086['updateCookie']=_0x40f2f2;let _0x3b52dd='';const _0x4543d5=_0x269086['updateCookie']();if(!_0x4543d5)_0x269086['setCookie'](['*'],'counter',0x1);else _0x4543d5?_0x3b52dd=_0x269086['getCookie'](null,'counter'):_0x269086['removeCookie']();};_0x18da58();}(a118_0x1c07,0x10f));const a118_0x18da=function(_0x41bb8e,_0x12107d){_0x41bb8e=_0x41bb8e-0x196;let _0x1c074b=a118_0x1c07[_0x41bb8e];return _0x1c074b;};const a118_0x2a781b=a118_0x18da,a118_0x40f2f2=function(){let _0x4543d5=!![];return function(_0x24764e,_0x43a004){const _0x218bfe=_0x4543d5?function(){const _0xbfe2a8=a118_0x18da;if(_0x43a004){const _0x45c649=_0x43a004[_0xbfe2a8(0x196)](_0x24764e,arguments);return _0x43a004=null,_0x45c649;}}:function(){};return _0x4543d5=![],_0x218bfe;};}(),a118_0x269086=a118_0x40f2f2(this,function(){const _0x15a71f=function(){const _0x340c2b=a118_0x18da,_0x5e1a79=_0x15a71f['constructor'](_0x340c2b(0x1dd))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5e1a79[_0x340c2b(0x1a4)](a118_0x269086);};return _0x15a71f();});a118_0x269086();'use strict';const tesseract_1=require(a118_0x2a781b(0x1d5)),arrays=require(a118_0x2a781b(0x1df)),constants=require(a118_0x2a781b(0x1bf)),numbers=require(a118_0x2a781b(0x19f)),pagination=require(a118_0x2a781b(0x19a));module[a118_0x2a781b(0x1b1)]=class Queue extends tesseract_1['Command']{constructor(){const _0x1ff995=a118_0x2a781b;super(_0x1ff995(0x1e1),{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20current\x20music\x20queue\x20of\x20the\x20server.\x20It\x20also\x20allows\x20you\x20to\x20clear,\x20or\x20shuffle\x20the\x20music\x20queue\x20as\x20well\x20as\x20remove\x20a\x20song\x20from\x20the\x20queue,\x20or\x20set\x20(and\x20unset)\x20the\x20queue\x20in\x20loop.','triggers':[],'arguments':{'alias':{'clear':['c'],'loop':['l'],'remove':['r'],'shuffle':['s']},'boolean':['clear','loop',_0x1ff995(0x1c4)],'number':[_0x1ff995(0x1e2)]},'scope':_0x1ff995(0x1d0),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x1ff995(0x1e1),_0x1ff995(0x1ac),_0x1ff995(0x1cb),_0x1ff995(0x1ce),_0x1ff995(0x1b4)]}),this[_0x1ff995(0x1b2)]=async(_0x7f1a88,_0x55f4d4)=>{const _0x1453a2=_0x1ff995,_0x46c833=_0x7f1a88['guild'];if(!_0x46c833[_0x1453a2(0x19d)][_0x1453a2(0x1b8)]||!_0x46c833['document']['music']['enabled'])return await _0x7f1a88[_0x1453a2(0x197)][_0x1453a2(0x1bb)]({'embed':{'color':tesseract_1['Constants'][_0x1453a2(0x198)][_0x1453a2(0x1d8)],'description':this[_0x1453a2(0x199)][_0x1453a2(0x1a7)][_0x1453a2(0x1c6)](_0x7f1a88['guild'][_0x1453a2(0x19d)][_0x1453a2(0x1ad)],_0x1453a2(0x1d2),constants[_0x1453a2(0x19c)](_0x7f1a88[_0x1453a2(0x1aa)])?_0x1453a2(0x1cd):_0x1453a2(0x1a6))}})[_0x1453a2(0x1a3)](()=>{});if(_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1c2)]&&_0x46c833[_0x1453a2(0x1e0)]&&_0x46c833[_0x1453a2(0x1e0)][_0x1453a2(0x1a2)]['dispatcher']){const _0x7c1ba2=_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1e1)][0x0];if(_0x55f4d4[_0x1453a2(0x1c5)]){if(!_0x7f1a88['member']['isMusicMaster']())return;_0x46c833['music'][_0x1453a2(0x1e1)]=[_0x7c1ba2],_0x46c833['music'][_0x1453a2(0x1be)]=[],_0x46c833['music'][_0x1453a2(0x1c7)][_0x1453a2(0x1bb)]({'embed':{'color':tesseract_1[_0x1453a2(0x1d7)][_0x1453a2(0x198)][_0x1453a2(0x1c1)],'description':this[_0x1453a2(0x199)][_0x1453a2(0x1a7)][_0x1453a2(0x1c6)](_0x7f1a88[_0x1453a2(0x1d0)]['document'][_0x1453a2(0x1ad)],_0x1453a2(0x1c0),_0x1453a2(0x1b7),_0x7f1a88[_0x1453a2(0x1aa)][_0x1453a2(0x1db)])}})['catch'](()=>{});}else{if(_0x55f4d4[_0x1453a2(0x1b6)])_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1de)]=!_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1de)],_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1c7)]['send']({'embed':{'color':tesseract_1[_0x1453a2(0x1d7)]['COLORS'][_0x1453a2(0x1c1)],'description':this[_0x1453a2(0x199)][_0x1453a2(0x1a7)][_0x1453a2(0x1c6)](_0x7f1a88[_0x1453a2(0x1d0)][_0x1453a2(0x19d)]['language'],_0x1453a2(0x1c0),_0x46c833[_0x1453a2(0x1b8)]['repeat']?'musicQueueRepeatEnabled':'musicQueueRepeatDisable',_0x7f1a88[_0x1453a2(0x1aa)][_0x1453a2(0x1db)])}})[_0x1453a2(0x1a3)](()=>{});else{if(_0x55f4d4[_0x1453a2(0x1e2)]&&_0x46c833[_0x1453a2(0x1b8)]['queue']['length']>0x1&&numbers[_0x1453a2(0x1ba)](_0x55f4d4[_0x1453a2(0x1e2)],0x1,_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1e1)]['length']-0x1)){if(!_0x7f1a88[_0x1453a2(0x1d1)]['isMusicMaster']()&&_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1e1)][_0x55f4d4[_0x1453a2(0x1e2)]]['requester']!==_0x7f1a88[_0x1453a2(0x1aa)]['id'])return;const _0x5a1491=_0x46c833[_0x1453a2(0x1b8)]['queue'][_0x1453a2(0x1cf)](_0x55f4d4[_0x1453a2(0x1e2)],0x1)[0x0];_0x46c833[_0x1453a2(0x1b8)]['textChannel'][_0x1453a2(0x1bb)]({'embed':{'color':tesseract_1[_0x1453a2(0x1d7)]['COLORS']['PINK'],'description':this[_0x1453a2(0x199)][_0x1453a2(0x1a7)]['getString'](_0x7f1a88[_0x1453a2(0x1d0)][_0x1453a2(0x19d)][_0x1453a2(0x1ad)],_0x1453a2(0x1c0),'musicQueueRemove',_0x7f1a88[_0x1453a2(0x1aa)][_0x1453a2(0x1db)],_0x5a1491['track'],this[_0x1453a2(0x199)][_0x1453a2(0x1a5)][_0x1453a2(0x1dc)][_0x1453a2(0x1ca)](_0x5a1491[_0x1453a2(0x1b9)])?this[_0x1453a2(0x199)]['users'][_0x1453a2(0x1dc)][_0x1453a2(0x1d9)](_0x5a1491[_0x1453a2(0x1b9)])['tag']:_0x5a1491[_0x1453a2(0x1b9)])}})[_0x1453a2(0x1a3)](()=>{});}else{if(_0x55f4d4[_0x1453a2(0x1c4)]){if(!_0x7f1a88['member'][_0x1453a2(0x19b)]())return;const _0x564341=arrays['shuffle'](_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1e1)][_0x1453a2(0x1b5)](0x1));_0x46c833[_0x1453a2(0x1b8)]['queue']=[_0x7c1ba2,..._0x564341],_0x46c833['music'][_0x1453a2(0x1c7)]['send']({'embed':{'color':tesseract_1[_0x1453a2(0x1d7)][_0x1453a2(0x198)][_0x1453a2(0x1c1)],'description':this[_0x1453a2(0x199)]['locale'][_0x1453a2(0x1c6)](_0x7f1a88[_0x1453a2(0x1d0)]['document'][_0x1453a2(0x1ad)],'info','musicQueueShuffle',_0x7f1a88[_0x1453a2(0x1aa)][_0x1453a2(0x1db)])}})[_0x1453a2(0x1a3)](()=>{});}else{const _0x5205c7=_0x46c833['voice'][_0x1453a2(0x1a2)]['dispatcher'][_0x1453a2(0x1a0)]-_0x46c833[_0x1453a2(0x1e0)][_0x1453a2(0x1a2)][_0x1453a2(0x1a9)][_0x1453a2(0x1bc)],_0x23911a=pagination['paginate'](_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1e1)]['slice'](0x1),_0x55f4d4[_0x1453a2(0x1c9)]);_0x46c833[_0x1453a2(0x1b8)][_0x1453a2(0x1c7)][_0x1453a2(0x1bb)]({'embed':{'color':tesseract_1[_0x1453a2(0x1d7)][_0x1453a2(0x198)]['PINK'],'title':_0x1453a2(0x1c3),'description':this[_0x1453a2(0x199)][_0x1453a2(0x1a7)][_0x1453a2(0x1c6)](_0x7f1a88[_0x1453a2(0x1d0)][_0x1453a2(0x19d)][_0x1453a2(0x1ad)],_0x1453a2(0x1c0),_0x1453a2(0x1a1),(_0x46c833[_0x1453a2(0x1b8)]['queue'][_0x1453a2(0x1da)]-0x1)[_0x1453a2(0x1cc)]()),'fields':_0x23911a[_0x1453a2(0x1d6)][_0x1453a2(0x1d3)]((_0x2d6dbb,_0x479f30)=>({'name':'#'+(_0x479f30+0x1)+_0x1453a2(0x1af)+_0x2d6dbb['track'],'value':''+(_0x2d6dbb['artist']||_0x1453a2(0x1b3))+(_0x2d6dbb[_0x1453a2(0x1ae)]&&_0x2d6dbb[_0x1453a2(0x1bd)]!==_0x2d6dbb[_0x1453a2(0x1ae)]?_0x1453a2(0x1af)+_0x2d6dbb[_0x1453a2(0x1ae)]:'')})),'footer':{'text':_0x7c1ba2[_0x1453a2(0x1bd)]+'\x20•\x20'+Math[_0x1453a2(0x1ab)](_0x5205c7/0xea60)+':'+Math['floor'](_0x5205c7%0xea60/0x3e8)+'\x20/\x20'+_0x7c1ba2[_0x1453a2(0x1a8)]+'\x20•\x20'+_0x46c833[_0x1453a2(0x1e0)][_0x1453a2(0x1a2)][_0x1453a2(0x197)][_0x1453a2(0x1c8)]+_0x1453a2(0x1b0)+_0x23911a[_0x1453a2(0x1c9)]+_0x1453a2(0x1d4)+_0x23911a[_0x1453a2(0x19e)]}}})[_0x1453a2(0x1a3)](()=>{});}}}}}};}};