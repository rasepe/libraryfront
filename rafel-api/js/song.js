/**
 * 
 */
const node = document.getElementsByTagName("input")[0];
//const node = document.getElementsByClassName(".input")[0];
node.addEventListener("keyup", function(event) {
	console.log(event.key);
	if (event.key === "Enter") {


		 $('#song-search-results').show();
		$('#albums-and-versions-results').collapse('hide');
          

		searchSong(document.getElementById("string").value);

	}


});

function searchSong(song) {


	var constructedUrl = "http://rafelserra.mooo.com:8080/song/" + song;



	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			printSongList(data);

		},
		error: function(){
			alert("json not found");
		}
	});
}


function printSongList(data) {

	if (data.length > 0)  {
		document.getElementsByClassName("list-group")[0].innerHTML = "";
		//$('#author-search-results').show();
	}

	data.sort((a, b) => (a.title > b.title) ? 1 : -1)
	console.log(data);
	var result = "";
	for(var i=0; i<data.length; i++) {


		
		var mySong = "mySong"+i;

		sessionStorage.setItem(mySong, JSON.stringify(data[i]));






		document.getElementsByClassName("list-group")[0].innerHTML += 
			
		"<li class='list-group-item list-group-item-action'>"+
        "<a href='#' class='song--name mr-2' onclick='showSong("+i+")'>"+data[i].title+"</a>"+
        "<span class='badge badge-pill badge-info mx-2'id='numberversionssong"+i+"'></span>versions and appears on"+
        "<span class='badge badge-pill badge-info mx-2'id='numberalbumssong"+i+"'></span>albums"+
        "</li>";
			

		getNumberVersionsFromSong(data[i].id, i);
		getNumberAlbumsFromSong(data[i].id, i);
		
		//getNumberManifestationsFromAuthor(data[i].id, i);		  
		

	}



}


function getNumberVersionsFromSong (songId, i) {
	var constructedUrl = "http://rafelserra.mooo.com:8080/songversion/" + songId + "/number";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			document.getElementById("numberversionssong"+i).innerHTML = data;

		},
		error: function(){
			alert("json not found");
		}
	});

}

function getNumberAlbumsFromSong (songId, i) {
	var constructedUrl = "http://rafelserra.mooo.com:8080/song/" + songId + "/numberworks";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			document.getElementById("numberalbumssong"+i).innerHTML = data;

		},
		error: function(){
			alert("json not found");
		}
	});

}

function showSong (num) {
	$('#albums-and-versions-results').collapse('show');
	 $('#song-search-results').hide('50');
		

	console.log(num);

	var key = "mySong" + num;
	var currentSongJSON = sessionStorage.getItem(key);

	console.log(currentSongJSON);

	var currentSong = JSON.parse(currentSongJSON);




	document.getElementById("albums-and-versions-results").innerHTML = 
		  "<div class='row my-3'>"+
    "<div class='col' id='listversions'>"+
        "<h2><small class='text-muted'>Albums and versions from: </small>"+currentSong.title+"</h2>"+
    "</div>"+
"</div>";


	


	var constructedUrl = "http://rafelserra.mooo.com:8080/songversion/" + currentSong.id;


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {
			
			data.sort((a, b) => ((a.year+a.month) < (b.year+b.month)) ? 1 : -1);
			
			console.log("has "+ data.length + " versions:");
			console.log(data);
			
			document.getElementById("albums-and-versions-results").innerHTML +=
			
			   "<div class='row'>"+
               "<div class='col offset-md-1'>"+
                   "<h2><span class='badge badge-pill badge-info mr-2'>"+data.length+"</span>Versions</h2>"+
                  "<div class='accordion' id='versions'>"+
                   "</div>"+
                   "</div>"+
                   "</div>";
			
			for (var i=0; i<data.length; i++) {
				document.getElementById("versions").innerHTML +=
					
					"<div class='card version--"+(i+1)+"--song--1' id='cardversion--"+(i+1)+"--song--1'>"+
					"<div class='card-header' id='heading-version-"+(i+1)+"-song-1'>"+
                "<h2>"+
                    "<button class='btn btn-link collapsed' type='button' data-toggle='collapse' data-target='#version-"+(i+1)+"-song-1'>"+
                    "<div class='button-plus-minus'></div>"+
                        data[i].titleProper+
                    "</button>"+
                    "<span class='h2--badges'>appears on <span class='badge badge-pill badge-info mx-2' id='spanversion-"+(i+1)+"'></span>albums</span>";
                "</h2>"+
                "</div>"+
                "</div>";
                
                
                document.getElementById("cardversion--"+(i+1)+"--song--1").innerHTML +=
                
                "<div id='version-"+(i+1)+"-song-1' class='collapse'>"+
                "<div class='card-body offset-md-1'>"+
                    "<ul id='album--list--of--the--version"+(i+1)+"' class='album--list--of--the--version'>"+   //class
                    "</ul>"+
                    "</div>"+
                    "</div>";
                
                
				
                showNumberAlbumsFromVersion(data[i].id, (i+1));
                showAlbumsFromVersion(data[i].id, (i+1));
                if (i==0) {
                showHeaderAlbumsFromSong(currentSong.id, (i+1));
                };
                
                
			}
			
			
			
			
			

		},
		error: function(){
			alert("json not found");
		}
	});


}

