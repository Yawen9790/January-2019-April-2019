import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as moment from 'moment';

class ProjectPanels extends Component {

  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    fetch('https://whispering-refuge-67607.herokuapp.com/projects')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ 
          projects : data 
        });

      });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>

                {this.state.projects.map((project) => {
                  return (
                    <tr>
                      <td>{project.ProjectName}</td>
                      <td>Active {moment().diff(moment(project.ProjectStartDate), 'days')} days</td>
                    </tr>
                  );
                })}
                
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
        </div>
      </div>
    );
  }
}

export default ProjectPanels;

