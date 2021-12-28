import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  let name = "Nasim Khan";
  let laptop = {};

  return (
    <div className="container-fluid">
      <section class="services py-5 bg-info">
        <div class="container-fluid ">
          <div class="text-center my-2">
            <h1 data-aos="fade-down-right" data-aos-offset="300">
              FIIT <span class="text-primary">INFORMATION</span>{" "}
            </h1>
            <hr class="w-25 m-auto" />
            <Button variant="outlined text-center mt-2 text-warning" color="error">
              Our Service
            </Button>
            <Button variant="contained text-center mt-2 text-white" color="warning">
              More Info
            </Button>
          </div>
        </div>
      </section>

      <div className="col-md-10 mx-auto mycards">
        <div className="row mx-5 mx-5">
          <div className="col-md">
            <div className="card shadow">
              <div className="row g-0">
                <div className="col-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs9ucpfR8EfKTDir6GhIL-qi_HlVfqOTpNg&usqp=CAU" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-8">
                  <div className="card-body">
                    <h5 className="card-title text-center bg-warning">
                      Card title 1
                    </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card shadow">
              <div className="row g-0">
                <div className="col-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmcMlMNu7rUfQhh64OV_p2kuMfUPDwbTrsg&usqp=CAU" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-8">
                  <div className="card-body">
                    <h5 className="card-title text-center bg-warning">
                      Card title 2
                    </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card shadow">
              <div className="row g-0">
                <div className="col-4">
                  <img src="https://wallpaperaccess.com/full/1218577.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-8">
                  <div className="card-body">
                    <h5 className="card-title text-center bg-warning">
                      Card title 3
                    </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center bg-light mt-5">200+</h1>
        <p className="text-center mt-2">FIIT Provide Course</p>
      </div>

      <div className="container-fluid bg-primary py-5">
        <div className="row text-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="bg-white p-5 rounded-lg shadow">
              <h1 className="h6 text-uppercase front-weight-bold mb-4">
                Basic
              </h1>
              <h2 className="h1 font-weight-bold">
                $199{" "}
                <span className="text-small front-weight-normal ml-2">
                  /Month
                </span>
              </h2>
              <div className="custom-serperator my-4 mx-auto bg-primary"></div>

              <ul className="list-unstyled my-5 text-small text-left">
                <li className="mb-3">
                  <i className="fa fa-check mr-2 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-4">
                  <i className="fa fa-check mr-3 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-3">
                  <i className="fa fa-check mr-2 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components for faster</del>
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components kjgkgf hdstrt</del>
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components kjgkgf hdstrt</del>
                </li>
              </ul>
              <a
                href="#"
                className="btn btn-primary btn block p-2 shadow rounded-pill"
              >
                Admission now
              </a>
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="bg-white p-5 rounded-lg shadow">
              <h1 className="h6 text-uppercase front-weight-bold mb-4">
                Python Language
              </h1>
              <h2 className="h1 font-weight-bold">
                $899{" "}
                <span className="text-small front-weight-normal ml-2">
                  /Month
                </span>
              </h2>
              <div className="custom-serperator my-4 mx-auto bg-primary"></div>

              <ul className="list-unstyled my-5 text-small text-left">
                <li className="mb-3">
                  <i className="fa fa-check mr-2 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-4">
                  <i className="fa fa-check mr-3 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-3">
                  <i className="fa fa-check mr-2 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components for faster</del>
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components kjgkgf hdstrt</del>
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components kjgkgf hdstrt</del>
                </li>
              </ul>
              <a
                href="#"
                className="btn btn-primary btn block p-2 shadow rounded-pill"
              >
                Admission now
              </a>
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="bg-white p-5 rounded-lg shadow">
              <h1 className="h6 text-uppercase front-weight-bold mb-4">
                Python Language
              </h1>
              <h2 className="h1 font-weight-bold">
                $199{" "}
                <span className="text-small front-weight-normal ml-2">
                  /Month
                </span>
              </h2>
              <div className="custom-serperator my-4 mx-auto bg-primary"></div>

              <ul className="list-unstyled my-5 text-small text-left">
                <li className="mb-3">
                  <i className="fa fa-check mr-2 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-4">
                  <i className="fa fa-check mr-3 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-3">
                  <i className="fa fa-check mr-2 text-primary"></i>React
                  components for faster
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components for faster</del>
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components kjgkgf hdstrt</del>
                </li>

                <li className="mb-3 text-mute">
                  <i className="fa fa-times mr-2 "></i>
                  <del>React components kjgkgf hdstrt</del>
                </li>
              </ul>
              <a
                href="#"
                className="btn btn-primary btn block p-2 shadow rounded-pill"
              >
                Admission now
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-light text-dark pt-5 pb-4 mt-3">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                About Us
              </h5>
              <hr className="mb-4"></hr>
              <p>
                Lorem With supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Let Us Helf
              </h5>
              <hr className="mb-4"></hr>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Your Account
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Your Orders
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Manage Your Content And Devices
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Helf
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Make Money
              </h5>
              <hr className="mb-4"></hr>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Sell Product on Our Website
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Adverstise Your Products
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Become An Affiliates{" "}
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  self-Pubilish
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                Contact Us
              </h5>
              <hr className="mb-4"></hr>
              <p>
                <li className="fas fa-home mr-3"></li>New York NY 2333,US
              </p>

              <p>
                <li className="fas fa-envelose mr-3"></li>
                nasimkhan7570@gmail.com
              </p>

              <p>
                <li className="fas fa-phone mr-3"></li>75709786787
              </p>
              <p>
                <li className="fas fa-print mr-3"></li> +91 787986
              </p>
            </div>

            <hr className="mb--4"></hr>
            <div className="row d-flex justify-content-center">
              <div>
                <p>
                  Copyright 2021 All Right Reserved By :
                  <a href="#" style={{ textDecoration: "none" }}>
                    <strong className="text-info">The Nasim khan</strong>
                  </a>
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="text-conter">
                <ul className="list-unstyle list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
