const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Kanka şu fotoğrafa bak anlarsın:')
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/779776472520851490/780035830483648512/kuzi.jpg")
    .setTimestamp()
    return message.channel.send(embed);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fadness'],
  permLevel: 0
};
exports.help = {
  name: 'fadness',
  description: 'fadness',
  usage: 'fadness'
};
