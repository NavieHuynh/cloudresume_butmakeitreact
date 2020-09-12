import React from 'react';
import {Container} from 'react-bootstrap';

export default function SectionItem(props){
    
    return(
        <Container className="section-item-container" fluid>
            <img src={props.logo} alt="No logo added" className="section-item-logo"></img>
            <div className="section-item-information">
                <div className="section-item-header">
                <p className="section-item-title">{props.title}</p>
                <a className="section-item-company" href={props.companyurl}>{props.company}</a>
                <p className="section-item-location">{props.location}</p>
                <p className="section-item-date">{props.startdate} - {props.enddate}</p>
                </div>
                <br/>
                <p className="section-item-description">{props.children}</p>
            </div>
        </Container>
    )
}