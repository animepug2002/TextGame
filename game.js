var start ='Things are never easy when you&apos;re a dog, and your planet has been destroyed.Your name is Dot, and you are in desprate need of somewhere to live before your oxygen tank runs out. As you are floating through the cosmos, you see two planets. Both are close enough for you to fly to without running out of fuel.One planet, on the Left is seemingly flat while the other looks like it has something on it. Though if you squint really hard you see movement, and lights.'


var leftPlanet = 'You decide to go left and are met with an arid land. In the backround is a volcano and sand.You can see lights far away but you can also hear a rushing noise. Possibly a river?'

var rightPlanet = "You find that it looks like a forest. You wonder around and find a bunch of kibble and lake. YOU WON, CONGRATUATIONS!!"

var go_light = 'You start to head toward the light, you find out that its a town. Should you head towards it?'

var go_sound = ' AAHH!! You found out it was a trap and its actually a high frequezy thing that lures animals and exploses brains.'

var end_of_story_blue_yellow = " You only have 3 seconds left and you're thinking about how you got here. THE END"

var quitstr = "Thank you for playing this game!"

function quit()
{

    var element = document.getElementById("game");
    element.innerHTML = quitstr;

    var image = document.getElementById("image");
    image.src = "https://www.visitmelbourne.com/-/media/images/mornington-peninsula/things-to-do/nature-and-wildlife/ashcombe-maze_mp_r_106550_1150x863.jpg?ts=20180904590120";

    var choose = document.getElementById("choose");
    choose.innerHTML = '';

    var lrbuttons = document.getElementById("left-right-buttons");
    lrbuttons.style.display = "none";

    var startover = document.getElementById("startover");
    startover.style.display = "none";
}


function startgame()
{
    var element = document.getElementById("game");
    element.innerHTML = start;

    var image = document.getElementById("image");
    image.src = "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC81NzQvb3JpZ2luYWwvbmdjMzA3OS1jaGFuZHJhLXNwYWNlLWJ1YmJsZXMuanBn";

    var lrbuttons = document.getElementById("left-right-buttons");
    lrbuttons.style.display = "block";

    var buttons = document.getElementById("blue-yellow-buttons");
    buttons.style.display = "none";

    var startover = document.getElementById("startover");
    startover.style.display = "none";

    var ynbuttons = document.getElementById("yes-no-buttons");
    ynbuttons.style.display = "none"
}

function goleft()
{
    var element = document.getElementById("game");
    element.innerHTML = leftPlanet;

    var image = document.getElementById("image");
    image.src = "download.jpg";

    var lrbuttons = document.getElementById("left-right-buttons");
    lrbuttons.style.display = "none";

    var bybuttons = document.getElementById("blue-yellow-buttons");
    bybuttons.style.display = "block";

    var ynbuttons = document.getElementById("yes-no-buttons");
    ynbuttons.style.display = "none"
}

function goright()
{
    var element = document.getElementById("game");
    element.innerHTML = rightPlanet;

    var image = document.getElementById("image");
    image.src = "https://www.puppyup.org/wp-content/uploads/2019/04/mountain-of-kibble-300x239.jpg"

    var startover = document.getElementById("startover");
    startover.style.display = "block";

    var lrbuttons = document.getElementById("left-right-buttons");
    lrbuttons.style.display = "none";

    var ynbuttons = document.getElementById("yes-no-buttons");
    ynbuttons.style.display = "none"
}
//sound option
function goblue()
{
    var element = document.getElementById("game");
    element.innerHTML = go_sound + end_of_story_blue_yellow;

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";

    var lrbuttons = document.getElementById("left-right-buttons");
    lrbuttons.style.display = "none";
    var bybuttons = document.getElementById("blue-yellow-buttons");
    bybuttons.style.display = "none";

    var startover = document.getElementById("startover");
    startover.style.display = "block";
}

//light option
function goyellow()
{
    var element = document.getElementById("game");
    element.innerHTML = go_light;

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";

    var lrbuttons = document.getElementById("left-right-buttons");
    lrbuttons.style.display = "none";
    var bybuttons = document.getElementById("blue-yellow-buttons");
    bybuttons.style.display = "none";

    var startover = document.getElementById("startover");
    startover.style.display = "none";

    var ynbuttons = document.getElementById("yes-no-buttons");
    ynbuttons.style.display = "block"
}
