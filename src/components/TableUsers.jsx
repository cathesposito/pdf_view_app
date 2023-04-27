import React from "react";
import data from "../users"
import { Link } from "react-router-dom";


export default function TableUsers() {

  return (
    <div>
      <div>
        <h2>Users Contact</h2>
        <table className="table-users">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th colSpan={2}>{'\u00A0'}</th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td><Link className="link" to={`/user/${item.key}`} target="_blank"> View </Link></td>
                <td><Link className="link" to={`/user/pdf/${item.key}`} target="_blank"> Print </Link></td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}