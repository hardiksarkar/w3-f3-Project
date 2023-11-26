const logoutBtn = document.getElementById("logout");
const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const myToken = document.getElementById("token");
const myPassword = document.getElementById("pass");

function getFromLocal(){
    const mydata = localStorage.getItem("userData");
    const myparsedData = JSON.parse(mydata);
    myName.innerHTML = `Full Name : ${myparsedData.name}`;
    myEmail.innerHTML = `Email : ${myparsedData.email}`;
    myToken.innerHTML = `Token : ${myparsedData.token}`;
    myPassword.innerHTML = `Password : ${myparsedData.password}`;
}
getFromLocal();

logoutBtn.addEventListener('click',()=>{
    localStorage.clear();
    window.location.href = "index.html";
})