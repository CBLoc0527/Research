
let myImage=document.querySelector('img');

myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='images/mctz00.jpeg'){
		myImage.setAttribute('src','images/mctz01.jpeg');
}else{
	myImage.setAttribute('src','images/mctz00.jpeg');
}
}；

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请告诉我木村拓哉老婆是谁!');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '木村拓哉爱谁？当然是' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '木村拓哉爱谁？当然是' + storedName;
}

myButton.onclick=function(){
setUserName();
};