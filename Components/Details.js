import React from 'react';

const Details = () => {
    return(
        
        <div className="container ">
            <h1>Contact Details</h1>
            <h5 className="m-4">Email : <a target="-blank" href="https://prashantguru1996@gmail.com">prashantguru1996@gmail.com</a></h5>
            <h5 className="m-4">Linkedin : <a target="-blank" href="https://www.linkedin.com/in/prashant-bhardwaj-324b491a5">https://www.linkedin.com/in/prashant-bhardwaj-324b491a5</a></h5>
            <div className="m-4 d-flex">
            <h5>Contact No. : </h5><h6 className="ml-4"><mark>7479833960</mark> , <mark>8709457533</mark></h6>
            </div>
        </div>
        
    );
}

export default Details;