import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected gender:", gender);
  };

  return (
    <form class="card">
      <h2 className="heading">Admission Form</h2>
      <lable>First Name:</lable>
      <br />
      <input placeholder={"enter your First Name"} type="text" />
      <br />
      <lable>Middle Name:</lable>
      <br />
      <input placeholder={"enter your Middle Name"} type="text" />
      <br />
      <lable>Last Name:</lable>
      <br />
      <input placeholder={"enter your Lat Name"} type="text" />
      <br />
      <br />
      <label>Email-id:</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your mail address"
      />{" "}
      <br />
      <br />
      <label>Select Course :</label>
      <select>
        <option value="Course">Course</option>
        <option value="BCA">BCA</option>
        <option value="BBA">BBA</option>
        <option value="B.Tech">B.Tech</option>
        <option value="MBA">MBA</option>
        <option value="MCA">MCA</option>
        <option value="M.Tech">M.Tech</option>
      </select>
      <br />
      <br />
      <label>Gender :</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        defaultCheckedchecked
        onChange={handleGenderChange}
      />
      Male
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="others"
          checked={gender === "others"}
          onChange={handleGenderChange}
        />
        Others
      </label>
      <br />
      <br />
      <label> Date of Birth: </label>
      <input type="date" name="dob" required></input>
      <br />
      <br />
      <label>Phone Number:</label>
      <input type="text" name="country code" value="+91" size="2" />
      <input type="text" name="phone" size="10" />
      <br />
      <br />
      Address:
      <br />
      <textarea cols="60" rows="3" placeholder="enter your address"></textarea>
      <br />
    </form>
  );
}

export default App;
