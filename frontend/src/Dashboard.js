import React from "react";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import pics from "./images/spotify.gif";

function Dashboard() {
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
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    RAVEL VOCAL
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        Offcanvas
                      </h5>
                      <button
                        className="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/sign-in">
                            Sign in
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/sign-up">
                            Sign up
                          </a>
                        </li>
                      </ul>
                      <form className="d-flex mt-3" role="search">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={pics} className="img-fluid animated land" alt="img" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
