const a76_0xd288=['language','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Role\x20Members','\x20of\x20','exec','name','user','pages','bitfield','toString','Permissions','rawPosition','Page\x20','Created','test','guild','Command','../../utils/strings','send','role\x20ROLE','locale','color','tag','DiscordError','Managed','ROLE_NOT_FOUND','map','Hoisted\x20•\x20','\x20Role','channel','Position','join','page','cache','role\x20ROLE\x20--members\x20PAGE','roleNotFound','permissions','Members','resolveRole','size','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20members\x20in\x20a\x20role.','../../utils/pagination','BASTION_ERROR_TYPE','toUTCString','../../utils/errors','errors','resolver','apply','values','document','constructor','items','client','managed','exports','members','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','hoist','roleInfo','roles','createdAt','toArray'];(function(_0xfd33fe,_0x1ea9bc){const _0xd2885b=function(_0x32698c){while(--_0x32698c){_0xfd33fe['push'](_0xfd33fe['shift']());}},_0x118459=function(){const _0x104029={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x550fe7,_0x2290e8,_0x3747ba,_0x1b758d){_0x1b758d=_0x1b758d||{};let _0x36e50e=_0x2290e8+'='+_0x3747ba,_0x44b54c=0x0;for(let _0x37340e=0x0,_0x16b3a5=_0x550fe7['length'];_0x37340e<_0x16b3a5;_0x37340e++){const _0x15c0f2=_0x550fe7[_0x37340e];_0x36e50e+=';\x20'+_0x15c0f2;const _0x504a7b=_0x550fe7[_0x15c0f2];_0x550fe7['push'](_0x504a7b),_0x16b3a5=_0x550fe7['length'],_0x504a7b!==!![]&&(_0x36e50e+='='+_0x504a7b);}_0x1b758d['cookie']=_0x36e50e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e6542,_0x205066){_0x3e6542=_0x3e6542||function(_0xad349c){return _0xad349c;};const _0x524990=_0x3e6542(new RegExp('(?:^|;\x20)'+_0x205066['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2d5afc=function(_0x41aef8,_0x2e5f5c){_0x41aef8(++_0x2e5f5c);};return _0x2d5afc(_0xd2885b,_0x1ea9bc),_0x524990?decodeURIComponent(_0x524990[0x1]):undefined;}},_0x23b901=function(){const _0x2fffe2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2fffe2['test'](_0x104029['removeCookie']['toString']());};_0x104029['updateCookie']=_0x23b901;let _0x365477='';const _0x2f867c=_0x104029['updateCookie']();if(!_0x2f867c)_0x104029['setCookie'](['*'],'counter',0x1);else _0x2f867c?_0x365477=_0x104029['getCookie'](null,'counter'):_0x104029['removeCookie']();};_0x118459();}(a76_0xd288,0xd9));const a76_0x1184=function(_0xfd33fe,_0x1ea9bc){_0xfd33fe=_0xfd33fe-0x71;let _0xd2885b=a76_0xd288[_0xfd33fe];return _0xd2885b;};const a76_0x231eb2=a76_0x1184,a76_0x23b901=function(){let _0x2f867c=!![];return function(_0x550fe7,_0x2290e8){const _0x3747ba=_0x2f867c?function(){const _0x383647=a76_0x1184;if(_0x2290e8){const _0x1b758d=_0x2290e8[_0x383647(0x81)](_0x550fe7,arguments);return _0x2290e8=null,_0x1b758d;}}:function(){};return _0x2f867c=![],_0x3747ba;};}(),a76_0x104029=a76_0x23b901(this,function(){const _0x36e50e=function(){const _0x58aa1c=a76_0x1184,_0x44b54c=_0x36e50e[_0x58aa1c(0x84)](_0x58aa1c(0x91))()[_0x58aa1c(0x84)](_0x58aa1c(0x8a));return!_0x44b54c[_0x58aa1c(0x9e)](a76_0x104029);};return _0x36e50e();});a76_0x104029();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a76_0x231eb2(0x7e)),pagination=require(a76_0x231eb2(0x7b)),strings=require(a76_0x231eb2(0xa1));module[a76_0x231eb2(0x88)]=class RoleCommand extends tesseract_1[a76_0x231eb2(0xa0)]{constructor(){const _0x1c1a93=a76_0x231eb2;super('role',{'description':_0x1c1a93(0x7a),'triggers':[_0x1c1a93(0x8c)],'arguments':{'alias':{'members':['m']},'number':[_0x1c1a93(0x89)]},'scope':_0x1c1a93(0x9f),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x1c1a93(0xa3),_0x1c1a93(0x74)]}),this[_0x1c1a93(0x94)]=async(_0x37340e,_0x16b3a5)=>{const _0x115b4f=_0x1c1a93,_0x15c0f2=_0x16b3a5['_'][_0x115b4f(0x71)]('\x20'),_0x504a7b=this[_0x115b4f(0x86)][_0x115b4f(0x80)][_0x115b4f(0x78)](_0x37340e[_0x115b4f(0x9f)],_0x15c0f2);if(!_0x504a7b)throw new errors[(_0x115b4f(0xa7))](errors[_0x115b4f(0x7c)][_0x115b4f(0xa9)],this[_0x115b4f(0x86)][_0x115b4f(0xa4)]['getString'](_0x37340e[_0x115b4f(0x9f)][_0x115b4f(0x83)][_0x115b4f(0x90)],_0x115b4f(0x7f),_0x115b4f(0x75)));if(_0x16b3a5['members']){const _0x3e6542=pagination['paginate']([..._0x504a7b[_0x115b4f(0x89)][_0x115b4f(0x82)]()],_0x16b3a5[_0x115b4f(0x89)]);return await _0x37340e[_0x115b4f(0xad)][_0x115b4f(0xa2)]({'embed':{'color':_0x504a7b[_0x115b4f(0xa5)],'author':{'name':_0x504a7b['name']},'title':_0x115b4f(0x92),'fields':_0x3e6542[_0x115b4f(0x85)][_0x115b4f(0xaa)](_0x205066=>({'name':_0x205066['displayName'],'value':_0x205066[_0x115b4f(0x96)][_0x115b4f(0xa6)]+'\x20/\x20'+_0x205066['id']})),'footer':{'text':_0x115b4f(0x9c)+_0x3e6542[_0x115b4f(0x72)]+_0x115b4f(0x93)+_0x3e6542[_0x115b4f(0x97)]}}});}return await _0x37340e[_0x115b4f(0xad)]['send']({'embed':{'color':_0x504a7b['color'],'author':{'name':_0x504a7b[_0x115b4f(0x95)]},'title':(_0x504a7b[_0x115b4f(0x87)]?_0x115b4f(0xa8):'')+_0x115b4f(0xac),'fields':[{'name':_0x115b4f(0xae),'value':(_0x37340e['guild'][_0x115b4f(0x8d)][_0x115b4f(0x73)][_0x115b4f(0x79)]-_0x504a7b[_0x115b4f(0x9b)])[_0x115b4f(0x99)](),'inline':!![]},{'name':_0x115b4f(0x77),'value':_0x504a7b[_0x115b4f(0x89)][_0x115b4f(0x79)]+'\x20Members','inline':!![]},{'name':_0x115b4f(0x9d),'value':_0x504a7b[_0x115b4f(0x8e)][_0x115b4f(0x7d)](),'inline':!![]},{'name':_0x115b4f(0x9a),'value':_0x504a7b[_0x115b4f(0x76)][_0x115b4f(0x98)]?_0x504a7b[_0x115b4f(0x76)][_0x115b4f(0x8f)]()[_0x115b4f(0xaa)](_0x524990=>strings['snakeToTitleCase'](_0x524990))[_0x115b4f(0x71)](',\x20'):'-'}],'footer':{'text':(_0x504a7b[_0x115b4f(0x8b)]?_0x115b4f(0xab):'')+_0x504a7b['id']}}});};}};