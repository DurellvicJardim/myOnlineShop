//login
const loginForm = document.getElementById("loginform");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", login);

async function getUsers() {
    try {
        const response = await fetch("./login.php", { method: "GET" });
        const usersArray = await response.json();
        return usersArray;
    } catch (error) {
        console.error(`Users couldn't be fetched: ${error.message}`);
    }
}

async function login(event) {
    event.preventDefault();
    const email =  emailInput.value;
    const password = passwordInput.value;
    const users = await getUsers();
    const userInDb = users.find((user) => {
    return user.email === email && user.password === password;
    });

    if (!userInDb)
    return console.error("Invalid credentials.");

    window.location = "home.html";
}

//registration
if(document.querySelector('#registerform') != null){
    document.querySelector('#registerform').addEventListener('submit', e => {
        e.preventDefault();
        let form = document.querySelector('#registerform');
        const data = new URLSearchParams();
        for (const p of new FormData(form)){
            data.append(p[0], p[1]);
        }
    
        fetch('./register.php', {
            method: 'POST',
            body: data
        })
        .catch(error => console.log(error));
    
        let register = document.getElementById('register');
        if(document.getElementById('register') != null){
            register.onclick = alert("Registration Successful! Please proceed to login.")
        }
    
    })
}


//Toggle hide
if(document.getElementById('toggle') != null){
    let button = document.getElementById('toggle');

    button.onclick = function() {
        let div = document.getElementById('password');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    };
}
