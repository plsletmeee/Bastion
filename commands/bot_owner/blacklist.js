const a2_0x238c=['exports','includes','getString','info','locale','client','constructor','blacklistedUserIds','../../utils/snowflake','../../models/Config','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','remove','\x20Blacklisted\x20Users','blacklist\x20--servers\x20SERVER_ID','toBulletList','PUPIL','apply','bastionBlacklistUpdate','language','document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Bastion\x27s\x20Blacklist','guild','default','Users','length','\x20Blacklisted\x20Servers\x20/\x20','send','tag','../../utils/arrays','servers','Command','It\x20allows\x20you\x20to\x20blacklist\x20users\x20and\x20servers\x20that.\x20Blacklisted\x20servers\x20and\x20users\x20don\x27t\x20have\x20access\x20to\x20Bastion\x27s\x20commands.','push','filter','isValid','bastionBlacklistUnchanged','blacklistedGuildIds','@bastion/tesseract','test','findById','Servers','channel','save','users','exec'];(function(_0x59e62c,_0x238ceb){const _0x5b8ce5=function(_0x46237e){while(--_0x46237e){_0x59e62c['push'](_0x59e62c['shift']());}},_0x110ca7=function(){const _0x3ab700={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x126c7e,_0x1970ee,_0x49119b,_0x51110b){_0x51110b=_0x51110b||{};let _0x1d37de=_0x1970ee+'='+_0x49119b,_0x3373f3=0x0;for(let _0x53a036=0x0,_0x329d65=_0x126c7e['length'];_0x53a036<_0x329d65;_0x53a036++){const _0x43972b=_0x126c7e[_0x53a036];_0x1d37de+=';\x20'+_0x43972b;const _0x4770ec=_0x126c7e[_0x43972b];_0x126c7e['push'](_0x4770ec),_0x329d65=_0x126c7e['length'],_0x4770ec!==!![]&&(_0x1d37de+='='+_0x4770ec);}_0x51110b['cookie']=_0x1d37de;},'removeCookie':function(){return'dev';},'getCookie':function(_0x23641d,_0x27dfb8){_0x23641d=_0x23641d||function(_0x19ff9b){return _0x19ff9b;};const _0x47e174=_0x23641d(new RegExp('(?:^|;\x20)'+_0x27dfb8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x25c2fd=function(_0x1f4ecb,_0xde8a5f){_0x1f4ecb(++_0xde8a5f);};return _0x25c2fd(_0x5b8ce5,_0x238ceb),_0x47e174?decodeURIComponent(_0x47e174[0x1]):undefined;}},_0x442715=function(){const _0x1ef893=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ef893['test'](_0x3ab700['removeCookie']['toString']());};_0x3ab700['updateCookie']=_0x442715;let _0x25e439='';const _0x19b754=_0x3ab700['updateCookie']();if(!_0x19b754)_0x3ab700['setCookie'](['*'],'counter',0x1);else _0x19b754?_0x25e439=_0x3ab700['getCookie'](null,'counter'):_0x3ab700['removeCookie']();};_0x110ca7();}(a2_0x238c,0x105));const a2_0x5b8c=function(_0x59e62c,_0x238ceb){_0x59e62c=_0x59e62c-0x0;let _0x5b8ce5=a2_0x238c[_0x59e62c];return _0x5b8ce5;};const _0x22604c=a2_0x5b8c,a2_0x3ab700=function(){let _0x25e439=!![];return function(_0x19b754,_0x126c7e){const _0x1970ee=_0x25e439?function(){const _0x367b2d=a2_0x5b8c;if(_0x126c7e){const _0x49119b=_0x126c7e[_0x367b2d('0x1f')](_0x19b754,arguments);return _0x126c7e=null,_0x49119b;}}:function(){};return _0x25e439=![],_0x1970ee;};}(),a2_0x46237e=a2_0x3ab700(this,function(){const _0x51110b=function(){const _0x47bd6c=a2_0x5b8c,_0x1d37de=_0x51110b[_0x47bd6c('0x15')](_0x47bd6c('0x23'))()[_0x47bd6c('0x15')](_0x47bd6c('0x19'));return!_0x1d37de[_0x47bd6c('0x8')](a2_0x46237e);};return _0x51110b();});a2_0x46237e();'use strict';const tesseract_1=require(_0x22604c('0x7')),Config_1=require(_0x22604c('0x18')),arrays=require(_0x22604c('0x2c')),snowflake=require(_0x22604c('0x17'));module[_0x22604c('0xf')]=class Blacklist extends tesseract_1[_0x22604c('0x0')]{constructor(){const _0x1ab7d7=_0x22604c;super('blacklist',{'description':_0x1ab7d7('0x1'),'triggers':[],'arguments':{'array':[_0x1ab7d7('0x2d'),_0x1ab7d7('0xd')],'boolean':[_0x1ab7d7('0x1a')],'string':[_0x1ab7d7('0x2d'),'users']},'scope':_0x1ab7d7('0x25'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['blacklist\x20--users\x20USER_ID',_0x1ab7d7('0x1c'),'blacklist\x20--users\x20USER_ID\x20--remove','blacklist\x20--servers\x20SERVER_ID\x20--remove']}),this[_0x1ab7d7('0xe')]=async(_0x3373f3,_0x53a036)=>{const _0x47a8dc=_0x1ab7d7,_0x329d65=await Config_1[_0x47a8dc('0x26')][_0x47a8dc('0x9')](this[_0x47a8dc('0x14')]['user']['id']),_0x43972b=_0x53a036[_0x47a8dc('0x2d')]?_0x53a036[_0x47a8dc('0x2d')][_0x47a8dc('0x3')](_0x25c2fd=>snowflake[_0x47a8dc('0x4')](_0x25c2fd)):[],_0x4770ec=_0x53a036['users']?_0x53a036[_0x47a8dc('0xd')][_0x47a8dc('0x3')](_0x19ff9b=>snowflake[_0x47a8dc('0x4')](_0x19ff9b)):[],_0x23641d=[];if(_0x53a036[_0x47a8dc('0x1a')])_0x329d65[_0x47a8dc('0x6')]=_0x329d65[_0x47a8dc('0x6')][_0x47a8dc('0x3')](_0x1f4ecb=>!_0x43972b[_0x47a8dc('0x10')](_0x1f4ecb));else _0x329d65['blacklistedGuildIds']=[..._0x43972b,..._0x329d65[_0x47a8dc('0x6')]];_0x329d65[_0x47a8dc('0x6')]=[...new Set(_0x329d65[_0x47a8dc('0x6')])];const _0x27dfb8=arrays[_0x47a8dc('0x1d')](_0x329d65['blacklistedGuildIds']);_0x27dfb8&&_0x23641d[_0x47a8dc('0x2')]({'name':_0x47a8dc('0xa'),'value':_0x27dfb8,'inline':!![]});if(_0x53a036[_0x47a8dc('0x1a')])_0x329d65[_0x47a8dc('0x16')]=_0x329d65[_0x47a8dc('0x16')]['filter'](_0xde8a5f=>!_0x4770ec['includes'](_0xde8a5f));else _0x329d65[_0x47a8dc('0x16')]=[..._0x4770ec,..._0x329d65['blacklistedUserIds']];_0x329d65[_0x47a8dc('0x16')]=[...new Set(_0x329d65['blacklistedUserIds'])];const _0x47e174=arrays[_0x47a8dc('0x1d')](_0x329d65['blacklistedUserIds']);_0x47e174&&_0x23641d['push']({'name':_0x47a8dc('0x27'),'value':_0x47e174,'inline':!![]}),await _0x329d65[_0x47a8dc('0xc')](),await _0x3373f3[_0x47a8dc('0xb')][_0x47a8dc('0x2a')]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x47a8dc('0x1e')],'title':_0x47a8dc('0x24'),'description':this[_0x47a8dc('0x14')][_0x47a8dc('0x13')][_0x47a8dc('0x11')](_0x3373f3[_0x47a8dc('0x25')][_0x47a8dc('0x22')][_0x47a8dc('0x21')],_0x47a8dc('0x12'),_0x43972b['length']||_0x4770ec[_0x47a8dc('0x28')]?_0x47a8dc('0x20'):_0x47a8dc('0x5'),_0x3373f3['author'][_0x47a8dc('0x2b')]),'fields':_0x23641d,'footer':{'text':_0x329d65['blacklistedGuildIds'][_0x47a8dc('0x28')]+_0x47a8dc('0x29')+_0x329d65[_0x47a8dc('0x16')]['length']+_0x47a8dc('0x1b')}}});};}};