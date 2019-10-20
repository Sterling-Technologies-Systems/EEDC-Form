
import React, { Component } from 'react';
import {Icon, Input, } from 'antd';
import {Card, Form, Button, Checkbox  } from 'semantic-ui-react'
import {egrid} from '../src/img/egrid.jpg'
class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            getFieldDecorator: '',
            emailAddress: '',
            password: ''
        }
    }

    changeText = (event) => {
        this.setState({
          [event.target.name]: [event.target.value]
        });

        console.log([event.target.value]);
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
        const BackgroundHead = {
            height: '100vh', 
            paddingTop: '10%'
        }

    
        return ( 
     <div className="container-fluid bg-cover" style={BackgroundHead}>
                     <div className="col-md-4 my-auto mx-auto ml-auto mr-auto pt-5">

             <Card className="mt-5 pt-3 pb-3" style={{width: '100%'}}>
 
                <Card.Content>

                <h4>Login to your Account</h4>
                <hr/>
                        <Form>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='Email Address' name="emailAddress" onChange={this.changeText}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' name="password" onChange={this.changeText}/>
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