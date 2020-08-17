const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://selfbott-2.glitch.me/`);
}, 280000);
 

// طبعا الكود هيبقا صعب انك تفهم لوحدك لنو معقد شويتين لكن فكرتو سهلة وحاولت اوفرلكم حاجات كتير مثل انك تقدر تشغل 10 توكانات ف الكود ده
// 
const Discord = require('discord.js');
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = '!';
const initcmd = '!';
const serverid = "735260685172473916"; 
const roomid = "735940576951926880";
const KahrbaaID = "666741624222777344";
const GroupNM = "a";
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const settings = require("./config.json"); 

client.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});
client2.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`);
});
client3.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client.on('message', message => {
    if(message.content === initcmd +'d1'){
        message.channel.send('#daily')
    }
});
client2.on('message', message => {
    if(message.content === initcmd +'d2'){
        message.channel.send('#daily')
    }
});
client3.on('message', message => {
    if(message.content === initcmd +'d3'){
        message.channel.send('#daily')
    }
});
client4.on('message', message => {
    if(message.content === initcmd +'d4'){
        message.channel.send('#daily')
    }
});
client5.on('message', message => {
    if(message.content === initcmd +'d5'){
        message.channel.send('#daily')
    }
});
client6.on('message', message => {
    if(message.content === initcmd +'d6'){
        message.channel.send('#daily')
    }
});
client7.on('message', message => {
    if(message.content === initcmd +'d7'){
        message.channel.send('#daily')
    }
});
client8.on('message', message => {
    if(message.content === initcmd +'d8'){
        message.channel.send('#daily')
    }
});
client9.on('message', message => {
    if(message.content === initcmd +'d9'){
        message.channel.send('#daily')
    }
});
client10.on('message', message => {
    if(message.content === initcmd +'d10'){
        message.channel.send('#daily')
    }
});
client.on('message', message => {
    if(message.content === prefix +'help'){
        message.channel.send(`**


       \`\`\`  All Tokens  :   \`\`\`
              
                                                                     |> Banned?           |> Blacklisted?
                                                                     |                    |
> Token:  NjkyMzg0NzI5MTk0MDM3MzA4.XntvsQ.PSMAp1jvCDOk4V5pyMhg40clBoQ| :white_check_mark: |  :white_check_mark:
                                                                    x|                    |
> Token2: NjkyMzg1MjU3MTcyODkzNzY4.XntwOw.M19K1yfqLB26kDaRRJiqFtxcirw| :white_check_mark: |  :white_check_mark:
                                                                    x|                    |
> Token3: NjkyMzg3MDQwMDI0NzIzNTI2.Xntx5w.2EIlbHQqnlFT6iN3V6HUPEBzjh0| :white_check_mark: |  :white_check_mark:
                                                                    x|                    |
> Token4: NjkyMzg4MjE4ODU5MTU5NTkz.Xnty3w.T78NnAQer39CKoHrvhkXJzReGcA| :white_check_mark: |  :white_check_mark:
                                                                    x|                    |
> Token5: NjkyMzg5MjE5Mjc2MTYxMDI0.Xntzzw.-BwfUmzsvCBpvqaot-0OnASpAqs| :x:                |  :x:
                                                                    x|                    |
> Token6: NjkyMzg5NzIwMDc5OTkwODU0.Xnt0Tg.5Sw-FYTtYYWT_TucnDFINWfxbGM| :white_check_mark: |  :x:
                                                                    x|                    |
> Token7: NjkyMzkxMDkwODE2Mjg2Nzcw.Xnt2CA.XH4FZx6ZouM4cPj4Q20ED-xYzas| :white_check_mark: |  :x:
                                                                    x|                    |
> Token8: NjkyMzkxODgwNTg2OTUyNzc2.Xnt2iQ.8WlCqzsqPNBinVAI23aYRJusEUI| :white_check_mark: |  :x:
                                                                    x|                    |
> Token9: NjcxNjkxNjUxNDM3MTY2NjEx.XjAn9w.RT28WBU1BWjrdqo_4Doy8yWyfPc| :white_check_mark: |  :x:
                                                                    x|                    |
> Tokn10: NjkyMzk0NDY1NDk5MDIxMzc0.Xnt4_Q.ToyH7PhsOjWpnrFgYSxbt9eRMBo| :white_check_mark: |  :white_check_mark:


         
**`)

    }
});
client.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r1'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client2.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r2'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client3.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r3'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client4.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r4'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client5.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r5'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client6.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r6'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client7.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r7'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client8.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r8'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client9.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r9'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client10.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'r10'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c1'){
        message.channel.send('#credits')
    }
});
client2.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c2'){
        message.channel.send('#credits')
    }
});
client3.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c3'){
        message.channel.send('#credits')
    }
});
client4.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c4'){
        message.channel.send('#credits')
    }
});
client5.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c5'){
        message.channel.send('#credits')
    }
});
client6.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c6'){
        message.channel.send('#credits')
    }
});
client7.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c7'){
        message.channel.send('#credits')
    }
});
client8.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c8'){
        message.channel.send('#credits')
    }
});
client9.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c9'){
        message.channel.send('#credits')
    }
});
client10.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'c10'){
        message.channel.send('#credits')
    }
});



