const a64_0x54d9=['author','INVALID_COMMAND_SYNTAX','channels\x20--rename\x20NAME\x20--\x20REASON','info','channels\x20--create\x20NAME\x20--category\x20ID\x20--\x20REASON','../../utils/errors','includes','tag','constructor','Command','limit','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','BASTION_ERROR_TYPE','GREEN','../../utils/numbers','delete','COLORS','document','premiumTier','channels\x20--create\x20NAME\x20--topic\x20TOPIC\x20--\x20REASON','ChannelCreate','parent','slowmode','return\x20/\x22\x20+\x20this\x20+\x20\x22/','edit','channels\x20--delete\x20--\x20REASON','catch','test','create','../../utils/confirmation','length','exec','join','type','MANAGE_CHANNELS','channels\x20--create\x20NAME\x20--limit\x201-99\x20--\x20REASON','channelDeleteQuestion','exports','guild','rename','toLowerCase','language','channels\x20--create\x20NAME\x20--\x20REASON','@bastion/tesseract','send','channel','channels\x20--create\x20NAME\x20--nsfw\x20--\x20REASON','client','DiscordError','channels','cache','category','topic','getString','Constants'];(function(_0x12eb5c,_0x54d988){const _0x2c0fb2=function(_0x5ad9ba){while(--_0x5ad9ba){_0x12eb5c['push'](_0x12eb5c['shift']());}},_0x32b9f4=function(){const _0x1abf30={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x7ab0d9,_0x3dea74,_0x2a5a3f,_0x3eb1a5){_0x3eb1a5=_0x3eb1a5||{};let _0xbf90c0=_0x3dea74+'='+_0x2a5a3f,_0x4e55ae=0x0;for(let _0x3786f3=0x0,_0x4a84d3=_0x7ab0d9['length'];_0x3786f3<_0x4a84d3;_0x3786f3++){const _0x2322a8=_0x7ab0d9[_0x3786f3];_0xbf90c0+=';\x20'+_0x2322a8;const _0x5ec2b3=_0x7ab0d9[_0x2322a8];_0x7ab0d9['push'](_0x5ec2b3),_0x4a84d3=_0x7ab0d9['length'],_0x5ec2b3!==!![]&&(_0xbf90c0+='='+_0x5ec2b3);}_0x3eb1a5['cookie']=_0xbf90c0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2f2a1a,_0x54579e){_0x2f2a1a=_0x2f2a1a||function(_0x5ba1f4){return _0x5ba1f4;};const _0x5956d5=_0x2f2a1a(new RegExp('(?:^|;\x20)'+_0x54579e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5bf307=function(_0xc7c64b,_0x4a6886){_0xc7c64b(++_0x4a6886);};return _0x5bf307(_0x2c0fb2,_0x54d988),_0x5956d5?decodeURIComponent(_0x5956d5[0x1]):undefined;}},_0x478f9d=function(){const _0x38074c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x38074c['test'](_0x1abf30['removeCookie']['toString']());};_0x1abf30['updateCookie']=_0x478f9d;let _0x592d61='';const _0x24a5d3=_0x1abf30['updateCookie']();if(!_0x24a5d3)_0x1abf30['setCookie'](['*'],'counter',0x1);else _0x24a5d3?_0x592d61=_0x1abf30['getCookie'](null,'counter'):_0x1abf30['removeCookie']();};_0x32b9f4();}(a64_0x54d9,0xd7));const a64_0x2c0f=function(_0x12eb5c,_0x54d988){_0x12eb5c=_0x12eb5c-0x0;let _0x2c0fb2=a64_0x54d9[_0x12eb5c];return _0x2c0fb2;};const _0x4bccd4=a64_0x2c0f,a64_0x1abf30=function(){let _0x592d61=!![];return function(_0x24a5d3,_0x7ab0d9){const _0x3dea74=_0x592d61?function(){if(_0x7ab0d9){const _0x2a5a3f=_0x7ab0d9['apply'](_0x24a5d3,arguments);return _0x7ab0d9=null,_0x2a5a3f;}}:function(){};return _0x592d61=![],_0x3dea74;};}(),a64_0x5ad9ba=a64_0x1abf30(this,function(){const _0x3eb1a5=function(){const _0x58fdbb=a64_0x2c0f,_0xbf90c0=_0x3eb1a5[_0x58fdbb('0x11')](_0x58fdbb('0x21'))()['constructor'](_0x58fdbb('0x14'));return!_0xbf90c0[_0x58fdbb('0x25')](a64_0x5ad9ba);};return _0x3eb1a5();});a64_0x5ad9ba();'use strict';const tesseract_1=require(_0x4bccd4('0x35')),confirmation_1=require(_0x4bccd4('0x27')),errors=require(_0x4bccd4('0xe')),numbers=require(_0x4bccd4('0x18'));module[_0x4bccd4('0x2f')]=class ChannelsCommand extends tesseract_1[_0x4bccd4('0x12')]{constructor(){const _0x442840=_0x4bccd4;super(_0x442840('0x3'),{'description':'It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20channels\x20in\x20the\x20server.','triggers':[],'arguments':{'array':[_0x442840('0x26'),'rename','topic'],'boolean':[_0x442840('0x19'),'nsfw',_0x442840('0x20')],'number':[_0x442840('0x13')],'string':['category',_0x442840('0x26'),_0x442840('0x31'),_0x442840('0x6')],'coerce':{'type':_0x4e55ae=>['category','text','voice'][_0x442840('0xf')](_0x4e55ae[_0x442840('0x32')]())?_0x4e55ae:'text','limit':_0x3786f3=>numbers['clamp'](_0x3786f3,0x1,0x63)}},'scope':_0x442840('0x30'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x442840('0x2c')],'userPermissions':[_0x442840('0x2c')],'syntax':[_0x442840('0x34'),'channels\x20--create\x20NAME\x20--type\x20TYPE\x20--\x20REASON',_0x442840('0xd'),_0x442840('0x1d'),_0x442840('0x2d'),'channels\x20--create\x20NAME\x20--slowmode\x20--\x20REASON',_0x442840('0x0'),_0x442840('0x23'),_0x442840('0xb')]}),this[_0x442840('0x29')]=async(_0x4a84d3,_0x2322a8)=>{const _0x18e70c=_0x442840,_0x5ec2b3=_0x2322a8['_'][_0x18e70c('0x2a')]('\x20')||'-';if(_0x2322a8[_0x18e70c('0x26')]&&_0x2322a8[_0x18e70c('0x26')][_0x18e70c('0x28')]){const _0x2f2a1a=_0x2322a8[_0x18e70c('0x26')][_0x18e70c('0x2a')]('\x20'),_0x54579e=await _0x4a84d3[_0x18e70c('0x30')][_0x18e70c('0x3')]['create'](_0x2f2a1a,{'type':_0x2322a8[_0x18e70c('0x2b')],'bitrate':_0x4a84d3[_0x18e70c('0x30')][_0x18e70c('0x1c')]*0x1f400||0x17700,'nsfw':_0x2322a8['nsfw'],'reason':_0x5ec2b3,'topic':_0x2322a8[_0x18e70c('0x6')]&&_0x2322a8[_0x18e70c('0x6')]['length']?_0x2322a8[_0x18e70c('0x6')]['join']('\x20'):'','userLimit':_0x2322a8[_0x18e70c('0x13')]?_0x2322a8[_0x18e70c('0x13')]:0x0,'rateLimitPerUser':_0x2322a8['slowmode']?0x5:0x0,'parent':_0x4a84d3[_0x18e70c('0x30')][_0x18e70c('0x3')][_0x18e70c('0x4')]['has'](_0x2322a8[_0x18e70c('0x5')])?_0x2322a8[_0x18e70c('0x5')]:_0x4a84d3[_0x18e70c('0x37')][_0x18e70c('0x1f')]});return await _0x4a84d3[_0x18e70c('0x37')]['send']({'embed':{'color':tesseract_1[_0x18e70c('0x8')][_0x18e70c('0x1a')][_0x18e70c('0x17')],'description':this['client']['locale'][_0x18e70c('0x7')](_0x4a84d3['guild'][_0x18e70c('0x1b')]['language'],'info',_0x54579e[_0x18e70c('0x2b')]+_0x18e70c('0x1e'),_0x4a84d3[_0x18e70c('0x9')]['tag'],_0x54579e[_0x18e70c('0x15')],_0x5ec2b3)}})[_0x18e70c('0x24')](()=>{});}if(_0x2322a8['delete']){const _0x5956d5=await confirmation_1['default'](_0x4a84d3,this[_0x18e70c('0x1')]['locale']['getString'](_0x4a84d3[_0x18e70c('0x30')][_0x18e70c('0x1b')][_0x18e70c('0x33')],_0x18e70c('0xc'),_0x18e70c('0x2e'),_0x4a84d3['author'][_0x18e70c('0x10')],_0x4a84d3[_0x18e70c('0x37')][_0x18e70c('0x15')]));return _0x5956d5&&await _0x4a84d3[_0x18e70c('0x37')]['delete'](_0x5ec2b3),!![];}if(_0x2322a8[_0x18e70c('0x31')]&&_0x2322a8[_0x18e70c('0x31')][_0x18e70c('0x28')]){const _0x5bf307=await _0x4a84d3[_0x18e70c('0x37')][_0x18e70c('0x22')]({'name':_0x2322a8['rename'][_0x18e70c('0x2a')]('\x20')});return await _0x4a84d3['channel'][_0x18e70c('0x36')]({'embed':{'color':tesseract_1[_0x18e70c('0x8')][_0x18e70c('0x1a')]['GREEN'],'description':this[_0x18e70c('0x1')]['locale']['getString'](_0x4a84d3['guild'][_0x18e70c('0x1b')][_0x18e70c('0x33')],_0x18e70c('0xc'),'textChannelRename',_0x4a84d3['author']['tag'],_0x5bf307[_0x18e70c('0x15')],_0x5ec2b3)}})[_0x18e70c('0x24')](()=>{});}throw new errors[(_0x18e70c('0x2'))](errors[_0x18e70c('0x16')][_0x18e70c('0xa')],this[_0x18e70c('0x15')]);};}};