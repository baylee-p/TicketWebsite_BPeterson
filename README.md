🎟️ Ticket Booking Website — React + Firebase
This is a fully functional Event Ticket Booking Website built with ReactJS and Firebase.

Users can:

Sign Up & Log In

Browse & search events

Add tickets to cart

Complete booking checkout

View their booking history in profile

🚀 Features
✅ React Router for seamless navigation

✅ Firebase Authentication (email/password login)

✅ Firestore Database for booking history

✅ Cart management (add, remove, update quantity)

✅ Booking confirmation flow

✅ Profile page shows past bookings

✅ Search & Sort events by title, price, or date

✅ Responsive design with Tailwind CSS green theme

🛠️ Tech Stack
React (Vite)

React Router DOM

Firebase (Auth + Firestore)

Tailwind CSS (custom green theme)

Context API for state management

📂 Project Structure
kotlin
Copy
Edit
src/
  components/    → Navbar, Layout, etc.
  contexts/      → AuthContext, CartContext
  pages/         → Home, Cart, Profile, EventDetails, Success, Login, Signup
  data/          → Static events data.js
  utils/         → firebase.js config
📝 How to Run Locally
Clone the repo:

bash
Copy
Edit
git clone https://github.com/yourusername/ticket-booking.git
cd ticket-booking
Install dependencies:

bash
Copy
Edit
npm install
Setup your Firebase project:

Enable Authentication (email/password)

Enable Firestore Database

Copy your Firebase config to /src/utils/firebase.js

Start the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:5173

✅ Notes
Bookings are saved per-user in Firestore.

Profile page is protected and shows user’s own bookings.

Success page confirms booking after checkout.

No backend server needed beyond Firebase.
