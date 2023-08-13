import React from 'react';
import { Container } from 'react-bootstrap';
import Phones from './Phones';

const home = () => {
  return (
    <>
    <Container style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <h1>New Arrivals!!!</h1>
    </Container>
    <Container style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <Phones/>
    </Container>
    </>
    
  )
}

export default home