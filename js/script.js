function script () {

//////////// When someone hovers over the svg icon///////////////
	function highlight (e) {
		var subject = e.target;
		var subjectId = subject.id;

		switch(subjectId) {
		    case "1": transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Home", "#99cc00");
		        break;
		    case "2": transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Main Stage", "#18a7e0");
		        break;
		     case "3": transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("HR Technology", "#bb6e3d");
		        break;
		    case "4":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Talent & Recruitment", "#53abb7");
		        break;
		     case "5":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Smart Data", "#885ea3");
		        break;
		    case "6":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Learnig", "#00a29a");
		        break;
		     case "7":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Adoption", "#80af3f");
		        break;
		    case "8":transformation (subject,subjectId);
		    		  setDesc(subject); 
		    		  setCont ("HR SS & Payroll", "#809453");  
		        break;
		     case "9":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Wellbeing & Rewards", "#a92a31");		        
		        break;
		    case "10":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Digital HR", "#ee2a7b");		        
		        break;
		    case "11":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Diversity & Inclusion", "#3b8954");		        
		        break;
		    case "12":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Thinktank", "#3f80c0");        
		        break;
		     case "13":transformation (subject,subjectId);
		    		  setDesc(subject);
		    		  setCont ("Thinktank II", "#3f80c0");
		        break;
		    case "14":transformation (subject,subjectId);
		    		  setDesc(subject);	
		    		  setCont ("Disrupt HR", "#3f80c0");	        
		        break;
		     case "15":transformation (subject,subjectId);
		    		  setDesc(subject);	
		    		  setCont ("Product Demo", "#e41a52");	       
		        break;	    
		    default:
		     
		}

	}
// //////////////////when someone stops hovering over the svg icon/////
	function deHighlight (e) {
		var subject = e.target;
		var subjectId = subject.id;

		switch(subjectId) {
		    case "1": transformBack(subject,subjectId); break;
		    case "2": transformBack(subject,subjectId); break;
		     case "3":transformBack(subject,subjectId); break;
		    case "4": transformBack(subject,subjectId); break;
		     case "5":transformBack(subject,subjectId);  break;
		    case "6":transformBack(subject,subjectId);  break;
		     case "7":transformBack(subject,subjectId); break;
		    case "8":transformBack(subject,subjectId);  break;
		     case "9":transformBack(subject,subjectId); break;
		    case "10":transformBack(subject,subjectId);  break;
		    case "11":transformBack(subject,subjectId);  break;
		    case "12":transformBack(subject,subjectId);  break;
		     case "13":transformBack(subject,subjectId);  break;
		    case "14": transformBack(subject,subjectId);  break;
		     case "15": transformBack(subject,subjectId);  break;  
		    default:
		        
		}

	}

// //////////////drop down menu animation//////////////

///////////////faulty!!! needs checking --> no transition//////////
////////////////////down//////////////

	function dDown (){
		var drDown = document.getElementById("drDown");
		var myId = document.getElementById("myId");
		drDown.style.display="block";
		myId.style.opacity="1";
		myId.style.left="75vw";

	}
/////////////////up/////////////////

	function goUp (){
		var drDown = document.getElementById("drDown");
		var myId = document.getElementById("myId");
		drDown.style.display="none";
		myId.style.left="100vw";
		myId.style.opacity="0";

	}

	// /////////-setting the description right in the middle of svg///////////

	function setDesc(element) {
		var desc = document.getElementById("statDesc");
		var imgInfo =  element.getBoundingClientRect();
		var descInfo =  desc.getBoundingClientRect();

		var imgWidth = imgInfo.right - imgInfo.left;
		var descWidth = desc.offsetWidth;
		var halfDescWidth = descWidth/2;
		var halfImgWidth =imgWidth/2;
		var imgY = imgInfo.left;
		var descY = descInfo.left;
		var descCentreY = descY + halfDescWidth;
		var imgCentreY = imgY + halfImgWidth;
		desc.style.left = (imgY-(halfDescWidth-imgWidth/2))+"px";
		console.log("i still work");
		
		return 

	}
	/////////    transforming svg icon and comment box//////
	function transformation (image,imgId) {
		   var source = image.src = "images/icon" + imgId + "(1).svg";
		    image.style.transform = "scale(1.5,1.5)";
		   var description = document.getElementById("statDesc");
		    description.style.transform = "rotateY(0deg)";
		    setDesc(image);
	}

	function transformBack (image,imgId) {
		   var source = image.src = "images/icon" + imgId + ".svg";
		    image.style.transform = "scale(1,1)";
		   var description = document.getElementById("statDesc");
		    description.style.transform = "rotateY(90deg)";
		    
	}

	function setCont (content, color) {
		  var descCont = document.getElementById("descCont");
		  descCont.innerHTML = content;
		  descCont.style.color = color;
		  descCont.style.lineHeight = "3.5vw";
		    
	}

// -------------------------creating image list loop so icons get highlighted---------------

	var imgArray = document.querySelectorAll("#icons>li>img");
	var z = 0; 

		setInterval(function(){ 
			// console.log(z);
			transformation (imgArray[z],imgArray[z].id);
			var color = imgArray[z].getAttribute("myThing"); // find color in html associated with icon
			var desc = imgArray[z].getAttribute("name"); // find name of image instead of if-else or switch statement
			setCont (desc, color);

			setTimeout (function(){ 
			transformBack(imgArray[z],imgArray[z].id);
			if (z < 14) {z++;} else {z = 0;}
			},1500);
		}, 2500); 

///////////////////////////EVENT LISTENERS FOR FUNCTIONS ABOVE///////////

	var iconLine = document.getElementById("icons");
	var iconLine = document.getElementById("menuIconCont");
	var dropDown = document.getElementById("down");
	dropDown.addEventListener("mouseover",dDown, false);
	dropDown.addEventListener("mouseout",goUp, false);
	iconLine.addEventListener("mouseover",highlight, false);
	iconLine.addEventListener("mouseout",deHighlight, false);
	// menuIconCont.addEventListener("click",menuOut, false);


	// /////////////////// ///////// /// ///////////////

////////////////////Mobile Menu Slide-Out Animation////////////////////

var myArr = document.querySelectorAll("#mbNav>ul>li");
// console.log(listArr);// selfcheck
var modal = document.getElementById("myModal");
//slideout bg
var mdCont = document.getElementById("mdCont");
// Get button that opens the modal
var btn = document.getElementById("menuIconCont");
//get menu lines to get them to disappear later
var line1 =document.getElementById("line1");
// menu-in/out counter
var counter = 0;

btn.onclick = function() {

	if(counter == 0) {   // if menu is not visible

		// animate menu icon
	    line1.style.opacity = 0;

	    //animate modal window
		modal.style.display = "block";
		mdCont.style.animationName = "animate";
		mdCont.style.animationDuration = "1.5s";	
    	counter=1;

    	// animate list items
    	if(myArr.length>0) {  // checking if there are list items to display
    		
    		var laz = 0;   //array iterator laz = 1,2,3,4, etc..

			function repeat () {
				// console.log(myArr.item(laz)); //self-check
				myArr.item(laz).style.marginLeft = "0px";
				myArr.item(laz).style.transition = "margin-left 1s linear";
				laz++;
				if (laz >= myArr.length) { clearInterval(timer);}
			}

			var timer = window.setInterval(repeat,200);

   		}

	}else if (counter == 1) {    // if menu visible

		if(myArr.length>0) {    // checking if there are list items to display
    		var laz = 0;
    		 line1.style.opacity = 1;
			function repeat () {
				// console.log(myArr.item(laz)); //self-check
				myArr.item(laz).style.marginLeft = "100vw";    //   animating list elements 
				myArr.item(laz).style.transition = "margin-left 1s linear"; // animating list elements
				laz++;
				if (laz >= myArr.length) { clearInterval(timer);
					mdCont.style.animationName = "animateBack";
		mdCont.style.animationDuration = "3s";
		setTimeout(function(){ modal.style.display = "none";},1700);}
			}

			var timer = window.setInterval(repeat,200);

   		}

    	counter=0;
	}
   
}

}
window.onload = script;