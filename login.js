const form = document.getElementById("loginForm");
const err = document.querySelector(".result");

form.addEventListener("submit", async (event) => {
  err.innerHTML = "";
  event.preventDefault();

  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  //  console.log(jsonData);

  const url = "http://3.7.111.238:8000/emp/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  let result = await response.json();
  console.log("Status Code : " + response.status);
  console.log(result);

  if(response.status === 200){
    form.reset();
    localStorage.setItem("loginId",result[0].loginId);
    window.location.href = `welcome.html?loginId=${result[0].loginId}`;
  }else{
    result.forEach((ele) =>{
        const p = document.createElement("p");
        p.innerText = ele.error;
        err.appendChild(p);
    });
  }

});
