$(document).ready( function() {
 	corporateData();
	fetch();
});
 //automatically fetch the data without reloading the page
function fetch() {
 
		setTimeout( function() {
	 	corporateData();
		fetch();
	}, 700);
 
}
//function that will get the xml data from the xml file  
function corporateData() {
 
	$.ajax({ 
 
	 url: "corporateData.xml",
	 dataType: "xml",
	 success: function(data) {
 
	  $("ul").children().remove();
 //use the tag to find each item in the xml data
	  $(data).find("employee").each( function() {
 //find each item and put in the list
	   var info = "<li>Name: "+$(this).find("Name").text()+"</li> <li>age: "+$(this).find("age").text()+"</li> <li>company: "+$(this).find("company").text()+"</li>";																																																																																																																																																																																						
 
                      										
 
	   $("ul").append(info);
 
	  });
 
	 },
	 error: function() { $("ul").children().remove(); 
                             $("ul").append("<li>There was an error baby!</li>"); }
	});	
}
//(Technotip.com, 2017)