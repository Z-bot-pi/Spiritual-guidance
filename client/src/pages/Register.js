import { Input, Form, Button } from 'antd';  // Ensure Button is imported from antd
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

function Register() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'>Pleasure To Meet You</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password' />
          </Form.Item>

          <Form.Item>
            <Button className='primary-button my-2' htmlType='submit'>
              REGISTER
            </Button>

            <Link to='/login' className='anchor mt-2'>CLICK HERE TO LOGIN</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
