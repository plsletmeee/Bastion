const a191_0x7337=['premiumTier','exports','Requested\x20by\x20','startsWith','name','Members\x20Left','newSessionChannelPrefix','LISTENER_MODE','channelID','includes','size','channel','parent','@bastion/tesseract','displayName','user','guild','constructor','deletable','findById','return\x20/\x22\x20+\x20this\x20+\x20\x22/','toLowerCase','type','channels','error','voice','fetchPremiumTier','setChannel','catch','tag','member','client','exec','filter','../utils/omnic','Constants','../models/Guild','voiceSessions','categories','members','voiceStateUpdate','apply','parentID','isPublicBastion'];(function(_0x52e12e,_0x73374c){const _0x695671=function(_0x51f6e4){while(--_0x51f6e4){_0x52e12e['push'](_0x52e12e['shift']());}},_0x416022=function(){const _0x43949a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x28ba99,_0x3e5f8e,_0x273ca7,_0xc2bf82){_0xc2bf82=_0xc2bf82||{};let _0x542c9d=_0x3e5f8e+'='+_0x273ca7,_0x3fb3c9=0x0;for(let _0x47420c=0x0,_0x174ee9=_0x28ba99['length'];_0x47420c<_0x174ee9;_0x47420c++){const _0x182ff9=_0x28ba99[_0x47420c];_0x542c9d+=';\x20'+_0x182ff9;const _0x37702e=_0x28ba99[_0x182ff9];_0x28ba99['push'](_0x37702e),_0x174ee9=_0x28ba99['length'],_0x37702e!==!![]&&(_0x542c9d+='='+_0x37702e);}_0xc2bf82['cookie']=_0x542c9d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1c6ec1,_0x31c844){_0x1c6ec1=_0x1c6ec1||function(_0x3a4df2){return _0x3a4df2;};const _0x40b1e6=_0x1c6ec1(new RegExp('(?:^|;\x20)'+_0x31c844['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1015e7=function(_0x551fb1,_0x422a84){_0x551fb1(++_0x422a84);};return _0x1015e7(_0x695671,_0x73374c),_0x40b1e6?decodeURIComponent(_0x40b1e6[0x1]):undefined;}},_0x1ed32d=function(){const _0xe322ee=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe322ee['test'](_0x43949a['removeCookie']['toString']());};_0x43949a['updateCookie']=_0x1ed32d;let _0x12fc64='';const _0x154954=_0x43949a['updateCookie']();if(!_0x154954)_0x43949a['setCookie'](['*'],'counter',0x1);else _0x154954?_0x12fc64=_0x43949a['getCookie'](null,'counter'):_0x43949a['removeCookie']();};_0x416022();}(a191_0x7337,0xe8));const a191_0x6956=function(_0x52e12e,_0x73374c){_0x52e12e=_0x52e12e-0x0;let _0x695671=a191_0x7337[_0x52e12e];return _0x695671;};const _0x487dcb=a191_0x6956,a191_0x43949a=function(){let _0x12fc64=!![];return function(_0x154954,_0x28ba99){const _0x3e5f8e=_0x12fc64?function(){const _0x5756e7=a191_0x6956;if(_0x28ba99){const _0x273ca7=_0x28ba99[_0x5756e7('0x1d')](_0x154954,arguments);return _0x28ba99=null,_0x273ca7;}}:function(){};return _0x12fc64=![],_0x3e5f8e;};}(),a191_0x51f6e4=a191_0x43949a(this,function(){const _0xc2bf82=function(){const _0x1d285f=a191_0x6956,_0x542c9d=_0xc2bf82[_0x1d285f('0x5')](_0x1d285f('0x8'))()[_0x1d285f('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x542c9d['test'](a191_0x51f6e4);};return _0xc2bf82();});a191_0x51f6e4();'use strict';const tesseract_1=require(_0x487dcb('0x1')),Guild_1=require(_0x487dcb('0x18')),constants=require('../utils/constants'),omnic=require(_0x487dcb('0x16'));module[_0x487dcb('0x21')]=class VoiceStateUpdateListener extends tesseract_1['Listener']{constructor(){const _0x557917=_0x487dcb;super(_0x557917('0x1c'),{'mode':tesseract_1[_0x557917('0x17')][_0x557917('0x27')]['ON']}),this[_0x557917('0x14')]=async(_0x3fb3c9,_0x47420c)=>{const _0x5c30ed=_0x557917;if(_0x47420c[_0x5c30ed('0x28')]===_0x3fb3c9[_0x5c30ed('0x28')])return;if(!(_0x3fb3c9[_0x5c30ed('0x2b')]&&_0x3fb3c9[_0x5c30ed('0x2b')][_0x5c30ed('0x0')])&&!(_0x47420c[_0x5c30ed('0x2b')]&&_0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x0')]))return;const _0x174ee9=await Guild_1['default'][_0x5c30ed('0x7')](_0x3fb3c9[_0x5c30ed('0x4')]?_0x3fb3c9[_0x5c30ed('0x4')]['id']:_0x47420c['guild']['id']);if(!_0x174ee9[_0x5c30ed('0x19')]||!_0x174ee9[_0x5c30ed('0x19')]['categories'])return;if(constants[_0x5c30ed('0x1f')](this[_0x5c30ed('0x13')][_0x5c30ed('0x3')])){const _0x182ff9=await omnic[_0x5c30ed('0xe')](_0x3fb3c9[_0x5c30ed('0x4')]||_0x47420c[_0x5c30ed('0x4')])[_0x5c30ed('0x10')](()=>{});if(!_0x182ff9)return;}_0x3fb3c9['channel']&&_0x3fb3c9['channel'][_0x5c30ed('0x0')]&&_0x174ee9['voiceSessions']['categories'][_0x5c30ed('0x29')](_0x3fb3c9['channel']['parentID'])&&!_0x3fb3c9[_0x5c30ed('0x2b')][_0x5c30ed('0x24')][_0x5c30ed('0x23')](this['newSessionChannelPrefix'])&&_0x3fb3c9[_0x5c30ed('0x2b')][_0x5c30ed('0x1b')][_0x5c30ed('0x2a')]===0x0&&_0x3fb3c9[_0x5c30ed('0x2b')][_0x5c30ed('0x6')]&&_0x3fb3c9[_0x5c30ed('0x2b')]['delete'](_0x5c30ed('0x25'));if(_0x47420c[_0x5c30ed('0x2b')]&&_0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x0')]&&_0x174ee9[_0x5c30ed('0x19')][_0x5c30ed('0x1a')][_0x5c30ed('0x29')](_0x47420c['channel'][_0x5c30ed('0x1e')])){if(_0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x24')][_0x5c30ed('0x23')](this[_0x5c30ed('0x26')])){const _0x37702e=_0x47420c[_0x5c30ed('0x12')][_0x5c30ed('0x2')]+(_0x47420c['member'][_0x5c30ed('0x2')][_0x5c30ed('0x9')]()['endsWith']('s')?'\x27':'\x27s')+'\x20Channel',_0x1c6ec1=await _0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x4')][_0x5c30ed('0xb')]['create'](_0x37702e+'\x20#'+(_0x47420c['channel']['parent']['children'][_0x5c30ed('0x15')](_0x31c844=>_0x31c844[_0x5c30ed('0xa')]===_0x5c30ed('0xd')&&_0x31c844['name'][_0x5c30ed('0x23')](_0x37702e+'\x20#'))[_0x5c30ed('0x2a')]+0x1),{'type':_0x5c30ed('0xd'),'bitrate':_0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x4')][_0x5c30ed('0x20')]?_0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x4')]['premiumTier']*0x1f400:0x17700,'parent':_0x47420c[_0x5c30ed('0x2b')][_0x5c30ed('0x0')],'reason':_0x5c30ed('0x22')+(_0x47420c['member'][_0x5c30ed('0x3')]?_0x47420c['member'][_0x5c30ed('0x3')][_0x5c30ed('0x11')]:_0x47420c[_0x5c30ed('0x12')]['id'])});await _0x47420c[_0x5c30ed('0x12')][_0x5c30ed('0xd')][_0x5c30ed('0xf')](_0x1c6ec1)[_0x5c30ed('0x10')](console[_0x5c30ed('0xc')]);}}},this[_0x557917('0x26')]='➕\x20New';}};