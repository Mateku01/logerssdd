module.exports = {
    name: "ticket",
    description: "Creates a support ticket",
    aliases: ["support"],
    usage: ".ticket",
    BotPerms: ["MANAGE_CHANNELS"],
    UserPerms: ["ADMINISTRATOR"],

    async execute(client, message, cmd, args, Discord) {

        const tktEmbed = new Discord.MessageEmbed()
            .setColor("#00eaff")
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(
                "__**Jak utworzyć ticket?**__\n" + "> Aby utworzyć ticket kliknij przycisk poniżej z napisem „Utwórz Ticket”\n" + "> Po utworzeniu ticket'u będziesz mógł wyjaśnić problem!"
            )
            .setTitle("Ticket")
            .setFooter("Ticket by Strefa Gaming™")
            .setTimestamp()

        const bt = new Discord.MessageActionRow().addComponents(

            new Discord.MessageButton()
                .setCustomId("tic")
                .setLabel("🎫 Utwórz ticket!")
                .setStyle("PRIMARY")

        )

        message.channel.send({ embeds: [tktEmbed], components: [bt] })

    }

}