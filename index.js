const Discord = require("discord.js");
const { Token } = require("./config.json");
const { SlashCommandBuilder } = require("@discordjs/builders")
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

//PREFIX//
const prefix = "_"

Client.on("ready", () => {
    Client.guilds.cache.get("916708959077933066").commands.create(data)
    console.log("je suis connecté au serveur Infinity Nighty monsieur !");
}); 

// Commande slash a utilisé avec "/" //

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("utilisateur que vous souhaitez mentionner")
        .setRequired(false));

Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            let user = interaction.options.getUser("utilisateur");
        
            if (user != undefined){
                interaction.reply("pong <@" + user.id + ">");
            } 
            else {
            interaction.reply("pong");
        }
    }
}});


// Commande de bouton //
    
Client.on("messageCreate", message => {
    if(message.content === "bouton"){
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bouton1")
                .setLabel("appuyer")
                .setStyle("DANGER") 
                .setEmoji("🤔")
            ).addComponents(new Discord.MessageButton()
                .setCustomId("bouton2")
                .setLabel("appuyer")
                .setStyle("PRIMARY")
                .setEmoji("😀")
            );
            

        message.channel.send({content: "message avec bouton", components: [row]});
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton1"){
            interaction.reply("vous avez appuyé sur le bouton");
        }
        if(interaction.customId === "bouton2"){
            interaction.reply("vous avez appuyé sur le mauvais bouton");
        }

    }

});

// Commande WELCOME/GOOD BYE //

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé.");
    Client.channels.cache.get("943615541694857276").send("<@" + member.id + " est arrivé.");
});

Client.on("guildMemberRemove", member =>{
    console.log("un membre à quitter le serveur.");
    Client.channels.cache.get("943615541694857276").send("<@" + member.id + " est parti.");
});


