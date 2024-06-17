import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { en, es, id, ar, pt, de, it } from './lib/idiomas/total-idiomas.js'

// ES ➜ Agregué primero el número del Bot como prioridad
// ES ➜ Si desea recibir reportes debe de usar los tres parámetros (Número, nombre y true)
// EN ➜ Add the Bot number as priority first
// EN ➜ If you want to receive reports you must use the three parameters (Number, name and true)
global.owner = [
['595971490733', '𝙊𝙬𝙣𝙚𝙧', true] //Juan-66
['573147616444' ], //𝙂𝙖𝙩𝙖 🌻🐈
['593968263524'],
['593968585383'],
['595976126756'],
['5492266466080'], 
['201066826750'],
['201033024135'],
['573012482597'],
['50492280729'],
['5492266613038'], 
['5215649706747']]

global.mods = [] 
global.prems = []

// ❰❰ methodCode ❱❱
// [ES] > Agregue el número del Bot en "botNumberCode" si desea recibir código de 8 dígitos sin registrar el número en la consola.
// [EN] > Add the Bot number in "botNumberCode" if you want to receive 8-digit code without registering the number in the console.
global.botNumberCode = "" //example: "+59309090909"
global.confirmCode = "" // No tocar esto : Do not touch this line

// ES ➜ Agregue el código de idioma el cual usará GataBot  
// EN ➜ Add the language code which GataBot will use
//  es = Español      id = Bahasa Indonesia       ar = عرب
//  en = English      pt = Português              de = Deutsch
//  it = Italiano
global.lenguajeGB = es  //<-- Predeterminado en idioma Español 

// ES ➜ Consigue Apikey en https://platform.openai.com/account/api-keys
global.openai_key = 'sk-0'

// ES ➜ Consigue tu ID de organizacion en: https://platform.openai.com/account/org-settings
global.openai_org_id = 'org-3'

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'Gata_Dios'
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'

global.APIs = { 
lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: lolkeysapi },
neoxr: { url: 'https://api.neoxr.eu/api/', key: null },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
aemt: { url: 'https://aemt.me/', key: null },
alyachan: { url: 'https://api.alyachan.dev/api/', key: 'GataDios' },
zahwazein: { url: 'https://api.zahwazein.xyz', key: null },
akuari: { url: 'https://apimu.my.id', key: null },
apimu: { url: 'https://api.xteam.xyz', key: null },
fgmods: { url: 'https://api-fgmods.ddns.net', key: null },
botcahx: { url: 'https://api.botcahx.biz.id', key: null },
ibeng: { url: 'https://api.ibeng.tech/docs', key: null },
itsrose: { url: 'https://api.itsrose.site', key: null },
popcat: { url: 'https://api.popcat.xyz', key: null },
xcoders: { url: 'https://api-xcoders.site', key: 'Frieren' }
}

global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.packname = 'DanReynolds 🐲'
global.author = 'Juan-66'

// ES ➜ Está parte es para mostrar el contacto de alguien al usar #contacto
// EN ➜ This part is to display someone's contact using #contact
global.official = [ 
['595971490733', 'Juan-66 🐲', 1]
['18059196237', 'Gata Dios 💻', 1], 
['5492266466080', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
['59894808483', '𝗖𝘂𝘀𝘁𝗼𝗺𝗲𝗿 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 🥏', 1],
['5521989092076', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.4.0'
global.vsJB = '4.5'

global.gt = 'DanReynoldsBotLite-MD'
global.yt = 'https://youtube.com/@Juan_car'
global.yt2 = 'https://www.youtube.com/watch?v=Ko019wvu2Tc&t=71s'
global.ig = 'https://www.instagram.com/juan_car__19'
global.md = 'https://github.com/juan-66/DanReynoldsBotLite-MD'
global.fb = 'https://www.facebook.com/groups/984030326547739/'

global.nna = 'https://whatsapp.com/channel/0029VaiByuQ9Bb5qVGKJ2d0B' //CANAL UPDATE
global.nn2 = 'https://t.me/DanBotMD' //Canal DanBot
global.nna2 = 'https://chat.whatsapp.com/L9gmMDSKKNgA1pXFiGSibK' //Help
global.nn = 'https://chat.whatsapp.com/EA4ElvvmZK06LZrOqjn1Fl' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/H9tqllynzot3gErfIbgmui' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/LnBEeQWX33H09NsONy3c61' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/Gdg19qPQ7BKILqRrv1tm0w' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/C1BdIFjZXqtB1x8e4qEyzg' //Grupo 5
global.nnnttt1 = 'https://chat.whatsapp.com/Ej5AUrpmYnJKYtEa6YMwK6' //Grupo 6 COL
global.nnnttt2 = 'https://chat.whatsapp.com/I9DsG6ABKer27NbW01Nl39' //Grupo 7 COL
global.nnnttt3 = 'https://chat.whatsapp.com/KQtWZDVfosTKbheIlndLBN' //Grupo 8 COL
global.nnnttt4 = 'https://chat.whatsapp.com/BngbJC3aBVhF5KjoaawiT1' //Grupo 9 COL
global.nnnttt5 = 'https://chat.whatsapp.com/HOCsvLox0Ui7cwzTCeFhPP' //A.T.M.M
global.paypal = 'https://paypal.me/OficialGD'
global.asistencia = 'Wa.me/595971490733' //Dudas? escríbeme...

global.wm = 'DanReynoldsBotLite-MD : Dan Bot'
global.igfg = 'DanReynoldsBotLite-MD'
global.nomorown = owner[0][0]

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

global.img = 'https://i.imgur.com/SWgqmLr.jpeg'
global.img2 = 'https://i.imgur.com/4uscOl8.jpeg'
global.img3 = 'https://i.imgur.com/s4fXYCU.jpeg' //ft rectangular
global.img5 = 'https://i.imgur.com/soimFsD.gif'
global.img6 = 'https://i.imgur.com/RDMSGdP.jpeg'
global.img7 = 'https://i.imgur.com/vs3mX1N.jpeg'
global.img8 = 'https://i.imgur.com/nMnf9IR.jpeg'
global.img9 = fs.readFileSync('./media/menus/img3.jpg')
global.img10 = fs.readFileSync('./media/menus/img10.jpg')
global.img11 = fs.readFileSync('./media/menus/img6.jpg')
global.img12 = fs.readFileSync('./media/menus/img5.jpg')
global.img13 = fs.readFileSync('./media/menus/img1.jpg')
global.img14 = fs.readFileSync('./media/menus/img2.jpg')
global.img15 = fs.readFileSync('./media/menus/img3.jpg')
global.img17 = fs.readFileSync('./media/menus/img9.jpg')
global.img18 = fs.readFileSync('./media/menus/img8.jpg')
global.img19 = fs.readFileSync('./media/menus/img4.jpg')
global.img20 = fs.readFileSync('./media/menus/img7.jpg')
global.img21 = fs.readFileSync('./media/menus/img5.jpg')
global.img21 = fs.readFileSync('./media/menus/Menu4Paypal.jpg') //paypal

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [nna, nn2, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.correct = '✅'
global.fault = '💔'
global.alert = '⚠️'
global.sending = '📋'
global.sent = '❇️'
global.notsent = '❗'
global.waitemot = '⌛'
global.waitemot2 = '⏳'

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
