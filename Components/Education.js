import React from 'react';

const Education = () => {
    return (
        <div className="container">
            <h1>Education</h1>
            <table className="table- col- table-sm m-4 table-bordered" width="100%">
                <thead>
                <tr>
                <th>S No.</th>
                <th>Degree</th>
                <th>University/Board</th>
                <th>College/School</th>
                <th>Passing Year</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Graduation</td>
                        <td>Vinoba Bhabhe University, Hazaribag</td>
                        <td>Annada College , Hazaribag</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>I.sc</td>
                        <td>JAC Board</td>
                        <td>St. Columbas College, Hazaribag</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>10th</td>
                        <td>CBSE Board</td>
                        <td>Al-Momin Int. School, Gaya</td>
                        <td>2011</td>
                    </tr>
                </tbody>
                </table>
            </div>
                
    )
}

export default Education