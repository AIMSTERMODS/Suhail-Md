const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+917907978020";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_18_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpLQk9tN3lOb1JWTE9CYThHdklYQTVtUmJpLzZGbWdWYUtoUXpoNmtvcUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3OTA3OTc4MDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RjAyOTNEMEU5NUM0NjI4QjEwRkE2RjAyQ0I3RTFDMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0Njc0ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc5MDc5NzgwMjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGOTUxMDE5RkQzMTUxNzIzQTYyMTgzMUFGMzFGREMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQ2NzQ4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5Tjl0ODViNVFhNkUwaFh6M2paQUVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3NjA1NzFiLTY4OWEtNDM1Mi1iZjZhLTRmYTAxZjllZWZmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDQ0LFxuICAgICAgMTM5LFxuICAgICAgMjI4LFxuICAgICAgOTgsXG4gICAgICAxMTQsXG4gICAgICAxODIsXG4gICAgICA2NCxcbiAgICAgIDE2MyxcbiAgICAgIDMwLFxuICAgICAgMTUyLFxuICAgICAgMTcxLFxuICAgICAgMTMsXG4gICAgICAxNDcsXG4gICAgICAyNTQsXG4gICAgICAxMTgsXG4gICAgICA2NyxcbiAgICAgIDIxMixcbiAgICAgIDIzNyxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxNDcsXG4gICAgICAzNyxcbiAgICAgIDk0LFxuICAgICAgMjI4LFxuICAgICAgMTg4LFxuICAgICAgMTI4LFxuICAgICAgMTk5LFxuICAgICAgNjAsXG4gICAgICAzMSxcbiAgICAgIDE1LFxuICAgICAgMjM1LFxuICAgICAgMTc5LFxuICAgICAgNzIsXG4gICAgICA3NyxcbiAgICAgIDIxNixcbiAgICAgIDcxLFxuICAgICAgMTc3LFxuICAgICAgOTcsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYSzFGNVRHWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3OTA3OTc4MDIwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTQ0MjU3MjkyNzE1Nzo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdm6XwnZuq8J2brfCdkYbwnZGH8J2br/CdkYVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJemtnWjBDRU5UeStiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVTMUVzdGFTbTBrY1p2aHpoa05OZkFHRXJiOS9tazNtNDBXSjdQV0tsekk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2NFTTBsN0VJSWRqZkM5VVJqS2g5TXYwRDNqaERDQjFIWlI1cG5sRHM4allXTUFhc3lJUVo4ays5NGVnKysrbHJFNGh4L0xoaldGN2NyblRUQktoQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDR5M0lmMUxwWElXRDRIcWs4bVlEVnQrZ3ZtK0JEbm8wNTdIbk91dEI5Mm5qR0oyOXVvQnNSUlN1U09NVUVjaVk1ZjZyZE1kQXJuRVZ2R3NpaWcrREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTA3OTc4MDIwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NDY3NDc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjk4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOOTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4YkVDQ2M4RVdZL0VoOW1BRHlIVlBmQ0I3MXdudmhFaEZuMXRDc3FYUWpJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5NzcxNzUxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
