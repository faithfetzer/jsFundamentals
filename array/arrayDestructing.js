// array destructuring
// allows us to unpack values from arrays or properties from objects
// similar syntax as array literals but is now on left side of the assignment operator
    // this defines what values to unpack
    // greta for oullling info out of an array/object and assinging that data to its own variable

    // syntax

const boardGames = ['Catan', 'Monopoly', 'Pandemic'];
    // previously:
    // const gameOne= boardGames[0];
    // const gameTwo = boardGames[1];
    // const gameThree = boardGames[2];
// now:
const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne, gameTwo, gameThree);