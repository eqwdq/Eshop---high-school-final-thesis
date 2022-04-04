let userlink = document.getElementById('userlink');
    let signoutlink = document.getElementById('signoutlink');
    let currentUser = null;

    function getUsername(){
        let keepLoggedIn = localStorage.getItem("keepLoggedIn");

        if(keepLoggedIn == "yes"){
            currentUser = JSON.parse(localStorage.getItem('user'))
        }
        else {
            currentUser = JSON.parse(sessionStorage.getItem('user'));
        }
    }
    signoutlink.addEventListener('click', signOut)
    function signOut() {
        sessionStorage.removeItem('user');
        localStorage.removeItem('user');
        localStorage.removeItem('keepLoggedIn');
        window.location = "eshop-products-HOME - Copy.html";
    }

    window.onload = function() {
        getUsername();
        if(currentUser == null){
            userlink.innerText = "Nový účet";
            userlink.classList.replace("nav-link", "btn");
            userlink.classList.add("btn-outline-primary");
            userlink.href = "register_test_new.html"

            signoutlink.innerText = "Prihlásiť sa";
            signoutlink.classList.replace("nav-link", "btn");
            signoutlink.classList.add("btn-outline-success");
            signoutlink.href = "login_test_new.html"
        }

        else {
            userlink.style.display = "none";

            signoutlink.innerText = "Odhlásiť sa";
            signoutlink.classList.replace("nav-link", "btn");
            signoutlink.classList.add("btn-outline-success");
            signoutlink.classList.add("btn");
            signoutlink.href = "javascript:Signout()";
        }
    }