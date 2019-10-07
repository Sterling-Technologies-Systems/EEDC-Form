
import React, { Component } from 'react'
import { Form, Checkbox} from 'semantic-ui-react'

export default class Landloard extends Component {
    render() {
        return (
            <div className="p-4">
                   <Form>
                 <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label="Surname"
                            placeholder="Surname"
                        />

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Other Names'
                            placeholder='Other Names'
                        />
                      </Form.Group>

                       <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label="Phone"
                            placeholder="Phone"
                        />

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Email Address'
                            placeholder='Email Address'
                        />
                      </Form.Group>

                       <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label="NAME OF EMPLOYER/BUSINESS"
                            placeholder="Name of Employer/Business"
                        />

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Address of Employer'
                            placeholder='Address of Employer'
                        />
                      </Form.Group>

                          <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label="Meter Account No."
                            placeholder="Meter Account No."
                        />

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Customer Account'
                            placeholder='Customer Account'
                        />
                      </Form.Group>

                        <Form.Group widths='equal' className="mt-2">
                        <Form.Field>
                            <label>Personal Identification No.</label>
                            <select>
                                <option>International Passport</option>
                                <option>Driver's License</option>
                                <option>PVC</option>
                            </select>
                        </Form.Field>

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Customer Account'
                            placeholder='Customer Account'
                        />
                      </Form.Group>

                      <Form.Group widths='equal' className="mt-2">
                         <Form.Field>
                            <Checkbox label='I confirm that the Applicant is my tenant and certify his/her request for electricity supply and also accept to notify EEDC in writing when
                            he/she gives notice (in writing or otherwise) of termination of his/her tenancy agreement, failing which any outstanding debt or dues on
                            his/her account may be debited to my own account.' />
                         </Form.Field>

                        <Form.Input
                            fluid
                            type="date"
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Date'
                            placeholder='Date'
                        />
                      </Form.Group>

                      <hr/>

                       <Form.Group  widths='equal'>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Customer Name'
                            placeholder='Customer Name'
                        />

                       <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Application No.'
                            placeholder='Application No.'
                        />
                      </Form.Group>

                       <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Address'
                            placeholder='Address'
                        />

                       <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='District'
                            placeholder='District'
                        />
                      </Form.Group>

                        <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Name of Officer'
                            placeholder='Address'
                        />

                       <Form.Input
                            fluid
                            type="date"
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Date'
                            placeholder='Date'
                        />
                      </Form.Group>

                    </Form>
            </div>
        )
    }
}
