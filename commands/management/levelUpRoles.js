const a64_0x56bd=['../../utils/constants','../../utils/numbers','remove','document','push','roleLevelClear','cache','GREEN','level','errors','Constants','save','levelUpRoles\x20--level\x20NUMBER\x20--remove','map','levelUpRoles','emoji','premiumLevelRoles','exports','ROLES_PER_LEVEL','countDocuments','Level-Up\x20Roles','updateMany','tag','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE','language','role','membershipLimitLevelRoles','channel','COLORS','MAX_LEVEL','roles','premiumRoleLevels','guild','exec','test','catch','length','DiscordError','GOLD','../../utils/omnic','default','return\x20/\x22\x20+\x20this\x20+\x20\x22/','NO_ROLES_FOR_LEVEL','RED','join','compile','client','membershipLimitRoleLevels','../../models/Role','distinct','Level\x20','resolver','LIMITED_PREMIUM_MEMBERSHIP','PLATINUM','name','clamp','_id','locale','../../utils/gamification','PremiumTier','author','info','ROLE_LEVELS','getString','send','LIMITS','IRIS','BASTION_ERROR_TYPE','error','get','keys','find','roleLevelAdd','createDocument','It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','fetchDocument','has','../../utils/errors'];(function(_0x4ae9f3,_0x56bdd1){const _0x34a9b7=function(_0x1b3bac){while(--_0x1b3bac){_0x4ae9f3['push'](_0x4ae9f3['shift']());}};const _0x266607=function(){const _0x4341a4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x216e23,_0x40cdf3,_0x23764a,_0x292304){_0x292304=_0x292304||{};let _0x54752e=_0x40cdf3+'='+_0x23764a;let _0x27a45d=0x0;for(let _0x24d0ff=0x0,_0x46af64=_0x216e23['length'];_0x24d0ff<_0x46af64;_0x24d0ff++){const _0x1f05d3=_0x216e23[_0x24d0ff];_0x54752e+=';\x20'+_0x1f05d3;const _0x94fe74=_0x216e23[_0x1f05d3];_0x216e23['push'](_0x94fe74);_0x46af64=_0x216e23['length'];if(_0x94fe74!==!![]){_0x54752e+='='+_0x94fe74;}}_0x292304['cookie']=_0x54752e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x350911,_0x276adc){_0x350911=_0x350911||function(_0x361f0d){return _0x361f0d;};const _0x4866df=_0x350911(new RegExp('(?:^|;\x20)'+_0x276adc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x167af6=function(_0x187511,_0x577d84){_0x187511(++_0x577d84);};_0x167af6(_0x34a9b7,_0x56bdd1);return _0x4866df?decodeURIComponent(_0x4866df[0x1]):undefined;}};const _0xc22d1b=function(){const _0x50f64a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x50f64a['test'](_0x4341a4['removeCookie']['toString']());};_0x4341a4['updateCookie']=_0xc22d1b;let _0x51c2d0='';const _0x48142c=_0x4341a4['updateCookie']();if(!_0x48142c){_0x4341a4['setCookie'](['*'],'counter',0x1);}else if(_0x48142c){_0x51c2d0=_0x4341a4['getCookie'](null,'counter');}else{_0x4341a4['removeCookie']();}};_0x266607();}(a64_0x56bd,0x19e));const a64_0x34a9=function(_0x4ae9f3,_0x56bdd1){_0x4ae9f3=_0x4ae9f3-0x0;let _0x34a9b7=a64_0x56bd[_0x4ae9f3];return _0x34a9b7;};const a64_0x4341a4=function(){let _0x4f0ad3=!![];return function(_0x5e08f9,_0x105f37){const _0x487e57=_0x4f0ad3?function(){if(_0x105f37){const _0x4798c2=_0x105f37['apply'](_0x5e08f9,arguments);_0x105f37=null;return _0x4798c2;}}:function(){};_0x4f0ad3=![];return _0x487e57;};}();const a64_0x1b3bac=a64_0x4341a4(this,function(){const _0x30e140=function(){const _0x526cd7=_0x30e140['constructor'](a64_0x34a9('0x16'))()[a64_0x34a9('0x1a')](a64_0x34a9('0x38'));return!_0x526cd7[a64_0x34a9('0xf')](a64_0x1b3bac);};return _0x30e140();});a64_0x1b3bac();'use strict';const tesseract_1=require('@bastion/tesseract');const Role_1=require(a64_0x34a9('0x1d'));const constants=require(a64_0x34a9('0x3c'));const errors=require(a64_0x34a9('0x3b'));const gamification=require(a64_0x34a9('0x27'));const numbers=require(a64_0x34a9('0x3d'));const omnic=require(a64_0x34a9('0x14'));module[a64_0x34a9('0x4d')]=class LevelUpRolesCommand extends tesseract_1['Command']{constructor(){super(a64_0x34a9('0x4a'),{'description':a64_0x34a9('0x37'),'triggers':[],'arguments':{'array':[a64_0x34a9('0x6')],'boolean':['remove'],'string':['role'],'number':['level'],'coerce':{'level':_0x2bfbf9=>numbers[a64_0x34a9('0x24')](_0x2bfbf9,0x1,gamification[a64_0x34a9('0xa')])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':['MANAGE_ROLES'],'syntax':[a64_0x34a9('0x4a'),'levelUpRoles\x20--level\x20NUMBER',a64_0x34a9('0x4'),a64_0x34a9('0x48')]});this[a64_0x34a9('0xe')]=async(_0xe05d01,_0x15007a)=>{if(_0x15007a[a64_0x34a9('0x44')]){if(_0x15007a[a64_0x34a9('0x6')]){if(constants['isPublicBastion'](this[a64_0x34a9('0x1b')]['user'])){const _0x12e99a=await omnic['fetchPremiumTier'](_0xe05d01[a64_0x34a9('0xd')])['catch'](()=>{});const _0x1d632e=await Role_1[a64_0x34a9('0x15')][a64_0x34a9('0x1e')]('level',{'guild':_0xe05d01[a64_0x34a9('0xd')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x12e99a){if(_0x12e99a===omnic[a64_0x34a9('0x28')][a64_0x34a9('0x13')]&&_0x1d632e['length']>=constants[a64_0x34a9('0x2e')][a64_0x34a9('0x13')][a64_0x34a9('0x2b')]){throw new errors[(a64_0x34a9('0x12'))](errors[a64_0x34a9('0x30')][a64_0x34a9('0x21')],this[a64_0x34a9('0x1b')][a64_0x34a9('0x26')][a64_0x34a9('0x2c')](_0xe05d01['guild'][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],a64_0x34a9('0x45'),a64_0x34a9('0x1c'),constants['LIMITS'][a64_0x34a9('0x13')][a64_0x34a9('0x2b')]));}else if(_0x12e99a===omnic[a64_0x34a9('0x28')][a64_0x34a9('0x22')]&&_0x1d632e[a64_0x34a9('0x11')]>=constants[a64_0x34a9('0x2e')][a64_0x34a9('0x22')][a64_0x34a9('0x2b')]){throw new errors['DiscordError'](errors[a64_0x34a9('0x30')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a64_0x34a9('0x26')]['getString'](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],a64_0x34a9('0x45'),'membershipLimitRoleLevels',constants['LIMITS'][a64_0x34a9('0x22')][a64_0x34a9('0x2b')]));}}else if(_0x1d632e[a64_0x34a9('0x11')]>=constants[a64_0x34a9('0x2e')][a64_0x34a9('0x2b')]){throw new errors[(a64_0x34a9('0x12'))](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this[a64_0x34a9('0x1b')]['locale'][a64_0x34a9('0x2c')](_0xe05d01['guild'][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],a64_0x34a9('0x45'),a64_0x34a9('0xc'),constants[a64_0x34a9('0x2e')][a64_0x34a9('0x2b')]));}const _0x4cb791=await Role_1[a64_0x34a9('0x15')][a64_0x34a9('0x0')]({'guild':_0xe05d01['guild']['id'],'level':_0x15007a[a64_0x34a9('0x44')]});if(_0x12e99a){if(_0x12e99a===omnic[a64_0x34a9('0x28')][a64_0x34a9('0x13')]&&_0x4cb791>=constants[a64_0x34a9('0x2e')]['GOLD'][a64_0x34a9('0x4e')]){throw new errors['DiscordError'](errors[a64_0x34a9('0x30')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a64_0x34a9('0x26')][a64_0x34a9('0x2c')](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')]['language'],a64_0x34a9('0x45'),a64_0x34a9('0x7'),constants[a64_0x34a9('0x2e')][a64_0x34a9('0x13')][a64_0x34a9('0x4e')]));}else if(_0x12e99a===omnic[a64_0x34a9('0x28')][a64_0x34a9('0x22')]&&_0x4cb791>=constants[a64_0x34a9('0x2e')][a64_0x34a9('0x22')][a64_0x34a9('0x4e')]){throw new errors[(a64_0x34a9('0x12'))](errors[a64_0x34a9('0x30')][a64_0x34a9('0x21')],this[a64_0x34a9('0x1b')][a64_0x34a9('0x26')][a64_0x34a9('0x2c')](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')]['language'],'errors',a64_0x34a9('0x7'),constants[a64_0x34a9('0x2e')][a64_0x34a9('0x22')][a64_0x34a9('0x4e')]));}}else if(_0x4cb791>=constants[a64_0x34a9('0x2e')]['ROLES_PER_LEVEL']){throw new errors[(a64_0x34a9('0x12'))](errors[a64_0x34a9('0x30')]['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][a64_0x34a9('0x26')][a64_0x34a9('0x2c')](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],a64_0x34a9('0x45'),a64_0x34a9('0x4c'),constants['LIMITS']['ROLES_PER_LEVEL']));}}const _0x5cec50=this['client']['resolver']['resolveRole'](_0xe05d01[a64_0x34a9('0xd')],_0x15007a['role'][a64_0x34a9('0x19')]('\x20'));if(!_0x5cec50)throw new errors['DiscordError'](errors[a64_0x34a9('0x30')]['ROLE_NOT_FOUND'],this[a64_0x34a9('0x1b')][a64_0x34a9('0x26')]['getString'](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],a64_0x34a9('0x31'),'roleNotFound'));let _0x384295=await _0x5cec50[a64_0x34a9('0x39')]();if(!_0x384295&&_0x15007a[a64_0x34a9('0x4b')]){_0x384295=await _0x5cec50[a64_0x34a9('0x36')]();}_0x384295['level']=_0x15007a['level'];await _0x384295[a64_0x34a9('0x47')]();return await _0xe05d01[a64_0x34a9('0x8')][a64_0x34a9('0x2d')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a64_0x34a9('0x43')],'description':this[a64_0x34a9('0x1b')]['locale'][a64_0x34a9('0x2c')](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],a64_0x34a9('0x2a'),a64_0x34a9('0x35'),_0xe05d01[a64_0x34a9('0x29')]['tag'],_0x5cec50['name'],_0x15007a[a64_0x34a9('0x44')])}})['catch'](()=>{});}if(_0x15007a[a64_0x34a9('0x3e')]){await Role_1[a64_0x34a9('0x15')][a64_0x34a9('0x2')]({'guild':_0xe05d01[a64_0x34a9('0xd')]['id'],'level':_0x15007a[a64_0x34a9('0x44')]},{'$unset':{'level':0x1}});return await _0xe05d01[a64_0x34a9('0x8')][a64_0x34a9('0x2d')]({'embed':{'color':tesseract_1[a64_0x34a9('0x46')][a64_0x34a9('0x9')][a64_0x34a9('0x18')],'description':this[a64_0x34a9('0x1b')][a64_0x34a9('0x26')][a64_0x34a9('0x2c')](_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0x3f')][a64_0x34a9('0x5')],'info',a64_0x34a9('0x41'),_0xe05d01[a64_0x34a9('0x29')][a64_0x34a9('0x3')],_0x15007a['level'])}})[a64_0x34a9('0x10')](()=>{});}const _0x3ff92f=await Role_1[a64_0x34a9('0x15')][a64_0x34a9('0x34')]({'guild':_0xe05d01['guild']['id'],'level':_0x15007a[a64_0x34a9('0x44')]});if(!_0x3ff92f[a64_0x34a9('0x11')])throw new Error(a64_0x34a9('0x17'));const _0x141d31=this[a64_0x34a9('0x1b')][a64_0x34a9('0x20')]['resolveRoles'](_0xe05d01['guild'],_0x3ff92f['map'](_0x7591f3=>_0x7591f3[a64_0x34a9('0x25')]));return await _0xe05d01['channel'][a64_0x34a9('0x2d')]({'embed':{'color':tesseract_1[a64_0x34a9('0x46')][a64_0x34a9('0x9')][a64_0x34a9('0x2f')],'title':'Level\x20'+_0x15007a[a64_0x34a9('0x44')],'fields':[{'name':'Roles','value':_0x141d31[a64_0x34a9('0x49')](_0x5dcb9a=>_0x5dcb9a[a64_0x34a9('0x23')])[a64_0x34a9('0x19')]('\x0a')}]}})[a64_0x34a9('0x10')](()=>{});}const _0x395e8c=await Role_1['default']['find']({'guild':_0xe05d01['guild']['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x395e8c['length'])throw new Error('NO_LEVEL_UP_ROLES');const _0x20c215={};for(const _0x562a19 of _0x395e8c){if(_0x562a19[a64_0x34a9('0x44')]in _0x20c215){_0x20c215[_0x562a19['level']][a64_0x34a9('0x40')](_0x562a19['_id']);}else{_0x20c215[_0x562a19[a64_0x34a9('0x44')]]=[_0x562a19[a64_0x34a9('0x25')]];}}return await _0xe05d01['channel'][a64_0x34a9('0x2d')]({'embed':{'color':tesseract_1[a64_0x34a9('0x46')][a64_0x34a9('0x9')][a64_0x34a9('0x2f')],'title':a64_0x34a9('0x1'),'fields':Object[a64_0x34a9('0x33')](_0x20c215)[a64_0x34a9('0x49')](_0x5199ee=>({'name':a64_0x34a9('0x1f')+_0x5199ee,'value':_0x20c215[_0x5199ee][a64_0x34a9('0x49')](_0xf01ff7=>_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0xb')][a64_0x34a9('0x42')][a64_0x34a9('0x3a')](_0xf01ff7)?_0xe05d01[a64_0x34a9('0xd')][a64_0x34a9('0xb')][a64_0x34a9('0x42')][a64_0x34a9('0x32')](_0xf01ff7)['name']:_0xf01ff7)['join'](',\x20')}))}})[a64_0x34a9('0x10')](()=>{});};}};