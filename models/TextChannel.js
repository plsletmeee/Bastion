const a187_0x5754=['constructor','Guild','model','default','mongoose','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','__esModule','defineProperty','compile'];(function(_0x367734,_0x57540c){const _0x1ec30a=function(_0x415341){while(--_0x415341){_0x367734['push'](_0x367734['shift']());}};const _0x5d60d3=function(){const _0x579d1f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x561636,_0x1cea1f,_0x4b9c89,_0x25eadb){_0x25eadb=_0x25eadb||{};let _0x46f421=_0x1cea1f+'='+_0x4b9c89;let _0x3c670f=0x0;for(let _0x25d786=0x0,_0x7853bc=_0x561636['length'];_0x25d786<_0x7853bc;_0x25d786++){const _0x8c3b1d=_0x561636[_0x25d786];_0x46f421+=';\x20'+_0x8c3b1d;const _0x53352b=_0x561636[_0x8c3b1d];_0x561636['push'](_0x53352b);_0x7853bc=_0x561636['length'];if(_0x53352b!==!![]){_0x46f421+='='+_0x53352b;}}_0x25eadb['cookie']=_0x46f421;},'removeCookie':function(){return'dev';},'getCookie':function(_0x598c97,_0x419b6a){_0x598c97=_0x598c97||function(_0x190b78){return _0x190b78;};const _0x47fe77=_0x598c97(new RegExp('(?:^|;\x20)'+_0x419b6a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x9390ab=function(_0x224698,_0x21ef8f){_0x224698(++_0x21ef8f);};_0x9390ab(_0x1ec30a,_0x57540c);return _0x47fe77?decodeURIComponent(_0x47fe77[0x1]):undefined;}};const _0x45a05e=function(){const _0x54474=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x54474['test'](_0x579d1f['removeCookie']['toString']());};_0x579d1f['updateCookie']=_0x45a05e;let _0x5e4f6c='';const _0x3507e4=_0x579d1f['updateCookie']();if(!_0x3507e4){_0x579d1f['setCookie'](['*'],'counter',0x1);}else if(_0x3507e4){_0x5e4f6c=_0x579d1f['getCookie'](null,'counter');}else{_0x579d1f['removeCookie']();}};_0x5d60d3();}(a187_0x5754,0x148));const a187_0x1ec3=function(_0x367734,_0x57540c){_0x367734=_0x367734-0x0;let _0x1ec30a=a187_0x5754[_0x367734];return _0x1ec30a;};const a187_0x579d1f=function(){let _0x47fe77=!![];return function(_0x9390ab,_0x190b78){const _0x224698=_0x47fe77?function(){if(_0x190b78){const _0x21ef8f=_0x190b78['apply'](_0x9390ab,arguments);_0x190b78=null;return _0x21ef8f;}}:function(){};_0x47fe77=![];return _0x224698;};}();const a187_0x415341=a187_0x579d1f(this,function(){const _0x54474=function(){const _0x2f9047=_0x54474[a187_0x1ec3('0x2')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a187_0x1ec3('0x1')](a187_0x1ec3('0x7'));return!_0x2f9047[a187_0x1ec3('0x8')](a187_0x415341);};return _0x54474();});a187_0x415341();'use strict';Object[a187_0x1ec3('0x0')](exports,a187_0x1ec3('0x9'),{'value':!![]});const mongoose=require(a187_0x1ec3('0x6'));exports[a187_0x1ec3('0x5')]=mongoose[a187_0x1ec3('0x4')]('TextChannel',new mongoose['Schema']({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':a187_0x1ec3('0x3')},'language':{'type':String},'blacklisted':{'type':Boolean},'ignoredFilters':{'type':{'inviteFilter':{'type':Boolean},'linkFilter':{'type':Boolean},'messageFilter':{'type':Boolean}}},'voting':{'type':Boolean},'disabledCommands':{'type':[String]}}));