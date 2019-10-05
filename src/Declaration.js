

import React, { Component } from 'react'
import { Form, Button, Input} from 'semantic-ui-react'

export default class Declaration extends Component {
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
      return { ...Appliance, name: evt.target.value };
    });

    this.setState({ Appliances: newAppliances });
  };

  handleSubmit = evt => {
    const { name, Appliances } = this.state;
    alert(`Incorporated: ${name} with ${Appliances.length} Appliances`);
  };

  handleAddAppliance = () => {
    this.setState({
      Appliances: this.state.Appliances.concat([{ name: "" }])
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
                    



                     {this.state.Appliances.map((Appliance, idx) => (
          <div className="Appliance">
              <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Appliance</label>
                        <select>
                            <option>Light Point</option>
                             <option>Ceiling fan</option>
                              <option>Sockets outlets</option>
                               <option>Cooker</option>
                                <option>Water Heater</option>
                                 <option>Air Condition</option>
                                  <option>Freezer</option>
                                   <option>Dispenser</option>
                                    <option>Pressing Iron</option>
                                     <option>TV</option>
                                      <option>Pumping machine</option>
                                       <option>Refrigerator</option>
                                        <option>Washing Machine</option>
                                         <option>Microwave</option>
                                          <option>Toaster</option>
                                           <option>Electric Kettle</option>
                                            <option>Machinery</option>
                                             <option>Single Phase Motor</option>
                                              <option>Three Phase Motor</option>
                        </select>
                    </Form.Field>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Number'
                        placeholder='Number'
                    />

                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Watts'
                        placeholder='Watts'
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
          Add Appliance
        </Button>


         <Form.Group widths='equal' className="mt-2">
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        label='Total installed load'
                        placeholder='Total installed load'
                    />
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-last-name'
                        label='Watts'
                        placeholder='Watts'
                    />
                    </Form.Group>


                     <Form.Group widths='equal' className="mt-2">
                    <Form.Field>
                        <label>Requested Voltage</label>
                        <select>
                            <option>33KV</option>
                            <option>11KV</option>
                            <option>0.4KV</option>
                        </select>
                        </Form.Field>
                    
                         <Form.Field>
                        <label>Type of supply</label>
                        <select>
                            <option>1 Phase</option>
                            <option>3 Phase </option>
                        </select>
                        </Form.Field>
                    </Form.Group>


                    <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Name of Registered engineer/ Contractor'
                            placeholder='Name of Registered engineer/ Contractor'
                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='Address'
                            placeholder='Address'
                        />
                    </Form.Group>


                    <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='License'
                            placeholder='License'
                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='Category'
                            placeholder='Category'
                        />

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='Date'
                            placeholder='Date'
                        />
                    </Form.Group>


                    <Form.Group widths='equal' className="mt-2">
                    <Form.Field>
                        <label>Nature Of the property</label>
                        <select>
                            <option>Old</option>
                            <option>New</option>
                        </select>
                        </Form.Field>
                    
                         <Form.Field>
                        <label>Type of Property</label>
                        <select>
                            <option>Single House</option>
                            <option>Apartment </option>
                            <option>Terrace </option>
                            <option>Pump House </option>
                        </select>
                        </Form.Field>
                    </Form.Group>

                     <Form.Group widths='equal' className="mt-2">
                    <Form.Field>
                        <label>Does the property have planning permission</label>
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        </Form.Field>
                    
                         <Form.Field>
                        <label>Does Property have a meter</label>
                        <select>
                            <option>Yes</option>
                            <option>No </option>
                        </select>
                        </Form.Field>
                    </Form.Group>


                    <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Meter No.'
                            placeholder='Meter No.'
                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            label='Customer Account No.'
                            placeholder='Customer Account No.'
                        />

                         <Form.Field>
                        <label>Meter Type at Property</label>
                        <select>
                            <option>Pre-payment</option>
                            <option>Post Paid Meter </option>
                            <option>maximum Demand</option>
                        </select>
                        </Form.Field>
                    </Form.Group>

                      <Form.Group widths='equal' className="mt-2">
                        <Form.Field>
                            <label>Estimated Maximum Load For</label>
                         <Input
                            label={{ tag: true, content: 'Amperes per phase' }}
                            labelPosition='right'
                            placeholder='Estimated Maximum Load For'
                         />
                        </Form.Field>
                      </Form.Group>

                      <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Meter No.'
                            placeholder='Meter No.'
                        />

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label='Account No.'
                            placeholder='Account No.'
                        />
                      </Form.Group>
<hr/>

<p className="text-capitalize text-darken">I/WE HEREBY REQUEST THE ENUGU ELECTRICITY DISTRIBUTION COMPANY TO SUPPLY US WITH ELECTRICITY AT THE ADDRESS STATED AT
THE 1.2 ABOVE FOR THE PURPOSE STATED IN 1.4 ABOVE AND AGREE TO PAY ALL CHARGES MADE BY EEDC IN ACCORDANCE WITH THE
PREVAILING EEDC TARIFF OF SUPPLY AS APPROVED BY NIGERIAN ELECTRICITY REGULATORY COMMISSION (NERC).
<br/><br/>
I/WE CONFIRM THAT THE INFORMATION GIVEN IN PART 1 ABOVE IS TRUE IN ITS ENTIRETY AND AGREE THAT IF ANY PART OF IT IS FOUND
TO BE UNTRUE THE ELECTRICITY SUPPLY MAY BE DISCONTINUED.</p>


 <Form.Group widths='equal' className="mt-2">
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            label="Applicant's signature title"
                            placeholder="Applicant's signature title"
                        />

                        <Form.Input
                            fluid
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
