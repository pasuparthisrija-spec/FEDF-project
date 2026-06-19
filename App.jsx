import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Therapists from "./pages/Therapists";
import Login from "./pages/Login";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* Therapists Page */}
        <Route
          path="/therapists"
          element={<Therapists />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Booking Page */}
        <Route
          path="/bookings"
          element={<MyBookings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;