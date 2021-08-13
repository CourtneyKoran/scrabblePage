/*
File: scrabble.js
GUI Assignment: HW5. Implmenting a portion of Scrabble using HTML, CSS, JavaScript, JQuery, and Bootsrap.
Courtney Koran, UMass Lowell Computer Science, Courtney_Koran@student.uml.edu
Copyright (c) 2021 by Courtney. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CK on August 13, 2021.
This JavaScript code created draggables and droppables for the scrabble.Code also calculates the scrabble 
score and implments the NextWord and StartOver buttons.
*/

/*  Scarbble data structure from Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu*/
/* Idea to add a image attribute to the associative array credit to Yong Cho*/ 
var ScrabbleTiles = [];
ScrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg" };
ScrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg" };
ScrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg" };
ScrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg" };
ScrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg" };
ScrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg" };
ScrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg" };
ScrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg" };
ScrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg" };
ScrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg" };
ScrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg" };
ScrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg" };
ScrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg" };
ScrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg" };
ScrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg" };
ScrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg" };
ScrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg" };
ScrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg" };
ScrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg" };
ScrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg" };
ScrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg" };
ScrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg" };
ScrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg" };
ScrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg" };
ScrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg" };
ScrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg" };
ScrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg" };


//Globals
var lastDrop = 60;
var lastDrop2 =0;
var lastDrop3 = 60;
var lastDrop4 = 0;
var wordScore = 0;
var roundScore = 0;
var countPlaced = 0;
var doubleWordScore = 0;
var tilesOriginal = 100;
var tilesRemaining = 100;
var tilesDropped = 0;
lastDragged=60;
lastDragges2=60;
var dragDiv = document.createElement('div');

//being scrabble
tostart();

function tostart() {

    var count = 0;

    dragDiv.id = 'draggable';   //create draggable div         
    dragDiv.class = "ui-widget-content"

    //While loop gets random scrabble letters from alphabet and creates a tile img based on the chosen letter
    while (count < 7) {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        if (ScrabbleTiles[randomLetter]["number-remaining"] > 0) {  //check to make sure there are tiles of the letter remaining

            var img = document.createElement('img');
            img.id = "tile" + count;

            img.src = ScrabbleTiles[randomLetter]["image"]; //use associative array to get image src

            dragDiv.appendChild(img);
            document.body.appendChild(dragDiv);

            //assign global variables with array objects of given letters to use latter when calculating scores
            switch (count) {
                case 0:
                    window.tile0 = ScrabbleTiles[randomLetter];
                case 1:
                    window.tile1 = ScrabbleTiles[randomLetter];
                case 2:
                    window.tile2 = ScrabbleTiles[randomLetter];
                case 3:
                    window.tile3 = ScrabbleTiles[randomLetter];
                case 4:
                    window.tile4 = ScrabbleTiles[randomLetter];
                case 5:
                    window.tile5 = ScrabbleTiles[randomLetter];
                case 6:
                    window.tile6 = ScrabbleTiles[randomLetter];
            }
            count++;
            
            ScrabbleTiles[randomLetter]["number-remaining"]--;
        }
    }
    tilesRemaining=tilesRemaining-7;
}

//draggable and droppable
$(function () {

    $("#draggable > img").draggable({

        //create function for revert so that draggables are only dropped when placed in on the leftmost droppable
        revert: function () {
            var boardPosition = document.getElementById("droppable").getBoundingClientRect().left;
            var boardPosition2 = document.getElementById("droppable").getBoundingClientRect().top;
            var tilePosition = ($(this)).position().left;
            var tilePositionTop = ($(this)).position().top - boardPosition2;
            var currentDrop = tilePosition - boardPosition;
    
            if (lastDrop < currentDrop || currentDrop < lastDrop2 || tilePositionTop != -49 || $(this).attr("class").includes("dropped") ) {
                return true;
            }
            else {
                $(this).addClass( "dropped" )
                lastDrop = lastDrop + 60;
                lastDrop2 = lastDrop2 + 60;
                lastDragged = currentDrop;
                return false;
            }
        }
    });

    $(".drop").droppable({
        hoverClass: 'active',
        drop: function (event, ui) {
            $(this).find(".drop")
            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
            tilesDropped++;
            var tileid = $(ui.draggable).attr("id");
            getPositionScore(tileid, $(this));  //call getPositionScore to calculate score everytime a tile is dropped
        }
    });
})

//function gets updates the score everytime a tile is dropped successfully
function getPositionScore(tileid, dropped) {
 
      //get the position of the tile 
      var boardPosition=document.getElementById("droppable").getBoundingClientRect().left;
      var boardPosition2=document.getElementById("droppable").getBoundingClientRect().top;
      var tilePositionTop = dropped.position().top - boardPosition2;
      var tile=document.getElementById(tileid );
      var tilePosition = tile.getBoundingClientRect().left;
      var currentDrop=tilePosition-boardPosition;

   //Calculating score
    if(lastDrop3 >= currentDrop  && currentDrop >= lastDrop4 && !($('#'+tileid).attr("class").includes("dropped"))){
        lastDrop3 = lastDrop3 + 60;
        lastDrop4 = lastDrop4 + 60;
    switch (tileid) {
        case "tile0":
            wordScore = wordScore + window.tile0["value"];  //use associative array to get the score for each tile
            break;
        case "tile1":
            wordScore = wordScore + window.tile1["value"];
            break;
        case "tile2":
            doubleWordScore = 1;
            wordScore = wordScore + window.tile2["value"];
            break;
        case "tile3":
            wordScore = wordScore + window.tile3["value"];
            break;
        case "tile4":
            wordScore = wordScore + window.tile4["value"];
            break;
        case "tile5":
            wordScore = wordScore + window.tile5["value"];
            break;
        case "tile6":
            wordScore = wordScore + (2 * window.tile6["value"]);
            break;
    }

    }

}

