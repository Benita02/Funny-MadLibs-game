function madLibs(Adjective1, Nationality, nameOfPerson, Noun1, Adjective2, Noun2, Adjective3, 
  Adjective4, pluralNoun, Noun3, Number, Shape, foodName, foodName2, Number2){
  var result;
  result = "Pizza was invented by a " + Adjective1 + " " + Nationality + " chef named " + nameOfPerson + ". To make a pizza, you need to take a lump of " + 
  Noun1 + ", and make a thin, round " + Adjective2 + " " + Noun2 +". Then you cover it with " + Adjective3 + " sauce, " + Adjective4 + " cheese, and fresh chopped " + pluralNoun + 
  ". Next you have to bake it in a very hot " +Noun3 + ". When it is done, cut it into " + Number + " " +Shape + 
  ". Some kids like " + foodName + " pizza the best, but my favorite is the " + 
  foodName2 + " pizza. If I could, I would eat pizza " + Number2 + ' times a day!'

  return result;
}

console.log(madLibs('stupid', 'Jamaican', 'Beyonce', 'Atlanta', 'quiet',
 'Benita', 'beautiful', 'stubborn', 'tables', 'shopping cart', 33000,
  'rectangles', 'owo soup', 'sizzlers fried rice', 87));