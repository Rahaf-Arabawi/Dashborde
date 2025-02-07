import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./student.css";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("required"),
      lastName: Yup.string().required("required"),
      email: Yup.string().email("Invalid email format").required("required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Only numbers are allowed")
        .required("required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert("Profile Updated Successfully!");
      console.log(values);
    },
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 pb-5">
          <div className="author-card pb-3">
            <div className="author-card-cover"></div>
            <div className="author-card-profile">
              <div className="author-card-avatar">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User" />
              </div>
              <div className="author-card-details">
                <h5 className="author-card-name text-lg">Daniel Adams</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 pb-5">
          <form onSubmit={formik.handleSubmit} className="row">
            {[
              { name: "firstName", label: "First Name" },
              { name: "lastName", label: "Last Name" },
              { name: "email", label: "E-mail Address", type: "email" },
              { name: "phone", label: "Phone Number" },
              { name: "password", label: "New Password", type: "password" },
              { name: "confirmPassword", label: "Confirm Password", type: "password" },
            ].map(({ name, label, type = "text" }) => (
              <div className="col-md-6" key={name}>
                <div className="form-group">
                  <label htmlFor={name}>{label}</label>
                  <input
                    className="form-control"
                    type={type}
                    id={name}
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[name]}
                  />
                  {formik.touched[name] && formik.errors[name] ? (
                    <div className="text-danger">{formik.errors[name]}</div>
                  ) : null}
                </div>
              </div>
            ))}
            <div className="col-12">
              <hr className="mt-2 mb-3" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <button className="btn1 btn1-primary" type="submit">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;