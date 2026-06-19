import "../styles/services.css";

function ServiceCard({ service }) {
  return (
    <div className="service-card">

      <img
        src={service.image}
        alt={service.name}
        className="service-image"
      />

      <div className="service-content">
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <span>{service.duration}</span>
        <h3>₹{service.price}</h3>

        <button>
          Book Now
        </button>
      </div>

    </div>
  );
}

export default ServiceCard;