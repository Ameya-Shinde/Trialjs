const empTblData = document.getElementById("empTblData");

const url = 'http://3.7.111.238:8000/emp/get-user';

async function getEmpData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.length);

    if(data.length != 0){
        data.forEach((ele) =>{
            const tr = document.createElement("tr")
            tr.innerHTML = `<td>${ele.empId}</td>
            <td>${ele.name}</td>
            <td>${ele.loginId}</td>
            <td>${ele.dob}</td>
            <td>${ele.gender}</td>
            <td>${ele.address}</td>
            <td>${ele.city}</td>
            <td>${ele.state}</td>`;
            empTblData.appendChild(tr);
        })
    }
}

getEmpData();