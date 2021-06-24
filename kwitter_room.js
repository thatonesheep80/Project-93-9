//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyB5-ShdzpTAWwF_0tXTqyZF7tjHVDTbu_s",
      authDomain: "kwitter-a83bf.firebaseapp.com",
      databaseURL: "https://kwitter-a83bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-a83bf",
      storageBucket: "kwitter-a83bf.appspot.com",
      messagingSenderId: "31248137496",
      appId: "1:31248137496:web:f1aed82f200d72e189f26d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    user_name = localStorage.getItem("Username");
    document.getElementById("user_name_welcome").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id);' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}