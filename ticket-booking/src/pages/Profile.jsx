import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("🔥 Profile Loaded - Current user:", user);
  
    if (!user) {
      console.warn("❗ No user detected, redirecting to login.");
      navigate("/login");
      return;
    }
  
    const fetchBookings = async () => {
      try {
        console.log("📡 Fetching bookings for userId:", user.uid);
  
        const q = query(
          collection(db, "bookings"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );
  
        const querySnapshot = await getDocs(q);
        console.log("✅ Bookings fetched:", querySnapshot.docs.length);
  
        const bookingData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("📦 Booking Data:", bookingData);
  
        setBookings(bookingData);
      } catch (error) {
        console.error("❌ Error fetching bookings:", error);
      }
    };
  
    fetchBookings();
  }, [user, navigate]);
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Your Profile</h1>

      <div className="mb-10">
        <p className="text-gray-600">Email: <span className="font-medium">{user?.email}</span></p>
      </div>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">Booking History</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map(booking => (
            <div key={booking.id} className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
              <p className="text-sm text-gray-500 mb-2">
                Booked on {booking.createdAt?.toDate().toLocaleString()}
              </p>
              <ul className="divide-y divide-gray-200">
                {booking.items.map(item => (
                  <li key={item.id} className="py-2 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-emerald-600">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.quantity} ticket(s) @ ${item.price} each</p>
                    </div>
                    <p className="font-bold text-green-700">${item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
