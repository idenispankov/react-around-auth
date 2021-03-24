import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from './Input';
import * as auth from '../utils/auth';

class Login extends React.Component {
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
    if (!this.state.email || !this.state.password) {
      return;
    }
    auth
      .login(this.state.email, this.state.password)
      .then((data) => {
        console.log(data);
        if (data) {
          this.setState({ username: '', password: '' }, () => {
            this.props.handleLogin(data.jwt);
            this.props.history.push('/about');
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form className='form form__autorization' onSubmit={this.handleSubmit}>
        <h2 className='form__title form__title-autorization'>Log in</h2>
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
          Log in
        </button>
        <Link to='signup' className='form__text'>
          Not a member yet? Sign up here!
        </Link>
      </form>
    );
  }
}

export default withRouter(Login);
