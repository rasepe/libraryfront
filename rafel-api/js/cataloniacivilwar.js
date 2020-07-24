
var regions= [
	{ "id": "1", "name": "Alt Camp", "owner":"1", "formerOwner":"1","color": "#808080", "points": "1", "defeated": false}, 
	{ "id": "2", "name": "Alt Empordà", "owner":"2", "formerOwner":"2","color": "#2f4f4f", "points": "1", "defeated": false}, 
	{ "id": "3", "name": "Alt Penedès", "owner":"3", "formerOwner":"3","color": "#556b2f", "points": "1", "defeated": false}, 
	{ "id": "4", "name": "Alt Urgell", "owner":"4", "formerOwner":"4","color": "#a0522d", "points": "1", "defeated": false}, 
	{ "id": "5", "name": "Alta Ribagorça", "owner":"5", "formerOwner":"5","color": "#800000", "points": "1", "defeated": false}, 
	{ "id": "6", "name": "Anoia", "owner":"6", "formerOwner":"6","color": "#191970", "points": "1", "defeated": false}, 
	{ "id": "7", "name": "Aran", "owner":"7", "formerOwner":"7","color": "#006400", "points": "1", "defeated": false}, 
	{ "id": "8", "name": "Bages", "owner":"8", "formerOwner":"8","color": "#808000", "points": "1", "defeated": false}, 
	{ "id": "9", "name": "Baix Camp", "owner":"9", "formerOwner":"9","color": "#3cb371", "points": "1", "defeated": false}, 
	{ "id": "10", "name": "Baix Ebre", "owner":"10", "formerOwner":"10","color": "#bdb76b", "points": "1", "defeated": false}, 
	{ "id": "11", "name": "Baix Empordà", "owner":"11", "formerOwner":"11","color": "#008b8b", "points": "1", "defeated": false}, 
	{ "id": "12", "name": "Baix Llobregat", "owner":"12", "formerOwner":"12","color": "#4682b4", "points": "1", "defeated": false}, 
	{ "id": "13", "name": "Baix Penedès", "owner":"13", "formerOwner":"13","color": "#9acd32", "points": "1", "defeated": false}, 
	{ "id": "14", "name": "Barcelonès", "owner":"14", "formerOwner":"14","color": "#00008b", "points": "1", "defeated": false}, 
	{ "id": "15", "name": "Berguedà", "owner":"15", "formerOwner":"15","color": "#32cd32", "points": "1", "defeated": false}, 
	{ "id": "16", "name": "Cerdanya", "owner":"16", "formerOwner":"16","color": "#daa520", "points": "1", "defeated": false}, 
	{ "id": "17", "name": "Conca de Barberà", "owner":"17", "formerOwner":"17","color": "#7f007f", "points": "1", "defeated": false}, 
	{ "id": "18", "name": "Garraf", "owner":"18", "formerOwner":"18","color": "#8fbc8f", "points": "1", "defeated": false}, 
	{ "id": "19", "name": "Garrigues", "owner":"19", "formerOwner":"19","color": "#b03060", "points": "1", "defeated": false}, 
	{ "id": "20", "name": "Garrotxa", "owner":"20", "formerOwner":"20","color": "#ff4500", "points": "1", "defeated": false}, 
	{ "id": "21", "name": "Gironès", "owner":"21", "formerOwner":"21","color": "#00ced1", "points": "1", "defeated": false}, 
	{ "id": "22", "name": "Maresme", "owner":"22", "formerOwner":"22","color": "#ff8c00", "points": "1", "defeated": false}, 
	{ "id": "23", "name": "Moianès", "owner":"23", "formerOwner":"23","color": "#ffd700", "points": "1", "defeated": false}, 
	{ "id": "24", "name": "Montsià", "owner":"24", "formerOwner":"24","color": "#6a5acd", "points": "1", "defeated": false}, 
	{ "id": "25", "name": "Noguera", "owner":"25", "formerOwner":"25","color": "#00ff00", "points": "1", "defeated": false}, 
	{ "id": "26", "name": "Osona", "owner":"26", "formerOwner":"26","color": "#dc143c", "points": "1", "defeated": false}, 
	{ "id": "27", "name": "Pallars Jussà", "owner":"27", "formerOwner":"27","color": "#00bfff", "points": "1", "defeated": false}, 
	{ "id": "28", "name": "Pallars Sobirà", "owner":"28", "formerOwner":"28","color": "#f4a460", "points": "1", "defeated": false}, 
	{ "id": "29", "name": "Pla d'Urgell", "owner":"29", "formerOwner":"29","color": "#0000ff", "points": "1", "defeated": false}, 
	{ "id": "30", "name": "Pla de l'Estany", "owner":"30", "formerOwner":"30","color": "#a020f0", "points": "1", "defeated": false}, 
	{ "id": "31", "name": "Priorat", "owner":"31", "formerOwner":"31","color": "#adff2f", "points": "1", "defeated": false}, 
	{ "id": "32", "name": "Ribera d'Ebre", "owner":"32", "formerOwner":"32","color": "#b0c4de", "points": "1", "defeated": false}, 
	{ "id": "33", "name": "Ripollès", "owner":"33", "formerOwner":"33","color": "#ff00ff", "points": "1", "defeated": false}, 
	{ "id": "34", "name": "Segarra", "owner":"34", "formerOwner":"34","color": "#1e90ff", "points": "1", "defeated": false}, 
	{ "id": "35", "name": "Segrià", "owner":"35", "formerOwner":"35","color": "#fa8072", "points": "1", "defeated": false}, 
	{ "id": "36", "name": "Selva", "owner":"36", "formerOwner":"36","color": "#dda0dd", "points": "1", "defeated": false}, 
	{ "id": "37", "name": "Solsonès", "owner":"37", "formerOwner":"37","color": "#ff1493", "points": "1", "defeated": false}, 
	{ "id": "38", "name": "Tarragonès", "owner":"38", "formerOwner":"38","color": "#ee82ee", "points": "1", "defeated": false}, 
	{ "id": "39", "name": "Terra Alta", "owner":"39", "formerOwner":"39","color": "#98fb98", "points": "1", "defeated": false}, 
	{ "id": "40", "name": "Urgell", "owner":"40", "formerOwner":"40","color": "#7fffd4", "points": "1", "defeated": false}, 
	{ "id": "41", "name": "Vallès Occidental", "owner":"41", "formerOwner":"41","color": "#ffdab9", "points": "1", "defeated": false}, 
	{ "id": "42", "name": "Vallès Oriental", "owner":"42", "formerOwner":"42","color": "#ffb6c1", "points": "1", "defeated": false}
	];

