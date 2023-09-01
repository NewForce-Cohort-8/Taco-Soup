// who do we appreciate!!

// Two, Four, Six, Eight - Who do we appreciate?! CHEER
// Write a loop that counts by 2's and creates the following output.
// Output
// 2 4 6 8 Who do we appreciate?!


let cheerString = ""

for(let i = 2; i <= 8; i += 2){
    cheerString += `${i} `
   
}

cheerString += "Who do we appreciate?!"

// console.log(cheerString)


//interrupting Cow

// Interrupting Cow
// Copy and paste the following array into your JavaScript file:
 var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
let sentence = ""
// Run your sentence to the terminal.
// Output:
// the cow danced MOOOOOOOO through the trees MOOOOOOOO in the light MOOOOOOOO of the moon

for(let i=0; i < sentenceArray.length; i++ ){

    if(( i %  3) === 0 && i !== 0){
        sentence += `MOOOOOOOOOOO ${sentenceArray[i]} `
    }
    else{

        sentence += `${sentenceArray[i]} `
    }
}

// console.log(sentence)



// The Beatles
// Given the following object...

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Output the following values to the terminal.

// ${name} was in the Beatles from ${year} to ${year}. He was born in ${year}. He contributed heavily to the ${albumName} Album.

// Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. 


for(let i=0; i < 4; i++){
    let string =`${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`

    if(beatles.members[i].death){
        string += `They died in ${beatles.members[i].death}`
    }
    console.log(string)
    console.log()
}