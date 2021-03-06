import React from 'react';

import {Link} from 'react-router-dom'
import './App.css';

import { Col, Card, CardHeader, Jumbotron } from "reactstrap";
import { Steps, Button, message } from 'antd';
import "antd/dist/antd.css";

import Content from './Personal/content'
import Landloard from './Personal/Landloard'
import ConditionsRegulations from './Personal/Conditions_Regulations'

import Navigation from '../src/Navigation/Navigation'

const { Step } = Steps;

const steps = [
  {
    title: 'Personal Information',
    content: <Content/>,
  },
  {
    title: 'Landlord',
    content: <Landloard/>,
  },
  {
    title: 'Conditions and Regulations',
    content: <ConditionsRegulations/>,
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
      <Navigation/>
      <Jumbotron className="bg-primary" style={{borderRadius: '0px', height: '200px'}}>
      
      </Jumbotron>
        <Col md={8} className="ml-auto mr-auto" style={{marginTop: '-130px'}}>
            <Card className="shadow mb-5">
          
                <CardHeader>
                    <Steps current={current} >
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                </CardHeader>
                <div className="steps-content">{steps[current].content}</div>
                <div className="card-footer mt-0 pt-3 steps-action">
                 
                  {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                      Previous
                    </Button>
                  )}

                  {current < steps.length - 1 && (
                    <Button type="primary" style={{float:'right'}} onClick={() => this.next()}>
                      Next
                    </Button>
                  )}

                   {current === steps.length - 1 && (
                    <Button type="primary"  style={{float:'right'}} onClick={() => message.success('Processing complete!')}>
                      Done
                    </Button>
                  )}
                </div>
              
            </Card>
        </Col>
      </div>
    );
  }
}
   
export default App;
