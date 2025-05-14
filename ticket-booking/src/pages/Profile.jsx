import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchBookings = async () => {
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      const bookingData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(bookingData);
    };

    fetchBookings();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>

      <h2>Your Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map(booking => (
          <div key={booking.id} style={{ borderBottom: "1px solid #ccc", padding: "1rem 0" }}>
            <p><strong>Booking Date:</strong> {booking.createdAt?.toDate().toLocaleString()}</p>
            <ul>
              {booking.items.map(item => (
                <li key={item.id}>
                  {item.title} - {item.quantity} ticket(s) - ${item.price} each
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
