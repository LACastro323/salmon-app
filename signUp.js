

function handleSignUp() {
    console.log("Function handleSignUp() executing...");
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    phoneNumber = document.getElementById('phonenumber').value;
    username = document.getElementById('username').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    if (phoneNumber.length < 10) {
        alert('Please enter a phone number.');
        return;
    }
    if (username.length < 4) {
        alert('Please enter a username.');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            if (error.code == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            console.log(error);
        }).then(function() {
            console.log("Created user. Logging in...");
            addToLocalStorage();
            window.location.href = "subjectMenu.html?newUser=true";
    });
}

function addToLocalStorage() {
    console.log("Adding to local storage...");
    localStorage.uid = (firebase.auth()).currentUser.uid;
    localStorage.username = username;
    localStorage.phoneNumber = phoneNumber;
    localStorage.email = email;
}

window.onload = function() {
    if ((firebase.auth()).currentUser != null && localStorage.uid != "") {
        console.log("Already logged in as " + localStorage.uid);
        window.location.href = "subjectMenu.html?newUser=true";
    } else if ((firebase.auth()).currentUser != null) {
        localStorage.uid = (firebase.auth()).currentUser.uid;
        console.log("Unsuccessful log out previously");
        console.log("Already logged in as " + localStorage.uid);
        window.location.href = "subjectMenu.html?newUser=true";
    }
    $.getScript("https://www.gstatic.com/firebasejs/3.2.0/firebase.js", function() {
        initializeFirebase();
        document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, true);
    });
};

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