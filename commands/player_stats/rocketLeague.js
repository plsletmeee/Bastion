const a114_0x46ae=['Season\x20Reward','apply','name','toTitleCase','channel','platforms','steam','makeRequest','xboxone','return\x20/\x22\x20+\x20this\x20+\x20\x22/','ROCKET_LEAGUE','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20•\x20Powered\x20by\x20Rocket\x20League','../../utils/constants','join','rocketLeague\x20USERNAME','toUpperCase','INVALID_COMMAND_SYNTAX','wins','stats','Rocket\x20League\x20-\x20Player\x20Stats','BASTION_ERROR_TYPE','map','keys','test','\x20Wins','exports','send','Level\x20','user_name','exec','rocketLeague\x20USERNAME\x20--platform\x20PLATFORM','guild','season_rewards','/playerstats/rocketleague/','level','\x20/\x20','toLowerCase','PLAYER_NOT_FOUND','constructor','platform'];(function(_0x2c9033,_0x46ae9e){const _0x56552e=function(_0x291b5d){while(--_0x291b5d){_0x2c9033['push'](_0x2c9033['shift']());}},_0xdb6bc=function(){const _0x1b07f6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x545203,_0x3f6a2e,_0x206d39,_0x50432e){_0x50432e=_0x50432e||{};let _0x4f1477=_0x3f6a2e+'='+_0x206d39,_0x256e74=0x0;for(let _0x412819=0x0,_0x285b99=_0x545203['length'];_0x412819<_0x285b99;_0x412819++){const _0x253854=_0x545203[_0x412819];_0x4f1477+=';\x20'+_0x253854;const _0x2a7a12=_0x545203[_0x253854];_0x545203['push'](_0x2a7a12),_0x285b99=_0x545203['length'],_0x2a7a12!==!![]&&(_0x4f1477+='='+_0x2a7a12);}_0x50432e['cookie']=_0x4f1477;},'removeCookie':function(){return'dev';},'getCookie':function(_0x262d84,_0x528cd0){_0x262d84=_0x262d84||function(_0x432633){return _0x432633;};const _0x14f8fd=_0x262d84(new RegExp('(?:^|;\x20)'+_0x528cd0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4d6138=function(_0x237f7e,_0x197c86){_0x237f7e(++_0x197c86);};return _0x4d6138(_0x56552e,_0x46ae9e),_0x14f8fd?decodeURIComponent(_0x14f8fd[0x1]):undefined;}},_0x23271f=function(){const _0x24ea4c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x24ea4c['test'](_0x1b07f6['removeCookie']['toString']());};_0x1b07f6['updateCookie']=_0x23271f;let _0x32622c='';const _0x117022=_0x1b07f6['updateCookie']();if(!_0x117022)_0x1b07f6['setCookie'](['*'],'counter',0x1);else _0x117022?_0x32622c=_0x1b07f6['getCookie'](null,'counter'):_0x1b07f6['removeCookie']();};_0xdb6bc();}(a114_0x46ae,0xe1));const a114_0x5655=function(_0x2c9033,_0x46ae9e){_0x2c9033=_0x2c9033-0x0;let _0x56552e=a114_0x46ae[_0x2c9033];return _0x56552e;};const _0x385a6c=a114_0x5655,a114_0x1b07f6=function(){let _0x32622c=!![];return function(_0x117022,_0x545203){const _0x3f6a2e=_0x32622c?function(){const _0x1936e3=a114_0x5655;if(_0x545203){const _0x206d39=_0x545203[_0x1936e3('0x16')](_0x117022,arguments);return _0x545203=null,_0x206d39;}}:function(){};return _0x32622c=![],_0x3f6a2e;};}(),a114_0x291b5d=a114_0x1b07f6(this,function(){const _0x50432e=function(){const _0x3d6618=a114_0x5655,_0x4f1477=_0x50432e[_0x3d6618('0x13')](_0x3d6618('0x1e'))()[_0x3d6618('0x13')](_0x3d6618('0x20'));return!_0x4f1477[_0x3d6618('0x4')](a114_0x291b5d);};return _0x50432e();});a114_0x291b5d();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(_0x385a6c('0x22')),errors=require('../../utils/errors'),omnic=require('../../utils/omnic'),strings=require('../../utils/strings');module[_0x385a6c('0x6')]=class RocketLeagueCommand extends tesseract_1['Command']{constructor(){const _0x3eea1b=_0x385a6c;super('rocketLeague',{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Rocket\x20League\x20player\x20in\x20any\x20supported\x20platform.','triggers':[],'arguments':{'alias':{'platform':['p']},'string':[_0x3eea1b('0x14')]},'scope':_0x3eea1b('0xc'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x3eea1b('0x24'),_0x3eea1b('0xb')]}),this[_0x3eea1b('0xa')]=async(_0x256e74,_0x412819)=>{const _0x58ebce=_0x3eea1b;if(!_0x412819['_']['length'])throw new errors['DiscordError'](errors[_0x58ebce('0x1')][_0x58ebce('0x26')],this[_0x58ebce('0x17')]);const _0x285b99=_0x412819['_'][_0x58ebce('0x23')]('\x20'),_0x253854=_0x412819[_0x58ebce('0x14')]&&this[_0x58ebce('0x1a')]['includes'](_0x412819[_0x58ebce('0x14')][_0x58ebce('0x11')]())?_0x412819['platform']['toLowerCase']():this[_0x58ebce('0x1a')][0x0],_0x2a7a12=await omnic[_0x58ebce('0x1c')](_0x58ebce('0xe')+_0x253854+'/'+encodeURIComponent(_0x285b99)),_0x262d84=await _0x2a7a12['json']();if(!_0x262d84[_0x58ebce('0x9')])throw new Error(_0x58ebce('0x12'));await _0x256e74[_0x58ebce('0x19')][_0x58ebce('0x7')]({'embed':{'color':constants['COLORS'][_0x58ebce('0x1f')],'author':{'name':_0x262d84['user_name']+_0x58ebce('0x10')+_0x285b99},'title':_0x58ebce('0x0'),'fields':[{'name':_0x58ebce('0x15'),'value':_0x58ebce('0x8')+_0x262d84[_0x58ebce('0xd')]?_0x262d84[_0x58ebce('0xd')][_0x58ebce('0xf')]+(_0x262d84[_0x58ebce('0xd')][_0x58ebce('0x27')]?_0x262d84[_0x58ebce('0xd')][_0x58ebce('0x27')]+_0x58ebce('0x5'):''):'-'},...Object[_0x58ebce('0x3')](_0x262d84[_0x58ebce('0x28')])[_0x58ebce('0x2')](_0x528cd0=>({'name':strings[_0x58ebce('0x18')](_0x528cd0),'value':_0x262d84[_0x58ebce('0x28')][_0x528cd0],'inline':!![]}))],'thumbnail':{'url':'https://rocketleague.media.zestyio.com/Rocket-League-Logo-Full_On-Dark-Vertical.f1cb27a519bdb5b6ed34049a5b86e317.png'},'footer':{'text':_0x253854[_0x58ebce('0x25')]()+_0x58ebce('0x21')}}});},this['platforms']=[_0x3eea1b('0x1b'),'ps4',_0x3eea1b('0x1d')];}};