import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./about.css";

function AboutUs() {
    return (
        <div>

       <div className='container-fluid bg-dark'>
         <div className='row'>
           <div className='col-md-4 mt-5'>
                <div class="card shadow border-primary" style={{width:'18rem'}}>
                  <div className='inner'>
                  <img src="https://www.usnews.com/dims4/USNEWS/a6de483/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F3a%2F21%2F338ee76746d1876c3fbeb43be04c%2F190502-computerprogrammer-stock.jpg" class="card-img-top" alt="..."/>
                  </div>
                
                <div class="card-body text-center">
                  <h5 class="card-title bg-info">Web Developer</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="contained" color="secondary">
                  Read More
                </Button>
                </div>
              </div>

           </div>
           <div className='col-md-4 mt-5'>
           <div class="card shadow border-primary" style={{width:'18rem'}}>
             <div className='inner'>
              <img src="https://cdn.hswstatic.com/gif/computer-types-1.jpg" class="card-img-top" alt="..."/>
              </div>
              <div class="card-body shadow text-center ">
                <h5 class="card-title">Faishon Designer</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </div>
            </div>
           </div>
           <div className='col-md-4 mt-5'>
           <div class="card shadow border-primary" style={{width:'18rem'}}>
              <img src="https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8..v1583853669.jpg" class="card-img-top" alt=""/>
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </div>
            </div>
           </div>
          

         </div>
       </div>


          
       <div className='container mt-5'>
         <div className='row'>
           <div className='col-md-4'>
                <div class="card shadow border-primary" style={{width:'18rem'}}>
                  <div className='inner'>
                  <img src="https://cdn.mos.cms.futurecdn.net/SBhFLUo2vGVNTD8NDwgREU.jpg" class="card-img-top" alt="..."/>
                  </div>
                
                <div class="card-body text-center">
                  <h5 class="card-title bg-info">Web Developer</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="contained" color="secondary">
                  Read More
                </Button>
                </div>
              </div>

           </div>
           <div className='col-md-4'>
           <div class="card shadow border-primary" style={{width:'18rem'}}>
             <div className='inner'>
              <img src="https://image.shutterstock.com/image-photo/cute-emotional-boy-playing-video-260nw-1313791106.jpg" class="card-img-top" alt="..."/>
              </div>
              <div class="card-body shadow text-center ">
                <h5 class="card-title">Faishon Designer</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </div>
            </div>
           </div>
           <div className='col-md-4'>
           <div class="card shadow border-primary" style={{width:'18rem'}}>
              <img src="https://www.headstartcourses.org.uk/wp-content/uploads/2020/05/Computer-Classes-for-Kids.jpg" class="card-img-top" alt=""/>
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </div>
            </div>
           </div>
          

         </div>
       </div>

       <section >
          <div className="container my-3 py-5 text-center">
            <div className="row mb-5">
              <div className='col-'>
                <h1>Our Team</h1>
                <p className="mt-3 text-mute">The LogiQ, the best website development and digital marketing company in the USA, offers a 360-degree digital services portfolio</p>
              </div>

            </div>

                <div className="row ">
                  <div className="col-lg-3 col-md-6">
                      <div className='card'>
                        <div className='card-body'>
                          <img src="https://download.cnet.com/a/img/resize/392c42bcf7a4964dc8be1b2a384573a8024bea42/catalog/2018/09/17/5f62d071-0406-4bc0-bfcd-9936206c3222/imgingest-456472590754299888.png?auto=webp&fit=crop&width=64" className="img-fluid rounded-circle w-50 mb-3"alt=""/>
                         <h3>Name.....</h3>
                         <h5>Lead Writer</h5>
                         <p>Website Design is a WordPress website design  </p>
                         <div className='d-flex flex-row justify-content-center'>
                           <div className='p-4'>
                             <NavLink to='#'>
                               <i className='fas fa-facebook'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-twitter'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-instagram'></i>
                             </NavLink>
                           </div>
                           
                         </div>

                        </div>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className='card'>
                      <div className='card-body'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksTvoARH_Q8ft6DZnIrB2C5LTUO9BuEfDGl6JGwXUgv8MfjxOA2LoN93nLpdIPVO67gs&usqp=CAU'alt="" className='img-fluid rounded-circle w-50 mb-3'/>
                        <h3>Nikki</h3>
                        <h5>Tally erp9</h5>
                        <p>Tally Solutions Pvt. Ltd. is an Indian multinational</p>
                        <div className='d-flex flex-row justify-content-center'>
                            <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-facebook'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-instagram'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-twitter'></i>
                             </NavLink>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6">
                    <div className='card'>
                      <div className='card-body'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksTvoARH_Q8ft6DZnIrB2C5LTUO9BuEfDGl6JGwXUgv8MfjxOA2LoN93nLpdIPVO67gs&usqp=CAU'alt="" className='img-fluid rounded-circle w-50 mb-3'/>
                        <h3>Nikki</h3>
                        <h5>Tally erp9</h5>
                        <p>Tally Solutions Pvt. Ltd. is an Indian multinational</p>
                        <div className='d-flex flex-row justify-content-center'>
                            <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-facebook'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-instagram'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-twitter'></i>
                             </NavLink>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className='card'>
                      <div className='card-body'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksTvoARH_Q8ft6DZnIrB2C5LTUO9BuEfDGl6JGwXUgv8MfjxOA2LoN93nLpdIPVO67gs&usqp=CAU'alt="" className='img-fluid rounded-circle w-50 mb-3'/>
                        <h3>Nikki</h3>
                        <h5>Tally erp9</h5>
                        <p>Tally Solutions Pvt. Ltd. is an Indian multinational</p>
                        <div className='d-flex flex-row justify-content-center'>
                            <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-facebook'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-instagram'></i>
                             </NavLink>
                           </div>
                           <div className='p-4'>
                             <NavLink to="#">
                             <i className='fas fa-twitter'></i>
                             </NavLink>
                           </div>
                        </div>
                      </div>
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
