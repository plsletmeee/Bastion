const a197_0x486f=['User','Schema','default','Playlist','Guild','constructor','__esModule','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','defineProperty','model'];(function(_0x4082cc,_0x486f46){const _0x5ae893=function(_0x2224dd){while(--_0x2224dd){_0x4082cc['push'](_0x4082cc['shift']());}},_0x3fde51=function(){const _0x407681={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5e9bf7,_0x3bef39,_0x23ac74,_0x1e59aa){_0x1e59aa=_0x1e59aa||{};let _0x188bcd=_0x3bef39+'='+_0x23ac74,_0x5ea610=0x0;for(let _0x3d3f4b=0x0,_0x55c5c5=_0x5e9bf7['length'];_0x3d3f4b<_0x55c5c5;_0x3d3f4b++){const _0x59a6ed=_0x5e9bf7[_0x3d3f4b];_0x188bcd+=';\x20'+_0x59a6ed;const _0x313753=_0x5e9bf7[_0x59a6ed];_0x5e9bf7['push'](_0x313753),_0x55c5c5=_0x5e9bf7['length'],_0x313753!==!![]&&(_0x188bcd+='='+_0x313753);}_0x1e59aa['cookie']=_0x188bcd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4010c8,_0x25092c){_0x4010c8=_0x4010c8||function(_0x28fdd8){return _0x28fdd8;};const _0x503c5b=_0x4010c8(new RegExp('(?:^|;\x20)'+_0x25092c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5a9fdf=function(_0x5e2fec,_0x467c52){_0x5e2fec(++_0x467c52);};return _0x5a9fdf(_0x5ae893,_0x486f46),_0x503c5b?decodeURIComponent(_0x503c5b[0x1]):undefined;}},_0x2ef575=function(){const _0x1f4488=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1f4488['test'](_0x407681['removeCookie']['toString']());};_0x407681['updateCookie']=_0x2ef575;let _0x23cf89='';const _0x112d64=_0x407681['updateCookie']();if(!_0x112d64)_0x407681['setCookie'](['*'],'counter',0x1);else _0x112d64?_0x23cf89=_0x407681['getCookie'](null,'counter'):_0x407681['removeCookie']();};_0x3fde51();}(a197_0x486f,0x1e4));const a197_0x5ae8=function(_0x4082cc,_0x486f46){_0x4082cc=_0x4082cc-0x0;let _0x5ae893=a197_0x486f[_0x4082cc];return _0x5ae893;};const _0x277850=a197_0x5ae8,a197_0x407681=function(){let _0x23cf89=!![];return function(_0x112d64,_0x5e9bf7){const _0x3bef39=_0x23cf89?function(){if(_0x5e9bf7){const _0x23ac74=_0x5e9bf7['apply'](_0x112d64,arguments);return _0x5e9bf7=null,_0x23ac74;}}:function(){};return _0x23cf89=![],_0x3bef39;};}(),a197_0x2224dd=a197_0x407681(this,function(){const _0x1e59aa=function(){const _0x20444c=a197_0x5ae8,_0x188bcd=_0x1e59aa[_0x20444c('0x1')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x20444c('0x1')](_0x20444c('0x3'));return!_0x188bcd['test'](a197_0x2224dd);};return _0x1e59aa();});a197_0x2224dd();'use strict';Object[_0x277850('0x4')](exports,_0x277850('0x2'),{'value':!![]});const mongoose=require('mongoose'),playlistSchema=new mongoose[(_0x277850('0x7'))]({'guild':{'type':String,'required':!![],'ref':_0x277850('0x0')},'creator':{'type':String,'required':!![],'ref':_0x277850('0x6')},'songs':{'type':[String]}});exports[_0x277850('0x8')]=mongoose[_0x277850('0x5')](_0x277850('0x9'),playlistSchema);