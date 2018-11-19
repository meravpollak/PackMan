

function onLoaded(){
        //hide all sections    
    ShowMenu('Welcome');
    
}

function ShowMenu(id){
        //hide all sections
       
        var id5 = document.getElementById("Register");
        id5.style.visibility="hidden";
        var id1 = document.getElementById("Login");
        id1.style.visibility="hidden";
        var id2 = document.getElementById("getInToGame");
        id2.style.visibility="hidden";
        var id3 = document.getElementById("gameTime");
        id3.style.visibility="hidden";
        var id4 = document.getElementById("Welcome");
        id4.style.visibility="hidden";
        

         clearI();
        //show 
      var openTab = document.getElementById(id);
        openTab.style.visibility="visible";
}



$( function() {
            $( "#About" ).dialog({
              autoOpen: false,
              show: {
                effect: "blind",
                duration: 1000
              },
              hide: {
                effect: "explode",
                duration: 1000
              }
            });
            $("#opener").on("click", function() {
              $( "#About" ).dialog( "open" );
            });
          });
 //function ShowMenu(){
        //hide all sections
     //   var openTab = document.getElementById("Welcome");
       // openTab.style.visibility="visible";

       /* var id = document.getElementById("Reg/*ister");
        id.style.visibility="hidden";
        var id = document.getElementById("Login");
        id.style.visibility="hidden";
        var id = document.getElementById("getInToGame");
        id.style.visibility="hidden";
         var id = document.getElementById("gameTime");
        id.style.visibility="hidden";

        //show only the menu
     
//};*/


//function goToregister{
  //  $(".tabcontent").hide();
    //$("#Register").show();
//}
/*
function goToLogin{
    $(".tabcontent").hide();
    $("#Login").show();
}

function goToMenu{
    $(".tabcontent").hide();
    $("#Welcome").show();
}*/


/*
//function openTab(evt, tabname) {
  
    var i, tabcontent, tablinks;
     

    if(tabname=="Register"){
        var id = document.getElementById("Register");
         id.style.visibility="visible";
        var id = document.getElementById("Welcome");
        id.style.visibility="hidden";
        var id = document.getElementById("Login");
        id.style.visibility="hidden";
    }
     if(tabname=="Welcome"){
        var id = document.getElementById("Welcome");
         id.style.visibility="visible";
        var id = document.getElementById("Register");
        id.style.visibility="hidden";
        var id = document.getElementById("Login");
        id.style.visibility="hidden";
    }
      if(tabname=="Login"){
        var id = document.getElementById("Login");
         id.style.visibility="visible";
        var id = document.getElementById("Welcome");
        id.style.visibility="hidden";
        var id = document.getElementById("Register");
        id.style.visibility="hidden";
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
*/
//};






        // Get the element with id="defaultOpen" and click on it
        //document.getElementById("defaultOpen").click();
      