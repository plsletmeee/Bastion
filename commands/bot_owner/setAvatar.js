const a8_0x289a=['URL','BASTION_ERROR_TYPE','info','attachments','exec','Constants','client','language','Command','displayAvatarURL','width','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','document','setAvatar\x20--image\x20LINK','channel','setAvatar','send','first','constructor','height','ArgumentTypes','user','test','locale','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','author','image','catch','DiscordError','name','getString','exports','apply','../../utils/errors','PUPIL'];(function(_0x26b682,_0x289a42){const _0x4e7ac8=function(_0x3afc35){while(--_0x3afc35){_0x26b682['push'](_0x26b682['shift']());}},_0x4841f1=function(){const _0x556a32={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5698f1,_0x50635d,_0x41aad0,_0x212bfe){_0x212bfe=_0x212bfe||{};let _0x2da802=_0x50635d+'='+_0x41aad0,_0x323282=0x0;for(let _0x474545=0x0,_0x42824d=_0x5698f1['length'];_0x474545<_0x42824d;_0x474545++){const _0x3e3f84=_0x5698f1[_0x474545];_0x2da802+=';\x20'+_0x3e3f84;const _0x56225e=_0x5698f1[_0x3e3f84];_0x5698f1['push'](_0x56225e),_0x42824d=_0x5698f1['length'],_0x56225e!==!![]&&(_0x2da802+='='+_0x56225e);}_0x212bfe['cookie']=_0x2da802;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3bdc71,_0x120b7b){_0x3bdc71=_0x3bdc71||function(_0x3edd6e){return _0x3edd6e;};const _0x8aa131=_0x3bdc71(new RegExp('(?:^|;\x20)'+_0x120b7b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3edb3c=function(_0x165f48,_0x864112){_0x165f48(++_0x864112);};return _0x3edb3c(_0x4e7ac8,_0x289a42),_0x8aa131?decodeURIComponent(_0x8aa131[0x1]):undefined;}},_0x5780ff=function(){const _0x53dfc7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x53dfc7['test'](_0x556a32['removeCookie']['toString']());};_0x556a32['updateCookie']=_0x5780ff;let _0x1aa2b4='';const _0x50de0e=_0x556a32['updateCookie']();if(!_0x50de0e)_0x556a32['setCookie'](['*'],'counter',0x1);else _0x50de0e?_0x1aa2b4=_0x556a32['getCookie'](null,'counter'):_0x556a32['removeCookie']();};_0x4841f1();}(a8_0x289a,0x1cc));const a8_0x4e7a=function(_0x26b682,_0x289a42){_0x26b682=_0x26b682-0x0;let _0x4e7ac8=a8_0x289a[_0x26b682];return _0x4e7ac8;};const _0xa0d9d1=a8_0x4e7a,a8_0x556a32=function(){let _0x1aa2b4=!![];return function(_0x50de0e,_0x5698f1){const _0x50635d=_0x1aa2b4?function(){const _0x25c211=a8_0x4e7a;if(_0x5698f1){const _0x41aad0=_0x5698f1[_0x25c211('0x5')](_0x50de0e,arguments);return _0x5698f1=null,_0x41aad0;}}:function(){};return _0x1aa2b4=![],_0x50635d;};}(),a8_0x3afc35=a8_0x556a32(this,function(){const _0x212bfe=function(){const _0x233f1f=a8_0x4e7a,_0x2da802=_0x212bfe[_0x233f1f('0x1b')](_0x233f1f('0x14'))()[_0x233f1f('0x1b')](_0x233f1f('0x21'));return!_0x2da802[_0x233f1f('0x1f')](a8_0x3afc35);};return _0x212bfe();});a8_0x3afc35();'use strict';const tesseract_1=require(_0xa0d9d1('0x13')),errors=require(_0xa0d9d1('0x6'));module[_0xa0d9d1('0x4')]=class SetAvatar extends tesseract_1[_0xa0d9d1('0x10')]{constructor(){const _0x13a965=_0xa0d9d1;super(_0x13a965('0x18'),{'description':'It\x20allows\x20you\x20to\x20update\x20Bastion\x27s\x20avatar\x20directly\x20from\x20Discord.','triggers':[],'arguments':{'coerce':{'image':tesseract_1[_0x13a965('0xd')][_0x13a965('0x1d')][_0x13a965('0x8')]}},'scope':'guild','owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x13a965('0x16')]}),this[_0x13a965('0xc')]=async(_0x323282,_0x474545)=>{const _0x4fcb2b=_0x13a965,_0x42824d=_0x323282[_0x4fcb2b('0xb')][_0x4fcb2b('0x1a')]();if(!_0x474545[_0x4fcb2b('0x23')]||!(_0x42824d[_0x4fcb2b('0x1c')]&&_0x42824d[_0x4fcb2b('0x12')]))throw new errors[(_0x4fcb2b('0x1'))](errors[_0x4fcb2b('0x9')]['INVALID_COMMAND_SYNTAX'],this[_0x4fcb2b('0x2')]);await this[_0x4fcb2b('0xe')]['user'][_0x4fcb2b('0x18')](_0x474545[_0x4fcb2b('0x23')]),await _0x323282[_0x4fcb2b('0x17')][_0x4fcb2b('0x19')]({'embed':{'color':tesseract_1[_0x4fcb2b('0xd')]['COLORS'][_0x4fcb2b('0x7')],'description':this[_0x4fcb2b('0xe')][_0x4fcb2b('0x20')][_0x4fcb2b('0x3')](_0x323282['guild'][_0x4fcb2b('0x15')][_0x4fcb2b('0xf')],_0x4fcb2b('0xa'),'updateAvatar',_0x323282[_0x4fcb2b('0x22')]['tag']),'image':{'url':this[_0x4fcb2b('0xe')][_0x4fcb2b('0x1e')][_0x4fcb2b('0x11')]({'dynamic':!![],'size':0x100})}}})[_0x4fcb2b('0x0')](()=>{});};}};