// missed first part- go back~ 1:10pm


// array of objects
const games = [
    {
        title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]
    },
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]
    },
];
// both {} and [] because it is an array of objects- first its an array so [] outside, then {} inside becaise it is an array of objects
const[{title: gameOne, developer: devOne}, , {title: gameThree}] = games;
// leave a space in between, , to indicate skipping over game two
console.log(gameOne, devOne, gameThree);

for({title, developer} of games){
    console.log(`The game ${title} is developed by ${developer}`);
}