// commande OBLIGATOIRE pour envoyer un message !!!!!!! //
Client.on("messageCreate", message => {
    if (message.author.bot) return;

// Message envoyer en tant que reponce a la personne qui a ecrit la commande //
    if(message.content === prefix + "ping"){
        message.reply ("pong !");
    }

// Message envoyer directement dans le chat //

//COMMANDE DE FRATRIE//


//MESSAGE POUR SAVOIR COMMENT VA LE BOT//
    else if (message.content === "comment tu va I.A.S.W ?"){
        message.channel.send("Je vais très bien monsieur merci, et vous ?")
    }
    else if (message.content === "comment tu va I.A.S.W "){
        message.channel.send("Je vais très bien monsieur merci, et vous ?")
    }
    else if (message.content === "tu va comment I.A.S.W ?"){
        message.channel.send("Je vais très bien monsieur merci, et vous ?")
    }
    else if (message.content === "tu te sent comment I.A.S.W ? "){
        message.channel.send("Je me sent très bien monsieur merci, et vous ?")
    }
    else if (message.content === "tu te sent comment I.A.S.W "){
        message.channel.send("Je me sent très bien monsieur merci, et vous ?")
    }
    else if (message.content === "comment tu te sent I.A.S.W "){
        message.channel.send("Je me sent très bien monsieur merci, et vous ?")
    }
    else if (message.content === "comment tu te sent I.A.S.W ? "){
        message.channel.send("Je me sent très bien monsieur merci, et vous ?")
    }

    //MESSAGE POUR TACLER GRATUITEMENT//

//MESSAGE BEN VOYON DE ZEMMOUR//
    else if (message.content === "nn dsl"){
        message.channel.send("https://tenor.com/view/zemmour-ben-voyons-jack-lang-cnews-president-gif-23688080")
    }
    else if (message.content === "non désolé"){
        message.channel.send("https://tenor.com/view/zemmour-ben-voyons-jack-lang-cnews-president-gif-23688080")
    }
    else if (message.content === "nn dsl jpp"){
        message.channel.send("https://tenor.com/view/zemmour-ben-voyons-jack-lang-cnews-president-gif-23688080")
    }
    else if (message.content === "nn dsl je peut pas"){
        message.channel.send("https://tenor.com/view/zemmour-ben-voyons-jack-lang-cnews-president-gif-23688080")
    }
    else if (message.content === "je ne savais pas"){
        message.channel.send("https://tenor.com/view/zemmour-ben-voyons-jack-lang-cnews-president-gif-23688080")
    }

//MESSAGE SANCTION//

//MESSAGE LOADOUT VICTOR//
    else if (message.content === "Nicolas c'est pris un avertissement"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 1 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris un loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 1 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 1 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris un Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 1 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris deux loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 2 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris deux loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 2 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 2 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris deux Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 2 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris trois loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 3 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris trois loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 3 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 3 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris trois Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 3 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris quatre loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 4 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris quatre loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 4 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 4 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris quatre Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 4 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris cinq loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 5 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris cinq loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 5 loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris 5 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c pris cinq Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }
    else if (message.content === "Victor c'est pris 5 Loadout"){
        message.channel.send("https://tenor.com/view/pantoufl-twitch-fuck-cheh-gif-22010397")
    }

    else if (message.content === "1,2...3"){
        message.channel.send("https://tenor.com/view/quirky-dancing-sausages-epic-style-gif-15474678")
    }

    else if (message.content === "J'ai gagné l'1vs1 I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@brutalgamemoments/video/7064973124181183749")
    }

    else if (message.content === "i.A.S.W l'equipe etait dispersé"){
        message.channel.send("https://www.tiktok.com/@finluxontheflux/video/7052267657302789382")
    }

    else if (message.content === "je peux avoir le sniper"){
        message.channel.send("https://www.tiktok.com/@the_punisher_987/video/7051601748800048386")
    }

    else if (message.content === "montre leur I.A.S.W mon exemple"){
        message.channel.send("https://www.tiktok.com/@cdg_nane/video/7058975855397145861")
    }

    else if (message.content === "un de nos frere à quitté le serveur"){
        message.channel.send(" https://www.tiktok.com/@kts_night/video/7057995528952417542")
    }

    else if (message.content === "1vs1 Sulyvan et Victor"){
        message.channel.send("https://www.tiktok.com/@maestro.motivation/video/7058223893177191682")
    }

    else if (message.content === "tg I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@antoinelefou95/video/7041304541056240902")
    }

    else if (message.content === "en ce moment on fait que de la merde"){
        message.channel.send("https://www.tiktok.com/@twd_fane/video/7017867025032776965")
    }

    else if (message.content === "montre leur I.A.S.W ce que c'est qu'etre un GHOST"){
        message.channel.send("https://www.tiktok.com/@nostalgie_cod._/video/7044958108422065414")
    }

    else if (message.content === "la prochaine fois que tu fais une connerie tu va prendre chere"){
        message.channel.send("https://www.tiktok.com/@leonthebraquo/video/6991930876632321286 c'est ce qu'il va te faire mec donc calme toi ")
    }

    else if (message.content === "c'est pas moi qui décide c'est I.A.S.W, tu en pense quoi I.A.S.W tu sera indulgent?"){
        message.channel.send("https://www.tiktok.com/@janexffl/video/7000736434428644614 NON.")
    }

    else if (message.content === "nous avons un but les gars"){
        message.channel.send("https://www.tiktok.com/@ghosts_remastered2/video/6998500871738903814")
    }

    else if (message.content === "il faut perceveré"){
        message.channel.send("https://www.tiktok.com/@wolfhead_/video/6998032220245986565")
    }

    else if (message.content === "Montre leur ce que c'est qu'un ghost I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@leonthebraquo/video/6992484525674597637")
    }

    else if (message.content === "Montre leur comment je les recrutes I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@bo2_remastered/video/6990470157428591878")
    }

    else if (message.content === "j'ai perdu l'1vs1"){
        message.channel.send("https://www.tiktok.com/@bo2_remastered/video/6989431369268989189")
    }

    else if (message.content === "vous étes pres ?"){
        message.channel.send("https://www.tiktok.com/@naillykytb/video/6976622012454194437")
    }

    else if (message.content === "montre leur c'est quoi le loadout"){
        message.channel.send("https://www.tiktok.com/@jetfwt/video/6981920611958377729")
    }

    else if (message.content === "tg I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@diegomarcial12235/video/6906716751568899333")
    }

    else if (message.content === "nn je peut pas aujourd'hui"){
        message.channel.send("https://www.tiktok.com/@idark436/video/6910930874850643201")
    }

    else if (message.content === "ethan a eut un loadout"){
        message.channel.send("https://vm.tiktok.com/ZMLSaCCsj/")
    }

    else if (message.content === "montre leur ce que c'est MW2"){
        message.channel.send("https://www.tiktok.com/@nostalgie_cod._/video/6948740283123256581")
    }

    else if (message.content === "I.A.S.W il y a quelqu'un dans ta famille"){
        message.channel.send("https://vm.tiktok.com/ZMLSaGUo4/")
    }

    else if (message.content === "resume leur la situation I.A.S.W"){
        message.channel.send("https://vm.tiktok.com/ZMLSaakE7/")
    }

    else if (message.content === "tu aurai une idée pour que Victor ne manque plus de munition"){
        message.channel.send("https://vm.tiktok.com/ZMLSmF1nH/")
    }

    else if (message.content === "ethan a encore rush le loadout"){
        message.channel.send("https://vm.tiktok.com/ZMLSm6gtM/")
    }

    else if (message.content === "Se sont les vainqueurs qui écrivent l'Histoire "){
        message.channel.send("https://vm.tiktok.com/ZMLSmLAoQ/")
    }

    else if (message.content === "Demain il y aura toujours des volontaires"){
        message.channel.send("https://www.tiktok.com/@blaackjackss/video/6941046185633402118")
    }

    else if (message.content === "pk ta fait sa I.A.S.W"){
        message.channel.send("https://vm.tiktok.com/ZMLSaomdA/")
    }

    else if (message.content === "la valeur d'un soldat s'évalue à la lumière de sa dernière missions"){
        message.channel.send("https://www.tiktok.com/@imlilady/video/6928139706525879558")
    }

    else if (message.content === "tu peux le faire"){
        message.channel.send("https://vm.tiktok.com/ZMLSmaSJp/")
    }

    else if (message.content === "va te faire foutre "){
        message.channel.send("https://vm.tiktok.com/ZMLSmaLYq/")
    }

    else if (message.content === "arrète de mentir"){
        message.channel.send("https://www.tiktok.com/@yuunizu/video/6958686065834216710")
    }

    else if (message.content === "loadout pour tout le monde "){
        message.channel.send("https://vm.tiktok.com/ZMLSm7upB/")
    }

    else if (message.content === "tu à perdu ton permis victor"){
        message.channel.send("https://vm.tiktok.com/ZMLSmEBak/")
    }

    else if (message.content === "auf den eiden"){
        message.channel.send("https://www.tiktok.com/@guccipepede/video/6956526723995421958")
    }
    else if (message.content === "10001001111010"){
        message.channel.send("https://vm.tiktok.com/ZMLSuqutp/")
    }

    else if (message.content === "aller retour chez famille de teddy"){
        message.channel.send("https://www.tiktok.com/@deemian112/video/6962469680103574789")
    }

    else if (message.content === "je te ban I.A.S.W"){
        message.channel.send("https://vm.tiktok.com/ZMLSuubNa/")
    }

    else if (message.content === "1vs1 contre I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@castagnefrance/video/6961277622168898821")
    }

    else if (message.content === "montre lui c'est quoi un GHOST"){
        message.channel.send("https://www.tiktok.com/@gamez580/video/6900368494660029697")
    }

    else if (message.content === "J'ai perdu mon 1VS1"){
        message.channel.send("https://www.tiktok.com/@matmanat/video/6945716272172748034")
    }

    else if (message.content === "moi maintenant vs moi avant"){
        message.channel.send("https://www.tiktok.com/@sidonioyt/video/6945959673065442566")
    }

    else if (message.content === "on n'est jamais épargé des problème"){
        message.channel.send("https://vm.tiktok.com/ZMLSH5tEw/")
    }

    else if (message.content === "tu retire mon loadout I.A.S.W"){
        message.channel.send("https://www.tiktok.com/@lbabas21j/video/6984342697330986245")
    }

    else if (message.content === "vainqueur"){
        message.channel.send("https://vm.tiktok.com/ZMLSHbYvW/")
    }

    else if (message.content === "j'ai eut un loadout"){
        message.channel.send("https://vm.tiktok.com/ZMLSHcnYT/")
    }

    else if (message.content === "montre lui c'est qui Simon Riley"){
        message.channel.send("https://www.tiktok.com/@nostalgie_cod._/video/6992567729496542469")
    }

    else if (message.content === "je quitte le serveur"){
        message.channel.send("https://www.tiktok.com/@mrtrexouille115/video/7039618812739587333")
    }

    else if (message.content === "qui tu es"){
        message.channel.send("https://www.tiktok.com/@kts_night/video/7068270172838055174")
    }

    else if (message.content === "a la vie a la mort"){
        message.channel.send("https://www.tiktok.com/@ly.ka06/video/7067896774110842118")
    }

    else if (message.content === "pourquoi tu nous donne des loadout SOUFFRANCE"){
        message.channel.send("https://www.tiktok.com/@n_237_k1/video/7066013325657722118")
    }

    else if (message.content === "tu veux savoir ce que l'on veux"){
        message.channel.send("https://www.tiktok.com/@special_opss/video/7067517963607264517")
    }

    else if (message.content === "merci d'etre là "){
        message.channel.send("https://www.tiktok.com/@ly.ka06/video/7065995920835464454")
    }

    else if (message.content === "le système trophy "){
        message.channel.send("https://www.tiktok.com/@staz_pupelgum/video/7065325557621247237")
    }

    else if (message.content === "le drapeau peut changé"){
        message.channel.send("https://www.tiktok.com/@ly.ka06/video/7064896822594014469")
    }

    else if (message.content === "tu ne peux pas me tuer"){
        message.channel.send("https://www.tiktok.com/@warox_dark/video/7031610257470278918")
    }

    else if (message.content === "montre lui ce que c'est ghost"){
        message.channel.send("https://www.tiktok.com/@nostalgie_cod._/video/7038249223422315782")
    }

    else if (message.content === "tu peux donner un conseil "){
        message.channel.send("https://www.tiktok.com/@finluxontheflux/video/7036685458327325957")
    }

    else if (message.content === "quesceque le CPA10"){
        message.channel.send("https://www.tiktok.com/@sergent_ops/video/7028264642355023110")
    }

    else if (message.content === "Quel est l'objet le plus chere du marché"){
        message.channel.send("le Teddy 24 carat!")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    else if (message.content === ""){
        message.channel.send("")
    }

    






});