//funtion that will make dynamically created tiles draggable same as first draggable function.
function callDrag(img){
    $('#'+img).draggable({ revert: function () {
        var boardPosition = document.getElementById("droppable").getBoundingClientRect().left;
        var boardPosition2 = document.getElementById("droppable").getBoundingClientRect().top;
        var tilePosition = ($(this)).position().left;
        var tilePositionTop = ($(this)).position().top - boardPosition2;
        var currentDrop = tilePosition - boardPosition;
        
        if (lastDrop < currentDrop || currentDrop < lastDrop2 || tilePositionTop != -49 || $(this).attr("class").includes("dropped") ) {
            return true;
        }
        else {
            $(this).addClass( "dropped" )
            lastDrop = lastDrop + 60;
            lastDrop2 = lastDrop2 + 60;
            lastDragged = currentDrop;
            return false;
        }
    } })
  
}

//Function called when next word is clicked
function nextWord(){
    $( ".dropped" ).remove();   //remove tiles on the board

    //set position bounds back to original values
   lastDrop = 60;
   lastDrop2 =0;
   lastDrop3 = 60;
   lastDrop4 = 0;

   //if there was a double word score double the word score
   if(doubleWordScore==1){
       wordScore=wordScore*2;
   }
   doubleWordScore=0;
   roundScore=roundScore+wordScore; //set the round score
   wordScore=0; 

   var neededTiles=7 - $("#draggable >img").length; //caluculate the number od tiles needed
   var loopCount=0;
   var loopPlus1=1;

   //while loop updates the remaining tiles id so the first tile has id tile0
   while(loopCount< $("#draggable >img").length){
    var tempTile = $('#draggable> img:nth-child(' + loopPlus1 + ')');
       switch (loopCount) {
        case 0:
            var letter= $(tempTile).attr("src").slice(-5,-4);   //get the letter from the image source using slice
            window.tile0 = ScrabbleTiles[letter];               //set globals to get score later
        case 1:
            var letter= $(tempTile).attr("src").slice(-5,-4)
            window.tile1 = ScrabbleTiles[letter];
        case 2:
            var letter= $(tempTile).attr("src").slice(-5,-4)
            window.tile2 = ScrabbleTiles[letter];
        case 3:
            var letter= $(tempTile).attr("src").slice(-5,-4)
            window.tile3 = ScrabbleTiles[letter];
        case 4:
            var letter= $(tempTile).attr("src").slice(-5,-4)
            window.tile4 = ScrabbleTiles[letter];
        case 5:
            var letter= $(tempTile).attr("src").slice(-5,-4)
            window.tile5 = ScrabbleTiles[letter];
        case 6:
            var letter= $(tempTile).attr("src").slice(-5,-4)
            window.tile6 = ScrabbleTiles[letter];
    }
    
    $(tempTile).attr("id", "tile"+loopCount);
    loopCount++;
    loopPlus1++;
   }

   //creating new tiles
    var countTiles= 7-neededTiles;
    var seven=7;

    //if there aren't enough tiles to fill the rack be able to use up remaining tiles
    if(tilesRemaining<neededTiles){     
        seven=countTiles+tilesRemaining;
    }

    //while loop creates new tiles. Starts at index after need tiles and goes to 6. similar to toStart() function.
    while (countTiles < seven) {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_"
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        if (ScrabbleTiles[randomLetter]["number-remaining"] > 0) {
            var img = $('<img>'); 
            img.attr('id', "tile" + countTiles);
            img.attr('src', ScrabbleTiles[randomLetter]["image"]);
            img.appendTo('#draggable');
            callDrag(img.attr('id'));
            document.body.appendChild(dragDiv);
            switch (countTiles) {
                case 0:
                    window.tile0 = ScrabbleTiles[randomLetter];
                case 1:
                    window.tile1 = ScrabbleTiles[randomLetter];
                case 2:
                    window.tile2 = ScrabbleTiles[randomLetter];
                case 3:
                    window.tile3 = ScrabbleTiles[randomLetter];
                case 4:
                    window.tile4 = ScrabbleTiles[randomLetter];
                case 5:
                    window.tile5 = ScrabbleTiles[randomLetter];
                case 6:
                    window.tile6 = ScrabbleTiles[randomLetter];
            }
            countTiles++;
            ScrabbleTiles[randomLetter]["number-remaining"]--;
        }
    }
    
    //if all tiles are used tiles remaining is zero
    if(tilesRemaining<neededTiles){
        tilesRemaining=tilesRemaining-tilesRemaining;
    }
    else{
    tilesRemaining=tilesRemaining-neededTiles;
    }
}

//when NextWord button is clicked
$("#NextWord").click(function() {
    if(tilesRemaining==0){
     $('#message').text("There are no remaining tiles. Click Start Over to Begin a new game.");
    }
    //tried to implment this but was causing bugs dont know why 
    /*else if(tilesDropped<2){
        $('#message').text("A scrabble word must be at least two letters.");
    }*/
    else{
   nextWord();
    }
    //display score and remaining tiles
    $('#roundScore').text(roundScore);
    $('#remaining').text(tilesRemaining);
    tilesDropped=0;

      });

//when start over button is clicked reload the page and start new
$("#StartOver").click(function() {
    location.reload();
    });