import React, {Component} from 'react';
import axios from 'axios';
import RecordList from './RecordList';

export class View extends Component {
    constructor(props){
        super(props);
        this.state = {formdata: []};
    }
    componentDidMount(){
        axios.get('/test/list.php')
        .then(response => {
            this.setState({ formdata: response.data});
        })
        .catch(function (error){
            console.log(error);
        })

    }
    
    usersList(){
        return this.state.formdata.map(function(object, i){
            return <RecordList obj={object} key={i} />;
        });
        
    }
    
  state = {
    name: "",
    showResults: false
  };
  handleFormSubmit( event ) {
    event.preventDefault();
    const obj ={
        name: this.state.name,
    }      
const encodedString = new Buffer(obj.name).toString('base64');
           if(encodedString==="YWRtaW4=")
           {
            this.setState({
                showResults: this.state.name === null ? false : true
            })     
          }
          else{
              alert("Try Again With the Correct Password");
          }

        }
        
    
    
    render() {
        return (
            <form className="admin">
                <p>Enter the Admin Password</p>
        <input
        required
        type="password"
        placeholder="Password"
        id="pass"
        value={this.state.fname}
        onChange={e => this.setState({ name: e.target.value })}
        />
        
        <button type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit">Check</button>
        <div
          className="showName"
          style={{ display: this.state.showResults ? "block" : "none" }}>

                <p className="hed" align="center"><b><u>User List</u></b></p>
                <table className="tablee table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Travel</th>
                            <th>Crowd Info</th>
                            <th>Symptoms</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList() }
                    </tbody>
                </table>
        </div>
      </form>        
      )
    }
}

export default View;