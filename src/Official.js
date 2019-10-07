
import React, { Component } from 'react'
import { Form, Button, Input, Label} from 'semantic-ui-react'

export default class Official extends Component {
       constructor() {
           super();
           this.state = {
               name: "",
               Appliances: [{
                   name: ""
               }]
           };
       }
            handleApplianceNameChange = idx => evt => {
                const newAppliances = this.state.Appliances.map((Appliance, sidx) => {
                    if (idx !== sidx) return Appliance;
                    return {
                        ...Appliance,
                        name: evt.target.value
                    };
                });

                this.setState({
                    Appliances: newAppliances
                });
            };

            handleSubmit = evt => {
                const {
                    name,
                    Appliances
                } = this.state;
                alert(`Incorporated: ${name} with ${Appliances.length} Appliances`);
            };

            handleAddAppliance = () => {
                this.setState({
                    Appliances: this.state.Appliances.concat([{
                        name: ""
                    }])
                });
            };

            handleRemoveAppliance = idx => () => {
                this.setState({
                    Appliances: this.state.Appliances.filter((s, sidx) => idx !== sidx)
                });
            };
  render() {
    return (
      <div className="pl-4 pr-4">
        
          <Form>
                    


  <h5 className="text-uppercase mb-2">To be completed by Commercial Officer</h5>
                     {this.state.Appliances.map((Appliance, idx) => (
          <div className="Appliance">
              <Form.Group widths='equal'>
            
                    <Form.Field>
                        <label>Type of Application</label>
                        <select>
                            <option>New Service</option>
                             <option>Additional loan/Reproduction</option>
                              <option>Change of Customer</option>
                               <option>Additional Meter</option> 
                               <option>Change of Tariff</option>
                                <option>Conversion from 1 phase to 3 phase to MD Meter</option>
                                 <option>Is Property Earthed</option>
                                <option>Planning Permission (New property)</option>
                        
                        </select>
                    </Form.Field>
                    <Form.Input
                        fluid
                        type="checkbox"
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Tick'
                        placeholder='Tick'
                    />

                  
         
            <Button small className="btn-sm"
              type="button"
              onClick={this.handleRemoveAppliance(idx)}
            >
              -
            </Button>
                       </Form.Group>
          </div>
        ))}
        <Button primary
          onClick={this.handleAddAppliance}
        >
          New Application
        </Button>

            <Form.Group widths='equal' className="mt-2">
                        <Form.Field>
                        <label>Existing Load</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>KWH</Label>
                            </Input>
                        </Form.Field>

                       <Form.Field>
                        <label>Additional/Reduction Load</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>KWH</Label>
                            </Input>
                        </Form.Field>

                         <Form.Field>
                        <label>Total Load</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>KWH</Label>
                            </Input>
                        </Form.Field>
                      </Form.Group>

                        <Form.Group widths='equal' className="mt-2">
                        <Form.Field>
                            <label>CUSTOMERS PREFERENCE/PREFERRED METHOD OF PAYMENT</label>
                            <select>
                                <option>Cheque</option>
                                <option>ATM</option>
                                <option>POS</option>
                                <option>Online</option>
                                <option>Cash Deposit</option>
                            </select>
                        </Form.Field>

                          <Form.Field>
                            <label>PREFERRED METHOD OF RECEIVING BILLS: BILLS DELIVERY TO THE HOUSE</label>
                            <select>
                             <option>Bills delivery to house</option>
                                <option>Bills sent by Email</option>
                                <option>Bills sent by SMS</option>
                                <option>PVC</option>
                            </select>
                        </Form.Field>

                        </Form.Group>

                         <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Customer Identification No.'
                            placeholder='Customer Identification No.'
                        />

                       <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='GPS coordinate'
                            placeholder='GPS coordinate'
                        />
                      </Form.Group>

                       <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Remark/ Recommendation</label>
                            <textarea placeholder="Remark/ Recommendation"></textarea>
                        </Form.Field>

                       <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Original of this application received by'
                            placeholder='GPS coordinate'
                        />
                      </Form.Group>

                      <Form.Group widths='equal'>
                      <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Designation'
                            placeholder='Designation'
                        />

                       <Form.Input
                            fluid
                            type="date"
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Date'
                            placeholder='Date'
                        />
                      </Form.Group>


<br/><br/>
                      <h3>TO BE COMPLETED BY METER SUPERVISOR</h3>
                      <hr/>

                      <Form.Group widths='equal'>
                        <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='Meter No.'
                                placeholder='Meter No.'
                            />

                        <Form.Input
                                fluid
                                type="date"
                                id='form-subcomponent-shorthand-input-first-name'
                                label='Account No.'
                                placeholder='Account No.'
                            />
                      </Form.Group>


                       <Form.Group widths='equal'>
                        <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='METER READING ON THE LAST BILL'
                                placeholder='METER READING ON THE LAST BILL'
                            />

                        <Form.Input
                                fluid
                                type="date"
                                id='form-subcomponent-shorthand-input-first-name'
                                label='FINAL METER READING ON (DATE):'
                                placeholder='FINAL METER READING ON (DATE):'
                            />

                             <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='Final METER READING'
                                placeholder='Final meter reading '
                            />
                      </Form.Group>


                        <Form.Group widths='equal'>
                        <Form.Input
                                fluid
                                type="date"
                                id='form-subcomponent-shorthand-input-first-name'
                                label='Name'
                                placeholder='Name'
                            />

                             <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='Designation'
                                placeholder='Designation'
                            />
                      </Form.Group>

                      <h5>To be completed by credit control section</h5>
                      <hr/>

                         <Form.Group widths='equal'>
                             <Form.Field>
                        <label>The latest amount on bill is</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Month</Label>
                            </Input>
                        </Form.Field>

                               <Form.Field>
                        <label>Amount paid</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>
                      </Form.Group>

                         <Form.Group widths='equal'>
                             <Form.Field>
                        <label>The Outstanding bill is #</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Month</Label>
                            </Input>
                        </Form.Field>

                               <Form.Field>
                        <label>Final Bill as per part (b) above is #</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>
                      </Form.Group>

                        <Form.Group widths='equal'>
                             <Form.Field>
                        <label>The total now due of #</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Month</Label>
                            </Input>
                        </Form.Field>

                               <Form.Field>
                        <label>Final Vide eedc machine receipt no.</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>
                      </Form.Group>


                        <Form.Group widths='equal'>
                             <Form.Field>
                        <label>Was settled on</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input type="date" />
                                <Label>Month</Label>
                            </Input>
                        </Form.Field>

                               <Form.Field>
                        <label>Final Vide eedc machine receipt no</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>

                         <Form.Field>
                        <label>of</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>
                      </Form.Group>


                       <Form.Group widths='equal'>
                             <Form.Field>
                        <label>#</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Month</Label>
                            </Input>
                        </Form.Field>

                               <Form.Field>
                        <label>Has not been select but transferred to the account of</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>
                      </Form.Group>



                     <Form.Group widths='equal'>
                        <Form.Field>
                        <label>Account No.</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                            </Input>
                        </Form.Field>

                        <Form.Field>
                        <label>Meter No.</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                            </Input>
                        </Form.Field>
                      </Form.Group>

                         <Form.Group widths='equal'>
                        <Form.Field>
                        <label>Name</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                            </Input>
                        </Form.Field>

                        <Form.Field>
                        <label>Address</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                            </Input>
                        </Form.Field>
                      </Form.Group>

<h5>THE APPLICATION IS HEREBY CLEARED FOR FURTHER PROCESSING</h5>
                        <Form.Group>
                        <Form.Field>
                        <label>Date</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input type="date" />
                            </Input>
                        </Form.Field>
                      </Form.Group>


                      <h5>Final Approval</h5>
                      <h6>Checked By:</h6>
                      <Form.Group widths='equal'>
                        <Form.Field>
                        <label>Name</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>

                        <Form.Field>
                        <label>Designation</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                            </Input>
                        </Form.Field>

                        <Form.Field>
                        <label>Date</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input type="date" />
                            </Input>
                        </Form.Field>
                      </Form.Group>

                      <h6>Approved By:</h6>
                      <Form.Group widths='equal'>
                        <Form.Field>
                        <label>Name</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                                <Label>Amount</Label>
                            </Input>
                        </Form.Field>

                        <Form.Field>
                        <label>Designation</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input />
                            </Input>
                        </Form.Field>

                        <Form.Field>
                        <label>Date</label>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <input type="date" />
                            </Input>
                        </Form.Field>
                      </Form.Group>
        </Form>

      </div>
    )
  }
}
