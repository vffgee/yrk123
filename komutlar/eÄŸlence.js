const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Resurrection")
.setTitle("<a:carkv2:779738412974211122> Burness Eğlence Komutları <a:carkv2:779738412974211122>")
 .setTimestamp()
.setDescription("<a:carkv2:779738412974211122> **.tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:carkv2:779738412974211122> \n <a:carkv2:779738412974211122> **.mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:carkv2:779738412974211122> \n <a:carkv2:779738412974211122> **.fbi** = Bot FBi Gif Atar. <a:carkv2:779738412974211122> \n <a:carkv2:779738412974211122> **.fadness** = Ne Olduğunu Öğrenmek İstemezmisin? <a:carkv2:779738412974211122> \n <a:carkv2:779738412974211122> **.düello** = Düello Atarsın. <a:developeremoji:749525084586115153> \n <a:carkv2:779738412974211122> **.wasted** = Polis tarafından yakalanırsın. <a:carkv2:779738412974211122> \n <a:carkv2:779738412974211122> **.atatürk** = Dene ve gör... (1881-1938) <a:carkv2:779738412974211122>")
.setImage("https://dynamic.brandcrowd.com/asset/logo/f802ad87-f5ae-491f-9a02-89ee701b588f/logo?v=4&text=Resurrection")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}