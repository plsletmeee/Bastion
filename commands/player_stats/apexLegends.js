const a96_0xe8fc=['DiscordError','/playerstats/apexlegends/','@bastion/tesseract','find','segments','includes','rankName','displayValue','json','\x20•\x20Powered\x20by\x20Tracker\x20Network','xbl','displayName','data','exec','../../utils/omnic','toUpperCase','activeLegendName','name','Rank','keys','rankScore','platforms','metadata','platformInfo','platform','iconUrl','BASTION_ERROR_TYPE','avatarUrl','INVALID_COMMAND_SYNTAX','apexLegends','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Apex\x20Legends\x20player\x20in\x20any\x20supported\x20platform.','message','compile','platformUserHandle','overview','stats','constructor','\x20/\x20','errors','exports','length','test','apply','toLowerCase','filter','APEX_LEGENDS','type','../../utils/errors','channel','\x20is\x20currently\x20playing\x20with\x20','../../utils/constants','join'];(function(_0x29fdd9,_0xe8fc2){const _0x5adf84=function(_0x1b2693){while(--_0x1b2693){_0x29fdd9['push'](_0x29fdd9['shift']());}};const _0x3a0d9a=function(){const _0xa9d85={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5c108d,_0x5d2041,_0x49fb3e,_0x1e7884){_0x1e7884=_0x1e7884||{};let _0x27197b=_0x5d2041+'='+_0x49fb3e;let _0x261e3f=0x0;for(let _0x39f2=0x0,_0x29a3e9=_0x5c108d['length'];_0x39f2<_0x29a3e9;_0x39f2++){const _0x272930=_0x5c108d[_0x39f2];_0x27197b+=';\x20'+_0x272930;const _0x57c08d=_0x5c108d[_0x272930];_0x5c108d['push'](_0x57c08d);_0x29a3e9=_0x5c108d['length'];if(_0x57c08d!==!![]){_0x27197b+='='+_0x57c08d;}}_0x1e7884['cookie']=_0x27197b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x448495,_0x2808ca){_0x448495=_0x448495||function(_0x50c4e8){return _0x50c4e8;};const _0x5ec1df=_0x448495(new RegExp('(?:^|;\x20)'+_0x2808ca['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x553857=function(_0x59ee01,_0x524982){_0x59ee01(++_0x524982);};_0x553857(_0x5adf84,_0xe8fc2);return _0x5ec1df?decodeURIComponent(_0x5ec1df[0x1]):undefined;}};const _0x205796=function(){const _0x120cd7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x120cd7['test'](_0xa9d85['removeCookie']['toString']());};_0xa9d85['updateCookie']=_0x205796;let _0x221730='';const _0x3488ab=_0xa9d85['updateCookie']();if(!_0x3488ab){_0xa9d85['setCookie'](['*'],'counter',0x1);}else if(_0x3488ab){_0x221730=_0xa9d85['getCookie'](null,'counter');}else{_0xa9d85['removeCookie']();}};_0x3a0d9a();}(a96_0xe8fc,0x114));const a96_0x5adf=function(_0x29fdd9,_0xe8fc2){_0x29fdd9=_0x29fdd9-0x0;let _0x5adf84=a96_0xe8fc[_0x29fdd9];return _0x5adf84;};const a96_0xa9d85=function(){let _0x514862=!![];return function(_0x464906,_0x28ac00){const _0x19fdc8=_0x514862?function(){if(_0x28ac00){const _0xb6038a=_0x28ac00[a96_0x5adf('0x1a')](_0x464906,arguments);_0x28ac00=null;return _0xb6038a;}}:function(){};_0x514862=![];return _0x19fdc8;};}();const a96_0x1b2693=a96_0xa9d85(this,function(){const _0x3ce92a=function(){const _0x2e68cf=_0x3ce92a[a96_0x5adf('0x14')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a96_0x5adf('0x10')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2e68cf[a96_0x5adf('0x19')](a96_0x1b2693);};return _0x3ce92a();});a96_0x1b2693();'use strict';const tesseract_1=require(a96_0x5adf('0x26'));const constants=require(a96_0x5adf('0x22'));const errors=require(a96_0x5adf('0x1f'));const omnic=require(a96_0x5adf('0x32'));module[a96_0x5adf('0x17')]=class ApexLegendsCommand extends tesseract_1['Command']{constructor(){super(a96_0x5adf('0xd'),{'description':a96_0x5adf('0xe'),'triggers':['apex'],'arguments':{'alias':{'platform':['p']},'string':['platform']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['apexLegends\x20USERNAME','apexLegends\x20USERNAME\x20--platform\x20PLATFORM']});this[a96_0x5adf('0x31')]=async(_0x1ff1a4,_0x443961)=>{if(!_0x443961['_'][a96_0x5adf('0x18')])throw new errors[(a96_0x5adf('0x24'))](errors[a96_0x5adf('0xa')][a96_0x5adf('0xc')],this[a96_0x5adf('0x1')]);const _0x2f8557=_0x443961['_'][a96_0x5adf('0x23')]('\x20');const _0x138510=_0x443961[a96_0x5adf('0x8')]&&this[a96_0x5adf('0x5')][a96_0x5adf('0x29')](_0x443961[a96_0x5adf('0x8')]['toLowerCase']())?_0x443961[a96_0x5adf('0x8')][a96_0x5adf('0x1b')]():this[a96_0x5adf('0x5')][0x0];const _0x8e8daf=await omnic['makeRequest'](a96_0x5adf('0x25')+_0x138510+'/'+encodeURIComponent(_0x2f8557));const _0x4c79c5=await _0x8e8daf[a96_0x5adf('0x2c')]();if(_0x4c79c5['errors'])throw new Error(_0x4c79c5[a96_0x5adf('0x16')][0x0][a96_0x5adf('0xf')]);const _0x57ff37=_0x4c79c5[a96_0x5adf('0x30')][a96_0x5adf('0x28')][a96_0x5adf('0x27')](_0x1f031e=>_0x1f031e[a96_0x5adf('0x1e')]===a96_0x5adf('0x12'));await _0x1ff1a4[a96_0x5adf('0x20')]['send']({'embed':{'color':constants['COLORS'][a96_0x5adf('0x1d')],'author':{'name':_0x4c79c5[a96_0x5adf('0x30')]['platformInfo']['platformUserHandle'],'iconURL':_0x4c79c5['data']['platformInfo'][a96_0x5adf('0xb')]},'title':'Apex\x20Legends\x20-\x20Player\x20Stats','description':_0x4c79c5['data'][a96_0x5adf('0x6')][a96_0x5adf('0x0')]?_0x4c79c5[a96_0x5adf('0x30')]['platformInfo'][a96_0x5adf('0x11')]+a96_0x5adf('0x21')+_0x4c79c5[a96_0x5adf('0x30')][a96_0x5adf('0x6')][a96_0x5adf('0x0')]:null,'fields':[{'name':a96_0x5adf('0x2'),'value':_0x57ff37[a96_0x5adf('0x13')][a96_0x5adf('0x4')]?_0x57ff37[a96_0x5adf('0x13')][a96_0x5adf('0x4')][a96_0x5adf('0x6')][a96_0x5adf('0x2a')]+a96_0x5adf('0x15')+_0x57ff37[a96_0x5adf('0x13')][a96_0x5adf('0x4')][a96_0x5adf('0x2b')]:'-','inline':!![]},...Object[a96_0x5adf('0x3')](_0x57ff37['stats'])[a96_0x5adf('0x1c')](_0x1252a9=>_0x1252a9!=='rankScore')['map'](_0x32c1bd=>({'name':_0x57ff37['stats'][_0x32c1bd][a96_0x5adf('0x2f')],'value':_0x57ff37[a96_0x5adf('0x13')][_0x32c1bd][a96_0x5adf('0x2b')],'inline':!![]}))],'thumbnail':{'url':_0x57ff37[a96_0x5adf('0x13')]['rankScore']?_0x57ff37[a96_0x5adf('0x13')][a96_0x5adf('0x4')][a96_0x5adf('0x6')][a96_0x5adf('0x9')]:_0x4c79c5['data'][a96_0x5adf('0x7')]['avatarUrl']},'footer':{'text':_0x138510[a96_0x5adf('0x33')]()+a96_0x5adf('0x2d')}}});};this[a96_0x5adf('0x5')]=['origin','psn',a96_0x5adf('0x2e')];}};