client.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});


client2.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client2.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client3.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client3.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client4.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client4.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client5.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client5.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client6.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client6.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client7.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client7.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client8.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client8.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},190000);
});

client9.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client9.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},230000);
});

client10.on('ready', async () => {

let Kahrbaa = ['سبحان الله',
         'اللهم حبب الي الايمان وزينه في قلبي وكره الي الكفر والفسوق والعصيان واجعلني من الراشدين',
         'استغفر الله',
         'الحمد الله',
         'لا اله الا الله',
         'سبحان الله',
         'بسم الله',
         'اللسان لن تتجاوز الآذان',
         'الحمد للة يسطا',
         'تمم يحب انت عامل ايه',
         'ازيكو يرجالة',
         'Happy new Year Guys',
         'التليفون هيفصل سربرايظ',
         'كل سنة وانتم طيبين',
         'باي',
         'لسا هفتح جوجل وانسخ واترجم واقراء',
         'والله مشوار',
         'ترجمه قوقل فست',
         'اي يجدع السرفر كله انجليزي',
         'حد يراعي شعورنا',
         'ك',
         'okey',
         'ك',
         'طمام الساعه 6 بليل هتلاقيها عندك',
         'اقفل الاوردر علي كدا ؟',
         'بالموبايل المعاهت',
         'يلا اكههربا  ببجي',
         'حبيبي ي كههربا',
         '.كل شيء يبدأ صغيراً ثم يكبر،',
         ' "عندما يعيش الإنسان لنفسه فقط ،يشعر بالحياة قصيرة . لكن عندما يعيش لغيره أيضاً يشعر بها طويلة و عميقة',
         '"فرق شاسع بين العلم و المعرفة فالعلم هو فهم الحقائق أمّا المعرفة هى إدراك الحقائق ',
         '" "لا تقيسوا المحبّة بعذب الكلام ، فكم من أناس يترجمون حبّهم لأفعال و مواقف "',
         ' "لا تفرّط فى مشاعرك من أجل أشخاص',
         ' لا يعرفون قيمتها " "عندما تسطر ',
         'قصّة حياتك ، لا تجعل ش',
         'خصاً آخر يمسك القلم "',
         ' "لست مضطراً لتكون شخص',
         'اً كاملاً ، فقط إستمتع بالحياة و ',
         'ان تكون شخصاً أفضل" "كلمة واحدة',
         ' طيّبة يمكنها أن تغيّر ش',
         '" "أحياناً عليك أن تتقبّل حقيقة',
         ' أنّ ماحدث قد حدث وأنّه لا يمكنك تتغيّير الماضي، لكن بإمكانك صنع المستقبل ',
         '" "العالم الذى بين يدينا الآن هو نتاج لأفكارنا',
         ' لا نستطيع تغيّيره دون تغيير فكرنا" "أحياناً ن',
         'لا تسأل عمّا سوف يحدث بعد شهر ، ',
         'ركّز على يومك',
         'الجمل اهيه',
         'مسابقة جديدااا ارجالة',
         'مبروك يا قلبلي',
         'لافففف',
         'منور الدنيا يكهرببا',
         'جارفي',
         'كورنا اخبارك',
         'ياسطا انا معاية كريديت كتير',
         'لا فكك',
         'كلزق',
         'اشترك ف قناة كههربا ياض ',
         'سبحان الله وبحمده سبحان الله العظيم',
         'استغفر الله العظيم',
         'الحمد لله',
         'لا اله الا الله',
         'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم'
    , 'واصبر نفسك مع الذين يدعون ربهم بالغداة والعشي يريدون وجهه',
         'ﻻ حول وﻻ قوة الا بالله'
    , 'رب ارحمهما كما ربياني صغيرا']

  setInterval(() => {
client10.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},230000);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"1") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"2") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"3") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"4") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"5") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"6") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"7") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"8") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"9") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"10") {
let rank = message.guild.member(message.author).roles.find('name', 'Moderators');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
const developers = ['666741624222777344'];
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client2.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client2.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client2.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client3.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client3.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client3.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client4.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client4.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client4.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client4.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client5.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client5.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client5.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client5.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client6.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client6.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client6.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client7.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client7.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client7.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client8.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client8.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client8.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client9.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client9.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client9.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client10.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client10.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client10.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});






client.login(settings.token);
client2.login(settings.token2);
client3.login(settings.token3);
client4.login(settings.token4);
client5.login(settings.token5);
client6.login(settings.token6);
client7.login(settings.token7);
client8.login(settings.token8);
client9.login(settings.token9);
client10.login(settings.token10);
