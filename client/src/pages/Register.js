import { Input } from 'antd';
import React from 'react';
import { Form } from 'react-router-dom';

function Register() {
    return (
    <div className='authentication'>
         <div className='authentication-form card p-2'>
            <h1 className='card-title'>Pleasure To Meet You</h1>
            <Form>
                
                     <Form.Item label='Name' name='name'>
                         <Input placeholder='Name'/>           
                     </Form.Item>

             </Form>
                </div>
                
         </div>
    );
}

export default Register;
