import React from 'react';
import { Container } from 'react-bootstrap';
import phones from './phoneData';
import { Link, useParams } from 'react-router-dom';

const Phone = () => {
    // console.log(useParams());
    const {id} =useParams();
    const cardInfo = phones.find((cardInfo)=>cardInfo.id === +id);
  return (
    <Container style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <div className="card" style={{width: '18rem'}}>
                <img src={cardInfo.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{cardInfo.name}</h5>
                    <p className="card-text">{cardInfo.description}</p>
                    <h5 className="card-text">${cardInfo.price}</h5>
                    <Link to={`/`}>
                    <button className="btn btn-primary">Buy Later :( </button>
                    </Link>
                </div>
            </div>
        </Container>            
  )
}

export default Phone