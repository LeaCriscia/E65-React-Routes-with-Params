import { Card } from 'react-bootstrap';
import { useState } from 'react';
import phones from './phoneData';
import Statelessbutton from './Statelessbutton';
import { Link } from 'react-router-dom';

const Phones = () => {
    //initialize variable/data
    const [activities, setactivities] = useState(phones);
  return (
    <>
    {activities.map((activity)=>{
        return (
            <Card key={activity.id} style={{ width:'18rem', display: 'flex', flexDirection:'comlumn', padding:5, margin:5}} >
            <Card.Img style={{height:200}} variant="top" src={activity.image}/>
            <Card.Body>
              <Card.Title>{activity.name}</Card.Title>
              <Card.Text style={{height: 250}} >{activity.description}</Card.Text>
              <Link to={`/phone/${activity.id}`}>
              <Statelessbutton color="primary" label={activity.name} display="inline-block" margin={10}/> 
              </Link>
            </Card.Body>
          </Card>
        );
    })};   
    </>
  )
}

export default Phones