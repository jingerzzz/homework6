var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	var playButton = document.querySelectorAll("button");

	playButton[0].innerHTML = "<img src = './images/playbutton.png' alt = 'playbuttom' width = 30>";
	playButton[1].innerHTML = "<img src = './images/pausebutton.png' alt = 'pausebutton' width = 30>";
	console.log(playButton[0]);	
	console.log(playButton[1]);
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume*100+"%";
	
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var vid = document.getElementById("myVideo");
	vid.playbackRate = vid.playbackRate*0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate = vid.playbackRate*1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted){
		console.log("Changing to unmuted");	
		document.querySelector("#mute").innerHTML = "Mute";	  
		video.muted = false;  
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("changing to muted");
	}

  	

}

function changeVolume() {
	video.volume = document.getElementById("volumeSlider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	console.log("Volume is " + video.volume * 100 + '%');
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color") 
}
