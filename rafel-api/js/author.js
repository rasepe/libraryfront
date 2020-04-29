

const node = document.getElementsByTagName("input")[0];
//const node = document.getElementsByClassName(".input")[0];
node.addEventListener("keyup", function(event) {
	console.log(event.key);
	if (event.key === "Enter") {



		$('#author-search-results').show();

		$('#work-results').collapse('hide');


		
		searchAuthor(document.getElementById("string").value);

	}


});


//const  = document.getElementsByClassName("author-name");


//const node = document.getElementsByClassName(".input")[0];

function showAuthor (num) {
	$('#work-results').collapse('show');
	$('#author-search-results').hide(50);

	console.log(num);

	var key = "myAuthor" + num;
	var currentAuthorJSON = sessionStorage.getItem(key);

	console.log(currentAuthorJSON);

	var currentAuthor = JSON.parse(currentAuthorJSON);

	var surname="";
	var name="";
	var yearBirth="";
	var yearDeath="";
	if (currentAuthor.surname != null) {
		surname = currentAuthor.surname + ", ";
	}
	if (currentAuthor.name != null) {
		name = currentAuthor.name;
	}
	if (currentAuthor.yearBirth != null) {
		yearBirth = " (" + currentAuthor.yearBirth + "-";
	}
	if (currentAuthor.yearDeath != null) {
		yearDeath = currentAuthor.yearDeath + ")";
	}


	var authorString1 = surname + name;
	var authorString2 = "";
	if (currentAuthor.yearBirth != null || currentAuthor.yearDeath != null) {
		authorString2 = yearBirth + yearDeath;
	}


	document.getElementById("work-results").innerHTML = 
		"<div class='row my-3'>"+
		"<div class='col'>"+
		"<h2><small class='text-muted'>List of works from: </small>"+authorString1+"<small class='text-muted'>"+authorString2+"</small></h2>"+
		"</div>"+
		"</div>";





	var constructedUrl = "http://localhost:8080/work/" + currentAuthor.id;


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			showWorksFromAuthor(data);

		},
		error: function(){
			alert("json not found");
		}
	});


}

function showWorksFromAuthor(data) {
	console.log("data:");
	data.sort((a, b) => (a.uniformTitle > b.uniformTitle) ? 1 : -1);
	console.log(data);

	document.getElementById("work-results").innerHTML += 
		"<div class='row'>"+
		"<div class='col offset-md-1'>"+
		"<div class='accordion' id='works'>"+
		"</div>"+
		"</div>"+
		"</div>"

		document.getElementById("work-results").innerHTML += 

			"<div class='row my-5'>"+
			"<div class='col'>"+
			"<button id='back-to-results' type='button' class='btn btn-secundary btn-sm' onclick='backToResults()'>Back to results list</button>"+
			"</div>"+
			"</div>"



			for (var i=0; i<data.length; i++) {

				//var constructedUrl = "http://localhost:8080/expression/" + data[i].id + "/number";
				var uniformTitle = data[i].uniformTitle;

				document.getElementById("works").innerHTML += 

					"<div class='card work--"+(i+1)+"'>"+
					"<div class='card-header' id='heading-work-"+(i+1)+"'>"+
					"<h2>"+
					"<button class='btn btn-link collapsed' type='button' data-toggle='collapse' data-target='#expressions-work-"+(i+1)+"'>"+     //onclick='getExpressionsFromWork("+data[i].id+","+(i+1)+")'
					"<div class='button-plus-minus'></div>"+
					uniformTitle+
					"</button>"+
					"<span class='h2--badges align-middle'><span class='badge badge-pill badge-info mx-2' id='numberExpressions"+(i+1)+"'></span> expressions</span>"+                                  
					"</h2>"+
					"</div>"+
					"</div>";

				console.log("holi1");

				(data[i].id, i);
				
				getNumberExpressionsFromWork(data[i].id, i);
				
				getExpressionsFromWork(data[i].id,(i+1));
				
				sleep(200);
				
				/*       	$.ajax({
        		type: "GET",
        		url: constructedUrl,
        		success: function(numberExpressions) {

        			 document.getElementById("numberExpressions"+(i+1)).innerHTML = numberExpressions;





        		},
        		error: function(){
        			alert("json not found");
        		}
        	});
				 */
				console.log("holi2");

			}


}

