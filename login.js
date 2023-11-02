const form = document.getElementById("loginForm");
const err = document.getElementById("errdiv");

console.log("hello");

form.addEventListener("submit", async (event) => {
  err.innerHTML = "";
  event.preventDefault();

  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  //  console.log(jsonData);

  const url = "http://localhost:8080/emp/login";
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
  console.log(result.loginId);

  if(response.status === 200){
    form.reset();
    window.location.href = `welcome.html?loginId=${result.loginId}`;
  }

});
