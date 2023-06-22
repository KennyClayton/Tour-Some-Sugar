import { getBands, getVenues, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands() 
const bookings = getBookings()

//^ INSTRUCTIONS: When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.
// ALGORITHM: written throughout code below

// code the event listener scoped to the DOM(?) and specify it as a click event
document.addEventListener("click",
    (clickEvent) => {  
        // Store the target HTML element of the click event in a variable.
        const itemClicked = clickEvent.target

        // Only run the rest of the logic if a venue list item was clicked
        if (itemClicked.id.startsWith("venue")) {
            
            // Looking at the venue item now, it reads `<li id="venue--1`
            // We only need the "1"
            //So split that string apart into an array and capture the "1" with the venuePK variable
            const [, venuePK] = itemClicked.id.split("--")  

            // Now we have the venue primary key THAT WAS CLICKED by the user
            // Now loop through all bookings and select each booking/object's venueID that matches the clicked venueID
//* Remember, at this point in real time, a user has clicked a venue name on the website and a mouse event (click event) was triggered on that target (list element). When the user clicked that list element (or, for them, the venue name), that "if" statment above on line 15 or so was triggered and found to be "true". The user's mouse click triggered the click event, which triggered the if statement, which resulted in true....meaning, the targeted element DOES start with "venue", we split the attribute apart into an array of two strings and then we gave the venue number itself a variable named venuePK.  
            // I need to access the clicked venueId --- target the click
            // I need to capture the clicked venueId --- if starts with "venue" statement 
            // I need to loop through the bookings to see where that venueId shows up --- for...of loop
                //When the loop finds a booking object with a venueId matching the one the user clicked, that will give us the bandId, but not the band name. So I need to loop through the bands array and grab the name of the band that matches the bandId                
                    // To window alert the bands I need to match the bandId found in that booking to the band name
                    // I need to then window alert that band name
                    //I need to make sure all band names associated with that venue show up in the window alert
                        
            // loop through the bookings array since it houses the data we need: venue-band relationships...
            let matchingBands = '';
            for (const booking of bookings) {
                //...if the clicked venue id equals the object id in our loop...
                if (parseInt(venuePK) === booking.venueId) {
                    //...then store that booking's BAND Id, not the venue Id
                    for (const band of bands) {
                        // if the bandId we grabbed above from the bookings matches any of these band.id...
                        if (band.id === booking.bandId) {
                            // ...then print the name of the band to the window alert OR send it to matchingBands
                            matchingBands += `${band.name}, 
            `;
                        }
                    }                    
                }
            }
            window.alert(`Bands that have booked this venue:
            ${matchingBands}`)
        }
    }
)

//^ INSTRUCTIONS: At the bottom of the page, the name of each venue should be displayed in a bulleted list.
// ALGORITHM: 
    // define and export a function that creates our html string with a venue name inserted
    // use a for...of loop to iterate through all venues so each venue gets listed here 
export const Venues = () => {
    let html = "<ul>"

    // the purpose of id="venue--${venue.Id}" is to set a unique identifier (id) for each <li> element generated in the loop.
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

