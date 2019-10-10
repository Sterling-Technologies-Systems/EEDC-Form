
import React, { Component } from 'react';
import {Icon, Input, } from 'antd';
import {Card, Form, Button, Checkbox  } from 'semantic-ui-react'

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            getFieldDecorator: ''
        }
    }

     handleSubmit = e => {
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
             }
         });
     };


    render() {
       
        return (
     <div className="container-fluid bg-primary" style={{height: '100vh', paddingTop: '10%'}}>
                     <div className="col-md-4 my-auto mx-auto ml-auto mr-auto pt-5">

             <Card className="mt-5" style={{width: '100%'}}>
 
                <Card.Content>

                <h4>Login to your Account</h4>
                <hr/>
                        <Form>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='Email Address' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>

    <Button type='submit'>Login</Button>
  </Form>
                </Card.Content>
            </Card>
            </div>
       
   </div>
        );
    }
}

export default Login;