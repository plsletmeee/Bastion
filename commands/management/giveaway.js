const a66_0x4351=['membershipLimitGiveaways','length','send','GIVEAWAYS','GOLD','giveaway','../../utils/numbers','PLATINUM','@bastion/tesseract','catch','default','fetchPremiumTier','winners','../../utils/errors','LIMITED_PREMIUM_MEMBERSHIP','name','giveaway\x20--timeout\x20HOURS\x20--\x20ITEM','\x20to\x20participate\x20in\x20the\x20giveaway\x20for\x20a\x20chance\x20to\x20win.','floor','language','channel','locale','clamp','../../utils/omnic','react','It\x20allows\x20you\x20to\x20run\x20giveaway\x20events\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20any\x20number\x20of\x20winners\x20for\x20the\x20event.\x20And\x20it\x20also\x20allows\x20you\x20to\x20reroll\x20the\x20winners,\x20if\x20need\x20be,\x20after\x20the\x20end\x20of\x20the\x20event.','../../utils/constants','constructor','defaultWinners','BASTION_ERROR_TYPE','errors','DiscordError','GIVEAWAY_TIMEOUT','premiumGiveaways','getString','PremiumTier','MANAGE_CHANNELS','join','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20or\x20','user','LIMITS','guild','create','timeout','PREMIUM_MEMBERSHIP_REQUIRED','apply','isPublicBastion','../../models/Giveaway','document','IRIS','membershipLimitGiveawayTimeout','exec','premiumGiveawayTimeout','client','React\x20to\x20this\x20message\x20with\x20','\x20Winners\x20•\x20Ends','exports','GIVEAWAY!','giveaway\x20--\x20ITEM','number','defaultTimeout','INVALID_COMMAND_SYNTAX','reactions'];(function(_0x1ed61c,_0x435149){const _0x151ec9=function(_0x5f5df9){while(--_0x5f5df9){_0x1ed61c['push'](_0x1ed61c['shift']());}},_0x19def1=function(){const _0x1135cf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x408036,_0x14c74e,_0x4ed1e6,_0x1c6f60){_0x1c6f60=_0x1c6f60||{};let _0x4cd2ce=_0x14c74e+'='+_0x4ed1e6,_0x2a8ef2=0x0;for(let _0x3fb807=0x0,_0x2c05fd=_0x408036['length'];_0x3fb807<_0x2c05fd;_0x3fb807++){const _0xd36307=_0x408036[_0x3fb807];_0x4cd2ce+=';\x20'+_0xd36307;const _0x2f5f51=_0x408036[_0xd36307];_0x408036['push'](_0x2f5f51),_0x2c05fd=_0x408036['length'],_0x2f5f51!==!![]&&(_0x4cd2ce+='='+_0x2f5f51);}_0x1c6f60['cookie']=_0x4cd2ce;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1e1852,_0x252cda){_0x1e1852=_0x1e1852||function(_0x1129f9){return _0x1129f9;};const _0x2533ed=_0x1e1852(new RegExp('(?:^|;\x20)'+_0x252cda['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x272d37=function(_0x41c7eb,_0x39d759){_0x41c7eb(++_0x39d759);};return _0x272d37(_0x151ec9,_0x435149),_0x2533ed?decodeURIComponent(_0x2533ed[0x1]):undefined;}},_0x69973e=function(){const _0x215bd8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x215bd8['test'](_0x1135cf['removeCookie']['toString']());};_0x1135cf['updateCookie']=_0x69973e;let _0x4effc3='';const _0x5e682f=_0x1135cf['updateCookie']();if(!_0x5e682f)_0x1135cf['setCookie'](['*'],'counter',0x1);else _0x5e682f?_0x4effc3=_0x1135cf['getCookie'](null,'counter'):_0x1135cf['removeCookie']();};_0x19def1();}(a66_0x4351,0x1af));const a66_0x151e=function(_0x1ed61c,_0x435149){_0x1ed61c=_0x1ed61c-0x0;let _0x151ec9=a66_0x4351[_0x1ed61c];return _0x151ec9;};const _0x475592=a66_0x151e,a66_0x1135cf=function(){let _0x4effc3=!![];return function(_0x5e682f,_0x408036){const _0x14c74e=_0x4effc3?function(){const _0x4b8704=a66_0x151e;if(_0x408036){const _0x4ed1e6=_0x408036[_0x4b8704('0x3f')](_0x5e682f,arguments);return _0x408036=null,_0x4ed1e6;}}:function(){};return _0x4effc3=![],_0x14c74e;};}(),a66_0x5f5df9=a66_0x1135cf(this,function(){const _0x1c6f60=function(){const _0x1d86fa=a66_0x151e,_0x4cd2ce=_0x1c6f60[_0x1d86fa('0x2c')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1d86fa('0x2c')](_0x1d86fa('0x37'));return!_0x4cd2ce['test'](a66_0x5f5df9);};return _0x1c6f60();});a66_0x5f5df9();'use strict';const tesseract_1=require(_0x475592('0x19')),Giveaway_1=require(_0x475592('0x1')),constants=require(_0x475592('0x2b')),errors=require(_0x475592('0x1e')),numbers=require(_0x475592('0x17')),omnic=require(_0x475592('0x28'));module[_0x475592('0xa')]=class GiveawayCommand extends tesseract_1['Command']{constructor(){const _0x5b0587=_0x475592;super(_0x5b0587('0x16'),{'description':_0x5b0587('0x2a'),'triggers':[],'arguments':{'alias':{'timeout':['t'],'winners':['w']},'number':[_0x5b0587('0x3d'),_0x5b0587('0x1d')],'coerce':{'timeout':_0x2a8ef2=>typeof _0x2a8ef2===_0x5b0587('0xd')&&numbers[_0x5b0587('0x27')](_0x2a8ef2,0x1,0x2d0),'winners':_0x3fb807=>typeof _0x3fb807==='number'&&Math[_0x5b0587('0x23')](numbers['clamp'](_0x3fb807,0x1,Number['MAX_SAFE_INTEGER']))},'default':{'timeout':0x3,'winners':0x1}},'scope':_0x5b0587('0x3b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x5b0587('0x35')],'syntax':[_0x5b0587('0xc'),'giveaway\x20--winners\x20NUMBER\x20--\x20ITEM',_0x5b0587('0x21')]}),this[_0x5b0587('0x5')]=async(_0x2c05fd,_0xd36307)=>{const _0x1127be=_0x5b0587;if(!_0xd36307['_'][_0x1127be('0x12')])throw new errors['DiscordError'](errors[_0x1127be('0x2e')][_0x1127be('0xf')],this[_0x1127be('0x20')]);const _0x2f5f51=_0xd36307['_'][_0x1127be('0x36')]('\x20'),_0x1e1852=_0xd36307['timeout']?_0xd36307[_0x1127be('0x3d')]:this[_0x1127be('0xe')],_0x252cda=_0xd36307[_0x1127be('0x1d')]?_0xd36307[_0x1127be('0x1d')]:this[_0x1127be('0x2d')];if(constants[_0x1127be('0x0')](this['client'][_0x1127be('0x39')])){const _0x1129f9=await omnic[_0x1127be('0x1c')](_0x2c05fd[_0x1127be('0x3b')])[_0x1127be('0x1a')](()=>{});if(_0x1129f9){if(_0x1129f9===omnic[_0x1127be('0x34')][_0x1127be('0x15')]&&_0x1e1852>constants[_0x1127be('0x3a')][_0x1127be('0x15')][_0x1127be('0x31')])throw new errors[(_0x1127be('0x30'))](errors[_0x1127be('0x2e')]['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x1127be('0x7')]['locale'][_0x1127be('0x33')](_0x2c05fd[_0x1127be('0x3b')]['document'][_0x1127be('0x24')],_0x1127be('0x2f'),_0x1127be('0x4'),constants[_0x1127be('0x3a')][_0x1127be('0x15')]['GIVEAWAY_TIMEOUT']));else{if(_0x1129f9===omnic['PremiumTier'][_0x1127be('0x18')]&&_0x1e1852>constants[_0x1127be('0x3a')][_0x1127be('0x18')][_0x1127be('0x31')])throw new errors[(_0x1127be('0x30'))](errors[_0x1127be('0x2e')][_0x1127be('0x1f')],this[_0x1127be('0x7')][_0x1127be('0x26')][_0x1127be('0x33')](_0x2c05fd[_0x1127be('0x3b')][_0x1127be('0x2')][_0x1127be('0x24')],_0x1127be('0x2f'),_0x1127be('0x4'),constants[_0x1127be('0x3a')][_0x1127be('0x18')][_0x1127be('0x31')]));}}else{if(_0x1e1852>constants['LIMITS'][_0x1127be('0x31')])throw new errors[(_0x1127be('0x30'))](errors[_0x1127be('0x2e')][_0x1127be('0x3e')],this['client'][_0x1127be('0x26')][_0x1127be('0x33')](_0x2c05fd[_0x1127be('0x3b')][_0x1127be('0x2')][_0x1127be('0x24')],_0x1127be('0x2f'),_0x1127be('0x6'),constants['LIMITS']['GIVEAWAY_TIMEOUT']));}const _0x41c7eb=await Giveaway_1['default']['countDocuments']({'guild':_0x2c05fd[_0x1127be('0x3b')]['id'],'ends':{'$gte':new Date()}});if(_0x1129f9){if(_0x1129f9===omnic[_0x1127be('0x34')]['GOLD']&&_0x41c7eb>=constants['LIMITS'][_0x1127be('0x15')][_0x1127be('0x14')])throw new errors[(_0x1127be('0x30'))](errors[_0x1127be('0x2e')][_0x1127be('0x1f')],this[_0x1127be('0x7')][_0x1127be('0x26')][_0x1127be('0x33')](_0x2c05fd[_0x1127be('0x3b')][_0x1127be('0x2')]['language'],'errors',_0x1127be('0x11'),constants['LIMITS']['GOLD'][_0x1127be('0x14')]));else{if(_0x1129f9===omnic['PremiumTier'][_0x1127be('0x18')]&&_0x41c7eb>=constants[_0x1127be('0x3a')]['PLATINUM']['GIVEAWAYS'])throw new errors['DiscordError'](errors[_0x1127be('0x2e')][_0x1127be('0x1f')],this[_0x1127be('0x7')][_0x1127be('0x26')]['getString'](_0x2c05fd[_0x1127be('0x3b')]['document']['language'],_0x1127be('0x2f'),_0x1127be('0x11'),constants['LIMITS'][_0x1127be('0x18')]['GIVEAWAYS']));}}else{if(_0x41c7eb>=constants[_0x1127be('0x3a')][_0x1127be('0x14')])throw new errors[(_0x1127be('0x30'))](errors[_0x1127be('0x2e')][_0x1127be('0x3e')],this[_0x1127be('0x7')][_0x1127be('0x26')][_0x1127be('0x33')](_0x2c05fd[_0x1127be('0x3b')][_0x1127be('0x2')][_0x1127be('0x24')],_0x1127be('0x2f'),_0x1127be('0x32'),constants[_0x1127be('0x3a')]['GIVEAWAYS']));}}const _0x2533ed=new Date(Date['now']()+_0x1e1852*0x36ee80),_0x272d37=await _0x2c05fd['channel'][_0x1127be('0x13')]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x1127be('0x3')],'author':{'name':_0x1127be('0xb')},'title':_0x2f5f51,'description':_0x1127be('0x8')+this[_0x1127be('0x10')][_0x1127be('0x36')](_0x1127be('0x38'))+_0x1127be('0x22'),'footer':{'text':_0x252cda+_0x1127be('0x9')},'timestamp':_0x2533ed}});await Giveaway_1[_0x1127be('0x1b')][_0x1127be('0x3c')]({'_id':_0x272d37['id'],'channel':_0x272d37[_0x1127be('0x25')]['id'],'guild':_0x272d37['guild']['id'],'winners':_0x252cda,'ends':_0x2533ed});for(const _0x39d759 of this[_0x1127be('0x10')]){await _0x272d37[_0x1127be('0x29')](_0x39d759)[_0x1127be('0x1a')](()=>{});}},this[_0x5b0587('0x10')]=['🎊','🎉'],this['defaultTimeout']=0x3,this[_0x5b0587('0x2d')]=0x1;}};