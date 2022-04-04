// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-storage.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc  } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCI5SdwdXMQeu3y7AQPZnkcZH_GmIcSgKw",
    authDomain: "login-9a8b6.firebaseapp.com",
    databaseURL: "https://login-9a8b6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "login-9a8b6",
    storageBucket: "login-9a8b6.appspot.com",
    messagingSenderId: "663312681266",
    appId: "1:663312681266:web:aaff10c5e0a58994ceaf2b",
    measurementId: "G-XTC30ZEDBX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const realdb = getDatabase();
const db = getFirestore();



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