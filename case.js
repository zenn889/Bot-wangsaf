//base by DGXeon
require('./lib/listmenu')
const { downloadContentFromMessage,BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,InteractiveMessage,getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl = require("ytdl-core")
const gis = require('g-i-s')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const { translate } = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
//======= LIB FILE 
const { userXp, userLeveling, } = require("./lib/user");
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const { exec,spawn,execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh,UploadFileUgu,webp2mp4File,floNime } = require('./lib/uploader')
const { toAudio,toPTT,toVideo,ffmpeg,addExifAvatar
} = require('./lib/converter')
const {smsg,getGroupAdmins,formatp,formatDate,getTime,isUrl,await,sleep,clockString,msToDate,sort,toNumber,enumGetKey,runtime,fetchJson,getBuffer,json,delay,format,logic,generateProfilePicture,parseMention,getRandom,pickRandom,fetchBuffer,buffergif,GIFBufferToVideoBuffer,totalcase } = require('./lib/myfunc')
const { AntiSpam } = require('./lib/antispam')
//prem owner function
const { addPremiumUser, getPremiumExpired, getPremiumPosition,expiredPremiumCheck, checkPremiumUser,getAllPremiumUser, } = require('./lib/premiun')
//store
const { addResponList,delResponList,isAlreadyResponList, isAlreadyResponListGroup,sendResponList,updateResponList, getDataResponList  } = require('./lib/list')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./json/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./json/badword.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
//media
const VnMenhara = JSON.parse(fs.readFileSync('./json/vn.json'))
const StickerMenhara = JSON.parse(fs.readFileSync('./json/sticker.json'))
const ImageMenhara = JSON.parse(fs.readFileSync('./json/image.json'))
const VideoMenhara = JSON.parse(fs.readFileSync('./json/video.json'))
const DocMenhara = JSON.parse(fs.readFileSync('./json/doc.json'))
const ZipMenhara = JSON.parse(fs.readFileSync('./json/zip.json'))
const ApkMenhara = JSON.parse(fs.readFileSync('./json/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')
const { xeontext6 } = require('./src/data/function/XBug/xeontext6')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

const userNya = JSON.parse(fs.readFileSync('./database/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []


//module
module.exports = conn = async (conn, m, msg, chatUpdate, store) => {
    try {
const { type,quotedMsg, mentioned,now,fromMe } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const sender = m.sender
        const sender1 = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const senderNumber = sender1.split('@')[0]
        const xeonymisc = (m.quoted || m)
        const quoted = (xeonymisc.mtype == 'buttonsMessage') ? xeonymisc[Object.keys(xeonymisc)[1]] : (xeonymisc.mtype == 'templateMessage') ? xeonymisc.hydratedTemplate[Object.keys(xeonymisc.hydratedTemplate)[1]] : (xeonymisc.mtype == 'product') ? xeonymisc[Object.keys(xeonymisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : prefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isHanMedia = m.mtype
        //user status
        const isUser = userNya.includes(sender)
        const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= isOwner || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(conn, m, premium)
        const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  

 //USER
const user = global.db.data.users[m.sender]
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false
//time
const wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const hariini = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const waktu = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(waktu < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(waktu < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(waktu < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(waktu < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(waktu < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(waktu < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
// TANGGAL ISLAMIC 
let dot = new Date(new Date() + 3600000);
const dateIslamic = Intl.DateTimeFormat("id" + "-TN-u-ca-islamic", {
day: "numeric",
month: "long",
year: "numeric",
}).format(dot);
//const qtod = m.quoted? "true":"false"

//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
        //theme sticker reply
        const sendStickAwait = () => {
        let StikAwait = fs.readFileSync('./temp/sticker/oke tunggu bentar.webp')
        conn.sendMessage(from, { sticker: StikAwait }, { quoted: m })
        }
        const sendStickAdmin = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/husus admin.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickBadmin = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Badmin.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickOwner = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Husus Owner.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickSpam = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Jan Spam.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickGroup = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/group.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }

// Pengubah Text
 const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
  // random makeid
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${wm}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: pickRandom(global.fotoRandom),sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: m })   				
await fs.unlinkSync(stok)
}	

       
      
        //reply
   async function newReply(txt) {
const xeonnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
  serverMessageId: 100,
  newsletterName
},
externalAdReply: {  
showAdAttribution: true,
title: botName,
body: `Hai ${ucapanWaktu} Kak ${pushname}`,
thumbnailUrl: pickRandom(global.fotoRandom),
sourceUrl: syt
},
},
text: txt,
}
return conn.sendMessage(from, xeonnewrep, {
quoted: m,
})
}
      
// jsjsjsj
        async function setReply(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                conn.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botName,
                            body: `${ucapanWaktu}`,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./media/reply.jpg'),
                            sourceUrl: sgc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               conn.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botName,
                        body: ownerName,
                        thumbnail: fs.readFileSync('./media/reply.jpg'),
                        sourceUrl: syt,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                newReply(teks)
            }
        }
        
        //fake reply with channel link embedded
 //premium
        async function onlyPrem(teks) {
    setReply(`This feature is for premium user, contact the owner to become premium user`)
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botName,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botName, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botName}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botName, orderTitle: ownerName, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botName,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botName, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownerName, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botName, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownerName, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownerName},;;;\nFN:${ownerName}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./media/thumb.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const Anjel = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownerName}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botName}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = makeid(4)
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = conn.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: makeid(4).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
                exp: 100,
                level: 1,
                hit: 0,
                balance: 1000,
               badword: 0,
               afkReason: '',
               nick: conn.getName(m.sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            let me = m.sender
let anu = "https://telegra.ph/file/33d58a3a7b931d3902642.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: "Saved to database",
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: anu,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serialNumber}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
/*await sleep(1000)
conn.sendMessage(m.chat,{contextInfo, text:teks},{quoted:m}) */
                                                                  

               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                   if (!('name' in chats)) chats.name = m.groupNmae
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antitoxic' in chats)) chats.antitoxic = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                   name : groupName,
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antitoxic: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packName , authorName }
               if (!('about' in setting)) setting.about = { bot: { nick: conn.getName(botNumber), alias: botName}, owner: { nick: conn.getName(global.nomerOwner + '@s.whatsapp.net'), alias: global.nomerOwner}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packName, 
                  author: global.authorName
               },
               about: {
                  bot: {
                     nick: conn.getName(botNumber), 
                     alias: botName
                  },
                  owner: {
                     nick: conn.getName(global.nomerOwner + '@s.whatsapp.net'), 
                     alias: global.nomerOwner
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        

// AUTO SHOLAT 
conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '08:00',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = Ehztext(`Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`)
    conn.autoshalat[id] = [
    setReply(caption),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
//Jika ada yg cek bot akan merespon   
if (budy.startsWith('Bot') || budy.startsWith('bot')){
return setReply(`${global.botName} Aktif Kak`)
}


                        
        // YOUTUBE 
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
setReply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await conn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
setReply(`${err}`)
}
}


        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            setReply(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            conn.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !isOwner && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return setReply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${nomerOwner}`)
            }
        }
        // Private Only
        if (!isOwner && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return setReply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!conn.public) {
            if (isOwner && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	conn.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            conn.updateProfileStatus(`${botName} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
           let xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            conn.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
        let    xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            conn.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            conn.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return conn.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return conn.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return conn.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnumber === true){ 
        	if (isOwner || isAdmins || !isBotAdmins) return
            conn.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await conn.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${syt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${sgh}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await conn.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && AntiSpam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isOwner) return
if (isAdmins) return
conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
conn.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
conn.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(isOwner) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          setReply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if ( isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isHanMedia) {
    if(isHanMedia=== "imageMessage"){
        if (isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isHanMedia) {
    if(isHanMedia === "videoMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isHanMedia) {
    if(isHanMedia === "stickerMessage"){
        if ( isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isHanMedia) {
    if(isHanMedia === "audioMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isHanMedia) {
    if(isHanMedia === "pollCreationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isHanMedia) {
    if(isHanMedia === "locationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isHanMedia) {
    if(isHanMedia === "documentMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isHanMedia) {
    if(isHanMedia === "contactMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await conn.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                conn.sendImageAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                conn.sendVideoAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return setReply(bvl)
if (m.key.fromMe) return setReply(bvl)
if (isOwner) return setReply(bvl)
               await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return setReply(bvl)
if (m.key.fromMe) return setReply(bvl)
if (isOwmer) return setReply(bvl)
               await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            let janTag = Ehztext(`🚫 *Jangan tag dia!*
        ❏  *Dia sedang AFK*  ${reason ? 'With reason ' + reason : 'no reason'}❏  *Selama* ${clockString(new Date - afkTime)}`.trim())
            setReply(janTag)
        }
       
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            let kembali = Ehztext(`👻 ${pushname} Telah Kembali Dari Afk\n\n ❏  ${user.afkReason ? ' *Dengan Alasan* : '  +user.afkReason : ''}\n\n ❏  *Selama* :  ${clockString(new Date - user.afkTime)}`.trim())
       
            user.afkTime = -1
            user.afkReason = ''
            conn.sendMessage(from, { 
    text: `${kembali}`,
    contextInfo:{
    "externalAdReply": {
    "showAdAttribution": true,
    "renderLargerThumbnail": true,
    "title": `${botName}`,
    "body": `${ucapanWaktu} kak ${pushname}`,
    "containsAutoReply": true,
    "mediaType": 1, 
    "thumbnailUrl": 'https://telegra.ph/file/b4873713a3e5ff3b3314f.jpg' ,
    }
    }
    },{ 
    quoted: m })
}
        
//total features
const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        setReply('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        setReply('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let BhosdikaXeon of VnMenhara) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./media/audio/${BhosdikaXeon}.mp3`)
conn.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerMenhara){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./media/sticker/${BhosdikaXeon}.webp`)
conn.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageMenhara){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./media/image/${BhosdikaXeon}.jpg`)
conn.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoMenhara){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./media/video/${BhosdikaXeon}.mp4`)
conn.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
conn.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkMenhara) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
conn.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipMenhara) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
conn.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocMenhara) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: conn.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
conn.ev.emit('messages.upsert', msg)
} 

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return conn.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================



        
// GAME FUNCTION 
 //math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await setReply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else setReply('*Wrong Answer!*')
        }
//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi><*`)
// else setReply(`*Salah!*`)
 
}
       //GAME tebak gambar
     conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
     if(isGroup && from in conn.tebakgambar){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebakgambar[id][2]
      var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakgambar[id][2]} Money 💸`
        m.reply (teks)
      clearTimeout(conn.tebakgambar[id][3])
      delete conn.tebakgambar[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     }


     //Game Family 100
     conn.family = conn.family ? conn.family : {}
     if(isGroup && from in conn.family){
     if(!isGroup) {return} 
     let similarity = require('similarity')
     let threshold = 0.72 // semakin tinggi nilai, semakin mirip
     let id =  m.chat
     let room = conn.family[id]
     let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
     let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
     if (!isSurrender) {
     let index = room.jawaban.indexOf(text)

     if (index < 0) {
     if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
      }
     if (!isCmd && room.terjawab[index]) {return} 
     user.balance += room.winScore
     room.terjawab[index] = m.sender
     }
     let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

     let caption = `*GAME FAMILY100*

     *Soal:* ${room.soal}

     Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
     (beberapa jawaban terdapat spasi)
     `: ''}
     ${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
     ${Array.from(room.jawaban, (jawaban, index) => {
      return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
      }).filter(v => v).join('\n')}

     ${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
          `.trim()

     conn.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted:fkontak}).then(msg => {
      conn.family[id].msg = msg
     }).catch(_ => _)
     if (isWin || isSurrender) delete conn.family[id] 
     //if (isWin || isSurrender) clearTimeout(200000)
     }
     //GAME tebak lirik Function
     conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
     if(isGroup && from in conn.tebaklirik){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
     let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebaklirik[id][2]
      global.db.data.users[m.sender].exp += 10
        var teks = Ehztext(`*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklirik[id][2]} Money 💸\n EXP: +10`)
        setReply (teks)
      clearTimeout(conn.tebaklirik[id][3])
      delete conn.tebaklirik[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`)
      }
       //GAME tebak kimia Function
     conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
     if(isGroup && from in conn.tebakkimia){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
      let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

      if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
     user.balance += conn.tebakkimia[id][2]
      global.db.data.users[m.sender].exp += 10
        var teks = Ehztext(`*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`)
        setReply (teks)
      clearTimeout(conn.tebakkimia[id][3])
      delete conn.tebakkimia[id]
      } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi ><*`)
     // else setReply(`*Salah!*`)
      }
     //GAME MATH FUNCTION
     conn.math = conn.math ? conn.math : {}
     if(isGroup && from in conn.math){
     if(!isGroup) {return} 
     //console.log(conn.math)
     try{
     let id = from
     if (!(id in lconn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
     let math = JSON.parse(JSON.stringify(conn.math[id][1]))
     if (budy == math.result) {
     user.balance += math.bonus
     clearTimeout(conn.math[id][3])
     delete conn.math[id]
     await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
     } else { 

     }
     }catch(err){
     console.log(err)
     }
     }
     //GAME  teka teki Function
     conn.tekateki = conn.tekateki ? conn.tekateki : {}  
     if(isGroup && from in conn.tekateki){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tekateki[id][2]
      var teks = Ehztext(`*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`)
      setReply(teks)
      clearTimeout(conn.tekateki[id][3])
      delete conn.tekateki[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     }
      //GAME Susunkata Function
     conn.susunkata = conn.susunkata ? conn.susunkata : {}  
     if(isGroup && from in conn.susunkata){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.susunkata[id][2]
        var teks = Ehztext(`*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.susunkata[id][2]} Money 💸`)
     setReply(teks)
      clearTimeout(conn.susunkata[id][3])
      delete conn.susunkata[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`)

     }
     //GAME tebak kata Function
     conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
     if(isGroup && from in conn.tebakkata){
     const similarity = require('similarity')
     const threshold = 0.72
     let id = from

      let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebakkata[id][2]
     let kata = Ehztext(`*TEBAK KATA*

     Jawaban Kamu Benar!
     Bonus Saldo : +${conn.tebakkata[id][2]}
     Exp : +999`)  
     setReply(kata)
      clearTimeout(conn.tebakkata[id][3])
      delete conn.tebakkata[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

     }
     //GAME siapa aku Function
     conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}  
     if(isGroup && from in conn.siapaaku){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.siapaaku[id][2]
     var teks = Ehztext(`*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.siapaaku[id][2]} Money 💸`)
        m.reply (teks)
      clearTimeout(conn.siapaaku[id][3])
      delete conn.siapaaku[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`) 
     }
 //Game Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
        }
        
        //user db
        if (isCommand && !isUser) {
userNya.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(userNya, null, 2))
}
// END BAGIAN COMMAND
        switch (isCommand) {
case 'help': case 'menu': {
if (!isGroup) return sendStickGroup()
let owned = `${global.nomerOwner}`
let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
let limitz = db.data.users[m.sender].limit;

wek = Ehztext(` 
  *sᴛᴀᴛs :* 

» ғᴇᴀᴛᴜʀᴇs: ${totalFitur()}
» Total ᴜsᴇʀs: ${Object.keys(db.data.users).length}
» ʀᴜɴᴛɪᴍᴇ : *${runtime(process.uptime())}*
» Platform : ${os.platform()}
» Host Name : ${os.hostname()}
» Total Hit : ${global.db.data.settings[botNumber].totalhit} Hit
» Total Chat : ${Object.keys(global.db.data.chats).length}
» ᴍᴏᴅᴇ ʙᴏᴛ : *${conn.public ? `ᴘᴜʙʟɪᴄ` : `sᴇʟғ`}*

 *ᴅᴀᴛᴇ & ᴛɪᴍᴇ :* 
» ${hariini}
» ${week}, ${calender}
» ${dateIslamic}`)

const caption = `${wek}\n\n\n${menumenhara(prefix)}`;
let sections = [
{
title: 'All Menu',
highlight_label: 'All Menu List',
rows: [{
title: 'Menu All',
description: `Displays All Menu`, 
id: `${prefix}menu all`
}]},
{
title: 'List Menu',
rows: [{
title: 'Group',
description: `Displays Group Menu`, 
id: `${prefix}menu group`
},
{
title: 'Game',
description: `Displays Game Menu`, 
id: `${prefix}menu game`
},
       {
title: 'Ai',
description: `Displays Ai Menu`, 
id: `${prefix}menu ai`
},
{
title: 'Download',
description: `Displays Download Menu`, 
id: `${prefix}menu download`
},
{
title: 'Tools',
description: `Displays Tools Menu`, 
id: `${prefix}menu tools`
},
{
title: 'Primbon',
description: `Displays Primbon Menu`, 
id: `${prefix}menu primbon`
},
{
title: 'Sticker',
description: `Displays Sticker Menu`, 
id: `${prefix}menu sticker`
},
{
title: 'Fun', 
description: "Displays the Fun Menu", 
id: `${prefix}menu fun`
},
{
title: 'Convert', 
description: "Displays the Convert Menu", 
id: `${prefix}menu convert`
},
{
title: 'Islamic', 
description: "Displays the Islamic Menu", 
id: `${prefix}menu islamic`
},
{
title: 'Anime', 
description: "Displays the Anime Menu", 
id: `${prefix}menu anime`
},
{
title: 'Textpro', 
description: "Displays the Textpro Menu", 
id: `${prefix}menu textpro`
},
{
title: 'Nsfw', 
description: "Displays the Nsfw Menu", 
id: `${prefix}menu random`
},
{
title: 'Settings', 
description: "Displays the Settings Menu", 
id: `${prefix}menu settings`
},
{
title: 'Storage', 
description: "Displays the Storage Menu", 
id: `${prefix}menu storage`
},
{
title: 'Owner', 
description: "Displays the Owner Menu", 
id: `${prefix}menu owner`
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Ehztext(`© Menhara-MD .2024`)
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Hai  ${ucapanWaktu} kak ${pushname}`,
 subtitle: "ehanzdhoanx",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/182fd701c01303072d5d2.jpg" } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
  "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script ","id":"${prefix}script"}`
     },{
     "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://youtube.com/@rangelbot\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6281316643491\",\"merchant_url\":\"https://wa.me/6281316643491\"}"
 
  
 
 },
 ],
 })
 })
 }
 }
}, {})

