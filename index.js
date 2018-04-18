const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const config = require('./config.json');
const talkedRecently = new Set();
const ytdl = require("ytdl-core");
const fs = require("fs");
const ms = require("ms");
const sql = require('sqlite');
sql.open("./score.sqlite");

bot.config = config;
 bot.log = require('./functions/log.js');
 bot.commands = new Discord.Collection(
); 

bot.commands.set('ping', require('./commands/ping.js'));
 bot.commands.set('help', require('./commands/help.js'));
 bot.commands.set('changelog', require('./commands/changelog.js'));
 bot.commands.set('prune', require('./commands/prune.js'));
 bot.commands.set('ban', require('./commands/ban.js'));
 bot.commands.set('kick', require('./commands/kick.js'));
 bot.commands.set('mute', require('./commands/mute.js'));
 bot.commands.set('warn', require('./commands/warn.js'));
 bot.commands.set('8ball', require('./commands/8ball.js'));
 bot.commands.set('play', require('./commands/play.js'));
 bot.commands.set('stop', require('./commands/stop.js')
);

 
bot.on(`warn`, console.warn);
 bot.on(`error`, console.error)
;

bot.on('message', message => require("./events/message.js")(bot, message));
 bot.on('guildCreate', guild => require('./events/guildCreate.js')(bot, guild));
 bot.on('ready', () => require('./events/ready.js')(bot));
 bot.on('guildMemberAdd', member => require('./events/GuildMemberAdd.js')(bot, member)
);

bot.login(bot.config.token);
