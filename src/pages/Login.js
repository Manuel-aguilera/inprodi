import React from 'react';
import '../assets/styles/Login.scss';
import Form from '../components/Form';
import login from '../assets/static/login.png';

const Login = () => {
  return (
    <div className='container_login'>
      <Form className='my_form' />
      <img src={login} alt='login-img' />
    </div>
  );
};

export default Login;
