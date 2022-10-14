
const firebaseConfig = {
    apiKey: "AIzaSyAb7uHUWhQo7YJU565gyksitX8uBU8FPJY",
    authDomain: "keeptutors-acd8b.firebaseapp.com",
    databaseURL: "https://keeptutors-acd8b-default-rtdb.firebaseio.com",
    projectId: "keeptutors-acd8b",
    storageBucket: "keeptutors-acd8b.appspot.com",
    messagingSenderId: "766742271126",
    appId: "1:766742271126:web:95962b9de95c75854adeb7",
    measurementId: "G-73BE6RQBW9"
  };
  //intialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var Firstname = getElementVal("form3Examplev2");
  var Lastname = getElementVal("form3Examplev3");
  var Age = getElementVal("age");
  var Male = getElementVal("option1");
  var Female = getElementVal("option2");
  var SCU = getElementVal("form3Examplev4");
  var GCS = getElementVal("form3Examplev5");
  var Address = getElementVal("form3Examplea2");
  var AddInformation = getElementVal("form3Examplea3");
  var ZipCode = getElementVal("form3Examplea4");
  var Place = getElementVal("form3Examplea5");
  var Country = getElementVal("form3Examplea6");
  var Code = getElementVal("form3Examplea7");
  var PhoneNumber = getElementVal("form3Examplea8");
  var Email = getElementVal("form3Examplea9");

  saveMessages(Firstname, Lastname,Age,Male,Female,SCU,GCS,Address,AddInformation,ZipCode,Place,Country,Code,PhoneNumber,Email);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (Firstname, Lastname,Age,Male,Female,SCU,GCS,Address,AddInformation,ZipCode,Place,Country,Code,PhoneNumber,Email) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Firstname: Firstname,
    Lastname: Lastname,
    Age: Age,
    Male:Male, 
    Female:Female,
    SCU:SCU,
    GCS:GCS,
    Address:Address,
    AddInformation:AddInformation,
    ZipCode:ZipCode,
    Place:Place,
    Country:Country,
    Code:Code,
    PhoneNumber:PhoneNumber,
    Email:Email,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};




  