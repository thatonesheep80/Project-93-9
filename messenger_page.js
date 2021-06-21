//YOUR FIREBASE LINKS

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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
                like : 0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}