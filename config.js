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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349058281724";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_29_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDMzLFxuICAgICAgICA0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNQlMzSlE3NEo5QVlKYjhGZGpjWGlEQldEVnF3WDQzMjlMRXFxTGJBY2NBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXRkVqN0x4cVQtYWIxZjJ3V0pQRnB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEyYTJiNzJlLWMwMjgtNDU0MC04MzRiLWI3MzViOGI0ZGM2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICA0NSxcbiAgICAgIDIwOCxcbiAgICAgIDIxNyxcbiAgICAgIDIwOSxcbiAgICAgIDE4NixcbiAgICAgIDk1LFxuICAgICAgMTc3LFxuICAgICAgMTIzLFxuICAgICAgNjEsXG4gICAgICAyMjYsXG4gICAgICA0MixcbiAgICAgIDIwLFxuICAgICAgMjMwLFxuICAgICAgMTAxLFxuICAgICAgNjcsXG4gICAgICA0OSxcbiAgICAgIDIzOCxcbiAgICAgIDQ2LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDU5LFxuICAgICAgMTk3LFxuICAgICAgMjU1LFxuICAgICAgMjI4LFxuICAgICAgOTYsXG4gICAgICAyMjQsXG4gICAgICAxNTksXG4gICAgICAxNzUsXG4gICAgICAxMzAsXG4gICAgICAxMTYsXG4gICAgICAxMzUsXG4gICAgICA1NixcbiAgICAgIDExMCxcbiAgICAgIDE4MCxcbiAgICAgIDEyMCxcbiAgICAgIDIxOCxcbiAgICAgIDIyMixcbiAgICAgIDYxLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDlXRkxCUTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTgyODE3MjQ6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzODg0NjgyMjkzNDYxOjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2K2twd0JFTFhEazdRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHZVTHA1YnpWc2wxaFZpSzlnT2taL0Jma2k5a3k1djQvSEswM1UxdThrRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGWFducFZIVjc0bHNlUllLUlZaZndFdmZ4cyt5YU4zWTlsaGpGSEZYQXNMcTVoOG1sUUU4MlhHZFRNN2MvdnBJYVNQMTdXNFVKK1dnSVB0WUIxS21DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVUlBLeDRiVjMxYTQwSEsydUhrZFJDamppL0RkQldoSGhYYWovWlBxVm9LSER6R2o5eUt6UGtzS2U3QUtHS0tnd093VDVMNkdUMkZzOGFab0N3dFFCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU4MjgxNzI0OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTg0NTczXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
