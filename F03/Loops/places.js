let myPlaces = ['Porto', 'Algarve', 'Lisboa'];
let friendPlaces = ['Porto', 'Albania', 'Espanha'];

for(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
  for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
       	console.log(friendPlaces[friendPlacesIndex]);
       }
  }
}