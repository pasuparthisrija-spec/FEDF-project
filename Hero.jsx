import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          SMART WELLNESS BOOKING
        </span>

        <h1>
          Restore your
          <br />
          <span>Body & Soul</span>
        </h1>

        <p>
          Premium spa experiences tailored to you.
          Book services, choose therapists,
          and schedule appointments easily.
        </p>

        <div className="hero-buttons">

          <button
            onClick={() => navigate("/services")}
          >
            Browse Services
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/bookings")}
          >
            Book Now
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="service-preview">

          <h3>
            Deep Tissue Massage
          </h3>

          <p>
            90 Minutes • Full Body Therapy
          </p>

          <h4>
            ₹2800
          </h4>

        </div>

      </div>

    </section>
  );
}

export default Hero;