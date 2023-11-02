const logoutBtn = document.getElementById("logout");

logoutBtn.style.backgroundColor = "red";

logoutBtn.addEventListener("click", () =>{
    localStorage.removeItem("loginId");
})