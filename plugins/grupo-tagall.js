let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*Charlie Funade* ${pesan}`
let teks = `〔 *${wm}* 〕\n *LLENEN LISTA KCHUDAS! QUE ESPERAN UNA INVITACIÓN?* \n\n ${oi}\n\n *[😈𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖 de Kchudas😈]*\n`
for (let mem of participants) {
teks += `🍑໋᳝݊▹֛◌  @${mem.id.split('@')[0]}\n`}
teks += `└ @aye_manca\n\n*♥️🫂*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler

