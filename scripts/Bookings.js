import { getBands, getBookings, getVenues } from "./database.js"

// Get copy of state for use in this module
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()


//* This function will return the BAND NAME for every bandId on the bookings array
// Use parameters in the function.
    // Where do the parameters' arguments come from?
    // We imported getBands from database, then declared a variable to hold the return of the getBands function (which is a list of bands and their properties), and now we can pass them as arguments through these parameters in the next two functions
const findBandName = (booking, allBands) => {
    let bookedBand = null
    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookedBand = band.name
        }
    }
    return bookedBand
}

// Function whose responsibility is to find the venue name for each booking
// this function matches venues to the bookings by looking at the booking's venueId property, then asking if it exactly equals the venueId on the booking. 
//* This function will return the matching VENUE NAME for every venueId on the bookings array
const findVenueName = (booking, allVenues) => {
    let bookedVenue = null
    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookedVenue = venue.name
        }
    }
    return bookedVenue
}

//^ INSTRUCTIONS: Samantha wants to see the current bookings at the top of the page. She wants the band name, the venue name, and the date of the booking. Example: "Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"
export const allBookings = () => {
    
    let html = ""
    html += "<ul>"
    
    for (const booking of bookings) {
        const bandName = findBandName(booking, bands)
        const venueName = findVenueName(booking, venues)

        html += `<li id="booking--${booking.id}">${bandName} are playing at ${venueName} on ${booking.dateBooked}</li>`
    }

    html += "</ul>"

    return html
}


//^ INSTRUCTIONS: When a booking is clicked, a window alert should be presented to the user that displays all of the band information (name, genre, year formed, number of members).

document.addEventListener("click",
    (clickEvent) => {  
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingPk] = itemClicked.id.split("--")  
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingPk)) {
                    for (const band of bands) {
                        if (band.id === booking.bandId) {
                        window.alert(`The deets: 
                        Band Name: ${band.name}
                        Genre: ${band.genre}
                        Year Formed: ${band.yearFormed}
                        Total Members: ${band.memberCount}
                        `)
                        }
                    }
                }
            }
        }
    }
)
// export const clickedBookings = () => {
//     let html = ""
//     html += "<ul>"

//     for (const booking of bookings) {
//         const bandName = findBandName(booking, bands)
//         const venueName = findVenueName(booking, venues)

//     }
    
//     html += "</ul>"
    
//     return html
// }

// html += `<li>${bandName.name} are playing at ${venueName.name} on ${booking.dateBooked}</li>`


