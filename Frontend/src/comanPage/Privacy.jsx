import React from 'react'
import Footer from './Footer'

const Privacy = () => {
  return (
    
    <div class="flex justify-center items-center  flex-col bg-white p-8 rounded-lg shadow-lg w-full">
        <div className='mt-10 p-5'>
        <h1 class="text-4xl font-bold mb-6 text-center text-blue-600">Hotel Privacy Policy</h1>
        <h2 class="text-xl font-semibold mb-2">Check-In and Check-Out Times</h2>
        <p class="mb-4">Standard check-in time is between 2 PM and 4 PM, and check-out time is between 10 AM and 12 PM.</p>

        <h2 class="text-xl font-semibold mb-2">Cancellation Policy</h2>
        <p class="mb-4">Cancellations must be made 24-48 hours before the scheduled arrival to avoid a penalty fee.</p>

        <h2 class="text-xl font-semibold mb-2">Payment Policy</h2>
        <p class="mb-4">A credit card is required to guarantee the reservation. Payment is due upon arrival or departure.</p>

        <h2 class="text-xl font-semibold mb-2">Smoking Policy</h2>
        <p class="mb-4">Our hotel is non-smoking, with designated smoking areas outside.</p>

        <h2 class="text-xl font-semibold mb-2">Pet Policy</h2>
        <p class="mb-4">We are pet-friendly with specific rooms for guests with pets. An extra fee applies.</p>

        <h2 class="text-xl font-semibold mb-2">Occupancy Limits</h2>
        <p class="mb-4">Rooms have a maximum occupancy limit of two to four people, depending on the room size.</p>

        <h2 class="text-xl font-semibold mb-2">Housekeeping Services</h2>
        <p class="mb-4">Daily housekeeping services are provided. Requests can be made for additional cleaning.</p>

        <h2 class="text-xl font-semibold mb-2">Guest Behavior</h2>
        <p class="mb-4">Guests are expected to respect noise levels, conduct, and the property.</p>

        <h2 class="text-xl font-semibold mb-2">Amenities Use</h2>
        <p class="mb-4">Follow guidelines for using hotel amenities like the pool, gym, spa, and business center.</p>

        <h2 class="text-xl font-semibold mb-2">Damage Policy</h2>
        <p class="mb-4">Guests are responsible for any damages or missing items from the room.</p>

        {/* <h2 class="text-xl font-semibold mb-2">Covid-19 Protocols</h2> */}
        {/* <p class="mb-4">Enhanced cleaning procedures, mask mandates in common areas, and social distancing guidelines are in place.</p> */}
        </div>
        <Footer/>
    </div>

   
  )
}

export default Privacy