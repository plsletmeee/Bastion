const a209_0x57a2=['guild','readyTimestamp','test','Constants','client','name','Logger','guilds','cache','@bastion/tesseract','polls','exports','channel','reactions','Ended','\x20votes\x20(','_id','messages','default','SOMEWHAT_DARK','0\x20*/15\x20*\x20*\x20*\x20*','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','slice','filter','fetch','title','map','length','users','apply','../models/Poll','exec','channels','edit','get','Scheduler','push','POLL\x20ENDED','has','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','value','COLORS','embeds','catch','find','toFixed'];(function(_0x34a8fe,_0x57a280){const _0x363ee7=function(_0x2d63f4){while(--_0x2d63f4){_0x34a8fe['push'](_0x34a8fe['shift']());}},_0xa5cff5=function(){const _0x8db0fd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1bb6e0,_0x1f1079,_0x1dea71,_0x1079d5){_0x1079d5=_0x1079d5||{};let _0x351d97=_0x1f1079+'='+_0x1dea71,_0x53aaa8=0x0;for(let _0x301698=0x0,_0x286b18=_0x1bb6e0['length'];_0x301698<_0x286b18;_0x301698++){const _0x39b9dc=_0x1bb6e0[_0x301698];_0x351d97+=';\x20'+_0x39b9dc;const _0x554f7b=_0x1bb6e0[_0x39b9dc];_0x1bb6e0['push'](_0x554f7b),_0x286b18=_0x1bb6e0['length'],_0x554f7b!==!![]&&(_0x351d97+='='+_0x554f7b);}_0x1079d5['cookie']=_0x351d97;},'removeCookie':function(){return'dev';},'getCookie':function(_0x72a559,_0x25dc63){_0x72a559=_0x72a559||function(_0x54f9b0){return _0x54f9b0;};const _0x5bb952=_0x72a559(new RegExp('(?:^|;\x20)'+_0x25dc63['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x7548b3=function(_0x84fe70,_0x432d2e){_0x84fe70(++_0x432d2e);};return _0x7548b3(_0x363ee7,_0x57a280),_0x5bb952?decodeURIComponent(_0x5bb952[0x1]):undefined;}},_0x46cda0=function(){const _0x2e9fbd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2e9fbd['test'](_0x8db0fd['removeCookie']['toString']());};_0x8db0fd['updateCookie']=_0x46cda0;let _0x26c605='';const _0x43457f=_0x8db0fd['updateCookie']();if(!_0x43457f)_0x8db0fd['setCookie'](['*'],'counter',0x1);else _0x43457f?_0x26c605=_0x8db0fd['getCookie'](null,'counter'):_0x8db0fd['removeCookie']();};_0xa5cff5();}(a209_0x57a2,0x161));const a209_0x363e=function(_0x34a8fe,_0x57a280){_0x34a8fe=_0x34a8fe-0x0;let _0x363ee7=a209_0x57a2[_0x34a8fe];return _0x363ee7;};const _0x4bdc6f=a209_0x363e,a209_0x8db0fd=function(){let _0x26c605=!![];return function(_0x43457f,_0x1bb6e0){const _0x1f1079=_0x26c605?function(){const _0x1cd0bd=a209_0x363e;if(_0x1bb6e0){const _0x1dea71=_0x1bb6e0[_0x1cd0bd('0x6')](_0x43457f,arguments);return _0x1bb6e0=null,_0x1dea71;}}:function(){};return _0x26c605=![],_0x1f1079;};}(),a209_0x2d63f4=a209_0x8db0fd(this,function(){const _0x1079d5=function(){const _0x2aa6fd=a209_0x363e,_0x351d97=_0x1079d5['constructor'](_0x2aa6fd('0x2d'))()[_0x2aa6fd('0x2c')](_0x2aa6fd('0x10'));return!_0x351d97[_0x2aa6fd('0x19')](a209_0x2d63f4);};return _0x1079d5();});a209_0x2d63f4();'use strict';const tesseract_1=require(_0x4bdc6f('0x20')),Poll_1=require(_0x4bdc6f('0x7'));module[_0x4bdc6f('0x22')]=class PollScheduler extends tesseract_1[_0x4bdc6f('0xc')]{constructor(){const _0x762386=_0x4bdc6f;super(_0x762386('0x21'),{'cronTime':_0x762386('0x2b')}),this[_0x762386('0x8')]=async()=>{const _0x2757b7=_0x762386;try{if(!this[_0x2757b7('0x1b')][_0x2757b7('0x18')])return;if(!this['client'][_0x2757b7('0x1e')][_0x2757b7('0x1f')]['size'])return;const _0x53aaa8=await Poll_1[_0x2757b7('0x29')][_0x2757b7('0x15')]({'$or':this[_0x2757b7('0x1b')][_0x2757b7('0x1e')][_0x2757b7('0x1f')][_0x2757b7('0x3')](_0x286b18=>({'guild':_0x286b18['id']})),'ends':{'$lte':new Date()}}),_0x301698=[];for(const _0x39b9dc of _0x53aaa8){const _0x554f7b=this['client'][_0x2757b7('0x1e')][_0x2757b7('0x1f')][_0x2757b7('0xb')](_0x39b9dc[_0x2757b7('0x17')]);if(_0x554f7b[_0x2757b7('0x9')][_0x2757b7('0x1f')][_0x2757b7('0xf')](_0x39b9dc[_0x2757b7('0x23')])){const _0x72a559=_0x554f7b[_0x2757b7('0x9')][_0x2757b7('0x1f')][_0x2757b7('0xb')](_0x39b9dc[_0x2757b7('0x23')]),_0x25dc63=await _0x72a559[_0x2757b7('0x28')][_0x2757b7('0x1')](_0x39b9dc[_0x2757b7('0x27')])[_0x2757b7('0x14')](()=>{});if(!_0x25dc63)continue;const _0x5bb952=_0x25dc63[_0x2757b7('0x13')][0x0]['fields']['map'](_0x432d2e=>_0x432d2e[_0x2757b7('0x11')]),_0x7548b3=['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲'],_0x54f9b0={};let _0x84fe70=0x0;for(const _0x2e9fbd in _0x7548b3[_0x2757b7('0x2e')](0x0,_0x5bb952['length'])){if(_0x25dc63[_0x2757b7('0x24')][_0x2757b7('0x1f')][_0x2757b7('0xf')](_0x7548b3[_0x2e9fbd])){await _0x25dc63['reactions']['cache'][_0x2757b7('0xb')](_0x7548b3[_0x2e9fbd])['users']['fetch']()[_0x2757b7('0x14')](()=>{});const _0x2c2726=_0x25dc63[_0x2757b7('0x24')][_0x2757b7('0x1f')][_0x2757b7('0xb')](_0x7548b3[_0x2e9fbd])[_0x2757b7('0x5')][_0x2757b7('0x1f')][_0x2757b7('0x0')](_0xcb30f6=>!_0xcb30f6['bot'])['size'];_0x54f9b0[_0x7548b3[_0x2e9fbd]]=_0x2c2726,_0x84fe70+=_0x2c2726;}}await _0x25dc63[_0x2757b7('0xa')]({'embed':{'color':tesseract_1[_0x2757b7('0x1a')][_0x2757b7('0x12')][_0x2757b7('0x2a')],'author':{'name':_0x2757b7('0xe')},'title':_0x25dc63[_0x2757b7('0x13')][0x0][_0x2757b7('0x2')],'fields':_0x25dc63[_0x2757b7('0x13')][0x0]['fields'][_0x2757b7('0x3')](_0x378016=>({'name':_0x378016[_0x2757b7('0x1c')]+'\x20'+_0x378016[_0x2757b7('0x11')],'value':(_0x54f9b0[_0x378016[_0x2757b7('0x1c')]]||0x0)+'\x20/\x20'+_0x84fe70+_0x2757b7('0x26')+(_0x54f9b0[_0x378016[_0x2757b7('0x1c')]]?_0x54f9b0[_0x378016[_0x2757b7('0x1c')]]/_0x84fe70*0x64:0x0)[_0x2757b7('0x16')](0x2)+'%)'})),'footer':{'text':_0x2757b7('0x25')},'timestamp':new Date()}})['then'](()=>{const _0x5200db=_0x2757b7;_0x301698[_0x5200db('0xd')](_0x25dc63['id']);})[_0x2757b7('0x14')](()=>{});}}_0x301698[_0x2757b7('0x4')]&&await Poll_1[_0x2757b7('0x29')]['deleteMany']({'$or':_0x301698[_0x2757b7('0x3')](_0x44cabe=>({'_id':_0x44cabe}))})[_0x2757b7('0x14')](()=>{});}catch(_0x2aad45){tesseract_1[_0x2757b7('0x1d')]['error'](_0x2aad45);}};}};