const a102_0x2c36=['NO_PERMISSION','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','tag','COLORS','Kick\x20Threshold','test','getString','You\x20haven\x27t\x20caused\x20any\x20trouble,\x20yet.\x20Keep\x20it\x20up!','constructor','../../models/Guild','document','GREEN','ban','infractions\x20--ban\x2010','Infractions','send','author','kickThreshold','default','It\x20allows\x20you\x20to\x20list\x20all\x20your\x20infractions.\x20If\x20you\x27re\x20a\x20server\x20manager,\x20it\x20also\x20allows\x20you\x20to\x20set\x20the\x20thresholds\x20for\x20the\x20actions\x20that\x20should\x20be\x20taken\x20for\x20violating\x20infractions.','floor','save','length','guild','member','clamp','info','join','../../utils/numbers','banThreshold','infractions\x20--kick\x205','Constants','apply','Ban\x20Threshold','exports','language','infractions','catch','channel','has','kick','ORANGE'];(function(_0x5b2c34,_0x5ca1f4){const _0x2c36eb=function(_0x34c4aa){while(--_0x34c4aa){_0x5b2c34['push'](_0x5b2c34['shift']());}},_0xae3aab=function(){const _0x849d5d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x404240,_0x14b6ea,_0x35b757,_0x583eac){_0x583eac=_0x583eac||{};let _0x5c45da=_0x14b6ea+'='+_0x35b757,_0x2417f8=0x0;for(let _0x5c918b=0x0,_0x19e5f6=_0x404240['length'];_0x5c918b<_0x19e5f6;_0x5c918b++){const _0xdff9df=_0x404240[_0x5c918b];_0x5c45da+=';\x20'+_0xdff9df;const _0x2e2d85=_0x404240[_0xdff9df];_0x404240['push'](_0x2e2d85),_0x19e5f6=_0x404240['length'],_0x2e2d85!==!![]&&(_0x5c45da+='='+_0x2e2d85);}_0x583eac['cookie']=_0x5c45da;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40dcf5,_0x1486f5){_0x40dcf5=_0x40dcf5||function(_0x53f102){return _0x53f102;};const _0x4c6c73=_0x40dcf5(new RegExp('(?:^|;\x20)'+_0x1486f5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1c2f53=function(_0x5c2285,_0x52715b){_0x5c2285(++_0x52715b);};return _0x1c2f53(_0x2c36eb,_0x5ca1f4),_0x4c6c73?decodeURIComponent(_0x4c6c73[0x1]):undefined;}},_0x3e6a2b=function(){const _0x7ba7d6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7ba7d6['test'](_0x849d5d['removeCookie']['toString']());};_0x849d5d['updateCookie']=_0x3e6a2b;let _0x1b8a9e='';const _0x2549f0=_0x849d5d['updateCookie']();if(!_0x2549f0)_0x849d5d['setCookie'](['*'],'counter',0x1);else _0x2549f0?_0x1b8a9e=_0x849d5d['getCookie'](null,'counter'):_0x849d5d['removeCookie']();};_0xae3aab();}(a102_0x2c36,0x16a));const a102_0xae3a=function(_0x5b2c34,_0x5ca1f4){_0x5b2c34=_0x5b2c34-0x125;let _0x2c36eb=a102_0x2c36[_0x5b2c34];return _0x2c36eb;};const a102_0x375531=a102_0xae3a,a102_0x3e6a2b=function(){let _0x2549f0=!![];return function(_0x404240,_0x14b6ea){const _0x35b757=_0x2549f0?function(){const _0x2e2d64=a102_0xae3a;if(_0x14b6ea){const _0x583eac=_0x14b6ea[_0x2e2d64(0x12b)](_0x404240,arguments);return _0x14b6ea=null,_0x583eac;}}:function(){};return _0x2549f0=![],_0x35b757;};}(),a102_0x849d5d=a102_0x3e6a2b(this,function(){const _0x5c45da=function(){const _0x149b03=a102_0xae3a,_0x2417f8=_0x5c45da[_0x149b03(0x13d)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x149b03(0x136));return!_0x2417f8[_0x149b03(0x13a)](a102_0x849d5d);};return _0x5c45da();});a102_0x849d5d();'use strict';const tesseract_1=require('@bastion/tesseract'),Guild_1=require(a102_0x375531(0x13e)),numbers=require(a102_0x375531(0x127));module[a102_0x375531(0x12d)]=class InfractionsCommand extends tesseract_1['Command']{constructor(){const _0x28a1c4=a102_0x375531;super(_0x28a1c4(0x12f),{'description':_0x28a1c4(0x148),'triggers':[],'arguments':{'coerce':{'kick':_0x5c918b=>Math[_0x28a1c4(0x149)](numbers[_0x28a1c4(0x14e)](_0x5c918b,0x1,0x100)),'ban':_0x19e5f6=>Math[_0x28a1c4(0x149)](numbers[_0x28a1c4(0x14e)](_0x19e5f6,0x1,0x100))},'number':[_0x28a1c4(0x133),_0x28a1c4(0x141)]},'scope':_0x28a1c4(0x14c),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x28a1c4(0x12f),_0x28a1c4(0x129),_0x28a1c4(0x142)]}),this['exec']=async(_0xdff9df,_0x2e2d85)=>{const _0x2ed2d1=_0x28a1c4;if(_0x2e2d85[_0x2ed2d1(0x133)]||_0x2e2d85[_0x2ed2d1(0x141)]){if(!_0xdff9df[_0x2ed2d1(0x14d)]['permissions'][_0x2ed2d1(0x132)]('MANAGE_GUILD'))throw new Error(_0x2ed2d1(0x135));const _0x40dcf5=await Guild_1[_0x2ed2d1(0x147)]['findById'](_0xdff9df[_0x2ed2d1(0x14c)]['id']);return _0x40dcf5[_0x2ed2d1(0x12f)]={..._0x40dcf5['infractions'],'kickThreshold':_0x2e2d85[_0x2ed2d1(0x133)]?_0x2e2d85['kick']:_0x40dcf5['infractions']&&_0x40dcf5[_0x2ed2d1(0x12f)]['kickThreshold']?_0x40dcf5['infractions'][_0x2ed2d1(0x146)]:undefined,'banThreshold':_0x2e2d85['ban']?_0x2e2d85[_0x2ed2d1(0x141)]:_0x40dcf5[_0x2ed2d1(0x12f)]&&_0x40dcf5[_0x2ed2d1(0x12f)][_0x2ed2d1(0x128)]?_0x40dcf5['infractions'][_0x2ed2d1(0x128)]:undefined},await _0x40dcf5[_0x2ed2d1(0x14a)](),await _0xdff9df[_0x2ed2d1(0x131)][_0x2ed2d1(0x144)]({'embed':{'color':tesseract_1['Constants'][_0x2ed2d1(0x138)][_0x2ed2d1(0x140)],'description':this['client']['locale'][_0x2ed2d1(0x13b)](_0xdff9df[_0x2ed2d1(0x14c)][_0x2ed2d1(0x13f)][_0x2ed2d1(0x12e)],_0x2ed2d1(0x125),'infractionThreshold',_0xdff9df[_0x2ed2d1(0x145)]['tag']),'fields':[{'name':_0x2ed2d1(0x139),'value':_0x40dcf5[_0x2ed2d1(0x12f)]&&_0x40dcf5[_0x2ed2d1(0x12f)][_0x2ed2d1(0x146)]?_0x40dcf5['infractions'][_0x2ed2d1(0x146)]:'-','inline':!![]},{'name':_0x2ed2d1(0x12c),'value':_0x40dcf5['infractions']&&_0x40dcf5[_0x2ed2d1(0x12f)][_0x2ed2d1(0x128)]?_0x40dcf5['infractions']['banThreshold']:'-','inline':!![]}]}});}await _0xdff9df[_0x2ed2d1(0x131)]['send']({'embed':{'color':_0xdff9df[_0x2ed2d1(0x14d)][_0x2ed2d1(0x13f)][_0x2ed2d1(0x12f)]&&_0xdff9df[_0x2ed2d1(0x14d)]['document'][_0x2ed2d1(0x12f)][_0x2ed2d1(0x14b)]?tesseract_1[_0x2ed2d1(0x12a)]['COLORS'][_0x2ed2d1(0x134)]:tesseract_1[_0x2ed2d1(0x12a)][_0x2ed2d1(0x138)]['GREEN'],'author':{'name':_0xdff9df[_0x2ed2d1(0x145)][_0x2ed2d1(0x137)]},'title':_0x2ed2d1(0x143),'description':_0xdff9df[_0x2ed2d1(0x14d)][_0x2ed2d1(0x13f)]['infractions']&&_0xdff9df[_0x2ed2d1(0x14d)]['document']['infractions'][_0x2ed2d1(0x14b)]?_0xdff9df['member']['document']['infractions'][_0x2ed2d1(0x126)]('\x0a'):_0x2ed2d1(0x13c)}})[_0x2ed2d1(0x130)](()=>{});};}};