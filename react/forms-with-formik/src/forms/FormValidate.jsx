import React from "react";
import { useFormik } from "formik";
import validations from "./validations";

export default function FormValidate() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
      validationSchema: validations,
    });

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          id="email"
          name="email"
          placeholder="email@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}

        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          id="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="form-input"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}

        <button type="submit">Submit</button>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}
