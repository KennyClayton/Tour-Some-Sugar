import { Venues } from "./Venues.js"
import { getBands, getBookings, getVenues } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()  

//^ When a band name is clicked, a window alert should be presented to the user that displays all of the venues at which the band is playing.
// Match the clicked bandID to the venue's bandID
// To display more than one instance of a band playing at the first venue found, i need to loop through the venues and find any other venues matching that band ID

document.addEventListener( 
    "click",
    (clickEvent) => {  
        // user clicks a band name (let's pretend its "band--1")
        const itemClicked = clickEvent.target
        // if the user clicked a list element <li band--1> starting with id of "band"...
        if (itemClicked.id.startsWith("band")) {
            // ...then split that id string "band--1" into an array that holds the string "band" and the string "1"
            // store ONLY the captured id number/string "1" in a variable called bandPK
            const [, bandPK] = itemClicked.id.split("--")  
            // now loop through all bookings to find a matching bandId in the booking objects that corresponds to the clicked band Id ... we'll store the multiple results in the matchingVenue string...
            let matchingVenue = '';
            //looping through, looking at the first object/booking of the bookings array... 
            for (const booking of bookings) {
                // ...if the bandId the user clicked matches the loop's first booking/object's bandID (foreign key in bookings array).....
                if (parseInt(bandPK) === booking.bandId) {
                    // ...then loop through the venue array to find the matching venueId....
                    for (const venue of venues) {
                        // if the booking.venueId we matched above is the same as any object/venue in this venue array loop above...
                        if (booking.venueId === venue.id) {
                            // ...then add/store that matching object/venue NAME in the variable matchingVenue
                            matchingVenue += `${venue.name} 
            `;
                        }
                    }
                }
            }
            // then window alert that venue and all others that match
            window.alert(`This band is playing at the following venues: 
            ${matchingVenue}            
            `)
        }
    }
)

//^ INSTRUCTIONS: At the bottom of the page, to the right of the venue list, the name of each band should be displayed in a bulleted list.
// This function returns an html string of the band names
export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}

