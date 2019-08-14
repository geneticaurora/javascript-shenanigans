//Noughts and Crosses if else Challenge -  Checks winning items
// horiz = "-----------------------"
// var blank = "       |       |     "
// var s1 = "   O   "
// var s2 = "   X   "
// var s3 = "   X   "
// var s4 = "   X   "
// var s5 = "   O   "
// var s6 = "   O   "
// var s7 = "   X   "
// var s8 = "   O   "
// var s9 = "   X   "
// console.log(" ");
// console.log(blank)
// console.log(`${s1}|${s2}|${s3}`)
// console.log(blank);
// console.log(horiz);
// console.log(blank)
// console.log(`${s4}|${s5}|${s6}`)
// console.log(blank);
// console.log(horiz);
// console.log(blank)
// console.log(`${s7}|${s8}|${s9}`)
// console.log(blank)

// //Methd - Needs Work!
// if (s1= "O" == s2 = "O" && s3 = "0") {

// }
//       console.log ("! WINNER !")
// else {

// }
//     console.log ("YOU LOSE!")


//ARRAYS
// console.log ("   Robert's Fav Tunes")
// var TUNES=[
    
//     "1: Sigala - Wish You Well",
//     "2: Blue Oyster Cult - She Sells Sanctuary",
//     "3: Sixousie and The Banshees - Hong Kong Garden"
// ];
// console.log (TUNES [2]); //[2] accesses the data position 2=3 as it starts from 0

//----Access indivdual Itemns
// console.log ("   Robert's Fav Tunes")
// var TUNES=[
    
//     "1: Sigala - Wish You Well",
//     "2: Blue Oyster Cult - She Sells Sanctuary",
//     "3: Sixousie and The Banshees - Hong Kong Garden"
// ];
// TUNES [1] = "Another one"; //changes the data in inputted position
// console.log (TUNES.length) //.length counts the number of items/data in the array

//---PUSH
// console.log ("   Robert's Fav Tunes")
// var TUNES=[
    
//      "1: Sigala - Wish You Well",
//      "2: Blue Oyster Cult - She Sells Sanctuary",
//      "3: Sixousie and The Banshees - Hong Kong Garden"
//  ];

// TUNES.push("Ive got a combine harvester")//Adds an item to the list
// console.log (TUNES) //dont forget to output it Roberto!!!!!

//---POP
// console.log ("   Robert's Fav Tunes")
// var TUNES=[
    
//      "1: Sigala - Wish You Well",
//      "2: Blue Oyster Cult - She Sells Sanctuary",
//      "3: Sixousie and The Banshees - Hong Kong Garden"
//  ];

// TUNES.pop() //removes last item from the list
// console.log (TUNES) //Output log

//ACTIVITY (1) Create a list of your fav websites then add a futher two to the 
//list using the right command.

//  var WEB = [
//      "1: https://www.richersounds.co.uk", // Dont forget the , after the string
//      "2: http://www.audioreview.com",
//      "3: https://www.bbc.co.uk/goodfood",
//  ]
// WEB.push("4: https://www.google.co.uk") //no , needed???
// WEB.push("5: bla bla bla")
//     console.log (WEB)


// RESEARCH ARRAY COMMANDS?: slice (), shift (), unshift ()  splice ()

//---SLICE()
// var ANIMALS = ['Duck', 'Goat', 'Pig', 'T-Rex', 'Lion'] //'data', the '
// //is needed to define it's a seperate piece of data for the arrany to recognise it.
//     console.log (ANIMALS.slice(2,4));

//---SHIFT () - consfused to add text
// var array1 = ['dog','duck','lion'] //numbners or text no ' ' with numbers
// var firstelement = array1.shift() //shifts between one variable and another
// //firstelement is the first piece of data
//     console.log (firstelement)

//---UNSHIFT()
var array1 = [
    "Dog",
    "Duck",
    "Goat"
]
array1.unshift("Camel")
console.log(array1)// adds inputted data i,e 1,3 to the beginning og the array

//---SPLICE()

