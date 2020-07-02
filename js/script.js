var vacationType = prompt("What kind of trip would you like to take? Musical, Tropical or Adventurous?");

var groupSize = prompt("How many people are in your group? ");

 var destination;
    if (vacationType === "Musical"){
    destination = "New Orleans";
    }
    else if (vacationType === "Tropical"){
    destination = "Beach Vacation in Mexico";
    }
    else if (vacationType === "Adventurous"){
    destination = "White Water Rafting at the Grand Canyon";
    }
      

 var travelSuggestion;

    if (groupSize >= 1 && groupSize <= 2)
    {
    travelSuggestion = "First Class";
    }
    else if (groupSize >= 3 && groupSize <= 5)
    {
    travelSuggestion = "Helicopter";
    } 
    else
    {
    travelSuggestion = "Charter Flight";
    }

    var result = ("Since you are a group of " + groupSize + " going on a " + vacationType + " trip, you should take a " + travelSuggestion + " to " + destination + "!");
    console.log(result);
     

