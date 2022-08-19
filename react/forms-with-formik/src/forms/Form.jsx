import React from "react";
import { useFormik } from "formik";

export default function Form() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      hobbies: [],
      country: "Turkiye",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-input"
          id="firstName"
          name="firstName"
          placeholder="Jane"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-input"
          id="lastName"
          name="lastName"
          placeholder="Doe"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <span>Male</span>
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={handleChange}
          checked={values.gender === "female"}
        />

        <label htmlFor="hobbies">Hobbies</label>

        <input
          type="checkbox"
          name="hobbies"
          value="Football"
          onChange={handleChange}
        />
        <span>Football</span>
        <input
          type="checkbox"
          name="hobbies"
          value="Cinema"
          onChange={handleChange}
        />
        <span>Cinema</span>
        <input
          type="checkbox"
          name="hobbies"
          value="Photography"
          onChange={handleChange}
        />
        <span>Photography</span>

        <label htmlFor="country">Select a country</label>
        <select value={values.country} name="country" onChange={handleChange}>
          <option value="Turkiye">Turkiye</option>
          <option value="Ingiltere">Ingiltere</option>
          <option value="USA">USA</option>
        </select>

        <button type="submit">Submit</button>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}
