const a194_0x4a81=['permissions','handleReactionAnnouncement','users','COLORS','startsWith','reactionPinning','starboard','Auto\x20Removed\x20via\x20Reaction\x20Roles','categories','find','bot','Unlocking\x20Voice\x20Session','../models/ReactionRoleGroup','embeds','../utils/emojis','Logger','announcementsChannelId','\x20•\x20','map','exec','Constants','voiceSessions','set','parent','push','url','emoji','children','member','handleStarboard','Among\x20Us\x20Lobby\x20','guild','catch','Hiding\x20Voice\x20Session','test','handleVoiceSessions','fetch','Rejected','partial','Added\x20via\x20Reaction\x20Roles','../utils/memcache','YELLOW','content','channels','findOne','tag','handleReactionPinning','GREEN','roles','title','parentID','Voice\x20Session\x20Control','Locking\x20Voice\x20Session','size','Accepted','width','animated','RED','starboardChannelId','text','MANAGE_MESSAGES','Suggestion','exclusive','Suggestion\x20','height','value','suggestionsChannelId','trim','Source','author','values','Listener','getDocument','handleGameLobby','includes','length','name','cache','user','voice','findById','Pin\x20reaction\x20added\x20by\x20','../models/Role','updateOverwrite','🖐🏻','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Discussion','parseEmoji','topic','members','[Click\x20here\x20to\x20Jump\x20to\x20the\x20Message.](','Starboard','handleReactionRoles','attachments','default','\x20announced\x20via\x20Announcement\x20Pinnning.','error','MANAGE_GUILD','has','get','permissionsFor','delete','message','reactionAnnouncements','client','@bastion/tesseract','first','send','channel','displayName','color','footer','_id','handleSuggestions','reactions','pin','remove','setChannel'];(function(_0x4ea75d,_0x2d3e84){const _0x4a81b0=function(_0x48b81b){while(--_0x48b81b){_0x4ea75d['push'](_0x4ea75d['shift']());}},_0x5b94dd=function(){const _0x231a6a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x211768,_0x980bb7,_0x2e0a96,_0x12445d){_0x12445d=_0x12445d||{};let _0x566c9b=_0x980bb7+'='+_0x2e0a96,_0x49ea8b=0x0;for(let _0x2e87d0=0x0,_0x53e9de=_0x211768['length'];_0x2e87d0<_0x53e9de;_0x2e87d0++){const _0x25b292=_0x211768[_0x2e87d0];_0x566c9b+=';\x20'+_0x25b292;const _0x16ac64=_0x211768[_0x25b292];_0x211768['push'](_0x16ac64),_0x53e9de=_0x211768['length'],_0x16ac64!==!![]&&(_0x566c9b+='='+_0x16ac64);}_0x12445d['cookie']=_0x566c9b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42fe37,_0x5a38ad){_0x42fe37=_0x42fe37||function(_0x9f062e){return _0x9f062e;};const _0x548ac7=_0x42fe37(new RegExp('(?:^|;\x20)'+_0x5a38ad['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x45ef08=function(_0x5d8e8a,_0x57442b){_0x5d8e8a(++_0x57442b);};return _0x45ef08(_0x4a81b0,_0x2d3e84),_0x548ac7?decodeURIComponent(_0x548ac7[0x1]):undefined;}},_0x50d045=function(){const _0x2e251d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2e251d['test'](_0x231a6a['removeCookie']['toString']());};_0x231a6a['updateCookie']=_0x50d045;let _0x3426b7='';const _0x116745=_0x231a6a['updateCookie']();if(!_0x116745)_0x231a6a['setCookie'](['*'],'counter',0x1);else _0x116745?_0x3426b7=_0x231a6a['getCookie'](null,'counter'):_0x231a6a['removeCookie']();};_0x5b94dd();}(a194_0x4a81,0x88));const a194_0x5b94=function(_0x4ea75d,_0x2d3e84){_0x4ea75d=_0x4ea75d-0xa8;let _0x4a81b0=a194_0x4a81[_0x4ea75d];return _0x4a81b0;};const a194_0x30b705=a194_0x5b94,a194_0x50d045=function(){let _0x116745=!![];return function(_0x211768,_0x980bb7){const _0x2e0a96=_0x116745?function(){if(_0x980bb7){const _0x12445d=_0x980bb7['apply'](_0x211768,arguments);return _0x980bb7=null,_0x12445d;}}:function(){};return _0x116745=![],_0x2e0a96;};}(),a194_0x231a6a=a194_0x50d045(this,function(){const _0x566c9b=function(){const _0x40173a=a194_0x5b94,_0x49ea8b=_0x566c9b['constructor'](_0x40173a(0xeb))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x49ea8b[_0x40173a(0xb8)](a194_0x231a6a);};return _0x566c9b();});a194_0x231a6a();'use strict';const tesseract_1=require(a194_0x30b705(0xff)),ReactionRoleGroup_1=require(a194_0x30b705(0x118)),Role_1=require(a194_0x30b705(0xe8)),emojis=require(a194_0x30b705(0x11a)),memcache_1=require(a194_0x30b705(0xbe));module['exports']=class MessageReactionAddListener extends tesseract_1[a194_0x30b705(0xdd)]{constructor(){const _0x172b59=a194_0x30b705;super('messageReactionAdd',{'mode':tesseract_1[_0x172b59(0xaa)]['LISTENER_MODE']['ON']}),this[_0x172b59(0x107)]=async(_0x2e87d0,_0x53e9de)=>{const _0x391235=_0x172b59;if(_0x53e9de[_0x391235(0xe4)][_0x391235(0x116)])return;if(!['✅','❎'][_0x391235(0xe0)](_0x2e87d0[_0x391235(0xb0)][_0x391235(0xe2)]))return;if(!_0x2e87d0[_0x391235(0xfc)][_0x391235(0x102)][_0x391235(0xfa)](_0x53e9de)[_0x391235(0xf8)]('MANAGE_CHANNELS'))return;const _0x25b292=_0x2e87d0[_0x391235(0xfc)],_0x16ac64=_0x25b292[_0x391235(0x119)][0x0];if(!_0x16ac64)return;if(!_0x16ac64[_0x391235(0xc7)]['startsWith'](_0x391235(0xd3)))return;_0x16ac64[_0x391235(0x104)]=_0x2e87d0[_0x391235(0xb0)][_0x391235(0xe2)]==='✅'?tesseract_1[_0x391235(0xaa)]['COLORS'][_0x391235(0xc5)]:_0x2e87d0[_0x391235(0xb0)][_0x391235(0xe2)]==='❎'?tesseract_1['Constants']['COLORS'][_0x391235(0xcf)]:tesseract_1['Constants']['COLORS']['INDIGO'],_0x16ac64[_0x391235(0xc7)]=_0x391235(0xd5)+(_0x2e87d0['emoji']['name']==='✅'?_0x391235(0xcc):_0x2e87d0[_0x391235(0xb0)][_0x391235(0xe2)]==='❎'?_0x391235(0xbb):''),await _0x25b292['edit']({'embed':_0x16ac64});},this[_0x172b59(0xb3)]=async(_0x42fe37,_0x5a38ad,_0x548ac7)=>{const _0x2511e6=_0x172b59;if(!['🌠','🌟','⭐']['includes'](_0x42fe37[_0x2511e6(0xb0)][_0x2511e6(0xe2)]))return;if(_0x5a38ad[_0x2511e6(0xc6)][_0x2511e6(0xe3)][_0x2511e6(0xcb)]<=0x1)return;if(_0x42fe37['message']['author']['id']===_0x5a38ad[_0x2511e6(0xe4)]['id'])return;const _0x45ef08=_0x42fe37[_0x2511e6(0xfc)][_0x2511e6(0xf3)]['filter'](_0x57442b=>Boolean(_0x57442b[_0x2511e6(0xd6)]&&_0x57442b[_0x2511e6(0xcd)])),_0x9f062e=_0x45ef08[_0x2511e6(0x100)]();if(!_0x42fe37[_0x2511e6(0xfc)]['content']&&!_0x9f062e)return;const _0x5d8e8a=memcache_1[_0x2511e6(0xf4)][_0x2511e6(0xf9)](_0x2511e6(0x112));if(_0x5d8e8a&&_0x5d8e8a instanceof Array&&_0x5d8e8a[_0x2511e6(0xe0)](_0x42fe37['message']['id']))return;await _0x548ac7[_0x2511e6(0x101)]({'embed':{'color':tesseract_1['Constants'][_0x2511e6(0x10f)][_0x2511e6(0xbf)],'author':{'name':_0x42fe37[_0x2511e6(0xfc)][_0x2511e6(0xdb)][_0x2511e6(0xc3)],'iconURL':_0x42fe37[_0x2511e6(0xfc)]['author']['displayAvatarURL']({'dynamic':!![],'size':0x40})},'description':_0x42fe37[_0x2511e6(0xfc)][_0x2511e6(0xc0)],'fields':[{'name':_0x2511e6(0xda),'value':_0x2511e6(0xf0)+_0x42fe37[_0x2511e6(0xfc)]['url']+')','inline':!![]}],'image':{'url':_0x9f062e?_0x9f062e[_0x2511e6(0xaf)]:null},'footer':{'text':_0x2511e6(0xf1)}}}),_0x5d8e8a&&_0x5d8e8a instanceof Array&&_0x5d8e8a[_0x2511e6(0xae)](_0x42fe37[_0x2511e6(0xfc)]['id']),memcache_1[_0x2511e6(0xf4)][_0x2511e6(0xac)]('starboard',_0x5d8e8a?_0x5d8e8a:[_0x42fe37[_0x2511e6(0xfc)]['id']]);},this[_0x172b59(0x10d)]=async(_0x2e251d,_0x3cf519,_0x3011ab)=>{const _0x2656e2=_0x172b59;if(!['📣','📢'][_0x2656e2(0xe0)](_0x2e251d[_0x2656e2(0xb0)]['name']))return;if(!_0x3cf519[_0x2656e2(0x10c)][_0x2656e2(0xf8)](_0x2656e2(0xf7)))return;const _0x46f8ae=_0x3cf519[_0x2656e2(0xe4)][_0x2656e2(0xc3)]+_0x2656e2(0xf5),_0x140fab=_0x2e251d[_0x2656e2(0xfc)]['embeds']&&_0x2e251d['message']['embeds'][_0x2656e2(0xe1)]?_0x2e251d[_0x2656e2(0xfc)][_0x2656e2(0x119)][0x0]:{};_0x140fab[_0x2656e2(0x105)]={..._0x140fab[_0x2656e2(0x105)],'text':_0x140fab[_0x2656e2(0x105)]&&_0x140fab['footer'][_0x2656e2(0xd1)]?_0x46f8ae+_0x2656e2(0x11d)+_0x140fab[_0x2656e2(0x105)][_0x2656e2(0xd1)]:_0x46f8ae},await _0x3011ab[_0x2656e2(0x101)](_0x2e251d[_0x2656e2(0xfc)]['content'],{'embed':_0x140fab,'files':[..._0x2e251d[_0x2656e2(0xfc)][_0x2656e2(0xf3)][_0x2656e2(0xdc)]()]});},this[_0x172b59(0xc4)]=async(_0x194cbb,_0x18ebfe)=>{const _0xf9be1f=_0x172b59;if(!['📌','📍'][_0xf9be1f(0xe0)](_0x194cbb[_0xf9be1f(0xb0)][_0xf9be1f(0xe2)]))return;if(!_0x194cbb[_0xf9be1f(0xfc)][_0xf9be1f(0x102)][_0xf9be1f(0xfa)](_0x18ebfe)[_0xf9be1f(0xf8)](_0xf9be1f(0xd2)))return;await _0x194cbb['message'][_0xf9be1f(0x109)]({'reason':_0xf9be1f(0xe7)+_0x18ebfe[_0xf9be1f(0xe4)]?_0x18ebfe[_0xf9be1f(0xe4)]['tag']:_0x18ebfe['id']});},this[_0x172b59(0xf2)]=async(_0x2180a1,_0x31c89a)=>{const _0x4c17c5=_0x172b59;if(_0x31c89a['user'][_0x4c17c5(0x116)])return;const _0x21e5f2=await ReactionRoleGroup_1[_0x4c17c5(0xf4)][_0x4c17c5(0xe6)](_0x2180a1[_0x4c17c5(0xfc)]['id']);if(!_0x21e5f2)return;const _0x1f6759=_0x2180a1[_0x4c17c5(0xb0)]['id']?'<'+(_0x2180a1[_0x4c17c5(0xb0)][_0x4c17c5(0xce)]?'a':'')+':'+_0x2180a1[_0x4c17c5(0xb0)][_0x4c17c5(0xe2)]+':'+_0x2180a1[_0x4c17c5(0xb0)]['id']+'>':_0x2180a1[_0x4c17c5(0xb0)]['name'],_0xd43061=emojis[_0x4c17c5(0xed)](_0x1f6759);if(_0xd43061){const _0x163930=await Role_1['default'][_0x4c17c5(0xc2)]({'$or':_0x21e5f2['roles'][_0x4c17c5(0xa8)](_0x43403a=>({'_id':_0x43403a})),'guild':_0x2180a1[_0x4c17c5(0xfc)][_0x4c17c5(0xb5)]['id'],'emoji':_0xd43061[_0x4c17c5(0xd7)]});if(!_0x163930)return;if(_0x21e5f2[_0x4c17c5(0xd4)]){for(const _0x54501b of _0x2180a1[_0x4c17c5(0xfc)][_0x4c17c5(0x108)]['cache']['filter'](_0x1e8366=>_0x1e8366[_0x4c17c5(0x10e)][_0x4c17c5(0xe3)][_0x4c17c5(0xf8)](_0x31c89a[_0x4c17c5(0xe4)]['id'])&&_0x1e8366['emoji'][_0x4c17c5(0xe2)]!==_0x2180a1[_0x4c17c5(0xb0)][_0x4c17c5(0xe2)])[_0x4c17c5(0xdc)]()){await _0x54501b['users'][_0x4c17c5(0x10a)](_0x31c89a)[_0x4c17c5(0xb6)](()=>{});}await _0x31c89a[_0x4c17c5(0xc6)][_0x4c17c5(0x10a)](_0x21e5f2['roles'],_0x4c17c5(0x113));}await _0x31c89a[_0x4c17c5(0xc6)]['add'](_0x163930[_0x4c17c5(0x106)],_0x4c17c5(0xbd));}},this[_0x172b59(0xb9)]=async(_0x345f7c,_0x50085d,_0x25248b)=>{const _0x12f5ee=_0x172b59;if(_0x50085d[_0x12f5ee(0xe4)][_0x12f5ee(0x116)])return;if(!_0x25248b[_0x12f5ee(0xab)]||!_0x25248b[_0x12f5ee(0xab)][_0x12f5ee(0x114)])return;if(!['🔒','🔓','🔐','👁️'][_0x12f5ee(0xe0)](_0x345f7c['emoji']['name']))return;if(_0x345f7c[_0x12f5ee(0xfc)][_0x12f5ee(0xdb)]['id']!==_0x50085d[_0x12f5ee(0xfe)][_0x12f5ee(0xe4)]['id'])return;if(!_0x345f7c[_0x12f5ee(0xfc)]['embeds'][_0x12f5ee(0xe1)]||!_0x345f7c['message'][_0x12f5ee(0x119)][0x0][_0x12f5ee(0xc7)]||!_0x345f7c[_0x12f5ee(0xfc)][_0x12f5ee(0x119)][0x0][_0x12f5ee(0xc7)]['startsWith'](_0x12f5ee(0xc9))||!_0x345f7c[_0x12f5ee(0xfc)][_0x12f5ee(0x102)][_0x12f5ee(0xc8)])return;if(!_0x25248b['voiceSessions'][_0x12f5ee(0x114)]['includes'](_0x345f7c['message'][_0x12f5ee(0x102)][_0x12f5ee(0xc8)]))return;if(_0x50085d['voice']&&_0x50085d['voice'][_0x12f5ee(0x102)]&&_0x50085d['voice'][_0x12f5ee(0x102)]['parentID']&&_0x25248b[_0x12f5ee(0xab)][_0x12f5ee(0x114)][_0x12f5ee(0xe0)](_0x345f7c[_0x12f5ee(0xfc)][_0x12f5ee(0x102)]['parentID'])&&_0x50085d['voice']['channel'][_0x12f5ee(0xe2)]['startsWith'](_0x50085d[_0x12f5ee(0x103)]+'\x27')){if(_0x345f7c['emoji'][_0x12f5ee(0xe2)]==='🔒')await _0x50085d[_0x12f5ee(0xe5)][_0x12f5ee(0x102)][_0x12f5ee(0xe9)](_0x345f7c[_0x12f5ee(0xfc)][_0x12f5ee(0xb5)]['id'],{'CONNECT':![]},_0x12f5ee(0xca)),await _0x345f7c[_0x12f5ee(0x10e)][_0x12f5ee(0x10a)](_0x50085d)['catch'](()=>{});else{if(_0x345f7c[_0x12f5ee(0xb0)][_0x12f5ee(0xe2)]==='🔓')await _0x50085d['voice'][_0x12f5ee(0x102)][_0x12f5ee(0xe9)](_0x345f7c[_0x12f5ee(0xfc)]['guild']['id'],{'CONNECT':!![]},_0x12f5ee(0x117)),await _0x345f7c['users'][_0x12f5ee(0x10a)](_0x50085d)[_0x12f5ee(0xb6)](()=>{});else{if(_0x345f7c[_0x12f5ee(0xb0)][_0x12f5ee(0xe2)]==='🔐')await _0x50085d[_0x12f5ee(0xe5)][_0x12f5ee(0x102)][_0x12f5ee(0xe9)](_0x345f7c['message'][_0x12f5ee(0xb5)]['id'],{'VIEW_CHANNEL':![]},_0x12f5ee(0xb7)),await _0x345f7c[_0x12f5ee(0x10e)][_0x12f5ee(0x10a)](_0x50085d)['catch'](()=>{});else _0x345f7c[_0x12f5ee(0xb0)][_0x12f5ee(0xe2)]==='👁️'&&(await _0x50085d['voice']['channel'][_0x12f5ee(0xe9)](_0x345f7c['message'][_0x12f5ee(0xb5)]['id'],{'VIEW_CHANNEL':!![]},'Unhiding\x20Voice\x20Session'),await _0x345f7c[_0x12f5ee(0x10e)][_0x12f5ee(0x10a)](_0x50085d)[_0x12f5ee(0xb6)](()=>{}));}}}},this[_0x172b59(0xdf)]=async(_0xbd9f1b,_0x21558b)=>{const _0x427ac5=_0x172b59;if(_0x21558b[_0x427ac5(0xe4)][_0x427ac5(0x116)])return;if(!['🔈','👻',_0x427ac5(0xea),'🔇','🔓','❌'][_0x427ac5(0xe0)](_0xbd9f1b[_0x427ac5(0xb0)][_0x427ac5(0xe2)]))return;if(!_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x119)][_0x427ac5(0xe1)]||!_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x119)][0x0][_0x427ac5(0xc7)]||!_0xbd9f1b[_0x427ac5(0xfc)]['embeds'][0x0][_0x427ac5(0xc7)][_0x427ac5(0x110)](_0x427ac5(0xb4))||!_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x102)][_0x427ac5(0xc8)])return;const _0x11184a=_0xbd9f1b['message']['channel'][_0x427ac5(0xad)][_0x427ac5(0xb1)][_0x427ac5(0x115)](_0x2f634b=>_0x2f634b[_0x427ac5(0xe2)]===_0x427ac5(0xec)),_0x3de818=_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x102)][_0x427ac5(0xad)][_0x427ac5(0xb1)]['find'](_0x2cc41a=>_0x2cc41a[_0x427ac5(0xe2)]==='Muted');if(_0xbd9f1b['emoji'][_0x427ac5(0xe2)]===_0x427ac5(0xea)&&_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x102)]['topic'][_0x427ac5(0xd9)]()===_0x21558b['id']){for(const _0x4703fa of _0x3de818[_0x427ac5(0xef)][_0x427ac5(0xdc)]()){await _0x4703fa[_0x427ac5(0xe5)]['setChannel'](_0x11184a);}await _0xbd9f1b[_0x427ac5(0x10e)][_0x427ac5(0x10a)](_0x21558b)[_0x427ac5(0xb6)](()=>{});}else{if(_0xbd9f1b[_0x427ac5(0xb0)]['name']==='🔇'&&_0xbd9f1b['message'][_0x427ac5(0x102)][_0x427ac5(0xee)]['trim']()===_0x21558b['id']){for(const _0xe8ebe1 of _0x11184a[_0x427ac5(0xef)][_0x427ac5(0xdc)]()){await _0xe8ebe1[_0x427ac5(0xe5)][_0x427ac5(0x10b)](_0x3de818);}await _0xbd9f1b[_0x427ac5(0x10e)][_0x427ac5(0x10a)](_0x21558b)[_0x427ac5(0xb6)](()=>{});}else{if(_0xbd9f1b['emoji'][_0x427ac5(0xe2)]==='🔓'&&_0xbd9f1b['message'][_0x427ac5(0x102)][_0x427ac5(0xee)][_0x427ac5(0xd9)]()===_0x21558b['id'])await _0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x102)]['updateOverwrite'](_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0xb5)]['id'],{'ADD_REACTIONS':!![]});else{if(_0xbd9f1b[_0x427ac5(0xb0)][_0x427ac5(0xe2)]==='❌'&&_0xbd9f1b[_0x427ac5(0xfc)][_0x427ac5(0x102)]['topic'][_0x427ac5(0xd9)]()===_0x21558b['id']){await _0x3de818[_0x427ac5(0xfb)](),await _0x11184a[_0x427ac5(0xfb)]();const _0x772fe=_0xbd9f1b['message']['channel'][_0x427ac5(0xad)];await _0xbd9f1b[_0x427ac5(0xfc)]['channel'][_0x427ac5(0xfb)](),await _0x772fe[_0x427ac5(0xfb)]();}else{if(_0xbd9f1b[_0x427ac5(0xb0)][_0x427ac5(0xe2)]==='🔈')await _0x11184a[_0x427ac5(0xe9)](_0x21558b,{'CONNECT':!![]});else _0xbd9f1b[_0x427ac5(0xb0)][_0x427ac5(0xe2)]==='👻'&&await _0x11184a['updateOverwrite'](_0x21558b,{'SPEAK':![]});}}}}},this[_0x172b59(0xa9)]=async(_0x260c0a,_0x2cc39e)=>{const _0x31a296=_0x172b59;_0x260c0a[_0x31a296(0xbc)]&&(_0x260c0a=await _0x260c0a[_0x31a296(0xba)]());_0x260c0a[_0x31a296(0xfc)]['partial']&&(_0x260c0a['message']=await _0x260c0a[_0x31a296(0xfc)]['fetch']());if(!_0x260c0a[_0x31a296(0xfc)][_0x31a296(0xb5)])return;const _0x569cab=_0x260c0a[_0x31a296(0xfc)][_0x31a296(0xb5)][_0x31a296(0xb2)](_0x2cc39e);this[_0x31a296(0xf2)](_0x260c0a,_0x569cab)['catch'](()=>{}),this[_0x31a296(0xdf)](_0x260c0a,_0x569cab)[_0x31a296(0xb6)](tesseract_1['Logger'][_0x31a296(0xf6)]);const _0x5e5a0b=await _0x260c0a[_0x31a296(0xfc)][_0x31a296(0xb5)][_0x31a296(0xde)]();this[_0x31a296(0xb9)](_0x260c0a,_0x569cab,_0x5e5a0b)[_0x31a296(0xb6)](tesseract_1[_0x31a296(0x11b)][_0x31a296(0xf6)]),_0x5e5a0b[_0x31a296(0xd8)]&&_0x260c0a[_0x31a296(0xfc)][_0x31a296(0x102)]['id']===_0x5e5a0b[_0x31a296(0xd8)]&&this['handleSuggestions'](_0x260c0a,_0x569cab)['catch'](()=>{}),_0x5e5a0b[_0x31a296(0xd0)]&&_0x260c0a[_0x31a296(0xfc)][_0x31a296(0xb5)][_0x31a296(0xc1)]['cache'][_0x31a296(0xf8)](_0x5e5a0b['starboardChannelId'])&&this[_0x31a296(0xb3)](_0x260c0a,_0x569cab,_0x260c0a[_0x31a296(0xfc)][_0x31a296(0xb5)][_0x31a296(0xc1)][_0x31a296(0xe3)][_0x31a296(0xf9)](_0x5e5a0b[_0x31a296(0xd0)]))[_0x31a296(0xb6)](()=>{}),_0x5e5a0b[_0x31a296(0xfd)]&&_0x260c0a['message']['guild']['channels'][_0x31a296(0xe3)][_0x31a296(0xf8)](_0x5e5a0b[_0x31a296(0x11c)])&&this['handleReactionAnnouncement'](_0x260c0a,_0x569cab,_0x260c0a[_0x31a296(0xfc)][_0x31a296(0xb5)][_0x31a296(0xc1)][_0x31a296(0xe3)][_0x31a296(0xf9)](_0x5e5a0b[_0x31a296(0x11c)]))[_0x31a296(0xb6)](()=>{}),_0x5e5a0b[_0x31a296(0x111)]&&this['handleReactionPinning'](_0x260c0a,_0x569cab)[_0x31a296(0xb6)](()=>{});};}};