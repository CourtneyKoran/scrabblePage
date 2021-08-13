# scrabblePage
GUI UMass Lowell: HW5 implementing a portion of Scrabble using HTML, CSS, JavaScript, jQuery, and Bootstrap. 

Link to Scrabble page: https://courtneykoran.github.io/scrabblePage/

Link to repository: https://github.com/CourtneyKoran/scrabblePage

Implmented features and their status:
-7 tiles appear in players hand and are selected randomly using math.random();
-letters can be dropped on to Scrabble squares
-program identifies which letter is droppeod onto which Scrabble square and uses the
position to calculate the score including bonus square multipliers
-player can go play their next word as many times as they'd like until the tiles are
depleted.Tiles in rack are brought back to seven after every word submission.
-tiles are cleared off the board after each round
-Score is kept over multiple word submissions until new game is started.
-tiles can only be dragged from the rack to the Scrabble board. Once a tile is placed
on the board it cannot be moved. All tiles must be placed next to the previous.
-user is able to start over when they want. Setting the score back to zero and the 
remaing tiles back to 100.
- was not able to make words less than two letters illegal.
- small bug on blank tile (occurs rarely so hard to fix).
