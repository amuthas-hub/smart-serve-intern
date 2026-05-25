import { useState } from "react";

import axios from "axios";


function BookingForm() {

  const [customerName, setCustomerName] = useState("");

  const [providerName, setProviderName] = useState("");

  const [serviceDate, setServiceDate] = useState("");


  const addBooking = async (e) => {

    e.preventDefault();

    try {

      const bookingData = {
        customerName,
        providerName,
        serviceDate
      };

      await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData
      );

      alert("Booking Confirmed");

      setCustomerName("");
      setProviderName("");
      setServiceDate("");

    } catch (error) {

      console.log(error);

      alert("Booking Failed");
    }
  };


  return (

    <form
      className="form-box"
      onSubmit={addBooking}
    >

      <h2>Book a Service</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e)=>
          setCustomerName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Provider Name"
        value={providerName}
        onChange={(e)=>
          setProviderName(e.target.value)
        }
      />

      <input
        type="date"
        value={serviceDate}
        onChange={(e)=>
          setServiceDate(e.target.value)
        }
      />

      <button type="submit">
        Confirm Booking
      </button>

    </form>
  );
}

export default BookingForm;