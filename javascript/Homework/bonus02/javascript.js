
// Task 2
// Make a simple login application
// Declare an array named users, that will hold usernames and serve you as a fake database
// Declare another array that will keep the passwords
// Declare two fields one for username and one for password, and one login button
// On login button click if the username and the password from the input field match the
//  combination: users[i], passwords[j] print in <h2> tag “Hello username” else print “Wrong username”

let arrayUsername = ["David","usre12","Dragan","Danaya"];
let arrayPassword = ["test1","test2","test3","test4"];

let login = document.getElementById("login");

login.addEventListener("click",function(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let check = false;
    console.log(username,password );

    for(i=0; i< arrayUsername.length ; i++){
        console.log(password );

        if(arrayUsername[i] == username){
           
            if(arrayPassword[i]== password){
                alert(`Hello ${username}`);
                check = true;
            }
        }

        

    }

    if(check == false){
        alert(`Wrong username`);
    }

})
