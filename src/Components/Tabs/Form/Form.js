import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faMobileAlt, faHandSpock } from '@fortawesome/fontawesome-free-solid'
import { Form, Col, InputGroup, Button } from 'react-bootstrap'
import {FooterPage} from '../../Footerfile/Footer'
import Swal from 'sweetalert2'
import axios from 'axios'

export class Formdata extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            fname: '',
            pnumber: '',
            age: '',
            gender: '',
            travel: '',
            crowd: '',
            symptoms: '', 

        }
    }
    handleFormSubmit( event ) {
        event.preventDefault();
        const obj ={
            fname: this.state.fname,
            pnumber: this.state.pnumber,
            age: this.state.age,
            gender: this.state.gender,
            travel: this.state.travel,
            crowd: this.state.crowd,
            symptoms: this.state.symptoms,
        }
        if(!obj.fname)
        alert("Plaease Fill The Name");
        else{
        if(!obj.pnumber)
        alert("Plaease Fill The Number");
        else{
        if(!obj.age)
        alert("Plaease Fill The Age");
        else{
        if(!obj.gender)
        alert("Plaease Fill The Gender");
        else{
        if(!obj.travel)
        alert("Plaease Fill The Travel History");
        else{
        if(!obj.crowd)
        alert("Plaease Fill The Crowd Realted Infomration");
        else{
        if(!obj.symptoms)
        alert("Plaease Fill The Symptoms");
        }}}}}}
        if(5555555555>obj.pnumber.length>10000000000)
        alert("Enter A Valid Number");
        if(obj.age>100)
        alert("Enter A Valid Age");
        if(!(obj.gender==='male' || obj.gender==='Male' || obj.gender==="Female" || obj.gender==="female" || obj.gender==="others" || obj.gender==="Others")){
        alert("Enter A Valid Gender Option");
        }
        if(!(obj.travel==='Yes' || obj.travel==='yes' || obj.travel==='No' || obj.travel==='no'))
        alert("Enter A Valid Travel Option");
        if(!(obj.crowd==='Yes' || obj.crowd==='yes' || obj.crowd==='No' || obj.crowd==='no'))
        alert("Enter A Valid Crowd Option");
        if(!(obj.symptoms==='Cough' || obj.symptoms==='Fever' || obj.symptoms==='BreathingIssue' || obj.symptoms==='breathingIssue' || obj.symptoms==='None' || obj.symptoms==='cough' || obj.symptoms==='fever' || obj.symptoms==='Breathingissue' || obj.symptoms==='breathingissue' || obj.symptoms==='none'))
        alert("Enter A Valid Symptom");
        else{
        if((obj.symptoms==='Cough' || obj.symptoms==='Fever' || obj.symptoms==='BreathingIssue' || obj.symptoms==='breathingIssue' || obj.symptoms==='cough' || obj.symptoms==='fever' || obj.symptoms==='Breathingissue' || obj.symptoms==='breathingissue') && (obj.crowd==='Yes' || obj.crowd==='yes' ) && (obj.travel==='Yes' || obj.travel==='yes' ))

        Swal.fire({
            html: ' <br/>You are advised for testing as your infection risk is high.<br/> Please call the toll free help line<b> --> 1075 </b> to shedule your testing. <br/>Do isolate yourself and Log temperature, avoid contacting with anyone.<br/> <br/><b># Stay Home Stay Safe <br/> Central Helpline Number <br/>for corona-virus --> +91-11-23978046</b>',
            title: 'You Are At a High Risk From Corona Virus',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'OK',
          })
        
        else if((obj.symptoms==='Cough' || obj.symptoms==='Fever' || obj.symptoms==='BreathingIssue' || obj.symptoms==='breathingIssue' || obj.symptoms==='cough' || obj.symptoms==='fever' || obj.symptoms==='Breathingissue' || obj.symptoms==='breathingissue') && ((obj.crowd==='No' || obj.crowd==='no' ) || (obj.travel==='No' || obj.travel==='no' )))

        Swal.fire({
            html: ' <br/>You have a chance to get infected by Covid-19 So please take care of your health and get your health checkup as soon as possible <br/>Avoid any kind of contact with anyone even with your family before consulting a doctor.<br/> <br/><b># Stay Home Stay Safe <br/> Central Helpline Number <br/>for corona-virus --> +91-11-23978046</b>',
            title: 'You Have Medium Risk From Corona Virus',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'OK',
          })

        else if((obj.symptoms==='None' || obj.symptoms==='none' ) && ( obj.crowd==='no' || obj.crowd==='No' ) && ( obj.travel==='no' || obj.travel==='No'))

        Swal.fire({
            html: ' <br/> With timely medical intervention, safety and with good hygiene we can beat the spread of Coronavirus.<br/>Please help us to fight against Covid-19 by staying at home and taking care of yourself and your Nation. <br/> <br/><b># Stay Home Stay Safe <br/> Central Helpline Number <br/>for corona-virus --> +91-11-23978046</b>',
            title: 'You Have Low Risk From Corona Virus',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK',
          })
        
        else if((obj.symptoms==='None' || obj.symptoms==='none' ) && (( obj.crowd==='yes' || obj.crowd==='Yes' ) || ( obj.travel==='yes' || obj.travel==='Yes')))
       
        Swal.fire({
            html: ' <br/>You have a chance to get infected by Covid-19 So please take care of your health and get your health checkup as soon as possible <br/>Avoid any kind of contact with anyone even with your family before consulting a doctor.<br/> <br/><b># Stay Home Stay Safe <br/> Central Helpline Number <br/>for corona-virus --> +91-11-23978046</b>',
            title: 'You Have Medium Risk From Corona Virus',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'OK',
          })



       
    //    console.log(obj);
       
       axios.post('/test/index.php', obj)
        .then(Response =>
            console.log(Response.data));

        }

        
        
            this.setState({fname: '' })
            this.setState({pnumber: ''})
            this.setState({age: ''})
            this.setState({gender: ''})
            this.setState({travel: ''})
            this.setState({crowd: ''})
            this.setState({symptoms: ''})
        
  }
  render() {
    return (
    <div className="form">
          <div className="top">Covid-19 Health Tracker</div>
          <div className="info">
       <Form onSubmit={this.onSubmit} >
                   <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUserTie} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            required
                                type="text"
                                placeholder="Full Name"
                                
                                id="fname"
                                value={this.state.fname}
                                onChange={e => this.setState({ fname: e.target.value })}
                                />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            required
                                type="pnumber"
                                placeholder="Mobile Number"
                                
                                id="pnumber"
                                value={this.state.pnumber}
                                onChange={e => this.setState({ pnumber: e.target.value })}
                            />
                        </InputGroup>
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faHandSpock} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="number"
                                placeholder="Age"
                                required
                                id="age"
                                value={this.state.age}
                                onChange={e => this.setState({ age: e.target.value })}
                            />
                        </InputGroup>
                    </Form.Group>

                    <p className="heading">Gender</p>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faHandSpock} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Male Female Others"
                                required
                                id="gender"
                                value={this.state.gender}
                                onChange={e => this.setState({ gender: e.target.value })}
                            />
                        </InputGroup>
                    </Form.Group>
                    <br></br>
                    <p className="heading">ANY TRAVEL HISTORY IN LAST 15 DAYS</p>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faHandSpock} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Yes or No"
                                required
                                id="travel"
                                value={this.state.travel}
                                onChange={e => this.setState({ travel: e.target.value })}
                            />
                        </InputGroup>
                    </Form.Group>
                    <br></br>
                    <p className="heading">GATHERED IN A CROWD ?</p>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faHandSpock} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Yes or No"
                                required
                                id="crowd"
                                value={this.state.crowd}
                                onChange={e => this.setState({ crowd: e.target.value })}
                            />
                        </InputGroup>
                    </Form.Group>
                    <br></br>
                    <p className="heading">SYMPTOMS</p>

                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faHandSpock} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Cough, Fever, BreathingIssue, None"
                                required
                                id="symptoms"
                                value={this.state.symptoms}
                                onChange={e => this.setState({ symptoms: e.target.value })}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                    <Col sm={{ span: 12}}>
                    <Button variant="danger"  type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit">Submit</Button>
                    </Col>
                    </Form.Group>

                    
        </Form>
      </div>
      <FooterPage/>
      </div>
    );
  }
}

export default Formdata;