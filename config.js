//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2347077816250";
global.sudo = process.env.SUDO || "2347077816250";
global.owner = process.env.OWNER_NUMBER || "2347077816250";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VZb1lkV3VKNm9mbWdMZVRFcnc3azArd2Z1MHlKekJVdXBnQyttbmkwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJvU2I0aTZBQXhZdnhDVUwzanNWL2ZqVVZyZzZnN2ZLTk0wbENnM05YWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTREp1RTlSM3RscVNGYnpaT1pTQ3FtOVBKdC9XWFBSUUI2UFZUdDB4OVY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4S1VkUmZLdnFDa3p4dUNFOW9OTFc0eGJGUmtzWk13Yi9KYTNieE9IR2tNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOYUNzZm5BZUYyVUJ0SHBNTUlieFNZK0xSRWJsMEFYSmJyYmV0SlZqbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIRFN0MXNJKzZZcFVoU0NheEdCa3pyNXZ3WU1ZUlVLNmVGeXRkTkc0bG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlMYTVZb1B2cmc4R3ZHYmdaVFhPLzIya1lLa1Jic1NTUk53YTFaaUkyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzRwTm1TWCtEYmV1bUtoRWdKbEd4d0RuRmY2cGRWUUpVemNPc0hMeEZ3MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitWOWtCN1Ztci9WaXBQOTNqTmxJaGxGWVZYbU4waW1oMEFzYjByTkNmYWJHaXc2OC8wOGJpYnlkN1VyZ09tVTNIZjFRS0JYZDltendxUEN4dThrN0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJWZjZYbDFmdGVRWHFIeEZ6S2xrVEU0QkVlOU5jTEs2OFRnUi9RY1FNN2hvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBT1dEWWpPRVNYV3VIc2lyWjdNUm1nIiwicGhvbmVJZCI6ImZlZTU3ZTcxLTQ2OGUtNGJlNS05OTRjLWQ4ODFkNDE0MzRjZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURUxzVFZTN0lMQ2lwMGZuekFObHFXcEtIZkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0V0R3JOMnN1ZVJ2MGFUSTBSTThhTW5SSjkwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJZRUpEUzY0IiwibWUiOnsiaWQiOiIyMzQ3MDc3ODE2MjUwOjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRoZSBSZWFsIFZpc2lvbiBPZiBTaGFycCBCbGFkZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTdNeGVBRkVOYjdrTHNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkNqRy9EOUxMT2xZN2t0TDdIREhpaGI3dHl3VXpVY2Jvd0hJNnhnOVpVVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoic3lOR1hJUXhjZG1wMWYrT0Nxd0RlaDAvZjNzU2dTVm9IN3pCek1EUEpYYi9MeUc1RTZzbCt1NGV4MkUxdnZlN2xra2Y5NnlDQlJnaTVIK2NWcnNuQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjVibE9MZSs3MGRqTDlVdWwxL2dJaEsydEpMQ1loZllkT3QyNDdxZE1iWlMwKytWL0FaZ2xTZTNyVWF5bCtiWklicTlGdm1Xclc2S2U4SWx5eDlkV0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA3NzgxNjI1MDoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUW94dncvU3l6cFdPNUxTK3h3eDRvVys3Y3NGTTFIRzZNQnlPc1lQV1ZGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NjIyNjkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBCbyJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
