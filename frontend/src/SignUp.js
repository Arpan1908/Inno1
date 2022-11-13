import React from "react";
import "./Styles.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Styles.css";

function SignUp() {
  const url = "http://localhost:4000/app/sign-up";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      email: data.email,
      password: data.password,
    });
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <ScaleLoader
          className="dashboard"
          size={150}
          color={"#36d7b7"}
          loading={loading}
        />
      ) : (
        <div className="container">
          <div className="card">
            <form className="card-form" onSubmit={(e) => submit(e)}>
              <div className="input">
                <input
                  type="email"
                  className="input-field"
                  id="email"
                  placeholder="email"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>

              <div className="input">
                <input
                  type="password"
                  className="input-field"
                  id="password"
                  placeholder="password"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>

              <div className="action">
                <button className="action-button" onClick={submit}>
                  Sign Up
                </button>
              </div>
            </form>
            <div className="card-info">
              <p>
                Already Registered?{" "}
                <a className="sub" href="/sign-in">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
}

export default SignUp;
