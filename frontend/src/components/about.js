import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./about.css";

function AboutUs() {
    return (
        <div>
          <div className=' container-fluid myadd'>
          <h2 className='text-white text-mute text-center py-3 text-info'>About digipodium</h2>
          

          <div className=' container text-center py-5 '>
            <div className='card'>
            <h1 >What we are</h1>
            <p>Digipodium is a platform which reaches out to its audiences to help them enrich their lives in a 
            bigger and better manner through specializations in various fields of</p>
            </div>
          </div>
        



          </div>


       <div className='container mt-5 '>
         <div className='row'>
           <div className='col-md-4 main'>
                <div class="card shadow border-primary">
                  <div className='inner'>
                  <img src="https://cdn.mos.cms.futurecdn.net/SBhFLUo2vGVNTD8NDwgREU.jpg" class="card-img-top" alt="..."/>
                  </div>
                
                <div class="card-body text-center">
                  <h5 class="card-title bg-info">Web Developer</h5>
                  <p class="card-text">Some quick example text to build on the</p>
                  <Button variant="contained" color="secondary">
                  Read More
                </Button>
                </div>
              </div>

           </div>
           <div className='col-md-4 main'>
           <div class="card shadow border-primary">
             <div className='inner'>
              <img src="https://image.shutterstock.com/image-photo/cute-emotional-boy-playing-video-260nw-1313791106.jpg" class="card-img-top" alt="..."/>
              </div>
              <div class="card-body shadow text-center ">
                <h5 class="card-title">Faishon Designer1</h5>
                <p class="card-text">Some quick example text to build on the .</p>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </div>
            </div>
           </div>
           <div className='col-md-4 main'>
           <div class="card shadow border-primary">
              <img src="https://www.headstartcourses.org.uk/wp-content/uploads/2020/05/Computer-Classes-for-Kids.jpg" class="card-img-top" alt=""/>
              <div class="card-body text-center">
                <h5 class="card-title">Networking Hardwera</h5>
                <p class="card-text">Some quick example text to build </p>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </div>
            </div>
           </div>
          

         </div>
       </div>



       <section className='bg-light' >
          <div className="container my-3 py-5 text-center">
            <div className="row mb-5">
              <div className='col-'>
                <h1>Our Team</h1>
                <p className="mt-3 text-mute">The LogiQ, the best website development </p>
              </div>
      <div class="row mt-3">
      <div class="col-lg-4 ">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
          </div>
            </div>

        

          </div>
       

       </section>




































    <footer className="bg-info text-dark pt-5 pb-4 mt-3">
        <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                          <h5 className="text-uppercase mb-4 font-weight-bold text-success">About Us</h5>
                          <hr className="mb-4"></hr>
                            <p>Lorem With supporting text below as a natural lead-in to additional content.

                          </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-success">Let Us Helf</h5>
                          <hr className="mb-4"></hr>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>Your Account</a>
                          </p>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>Your Orders</a>
                          </p>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>Manage Your Content And Devices</a>
                          </p>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration:'none'}}>Helf</a>
                          </p>

                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-success">Make Money</h5>
                          <hr className="mb-4"></hr>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>Sell Product on Our Website</a>
                          </p>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>Adverstise Your Products</a>
                          </p>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>Become An Affiliates </a>
                          </p>
                          <p>
                             <a href="#" className="text-dark" style={{textDecoration: 'none'}}>self-Pubilish</a>
                          </p>

                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact Us</h5>
                          <hr className="mb-4"></hr>
                          <p>
                            <li className="fas fa-home mr-3"></li>New York NY 2333,US
                          </p>

                          <p>
                            <li className="fas fa-envelose mr-3"></li>nasimkhan7570@gmail.com
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
                              <a href="#" style={{textDecoration: 'none'}}>
                                <strong className="text-success">Director By Ali Ahamad Khan</strong>

                              </a>
                            </p>
                          </div>
                      </div>
                     <div className="row d-flex justify-content-center">
                          <div className="text-conter">
                             <ul className="list-unstyle list-inline">
                               <li className="list-inline-item">
                                 <a href="#" className="text-dark"><i className="fab fa-facebook"></i></a>
                               </li>
                               <li className="list-inline-item">
                                 <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
                               </li>
                               <li className="list-inline-item">
                                 <a href="#" className="text-dark"><i className="fab fa-google-plus"></i></a>
                               </li>
                               <li className="list-inline-item">
                                 <a href="#" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
                               </li>
                               <li className="list-inline-item">
                                 <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
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

export default AboutUs;
