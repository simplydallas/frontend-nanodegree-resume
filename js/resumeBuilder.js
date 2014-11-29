var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "WFO Reporting and Developement",
			"location" : "Oklahoma City",
			"dates" : "2014 - Current",
			"description" : "Create, Automate, and Analyze reporting"
		},
		{
			"employer" : "AT&T",
			"title" : "WFO RCommand Center Manager Lead",
			"location" : "Oklahoma City",
			"dates" : "2013 - 2014",
			"description" : "watch things and automate watching things"
		}		
	]
}

var	projects = {
	"projects" : [
		{
			"title" : "project 1",
			"dates" : 2014,
			"description" : "Udacity project 1 for front end web dev",
			"images" : [
				"http://beerhold.it/200/200.1","http://beerhold.it/200/200.2","http://beerhold.it/200/200.3"
			]
		},
		{
			"title" : "project 2",
			"dates" : 2014,
			"description" : "Udacity project 2 for front end web dev",
			"images" : [
				"http://beerhold.it/200/200.4","http://beerhold.it/200/200.5","http://beerhold.it/200/200.6"
			]
		}		
	]

}

var bio = {
	"name" : "Dallas",
	"role" : "king of the world",
	"welcome" : "Hello, welcome to my world.",
	"contacts" : {
		"mobile" : "405-555-5555",
		"email" : "email@gmail.com",
		"github" : "https://github.com/Slomer",
		"twitter" : "https://twitter.com/simplydallas",
		"location" : "Edmond, OK"
	},
	"skills" : [
		"awesomeness","programming","teaching", "JS"
	],
	"bioPic" : "http://graph.facebook.com/681154161/picture?type=square&type=large"
}


var education = {
	"schools" :[
		{
			"name" : "John Marshal High School",
			"location" : "OKC, OK",
			"dates" : 1997,
			"courses" : ["nerd", "awesome guy"],
			"url" : "http://okcs.johnmarshall.schooldesk.net/"	
		}
	],
	"online courses": [
		{
			"school" : "Udacity",
			"title" : "front end web developer",
			"dates" : 2014,
			"url" : "http://www.udacity.com"
		},
		{
			"school" : "Udacity",
			"title" : "Javascript Syntax",
			"dates" : 2014,
			"url" : "http://www.udacity.com"
		}
	]
}
	



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedTitle = HTMLheaderRole.replace("%data%", bio.role);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
//add skills to header

function displayWork(){

$("#main").append(internationalizeButton);
$("#main").append(work["position"] + " " + education.name);


//add work history to page
for (job in work.jobs){
	var shortenIt = HTMLworkStart.replace("%data%",work.jobs[job])
	$("#workExperience").append(shortenIt);
		
	var shortEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var shortTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(shortEmp  + shortTitle);
	var shortDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(shortDate);
	var shortLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(shortLoc);
	var shortDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(shortDesc);

}
//before contacts (reverse order)
$("#header").prepend(formattedName + formattedTitle);
$("#header").prepend(formattedBioPic);

//after contact
$("#header").append(formattedWelcome);
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);	

	for (var i = 0; i < bio.skills.length; i++){
		var shortSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skillsH3").append(shortSkill);
	}
}

//add in our contact info
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

}

displayWork();



$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);
});


function locationizer(aJson){
	var jobArr = [];

	for(job in aJson.jobs){
		jobArr.push(aJson.jobs[job].location);
	}

	return jobArr;
}

function inName(nameStr){
	var namArr = nameStr.trim().split(" ")
	namArr[0] = namArr[0] [0].toUpperCase() + namArr[0].slice(1).toLowerCase();
	namArr[1] = namArr[1].toUpperCase();
	return namArr.join(	" ");
}

//add display function to projects
projects.display = function(){

	for (var i = 0; i < projects.projects.length; i++){
		//add starter
		$("#projects").append(HTMLprojectStart);
		//add title, dates, description
		var pTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(pTitle);
		var pDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(pDates);
		var pDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(pDesc);
		//add images
		for (var imgNum in projects.projects[i].images){
			var pImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[imgNum]);
			$(".project-entry:last").append(pImage);
		}
	}
};

projects.display();

//map of locations in the resume
$("#mapDiv").append(googleMap);


