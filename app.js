const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const fullname=document.getElementById("fullname")
const email=document.getElementById("email")
// const username=document.getElementById("username")
const password=document.getElementById("password")
const cnfm_pswd=document.getElementById("cnfm_pswd")


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUP=()=>{
    userObj={
        fullname:fullname.value,
        email:email.value,
        // username:username.value,
        password:password.value,
        cnfm_pswd:cnfm_pswd.value,
    }
    const user=JSON.parse(localStorage.getItem("users"))||[]
    const userindex=user.findIndex((value,ind)=>{
    return value.email===userObj.email
    })
    if (userindex===-1){
        user.push(userObj)
        localStorage.setItem("users",JSON.stringify(user))
        alert("successfully registered")
        // window.location.assign('login.html')
		container.classList.remove("right-panel-active");
    }
    else{
        alert("email already exists")
    }
    if(password.value!==cnfm_pswd.value){
        alert("password did not match")
    }

}


const login = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
		window.location.assign('home.html')

    } else {
        alert("invalid")
    }

}




// Show userData on Dasboard
const setData = () => {
    let uuname = document.getElementById("uuname");
    let uuemail = document.getElementById("uuemail");
    let uupsw = document.getElementById("uupsw");
    let unn = document.getElementById("unn");
    let {username, email, password, un} = JSON.parse(localStorage.getItem("currentUser"));
    
   
    uuname.innerHTML = `${username}`;
    uuemail.innerHTML = `${email}`;
    uupsw.innerHTML = `${password}`; 
    unn.innerHTML = `${username}`; 
   }
   
   
   
   // Logout User
   const logout = () => {
    localStorage.removeItem("currentUser")
    window.location.assign("./login.html")
   }



showPas=(e)=> {

    var password = document.getElementById("password")

    if (password.value == "") {
        e.disabled = true;
    }
    else {

        if (e.className == "far fa-eye-slash") {
            password.type = "text";
            e.className = "far fa-eye";
        }
        else {
            e.className = "far fa-eye-slash";
            password.type = "password";

        }
    }
}