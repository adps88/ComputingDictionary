"use strict";
function searchWord(){
  var dict = document.getElementById("dictionary");
  var defDivs = dict.children;

  if(document.getElementById("search").value.length >=3){

    for(var i=1; i<defDivs.length; i++){
      var show = divContainsWord(defDivs[i]);

      if(show==true){
        defDivs[i].style.display = "block";
      } else {
        defDivs[i].style.display = "none";
      }
    }
  } else {
    for(var i=1; i<defDivs.length; i++){
      defDivs[i].style.display = "block";
    }
  }
}

function divContainsWord(defDiv){
  var divs = defDiv.children;
  var word = divs[0].innerHTML.toLowerCase();
  var def = divs[1].innerHTML.toLowerCase();

  if(stringContainsWord(word) || stringContainsWord(def)){
    return true;
  }
  return false;
}

function stringContainsWord(word){
  var searchWord = document.getElementById("search").value.toLowerCase();

  for(var i = 0; i < word.length-searchWord.length+1; i++){
    if (searchWord == word.slice(i, i+searchWord.length)){
      return true;
    }
  }
  return false;
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
      var definitionText = "<div><div>"+word+"</div><div>"+definition+"</div></div>";

      dictionary.innerHTML = dictionary.innerHTML + definitionText
    }



}
