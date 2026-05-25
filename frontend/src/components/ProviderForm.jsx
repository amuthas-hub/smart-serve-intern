import { useState } from "react";

import axios from "axios";


function ProviderForm() {

  const [providerName, setProviderName] = useState("");

  const [serviceType, setServiceType] = useState("");

  const [experience, setExperience] = useState("");

  const [location, setLocation] = useState("");


  const addProvider = async (e) => {

    e.preventDefault();

    try {

      const providerData = {
        providerName,
        serviceType,
        experience,
        location
      };

      await axios.post(
        "http://localhost:5000/api/providers",
        providerData
      );

      alert("Provider Added Successfully");

      setProviderName("");
      setServiceType("");
      setExperience("");
      setLocation("");

    } catch (error) {

      console.log(error);

      alert("Error Adding Provider");
    }
  };


  return (

    <form
      className="form-box"
      onSubmit={addProvider}
    >

      <h2>Add Service Provider</h2>

      <input
        type="text"
        placeholder="Provider Name"
        value={providerName}
        onChange={(e)=>
          setProviderName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Service Type"
        value={serviceType}
        onChange={(e)=>
          setServiceType(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Experience"
        value={experience}
        onChange={(e)=>
          setExperience(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e)=>
          setLocation(e.target.value)
        }
      />

      <button type="submit">
        Add Provider
      </button>

    </form>
  );
}

export default ProviderForm;