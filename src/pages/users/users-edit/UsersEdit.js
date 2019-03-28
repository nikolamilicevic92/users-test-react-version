import React, { Component } from 'react';
import UsersService from '../../../services/UsersService';

class UsersEdit extends Component {
  
  constructor() {
    super();
    this.usersService = new UsersService();
    this.state = {
      id: null, name: '', email: ''
    }
  }
  
  componentDidMount() {
    this.usersService.getUser(this.props.match.params.id)
      .then(response => {
        console.log(response);
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email
        })
      }).catch(error => console.log(error))
  }
  
  onSubmit(event) {
    event.preventDefault();
    if (this.state.name === '' || !this.state.email.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
      alert('Please provide valid input');
      return;
    }
    this.usersService.updateUser(this.state.id, this.state)
    .then(response => {
      console.log(response);
      this.props.history.push('/');
    }).catch(error => console.log(error))
  }
  
  onNameChange(event) {
    this.setState({...this.state, name: event.target.value});
  }
  
  onEmailChange(event) {
    this.setState({...this.state, email: event.target.value});
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <label>Name *</label>
          <input 
            type="text" className="form-control" 
            value={this.state.name} onChange={this.onNameChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input 
            type="text" className="form-control" 
            value={this.state.email} onChange={this.onEmailChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      );
    }
  }
  
  export default UsersEdit;
  