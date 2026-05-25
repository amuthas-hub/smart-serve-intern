function ServiceCard({ provider }) {

  return (

    <div className="card">

      <img
        src={provider.image}
        alt=""
        className="service-img"
      />

      <h3>
        {provider.providerName}
      </h3>

      <p>
        {provider.serviceType}
      </p>

      <p>
        📍 {provider.location}
      </p>

      <p>
        Experience:
        {provider.experience} Years
      </p>

      <p>
        ⭐ {provider.rating}
      </p>

      <button>
        Book Now
      </button>

    </div>
  );
}

export default ServiceCard;