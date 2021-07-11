console.log(firebase);
//getting the databa from the user

let name, roll, phone;

function readData() {
    name = document.getElementById("uname").value;
    roll = document.getElementById("roll").value;
    phone = document.getElementById("phone").value;
}

let register = document.getElementById("register");
let read = document.getElementById("read");
let update = document.getElementById("update");
let del = document.getElementById("delete");

//inserting data into firebase real time database

register.addEventListener("click", () => {
    readData();
    let dbRef = firebase.database().ref().child("users");
    dbRef.child(roll).set({
        name: name,
        roll: roll,
        phone: phone
    }).then(() => {
        console.log("Registered Successfully");
    }).catch((error) => {
        console.log(error);
    });
})

//Reading the data from real time database

// let dbRef = firebase.database().ref("users");

// dbRef.on("value", (snapshot) => {
//     console.log(snapshot.val())
// })

// child_added
// child_removed
// child_changed

// value

read.addEventListener("click", () => {
    readData();
    let dbRef = firebase.database().ref().child("users/" + roll);
    dbRef.on("value", (snap) => {
        console.log(snap.val().name, snap.val().phone);
    })
    console.log("Read");
})

//update the data in the firebase real time database

update.addEventListener("click", () => {
    readData();
    let dbRef = firebase.database().ref().child("users/" + roll);

    dbRef.update({
        name: name,
        phone: phone,
        loc: 'Hyderabad'
    }).then(() => {
        console.log("Updated Successfully");
    }).catch((error) => {
        console.error(error);
    })
})

//delete record from the realtime datbase

del.addEventListener("click", () => {
    readData();

    let dbRef = firebase.database().ref().child("users/" + roll);
    dbRef.remove();
    console.log("Deleted");
})