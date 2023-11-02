
const urlString = window.location.href;
const paramString = urlString.split('?')[1];

const loginId = paramString.split('=')[1];
console.log(loginId);