const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Write Bot sürümüyle sizlerle.")
.setTitle("<a:hype_sari:779738454321135636> Write Bot Yardım Menüsüne Hoş Geldin ! ")
 .setTimestamp()
.setDescription("**.eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n**w.moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n**w.kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n**w.logo** = __Logo komutlarını görüntülersiniz.__")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}