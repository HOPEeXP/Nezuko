module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"π",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/XikoNQDfaqcAAAPo/bunny-nezuko-bunny-ears.mp4',
                   'https://media.tenor.com/xBh07rz9GHYAAAPo/nezuko-kamado-nezuko.mp4',
                   'https://media.tenor.com/CMHP0DIQY4UAAAPo/demon-slayer-kimetsu-no-yaiba.mp4',
                   'https://media.tenor.com/68c6pxzq3RAAAAPo/nezuko-nezuko-kamado.mp4',
                   'https://media.tenor.com/JQgNUfM_xcwAAAPo/nezuko-kamado-run.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://i.pinimg.com/236x/d2/b4/b7/d2b4b727103c13b575483e1e1d4c2ec2.jpg"
        
                         
const lemo = `
*βγ Support Group Links γβ*

*1) [ βΌβ³βΌβ³ ππΎπΌπ°π½ βΌβ³βΌβ³ ] :*
https://chat.whatsapp.com/Hxpr3MtH79CIpGF4vG7NZ7

*2) [ β­β­β­β ππππππ ββ­β­β­ ]  :*
https://chat.whatsapp.com/CQKbWP7c3GNIk4SfE7Xej7

*3) [ βββββ VALHALLA βββββ ] :*
https://chat.whatsapp.com/CP34X93ReEY2vdp8AakAbe
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:eternitylogogg},caption:lemo},{quoted:m})  
    }
}
