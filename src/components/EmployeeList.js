import React from 'react';
const data = require('../Data.json');

class EmployeeList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>EmployeeList Page</h1>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>email</th>
                        <th>phoneNo</th>
                    </tr>
                    {data.user.map((element, index)=>(
                      <tr key={index}>
                          <td>{element.id}</td>
                          <td>{element.name}</td>
                          <td>{element.age}</td>
                          <td>{element.gender}</td>
                          <td>{element.email}</td>
                          <td>{element.phoneNo}</td>
                      </tr>
                  ))}
                </table>
            </React.Fragment>
        )
    }
}

export default EmployeeList;