// Message embed //
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "aide"){
        const embed = new Discord.MessageEmbed()
            .setDescription("commande du bot")
            .setThumbnail("https://i.pinimg.com/564x/dc/27/24/dc2724fe58ddebce0fbd82c8bd6249b3.jpg")
            .addField("_ping", "je vous renvoie pong")
            .setTitle("**__Voici la liste de mes commandes__**")
            .setFooter("I.A.S.W", "https://i.pinimg.com/564x/dc/27/24/dc2724fe58ddebce0fbd82c8bd6249b3.jpg")
            .setImage("http://st.gde-fon.com/wallpapers_original/492279_guerre_militaire_guerre_1920x1080_www.Gde-Fon.com.jpg")
            .setColor("f00020");

        message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "reglement"){
        const embed = new Discord.MessageEmbed()
            .setThumbnail("https://golfclubschlossgoldenberg.ch/wp-content/uploads/2020/06/Reglement.png")
            .setTitle("**__Règlement interieur du serveur__**")
            .addField("Règle N°1", "Si vous adhéré à la team <@&917016414374739998> vous vous engagez à suivre chacune de ces règles pleinement.")
            .addField("Règle N°2", "Le respect entre vous est **obligatoire**. ")
            .addField("Règle N°3", "**__Toute les horaires de jeux doivent être respecté__** sinon veuillez me le signaler. Au bout de **5 avertissements** une sanction vous sera donner.")
            .addField("Règle N°4", "Nous somme en démocratie, **mais pas trop** Si vous avez quelque chose à dire dite le sinon pour moi vous accepté mes ordres. Par contre les coups d'états, révolution ou autre chose pour renversé Sulyvan ou tout autre admin doit ce faire jusqu'au bout sinon cela ne sert à rien, et en cas de défaite de la part du ou des agresseurs les sanction seront assez grande ainsi qu'une **humiliation comme les anciens 1 vs 1** sera donné")
            .addField("Règle N°5", "La participation à la vie de la Team est **obligatoire** chacun se doit de participer aux projet et de donner son avis lors des réunion ou à en faire part à son supérieur. Les membre ne participant jamais à la vie de la team sous quelque forme quel soit peuvent se faire sanctionner au bout de **3 remise à l'ordre**")
            .addField("Règle N°6", "Pour pouvoir conduire des vehicules ou jouer des armes (autre que les fusils d'assaut et mitraillette) il vous faudra des **permis** pour accédé à ces derniers en cas d'utilisation d'arme ou de véhicule en ayant pas son permis vous serai sanctionner instantanément.")
            .addField("Règle N°7", "Lors des session de **tryhard** les personnes n'etant pas concentré seront sanctionné au 3-ème avertissement") 
            .addField("Règle N°8", "Si un acte irresponsable et grave et effectué par vous, vous serai automatiquement rétrogradé en MARINE et vous aurez les même privilèges que INTY Soit **aucun**")
            .addField("Règle N°9", "Obligation d'écrire sur le salon suggestion une fois par semaine même pour rien sinon au bout de 3 avertissements il y aura une sanction")
            .addField("Règle N°10", "Les personnes ayant le rôle de DEVELOPPEUR auront pour règle de ne **rien divulgé** sinon dans ce cas auront des **petits** problème avec la justice grace à ce **petit** logo ©.")
            .setTimestamp()
            .setColor("f00020")
            .setFooter("I.A.S.W")
           

            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "grade"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**__Grade positif du serveur__**")
            .setDescription("Voici tous les Grades **Positif** du serveur.")
            .setColor("F00020")
            //INTY//
            .addField("1er Rang :", " <@&917016414374739998> \n Tu y rentre par le biais de ta candidature ou par un parrainage d'un membre **suppérieur ou égale** à <@&917017752567435355>. \n **Attente:** \n Aucune")
            //MARINE//
            .addField("2ème Rang :", " <@&917017507150327838> \n En fonction de ton niveau tu y rentre ou non. \n **Attente :** \n Suivre les ordres de bases tel que suivre des positions, couvrir ces alliés, avoir une connaissance des zones de guerres. ")
            //COMMANDO MARINE//
            .addField("3ème Rang :", " <@&917017738470359090> \n <@444167623496695808> décide si tu peux y rentré ou non. \n **Attente :** \n Suivre des ordres précis tel que donner des pings, tirer précisément, et savoir donner des ordres de base.")
            //NEAVY SEAL//
            .addField("4ème Rang :", " <@&917017752567435355> \n 5 top 1 à son actif sur n'importe quel mode de jeu. \n **Attente :** \n Être autonome sur son gameplay <@444167623496695808> ne doit pas dire grand chose.")
            //COMMANDO PARACHUTISTE DE L'AIR N°10// 
            .addField("5ème Rang :", "<@&917017763715878923> \n 5 top 1 géré par vous même (vous le derniers en vie ou toute l'équipe K.O **sans autoréanimation**. \n **Attente :** \n Avoir un skin de groupe obligatoire, géré son gameplay à **100%**.")
            //GROUPEMENT COMMANDO PARACHUTISTE//
            .addField("6ème Rang :", "<@&917017766165377133> \n Evaluation reussi lors d'une game sur Caldera. \n **Attente :** \n Gameplay géré à 100% ainsi que savoir donné des ordre à 100%.")
            //GROUPEMENT COMMANDO PARACHUTISTE DU 2ème REP// 
            .addField("7ème Rang :", "<@&917017768652587008> \n Réussir un top 1 Caldera. \n **Attente :** \n Doit savoir géré toutes les armes principales (TEST EFFECTUER EN 1vs1)")
            //RAPTOR//
            .addField("8ème Rang :", "<@&917017749568516158> \n Géré son stress sur Caldera à 100%. \n **Attente :** \n Doit savoir géré toutes les armes secondaire (TEST EFFECTUER EN 1vs1).")
            //TASK FORCE 1.4.1//
            .addField("9ème Rang :", "<@&917017771055911012> \n Moyenne de 6 kill. \n **Attente :** \n <@444167623496695808> ne doit pas faire de remarque sur votre gameplay.")
            //GHOST//
            .addField("10ème rang :", "<@&917017773610262578> \n 10 top 1 Caldera + réussite 1vs1 contre <@444167623496695808> et tout les membres <@&917017752567435355>.\n **Attente :**\n Toute les attentes cité avant.")
            
            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "sanction"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**__Sanction en fonction du grade__**")
            .setDescription("Voici toutes les sanction du serveur en fonction du grade.")
            .setColor("F00020")
            //INTY//
            .addField("sanction N°1", "<@&917016414374739998>\n Sanction : \n Ajout de la variable Loadout.")
            //MARINE//
            .addField("Sanction N°2", "<@&917017507150327838>\n Sanction : \n Ajout de la possibilité d'etre la recrue d'un utilisateur")
            //COMMANDO MARINE//
            .addField("sanction N°3", "<@&917017738470359090>\n Sanction : \n Ajout de x loadout sur x game (la variable compte votre qualité et votre connerie. ")
            //NEAVY SEAL//
            .addField("Sanction N°4", "<@&917017752567435355>\n Sanction : \n Ajout de la variable Loadout Personnalisez (pour celui là il lui faudra vos tiers list a jour) sur x game et sur x loadout." )
            //COMMANDO PARACHUTISTE DE L'AIR N°10//
            .addField("Sanction N°5", "<@&917017763715878923>\n Sanction : \n Ajout de la variable loadout au Poing sur x game et sur x loadout.")
            //GROUPEMENT COMMANDO PARACHUTISTE//
            .addField("Sanction N°6", "<@&917017766165377133>\n Sanction : \n Ajout de la variable d'au moin un kill par game, dans le cas ou le kill n'est pas effectuer alors x + 1")
            //GROUPEMENT COMMANDO PARACHUTISTE DU 2ème REP// 
            .addField("Sanction N°7", "<@&917017768652587008>\n Sanction : \n Ajout de la variable qui retire votre autoréanimation")
            //RAPTOR//
            .addField("Sanction N°8", "<@&917017749568516158>\n Sanction : \n Ajout de la variable qui vous donne l'obligation d'un top 1 sur Caldera avec votre loadout")
            //TASK FORCE 1.4.1//
            .addField("Sanction N°9", "<@&917017771055911012>\n Sanction :\n Ajout de la variable qui vous donne la possibilité de monter une en or choisit par <@444167623496695808> ou un utilisateur de <@&917017752567435355>.")
            //GHOST//
            .addField("Sanction N°10", "<@&917017773610262578>\n Sanction : \n Ajout de la variable auto-punition (vous devrais vous sanctionné vous même car vous avez atteint un grade qui vous à appris à comprendre vos erreur donc vous pouvez etre 100% autonome (Vous avez de la chance, <@444167623496695808> a choisit personnelement cette sanction pour moi je voulais vous donner une classe d'arme en OR tant pis))")

            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "grade2"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**__Grade négatif du serveur__**")
            .setDescription("Voici tous les Grades **Négatif** du serveur.")
            .setColor("F00020")
            //GULAG//
            .addField("1er Rang", "<@&917019651685376050> \n Déscription \n Ce role vous est donner lorsque vous avez atteint une sanction et vous aurez un pseudonyme renomé dans ce salon")

            
            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "économie"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**__Economie du serveur__**")
            .setDescription("Voici quelque information importante sur le système monaitaire du serveur.")
            .setColor("F00020")
            .addField("1er information", "Le Teddyz est la monaie du serveur")
            .addField("2ème information", "Les manières pour obtenir des Teddyz sont :\n un Kill (non volé bien évidement) = 1 Teddyz.\n un top 1 = 50 Teddyz\n un top 1 (dernier en vie) = 100 Teddyz\n un top 1 Caldera = 100 Teddyz\n Un top 1 Caldera (dernier en vie) = 200 Teddyz\n par le biais de métier = 10/300 Teddyz\n tournois remporter = 1000 Teddyz\n ")
            .addField("3ème information", "Les manières pour perdre des Teddyz sont :\n un loadout = -1 Teddyz (x 1,5 par rang supperieur)\n un allé retour dans une famille = -50 Teddyz\n non concentration = -10 Teddyz\n  ")
            .addField("4ème information", "Des prêts peuves etre fait (vous pourrai prendre un prêt avec plus de Teddyz en montant dans les grades) le taux de rembourcement et de +1,4 Teddyz (toute les semaines il augmente de 1,12%) et le rembourcement doit etre fait en moin de 3 mois sinon vous aller dans le gulag avec un loadout par session et 10 credit de plus à remboussé par jour ")
            .addField("5ème information", "Vous pouvez payez vos loadouts avec les Teddyz ( 1 par mois ).")
            .addField("6ème information", "Vous pouvez perdre vos permis d'arme si vous avez beaucoup trop de sanction ou trop de partie ou vous n'arrivé pas à géré cette arme ou véhicule ")

 
            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "c"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**__└-･-suggestion-･-┐__**")
            .setColor("F00020")
            .addField("information :", "Ici <@444167623496695808> vous a demandé d'écrire les suggetions que vous avez sur le serveur <@&917016414374739998> unr fois par semaine.\n **CECI EST OBLIGATOIRE** si vous ne le faites pas au bout de 3 avertissements vous serez sanctionnés.")
            
            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "a"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**Salon privé**")
            .setColor("F00020")
            .addField("information :", "Ici vous pouvez parlé en privé à <@444167623496695808> de ce que vous voulez et il vous demandera des informations ")
            
            message.channel.send({ embeds: [embed]});
    }

    if(message.content === prefix + "g"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**1vs1**")
            .setColor("F00020")
            .addField("information :", "<@444167623496695808> écrira ici les prochains 1vs1 une semaine en avance. \n si vous ne passez pas par <@444167623496695808> ce n'est pas grave mais suivez le règlement suivant:\n marqué la date de l'1vs1 une semaine en avance\n marqué le nom des deux protagonistes\n marqué le type de 1vs1 (arme, amical, tryhard etc ...)\nmarqué si il y a quelque chose en jeu\n marqué si l'1vs1 se fera en CODCosting. ")

            
            message.channel.send({ embeds: [embed]});
    }
    
    if(message.content === prefix + "avancement"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**AVANCEMENT**")
            .setColor("F00020")
            .addField("information :", "Ici je vous écrit les informations que <@444167623496695808> me demandera de posté ici sur le projet **Blastrode©**\n vous pourez aussi posé des questions sur le projet")

            
            message.channel.send({ embeds: [embed]});
    }
});


Client.login(Token)