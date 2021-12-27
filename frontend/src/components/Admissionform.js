import React from 'react'
import "./Admissionform.css";



function Admissionform() {
    return(
        <div>
            <div className=' add container-fluid bg-dark '>
                <h1 className="text-white text-center py-3" >GET ADMISSION ONLINE</h1>
                <p className='text-white text-center mt-3'>WELCOME</p>
            </div>


     <div className='container-fluid bg-info mt-4'>
         <div className='container  '>
            <form class="row g-3">
                <h1 className='text-center'>Apply as a Student</h1>
                
            <div class="col-md-4 py-3">
                <h2>WELCOME</h2>
                <p className='text-mute text-primary' color="red"> trust the following information will assist every prospective family and student in understanding our admissions procedures including all the necessary documentation required to process an application for admission</p>

          
            </div>
            <div class="col-md-3 py-3">
            <input type="text-3" class="form-control " placeholder="First name" aria-label="First name"/>

                <input type="text" class="form-control mt-3" placeholder="Last name" aria-label="Last name"/>
                <input type="text" class="form-control mt-3" placeholder="Date of Birth" aria-label="Date of Birth"/>
                <select id="inputGender"  class="form-select mt-3">
                    <option selected>Gender...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    </select>
                <input type="text" class="form-control mt-3" placeholder="Phone *" aria-label="Last name"/>
                <input type="text" class="form-control mt-3" placeholder="Email " aria-label="Email"/>
            </div>

            <div className='col-md-4 mt-3 mr-3'>
            <select id="input"  class="form-select mt-3">
                    <option selected>Course</option>
                    <option>Python</option>
                    <option>JAVA</option>
                    <option>FRAMEWORK ALL</option>
                    </select>
                    <input type="text" class="form-control mt-3" placeholder="Religion *" aria-label="Religion"/>
                    <input type="text" class="form-control mt-3" placeholder="Address *" aria-label="Address"/>
                    <input type="text" class="form-control mt-3" placeholder="AAdhar Card *" aria-label="AAdhar Card"/>

                    <select id="input"  class="form-select mt-3">
                    <option selected>Select Country</option>
                    <option>INDIAN</option>
                    <option>US</option>
                    <option>A</option>
                    </select>
                    <input class="form-control form-control-lg  mt-3" id="formFileLg" type="file"/>
                    <input class="form-control form-control-lg  mt-3" id="formFileLg" type="file"/>
            </div>
           
            {/* <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div> */}
            <div class="col-12">
                <button type="submit" class="btn btn-primary float-end">Sign in</button>
            </div>
            </form>
        </div>  
        </div>
    </div>
    );
};
export default Admissionform;



