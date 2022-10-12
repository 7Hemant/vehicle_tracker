import React, { useState, useEffect } from "react";
import Display from "../components/Display";
let details = [];
const FormComponet = () => {
  const [count, setCount] = useState(0);
  const [vehicle, setVehicle] = useState("");
  const [driver, setDriver] = useState("");
  const [checking, setChecking] = useState("");
  const [checkout, setCheckout] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const detail_particular_vehicle = {
      vehicle,
      driver,
      checking,
      checkout,
    };

    details.push(detail_particular_vehicle);
    setVehicle("");
    setDriver("");
    setChecking("");
    setCheckout("");
    setCount(count + 1);
  };
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [count]);

  console.log(details);
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="shadow flex flex-col w-3/6 m-auto items-center rounded "
      >
        <label htmlFor="vehicleNumber">vehicleNumber</label>
        <input
          type="text"
          className="border border-blue-300 rounded w-[80%] m-auto"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
        <label htmlFor="DriverName">DriverName</label>
        <input
          type="text"
          className="border border-blue-300 rounded w-[80%] m-auto"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />
        <label htmlFor="checkingTime">checkingTime</label>
        <input
          type="text"
          className="border border-blue-300 rounded w-[80%] m-auto"
          value={checking}
          onChange={(e) => setChecking(e.target.value)}
        />
        <label htmlFor="checkoutTime">checkoutTime</label>
        <input
          type="text"
          className="border border-blue-300 rounded w-[80%] m-auto"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 rounded text-[white] py-2 my-2 hover:bg-blue-600  hover:translate-y-1 transition-all duration-500 "
        >
          Add Vehicle
        </button>
      </form>
      <Display />
    </>
  );
};

export default FormComponet;
