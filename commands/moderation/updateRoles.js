const a82_0x247e=['MANAGE_ROLES','resolver','return\x20/\x22\x20+\x20this\x20+\x20\x22/','locale','DiscordError','It\x20allows\x20you\x20to\x20update\x20roles\x20of\x20server\x20members.','channel','length','language','test','Role\x20Changes','INVALID_COMMAND_SYNTAX','updateRoles\x20--user\x20USER_ID\x20--add\x20ROLE_ID','Constants','map','member','exec','updateRoles\x20--user\x20USER_ID\x20--remove\x20ROLE_ID','client','removeAll','errors','exports','add','COLORS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Command','document','catch','resolveRoles','toBulletList','ORANGE','author','RED','updateRoles','resolveGuildMember','canManage','remove','compile','getString','name','user','ownerID','guild','tag','../../utils/arrays','send','../../utils/errors','roles','memberRoleUpdate','comparePositionTo','filter','unauthorized','info','@bastion/tesseract','set','join','highest','BASTION_ERROR_TYPE','Reason'];(function(_0xf67bf5,_0x247e33){const _0x5dd72c=function(_0x221fee){while(--_0x221fee){_0xf67bf5['push'](_0xf67bf5['shift']());}};const _0x174619=function(){const _0x88f3f6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f90eb,_0x80d249,_0x43ba78,_0x41a2d1){_0x41a2d1=_0x41a2d1||{};let _0x373ebc=_0x80d249+'='+_0x43ba78;let _0x71844=0x0;for(let _0x3670c4=0x0,_0x178f05=_0x3f90eb['length'];_0x3670c4<_0x178f05;_0x3670c4++){const _0x29d724=_0x3f90eb[_0x3670c4];_0x373ebc+=';\x20'+_0x29d724;const _0x1f3f17=_0x3f90eb[_0x29d724];_0x3f90eb['push'](_0x1f3f17);_0x178f05=_0x3f90eb['length'];if(_0x1f3f17!==!![]){_0x373ebc+='='+_0x1f3f17;}}_0x41a2d1['cookie']=_0x373ebc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26b5bd,_0x1d57b7){_0x26b5bd=_0x26b5bd||function(_0x4f5333){return _0x4f5333;};const _0x383ab7=_0x26b5bd(new RegExp('(?:^|;\x20)'+_0x1d57b7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2dab9f=function(_0x1311ef,_0x504934){_0x1311ef(++_0x504934);};_0x2dab9f(_0x5dd72c,_0x247e33);return _0x383ab7?decodeURIComponent(_0x383ab7[0x1]):undefined;}};const _0x348dff=function(){const _0x1ea6c9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ea6c9['test'](_0x88f3f6['removeCookie']['toString']());};_0x88f3f6['updateCookie']=_0x348dff;let _0x48c9eb='';const _0x528375=_0x88f3f6['updateCookie']();if(!_0x528375){_0x88f3f6['setCookie'](['*'],'counter',0x1);}else if(_0x528375){_0x48c9eb=_0x88f3f6['getCookie'](null,'counter');}else{_0x88f3f6['removeCookie']();}};_0x174619();}(a82_0x247e,0xa4));const a82_0x5dd7=function(_0xf67bf5,_0x247e33){_0xf67bf5=_0xf67bf5-0x0;let _0x5dd72c=a82_0x247e[_0xf67bf5];return _0x5dd72c;};const a82_0x88f3f6=function(){let _0x5e99d2=!![];return function(_0x3cbe33,_0x847dbd){const _0x4b0630=_0x5e99d2?function(){if(_0x847dbd){const _0x35a41d=_0x847dbd['apply'](_0x3cbe33,arguments);_0x847dbd=null;return _0x35a41d;}}:function(){};_0x5e99d2=![];return _0x4b0630;};}();const a82_0x221fee=a82_0x88f3f6(this,function(){const _0x4acc35=function(){const _0x26b382=_0x4acc35['constructor'](a82_0x5dd7('0xf'))()[a82_0x5dd7('0x32')](a82_0x5dd7('0x25'));return!_0x26b382[a82_0x5dd7('0x16')](a82_0x221fee);};return _0x4acc35();});a82_0x221fee();'use strict';const tesseract_1=require(a82_0x5dd7('0x7'));const arrays=require(a82_0x5dd7('0x39'));const errors=require(a82_0x5dd7('0x0'));module[a82_0x5dd7('0x22')]=class UpdateRoles extends tesseract_1[a82_0x5dd7('0x26')]{constructor(){super(a82_0x5dd7('0x2e'),{'description':a82_0x5dd7('0x12'),'triggers':[],'arguments':{'alias':{'add':'a','remove':'r','user':'u'},'array':[a82_0x5dd7('0x23'),a82_0x5dd7('0x31')],'boolean':[a82_0x5dd7('0x20')],'string':['add',a82_0x5dd7('0x31'),'user']},'scope':a82_0x5dd7('0x37'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a82_0x5dd7('0xd')],'syntax':[a82_0x5dd7('0x19'),a82_0x5dd7('0x1e'),'updateRoles\x20--user\x20USER_ID\x20--remove-all']});this[a82_0x5dd7('0x1d')]=async(_0x1cc808,_0xe53c97)=>{const _0x37d2b5=this[a82_0x5dd7('0x1f')][a82_0x5dd7('0xe')][a82_0x5dd7('0x2f')](_0x1cc808[a82_0x5dd7('0x37')],_0xe53c97[a82_0x5dd7('0x35')]);let _0x518b65=this[a82_0x5dd7('0x1f')][a82_0x5dd7('0xe')][a82_0x5dd7('0x29')](_0x1cc808[a82_0x5dd7('0x37')],_0xe53c97[a82_0x5dd7('0x23')]);let _0x558e4c=this['client'][a82_0x5dd7('0xe')]['resolveRoles'](_0x1cc808[a82_0x5dd7('0x37')],_0xe53c97[a82_0x5dd7('0x31')]);if(!_0x37d2b5||!_0x518b65['length']&&!_0x558e4c['length'])throw new errors[(a82_0x5dd7('0x11'))](errors[a82_0x5dd7('0xb')][a82_0x5dd7('0x18')],this['name']);if(_0x1cc808[a82_0x5dd7('0x2c')]['id']!==_0x1cc808['guild'][a82_0x5dd7('0x36')]&&_0x1cc808[a82_0x5dd7('0x1c')][a82_0x5dd7('0x30')](_0x37d2b5)){_0x518b65=_0x518b65['filter'](_0x2e69d3=>_0x1cc808[a82_0x5dd7('0x1c')][a82_0x5dd7('0x1')][a82_0x5dd7('0xa')]['comparePositionTo'](_0x2e69d3)>0x0);_0x558e4c=_0x558e4c[a82_0x5dd7('0x4')](_0x55c476=>_0x1cc808[a82_0x5dd7('0x1c')][a82_0x5dd7('0x1')][a82_0x5dd7('0xa')][a82_0x5dd7('0x3')](_0x55c476)>0x0);if(!_0x518b65['length']&&!_0x558e4c[a82_0x5dd7('0x14')]){return await _0x1cc808[a82_0x5dd7('0x13')][a82_0x5dd7('0x3a')]({'embed':{'color':tesseract_1[a82_0x5dd7('0x1a')][a82_0x5dd7('0x24')][a82_0x5dd7('0x2d')],'title':this['client'][a82_0x5dd7('0x10')]['getString'](_0x1cc808[a82_0x5dd7('0x37')][a82_0x5dd7('0x27')][a82_0x5dd7('0x15')],a82_0x5dd7('0x21'),a82_0x5dd7('0x5')),'description':this['client'][a82_0x5dd7('0x10')][a82_0x5dd7('0x33')](_0x1cc808[a82_0x5dd7('0x37')][a82_0x5dd7('0x27')]['language'],a82_0x5dd7('0x21'),'rolePosition',_0x1cc808[a82_0x5dd7('0x2c')]['tag'],_0x37d2b5['user'][a82_0x5dd7('0x38')])}})[a82_0x5dd7('0x28')](()=>{});}}const _0x3e70ce=_0xe53c97['_'][a82_0x5dd7('0x9')]('\x20')||'-';if(_0x518b65[a82_0x5dd7('0x14')])await _0x37d2b5[a82_0x5dd7('0x1')][a82_0x5dd7('0x23')](_0x518b65,_0x3e70ce);if(_0xe53c97[a82_0x5dd7('0x20')])await _0x37d2b5[a82_0x5dd7('0x1')][a82_0x5dd7('0x8')]([],_0x3e70ce);else if(_0x558e4c[a82_0x5dd7('0x14')])await _0x37d2b5[a82_0x5dd7('0x1')][a82_0x5dd7('0x31')](_0x558e4c,_0x3e70ce);await _0x1cc808[a82_0x5dd7('0x13')]['send']({'embed':{'color':tesseract_1['Constants'][a82_0x5dd7('0x24')][a82_0x5dd7('0x2b')],'description':this[a82_0x5dd7('0x1f')][a82_0x5dd7('0x10')][a82_0x5dd7('0x33')](_0x1cc808[a82_0x5dd7('0x37')][a82_0x5dd7('0x27')][a82_0x5dd7('0x15')],a82_0x5dd7('0x6'),a82_0x5dd7('0x2'),_0x1cc808[a82_0x5dd7('0x2c')][a82_0x5dd7('0x38')],_0x37d2b5[a82_0x5dd7('0x35')][a82_0x5dd7('0x38')]),'fields':[{'name':a82_0x5dd7('0x17'),'value':'```diff\x0a'+arrays[a82_0x5dd7('0x2a')](_0x518b65[a82_0x5dd7('0x1b')](_0x449935=>_0x449935[a82_0x5dd7('0x34')]),'+')+arrays[a82_0x5dd7('0x2a')](_0x558e4c[a82_0x5dd7('0x1b')](_0x111f8=>_0x111f8[a82_0x5dd7('0x34')]),'-')+'```'},{'name':a82_0x5dd7('0xc'),'value':_0x3e70ce}],'footer':{'text':_0x37d2b5['id']}}})[a82_0x5dd7('0x28')](()=>{});};}};