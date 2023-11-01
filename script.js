console.log("hello");

async function getdata(){
    const url = 'http://3.7.111.238:8080/user/get-users'
    const data = await fetch(url);
    const users = await data.json();

    users.forEach(ele => {
        console.log(ele.firstName);
    });
}

getdata();