var borderingCountries = [
	{"country_id":"1","bordering_country_id":"3"},
	{"country_id":"1","bordering_country_id":"6"},
	{"country_id":"1","bordering_country_id":"9"},
	{"country_id":"1","bordering_country_id":"13"},
	{"country_id":"1","bordering_country_id":"17"},
	{"country_id":"1","bordering_country_id":"38"},
	{"country_id":"2","bordering_country_id":"11"},
	{"country_id":"2","bordering_country_id":"20"},
	{"country_id":"2","bordering_country_id":"21"},
	{"country_id":"2","bordering_country_id":"30"},
	{"country_id":"3","bordering_country_id":"1"},
	{"country_id":"3","bordering_country_id":"6"},
	{"country_id":"3","bordering_country_id":"12"},
	{"country_id":"3","bordering_country_id":"13"},
	{"country_id":"3","bordering_country_id":"18"},
	{"country_id":"4","bordering_country_id":"15"},
	{"country_id":"4","bordering_country_id":"16"},
	{"country_id":"4","bordering_country_id":"25"},
	{"country_id":"4","bordering_country_id":"27"},
	{"country_id":"4","bordering_country_id":"28"},
	{"country_id":"4","bordering_country_id":"37"},
	{"country_id":"5","bordering_country_id":"7"},
	{"country_id":"5","bordering_country_id":"27"},
	{"country_id":"5","bordering_country_id":"28"},
	{"country_id":"6","bordering_country_id":"1"},
	{"country_id":"6","bordering_country_id":"3"},
	{"country_id":"6","bordering_country_id":"8"},
	{"country_id":"6","bordering_country_id":"12"},
	{"country_id":"6","bordering_country_id":"17"},
	{"country_id":"6","bordering_country_id":"34"},
	{"country_id":"6","bordering_country_id":"37"},
	{"country_id":"7","bordering_country_id":"5"},
	{"country_id":"7","bordering_country_id":"28"},
	{"country_id":"8","bordering_country_id":"6"},
	{"country_id":"8","bordering_country_id":"12"},
	{"country_id":"8","bordering_country_id":"15"},
	{"country_id":"8","bordering_country_id":"23"},
	{"country_id":"8","bordering_country_id":"26"},
	{"country_id":"8","bordering_country_id":"37"},
	{"country_id":"8","bordering_country_id":"41"},
	{"country_id":"9","bordering_country_id":"1"},
	{"country_id":"9","bordering_country_id":"10"},
	{"country_id":"9","bordering_country_id":"17"},
	{"country_id":"9","bordering_country_id":"31"},
	{"country_id":"9","bordering_country_id":"32"},
	{"country_id":"9","bordering_country_id":"38"},
	{"country_id":"10","bordering_country_id":"9"},
	{"country_id":"10","bordering_country_id":"24"},
	{"country_id":"10","bordering_country_id":"32"},
	{"country_id":"10","bordering_country_id":"39"},
	{"country_id":"11","bordering_country_id":"2"},
	{"country_id":"11","bordering_country_id":"21"},
	{"country_id":"11","bordering_country_id":"36"},
	{"country_id":"12","bordering_country_id":"3"},
	{"country_id":"12","bordering_country_id":"6"},
	{"country_id":"12","bordering_country_id":"8"},
	{"country_id":"12","bordering_country_id":"14"},
	{"country_id":"12","bordering_country_id":"18"},
	{"country_id":"12","bordering_country_id":"41"},
	{"country_id":"13","bordering_country_id":"1"},
	{"country_id":"13","bordering_country_id":"3"},
	{"country_id":"13","bordering_country_id":"18"},
	{"country_id":"13","bordering_country_id":"38"},
	{"country_id":"14","bordering_country_id":"12"},
	{"country_id":"14","bordering_country_id":"22"},
	{"country_id":"14","bordering_country_id":"41"},
	{"country_id":"14","bordering_country_id":"42"},
	{"country_id":"15","bordering_country_id":"4"},
	{"country_id":"15","bordering_country_id":"8"},
	{"country_id":"15","bordering_country_id":"16"},
	{"country_id":"15","bordering_country_id":"26"},
	{"country_id":"15","bordering_country_id":"33"},
	{"country_id":"15","bordering_country_id":"37"},
	{"country_id":"16","bordering_country_id":"4"},
	{"country_id":"16","bordering_country_id":"15"},
	{"country_id":"16","bordering_country_id":"33"},
	{"country_id":"17","bordering_country_id":"1"},
	{"country_id":"17","bordering_country_id":"6"},
	{"country_id":"17","bordering_country_id":"9"},
	{"country_id":"17","bordering_country_id":"19"},
	{"country_id":"17","bordering_country_id":"31"},
	{"country_id":"17","bordering_country_id":"34"},
	{"country_id":"17","bordering_country_id":"40"},
	{"country_id":"18","bordering_country_id":"3"},
	{"country_id":"18","bordering_country_id":"12"},
	{"country_id":"18","bordering_country_id":"13"},
	{"country_id":"19","bordering_country_id":"17"},
	{"country_id":"19","bordering_country_id":"29"},
	{"country_id":"19","bordering_country_id":"31"},
	{"country_id":"19","bordering_country_id":"32"},
	{"country_id":"19","bordering_country_id":"35"},
	{"country_id":"19","bordering_country_id":"40"},
	{"country_id":"20","bordering_country_id":"2"},
	{"country_id":"20","bordering_country_id":"21"},
	{"country_id":"20","bordering_country_id":"26"},
	{"country_id":"20","bordering_country_id":"30"},
	{"country_id":"20","bordering_country_id":"33"},
	{"country_id":"20","bordering_country_id":"36"},
	{"country_id":"21","bordering_country_id":"2"},
	{"country_id":"21","bordering_country_id":"11"},
	{"country_id":"21","bordering_country_id":"20"},
	{"country_id":"21","bordering_country_id":"30"},
	{"country_id":"21","bordering_country_id":"36"},
	{"country_id":"22","bordering_country_id":"14"},
	{"country_id":"22","bordering_country_id":"36"},
	{"country_id":"22","bordering_country_id":"42"},
	{"country_id":"23","bordering_country_id":"8"},
	{"country_id":"23","bordering_country_id":"26"},
	{"country_id":"23","bordering_country_id":"41"},
	{"country_id":"23","bordering_country_id":"42"},
	{"country_id":"24","bordering_country_id":"10"},
	{"country_id":"25","bordering_country_id":"4"},
	{"country_id":"25","bordering_country_id":"27"},
	{"country_id":"25","bordering_country_id":"29"},
	{"country_id":"25","bordering_country_id":"34"},
	{"country_id":"25","bordering_country_id":"35"},
	{"country_id":"25","bordering_country_id":"37"},
	{"country_id":"25","bordering_country_id":"40"},
	{"country_id":"26","bordering_country_id":"8"},
	{"country_id":"26","bordering_country_id":"15"},
	{"country_id":"26","bordering_country_id":"20"},
	{"country_id":"26","bordering_country_id":"23"},
	{"country_id":"26","bordering_country_id":"33"},
	{"country_id":"26","bordering_country_id":"36"},
	{"country_id":"26","bordering_country_id":"42"},
	{"country_id":"27","bordering_country_id":"4"},
	{"country_id":"27","bordering_country_id":"5"},
	{"country_id":"27","bordering_country_id":"25"},
	{"country_id":"27","bordering_country_id":"28"},
	{"country_id":"28","bordering_country_id":"4"},
	{"country_id":"28","bordering_country_id":"5"},
	{"country_id":"28","bordering_country_id":"7"},
	{"country_id":"28","bordering_country_id":"27"},
	{"country_id":"29","bordering_country_id":"19"},
	{"country_id":"29","bordering_country_id":"25"},
	{"country_id":"29","bordering_country_id":"35"},
	{"country_id":"29","bordering_country_id":"40"},
	{"country_id":"30","bordering_country_id":"2"},
	{"country_id":"30","bordering_country_id":"20"},
	{"country_id":"30","bordering_country_id":"21"},
	{"country_id":"31","bordering_country_id":"9"},
	{"country_id":"31","bordering_country_id":"17"},
	{"country_id":"31","bordering_country_id":"19"},
	{"country_id":"31","bordering_country_id":"32"},
	{"country_id":"32","bordering_country_id":"9"},
	{"country_id":"32","bordering_country_id":"10"},
	{"country_id":"32","bordering_country_id":"19"},
	{"country_id":"32","bordering_country_id":"31"},
	{"country_id":"32","bordering_country_id":"35"},
	{"country_id":"32","bordering_country_id":"39"},
	{"country_id":"33","bordering_country_id":"15"},
	{"country_id":"33","bordering_country_id":"16"},
	{"country_id":"33","bordering_country_id":"20"},
	{"country_id":"33","bordering_country_id":"26"},
	{"country_id":"34","bordering_country_id":"6"},
	{"country_id":"34","bordering_country_id":"17"},
	{"country_id":"34","bordering_country_id":"25"},
	{"country_id":"34","bordering_country_id":"37"},
	{"country_id":"34","bordering_country_id":"40"},
	{"country_id":"35","bordering_country_id":"19"},
	{"country_id":"35","bordering_country_id":"25"},
	{"country_id":"35","bordering_country_id":"29"},
	{"country_id":"35","bordering_country_id":"32"},
	{"country_id":"36","bordering_country_id":"11"},
	{"country_id":"36","bordering_country_id":"20"},
	{"country_id":"36","bordering_country_id":"21"},
	{"country_id":"36","bordering_country_id":"22"},
	{"country_id":"36","bordering_country_id":"26"},
	{"country_id":"36","bordering_country_id":"42"},
	{"country_id":"37","bordering_country_id":"4"},
	{"country_id":"37","bordering_country_id":"6"},
	{"country_id":"37","bordering_country_id":"8"},
	{"country_id":"37","bordering_country_id":"15"},
	{"country_id":"37","bordering_country_id":"25"},
	{"country_id":"37","bordering_country_id":"34"},
	{"country_id":"38","bordering_country_id":"1"},
	{"country_id":"38","bordering_country_id":"9"},
	{"country_id":"38","bordering_country_id":"13"},
	{"country_id":"39","bordering_country_id":"10"},
	{"country_id":"39","bordering_country_id":"32"},
	{"country_id":"40","bordering_country_id":"17"},
	{"country_id":"40","bordering_country_id":"19"},
	{"country_id":"40","bordering_country_id":"25"},
	{"country_id":"40","bordering_country_id":"29"},
	{"country_id":"40","bordering_country_id":"34"},
	{"country_id":"41","bordering_country_id":"8"},
	{"country_id":"41","bordering_country_id":"12"},
	{"country_id":"41","bordering_country_id":"14"},
	{"country_id":"41","bordering_country_id":"23"},
	{"country_id":"41","bordering_country_id":"42"},
	{"country_id":"42","bordering_country_id":"14"},
	{"country_id":"42","bordering_country_id":"22"},
	{"country_id":"42","bordering_country_id":"23"},
	{"country_id":"42","bordering_country_id":"26"},
	{"country_id":"42","bordering_country_id":"36"},
	{"country_id":"42","bordering_country_id":"41"}
	]
	
