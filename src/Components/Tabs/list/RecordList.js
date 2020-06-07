import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class RecordList extends Component{
    render(){
        return (
            <tr>
                <td className="name"><b>
                    {this.props.obj.fname}</b>
                </td>
                <td><b>
                    {this.props.obj.pnumber}</b>
                </td>
                <td><b>
                    {this.props.obj.age}</b>
                </td>
                <td><b>
                    {this.props.obj.gender}</b>
                </td>
                <td><b>
                    {this.props.obj.travel}</b>
                </td>
                <td><b>
                    {this.props.obj.crowd}</b>
                </td>
                <td><b>
                    {this.props.obj.symptoms}</b>
                </td>
                <td className="bt">
                    <button className="btn btn-danger"><Link to ='/Covid-19-Tracker/' className="bj" >Back</Link></button>
                </td>
            </tr>
        )
    }
}
export default RecordList