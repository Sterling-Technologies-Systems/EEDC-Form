import React from 'react';

import './App.css';

import {Col, Card} from 'reactstrap'
import { Steps, Button, message } from 'antd';
import "antd/dist/antd.css";

import Content from './content'
import Declaration from './Declaration'
import Landloard from './Landloard'
import Official from './Official'
import ConditionsRegulations from './Conditions_Regulations'

const { Step } = Steps;

const steps = [
  {
    title: 'Personal Information',
    content: <Content/>,
  },
  {
    title: 'Declaration',
    content: <Declaration/>,
  },
  {
    title: 'Landlord',
    content: <Landloard/>,
  },
  {
    title: 'Official Use Only',
    content: <Official/>,
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
        <Col md={8} className="ml-auto mr-auto">
            <Card className="shadow mb-5">

                <div className="p-2">
                    <Steps current={current}>
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                </div>
                <div className="steps-content">{steps[current].content}</div>
                <div className="card-footer mt-0 pt-3 steps-action">
                 
                  {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                      Previous
                    </Button>
                  )}

                  {current < steps.length - 1 && (
                    <Button type="primary" className="" onClick={() => this.next()}>
                      Next
                    </Button>
                  )}

                   {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
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
