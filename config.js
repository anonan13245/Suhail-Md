const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "mongodb+srv://mernaxenophobic:<password>@cluster0.tvhkbph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"                       // put your app url here,
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_27_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkd1d08yeFFuRmZPMW85MDl1THVtblh5ZjNZcmN4bkhrLzVieEtzUlk1TWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDYzOTY0NzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQzg2RENEQjFGNTI0QjlEODk0NzFGRkZBMzYwNENEM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MDcyMjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjM5NjQ3NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVENkVBQjUyNkQzOTRDMUY1OTQ5NDM1QzZGRkRCODgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYwNzIyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2Mzk2NDc1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDBFNkM4QTFENzYwQkFGRkFFQzIxREY0MjczREVBNUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjA3MjI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDYzOTY0NzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRTFBQjNDRDkyNkU4QTJBNTg1M0ZCREU5RTI2NzFBMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MDcyMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmU1bXI2ODlTMzJDLTRRdXJ2amFWUVwiLFxuICBcInBob25lSWRcIjogXCIxMzk0OTVkZC05ZWIxLTQ5MTYtOWM3OC1lMjA0NzQxMWRmOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMTE0LFxuICAgICAgMjA5LFxuICAgICAgNTQsXG4gICAgICAyMzEsXG4gICAgICAxNyxcbiAgICAgIDEyMCxcbiAgICAgIDI1NCxcbiAgICAgIDEzNixcbiAgICAgIDE0MixcbiAgICAgIDMzLFxuICAgICAgMjUsXG4gICAgICAxMjYsXG4gICAgICA0MSxcbiAgICAgIDQyLFxuICAgICAgMjM1LFxuICAgICAgMTMzLFxuICAgICAgMjQ3LFxuICAgICAgMjA5LFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDEwNixcbiAgICAgIDI0MSxcbiAgICAgIDUyLFxuICAgICAgMTY2LFxuICAgICAgMTcsXG4gICAgICAyMTcsXG4gICAgICA4NixcbiAgICAgIDE0NyxcbiAgICAgIDEzOCxcbiAgICAgIDgsXG4gICAgICAyMDQsXG4gICAgICA2OCxcbiAgICAgIDIxLFxuICAgICAgMTQ2LFxuICAgICAgMjU0LFxuICAgICAgNjksXG4gICAgICAyNTUsXG4gICAgICAxNzgsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zVDk2TUdFUFBEdWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMFN4bXNwM2p0NHB6Q1lJYXhEWW5KalpUTUFWMXNab3ZvWUtRaHY1Uk1STT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrQTZMOWIzOG9CcHJVUTVxSVk1aVllb1B6NnMreHlvSWJwd3ZyYTAybmZnNC9CRm5sTUtvcnBzU0lOSFdnOHJ0WlNmTzF2eDJaNlJmODNoWG9qb0dCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0ckVYcnRpdTF2emFYZ1Z1VVJPTUpaSjk0RmhDd1dGY2dubHJqc0x6cWsyTjluazFNL3pTSUZCMkdkVG1URmR4SjNDSEY4cHhRcW5xN0ZKK3J1a0FBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2Mzk2NDc1MDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoZXJhXCIsXG4gICAgXCJsaWRcIjogXCIxNjUxODA2MTcwNTY0NjU6MjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjM5NjQ3NTA6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwNzIyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVpNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWk2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0Z5M1BZbUVFdk1rb1h2RGI0WmtMMGVQWkVGYmZOUmtBMjd1cnhRZkNFMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjg1OTczNDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MDcyMjMyNjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