if (!q) await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
if (args[0] === "all") {
    
    let owned = `${global.nomerOwner}`
    let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
    let limitz = db.data.users[m.sender].limit;
let photo1 = pickRandom(global.fotoRandom)
   let wek = `

${gris}┈ ⋞ 〈 ＩＮＦＯ-ＵＳＥＲ 〉 ⋟ ┈${gris}
Hai kak ${pushname}

▸ ɴᴀᴍᴇ : ${pushname}
▸ ɴᴜᴍʙᴇʀ : ${m.sender.split('@')[0]}
▸ sᴛᴀᴛᴜs : ${statususer}
▸ ʟɪᴍɪᴛ : ${limitz}`
 const caption = `${wek}\n\n${readmore}\n\n${menugrup(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menuai(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menuprimbon(prefix)}\n\n\n${menusticker(prefix)}\n\n\n${menufun(prefix)}\n\n\n${menuconvert(prefix)}\n\n\n${menuislamic(prefix)}\n\n\n${menuanime(prefix)}\n\n\n${menutextpro(prefix)}\n\n\n${menunsfw(prefix)}\n\n\n${menusettings(prefix)}\n\n\n${menustorage(prefix)}\n\n\n${menuowner(prefix)}`;
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName },
externalAdReply: {  
title: botName, 
body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
thumbnailUrl:photo1,
sourceUrl: global.sig, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: Anjel})

 } else if (args[0] === 'group') {
await sleep(1000)
    
 const caption = `${menugrup(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'game') {
await sleep(1000)
    
 const caption = `${menugame(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom (fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'ai') {
await sleep(1000)
    
 const caption = `${menuai(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom (fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'download') {
await sleep(1000)
    
 const caption = `${menudownload(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'tools') {
await sleep(1000)
    
 const caption = `${menutools(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'primbon') {
await sleep(1000)
    
 const caption = `${menuprimbon(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'sticker') {
await sleep(1000)
    
 const caption = `${menusticker(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: `${botName}`, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'fun') {
await sleep(1000)
    
 const caption = `${menufun(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'convert') {
await sleep(1000)
    
 const caption = `${menuconvert(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'islamic') {
await sleep(1000)
    
 const caption = `${menuislamic(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'anime') {
await sleep(1000)
    
 const caption = `${menuanime(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'textpro') {
await sleep(1000)
    
 const caption = `${menutextpro(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'nsfw') {
await sleep(1000)
    
 const caption = `${menunsfw(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'settings') {
await sleep(1000)
    
 const caption = `${menusettings(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'storage') {
await sleep(1000)
    
 const caption = `${menustorage(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'owner') {
await sleep(1000)
    
 const caption = `${menuowner(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 }
}
break
// MENU GROUP 
case 'vote': {
            if (!m.isGroup) return sendStickGroup()
            if (m.chat in vote) return m.reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!q) return m.reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            m.reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote  [m.chat] = [q, [], []]
            await sleep(1000)
         let   upvote = vote[m.chat][1]
          let  devote = vote[m.chat][2]
          let  teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`)
       conn.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return sendStickGroup()
            if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
         let   isVote = vote[m.chat][1].concat(vote[m.chat][2])
        let    wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('You have Voted')
         vote[m.chat][1].push(m.sender)
          let  menvote = vote[m.chat][1].concat(vote[m.chat][2])
          let  teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`)
            conn.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return sendStickGroup()
            if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
        let    isVote = vote[m.chat][1].concat(vote[m.chat][2])
       let     wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('You have Voted')
    vote[m.chat][2].push(m.sender)
    let        menvote = vote[m.chat][1].concat(vote[m.chat][2])
           let teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`)
            conn.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return sendStickGroup()
if (!(m.chat in vote)) return m.reply(`_*Tidak Ada Voting Dalam Grup Ini!*_\n\n*${prefix}vote* - to start voting`)
let teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${conn.user.id}
`)
conn.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return sendStickGroup()
            if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'add':
                if (!m.isGroup) return sendStickGroup()
                if(!isOwner) return sendStickOwner()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                m.reply(mess.succes)
                break
    case  'intro': {
if (!isGroup) return onlyGroup()
let teks = Ehztext('Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:')
setReply(teks)
}
break    
            case 'promote':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                setReply(mess.succes)
                break
            case 'demote':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                setReply(mess.succes)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (!text) return setReply('namanya...?')
                await conn.groupUpdateSubject(m.chat, text)
                setReply(mess.succes)
                break
  
        case 'delppgc': {
if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
if (!isBotAdmins) return sendStickBadmin()
    await conn.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!isOwner) return sendStickOwner()
    await conn.removeProfilePicture(conn.user.id)
    setReply(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (!text) return setReply('Text ?')
                await conn.groupUpdateDescription(m.chat, text)
                setReply(mess.succes)
                break
            
            case 'setppgc':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins) return setReply(mess.only.admin)
                if (!isBotAdmins) return sendStickBadmin()
                if (!quoted) return setReply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return setReply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return setReply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                } else {
                    var memeg = await conn.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                }
                break
            case 'tagall':
            
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let me = m.sender
                let teks = Ehztext(`╚»˙·٠📍 Tag All 📍٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`)
                for (let mem of participants) {
                teks += `📍  @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'kickall': {
 if (!m.isGroup) return sendStickGroup()
 if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
 if (!isBotAdmins) return sendStickBadmin()
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of xeonkickall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 setReply(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return sendStickGroup()
 if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
 if (!isBotAdmins) return sendStickBadmin()
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 setReply(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return sendStickGroup()
 if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
 if (!isBotAdmins) return sendStickBadmin()
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 setReply(`Success`);
}
break
            case 'hidetag':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return sendStickGroup()
                if (!isBotAdmins) return sendStickBadmin()
                if (!isAdmins) return setReply(mess.only.admin)
                if (!m.quoted) return setReply(`Reply media with caption ${prefix + command}`)
                conn.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'gc':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => setReply(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => setReply(`Success Opening Group`))
                } else {
                    setReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
case "idgroup": case 'listgc' : {
if (!isOwner) return sendStickOwner()
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = Ehztext(`⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`)
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += Ehztext(`◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`)
}
setReply(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'closetime':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return m.reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                setReply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = Ehztext(`*Close time* group closed by admin\nnow only admin can send messages`)
                    conn.groupSettingUpdate(m.chat, 'announcement')
                    setReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isOwner) return setReply(mess.only.admin)
                if (!isBotAdmins) return sendStickBadmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return setReply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                setReply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = Ehztext(`*Open time* the group was opened by admin\n now members can send messages`)
                    conn.groupSettingUpdate(m.chat, 'not_announcement')
                    setReply(open)
                }, timer)
                break
  case 'kick':
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                setReply(mess.succes)
                break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return sendStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = Ehztext(`   
*Group Admins:*
${listAdmin}
`.trim())
    conn.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'listrequestjoin':{
	if (!m.isGroup) return sendStickGroup()
	if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
	const response = await conn.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    conn.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `📍 Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  conn.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })
}
break
case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            setReply(from)
           }
          break
case 'ehanz': case '@6281316643491': case '6281316643491': {
let StikOwn = fs.readFileSync('./temp/sticker/Tag Owner.webp')
        conn.sendMessage(from, { sticker: StikOwn}, { quoted: m })
        }
/*let oah = Ehztext(`Ada Apa kak itu nomor ayang ku mmmm><`)
setReply(oah)*/
//await sendTagOwner()
break
case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                let alasan = Ehztext(`😓 Yahh, Kak *${pushname}*... Telah Afk\n\n ❏  *Alasan* ${text ? ': ' + text : ''}`)
   conn.sendMessage(from, { 
text: `${alasan}`,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": `${ucapanWaktu} kak ${pushname}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/99956219d8ff974181fba.jpg' ,
}
}
},{ 
quoted: m })
}
break	
case 'jadian': {
if (!isGroup) return sendStickGroup()
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = Ehztext(`Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`)
let menst = [orang, jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst },{quoted: Anjel}) 
}
break
case 'jodohku':{
if (!isGroup) return sendStickGroup()
let member = participants.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = Ehztext(`Jodoh kamu adalah  @${jodoh.split('@')[0]} 🫂💋`)
let menst = [jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
 
 //keamanan
  case 'on': {
   if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
let pilihan = Ehztext(`*[ Silakan di pilih ]*

• ${gris}CHATS${gris}
- antibot 
- antiviewonce 
- readviewonce 
- welcome 
- adminevent 
- groupevent 
- antiforeign 
- antimedia 
- antiaudio 
- antivideo 
- antiimage 
- antidocument 
- antilocation 
- anticontact 
- antisticker 
- antipoll 
- antilink 
- antilinkgc 
- antipromotion 
- antivirtex 
- nsfw

• ${gris}SETTINGS${gris}
- autoread
- unavailable
- autorecordtype
- autorecord
- autotype
- autobio
- autosticker
- autodownload
- autoblock
- onlygroup
- onlypc 
- onlyindia
- onlyindo

contoh : 
.antilinkgc on untuk mengaktifkan
.antilinkgc off untuk menonaktifkan`)
conn.relayMessage(m.chat,  {
      requestPaymentMessage: {
          noteMessage: {
              extendedTextMessage: {
                  text: pilihan }  }} }, {})}
        break
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  setReply(`${commad} is disabled`)
               }
               }
            break
     
 //—————「 GAME MENU 」—————//
 case 'limit':{


               let a = db.data.users[sender]
               let b = Ehztext(`${pushname}\nYour Limit ${a.limit}\n` )
               b += Ehztext(`Premium Status ${isPremium ? 'On' : 'Off' }\n`) 
               b += Ehztext(`Serial Code: ${gris}${a.serialNumber}${gris}`)
               setReply(b)
            }
            break
case 'caklontong':{
  if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = Ehztext(`
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim())
	conn.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
let ntong = Ehztext(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
setReply(ntong)
	delete conn.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].limit -= 1
	break
        case 'tebaklirik':{

            if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.tebaklirik[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tebaklirik[id]) 
        user.balance -= 200
        let lrik = Ehztext(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(lrik)
            delete conn.tebaklirik[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break

        case 'siapaaku':{
          if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.siapaaku[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.siapaaku[id]) 
        user.balance -= 200
        let spakah = Ehztext(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(spakah)
            delete conn.siapaaku[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
        case 'susunkata':{
              if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return sendStickGroup()
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}
            Tipe: ${json.tipe}

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.susunkata[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            user.balance -= 200
        let sunkata = Ehztext(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(sunkata)
            delete conn.susunkata[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
        case 'tekateki':{
          if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 1000
            let id = m.chat
            if (id in conn.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money 💸
            `.trim())
            conn.tekateki[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tekateki[id]) 
        user.balance -= 200
        let tekaki = Ehztext(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(tekaki)
            delete conn.tekateki[id]
             }, timeout)
             ]
            }
        db.data.users[sender].limit -= 1
            break
        /*case 'math': case 'match': case 'mtk': case 'matematika': {
                let modes = {
              noob: [-3, 3, -3, 3, '+-', 10000, 500],
              easy: [-10, 10, -10, 10, '*+-', 15000, 600],
              medium: [-40, 40, -20, 20, '*+-', 15000, 730],
              hard: [-100, 100, -70, 70, '*+-', 20000, 850],
              extreme: [-999999, 999999, -999999, 999999, '*', 20000, 1000],
              impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*', 30000, 2500],
              impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
            }


            let operators = {
              '+': '+',
              '-': '-',
              '*': '×',
              '/': '÷'
            }

            function genMath(mode) {
              let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
              let a = randomInt(a1, a2)
              let b = randomInt(b1, b2)
              let op = pickRandom([...ops])
              let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
              if (op == '/') [a, result] = [result, a]
              return {
                str: `${a} ${operators[op]} ${b}`,
                mode,
                time,
                bonus,
                result
              }
            }

            function randomInt(from, to) {
              if (from > to) [from, to] = [to, from]
              from = Math.floor(from)
              to = Math.floor(to)
              return Math.floor((to - from) * Math.random() + from)
            }
              let tematik = Ehztext( `*MATEMATIKA*

        ┌─〔 Mode 〕
        ├ ${Object.keys(modes).join('\n├ ')}
        └────    
            contoh:
            ${prefix}math hard
            `)
              let mode = args[0].toLowerCase()
              if (!(mode in modes)) return setReply( `
        ┌─〔 Mode 〕
        ├ ${Object.keys(modes).join('\n├ ')}
        └────    
            contoh:
            ${prefix}math hard
            `)
            if (!q) return setReply(tematik)
              let id = from
              if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
              let math2 = genMath(mode)
              conn.math[id] = [
                 await setReply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
                math2, 4,
                setTimeout(async () => {
                    if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
               delete conn.math[id]
                }, math2.time)
              ]
            }
            break*/ 	
case 'mtk': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return setReply(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                conn.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    setReply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
        case 'tebakkata':{
        if (!isGroup) return sendStickGroup()
        if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
        let poin = 1000
        let timeout = 120000
        let id = m.chat

        if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
        let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
        let json = src[Math.floor(Math.random() * src.length)]
        let caption = Ehztext(`*Soal :* ${json.soal}

        Timeout *${(timeout / 1000).toFixed(2)} detik*
        Exp : +999
        Bonus : +${poin} Saldo`.trim())
        conn.tebakkata[id] = [
        await setReply(caption),
        json, poin,
        setTimeout(() => {
        if (conn.tebakkata[id]) 
        setReply(`Waktu game telah habis
        Jawabannya adalah : ${json.jawaban}`)
        delete conn.tebakkata[id]
         }, timeout)
         ]
        }
        db.data.users[sender].limit -= 1
        break
         case 'tebakkimia':{
            if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return onlyGroup()
            let timeout = 30000
            let poin = 1000
            let id = m.chat
            if (id in conn.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`*TEBAK KIMIA*
            Unsur: ${json.unsur}
            Soal: Singkatan atau lambang di atas adalah...

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.tebakkimia[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tebakkimia[id]) 
        user.balance -= 200
       let kimia = Ehztext(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
       m.reply(kimia)
            delete conn.tebakkimia[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
          case 'tebakgambar':{
            if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
            if (!isGroup) return setReply(mess.only.group)
            let timeout = 80000
            let poin = 2000
            let id = m.chat
            if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
          async function tebakgambar() {
          let random_level = Math.floor(Math.random() * 136)
          let random_eq = Math.floor(Math.random() * 20)
          return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
            let url = "https://jawabantebakgambar.net"
            const $ = cheerio.load(val.data)
            let href = $("ul > * > a").eq(random_eq)
            let jwbn = href.find("span").text()
            let img = href.find("img").attr("data-src")
            let src = url + img
            let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
            return {
              img: src,
              jawaban: jwbn,
              petunjuk,
            }
          })
            }
          let tos = await tebakgambar ()
          console.log(tos)
            let caption = Ehztext(`*GAME TEBAK GAMBAR*

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())

            conn.tebakgambar[id] = [
            await conn.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: fkontak}),
            tos, poin,
            setTimeout(() => {
            if (conn.tebakgambar[id]) 
        user.balance -= 200
        let tbkgmbar = Ehztext(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        m.reply(tbkgmbar)
            delete conn.tebakgambar[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
case 'suitpvp': case 'suit': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.only.group)
            conn.suit = conn.suit ? conn.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            conn.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
            delete conn.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].limit -= 1
            break  
 
//========✓============
            case 'react': {
                if (!isOwner) return sendStickOwner()
                let reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return setReply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
setReply('Success in turning on nsfw in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
    let pringatan = Ehztext(` 
${gris}「 ⚠️Peringatan⚠️ 」${gris}

Fitur nsfw (tidak aman untuk bekerja) telah diaktifkan di grup ini, yang berarti seseorang dapat mengakses grafik seksual dari bot!`)
    m.reply(pringatan)
//conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return setReply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
setReply('Success in turning off nsfw in this group')
} else {
  await setReply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  
            case 'antiaudio':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!isOwner) return sendStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await setReply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|ehanz, ganteng,kan...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await conn.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  setReply(`${command} is disabled`)
               }
               }
            break
         case 'read':   case 'readviewonce': {
	if (!m.quoted) return setReply(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipromotion = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipromotion = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  setReply(`${command} is disabled`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  setReply(`${command} is disabled`)
               }
            }
            break 
 // NSSFW =====================>>
 case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return sendStickGroup()
if (!AntiNsfw) return m.reply(mess.nsfw)
                await sendStickAwait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return sendStickGroup()
if (!AntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
 let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption: mess.success, image: { url:trap.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return sendStickGroup()
if (!AntiNsfw) return setReply(mess.nsfw)
   let hneko = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: mess.success, image: { url:hneko.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return sendStickGroup()
if (!AntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
   let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'animespank':
if (!m.isGroup) return sendStickGroup()
if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await conn.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'blowjob':
if (!m.isGroup) return sendStickGroup()
	if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return sendStickGroup()
	if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return sendStickGroup()
	if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return sendStickGroup()
	if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return sendStickGroup()
	if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return sendStickGroup()
	if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return sendStickGroup()
if (!AntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
 // MENU ISLAMIC==================>>
  case 'alkitab':{
      //Dari AvoskyMD
    if (!q) return setReply (`uhm.. teksnya mana?\n\ncontoh:\nAlkitab kejadian`)
    setReply('Patience, O Earthlings')
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(q)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })
    const cheerio = require('cheerio');
    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => Ehztext(`${v.title}\n${v.teks} `)).join('\n────────\n')
    setReply(caption)
}
break
case 'islamic': 
case 'randomislam': {
if (!isGroup) return sendStickGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 //MENU STIKER===================>>
case 's': case 'sticker': case 'stiker': {
if (!quoted) return setReply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packName, author: global.authorName })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return setReply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packName, author: global.authorName })
} else {
setReply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'take':
case 'swm': 
case 'wm':{
if (!isGroup) return sendStickGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

if (!q) return setReply("Reply sticker dengan nama Punya|Gw")
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${wm}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await xm.sendMessage(from,{sticker: nah},{quoted: m})
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${wm}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
db.data.users[sender].limit -= 1 
}
break
 case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!q) return m.reply(`Usage: ${prefix + command} text1|text2`)
    m.reply(mess.wait)
let { TelegraPh } = require('./lib/uploader')

let atas = q.split('|')[0] ? q.split('|')[0] : '-'
let bawah = q.split('|')[1] ? q.split('|')[1] : '-'
let mee = await conn.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

 memek = await conn.sendImageAsSticker(m.chat, meme, m, { packname: global.packName, author: global.authorName })


} else {
setReply(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}

break
 case 'emojimix': {
                let [emoji1, emoji2] = q.split`+`
                if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                await m.reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packName,
                        author: global.authorName,
                        categories: res.tags
                    })
                }
            }
            break
 case 'gura':
case 'gurastick':{
  m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
let encmedia = await conn.sendImageAsSticker(from, wifegerakx, m, { packname: global.packName, author: global.authorName, })

}
break
    
// MENU FUN ====================>>
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: 'nih bang ehanz\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
 // ============================ //
case 'chinese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
case 'hug': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
    try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} hugged themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'cry': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} cried themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'kill': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} killed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'pat': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} patted themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'lick': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} licked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'kiss': {

        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} kissed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bite': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
        try {
  let messsender = m.sender
   let musers = ``
    try {
  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bit themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
         conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'yeet': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} yeeted themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bully': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bullied themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bonk': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bonked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }      }
        break;
        case 'wink': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
  var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)
       try {
         let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} winked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'poke': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} poked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'nom': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} nommed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'slap': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} slapped themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })        } catch (error) {    
      console.log(error);
   }
      }
        break;
        case 'smile': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} smiled themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
    break;
   case 'wave': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} waved themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'awoo': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} awooed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'blush': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} blushed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
        console.log(error);
        }
      }
        break;
        case 'smug': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)
        try {
      let messsender = m.sender
          let musers = ``
         try {
           users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
         if (users == "none") {
           musers = `@${m.sender.split("@")[0]} smugged themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `
          }
         const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'glomp': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} glomped themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
   conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'happy': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} happied themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
    conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'dance': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} danced themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'cringe': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} cringed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'cuddle': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} cuddled themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'highfive': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} highfived themself!`
          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'handhold': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} handheld themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
                case 'spank': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} spanked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'feed': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} fed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
                case 'tickle': {
        if (!m.isGroup) return sendStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} tickled themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
       conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break
  // MENU ANIME ================>>
  case 'ppcp': case ' ppcouople': {
if (!isGroup) return sendStickGroup()
                setReply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break	    
     case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
let animRndm = Ehztext(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || yuki

Contoh : .shina`)
setReply(animRndm)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return sendStickGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return sendStickGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
m.reply(mess.wait)//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : true,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break

  // MENU RANDOM================>>
 case 'script' :
    setReply(`_Tunggu Sebentar Sedang Mengirim File_`)
   await conn.sendMessage(from, { document: fs.readFileSync('./temp/Menhara-Chan.zip'),fileName: 'Menhara-Chan.zip', mimetype: 'application/zip'  },{ quoted: m})
