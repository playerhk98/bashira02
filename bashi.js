const toolbox = require("./bashi_tool_box.json");
const Discord = require("discord.js");
const bashi = new Discord.Client();
const readline = require('readline');
const Attachment = require('discord.js').Attachment;
var fs = require("fs");


bashi.on("ready",async () => {
    console.log(`${bashi.user.username} is Ready 0_0`);

});

bashi.on("message", async message => {
    let msgarray = message.content.split(" ");
    const message_user = message.author.username;

    if(message == "Hellow Bashi!"){
        message.channel.send(`Hellow ${message_user}`);
    }

    const message_includes = message.content.split(" ");

    if(message_includes[0] == `${toolbox.prefix}render`){
        fs.readFile("./file_list/Name.txt",(err, data) =>{
            if (err) throw err;

            let name_list = (data.toString()).split("\n");
            let message_array = message.content.split(" ");
            let unitname = message_array[1].charAt(0).toUpperCase() + message_array[1].substr(1);
            let unit_index = name_list.findIndex(i => i.includes(`${unitname}`)) + 1 ;
            message.channel.send(`%renderq ${unit_index}`);
        });
    }
    if(message_includes[0] == `${toolbox.prefix}hcg1`){
        fs.readFile("./file_list/Name.txt",(err, data) =>{
            if (err) throw err;

            let name_list = (data.toString()).split("\n");
            let message_array = message.content.split(" ");
            let unitname = message_array[1].charAt(0).toUpperCase() + message_array[1].substr(1);
            let unit_index = name_list.findIndex(i => i.includes(`${unitname}`)) + 1 ;
            if (unit_index == 0){
                message.channel.send(`please check unit name or i'll bite you ${message.author.username}!`);
            }
            else{
                message.channel.send(`%hcg1q ${unit_index}`);
            }
        });
    }
    if(message_includes[0] == `${toolbox.prefix}hcg2`){
        fs.readFile("./file_list/Name.txt",(err, data) =>{
            if (err) throw err;

            let name_list = (data.toString()).split("\n");
            let message_array = message.content.split(" ");
            let unitname = message_array[1].charAt(0).toUpperCase() + message_array[1].substr(1);
            let unit_index = name_list.findIndex(i => i.includes(`${unitname}`)) + 1 ;
            if (unit_index == 0){
                message.channel.send(`please check unit name or i'll bite you ${message.author.username}!`);
            }
            else{
                message.channel.send(`%hcg2q ${unit_index}`);
            }
        });
    }
    if(message_includes[0] == `${toolbox.prefix}hcg3`){
        fs.readFile("./file_list/Name.txt",(err, data) =>{
            if (err) throw err;

            let name_list = (data.toString()).split("\n");
            let message_array = message.content.split(" ");
            let unitname = message_array[1].charAt(0).toUpperCase() + message_array[1].substr(1);
            let unit_index = name_list.findIndex(i => i.includes(`${unitname}`)) + 1 ;
            if (unit_index == 0){
                message.channel.send(`please check unit name or i'll bite you ${message.author.username}!`);
            }
            else{
                message.channel.send(`%hcg3q ${unit_index}`);
            }
        });
    }

    if(message_includes[0] == `${toolbox.prefix}renderq`){
        fs.readFile("./file_list/filelist.txt",(err, data) => {
            if (err) throw err;
           
            let list_array = (data.toString()).split("\n");
            let render_link = list_array[1].split(",");
            let msg_array = message.content.split(" ");
            let to_find = msg_array[1];
            let unit_line = list_array.findIndex(i => i.includes(`${to_find}_card_0.png`));
            let required_line = list_array[unit_line].split(",");

            
           
            message.channel.send(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
        });

    }

        if(message_includes[0] == `${toolbox.prefix}hcg1q`){
            fs.readFile("./file_list/filelist.txt",(err, data) => {
                if (err) throw err;
    
                let list_array = (data.toString()).split("\n");
                
                let msg_array = message.content.split(" ");
                let to_find = msg_array[1];
                if(to_find<100){
                    let unit_line = list_array.findIndex(i => i.includes(`HarlemCG_0${to_find}_0.png`));
                    if (unit_line == -1){
                        message.channel.send("make sure this unit have hcg1 or you are not g*y...");
                    }
                    else{
                        let required_line = list_array[unit_line].split(",");
        
                        let embed = new Discord.RichEmbed()
                        .setImage(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
                    message.channel.sendEmbed(embed);
                    }
                }
                else{
                    let unit_line = list_array.findIndex(i => i.includes(`HarlemCG_${to_find}_0.png`));
                    if (unit_line == -1){
                        message.channel.send("make sure this unit have hcg1 or you are not g*y...");
                    }
                    else{
                        let required_line = list_array[unit_line].split(",");
        
                        let embed = new Discord.RichEmbed()
                        .setImage(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
                    message.channel.sendEmbed(embed);
                    }
                }
                
               
                
            });
    }
    if(message_includes[0] == `${toolbox.prefix}hcg2q`){
        fs.readFile("./file_list/filelist.txt",(err, data) => {
            if (err) throw err;

            let list_array = (data.toString()).split("\n");
            
            let msg_array = message.content.split(" ");
            let to_find = msg_array[1];
            if(to_find<100){
                let unit_line = list_array.findIndex(i => i.includes(`HarlemCG_0${to_find}_1.png`));
                if (unit_line == -1){
                    message.channel.send("make sure this unit have hcg2 or you are not g*y...");
                }
                else{
                    let required_line = list_array[unit_line].split(",");
    
                    let embed = new Discord.RichEmbed()
                    .setImage(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
                message.channel.sendEmbed(embed);
                }
            }
            else{
                let unit_line = list_array.findIndex(i => i.includes(`HarlemCG_${to_find}_1.png`));
                if (unit_line == -1){
                    message.channel.send("make sure this unit have hcg2 or you are not g*y...");
                }
                else{
                    let required_line = list_array[unit_line].split(",");
    
                    let embed = new Discord.RichEmbed()
                    .setImage(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
                message.channel.sendEmbed(embed);
                }
            }
        });
}
    if(message_includes[0] == `${toolbox.prefix}hcg3q`){
    fs.readFile("./file_list/filelist.txt",(err, data) => {
        if (err) throw err;

        let list_array = (data.toString()).split("\n");
        
        let msg_array = message.content.split(" ");
        let to_find = msg_array[1];
        if(to_find<100){
            let unit_line = list_array.findIndex(i => i.includes(`HarlemCG_0${to_find}_2.png`));
            if (unit_line == -1){
                message.channel.send("make sure this unit have hcg3 or you are not g*y...");
            }
            else{
                let required_line = list_array[unit_line].split(",");

                let embed = new Discord.RichEmbed()
                .setImage(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
            message.channel.sendEmbed(embed);
            }
            
        }
        else{
            if (unit_line == -1){
                message.channel.send("make sure this unit have hcg3 or you are not g*y...");
            }
            else{
                let required_line = list_array[unit_line].split(",");

                let embed = new Discord.RichEmbed()
                .setImage(`http://assets.millennium-war.net/${required_line[0]}/${required_line[1]}`);
            message.channel.sendEmbed(embed);
            }
        }
    });
    }   

});

bashi.login(process.env.BOT_TOKEN);
