const a78_0x33b0=['NO_PERMISSION','\x20/\x20','roleBought','channel','locale','DiscordError','document','client','GREEN','tag','constructor','errors','_id','info','It\x20allows\x20you\x20to\x20set\x20up\x20a\x20Role\x20Store\x20in\x20the\x20server.\x20Server\x20managers\x20can\x20sell\x20roles\x20in\x20the\x20server\x20and\x20members\x20can\x20buy\x20them\x20with\x20Bastion\x20Coins.','roleStore','RED','MANAGE_ROLES','roleStore\x20ROLE\x20--unlist','PremiumTier','membershipLimitPaidRoles','roleStore\x20ROLE\x20--buy','permissions','GOLD','ROLE_NOT_FOR_SALE','LIMITED_PREMIUM_MEMBERSHIP','Paid\x20Role','Command','Constants','member','roleStore\x20ROLE\x20--sell\x20AMOUNT','NO_ROLES_ON_SALE','user','LIMITS','find','name','sell','add','default','fetchPremiumTier','price','send','unlist','resolver','Roles\x20Store','map','join','getString','guild','MAX_SAFE_INTEGER','has','../../utils/numbers','debit','roleStoreRemove','COLORS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','roles','author','clamp','exec','BASTION_ERROR_TYPE','save','PAID_ROLES','INSUFFICIENT_BALANCE','findOneAndUpdate','roleNotFound','exports','resolveRole','length','isPublicBastion','PLATINUM','language','PREMIUM_MEMBERSHIP_REQUIRED','\x20Bastion\x20Coins','cache','catch'];(function(_0x25f279,_0x33b0c1){const _0x26456a=function(_0x4c9965){while(--_0x4c9965){_0x25f279['push'](_0x25f279['shift']());}},_0x27c77e=function(){const _0x4d4a3c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x359f65,_0x5da4fd,_0x1473e5,_0x5751f9){_0x5751f9=_0x5751f9||{};let _0x5ea653=_0x5da4fd+'='+_0x1473e5,_0x3f6a5a=0x0;for(let _0x32f2f6=0x0,_0x45cb71=_0x359f65['length'];_0x32f2f6<_0x45cb71;_0x32f2f6++){const _0x282caa=_0x359f65[_0x32f2f6];_0x5ea653+=';\x20'+_0x282caa;const _0x16a437=_0x359f65[_0x282caa];_0x359f65['push'](_0x16a437),_0x45cb71=_0x359f65['length'],_0x16a437!==!![]&&(_0x5ea653+='='+_0x16a437);}_0x5751f9['cookie']=_0x5ea653;},'removeCookie':function(){return'dev';},'getCookie':function(_0x19cb9c,_0xa3bc81){_0x19cb9c=_0x19cb9c||function(_0x4a2734){return _0x4a2734;};const _0x455053=_0x19cb9c(new RegExp('(?:^|;\x20)'+_0xa3bc81['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x348092=function(_0xb3b354,_0x259619){_0xb3b354(++_0x259619);};return _0x348092(_0x26456a,_0x33b0c1),_0x455053?decodeURIComponent(_0x455053[0x1]):undefined;}},_0x2b7048=function(){const _0x2b73a5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2b73a5['test'](_0x4d4a3c['removeCookie']['toString']());};_0x4d4a3c['updateCookie']=_0x2b7048;let _0x3544ba='';const _0x5db368=_0x4d4a3c['updateCookie']();if(!_0x5db368)_0x4d4a3c['setCookie'](['*'],'counter',0x1);else _0x5db368?_0x3544ba=_0x4d4a3c['getCookie'](null,'counter'):_0x4d4a3c['removeCookie']();};_0x27c77e();}(a78_0x33b0,0xda));const a78_0x2645=function(_0x25f279,_0x33b0c1){_0x25f279=_0x25f279-0x0;let _0x26456a=a78_0x33b0[_0x25f279];return _0x26456a;};const _0x24c25d=a78_0x2645,a78_0x4d4a3c=function(){let _0x3544ba=!![];return function(_0x5db368,_0x359f65){const _0x5da4fd=_0x3544ba?function(){if(_0x359f65){const _0x1473e5=_0x359f65['apply'](_0x5db368,arguments);return _0x359f65=null,_0x1473e5;}}:function(){};return _0x3544ba=![],_0x5da4fd;};}(),a78_0x4c9965=a78_0x4d4a3c(this,function(){const _0x5751f9=function(){const _0x35e9fd=a78_0x2645,_0x5ea653=_0x5751f9[_0x35e9fd('0x14')](_0x35e9fd('0x41'))()[_0x35e9fd('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5ea653['test'](a78_0x4c9965);};return _0x5751f9();});a78_0x4c9965();'use strict';const tesseract_1=require('@bastion/tesseract'),Role_1=require('../../models/Role'),constants=require('../../utils/constants'),errors=require('../../utils/errors'),numbers=require(_0x24c25d('0x3d')),omnic=require('../../utils/omnic');module[_0x24c25d('0x0')]=class RoleStoreCommand extends tesseract_1[_0x24c25d('0x25')]{constructor(){const _0x57b28b=_0x24c25d;super(_0x57b28b('0x19'),{'description':_0x57b28b('0x18'),'triggers':[],'arguments':{'boolean':['buy',_0x57b28b('0x34')],'number':[_0x57b28b('0x2e')],'coerce':{'sell':_0x3f6a5a=>numbers[_0x57b28b('0x44')](_0x3f6a5a,0x1,Number[_0x57b28b('0x3b')])}},'scope':_0x57b28b('0x3a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x57b28b('0x1b')],'userPermissions':[],'syntax':[_0x57b28b('0x19'),_0x57b28b('0x28'),_0x57b28b('0x1f'),_0x57b28b('0x1c')]}),this[_0x57b28b('0x45')]=async(_0x32f2f6,_0x45cb71)=>{const _0xc4aa9=_0x57b28b;if(_0x45cb71['_']['length']){const _0x16a437=this[_0xc4aa9('0x11')][_0xc4aa9('0x35')][_0xc4aa9('0x1')](_0x32f2f6[_0xc4aa9('0x3a')],_0x45cb71['_'][_0xc4aa9('0x38')]('\x20'));if(!_0x16a437)throw new errors[(_0xc4aa9('0xf'))](errors[_0xc4aa9('0x46')]['ROLE_NOT_FOUND'],this[_0xc4aa9('0x11')]['locale']['getString'](_0x32f2f6[_0xc4aa9('0x3a')]['document'][_0xc4aa9('0x5')],'error',_0xc4aa9('0x4b')));if(_0x45cb71[_0xc4aa9('0x2e')]>0x0){if(constants[_0xc4aa9('0x3')](this['client'][_0xc4aa9('0x2a')])){const _0x19cb9c=await Role_1[_0xc4aa9('0x30')]['countDocuments']({'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id'],'price':{'$exists':!![],'$ne':null}});if(_0x19cb9c>=constants['LIMITS']['PAID_ROLES']){const _0xa3bc81=await omnic[_0xc4aa9('0x31')](_0x32f2f6[_0xc4aa9('0x3a')])[_0xc4aa9('0x9')](()=>{});if(_0xa3bc81){if(_0xa3bc81===omnic['PremiumTier'][_0xc4aa9('0x21')]&&_0x19cb9c>=constants[_0xc4aa9('0x2b')][_0xc4aa9('0x21')][_0xc4aa9('0x48')])throw new errors[(_0xc4aa9('0xf'))](errors[_0xc4aa9('0x46')][_0xc4aa9('0x23')],this[_0xc4aa9('0x11')]['locale'][_0xc4aa9('0x39')](_0x32f2f6[_0xc4aa9('0x3a')][_0xc4aa9('0x10')]['language'],_0xc4aa9('0x15'),'membershipLimitPaidRoles',constants[_0xc4aa9('0x2b')][_0xc4aa9('0x21')][_0xc4aa9('0x48')]));else{if(_0xa3bc81===omnic[_0xc4aa9('0x1d')][_0xc4aa9('0x4')]&&_0x19cb9c>=constants[_0xc4aa9('0x2b')]['PLATINUM'][_0xc4aa9('0x48')])throw new errors['DiscordError'](errors[_0xc4aa9('0x46')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][_0xc4aa9('0xe')][_0xc4aa9('0x39')](_0x32f2f6['guild'][_0xc4aa9('0x10')]['language'],_0xc4aa9('0x15'),_0xc4aa9('0x1e'),constants[_0xc4aa9('0x2b')][_0xc4aa9('0x4')][_0xc4aa9('0x48')]));}}else throw new errors[(_0xc4aa9('0xf'))](errors[_0xc4aa9('0x46')][_0xc4aa9('0x6')],this[_0xc4aa9('0x11')][_0xc4aa9('0xe')][_0xc4aa9('0x39')](_0x32f2f6[_0xc4aa9('0x3a')][_0xc4aa9('0x10')][_0xc4aa9('0x5')],_0xc4aa9('0x15'),'premiumPaidRoles',constants[_0xc4aa9('0x2b')]['PAID_ROLES']));}}if(!_0x32f2f6[_0xc4aa9('0x27')][_0xc4aa9('0x20')][_0xc4aa9('0x3c')](_0xc4aa9('0x1b')))throw new Error(_0xc4aa9('0xa'));return await Role_1[_0xc4aa9('0x30')][_0xc4aa9('0x4a')]({'_id':_0x16a437['id'],'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id']},{'_id':_0x16a437['id'],'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id'],'price':_0x45cb71[_0xc4aa9('0x2e')]},{'upsert':!![]}),await _0x32f2f6[_0xc4aa9('0xd')][_0xc4aa9('0x33')]({'embed':{'color':tesseract_1[_0xc4aa9('0x26')][_0xc4aa9('0x40')][_0xc4aa9('0x12')],'description':this[_0xc4aa9('0x11')]['locale'][_0xc4aa9('0x39')](_0x32f2f6[_0xc4aa9('0x3a')][_0xc4aa9('0x10')][_0xc4aa9('0x5')],_0xc4aa9('0x17'),'roleStoreAdd',_0x32f2f6[_0xc4aa9('0x43')][_0xc4aa9('0x13')],_0x16a437[_0xc4aa9('0x2d')],_0x45cb71[_0xc4aa9('0x2e')])}})[_0xc4aa9('0x9')](()=>{});}if(_0x45cb71['buy']){if(_0x32f2f6[_0xc4aa9('0x27')][_0xc4aa9('0x42')][_0xc4aa9('0x8')][_0xc4aa9('0x3c')](_0x16a437['id']))throw new Error('ROLE_ALREADY_ASSIGNED');const _0x455053=await Role_1[_0xc4aa9('0x30')]['findOne']({'_id':_0x16a437['id'],'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id'],'price':{'$exists':!![],'$ne':null}});if(!_0x455053)throw new Error(_0xc4aa9('0x22'));if(_0x32f2f6[_0xc4aa9('0x27')]['document']['balance']<_0x455053[_0xc4aa9('0x32')])throw new Error(_0xc4aa9('0x49'));return await _0x32f2f6[_0xc4aa9('0x27')][_0xc4aa9('0x42')][_0xc4aa9('0x2f')](_0x16a437),_0x32f2f6[_0xc4aa9('0x27')][_0xc4aa9('0x3e')](_0x455053[_0xc4aa9('0x32')],_0xc4aa9('0x24'),_0x32f2f6['member'][_0xc4aa9('0x10')]),await _0x32f2f6['member'][_0xc4aa9('0x10')][_0xc4aa9('0x47')](),await _0x32f2f6[_0xc4aa9('0xd')][_0xc4aa9('0x33')]({'embed':{'color':tesseract_1[_0xc4aa9('0x26')][_0xc4aa9('0x40')][_0xc4aa9('0x12')],'description':this['client']['locale'][_0xc4aa9('0x39')](_0x32f2f6[_0xc4aa9('0x3a')][_0xc4aa9('0x10')]['language'],_0xc4aa9('0x17'),_0xc4aa9('0xc'),_0x32f2f6[_0xc4aa9('0x43')][_0xc4aa9('0x13')],_0x16a437[_0xc4aa9('0x2d')],_0x455053[_0xc4aa9('0x32')])}})[_0xc4aa9('0x9')](()=>{});}if(_0x45cb71[_0xc4aa9('0x34')]){if(!_0x32f2f6['member']['permissions'][_0xc4aa9('0x3c')](_0xc4aa9('0x1b')))throw new Error(_0xc4aa9('0xa'));return await Role_1[_0xc4aa9('0x30')][_0xc4aa9('0x4a')]({'_id':_0x16a437['id'],'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id'],'price':{'$exists':!![],'$ne':null}},{'_id':_0x16a437['id'],'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id'],'$unset':{'price':0x1}}),await _0x32f2f6[_0xc4aa9('0xd')][_0xc4aa9('0x33')]({'embed':{'color':tesseract_1[_0xc4aa9('0x26')]['COLORS'][_0xc4aa9('0x1a')],'description':this[_0xc4aa9('0x11')][_0xc4aa9('0xe')]['getString'](_0x32f2f6[_0xc4aa9('0x3a')][_0xc4aa9('0x10')]['language'],_0xc4aa9('0x17'),_0xc4aa9('0x3f'),_0x32f2f6[_0xc4aa9('0x43')]['tag'],_0x16a437[_0xc4aa9('0x2d')])}})[_0xc4aa9('0x9')](()=>{});}}const _0x282caa=await Role_1[_0xc4aa9('0x30')][_0xc4aa9('0x2c')]({'guild':_0x32f2f6[_0xc4aa9('0x3a')]['id'],'price':{'$exists':!![],'$ne':null}});if(!_0x282caa[_0xc4aa9('0x2')])throw new Error(_0xc4aa9('0x29'));return await _0x32f2f6[_0xc4aa9('0xd')][_0xc4aa9('0x33')]({'embed':{'color':tesseract_1[_0xc4aa9('0x26')]['COLORS']['IRIS'],'title':_0xc4aa9('0x36'),'fields':_0x282caa[_0xc4aa9('0x37')](_0x348092=>({'name':(_0x32f2f6['guild'][_0xc4aa9('0x42')][_0xc4aa9('0x8')]['has'](_0x348092[_0xc4aa9('0x16')])?_0x32f2f6[_0xc4aa9('0x3a')][_0xc4aa9('0x42')]['cache']['get'](_0x348092[_0xc4aa9('0x16')])['name']+_0xc4aa9('0xb'):'')+_0x348092['_id'],'value':_0x348092[_0xc4aa9('0x32')]+_0xc4aa9('0x7')}))}})[_0xc4aa9('0x9')](()=>{});};}};