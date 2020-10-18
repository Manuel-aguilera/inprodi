import React from 'react';
import Form from '../components/Form';
import login from '../assets/static/login.png';

const Login = () => {
  return (
    <div className='container '>
      <div className='row align-items-center'>
        <div className='login_form col-sm-12 col-md-7 col-lg-6 col-xl-6 align-self-center imagenFondo'>
          <Form className='my_form' />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className='login_img col-sm-12 col-md-5 col-lg-6 col-xl-6 align-self-center'>
          <img src={login} alt='login-img' />
        </div>
      </div>
    </div>
  );
};

export default Login;
