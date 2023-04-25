import React from "react";
import data from "../users"
import { Link } from "react-router-dom";


export default function TableUsers() {

  return (
    <div className="table-users">
      <div>
        <h2>Users Contact</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>{'\u00A0'}</th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td><Link className="link" to={`/User/${item.key}`}> Print </Link></td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}