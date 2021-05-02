const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('bot is online!');
	client.user.setActivity("!help | made by zoofy")

});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	}
	
	else if(command === 'website'){
		client.commands.get('website').execute(message, args);
	}
	
	else if(command === 'help'){	
				const helpEmbed = new Discord.MessageEmbed()
		.setColor('#1A3668')
		.setAuthor('Zoofy#9724', 'https://blog.zoofy.cc/images/discordpfp.png', 'https://discord.zoofy.cc')
		.setTitle('Zoofy Bot Commands')
		.setURL('https://discord.zoofy.cc')
		.setDescription('Note: All the commands below must be preceded with "!"')
		.addFields(
			{name: '1st command:', value: 'ping'},
			
			{name: '2nd command:', value: 'help'},
			
			{name: '3rd command:', value: 'website'}
		)
		.setTimestamp()
		.setFooter('bot made by zoofy');
		
		message.channel.send(helpEmbed);
	}
	
});

// token
client.login('ODM4MDAyMjUxMDg2NjkyMzgy.YI0waQ.1Jxms7aUTxrRmKzhaMM9j1xgrQQ');
