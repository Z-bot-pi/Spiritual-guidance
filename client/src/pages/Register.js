import { Input, Form, Button } from 'antd';  // Ensure Button is imported from antd
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();
  // Function to handle form submission
  const onFinish = async (values) => {
    try {
      // Send a POST request to the backend API to register the user
      const response = await axios.post('/api/users/register', values);
      if (response.data.success) {
        toast.success(response.data.message); // Show success message if registration is successful
        toast('Redirecting to login page');
        navigate('/login'); // Redirect to the login page
      } else {
        toast.error(response.data.message); // Show error message if registration fails
      }
    } catch (error) {
      toast.error('Something went wrong'); // Show error message if there's a server error
    }
  };

  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'>Pleasure To Meet You</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
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
