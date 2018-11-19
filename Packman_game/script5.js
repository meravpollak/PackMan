
var users=[];

var user;
var newUser=["a","a"];
	users.push(newUser);

var newUser2=["test2017","test2017"];
	users.push(newUser2);

	function submitForm ()
		{	
			var username = document.forms["form1"]["username"].value;
			var password=document.forms["form1"]["password"].value;
			var firstname=document.forms["form1"]["firstname"].value;
			var lastname=document.forms["form1"]["lastname"].value;
			var mail=document.forms["form1"]["email"].value;
			var bday=document.forms["form1"]["Date"].value;
			
			var pwc=/^(?=.*\d)(?=.*[A-Za-z]).{8,20}$/; 
			atpos = mail.indexOf("@");
			dotpos = mail.lastIndexOf(".");
			var alphaExp = /[0-9]/;
			

			for (var i = 0; i < users.length; i++) {
			  if (username.localeCompare(users[i][0])==0){
					alert("user name allready exsist");
			  }
			}

          if (password.length<8){
				alert("password contains 8 characters");
			}
			else if(!password.match(pwc)){
				alert("password contains chars and digits");
			}
			else if (atpos < 1 || ( dotpos - atpos < 2 )){
			  alert("e-mail error");
			}
			else if (firstname.match(alphaExp)){
				alert("first name can only contain character");
			}
			else if (lastname.match(alphaExp)) {
				alert("last name can only contain character");
			}
			else {
			//	img.style.visibility = 'visible';
				var newUser=[username,password];
				users.push(newUser);
			}
			
		};


	function login()
		{   
			
				
		    user=document.getElementById("username1").value;
			var password=document.getElementById("password1").value;
	
			var index=-1;
			for (var i = 0; i < users.length; i++) {
			  if (user.localeCompare(users[i][0])==0){
				  index=i;
			  }
			}
			if (index==-1){
				alert("User name not found,You need to register");
			}
			else {
				if(password.localeCompare(users[index][1])==0){
					ShowMenu('getInToGame'); 
				}
				else{
					alert("password doesn't match");
				}
			}
			

				document.getElementById("loginForm").reset();

		};


	function resetFunction() {
    		document.getElementById("myForm").reset();
		};


		function startplaying(eating,time,monster,user){

 		ShowMenu('gameTime');
 		Start(eating,time,monster);


			}

	//function getInGame()
	//	{    
	/*	    
		 //	$("#Login").hide();
		 	var id = document.getElementById("Login");
         	id.style.visibility="hidden";
			//var id = document.getElementById("Login");
      	    //id.style.visibility="hidden";
			var id = document.getElementById("getInToGame");
         	id.style.visibility="visible";
		  //  document.getElementById("getInToGame").innerHTML = "press key";
		};

		function startplaying(){

			$("#getInToGame").hide();
			$("#gameTime").visible();
			
            
		}*/