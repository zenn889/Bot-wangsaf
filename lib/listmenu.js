const chalk = require('chalk')
const fs = require('fs')

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menumenhara = (prefix) => {
return Ehztext(`${gris}ＢＩＧ ＴＨＡＮＫＳ ＦＯＲ${gris}

► Penyedia Modules
► DGxeon
► OfficialDittaz
► DikaArdnt
► EhanzDhoanx
► Para Creator Bot`)}
global.menugrup = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＧＲＯＵＰ 〉 ⋟ ┈${gris}

• afk
• on ( pilihan )
• tagadmin
• listrequestjoin
• opentime
• closetime
• add
• kick
• kickall
• promote
• demote
• promoteall
• demoteall
• setnamegc
• setdesc
• setppgc
• delppgc
• tagall
• totag
• hidetag
• gc
• del
• intro
• jodohku
• jadian
• getcon
• contag`)}

global.menugame = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＧＡＭＥ 〉 ⋟ ┈${gris}

• tebakkata
• tebaklirik
• tebakgambar
• tebakkimia
• tekateki
• susunkata
• siapaaku
• mtk
• suit
• limit
• 
• `)}

global.menuai = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＡＩ 〉 ⋟ ┈${gris}

•
•
•
•`)}

global.menudownload = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＤＯＷＮＬＯＡＤ 〉 ⋟ ┈${gris}

• play
• ytmp3
• ytmp4
• tiktok
• tiktokaudio
• ig
• `)}

global.menutools = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＴＯＯＬＳ 〉 ⋟ ┈${gris}

• ssweb
• tourl
• translate
• pinterest
• remini
• google `)}

global.menuprimbon = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＰＲＩＭＢＯＮ 〉 ⋟ ┈${gris}

• artinama
• artimimpi
• kecocokanpasangan
• kecocokannama
• ramalancinta
• jadiannikah
• sifatusaha
• rezeki
• pekerjaan
• penyakit
• nasib
• artitarot
• fengshui
• haribaik
• harisangar
• harisial
• harinaga
• peruntungan
• weton
• karakter
• masasubur
• zodiak `)}

global.menusticker = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＳＴＩＣＫＥＲ 〉 ⋟ ┈${gris}

• sticker
• swm
• emojimix
• gurastick
• 
•`)}

global.menufun = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＦＵＮ 〉 ⋟ ┈${gris}

• tiktokghea
• tiktokpanrika
• tiktokbocil
• tiktokkayes
• videogalau
• cosplayangel
• videowibu
• chinese
• hijab
• indo
• japanaese
• korean
• malay
• randomboy
• randomgirl
• thai
• vietnamese
• cekmemek
• cekkontol
• cry
• kill
• hug
• pat
• lick
• kiss
• bite
• yeet
• bully
• bonk
• wink
• poke
• nom 
• slap
• smile
• wave
• awoo
• blush
• smug
• glomp
• happy 
• dance
• cringe
• cuddle
• highfive
• handhold
• spank
• tickle
• feed`)}

global.menuconvert = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＣＯＮＶＥＲＴ 〉 ⋟ ┈${gris}

• kodebahasa
• tts
• toimg
• tomp4
• toaudio
• tomp3
• tovn
• togif
• toonce
• toptv
• bass
• blown
• deep
• earrape
• fast
• fat
• nightcore
• reverse
• robot
• slow
• smooth 
• squirrel
• terbalik
• volvideo
• volaudio
`)}

global.menuislamic = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＩＳＬＡＭＩＣ 〉 ⋟ ┈${gris}

• alkitab ( non muslim )
• islamic
• 
• 
• `)}
global.menuanime = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＡＮＩＭＥ 〉 ⋟ ┈${gris}

• randomanime
• loli
• cosplay
• husbu
• milf
• wallml
• ppcp
•
• `)}

global.menutextpro = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＴＥＸＴＰＲＯ 〉 ⋟ ┈${gris}

• 
• 
• 
•
• 
• 
• 
• 
• `)}

global.menunsfw = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＮＳＦＷ 〉 ⋟ ┈${gris}

• hentaivid
• hneko
• nwaifu
• trap
• animespank
• blowjob
• cuckold
• eba
• pussy
• yuri
• zettai
• gifblowjob
• `)}

global.menusettings = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＳＥＴＴＩＮＧＳ 〉 ⋟ ┈${gris}

• setppbot
• setbio
• setnamebot
• addbadword
• delbadword
• resetuser
• resethit
• restart
• delsampah
• getsession
• clearssion
•`)}

global.menustorage = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＳＴＯＲＡＧＥ 〉 ⋟ ┈${gris}

• addvn
• delvn
• listvn
• addvideo
• delvideo
• listvideo
• addimage
• delimage
• listimage
• addsticker
• delsticker
• liststicker
• addapk
• delapk
• listapk
• addzip
• delzip
• listzip
• addpdf
• delpdf
• listpdf`)}

global.menuowner = (prefix) => {
return Ehztext(`${gris}┈ ⋞ 〈 ＭＥＮＵ-ＯＷＮＥＲ 〉 ⋟ ┈${gris}

• autorecord
• addowner
• delowner
• listowner
• addprem
• delprem
• listprem
• addlist
• dellist
• addlimit
• dellimit
• block
• unblock
• list
• addtitle
• deltitle
• listgc
• join
• left 
• bc
• bcgc
• bcmem`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})