import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/styles/components/Form.scss';
import logo from '../assets/static/logo.png';

const Forma = () => (
  <div className='container_form'>
    <img className='logo_form' src={logo} alt='logo' />
    <Form>
      <FormText className='title_form'>Iniciar Sesión</FormText>
      <FormGroup className='email_form'>
        <Label for='email'>Correo electrónico</Label>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='carlosmrtz@gmail.com'
        />
      </FormGroup>
      <FormGroup className='password_form'>
        <Label for='password'>Contraseña</Label>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='*******************'
        />
      </FormGroup>

      <div className='footer_form'>
        <Button className='submit_form'>INICIAR SESIÓN</Button>

        <FormGroup className='signup_form'>
          <Label for='registrate'>¿Aún no tienes cuenta?</Label>
          <Button id='registrate' color='link'>
            Regístrate
          </Button>
        </FormGroup>

        <Button className='forgot_form' id='forgot' color='link'>
          ¿Olvidaste la contraseña?
        </Button>
      </div>
    </Form>
  </div>
);

export default Forma;
