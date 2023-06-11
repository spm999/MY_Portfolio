const firebaseConfig = {
    apiKey: "AIzaSyBpFGZHsggscGLvxz43la_nr9z2q3kDWeU",
    authDomain: "portfoliocontact-8c7db.firebaseapp.com",
    databaseURL: "https://portfoliocontact-8c7db-default-rtdb.firebaseio.com",
    projectId: "portfoliocontact-8c7db",
    storageBucket: "portfoliocontact-8c7db.appspot.com",
    messagingSenderId: "257361512503",
    appId: "1:257361512503:web:44b3ff6b3239e532af17b2",
    measurementId: "G-NCYD7HBXFF"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Reference messages collection
let messagesRef = firebase.database().ref("messages");

//listen to form
document.getElementById("form_contact").addEventListener("submit", submitForm);



function submitForm(e) {
    e.preventDefault();

    // get Values
    let name = getInputVal("name");
    let email = getInputVal("email");
    let message = getInputVal("message");

    //save message

    saveMessage(name, email, message);
    window.alert("You have successfully sent your message")
        //clear form
    document.getElementById("form_contact").reset();

}
//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,

        email: email,
        message: message,
    });
}