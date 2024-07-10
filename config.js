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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_26_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwTnBaekN1d0ZhQjdYOS8wbXRKZGcwTlNhNWpXOVRZU2xFandxTFRBZzcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2Mzk2NDc1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREE5MzFFNzkzM0JENzA5RURERENCNzFBMzY2RTk5M0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjE0MzgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDYzOTY0NzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NUQ1RTcwNUI0RDg5QkEzNTY0QzNEREZDMTU4Nzg4MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTQzODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRm80bWY5dmpUVkN5a1VtQ2hBa05qUVwiLFxuICBcInBob25lSWRcIjogXCIxMTA4NGE4Ni05NWMwLTQxOWYtOGJjNC01NDg2ZTNmZmUxNjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTIxLFxuICAgICAgMTIsXG4gICAgICAxMDMsXG4gICAgICAxNTAsXG4gICAgICAxMDgsXG4gICAgICAxNTYsXG4gICAgICA4NCxcbiAgICAgIDE1NCxcbiAgICAgIDExNyxcbiAgICAgIDQxLFxuICAgICAgMjE1LFxuICAgICAgMjQ3LFxuICAgICAgMjMwLFxuICAgICAgMzIsXG4gICAgICA3MixcbiAgICAgIDE5NixcbiAgICAgIDE0MCxcbiAgICAgIDQ5LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDMsXG4gICAgICAxMDEsXG4gICAgICAyMzgsXG4gICAgICAyMTEsXG4gICAgICA4OSxcbiAgICAgIDIxNCxcbiAgICAgIDEzNCxcbiAgICAgIDEwMixcbiAgICAgIDQ0LFxuICAgICAgNzgsXG4gICAgICAyLFxuICAgICAgNTYsXG4gICAgICA0MixcbiAgICAgIDIwOCxcbiAgICAgIDM5LFxuICAgICAgMjI4LFxuICAgICAgMTA2LFxuICAgICAgMjA4LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zVDk2TUdFT243dWJRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMFN4bXNwM2p0NHB6Q1lJYXhEWW5KalpUTUFWMXNab3ZvWUtRaHY1Uk1STT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwYWx0a1c0YzZJWXJ4TFllKzBWRVF5NzJpNkE3dEFhMEVSdHJwKzl2d091di9Ed0dYWlFlbk5lY1hJVnZoaEtyTFNQVGhOZXl6dk1IL0ppSm5zSWNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMODVGdEtnSkc1cWdpbGxEREdoZUlicUk3NzUyOHZOb2Q2ZXZ2QVRET0FBci92ZnhENVZ6NzM0eHZBcGlSSUlhQ2k2cUF3SmZFbTJqQ0drcGRPRjRodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2Mzk2NDc1MDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoZXJhXCIsXG4gICAgXCJsaWRcIjogXCIxNjUxODA2MTcwNTY0NjU6MjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjM5NjQ3NTA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYxNDM3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVpOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWk2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0Z5M1BZbUVFdk1rb1h2RGI0WmtMMGVQWkVGYmZOUmtBMjd1cnhRZkNFMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjg1OTczNDg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJaWhyQnpCUmcwZWcwNm9oNm44OUZla08vaStQSkdNc2t0b1hWRDJPOFRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODU5NzM0ODUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIcU1tZFI0WHc0WW5Cc3A3T2FybTQyUk5KVTRsbmJ5V0dadzk4ck43MFc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODU5NzM0ODUsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkOTg1QmhheVlwbkFwM1p2dGxoRzRIN3g4NmZ6TnJHZlMvczBRS1IzTVpNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODU5NzM0ODUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MTQzNjYwODJcIn0iCn0="  // PUT your SESSION_ID 


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