await sleep(2000)
//conn.sendMessage(m.chat, { image: { url:"https://telegra.ph/file/b46e7efa47051b328cbd3.jpg"}, caption: '_Kalian Bisa pake apk uptimerobot Biar Bot Bisa On 24 Jam_'}, { quoted: m})
break
case 'bcmem':{
      if (!isGroup) return m.reply(mess.only.group)
        if (!isOwner) return m.reply(mess.owner);
        if (!q) return m.reply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
 //setReply("waitt.....! sedang memuat")
        let mem = [];
	    participants.map( i => mem.push(i.id) )
       // let anu = await store.chats.all().map((v) => v.id);
        for (let yoi of mem) {
          if (yoi.includes('.net')) {
          	await sleep (6000)
            conn.sendMessage(yoi, {text: ` $gris}${q}${gris} `});
          }
        }
        m.reply(`Succes`);
        }
        break;
case 'getcontact': case 'getcon': {
if (!m.isGroup) return sendStickGroup()
if (!(isGroupAdmins || isOwner)) return sendStickAdmin()
let xeonbigpp = await conn.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
conn.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case'contag': {
 const froms = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false; 
 if (froms) {
 if (db && db.users && db.users.hasOwnProperty(froms)) {
 sendContact(db.users[froms].name, froms, m);
 } else {
 const name = await conn.getName(froms);
 sendContact(name, froms, m);
 }
 } else {
 m.reply('Tag pengguna yang ingin dikirimkan kontaknya!');
 } 
 function sendContact(name, jid, m) {
 let sngContact = {
 displayName: `ini namanya ${name}`,
 contacts: [{
 displayName: name,
 vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${jid.split('@')[0]}:${jid.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
 }]
 };
 
 conn.sendMessage(m.chat, { contacts: sngContact, mentions: [jid] }, { ephemeralExpiration: 86400 });
 }
}
break
case 'runtime': {
            	let lowq = `⏰ *Bot Aktif Selama :*\n*${runtime(process.uptime())}*`
                setReply(lowq)
            	}
            break
case 'ping': case 'botstatus': case 'statusbot': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
              let  neww = performance.now()
              let  oldd = performance.now()
               let respon = Ehztext(`
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim())
	conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break


 // MENU DOWNLOAD =================>>
  
    
 case 'play': {
if (!isGroup) return sendStickGroup()
 if (!q) return setReply(`Example : ${prefix + command} Drunk Text`)
sendStickAwait()
                let search = await yts(q)
                let linknya = search.all[0].url
                let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
            
                
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: conn.waUploadToServer})), 
                  title: botName,
                  gifPlayback: true,
                  subtitle: ownerName,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                        serverMessageId: 100,
                        newsletterName
                }
                }
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
            }
            break
case 'ytmp3': case 'youtubemp3': {
if (!isGroup) return sendStickGroup()
if (!q) return setReply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27128kbps`)
await sendStickAwait()
downloadMp3(q)
}
break
case 'ytreels': case 'ytmp4':{
if (!isGroup) return sendStickGroup()
if (!q) return setReply(mess.query)
await setReply('scraping')
downloadMp4(q)
}
break
case 'tt':
case 'tiktok': {
if (!q) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return setReply(`Link Invalid!!`)
 sendStickAwait()
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { caption: mess.succes, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'ttmp3':
case 'tiktokaudio':{
if (!q) return setReply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
setReply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
const titokmp3 = {url:data.audio}
conn.sendMessage(m.chat, { audio: titokmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case 'ig': {

	  if (!q) return m.reply(`You need to give the URL of Any Instagram video, post, reel, image`)

  let res

  try {

    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${q}`)

  } catch (error) {

    return m.reply(`An error occurred: ${error.message}`)

  }

  let api_response = await res.json()

  if (!api_response || !api_response.data) {

    return m.reply(`No video or image found or Invalid response from API.`)

  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {

    const mediaType = mediaData.type

    const mediaURL = mediaData.url_download

    let cap = `HERE IS THE ${mediaType.toUpperCase()}`

    if (mediaType === 'video') {

      conn.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})

    } else if (mediaType === 'image') {

      conn.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})

    }

  }

}

break
case 'mediafire': {
  	if (!args[0]) return m.reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return setReply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    m.reply(mess.wait)
   conn.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })

    }
    break
case'ttslide': case 'tiktokslide':{
if (!text) return m.reply(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await conn.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await conn.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
//—————「 PRIMBON MENU 」—————//
 case 'cekmemek':
			
				 if (!isGroup) return sendStickGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  
case 'cekkontol':
				if (!isGroup) return sendStickGroup()
if (!q) return setReply('*CEKKONTOL* Izmi begitu!')
	const persenbucin = body.slice (0)
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 
  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break	
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`)
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} ehanz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`)
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`)
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`)
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`)
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`)
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`)
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`)
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
// MENU CONVERT ===============>>
case 'kodebahasa':{
	let LANGUAGES = Ehztext(`
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`)
	setReply(LANGUAGES)
	}
	break
            case 'tr':
case 'translate':{
//if (!isGroup) return sendStickGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = Ehztext(`
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim())

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case'toptv':{
try {
  if (!isGroup) return sendStickGroup()
if (m.message.extendedTextMessage) 
{ var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    conn.relayMessage(m.chat, dataVideo, {})} } 
catch (error) { m.reply(error); } } 
break
 case 'tts':
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world ketik .kodebahasa untuk list bahasa`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) conn.sendMedia2(from, ras, m, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	
	break
  case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker with caption *${prefix + command}*`)
                await setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return setReply(`Reply sticker with caption *${prefix + command}*`)
                await setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await setReply(mess.wait)
                let media = await conn.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                conn.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await setReply(mess.wait)
                let media = await conn.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                conn.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `menhara.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await sendStickAwait()
                let media = await conn.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                conn.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
    case 'terbalik':{
if (!isGroup) return sendStickGroup()
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
 case 'volaudio': {
if (!args.join(" ")) return setReply(`Example: ${prefix + command} 10`)
let media = await conn.downloadAndSaveMediaMessage(quoted, "volume")
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('kelebihan')
let jadie = fs.readFileSync(rname)
conn.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return setReply(`Example: ${prefix + command} 10`)
    m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted, "volume")
let rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(mess.error)
let jadie = fs.readFileSync(rname)
conn.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await m.reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else setReply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker with caption *${prefix + command}*`)
                await m.reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            
     case 'toonce':
            case 'toviewonce': {
                if (!quoted) return setReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                   let anuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.succes,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                  let  anuanuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.succes,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                let   bebasap = await conn.downloadAndSaveMediaMessage(quoted)
                   conn.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
 // MENU TOOLS ===================>>
 case "get":
case "fetch":
  if (!q) {
    return m.reply(`Contoh:\n${prefix + command} https://telegra.ph/file/8061eddf39551837adac8.jpg'`);
  }
  if (!/^https?:\/\//.test(q)) {
    return m.reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => m.reply(result))
      .catch((error) => m.reply("Error", error));
  }
  break;
 case 'ss': case 'ssweb': {
if (!q) return m.reply(`Example ${prefix+command} link`)
await m.reply(mess.wait)
let krt = await scp2.ssweb(q)
conn.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'remini': case 'hdr': {
			if (!quoted) return m.reply(`Where is the picture?`)
			if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
			await m.reply(mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
case 'google': {
if (!q) return m.reply(`Example : ${prefix + command} ${botName}`)

let google = require('google-it')
google({'query': q}).then(res => {
let teks = Ehztext(`${gris}SEARCH FROM GOOGLE${gris}: ${q}\n\n`)
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'tourl': {
                await sendStickAwait()
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    setReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    setReply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
 case 'pinterest': case 'pin': {
  if (!q) return setReply(mess.query);
  //try {
  await setReply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai\nDibawah ini Adalah hasil dari Pencarian Kamu'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botName
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break
//MENU PHOTOOXY===============>>




  // MENU STORAGE ===============>>

 case 'addvideo':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Whats the video name?')
if (VideoMenhara.includes(q)) return setReply("The name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
VideoMenhara.push(q)
await fsx.copy(delb, `./media/video/${q}.mp4`)
fs.writeFileSync('./database/video.json', JSON.stringify(VideoMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Enter the video name')
if (!VideoMenhara.includes(q)) return setReply("The name does not exist in the database")
let wanu = VideoMenhara.indexOf(q)
VideoMenhara.splice(wanu, 1)
fs.writeFileSync('./database/video.json', JSON.stringify(VideoMenhara))
fs.unlinkSync(`./media/video/${q}.mp4`)
setReply(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoMenhara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoMenhara.length}*`
setReply(teks)
}
break
case 'addimage':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Whats the image name?')
if (ImageMenhara.includes(q)) return setReply("The name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
ImageMenhara.push(q)
await fsx.copy(delb, `./media/image/${q}.jpg`)
fs.writeFileSync('./database/image.json', JSON.stringify(ImageMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Enter the image name')
if (!ImageMenhara.includes(q)) return setReply("The name does not exist in the database")
let wanu = ImageMenhara.indexOf(q)
ImageMenhara.splice(wanu, 1)
fs.writeFileSync('./database/image.json', JSON.stringify(ImageMenhara))
fs.unlinkSync(`./media/image/${q}.jpg`)
setReply(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageMenhara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageMenhara.length}*`
setReply(teks)
}
break
case 'addsticker':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Whats the sticker name?')
if (StickerMenhara.includes(q)) return setReply("The name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
StickerMenhara.push(q)
await fsx.copy(delb, `./media/sticker/${q}.webp`)
fs.writeFileSync('./database/sticker.json', JSON.stringify(StickerMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Enter the sticker name')
if (!StickerMenhara.includes(q)) return setReply("The name does not exist in the database")
let wanu = StickerMenhara.indexOf(q)
StickerMenhara.splice(wanu, 1)
fs.writeFileSync('./database/sticker.json', JSON.stringify(StickerMenhara))
fs.unlinkSync(`./media/sticker/${q}.webp`)
setReply(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerMenhara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerMenhara.length}*`
setReply(teks)
}
break
case 'addmsg': {
	if (!isOwner) return sendStickOwner()
                if (!m.quoted) return setReply('Reply Message You Want To Save In Database')
                if (!text) return setReply(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return setReply(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
setReply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return setReply(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return setReply(`'${text}' not listed in the message list`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        setReply(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!isOwner) return sendStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return setReply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
setReply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Whats the audio name?')
if (VnMenhara.includes(q)) return setReply("The name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
VnMenhara.push(q)
await fsx.copy(delb, `./media/audio/${q}.mp3`)
fs.writeFileSync('./json/vn.json', JSON.stringify(VnMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!isOwner) return sendStickOwner()
if (args.length < 1) return setReply('Enter the vn name')
if (!VnMenhara.includes(q)) return setReply("The name does not exist in the database")
let wanu = VnMenhara.indexOf(q)
VnMenhara.splice(wanu, 1)
fs.writeFileSync('./json/vn.json', JSON.stringify(VnMenhara))
fs.unlinkSync(`./media/audio/${q}.mp3`)
setReply(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VnMenhara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VnMenhara.length}*`
setReply(teks)
}
break
case 'addzip':{
if (!isOwner) return sendStickOwner()

if (args.length < 1) return setReply(`What's the zip name?`)
let teks = `${text}`
{
if (ZipMenhara.includes(teks)) return setReply("This name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
ZipMenhara.push(teks)
await fsx.copy(delb, `./media/zip/${teks}.zip`)
fs.writeFileSync('./json/zip.json', JSON.stringify(ZipMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isOwner) return sendStickOwner()

if (args.length < 1) return setReply('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipMenhara.includes(teks)) return setReply("This name does not exist in the database")
let wanu = ZipMenhara.indexOf(teks)
ZipMenhara.splice(wanu, 1)
fs.writeFileSync('./json/zip.json', JSON.stringify(ZipMenhara))
fs.unlinkSync(`./media/zip/${teks}.zip`)
setReply(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipMenhara) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipMenhara.length}*`
setReply(teksooooo)
}
break
case 'addapk':{
if (!isOwner) return sendStickOwner()

if (args.length < 1) return setReply('What is the name of the apk?')
let teks = `${text}`
{
if (ApkMenhara.includes(teks)) return setReply("This name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./media/apk/${teks}.apk`)
fs.writeFileSync('./json/apk.json', JSON.stringify(ApkMenhara))
fs.unlinkSync(delb)
setReply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isOwner) return sendStickOwner()

if (args.length < 1) return setReply('Name of the apk?')
let teks = `${text}`
{
if (!ApkMenhara.includes(teks)) return setReply("This name does not exist in the database")
let wanu = ApkMenhara.indexOf(teks)
ApkMenhara.splice(wanu, 1)
fs.writeFileSync('./json/apk.json', JSON.stringify(ApkMenhara))
fs.unlinkSync(`./media/apk/${teks}.apk`)
setReply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkMenhara) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkMenhara.length}`
setReply(teksoooooo)
}
break
case 'addpdf':{
if (!isOwner) return sendStickOwner()

if (args.length < 1) return setReply('What is the name of the pdf')
let teks = `${text}`
{
if (DocMenhara.includes(teks)) return setReply("This name is already in use")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
DocMenhara.push(teks)
await fsx.copy(delb, `./media/doc/${teks}.pdf`)
fs.writeFileSync('./json/doc.json', JSON.stringify(DocMenhara))
fs.unlinkSync(delb)
setReply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isOwner) return sendStickOwner()

if (args.length < 1) return setReply('Enter the name')
let teks = `${text}`
{
if (!DocMenhara.includes(teks)) return setReply("This name does not exist in the database")
let wanu = DocMenhara.indexOf(teks)
DocMenhara.splice(wanu, 1)
fs.writeFileSync('./json/doc.json', JSON.stringify(DocMenhara))
fs.unlinkSync(`./media/doc/${teks}.pdf`)
setReply(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocMenhara) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocMenhara.length}*`
setReply(teksoooo)
}
break
 // MENU SETTINGS==============>>
 case 'setppbot':
                if (!isOwner) return sendStickOwner()
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.succes)
                } else {
                    var memeg = await conn.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.succes)
                }
                break
 case 'setnamebot':
	if (!isOwner) return m.reply(mess.only.owner)
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
case 'setbio':
{
if (!isOwner ) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} sedang berak`)
await conn.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
  case 'deleteppbot': case 'delppbot': {
if (!isOwner) return XeonStickOwner()
    await conn.removeProfilePicture(conn.user.id)
    m.reply(`Success in deleting bot's profile picture`)
    }
    break
  case 'delsampah':{
 if (!isOwner) return m.reply(mess.owner);
 let directoryPath = './'; // Ganti dengan path yang sesuai di dalam kontainer
 fs.readdir(directoryPath, async function (err, files) {
 if (err) {
 return m.reply('Tidak dapat memindai direktori: ' + err);
 } 
 let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")|| item.endsWith("zip")|| item.endsWith("tar.gz"));
 var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
 if (filteredArray.length == 0) return m.reply(teks);
 for (let i = 0; i < filteredArray.length; i++) {
 console.log("Nama file:", filteredArray[i]); // Tambahkan log untuk memeriksa nama file
 let stats = fs.statSync(path.join(directoryPath, filteredArray[i]));
 console.log("Stats:", stats); // Tambahkan log untuk memeriksa informasi stats
 let fileSizeInBytes = stats.size;
 let fileSize;
 if (fileSizeInBytes < 1024) {
 fileSize = `${fileSizeInBytes} Bytes`;
 } else if (fileSizeInBytes < 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / 1024).toFixed(2)} KB`;
 } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
 } else {
 fileSize = `${(fileSizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
 }
 teks += `${i+1}. ${filteredArray[i]} - ${fileSize}\n`;
 }
 setReply(teks);
 await sleep(2000);
 setReply("Menghapus file sampah...");
 await Promise.all(filteredArray.map(async function (file) {
 try {
 await fs.unlinkSync(path.join(directoryPath, file));
 } catch (err) {
 console.error(err);
 }
 }));
 await sleep(2000);
 setReply("Berhasil menghapus semua sampah");
 });
}
break
 case 'restart':
                if (!isOwner) return sendStickOwner()
                setReply(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    setReply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    setReply(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    setReply(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    setReply(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    setReply(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    setReply(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    setReply(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    setReply(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    setReply(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    setReply(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    setReply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    setReply(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    setReply(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    setReply(`Successfully Changed Auto Sticker To ${q}`)
                }
            break
            case 'autodownload': case 'autodl':
if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    setReply(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    setReply(`Successfully Changed Auto Download To ${q}`)
                }
            break
            case 'autoblock':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    setReply(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    setReply(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    setReply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    setReply(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    setReply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    setReply(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    setReply(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    setReply(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    setReply(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    setReply(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'self': {
                if (!isOwner) return sendStickOwner()
                conn.public = false
                setReply('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!isOwner) return sendStickOwner()
                conn.public = true
                setReply('*Successful in Changing To Public Usage*')
            }
            break
  // list store
  case 'addlist':
if (!isOwner) return sendStickOwner()
if (!m.isGroup) return sendStickGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return setReply(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return setReply(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
setReply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
setReply(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!isOwner) return sendStickOwner()
if (!m.isGroup) return sendStickGroup()
if (db_respon_list.length === 0) return setReply(`There is no message list in the database yet`)
if (!q) return setReply(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return setReply(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
setReply(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
setReply(teks)
}
break
 // MENU OWNER =====================>>
case 'owner': case 'creator':{
  const p = `${global.nomerOwner}`;
  let pp = await conn.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/5aadc224c704e680075b2.jpg");
  let owner = `wa.me/${p}`;
  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:WhatsApp; Ehanzdhoanx
ORG: ${global.ownerName}
TITLE:soft
item1.TEL;waid=${global.nomerOwner}:${global.nomerOwner}
item1.X-ABLabel:Contact Owner
item2.TEL;waid= ${global.nomerBot}:${global.nomoerBot}
item2.X-ABLabel:Contact Bot
item3.URL:https://officialehz.my.id
item3.X-ABLabel:💬 More
item4.EMAIL;type=INTERNET: ehanzdhoanx@gmail.com
item4.X-ABLabel:Email
item5.ADR:;;🇮🇩 Indonesia;;;;
item5.X-ABADR:💬 More
END:VCARD`;
  const sentMsg = await conn.sendMessage(m.chat, {
    contacts: {
      displayName: ownerName,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `${botName}`,
        body: `hai ${ucapanWaktu}kak${pushname}`,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

conn.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku.. Kalo Ada Sesuatu Bilang Aja Sama Dia :3`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: sentMsg })
}
break
   case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return sendStickOwner()
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                setReply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = Ehztext(`*${ownerName}* ${gris}BROADCAST GROUP${gris}\n\n` + '```' + `• Message : ${text}\n\n` + '```')
                    conn.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botName,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: await pickRandom(global.fotoRandom),
                                sourceUrl: syt,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                m.reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
             case 'bc':
            case 'broadcast': {
               if (!isOwner) return sendStickOwner()
               if (!text) return m.reply('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${wib} ${hariini}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await conn.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await conn.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await conn.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
              m.reply(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
  case 'block': case 'ban': {
		if (!isOwner) return sendStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'block')
		await m.reply(mess.succes)
	}
	break
	case 'unblock': case 'unban': {
		if (!isOwner) return sendStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'unblock')
		await m.reply(mess.succes)
	}
	break
 case 'addlimit':
            case 'givelimit':{
                if (!isOwner) return sendStickOwner()
                if (!text) return setReply(`Usage ${prefix + command} number|limit amount`)
              let  usernya = text.split('|')[0]
               let limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                setReply(mess.succes)
            }
            break
            case 'dellimit':{
                if (!isOwner) return sendStickOwner()
                if (!text) return setReply(`Usage ${prefix + command} number|limit amount`)
               let usernya = text.split('|')[0]
              let  limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return setReply(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                setReply(mess.succew)
            }
            break               
        
case 'addowner':
if (!isOwner) return sendStickOwner()
if (!args[0]) return setReply(`Use ${prefix+command} number\nExample ${prefix+command} ${nomerOwner}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await conn.onWhatsApp(bnnd)
if (ceknye.length == 0) return setReply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
setReply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return sendStickOwner()
if (!args[0]) return setReply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
setReply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                setReply(teks)
            }
            break
case 'addprem':
                if (!isOwner) return sendStickOwner()
                if (args.length < 2)
                    return setReply(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    setReply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                   setReply("Premium Success")
                }
            break
            case 'delprem':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
                    }
                    setReply("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
                    setReply("Delete Success")
                }
            break
            case 'listprem': {
                if (!XeonTheCreator) return XeonStickOwner()
                let data = require('./database/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                conn.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break

case 'join':
                try {
                    if (!isOwner) return sendStickOwner()
                    if (!text) return setReply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    conn.groupAcceptInvite(result)
                    await setReply(`Done`)
                } catch {
                    setReply('Failed to join the Group')
                }
                break
  case 'leave':
            case 'out':
                if (!isOwner) return sendStickOwner()
                if (!m.isGroup) return sendStickGroup()
                setReply('Bye Everyone 🥺')
                await conn.groupLeave(m.chat)
            break
case 'delsession':
            case 'clearsession': {
                if (!isOwner) return sendStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return setReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return setReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    setReply(teks)
                    await sleep(2000)
                    setReply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    setReply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'getsession':
                if (!isOwner) return sendStickOwner()
         setReply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                conn.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
  case 'addtitle':{
               if (!isOwner) return sendStickOwner()
               if (!text) return setReply(`Usage ${prefix + command} number|title`)
            let   nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await setReply(mess.done)
            }
            break
            case 'deltitle':{
               if (!isOwner) return sendStickOwner()
               if (!text) return setReply(`Usage ${prefix + command} number`)
             let  nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await setReply(mess.succes)
            }
            break
       case 'addbadword': case 'addbd':
               if (!isOwner) return sendStickOwner()
               if (!groupAdmins) return setReply(mess.only.admin)
               if (args.length < 1) return m.reply( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./database/badword.json', JSON.stringify(bad))
               setReply('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!isOwner) return sendStickOwner()
               if (!groupAdmins) return setReply(mess.only.admin)
               if (args.length < 1) return m.reply( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./database/badword.json', JSON.stringify(bad))
               setReply('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'clearuser': {
               if (!isOwner) return sendStickOwner()
               let totalusernya = db.data.users[0]
               setReply(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!isOwner) return sendStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               setReply(mess.succes)
            }
            break
                case 'delcase': {
if (!isOwner) return setReply(mess.only.ownerB)
if (!q) return setReply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
setReply('*Dellcase Successfully*')
}
break

case 'addcase': {
 if (!isOwner) return setReply(mess.only.ownerB)
 if (!q) return setReply('Mana case nya');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${q}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                setReply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        m.reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
setReply(listCase())
}
break
case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break" }
  try{
  if (!isOwner) return setReply(mess.only.owner)
  if (!q) return setReply(`contoh : ${prefix + command} antilink`)
  let nana = await getCase(q)
 setReply(nana)
  } catch(err){
 console.log(err)
 m.reply(`Case ${q} tidak di temukan`)
   } }
break 
// BATAS ==============>>
            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return sendStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                           bang = util.format(sul)
                        }
                        return setReply(bang)
                    }
                    try {
                        setReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        setReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return sendStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await setReply(evaled)
                    } catch (err) {
                        await setReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isOwner) return sendStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return setReply(err)
                        if (stdout) return setReply(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
conn.sendMessage("6281316643491@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
 

