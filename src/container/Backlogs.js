import React, {Component} from 'react';
import BacklogForm from '../ui/BacklogForm';

export default class Backlogs extends Component {

    constructor(){
        super();
        this.state={
            backlogs: [
                {
                    id: 1,
                    backlogName: "Backlog Name 1",
                    backlogDate: "01/02/2018"
                },
                {
                    id: 2,
                    backlogName: "Backlog Name 2",
                    backlogDate: "01/02/2019"
                },
                {
                    id: 3,
                    backlogName: "Backlog Name 3",
                    backlogDate: "01/02/2020"
                },
                {
                    id: 4,
                    backlogName: "Backlog Name 4",
                    backlogDate: "01/02/2021"
                },
            ]
        }
    }

    render(){
        return(
            <div className="container" style={{ paddingTop: '30px' }}>
            <BacklogForm />
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
                        {this.state.backlogs.map((backlogs, index) => {
                            return (
                                <tr key={backlogs.id}>
                                    <th scope="row">{backlogs.id}</th>
                                    <td>{backlogs.backlogName}</td>
                                    <td>{backlogs.backlogDate}</td>
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