function getExpressionsFromWork(workId, num) {
	
		
		var constructedUrl = "http://localhost:8080/expression/" + workId;


$.ajax({
	type: "GET",
	url: constructedUrl,
	success: function(data) {


		//showExpressions(data, num);

		console.log(data);
		console.log("num:" + num);
		
		document.getElementsByClassName("work--"+num)[0].innerHTML +=
			"<div id='expressions-work-"+num+"' class='collapse'>"+
	    "<div class='card-body offset-md-1'>"+
	    "</div>"+
	    "</div>"
		
		for (var i=0; i<data.length; i++) {
			
			//document.getElementsByClassName("work--"+num)[0].innerHTML +=
			document.getElementsByClassName("card-body")[num-1].innerHTML +=
			
		        "<ul class='my-3 expression--list'>"+
		        "<li id='expression"+(i+1)+"-from-work-"+num+"'>"+
	            "<a class='collapsed' data-toggle='collapse' href='#expression-"+(i+1)+"-from-work-"+num+"'><div class='button-plus-minus'></div>"+data[i].title+"</a>"+ //<i class='fa fa-chevron-down pull-right'></i>
	                "<small class='text-muted ml-3' id='dataFromExpression"+(i+1)+"-from-work-"+num+"'>Language: "+data[i].language+"; "; //<span class='badge badge-pill badge-info ml-3'>1</span> manifestation
	               
	        
			for (var j=0; j<data[i].collaborators.length; j++) {
				var currentCollaborator = data[i].collaborators[j];
				var surname="";
				var name="";
				var yearBirth="";
				var yearDeath="";
				if (currentCollaborator.surname != null) {
					surname = currentCollaborator.surname + ", ";
				}
				if (currentCollaborator.name != null) {
					name = currentCollaborator.name;
				}
				if (currentCollaborator.yearBirth != null) {
					yearBirth = " (" + currentCollaborator.yearBirth + "-";
				}
				if (currentCollaborator.yearDeath != null) {
					yearDeath = currentCollaborator.yearDeath + ")";
				}


				var collaboratorString1 = surname + name;
				var collaboratorString2 = "";
				var collaboratorString3 = ", " + data[i].collaborators[j].function + ". ";
				if (currentCollaborator.yearBirth != null || currentCollaborator.yearDeath != null) {
					collaboratorString2 = yearBirth + yearDeath;
				}
				
				
				document.getElementById("dataFromExpression"+(i+1)+"-from-work-"+num).innerHTML += collaboratorString1+collaboratorString2+collaboratorString3;
				
				console.log("pausa");
			}
			
			document.getElementById("dataFromExpression"+(i+1)+"-from-work-"+num).innerHTML += "<span class='badge badge-pill badge-info ml-3' id='spanFromExpression"+(i+1)+"-from-work-"+num+"'>";
				
				getNumberManifestationsFromExpression(data[i],num,(i+1));
				
				document.getElementById("dataFromExpression"+(i+1)+"-from-work-"+num).innerHTML += "</span> manifestation";
			
			document.getElementsByClassName("card-body")[num-1].innerHTML +=
				
	                "</small>";
	            
	                getManifestationsFromExpression(data[i],num,(i+1));
	         
	                document.getElementsByClassName("card-body")[num-1].innerHTML +=        
	                "</li>"+
			        "</ul>";
	                
	       
	        
	     
		}
		
		
		
		
	},
	error: function(){
		alert("json not found");
	}
});
}


