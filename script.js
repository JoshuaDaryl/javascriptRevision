/*The next 4 functions relate to "Allowing for CSS style changes with "if" functions" heading and contents*/

function textChange(letter){
    if(letter == a){
        textChangeA();
    }
    else if (letter == b){
        textChangeB();
    }
    else{
        textChangeC();
    }
}

function textChangeA(){
    let buttonA = document.getElementById("a");
    buttonA.style = "background-color:green;";
    let buttonB = document.getElementById("b");
    buttonB.style = "background-color:white";
    let buttonC = document.getElementById("c");
    buttonC.style = "background-color:white";
    let text = document.getElementById("textTransform");
    text.style = "color:red; font-weight:bold; font-size:20px; transition: 2s;"
    }

function textChangeB(){
    let buttonA = document.getElementById("a");
    buttonA.style = "background-color:white;";
    let buttonB = document.getElementById("b");
    buttonB.style = "background-color:green";
    let buttonC = document.getElementById("c");
    buttonC.style = "background-color:white";
    let text = document.getElementById("textTransform");
    text.style = "color:blue; font-weight:italic; font-size:15px; transition: 2s"
    }

function textChangeC(){
    let buttonA = document.getElementById("a");
    buttonA.style = "background-color:white;";
    let buttonB = document.getElementById("b");
    buttonB.style = "background-color:white";
    let buttonC = document.getElementById("c");
    buttonC.style = "background-color:green";
    let text = document.getElementById("textTransform");
    text.style = "color:white; background-color:black; font-weight:bold; font-size:40px; transition:2s;"
    }


/*This one function relates to "EASY QUESTIONAIRE" heading and contents */
function revealTime(){
    let answer = document.getElementById("reveal");
    answer.innerText = "Ermmmm.....";
    answer.style = "color:red; text-shadow:2px 2px black; font-size:50px;";
    let piccy = document.getElementById("revealPic");
    piccy.innerHTML = `<img src = "https://media4.giphy.com/media/26xBJp4dcSdGxv2Zq/giphy.gif" alt="image showing lucky 8ball" id = "eightBall">`;
}

/*These 2 functions relate to "Are you Awesome" heading and contents */
function youAre(event){
    event.preventDefault();
    let form = event.target;
    answer = form.response.value;
    reply = checkYourself(answer)
    if (reply){
        let reply = document.getElementById("answerFeedback");
        reply.style = "color:green; font-size:50px;"
        reply.innerHTML = `<p>Hell yeh that's right, you are! We made it to the end!</p><iframe width="420" height="315"
        src="https://www.youtube.com/embed/3Yd3lQVbkYc">
        </iframe>`
    }
}


function checkYourself(answer){
    if (answer == "yes"){
        return true;
    }
    else if (answer == "no"){
        let reply = document.getElementById("answerFeedback");
        reply.innerText = "No isn't an option, silly!...try again!";
        reply.style = "background-color:red; color:white; font-size:50px"
        return false;
    }
    else{
        let reply = document.getElementById("answerFeedback");
        reply.innerText = "Just a simple 'yes' or 'no'...try again!";
        reply.style = "background-color:orange; color:white; font-size:50px"
        return false;
        
    }
}

