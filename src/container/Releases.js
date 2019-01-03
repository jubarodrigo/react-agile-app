import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {

    constructor() {
        super();
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: "Release Name 1",
                    releaseDate: "01/01/2018"
                },
                {
                    id: 2,
                    releaseName: "Release Name 2",
                    releaseDate: "01/01/2019"
                },
                {
                    id: 3,
                    releaseName: "Release Name 3",
                    releaseDate: "01/01/2020"
                },
                {
                    id: 4,
                    releaseName: "Release Name 4",
                    releaseDate: "01/01/2021"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: '30px' }}>
                <ReleaseForm />
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
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
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