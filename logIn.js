function logIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        localStorage.uid = (firebase.auth()).currentUser.uid;
        console.log("redirecting");
        window.location.href = "./subjectMenu.html?newUser=false";
    }).catch(function(error) {
        if (error.code === 'auth/wrong-password') {
            alert('Wrong password.');
        }
        console.log(error);
    });
}

window.onload = function() {
    initializeFirebase();
    if ((firebase.auth()).currentUser != null && localStorage.uid != "") {
        console.log("Already logged in as " + localStorage.uid);
        window.location.href = "./subjectMenu.html?newUser=false";
    } else if ((firebase.auth()).currentUser != null) {
        localStorage.uid = (firebase.auth()).currentUser.uid;
        console.log("Unsuccessful log out previously");
        console.log("Already logged in as " + localStorage.uid);
        window.location.href = "./subjectMenu.html?newUser=false";
    }
    document.getElementById('quickstart-sign-in').addEventListener('click', logIn, true);
}

function initializeFirebase() {
    var config = {
        apiKey: "AIzaSyB8T4pCLKOBoP1l52ztAqvRXAGHPea_V-A",
        authDomain: "prototype2016-e5247.firebaseapp.com",
        databaseURL: "https://prototype2016-e5247.firebaseio.com",
        storageBucket: "prototype2016-e5247.appspot.com",
    };
    app = firebase.initializeApp(config);
    console.log("Initialized Firebase");
}