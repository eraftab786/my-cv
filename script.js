var fatchAnchortags=document.querySelectorAll('.nav-menu a');
for (var i = 0; i < fatchAnchortags.length; i++) {
	  fatchAnchortags[i].addEventListener('click',function(event){
           event.preventDefault();  /*Here i am using this function because we want to  disabloe all previous function or behaviour*/
           
           var targetSectionId=this.textContent.trim().toLowerCase();
           //console.log(targetSectionId);
           var targetSection=document.getElementById(targetSectionId);
           //console.log(targetSection);
           /*var targetSectionCoordinates=targetSection.getBoundingClientRect();
           console.log(targetSectionCoordinates);*/

           var interval=setInterval(function()
           {
           	var targetSectionCoordinates=targetSection.getBoundingClientRect();
           	if(targetSectionCoordinates.top <0){
           		clearInterval(interval);
           		return;
           	}
            
            else{
           	window.scrollBy(0,20);}
           },10);




	  });
}


/*------------------------Skills section----------making all bars dynamic*/

var progressBar=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;


// this is the second step of writing code to set the internal div width
function inialize(){
  for(let bar of progressBar){
        bar.style.width=0+'%';
       
  }
}

inialize();

// step third to to write code for fill the bar or  we can say the here we are coded for animation 

function fillSkillsbar(){
   for(let bar of progressBar){
         let targetWidth=bar.getAttribute('data-bar-width');
         let currentWidth=0;
         let interval=setInterval(function(){

          if(currentWidth>targetWidth){
             clearInterval(interval);
             return;
          }
          
          currentWidth++;
          bar.style.width=currentWidth+'%';
          
         },5);

   }


}

// step one to write the code to check the container visible or not
function checkScroll(){
  var skillContainerCooridinate=skillContainer.getBoundingClientRect();

  // here we have to check weather skill continer is visibale or not--

  if(!animationDone&&skillContainerCooridinate.top<window.innerHeight){ /*innerHeight means current viewport*/
    
     animationDone=true;
     console.log("Skill section visible");
     fillSkillsbar();

     }

     else if(skillContainerCooridinate.top>window.innerHeight){
              animationDone=false;
              inialize();
     }
}