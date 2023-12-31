const form = document.getElementById("regForm");
const resDiv = document.querySelector(".result");

form.addEventListener("submit", async (event) => {
  resDiv.innerHTML = `<i class="fa-solid fa-spinner fa-spin fa-2xl"></i>`;
  event.preventDefault();

  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  //   console.log(jsonData);

  const url = "http://3.7.111.238:8000/emp/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
  console.log("Status Code : " + response.status);

  let result;

  if (response.status === 400) {
    result = await response.json();
    result.forEach((ele) => {
      const p = document.createElement("p");
      p.innerText = ele.error;
      resDiv.appendChild(p);
    });
  } else {
    result = await response.text();
    const span = document.createElement("span");
    span.innerText = result;
    span.style.color = "green";
    resDiv.innerHTML = "";
    resDiv.appendChild(span);
    form.reset();
  }

  console.log(result);
});
