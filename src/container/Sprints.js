import React, { Component } from 'react';
import SprintForm from '../ui/SprintForm';

export default class Sprints extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            sprints: [
                {
                    id: 1,
                    sprintName: "Sprint Name 1",
                    sprintDate: "01/03/2018"
                },
                {
                    id: 2,
                    sprintName: "Sprint Name 2",
                    sprintDate: "01/03/2019"
                },
                {
                    id: 3,
                    sprintName: "Sprint Name 3",
                    sprintDate: "01/03/2020"
                },
                {
                    id: 4,
                    sprintName: "Sprint Name 4",
                    sprintDate: "01/03/2021"
                },
            ]
        }
    }

    handleSubmit(e, { name, date }) {
        e.preventDefault();
        var state = this.state;
        var mySprint = {
            id: state.sprints.length + 1,
            sprintName: name,
            sprintDate: date,
        }

        if (!mySprint.sprintName == '' && !mySprint.sprintDate == '') {
            this.setState({ sprints: state.sprints.concat(mySprint) });
        }

    }

    render() {
        return (
            <div className="container" style={{ paddingTop: '30px' }}>
                <SprintForm submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Release Name</th>
                            <th scope="col">Release Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sprints.map((sprints, index) => {
                            return (
                                <tr key={sprints.id}>
                                    <th scope="row">{sprints.id}</th>
                                    <td>{sprints.sprintName}</td>
                                    <td>{sprints.sprintDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm">Remove</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}