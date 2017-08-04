// alert('Hello World');
// function sayDone() {
// 	alert("Done");
// }
function fadeImage() {
  $('img').fadeToggle(4000,'swing');
}
//fade out the image

function changeColorToCyan() {
  $(this).css({'background-color':'cyan', 'opacity':'.5'})
}

function changeBackgroundImage() {
	$(this).css({'background-image':"url('http://24.media.tumblr.com/ec5eb116833918c61462c58af1691ee8/tumblr_n0n6mwdLJc1r6zm9ao5_250.gif')"})
}

function changeColorPink() {
	$(this).css({'background-image':'None','background-color':'pink'})
}

function changeColorToBackground() {
	$(this).css({'background-color':'#FFFBFF','opacity':'1'})
}

$('button').addClass('.fadeButton')

function animateHeading() {
  $('h1').on('mouseenter');
}

function makeHeadBigger() {
	$(this).off('mouseenter',makeHeadBigger)
  $(this).animate(
		{'font-size':'52px'},
		1000
	)
	setTimeout(makeHeadNormal,10000);
  setTimeout(animateHeading,makeHeadBigger,10000)

}

//function FIX SO IT IS NOT LONG!!! 
function makeHeadNormal() {
	$(this).animate(
		{'font-size':'50px'},
		1000
	)
}

function moveButtonGame() {
  $(this).animate(
     {'left':Math.floor(Math.random()*500),'bottom': Math.floor(Math.random()*500),'right':Math.floor(Math.random()*500),'top': Math.floor(Math.random()*500)},
     1000
     )
    setTimeout(animateSkull,moveButtonGame,10000)
}

function animateSkull() {
  $('div').on('mouseenter','moveButtonGame');
}

//set time out slows the time that something happens

// function sayHello(){alert("HI")}
// sayHello
// setTimeout(sayHello,5000);


function setupHandlers() {
  $('img').on('click',fadeImage);
  $('button').on('click',fadeImage)
  $('#spade').on('mouseover',changeColorToCyan)
  $('#spade').on('mouseout',changeColorToBackground)
  $('.box1').on('mouseenter',changeBackgroundImage)
  $('.box1').on('mouseout',changeColorPink)
  $('.box3').on('mouseenter',changeBackgroundImage)
  $('.box3').on('mouseout',changeColorPink)
  $('.box4').on('mouseenter',changeBackgroundImage)
  $('.box4').on('mouseout',changeColorPink)
  $('#favheading').on('mouseenter',makeHeadBigger)
  $('#bestgifheading').on('mouseenter',makeHeadBigger)
  $('#solitaireheading').on('mouseenter',makeHeadBigger)
  $('#aboutmeheading').on('mouseenter',makeHeadBigger)
  $('#favheading').on('mouseout',makeHeadNormal)
  $('#bestgifheading').on('mouseout',makeHeadNormal)
  $('#solitaireheading').on('mouseout',makeHeadNormal)
  $('#aboutmeheading').on('mouseout',makeHeadNormal)
  $('#skullbutton').on('mouseenter',moveButtonGame);

}
//fade the image when you click it... on function takes is an event type and then takes function what you do whenever you get that event takes fade status of image
//there are a ton of jquery events
$(document).ready(setupHandlers);

//says when whole document is ready call the function 
//arrange web browser 
//need to do ready cuz of the DOM cuz it takes the func only after the entire dom or the entire document is created cuz it loads up based on the order of your html
//they are all reliant on one another 
//the function that you are asking to be executed at a specific time=callback
//setHapndlers is the callback action is another word for it
//be careful with () cuz if you have it after the function that automatically calls it 

//this you can use as the thing you are clicking on

//start style end style duration and then get an easing or animation

