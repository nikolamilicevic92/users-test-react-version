import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UsersService from '../../../services/UsersService';

class UsersIndex extends Component {
  
  constructor() {
    super();
    this.usersService = new UsersService();
    this.state = {
      users: []
    };
  }
  
  componentDidMount() {
    this.usersService.getUsers()
    .then(response => {
      console.log(response);
      this.setState({ users: response.data });
    }).catch(error => console.log(error));
  }

  getTableRows() {
    return this.state.users.map((user, index) => (
      <tr key={index}>
        <td>{ user.id }</td>
        <td>
          <NavLink to={`/users/${user.id}`}>
            { user.name }
          </NavLink>                  
        </td>
        <td>{ user.email }</td>
        <td>{ user.address.city }</td>
      </tr>
    ))
  }
  
  render() {
    return (
      <div>
        <div className="clearfix mb-5">
          <NavLink to="/users/create">
            <button className="btn btn-primary float-right">New User</button>
          </NavLink>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            { this.getTableRows() }
          </tbody>
        </table>
      </div>
      );
    }
  }
  
  export default UsersIndex;
  