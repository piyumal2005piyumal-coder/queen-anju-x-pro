//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBBUDM0YUJvZytTUTRXT1ozbkMwRG9EalAxYituTFhoakZTN2JFejlrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3prcjJtVTdiRnNaSGRjRWhWQkRBTEExYXovSmtkS1NuMXlaRHdjWUFVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTjRtVWhoNURuR1JCZ05JSWp2Mzg2bUlxak8vUGpuQ3RYL0RpeEhJZ0hVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSUVlcTZBY1NSVktCVXN6SWFaNzNnWmZJMFU1dzluYmF6N1hESnZPQW1VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHMFAvR3lpWEx6ajlhTGFvZTRhN2R6WmhpbHFzaUdKSitCY1pDbmdUbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg4ZExvZGR3ck04OFg2WnJ3dFByYlZEYkxrK3FDWE8xU1hZRmNGVkVremM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05zekhvYWo4Mm54ZXZja3JROXVSSktaYURGVWhrWWZ1T1hublJHbzFHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzFmcGxqSzQrN0crTGlCSkZ5M3RkTGhMV2I4RWxsV3RjbmxVZ3VJaTMwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGVmFONDZrUmx0bGJtanVrM1pzd0tONlh2STRjWDh3YythSXVNUE11OUNnemVqdDJVT1RNK3VWUFhUVUVTRUMyY3VoU25YUUIvWUFPcjdNelNsTkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6InVnT3FNMmU2akJFN3ZLNHZGdDloNGhjdkZaaTBwcUZXTCtheEdYMGNRNzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjEyMTM5MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkU2NjlERDFBNEQ0MTIxQzc0QURCQzczMTg4RkVDNEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDYyNzIwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjEyMTM5MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUMyRDVEQ0E0MDhENzBCRDczM0MxNTk0MDU5NDUzNTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDYyNzIwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjEyMTM5MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzc3OEFDNzEzODk3RkFDMzg3OTFFQjRBMDdCRTY5NDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDYyNzIwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieHJua282bFhTdy1DV0tmRjNkcDZEUSIsInBob25lSWQiOiJiZTlhYjY3MS1jMzkxLTRjMDItYTdkZi0zYjMyNWUxZjljZmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHFHTURvaEpPak1uTjNQQlY4Y1NEYVQ3aThFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhTUDI1WlVhOGc5OTBzZWxSeDVobmdZN1R0Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4WU1WQUJBUiIsIm1lIjp7ImlkIjoiOTQ3NjEyMTM5MDY6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQYSBQaSIsImxpZCI6IjE2NzI1NTI3MDc1NjU1MToyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVRtdEpJQkVQYjQxY1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMVVvb2xsd0ZyaVY1THNldHZRNEszMDFHTDFZNmdhbzZ5TEZaV1E2SGF4OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVjRFQmlwUlVqV2Q0QisvcGU0SG9tYUdkSEUvK2NpU09DYTdQeE9WSUR3LzBIWGZUN2kveHE3cjZwcFpROGZHelZhWS83d1RCWGlXcjZZZk9pdE9sQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Im1pK0J5R2JseVRxU1o3K3hQWi9YSTFydWQ2eTBBYmVBbkNaSkcxL1dleitZaVJLNFhqWnQvMkxXSjNZWmw1SXNOQTJzZmFWM3dWalFHWXVtcVVqYUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjEyMTM5MDY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkVktLSlpjQmE0bGVTN0hyYjBPQ3Q5TlJpOVdPb0dxT3NpeFdWa09oMnNmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ2MjcyMDMsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHRZIn0=",
SUDO: process.env.SUDO || ["94717775628","94758775628"],
PORT: process.env.PORT || "8000",
FOOTER: process.env.FOOTER || "> QUEEN ANJU XPRO\n> Developed by Mr. Rashmika\n> GitHub Repository: github.com/Mrrashmika/QUEEN_ANJU_xPro\n🌟 Premium Version | Advanced Features | Secure & Reliable 🌟\n© 2025 QUEEN ANJU XPRO. All rights reserved.",
};
