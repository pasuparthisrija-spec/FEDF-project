import "../styles/therapist.css";

function TherapistCard({ therapist }) {
  return (
    <div className="therapist-card">

      <img
        src={therapist.image}
        alt={therapist.name}
        className="therapist-image"
      />

      <h2>{therapist.name}</h2>

      <p>{therapist.role}</p>

      <span>
        {therapist.experience}
      </span>

    </div>
  );
}

export default TherapistCard;