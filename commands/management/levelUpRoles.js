const a71_0x3c6e=['Command','Constants','PREMIUM_MEMBERSHIP_REQUIRED','clamp','resolver','roleLevelClear','keys','ROLE_NOT_FOUND','roleLevelAdd','ROLE_LEVELS','PLATINUM','locale','push','role','GREEN','map','../../utils/numbers','fetchPremiumTier','updateMany','author','fetchDocument','membershipLimitRoleLevels','BASTION_ERROR_TYPE','RED','catch','language','name','error','isPublicBastion','user','It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','info','GOLD','@bastion/tesseract','join','constructor','send','cache','membershipLimitLevelRoles','_id','../../utils/omnic','document','tag','guild','ROLES_PER_LEVEL','NO_LEVEL_UP_ROLES','DiscordError','Level\x20','premiumRoleLevels','MANAGE_ROLES','level','channel','NO_ROLES_FOR_LEVEL','getString','roles','distinct','createDocument','levelUpRoles\x20--level\x20NUMBER\x20--remove','find','get','COLORS','IRIS','levelUpRoles','LIMITS','errors','PremiumTier','LIMITED_PREMIUM_MEMBERSHIP','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','client','exec','exports','default','roleNotFound','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE','countDocuments','../../utils/errors','remove'];(function(_0x46ca9f,_0x3c6efd){const _0x341522=function(_0x3cc022){while(--_0x3cc022){_0x46ca9f['push'](_0x46ca9f['shift']());}},_0x38b763=function(){const _0x5d424e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3dbb95,_0x38cb6c,_0x4eb34a,_0x14360f){_0x14360f=_0x14360f||{};let _0x3074b7=_0x38cb6c+'='+_0x4eb34a,_0x8ff7cc=0x0;for(let _0x53233b=0x0,_0x5d0110=_0x3dbb95['length'];_0x53233b<_0x5d0110;_0x53233b++){const _0xc50631=_0x3dbb95[_0x53233b];_0x3074b7+=';\x20'+_0xc50631;const _0x3c00b9=_0x3dbb95[_0xc50631];_0x3dbb95['push'](_0x3c00b9),_0x5d0110=_0x3dbb95['length'],_0x3c00b9!==!![]&&(_0x3074b7+='='+_0x3c00b9);}_0x14360f['cookie']=_0x3074b7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x53207a,_0x3791ca){_0x53207a=_0x53207a||function(_0x4ae2e6){return _0x4ae2e6;};const _0x25be82=_0x53207a(new RegExp('(?:^|;\x20)'+_0x3791ca['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x219525=function(_0x2f03b6,_0x3fb141){_0x2f03b6(++_0x3fb141);};return _0x219525(_0x341522,_0x3c6efd),_0x25be82?decodeURIComponent(_0x25be82[0x1]):undefined;}},_0x184d3b=function(){const _0x2d1602=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2d1602['test'](_0x5d424e['removeCookie']['toString']());};_0x5d424e['updateCookie']=_0x184d3b;let _0x53da96='';const _0x4748d2=_0x5d424e['updateCookie']();if(!_0x4748d2)_0x5d424e['setCookie'](['*'],'counter',0x1);else _0x4748d2?_0x53da96=_0x5d424e['getCookie'](null,'counter'):_0x5d424e['removeCookie']();};_0x38b763();}(a71_0x3c6e,0x127));const a71_0x3415=function(_0x46ca9f,_0x3c6efd){_0x46ca9f=_0x46ca9f-0x0;let _0x341522=a71_0x3c6e[_0x46ca9f];return _0x341522;};const _0x9b6e6f=a71_0x3415,a71_0x5d424e=function(){let _0x53da96=!![];return function(_0x4748d2,_0x3dbb95){const _0x38cb6c=_0x53da96?function(){const _0x4fbb48=a71_0x3415;if(_0x3dbb95){const _0x4eb34a=_0x3dbb95[_0x4fbb48('0xc')](_0x4748d2,arguments);return _0x3dbb95=null,_0x4eb34a;}}:function(){};return _0x53da96=![],_0x38cb6c;};}(),a71_0x3cc022=a71_0x5d424e(this,function(){const _0x14360f=function(){const _0x2bab9c=a71_0x3415,_0x3074b7=_0x14360f[_0x2bab9c('0x3c')](_0x2bab9c('0xd'))()[_0x2bab9c('0x3c')](_0x2bab9c('0x13'));return!_0x3074b7['test'](a71_0x3cc022);};return _0x14360f();});a71_0x3cc022();'use strict';const tesseract_1=require(_0x9b6e6f('0x3a')),Role_1=require('../../models/Role'),constants=require('../../utils/constants'),errors=require(_0x9b6e6f('0x17')),gamification=require('../../utils/gamification'),numbers=require(_0x9b6e6f('0x29')),omnic=require(_0x9b6e6f('0x41'));module[_0x9b6e6f('0x10')]=class LevelUpRolesCommand extends tesseract_1[_0x9b6e6f('0x19')]{constructor(){const _0x2c7cac=_0x9b6e6f;super(_0x2c7cac('0x7'),{'description':_0x2c7cac('0x37'),'triggers':[],'arguments':{'array':[_0x2c7cac('0x26')],'boolean':[_0x2c7cac('0x18')],'string':[_0x2c7cac('0x26')],'number':[_0x2c7cac('0x4b')],'coerce':{'level':_0x8ff7cc=>numbers[_0x2c7cac('0x1c')](_0x8ff7cc,0x1,gamification['MAX_LEVEL'])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x2c7cac('0x4a')],'userPermissions':[_0x2c7cac('0x4a')],'syntax':[_0x2c7cac('0x7'),'levelUpRoles\x20--level\x20NUMBER',_0x2c7cac('0x15'),_0x2c7cac('0x2')]}),this[_0x2c7cac('0xf')]=async(_0x53233b,_0x5d0110)=>{const _0x28f531=_0x2c7cac;if(_0x5d0110['level']){if(_0x5d0110[_0x28f531('0x26')]){if(constants[_0x28f531('0x35')](this['client'][_0x28f531('0x36')])){const _0x4ae2e6=await omnic[_0x28f531('0x2a')](_0x53233b['guild'])[_0x28f531('0x31')](()=>{}),_0x2f03b6=await Role_1[_0x28f531('0x11')][_0x28f531('0x0')]('level',{'guild':_0x53233b[_0x28f531('0x44')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x4ae2e6){if(_0x4ae2e6===omnic[_0x28f531('0xa')][_0x28f531('0x39')]&&_0x2f03b6['length']>=constants['LIMITS']['GOLD']['ROLE_LEVELS'])throw new errors[(_0x28f531('0x47'))](errors[_0x28f531('0x2f')][_0x28f531('0xb')],this[_0x28f531('0xe')][_0x28f531('0x24')]['getString'](_0x53233b['guild'][_0x28f531('0x42')][_0x28f531('0x32')],'errors',_0x28f531('0x2e'),constants[_0x28f531('0x8')][_0x28f531('0x39')]['ROLE_LEVELS']));else{if(_0x4ae2e6===omnic['PremiumTier'][_0x28f531('0x23')]&&_0x2f03b6[_0x28f531('0x14')]>=constants['LIMITS']['PLATINUM']['ROLE_LEVELS'])throw new errors['DiscordError'](errors[_0x28f531('0x2f')][_0x28f531('0xb')],this['client'][_0x28f531('0x24')]['getString'](_0x53233b[_0x28f531('0x44')][_0x28f531('0x42')][_0x28f531('0x32')],_0x28f531('0x9'),'membershipLimitRoleLevels',constants['LIMITS'][_0x28f531('0x23')][_0x28f531('0x22')]));}}else{if(_0x2f03b6[_0x28f531('0x14')]>=constants[_0x28f531('0x8')][_0x28f531('0x22')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][_0x28f531('0x1b')],this[_0x28f531('0xe')]['locale'][_0x28f531('0x4e')](_0x53233b[_0x28f531('0x44')][_0x28f531('0x42')][_0x28f531('0x32')],'errors',_0x28f531('0x49'),constants[_0x28f531('0x8')][_0x28f531('0x22')]));}const _0x3fb141=await Role_1['default'][_0x28f531('0x16')]({'guild':_0x53233b['guild']['id'],'level':_0x5d0110[_0x28f531('0x4b')]});if(_0x4ae2e6){if(_0x4ae2e6===omnic[_0x28f531('0xa')][_0x28f531('0x39')]&&_0x3fb141>=constants[_0x28f531('0x8')][_0x28f531('0x39')][_0x28f531('0x45')])throw new errors[(_0x28f531('0x47'))](errors['BASTION_ERROR_TYPE'][_0x28f531('0xb')],this['client'][_0x28f531('0x24')][_0x28f531('0x4e')](_0x53233b[_0x28f531('0x44')]['document'][_0x28f531('0x32')],'errors',_0x28f531('0x3f'),constants[_0x28f531('0x8')][_0x28f531('0x39')][_0x28f531('0x45')]));else{if(_0x4ae2e6===omnic['PremiumTier'][_0x28f531('0x23')]&&_0x3fb141>=constants[_0x28f531('0x8')][_0x28f531('0x23')][_0x28f531('0x45')])throw new errors[(_0x28f531('0x47'))](errors[_0x28f531('0x2f')][_0x28f531('0xb')],this[_0x28f531('0xe')][_0x28f531('0x24')][_0x28f531('0x4e')](_0x53233b[_0x28f531('0x44')][_0x28f531('0x42')][_0x28f531('0x32')],_0x28f531('0x9'),_0x28f531('0x3f'),constants[_0x28f531('0x8')]['PLATINUM'][_0x28f531('0x45')]));}}else{if(_0x3fb141>=constants['LIMITS'][_0x28f531('0x45')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this[_0x28f531('0xe')][_0x28f531('0x24')][_0x28f531('0x4e')](_0x53233b[_0x28f531('0x44')][_0x28f531('0x42')]['language'],_0x28f531('0x9'),'premiumLevelRoles',constants[_0x28f531('0x8')]['ROLES_PER_LEVEL']));}}const _0x25be82=this[_0x28f531('0xe')][_0x28f531('0x1d')]['resolveRole'](_0x53233b[_0x28f531('0x44')],_0x5d0110[_0x28f531('0x26')][_0x28f531('0x3b')]('\x20'));if(!_0x25be82)throw new errors[(_0x28f531('0x47'))](errors[_0x28f531('0x2f')][_0x28f531('0x20')],this['client'][_0x28f531('0x24')][_0x28f531('0x4e')](_0x53233b[_0x28f531('0x44')][_0x28f531('0x42')][_0x28f531('0x32')],_0x28f531('0x34'),_0x28f531('0x12')));let _0x219525=await _0x25be82[_0x28f531('0x2d')]();return!_0x219525&&(_0x219525=await _0x25be82[_0x28f531('0x1')]()),_0x219525['level']=_0x5d0110[_0x28f531('0x4b')],await _0x219525['save'](),await _0x53233b[_0x28f531('0x4c')][_0x28f531('0x3d')]({'embed':{'color':tesseract_1[_0x28f531('0x1a')][_0x28f531('0x5')][_0x28f531('0x27')],'description':this[_0x28f531('0xe')][_0x28f531('0x24')][_0x28f531('0x4e')](_0x53233b[_0x28f531('0x44')]['document'][_0x28f531('0x32')],_0x28f531('0x38'),_0x28f531('0x21'),_0x53233b[_0x28f531('0x2c')][_0x28f531('0x43')],_0x25be82[_0x28f531('0x33')],_0x5d0110[_0x28f531('0x4b')])}})[_0x28f531('0x31')](()=>{});}if(_0x5d0110[_0x28f531('0x18')])return await Role_1[_0x28f531('0x11')][_0x28f531('0x2b')]({'guild':_0x53233b[_0x28f531('0x44')]['id'],'level':_0x5d0110[_0x28f531('0x4b')]},{'$unset':{'level':0x1}}),await _0x53233b[_0x28f531('0x4c')][_0x28f531('0x3d')]({'embed':{'color':tesseract_1[_0x28f531('0x1a')][_0x28f531('0x5')][_0x28f531('0x30')],'description':this[_0x28f531('0xe')][_0x28f531('0x24')]['getString'](_0x53233b[_0x28f531('0x44')][_0x28f531('0x42')][_0x28f531('0x32')],_0x28f531('0x38'),_0x28f531('0x1e'),_0x53233b['author'][_0x28f531('0x43')],_0x5d0110[_0x28f531('0x4b')])}})[_0x28f531('0x31')](()=>{});const _0x53207a=await Role_1[_0x28f531('0x11')]['find']({'guild':_0x53233b[_0x28f531('0x44')]['id'],'level':_0x5d0110[_0x28f531('0x4b')]});if(!_0x53207a[_0x28f531('0x14')])throw new Error(_0x28f531('0x4d'));const _0x3791ca=this[_0x28f531('0xe')]['resolver']['resolveRoles'](_0x53233b['guild'],_0x53207a[_0x28f531('0x28')](_0x2d1602=>_0x2d1602['_id']));return await _0x53233b['channel'][_0x28f531('0x3d')]({'embed':{'color':tesseract_1[_0x28f531('0x1a')][_0x28f531('0x5')][_0x28f531('0x6')],'title':_0x28f531('0x48')+_0x5d0110['level'],'fields':[{'name':'Roles','value':_0x3791ca[_0x28f531('0x28')](_0x4af663=>_0x4af663[_0x28f531('0x33')])['join']('\x0a')}]}})['catch'](()=>{});}const _0xc50631=await Role_1[_0x28f531('0x11')][_0x28f531('0x3')]({'guild':_0x53233b['guild']['id'],'level':{'$exists':!![],'$ne':null}});if(!_0xc50631[_0x28f531('0x14')])throw new Error(_0x28f531('0x46'));const _0x3c00b9={};for(const _0x323047 of _0xc50631){_0x323047[_0x28f531('0x4b')]in _0x3c00b9?_0x3c00b9[_0x323047['level']][_0x28f531('0x25')](_0x323047['_id']):_0x3c00b9[_0x323047['level']]=[_0x323047[_0x28f531('0x40')]];}return await _0x53233b[_0x28f531('0x4c')]['send']({'embed':{'color':tesseract_1[_0x28f531('0x1a')][_0x28f531('0x5')][_0x28f531('0x6')],'title':'Level-Up\x20Roles','fields':Object[_0x28f531('0x1f')](_0x3c00b9)[_0x28f531('0x28')](_0x171bfb=>({'name':_0x28f531('0x48')+_0x171bfb,'value':_0x3c00b9[_0x171bfb][_0x28f531('0x28')](_0x4c9c94=>_0x53233b[_0x28f531('0x44')]['roles']['cache']['has'](_0x4c9c94)?_0x53233b[_0x28f531('0x44')][_0x28f531('0x4f')][_0x28f531('0x3e')][_0x28f531('0x4')](_0x4c9c94)[_0x28f531('0x33')]:_0x4c9c94)[_0x28f531('0x3b')](',\x20')}))}})['catch'](()=>{});};}};