function getManifestationsFromExpression(expression,numWork,numExp) {
	var constructedUrl = "http://localhost:8080/manifestation/" + expression.id;


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {

			console.log("Num obra: " + numWork);
			console.log("Num exp: " + numExp);
			var manif = JSON.parse(data);
			console.log(manif);
			for (var i=0; i<manif.length; i++) {
				console.log(manif[i].isbn);	
			}
			
			if (manif.length == 1) {
				//SI NOMES HI HA UNA MANIFESTACIÓ
				document.getElementById("expression"+numExp+"-from-work-"+numWork).innerHTML +=
	                "<div class='collapse m-3 expression-table' id='expression-"+numExp+"-from-work-"+numWork+"'>"+
	                "<table class='table table-striped table-hover'>"+
	                    "<tbody>"+                 
	                        "<tr>"+
	                            "<td>ISBN:</td>"+
	                            "<td>"+manif[0].isbn+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>DL</td>"+
	                            "<td>"+manif[0].DL+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>Title Proper</td>"+
	                            "<td>"+manif[0].titleProper+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>Place publication</td>"+
	                            "<td>"+manif[0].placePublication+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>Publisher</td>"+
	                            "<td>"+manif[0].publisher+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>Year publication</td>"+
	                            "<td>"+manif[0].yearPublication+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>Support</td>"+
	                            "<td>"+manif[0].support+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
	                            "<td>Collection</td>"+
	                            "<td>"+manif[0].collection+"</td>"+
	                        "</tr>"+
	                        "<tr>"+
                            "<td>Collection number</td>"+
                            "<td>"+manif[0].collectionNumber+"</td>"+
                        "</tr>"+
	                    "</tbody>"+
	                "</table>"+
	            "</div>";
				
	                //SI HI MA MES D'UNA MANIFESTACIÓ:
	                /*<ul class="collapse" id="expression-2-list-from-work-2">
                 <li>
                     <a class="collapsed" data-toggle="collapse" href="#manifestation-1-from-expression-2-list-from-work-2">Book<i class="fa fa-chevron-down pull-right"></a>
                         <small class="text-muted ml-3">bradikum</small>
                         <div class="collapse m-3 expression-table" id="manifestation-1-from-expression-2-list-from-work-2">
                             <table class="table table-striped table-hover">
                                 <tbody>
                                     <tr>
                                         <td>ISBN:</td>
                                         <td>9999-888-333-4444-5</td>
                                     </tr>
                                     <tr>
                                         <td>DL</td>
                                         <td>B. 4444-2009</td>
                                     </tr>
                                     <tr>
                                         <td>Title Proper</td>
                                         <td>Otelium ant volum pasutim</td>
                                     </tr>
                                     <tr>
                                         <td>Place publictation</td>
                                         <td>Bratislavum</td>
                                     </tr>
                                     <tr>
                                         <td>Publisher</td>
                                         <td>Mostin Kruger</td>
                                     </tr>
                                     <tr>
                                         <td>Year publication</td>
                                         <td>2009</td>
                                     </tr>
                                     <tr>
                                         <td>Support</td>
                                         <td>Book</td>
                                     </tr>
                                     <tr>
                                         <td>collection</td>
                                         <td>Majitum bradevum</td>
                                     </tr>
                                 </tbody>
                             </table>
                         </div>
                 </li>
                 <li>
                     <a data-toggle="collapse" href="#manifestation-2-from-expression-2-list-from-work-2">Audiobook</a>
                         <small class="text-muted ml-3">bradikum</small>
                         <div class="collapse m-3 expression-table" id="manifestation-2-from-expression-2-list-from-work-2">
                             <table class="table table-striped table-hover">
                                 <tbody>
                                     <tr>
                                         <td>ISBN:</td>
                                         <td>9999-888-333-4444-5</td>
                                     </tr>
                                     <tr>
                                         <td>DL</td>
                                         <td>B. 4444-2009</td>
                                     </tr>
                                     <tr>
                                         <td>Title Proper</td>
                                         <td>Otelium ant volum pasutim</td>
                                     </tr>
                                     <tr>
                                         <td>Place publictation</td>
                                         <td>Bratislavum</td>
                                     </tr>
                                     <tr>
                                         <td>Publisher</td>
                                         <td>Mostin Kruger</td>
                                     </tr>
                                     <tr>
                                         <td>Year publication</td>
                                         <td>2009</td>
                                     </tr>
                                     <tr>
                                         <td>Support</td>
                                         <td>Audio book</td>
                                     </tr>
                                     <tr>
                                         <td>collection</td>
                                         <td>Majitum bradevum</td>
                                     </tr>
                                 </tbody>
                             </table>
                         </div>
                 </li>
             </ul>*/
			}
			
			
			
			

		},
		error: function(){
			alert("json not found");
		}
	});

}

function getNumberManifestationsFromExpression(expression,numWork,numExp) {
	var constructedUrl = "http://localhost:8080/manifestation/number/" + expression.id;


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {

		
				document.getElementById("spanFromExpression"+numExp+"-from-work-"+numWork).innerHTML += data;
					
			
			
			
			

		},
		error: function(){
			alert("json not found");
		}
	});

}


