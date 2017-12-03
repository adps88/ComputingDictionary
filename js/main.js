"use strict";

function searchWord(){
  $(".definition").each(function(index, definitionDiv){
    var show = divContainsWord(definitionDiv);

    if(show==true){
      definitionDiv.style.display = "block";
    } else {
      definitionDiv.style.display = "none";
    }
  });
}

function divContainsWord(definitionDiv){
  var rawText = $(definitionDiv).text().toLowerCase();
  var searchWord = $('#search').val().toLowerCase();

  if(rawText.indexOf(searchWord)<0){
    return false;
  }
  return true;
}

function generateDefinitions()
{
    var rawText = document.getElementById("data").innerHTML;

    var lines = rawText.split("\n");

    for(var i=1; i<lines.length-1; i++){
      var pair =  lines[i].split(":");
      var word = pair[0].trim();
      var definition = pair[1].trim();

      var dictionary = document.getElementById("dictionary");
      var definitionText = "<div class='definition'><div>"+word+"</div><div>"+definition+"</div></div>";

      dictionary.innerHTML = dictionary.innerHTML + definitionText
    }



}