function showHeaderAlbumsFromSong(songId, num) {
	
	var constructedUrl = "http://rafelserra.mooo.com:8080/song/"+songId+"/works"; 
	
	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {

			console.log("appears on " +data.length + " albums:");
			console.log(data);
			document.getElementById("albums-and-versions-results").innerHTML += 
				"<div class='row'>"+
	             "<div class='col offset-md-1'>"+
	                 "<h2><span class='badge badge-pill badge-info mr-2'>"+data.length+"</span>Albums</h2>"+
	                 "<div class='accordion' id='albums'>"+
					"</div>"+
	                 "</div>"+
	                 "</div>";
			showAlbumsFromSong(songId, num);
		},
		error: function(){
			alert("json not found");
		}
	});
}

function showAlbumsFromSong(songId, num) {
	
	var constructedUrl = "http://rafelserra.mooo.com:8080/song/"+songId+"/works"; 
	
	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {
			
			data.sort((a, b) => ((a.year+a.month) > (b.year+b.month)) ? 1 : -1)
			console.log("albums ordenats:"+data)	
		for (var i=0; i<data.length; i++) {
			
		
			
			document.getElementById("albums").innerHTML += 
			     "<div class='card album--"+i+"'>"+
            "<div class='card-header' id='heading-album-"+num+"'>"+
                "<h2>"+
                    "<button class='btn btn-link collapsed' type='button' data-toggle='collapse' data-target='#album-"+(i+1)+"-data'><div class='button-plus-minus'></div>"+
                        data[i].uniformTitle+
                    "</button>"+                                  
                    "<h2>"+
            "</div>"+
            "<div id='album-"+(i+1)+"-data' class='collapse'>"+
                "<div class='card-body offset-md-1'>"+
                    "<table class='table table-striped table-hover'>"+
                        "<tbody>"+
                            "<tr>"+
                            "<td>Title</td>"+
                            "<td>"+data[i].uniformTitle+"</td>"+
                            "</tr>"+
							"<tr>"+
                            "<td>Authors</td>"+
                            "<td id='authorstablebis"+(i+1)+"'></td>"+
                            "</tr>"+
                            "<td>Year</td>"+
                            "<td>"+data[i].year+"</td>"+
                            "</tr>"+
                        "</tbody>"+
                    "</table>"+
                    "</div>"+
                    "</div>"+
                    "</div>";
                   
			
			for (var j=0; j<data[i].authors.length; j++) {
				document.getElementById("authorstablebis"+(i+1)).innerHTML += data[i].authors[j].surname + ", " + data[i].authors[j].name;
			}
        
		}
			document.getElementById("albums").innerHTML += 
			 "<div class='row my-5'>"+
             "<div class='col'>"+
                  "<button id='back-to-results' type='button' class='btn btn-secundary btn-sm' onclick='backToResults()'>Back to results list</button>"+
              "</div>"+
          "</div>";
        
		},
		error: function(){
			alert("json not found");
		}
	});
}

function showNumberAlbumsFromVersion(versionId, numVersion) {
	
var constructedUrl = "http://rafelserra.mooo.com:8080/songversion/"+versionId+"/numberworks"; 
	
	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {

			document.getElementById("spanversion-"+numVersion).innerHTML += data;
			

		},
		error: function(){
			alert("json not found");
		}
	});
}

function showAlbumsFromVersion(versionId, numVersion) {
	
var constructedUrl = "http://rafelserra.mooo.com:8080/songversion/"+versionId+"/works"; 

	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {
			data.sort((a, b) => ((a.year+a.month) > (b.year+b.month)) ? 1 : -1);
			for (var i=0; i<data.length; i++) {
				
				document.getElementById("album--list--of--the--version"+numVersion).innerHTML +=
				"<li>"+
                "<a href='#version--"+numVersion+"--table--album--"+(i+1)+"' data-toggle='collapse' class='collapsed'><div class='button-plus-minus'></div>"+data[i].uniformTitle+"</a>"+
                "<div id='version--"+numVersion+"--table--album--"+(i+1)+"' class='collapse'>"+
                    "<table class='table table-striped table-hover'>"+
                        "<tbody>"+
                            "<tr>"+
                                "<td>Title</td>"+
                                "<td>"+data[i].uniformTitle+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td>Authors</td>"+
                                "<td id='authorstable"+((i+1)+numVersion.toString())+"'></td>"+
                            "</tr>"+
                            "<td>Year</td>"+
                            "<td>"+data[i].year+"</td>"+
                            "</tr>"+
                        "</tbody>"+
                    "</table>"+
                "</div>"+
            "</li>";
				
				for (var j=0; j<data[i].authors.length; j++) {
					document.getElementById("authorstable"+((i+1)+numVersion.toString())).innerHTML += data[i].authors[j].surname + ", " + data[i].authors[j].name;
				}
				
			}
			
			
			

		},
		error: function(){
			alert("json not found");
		}
	});
}

function backToResults() {
	//$('#work-results').collapse('hide');
	//$('#author-search-results').show(50);
	
	$('#albums-and-versions-results').collapse('hide');
	 $('#song-search-results').show(50);
		
}
