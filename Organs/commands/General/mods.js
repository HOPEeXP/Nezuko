
require ('../../../settings')
module.exports={
    name:"mods",
    alias:["mod"],
    usage:`${prefa}mods`,
    desc:"shows mods list",
    category:"General",
    react:"šļø",

    start:async(client,m,{})=>{
        const mod= owner
        let mo=`
*š Nezuko Mods š*\n`
for(let i=0;i<mod.length;i++){
    const um= await client.username(mod[i]+'@s.whatsapp.net')
    mo+=`\nāØ${i+1}\n*š¤ Name:* ${um}\n*š± Contact:* http://wa.me/+${mod[i].split("@")[0]}\n`
}
await  client.sendMessage(m.from,{image:{url:'https://images2.alphacoders.com/104/1044538.png'},caption:mo},{quoted:m})  
    }
}
