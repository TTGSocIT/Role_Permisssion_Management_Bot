require('dotenv').config();
const token = process.env.DISCORD_TOKEN

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { rolePairs } = require('./config.json');
const unverifiedRole = {name: "unverified", id: process.env.UNVERIFIED_ROLE_ID}
const verifiedRole = {name: "verified", id: process.env.VERIFIED_ROLE_ID}

// Create a new client instance
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
] });

// When the client is ready, run this code
client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// When a new member joins the server, give them the unverified role
client.on(Events.GuildMemberAdd, async (member) => {
    try {
        await member.roles.add(unverifiedRole.id);
        console.log(`A new user '${member.user.tag}' has been given the unverified role: '${unverifiedRole.name}'`);
    } catch (e) {
        console.error(`Error in giving role '${unverifiedRole.name}' to '${member.user.tag}'`, e);
    }
})

// the verified role is not handled by this bot (done elsewhere)

// When a member becomes verified, give them the corresponding channel roles for the ping roles
client.on(Events.GuildMemberUpdate, async (oldMember, newMember) => {
    // Check if the event is when the user gains the verify role
    if (oldMember.roles.cache.has(verifiedRole.id) || !newMember.roles.cache.has(verifiedRole.id)) return;

    console.log(`'${newMember.user.tag}' has been detected to have been given the verified role: '${verifiedRole.name}'`);

    for (const {pingRole, channelRole} of rolePairs) {
        if (newMember.roles.cache.has(pingRole.id)) {
            try {
                await newMember.roles.add(channelRole.id);
                console.log(`'${newMember.user.tag}' with role '${pingRole.name}' been given the role: '${channelRole.name}'`);
            } catch (e) {
                console.error(`Error in giving role '${channelRole.name}' to '${member.user.tag}' with role '${pingRole.name}'`, e);
            }
        }
    }
});

// Log in to Discord with token
client.login(token);