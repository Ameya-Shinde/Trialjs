const welcomeMsg = document.getElementById("welcome");
const logoutBtn = document.getElementById("logout");
const heading = document.getElementById("welcomeHead");
const userListUl = document.getElementById("userList"); 


const loginId = localStorage.getItem("loginId");
console.log(loginId);

logoutBtn.style.backgroundColor = "red";
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loginId");
});

const getUserUrl = `http://localhost:8080/emp/get-user?loginId=${loginId}`;
const getUserListUrl = 'http://localhost:8080/emp/get-user';

async function getData() {
  const user = await fetch(getUserUrl);
  const userData = await user.json();
  console.log(userData[0].name);
  heading.innerText = "Welcome " + userData[0].name;
  const userList = await fetch(getUserListUrl);
  const userListData = await userList.json();
  console.log(userListData);
  const updatedUserList = userListData.filter(user => user.loginId !== loginId);

  console.log(updatedUserList,length);
  if(updatedUserList.length === 0){
    const h3 =document.createElement("h3");
    h3.innerHTML = "You are the first one here";
    h3.style.color = "blue"
    userListUl.appendChild(h3);
  }else{
    updatedUserList.forEach((ele) => {
        const li = document.createElement("li");
        li.innerText = ele.name;
        userListUl.appendChild(li);
    })
  }
  
}

if (loginId == null) {
  welcomeMsg.innerHTML =
    '<h1>Please Login First<h1> <a href="index.html"><button class="btns">Home</button></a>';
}else{
    getData();
}


