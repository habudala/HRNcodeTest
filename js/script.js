function script () {

	function highlight (e) {
		var subject = e.target;
		var subjectId = subject.id;
		// console.log(subjectId); 

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
		    		  setCont ("Digital HR", "#ee2a7b;");		        
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

	function deHighlight (e) {
		var subject = e.target;
		var subjectId = subject.id;
		// console.log(subjectId); 

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
		  descCont.style.lineHeight = "3vw";
		    
	}

	// function sg () {
		var imgArray = document.querySelectorAll("#icons>li>img");
		var z = 0; 

				setInterval(function(){ 
				// console.log(z);
			 	transformation (imgArray[z],imgArray[z].id);
			 	var color = imgArray[z].getAttribute("myThing");
			 	var desc = imgArray[z].getAttribute("name");
			 	setCont (desc, color);



			 	setTimeout (function(){ 
			 	transformBack(imgArray[z],imgArray[z].id);
			 	if (z < 14) {z++;} else {z = 0;}
			 	},700);
			 }, 1000); 

	var iconLine = document.getElementById("icons");
	iconLine.addEventListener("mouseover",highlight, false);
	iconLine.addEventListener("mouseout",deHighlight, false);

}
window.onload = script;