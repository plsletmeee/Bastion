const a202_0x3dc8=['constructor','model','test','Transaction','__esModule','apply','defineProperty','default','Guild','Schema','mongoose'];(function(_0x1ac619,_0x3dc836){const _0x50d4ee=function(_0x7ae115){while(--_0x7ae115){_0x1ac619['push'](_0x1ac619['shift']());}},_0x49e926=function(){const _0x3dbb70={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2232d7,_0x92b843,_0xeb7bdd,_0x479e6d){_0x479e6d=_0x479e6d||{};let _0x34186c=_0x92b843+'='+_0xeb7bdd,_0x246f75=0x0;for(let _0x16bb92=0x0,_0x1f2a69=_0x2232d7['length'];_0x16bb92<_0x1f2a69;_0x16bb92++){const _0x55e35b=_0x2232d7[_0x16bb92];_0x34186c+=';\x20'+_0x55e35b;const _0x5151b0=_0x2232d7[_0x55e35b];_0x2232d7['push'](_0x5151b0),_0x1f2a69=_0x2232d7['length'],_0x5151b0!==!![]&&(_0x34186c+='='+_0x5151b0);}_0x479e6d['cookie']=_0x34186c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42d1d0,_0x4936cc){_0x42d1d0=_0x42d1d0||function(_0x204107){return _0x204107;};const _0x50321c=_0x42d1d0(new RegExp('(?:^|;\x20)'+_0x4936cc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1d7fa4=function(_0x27ea0e,_0x5a2b57){_0x27ea0e(++_0x5a2b57);};return _0x1d7fa4(_0x50d4ee,_0x3dc836),_0x50321c?decodeURIComponent(_0x50321c[0x1]):undefined;}},_0x2a076a=function(){const _0x220926=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x220926['test'](_0x3dbb70['removeCookie']['toString']());};_0x3dbb70['updateCookie']=_0x2a076a;let _0x20f7e4='';const _0x8fd49b=_0x3dbb70['updateCookie']();if(!_0x8fd49b)_0x3dbb70['setCookie'](['*'],'counter',0x1);else _0x8fd49b?_0x20f7e4=_0x3dbb70['getCookie'](null,'counter'):_0x3dbb70['removeCookie']();};_0x49e926();}(a202_0x3dc8,0x68));const a202_0x50d4=function(_0x1ac619,_0x3dc836){_0x1ac619=_0x1ac619-0x0;let _0x50d4ee=a202_0x3dc8[_0x1ac619];return _0x50d4ee;};const _0x4ba601=a202_0x50d4,a202_0x3dbb70=function(){let _0x20f7e4=!![];return function(_0x8fd49b,_0x2232d7){const _0x92b843=_0x20f7e4?function(){const _0x1336b8=a202_0x50d4;if(_0x2232d7){const _0xeb7bdd=_0x2232d7[_0x1336b8('0x0')](_0x8fd49b,arguments);return _0x2232d7=null,_0xeb7bdd;}}:function(){};return _0x20f7e4=![],_0x92b843;};}(),a202_0x7ae115=a202_0x3dbb70(this,function(){const _0x479e6d=function(){const _0x1e6b8b=a202_0x50d4,_0x34186c=_0x479e6d[_0x1e6b8b('0x6')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1e6b8b('0x6')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x34186c[_0x1e6b8b('0x8')](a202_0x7ae115);};return _0x479e6d();});a202_0x7ae115();'use strict';Object[_0x4ba601('0x1')](exports,_0x4ba601('0xa'),{'value':!![]});const mongoose=require(_0x4ba601('0x5')),transactionSchema=new mongoose[(_0x4ba601('0x4'))]({'guild':{'type':String,'required':!![],'ref':_0x4ba601('0x3')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports[_0x4ba601('0x2')]=mongoose[_0x4ba601('0x7')](_0x4ba601('0x9'),transactionSchema);