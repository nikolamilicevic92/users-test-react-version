import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UsersService from '../../../services/UsersService';

class UsersShow extends Component {

  constructor() {
    super();
    this.usersService = new UsersService();
    this.state = {
      id: null, name: '', email: '', address: { city: '' }
    }
  }

  componentDidMount() {
    this.usersService.getUser(this.props.match.params.id)
      .then(response => {
        console.log(response);
        this.setState({ ...response.data })
      }).catch(error => console.log(error))
  }

  deleteUser() {
    this.usersService.deleteUser(this.state.id)
      .then(() => {
        this.props.history.push('/')
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1 className="text-info mb-5">{ this.state.name }</h1>
        <div className="user mb-5">
          <div>Id: { this.state.id }</div>
          <div>Email: { this.state.email }</div>
          <div>City: { this.state.address.city }</div>
        </div>
        <div>
          <NavLink to={`/users/${this.state.id}/edit`}>
            <button className="btn btn-primary mr-1">Edit</button>
          </NavLink>
          <button className="btn btn-danger" onClick={this.deleteUser.bind(this)}>Delete</button>
        </div>
      </div>
      )
    }
  }
  
  export default UsersShow;
  