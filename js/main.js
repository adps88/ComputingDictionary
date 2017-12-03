"use strict";

function searchWord(){
  $('.highlighted').contents().unwrap();

  $(".definition").each(function(index, definitionDiv){
    var show = dictionaryItemContainsWord(definitionDiv, $("#search").val());

    if(show==true){
      definitionDiv.style.display = "block";
    } else {
      definitionDiv.style.display = "none";
    }
  });
}

function dictionaryItemContainsWord(dictionaryItem, searchWord){
  var wordItem = $(dictionaryItem).children().first();
  var definitionItem = $(dictionaryItem).children().last();

  return divContains(wordItem, searchWord) || divContains(definitionItem, searchWord);
  
}

function divContains(item, searchWord){
  var contains = false;
  var string = item.text();

  for(var i = string.length-searchWord.length; i > 0 ; i--){
    if (searchWord.toLowerCase() == string.slice(i, i+searchWord.length).toLowerCase()){
      console.log("search word:" + searchWord + " string:" + string);
      contains = true;

      string = [string.slice(0, i), "<span class='highlighted'>", string.slice(i)].join("");
      string = [string.slice(0, i+searchWord.length+26), "</span>", string.slice(i+searchWord.length+26)].join("");
    }
  }
  $(item).html(string);

  return contains;
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
