const a40_0x29db=['language','tag','verification\x20--role\x20ROLE','role','guild','get','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','verifiedRoleId','verification','BASTION_ERROR_TYPE','exports','author','verificationRoleUnset','COLORS','roles','client','resolver','send','@bastion/tesseract','Command','GREEN','constructor','DiscordError','verificationDisabled','name','test','apply','info','document','roleNotFound','disable','channel','MANAGE_GUILD','locale','Constants','../../utils/errors','exec','cache','RED','getString'];(function(_0x27ff77,_0x29db33){const _0x4731eb=function(_0x4fa40a){while(--_0x4fa40a){_0x27ff77['push'](_0x27ff77['shift']());}},_0x192a88=function(){const _0x54df8e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x89d4d7,_0xabd834,_0x3efd97,_0xe4ef1e){_0xe4ef1e=_0xe4ef1e||{};let _0x2b2051=_0xabd834+'='+_0x3efd97,_0xbb21cc=0x0;for(let _0x175932=0x0,_0xbccef0=_0x89d4d7['length'];_0x175932<_0xbccef0;_0x175932++){const _0x54d84f=_0x89d4d7[_0x175932];_0x2b2051+=';\x20'+_0x54d84f;const _0x1d90f0=_0x89d4d7[_0x54d84f];_0x89d4d7['push'](_0x1d90f0),_0xbccef0=_0x89d4d7['length'],_0x1d90f0!==!![]&&(_0x2b2051+='='+_0x1d90f0);}_0xe4ef1e['cookie']=_0x2b2051;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43863c,_0x594a42){_0x43863c=_0x43863c||function(_0x1f40a4){return _0x1f40a4;};const _0x18def0=_0x43863c(new RegExp('(?:^|;\x20)'+_0x594a42['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5a62a4=function(_0x1a96a5,_0x43b506){_0x1a96a5(++_0x43b506);};return _0x5a62a4(_0x4731eb,_0x29db33),_0x18def0?decodeURIComponent(_0x18def0[0x1]):undefined;}},_0x3f3156=function(){const _0x53320e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x53320e['test'](_0x54df8e['removeCookie']['toString']());};_0x54df8e['updateCookie']=_0x3f3156;let _0x5da376='';const _0x55e648=_0x54df8e['updateCookie']();if(!_0x55e648)_0x54df8e['setCookie'](['*'],'counter',0x1);else _0x55e648?_0x5da376=_0x54df8e['getCookie'](null,'counter'):_0x54df8e['removeCookie']();};_0x192a88();}(a40_0x29db,0x1a0));const a40_0x4731=function(_0x27ff77,_0x29db33){_0x27ff77=_0x27ff77-0x0;let _0x4731eb=a40_0x29db[_0x27ff77];return _0x4731eb;};const _0xc6130d=a40_0x4731,a40_0x54df8e=function(){let _0x5da376=!![];return function(_0x55e648,_0x89d4d7){const _0xabd834=_0x5da376?function(){const _0x157b9f=a40_0x4731;if(_0x89d4d7){const _0x3efd97=_0x89d4d7[_0x157b9f('0x15')](_0x55e648,arguments);return _0x89d4d7=null,_0x3efd97;}}:function(){};return _0x5da376=![],_0xabd834;};}(),a40_0x4fa40a=a40_0x54df8e(this,function(){const _0xe4ef1e=function(){const _0x1f9a26=a40_0x4731,_0x2b2051=_0xe4ef1e[_0x1f9a26('0x10')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1f9a26('0x10')](_0x1f9a26('0x0'));return!_0x2b2051[_0x1f9a26('0x14')](a40_0x4fa40a);};return _0xe4ef1e();});a40_0x4fa40a();'use strict';const tesseract_1=require(_0xc6130d('0xd')),errors=require(_0xc6130d('0x1e'));module[_0xc6130d('0x5')]=class VerificationCommand extends tesseract_1[_0xc6130d('0xe')]{constructor(){const _0x53a394=_0xc6130d;super(_0x53a394('0x3'),{'description':'It\x20allows\x20you\x20to\x20enable\x20Captcha\x20Verification\x20in\x20the\x20server.\x20When\x20enabled,\x20users\x20joining\x20the\x20server\x20need\x20to\x20solve\x20a\x20captcha,\x20in\x20your\x20server\x27s\x20[dashboard](%bastion.dashboard%),\x20to\x20prove\x20that\x20they\x20are\x20human.\x20When\x20they\x20successfully\x20solve\x20the\x20captcha,\x20Bastion\x20will\x20give\x20them\x20the\x20specified\x20Verified\x20Role.','triggers':[],'arguments':{'alias':{'disable':['d'],'role':['r']},'boolean':[_0x53a394('0x19')],'string':[_0x53a394('0x26')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x53a394('0x1b')],'syntax':['verification',_0x53a394('0x25'),'verification\x20--disable']}),this[_0x53a394('0x1f')]=async(_0xbb21cc,_0x175932)=>{const _0x19c5b8=_0x53a394,_0xbccef0=_0xbb21cc[_0x19c5b8('0x27')];if(_0x175932[_0x19c5b8('0x19')])_0xbccef0['document'][_0x19c5b8('0x2')]=undefined,delete _0xbccef0[_0x19c5b8('0x17')][_0x19c5b8('0x2')];else{if(_0x175932['role']){const _0x54d84f=this[_0x19c5b8('0xa')][_0x19c5b8('0xb')]['resolveRole'](_0xbccef0,_0x175932[_0x19c5b8('0x26')]);if(!_0x54d84f)throw new errors[(_0x19c5b8('0x11'))](errors[_0x19c5b8('0x4')]['ROLE_NOT_FOUND'],this['client']['locale'][_0x19c5b8('0x22')](_0xbb21cc[_0x19c5b8('0x27')][_0x19c5b8('0x17')][_0x19c5b8('0x23')],'errors',_0x19c5b8('0x18')));_0xbccef0['document'][_0x19c5b8('0x2')]=_0x54d84f['id'];}else return await _0xbb21cc[_0x19c5b8('0x1a')]['send']({'embed':{'color':tesseract_1[_0x19c5b8('0x1d')][_0x19c5b8('0x8')][_0x19c5b8('0x1')],'description':this[_0x19c5b8('0xa')][_0x19c5b8('0x1c')][_0x19c5b8('0x22')](_0xbb21cc['guild'][_0x19c5b8('0x17')]['language'],_0x19c5b8('0x16'),_0xbccef0[_0x19c5b8('0x17')]['verifiedRoleId']?'verificationEnabled':_0x19c5b8('0x12'),_0xbccef0[_0x19c5b8('0x17')][_0x19c5b8('0x2')]?_0xbb21cc[_0x19c5b8('0x27')]['roles'][_0x19c5b8('0x20')][_0x19c5b8('0x28')](_0xbccef0[_0x19c5b8('0x17')]['verifiedRoleId'])[_0x19c5b8('0x13')]:undefined)}});}await _0xbccef0[_0x19c5b8('0x17')]['save'](),await _0xbb21cc[_0x19c5b8('0x1a')][_0x19c5b8('0xc')]({'embed':{'color':_0xbccef0[_0x19c5b8('0x17')][_0x19c5b8('0x2')]?tesseract_1[_0x19c5b8('0x1d')][_0x19c5b8('0x8')][_0x19c5b8('0xf')]:tesseract_1[_0x19c5b8('0x1d')][_0x19c5b8('0x8')][_0x19c5b8('0x21')],'description':this[_0x19c5b8('0xa')][_0x19c5b8('0x1c')]['getString'](_0xbb21cc[_0x19c5b8('0x27')][_0x19c5b8('0x17')][_0x19c5b8('0x23')],_0x19c5b8('0x16'),_0xbccef0[_0x19c5b8('0x17')][_0x19c5b8('0x2')]?'verificationRoleSet':_0x19c5b8('0x7'),_0xbb21cc[_0x19c5b8('0x6')][_0x19c5b8('0x24')],_0xbccef0[_0x19c5b8('0x17')][_0x19c5b8('0x2')]?_0xbb21cc[_0x19c5b8('0x27')][_0x19c5b8('0x9')]['cache']['get'](_0xbccef0[_0x19c5b8('0x17')][_0x19c5b8('0x2')])[_0x19c5b8('0x13')]:undefined)}});};}};