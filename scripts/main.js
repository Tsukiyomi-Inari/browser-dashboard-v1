//DOM Elements
const time = document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
focus = document.getElementById("focus")

//Show time

function showTime()
{
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 Hour format
    hour = hour % 12 ||  12;


    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${amPm}`

    setTimeout(showTime, 1000);
}

//Add zeros
function addZero(n)
{
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}



// Connect search to Google
function search() {
var google = document.getElementById("googleSearch").value;
location.replace("https://www.google.com/search?q=" + google + "");
}


//Set Background
function setBgGreeting(){
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12 ){
        //morning
        document.body.style.backgroundImage = "url('images/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    }else if(hour < 18){
        // Afternooon
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    }else{
        //evening
        document.body.style.backgroundImage = "url('images/evening.jpg')" ;
        document.body.style.backgroundSize = "Cover";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }    
    
}
// Get focus
function getFocus(){
    if(localStorage.getItem('focus') == null){
        focus.textContent = '[Enter your focus task]';
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}


// Get name
function getName(){
    if(localStorage.getItem('name') == null)
    {
        name.textContent = '[Enter your name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function setFocus(e){
    if(e.type === 'keypress')
    {
        //make sure enter key is pressed
        if(e.which == 13  || e.keyCode == 13)
        {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setitem('focus',e.target.innerText);
    }
}

function setName(e){
    if(e.type === 'keypress')
    {
        //make sure enter key is presses
        if(e.which == 13 || e.keyCode == 13)
        {
            localStorage.setItem('name', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

// Listen for events to trigger set methods
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
getName();
setBgGreeting();
getFocus();