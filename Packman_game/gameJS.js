             var context ;
            var shape;
            var board;
            var score;
            var pac_color;
            var start_time;
            var time_elapsed;    
            var direct;
            var monsterImage;
            var live;
            var foodImage;
            var candy;
            var clock;
            var time;
            var iceCream;
            var positionIceCream;
            var drawIceCream;
            var monster;
            var lastPositionMonster;
            var numOfMonster;
             var interval;
             var username;
             var firstEating; 
             var firstTime;
            var run = new Audio();
            var musicStart=new Audio();

        function Stop() {
            run.currentTime=0;
            musicStart.currentTime=0;
            window.clearInterval(interval);   
            Start(firstEating,firstTime,numOfMonster,username);

        
        };
           function clearI(){
            run.pause();
            run.currentTime=0;
            musicStart.pause();
            musicStart.currentTime=0;
              window.clearInterval(interval);
           };

          
           
           


        
            function Start(eating,time1,monster1,user) {
               
              musicStart= document.getElementById("startMusic");
              musicStart.play();
                username=user;
                firstEating=eating;
                firstTime=time1;
                shape =new Object();
                context = canvas.getContext("2d");    
                board = new Array();
                score = 0;
                live=3;
                time=time1;
                numOfMonster=monster1;
                monster=new Array();
                lastPositionMonster=new Array();
                pac_color="yellow";
                drawIceCream=true;
                var cnt = 234;
                var food_remain = eating;
                var foodFor5=food_remain*0.6;
                var foodFor15=food_remain*0.3;
                var foodFor25=food_remain*0.1;
                var pacman_remain = 1;
                start_time= new Date();
                for (var i = 0; i < 18; i++) {
                    board[i] = new Array();
                    for (var j = 0; j < 13; j++) {
                        board[i][j]=0;
                        if((i==0 && j!=6)||(i==17 && j!=6)||(j==0)||(j==12)||(j==1 && (i==4 || i==13))||(j==2 && (i==2 || i==6 || i==7 || i==10 || i==11 || i==15))||(j==3 && (i==2 || i==3||i==5||i==12||i==14||1==15))||(j==4&&(i==3||i==14))||(j==5&&(i==1||i==3||i==4||i==6||i==11||i==13||i==14||i==16))||(j==6&&(i>=6&&i<=11))||(j==7&&(i==1||i==3||i==4||i==13||i==14||i==16))||(j==8&&(i!=2&&i!=8&&i!=9&&i!=15))||(j==9&&(i==4||i==13))||(j==10&&(i==2||(i>=7&&i<=10)||i==15))||(j==11&&(i==4||i==13)))
                        {
                            board[i][j] = 4;
                        }
                        else{
                        var randomNum = Math.random();
                          if (randomNum <= 1.0 * food_remain / cnt ) {
                            if(foodFor5>0)
                            {
                                foodFor5--;
                                board[i][j] = 7;
                            }
                            else if(foodFor15>0)
                            {
                                foodFor15--;
                                board[i][j] = 8;
                            }
                            else if(foodFor25>0)
                            {
                                foodFor25--;
                                board[i][j] = 9;
                            }

                            food_remain--;
                            
                        }else if ( randomNum< 1.0 * (pacman_remain + food_remain) / cnt ) {
                            shape.i=i;
                            shape.j=j;
                            pacman_remain--;
                            board[i][j] = 2;
                        } else {
                            board[i][j] = 0;
                        }
                        cnt--;
                        }
                   } 
                }
                
             
                 
                while(food_remain>0){
                    var emptyCell = findRandomEmptyCell(board);
                    if(foodFor5>0)
                            {
                                foodFor5--;
                                board[emptyCell[0]][emptyCell[1]] = 7;
                            }
                            else if(foodFor15>0)
                            {
                                foodFor15--;
                                board[emptyCell[0]][emptyCell[1]] = 8;
                            }
                            else if(foodFor25>0)
                            {
                                foodFor25--;
                                board[emptyCell[0]][emptyCell[1]] = 9;
                            }
                    food_remain--;
                }
                if(pacman_remain==1)
                {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 2;
                    pacman_remain--;
                    shape.i=emptyCell[0];
                    shape.j=emptyCell[1];
                }
               

                positionIceCream=new Object();
                positionIceCream.i=16;
                positionIceCream.j=11;

                monsterImage = new Image();
                monsterImage.src = "images/monster.png";

                candy = new Image();
                candy.src = "images/candy.png";

                clock = new Image();
                clock.src = "images/clock.png";

                iceCream = new Image();
                iceCream.src = "images/iceCream.png";

                for (var i = 1; i <=numOfMonster; i++) {
                    monster[i]=new Object();
                    lastPositionMonster[i]=new Object();
                    
                    if(i==1)
                    {
                        monster[i].i=1;
                        monster[i].j=1;
                        lastPositionMonster[i].i=1
                        lastPositionMonster[i].j=1
                    }
                    else if(i==2)
                    {
                        monster[i].i=16;
                        monster[i].j=1;
                        lastPositionMonster[i].i=16
                        lastPositionMonster[i].j=1
                    }
                    else if(i==3)
                    {
                        monster[i].i=1;
                        monster[i].j=11;
                        lastPositionMonster[i].i=1
                        lastPositionMonster[i].j=11
                    }
                }
                keysDown = {};
                addEventListener("keydown", function (e) {
                    keysDown[e.keyCode] = true;
                }, false);
                addEventListener("keyup", function (e) {
                    keysDown[e.keyCode] = false;
                }, false);
                interval=setInterval(UpdatePosition, 400);
                


               
            };


             function findRandomEmptyCell(board){
                run=document.getElementById("soundRun");
                run.play();
                var i = Math.floor((Math.random() * 17) + 1);
                var j = Math.floor((Math.random() * 12) + 1);
                while(board[i][j]!=0)
                {
                    i = Math.floor((Math.random() * 17) + 1);
                    j = Math.floor((Math.random() * 12) + 1);
                }
                return [i,j];             
             };

            function GetKeyPressed() {
                if (keysDown[38]) {
                    return 1;
                }
                if (keysDown[40]) { 
                    return 2;
                }
                if (keysDown[37]) { 
                    return 3;
                }
                if (keysDown[39]) { 
                    return 4;
                }
            };

            function Draw() {
             
                canvas.width=canvas.width; //clean board
                lblScore.value = score;
                lblTime.value = time_elapsed;
                lblLives.value=live;
                lblUser.value=user;

                for (var i = 0; i < 18; i++) {
                    for (var j = 0; j < 13; j++) {
                        var center = new Object();
                        center.x = i * 33 + 17;
                        center.y = j * 33 + 17;
                        if (board[i][j] == 2) {
                            context.beginPath();
                            if(direct=="up")
                                context.arc(center.x, center.y, 13, 1.65 * Math.PI, 1.35 * Math.PI); // half circle
                            else if(direct=="right")
                                context.arc(center.x, center.y, 13, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                            else if(direct=="left")
                                context.arc(center.x, center.y, 13, 1.15 * Math.PI, 0.85 * Math.PI); // half circle
                            else if(direct=="down")
                                context.arc(center.x, center.y, 13, 0.65 * Math.PI, 0.35 * Math.PI); // half circle
                            else context.arc(center.x, center.y, 13, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color 
                            context.fill();
                            context.beginPath();
                            if(direct=="up")
                                context.arc(center.x - 8, center.y - 4, 3, 0, 2 * Math.PI); // circle
                            else if(direct=="down")
                                context.arc(center.x - 8, center.y + 4, 3, 0, 2 * Math.PI); // circle
                            else if(direct=="left")
                                context.arc(center.x - 3, center.y - 10, 3, 0, 2 * Math.PI); // circle
                            else context.arc(center.x + 3, center.y - 10, 3, 0, 2 * Math.PI); // circle
                            context.fillStyle = "black"; //color 
                            context.fill();
                        } else if (board[i][j] == 7) {
                            var text = "5"
                            context.fillStyle = "red";
                            context.beginPath();
                            var radius = 8; // for example
                            context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
                            context.closePath();
                            context.fill();
                            context.fillStyle = "white"; // font color to write the text with
                            var font = "bold " + radius +"px serif";
                            context.font = font;
                            context.textBaseline = "top";
                            context.fillText(text, center.x-4 ,center.y-4);
                        }
                        else if (board[i][j] == 8) {
                            var text = "15"
                            context.fillStyle = "orange";
                            context.beginPath();
                            var radius = 8; // for example
                            context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
                            context.closePath();
                            context.fill();
                            context.fillStyle = "black"; // font color to write the text with
                            var font = "bold " + radius +"px serif";
                            context.font = font;
                            context.textBaseline = "top";
                            context.fillText(text, center.x-4 ,center.y-4);
                        }
                        else if (board[i][j] == 9) {
                            var text = "25"
                            context.fillStyle = "green";
                            context.beginPath();
                            var radius = 8; // for example
                            context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
                            context.closePath();
                            context.fill();
                            context.fillStyle = "white"; // font color to write the text with
                            var font = "bold " + radius +"px serif";
                            context.font = font;
                            context.textBaseline = "top";
                            context.fillText(text, center.x-4 ,center.y-4);
                        }
                        else if (board[i][j] == 4) {
                            context.beginPath();
                            context.rect(center.x-17, center.y-17, 33, 33);
                            context.fillStyle = "grey"; //color 
                            context.fill();
                        }
                        else if(board[i][j] == 5)
                        {
                            context.drawImage(candy,center.x-17,center.y-17);
                        }
                        else if(board[i][j] == 6)
                        {
                            context.drawImage(clock,center.x-17,center.y-17);
                        }
                    }
                }
                for (var i = 1; i <=numOfMonster; i++) 
                {
                    context.drawImage(monsterImage,monster[i].i*33,monster[i].j*33);
                }
                if(drawIceCream==true) 
                    context.drawImage(iceCream,positionIceCream.i*33,positionIceCream.j*33);
            };

            function UpdatePosition() {
                board[shape.i][shape.j]=0;
                var x = GetKeyPressed()
                
                if(x==1)
                {
                    if(shape.j>0 && board[shape.i][shape.j-1]!=4)
                    {
                        direct="up";
                        shape.j--;
                    }
                }
                if(x==2)
                {
                    if(shape.j<12 && board[shape.i][shape.j+1]!=4)
                    {
                        direct="down";
                        shape.j++;
                    }
                }
                if(x==3)
                {
                    if(shape.i==0&&shape.j==6)
                    {
                        direct="left";
                        shape.i=17;
                    }
                    else if(shape.i>0 && board[shape.i-1][shape.j]!=4)
                    {
                        direct="left";  
                        shape.i--;
                    }
                }
                if(x==4)
                {
                    if(shape.i==17&&shape.j==6)
                    {
                        shape.i=0;
                        direct="right";
                    }
                    else if(shape.i<17 && board[shape.i+1][shape.j]!=4)
                    {
                        direct="right";
                        shape.i++;
                    }
                }
                if(board[shape.i][shape.j]==7)
                {
                    score=score+5;
                }
                else if(board[shape.i][shape.j]==8)
                {
                    score=score+15;
                }
                else if(board[shape.i][shape.j]==9)
                {
                    score=score+25;
                }
                else if(board[shape.i][shape.j]==5)
                {
                    score = score+40;
                }
                else if(board[shape.i][shape.j]==6)
                {
                    var newT = parseInt(time)+25;
                    time=newT;
                }
                if(time_elapsed>45&&time_elapsed<45.5)
                {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 5;
                }
                if(time_elapsed>25&&time_elapsed<25.5)
                {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 5;
                }
                if(time_elapsed>35&&time_elapsed<35.5)
                {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 6;
                }
                if(time_elapsed>15&&time_elapsed<15.5)
                {
                    var emptyCell = findRandomEmptyCell(board);
                    board[emptyCell[0]][emptyCell[1]] = 6;
                }
                var currentTime=new Date();
                /*var timeRun=new Date();

                timeRun=currentTime-start_time;
                var seconds=timeRun.getSeconds();
                var getMin=timeRun.getMinuts(); 
                if(getMin!=0){
                   getMin= getMin*60;
                }
                time_elapsed=time-(getMin+seconds);*/
                var cur=(currentTime-start_time)/1000;
                time_elapsed=time-cur;
                
                board[shape.i][shape.j]=2;
                updateIceCream();
                updateMonster();
                if(time_elapsed<=0.25 ){
                
                    time_elapsed=0;
                    Draw();
                     run.pause();
                    run.currentTime=0;
                    if(score<150)
                        window.alert("You can do better");
                    else window.alert("We have a Winner");
                    window.clearInterval(interval);

                }else if(live<=0)
                {  
                   run.pause();   
                    /*document.getElementById("soundRun").pause();*/

                   document.getElementById("endMusic").play();
                   run.currentTime=0;
                    setTimeout(function(){
                    window.alert("You Lost!!")
                    }, 100);
                    window.clearInterval(interval);
                  
                }

                /*else if(score==50)///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                {
                    window.clearInterval(interval);
                    window.alert("Game completed");
                }*/
                else
                {
                    Draw();
                }
            };
            function updateIceCream()
            { 
                var ifWall;
                ifWall=true;
                while(ifWall==true)
                {
                    var randomNum = Math.floor(Math.random() * 4) + 1;
                    if(randomNum==1)
                    {
                        if(positionIceCream.j>0 && board[positionIceCream.i][positionIceCream.j-1]!=4)
                        {
                            positionIceCream.j--;
                            ifWall=false;
                        }
                        
                    }
                    if(randomNum==2)
                    {
                        if(positionIceCream.j<12 && board[positionIceCream.i][positionIceCream.j+1]!=4)
                        {
                            positionIceCream.j++;
                            ifWall=false;
                        }
                    }
                    if(randomNum==3)
                    {
                        if(positionIceCream.i>0 && board[positionIceCream.i-1][positionIceCream.j]!=4)
                        {
                            positionIceCream.i--;
                            ifWall=false;
                        }
                        
                    }
                    if(randomNum==4)
                    {
                        if(positionIceCream.i<17 && board[positionIceCream.i+1][positionIceCream.j]!=4)
                        {
                            positionIceCream.i++;
                            ifWall=false;
                        }
                        
                    }
                }
                if(board[positionIceCream.i][positionIceCream.j]==2)
                {
                    drawIceCream=false;
                    score=score+50;
                }
                
            };
            function updateMonster()
            {
                
                for (var i = 1; i <=numOfMonster; i++) 
                {

                    var distance1=1000;
                    var distance2=1000;
                    var distance3=1000;
                    var distance4=1000;
                    if(monster[i].j>0 && board[monster[i].i][monster[i].j-1]!=4)
                    {
                        if(numOfMonster==2)
                        {
                            if(i==2 && (monster[i].i==monster[i-1].i && monster[i].j-1==monster[i-1].j))
                            {}
                            else if(i==1 && (monster[i].i==monster[i+1].i && monster[i].j-1==monster[i+1].j))
                            {}
                            else if(monster[i].i!=lastPositionMonster[i].i || monster[i].j-1!=lastPositionMonster[i].j)
                                distance1 = Math.abs(monster[i].i-shape.i) + Math.abs(monster[i].j-1-shape.j);
                        }
                        else if(numOfMonster==3)
                        {
                            if(i==1 && (monster[i].i==monster[i+1].i && monster[i].j-1==monster[i+1].j||monster[i].i==monster[i+2].i && monster[i].j-1==monster[i+2].j))
                            {}
                            else if(i==2 && (monster[i].i==monster[i+1].i && monster[i].j-1==monster[i+1].j||monster[i].i==monster[i-1].i && monster[i].j-1==monster[i-1].j))
                            {}
                            else if(i==3 && (monster[i].i==monster[i-2].i && monster[i].j-1==monster[i-2].j||monster[i].i==monster[i-1].i && monster[i].j-1==monster[i-1].j))
                            {}
                            else if(monster[i].i!=lastPositionMonster[i].i || monster[i].j-1!=lastPositionMonster[i].j)
                                distance1 = Math.abs(monster[i].i-shape.i) + Math.abs(monster[i].j-1-shape.j);
                        }
                        else if(numOfMonster==1)
                        {
                            if(monster[i].i!=lastPositionMonster[i].i || monster[i].j-1!=lastPositionMonster[i].j)
                                distance1 = Math.abs(monster[i].i-shape.i) + Math.abs(monster[i].j-1-shape.j);
                        }
                    }
                    if(monster[i].j<12 && board[monster[i].i][monster[i].j+1]!=4)
                    {
                        if(numOfMonster==2)
                        {
                            if(i==2 && (monster[i].i==monster[i-1].i && monster[i].j+1==monster[i-1].j))
                            {}
                            else if(i==1 && (monster[i].i==monster[i+1].i && monster[i].j+1==monster[i+1].j))
                            {}
                            else if(monster[i].i!=lastPositionMonster[i].i || monster[i].j+1!=lastPositionMonster[i].j)
                                distance2 = Math.abs(monster[i].i-shape.i) + Math.abs(monster[i].j+1-shape.j);
                        }
                        else if(numOfMonster==3)
                        {
                            if(i==1 && (monster[i].i==monster[i+1].i && monster[i].j+1==monster[i+1].j||monster[i].i==monster[i+2].i && monster[i].j+1==monster[i+2].j))
                            {}
                            else if(i==2 && (monster[i].i==monster[i+1].i && monster[i].j+1==monster[i+1].j||monster[i].i==monster[i-1].i && monster[i].j+1==monster[i-1].j))
                            {}
                            else if(i==3 && (monster[i].i==monster[i-2].i && monster[i].j+1==monster[i-2].j||monster[i].i==monster[i-1].i && monster[i].j+1==monster[i-1].j))
                            {}
                            else if(monster[i].i!=lastPositionMonster[i].i || monster[i].j+1!=lastPositionMonster[i].j)
                                distance2 = Math.abs(monster[i].i-shape.i) + Math.abs(monster[i].j+1-shape.j);
                        }
                        else if(numOfMonster==1)
                        {
                            if(monster[i].i!=lastPositionMonster[i].i || monster[i].j+1!=lastPositionMonster[i].j)
                                distance2 = Math.abs(monster[i].i-shape.i) + Math.abs(monster[i].j+1-shape.j);
                        }
                    }
                    if(monster[i].i>0 && board[monster[i].i-1][monster[i].j]!=4)
                    {
                        if(numOfMonster==2)
                        {
                            if(i==2 && (monster[i].i-1==monster[i-1].i && monster[i].j==monster[i-1].j))
                            {}
                            else if(i==1 && (monster[i].i-1==monster[i+1].i && monster[i].j==monster[i+1].j))
                            {}
                            else if(monster[i].i-1!=lastPositionMonster[i].i || monster[i].j!=lastPositionMonster[i].j)
                                distance3 = Math.abs(monster[i].i-1-shape.i) + Math.abs(monster[i].j-shape.j);
                        }
                        else if(numOfMonster==3)
                        {
                            if(i==1 && (monster[i].i-1==monster[i+1].i && monster[i].j==monster[i+1].j||monster[i].i-1==monster[i+2].i && monster[i].j==monster[i+2].j))
                            {}
                            else if(i==2 && (monster[i].i-1==monster[i+1].i && monster[i].j==monster[i+1].j||monster[i].i-1==monster[i-1].i && monster[i].j==monster[i-1].j))
                            {}
                            else if(i==3 && (monster[i].i-1==monster[i-2].i && monster[i].j==monster[i-2].j||monster[i].i-1==monster[i-1].i && monster[i].j==monster[i-1].j))
                            {}
                            else if(monster[i].i-1!=lastPositionMonster[i].i || monster[i].j!=lastPositionMonster[i].j)
                                distance3 = Math.abs(monster[i].i-1-shape.i) + Math.abs(monster[i].j-shape.j);
                        }
                        else if(numOfMonster==1)
                        {
                            if(monster[i].i-1!=lastPositionMonster[i].i || monster[i].j!=lastPositionMonster[i].j)
                                distance3 = Math.abs(monster[i].i-1-shape.i) + Math.abs(monster[i].j-shape.j);
                        }
                    }
                    if(monster[i].i<17 && board[monster[i].i+1][monster[i].j]!=4)
                    {
                        if(numOfMonster==2)
                        {
                            if(i==2 && (monster[i].i+1==monster[i-1].i && monster[i].j==monster[i-1].j))
                            {}
                            else if(i==1 && (monster[i].i+1==monster[i+1].i && monster[i].j==monster[i+1].j))
                            {}
                            else if(monster[i].i+1!=lastPositionMonster[i].i || monster[i].j!=lastPositionMonster[i].j)
                                distance4 = Math.abs(monster[i].i+1-shape.i) + Math.abs(monster[i].j-shape.j);
                        }
                        else if(numOfMonster==3)
                        {
                            if(i==1 && (monster[i].i+1==monster[i+1].i && monster[i].j==monster[i+1].j||monster[i].i+1==monster[i+2].i && monster[i].j==monster[i+2].j))
                            {}
                            else if(i==2 && (monster[i].i+1==monster[i+1].i && monster[i].j==monster[i+1].j||monster[i].i+1==monster[i-1].i && monster[i].j==monster[i-1].j))
                            {}
                            else if(i==3 && (monster[i].i+1==monster[i-2].i && monster[i].j==monster[i-2].j||monster[i].i+1==monster[i-1].i && monster[i].j==monster[i-1].j))
                            {}
                            else if(monster[i].i+1!=lastPositionMonster[i].i || monster[i].j!=lastPositionMonster[i].j)
                                distance4 = Math.abs(monster[i].i+1-shape.i) + Math.abs(monster[i].j-shape.j);
                        }
                        else if(numOfMonster==1)
                        {
                            if(monster[i].i+1!=lastPositionMonster[i].i || monster[i].j!=lastPositionMonster[i].j)
                                distance4 = Math.abs(monster[i].i+1-shape.i) + Math.abs(monster[i].j-shape.j);
                        }
                    }
                    lastPositionMonster[i].i=monster[i].i;
                    lastPositionMonster[i].j=monster[i].j;
                    var min = Math.min(distance1,distance2,distance3,distance4);
                    if(min==distance1)
                        monster[i].j--;
                    else if(min==distance2)
                        monster[i].j++;
                    else if(min==distance3)
                        monster[i].i--;
                    else if(min==distance4)
                        monster[i].i++;
                    if(board[monster[i].i][monster[i].j]==2)
                    {
                        live--;
                        Draw();
                        board[monster[i].i][monster[i].j]=0;
                        var emptyCell = findRandomEmptyCell(board);
                        board[emptyCell[0]][emptyCell[1]] = 2;
                        shape.i=emptyCell[0];
                        shape.j=emptyCell[1];
                        for (var i = 1; i <=numOfMonster; i++) {
                            monster[i]=new Object();
                            lastPositionMonster[i]=new Object();
                    
                            if(i==1)
                            {
                                monster[i].i=1;
                                monster[i].j=1;
                                lastPositionMonster[i].i=1
                                lastPositionMonster[i].j=1
                            }
                            else if(i==2)
                            {
                                monster[i].i=16;
                                monster[i].j=1;
                                lastPositionMonster[i].i=16
                                lastPositionMonster[i].j=1
                            }
                            else if(i==3)
                            {
                                monster[i].i=1;
                                monster[i].j=11;
                                lastPositionMonster[i].i=1
                                lastPositionMonster[i].j=11
                            }
                        }
                    }
                }
                
            };
   