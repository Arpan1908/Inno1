import React from "react";
import "./Styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/app/sign-up";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/dashboard";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <ScaleLoader
          className="dashboard"
          size={150}
          color={"#36d7b7"}
          loading={loading}
        />
      ) : (
        <div className="container ">
          <div className="card">
            <form className="card-form" onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="email"
                  className="input-field"
                  placeholder="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  className="input-field"
                  placeholder="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="action">
                <button className="action-button" type="submit">
                  Sign In
                </button>
              </div>
            </form>
            <div className="card-info">
              <p>
                Not Registered? <a href="/sign-up">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
