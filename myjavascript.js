alert('Welcome to AACC.');

//get the picture element
var pic = document.getElementById('bg');
//make an image list with the pictures we want
var imageList = ['BlackGlamour.jpg','blacksoldiers.jpg','blackslavery.jpg']

var index = 0;

function slideshow (){
  pic.setAttribute('src', imageList[index])

  if(index == imageList.length - 1){
    index = 0;
  }
  else{
    index++;
  }
}
setInterval(slideshow,2000)