function showExpressions(expressions, num) {
	console.log(expressions);
	console.log("num:" + num);
	
	document.getElementsByClassName("work--"+num)[0].innerHTML +=
		"<div id='expressions-work-"+num+"' class='collapse'>"+
    "<div class='card-body offset-md-1'>"+
    "</div>"+
    "</div>"
	
	for (var i=0; i<expressions.length; i++) {
		
		//document.getElementsByClassName("work--"+num)[0].innerHTML +=
		document.getElementsByClassName("card-body")[num-1].innerHTML +=
		
	        "<ul class='my-3'>"+
	        "<li>"+
            "<a data-toggle='collapse' href='#expression-"+(i+1)+"-from-work-"+num+"'>"+expressions[i].title+"</a>"+
                "<small class='text-muted ml-3'>Language: "+expressions[i].language+" ;"+ //<span class='badge badge-pill badge-info ml-3'>1</span> manifestation
                "</small>"+
            "<div class='collapse m-3 expression-table' id='expression-"+(i+1)+"-from-work-"+num+"'>"+
              /*  <table class="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <td>ISBN:</td>
                            <td>978-84-316-4140-5</td>
                        </tr>
                        <tr>
                            <td>DL</td>
                            <td>B. 4193-2009</td>
                        </tr>
                        <tr>
                            <td>Title Proper</td>
                            <td>Romeo y Julieta</td>
                        </tr>
                        <tr>
                            <td>Place publictation</td>
                            <td>Barcelona</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>Vicens Vives</td>
                        </tr>
                        <tr>
                            <td>Year publication</td>
                            <td>2009</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Book</td>
                        </tr>
                        <tr>
                            <td>collection</td>
                            <td>Clásicos universales</td>
                        </tr>
                    </tbody>
                </table>*/
            "</div>"+
        "</li>"+
	        "</ul>"
        
     
	}

}


function backToResults() {
	$('#work-results').collapse('hide');
	$('#author-search-results').show(50);
	
	//$('#author-search-results').show();

	//$('#work-results').collapse('hide');
}

function getNumberExpressionsFromWork (workId, i) {
	var constructedUrl = "http://localhost:8080/expression/" + workId + "/number";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			document.getElementById("numberExpressions"+(i+1)).innerHTML = data;

		},
		error: function(){
			alert("json not found");
		}
	});

}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}


function searchAuthor(author) {


	var constructedUrl = "http://localhost:8080/author/" + author;


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			printAuthorList(data);

		},
		error: function(){
			alert("json not found");
		}
	});
}


function printAuthorList(data) {

	if (data.length > 0)  {
		document.getElementsByClassName("list-group")[0].innerHTML = "";
		//$('#author-search-results').show();
	}

	data.sort((a, b) => (a.surname > b.surname) ? 1 : -1)
	console.log(data);
	var result = "";
	for(var i=0; i<data.length; i++) {
		var surname="";
		var name="";
		var yearBirth="";
		var yearDeath="";
		if (data[i].surname != null) {
			surname = data[i].surname + ", ";
		}
		if (data[i].name != null) {
			name = data[i].name;
		}
		if (data[i].yearBirth != null) {
			yearBirth = " (" + data[i].yearBirth + "-";
		}
		if (data[i].yearDeath != null) {
			yearDeath = data[i].yearDeath + ")";
		}


		result = surname + name + yearBirth + yearDeath; 

		var myAuthor = "myAuthor"+i;

		sessionStorage.setItem(myAuthor, JSON.stringify(data[i]));






		document.getElementsByClassName("list-group")[0].innerHTML += 
			"<li class='list-group-item list-group-item-action'>"+
			"<a href='#' class='author-name mr-2' onclick='showAuthor("+i+")'>"+result+"</a>"+
			"<span class='badge badge-pill badge-info mx-2'id='numberworksauthor"+i+"'></span> works&nbsp;"+
			"<span class='badge badge-pill badge-info mx-2'id='numberexpressionsauthor"+i+"'></span> expressions&nbsp;"+
			"<span class='badge badge-pill badge-info mx-2'id='numbermanifestationsauthor"+i+"'></span> manifestations"+
			"</li>";

		getNumberWorksFromAuthor(data[i].id, i);
		getNumberExpressionsFromAuthor(data[i].id, i);
		//sleep(200);
		getNumberManifestationsFromAuthor(data[i].id, i);		  
		/*if (i != counter) {
				sleep(200);
			}
		  getWorks(data[i].id, result);*/

	}



	//document.getElementById("results").innerHTML = result;
}



function getNumberWorksFromAuthor (authorId, i) {
	var constructedUrl = "http://localhost:8080/work/" + authorId + "/number";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			document.getElementById("numberworksauthor"+i).innerHTML = data;

		},
		error: function(){
			alert("json not found");
		}
	});

}


function getNumberExpressionsFromAuthor (authorId, i) {
	var constructedUrl = "http://localhost:8080/expression/" + authorId + "/numberfromauthor";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			document.getElementById("numberexpressionsauthor"+i).innerHTML = data;

		},
		error: function(){
			alert("json not found");
		}
	});

}


function getNumberManifestationsFromAuthor (authorId, i) {
	var constructedUrl = "http://localhost:8080/manifestation/" + authorId + "/numberfromauthor";


	$.ajax({
		type: "GET",
		url: constructedUrl,
		success: function(data) {


			document.getElementById("numbermanifestationsauthor"+i).innerHTML = data;

		},
		error: function(){
			alert("json not found");
		}
	});

}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}