const entries = Object.entries(regions);

var messageText;
var conquerorId;
var newOwner;
var disputedRegionId;
var disputedRegion;
var formerOwnerId;
var formerOwner;
var finalMovement = false;

var idGame;

var movement = [];

var tabla = $('#countries').DataTable({

	"lengthMenu" : [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
	"order": [[ 1, 'desc' ]],
	responsive : true,
	"columnDefs" : [ {
		"data" : "region",
		"targets" : 0
	}, {
		"data" : "points",
		"targets" : 1
	}
	]
});


var tableStats = $('#tableStats').DataTable({

	"lengthMenu" : [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
	"order": [[ 1, 'desc' ]],
	responsive : true,
	"columnDefs" : [ {
		"data" : "region",
		"targets" : 0
	}, {
		"data" : "successRate",
		"targets" : 1
	}
	]
});

let firstPlay = true;





function reset() {

	location.reload();

}



function play() {

	if (firstPlay) {

		var constructedUrl = "http://rafelserra.mooo.com:8080/wargame/new/";
		var data = $.parseJSON($.ajax({
			type: "POST",
			url: constructedUrl,
			dataType: "json", 
			async: false
		}).responseText); // This will wait until you get a response from the ajax request.

		// Now you can use data.posX, data.posY later in your code and it will work.
		idGame = data;

		console.log(idGame);



	}

	//TRIEM A L'ATZAR ID COMARCA CONQUERIDORA
	conquerorId = Math.floor(Math.random()*regions.length)+1;
	console.log("conquerorId =" + conquerorId);
	newOwner = regions[conquerorId-1].owner;


	//CONSULTEM COMARQUES FRONTERERES DE LA CONQUERIDORA
	var arrayBorderingCountries = [];
	for (x of borderingCountries) {
		if (x.country_id == conquerorId) {

			arrayBorderingCountries.push(x.bordering_country_id);
			console.log("arrayBorderingCountries:" + arrayBorderingCountries);
		}
	}

	//ESCOLLIM COMARCA CONQUERIDA ENTRE LES FRONTERERES

	var chosenPosition = Math.floor(Math.random()*arrayBorderingCountries.length-1)+1;

	disputedRegionId = arrayBorderingCountries[chosenPosition];

	disputedRegion = regions[disputedRegionId-1];

	//SI LA COMARCA CONQUERIDA JA PERTANY AL CONQUERIDOR, N'ASSIGNEM UNA ALTRA

	while (newOwner == disputedRegion.owner) {
		//CONSULTEM COMARQUES FRONTERERES DE LA CONQUERIDA
		var arrayBorderingCountries2 = [];
		for (x of borderingCountries) {
			if (x.country_id == disputedRegionId) {

				arrayBorderingCountries2.push(x.bordering_country_id);
				console.log("arrayBorderingCountries2:" + arrayBorderingCountries2);
			}
		}
		//ESCOLLIM NOVA COMARCA CONQUERIDA ENTRE LES FRONTERERES

		var chosenPosition2 = Math.floor(Math.random()*arrayBorderingCountries2.length-1)+1;

		disputedRegionId = arrayBorderingCountries2[chosenPosition2];

		disputedRegion = regions[disputedRegionId-1];

	}

	//JA SABEM QUI HA GUANYAT I QUI HA PERDUT
	var idLoser = disputedRegion.owner;

	//ASSIGNEM EXPROPIETARI I NOU PROPIETARI DE LA COMARCA CONQUERIDA 

	disputedRegion.formerOwner = disputedRegion.owner;
	disputedRegion.owner = newOwner;

	//CANVIEM PUNTUACIONS

	regions[idLoser-1].points--;
	regions[newOwner-1].points++;

	if (regions[idLoser-1].points<0) {
		regions[idLoser-1].points = 0;
	}

	if (regions[idLoser-1].points == 0) {
		regions[idLoser-1].defeated = true;  
	}

	var countriesLeft = 0;

	for (x of regions) {
		if (x.defeated == false) {
			countriesLeft++;
		}
	}


	if (countriesLeft < 2) {
		finalMovement = true;
	}

	var thisMessage = regions[newOwner-1].name + " has conquered " + disputedRegion.name + " formerly owned by " + regions[idLoser-1].name + ".";
	if (regions[idLoser-1].defeated) {
		thisMessage += 	" " + regions[idLoser-1].name + " has been defeated." ;
	}
	if (!finalMovement) {
		thisMessage += " There are " + countriesLeft + " counties left.";
	} else {
		thisMessage += " " + regions[newOwner-1].name + " has won the war.";
	}


	movement[0]= thisMessage; 
	movement[1]= regions[newOwner-1].id;
	movement[2]= disputedRegion.id;
	movement[3]= regions[idLoser-1].id;
	movement[4]= finalMovement;



	if (firstPlay) {
		changeColorMessage();
		firstPlay = false;
	}


	manage(movement);
}


function printonconsole(data) {
	console.log(data);
	console.log("Hola");
}

function changeColorMessage() {
	let messageDiv = document.getElementById("message");
	messageDiv.setAttribute("class", "alert alert-warning");
}

function manage(data) {

	messageText = data[0];
	conquerorId = data[1];
	disputedRegionId = data[2];
	formerOwnerId = data[3];
	finalMovement = data[4];

	console.log("JSON response ");
	console.log("messageText: " + messageText);
	console.log("conquerorId: " + conquerorId);
	console.log("disputedRegionId: " + disputedRegionId);
	console.log("formerOwnerId: " + formerOwnerId);
	console.log("finalMovement: " + finalMovement);

	// Change the message text and animate
	changeMessageTextAndAnimation(messageText)

	let colorConqueringEmpireId = getColorById(conquerorId);
	paintRegion(disputedRegionId, colorConqueringEmpireId);

	console.log (entries[parseInt(conquerorId) -1][1].points);
	console.log (entries[parseInt(formerOwnerId) -1][1].points);

	tabla.clear();

	for (var i=0; i<regions.length; i++) {
		if (regions[i].points > 0) {
			tabla.row.add({

				"region" 	: regions[i].name,
				"points" : regions[i].points

			});	

		};


	}
	tabla.draw();

	if (finalMovement) {
		endGame(conquerorId, idGame);
	}

}

function changeMessageTextAndAnimation(messageText) {
	let messageDiv = document.getElementById("message");
	messageDiv.innerHTML = messageText;

	messageDiv.classList.add("animatedTransitionMessage");
	messageDiv.addEventListener('animationend', function () {
		messageDiv.classList.remove('animatedTransitionMessage');
	}, false);

}

function getColorById(id) {
	for (var i = 0; i < regions.length; i++) {
		if (regions[i].id == id) {
			return regions[i].color;
		}
	}
}

function paintRegion(disputedRegionId, colorConqueringEmpireId) {

	let region = document.getElementById(disputedRegionId.toString());

	region.classList.add("animatedTransitionRegionConquered");
	region.style.fill = colorConqueringEmpireId;
	region.addEventListener('animationend', function () {
		region.classList.remove('animatedTransitionRegionConquered');
	}, false);

}

function paintTheOriginalColorRegions() {
	for (i in regions) { // Paint regions with color
		document.getElementById(regions[i].id).style.fill = regions[i].color;
	}
}

function endGame(conquerorId, idGame) {



	var constructedUrl = "http://rafelserra.mooo.com:8080/wargame/winner/" + idGame + "/" + conquerorId;


	$.ajax({
		type: "POST",
		url: constructedUrl,
		success: function(data) {


			console.log("winner sent");

		},
		error: function(){
			alert("json not found");
		}
	});


	document.getElementById("countryList").style.display = "none";
	document.getElementById("message").setAttribute("class", "alert alert-success");
	document.getElementById("endWar").style.display = "block";

}

function stats(){
	document.getElementById("stats").style.display = "block";
	document.getElementById("submit-button-stats").outerHTML = "<input class='btn btn-secondary btn-lg' id='submit-button-hide-stats' type='submit' value='Hide Stats' onclick='hideStats()'>"


		var constructedUrl = "http://rafelserra.mooo.com:8080/wargame/stats";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			console.log(data[0]);

			tableStats.clear();

			for (var i=0; i<data.length; i++) {


				console.log(data[i].name);
				console.log(data[i].successRate);

				tableStats.row.add({

					"region" 	: data[i].name,
					"successRate" : data[i].successRate

				});	


			}

			tableStats.draw();


		},
		error: function(){
			alert("json not found");
		}
	});


}

function hideStats() {
	document.getElementById("stats").style.display = "none";
	document.getElementById("submit-button-hide-stats").outerHTML = "<input class='btn btn-primary btn-lg' id='submit-button-stats' type='submit' value='Show Stats' onclick='stats()'>"


}
