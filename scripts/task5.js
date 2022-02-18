/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
let dayWeek = new Date().getDay();
let message1 = ""

if(dayWeek > 0 & dayWeek != 9){
    message1 = "Hang in there!"
}
else{
    message1 ="Woohoo!  It is the weekend!"
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
let message2 = ""
switch(dayWeek){
    case 0:
        message2 = "Sunday"
        break;
    case 1:
        message2 = "Monday"
        break;
    case 2:
        message2 = "Tuesday"
        break;
    case 3:
        message2 = "Wednesday"
        break;
    case 4:
        message2 = "Thursday"
        break;
    case 5:
        message2 = "Friday"
        break;
    case 6:
        message2 = "Saturday"
        break;
}



/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message1").innerText = message1
document.getElementById("message2").innerText = message2



/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templesList = []


// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

/* temple: 
dedicated: "8 January 1995"
imageUrl: "https://assets.ldscdn.org/b3/1f/b31f8fc3892ce063cfbd0607cd53980290fcc0ae/aba_nigeria_temple_lds.jpeg"
location: "Bountiful, Utah, United States"
templeName: "Bountiful Utah Temple" */


function output(List){
    let temples = document.getElementById("temples")
    List.forEach(temple => {
        let article = document.createElement("article")
        let templeName = document.createElement("h3")
        templeName.appendChild(document.createTextNode(temple.templeName))
        let location = document.createElement("h4")
        location.appendChild(document.createTextNode(temple.location))
        let dedicated = document.createElement("h4")
        dedicated.appendChild(document.createTextNode(temple.dedicated))
        let image = document.createElement("img")
        image.setAttribute("src", temple.imageUrl)
        article.appendChild(templeName)
        article.appendChild(location)
        article.appendChild(dedicated)
        article.appendChild(image)
        temples.appendChild(article)
    });
}



// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'

fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
.then(response => response.json())
.then(temple => {
    templesList = temple
    output(templesList)
});
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples



// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset(){
    document.getElementById("temples").innerHTML = "";
}



// Step 9: Declare a function named sortBy that does the following:

function sortBy(){
    reset();
    let sortByValue = document.getElementById("sortBy").value;

    if (sortByValue == "templeNameAscending"){
        templesList.sort()
    } 
    else 
        templesList.sort()
        templesList.reverse()
    

    output(templesList)
}

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("change", sortBy)

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
