const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "=";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('Welcome to the Server Shop thieves!');
  }
});
//

//

//
client.on('message', async message => {
  var prefix = "=";
  if(message.content.startsWith(prefix + "طلب")) {
    await message.channel.send("**اسمك**").then(e => {/////Mal Team
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
     message.channel.send('**كم تقدر تدفع**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**نوع الطلب **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()/////Mal Team

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },5000);
var gg = message.guild.channels.find('name', 'order-طلب')
if(!gg) return;
if(gg) {////Mal Team  By: - Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  اسمك :question:  : \n ${lan}\nكم تقدر تدفع :link: :\n ${md} \n طلبك :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)
          .setFooter(`Thieves Shop`)/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
.setTimestamp()/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
});///////////////////////////MaL Team By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
}
})
})/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
})
})
})
})
})
 }/////Top
})//////////////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661



//
//
//
//
client.on('message', async message => {
  if(message.content.startsWith(prefix + "Sug")) {
  await  message.channel.send(`اكتب`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم النشر`)
                client.channels.get("523891608538841089").send(`${message.author.username}'s said => ${text}`)

              })
            }
          })


//
//
//
//
//
//
client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Members'));
});

//
//
//
//
//
//
//


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='=count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////
////////////////////////////////
client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('518712821660516360').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },12000);


})
//
///
////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("518712821660516360");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});







client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("522486583136354304");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("518712821660516360");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;

 }

            dat[Inv] = Invite.uses;



       });

    });

});
//
///
/////////////////////
//////////////////////







/////////////////////////////////////////////////////
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');/////By Mahmoud-QuaStyle
    let memberavatar = member.user.avatarURL
        if (!channel) return;//////Mal Codes
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')////BY:Mal Team
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome !', `Welcome ${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

























































































client.login('process.env.BOT_TOKEN');

