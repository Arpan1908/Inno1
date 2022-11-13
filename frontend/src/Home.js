import React from "react";
import "./Styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import pic from "../src/images/spot.gif";

export default function Home() {
  return (
    <>
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
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <section className="d-flex align-items-center" id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Make Your Soul Fly{" "}
                    <strong className="brand-name">RavelVocal</strong>
                  </h1>
                  <h2 className="my-3" style={{ fontSize: 20 }}>
                    Listen to your favorite playlist anywhere{" "}
                  </h2>
                  <div className="mt-3">
                    <a href="/sign-up" className="btn btn-outline-success">
                      Start listening
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={pic} className="img-fluid animated" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
