import React, { Component } from 'react';

import MainContainer from '../MainContainer/MainContainer';

import moment from 'moment';

class Projects extends Component {
//var projects[];

  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    fetch('https://whispering-refuge-67607.herokuapp.com/projects')
    .then(results => { 
      return results.json(); 

    })
    .then(data => {
      this.setState({
        projects: data

      });

    });
  }

  render() {
    return (
      <MainContainer highlight="Projects">
        <h1 className="page-header">Projects</h1>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <tbody>

                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>

                {this.state.projects.map((project) => {

                  return (
                    <tr>
                      <td>{project.ProjectName}</td>
                      <td>{project.ProjectDescription}</td>
                      <td>{moment(project.ProjectStartDate).format("LL")}</td>
                      <td>{project.ProjectEndDate ? moment(project.ProjectStartDate).format("LL") : "n/a"}</td>
                    </tr>

                  );
                })}

              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
  
}

export default Projects;

