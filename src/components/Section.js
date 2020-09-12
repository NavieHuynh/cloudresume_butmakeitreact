import React from 'react';
import {Container} from 'react-bootstrap';

export default function Section(props){
    return(
        <Container className="sectioncontainer" fluid>
            <h1 className="sectiontitle">{props.title}</h1>
            {props.children}
        </Container>
    )
}