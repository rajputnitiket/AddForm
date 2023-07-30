import React, { Component } from "react";
import './form.css'

class AddFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { Address: "", Address2: "", City: "", State: "", Zip: "",Indust:"Hotel & Motel",NoL:"33",EnrollEmp:"193",AnnualSales:"$50,000,000",
    Experience:"1.6",TotalRoom:"466" ,disabled_i:true,disabled_n:true,disabled_e:true,disabled_a:true,disabled_ex:true,disabled_t:true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  save = () =>{
    this.setState({
      [this.state.name]: this.state.value,
    })
  }

  handleSubmit(event) {
    const { Address, Address2, City, State, Zip } = this.state;
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleClick(e){

    this.setState({disabled:!this.state.disabled})
     }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div
            className="formContainer"
            action=""
            onSubmit={this.handleSubmit}
          >
            <div className="addressContainer">
              <label className="addressLabel" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address"
                value={this.state.Address}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="Address2"
                id="Address2"
                placeholder="Address2"
                value={this.state.Address2}
                onChange={this.handleChange}
              />
            </div>
            <div className="locationContainer">
              <div className="locationItem">
                <label className="city" htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.City}
                  onChange={this.handleChange}
                />
              </div>
              <div className="locationItem">
                <label htmlFor="state">State</label>
                <select
                  name="State"
                  id="State"
                  value={this.state.State}
                  onChange={this.handleChange}
                >
                  <option value="">Select State</option>
                  <option value="UP">UP</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div className="locationItem">
                <label htmlFor="zip">Zip Code</label>
                <input
                  type="text"
                  name="Zip"
                  id="Zip"
                  value={this.state.Zip}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="btn" onClick={this.save}>
              Save
            </button>
            <div className="itemWrapper">
              <div className="itemContainer">
                <div className="leftItem">
                  <label className="heading" htmlFor="Indust">Industry</label>
                  <input
                  className="title"
                  type="text"
                  name="Indust"
                  id="Indust"
                  value={this.state.Indust}
                  disabled={this.state.disabled_i}
                  onChange={this.handleChange}
                  />
                  <button  className="editBtn" onClick={this.handleClick.bind(this)}>Edit</button>
                  <label className="heading" htmlFor="NoL">No Of Location</label>
                  <input
                  className="title"
                  type="text"
                  name="NoL"
                  id="NoL"
                  value={this.state.NoL}
                  disabled={this.state.disabled_n}
                  onChange={this.handleChange}
                  />
                  <button  className="editBtn" onClick={this.handleClick.bind(this)}>Edit</button>
                  <label className="heading" htmlFor="EnrollEmp">Enrolled Employees</label>
                  <input
                  className="title"
                  type="text"
                  name="EnrollEmp"
                  id="EnrollEmp"
                  value={this.state.EnrollEmp}
                  onChange={this.handleChange}
                  disabled={this.state.disabled_e}
                  />
                  <button  className="editBtn" onClick={this.handleClick.bind(this)}>Edit</button>
                  <label className="heading" htmlFor="AnnualSales">Annual Sales</label>
                  <input
                  className="title"
                  type="text"
                  name="AnnualSales"
                  id="AnnualSales"
                  value={this.state.AnnualSales}
                  onChange={this.handleChange}
                  disabled={this.state.disabled_a}
                  />
                  <button  className="editBtn" onClick={this.handleClick.bind(this)}>Edit</button>
                  <label className="heading" htmlFor="Experience">Experience Mod</label>
                  <input
                  className="title"
                  type="text"
                  name="Experience"
                  id="Experience"
                  value={this.state.Experience}
                  onChange={this.handleChange}
                  disabled={this.state.disabled_ex}
                  />
                  <button  className="editBtn" onClick={this.handleClick.bind(this)}>Edit</button>
                  <label className="heading" htmlFor="TotalRoom">Total Room</label>
                  <input
                  className="title"
                  type="text"
                  name="TotalRoom"
                  id="TotalRoom"
                  value={this.state.TotalRoom}
                  onChange={this.handleChange}
                  disabled={this.state.disabled_t}
                  />
                  <button  className="editBtn" onClick={this.handleClick.bind(this)}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFormComponent;
