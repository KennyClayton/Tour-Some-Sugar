/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    bands: [{
        id: 1,
        name: "Rocket Pumpkins",
        memberCount: 2,
        genre: "punk",
        yearFormed: 1999
    }, {
        id: 2,
        name: "Mashville Rockers",
        memberCount: 3,
        genre: "rock",
        yearFormed: 2000
    }, {
        id: 3,
        name: "Band2gether",
        memberCount: 8,
        genre: "pop",
        yearFormed: 1996
    }, {
        id: 4,
        name: "CountryWays",
        memberCount: 5,
        genre: "country",
        yearFormed: 1987
    }, {
        id: 5,
        name: "UnNamed",
        memberCount: 3,
        genre: "emo",
        yearFormed: 2009
    },
    {
        id: 6,
        name: "Cellophane",
        memberCount: 4,
        genre: "wrap",
        yearFormed: 1986
    }],
    venues: [{
        id: 1,
        name: "Music City Park",
        address: "102 Cypress Blvd",
        size: 9000,
        maxOcc: 5000
    }, {
        id: 2,
        name: "The Lucky Charm",
        address: "210 Pot of Gold St",
        size: 500,
        maxOcc: 50
    }, {
        id: 3,
        name: "Boiler Room",
        address: "1600 Merchant St",
        size: 900,
        maxOcc: 90
    }, {
        id: 4,
        name: "The Tin Can't",
        address: "1200 Merchant St",
        size: 950,
        maxOcc: 95
    }, {
        id: 5,
        name: "The Food Cafe",
        address: "123 Main Street",
        size: 750,
        maxOcc: 75
    }],
    bookings: [{
        id: 1,
        bandId: 4,
        venueId: 3,
        dateBooked: "12/12/2023"
    },
    {
        id: 2,
        bandId: 3,
        venueId: 4,
        dateBooked: "12/13/2023"
    },
    {
        id: 3,
        bandId: 2,
        venueId: 5,
        dateBooked: "12/14/2023"
    },
    {
        id: 4,
        bandId: 5,
        venueId: 1,
        dateBooked: "12/15/2023"
    },
    {
        id: 5,
        bandId: 1,
        venueId: 2,
        dateBooked: "12/16/2023"
    },
    {
        id: 6,
        bandId: 6,
        venueId: 3,
        dateBooked: "12/12/2023"
    },
    {
        id: 7,
        bandId: 6,
        venueId: 4,
        dateBooked: "12/13/2023"
    },
    {
        id: 8,
        bandId: 3,
        venueId: 1,
        dateBooked: "12/14/2023"
    }
    ]
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

