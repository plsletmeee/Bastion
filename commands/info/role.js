const a59_0x33f4=['toString','Hoisted\x20•\x20','../../utils/strings','permissions','managed','resolver','return\x20/\x22\x20+\x20this\x20+\x20\x22/','\x20/\x20','map','user','channel','roles','resolveRole','displayName','guild','\x20Members','paginate','send','join','name','Position','toUTCString','Created','\x20of\x20','roleInfo','../../utils/pagination','toArray','BASTION_ERROR_TYPE','client','errors','constructor','page','test','bitfield','language','locale','color','getString','roleNotFound','@bastion/tesseract','../../utils/errors','DiscordError','hoist','items','Command','size','members','snakeToTitleCase','role\x20ROLE\x20--members\x20PAGE','createdAt','role','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Page\x20','role\x20ROLE'];(function(_0x59315e,_0x33f4d){const _0x10576e=function(_0x53dcc8){while(--_0x53dcc8){_0x59315e['push'](_0x59315e['shift']());}},_0x3562fc=function(){const _0xa88c99={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x9b7b4c,_0x33ac70,_0x2c4ce5,_0x387c58){_0x387c58=_0x387c58||{};let _0x3b403d=_0x33ac70+'='+_0x2c4ce5,_0x33aad7=0x0;for(let _0x2766d0=0x0,_0x51dbc7=_0x9b7b4c['length'];_0x2766d0<_0x51dbc7;_0x2766d0++){const _0x5663a7=_0x9b7b4c[_0x2766d0];_0x3b403d+=';\x20'+_0x5663a7;const _0x1799c5=_0x9b7b4c[_0x5663a7];_0x9b7b4c['push'](_0x1799c5),_0x51dbc7=_0x9b7b4c['length'],_0x1799c5!==!![]&&(_0x3b403d+='='+_0x1799c5);}_0x387c58['cookie']=_0x3b403d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3bcd83,_0xe3f361){_0x3bcd83=_0x3bcd83||function(_0x593847){return _0x593847;};const _0x4f3174=_0x3bcd83(new RegExp('(?:^|;\x20)'+_0xe3f361['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xc96ef4=function(_0x29dd79,_0x5a1342){_0x29dd79(++_0x5a1342);};return _0xc96ef4(_0x10576e,_0x33f4d),_0x4f3174?decodeURIComponent(_0x4f3174[0x1]):undefined;}},_0x2a46d8=function(){const _0x40cde6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x40cde6['test'](_0xa88c99['removeCookie']['toString']());};_0xa88c99['updateCookie']=_0x2a46d8;let _0x427991='';const _0x364e4e=_0xa88c99['updateCookie']();if(!_0x364e4e)_0xa88c99['setCookie'](['*'],'counter',0x1);else _0x364e4e?_0x427991=_0xa88c99['getCookie'](null,'counter'):_0xa88c99['removeCookie']();};_0x3562fc();}(a59_0x33f4,0x7c));const a59_0x1057=function(_0x59315e,_0x33f4d){_0x59315e=_0x59315e-0x0;let _0x10576e=a59_0x33f4[_0x59315e];return _0x10576e;};const _0x4978e2=a59_0x1057,a59_0xa88c99=function(){let _0x427991=!![];return function(_0x364e4e,_0x9b7b4c){const _0x33ac70=_0x427991?function(){if(_0x9b7b4c){const _0x2c4ce5=_0x9b7b4c['apply'](_0x364e4e,arguments);return _0x9b7b4c=null,_0x2c4ce5;}}:function(){};return _0x427991=![],_0x33ac70;};}(),a59_0x53dcc8=a59_0xa88c99(this,function(){const _0x387c58=function(){const _0x507871=a59_0x1057,_0x3b403d=_0x387c58[_0x507871('0xe')](_0x507871('0x2c'))()[_0x507871('0xe')](_0x507871('0x23'));return!_0x3b403d[_0x507871('0x10')](a59_0x53dcc8);};return _0x387c58();});a59_0x53dcc8();'use strict';const tesseract_1=require(_0x4978e2('0x17')),errors=require(_0x4978e2('0x18')),pagination=require(_0x4978e2('0x9')),strings=require(_0x4978e2('0x28'));module['exports']=class RoleCommand extends tesseract_1[_0x4978e2('0x1c')]{constructor(){const _0x14d615=_0x4978e2;super(_0x14d615('0x22'),{'description':'It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20members\x20in\x20a\x20role.','triggers':[_0x14d615('0x8')],'arguments':{'alias':{'members':['m']},'number':[_0x14d615('0x1e')]},'scope':_0x14d615('0x34'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x14d615('0x25'),_0x14d615('0x20')]}),this['exec']=async(_0x33aad7,_0x2766d0)=>{const _0x38d908=_0x14d615,_0x51dbc7=_0x2766d0['_'][_0x38d908('0x2')]('\x20'),_0x5663a7=this[_0x38d908('0xc')][_0x38d908('0x2b')][_0x38d908('0x32')](_0x33aad7[_0x38d908('0x34')],_0x51dbc7);if(!_0x5663a7)throw new errors[(_0x38d908('0x19'))](errors[_0x38d908('0xb')]['ROLE_NOT_FOUND'],this['client'][_0x38d908('0x13')][_0x38d908('0x15')](_0x33aad7['guild']['document'][_0x38d908('0x12')],_0x38d908('0xd'),_0x38d908('0x16')));if(_0x2766d0[_0x38d908('0x1e')]){const _0x1799c5=pagination[_0x38d908('0x0')]([..._0x5663a7[_0x38d908('0x1e')]['values']()],_0x2766d0[_0x38d908('0x1e')]);return await _0x33aad7[_0x38d908('0x30')]['send']({'embed':{'color':_0x5663a7[_0x38d908('0x14')],'author':{'name':_0x5663a7[_0x38d908('0x3')]},'title':'Role\x20Members','fields':_0x1799c5[_0x38d908('0x1b')][_0x38d908('0x2e')](_0x3bcd83=>({'name':_0x3bcd83[_0x38d908('0x33')],'value':_0x3bcd83[_0x38d908('0x2f')]['tag']+_0x38d908('0x2d')+_0x3bcd83['id']})),'footer':{'text':_0x38d908('0x24')+_0x1799c5[_0x38d908('0xf')]+_0x38d908('0x7')+_0x1799c5['pages']}}});}return await _0x33aad7[_0x38d908('0x30')][_0x38d908('0x1')]({'embed':{'color':_0x5663a7[_0x38d908('0x14')],'author':{'name':_0x5663a7[_0x38d908('0x3')]},'title':(_0x5663a7[_0x38d908('0x2a')]?'Managed':'')+'\x20Role','fields':[{'name':_0x38d908('0x4'),'value':(_0x33aad7['guild'][_0x38d908('0x31')]['cache'][_0x38d908('0x1d')]-_0x5663a7['rawPosition'])[_0x38d908('0x26')](),'inline':!![]},{'name':'Members','value':_0x5663a7[_0x38d908('0x1e')][_0x38d908('0x1d')]+_0x38d908('0x35'),'inline':!![]},{'name':_0x38d908('0x6'),'value':_0x5663a7[_0x38d908('0x21')][_0x38d908('0x5')](),'inline':!![]},{'name':'Permissions','value':_0x5663a7[_0x38d908('0x29')][_0x38d908('0x11')]?_0x5663a7['permissions'][_0x38d908('0xa')]()['map'](_0xe3f361=>strings[_0x38d908('0x1f')](_0xe3f361))[_0x38d908('0x2')](',\x20'):'-'}],'footer':{'text':(_0x5663a7[_0x38d908('0x1a')]?_0x38d908('0x27'):'')+_0x5663a7['id']}}});};}};