const a65_0x107b=['It\x20allows\x20you\x20to\x20edit\x20any\x20message\x20sent\x20by\x20Bastion\x20in\x20the\x20current\x20channel.','constructor','language','exports','test','error','isValidBastionEmbed','react','getString','INVALID_COMMAND_SYNTAX','client','Edited\x20by\x20','author','BASTION_ERROR_TYPE','name','document','tag','edit','edit\x20--message\x20MESSAGE_ID\x20--\x20NEW\x20MESSAGE','guild','Command','message','join','length','../../utils/errors','generateEmbed','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','ADMINISTRATOR','DiscordError'];(function(_0xb1c422,_0x107b87){const _0x318ead=function(_0x483d94){while(--_0x483d94){_0xb1c422['push'](_0xb1c422['shift']());}},_0x176181=function(){const _0x5748={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x18a8e1,_0x272b62,_0x251f32,_0xeeeeb0){_0xeeeeb0=_0xeeeeb0||{};let _0x27e8cc=_0x272b62+'='+_0x251f32,_0x253a5c=0x0;for(let _0x3fa151=0x0,_0x104c42=_0x18a8e1['length'];_0x3fa151<_0x104c42;_0x3fa151++){const _0x10cc20=_0x18a8e1[_0x3fa151];_0x27e8cc+=';\x20'+_0x10cc20;const _0xe53512=_0x18a8e1[_0x10cc20];_0x18a8e1['push'](_0xe53512),_0x104c42=_0x18a8e1['length'],_0xe53512!==!![]&&(_0x27e8cc+='='+_0xe53512);}_0xeeeeb0['cookie']=_0x27e8cc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4f7bc5,_0x9dd109){_0x4f7bc5=_0x4f7bc5||function(_0xfd7b54){return _0xfd7b54;};const _0x2b72f7=_0x4f7bc5(new RegExp('(?:^|;\x20)'+_0x9dd109['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x213c96=function(_0xcf8346,_0xb809b2){_0xcf8346(++_0xb809b2);};return _0x213c96(_0x318ead,_0x107b87),_0x2b72f7?decodeURIComponent(_0x2b72f7[0x1]):undefined;}},_0x124b8c=function(){const _0x46fb8f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x46fb8f['test'](_0x5748['removeCookie']['toString']());};_0x5748['updateCookie']=_0x124b8c;let _0x55cdef='';const _0x318f51=_0x5748['updateCookie']();if(!_0x318f51)_0x5748['setCookie'](['*'],'counter',0x1);else _0x318f51?_0x55cdef=_0x5748['getCookie'](null,'counter'):_0x5748['removeCookie']();};_0x176181();}(a65_0x107b,0x68));const a65_0x318e=function(_0xb1c422,_0x107b87){_0xb1c422=_0xb1c422-0x0;let _0x318ead=a65_0x107b[_0xb1c422];return _0x318ead;};const _0x53cd15=a65_0x318e,a65_0x5748=function(){let _0x55cdef=!![];return function(_0x318f51,_0x18a8e1){const _0x272b62=_0x55cdef?function(){if(_0x18a8e1){const _0x251f32=_0x18a8e1['apply'](_0x318f51,arguments);return _0x18a8e1=null,_0x251f32;}}:function(){};return _0x55cdef=![],_0x272b62;};}(),a65_0x483d94=a65_0x5748(this,function(){const _0xeeeeb0=function(){const _0x5c722b=a65_0x318e,_0x27e8cc=_0xeeeeb0[_0x5c722b('0x11')](_0x5c722b('0xc'))()[_0x5c722b('0x11')](_0x5c722b('0xd'));return!_0x27e8cc[_0x5c722b('0x14')](a65_0x483d94);};return _0xeeeeb0();});a65_0x483d94();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(_0x53cd15('0xa')),embeds=require('../../utils/embeds');module[_0x53cd15('0x13')]=class EditCommand extends tesseract_1[_0x53cd15('0x6')]{constructor(){const _0x5d16bc=_0x53cd15;super(_0x5d16bc('0x3'),{'description':_0x5d16bc('0x10'),'triggers':[],'arguments':{'alias':{'message':['m']},'string':['message']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x5d16bc('0xe')],'syntax':[_0x5d16bc('0x4')]}),this['exec']=async(_0x253a5c,_0x3fa151)=>{const _0x381544=_0x5d16bc;if(!_0x3fa151[_0x381544('0x7')]||!_0x3fa151['_'][_0x381544('0x9')])throw new errors[(_0x381544('0xf'))](errors[_0x381544('0x1d')][_0x381544('0x19')],this[_0x381544('0x0')]);const _0x104c42=await _0x253a5c['channel']['messages']['fetch'](_0x3fa151[_0x381544('0x7')],![]);if(!_0x104c42)throw new errors[(_0x381544('0xf'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this[_0x381544('0x1a')]['locale'][_0x381544('0x18')](_0x253a5c[_0x381544('0x5')][_0x381544('0x1')][_0x381544('0x12')],_0x381544('0x15'),'roleNotFound'));if(!_0x104c42['editable'])return;const _0x10cc20=_0x3fa151['_'][_0x381544('0x8')]('\x20');let _0xe53512;try{_0xe53512=JSON['parse'](_0x10cc20);if(!embeds[_0x381544('0x16')](_0xe53512))throw new Error('INVALID_BASTION_EMBED');}catch{_0xe53512=_0x10cc20;}await _0x104c42[_0x381544('0x3')]({'embed':{...embeds[_0x381544('0xb')](_0xe53512),'footer':{'text':_0x381544('0x1b')+_0x253a5c[_0x381544('0x1c')][_0x381544('0x2')]}}}),await _0x253a5c[_0x381544('0x17')]('✅');};}};