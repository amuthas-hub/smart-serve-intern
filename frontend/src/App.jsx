import "./App.css";

import Navbar from "./components/Navbar";

import ServiceCard from "./components/ServiceCard";

import ProviderForm from "./components/ProviderForm";

import BookingForm from "./components/BookingForm";


function App() {

  const providers = [

    {
      providerName: "Rahul Electricals",
      serviceType: "Electrician",
      experience: 5,
      location: "Chennai",
      rating: 4.8,
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
    },

    {
      providerName: "AquaFix",
      serviceType: "Plumber",
      experience: 3,
      location: "Coimbatore",
      rating: 4.5,
      image:
        "https://cdn-icons-png.flaticon.com/512/2933/2933245.png"
    },

    {
      providerName: "CleanCare",
      serviceType: "Cleaning",
      experience: 4,
      location: "Salem",
      rating: 4.7,
      image:
        "https://cdn-icons-png.flaticon.com/512/995/995053.png"
    }
  ];


  return (

    <div>

      <Navbar />

      <section className="hero">

        <h1>
          Find Trusted Local Services
        </h1>

        <p>
          Book electricians, plumbers,
          cleaners and more instantly.
        </p>

        <button className="hero-btn">
          Explore Services
        </button>

      </section>

      <div className="container">

        <div className="forms">

          <ProviderForm />

          <BookingForm />

        </div>

        <h2 className="service-heading">
          Popular Services
        </h2>

        <div className="card-container">

          {providers.map((provider, index) => (

            <ServiceCard
              key={index}
              provider={provider}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;