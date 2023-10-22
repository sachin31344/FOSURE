const firebaseConfig = {
    apiKey: "AIzaSyALHxOXAPQ8owtzEjzlmx4iDCLk-lFbs8c",
    authDomain: "login-a0f85.firebaseapp.com",
    projectId: "login-a0f85",
    storageBucket: "login-a0f85.appspot.com",
    messagingSenderId: "186462657690",
    appId: "1:186462657690:web:3fa6eeaeb5bca2d97b9323"
  };
  
  //firebase variables
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  
  //registerfirebase
  function register(){

    full_name = document.getElementById('nm').value
    email = document.getElementById('em').value
    password = document.getElementById('pass').value


    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
      database_ref.child('user/' + user.uid).set(user_data, function(error) {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          alert('User Created!!');
        }
      });
    })
    .catch(function(error) {
      var error_code = error  .code
      var error_message = error.message
      alert(error_message)
    })
  }
  
  
  
  
