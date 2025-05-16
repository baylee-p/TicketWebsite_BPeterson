import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EventDetails from "./pages/EventDetails";  // << ADD THIS
import Layout from "./components/Layout";

const App = () => {
  const { user } = useAuth();

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="event/:eventId" element={<EventDetails />} /> {/* << ADD THIS */}
        </Route>

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>

        {/* Public Success Page */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;