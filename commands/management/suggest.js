const a81_0x212f=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','locale','\x20/\x20','author','channel','INDIGO','react','Suggestion\x20Command','../../utils/errors','displayAvatarURL','return\x20/\x22\x20+\x20this\x20+\x20\x22/','ERROR','COLORS','language','Command','delete','cache','exports','BASTION_ERROR_TYPE','deletable','guild','Suggestion','apply','tag','@bastion/tesseract','catch','suggest\x20SUGGESTION','DiscordError','constructor','document','send','It\x20allows\x20you\x20send\x20a\x20suggestion\x20to\x20the\x20suggestion\x20staff,\x20provided\x20a\x20Suggestion\x20Channel\x20has\x20been\x20set\x20in\x20the\x20server.','noSuggestionChannel','getString','suggest','suggestionsChannelId','INVALID_COMMAND_SYNTAX','IRIS'];(function(_0xccc61a,_0x212f5d){const _0x4ebc15=function(_0x4ebf55){while(--_0x4ebf55){_0xccc61a['push'](_0xccc61a['shift']());}},_0x2f8779=function(){const _0xc9b335={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x340c69,_0x21d066,_0x53aa9b,_0x31c0bc){_0x31c0bc=_0x31c0bc||{};let _0x308481=_0x21d066+'='+_0x53aa9b,_0x80dc74=0x0;for(let _0x363a7e=0x0,_0x1fe327=_0x340c69['length'];_0x363a7e<_0x1fe327;_0x363a7e++){const _0x4b9af2=_0x340c69[_0x363a7e];_0x308481+=';\x20'+_0x4b9af2;const _0x21c089=_0x340c69[_0x4b9af2];_0x340c69['push'](_0x21c089),_0x1fe327=_0x340c69['length'],_0x21c089!==!![]&&(_0x308481+='='+_0x21c089);}_0x31c0bc['cookie']=_0x308481;},'removeCookie':function(){return'dev';},'getCookie':function(_0x22dda3,_0x2fa45d){_0x22dda3=_0x22dda3||function(_0x34e0fd){return _0x34e0fd;};const _0x575f83=_0x22dda3(new RegExp('(?:^|;\x20)'+_0x2fa45d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x7866b2=function(_0x45bd2a,_0x5a14f8){_0x45bd2a(++_0x5a14f8);};return _0x7866b2(_0x4ebc15,_0x212f5d),_0x575f83?decodeURIComponent(_0x575f83[0x1]):undefined;}},_0x44c861=function(){const _0x2cbff1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2cbff1['test'](_0xc9b335['removeCookie']['toString']());};_0xc9b335['updateCookie']=_0x44c861;let _0x31bcef='';const _0x57852e=_0xc9b335['updateCookie']();if(!_0x57852e)_0xc9b335['setCookie'](['*'],'counter',0x1);else _0x57852e?_0x31bcef=_0xc9b335['getCookie'](null,'counter'):_0xc9b335['removeCookie']();};_0x2f8779();}(a81_0x212f,0x69));const a81_0x4ebc=function(_0xccc61a,_0x212f5d){_0xccc61a=_0xccc61a-0x0;let _0x4ebc15=a81_0x212f[_0xccc61a];return _0x4ebc15;};const _0x58506f=a81_0x4ebc,a81_0xc9b335=function(){let _0x31bcef=!![];return function(_0x57852e,_0x340c69){const _0x21d066=_0x31bcef?function(){const _0xe59603=a81_0x4ebc;if(_0x340c69){const _0x53aa9b=_0x340c69[_0xe59603('0x1f')](_0x57852e,arguments);return _0x340c69=null,_0x53aa9b;}}:function(){};return _0x31bcef=![],_0x21d066;};}(),a81_0x4ebf55=a81_0xc9b335(this,function(){const _0x31c0bc=function(){const _0x9551b3=a81_0x4ebc,_0x308481=_0x31c0bc['constructor'](_0x9551b3('0x13'))()[_0x9551b3('0x25')](_0x9551b3('0x9'));return!_0x308481['test'](a81_0x4ebf55);};return _0x31c0bc();});a81_0x4ebf55();'use strict';const tesseract_1=require(_0x58506f('0x21')),errors=require(_0x58506f('0x11'));module[_0x58506f('0x1a')]=class SuggestCommand extends tesseract_1[_0x58506f('0x17')]{constructor(){const _0x5cb106=_0x58506f;super(_0x5cb106('0x5'),{'description':_0x5cb106('0x2'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x5cb106('0x23')]}),this['exec']=async(_0x80dc74,_0x363a7e)=>{const _0x46c29b=_0x5cb106;if(!_0x363a7e['_']['length'])throw new errors[(_0x46c29b('0x24'))](errors[_0x46c29b('0x1b')][_0x46c29b('0x7')],this['name']);const _0x1fe327=_0x80dc74['guild'];if(!_0x1fe327['document'][_0x46c29b('0x6')]||!_0x80dc74['guild']['channels'][_0x46c29b('0x19')]['has'](_0x1fe327[_0x46c29b('0x0')][_0x46c29b('0x6')]))throw new errors[(_0x46c29b('0x24'))](errors['BASTION_ERROR_TYPE'][_0x46c29b('0x14')],this['client'][_0x46c29b('0xa')][_0x46c29b('0x4')](_0x80dc74['guild'][_0x46c29b('0x0')][_0x46c29b('0x16')],'errors',_0x46c29b('0x3'),_0x80dc74[_0x46c29b('0xc')][_0x46c29b('0x20')]));const _0x4b9af2=_0x80dc74[_0x46c29b('0x1d')]['channels'][_0x46c29b('0x19')]['get'](_0x1fe327[_0x46c29b('0x0')]['suggestionsChannelId']),_0x21c089=await _0x4b9af2[_0x46c29b('0x1')]({'embed':{'color':tesseract_1['Constants'][_0x46c29b('0x15')][_0x46c29b('0xe')],'author':{'name':_0x80dc74[_0x46c29b('0xc')]['tag']+_0x46c29b('0xb')+_0x80dc74[_0x46c29b('0xc')]['id'],'iconURL':_0x80dc74[_0x46c29b('0xc')][_0x46c29b('0x12')]({'dynamic':!![],'size':0x40})},'title':_0x46c29b('0x1e'),'description':_0x363a7e['_']['join']('\x20')}});_0x80dc74[_0x46c29b('0x1c')]&&_0x80dc74[_0x46c29b('0x18')]({'reason':_0x46c29b('0x10')})['catch'](()=>{}),_0x21c089[_0x46c29b('0xf')]('✅')[_0x46c29b('0x22')](()=>{}),_0x21c089[_0x46c29b('0xf')]('❎')[_0x46c29b('0x22')](()=>{}),await _0x80dc74[_0x46c29b('0xd')][_0x46c29b('0x1')]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x46c29b('0x8')],'description':'We\x27ve\x20received\x20your\x20suggestion.\x20We\x27ll\x20get\x20back\x20to\x20you\x20with\x20updates.'}})[_0x46c29b('0x22')](()=>{});};}};