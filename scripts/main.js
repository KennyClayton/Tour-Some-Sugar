import { Venues } from "./Venues.js"
import { allBookings } from "./Bookings.js"
import { Bands } from "./Bands.js"
 
const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Management</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${allBookings()}
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML


// main.js imports 3 functions
