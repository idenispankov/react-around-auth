import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from './Input';
// import * as auth from '../utils/auth';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleRegister();
  }

  render() {
    return (
      <form className='form form__autorization' onSubmit={this.handleSubmit}>
        <h2 className='form__title form__title-autorization'>Sign up</h2>
        <Input
          name='email'
          inputType='autorization'
          placeholder='Email'
          type='email'
          handleChange={this.handleChange}
          value={this.state.email}
        />
        <Input
          name='password'
          inputType='autorization'
          placeholder='Password'
          type='password'
          handleChange={this.handleChange}
          value={this.state.password}
        />
        <button
          className='form__button form__button_autorization'
          type='submit'
        >
          Sign up
        </button>
        <Link to='signin' className='form__text'>
          Already a member? Log in here!
        </Link>
      </form>
    );
  }
}

export default withRouter(Register);
