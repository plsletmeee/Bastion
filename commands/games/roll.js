const a63_0x500e=['Dice\x20Roll','apply','match','exports','enabled','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','length','\x20/\x20','channel','test','join','member','pattern','It\x20allows\x20you\x20to\x20roll\x20dice\x20and\x20see\x20the\x20result.\x20It\x20supports\x20dice\x20notation.\x20It\x20also\x20supports\x20gambling.','IRIS','exec','toLowerCase','gambling','roll','bet','filter','Modifiers','debit','roll\x20--bet\x20RESULT','../../utils/numbers','modifierPattern','credit','parseInt','getRandomInt','Lost\x20the\x20bet\x20in\x20Roll.','reduce','GAMBLING_DISABLED','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','roll\x20NOTATION','document','applyModifiers','constructor','@bastion/tesseract','push','multiplier','Result'];(function(_0x1ca50c,_0x26f0f4){const _0x500ebe=function(_0x1f7815){while(--_0x1f7815){_0x1ca50c['push'](_0x1ca50c['shift']());}},_0x5965aa=function(){const _0x3d79ce={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xfb5301,_0x12b8ce,_0xd4cf3e,_0x284d3c){_0x284d3c=_0x284d3c||{};let _0x4bf451=_0x12b8ce+'='+_0xd4cf3e,_0x362a4d=0x0;for(let _0x2e3613=0x0,_0x2fc4c2=_0xfb5301['length'];_0x2e3613<_0x2fc4c2;_0x2e3613++){const _0x54a673=_0xfb5301[_0x2e3613];_0x4bf451+=';\x20'+_0x54a673;const _0x2038a1=_0xfb5301[_0x54a673];_0xfb5301['push'](_0x2038a1),_0x2fc4c2=_0xfb5301['length'],_0x2038a1!==!![]&&(_0x4bf451+='='+_0x2038a1);}_0x284d3c['cookie']=_0x4bf451;},'removeCookie':function(){return'dev';},'getCookie':function(_0x44405a,_0x2acfb9){_0x44405a=_0x44405a||function(_0x5b90c6){return _0x5b90c6;};const _0x45e93f=_0x44405a(new RegExp('(?:^|;\x20)'+_0x2acfb9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1c482b=function(_0x48aed1,_0x530bd9){_0x48aed1(++_0x530bd9);};return _0x1c482b(_0x500ebe,_0x26f0f4),_0x45e93f?decodeURIComponent(_0x45e93f[0x1]):undefined;}},_0x5a1113=function(){const _0x12a62e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x12a62e['test'](_0x3d79ce['removeCookie']['toString']());};_0x3d79ce['updateCookie']=_0x5a1113;let _0x328650='';const _0x2b6406=_0x3d79ce['updateCookie']();if(!_0x2b6406)_0x3d79ce['setCookie'](['*'],'counter',0x1);else _0x2b6406?_0x328650=_0x3d79ce['getCookie'](null,'counter'):_0x3d79ce['removeCookie']();};_0x5965aa();}(a63_0x500e,0x123));const a63_0x5965=function(_0x1ca50c,_0x26f0f4){_0x1ca50c=_0x1ca50c-0x1b1;let _0x500ebe=a63_0x500e[_0x1ca50c];return _0x500ebe;};const a63_0x4a8b7a=a63_0x5965,a63_0x5a1113=function(){let _0x2b6406=!![];return function(_0xfb5301,_0x12b8ce){const _0xd4cf3e=_0x2b6406?function(){const _0x35e985=a63_0x5965;if(_0x12b8ce){const _0x284d3c=_0x12b8ce[_0x35e985(0x1b5)](_0xfb5301,arguments);return _0x12b8ce=null,_0x284d3c;}}:function(){};return _0x2b6406=![],_0xd4cf3e;};}(),a63_0x3d79ce=a63_0x5a1113(this,function(){const _0x4bf451=function(){const _0x349263=a63_0x5965,_0x362a4d=_0x4bf451[_0x349263(0x1d9)](_0x349263(0x1b9))()['constructor'](_0x349263(0x1d5));return!_0x362a4d[_0x349263(0x1be)](a63_0x3d79ce);};return _0x4bf451();});a63_0x3d79ce();'use strict';const tesseract_1=require(a63_0x4a8b7a(0x1da)),numbers=require(a63_0x4a8b7a(0x1cd));module[a63_0x4a8b7a(0x1b7)]=class RollCommand extends tesseract_1['Command']{constructor(){const _0x378f8f=a63_0x4a8b7a;super(_0x378f8f(0x1c7),{'description':_0x378f8f(0x1c2),'triggers':[],'arguments':{'number':[_0x378f8f(0x1c8)]},'scope':_0x378f8f(0x1ba),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x378f8f(0x1c7),_0x378f8f(0x1d6),_0x378f8f(0x1cc)]}),this['applyModifier']=(_0x2e3613,_0x2fc4c2)=>{const _0x3f0f6e=_0x378f8f,[,_0x54a673,_0x2038a1]=_0x2fc4c2[_0x3f0f6e(0x1b6)](this[_0x3f0f6e(0x1ce)]);switch(_0x54a673[_0x3f0f6e(0x1c5)]()){case'+':return _0x2e3613+Number[_0x3f0f6e(0x1d0)](_0x2038a1);case'-':return _0x2e3613-Number[_0x3f0f6e(0x1d0)](_0x2038a1);case'/':return _0x2e3613/Number[_0x3f0f6e(0x1d0)](_0x2038a1);case'*':case'x':return _0x2e3613*Number[_0x3f0f6e(0x1d0)](_0x2038a1);default:return _0x2e3613;}},this[_0x378f8f(0x1d8)]=(_0x44405a,_0x2acfb9)=>{for(const _0x45e93f of _0x2acfb9){_0x44405a=this['applyModifier'](_0x44405a,_0x45e93f);}return _0x44405a;},this[_0x378f8f(0x1c4)]=async(_0x1c482b,_0x5b90c6)=>{const _0x3e6a2e=_0x378f8f,[,_0x48aed1,_0x530bd9,..._0x12a62e]=_0x5b90c6['_']['join']('')[_0x3e6a2e(0x1b6)](this[_0x3e6a2e(0x1c1)]),_0x10b1a8=_0x48aed1?Number['parseInt'](_0x48aed1):0x1,_0x598912=_0x530bd9?Number[_0x3e6a2e(0x1d0)](_0x530bd9):0x6,_0x18db7f=[];for(let _0x26b151=0x0;_0x26b151<_0x10b1a8;_0x26b151++){_0x18db7f[_0x3e6a2e(0x1b1)](numbers[_0x3e6a2e(0x1d1)](0x1,_0x598912));}let _0x30df39=_0x18db7f[_0x3e6a2e(0x1d3)]((_0x3a045d,_0x4dec77)=>_0x3a045d+_0x4dec77,0x0);const _0x491521=[];_0x12a62e[_0x3e6a2e(0x1c9)](_0x867b21=>_0x867b21)[_0x3e6a2e(0x1bb)]&&(_0x491521[_0x3e6a2e(0x1b1)]({'name':_0x3e6a2e(0x1ca),'value':_0x12a62e[_0x3e6a2e(0x1bf)]('\x20'),'inline':!![]}),_0x30df39=this[_0x3e6a2e(0x1d8)](_0x30df39,_0x12a62e[_0x3e6a2e(0x1c9)](_0x2b9cbf=>_0x2b9cbf)));if(_0x5b90c6[_0x3e6a2e(0x1c8)]){if(_0x1c482b[_0x3e6a2e(0x1ba)][_0x3e6a2e(0x1d7)][_0x3e6a2e(0x1c6)]&&_0x1c482b[_0x3e6a2e(0x1ba)][_0x3e6a2e(0x1d7)][_0x3e6a2e(0x1c6)][_0x3e6a2e(0x1b8)])_0x30df39===_0x5b90c6[_0x3e6a2e(0x1c8)]?_0x1c482b['member'][_0x3e6a2e(0x1cf)](0x64*(_0x1c482b['guild'][_0x3e6a2e(0x1d7)][_0x3e6a2e(0x1c6)]['multiplier']||0x1),'Won\x20the\x20bet\x20in\x20Roll.'):_0x1c482b[_0x3e6a2e(0x1c0)][_0x3e6a2e(0x1cb)](0x64*(_0x1c482b[_0x3e6a2e(0x1ba)]['document'][_0x3e6a2e(0x1c6)][_0x3e6a2e(0x1b2)]||0x1),_0x3e6a2e(0x1d2));else throw new Error(_0x3e6a2e(0x1d4));}_0x491521[_0x3e6a2e(0x1b1)]({'name':_0x3e6a2e(0x1b3),'value':_0x30df39,'inline':!![]}),await _0x1c482b[_0x3e6a2e(0x1bd)]['send']({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x3e6a2e(0x1c3)],'title':_0x3e6a2e(0x1b4),'description':_0x18db7f['join'](_0x3e6a2e(0x1bc)),'fields':_0x491521}});},this[_0x378f8f(0x1c1)]=/^(\d+)?(?:d(\d*))?([-+x*/]\d+)?([-+x*/]\d+)?$/i,this[_0x378f8f(0x1ce)]=/^([-+x*/])(\d+)$/i;}};