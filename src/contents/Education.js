import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Engineering" where="Kerala Technical University" from="July 2020" to="Present"/>
            <Widecard title="SSLC | HSC" where="SSV Higher Secondary School" from="2011" to="2019"/>
            </div>
            )
        }
    }
    
export default Education
    