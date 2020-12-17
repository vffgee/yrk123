const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("THT SpeaRXX V12 botuyla sizlerle.")
.setTitle("<a:770669258811113513:779738395558805524> THT SpeaRXX V12 Moderasyon Komutları <a:770669258811113513:779738395558805524>")
 .setTimestamp()
.setDescription("**.sil** = Yazdığınız miktarda mesajı siler. <a:770669258811113513:779738395558805524> \n  **.ban** = Etiketlediğiniz kişiyi banlarsınız. <a:770669258811113513:779738395558805524> \n  **.kick** = Etiketlediğiniz kişiyi atarsınız. <a:770669258811113513:779738395558805524> \n  **.duyuru** = Bota duyuru yaptırırsınız. <a:770669258811113513:779738395558805524> \n **.küfür** = Küfür engel sistemini açarsınız. <a:770669258811113513:779738395558805524> \n **.reklam** = Reklam engel sistemi açarsınız. <a:770669258811113513:779738395558805524> \n **.slowmode** = Yavaş modu ayarlarsınız. <a:770669258811113513:779738395558805524>\n**.forceban** = Birisine id ban atarsınız. <a:770669258811113513:779738395558805524> \n **.unban** = Birisinin banını açarsınız. <a:770669258811113513:779738395558805524> \n **.sa-as** = Bot biri sa dedimi cevap verir. <a:770669258811113513:779738395558805524> \n **.sunucubilgi** = Sunucu bilgilerini görürsün. <a:770669258811113513:779738395558805524> \n **.üyedurum** = Üyelerin durumlarını görürsün.<a:770669258811113513:779738395558805524>\n **.çekiliş** = Çekiliş başlatırsınız. <a:770669258811113513:779738395558805524>")
.setImage("https://cdn.discordapp.com/attachments/754990680102928404/779765895865303040/Bu.png")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}