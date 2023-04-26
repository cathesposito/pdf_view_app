import React from "react";
import { useParams } from 'react-router-dom';
import data from "../users"


const UserPDFView = () => {
    const { key } = useParams();

    console.log(key);

    const found = data.find(obj => {
        return obj.key == key;
    });

    return (

        <div>
            <h2>User {found.name}</h2>
            <p>Address {found.address}</p>

            <hr />

            {found && (
                <table className="table-user-view">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{found.name}</td>
                            <td>{found.address}</td>
                        </tr>
                    </tbody>
                </table>
            )}

        </div>
    );

};

export default UserPDFView;