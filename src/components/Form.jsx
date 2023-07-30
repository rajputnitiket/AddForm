import React from "react";
import "./form.css";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.name.value); // whatever you typed into the input
};

const Form = () => {
  const data = [
    {
      id: 1,
      heading: "Industry",
      name: "Hotel and Motel",
    },
    {
      id: 2,
      heading: "Number of Location",
      name: "33",
    },
    {
      id: 3,
      heading: "Enrolled Employees",
      name: "193",
    },
    {
      id: 4,
      heading: "Annual Sales",
      name: "₹ 390090899",
    },
    {
      id: 5,
      heading: "Experience Mode",
      name: "1.6",
    },
    {
      id: 6,
      heading: "Total Rooms",
      name: "466",
    },
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <form className="formContainer" action="">
          <div className="addressContainer">
            <label className="addressLabel" htmlFor="address">
              Address
            </label>
            <input type="text" name="address" id="address" />
            <input type="text" name="address2" id="address2" />
          </div>
          <div className="locationContainer">
            <div className="locationItem">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="locationItem">
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <option value="">Select State</option>
                <option value="UP">UP</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="locationItem">
              <label htmlFor="zip">Zip Code</label>
              <input type="text" name="zip" id="zip" />
            </div>
          </div>
          <button className="btn">Save</button>
        </form>
        <div className="itemWrapper">
          {data?.map((item) => {
            return (
              <div className="itemContainer" key={item?.id}>
                <div className="leftItem">
                  <h5 className="heading">{item?.heading}</h5>
                  <h3 className="title">{item?.name}</h3>
                </div>
                <button className="editBtn">Edit</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
