import { Input, Form, Button } from 'antd';  // Ensure Button is imported from antd
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';
import toast from 'react-hot-toast';
import axios from  'axios';
function Login() {
  const navigate = useNavigate();
    const onFinish = async(values) => {
    try {
      
      const response = await axios.post('/api/users/login', values);
      if (response.data.success) {
        toast.success(response.data.message); 
        toast('Redirecting to home page');
        localStorage.setItem('token', response.data.token);
        navigate('/'); 
      } else {
        toast.error(response.data.message); 
      }
    } catch (error) {
      toast.error('Something went wrong'); 
    }
  }

  return (
    <div className='authentication'>
      <div className='authentication-form card p-4'>
        <h1 className='card-title'>Glad To See You Back</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Password' type='password' />
          </Form.Item>

          <Form.Item>
            <Button className='primary-button my-2' htmlType='submit'>
              LOGIN
            </Button>

            <Link to='/register' className='anchor mt-2'>CLICK HERE TO REGISTER</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
