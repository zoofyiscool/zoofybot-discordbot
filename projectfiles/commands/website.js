module.exports = {
	name: 'website',
	description: "sends the zoofy.cc website",
	execute(message, args){
		message.channel.send('https://zoofy.cc');
	}
}
