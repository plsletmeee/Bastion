const a149_0x189e=['json','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Constants','slice','exports','length','wikipedia\x20TITLE','/wikimedia/wikipedia/','INVALID_COMMAND_SYNTAX','exec','constructor','../../utils/omnic','query','Powered\x20by\x20Omnic','join','DiscordError','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','pages','extract','test','It\x20allows\x20you\x20to\x20search\x20the\x20Wikipedia\x20for\x20the\x20specified\x20title.','\x0a...','COLORS','name','../../utils/errors','NOT_FOUND','Wikipedia','BASTION_ERROR_TYPE','apply','send','guild','title','sanitize','IRIS'];(function(_0x12b239,_0x19581d){const _0x189e2b=function(_0x3abd5c){while(--_0x3abd5c){_0x12b239['push'](_0x12b239['shift']());}},_0x5dbb9c=function(){const _0xd92c66={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2d02cd,_0x2a2db5,_0x18af15,_0x5c1fc5){_0x5c1fc5=_0x5c1fc5||{};let _0x11a54=_0x2a2db5+'='+_0x18af15,_0x5382c9=0x0;for(let _0x95f843=0x0,_0x8aa6db=_0x2d02cd['length'];_0x95f843<_0x8aa6db;_0x95f843++){const _0x357121=_0x2d02cd[_0x95f843];_0x11a54+=';\x20'+_0x357121;const _0x307e50=_0x2d02cd[_0x357121];_0x2d02cd['push'](_0x307e50),_0x8aa6db=_0x2d02cd['length'],_0x307e50!==!![]&&(_0x11a54+='='+_0x307e50);}_0x5c1fc5['cookie']=_0x11a54;},'removeCookie':function(){return'dev';},'getCookie':function(_0x19a867,_0x2ae3d7){_0x19a867=_0x19a867||function(_0x34740e){return _0x34740e;};const _0x233b18=_0x19a867(new RegExp('(?:^|;\x20)'+_0x2ae3d7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5352be=function(_0x424766,_0x116985){_0x424766(++_0x116985);};return _0x5352be(_0x189e2b,_0x19581d),_0x233b18?decodeURIComponent(_0x233b18[0x1]):undefined;}},_0x4e78cc=function(){const _0x3f77d0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f77d0['test'](_0xd92c66['removeCookie']['toString']());};_0xd92c66['updateCookie']=_0x4e78cc;let _0x85331e='';const _0x487258=_0xd92c66['updateCookie']();if(!_0x487258)_0xd92c66['setCookie'](['*'],'counter',0x1);else _0x487258?_0x85331e=_0xd92c66['getCookie'](null,'counter'):_0xd92c66['removeCookie']();};_0x5dbb9c();}(a149_0x189e,0x1b5));const a149_0x5dbb=function(_0x12b239,_0x19581d){_0x12b239=_0x12b239-0x1f4;let _0x189e2b=a149_0x189e[_0x12b239];return _0x189e2b;};const a149_0x5d5cbe=a149_0x5dbb,a149_0x4e78cc=function(){let _0x487258=!![];return function(_0x2d02cd,_0x2a2db5){const _0x18af15=_0x487258?function(){const _0xdd568f=a149_0x5dbb;if(_0x2a2db5){const _0x5c1fc5=_0x2a2db5[_0xdd568f(0x215)](_0x2d02cd,arguments);return _0x2a2db5=null,_0x5c1fc5;}}:function(){};return _0x487258=![],_0x18af15;};}(),a149_0xd92c66=a149_0x4e78cc(this,function(){const _0x11a54=function(){const _0x4d878f=a149_0x5dbb,_0x5382c9=_0x11a54[_0x4d878f(0x203)](_0x4d878f(0x1fa))()[_0x4d878f(0x203)](_0x4d878f(0x209));return!_0x5382c9[_0x4d878f(0x20c)](a149_0xd92c66);};return _0x11a54();});a149_0xd92c66();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a149_0x5d5cbe(0x211)),omnic=require(a149_0x5d5cbe(0x204));module[a149_0x5d5cbe(0x1fd)]=class WikipediaCommand extends tesseract_1['Command']{constructor(){const _0x4a5f08=a149_0x5d5cbe;super('wikipedia',{'description':_0x4a5f08(0x20d),'triggers':[],'arguments':{},'scope':_0x4a5f08(0x1f5),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x4a5f08(0x1ff)]}),this[_0x4a5f08(0x1f7)]=_0x95f843=>{const _0x3387c4=_0x4a5f08;return _0x95f843[_0x3387c4(0x1fe)]>0x7d0?_0x95f843[_0x3387c4(0x1fc)](0x0,0x7d0)+_0x3387c4(0x20e):_0x95f843;},this[_0x4a5f08(0x202)]=async(_0x8aa6db,_0x357121)=>{const _0x5c8d82=_0x4a5f08;if(!_0x357121['_'][_0x5c8d82(0x1fe)])throw new errors[(_0x5c8d82(0x208))](errors[_0x5c8d82(0x214)][_0x5c8d82(0x201)],this[_0x5c8d82(0x210)]);const _0x307e50=_0x357121['_'][_0x5c8d82(0x207)]('\x20'),_0x19a867=await omnic['makeRequest'](_0x5c8d82(0x200)+_0x307e50),_0x2ae3d7=await _0x19a867[_0x5c8d82(0x1f9)]();if(!_0x2ae3d7[_0x5c8d82(0x205)]||!_0x2ae3d7[_0x5c8d82(0x205)][_0x5c8d82(0x20a)])throw new Error(_0x5c8d82(0x212));await _0x8aa6db['channel'][_0x5c8d82(0x1f4)]({'embed':{'color':tesseract_1[_0x5c8d82(0x1fb)][_0x5c8d82(0x20f)][_0x5c8d82(0x1f8)],'author':{'name':_0x5c8d82(0x213),'url':'https://en.wikipedia.org/'},'title':_0x2ae3d7[_0x5c8d82(0x205)][_0x5c8d82(0x20a)][0x0][_0x5c8d82(0x1f6)],'url':_0x2ae3d7[_0x5c8d82(0x205)][_0x5c8d82(0x20a)][0x0]['fullurl'],'description':this['sanitize'](_0x2ae3d7['query'][_0x5c8d82(0x20a)][0x0][_0x5c8d82(0x20b)]),'image':{'url':_0x2ae3d7[_0x5c8d82(0x205)][_0x5c8d82(0x20a)][0x0]['thumbnail']['source']},'footer':{'text':_0x5c8d82(0x206)}}});};}};