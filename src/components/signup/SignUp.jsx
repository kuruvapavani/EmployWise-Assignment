import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      // Send POST request to register the user
      
      const response = await axios.post("https://reqres.in/api/register", {
        email: formData.email,
        password: formData.password,
      });

      // Store the token in local storage
      localStorage.setItem("token", response.data.token);

      // Navigate to the Users page
      navigate("/users");
    } catch (error) {
      setMessage(
        "Signup failed: " + (error.response?.data?.error || "Unknown error")
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-96 p-10 bg-gray-800 shadow-2xl rounded-lg">
        <h2 className="text-white text-center text-2xl font-semibold mb-6">
          Sign Up
        </h2>
        {message && <p className="text-center text-cyan-400">{message}</p>}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative mb-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-4 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full pl-10 bg-transparent border-b border-gray-400 text-white outline-none px-2 py-3 text-lg transition-all focus:border-cyan-400 valid:border-cyan-400"
              placeholder=" "
            />
            <label className="absolute left-10 top-3 text-gray-400 text-lg transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:top-[-10px] peer-valid:text-sm peer-valid:text-cyan-400">
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-4 text-gray-400"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="peer w-full pl-10 pr-10 bg-transparent border-b border-gray-400 text-white outline-none px-2 py-3 text-lg transition-all focus:border-cyan-400 valid:border-cyan-400"
              placeholder=" "
            />
            <label className="absolute left-10 top-3 text-gray-400 text-lg transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:top-[-10px] peer-valid:text-sm peer-valid:text-cyan-400">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-6">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-4 text-gray-400"
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="peer w-full pl-10 pr-10 bg-transparent border-b border-gray-400 text-white outline-none px-2 py-3 text-lg transition-all focus:border-cyan-400 valid:border-cyan-400"
              placeholder=" "
            />
            <label className="absolute left-10 top-3 text-gray-400 text-lg transition-all duration-300 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-cyan-400 peer-valid:top-[-10px] peer-valid:text-sm peer-valid:text-cyan-400">
              Confirm Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-4 text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </button>
          </div>

          {/* Signup Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="relative px-6 py-2 w-full text-lg font-semibold uppercase tracking-wide border border-cyan-400 text-cyan-400 rounded-md transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <p className="text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
