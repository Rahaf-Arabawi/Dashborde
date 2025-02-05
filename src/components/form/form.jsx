import React from "react";
import { useForm } from "react-hook-form";
import './form.css'

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-orange-400 to-orange-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Registration Form</h2>
        <p className="text-center text-gray-600 mb-6">Fill out the form carefully for registration</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Student Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input {...register("firstName", { required: "First name is required" })} className="w-full border rounded p-2" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input {...register("lastName", { required: "Last name is required" })} className="w-full border rounded p-2" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Gender & Email */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Gender</label>
              <select {...register("gender", { required: "Gender is required" })} className="w-full border rounded p-2">
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Student E-mail</label>
              <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })} className="w-full border rounded p-2" placeholder="ex: myname@example.com" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Student ID & Classes */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Student ID</label>
              <input {...register("studentId", { required: "Student ID is required" })} className="w-full border rounded p-2" />
              {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700">List of Classes</label>
              <select {...register("classList", { required: "Please select a class" })} className="w-full border rounded p-2">
                <option value="">Please Select</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="history">History</option>
              </select>
              {errors.classList && <p className="text-red-500 text-sm">{errors.classList.message}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;