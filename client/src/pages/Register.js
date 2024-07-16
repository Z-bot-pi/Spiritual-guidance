import { Input, Form } from 'antd';
import React from 'react';

function Register() {
  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'>Pleasure To Meet You</h1>
        <Form layout='vertical'>
          <Form.Item label='Name' name='name'>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
