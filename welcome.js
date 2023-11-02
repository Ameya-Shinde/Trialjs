const welcomeMsg = document.getElementById("welcome");
const logoutBtn = document.getElementById("logout");
const heading = document.getElementById("welcomeHead");

const urlString = window.location.href;
const paramString = urlString.split("?")[1];

// const loginId = paramString.split('=')[1];
const loginId = localStorage.getItem("loginId");
console.log(loginId);

logoutBtn.style.backgroundColor = "red";
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loginId");
});

const url = `http://localhost:8080/emp/get-user?loginId=${loginId}`;

async function getUser() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[0].name);
  heading.innerText = "Welcome " + data[0].name;
}

if (loginId == null) {
  welcomeMsg.innerHTML =
    '<h1>Please Login First<h1> <a href="index.html"><button class="btns">Home</button></a>';
}else{
    getUser();
}


