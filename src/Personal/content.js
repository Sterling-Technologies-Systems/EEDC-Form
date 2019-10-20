import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class Content extends Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                       surname: '',
                       otherNames: '',
                       address: '',
                       landmark: '',
                       lga: '',
                       customerAddress: '',
                       accountNo: '',
                       metricNo: '',
                       district: '',
                       employerName: '',
                       employerAddress: '',
                       empLandmark: '',
                       lgaEmp: '',
                       pinCode: '',
                       contactTel: '',
                       mobileNo: '',
                       personalIdentification: ''


                   }
                 }
                 changeText = event => {
                   this.setState({
                     [event.target.name]: [event.target.value]
                   });

                   console.log([event.target.value]);
                 };

                 render() {
                   return (
                     <div className="pl-4 pr-4">
                       <Form>
                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="surname"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Surname"
                             placeholder="Surname"
                           />
                           <Form.Input
                             fluid
                             name="otherNames"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-last-name"
                             label="Other Names"
                             placeholder="Other Names"
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="address"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Address"
                             placeholder="Address"
                           />
                           <Form.Input
                             fluid
                             name="landmark"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-last-name"
                             label="Landmark"
                             placeholder="Landmark"
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="lga"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="LGA"
                             placeholder="LGA"
                           />
                           <Form.Field>
                             <label>Type oF Premises</label>
                             <select className="form-control">
                               <option>Duplex</option>
                               <option>3 Bedroom Flat</option>
                               <option>2 Bedroom Flat</option>
                               <option>Single Room</option>
                             </select>
                           </Form.Field>
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Field>
                             <label>Use of Premises</label>
                             <select className="form-control">
                               <option>Residential</option>
                               <option>Commercial</option>
                               <option>Industrial</option>
                               <option>Street Light</option>
                             </select>
                           </Form.Field>
                         </Form.Group>

                         <div className="col-md-12 pl-0 pt-4 pb-3">
                           <h3>Previous Details</h3>
                           <hr />
                         </div>
                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="customerAddress"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Customer Address"
                             placeholder="Customer Address"
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="accountNo"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Account No."
                             placeholder="Account No."
                           />

                           <Form.Input
                             fluid
                             name="metricNo"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Metric No."
                             placeholder="Metric No."
                           />

                           <Form.Input
                             fluid
                             name="district"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="District"
                             placeholder="District"
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="employerName"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Name of Employer"
                             placeholder="Name of Employer"
                           />

                           <Form.Input
                             fluid
                             name="employerAddress"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Address of Employer"
                             placeholder="Address of Employer"
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="empLandmark"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Landmark"
                             placeholder="Landmark"
                           />

                           <Form.Input
                             fluid
                             name="lgaEmp"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="LGA"
                             placeholder="LGA"
                           />

                           <Form.Input
                             fluid
                             name="pinCode"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Pin Code"
                             placeholder="Pin Code"
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                           <Form.Input
                             fluid
                             name="contactTel"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Contact Tel No."
                             placeholder="Contact Tel No."
                           />

                           <Form.Input
                             fluid
                             name="mobileNo"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Mobile No."
                             placeholder="Mobile No."
                           />
                         </Form.Group>

                         <Form.Group widths="equal">
                          

                           <Form.Field>
                             <label>Means of Identification</label>
                             <select className="form-control">
                               <option>Intl Passport</option>
                               <option>Drivers Licence</option>
                               <option>PVC</option>
                             </select>
                           </Form.Field>

                           <Form.Input
                             fluid
                             name="personalIdentification"
                             onChange={this.changeText}
                             id="form-subcomponent-shorthand-input-first-name"
                             label="Personal Identification No."
                             placeholder="Personal Identification No."
                           />
                         </Form.Group>
                       </Form>
                     </div>
                   );
                 }
               }
