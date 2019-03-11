import React, { Component } from 'react';
import MainContainer from '../MainContainer/MainContainer';

import moment from 'moment';

class Employees extends Component {
  // let employees[] 

  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {

    fetch('https://whispering-refuge-67607.herokuapp.com/employees')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          employees: data
        });

      });
  }


  render() {

    return (

      <MainContainer highlight="Employees">

        <h1 className="page-header">Employees</h1>

        <div className="row">
          <div className="col-md-12">

            <table className="table table-striped table-bordered">

              <tbody>
                
                <tr>
                  <th>Name & Position</th>
                  <th>Address</th>
                  <th>Phone Num</th>
                  <th>Hire Date</th>
                  <th>Salary Bonus</th>
                </tr>

                {this.state.employees.map((emp) => {

                  return ( //)=>{

                    <tr>
                      <td>{emp.FirstName + ' ' + emp.LastName + " - " + emp.Position.PositionName}</td>
                      <td>{emp.AddressStreet + ', ' + emp.AddressCity + ', ' + emp.AddressState + ', ' + emp.AddressZip}</td>

                      <td>{emp.PhoneNum + ' ext. ' + emp.Extension}</td>
                      <td>{moment(emp.HireDate).format("LL")}</td>

                      <td>${emp.SalaryBonus}</td>
                    </tr>

                  );
                  //};
                })}
              </tbody>
            </table>

          </div>
        </div>
      </MainContainer>
    );
  }
}

export default Employees;
