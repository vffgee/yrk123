const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=779723665516396594&scope=bot&permissions=2146958847) \n [__**Destek Sunucusu**__](BURNESS PUBLİC BOT)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};