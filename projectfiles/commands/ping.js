module.exports = {
	name: 'ping',
	description: "generic ping command",
	execute(message, args){
		message.channel.send('pong!');
	}
}
