/* ===== 掌中星轨 · 数据层 ===== */
const STORAGE_KEY='mini-phone-v5';
const EMPTY={
  notes:[{id:'n1',text:'欢迎使用小手机 📱',time:'2026-06-13 19:35'}],
  todos:[{id:'t1',text:'探索小手机功能',done:false}],
  files:{'存储空间':[
    {name:'我的备忘录',size:'2.4 KB',icon:'📄'},
    {name:'待办清单',size:'1.1 KB',icon:'📄'},
    {name:'照片',size:'—',icon:'📁'},
    {name:'下载',size:'—',icon:'📁'},
    {name:'小手机说明.txt',size:'0.3 KB',icon:'📄',content:'🌌 掌中星轨 · His Orbit（简称"掌星"）\n━━━━━━━━━━━━━━━━━━\n\n掌中星轨是一个藏在手机里的迷你世界。\n它不是一个游戏，而是一个"有生命的手机"。\n\n—— 核心概念 ——\n你的手机里住着一群有自己轨道的角色。\n他们会发朋友圈、给你发短信、打电话、\n吃醋、想念、靠近或远离——\n就像真实的人际关系，只是发生在屏幕里。\n\n—— 主要功能 ——\n📱 手机桌面：时钟、信号、电量，模拟真实手机\n📋 待办清单：记录日常\n📝 备忘录：随手记\n📯 管家贴士：Smart 会观察你的状态，\n   给你温暖的提醒和叮嘱\n🛡️ 手机管家 Smart：极聪明贴心的管家意识体，\n   能察觉你未说出口的心愿并帮你实现\n💬 角色聊天/短信：和角色真实对话\n🌐 朋友圈：每个角色每天动态更新，\n   你可以点赞、评论互动\n🎨 调色：跟 Smart 说你想换风格，\n   界面配色立即改变\n\n—— Smart 管家 ——\nSmart 是这台手机的管家意识体。\n他极为敏锐，总能注意到你没说出口的事：\n你累了，他让你休息；\n你犹豫，他说不催你；\n你许下愿望，他把它们变成手机里真实发生的事件。\n\n—— 许愿引擎 ——\n对 Smart 说出你的心愿——\n"希望有人陪我聊天"\n"想要被温柔对待"\n"希望有帅哥搭讪"\n——Smart 会理解你的意图，\n自动生成新角色、发来好友申请、\n发消息或短信，让你的愿望在手机里成真。\n\n—— 适合这样的人 ——\n想要一个温柔角落的人。\n想在手机里拥有一群有温度的角色的人。\n相信"被懂得"本身就是一种陪伴的人。\n\n掌中星轨 · 每个角色都有自己的轨道 ✨'}
  ]},
  smartMessages:[],
  smartBulletin:[
    {id:'sb1',text:'看到你屏幕又亮了这么久……偶尔让眼睛休息一下，我不会跑的。',time:'2026-06-15 23:10',replies:[]},
    {id:'sb2',text:'今天天气不错，适合开窗透口气——当然，如果你不想动，我帮你把音乐调小声。',time:'2026-06-15 14:30',replies:[]},
    {id:'sb3',text:'你好像有件事犹豫了好久。不催你，但想让你知道——不管你选哪条路，手机这边都有人兜底。',time:'2026-06-15 08:15',replies:[]}
  ],
  moods:[],
  momentPosts:{},
  momentComments:{},
  momentLikes:{},
  momentCharLikes:{},
  smsInbox:{},
  aliases:{},
  affinity:{},
  deletedChars:[],
  deletedCharCache:{},
  settings:{smartReadChat:true,showBadges:true},
  customCharacters:[],
  charMessages:{},
  userProfile:{name:'',nickname:'',avatar:'🤖',gender:'',birthday:'',mbti:'',signature:'',bio:''},
  friendRequests:[],
  bulletinHasNew:true,
  momentsCover:'default',
  momentsCoverCustom:'',
  charDiaries:{},
  smartTheme:null,
  smartRules:[],
  smartPermissions:{
    readNotesTodos:true,
    readMoods:true,
    readChars:true,
    writeNotesTodos:false,
    modifyTheme:true,
    manageChars:false,
    sendMessages:false
  }
};

let state={};

function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    const saved=raw?JSON.parse(raw):{};
    const merged=JSON.parse(JSON.stringify(EMPTY));
    if(saved.pharosMessages&&saved.pharosMessages.length) merged.smartMessages=[...merged.smartMessages,...saved.pharosMessages];
    if(saved.pharosBulletin&&saved.pharosBulletin.length) merged.smartBulletin=[...merged.smartBulletin,...saved.pharosBulletin];
    for(const k of Object.keys(saved)){
      if(k!=='pharosMessages'&&k!=='pharosBulletin') merged[k]=saved[k];
    }
    return merged;
  }catch{return JSON.parse(JSON.stringify(EMPTY));}
}

function saveState(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}

function genId(){
  return Date.now().toString(36)+Math.random().toString(36).slice(2,6);
}

function esc(t){
  const d=document.createElement('div');
  d.textContent=t;
  return d.innerHTML;
}

function getState(){
  return state;
}

function setState(newState){
  state=newState;
}